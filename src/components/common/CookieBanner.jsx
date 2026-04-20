import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'ptc-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

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
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie ενημέρωση">
      <p>
        Χρησιμοποιούμε μόνο απαραίτητα cookies για τη σωστή λειτουργία της σελίδας και αποθηκεύουμε
        την επιλογή συναίνεσης τοπικά στη συσκευή σου.
      </p>
      <div className="cookie-banner-actions">
        <Link to="/privacy" className="text-link cookie-policy-link">
          Πολιτική Απορρήτου
        </Link>
        <button type="button" className="btn btn-outline" onClick={() => handleConsent('declined')}>
          Απόρριψη
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleConsent('accepted')}>
          Αποδοχή
        </button>
      </div>
    </aside>
  )
}
