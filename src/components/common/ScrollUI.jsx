import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

const AI_CHAT_SRC = 'https://nikos-gr-adamantia.hf.space?__theme=light'

export default function ScrollUI() {
  const [showBackTop, setShowBackTop] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isChatMinimized, setIsChatMinimized] = useState(false)
  const showBackTopRef = useRef(false)
  const { t, isEnglish } = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    setIsChatOpen(false)
    setIsChatMinimized(false)
  }, [pathname])

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsChatOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    let animationFrameId = 0

    function handleScroll() {
      if (animationFrameId) return

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = 0
        const footer = document.querySelector('.site-footer')
        let shouldShowBackTop = false

        if (footer) {
          const footerTop = footer.getBoundingClientRect().top
          const preFooterOffset = 140
          shouldShowBackTop = footerTop <= window.innerHeight + preFooterOffset
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

  function toggleChatPanel() {
    setIsChatOpen((current) => {
      const next = !current
      if (next) {
        setIsChatMinimized(false)
      }
      return next
    })
  }

  return (
    <>
      <div className="fixed-buttons">
        <button
          type="button"
          className={`back-to-top ${showBackTop ? 'is-visible' : ''}`}
          onClick={scrollToTop}
          aria-label={isEnglish ? 'Back to top' : 'Επιστροφή στην κορυφή'}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>

        <button
          type="button"
          className={`floating-ai-chat ${isChatOpen ? 'is-active' : ''}`}
          onClick={toggleChatPanel}
          aria-expanded={isChatOpen}
          aria-controls="floating-ai-chat-panel"
          aria-label={t.aiChatFloating}
        >
          <svg className="floating-ai-chat-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 014 11.5a8.5 8.5 0 1117 0z" />
            <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
          </svg>
          <span className="floating-ai-chat-text">{t.aiChatFloating}</span>
        </button>
      </div>

      {isChatOpen ? (
        <section
          id="floating-ai-chat-panel"
          className={`chat-widget ${isChatMinimized ? 'is-minimized' : ''}`}
          role="dialog"
          aria-label={isEnglish ? 'AI chat window' : 'Παράθυρο AI συνομιλίας'}
        >
          <header className="chat-widget-header">
            <strong>{t.aiChatFloating}</strong>
            <div className="chat-widget-controls">
              <button
                type="button"
                className="chat-widget-minimize"
                onClick={() => setIsChatMinimized((current) => !current)}
                aria-label={isChatMinimized ? (isEnglish ? 'Restore chat' : 'Επαναφορά συνομιλίας') : (isEnglish ? 'Minimize chat' : 'Ελαχιστοποίηση συνομιλίας')}
              >
                {isChatMinimized ? '▢' : '−'}
              </button>
              <button
                type="button"
                className="chat-widget-close"
                onClick={() => {
                  setIsChatOpen(false)
                  setIsChatMinimized(false)
                }}
                aria-label={isEnglish ? 'Close chat' : 'Κλείσιμο συνομιλίας'}
              >
                ×
              </button>
            </div>
          </header>

          {isChatMinimized ? null : (
            <iframe
              src={AI_CHAT_SRC}
              title="AI CHAT"
              frameBorder="0"
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
              allow="clipboard-read; clipboard-write"
            />
          )}
        </section>
      ) : null}
    </>
  )
}
