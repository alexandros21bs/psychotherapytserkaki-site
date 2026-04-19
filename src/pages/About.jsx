import { Link } from 'react-router-dom'
import { siteData } from '../data/site'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section hero-compact">
        <div className="container">
          <p className="eyebrow">Σχετικά</p>
          <h1>Γνωρίστε με</h1>
          <p className="hero-sub">
            Μια σύντομη γνωριμία με τη φιλοσοφία, το υπόβαθρο και τον τρόπο
            εργασίας μου.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <div className="hero-image-placeholder">[IMAGE_PLACEHOLDER]</div>
          </div>
          <div className="about-content">
            <h2>{siteData.brandName}</h2>
            <p className="about-subtitle">{siteData.title}</p>
            <p>
              [BIO_TEXT_PLACEHOLDER — Σύντομο επαγγελματικό βιογραφικό, σπουδές,
              εξειδικεύσεις, επαγγελματικές πιστοποιήσεις.]
            </p>
            <p>
              Πιστεύω ότι η θεραπευτική σχέση είναι ο πυρήνας κάθε αλλαγής.
              Στόχος μου είναι να δημιουργώ έναν χώρο εμπιστοσύνης, ασφάλειας
              και ουσιαστικής επαφής.
            </p>
          </div>
        </div>
      </section>

      {/* Integrative Psychotherapy */}
      <section className="section section-alt">
        <div className="container intro-block">
          <p className="eyebrow">Προσέγγιση</p>
          <h2>Τι είναι η Συνθετική Ψυχοθεραπεία;</h2>
          <p className="intro-text">
            Η συνθετική ψυχοθεραπεία αξιοποιεί τεχνικές και θεωρίες από
            διαφορετικά θεραπευτικά μοντέλα, προσαρμόζοντας κάθε θεραπεία στις
            μοναδικές ανάγκες του ατόμου. Δεν ακολουθεί μία μόνο σχολή — αλλά
            ενσωματώνει ό,τι λειτουργεί καλύτερα για εσένα.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Αξίες</p>
          <h2>Τι με καθοδηγεί</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Σεβασμός</h3>
              <p>
                Κάθε άνθρωπος φέρνει τη δική του ιστορία. Την αντιμετωπίζω με
                απόλυτο σεβασμό και χωρίς κρίση.
              </p>
            </div>
            <div className="card">
              <h3>Αυθεντικότητα</h3>
              <p>
                Η θεραπεία προχωράει μέσα από τη γνήσια σχέση — με ειλικρίνεια
                και παρουσία.
              </p>
            </div>
            <div className="card">
              <h3>Συνεργασία</h3>
              <p>
                Η διαδικασία είναι κοινό ταξίδι. Δουλεύουμε μαζί, στο ρυθμό
                που νιώθεις ασφαλής.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-block">
          <h2>Θέλεις να μιλήσουμε;</h2>
          <p>
            Κλείσε μια πρώτη συνεδρία και ξεκίνα μια διαδρομή αυτογνωσίας και
            αλλαγής.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Κλείσε Ραντεβού
          </Link>
        </div>
      </section>
    </>
  )
}
