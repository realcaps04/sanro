import { useEffect, useState } from 'react'
import { applyPerformanceCookies, readConsent, writeConsent } from '../lib/cookies'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = readConsent()
    if (!existing) {
      setVisible(true)
      return
    }
    applyPerformanceCookies(existing === 'all')

    function onChange(event) {
      if (event.detail == null) setVisible(true)
    }
    window.addEventListener('sanro:cookie-consent', onChange)
    return () => window.removeEventListener('sanro:cookie-consent', onChange)
  }, [])

  async function choose(value) {
    writeConsent(value)
    await applyPerformanceCookies(value === 'all')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
      <div
        role="dialog"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-copy"
        className="pointer-events-auto w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-float"
      >
        <div className="grid gap-5 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 sm:px-7 sm:py-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">Cookies</p>
            <h2 id="cookie-title" className="mt-2 text-xl font-medium tracking-[-0.03em]">
              Load doors faster next time
            </h2>
            <p id="cookie-copy" className="mt-2 max-w-[42ch] text-sm leading-6 text-muted">
              We use cookies to remember your choice and, if you allow it, to keep SANRO images on this device so
              pages open quicker — at full quality, with no compression.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:min-w-[11.5rem]">
            <button
              type="button"
              onClick={() => choose('all')}
              className="rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-accent"
            >
              Accept &amp; speed up
            </button>
            <button
              type="button"
              onClick={() => choose('essential')}
              className="rounded-full bg-surface px-5 py-3 text-[13px] font-medium text-ink transition-colors hover:bg-line"
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
