import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function BackLink({ fallback = '/', label }) {
  const navigate = useNavigate()
  const { isEnglish } = useLanguage()
  const backLabel = label ?? (isEnglish ? 'Back' : 'Πίσω')

  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate(fallback)
  }

  return (
    <button type="button" className="service-back-link" onClick={handleGoBack}>
      ← {backLabel}
    </button>
  )
}