import { Link } from 'react-router-dom'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'
import { CtaBand } from '../../components/sections/CtaBand'
import { services } from '../../data/services'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | SANRO Fibre Glass Industries"
        description="Fibre door solutions, waterproofing, custom fibre manufacturing and allied construction services from SANRO."
      />
      <section className="bg-surface pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Manufacturing, interiors and protection.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            SANRO’s work sits around the door — from the collection itself to custom fibre pieces and waterproofing for
            the building that holds them.
          </p>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container className="space-y-20">
          {services.map((service, index) => {
            const href = service.href || (service.slug === 'fibre-door-solutions' ? '/products' : '/contact')
            return (
              <article
                key={service.slug}
                className="grid items-center gap-10 border-t border-line pt-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16"
              >
                <div className={index % 2 ? 'lg:order-2' : ''}>
                  <div className="overflow-hidden bg-surface">
                    <div className="aspect-[5/4]">
                      <img src={service.image} alt={service.title} className="img-cover" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em]">{service.title}</h2>
                  <p className="mt-5 text-[15px] leading-7 text-muted">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <span className="h-px w-5 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button to={href} variant="outline">
                      {service.slug === 'waterproofing' ? 'Explore Waterproofing' : 'Enquire'}
                    </Button>
                    {service.slug === 'fibre-door-solutions' ? (
                      <Link
                        to="/products"
                        className="ml-6 inline-flex text-[12px] uppercase tracking-[0.16em] text-muted hover:text-ink"
                      >
                        View doors
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            )
          })}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
