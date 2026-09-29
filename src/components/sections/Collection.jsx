import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ProductGrid } from '../product/ProductGrid'
import { getFeaturedProducts } from '../../data/products'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function Collection() {
  const products = getFeaturedProducts().slice(0, 4)

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              title="Explore the SANRO collection"
              text="A collection of interior doors designed for different spaces, styles and architectural preferences."
            />
            <Button to="/products" variant="outline">
              View All Doors
            </Button>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ProductGrid products={products} />
        </Reveal>
      </Container>
    </section>
  )
}
