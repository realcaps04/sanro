import { ArrowUpRight } from 'lucide-react'
import { waterproofingServices } from '../../data/services'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function WaterproofingTeaser() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Waterproofing</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl">
              Protection beyond the door
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-muted">
              Professional waterproofing solutions designed to protect residential and commercial spaces from water
              penetration and moisture-related problems.
            </p>
            <div className="mt-8">
              <Button to="/services/waterproofing" variant="outline">
                Explore Waterproofing
              </Button>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {waterproofingServices.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <div className="flex items-start justify-between gap-4 bg-white px-6 py-6">
                  <div>
                    <h3 className="text-[15px] font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                  <ArrowUpRight size={16} className="mt-1 shrink-0 text-muted" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
