import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'
import { CtaBand } from '../../components/sections/CtaBand'
import { waterproofingServices } from '../../data/services'
import { useQuote } from '../../context/QuoteContext'

export default function WaterproofingPage() {
  const { openQuote } = useQuote()

  return (
    <>
      <Seo
        title="Waterproofing | SANRO Fibre Glass Industries"
        description="Professional terrace, roof, bathroom, wall and commercial waterproofing from SANRO in Kerala."
      />
      <section className="relative min-h-[70vh] overflow-hidden bg-ink">
        <img
          src="/images/waterproofing/hero.jpg"
          alt="Residential building envelope prepared for waterproofing"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <Container className="relative z-10 flex min-h-[70vh] items-end pb-16 pt-32">
          <div className="max-w-2xl text-white">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/60">Services</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Protection beyond the door
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/80">
              Professional waterproofing solutions designed to protect residential and commercial spaces from water
              penetration and moisture-related problems.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {waterproofingServices.map((item) => (
              <article key={item.title} className="group">
                <div className="overflow-hidden bg-surface">
                  <div className="aspect-[5/4]">
                    <img src={item.image} alt={item.title} className="img-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                </div>
                <h2 className="mt-5 text-xl font-medium tracking-[-0.02em]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-14">
            <Button onClick={() => openQuote('Waterproofing')}>Get a Waterproofing Quote</Button>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
