import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-ink text-white hover:bg-accent border-ink hover:border-accent',
  accent:
    'bg-accent text-white hover:bg-accent-dark border-accent hover:border-accent-dark',
  secondary:
    'bg-transparent text-white border-white/70 hover:bg-white hover:text-ink',
  outline:
    'bg-transparent text-ink border-ink hover:bg-ink hover:text-white',
  ghost:
    'bg-transparent text-ink border-line hover:border-ink',
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
  const classes = `inline-flex items-center justify-center gap-2 border px-6 py-3 text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
