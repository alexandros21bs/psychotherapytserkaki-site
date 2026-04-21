import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../../data/site'
import { useLanguage } from '../../context/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const primaryRecipient = 'info@psychotheraphy.gr'
  const ccRecipients = ['adamtserkaki@gmail.com', 'alexandros21bs@gmail.com']
  const { t, isEnglish } = useLanguage()

  function handleNewsletterSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Νέα εγγραφή στο Newsletter')
    const body = encodeURIComponent(`Email εγγραφής: ${newsletterEmail}`)
    const cc = encodeURIComponent(ccRecipients.join(','))

    window.location.href = `mailto:${primaryRecipient}?cc=${cc}&subject=${subject}&body=${body}`
  }

  return (
    <footer className="site-footer">
      {/* ── Top: 4-column grid ── */}
      <div className="container footer-grid">
        {/* Col 1 – Brand */}
        <div className="footer-brand">
          <div className="footer-logo-placeholder">Logo</div>
          <h3 className="footer-brand-name">{siteData.brandName}</h3>
          <p className="footer-brand-desc">{siteData.title}</p>
        </div>

        {/* Col 2 – Πλοήγηση */}
        <div className="footer-links">
          <h4 className="footer-heading">{t.footerNav}</h4>
          <ul>
            <li><Link to="/">{t.navHome}</Link></li>
            <li><Link to="/about">{t.navAbout}</Link></li>
            <li><Link to="/services">{t.navServices}</Link></li>
            <li><Link to="/blog">{t.navBlog}</Link></li>
          </ul>
        </div>

        {/* Col 3 – Υποστήριξη */}
        <div className="footer-links">
          <h4 className="footer-heading">{t.footerSupport}</h4>
          <ul>
            <li><Link to="/faq">{t.footerFaq}</Link></li>
            <li><Link to="/contact">{t.footerContact}</Link></li>
            <li><Link to="/privacy">{t.privacyPolicy}</Link></li>
            <li><Link to="/terms">{t.footerTerms}</Link></li>
          </ul>
        </div>

        {/* Col 4 – Newsletter */}
        <div className="footer-newsletter">
          <h4 className="footer-heading">{t.footerNewsletter}</h4>
          <p>{t.footerNewsletterText}</p>
          <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletter-email">{t.footerNewsletterEmailLabel}</label>
            <div className="footer-newsletter-row">
              <input
                type="email"
                id="newsletter-email"
                name="email"
                placeholder={t.footerNewsletterPlaceholder}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">{t.footerNewsletterButton}</button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Middle: Social bar ── */}
      <div className="container footer-social-bar">
        <span className="footer-social-label">{isEnglish ? 'Social' : 'Social'}</span>
        <div className="footer-social-icons">
          <a href="https://facebook.com/adamtserkaki" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="https://instagram.com/adamtserkaki" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://tiktok.com/@adamtserkaki" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.58-1.43V6.69h3.58z"/></svg>
          </a>
        </div>
      </div>

      {/* ── Bottom: Copyright ── */}
      <div className="footer-copyright">
        <div className="container footer-copyright-inner">
          <p className="copyright-left">© {currentYear} {siteData.brandName} | psychotherapytserkaki.gr. Με την επιφύλαξη παντός νομίμου δικαιώματος.</p>
          <p className="copyright-right">Powered by <strong>Web Host Pro Αιγιαλεία</strong> | Web Development, Διαχείριση και Social Media Management | Επίσημος Συνεργάτης</p>
        </div>
      </div>
    </footer>
  )
}
