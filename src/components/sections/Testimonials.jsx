import { testimonials } from '../../data/testimonials'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Testimonials</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">Our client reviews</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 80}>
              <article className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-card shadow-card">
                  <img src={item.image} alt="" className="img-cover" />
                </div>
                <div className="relative mx-4 -mt-12 rounded-card bg-white px-6 py-6 shadow-float">
                  <p className="text-sm leading-7 text-ink">“{item.quote}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={item.portrait}
                      alt={item.name}
                      className="h-11 w-11 shrink-0 rounded-full object-cover shadow-card"
                    />
                    <div>
                      <p className="text-[13px] font-medium">{item.name}</p>
                      <p className="mt-0.5 text-[12px] text-muted">{item.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
