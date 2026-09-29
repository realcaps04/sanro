import { useEffect, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { usePresence } from '../../hooks/usePresence'
import { connectWithGoogle, isValidEmail, subscribeWithEmail } from '../../utils/api'

export function SubscribeModal({ open, onClose }) {
  const { mounted, active } = usePresence(open, 320)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')
  const [googleNote, setGoogleNote] = useState(false)

  useEffect(() => {
    if (!mounted) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [mounted, onClose])

  useEffect(() => {
    if (open) return undefined
    setEmail('')
    setError('')
    setStatus('idle')
    setGoogleNote(false)
    return undefined
  }, [open])

  async function onGoogle() {
    setGoogleNote(false)
    const result = await connectWithGoogle()
    if (!result.ok) setGoogleNote(true)
  }

  async function onSubmit(event) {
    event.preventDefault()
    const address = email.trim()
    if (!isValidEmail(address)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setStatus('submitting')
    try {
      await subscribeWithEmail(address)
      setStatus('success')
    } catch {
      setStatus('idle')
      setError('Something went wrong. Please try again.')
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close registration"
        className={`subscribe-backdrop absolute inset-0 bg-ink/50 ${active ? 'is-in' : ''}`}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-title"
        data-lenis-prevent
        className={`subscribe-panel no-scrollbar relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[1.75rem] bg-white shadow-float sm:max-w-[440px] sm:rounded-[1.75rem] ${
          active ? 'is-in' : ''
        }`}
      >
        <div className="px-7 pt-7 pb-7 sm:px-9 sm:pt-9">
          <div className="flex items-start justify-between gap-4">
            <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
              <span>Be with</span>
              <img src="/images/logo/sanro_logo.png" alt="SANRO" className="h-9 w-auto brightness-0" />
            </p>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-ink hover:text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <h2 id="subscribe-title" className="mt-5 max-w-[12ch] text-[34px] font-medium leading-[1.05] tracking-[-0.04em]">
            Stay close to what we make next.
          </h2>
          {status === 'success' ? (
            <p className="mt-6 max-w-[32ch] text-[15px] leading-7 text-muted">
              You’re with SANRO. We’ll write when a new door, finish or project is ready to share.
            </p>
          ) : (
            <>
              <p className="mt-5 text-[15px] leading-7 text-muted">
                Register with SANRO — only when there is something worth opening.
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'New fibre door designs, colours and finishes as they leave the workshop',
                  'Waterproofing notes',
                  'Completed home projects',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onGoogle}
                className="mt-8 flex w-full items-center justify-between rounded-full bg-ink py-1.5 pr-1.5 pl-5 text-[13px] font-medium text-white shadow-[0_10px_28px_rgba(17,17,17,0.18)]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                    <GoogleMark />
                  </span>
                  Connect with Google
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight size={15} strokeWidth={2.25} aria-hidden="true" />
                </span>
              </button>
              {googleNote ? (
                <p className="mt-3 text-sm leading-6 text-muted">
                  Google sign-in will open once the account is linked. Leave your email and your place is kept.
                </p>
              ) : null}
              <div className="my-5 flex items-center gap-4 text-[12px] text-muted">
                <span className="h-px flex-1 bg-line" />
                or
                <span className="h-px flex-1 bg-line" />
              </div>
              <form onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="subscribe-email">
                  Email address
                </label>
                <div
                  className={`flex items-center rounded-full bg-surface py-1.5 pr-1.5 pl-5 ${
                    error ? 'shadow-[0_0_0_2px_#ff5700]' : 'shadow-card'
                  }`}
                >
                  <input
                    id="subscribe-email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) setError('')
                    }}
                    autoComplete="email"
                    placeholder="Email address"
                    aria-invalid={Boolean(error)}
                    className="min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-ink outline-none placeholder:text-muted/70"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    aria-label={status === 'submitting' ? 'Saving' : 'Subscribe'}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white disabled:opacity-50"
                  >
                    <ArrowRight size={15} strokeWidth={2.25} aria-hidden="true" />
                  </button>
                </div>
                {error ? <span className="mt-2 block px-2 text-xs text-accent">{error}</span> : null}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  )
}
