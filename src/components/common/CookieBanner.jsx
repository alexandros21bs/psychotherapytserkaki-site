import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const CONSENT_KEY = 'ptc-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY)
    if (!savedConsent) {
      setIsVisible(true)
    }
  }, [])

  function handleConsent(value) {
    window.localStorage.setItem(CONSENT_KEY, value)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label={t.cookieAria}>
      <p>
        {t.cookieText}
      </p>
      <div className="cookie-banner-actions">
        <Link to="/privacy" className="text-link cookie-policy-link">
          {t.privacyPolicy}
        </Link>
        <button type="button" className="btn btn-outline" onClick={() => handleConsent('declined')}>
          {t.reject}
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleConsent('accepted')}>
          {t.accept}
        </button>
      </div>
    </aside>
  )
}
