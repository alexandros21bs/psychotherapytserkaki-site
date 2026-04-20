import { Link } from 'react-router-dom'
import { siteData } from '../data/site'
import BackLink from '../components/common/BackLink'
import approachImage from '../../ad1.webp'
import profileImage from '../../ADAM.webp'

export default function About() {
  return (
    <>
      {/* 1 · About Hero */}
      <section className="hero-section hero-compact" aria-label="Σχετικά με εμένα">
        <div className="container">
          <BackLink fallback="/" />
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
            <img
              src={profileImage}
              alt="Αδαμαντία Τσερκάκη"
              className="about-profile-image"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <p className="eyebrow">Ποια είμαι</p>
            <h2>{siteData.brandName}</h2>
            <p className="about-subtitle">{siteData.title}</p>

            <p>
              Είμαι σύμβουλος ψυχικής υγείας και συνθετική ψυχοθεραπεύτρια
              και εργάζομαι με ενήλικες, ζευγάρια και οικογένειες, μέσα σε ένα
              πλαίσιο εμπιστοσύνης, σεβασμού και ουσιαστικής συνεργασίας.
            </p>

            <p>
              Πιστεύω πως κάθε άνθρωπος φέρει τη δική του μοναδική ιστορία,
              τις προσωπικές του εμπειρίες, τις δυσκολίες αλλά και τις
              δυνατότητές του. Για μένα, η θεραπευτική διαδικασία δεν αφορά
              έτοιμες απαντήσεις ούτε γρήγορες λύσεις, αλλά τη δημιουργία ενός
              ασφαλούς και σταθερού χώρου, όπου ο άνθρωπος μπορεί να μιλήσει με
              ειλικρίνεια, να ακουστεί πραγματικά και να συναντήσει βαθύτερα τον
              εαυτό του.
            </p>

            <p>
              Στόχος μου είναι να προσφέρω ένα περιβάλλον στο οποίο μπορεί
              κανείς να υπάρξει χωρίς φόβο κριτικής, να επεξεργαστεί όσα τον
              απασχολούν και να προσεγγίσει, με τον δικό του ρυθμό, πιο
              ουσιαστικούς τρόπους σύνδεσης με τον εαυτό του και τους άλλους.
              Μέσα από αυτή τη διαδικασία, επιδιώκω να δημιουργείται ένας
              χώρος ουσιαστικής συνάντησης, όπου η ενσυναίσθηση, η αυθεντική
              παρουσία και η κατανόηση μπορούν να στηρίξουν τον άνθρωπο ώστε να
              αναγνωρίσει βαθύτερα τις ανάγκες του, να ενδυναμώσει τις
              εσωτερικές του δυνάμεις και να χτίσει μια πιο σταθερή, αληθινή
              και συνειδητή σχέση με τη ζωή του.
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
              Η συνθετική ψυχοθεραπεία είναι μια προσέγγιση που δεν ακολουθεί
              αποκλειστικά μία μόνο θεραπευτική σχολή. Συνδυάζει διαφορετικά
              θεωρητικά και θεραπευτικά εργαλεία — γνωσιακά, ψυχοδυναμικά και
              βιωματικά — με στόχο να ανταποκρίνεται πιο ουσιαστικά στη
              μοναδικότητα κάθε ανθρώπου.
            </p>

            <p>
              Με άλλα λόγια, η θεραπεία δεν διαμορφώνεται γύρω από ένα
              αυστηρό μοντέλο, αλλά γύρω από εσένα. Την προσωπική σου
              ιστορία, τις εμπειρίες σου, τις ανάγκες σου και τον τρόπο με
              τον οποίο βιώνεις όσα σε απασχολούν. Έτσι, δημιουργείται ένα
              θεραπευτικό πλαίσιο πιο ευέλικτο, πιο ανθρώπινο και πιο
              ουσιαστικό, που σέβεται τον δικό σου ρυθμό και ανοίγει χώρο για
              αληθινή επεξεργασία.
            </p>

            <ul className="check-list">
              <li>Εξατομικευμένη προσέγγιση, προσαρμοσμένη στις ανάγκες κάθε ανθρώπου</li>
              <li>Αξιοποίηση διαφορετικών επιστημονικά τεκμηριωμένων θεραπευτικών εργαλείων</li>
              <li>Εστίαση όχι μόνο στο σύμπτωμα, αλλά και στη βαθύτερη κατανόηση της εμπειρίας</li>
              <li>Ευελιξία στον ρυθμό, στη μέθοδο και στην πορεία της θεραπευτικής εργασίας</li>
            </ul>
          </div>

          <div className="split-media">
            <img
              src={approachImage}
              alt="Συνθετική ψυχοθεραπεία"
              className="about-approach-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4 · Αξίες / Θεραπευτική Σχέση */}
      <section className="section" aria-label="Αξίες">
        <div className="container">
          <header className="section-header section-header-center about-values-header">
            <p className="eyebrow">Θεραπευτική Σχέση</p>
            <h2>Τι με καθοδηγεί στη δουλειά μου</h2>
            <p className="section-lead">
              Η θεραπευτική σχέση βρίσκεται στον πυρήνα κάθε ουσιαστικής
              αλλαγής. Είναι το πλαίσιο μέσα στο οποίο ο άνθρωπος μπορεί να
              νιώσει ασφάλεια, εμπιστοσύνη και χώρο να εκφραστεί χωρίς κριτική.
            </p>
            <p className="section-lead">
              Πιστεύω πως όταν η θεραπεία στηρίζεται στην παρουσία, στον
              σεβασμό και στην αυθεντική σύνδεση, μπορεί να ανοίξει τον δρόμο
              για βαθύτερη κατανόηση, προσωπική επεξεργασία και ουσιαστική
              αλλαγή. Οι αξίες που ακολουθούν αποτελούν τη βάση αυτής της
              θεραπευτικής σχέσης και καθοδηγούν τον τρόπο με τον οποίο
              εργάζομαι.
            </p>
          </header>

          <div className="values-grid">
            <article className="value-item">
              <span className="value-number" aria-hidden="true">01</span>
              <h3>Ασφάλεια</h3>
              <p>
                Δημιουργώ ένα πλαίσιο μέσα στο οποίο μπορείς να εκφραστείς
                ελεύθερα, χωρίς φόβο κριτικής. Η εμπιστευτικότητα και η
                αίσθηση ασφάλειας αποτελούν σταθερή βάση της θεραπευτικής
                διαδικασίας.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">02</span>
              <h3>Ενσυναίσθηση</h3>
              <p>
                Ακούω με ουσιαστική προσοχή και ενδιαφέρον. Στόχος δεν είναι
                να σε κατευθύνω, αλλά να κατανοήσω τον κόσμο σου μέσα από τη
                δική σου εμπειρία και οπτική.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">03</span>
              <h3>Σεβασμός</h3>
              <p>
                Κάθε άνθρωπος και κάθε ιστορία είναι μοναδικά. Προσεγγίζω
                κάθε θεραπευτική διαδρομή με σεβασμό, αξιοπρέπεια και αποδοχή.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">04</span>
              <h3>Αυθεντικότητα</h3>
              <p>
                Η θεραπεία δεν είναι μια τυπική διαδικασία ούτε ένας ρόλος
                που απλώς εκτελείται. Είναι μια γνήσια ανθρώπινη σχέση, με
                παρουσία, ειλικρίνεια και ουσιαστική σύνδεση.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">05</span>
              <h3>Συνεργασία</h3>
              <p>
                Η θεραπευτική πορεία χτίζεται μαζί. Δουλεύουμε σε ένα πλαίσιο
                συνεργασίας, όπου ο ρυθμός και η κατεύθυνση διαμορφώνονται με
                βάση τις ανάγκες σου.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">06</span>
              <h3>Ανάπτυξη</h3>
              <p>
                Η θεραπεία δεν αφορά μόνο τη διαχείριση μιας δυσκολίας. Αφορά
                και τη δυνατότητα βαθύτερης κατανόησης, προσωπικής εξέλιξης
                και σύνδεσης με τον πιο αυθεντικό εαυτό.
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
