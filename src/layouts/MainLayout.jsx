import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import SeoManager from '../components/common/SeoManager'
import ScrollUI from '../components/common/ScrollUI'
import CookieBanner from '../components/common/CookieBanner'
import { useLanguage } from '../context/LanguageContext'

export default function MainLayout() {
  const { isEnglish } = useLanguage()

  return (
    <>
      <SeoManager />
      <Header />
      <main>
        <Suspense fallback={<div className="route-loading" aria-live="polite"><span>{isEnglish ? 'Loading...' : 'Φόρτωση...'}</span></div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollUI />
      <CookieBanner />
    </>
  )
}
