import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { readStorageValue, writeStorageValue } from '../../utils/browserStorage'

const CONSENT_KEY = 'ptc-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const savedConsent = readStorageValue(CONSENT_KEY)
    if (!savedConsent) {
      const timeoutId = window.setTimeout(() => setIsVisible(true), 0)
      return () => window.clearTimeout(timeoutId)
    }

    return undefined
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('has-cookie-banner', isVisible)

    return () => {
      document.documentElement.classList.remove('has-cookie-banner')
      document.documentElement.style.removeProperty('--cookie-banner-height')
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || !bannerRef.current) {
      document.documentElement.style.removeProperty('--cookie-banner-height')
      return undefined
    }

    const banner = bannerRef.current

    function updateCookieBannerHeight() {
      document.documentElement.style.setProperty('--cookie-banner-height', `${banner.getBoundingClientRect().height}px`)
    }

    updateCookieBannerHeight()
    window.addEventListener('resize', updateCookieBannerHeight)

    let resizeObserver
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(updateCookieBannerHeight)
      resizeObserver.observe(banner)
    }

    return () => {
      window.removeEventListener('resize', updateCookieBannerHeight)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      document.documentElement.style.removeProperty('--cookie-banner-height')
    }
  }, [isVisible])

  function handleConsent(value) {
    writeStorageValue(CONSENT_KEY, value)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside ref={bannerRef} className="cookie-banner" role="dialog" aria-live="polite" aria-label={t.cookieAria}>
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
