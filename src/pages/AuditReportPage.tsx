import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReportView from '../components/ReportView'
import { versionsForHost } from '../pentest/groupAudits'
import { fetchAuditIndex, fetchAuditReport } from '../pentest/loadAudits'
import type { AssessmentReport, AuditSummary } from '../pentest/types'

const AuditReportPage = () => {
  const { reportId } = useParams()
  const [report, setReport] = useState<AssessmentReport | null>(null)
  const [versions, setVersions] = useState<AuditSummary[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    if (!reportId) {
      setError('Missing report reference')
      return
    }
    setError('')
    setReport(null)
    Promise.all([fetchAuditReport(reportId), fetchAuditIndex()])
      .then(([loaded, index]) => {
        setReport(loaded)
        setVersions(versionsForHost(index.audits, loaded.hostname))
      })
      .catch(() => setError('This report is not in the public registry yet.'))
  }, [reportId])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="pt-28 pb-20">
        <div className="section-container">
          {error && (
            <div className="card max-w-2xl mx-auto text-center">
              <p className="text-gray-300 mb-6">{error}</p>
              <Link to="/assess" className="btn-primary">
                Start an assessment
              </Link>
            </div>
          )}
          {report && <ReportView report={report} versions={versions} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AuditReportPage
