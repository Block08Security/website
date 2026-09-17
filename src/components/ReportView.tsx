import { Link } from 'react-router-dom'
import { riskTagline } from '../pentest/summarize'
import { SEVERITIES } from '../pentest/types'
import type { AssessmentReport, AuditSummary, FindingCounts, RiskRating, Severity } from '../pentest/types'

const riskTone: Record<RiskRating, string> = {
  Critical: 'is-critical',
  High: 'is-high',
  Moderate: 'is-moderate',
  Low: 'is-low',
  Informational: 'is-info',
}

const DONUT_RADIUS = 58
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS

function FindingsDonut({ counts, total }: { counts: FindingCounts; total: number }) {
  let offset = 0
  const slices = SEVERITIES.flatMap((severity) => {
    const value = counts[severity]
    if (value <= 0 || total <= 0) {
      return []
    }
    const length = (value / total) * DONUT_CIRCUMFERENCE
    const slice = { severity, length, offset }
    offset += length
    return [slice]
  })

  return (
    <div className="report-donut">
      <svg viewBox="0 0 180 180" className="report-donut-svg" aria-hidden="true">
        <circle className="report-donut-track" cx="90" cy="90" r={DONUT_RADIUS} />
        {slices.map((slice) => (
          <circle
            key={slice.severity}
            className={`report-donut-slice is-${slice.severity.toLowerCase()}`}
            cx="90"
            cy="90"
            r={DONUT_RADIUS}
            strokeDasharray={`${slice.length} ${DONUT_CIRCUMFERENCE - slice.length}`}
            strokeDashoffset={-slice.offset}
          />
        ))}
      </svg>
      <div className="report-donut-center">
        <p>{total}</p>
        <span>Findings</span>
      </div>
    </div>
  )
}

const severityClass: Record<Severity, string> = {
  Critical: 'report-sev-critical',
  High: 'report-sev-high',
  Medium: 'report-sev-medium',
  Low: 'report-sev-low',
  Info: 'report-sev-info',
}

type ReportViewProps = {
  report: AssessmentReport
  versions?: AuditSummary[]
  showActions?: boolean
}

function letterTitle(index: string, title: string): string {
  return `${index} · ${title}`
}

