import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'border border-ink bg-ink text-white hover:border-accent hover:bg-accent shadow-float',
  accent: 'border border-accent-dark bg-accent text-white hover:bg-accent-dark shadow-float',
  secondary: 'border border-white/70 bg-white/15 text-white shadow-float backdrop-blur-sm hover:border-white hover:bg-white hover:text-ink',
  outline: 'border border-ink/15 bg-white text-ink shadow-card hover:border-ink hover:bg-ink hover:text-white',
  static: 'border border-ink/15 bg-white text-ink shadow-card',
  ghost: 'border border-ink/10 bg-white text-ink shadow-card hover:bg-surface',
}

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled,
}) {
  const pill = variant === 'outline' || variant === 'static' || variant === 'ghost'
  const classes = pill
    ? `inline-flex w-fit items-center rounded-full bg-ink py-1.5 pr-1.5 pl-6 text-[13px] font-medium tracking-normal text-white shadow-[0_10px_28px_rgba(17,17,17,0.18),0_18px_40px_rgba(17,17,17,0.12)] disabled:cursor-not-allowed disabled:opacity-50 ${className}`
    : `inline-flex items-center justify-center gap-2 rounded-control px-6 py-3 text-[13px] font-medium tracking-normal transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`

  const content = pill ? (
    <>
      {children}
      <span className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
        <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
      </span>
    </>
  ) : (
    <>
      {children}
      <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
