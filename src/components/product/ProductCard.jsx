import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

export function ProductCard({ product }) {
  return (
    <article className="group">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-surface">
          <div className="aspect-[4/5]">
            <img
              src={product.image}
              alt={`${product.name} fibre interior door`}
              className="img-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-accent">
            <Plus size={18} strokeWidth={1.75} />
          </span>
        </div>
        <div className="pt-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
            {product.category} · {product.code}
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-[-0.02em]">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{product.short}</p>
          <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ink">View Details</p>
        </div>
      </Link>
    </article>
  )
}
