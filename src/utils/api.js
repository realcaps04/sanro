/** Placeholder API layer. Replace with Supabase later. */

export async function submitEnquiry(payload) {
  await new Promise((resolve) => setTimeout(resolve, 700))
  if (typeof window !== 'undefined') {
    const existing = JSON.parse(window.localStorage.getItem('sanro.enquiries') || '[]')
    existing.push({ ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() })
    window.localStorage.setItem('sanro.enquiries', JSON.stringify(existing))
  }
  return { ok: true }
}

/** Email list until Convex is connected. Google sign-in waits for the client id. */
export async function subscribeWithEmail(email) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (typeof window === 'undefined') return { ok: true }
  const existing = JSON.parse(window.localStorage.getItem('sanro.subscribers') || '[]')
  const address = email.trim().toLowerCase()
  if (!existing.some((item) => item.email === address)) {
    existing.push({ id: crypto.randomUUID(), email: address, method: 'email', createdAt: new Date().toISOString() })
    window.localStorage.setItem('sanro.subscribers', JSON.stringify(existing))
  }
  return { ok: true }
}

export async function connectWithGoogle() {
  return { ok: false, reason: 'unconfigured' }
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isValidPhone(value) {
  const digits = value.replace(/\D/g, '')
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits
  return /^[6-9]\d{9}$/.test(local)
}
