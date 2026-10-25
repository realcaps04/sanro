import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { ProductGrid } from '../../components/product/ProductGrid'
import { CustomRequestCard } from '../../components/product/CustomRequestCard'
import { CtaBand } from '../../components/sections/CtaBand'
import { productCategories, products } from '../../data/products'
import { ProjectFilter } from '../../components/project/ProjectFilter'

function matchesQuery(product, query) {
  const haystack = [
    product.name,
    product.code,
    product.category,
    product.short,
    product.description,
    product.design,
    ...(product.finishes ?? []),
    ...(product.applications ?? []),
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(query)
}

const PAGE_SIZE = 8

export default function ProductsPage() {
  const [params] = useSearchParams()
  const query = (params.get('q') || '').trim()
  const [category, setCategory] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const filters = ['All', ...productCategories]
  const list = useMemo(() => {
    const byCategory = category === 'All' ? products : products.filter((item) => item.category === category)
    if (!query) return byCategory
    const needle = query.toLowerCase()
    return byCategory.filter((item) => matchesQuery(item, needle))
  }, [category, query])

  useEffect(() => {
    setVisible(PAGE_SIZE)
  }, [category, query])

  const shown = list.slice(0, visible)
  const hasMore = visible < list.length

  function onCategoryChange(next) {
    setCategory(next)
  }

  return (
    <>
      <Seo
        title="Interior Fibre Doors | SANRO Collection"
        description="Explore the SANRO collection of modern, classic, designer, minimal and custom fibre interior doors."
      />
      <section className="bg-white pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Collection</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Explore the <span className="text-accent">SANRO</span> collection
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
            A collection of interior doors designed for different spaces, styles and architectural preferences.
          </p>
          {query ? (
            <p className="mt-6 text-sm text-muted">
              Results for <span className="text-ink">“{query}”</span>
            </p>
          ) : null}
          <div className="mt-10">
            <ProjectFilter filters={filters} active={category} onChange={onCategoryChange} />
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container>
          {list.length || category === 'Custom' ? (
            <>
              <ProductGrid
                products={shown}
                trailing={category === 'Custom' ? <CustomRequestCard /> : null}
              />
              {hasMore ? (
                <div className="mt-14 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisible((count) => count + PAGE_SIZE)}
                    className="rounded-full border border-ink bg-white px-7 py-3 text-[13px] font-medium tracking-normal text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Show more doors
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <p className="text-sm text-muted">No doors match that search. Try a style such as Modern, Classic, or Bathroom.</p>
          )}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
