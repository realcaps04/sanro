import { Link } from 'react-router-dom'
import { company, footerServices, navLinks } from '../../data/company'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="bg-white">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-4 lg:gap-8 lg:py-20">
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/images/logo/sanro_logo.png"
            alt="SANRO Fibre Doors"
            className="h-16 w-auto brightness-0"
          />
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">{company.description}</p>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">Sitemap</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">Services</p>
          <ul className="mt-5 space-y-3">
            {footerServices.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/gallery" className="text-sm text-muted transition-colors hover:text-ink">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">Contact</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
            <li>
              <a href={company.phoneHref} className="hover:text-ink">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="hover:text-ink">
                {company.email}
              </a>
            </li>
            <li>{company.location.display}</li>
            <li>{company.hours}</li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 pb-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 <span className="text-accent">SANRO</span> FIBRE GLASS INDUSTRIES. All rights reserved.
          </p>
          <p>Idukki, Kerala</p>
      </Container>
    </footer>
  )
}
