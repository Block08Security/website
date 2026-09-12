import { useEffect, useState } from 'react'
import { HERO_SERVICE_PHRASES } from '../content/serviceHeadlines'

const HOLD_MS = 3200
const EXIT_MS = 620

type RotatingHeadlineProps = {
  phrases?: readonly string[]
  intervalMs?: number
}

const RotatingHeadline = ({
  phrases = HERO_SERVICE_PHRASES,
  intervalMs = HOLD_MS,
}: RotatingHeadlineProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => {
      setReduceMotion(mediaQuery.matches)
    }

    syncPreference()
    mediaQuery.addEventListener('change', syncPreference)
    return () => mediaQuery.removeEventListener('change', syncPreference)
  }, [])

  useEffect(() => {
    if (reduceMotion || phrases.length < 2) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        setOutgoingIndex(current)
        return (current + 1) % phrases.length
      })
    }, intervalMs)

    return () => window.clearInterval(intervalId)
  }, [intervalMs, phrases.length, reduceMotion])

  useEffect(() => {
    if (outgoingIndex === null) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setOutgoingIndex(null)
    }, EXIT_MS)

    return () => window.clearTimeout(timeoutId)
  }, [outgoingIndex])

  const longestPhrase = phrases.reduce((longest, phrase) =>
    phrase.length > longest.length ? phrase : longest
  )

  return (
    <span className="headline-stage" aria-live="polite" aria-atomic="true">
      <span className="headline-sizer" aria-hidden="true">
        {longestPhrase}
      </span>
      {outgoingIndex !== null && (
        <span key={`out-${outgoingIndex}`} className="headline-phrase headline-phrase-exit" aria-hidden="true">
          {phrases[outgoingIndex]}
        </span>
      )}
      <span key={`in-${activeIndex}`} className="headline-phrase headline-phrase-enter">
        {phrases[activeIndex]}
      </span>
    </span>
  )
}

export default RotatingHeadline
