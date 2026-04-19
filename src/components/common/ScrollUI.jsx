import { useEffect, useState } from 'react'

export default function ScrollUI() {
  const [progress, setProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0

      setProgress(nextProgress)
      setShowBackTop(scrollTop > 320)
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

      <button
        type="button"
        className={`back-to-top ${showBackTop ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Επιστροφή στην κορυφή"
      >
        ↑
      </button>
    </>
  )
}
