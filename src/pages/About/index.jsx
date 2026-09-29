import { Seo } from '../../components/ui/Seo'
import { Container } from '../../components/ui/Container'
import { WorkshopMap } from '../../components/ui/WorkshopMap'
import { CtaBand } from '../../components/sections/CtaBand'
import { company } from '../../data/company'

const sections = [
  {
    title: 'Who We Are',
    text: 'SANRO Fibre Glass Industries is a manufacturer based in Thankamany, Idukki. We make premium fibre interior doors and allied fibre solutions for homes and commercial interiors across Kerala.',
    icon: WhoWeAre,
  },
  {
    title: 'Why Fibre',
    text: 'Timber in Kerala fights the weather. It swells, cracks and invites termites. A SANRO fibre leaf is moulded to stay square through monsoon and dry months, so the room can stay quiet.',
    icon: WhyFibre,
  },
  {
    title: 'What We Do',
    text: 'Our primary work is interior fibre doors — modern, classic, designer, minimal and fully custom. We also manufacture custom fibre components and provide professional waterproofing.',
    icon: WhatWeDo,
  },
  {
    title: 'The Workshop',
    text: 'The work stays in Thankamany. Design, material preparation, moulding, finishing and inspection happen in our own process, and the leaf leaves Idukki ready for the site.',
    icon: Workshop,
  },
  {
    title: 'Our Manufacturing',
    text: 'Doors are designed, moulded, finished and inspected in our own process. The fibre body is specified for humidity, so the geometry stays true through monsoon and dry seasons.',
    icon: Manufacturing,
  },
  {
    title: 'Our Approach',
    text: 'We treat the door as architecture. Proportion, finish and hardware are coordinated with the room rather than sold as a catalogue leftover.',
    icon: Approach,
  },
  {
    title: 'Quality',
    text: 'Each leaf is checked for face, dimension, finish and hardware compatibility before it leaves the workshop. Consistency across a project set is part of the specification, not a bonus.',
    icon: Quality,
  },
  {
    title: 'Customisation',
    text: 'Size, groove, colour, texture and paired suites can be made to the interior. Architects and homeowners can work from the collection or from a drawing.',
    icon: Customisation,
  },
  {
    title: 'Who We Work With',
    text: 'A homeowner replacing one leaf. An architect coordinating a house. A commercial interior that needs the same face repeated across a floor. The specification changes. The standard does not.',
    icon: Clients,
  },
  {
    title: 'Waterproofing',
    text: 'Water does not stop at the door. SANRO also specifies waterproofing for terraces, roofs, bathrooms and walls, so the interior the door belongs to stays sound.',
    icon: Waterproofing,
  },
  {
    title: 'How We Begin',
    text: 'A project starts with the room: the opening, the groove, the colour, and where the door has to work hardest. From there the leaf is drawn, made and checked before it leaves the workshop.',
    icon: Begin,
  },
  {
    title: 'Our Commitment',
    text: 'A SANRO door should still close the way it did on the first day — after weather, after use, after the house has been lived in.',
    icon: Commitment,
  },
]

function Mark({ children }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-8 w-8 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function WhoWeAre() {
  return (
    <Mark>
      <circle cx="16" cy="16" r="11" />
      <path d="M12.5 22.5v-8.2c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v8.2" />
      <circle cx="17.2" cy="17" r="0.7" fill="currentColor" stroke="none" />
    </Mark>
  )
}

function WhatWeDo() {
  return (
    <Mark>
      <path d="M5.5 24V11h6.5v13" />
      <path d="M12.75 24V8h6.5v16" />
      <path d="M20 24V11h6.5v13" />
      <path d="M16 12.5v7" />
    </Mark>
  )
}

function Manufacturing() {
  return (
    <Mark>
      <rect x="8" y="5.5" width="16" height="4.5" rx="1" />
      <path d="M11 10v3.5M16 10v3.5M21 10v3.5" />
      <path d="M6.5 20.5h19" />
      <path d="M8 20.5V24a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5" />
    </Mark>
  )
}

function Approach() {
  return (
    <Mark>
      <path d="M6 26V9.5h11" />
      <path d="M17 13h9v13H13" />
      <path d="M17 13v13" />
      <circle cx="22.4" cy="19.5" r="0.7" fill="currentColor" stroke="none" />
    </Mark>
  )
}

function Quality() {
  return (
    <Mark>
      <rect x="6" y="6" width="20" height="20" rx="6" />
      <path d="M11 16.2l3.2 3.2 7-7.2" />
    </Mark>
  )
}

function Customisation() {
  return (
    <Mark>
      <rect x="11" y="7" width="10" height="18" rx="1" />
      <path d="M6 9.5h3.5M6 22.5h3.5M22.5 9.5H26M22.5 22.5H26" />
      <path d="M8 16H5.5M26.5 16H24" />
    </Mark>
  )
}

function WhyFibre() {
  return (
    <Mark>
      <path d="M13 7h6v18h-6z" />
      <path d="M22 9.5c1.4 1.6 1.4 3.4 0 5" />
      <path d="M24.2 8c2.2 2.4 2.2 5.6 0 8" />
      <path d="M16 20.5v.1" />
    </Mark>
  )
}

function Workshop() {
  return (
    <Mark>
      <path d="M5 14.5 16 6l11 8.5" />
      <path d="M8 13.5V25h16V13.5" />
      <path d="M13.5 25v-6h5v6" />
    </Mark>
  )
}

function Clients() {
  return (
    <Mark>
      <path d="M5 25V14l6-4.5L17 14v11" />
      <path d="M17 25V12h10v13" />
      <path d="M20.5 25v-4h3v4" />
    </Mark>
  )
}

function Waterproofing() {
  return (
    <Mark>
      <path d="M6 20.5 16 13l10 7.5" />
      <path d="M8.5 19.5V25h15v-5.5" />
      <path d="M16 8.2c1.6 2 1.6 3.6 0 5.2-1.6-1.6-1.6-3.2 0-5.2z" />
    </Mark>
  )
}

function Begin() {
  return (
    <Mark>
      <path d="M8 7h12l4 4v14H8z" />
      <path d="M20 7v4h4" />
      <path d="M12 16h8M12 20h5" />
    </Mark>
  )
}

function Commitment() {
  return (
    <Mark>
      <path d="M16 5.5a10.5 10.5 0 1 1-6.8 2.6" />
      <path d="M8.2 5.2v4.2h4.2" />
      <path d="M13.5 13.5h5v9h-5z" />
    </Mark>
  )
}

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
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <article
                key={section.title}
                className="rounded-card border border-transparent bg-surface px-6 py-8 shadow-card transition-colors duration-300 hover:border-accent"
              >
                <Icon />
                <h2 className="mt-5 text-2xl font-medium tracking-[-0.03em]">{section.title}</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted">{section.text}</p>
              </article>
            )
          })}
        </Container>
      </section>
      <section className="bg-white pb-16 lg:pb-24">
        <Container>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Workshop</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{company.location.display}</h2>
          <div className="mt-8">
            <WorkshopMap />
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
