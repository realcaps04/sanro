import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import { Layout } from './components/layout/Layout'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ProductDetailsPage from './pages/ProductDetails'
import ServicesPage from './pages/Services'
import WaterproofingPage from './pages/Waterproofing'
import ProjectsPage from './pages/Projects'
import ProjectDetailsPage from './pages/ProjectDetails'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import GalleryPage from './pages/Gallery'
import NotFoundPage from './pages/NotFound'

export default function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/waterproofing" element={<WaterproofingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/quote" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuoteProvider>
  )
}
