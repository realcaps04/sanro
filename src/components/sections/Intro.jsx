import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function Intro() {
  return (
    <section id="introduction" className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-card bg-surface shadow-card">
            <div className="aspect-[4/5] lg:aspect-[5/6]">
              <img
                src="/images/doors/classic-01.jpg"
                alt="SANRO fibre interior door in a residential interior"
                className="img-cover"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[12.5px] font-medium uppercase tracking-[0.28em] text-ink">
            <span className="text-accent">SANRO</span> Fibre Glass Industries
          </p>
          <h2 className="mt-5 max-w-xl text-[26px] font-medium leading-[1.2] tracking-[-0.03em] sm:text-[32px] lg:text-[36px]">
            Interior doors designed
            <br />
            to become part of the architecture.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-muted">
            SANRO is a fibre manufacturer in Idukki, Kerala, focused on premium interior fibre doors. We make doors for
            homes, apartments and commercial interiors — specified for humidity, daily use and a quieter kind of
            craftsmanship.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted">
            Alongside the door collection, we manufacture custom fibre pieces and provide professional waterproofing
            for residential and commercial buildings.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="static">
              About SANRO
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
