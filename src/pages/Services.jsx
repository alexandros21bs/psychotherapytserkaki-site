import { Link } from 'react-router-dom'
import { services } from '../data/services'
import BackLink from '../components/common/BackLink'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">Υπηρεσίες</p>
          <h1>Πώς μπορώ να βοηθήσω</h1>
          <p className="hero-sub">
            Κάθε θεραπευτική διαδικασία διαμορφώνεται με βάση τις δικές σου
            ανάγκες, μέσα σε ένα πλαίσιο ασφάλειας, σεβασμού και ουσιαστικής
            υποστήριξης.
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
                <div className="card-service-image">
                  {service.image ? (
                    <img src={service.image} alt={service.title} loading="lazy" />
                  ) : (
                    '[IMAGE_PLACEHOLDER]'
                  )}
                </div>
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
          <h2>Ένα ασφαλές πλαίσιο για κάθε βήμα</h2>
          <p className="intro-text">
            Η θεραπεία δεν απαιτεί να έχεις έτοιμες απαντήσεις. Αρκεί η
            διάθεση να ξεκινήσεις. Με εμπιστοσύνη, υπομονή και σεβασμό στον
            δικό σου ρυθμό, μπορεί να δημιουργηθεί ένας χώρος ουσιαστικής
            υποστήριξης.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>Κάνε το πρώτο βήμα</h2>
          <p>
            Επικοινώνησε μαζί μου για μια πρώτη επικοινωνία, δια ζώσης ή
            online.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Κλείσε Ραντεβού
          </Link>
        </div>
      </section>
    </>
  )
}
