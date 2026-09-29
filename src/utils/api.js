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

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isValidPhone(value) {
  const digits = value.replace(/\D/g, '')
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits
  return /^[6-9]\d{9}$/.test(local)
}
