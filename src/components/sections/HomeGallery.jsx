import { galleryItems } from '../../data/gallery'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function HomeGallery() {
  const items = galleryItems.slice(0, 6)

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Gallery</p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-4xl">
            Serious materials for making doors.
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-muted">
            Fibre, finish and proportion — photographed from the workshop and from completed interiors.
          </p>
          <div className="mt-8">
            <Button to="/gallery" variant="outline">
              View Gallery
            </Button>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`overflow-hidden rounded-card shadow-card ${index === 0 ? 'col-span-2 aspect-[16/10] sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full' : 'aspect-square'}`}
              >
                <img src={item.src} alt={item.alt} className="img-cover" />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
