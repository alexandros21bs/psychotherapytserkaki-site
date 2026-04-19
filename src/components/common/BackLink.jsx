import { useNavigate } from 'react-router-dom'

export default function BackLink({ fallback = '/', label = 'Πίσω' }) {
  const navigate = useNavigate()

  function handleGoBack() {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate(fallback)
  }

  return (
    <button type="button" className="service-back-link" onClick={handleGoBack}>
      ← {label}
    </button>
  )
}