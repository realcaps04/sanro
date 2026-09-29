export function SectionHeading({ label, title, text, align = 'left', light = false, className = '' }) {
  const aligned = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-2xl ${aligned} ${className}`}>
      {label ? (
        <p
          className={`mb-4 text-[11px] font-medium uppercase tracking-[0.28em] ${
            light ? 'text-white/55' : 'text-accent'
          }`}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[44px] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-[15px] leading-7 ${light ? 'text-white/70' : 'text-muted'}`}>{text}</p>
      ) : null}
    </div>
  )
}
