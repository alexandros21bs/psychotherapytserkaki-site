import { siteData } from '../../data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>{siteData.brandName}</h3>
          <p>{siteData.title}</p>
        </div>

        <div>
          <p>{siteData.shortLocation}</p>
          <p>{siteData.phone}</p>
          <p>{siteData.email}</p>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container footer-copyright-inner">
          <p>
            Copyright {currentYear} {siteData.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
