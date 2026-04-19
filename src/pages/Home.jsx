import { Link } from 'react-router-dom'
import { siteData } from '../data/site'
import { services } from '../data/services'
import { faqItems } from '../data/faq'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Ψυχοθεραπεία &amp; Συμβουλευτική</p>
            <h1>Ένας χώρος ασφάλειας, κατανόησης και αλλαγής</h1>
            <p className="hero-sub">
              Η ψυχοθεραπεία δεν είναι πολυτέλεια. Είναι μια πράξη φροντίδας
              για τον εαυτό σου — και το πρώτο βήμα μπορεί να ξεκινήσει σήμερα.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Κλείσε Ραντεβού
              </Link>
              <Link to="/services" className="btn btn-outline">
                Υπηρεσίες
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">[IMAGE_PLACEHOLDER]</div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container intro-block">
          <p className="eyebrow">Καλώς ήρθατε</p>
          <h2>
            Είμαι η {siteData.brandName}, {siteData.title.toLowerCase()}.
          </h2>
          <p className="intro-text">
            Στον χώρο μου, κάθε άνθρωπος βρίσκει έναν ασφαλή τόπο για να
            μιλήσει, να κατανοήσει και να προχωρήσει. Η θεραπευτική σχέση
            βασίζεται στον σεβασμό, την εμπιστοσύνη και τη συνεργασία.
          </p>
          <Link to="/about" className="text-link">
            Περισσότερα για εμένα →
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Υπηρεσίες</p>
          <h2>Πώς μπορώ να βοηθήσω</h2>
          <div className="card-grid">
            {services.map((service) => (
              <Link
                to={`/services/${service.slug}`}
                className="card card-hover"
                key={service.slug}
              >
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <span className="text-link">Μάθε περισσότερα →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">Προσέγγιση</p>
            <h2>Συνθετική Ψυχοθεραπεία</h2>
            <p>
              Η συνθετική προσέγγιση συνδυάζει θεραπευτικά μοντέλα
              προσαρμοσμένα στις μοναδικές ανάγκες κάθε ανθρώπου. Δεν υπάρχει
              μία λύση για όλους — υπάρχει η λύση που ταιριάζει σε εσένα.
            </p>
          </div>
          <ul className="approach-list">
            <li>Ασφαλές θεραπευτικό πλαίσιο</li>
            <li>Εξατομικευμένη προσέγγιση</li>
            <li>Εμπιστευτικότητα &amp; σεβασμός</li>
            <li>Δια ζώσης &amp; online συνεδρίες</li>
          </ul>
        </div>
      </section>

      {/* Trust */}
      <section className="section section-alt">
        <div className="container trust-block">
          <p className="eyebrow">Εμπιστοσύνη</p>
          <h2>Γιατί να ξεκινήσεις ψυχοθεραπεία;</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <h3>Αυτογνωσία</h3>
              <p>
                Κατανόησε τα μοτίβα που επηρεάζουν τη ζωή σου και βρες νέους
                τρόπους αντιμετώπισης.
              </p>
            </div>
            <div className="trust-item">
              <h3>Στήριξη</h3>
              <p>
                Ένας χώρος χωρίς κριτική, όπου μπορείς να εκφραστείς ελεύθερα
                και με ασφάλεια.
              </p>
            </div>
            <div className="trust-item">
              <h3>Αλλαγή</h3>
              <p>
                Μικρά βήματα που φέρνουν ουσιαστική αλλαγή στις σχέσεις, στα
                συναισθήματα και στην καθημερινότητα.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Συχνές Ερωτήσεις</p>
          <h2>Απαντήσεις σε βασικά ερωτήματα</h2>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details className="faq-item" key={i}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>Έτοιμος/η να κάνεις το πρώτο βήμα;</h2>
          <p>
            Κλείσε μια πρώτη συνεδρία και ξεκίνα τη δική σου διαδρομή
            αυτογνωσίας και αλλαγής.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Επικοινώνησε Μαζί Μου
          </Link>
        </div>
      </section>
    </>
  )
}
