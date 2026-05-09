import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function ScrollUI() {
  const [progress, setProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)
  const progressRef = useRef(0)
  const showBackTopRef = useRef(false)
  const { t, isEnglish } = useLanguage()
  const { pathname } = useLocation()
  const isAiChatPage = pathname === '/ai-chat'

  useEffect(() => {
    let isMounted = true
    const header = document.querySelector('.site-header')

    function updateHeaderOffset() {
      if (!isMounted) return
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`)
    }

    updateHeaderOffset()
    window.addEventListener('resize', updateHeaderOffset)
    window.addEventListener('orientationchange', updateHeaderOffset)

    let resizeObserver
    if (header && 'ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(updateHeaderOffset)
      resizeObserver.observe(header)
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateHeaderOffset).catch(() => {})
    }

    return () => {
      isMounted = false
      window.removeEventListener('resize', updateHeaderOffset)
      window.removeEventListener('orientationchange', updateHeaderOffset)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    let animationFrameId = 0

    function handleScroll() {
      if (animationFrameId) return

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = 0
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const nextProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
        const footer = document.querySelector('.site-footer')
        let shouldShowBackTop = false

        if (footer) {
          const footerTop = footer.getBoundingClientRect().top
          const preFooterOffset = 140
          shouldShowBackTop = footerTop <= window.innerHeight + preFooterOffset
        }

        if (Math.abs(nextProgress - progressRef.current) > 0.2) {
          progressRef.current = nextProgress
          setProgress(nextProgress)
        }

        if (shouldShowBackTop !== showBackTopRef.current) {
          showBackTopRef.current = shouldShowBackTop
          setShowBackTop(shouldShowBackTop)
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  function scrollToTop() {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="fixed-buttons">
        <button
          type="button"
          className={`back-to-top ${showBackTop ? 'is-visible' : ''}`}
          onClick={scrollToTop}
          aria-label={isEnglish ? 'Back to top' : 'Επιστροφή στην κορυφή'}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>

        <Link
          to="/ai-chat"
          className={`floating-ai-chat ${isAiChatPage ? 'is-active' : ''}`}
          aria-label={t.aiChatFloating}
        >
          <svg className="floating-ai-chat-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 014 11.5a8.5 8.5 0 1117 0z" />
            <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
          </svg>
          <span className="floating-ai-chat-text">{t.aiChatFloating}</span>
        </Link>
      </div>
    </>
  )
}
