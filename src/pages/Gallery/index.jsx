import { useMemo, useState } from 'react'
import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { ProjectFilter } from '../../components/project/ProjectFilter'
import { CtaBand } from '../../components/sections/CtaBand'
import { galleryCategories, getGalleryByCategory } from '../../data/gallery'

export default function GalleryPage() {
  const [category, setCategory] = useState('All')
  const items = useMemo(() => getGalleryByCategory(category), [category])

  return (
    <>
      <Seo
        title="Gallery | SANRO Fibre Glass Industries"
        description="A visual gallery of SANRO doors, interiors, manufacturing, projects and waterproofing."
      />
      <section className="bg-white pt-28 pb-12 lg:pt-32">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Gallery</p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">The work, as it looks.</h1>
          <div className="mt-10">
            <ProjectFilter filters={galleryCategories} active={category} onChange={setCategory} />
          </div>
        </Container>
      </section>
      <section className="bg-white py-12 lg:py-16">
        <Container>
          <div className="masonry">
            {items.map((item) => (
              <figure key={item.id} className="masonry-item overflow-hidden rounded-card bg-surface shadow-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover ${item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
