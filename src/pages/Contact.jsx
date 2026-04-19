import { useState } from 'react'
import { siteData } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // [FORM_SUBMIT_HANDLER]
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <p className="eyebrow">Επικοινωνία</p>
          <h1>Ας μιλήσουμε</h1>
          <p className="hero-sub">
            Είμαι εδώ για να απαντήσω σε κάθε ερώτηση ή να κλείσουμε μια
            πρώτη συνεδρία μαζί.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="section">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2>Στοιχεία Επικοινωνίας</h2>

            <div className="contact-detail">
              <h3>Τηλέφωνο</h3>
              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`}>
                {siteData.phone}
              </a>
            </div>

            <div className="contact-detail">
              <h3>Email</h3>
              <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            </div>

            <div className="contact-detail">
              <h3>Διεύθυνση</h3>
              <p>{siteData.address}</p>
            </div>

            <div className="contact-detail">
              <h3>Συνεδρίες</h3>
              <p>Δια ζώσης στο γραφείο μου στο Μάλεμε, Χανιά</p>
              <p>Online μέσω βιντεοκλήσης</p>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Φόρμα Επικοινωνίας</h2>

            <div className="form-group">
              <label htmlFor="name">Ονοματεπώνυμο</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="phone">Τηλέφωνο</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Μήνυμα</label>
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
              Αποστολή
            </button>
          </form>
        </div>
      </section>

      {/* Reassurance */}
      <section className="section section-alt">
        <div className="container intro-block">
          <p className="eyebrow">Εμπιστευτικότητα</p>
          <h2>Ό,τι μοιραστείς, μένει εδώ</h2>
          <p className="intro-text">
            Η επικοινωνία μας είναι απόλυτα εμπιστευτική. Δεν χρειάζεται να
            έχεις έτοιμες απαντήσεις — αρκεί η διάθεση να κάνεις ένα πρώτο
            βήμα.
          </p>
        </div>
      </section>
    </>
  )
}
