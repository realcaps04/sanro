import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { Header } from './Header'
import { Footer } from './Footer'
import { QuoteModal } from '../forms/QuoteModal'

function ScrollRestore() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, lenis])

  return null
}

export function Layout() {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.08,
        duration: 1.15,
        smoothWheel: true,
        anchors: true,
        stopInertiaOnNavigate: true,
      }}
    >
      <ScrollRestore />
      <div className="min-h-screen bg-white pb-36 text-ink lg:pb-0">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <QuoteModal />
      </div>
    </ReactLenis>
  )
}
