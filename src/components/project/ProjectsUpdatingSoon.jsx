export function ProjectsUpdatingSoon() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-surface px-6 py-16 text-center shadow-card sm:px-10 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(255,87,0,0.12), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(17,17,17,0.05), transparent 65%)',
        }}
      />

      <div className="relative mx-auto flex max-w-lg flex-col items-center">
        <svg
          viewBox="0 0 280 180"
          className="h-auto w-full max-w-[280px]"
          role="img"
          aria-labelledby="projects-soon-title"
        >
          <title id="projects-soon-title">Projects updating soon</title>
          <defs>
            <linearGradient id="soonSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff4ec" />
              <stop offset="100%" stopColor="#f3efe9" />
            </linearGradient>
            <linearGradient id="soonAccent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff5700" />
              <stop offset="100%" stopColor="#ff8a4c" />
            </linearGradient>
          </defs>

          <rect x="24" y="28" width="232" height="124" rx="22" fill="url(#soonSky)" />
          <rect x="24" y="28" width="232" height="124" rx="22" fill="none" stroke="#e8e2da" strokeWidth="1.5" />

          {/* Soft hills */}
          <path
            d="M24 118c28-18 52-22 78-12 24 9 40 8 62-6 22-14 44-10 68 4v48H24V118Z"
            fill="#ebe4db"
          />
          <path
            d="M24 132c34-14 58-10 86 2 26 11 48 4 74-8 18-8 34-6 48 2v24H24v-20Z"
            fill="#e0d7cc"
          />

          {/* Blueprint frame */}
          <rect x="88" y="52" width="104" height="78" rx="10" fill="#fff" stroke="#d9d1c7" strokeWidth="1.5" />
          <rect x="98" y="62" width="84" height="50" rx="6" fill="#f7f3ee" />

          {/* Door outline */}
          <rect x="122" y="70" width="36" height="54" rx="3" fill="none" stroke="#111" strokeWidth="1.75" />
          <path d="M128 78h24M128 88h24M128 98h24M128 108h16" stroke="#cfc6bb" strokeWidth="1.25" strokeLinecap="round" />
          <circle cx="150" cy="98" r="1.8" fill="#ff5700" />

          {/* Accent spark */}
          <circle cx="196" cy="66" r="10" fill="url(#soonAccent)" opacity="0.95" />
          <path d="M196 60.5v11M190.5 66h11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />

          {/* Soft dashed progress arc */}
          <path
            d="M70 148c18 10 42 16 70 16s52-6 70-16"
            fill="none"
            stroke="#ff5700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 7"
            opacity="0.55"
          />
        </svg>

        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.28em] text-accent">Coming soon</p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
          Projects are updating soon
        </h2>
        <p className="mt-4 max-w-[34ch] text-[15px] leading-7 text-muted">
          We’re preparing accurate photography and case studies from completed SANRO work across Kerala.
          Check back shortly.
        </p>
      </div>
    </div>
  )
}
