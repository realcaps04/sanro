import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { Button } from '../../components/ui/Button'
import { ProductCard } from '../../components/product/ProductCard'
import { CtaBand } from '../../components/sections/CtaBand'
import { getProductBySlug, getRelatedProducts } from '../../data/products'
import { useQuote } from '../../context/QuoteContext'

export default function ProductDetailsPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const related = getRelatedProducts(slug)
  const { openQuote } = useQuote()
  const [active, setActive] = useState(0)

  if (!product) {
    return (
      <section className="px-5 pt-32 pb-24 text-center">
        <h1 className="text-3xl font-medium">Door not found</h1>
        <Link to="/products" className="mt-6 inline-block text-sm uppercase tracking-[0.16em]">
          Back to collection
        </Link>
      </section>
    )
  }

  const gallery = product.gallery ?? [product.image]

  return (
    <>
      <Seo
        title={`${product.name} | SANRO Fibre Doors`}
        description={product.short}
      />
      <section className="bg-white pt-28 pb-20 lg:pt-32 lg:pb-28">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="overflow-hidden bg-surface">
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src={gallery[active]}
                  alt={`${product.name} ${product.code}`}
                  className="img-cover"
                />
              </div>
            </div>
            {gallery.length > 1 ? (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`overflow-hidden border ${active === index ? 'border-ink' : 'border-transparent'}`}
                  >
                    <span className="block aspect-square">
                      <img src={src} alt="" className="img-cover" />
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div className="lg:pt-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
              {product.category} · {product.code}
            </p>
            <h1 className="mt-3 text-4xl font-medium tracking-[-0.04em]">{product.name}</h1>
            <p className="mt-6 text-[15px] leading-7 text-muted">{product.description}</p>
            <div className="mt-10 border-t border-line pt-8">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted">Available finishes</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.finishes.map((finish) => (
                  <li key={finish} className="border border-line px-3 py-1.5 text-sm">
                    {finish}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted">Design</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{product.design}</p>
            </div>
            <div className="mt-8">
              <h2 className="text-[11px] uppercase tracking-[0.2em] text-muted">Applications</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{product.applications.join(' · ')}</p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-8">
              {product.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">{spec.label}</dt>
                  <dd className="mt-1 text-sm">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button onClick={() => openQuote('Interior Doors')}>Request a Quote</Button>
              <Button to="/contact" variant="outline">
                Contact
              </Button>
            </div>
          </div>
        </Container>
      </section>
      {related.length ? (
        <section className="border-t border-line bg-surface py-16 lg:py-24">
          <Container>
            <h2 className="mb-10 text-2xl font-medium tracking-[-0.03em]">Related doors</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <CtaBand />
    </>
  )
}
