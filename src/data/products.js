export const productCategories = ['Modern', 'Classic', 'Designer', 'Minimal', 'Custom']

export const products = [
  {
    slug: 'sanro-modern-01',
    name: 'SANRO Modern 01',
    code: 'SR-M01',
    category: 'Modern',
    short:
      'A flush-panel fibre door with a quiet vertical grain and a refined, architectural profile.',
    description:
      'SANRO Modern 01 is designed for contemporary interiors that need a door to recede into the architecture rather than compete with it. The flush fibre body is moulded for dimensional stability in humid climates, then finished to a smooth, even surface that accepts a range of interior colours.',
    image: '/images/doors/modern-01.jpg',
    gallery: ['/images/doors/modern-01.jpg', '/images/doors/customise.jpg', '/images/rooms/living.jpg'],
    finishes: ['Matte White', 'Warm Oak', 'Graphite', 'Custom colour'],
    design: 'Flush panel with subtle vertical grain. Concealed edge detailing. Optional groove lines.',
    applications: ['Living spaces', 'Bedrooms', 'Offices', 'Apartment interiors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '80" × 32" / 36"' },
      { label: 'Thickness', value: '32–35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-modern-02',
    name: 'SANRO Modern 02',
    code: 'SR-M02',
    category: 'Modern',
    short:
      'A two-panel contemporary door with a crisp reveal, suited to open-plan living and circulation.',
    description:
      'Modern 02 introduces a shallow two-panel geometry for interiors that want a little more definition without returning to traditional moulding. The fibre construction holds its lines through Kerala’s wet and dry seasons.',
    image: '/images/doors/modern-02.jpg',
    gallery: ['/images/doors/modern-02.jpg', '/images/doors/customise.jpg', '/images/rooms/living.jpg'],
    finishes: ['Stone Grey', 'Ivory', 'Teak Tone', 'Custom colour'],
    design: 'Shallow two-panel geometry with a clean stiles-and-rails silhouette.',
    applications: ['Living spaces', 'Dining', 'Passage doors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '80" × 32" / 36"' },
      { label: 'Thickness', value: '32–35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-modern-03',
    name: 'SANRO Modern 03',
    code: 'SR-M03',
    category: 'Modern',
    short: 'A taller visual language with a single vertical recess, made for high-ceiling interiors.',
    description:
      'Modern 03 is proportioned for spaces with height. A single vertical recess draws the eye upward without ornament, keeping the door calm, precise and architectural.',
    image: '/images/doors/modern-03.jpg',
    gallery: ['/images/doors/modern-03.jpg', '/images/doors/customise.jpg'],
    finishes: ['Soft Black', 'Warm White', 'Walnut Tone'],
    design: 'Single vertical recess. Slim perimeter frame. Optional matching architrave.',
    applications: ['Villas', 'Duplexes', 'Commercial interiors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '84" × 36" (custom heights available)' },
      { label: 'Thickness', value: '35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-classic-01',
    name: 'SANRO Classic 01',
    code: 'SR-C01',
    category: 'Classic',
    short:
      'A four-panel fibre door that carries traditional proportions with a contemporary, durable body.',
    description:
      'Classic 01 is for homes that still want panelled character — without the swelling, cracking and maintenance of timber in a wet climate. The panels are moulded into the fibre body so the geometry stays true over time.',
    image: '/images/doors/classic-01.jpg',
    gallery: ['/images/doors/classic-01.jpg', '/images/doors/intro.jpg'],
    finishes: ['Honey Teak', 'Mahogany Tone', 'Antique White'],
    design: 'Four-panel raised profile with restrained moulding.',
    applications: ['Bedrooms', 'Traditional homes', 'Heritage-inspired interiors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '80" × 32" / 36"' },
      { label: 'Thickness', value: '35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-classic-02',
    name: 'SANRO Classic 02',
    code: 'SR-C02',
    category: 'Classic',
    short: 'A six-panel classic with a quieter profile, suited to bedrooms and formal rooms.',
    description:
      'Classic 02 uses a six-panel layout with shallower relief, so the door reads as traditional without becoming heavy. Ideal where multiple doors sit in a single corridor.',
    image: '/images/doors/classic-02.jpg',
    gallery: ['/images/doors/classic-02.jpg', '/images/rooms/bedroom.jpg'],
    finishes: ['Natural Teak Tone', 'Cream', 'Deep Walnut'],
    design: 'Six-panel layout with shallow relief and a square-edge option.',
    applications: ['Bedrooms', 'Study', 'Guest rooms'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '80" × 30" / 32"' },
      { label: 'Thickness', value: '32 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: false,
  },
  {
    slug: 'sanro-designer-01',
    name: 'SANRO Designer 01',
    code: 'SR-D01',
    category: 'Designer',
    short: 'A sculpted groove composition for interiors that treat the door as a designed surface.',
    description:
      'Designer 01 is a composed groove pattern across a flush fibre face. It is intended for feature rooms — living, dining, principal bedrooms — where the door is part of the interior language.',
    image: '/images/doors/designer-01.jpg',
    gallery: ['/images/doors/designer-01.jpg', '/images/doors/customise.jpg', '/images/gallery/g1.jpg'],
    finishes: ['Putty', 'Olive', 'Charcoal', 'Custom colour'],
    design: 'Linear groove composition. Available as a matching pair for double openings.',
    applications: ['Feature living rooms', 'Principal bedrooms', 'Boutique interiors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '80" × 36" / custom' },
      { label: 'Thickness', value: '35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-designer-02',
    name: 'SANRO Designer 02',
    code: 'SR-D02',
    category: 'Designer',
    short: 'A geometrically divided face with a gallery-like composure for statement interiors.',
    description:
      'Designer 02 divides the door face into a quiet geometric field. It works especially well in spaces with art, stone or timber joinery that need a door of equal intent.',
    image: '/images/doors/designer-02.jpg',
    gallery: ['/images/doors/designer-02.jpg', '/images/gallery/g3.jpg'],
    finishes: ['Warm Sand', 'Ink', 'Custom colour'],
    design: 'Geometric field with balanced divisions. Optional inlay texture.',
    applications: ['Designer homes', 'Hospitality interiors', 'Show residences'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '84" × 36" / custom' },
      { label: 'Thickness', value: '35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: false,
  },
  {
    slug: 'sanro-minimal-01',
    name: 'SANRO Minimal 01',
    code: 'SR-N01',
    category: 'Minimal',
    short: 'An almost silent flush door for interiors that prefer uninterrupted planes.',
    description:
      'Minimal 01 is a true flush door — no grooves, no panels, no visual noise. It is specified where walls, joinery and doors should read as a single architectural surface.',
    image: '/images/doors/minimal-01.jpg',
    gallery: ['/images/doors/minimal-01.jpg', '/images/rooms/office.jpg'],
    finishes: ['Gallery White', 'Warm Grey', 'Custom colour match'],
    design: 'Fully flush face. Hidden or slim hardware recommended.',
    applications: ['Minimal interiors', 'Offices', 'Gallery-like homes'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '80" × 32" / 36"' },
      { label: 'Thickness', value: '32 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-minimal-02',
    name: 'SANRO Minimal 02',
    code: 'SR-N02',
    category: 'Minimal',
    short: 'A bathroom-ready flush fibre door with a tighter, moisture-first specification.',
    description:
      'Minimal 02 is specified for bathrooms, utility rooms and wet-adjacent interiors. The fibre body and sealed edges are designed for daily moisture without swelling or peeling.',
    image: '/images/doors/minimal-02.jpg',
    gallery: ['/images/doors/minimal-02.jpg', '/images/rooms/bathroom.jpg'],
    finishes: ['White', 'Soft Grey', 'Sage'],
    design: 'Flush face with sealed edges. Suitable for wet-adjacent rooms.',
    applications: ['Bathrooms', 'Utility', 'Service corridors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: '78" × 28" / 30"' },
      { label: 'Thickness', value: '30–32 mm' },
      { label: 'Core', value: 'Moisture-stable fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: false,
  },
  {
    slug: 'sanro-custom-01',
    name: 'SANRO Custom 01',
    code: 'SR-X01',
    category: 'Custom',
    short: 'A made-to-project door for non-standard openings, paired suites and unique finishes.',
    description:
      'Custom 01 is the starting point for project work — villas, apartments and commercial interiors that need matching sets, unusual dimensions, or a finish that belongs to a specific palette.',
    image: '/images/doors/custom-01.jpg',
    gallery: ['/images/doors/custom-01.jpg', '/images/doors/customise.jpg', '/images/factory/design.jpg'],
    finishes: ['Client-specified colour', 'Texture match', 'Wood-tone series'],
    design: 'Fully custom face, size and hardware coordination.',
    applications: ['Villas', 'Apartment projects', 'Hospitality'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: 'Made to opening' },
      { label: 'Thickness', value: '30–40 mm' },
      { label: 'Core', value: 'Specified per application' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: false,
  },
  {
    slug: 'sanro-custom-02',
    name: 'SANRO Custom 02',
    code: 'SR-X02',
    category: 'Custom',
    short: 'A double-leaf or oversized fibre door for principal openings and commercial entries.',
    description:
      'Custom 02 covers larger openings — principal living rooms, office suites and commercial interiors — where a single leaf is not enough and the door must still behave as architecture.',
    image: '/images/doors/custom-02.jpg',
    gallery: ['/images/doors/custom-02.jpg', '/images/rooms/commercial.jpg'],
    finishes: ['Project palette', 'Metallic accent options', 'Timber-tone'],
    design: 'Double leaf or oversized single. Coordinated meeting stiles.',
    applications: ['Principal rooms', 'Offices', 'Commercial interiors'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite' },
      { label: 'Standard size', value: 'Made to opening' },
      { label: 'Thickness', value: '35–40 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: false,
  },
]

export function getProductBySlug(slug) {
  return products.find((item) => item.slug === slug) ?? null
}

export function getFeaturedProducts() {
  return products.filter((item) => item.featured)
}

export function getProductsByCategory(category) {
  if (!category || category === 'All') return products
  return products.filter((item) => item.category === category)
}

export function getRelatedProducts(slug, limit = 3) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  return products.filter((item) => item.slug !== slug && item.category === current.category).slice(0, limit)
}
