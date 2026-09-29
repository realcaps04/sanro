import { Droplets, BugOff, Shield, Sparkles, SlidersHorizontal, Home } from 'lucide-react'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { whyPoints } from '../../data/rooms'

const icons = [Droplets, BugOff, Shield, Sparkles, SlidersHorizontal, Home]

export function WhySanro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Why fibre</p>
            <h2 className="mt-5 max-w-sm text-3xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[42px]">
              Built for everyday living.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">
              Timber doors in Kerala fight the climate. SANRO fibre doors are manufactured to stay true — through rain,
              humidity and the ordinary rhythm of a house.
            </p>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {whyPoints.map((point, index) => {
              const Icon = icons[index]
              return (
                <Reveal key={point.title} delay={index * 60}>
                  <div className="border-t border-line pt-6">
                    <Icon size={20} strokeWidth={1.5} className="text-accent" />
                    <h3 className="mt-4 text-lg font-medium tracking-[-0.02em]">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{point.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
