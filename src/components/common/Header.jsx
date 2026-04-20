import { Link, NavLink } from 'react-router-dom'
import { siteData } from '../../data/site'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <div className="topbar-item">
              <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s7-5.7 7-11a7 7 0 10-14 0c0 5.3 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%CE%9C%CE%B1%CE%BB%CE%B5%CE%BC%CE%B5+%CE%94%CE%B7%CE%BC%CE%BF%CF%82+%CE%A0%CE%BB%CE%B1%CF%84%CE%B1%CE%BD%CE%B9%CE%B1%2C+Chania%2C+Greece"
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-text topbar-link"
              >
                Μαλεμε Δημος Πλατανια , Chania, Greece
              </a>
            </div>
          </div>

          <div className="topbar-center">
            <div className="topbar-item topbar-socials" role="group" aria-label="Social στοιχεία">
              <a href="https://instagram.com/adamtserkaki" target="_blank" rel="noopener noreferrer" className="topbar-social-link" aria-label="Instagram" title="Instagram">
                <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com/adamtserkaki" target="_blank" rel="noopener noreferrer" className="topbar-social-link" aria-label="Facebook" title="Facebook">
                <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14.5 7h2V4h-2.4C11.9 4 10.5 5.4 10.5 7.8V10H8v3h2.5v7h3v-7h2.5l.5-3h-3V8c0-.6.4-1 1-1z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://tiktok.com/@adamtserkaki" target="_blank" rel="noopener noreferrer" className="topbar-social-link" aria-label="TikTok" title="TikTok">
                <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14 4v9.2a3.2 3.2 0 11-2.3-3.1V7.7a5.5 5.5 0 105.5 5.5V9.3c1 .8 2.2 1.3 3.6 1.4V8.3c-1.4-.2-2.7-1-3.6-2.1-.5-.7-.8-1.5-.9-2.2H14z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="topbar-right">
            <div className="topbar-item">
              <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 3.9c.5-.5 1.3-.5 1.8 0L11 6.5c.5.5.5 1.3 0 1.8L9.7 9.6a15.1 15.1 0 005.1 5.1l1.3-1.3c.5-.5 1.3-.5 1.8 0l2.6 2.6c.5.5.5 1.3 0 1.8l-1.2 1.2c-.8.8-2 .9-3 .4-2.7-1.4-5.1-3.2-7.2-5.3-2.1-2.1-3.9-4.5-5.3-7.2-.5-1-.4-2.2.4-3l1.2-1.2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="topbar-text topbar-link">{siteData.phone}</a>
            </div>

            <div className="topbar-item">
              <svg className="topbar-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <Link to="/contact#contact-form" className="topbar-text topbar-link">{siteData.email}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container header-inner">
        <Link to="/" className="site-logo">
          <span className="site-logo-mark">AT</span>
          <span className="site-logo-text">
            <strong>{siteData.brandName}</strong>
            <small>{siteData.title}</small>
          </span>
        </Link>

        <nav className="site-nav">
          <NavLink to="/">Αρχική</NavLink>
          <NavLink to="/about">Σχετικά</NavLink>
          <NavLink to="/services">Υπηρεσίες</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <div className="nav-lang-switch" role="group" aria-label="Language selector">
            <button type="button" className="nav-lang-btn is-active" aria-pressed="true">EL</button>
            <button type="button" className="nav-lang-btn" aria-pressed="false">ENG</button>
          </div>
          <NavLink to="/contact" className="btn btn-primary nav-cta">
            Κλείσε Ραντεβού
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
