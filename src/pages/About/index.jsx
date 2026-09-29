import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { CtaBand } from '../../components/sections/CtaBand'

const sections = [
  {
    title: 'Who We Are',
    text: 'SANRO Fibre Glass Industries is a manufacturer based in Marigiri, Idukki. We make premium fibre interior doors and allied fibre solutions for homes and commercial interiors across Kerala.',
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
      <section className="bg-surface pt-28 pb-16 lg:pt-32 lg:pb-20">
        <Container className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">About</p>
            <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A manufacturer of interior fibre doors.
            </h1>
          </div>
          <p className="max-w-lg text-[15px] leading-7 text-muted">
            SANRO was built around a simple observation: in Kerala, a door has to survive the climate as well as serve
            the interior. Fibre, specified properly, does both.
          </p>
        </Container>
      </section>
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[50vh] overflow-hidden bg-surface">
            <img
              src="/images/brand/about.jpg"
              alt="SANRO manufacturing and design process"
              className="img-cover min-h-[50vh]"
            />
          </div>
          <div className="min-h-[50vh] overflow-hidden bg-surface">
            <img
              src="/images/factory/floor.jpg"
              alt="SANRO workshop floor"
              className="img-cover min-h-[50vh]"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="border-t border-line pt-8">
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
