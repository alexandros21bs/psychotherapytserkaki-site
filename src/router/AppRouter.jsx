import { lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ErrorBoundary from '../components/common/ErrorBoundary'
import { useLanguage } from '../context/LanguageContext'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const ServiceSingle = lazy(() => import('../pages/ServiceSingle'))
const Blog = lazy(() => import('../pages/Blog'))
const Article = lazy(() => import('../pages/Article'))
const AiChat = lazy(() => import('../pages/AiChat'))
const Faq = lazy(() => import('../pages/Faq'))
const Contact = lazy(() => import('../pages/Contact'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Privacy = lazy(() => import('../pages/Privacy'))
const Terms = lazy(() => import('../pages/Terms'))

export default function AppRouter() {
  const location = useLocation()
  const { isEnglish } = useLanguage()

  return (
    <ErrorBoundary
      resetKey={location.pathname}
      eyebrow={isEnglish ? 'Temporary issue' : 'Προσωρινό πρόβλημα'}
      title={isEnglish ? 'The page could not load' : 'Η σελίδα δεν μπόρεσε να φορτώσει'}
      message={isEnglish ? 'Please refresh the page. If your connection is unstable, try again in a moment.' : 'Κάνε ανανέωση της σελίδας. Αν η σύνδεση είναι ασταθής, δοκίμασε ξανά σε λίγο.'}
      reloadLabel={isEnglish ? 'Refresh page' : 'Ανανέωση σελίδας'}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/ai-chat" element={<AiChat />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}
