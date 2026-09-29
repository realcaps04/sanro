import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { waterproofingServices } from '../../data/services'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

const visible = 2

export function WaterproofingTeaser() {
  const slides = waterproofingServices
  const loop = [...slides, ...slides.slice(0, visible)]
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    const timer = setInterval(() => {
      setAnimate(true)
      setIndex((current) => current + 1)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (index !== slides.length) return undefined
    const timer = setTimeout(() => {
      setAnimate(false)
      setIndex(0)
    }, 700)
    return () => clearTimeout(timer)
  }, [index, slides.length])

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Waterproofing</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl">
              Protection beyond the door
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-muted">
              Professional waterproofing solutions designed to protect residential and commercial spaces from water
              penetration and moisture-related problems.
            </p>
            <div className="mt-8">
              <Button to="/services/waterproofing" variant="outline">
                Explore Waterproofing
              </Button>
            </div>
          </Reveal>
          <div className="overflow-hidden">
            <div
              className={`flex ${animate ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{
                width: `${(loop.length / visible) * 100}%`,
                transform: `translateX(-${(index * 100) / loop.length}%)`,
              }}
            >
              {loop.map((item, itemIndex) => (
                <div key={`${item.title}-${itemIndex}`} className="h-full px-2" style={{ width: `${100 / loop.length}%` }}>
                  <div className="flex h-full flex-col overflow-hidden rounded-card bg-white">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={item.image} alt="" className="img-cover" />
                    </div>
                    <div className="flex items-start justify-between gap-3 px-4 py-4">
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-medium">{item.title}</h3>
                        <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted">{item.text}</p>
                      </div>
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                        <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}