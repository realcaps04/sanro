import { Link } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'
import { Button } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-5 pt-24 text-center">
      <Seo title="Page not found | SANRO" description="The page you are looking for does not exist." />
      <p className="text-[11px] uppercase tracking-[0.24em] text-muted">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em]">This page does not exist.</h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        The collection, projects and contact pages are all still here.
      </p>
      <div className="mt-8 flex gap-3">
        <Button to="/">Home</Button>
        <Button to="/products" variant="outline">
          Products
        </Button>
      </div>
      <Link to="/contact" className="mt-6 text-[12px] uppercase tracking-[0.16em] text-muted">
        Contact
      </Link>
    </section>
  )
}
