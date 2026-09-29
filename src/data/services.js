export const services = [
  {
    slug: 'fibre-door-solutions',
    title: 'Fibre Door Solutions',
    summary: 'Interior fibre doors and customised door solutions manufactured for daily living.',
    description:
      'From flush contemporary doors to panelled classics, SANRO designs and manufactures fibre interior doors for homes, apartments and commercial interiors. Doors can be specified as individual pieces or as coordinated sets across a project.',
    image: '/images/doors/classic-02.jpg',
    items: [
      'Interior fibre doors',
      'Bathroom and wet-area doors',
      'Project door sets',
      'Finish and colour matching',
    ],
  },
  {
    slug: 'waterproofing',
    title: 'Waterproofing',
    href: '/services/waterproofing',
    summary: 'Residential and commercial waterproofing solutions that sit alongside our manufacturing work.',
    description:
      'SANRO provides professional waterproofing for terraces, roofs, bathrooms, walls and leakage treatment. The work is specified to protect the building envelope — not as an afterthought to the door.',
    image: '/images/waterproofing/hero.jpg',
    items: [
      'Terrace waterproofing',
      'Roof waterproofing',
      'Bathroom waterproofing',
      'Wall waterproofing',
      'Leakage treatment',
      'Commercial waterproofing',
    ],
  },
  {
    slug: 'custom-fibre-solutions',
    title: 'Custom Fibre Solutions',
    summary: 'Custom-made fibre products according to project requirements.',
    description:
      'Beyond the door collection, SANRO manufactures custom fibre components for interiors and construction — panels, specialised mouldings and made-to-drawing pieces for architects and contractors.',
    image: '/madebysanro/manufacturing.png',
    items: [
      'Custom moulded components',
      'Interior fibre panels',
      'Made-to-drawing pieces',
      'Project collaboration',
    ],
  },
  {
    slug: 'other-solutions',
    title: 'Other Solutions',
    summary: 'Additional fibre and construction support as project needs expand.',
    description:
      'This category remains open for specialised work — repair, replacement programmes, and allied fibre applications that sit naturally with SANRO’s manufacturing capability.',
    image: '/images/factory/floor.jpg',
    items: [
      'Replacement programmes',
      'Allied fibre applications',
      'Site coordination',
      'Aftercare guidance',
    ],
  },
]

export const waterproofingServices = [
  {
    title: 'Terrace Waterproofing',
    text: 'Protects exposed terraces from standing water and seasonal monsoon ingress.',
    image: '/images/waterproofing/terrace.jpg',
  },
  {
    title: 'Roof Waterproofing',
    text: 'Specified for sloped and flat roofs where leaks travel far before they are seen.',
    image: '/images/waterproofing/roof.jpg',
  },
  {
    title: 'Bathroom Waterproofing',
    text: 'Treats wet rooms at the source so finishes and adjacent rooms stay sound.',
    image: '/images/waterproofing/bathroom.jpg',
  },
  {
    title: 'Wall Waterproofing',
    text: 'Addresses damp walls, seepage and moisture tracking through masonry.',
    image: '/images/rooms/commercial.jpg',
  },
  {
    title: 'Leakage Treatment',
    text: 'Diagnostic treatment for active leaks in residential and commercial buildings.',
    image: '/images/projects/water-01.jpg',
  },
  {
    title: 'Commercial Waterproofing',
    text: 'Larger envelopes — offices, institutions and mixed-use buildings — specified as a system.',
    image: '/images/projects/comm-01.jpg',
  },
]

export function getServiceBySlug(slug) {
  return services.find((item) => item.slug === slug) ?? null
}
