import {
  LayoutGrid,
  Home,
  Building2,
  Sofa,
  Droplets,
  SlidersHorizontal,
  Sparkles,
  Columns3,
  Palette,
  Square,
  DoorOpen,
  Factory,
  Images,
} from 'lucide-react'

const icons = {
  All: LayoutGrid,
  Residential: Home,
  Commercial: Building2,
  Interior: Sofa,
  Interiors: Sofa,
  Waterproofing: Droplets,
  Custom: SlidersHorizontal,
  Modern: Sparkles,
  Classic: Columns3,
  Designer: Palette,
  Minimal: Square,
  Doors: DoorOpen,
  Manufacturing: Factory,
  Projects: Images,
}

export function ProjectFilter({ filters, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = filter === active
        const Icon = icons[filter] ?? LayoutGrid
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className="inline-flex items-center rounded-full bg-ink py-1.5 pr-1.5 pl-6 text-[13px] font-medium tracking-normal text-white shadow-[0_10px_28px_rgba(17,17,17,0.18),0_18px_40px_rgba(17,17,17,0.12)]"
          >
            {filter}
            <span
              className={`ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] ${
                isActive ? 'bg-white text-ink' : 'bg-white/20 text-white'
              }`}
            >
              <Icon size={16} strokeWidth={2.25} aria-hidden="true" />
            </span>
          </button>
        )
      })}
    </div>
  )
}
