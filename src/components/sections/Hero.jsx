import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, Search } from 'lucide-react'

export function Hero() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  useEffect(() => {
    const phrases = ['Search doors', 'Search waterproofing', 'Search custom doors', 'Search fibre doors']
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setPlaceholder(phrases[0])
      return
    }

    let phraseIndex = 0
    let index = 0
    let timer
    let cancelled = false

    function write(deleting) {
      if (cancelled) return
      const phrase = phrases[phraseIndex]
      if (!deleting) {
        index += 1
        setPlaceholder(phrase.slice(0, index))
        timer = setTimeout(() => write(index === phrase.length), index === phrase.length ? 1400 : 95)
        return
      }
      index -= 1
      setPlaceholder(phrase.slice(0, index))
      if (index === 0) phraseIndex = (phraseIndex + 1) % phrases.length
      timer = setTimeout(() => write(index > 0), index === 0 ? 420 : 48)
    }

    timer = setTimeout(() => write(false), 360)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  function onSearch(event) {
    event.preventDefault()
    const term = query.trim()
    navigate(term ? `/products?q=${encodeURIComponent(term)}` : '/products')
  }

  return (
    <section className="relative flex min-h-[100svh] items-start overflow-hidden lg:items-center lg:justify-center">
      <img
        src="/images/gallery/hero_bg.png"
        alt="SANRO fibre interior door in a modern living space"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,17,17,0.28)_0%,rgba(17,17,17,0.08)_34%,rgba(17,17,17,0.22)_62%,rgba(17,17,17,0.45)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-24 bg-gradient-to-b from-transparent to-white" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-48 pb-16 text-center text-white lg:py-32">
        <p className="text-[12.5px] font-medium uppercase tracking-[0.32em] text-white/70">
          <span className="text-accent">SANRO</span> Fibre Glass Industries
        </p>
        <h1 className="mt-6 text-[clamp(1.65rem,calc((100vw-2.75rem)/10.55),4.75rem)] font-bold leading-[1.02] tracking-[-0.045em] lg:text-[76px]">
          <span className="block whitespace-nowrap">Make your interior more</span>
          <span className="block whitespace-nowrap">minimalistic &amp; modern</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/80 sm:text-base">
          Premium fibre interior doors designed for durability, refined aesthetics and everyday living.
        </p>
        <form
          onSubmit={onSearch}
          className="mx-auto mt-10 flex w-full max-w-lg items-center rounded-full border border-white/55 bg-white/10 py-1.5 pr-1.5 pl-5 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl backdrop-saturate-150"
        >
          <label className="sr-only" htmlFor="hero-search">
            Search
          </label>
          <div className="relative min-w-0 flex-1">
            {query === '' ? (
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-[15px] text-white/75" aria-hidden="true">
                {placeholder}
                <span className="ml-0.5 inline-block h-[1.05em] w-px animate-pulse bg-white/80" />
              </span>
            ) : null}
            <input
              id="hero-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder=""
              className="w-full border-0 bg-transparent py-2 text-[15px] text-white shadow-none outline-none focus:shadow-none focus:outline-none"
            />
          </div>
          <button
            type="submit"
            aria-label="Search"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark"
          >
            <Search size={18} strokeWidth={2} />
          </button>
        </form>
      </div>
      <a
        href="#introduction"
        className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 lg:bottom-8"
        aria-label="Scroll to introduction"
      >
        <ChevronDown size={18} className="animate-pulse" />
      </a>
    </section>
  )
}
