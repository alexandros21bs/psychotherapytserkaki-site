import { siteData } from '../../data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const emailUser = 'adamtserkaki'
  const emailDomain = 'gmail.com'
  const obfuscatedEmail = `${emailUser}@${emailDomain}`

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
          <p>
            <a href={`mailto:${obfuscatedEmail}`}>{obfuscatedEmail}</a>
          </p>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container footer-copyright-inner">
          <p>
            <span>Copyright {currentYear} {siteData.brandName}. All rights reserved.</span>
            <span className="copyright-sep">|</span>
            <span className="copyright-powered">Powered by Web Host Pro</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
