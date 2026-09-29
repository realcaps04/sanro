import { useMemo, useState } from 'react'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { ProductGrid } from '../../components/product/ProductGrid'
import { CtaBand } from '../../components/sections/CtaBand'
import { productCategories, products } from '../../data/products'
import { ProjectFilter } from '../../components/project/ProjectFilter'

export default function ProductsPage() {
  const [category, setCategory] = useState('All')
  const filters = ['All', ...productCategories]
  const list = useMemo(
    () => (category === 'All' ? products : products.filter((item) => item.category === category)),
    [category],
  )

  return (
    <>
      <Seo
        title="Interior Fibre Doors | SANRO Collection"
        description="Explore the SANRO collection of modern, classic, designer, minimal and custom fibre interior doors."
      />
      <section className="bg-surface pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Collection</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Explore the SANRO collection
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            A collection of interior doors designed for different spaces, styles and architectural preferences.
          </p>
          <div className="mt-10">
            <ProjectFilter filters={filters} active={category} onChange={setCategory} />
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <ProductGrid products={list} />
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
