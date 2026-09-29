export function ProjectFilter({ filters, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`rounded-control px-4 py-2 text-[12px] uppercase tracking-[0.16em] transition-colors ${
              isActive ? 'bg-ink text-white shadow-float' : 'bg-white text-muted shadow-card hover:text-ink'
            }`}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
