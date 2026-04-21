import { Link } from 'react-router-dom'
import { services } from '../data/services'
import BackLink from '../components/common/BackLink'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">{isEnglish ? 'Services' : 'Υπηρεσίες'}</p>
          <h1>{isEnglish ? 'How I can help' : 'Πώς μπορώ να βοηθήσω'}</h1>
          <p className="hero-sub">
            {isEnglish
              ? 'Each therapeutic process is shaped around your needs, within a framework of safety, respect and meaningful support.'
              : 'Κάθε θεραπευτική διαδικασία διαμορφώνεται με βάση τις δικές σου ανάγκες, μέσα σε ένα πλαίσιο ασφάλειας, σεβασμού και ουσιαστικής υποστήριξης.'}
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
                    <img src={service.image} alt={isEnglish ? (service.titleEn || service.title) : service.title} loading="lazy" />
                  ) : (
                    '[IMAGE_PLACEHOLDER]'
                  )}
                </div>
                <h3>{isEnglish ? (service.titleEn || service.title) : service.title}</h3>
                <p>{isEnglish ? (service.excerptEn || service.excerpt) : service.excerpt}</p>
                <span className="text-link">{isEnglish ? 'Learn more →' : 'Μάθε περισσότερα →'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="section section-alt">
        <div className="container intro-block">
          <p className="eyebrow">{isEnglish ? 'Support' : 'Υποστήριξη'}</p>
          <h2>{isEnglish ? 'A safe framework for every step' : 'Ένα ασφαλές πλαίσιο για κάθε βήμα'}</h2>
          <p className="intro-text">
            {isEnglish
              ? 'Therapy does not require ready-made answers. A willingness to begin is enough. With trust, patience and respect for your own pace, a meaningful support space can emerge.'
              : 'Η θεραπεία δεν απαιτεί να έχεις έτοιμες απαντήσεις. Αρκεί η διάθεση να ξεκινήσεις. Με εμπιστοσύνη, υπομονή και σεβασμό στον δικό σου ρυθμό, μπορεί να δημιουργηθεί ένας χώρος ουσιαστικής υποστήριξης.'}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>{isEnglish ? 'Take the first step' : 'Κάνε το πρώτο βήμα'}</h2>
          <p>
            {isEnglish
              ? 'Contact me for an initial consultation, in person or online.'
              : 'Επικοινώνησε μαζί μου για μια πρώτη επικοινωνία, δια ζώσης ή online.'}
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            {isEnglish ? 'Book Appointment' : 'Κλείσε Ραντεβού'}
          </Link>
        </div>
      </section>
    </>
  )
}
