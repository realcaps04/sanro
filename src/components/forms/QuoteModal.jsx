import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import { usePresence } from '../../hooks/usePresence'
import { EnquiryForm } from './EnquiryForm'

export function QuoteModal() {
  const { open, closeQuote, interest } = useQuote()
  const { mounted, active } = usePresence(open, 320)

  useEffect(() => {
    if (!mounted) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') closeQuote()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [mounted, closeQuote])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close enquiry"
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ease-out ${active ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeQuote}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        data-lenis-prevent
        className={`no-scrollbar relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-card bg-white shadow-float transition-[opacity,transform] duration-300 ease-out sm:max-w-xl sm:rounded-card ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: active ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.98)' }}
      >
        <div className="flex items-start justify-between px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">Connect with Us</p>
            <h2 id="quote-title" className="mt-2 text-2xl font-medium tracking-[-0.03em]">
              Tell us what you need.
            </h2>
          </div>
          <button
            type="button"
            onClick={closeQuote}
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-control bg-surface text-ink shadow-card transition-colors hover:bg-ink hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <EnquiryForm key={interest} defaultInterest={interest} compact />
        </div>
      </div>
    </div>
  )
}
