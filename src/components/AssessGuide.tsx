import { useEffect, useState } from 'react'
import { ASSESS_GUIDE_STEPS } from '../content/assessGuide'
import { GITHUB_REPO } from '../pentest/constants'

const HOLD_MS = 4800

type AssessGuideProps = {
  variant?: 'full' | 'pending'
}

const GitHubMark = () => (
  <svg className="guide-gh-mark" viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
)

const AssessGuide = ({ variant = 'full' }: AssessGuideProps) => {
  const startIndex = variant === 'pending' ? 1 : 0
  const [activeIndex, setActiveIndex] = useState(startIndex)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => setReduceMotion(mediaQuery.matches)
    syncPreference()
    mediaQuery.addEventListener('change', syncPreference)
    return () => mediaQuery.removeEventListener('change', syncPreference)
  }, [])

  useEffect(() => {
    if (reduceMotion || paused) {
      return
    }
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ASSESS_GUIDE_STEPS.length)
    }, HOLD_MS)
    return () => window.clearInterval(intervalId)
  }, [reduceMotion, paused, activeIndex])

  const active = ASSESS_GUIDE_STEPS[activeIndex]

  return (
    <section
      id="how-it-works"
      className={`assess-guide${variant === 'pending' ? ' is-pending' : ''}${paused ? ' is-paused' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        const next = event.relatedTarget
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setPaused(false)
        }
      }}
    >
      <div className="assess-guide-copy">
        <p className="assess-guide-kicker">How it works</p>
        <h2>A one-minute GitHub confirmation</h2>
        <p>
          The scan is free. GitHub is the queue, you sign in with <strong>your</strong> account and submit a
          pre-filled issue on <span className="assess-guide-repo">{GITHUB_REPO}</span>. No password is shared with
          Block08.{' '}
          {variant === 'full' && (
            <a href="#start-assessment" className="assess-guide-skip">
              Skip to the form
            </a>
          )}
        </p>
        <ol className="assess-guide-steps">
          {ASSESS_GUIDE_STEPS.map((step, index) => (
            <li key={step.key}>
              <button
                type="button"
                className={index === activeIndex ? 'assess-guide-step is-active' : 'assess-guide-step'}
                onClick={() => setActiveIndex(index)}
                aria-current={index === activeIndex ? 'step' : undefined}
              >
                <span>{step.number}</span>
                <span>
                  <strong>{step.title}</strong>
                  <em>{step.body}</em>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="assess-guide-stage" aria-hidden="true">
        <div key={active.key} className={`guide-scene is-${active.key}`}>
          <div className="guide-progress" />
          {active.key === 'url' && (
            <div className="guide-window">
              <div className="guide-chrome">
                <span />
                <span />
                <span />
                <p>block08.com/assess</p>
              </div>
              <div className="guide-body">
                <p className="guide-label">Website URL</p>
                <p className="guide-field">
                  <span className="guide-typed">https://yoursite.com</span>
                </p>
                <p className="guide-check is-on">I am authorized to test this website</p>
                <p className="guide-cta">
                  Start free assessment
                  <i className="guide-cursor" />
                </p>
              </div>
            </div>
          )}

          {active.key === 'signin' && (
            <div className="guide-window is-github">
              <div className="guide-chrome">
                <span />
                <span />
                <span />
                <p>github.com/login</p>
              </div>
              <div className="guide-body guide-login">
                <GitHubMark />
                <p className="guide-login-title">Sign in to GitHub</p>
                <p className="guide-login-note">Use your own account, not Block08’s</p>
                <p className="guide-field is-quiet">Username or email</p>
                <p className="guide-field is-quiet">Password</p>
                <p className="guide-cta is-github">
                  Sign in
                  <i className="guide-cursor" />
                </p>
                <p className="guide-login-help">New to GitHub? Create a free account</p>
              </div>
            </div>
          )}

          {active.key === 'issue' && (
            <div className="guide-window is-github">
              <div className="guide-chrome">
                <span />
                <span />
                <span />
                <p>
                  github.com/{GITHUB_REPO}/issues/new
                </p>
              </div>
              <div className="guide-body">
                <p className="guide-repo-line">
                  <GitHubMark />
                  {GITHUB_REPO}
                </p>
                <p className="guide-issue-kicker">New issue</p>
                <p className="guide-label">Title</p>
                <p className="guide-field">[pentest] yoursite.com</p>
                <p className="guide-label">Comment</p>
                <p className="guide-issue-body">I confirm I am authorized to assess this website…</p>
                <p className="guide-cta is-github">
                  Submit new issue
                  <i className="guide-cursor" />
                </p>
              </div>
            </div>
          )}

          {active.key === 'report' && (
            <div className="guide-window">
              <div className="guide-chrome">
                <span />
                <span />
                <span />
                <p>block08.com/audits</p>
              </div>
              <div className="guide-body guide-report">
                <p className="guide-report-kicker">Public · Penetration test report</p>
                <p className="guide-report-title">External Penetration Test</p>
                <p className="guide-report-host">yoursite.com</p>
                <div className="guide-report-pills">
                  <span>Queued</span>
                  <span className="is-live">Toolkit running</span>
                  <span className="is-done">Report published</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AssessGuide
