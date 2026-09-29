import { manufacturingSteps } from '../../data/rooms'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function Manufacturing() {
  return (
    <section className="bg-ink py-20 text-white lg:py-28">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/50">Manufacturing</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">Made by SANRO</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
            Doors are manufactured in Idukki — designed, moulded, finished and inspected as a complete piece of
            architecture, not assembled from timber panels.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {manufacturingSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 50}>
              <article className="bg-ink p-0">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={step.image} alt={`${step.title} at SANRO`} className="img-cover opacity-80" />
                </div>
                <div className="border-t border-white/10 px-6 py-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
