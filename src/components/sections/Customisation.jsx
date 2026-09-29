import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { useQuote } from '../../context/QuoteContext'

const options = ['Designs', 'Colours', 'Finishes', 'Textures', 'Dimensions']

export function Customisation() {
  const { openQuote } = useQuote()

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={80} className="lg:order-2">
          <div className="overflow-hidden bg-surface">
            <div className="aspect-[5/4]">
              <img
                src="/images/doors/customise.jpg"
                alt="Custom SANRO fibre door finish in a styled interior"
                className="img-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:order-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Customisation</p>
          <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[42px]">
            Your space. Your door.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">
            Every interior has its own language. SANRO can follow it — from a single replacement leaf to a coordinated
            set across a house or commercial project.
          </p>
          <ul className="mt-8 space-y-3">
            {options.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="h-px w-6 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button onClick={() => openQuote('Custom Fibre Solution')}>Discuss Your Requirement</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
