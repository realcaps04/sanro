import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/company'
import { useScrolled } from '../../hooks/useScrolled'
import { useQuote } from '../../context/QuoteContext'
import { MobileMenu } from '../navigation/MobileMenu'
import { Button } from '../ui/Button'

export function Header() {
  const scrolled = useScrolled(16)
  const { pathname } = useLocation()
  const { openQuote } = useQuote()
  const [menuOpen, setMenuOpen] = useState(false)
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
            : 'border-b border-line bg-white/95 text-ink backdrop-blur-sm'
        } ${scrolled ? 'py-2.5' : 'py-4'}`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex flex-col leading-none">
            <span className={`font-semibold tracking-[0.22em] ${scrolled ? 'text-[17px]' : 'text-[19px]'}`}>
              SANRO
            </span>
            <span
              className={`mt-1 text-[9px] font-medium uppercase tracking-[0.22em] ${
                overHero ? 'text-white/70' : 'text-muted'
              }`}
            >
              Fibre Glass Industries
            </span>
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
              className="hidden sm:inline-flex !px-5 !py-2.5"
              onClick={() => openQuote()}
            >
              Get a Quote
            </Button>
            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center border lg:hidden ${
                overHero ? 'border-white/40' : 'border-line'
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
    </>
  )
}
