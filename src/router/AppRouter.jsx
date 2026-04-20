import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const ServiceSingle = lazy(() => import('../pages/ServiceSingle'))
const Blog = lazy(() => import('../pages/Blog'))
const Article = lazy(() => import('../pages/Article'))
const Faq = lazy(() => import('../pages/Faq'))
const Contact = lazy(() => import('../pages/Contact'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Privacy = lazy(() => import('../pages/Privacy'))
const Terms = lazy(() => import('../pages/Terms'))

export default function AppRouter() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