const ReportView = ({ report, versions = [], showActions = true }: ReportViewProps) => {
  const total =
    report.findingCounts.Critical +
    report.findingCounts.High +
    report.findingCounts.Medium +
    report.findingCounts.Low +
    report.findingCounts.Info
  const siblingVersions = versions.filter((item) => (item.version ?? 1) !== report.version)

  return (
    <article className="report-document">
      {showActions && (
        <div className="report-toolbar print:hidden">
          <Link to="/audits" className="report-toolbar-link">
            All assessments
          </Link>
          <button type="button" className="btn-primary text-sm" onClick={() => window.print()}>
            Export PDF
          </button>
        </div>
      )}

      {siblingVersions.length > 0 && (
        <nav className="report-versions print:hidden" aria-label="Report versions">
          <p className="report-versions-label">Versions</p>
          <div className="report-versions-list">
            {versions.map((item) => (
              <Link
                key={item.id}
                to={`/audits/${item.id}`}
                className={item.id === report.reference ? 'report-version is-current' : 'report-version'}
              >
                v{item.version ?? 1}
                <span>{item.date}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}

      <section className="report-cover">
        <p className="report-kicker">Enterprise-Grade Security</p>
        <p className="report-confidential">Public · Penetration Test Report</p>
        <h1 className="report-title">External Penetration Test</h1>
        <p className="report-subtitle">{report.hostname}</p>
        <p className="report-lede">
          An external, black-box security assessment conducted under the OWASP Web Security Testing Guide, PTES and NIST
          SP 800-115.
        </p>
        <dl className="report-meta-grid">
          <div>
            <dt>Target</dt>
            <dd>{report.target}</dd>
          </div>
          <div>
            <dt>Assessment date</dt>
            <dd>{report.assessmentDate}</dd>
          </div>
          <div>
            <dt>Posture</dt>
            <dd>{report.posture}</dd>
          </div>
          <div>
            <dt>Prepared by</dt>
            <dd>{report.preparedBy}</dd>
          </div>
        </dl>
        <p className="report-ref-line">
          Report reference {report.reference}
          {report.version > 1 ? ` · Version ${report.version}` : ''}
          {report.previousReference ? ` · supersedes ${report.previousReference}` : ''}
          {' · '}CLASSIFICATION: {report.classification}, recorded in the Block08 public registry
        </p>
      </section>

      <section className="report-section">
        <h2>{letterTitle('01', 'EXECUTIVE SUMMARY')}</h2>
        <h3>Assessment at a glance</h3>
        <div className="report-glance">
          <div className="report-glance-top">
            <div className="report-glance-card report-risk-panel">
              <p className={`report-risk-pill ${riskTone[report.overallRisk]}`}>Overall Risk Rating</p>
              <p className={`report-risk-value ${riskTone[report.overallRisk]}`}>{report.overallRisk}</p>
              <p className="report-risk-copy">{riskTagline(report.overallRisk)}</p>
              <ul className="report-sev-bars">
                {SEVERITIES.map((severity) => {
                  const value = report.findingCounts[severity]
                  const scale = Math.max(...SEVERITIES.map((item) => report.findingCounts[item]), 1)
                  return (
                    <li key={severity} className="report-sev-row">
                      <span className={`report-sev-name is-${severity.toLowerCase()}`}>{severity}</span>
                      <span className="report-sev-track">
                        <svg viewBox="0 0 100 4" preserveAspectRatio="none" className="report-sev-svg" aria-hidden="true">
                          <rect className="report-sev-rail" width="100" height="4" rx="2" />
                          <rect
                            className={`report-sev-fill is-${severity.toLowerCase()}`}
                            width={(value / scale) * 100}
                            height="4"
                            rx="2"
                          />
                        </svg>
                      </span>
                      <span className="report-sev-n">{value}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="report-glance-card report-donut-panel">
              <FindingsDonut counts={report.findingCounts} total={total} />
              <ul className="report-donut-legend">
                {SEVERITIES.filter((severity) => report.findingCounts[severity] > 0).map((severity) => (
                  <li key={severity}>
                    <span className={`report-donut-swatch is-${severity.toLowerCase()}`} />
                    {severity} {report.findingCounts[severity]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="report-kpis">
            <div className="report-kpi">
              <p className="report-kpi-value">{total}</p>
              <p className="report-kpi-label">Total findings</p>
            </div>
            <div className="report-kpi">
              <p className="report-kpi-value is-alert">{report.findingCounts.Critical + report.findingCounts.High}</p>
              <p className="report-kpi-label">Critical + High</p>
            </div>
            <div className="report-kpi">
              <p className="report-kpi-value is-good">{report.controls.length}</p>
              <p className="report-kpi-label">
                Controls verified
                <br />
                strong
              </p>
            </div>
            <div className="report-kpi">
              <p className="report-kpi-value">{report.scope.tooling.length}</p>
              <p className="report-kpi-label">Tools employed</p>
            </div>
          </div>
        </div>
        <p className="report-body">{report.executiveSummary}</p>
      </section>

      <section className="report-section">
        <h2>{letterTitle('02', 'SCOPE & RULES OF ENGAGEMENT')}</h2>
        <h3>What was tested, and how</h3>
        <div className="report-scope-grid">
          <div>
            <h4>In scope</h4>
            <p className="report-body">{report.scope.inScope}</p>
          </div>
          <div>
            <h4>Rules of engagement</h4>
            <p className="report-body">{report.scope.rules}</p>
          </div>
          <div>
            <h4>Methodology</h4>
            <p className="report-body">{report.scope.methodology}</p>
          </div>
          <div>
            <h4>Tooling</h4>
            <p className="report-body">{report.scope.tooling.join(', ')}</p>
          </div>
        </div>
      </section>

      <section className="report-section">
        <h2>{letterTitle('03', 'FINDINGS REGISTER')}</h2>
        <h3>All findings, ranked by severity</h3>
        <div className="report-table-wrap">
          <table className="report-table">
            <thead>
              <tr>
                <th>Severity</th>
                <th>ID</th>
                <th>Finding</th>
                <th>WSTG</th>
                <th>CWE</th>
              </tr>
            </thead>
            <tbody>
              {report.findings.map((finding) => (
                <tr key={finding.id}>
                  <td className={severityClass[finding.severity]}>{finding.severity}</td>
                  <td className="report-mono">{finding.id}</td>
                  <td>{finding.title}</td>
                  <td className="report-mono">{finding.wstg}</td>
                  <td className="report-mono">{finding.cwe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="report-section">
        <h2>{letterTitle('04', 'DETAILED FINDINGS')}</h2>
        <h3>Technical detail &amp; remediation</h3>
        <div className="report-finding-list">
          {report.findings.map((finding) => (
            <div key={finding.id} className="report-finding">
              <p className="report-finding-title">
                <span className={severityClass[finding.severity]}>{finding.severity}</span>
                {finding.title}
              </p>
              <p className="report-finding-meta">
                {finding.id}
                <span>{finding.wstg}</span>
                <span>{finding.cwe}</span>
                <span>CVSS {finding.cvss}</span>
              </p>
              <p className="report-label">Evidence</p>
              <p className="report-body">{finding.evidence}</p>
              <p className="report-label">Recommendation</p>
              <p className="report-body">{finding.recommendation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="report-section">
        <h2>{letterTitle('05', 'POSITIVE ASSURANCE')}</h2>
        <h3>Controls verified as strong</h3>
        <p className="report-body report-lead">
          The following {report.controls.length} defences were tested and found to be correctly implemented. They are
          the reason this assessment rates the core posture as it does.
        </p>
        <ul className="report-control-list">
          {report.controls.map((control) => (
            <li key={control.title} className="report-control">
              <p className="report-control-title">✓ {control.title}</p>
              <p className="report-body">{control.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="report-section">
        <h2>{letterTitle('06', 'RETEST POLICY')}</h2>
        <h3>When a new version is issued</h3>
        <p className="report-body">
          A subsequent free assessment is published only when the live security surface has changed, response headers,
          TLS protocol flags, DNS CAA, CORS, security.txt, or first-party script paths. Cosmetic HTML or CDN nonce
          rotation does not count. Unchanged sites keep this report as the current version; remediations produce v
          {(report.version ?? 1) + 1} and every prior version remains in the public registry.
        </p>
      </section>

      <section className="report-section">
        <h2>{letterTitle('07', 'REMEDIATION ROADMAP')}</h2>
        <h3>Recommended sequence</h3>
        <ol className="report-roadmap">
          {report.roadmap.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p className="report-body">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="report-section">
        <h2>{letterTitle('08', 'ASSURANCE STATEMENT')}</h2>
        <h3>Auditor attestation &amp; sign-off</h3>
        <p className="report-body">{report.assurance}</p>
        <p className="report-standards-label">Standards &amp; frameworks applied</p>
        <ul className="report-standards">
          <li>OWASP WSTG v4.2</li>
          <li>PTES</li>
          <li>NIST SP 800-115</li>
          <li>CVSS 3.1</li>
          <li>CWE</li>
        </ul>
      </section>

      <footer className="report-end">
        <p className="report-end-kicker">Prepared &amp; attested by</p>
        <p className="report-end-name">Block08 Security Audits</p>
        <p className="report-end-practice">Offensive Security Practice · block08.com</p>
        <dl className="report-meta-grid report-end-meta">
          <div>
            <dt>Report reference</dt>
            <dd>{report.reference}</dd>
          </div>
          <div>
            <dt>Assessment date</dt>
            <dd>{report.assessmentDate}</dd>
          </div>
          <div>
            <dt>Classification</dt>
            <dd>{report.classification}</dd>
          </div>
          <div>
            <dt>Version</dt>
            <dd>v{report.version ?? 1}</dd>
          </div>
        </dl>
        <p className="report-end-note">
          This penetration test was executed, and this report generated, by the Block08 assessment toolkit from live
          tool output (curl, openssl, dig) and a deterministic rule engine. It is not AI-generated.
        </p>
        <p className="report-end-disclaimer">
          Disclaimer. This report reflects the security posture of the named target at a single point in time and within
          the stated scope only. Security testing cannot prove the absence of all vulnerabilities. The report is public
          by design and listed in the Block08 assessment registry.
        </p>
      </footer>
    </article>
  )
}

export default ReportView
