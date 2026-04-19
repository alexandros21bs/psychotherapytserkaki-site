import { siteData } from '../data/site'

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1>Επικοινωνία</h1>
        <p>{siteData.phone}</p>
        <p>{siteData.email}</p>
        <p>{siteData.address}</p>
      </div>
    </section>
  )
}
