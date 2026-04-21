import { useEffect, useState } from 'react'
import { siteData } from '../data/site'
import BackLink from '../components/common/BackLink'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', website: '' })
  const [statusMessage, setStatusMessage] = useState('')
  const { t } = useLanguage()
  const phoneNumber = siteData.phone.replace(/\s/g, '')
  const primaryRecipient = 'info@psychotheraphy.gr'
  const ccRecipients = ['adamtserkaki@gmail.com', 'alexandros21bs@gmail.com']
  const allRecipients = [primaryRecipient, ...ccRecipients]

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const target = document.getElementById('contact-form')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (form.website.trim() !== '') {
      setStatusMessage(t.contactSpamRejected)
      return
    }

    const subject = encodeURIComponent(`Αίτημα επικοινωνίας από ${form.name}`)
    const body = encodeURIComponent(
      `Ονοματεπώνυμο: ${form.name}\nEmail: ${form.email}\nΤηλέφωνο: ${form.phone || '-'}\n\nΜήνυμα:\n${form.message}`,
    )

    const cc = encodeURIComponent(ccRecipients.join(','))
    window.location.href = `mailto:${primaryRecipient}?cc=${cc}&subject=${subject}&body=${body}`
    setStatusMessage(t.contactPreparedEmail)
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h1>{t.contactTitle}</h1>
          <p className="hero-sub">
            {t.contactLead}
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="section">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2>{t.contactInfoTitle}</h2>

            <div className="contact-detail">
              <h3>{t.contactPhone}</h3>
              <a href={`tel:${phoneNumber}`}>
                {siteData.phone}
              </a>
            </div>

            <div className="contact-detail">
              <h3>{t.contactViber}</h3>
              <a href={`tel:${phoneNumber}`}>
                {siteData.phone}
              </a>
            </div>

            <div className="contact-detail">
              <h3>{t.contactEmail}</h3>
              {allRecipients.map((recipient) => (
                <p key={recipient}><a href={`mailto:${recipient}`}>{recipient}</a></p>
              ))}
            </div>

            <div className="contact-detail">
              <h3>{t.contactAddress}</h3>
              <p>{siteData.address}</p>
            </div>

            <div className="contact-detail">
              <h3>{t.contactSessions}</h3>
              <p>{t.contactInPerson}</p>
              <p>{t.contactOnline}</p>
            </div>
          </div>

          {/* Form */}
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <h2>{t.contactFormTitle}</h2>

            <div className="hp-field" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">{t.contactNameLabel}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contactEmailLabel}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t.contactPhoneLabel}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contactMessageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              {t.contactSubmit}
            </button>

            {statusMessage && <p className="form-status-message">{statusMessage}</p>}
          </form>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section section-alt">
        <div className="container intro-block">
          <p className="eyebrow">{t.contactConfidentiality}</p>
          <h2>{t.contactConfidentialityTitle}</h2>
          <p className="intro-text">
            {t.contactConfidentialityText}
          </p>
        </div>
      </section>
    </>
  )
}
