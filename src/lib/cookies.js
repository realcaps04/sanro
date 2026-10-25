export const CONSENT_COOKIE = 'sanro_cookie_consent'
export const CONSENT_STORAGE = 'sanro.cookieConsent'
const ONE_YEAR = 60 * 60 * 24 * 365

export function readConsent() {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE)
    if (stored === 'all' || stored === 'essential') return stored
  } catch {
    /* ignore */
  }
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`))
  const value = match?.[1]
  return value === 'all' || value === 'essential' ? value : null
}

export function writeConsent(value) {
  const next = value === 'all' ? 'all' : 'essential'
  document.cookie = `${CONSENT_COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`
  try {
    window.localStorage.setItem(CONSENT_STORAGE, next)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent('sanro:cookie-consent', { detail: next }))
  return next
}

export function clearConsent() {
  document.cookie = `${CONSENT_COOKIE}=; path=/; max-age=0; SameSite=Lax`
  try {
    window.localStorage.removeItem(CONSENT_STORAGE)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent('sanro:cookie-consent', { detail: null }))
}

/** Cache full-quality images for return visits when the visitor opts in. */
export async function applyPerformanceCookies(enabled) {
  if (!('serviceWorker' in navigator)) return

  if (!enabled) {
    const registrations = await navigator.serviceWorker.getRegistrations()
    await Promise.all(registrations.map((registration) => registration.unregister()))
    if (window.caches) {
      const keys = await caches.keys()
      await Promise.all(keys.filter((key) => key.startsWith('sanro-')).map((key) => caches.delete(key)))
    }
    return
  }

  try {
    await navigator.serviceWorker.register('/sw.js', { scope: '/' })
  } catch (error) {
    console.warn('[cookies] image cache worker failed to register:', error)
  }
}
