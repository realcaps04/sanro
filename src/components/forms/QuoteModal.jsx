import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import { EnquiryForm } from './EnquiryForm'

export function QuoteModal() {
  const { open, closeQuote, interest } = useQuote()

  useEffect(() => {
    if (!open) return undefined
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
  }, [open, closeQuote])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close enquiry"
        className="absolute inset-0 bg-ink/50"
        onClick={closeQuote}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto bg-white sm:max-w-xl sm:border sm:border-line"
      >
        <div className="flex items-start justify-between border-b border-line px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent">Get a Quote</p>
            <h2 id="quote-title" className="mt-2 text-2xl font-medium tracking-[-0.03em]">
              Tell us what you need.
            </h2>
          </div>
          <button
            type="button"
            onClick={closeQuote}
            className="mt-1 flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink"
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
