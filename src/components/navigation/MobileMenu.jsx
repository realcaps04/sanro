import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../data/company'
import { Button } from '../ui/Button'

export function MobileMenu({ open, onClose, onQuote }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] bg-ink/40 p-3 lg:hidden">
    <div data-lenis-prevent className="no-scrollbar h-full overflow-y-auto rounded-card bg-white shadow-float">
      <div className="flex items-center justify-between px-5 py-4">
        <img src="/images/logo/sanro_logo.png" alt="SANRO Fibre Doors" className="h-12 w-auto brightness-0" />
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-control bg-surface shadow-card"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>
      <nav className="flex flex-col gap-1 px-5 pt-4 pb-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            end={link.to === '/'}
            className={({ isActive }) =>
              `rounded-control px-4 py-3 text-2xl font-medium tracking-[-0.03em] ${
                isActive ? 'bg-surface text-accent shadow-card' : 'text-ink'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <div className="pt-8">
          <Button
            className="w-full"
            onClick={() => {
              onClose()
              onQuote()
            }}
          >
            Connect with Us
          </Button>
        </div>
      </nav>
    </div>
    </div>
  )
}
