import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { products } from '../src/data/products.js'

const dir = 'public/images/doormodels'
const files = fs.readdirSync(dir).filter((f) => /\.(jpg|png|webp)$/i.test(f))
const byHash = new Map()

for (const file of files) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(dir, file))).digest('hex')
  if (!byHash.has(hash)) byHash.set(hash, [])
  byHash.get(hash).push(file)
}

const removeFiles = new Set()
for (const group of byHash.values()) {
  if (group.length < 2) continue
  const sorted = [...group].sort((a, b) => {
    const na = Number(a.match(/\d+/)?.[0] || 0)
    const nb = Number(b.match(/\d+/)?.[0] || 0)
    return na - nb
  })
  for (const dup of sorted.slice(1)) removeFiles.add(dup)
}

// Near-duplicate scene of img7 (same door, different encode)
removeFiles.add('img158.jpg')

const next = products.filter((product) => {
  if (product.category === 'Waterproof') return true
  const file = product.image.split('/').pop()
  return !removeFiles.has(file)
})

function serialize(value, indent = 0) {
  const pad = '  '.repeat(indent)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    if (
      value.every(
        (item) =>
          typeof item === 'string' ||
          typeof item === 'number' ||
          typeof item === 'boolean' ||
          item === null,
      )
    ) {
      return `[${value.map((item) => JSON.stringify(item)).join(', ')}]`
    }
    return `[\n${value.map((item) => `${pad}  ${serialize(item, indent + 1)}`).join(',\n')},\n${pad}]`
  }
  if (value && typeof value === 'object') {
    const body = Object.entries(value)
      .map(([key, val]) => `${pad}  ${key}: ${serialize(val, indent + 1)}`)
      .join(',\n')
    return `{\n${body},\n${pad}}`
  }
  return JSON.stringify(value)
}

const out = `export const productCategories = ['Modern', 'Classic', 'Designer', 'Minimal', 'Waterproof', 'Custom']

export const products = ${serialize(next)}

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
  if (!current) return products.filter((item) => item.category !== 'Waterproof').slice(0, limit)
  return products
    .filter((item) => item.slug !== slug && item.category === current.category)
    .slice(0, limit)
}
`

fs.writeFileSync('src/data/products.js', out)
console.log('removed', [...removeFiles].sort().join(', '))
console.log('products', next.length, 'doors', next.filter((p) => p.category !== 'Waterproof').length)
