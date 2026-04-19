import { Link, NavLink } from 'react-router-dom'
import { siteData } from '../../data/site'

export default function Header() {
  return (
    <header className="site-header">
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
          <NavLink to="/contact" className="btn btn-primary nav-cta">
            Κλείσε Ραντεβού
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
