import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { useQuote } from '../../context/QuoteContext'

export function Hero() {
  const { openQuote } = useQuote()

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
      <img
        src="/images/doors/hero.jpg"
        alt="Premium SANRO fibre interior door in a contemporary home"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-32 text-center text-white">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/70">
          SANRO Fibre Glass Industries
        </p>
        <h1 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
          Crafted for
          <br />
          modern interiors.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/80 sm:text-base">
          Premium fibre interior doors designed for durability, refined aesthetics and everyday living.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/products" variant="secondary">
            Explore Doors
          </Button>
          <Button variant="accent" onClick={() => openQuote()}>
            Get a Quote
          </Button>
        </div>
      </div>
      <a
        href="#introduction"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
        <ChevronDown size={18} className="animate-pulse" />
      </a>
    </section>
  )
}
