import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <p className="eyebrow">Υπηρεσίες</p>
          <h1>Πώς μπορώ να βοηθήσω</h1>
          <p className="hero-sub">
            Κάθε μορφή θεραπείας προσαρμόζεται στις ανάγκες σου — με σεβασμό,
            ασφάλεια και επαγγελματισμό.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {services.map((service) => (
              <Link
                to={`/services/${service.slug}`}
                className="card card-hover card-service"
                key={service.slug}
              >
                <div className="card-service-image">[IMAGE_PLACEHOLDER]</div>
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <span className="text-link">Μάθε περισσότερα →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="section section-alt">
        <div className="container intro-block">
          <p className="eyebrow">Υποστήριξη</p>
          <h2>Ένα ασφαλές περιβάλλον για κάθε βήμα</h2>
          <p className="intro-text">
            Η θεραπεία δεν απαιτεί να έχεις τις απαντήσεις. Αρκεί η διάθεση
            να ξεκινήσεις. Θα δουλέψουμε μαζί, στον δικό σου ρυθμό, με
            εμπιστοσύνη και υπομονή.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>Κάνε το πρώτο βήμα</h2>
          <p>
            Επικοινώνησε μαζί μου για να κλείσεις μια πρώτη γνωριμία — δια
            ζώσης ή online.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Κλείσε Ραντεβού
          </Link>
        </div>
      </section>
    </>
  )
}
