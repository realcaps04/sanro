import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { QuoteModal } from '../forms/QuoteModal'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <QuoteModal />
    </div>
  )
}
