import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { groupAuditsByHost } from '../pentest/groupAudits'
import { fetchAuditIndex } from '../pentest/loadAudits'
import type { HostAuditGroup } from '../pentest/groupAudits'

const AuditsPage = () => {
  const [groups, setGroups] = useState<HostAuditGroup[]>([])

  useEffect(() => {
    fetchAuditIndex()
      .then((index) => setGroups(groupAuditsByHost(index.audits)))
      .catch(() => setGroups([]))
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
              Every exported free assessment is recorded here. Retests after remediation appear as new versions of the
              same host.
            </p>
          </div>
          {groups.length === 0 ? (
            <div className="card text-center max-w-2xl mx-auto">
              <p className="text-gray-400 mb-6">No assessments have been published yet.</p>
              <Link to="/assess" className="btn-primary">
                Run a free assessment
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group) => {
                const total =
                  group.latest.findingCounts.Critical +
                  group.latest.findingCounts.High +
                  group.latest.findingCounts.Medium +
                  group.latest.findingCounts.Low +
                  group.latest.findingCounts.Info
                return (
                  <article key={group.host} className="card">
                    <p className="text-sm text-primary-500 mb-2">{group.latest.id}</p>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      <Link to={`/audits/${group.latest.id}`} className="hover:text-primary-400">
                        {group.latest.hostname}
                      </Link>
                    </h2>
                    <p className="text-gray-400 mb-4">
                      {group.latest.date} · {group.latest.overallRisk} · v{group.latest.version ?? 1}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">{total} findings on the current version</p>
                    {group.versions.length > 1 && (
                      <div className="flex flex-wrap gap-2">
                        {group.versions.map((version) => (
                          <Link
                            key={version.id}
                            to={`/audits/${version.id}`}
                            className="text-xs border border-white/15 px-2 py-1 text-gray-300 hover:border-primary-500 hover:text-white"
                          >
                            v{version.version ?? 1}
                          </Link>
                        ))}
                      </div>
                    )}
                  </article>
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
