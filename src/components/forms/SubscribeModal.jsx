import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { usePresence } from '../../hooks/usePresence'
import { connectWithGoogle, isValidEmail, subscribeWithEmail } from '../../utils/api'
import { Button } from '../ui/Button'

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
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ease-out ${active ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-title"
        data-lenis-prevent
        className={`no-scrollbar relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-card bg-white shadow-float transition-[opacity,transform] duration-300 ease-out sm:max-w-md sm:rounded-card ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: active ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)' }}
      >
        <div className="flex items-start justify-between px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">Be with SANRO</p>
            <h2 id="subscribe-title" className="mt-2 text-2xl font-medium tracking-[-0.03em]">
              Stay close to what we make next.
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-surface text-ink shadow-card transition-colors hover:bg-ink hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-6 pb-8 sm:px-8">
          {status === 'success' ? (
            <div>
              <p className="text-[15px] leading-7 text-muted">
                You’re with SANRO. We’ll write when a new door, finish or project is ready to share.
              </p>
            </div>
          ) : (
            <>
              <p className="text-[15px] leading-7 text-muted">
                Register with SANRO and hear about new fibre door designs, colours and finishes as they leave the
                workshop. We’ll also share waterproofing notes and completed home projects — only when there is
                something worth opening.
              </p>
              <button
                type="button"
                onClick={onGoogle}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-white py-3 text-[13px] font-medium text-ink shadow-card"
              >
                <GoogleMark />
                Connect with Google
              </button>
              {googleNote ? (
                <p className="mt-3 text-sm leading-6 text-muted">
                  Google sign-in will open once the account is linked. Leave your email below and your place is kept.
                </p>
              ) : null}
              <div className="my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted">
                <span className="h-px flex-1 bg-line" />
                or
                <span className="h-px flex-1 bg-line" />
              </div>
              <form onSubmit={onSubmit}>
                <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-muted" htmlFor="subscribe-email">
                  Email address
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (error) setError('')
                  }}
                  autoComplete="email"
                  placeholder="you@email.com"
                  aria-invalid={Boolean(error)}
                  className={`w-full rounded-control border-0 bg-surface px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/70 ${
                    error ? 'shadow-[0_0_0_2px_#ff5700]' : 'shadow-card'
                  }`}
                />
                {error ? <span className="mt-1.5 block text-xs text-accent">{error}</span> : null}
                <Button type="submit" className="mt-4 w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Saving…' : 'Subscribe'}
                </Button>
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
    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
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
