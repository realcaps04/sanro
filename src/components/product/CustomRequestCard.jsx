import { ArrowRight, Plus } from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'

export function CustomRequestCard() {
  const { openQuote } = useQuote()

  return (
    <article className="group h-full">
      <button
        type="button"
        onClick={() => openQuote('Custom Fibre Solution')}
        className="flex h-full w-full flex-col text-left"
      >
        <div className="relative overflow-hidden rounded-card bg-surface shadow-card">
          <div className="aspect-[4/5]">
            <img
              src="/images/doors/customise.jpg"
              alt="Request a custom SANRO fibre door or service"
              className="img-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <p className="absolute inset-x-5 bottom-20 text-lg font-medium leading-snug tracking-[-0.02em] text-white">
              Need something not in the collection?
            </p>
          </div>
          <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-colors duration-300 group-hover:bg-ink">
            <Plus size={18} strokeWidth={1.75} />
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Custom · Request</p>
          <h3 className="mt-2 text-lg font-medium tracking-[-0.02em]">
            <span className="text-accent">SANRO</span> Custom Request
          </h3>
          <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-muted">
            Tell us the door, finish or fibre service you need — we will shape it to your project.
          </p>
          <div className="mt-auto pt-5">
            <span className="inline-flex w-fit items-center rounded-full bg-accent py-1.5 pr-1.5 pl-6 text-[13px] font-medium tracking-normal text-white shadow-[0_10px_28px_rgba(255,87,0,0.28),0_18px_40px_rgba(255,87,0,0.18)]">
              Request Custom
              <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
              </span>
            </span>
          </div>
        </div>
      </button>
    </article>
  )
}
