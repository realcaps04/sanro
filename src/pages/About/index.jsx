import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { CtaBand } from '../../components/sections/CtaBand'

const sections = [
  {
    title: 'Who We Are',
    text: 'SANRO Fibre Glass Industries is a manufacturer based in Thankamany, Idukki. We make premium fibre interior doors and allied fibre solutions for homes and commercial interiors across Kerala.',
  },
  {
    title: 'What We Do',
    text: 'Our primary work is interior fibre doors — modern, classic, designer, minimal and fully custom. We also manufacture custom fibre components and provide professional waterproofing.',
  },
  {
    title: 'Our Manufacturing',
    text: 'Doors are designed, moulded, finished and inspected in our own process. The fibre body is specified for humidity, so the geometry stays true through monsoon and dry seasons.',
  },
  {
    title: 'Our Approach',
    text: 'We treat the door as architecture. Proportion, finish and hardware are coordinated with the room rather than sold as a catalogue leftover.',
  },
  {
    title: 'Quality',
    text: 'Each leaf is checked for face, dimension, finish and hardware compatibility before it leaves the workshop. Consistency across a project set is part of the specification, not a bonus.',
  },
  {
    title: 'Customisation',
    text: 'Size, groove, colour, texture and paired suites can be made to the interior. Architects and homeowners can work from the collection or from a drawing.',
  },
  {
    title: 'Our Commitment',
    text: 'A SANRO door should still close the way it did on the first day — after weather, after use, after the house has been lived in.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About SANRO Fibre Glass Industries"
        description="SANRO is a fibre manufacturer in Idukki, Kerala, focused on premium interior fibre doors, custom solutions and waterproofing."
      />
      <section className="bg-white pt-28 pb-12 lg:pt-32 lg:pb-16">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">About</p>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">
            SANRO was built around a simple observation: in Kerala, a door has to survive the climate as well as serve
            the interior. Fibre, specified properly, does both.
          </p>
          <h1 className="mt-8 max-w-xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            A manufacturer of interior fibre doors.
          </h1>
        </Container>
      </section>
      <section className="bg-white pb-4">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-[16/10] overflow-hidden rounded-card bg-surface shadow-card">
              <img
                src="/images/brand/about.jpg"
                alt="SANRO manufacturing and design process"
                className="img-cover"
              />
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-card bg-surface shadow-card">
              <img src="/images/factory/floor.jpg" alt="SANRO workshop floor" className="img-cover" />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-card bg-surface px-6 py-8 shadow-card">
              <h2 className="text-2xl font-medium tracking-[-0.03em]">{section.title}</h2>
              <p className="mt-4 text-[15px] leading-7 text-muted">{section.text}</p>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
