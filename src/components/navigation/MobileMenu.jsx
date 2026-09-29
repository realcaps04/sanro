import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../data/company'
import { Button } from '../ui/Button'

export function MobileMenu({ open, onClose, onQuote }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] bg-white lg:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <p className="text-lg font-semibold tracking-[0.18em]">SANRO</p>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center border border-line"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>
      <nav className="flex flex-col px-5 pt-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            end={link.to === '/'}
            className={({ isActive }) =>
              `border-b border-line py-4 text-2xl font-medium tracking-[-0.03em] ${
                isActive ? 'text-accent' : 'text-ink'
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
            Get a Quote
          </Button>
        </div>
      </nav>
    </div>
  )
}
