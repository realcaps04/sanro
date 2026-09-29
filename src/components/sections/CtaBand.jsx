import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useQuote } from '../../context/QuoteContext'

export function CtaBand() {
  const { openQuote } = useQuote()

  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="rounded-card bg-ink py-16 text-white shadow-float lg:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">Enquiry</p>
          <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Let’s specify the door for your space.
          </h2>
        </div>
        <Button variant="secondary" onClick={() => openQuote()}>
          Connect with Us
        </Button>
      </Container>
      </div>
    </section>
  )
}
