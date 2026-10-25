import { useEffect, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { usePresence } from '../../hooks/usePresence'
import { isValidEmail, subscribeWithEmail } from '../../utils/api'

export function SubscribeModal({ open, onClose }) {
  const { mounted, active } = usePresence(open, 320)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')

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
    return undefined
  }, [open])

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
              <form onSubmit={onSubmit} className="mt-8">
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
