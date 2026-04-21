import BackLink from '../components/common/BackLink'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { isEnglish } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <BackLink fallback="/" />
        <h1>404</h1>
        <p>{isEnglish ? 'Page not found.' : 'Η σελίδα δεν βρέθηκε.'}</p>
      </div>
    </section>
  )
}
