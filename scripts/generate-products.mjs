import fs from 'fs'

const catalog = JSON.parse(fs.readFileSync('E:\\Sanro\\scripts\\door-catalog.json', 'utf8'))

const SPECS = [
  { label: 'Material', value: 'Moulded fibre composite' },
  { label: 'Standard size', value: '80" × 32" / 36"' },
  { label: 'Thickness', value: '32–35 mm' },
  { label: 'Core', value: 'High-density fibre core' },
  { label: 'Resistance', value: 'Water, termite, warp' },
]

const FEATURED_FILES = new Set(['img2.jpg', 'img7.jpg', 'img11.jpg', 'img15.jpg'])

function esc(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
}

function arr(items) {
  return `[${items.map((s) => `'${esc(s)}'`).join(', ')}]`
}

function specsBlock(indent = '    ') {
  return `[
${SPECS.map(
  (s) =>
    `${indent}  { label: '${esc(s.label)}', value: '${esc(s.value)}' },`,
).join('\n')}
${indent}]`
}

const doorProducts = catalog.map((door) => {
  const slug = `sanro-${String(door.modelNum).padStart(3, '0')}`
  const image = `/images/doormodels/${door.file}`
  const featured = FEATURED_FILES.has(door.file)

  return `  {
    slug: '${slug}',
    name: '${esc(door.name)}',
    code: '${esc(door.code)}',
    category: '${esc(door.category)}',
    short: '${esc(door.short)}',
    description:
      '${esc(door.description)}',
    image: '${image}',
    arImage: '${image}',
    gallery: ['${image}'],
    finishes: ${arr(door.finishes)},
    design: '${esc(door.design)}',
    applications: ${arr(door.applications)},
    specs: ${specsBlock()},
    featured: ${featured},
  }`
})

const waterproof = [
  `  {
    slug: 'sanro-waterproof-bathroom',
    name: 'SANRO Bathroom Waterproofing',
    code: 'SR-WP01',
    category: 'Waterproof',
    short: 'Wet-area waterproofing for bathrooms so finishes and adjacent rooms stay sound.',
    description:
      'Bathroom waterproofing treats wet rooms at the source — floors, wet walls and junctions — so monsoon humidity and daily use do not travel into neighbouring spaces.',
    image: '/images/waterproofing/card-bathroom.jpg',
    gallery: ['/images/waterproofing/card-bathroom.jpg'],
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
    featured: false,
  }`,
  `  {
    slug: 'sanro-waterproof-rooftop',
    name: 'SANRO Rooftop Waterproofing',
    code: 'SR-WP02',
    category: 'Waterproof',
    short: 'Terrace and rooftop membrane work that protects the building envelope below.',
    description:
      'Rooftop waterproofing applies a continuous membrane system across exposed terraces and flat roofs, stopping standing water and seasonal ingress before it reaches the rooms below.',
    image: '/images/waterproofing/Rooftop Waterproofing with Scenic Mountain Views (1).png',
    gallery: ['/images/waterproofing/Rooftop Waterproofing with Scenic Mountain Views (1).png'],
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
    featured: false,
  }`,
]

const out = `export const productCategories = ['Modern', 'Classic', 'Designer', 'Minimal', 'Waterproof', 'Custom']

export const products = [
${[...doorProducts, ...waterproof].join(',\n')}
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
  if (!current) {
    return products.filter((item) => item.category !== 'Waterproof').slice(0, limit)
  }
  return products
    .filter((item) => item.slug !== slug && item.category === current.category)
    .slice(0, limit)
}
`

fs.writeFileSync('E:\\Sanro\\src\\data\\products.js', out)
console.log('wrote products.js')
console.log('doors', doorProducts.length)
console.log('total products', doorProducts.length + waterproof.length)
console.log('featured files', [...FEATURED_FILES])
