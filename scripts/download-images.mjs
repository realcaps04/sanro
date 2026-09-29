import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const images = [
  ['doors/hero.jpg', 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1920&q=80'],
  ['doors/intro.jpg', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80'],
  ['doors/modern-01.jpg', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80'],
  ['doors/modern-02.jpg', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80'],
  ['doors/modern-03.jpg', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80'],
  ['doors/classic-01.jpg', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80'],
  ['doors/classic-02.jpg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80'],
  ['doors/designer-01.jpg', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80'],
  ['doors/designer-02.jpg', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80'],
  ['doors/minimal-01.jpg', 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80'],
  ['doors/minimal-02.jpg', 'https://images.unsplash.com/photo-1617806118233-18e1de3d13f0?auto=format&fit=crop&w=1400&q=80'],
  ['doors/custom-01.jpg', 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80'],
  ['doors/custom-02.jpg', 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80'],
  ['doors/detail.jpg', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80'],
  ['doors/customise.jpg', 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80'],
  ['rooms/living.jpg', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80'],
  ['rooms/bedroom.jpg', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80'],
  ['rooms/bathroom.jpg', 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80'],
  ['rooms/office.jpg', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80'],
  ['rooms/commercial.jpg', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80'],
  ['factory/design.jpg', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80'],
  ['factory/material.jpg', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80'],
  ['factory/manufacturing.jpg', 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80'],
  ['factory/finishing.jpg', 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80'],
  ['factory/inspection.jpg', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80'],
  ['factory/installation.jpg', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80'],
  ['factory/floor.jpg', 'https://images.unsplash.com/photo-1581094794478-41c3cbe3f1c4?auto=format&fit=crop&w=1600&q=80'],
  ['projects/resid-01.jpg', 'https://images.unsplash.com/photo-1600047509807-ba8b3852629b?auto=format&fit=crop&w=1600&q=80'],
  ['projects/resid-02.jpg', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80'],
  ['projects/resid-03.jpg', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80'],
  ['projects/comm-01.jpg', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'],
  ['projects/comm-02.jpg', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80'],
  ['projects/water-01.jpg', 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1600&q=80'],
  ['waterproofing/hero.jpg', 'https://images.unsplash.com/photo-1600047509358-9dc75520da82?auto=format&fit=crop&w=1600&q=80'],
  ['waterproofing/terrace.jpg', 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80'],
  ['waterproofing/roof.jpg', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80'],
  ['waterproofing/bathroom.jpg', 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1400&q=80'],
  ['gallery/g1.jpg', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'],
  ['gallery/g2.jpg', 'https://images.unsplash.com/photo-1615874959471-b3bae2d52452?auto=format&fit=crop&w=1200&q=80'],
  ['gallery/g3.jpg', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'],
  ['gallery/g4.jpg', 'https://images.unsplash.com/photo-1505691938895-1758d7afbd2e?auto=format&fit=crop&w=1200&q=80'],
  ['gallery/g5.jpg', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'],
  ['gallery/g6.jpg', 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80'],
  ['brand/about.jpg', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80'],
  ['brand/quality.jpg', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80'],
]

const root = 'public/images'
const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }

async function download([rel, url]) {
  const dest = join(root, rel)
  await mkdir(dirname(dest), { recursive: true })
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`${rel}: ${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 8000) throw new Error(`${rel}: too small (${buf.length})`)
  await writeFile(dest, buf)
  console.log(`ok  ${rel}  ${(buf.length / 1024).toFixed(0)}kb`)
}

const results = await Promise.allSettled(images.map(download))
const failed = results.filter((r) => r.status === 'rejected')
failed.forEach((r) => console.error('fail', r.reason?.message || r.reason))
console.log(`done ${results.length - failed.length}/${results.length}`)
if (failed.length) process.exitCode = 1
