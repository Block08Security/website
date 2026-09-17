import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AssessGuide from '../components/AssessGuide'
import { versionsForHost } from '../pentest/groupAudits'
import { fetchAuditIndex } from '../pentest/loadAudits'
import { canonicalizeHost } from '../pentest/urlGuard'

const PendingAssessPage = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const host = canonicalizeHost(params.get('host') ?? sessionStorage.getItem('b08.pendingHost') ?? '')
  const baseline = Number(sessionStorage.getItem('b08.pendingBaseline') ?? '0')
  const [message, setMessage] = useState('Waiting for the Block08 toolkit to finish…')
  const [currentId, setCurrentId] = useState('')

  useEffect(() => {
    if (!host) {
      navigate('/assess')
      return
    }

    let cancelled = false
    const started = Date.now()

    const tick = async () => {
      const index = await fetchAuditIndex()
      const versions = versionsForHost(index.audits, host)
      const latest = versions[0]
      if (!latest) {
        if (!cancelled) {
          setMessage(`Still running against ${host}. This page refreshes automatically.`)
        }
        return
      }
      if (!cancelled) {
        setCurrentId(latest.id)
      }
      if ((latest.version ?? 1) > baseline && !cancelled) {
        navigate(`/audits/${latest.id}`)
        return
      }
      if (Date.now() - started > 10 * 60 * 1000 && !cancelled) {
        setMessage(
          `No new version was issued. ${host} matches the current report, remediate the live security surface, then retest.`,
        )
      } else if (!cancelled) {
        setMessage(`Still running against ${host}. A new version is published only if the site changed.`)
      }
    }

    void tick()
    const intervalId = window.setInterval(() => {
      void tick()
    }, 12000)

    return () => {
      cancelled = true
      window.clearInterval(intervalId)
    }
  }, [host, navigate, baseline])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">Assessment queued</p>
            <h1 className="section-title">Finish on GitHub, then wait here</h1>
            <p className="section-subtitle">{message}</p>
            <p className="text-gray-500 mb-8">
              If the new tab asked you to sign in, use your own GitHub account. On the issue page, leave the title as it
              is and click Submit new issue. This page refreshes on its own.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/audits" className="btn-secondary">
                Open public registry
              </Link>
              {currentId && (
                <Link to={`/audits/${currentId}`} className="btn-primary">
                  Current report
                </Link>
              )}
            </div>
          </div>
          <AssessGuide variant="pending" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PendingAssessPage
