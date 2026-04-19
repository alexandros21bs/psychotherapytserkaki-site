import { Link } from 'react-router-dom'
import { siteData } from '../data/site'

export default function About() {
  return (
    <>
      {/* 1 · About Hero */}
      <section className="hero-section hero-compact" aria-label="Σχετικά με εμένα">
        <div className="container">
          <p className="eyebrow">Σχετικά</p>
          <h1>
            Πίσω από τη θεραπευτική
            <br />
            σχέση, υπάρχει ένας άνθρωπος
          </h1>
          <p className="hero-sub">
            Γνωρίστε τη φιλοσοφία, το υπόβαθρο και τον τρόπο εργασίας μου.
          </p>
        </div>
      </section>

      {/* 2 · Professional Bio */}
      <section className="section" aria-label="Βιογραφικό">
        <div className="container about-grid">
          <div className="about-image">
            <div className="hero-image-placeholder">[PROFILE_IMAGE_PLACEHOLDER]</div>
          </div>

          <div className="about-content">
            <p className="eyebrow">Ποια είμαι</p>
            <h2>{siteData.brandName}</h2>
            <p className="about-subtitle">{siteData.title}</p>

            <p>
              Είμαι σύμβουλος ψυχικής υγείας και συνθετική ψυχοθεραπεύτρια.
              Εργάζομαι με ενήλικες, ζευγάρια και οικογένειες σε ένα πλαίσιο
              εμπιστοσύνης, σεβασμού και ουσιαστικής συνεργασίας.
            </p>

            <p>
              [BIO_TEXT_PLACEHOLDER — Σπουδές, μεταπτυχιακά, εξειδικεύσεις,
              πιστοποιήσεις, μέλος επαγγελματικών φορέων.]
            </p>

            <p>
              Πιστεύω ότι κάθε άνθρωπος κουβαλάει τη δική του ιστορία.
              Στόχος μου δεν είναι να δώσω λύσεις, αλλά να δημιουργήσω τον
              χώρο που χρειάζεσαι για να τις βρεις μόνος/η σου.
            </p>

            <div className="about-actions">
              <Link to="/contact" className="btn btn-primary">
                Επικοινωνία
              </Link>
              <Link to="/services" className="btn btn-outline">
                Δες τις υπηρεσίες
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Συνθετική Ψυχοθεραπεία */}
      <section className="section section-alt" aria-label="Συνθετική ψυχοθεραπεία">
        <div className="container split-grid split-grid-reverse">
          <div className="split-text">
            <p className="eyebrow">Προσέγγιση</p>
            <h2>Τι είναι η Συνθετική Ψυχοθεραπεία;</h2>

            <p>
              Η συνθετική ψυχοθεραπεία δεν ακολουθεί μία μόνο σχολή σκέψης.
              Αντλεί από διαφορετικά θεραπευτικά μοντέλα — γνωστικά,
              ψυχοδυναμικά, βιωματικά — και τα προσαρμόζει στις μοναδικές
              ανάγκες κάθε ανθρώπου.
            </p>

            <p>
              Αυτό σημαίνει ότι η θεραπεία σχεδιάζεται γύρω από εσένα,
              όχι γύρω από μια θεωρία. Ο στόχος είναι να βρούμε μαζί
              τον τρόπο που λειτουργεί καλύτερα για σένα — στον δικό σου
              ρυθμό, με τα δικά σου λόγια.
            </p>

            <ul className="check-list">
              <li>Προσαρμογή σε κάθε άτομο, όχι «one-size-fits-all»</li>
              <li>Επιστημονικά τεκμηριωμένες τεχνικές</li>
              <li>Εστίαση στη σχέση, όχι μόνο στο σύμπτωμα</li>
              <li>Ευελιξία στον ρυθμό και τη μέθοδο εργασίας</li>
            </ul>
          </div>

          <div className="split-media">
            <div className="hero-image-placeholder ratio-square">
              [SECTION_IMAGE_PLACEHOLDER]
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Αξίες / Θεραπευτική Σχέση */}
      <section className="section" aria-label="Αξίες">
        <div className="container">
          <header className="section-header section-header-center">
            <p className="eyebrow">Θεραπευτική Σχέση</p>
            <h2>Τι με καθοδηγεί στη δουλειά μου</h2>
            <p className="section-lead">
              Η θεραπευτική σχέση είναι ο πυρήνας κάθε αλλαγής. Αυτές
              είναι οι αξίες που τη στηρίζουν.
            </p>
          </header>

          <div className="values-grid">
            <article className="value-item">
              <span className="value-number" aria-hidden="true">01</span>
              <h3>Ασφάλεια</h3>
              <p>
                Δημιουργώ ένα πλαίσιο όπου μπορείς να εκφραστείς ελεύθερα,
                χωρίς φόβο κρίσης. Η εμπιστευτικότητα είναι απόλυτη.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">02</span>
              <h3>Ενσυναίσθηση</h3>
              <p>
                Ακούω με πραγματική προσοχή. Ο στόχος δεν είναι να σε κατευθύνω,
                αλλά να κατανοήσω τον κόσμο σου μέσα από τη δική σου οπτική.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">03</span>
              <h3>Σεβασμός</h3>
              <p>
                Κάθε ιστορία είναι μοναδική. Αντιμετωπίζω κάθε άνθρωπο
                με αξιοπρέπεια, ανεξάρτητα από το τι φέρνει στη θεραπεία.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">04</span>
              <h3>Αυθεντικότητα</h3>
              <p>
                Η θεραπεία δεν είναι ρόλος — είναι γνήσια σχέση. Είμαι
                παρούσα, ειλικρινής και ανοιχτή στη διαδικασία.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">05</span>
              <h3>Συνεργασία</h3>
              <p>
                Δουλεύουμε μαζί, σαν ομάδα. Η πορεία καθορίζεται
                από τις ανάγκες σου, στον ρυθμό που νιώθεις ασφαλής.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">06</span>
              <h3>Ανάπτυξη</h3>
              <p>
                Η θεραπεία δεν αφορά μόνο τη δυσκολία. Αφορά την κατανόηση,
                την εξέλιξη και τη σύνδεση με τον αυθεντικό εαυτό σου.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5 · Final CTA */}
      <section className="section cta-section" aria-label="Επικοινωνία">
        <div className="container cta-block">
          <p className="eyebrow cta-eyebrow">Επόμενο βήμα</p>
          <h2>Θέλεις να μιλήσουμε;</h2>
          <p>
            Μια πρώτη γνωριμία χωρίς δέσμευση — δια ζώσης στα Χανιά
            ή online, από οπουδήποτε.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Επικοινωνία
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg cta-btn-outline">
              Δες τις υπηρεσίες
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
