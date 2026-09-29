export const projectFilters = ['All', 'Residential', 'Commercial', 'Interior', 'Waterproofing', 'Custom']

export const projects = [
  {
    slug: 'idukki-residence-doors',
    name: 'Highland Residence',
    location: 'Idukki, Kerala',
    category: 'Residential',
    tags: ['Residential', 'Interior'],
    short: 'A full interior door set for a family house in the highlands, specified for humidity and daily use.',
    description:
      'SANRO manufactured a coordinated set of interior fibre doors for a family residence in Idukki. The brief asked for a calm, modern face across living, bedrooms and bathrooms, with finishes that would hold through monsoon humidity.',
    image: '/images/projects/resid-01.jpg',
    images: ['/images/projects/resid-01.jpg', '/images/doors/classic-02.jpg', '/images/doors/classic-01.jpg'],
    year: '2025',
  },
  {
    slug: 'kochi-apartment-interiors',
    name: 'Marine Drive Apartment',
    location: 'Kochi, Kerala',
    category: 'Interior',
    tags: ['Residential', 'Interior', 'Custom'],
    short: 'Custom-finish fibre doors for a city apartment with a tight, gallery-like palette.',
    description:
      'A compact apartment needed doors that would disappear into pale joinery. SANRO supplied flush minimal doors, colour-matched to the interior palette, including a moisture-specified bathroom leaf.',
    image: '/images/projects/resid-02.jpg',
    images: ['/images/projects/resid-02.jpg', '/images/doors/custom-01.jpg', '/images/doors/customise.jpg'],
    year: '2025',
  },
  {
    slug: 'thrissur-villa-collection',
    name: 'Courtyard Villa',
    location: 'Thrissur, Kerala',
    category: 'Residential',
    tags: ['Residential', 'Custom', 'Interior'],
    short: 'Designer and classic leaves combined across a courtyard house with mixed room characters.',
    description:
      'The villa mixed formal rooms with quieter private wings. SANRO supplied a hybrid set — classic panelled doors for the formal rooms and designer flush doors for the private wing — manufactured as one coordinated order.',
    image: '/images/projects/resid-03.jpg',
    images: ['/images/projects/resid-03.jpg', '/images/doors/classic-01.jpg', '/images/doors/designer-01.jpg'],
    year: '2024',
  },
  {
    slug: 'kottayam-office-suite',
    name: 'Workspace Suite',
    location: 'Kottayam, Kerala',
    category: 'Commercial',
    tags: ['Commercial', 'Interior'],
    short: 'Quiet flush doors for a professional office, specified for circulation and meeting rooms.',
    description:
      'An office suite needed doors that would read as architecture rather than joinery. SANRO supplied a run of minimal flush doors for cabins, meeting rooms and service spaces.',
    image: '/images/projects/comm-02.jpg',
    images: ['/images/projects/comm-02.jpg', '/images/doors/designer-01.jpg', '/images/doors/custom-02.jpg'],
    year: '2025',
  },
  {
    slug: 'ernakulam-commercial-lobby',
    name: 'Lobby & Suites',
    location: 'Ernakulam, Kerala',
    category: 'Commercial',
    tags: ['Commercial', 'Custom'],
    short: 'Oversized custom leaves for a commercial lobby and adjoining professional suites.',
    description:
      'The lobby required a larger opening than a standard leaf. SANRO manufactured custom double doors with a matching suite of interior doors for the offices beyond.',
    image: '/images/projects/comm-01.jpg',
    images: ['/images/projects/comm-01.jpg', '/images/doors/custom-02.jpg', '/images/rooms/commercial.jpg'],
    year: '2024',
  },
  {
    slug: 'alappuzha-terrace-waterproofing',
    name: 'Terrace Protection',
    location: 'Alappuzha, Kerala',
    category: 'Waterproofing',
    tags: ['Waterproofing', 'Residential'],
    short: 'Terrace and bathroom waterproofing for a house exposed to prolonged monsoon rain.',
    description:
      'A residential terrace had a history of seepage into the rooms below. SANRO specified and executed terrace waterproofing together with bathroom wet-area treatment, coordinated with door replacement in the affected rooms.',
    image: '/images/projects/water-01.jpg',
    images: ['/images/projects/water-01.jpg', '/images/waterproofing/terrace.jpg', '/images/waterproofing/bathroom.jpg'],
    year: '2025',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((item) => item.slug === slug) ?? null
}

export function getProjectsByFilter(filter) {
  if (!filter || filter === 'All') return projects
  return projects.filter((item) => item.tags.includes(filter) || item.category === filter)
}
