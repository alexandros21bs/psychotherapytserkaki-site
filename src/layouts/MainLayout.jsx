import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import SeoManager from '../components/common/SeoManager'
import ScrollUI from '../components/common/ScrollUI'
import CookieBanner from '../components/common/CookieBanner'

export default function MainLayout() {
  return (
    <>
      <SeoManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollUI />
      <CookieBanner />
    </>
  )
}
