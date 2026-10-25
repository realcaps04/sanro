import { useEffect, useState } from 'react'
import { clearConsent, readConsent, writeConsent, applyPerformanceCookies } from '../lib/cookies'

export function useCookieConsent() {
  const [consent, setConsent] = useState(() => readConsent())

  useEffect(() => {
    function onChange(event) {
      setConsent(event.detail ?? null)
    }
    window.addEventListener('sanro:cookie-consent', onChange)
    return () => window.removeEventListener('sanro:cookie-consent', onChange)
  }, [])

  async function acceptAll() {
    const next = writeConsent('all')
    await applyPerformanceCookies(true)
    setConsent(next)
  }

  async function essentialOnly() {
    const next = writeConsent('essential')
    await applyPerformanceCookies(false)
    setConsent(next)
  }

  async function reset() {
    await applyPerformanceCookies(false)
    clearConsent()
    setConsent(null)
  }

  return { consent, acceptAll, essentialOnly, reset }
}
