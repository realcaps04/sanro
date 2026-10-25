export const productCategories = ['Modern', 'Classic', 'Designer', 'Minimal', 'Waterproof', 'Custom']

const doors = {
  modern04: '/images/sanrodoors/Elegant Modern Entryway with Wooden Door.png',
  classic03: '/images/sanrodoors/Sage Green Foyer with Mahogany Door.png',
  designer03: '/images/sanrodoors/Warm Modern Entryway with Stained Glass Door.png',
  minimal03: '/images/sanrodoors/Warm Scandinavian Entryway Living Room.png',
}

export const products = [
  {
    slug: 'sanro-modern-04',
    name: 'SANRO Modern 04',
    code: 'SR-M04',
    category: 'Modern',
    short: 'An elegant modern entryway door with recessed geometric panels in a warm wood tone.',
    description:
      'Modern 04 pairs concentric rectangular panels with side square accents. The warm wood-tone fibre face reads as architecture in foyers and living rooms, without the movement of timber.',
    image: doors.modern04,
    arImage: '/images/doors/ar/modern-04.png',
    gallery: [doors.modern04, doors.classic03],
    finishes: ['Mahogany Tone', 'Warm Oak', 'Custom colour'],
    design: 'Concentric rectangular panels with side square accents and a slim frame.',
    applications: ['Entryways', 'Living spaces', 'Bedrooms', 'Apartment interiors'],
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
    slug: 'sanro-classic-03',
    name: 'SANRO Classic 03',
    code: 'SR-C03',
    category: 'Classic',
    short: 'A mahogany panelled door with a tall vertical field, suited to foyers and formal rooms.',
    description:
      'Classic 03 uses a tall vertical panel beside a column of recessed rectangles. It brings classic depth to interiors that want timber character with fibre stability.',
    image: doors.classic03,
    arImage: '/images/doors/ar/classic-03.png',
    gallery: [doors.classic03, doors.modern04],
    finishes: ['Mahogany', 'Deep Walnut', 'Custom colour'],
    design: 'Vertical panel stack with classic proportions and matching wood frame.',
    applications: ['Foyers', 'Bedrooms', 'Traditional homes', 'Formal rooms'],
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
    slug: 'sanro-designer-03',
    name: 'SANRO Designer 03',
    code: 'SR-D03',
    category: 'Designer',
    short: 'A warm modern door with a stained-glass upper panel for statement openings.',
    description:
      'Designer 03 combines a solid lower panel with an art-glass upper light. Fibre construction keeps the leaf stable while the glass insert adds colour and presence in living and entry spaces.',
    image: doors.designer03,
    arImage: '/images/doors/ar/designer-03.png',
    gallery: [doors.designer03, doors.minimal03],
    finishes: ['Warm Mahogany', 'Cherry Tone', 'Custom colour'],
    design: 'Solid lower panel with framed stained-glass upper inset.',
    applications: ['Living rooms', 'Entryways', 'Feature interiors', 'Boutique homes'],
    specs: [
      { label: 'Material', value: 'Moulded fibre composite with glass inset' },
      { label: 'Standard size', value: '80" × 32" / 36"' },
      { label: 'Thickness', value: '35 mm' },
      { label: 'Core', value: 'High-density fibre core' },
      { label: 'Resistance', value: 'Water, termite, warp' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-minimal-03',
    name: 'SANRO Minimal 03',
    code: 'SR-N03',
    category: 'Minimal',
    short: 'A Scandinavian-warm panelled door for bright interiors with quiet geometry.',
    description:
      'Minimal 03 is a light wood-tone fibre door with a vertical column of recessed panels. Soft Nordic proportions for living spaces and bedrooms that prefer calm over ornament.',
    image: doors.minimal03,
    arImage: '/images/doors/ar/minimal-03.png',
    gallery: [doors.minimal03, doors.designer03],
    finishes: ['Light Oak', 'Natural Ash', 'Warm White'],
    design: 'Central column of five recessed panels with square corner accents.',
    applications: ['Living spaces', 'Bedrooms', 'Apartments', 'Scandinavian interiors'],
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
    slug: 'sanro-waterproof-bathroom',
    name: 'SANRO Bathroom Waterproofing',
    code: 'SR-WP01',
    category: 'Waterproof',
    short: 'Wet-area waterproofing for bathrooms so finishes and adjacent rooms stay sound.',
    description:
      'Bathroom waterproofing treats wet rooms at the source — floors, wet walls and junctions — so monsoon humidity and daily use do not travel into neighbouring spaces.',
    image: '/images/waterproofing/card-bathroom.jpg',
    gallery: [
      '/images/waterproofing/card-bathroom.jpg',
      '/images/waterproofing/Rooftop Waterproofing with Scenic Mountain Views (1).png',
    ],
    finishes: ['Membrane systems', 'Cementitious coatings', 'Project-specified'],
    design: 'Full wet-area treatment coordinated with bathroom finishes and door openings.',
    applications: ['Bathrooms', 'Utility rooms', 'Wet areas', 'Residential waterproofing'],
    specs: [
      { label: 'Scope', value: 'Bathroom floors, wet walls, junctions' },
      { label: 'Climate', value: 'Specified for Kerala monsoon conditions' },
      { label: 'Finish', value: 'Compatible with tile and stone overlays' },
      { label: 'Type', value: 'Residential & apartment wet rooms' },
      { label: 'Resistance', value: 'Standing water, seepage, humidity' },
    ],
    featured: true,
  },
  {
    slug: 'sanro-waterproof-rooftop',
    name: 'SANRO Rooftop Waterproofing',
    code: 'SR-WP02',
    category: 'Waterproof',
    short: 'Terrace and rooftop membrane work that protects the building envelope below.',
    description:
      'Rooftop waterproofing applies a continuous membrane system across exposed terraces and flat roofs, stopping standing water and seasonal ingress before it reaches the rooms below.',
    image: '/images/waterproofing/Rooftop Waterproofing with Scenic Mountain Views (1).png',
    gallery: [
      '/images/waterproofing/Rooftop Waterproofing with Scenic Mountain Views (1).png',
      '/images/waterproofing/card-bathroom.jpg',
    ],
    finishes: ['Liquid membrane', 'Torch-on systems', 'Project-specified'],
    design: 'Full terrace and roof envelope treatment with detailed parapet and drain edges.',
    applications: ['Terraces', 'Flat roofs', 'Residential', 'Commercial waterproofing'],
    specs: [
      { label: 'Scope', value: 'Terrace / rooftop membrane & detailing' },
      { label: 'Climate', value: 'Specified for Kerala monsoon conditions' },
      { label: 'Surface', value: 'Concrete and prepared substrates' },
      { label: 'Type', value: 'Residential & commercial roofs' },
      { label: 'Resistance', value: 'Standing water, UV, monsoon ingress' },
    ],
    featured: true,
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
