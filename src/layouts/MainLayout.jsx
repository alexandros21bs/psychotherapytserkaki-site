import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollUI from '../components/common/ScrollUI'

export default function MainLayout() {
  return (
    <>
      <ScrollUI />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
