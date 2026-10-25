import { isSupabaseConfigured, supabase } from '../lib/supabase'

/**
 * Tables:
 * - enquiries — see supabase/enquiries.sql (Connect with Us popup)
 * - subscribers — see supabase/subscribers.sql (Be with SANRO email signup)
 */

function saveEnquiryLocal(payload) {
  if (typeof window === 'undefined') return
  const existing = JSON.parse(window.localStorage.getItem('sanro.enquiries') || '[]')
  existing.push({ ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() })
  window.localStorage.setItem('sanro.enquiries', JSON.stringify(existing))
}

function saveSubscriberLocal(email) {
  if (typeof window === 'undefined') return
  const existing = JSON.parse(window.localStorage.getItem('sanro.subscribers') || '[]')
  const address = email.trim().toLowerCase()
  if (!existing.some((item) => item.email === address)) {
    existing.push({
      id: crypto.randomUUID(),
      email: address,
      method: 'email',
      createdAt: new Date().toISOString(),
    })
    window.localStorage.setItem('sanro.subscribers', JSON.stringify(existing))
  }
}

export async function submitEnquiry(payload) {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('enquiries').insert({
      name: payload.name?.trim(),
      phone: payload.phone?.trim(),
      email: payload.email?.trim() || null,
      location: payload.location?.trim(),
      interest: payload.interest?.trim(),
      message: payload.message?.trim(),
    })

    if (!error) return { ok: true, source: 'supabase' }

    // Tables may not exist yet — keep the form usable offline.
    console.warn('[supabase] enquiry insert failed, using localStorage:', error.message)
  }

  saveEnquiryLocal(payload)
  return { ok: true, source: 'local' }
}

export async function subscribeWithEmail(email) {
  const address = email.trim().toLowerCase()

  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('subscribers').insert({
      email: address,
      method: 'email',
    })

    if (!error) return { ok: true, source: 'supabase' }

    // Unique violation means already subscribed — treat as success.
    if (error.code === '23505') return { ok: true, source: 'supabase', already: true }

    console.warn('[supabase] subscribe insert failed, using localStorage:', error.message)
  }

  saveSubscriberLocal(address)
  return { ok: true, source: 'local' }
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isValidPhone(value) {
  const digits = value.replace(/\D/g, '')
  const local = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits
  return /^[6-9]\d{9}$/.test(local)
}
