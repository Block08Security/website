import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchAuditIndex } from '../pentest/loadAudits'
import type { AuditSummary } from '../pentest/types'

const AuditsPage = () => {
  const [audits, setAudits] = useState<AuditSummary[]>([])

  useEffect(() => {
    fetchAuditIndex()
      .then((index) => setAudits(index.audits))
      .catch(() => setAudits([]))
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="text-primary-500 font-bold tracking-widest uppercase mb-4">Public registry</p>
            <h1 className="section-title">Websites assessed by Block08</h1>
            <p className="section-subtitle">
              Every exported free assessment is recorded here for reference.
            </p>
          </div>
          {audits.length === 0 ? (
            <div className="card text-center max-w-2xl mx-auto">
              <p className="text-gray-400 mb-6">No assessments have been published yet.</p>
              <Link to="/assess" className="btn-primary">
                Run a free assessment
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audits.map((audit) => {
                const total =
                  audit.findingCounts.Critical +
                  audit.findingCounts.High +
                  audit.findingCounts.Medium +
                  audit.findingCounts.Low +
                  audit.findingCounts.Info
                return (
                  <Link key={audit.id} to={`/audits/${audit.id}`} className="card group">
                    <p className="text-sm text-primary-500 mb-2">{audit.id}</p>
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400">{audit.hostname}</h2>
                    <p className="text-gray-400 mb-4">
                      {audit.date} · {audit.overallRisk}
                    </p>
                    <p className="text-sm text-gray-500">{total} findings</p>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AuditsPage
