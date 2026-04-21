import { Link } from 'react-router-dom'
import { siteData } from '../data/site'
import BackLink from '../components/common/BackLink'
import approachImage from '../../ad1.webp'
import profileImage from '../../ADAM.webp'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { isEnglish } = useLanguage()

  return (
    <>
      {/* 1 · About Hero */}
      <section className="hero-section hero-compact" aria-label={isEnglish ? 'About me' : 'Σχετικά με εμένα'}>
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">{isEnglish ? 'About' : 'Σχετικά'}</p>
          <h1>
            {isEnglish ? 'Behind the therapeutic relationship, there is a person' : <>
              Πίσω από τη θεραπευτική
              <br />
              σχέση, υπάρχει ένας άνθρωπος
            </>}
          </h1>
          <p className="hero-sub">
            {isEnglish
              ? 'Get to know my philosophy, background and therapeutic way of working.'
              : 'Γνωρίστε τη φιλοσοφία, το υπόβαθρο και τον τρόπο εργασίας μου.'}
          </p>
        </div>
      </section>

      {/* 2 · Professional Bio */}
      <section className="section" aria-label={isEnglish ? 'Biography' : 'Βιογραφικό'}>
        <div className="container about-grid">
          <div className="about-image">
            <img
              src={profileImage}
              alt={isEnglish ? 'Adamantia Tserkaki' : 'Αδαμαντία Τσερκάκη'}
              className="about-profile-image"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <p className="eyebrow">{isEnglish ? 'Who I am' : 'Ποια είμαι'}</p>
            <h2>{siteData.brandName}</h2>
            <p className="about-subtitle">{siteData.title}</p>

            <p>
              {isEnglish
                ? 'I am a mental health counselor and integrative psychotherapist, working with adults, couples and families in a framework of trust, respect and meaningful collaboration.'
                : 'Είμαι σύμβουλος ψυχικής υγείας και συνθετική ψυχοθεραπεύτρια και εργάζομαι με ενήλικες, ζευγάρια και οικογένειες, μέσα σε ένα πλαίσιο εμπιστοσύνης, σεβασμού και ουσιαστικής συνεργασίας.'}
            </p>

            <p>
              {isEnglish
                ? 'I believe each person carries a unique personal history, with difficulties and strengths alike. For me, therapy is not about quick fixes, but about creating a safe and stable space where a person can speak honestly, feel heard and connect more deeply with themselves.'
                : 'Πιστεύω πως κάθε άνθρωπος φέρει τη δική του μοναδική ιστορία, τις προσωπικές του εμπειρίες, τις δυσκολίες αλλά και τις δυνατότητές του. Για μένα, η θεραπευτική διαδικασία δεν αφορά έτοιμες απαντήσεις ούτε γρήγορες λύσεις, αλλά τη δημιουργία ενός ασφαλούς και σταθερού χώρου, όπου ο άνθρωπος μπορεί να μιλήσει με ειλικρίνεια, να ακουστεί πραγματικά και να συναντήσει βαθύτερα τον εαυτό του.'}
            </p>

            <p>
              {isEnglish
                ? 'My goal is to offer an environment where you can exist without fear of judgment, process what concerns you and gradually build healthier ways of relating to yourself and others. Through this process, I aim to support deeper needs recognition, inner strength and a more grounded relationship with life.'
                : 'Στόχος μου είναι να προσφέρω ένα περιβάλλον στο οποίο μπορεί κανείς να υπάρξει χωρίς φόβο κριτικής, να επεξεργαστεί όσα τον απασχολούν και να προσεγγίσει, με τον δικό του ρυθμό, πιο ουσιαστικούς τρόπους σύνδεσης με τον εαυτό του και τους άλλους. Μέσα από αυτή τη διαδικασία, επιδιώκω να δημιουργείται ένας χώρος ουσιαστικής συνάντησης, όπου η ενσυναίσθηση, η αυθεντική παρουσία και η κατανόηση μπορούν να στηρίξουν τον άνθρωπο ώστε να αναγνωρίσει βαθύτερα τις ανάγκες του, να ενδυναμώσει τις εσωτερικές του δυνάμεις και να χτίσει μια πιο σταθερή, αληθινή και συνειδητή σχέση με τη ζωή του.'}
            </p>

            <div className="about-actions">
              <Link to="/contact" className="btn btn-primary">
                {isEnglish ? 'Contact' : 'Επικοινωνία'}
              </Link>
              <Link to="/services" className="btn btn-outline">
                {isEnglish ? 'View services' : 'Δες τις υπηρεσίες'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Συνθετική Ψυχοθεραπεία */}
      <section className="section section-alt" aria-label={isEnglish ? 'Integrative psychotherapy' : 'Συνθετική ψυχοθεραπεία'}>
        <div className="container split-grid split-grid-reverse">
          <div className="split-text">
            <p className="eyebrow">{isEnglish ? 'Approach' : 'Προσέγγιση'}</p>
            <h2>{isEnglish ? 'What is Integrative Psychotherapy?' : 'Τι είναι η Συνθετική Ψυχοθεραπεία;'}</h2>

            <p>
              {isEnglish
                ? 'Integrative psychotherapy is an approach that does not rely on a single school. It combines different theoretical and therapeutic tools to respond to each person’s uniqueness in a meaningful way.'
                : 'Η συνθετική ψυχοθεραπεία είναι μια προσέγγιση που δεν ακολουθεί αποκλειστικά μία μόνο θεραπευτική σχολή. Συνδυάζει διαφορετικά θεωρητικά και θεραπευτικά εργαλεία — γνωσιακά, ψυχοδυναμικά και βιωματικά — με στόχο να ανταποκρίνεται πιο ουσιαστικά στη μοναδικότητα κάθε ανθρώπου.'}
            </p>

            <p>
              {isEnglish
                ? 'In other words, therapy is not shaped around a rigid model, but around you: your story, your experiences, your needs and how you live what concerns you. This creates a more flexible and human framework that respects your pace and supports meaningful processing.'
                : 'Με άλλα λόγια, η θεραπεία δεν διαμορφώνεται γύρω από ένα αυστηρό μοντέλο, αλλά γύρω από εσένα. Την προσωπική σου ιστορία, τις εμπειρίες σου, τις ανάγκες σου και τον τρόπο με τον οποίο βιώνεις όσα σε απασχολούν. Έτσι, δημιουργείται ένα θεραπευτικό πλαίσιο πιο ευέλικτο, πιο ανθρώπινο και πιο ουσιαστικό, που σέβεται τον δικό σου ρυθμό και ανοίγει χώρο για αληθινή επεξεργασία.'}
            </p>

            <ul className="check-list">
              {isEnglish ? (
                <>
                  <li>Personalized approach tailored to each person’s needs</li>
                  <li>Use of different evidence-informed therapeutic tools</li>
                  <li>Focus not only on symptoms but also on deeper understanding</li>
                  <li>Flexibility in pace, method and therapeutic path</li>
                </>
              ) : (
                <>
                  <li>Εξατομικευμένη προσέγγιση, προσαρμοσμένη στις ανάγκες κάθε ανθρώπου</li>
                  <li>Αξιοποίηση διαφορετικών επιστημονικά τεκμηριωμένων θεραπευτικών εργαλείων</li>
                  <li>Εστίαση όχι μόνο στο σύμπτωμα, αλλά και στη βαθύτερη κατανόηση της εμπειρίας</li>
                  <li>Ευελιξία στον ρυθμό, στη μέθοδο και στην πορεία της θεραπευτικής εργασίας</li>
                </>
              )}
            </ul>
          </div>

          <div className="split-media">
            <img
              src={approachImage}
              alt={isEnglish ? 'Integrative psychotherapy' : 'Συνθετική ψυχοθεραπεία'}
              className="about-approach-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4 · Αξίες / Θεραπευτική Σχέση */}
      <section className="section" aria-label={isEnglish ? 'Values' : 'Αξίες'}>
        <div className="container">
          <header className="section-header section-header-center about-values-header">
            <p className="eyebrow">{isEnglish ? 'Therapeutic relationship' : 'Θεραπευτική Σχέση'}</p>
            <h2>{isEnglish ? 'What guides my work' : 'Τι με καθοδηγεί στη δουλειά μου'}</h2>
            <p className="section-lead">
              {isEnglish
                ? 'The therapeutic relationship is at the core of meaningful change. It is the space where a person can feel safety, trust and room to express themselves without judgment.'
                : 'Η θεραπευτική σχέση βρίσκεται στον πυρήνα κάθε ουσιαστικής αλλαγής. Είναι το πλαίσιο μέσα στο οποίο ο άνθρωπος μπορεί να νιώσει ασφάλεια, εμπιστοσύνη και χώρο να εκφραστεί χωρίς κριτική.'}
            </p>
            <p className="section-lead">
              {isEnglish
                ? 'When therapy is grounded in presence, respect and authentic connection, it can open the path to deeper understanding and real change. The values below form the basis of my work.'
                : 'Πιστεύω πως όταν η θεραπεία στηρίζεται στην παρουσία, στον σεβασμό και στην αυθεντική σύνδεση, μπορεί να ανοίξει τον δρόμο για βαθύτερη κατανόηση, προσωπική επεξεργασία και ουσιαστική αλλαγή. Οι αξίες που ακολουθούν αποτελούν τη βάση αυτής της θεραπευτικής σχέσης και καθοδηγούν τον τρόπο με τον οποίο εργάζομαι.'}
            </p>
          </header>

          <div className="values-grid">
            <article className="value-item">
              <span className="value-number" aria-hidden="true">01</span>
              <h3>{isEnglish ? 'Safety' : 'Ασφάλεια'}</h3>
              <p>
                Δημιουργώ ένα πλαίσιο μέσα στο οποίο μπορείς να εκφραστείς
                ελεύθερα, χωρίς φόβο κριτικής. Η εμπιστευτικότητα και η
                αίσθηση ασφάλειας αποτελούν σταθερή βάση της θεραπευτικής
                διαδικασίας.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">02</span>
              <h3>{isEnglish ? 'Empathy' : 'Ενσυναίσθηση'}</h3>
              <p>
                Ακούω με ουσιαστική προσοχή και ενδιαφέρον. Στόχος δεν είναι
                να σε κατευθύνω, αλλά να κατανοήσω τον κόσμο σου μέσα από τη
                δική σου εμπειρία και οπτική.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">03</span>
              <h3>{isEnglish ? 'Respect' : 'Σεβασμός'}</h3>
              <p>
                Κάθε άνθρωπος και κάθε ιστορία είναι μοναδικά. Προσεγγίζω
                κάθε θεραπευτική διαδρομή με σεβασμό, αξιοπρέπεια και αποδοχή.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">04</span>
              <h3>{isEnglish ? 'Authenticity' : 'Αυθεντικότητα'}</h3>
              <p>
                Η θεραπεία δεν είναι μια τυπική διαδικασία ούτε ένας ρόλος
                που απλώς εκτελείται. Είναι μια γνήσια ανθρώπινη σχέση, με
                παρουσία, ειλικρίνεια και ουσιαστική σύνδεση.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">05</span>
              <h3>{isEnglish ? 'Collaboration' : 'Συνεργασία'}</h3>
              <p>
                Η θεραπευτική πορεία χτίζεται μαζί. Δουλεύουμε σε ένα πλαίσιο
                συνεργασίας, όπου ο ρυθμός και η κατεύθυνση διαμορφώνονται με
                βάση τις ανάγκες σου.
              </p>
            </article>

            <article className="value-item">
              <span className="value-number" aria-hidden="true">06</span>
              <h3>{isEnglish ? 'Growth' : 'Ανάπτυξη'}</h3>
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
      <section className="section cta-section" aria-label={isEnglish ? 'Contact' : 'Επικοινωνία'}>
        <div className="container cta-block">
          <p className="eyebrow cta-eyebrow">{isEnglish ? 'Next step' : 'Επόμενο βήμα'}</p>
          <h2>{isEnglish ? 'Would you like to talk?' : 'Θέλεις να μιλήσουμε;'}</h2>
          <p>
            {isEnglish
              ? 'A first introductory session with no commitment, in person in Chania or online from anywhere.'
              : 'Μια πρώτη γνωριμία χωρίς δέσμευση — δια ζώσης στα Χανιά ή online, από οπουδήποτε.'}
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              {isEnglish ? 'Contact' : 'Επικοινωνία'}
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg cta-btn-outline">
              {isEnglish ? 'View services' : 'Δες τις υπηρεσίες'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
