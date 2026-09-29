import { useEffect, useState } from 'react'
import { Droplets, BugOff, Shield, Sparkles, SlidersHorizontal, Home } from 'lucide-react'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { whyPoints } from '../../data/rooms'

const icons = [Droplets, BugOff, Shield, Sparkles, SlidersHorizontal, Home]
const cards = whyPoints.map((point, index) => ({ ...point, Icon: icons[index] }))

export function WhySanro() {
  const [visible, setVisible] = useState(3)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [reduce, setReduce] = useState(false)
  const loop = [...cards, ...cards.slice(0, visible)]

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const tablet = window.matchMedia('(min-width: 640px)')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setReduce(motion.matches)
      setVisible(desktop.matches ? 3 : tablet.matches ? 2 : 1)
      setAnimate(false)
      setIndex(0)
    }
    update()
    desktop.addEventListener('change', update)
    tablet.addEventListener('change', update)
    motion.addEventListener('change', update)
    return () => {
      desktop.removeEventListener('change', update)
      tablet.removeEventListener('change', update)
      motion.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (reduce) return undefined
    const timer = setInterval(() => {
      setAnimate(true)
      setIndex((current) => current + 1)
    }, 3200)
    return () => clearInterval(timer)
  }, [reduce])

  useEffect(() => {
    if (index !== cards.length) return undefined
    const timer = setTimeout(() => {
      setAnimate(false)
      setIndex(0)
    }, 700)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Why fibre</p>
          <h2 className="mt-5 whitespace-nowrap text-[clamp(1.2rem,5.4vw,2.5rem)] font-medium leading-none tracking-[-0.03em]">
            Built for everyday living.
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-muted">
            <span className="block lg:whitespace-nowrap">
              Timber doors in Kerala fight the climate. SANRO fibre doors are
            </span>
            <span className="block lg:whitespace-nowrap">
              manufactured to stay true — through rain, humidity and the ordinary rhythm of a house.
            </span>
          </p>
        </Reveal>
        {reduce ? (
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((point) => (
              <PointCard key={point.title} point={point} />
            ))}
          </div>
        ) : (
          <div className="mt-8 overflow-hidden pt-4 pb-14">
            <div
              className={`flex ${animate ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{
                width: `${(loop.length / visible) * 100}%`,
                transform: `translateX(-${(index * 100) / loop.length}%)`,
              }}
            >
              {loop.map((point, itemIndex) => (
                <div key={`${point.title}-${itemIndex}`} className="flex px-3" style={{ width: `${100 / loop.length}%` }}>
                  <PointCard point={point} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

function PointCard({ point }) {
  const Icon = point.Icon
  return (
    <div className="w-full rounded-card border-0 bg-white px-6 py-6 shadow-[0_16px_28px_-14px_rgba(17,17,17,0.22)]">
      <Icon size={20} strokeWidth={1.5} className="text-accent" />
      <h3 className="mt-4 text-lg font-medium tracking-[-0.02em]">{point.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{point.text}</p>
    </div>
  )
}
