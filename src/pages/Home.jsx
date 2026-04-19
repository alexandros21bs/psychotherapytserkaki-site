import { Link } from 'react-router-dom'
import { siteData } from '../data/site'
import { services } from '../data/services'
import { faqItems } from '../data/faq'
import { reviews } from '../data/reviews'

export default function Home() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="hero-section" aria-label="Εισαγωγή">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Ψυχοθεραπεία · Συμβουλευτική · Χανιά</p>
            <h1>
              Ένας ασφαλής χώρος
              <br />
              για να ακουστείς
            </h1>
            <p className="hero-sub">
              Η ψυχοθεραπεία δεν απαιτεί να έχεις έτοιμες απαντήσεις.
              Αρκεί η διάθεση να κοιτάξεις μέσα σου — με στήριξη, σεβασμό
              και εμπιστοσύνη.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Κλείσε Ραντεβού
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Μάθε περισσότερα
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-placeholder">[HERO_IMAGE_PLACEHOLDER]</div>
          </div>
        </div>
      </section>

      {/* 2 · Intro — θεραπευτική σχέση */}
      <section className="section" aria-label="Σύντομη γνωριμία">
        <div className="container split-grid">
          <div className="split-media">
            <div className="hero-image-placeholder ratio-square">
              [SECTION_IMAGE_PLACEHOLDER]
            </div>
          </div>

          <div className="split-text">
            <p className="eyebrow">Γνωριμία</p>
            <h2>
              Είμαι η&nbsp;{siteData.brandName}.
              <br />
              <span className="heading-muted">{siteData.title}.</span>
            </h2>
            <p>
              Πιστεύω ότι η θεραπευτική σχέση είναι ο πυρήνας κάθε αλλαγής.
              Στον χώρο μου, θα βρεις ασφάλεια, ειλικρίνεια και έναν σύμμαχο
              στη διαδρομή προς την αυτογνωσία.
            </p>
            <p>
              Δουλεύω με ανθρώπους που αναζητούν κατανόηση — όχι λύσεις
              στα γρήγορα, αλλά ουσιαστική επαφή με τον εαυτό τους.
            </p>
            <Link to="/about" className="text-link">
              Περισσότερα για εμένα →
            </Link>
          </div>
        </div>
      </section>

      {/* 3 · Services Preview */}
      <section className="section section-alt" aria-label="Υπηρεσίες">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Υπηρεσίες</p>
            <h2>Πώς μπορώ να βοηθήσω</h2>
            <p className="section-lead">
              Κάθε μορφή θεραπείας προσαρμόζεται στον ρυθμό και τις ανάγκες σου.
            </p>
          </header>

          <div className="card-grid">
            {services.map((service) => (
              <Link
                to={`/services/${service.slug}`}
                className="card card-hover"
                key={service.slug}
              >
                <div className="card-icon" aria-hidden="true">
                  {service.title.charAt(0)}
                </div>
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <span className="text-link">Μάθε περισσότερα →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Προσέγγιση — Συνθετική Ψυχοθεραπεία */}
      <section className="section" aria-label="Θεραπευτική προσέγγιση">
        <div className="container approach-grid">
          <div className="approach-text">
            <p className="eyebrow">Προσέγγιση</p>
            <h2>Συνθετική Ψυχοθεραπεία</h2>
            <p>
              Η συνθετική προσέγγιση δεν ακολουθεί μία σχολή. Αξιοποιεί
              θεραπευτικά εργαλεία από διαφορετικά μοντέλα, σχεδιασμένα
              γύρω από τις μοναδικές ανάγκες κάθε ανθρώπου.
            </p>
            <p>
              Δεν υπάρχει μία λύση για όλους — υπάρχει η λύση
              που ταιριάζει σε&nbsp;εσένα.
            </p>
          </div>

          <ul className="approach-list" role="list">
            <li>
              <strong>Ασφαλές πλαίσιο</strong>
              <span>Εμπιστευτικότητα και σταθερότητα σε κάθε συνεδρία</span>
            </li>
            <li>
              <strong>Εξατομίκευση</strong>
              <span>Θεραπεία προσαρμοσμένη στον δικό σου ρυθμό</span>
            </li>
            <li>
              <strong>Σεβασμός</strong>
              <span>Χωρίς κρίση, χωρίς πίεση, με απόλυτη αποδοχή</span>
            </li>
            <li>
              <strong>Ευελιξία</strong>
              <span>Δια ζώσης στα Χανιά ή online από οπουδήποτε</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5 · Trust */}
      <section className="section section-alt" aria-label="Λόγοι εμπιστοσύνης">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Γιατί ψυχοθεραπεία</p>
            <h2>Τρεις λόγοι για να ξεκινήσεις</h2>
          </header>

          <div className="trust-grid">
            <article className="trust-item">
              <span className="trust-number" aria-hidden="true">01</span>
              <h3>Αυτογνωσία</h3>
              <p>
                Κατανόησε τα μοτίβα σκέψης και συμπεριφοράς που σε κρατούν
                πίσω — και ανακάλυψε νέους τρόπους αντιμετώπισης.
              </p>
            </article>

            <article className="trust-item">
              <span className="trust-number" aria-hidden="true">02</span>
              <h3>Στήριξη</h3>
              <p>
                Ένας χώρος χωρίς κριτική, όπου μπορείς να μιλήσεις
                ελεύθερα, να νιώσεις ότι ακούγεσαι και ότι δεν είσαι μόνος/η.
              </p>
            </article>

            <article className="trust-item">
              <span className="trust-number" aria-hidden="true">03</span>
              <h3>Αλλαγή</h3>
              <p>
                Μικρά, σταθερά βήματα που φέρνουν ουσιαστική αλλαγή
                στις σχέσεις, τα συναισθήματα και την καθημερινότητα.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6 · Reviews */}
      <section className="section" aria-label="Αξιολογήσεις">
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">Αξιολογήσεις</p>
            <h2>Τι λένε άνθρωποι που ξεκίνησαν θεραπεία</h2>
          </header>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <p className="review-quote">"{review.quote}"</p>
                <p className="review-author">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · FAQ Preview */}
      <section className="section" aria-label="Συχνές ερωτήσεις">
        <div className="container faq-container">
          <header className="section-header">
            <p className="eyebrow">Συχνές Ερωτήσεις</p>
            <h2>Ό,τι μπορεί να αναρωτιέσαι</h2>
          </header>

          <dl className="faq-list">
            {faqItems.map((item, i) => (
              <details className="faq-item" key={i}>
                <summary>
                  <span>{item.question}</span>
                </summary>
                <dd>{item.answer}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* 8 · Newsletter */}
      <section className="section" aria-label="Newsletter">
        <div className="container newsletter-wrap">
          <div className="newsletter-content">
            <p className="eyebrow">Newsletter</p>
            <h2>Σύντομες σκέψεις για ψυχική ευεξία</h2>
            <p>
              Εγγράψου για να λαμβάνεις αραιά και επιλεγμένα emails με
              πρακτικές ιδέες, άρθρα και ενημερώσεις σχετικά με τη θεραπευτική
              διαδικασία.
            </p>
          </div>

          <form className="newsletter-form" action="[FORM_ACTION_PLACEHOLDER]" method="post">
            <label htmlFor="newsletter-email">Email</label>
            <div className="newsletter-input-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Το email σου"
                required
              />
              <button type="submit" className="btn btn-primary">
                Εγγραφή
              </button>
            </div>
            <small>Χωρίς spam. Μπορείς να διαγραφείς οποιαδήποτε στιγμή.</small>
          </form>
        </div>
      </section>

      {/* 9 · Final CTA */}
      <section className="section cta-section" aria-label="Κλείσε ραντεβού">
        <div className="container cta-block">
          <p className="eyebrow cta-eyebrow">Πρώτο βήμα</p>
          <h2>Έτοιμος/η να ξεκινήσεις;</h2>
          <p>
            Κλείσε μια πρώτη γνωριμία — δια ζώσης ή online.
            Χωρίς δέσμευση, χωρίς πίεση.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Κλείσε Ραντεβού
          </Link>
        </div>
      </section>
    </>
  )
}
