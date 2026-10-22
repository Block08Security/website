import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ACTIVE_ADVISORY,
  ADVISORY_OFFSET_VAR,
  advisoryDismissKey,
} from '../content/advisories'

const clearAdvisoryOffset = () => {
  document.documentElement.classList.remove('has-advisory')
  document.documentElement.style.removeProperty(ADVISORY_OFFSET_VAR)
}

const AdvisoryBanner = () => {
  const advisory = ACTIVE_ADVISORY
  const bannerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!advisory) {
      setIsVisible(false)
      return
    }
    const dismissed = sessionStorage.getItem(advisoryDismissKey(advisory.id))
    setIsVisible(!dismissed)
  }, [advisory])

  useEffect(() => {
    const node = bannerRef.current
    if (!isVisible || !node) {
      clearAdvisoryOffset()
      return
    }

    const syncOffset = () => {
      document.documentElement.classList.add('has-advisory')
      document.documentElement.style.setProperty(ADVISORY_OFFSET_VAR, `${node.offsetHeight}px`)
    }

    syncOffset()
    const observer = new ResizeObserver(syncOffset)
    observer.observe(node)
    window.addEventListener('resize', syncOffset)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncOffset)
      clearAdvisoryOffset()
    }
  }, [isVisible])

  if (!advisory || !isVisible) {
    return null
  }

  const dismiss = () => {
    sessionStorage.setItem(advisoryDismissKey(advisory.id), '1')
    setIsVisible(false)
  }

  return (
    <div ref={bannerRef} className="advisory-banner print:hidden" role="status">
      <div className="advisory-banner-inner">
        <span className="advisory-live" aria-hidden="true" />
        <div className="advisory-banner-copy">
          <p className="advisory-kicker">{advisory.kicker}</p>
          <p className="advisory-summary-full">
            <strong>{advisory.title}.</strong> {advisory.summary}
          </p>
          <p className="advisory-summary-short">
            <strong>{advisory.title}.</strong> {advisory.mobileSummary}
          </p>
        </div>
        <div className="advisory-banner-actions">
          <Link to={advisory.cta.to} className="advisory-banner-cta">
            {advisory.cta.label}
          </Link>
          <button type="button" className="advisory-banner-dismiss" onClick={dismiss}>
            <span className="sr-only">Dismiss advisory</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdvisoryBanner
