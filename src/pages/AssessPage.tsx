import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GITHUB_REPO, IP_COOLDOWN_MS, LOCAL_IP_SCAN_KEY } from '../pentest/constants'
import { groupAuditsByHost } from '../pentest/groupAudits'
import { fetchAuditIndex } from '../pentest/loadAudits'
import { formatCooldown } from '../pentest/rateLimit'
import type { AuditIndex } from '../pentest/types'
import { canonicalizeHost, normalizeTarget } from '../pentest/urlGuard'

const AssessPage = () => {
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const [authorized, setAuthorized] = useState(false)
  const [index, setIndex] = useState<AuditIndex | null>(null)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetchAuditIndex()
      .then(setIndex)
      .catch(() => setIndex({ audits: [], hostCooldowns: {}, actorCooldowns: {} }))
  }, [])

  const recent = useMemo(() => groupAuditsByHost(index?.audits ?? []).slice(0, 6), [index])

  const hashValue = async (value: string): Promise<string> => {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('')
      .slice(0, 16)
  }

  const assertIpAllowance = async (isRetest: boolean) => {
    if (isRetest) {
      return null
    }
    let ip = 'unknown'
    try {
      const response = await fetch('https://api.ipify.org?format=json')
      if (response.ok) {
        const payload = (await response.json()) as { ip?: string }
        ip = payload.ip ?? 'unknown'
      }
    } catch {
      ip = 'unknown'
    }
    const hash = await hashValue(ip)
    const raw = localStorage.getItem(LOCAL_IP_SCAN_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as { hash: string; at: number }
      if (parsed.hash === hash && Date.now() - parsed.at < IP_COOLDOWN_MS) {
        throw new Error(
          `This network already started an assessment today. Try again in ${formatCooldown(IP_COOLDOWN_MS - (Date.now() - parsed.at))}.`,
        )
      }
    }
    return hash
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    setStatus('')
    try {
      if (!authorized) {
        throw new Error('Confirm you are authorized to test this website.')
      }
      if (!index) {
        throw new Error('Registry is still loading. Try again in a moment.')
      }
      const target = normalizeTarget(url)
      const host = canonicalizeHost(target.hostname)
      const existing = index?.audits
        .filter((item) => canonicalizeHost(item.hostname) === host)
        .sort((left, right) => (right.version ?? 1) - (left.version ?? 1))[0]
      const ipHash = await assertIpAllowance(Boolean(existing))
      const body = [
        '## Target URL',
        target.href,
        '',
        '## Authorization',
        'I confirm I am authorized to assess this website and that it is not a third-party system I do not own or have written permission to test.',
        '',
        '## Source',
        'block08.com free assessment',
      ].join('\n')
      const issueUrl = `https://github.com/${GITHUB_REPO}/issues/new?title=${encodeURIComponent(`[pentest] ${host}`)}&body=${encodeURIComponent(body)}`
      if (ipHash) {
        localStorage.setItem(LOCAL_IP_SCAN_KEY, JSON.stringify({ hash: ipHash, at: Date.now() }))
      }
      sessionStorage.setItem('b08.pendingHost', host)
      sessionStorage.setItem('b08.pendingBaseline', String(existing?.version ?? 0))
      setStatus('Opening the assessment queue. Keep this tab open — the public report will appear after the toolkit finishes.')
      window.open(issueUrl, '_blank', 'noopener,noreferrer')
      navigate(`/assess/pending?host=${encodeURIComponent(host)}`)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Could not start the assessment.')
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">Free external assessment</p>
            <h1 className="section-title">Website penetration test</h1>
            <p className="section-subtitle">
              Non-mutating black-box checks with curl, openssl and dig. One new website per visitor per day. A retest
              is published only after the live security surface changes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card max-w-3xl mx-auto mb-16">
            <label htmlFor="target" className="block text-sm font-semibold text-gray-300 mb-3">
              Website URL
            </label>
            <input
              id="target"
              type="text"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              className="w-full px-5 py-4 bg-dark-bg/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 mb-6"
              placeholder="https://example.com"
              required
            />
            <label className="flex items-start gap-3 text-sm text-gray-300 mb-8 text-left">
              <input
                type="checkbox"
                checked={authorized}
                onChange={(event) => setAuthorized(event.target.checked)}
                className="mt-1"
              />
              <span>
                I am authorized to have Block08 assess this website. I will not use this service against systems I do not
                own or have written permission to test. The resulting report is recorded in the public registry.
              </span>
            </label>
            {error && <p className="text-primary-400 mb-4">{error}</p>}
            {status && <p className="text-gray-400 mb-4">{status}</p>}
            <button type="submit" className="btn-primary w-full">
              Start free assessment
            </button>
            <p className="text-xs text-gray-500 mt-4">
              The Block08 toolkit runs in GitHub Actions against the live target. If headers, TLS, DNS, CORS or
              first-party scripts are unchanged, no new version is issued. A GitHub account is required so the queue
              cannot be flooded.
            </p>
          </form>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recently recorded assessments</h2>
              <Link to="/audits" className="text-primary-500 text-sm">
                View registry
              </Link>
            </div>
            {recent.length === 0 ? (
              <p className="text-gray-500">No public assessments yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {recent.map((group) => (
                  <Link key={group.host} to={`/audits/${group.latest.id}`} className="card">
                    <p className="text-white font-semibold">{group.latest.hostname}</p>
                    <p className="text-sm text-gray-400">
                      {group.latest.date} · {group.latest.overallRisk} · v{group.latest.version ?? 1}
                      {group.versions.length > 1 ? ` · ${group.versions.length} versions` : ''}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AssessPage
