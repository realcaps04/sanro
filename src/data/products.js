export const productCategories = ['Modern', 'Classic', 'Designer', 'Minimal', 'Waterproof', 'Custom']

export const products = [
  {
    slug: 'sanro-modern-01',
    name: 'SANRO Modern 01',
    code: 'SR-M01',
    category: 'Modern',
    short:
      'A light oak fibre door with horizontal grooves, made for open living rooms.',
    description:
      'SANRO Modern 01 is a light oak fibre door with a quiet run of horizontal grooves. It is moulded for humid climates and finished so the grain stays even across the leaf.',
    image: '/images/doors/classic-02.jpg',
    gallery: ['/images/doors/classic-02.jpg', '/images/doors/customise.jpg', '/images/doors/classic-01.jpg'],
    finishes: ['Light Oak', 'Warm Oak', 'Graphite', 'Custom colour'],
    design: 'Horizontal groove face in a light oak tone, with a matching frame.',
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
    image: '/images/doors/custom-02.jpg',
    gallery: ['/images/doors/custom-02.jpg', '/images/doors/customise.jpg', '/images/doors/designer-01.jpg'],
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
    image: '/images/doors/designer-01.jpg',
    gallery: ['/images/doors/designer-01.jpg', '/images/doors/custom-02.jpg', '/images/doors/customise.jpg'],
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
      'A walnut fibre door with a single vertical gold inlay and a dark matching frame.',
    description:
      'Classic 01 is a walnut-tone fibre door finished with one vertical inlay. The leaf is moulded so the grain and line stay true in a humid climate, without the swelling of timber.',
    image: '/images/doors/classic-01.jpg',
    gallery: ['/images/doors/classic-01.jpg', '/images/doors/classic-02.jpg', '/images/doors/customise.jpg'],
    finishes: ['Walnut', 'Gold inlay', 'Dark frame'],
    design: 'Vertical walnut grain with a single metallic inlay and a matching architrave.',
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
    gallery: ['/images/doors/classic-02.jpg', '/images/doors/classic-01.jpg'],
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
    gallery: ['/images/doors/designer-01.jpg', '/images/doors/customise.jpg', '/images/doors/custom-02.jpg'],
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
    gallery: ['/images/doors/designer-02.jpg', '/images/doors/designer-01.jpg', '/images/doors/classic-01.jpg'],
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
    image: '/images/doors/custom-01.jpg',
    gallery: ['/images/doors/custom-01.jpg', '/images/doors/customise.jpg'],
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
    image: '/images/doors/customise.jpg',
    gallery: ['/images/doors/customise.jpg', '/images/doors/custom-01.jpg'],
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
    slug: 'sanro-modern-04',
    name: 'SANRO Modern 04',
    code: 'SR-M04',
    category: 'Modern',
    short: 'An elegant modern entryway door with recessed geometric panels in a warm wood tone.',
    description:
      'Modern 04 pairs concentric rectangular panels with side square accents. The warm wood-tone fibre face reads as architecture in foyers and living rooms, without the movement of timber.',
    image: '/images/sanrodoors/Elegant Modern Entryway with Wooden Door.png',
    gallery: [
      '/images/sanrodoors/Elegant Modern Entryway with Wooden Door.png',
      '/images/sanrodoors/Sage Green Foyer with Mahogany Door.png',
    ],
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
    image: '/images/sanrodoors/Sage Green Foyer with Mahogany Door.png',
    gallery: [
      '/images/sanrodoors/Sage Green Foyer with Mahogany Door.png',
      '/images/sanrodoors/Elegant Modern Entryway with Wooden Door.png',
    ],
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
    image: '/images/sanrodoors/Warm Modern Entryway with Stained Glass Door.png',
    gallery: [
      '/images/sanrodoors/Warm Modern Entryway with Stained Glass Door.png',
      '/images/sanrodoors/Warm Scandinavian Entryway Living Room.png',
    ],
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
    image: '/images/sanrodoors/Warm Scandinavian Entryway Living Room.png',
    gallery: [
      '/images/sanrodoors/Warm Scandinavian Entryway Living Room.png',
      '/images/sanrodoors/Warm Modern Entryway with Stained Glass Door.png',
    ],
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
  {
    slug: 'sanro-custom-01',
    name: 'SANRO Custom 01',
    code: 'SR-X01',
    category: 'Custom',
    short: 'A made-to-project door for non-standard openings, paired suites and unique finishes.',
    description:
      'Custom 01 is the starting point for project work — villas, apartments and commercial interiors that need matching sets, unusual dimensions, or a finish that belongs to a specific palette.',
    image: '/images/doors/custom-01.jpg',
    gallery: ['/images/doors/custom-01.jpg', '/images/doors/customise.jpg', '/images/doors/classic-01.jpg'],
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
    gallery: ['/images/doors/custom-02.jpg', '/images/doors/designer-01.jpg', '/images/doors/customise.jpg'],
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
