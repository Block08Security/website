import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchAuditIndex } from '../pentest/loadAudits'
import { canonicalizeHost } from '../pentest/urlGuard'

const PendingAssessPage = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const host = canonicalizeHost(params.get('host') ?? sessionStorage.getItem('b08.pendingHost') ?? '')
  const [message, setMessage] = useState('Waiting for the Block08 toolkit to finish…')

  useEffect(() => {
    if (!host) {
      navigate('/assess')
      return
    }

    let cancelled = false
    const tick = async () => {
      const index = await fetchAuditIndex()
      const match = index.audits.find((item) => canonicalizeHost(item.hostname) === host)
      if (match && !cancelled) {
        navigate(`/audits/${match.id}`)
        return
      }
      if (!cancelled) {
        setMessage(`Still running against ${host}. This page refreshes automatically.`)
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
  }, [host, navigate])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container max-w-2xl mx-auto text-center">
          <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">Assessment queued</p>
          <h1 className="section-title">Toolkit in progress</h1>
          <p className="section-subtitle">{message}</p>
          <p className="text-gray-500 mb-8">
            Confirm the GitHub issue if a new tab opened. curl, openssl and dig are gathering evidence; the report is
            committed to this website when complete.
          </p>
          <Link to="/audits" className="btn-secondary">
            Open public registry
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PendingAssessPage
