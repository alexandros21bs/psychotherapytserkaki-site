import { useEffect, useState } from 'react'

export default function ScrollUI() {
  const [progress, setProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    function updateHeaderOffset() {
      const header = document.querySelector('.site-header')
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`)
    }

    updateHeaderOffset()
    window.addEventListener('resize', updateHeaderOffset)

    return () => {
      window.removeEventListener('resize', updateHeaderOffset)
    }
  }, [])

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      const footer = document.querySelector('.site-footer')
      let shouldShowBackTop = false

      // Show the arrow shortly before footer enters viewport.
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const preFooterOffset = 140
        shouldShowBackTop = footerTop <= window.innerHeight + preFooterOffset
      }

      setProgress(nextProgress)
      setShowBackTop(shouldShowBackTop)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
          aria-label="Επιστροφή στην κορυφή"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </div>
    </>
  )
}
