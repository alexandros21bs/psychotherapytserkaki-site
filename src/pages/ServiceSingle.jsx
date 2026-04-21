import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'
import BackLink from '../components/common/BackLink'
import { useLanguage } from '../context/LanguageContext'

export default function ServiceSingle() {
  const { isEnglish } = useLanguage()
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  const detailedParagraphs =
    (isEnglish ? service?.detailedParagraphsEn : service?.detailedParagraphs) ??
    [isEnglish
      ? '[SERVICE_DETAILED_TEXT_PLACEHOLDER — Detailed service description and what to expect.]'
      : '[SERVICE_DETAILED_TEXT_PLACEHOLDER — Αναλυτική περιγραφή της υπηρεσίας, της διαδικασίας και του τι μπορεί να περιμένει κανείς.]']

  const supportPoints =
    (isEnglish ? service?.supportPointsEn : service?.supportPoints) ??
    (isEnglish
      ? [
          'You feel something is holding you back',
          'You experience relationship difficulties',
          'You want to understand yourself better',
          'You are going through a difficult period and need support',
        ]
      : [
          'Νιώθεις ότι κάτι σε κρατάει πίσω',
          'Αντιμετωπίζεις δυσκολίες στις σχέσεις σου',
          'Θέλεις να κατανοήσεις καλύτερα τον εαυτό σου',
          'Περνάς μια δύσκολη περίοδο και χρειάζεσαι στήριξη',
        ])

  const closingText =
    (isEnglish ? service?.closingTextEn : service?.closingText) ??
    (isEnglish
      ? 'Book a first session and begin your own path.'
      : 'Κλείσε μια πρώτη συνεδρία και ξεκίνα τη δική σου διαδρομή.')

  if (!service) {
    return (
      <section className="section">
        <div className="container">
          <h1>Η υπηρεσία δεν βρέθηκε</h1>
          <Link to="/services" className="text-link">
            {isEnglish ? '← Back to services' : '← Πίσω στις υπηρεσίες'}
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
          <p className="eyebrow">{isEnglish ? 'Service' : 'Υπηρεσία'}</p>
          <h1>{isEnglish ? (service.titleEn || service.title) : service.title}</h1>
          <p className="hero-sub">{isEnglish ? (service.excerptEn || service.excerpt) : service.excerpt}</p>
          {service.image && (
            <div className="service-hero-image-wrap">
              <img src={service.image} alt={isEnglish ? (service.titleEn || service.title) : service.title} className="service-hero-image" />
            </div>
          )}
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container intro-block">
          <h2>{isEnglish ? 'What is included?' : 'Τι περιλαμβάνει;'}</h2>
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
          <p className="eyebrow">{isEnglish ? 'Who it is for' : 'Σε ποιον απευθύνεται'}</p>
          <h2>{isEnglish ? 'It may help if...' : 'Μπορεί να σε βοηθήσει αν...'}</h2>
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
          <p className="eyebrow">{isEnglish ? 'Therapeutic framework' : 'Θεραπευτικό Πλαίσιο'}</p>
          <h2>{isEnglish ? 'What I offer' : 'Τι προσφέρω'}</h2>
          <div className="card-grid">
            <div className="card">
              <h3>{isEnglish ? 'Safe space' : 'Ασφαλής χώρος'}</h3>
              <p>
                {isEnglish
                  ? 'A trusted environment, without judgment, with full confidentiality.'
                  : 'Ένα περιβάλλον εμπιστοσύνης, χωρίς κριτική και με απόλυτη εχεμύθεια.'}
              </p>
            </div>
            <div className="card">
              <h3>{isEnglish ? 'Personalization' : 'Εξατομίκευση'}</h3>
              <p>
                {isEnglish
                  ? 'Every therapy plan is built around your needs and your own pace.'
                  : 'Κάθε θεραπεία σχεδιάζεται γύρω από τις δικές σου ανάγκες και τον δικό σου ρυθμό.'}
              </p>
            </div>
            <div className="card">
              <h3>{isEnglish ? 'Flexibility' : 'Ευελιξία'}</h3>
              <p>
                {isEnglish
                  ? 'In-person or online sessions are available according to your needs.'
                  : 'Δυνατότητα δια ζώσης ή online συνεδριών, ανάλογα με τις ανάγκες σου.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>{isEnglish ? 'Would you like to begin?' : 'Θέλεις να ξεκινήσεις;'}</h2>
          <p>{closingText}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            {isEnglish ? 'Book Appointment' : 'Κλείσε Ραντεβού'}
          </Link>
        </div>
      </section>
    </>
  )
}
