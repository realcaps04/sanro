import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, UserPlus } from 'lucide-react'
import { navLinks } from '../../data/company'
import { useScrolled } from '../../hooks/useScrolled'
import { useQuote } from '../../context/QuoteContext'
import { MobileMenu } from '../navigation/MobileMenu'
import { SubscribeModal } from '../forms/SubscribeModal'
import { Button } from '../ui/Button'

export function Header() {
  const scrolled = useScrolled(16)
  const { pathname } = useLocation()
  const { openQuote } = useQuote()
  const [menuOpen, setMenuOpen] = useState(false)
  const [subscribeOpen, setSubscribeOpen] = useState(false)
  const overHero = pathname === '/' && !scrolled

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          overHero
            ? 'bg-transparent text-white'
            : 'bg-white/95 text-ink backdrop-blur-sm'
        } ${scrolled ? 'py-2.5' : 'py-4'}`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center" aria-label="SANRO Fibre Doors">
            <img
              src="/images/logo/sanro_logo.png"
              alt="SANRO Fibre Doors"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? 'h-11' : 'h-16'
              } ${overHero ? '' : 'brightness-0'}`}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.04em] transition-colors ${
                    isActive
                      ? overHero
                        ? 'text-white'
                        : 'text-ink'
                      : overHero
                        ? 'text-white/70 hover:text-white'
                        : 'text-muted hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant={overHero ? 'secondary' : 'primary'}
              className="hidden sm:inline-flex !gap-1.5 !rounded-full !px-5 !py-2 !text-[12px]"
              onClick={() => openQuote()}
            >
              Connect with Us
            </Button>
            <button
              type="button"
              onClick={() => setSubscribeOpen(true)}
              aria-label="Register with SANRO"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                overHero
                  ? 'border border-white/55 bg-white/10 text-white backdrop-blur-xl'
                  : 'bg-ink text-white shadow-[0_10px_28px_rgba(17,17,17,0.18)]'
              }`}
            >
              <UserPlus size={16} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-control shadow-float lg:hidden ${
                overHero ? 'bg-white/15 text-white' : 'bg-white text-ink'
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onQuote={() => openQuote()} />
      <SubscribeModal open={subscribeOpen} onClose={() => setSubscribeOpen(false)} />
    </>
  )
}
