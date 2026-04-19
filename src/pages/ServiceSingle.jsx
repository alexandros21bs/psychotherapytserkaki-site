import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import BackLink from '../components/common/BackLink'

export default function ServiceSingle() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  const detailedParagraphs = service?.detailedParagraphs ?? [
    '[SERVICE_DETAILED_TEXT_PLACEHOLDER — Αναλυτική περιγραφή της υπηρεσίας, της διαδικασίας και του τι μπορεί να περιμένει κανείς.]',
  ]

  const supportPoints = service?.supportPoints ?? [
    'Νιώθεις ότι κάτι σε κρατάει πίσω',
    'Αντιμετωπίζεις δυσκολίες στις σχέσεις σου',
    'Θέλεις να κατανοήσεις καλύτερα τον εαυτό σου',
    'Περνάς μια δύσκολη περίοδο και χρειάζεσαι στήριξη',
  ]

  const closingText =
    service?.closingText ??
    'Κλείσε μια πρώτη συνεδρία και ξεκίνα τη δική σου διαδρομή.'

  if (!service) {
    return (
      <section className="section">
        <div className="container">
          <h1>Η υπηρεσία δεν βρέθηκε</h1>
          <Link to="/services" className="text-link">
            ← Πίσω στις υπηρεσίες
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <BackLink fallback="/services" />
          <p className="eyebrow">Υπηρεσία</p>
          <h1>{service.title}</h1>
          <p className="hero-sub">{service.excerpt}</p>
          {service.image && (
            <div className="service-hero-image-wrap">
              <img src={service.image} alt={service.title} className="service-hero-image" />
            </div>
          )}
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container intro-block">
          <h2>Τι περιλαμβάνει;</h2>
          {detailedParagraphs.map((paragraph) => (
            <p className="intro-text" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Who it supports */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Σε ποιον απευθύνεται</p>
          <h2>Μπορεί να σε βοηθήσει αν...</h2>
          <ul className="support-list">
            {supportPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Points */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Θεραπευτικό Πλαίσιο</p>
          <h2>Τι προσφέρω</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Ασφαλής χώρος</h3>
              <p>
                Ένα περιβάλλον εμπιστοσύνης, χωρίς κριτική και με απόλυτη
                εχεμύθεια.
              </p>
            </div>
            <div className="card">
              <h3>Εξατομίκευση</h3>
              <p>
                Κάθε θεραπεία σχεδιάζεται γύρω από τις δικές σου ανάγκες και
                τον δικό σου ρυθμό.
              </p>
            </div>
            <div className="card">
              <h3>Ευελιξία</h3>
              <p>
                Δυνατότητα δια ζώσης ή online συνεδριών, ανάλογα με τις
                ανάγκες σου.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>Θέλεις να ξεκινήσεις;</h2>
          <p>{closingText}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Κλείσε Ραντεβού
          </Link>
        </div>
      </section>
    </>
  )
}
