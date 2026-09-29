import { NavLink } from 'react-router-dom'
import { Home, DoorOpen, Layers, Images, Info, Phone } from 'lucide-react'
import { navLinks } from '../../data/company'

const icons = {
  '/': Home,
  '/products': DoorOpen,
  '/services': Layers,
  '/projects': Images,
  '/about': Info,
  '/contact': Phone,
}

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-3 z-50 lg:hidden"
      style={{ bottom: 'max(0.85rem, env(safe-area-inset-bottom))' }}
      aria-label="Primary"
    >
      <div className="flex items-stretch justify-between rounded-[1.35rem] bg-white px-1 py-1.5 shadow-[0_14px_40px_rgba(17,17,17,0.16)]">
        {navLinks.map((link) => {
          const Icon = icons[link.to]
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-0.5 py-1.5 text-[10px] font-medium leading-none ${
                  isActive ? 'text-accent' : 'text-muted'
                }`
              }
            >
              <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
              <span className="max-w-full truncate">{link.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
