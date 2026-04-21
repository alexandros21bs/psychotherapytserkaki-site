import BackLink from '../components/common/BackLink'
import { useLanguage } from '../context/LanguageContext'

export default function Terms() {
  const { isEnglish } = useLanguage()

  return (
    <>
      <section className="hero-section hero-compact" aria-label={isEnglish ? 'Terms of Use' : 'Όροι Χρήσης'}>
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">{isEnglish ? 'Legal' : 'Νομικά'}</p>
          <h1>{isEnglish ? 'Terms of Use' : 'Όροι Χρήσης'}</h1>
          <p className="hero-sub">{isEnglish ? 'Last updated: 20 April 2026' : 'Τελευταία ενημέρωση: 20 Απριλίου 2026'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>{isEnglish ? 'Acceptance of terms' : 'Αποδοχή όρων'}</h2>
          <p>
            {isEnglish
              ? 'Using this website implies acceptance of these terms. If you do not agree, please refrain from using the site content or services.'
              : 'Η χρήση του ιστοτόπου προϋποθέτει την αποδοχή των παρόντων όρων. Αν δεν συμφωνείς, παρακαλείσαι να μη χρησιμοποιείς το περιεχόμενο ή τις υπηρεσίες της σελίδας.'}
          </p>

          <h2>{isEnglish ? 'Intellectual property' : 'Πνευματικά δικαιώματα'}</h2>
          <p>
            {isEnglish
              ? 'Text, graphics and overall website content are protected by intellectual property rights. Reproduction is prohibited without written permission.'
              : 'Το κείμενο, τα γραφικά και το συνολικό περιεχόμενο προστατεύονται από πνευματικά δικαιώματα. Απαγορεύεται η αναπαραγωγή χωρίς έγγραφη άδεια.'}
          </p>

          <h2>{isEnglish ? 'Limitation of liability' : 'Περιορισμός ευθύνης'}</h2>
          <p>
            {isEnglish
              ? 'Information is provided for informational purposes and does not replace individualized professional psychotherapy assessment.'
              : 'Οι πληροφορίες παρέχονται ενημερωτικά και δεν υποκαθιστούν εξατομικευμένη επαγγελματική ψυχοθεραπευτική αξιολόγηση.'}
          </p>

          <h2>{isEnglish ? 'External links' : 'Εξωτερικοί σύνδεσμοι'}</h2>
          <p>
            {isEnglish
              ? 'The website may include links to third-party websites. We are not responsible for the content or privacy practices of those services.'
              : 'Ο ιστότοπος μπορεί να περιλαμβάνει συνδέσμους προς τρίτους ιστοτόπους. Δεν φέρουμε ευθύνη για το περιεχόμενο ή τις πρακτικές απορρήτου αυτών των υπηρεσιών.'}
          </p>

          <h2>{isEnglish ? 'Changes' : 'Τροποποιήσεις'}</h2>
          <p>
            {isEnglish
              ? 'Terms may be modified without prior notice. Continued website use implies acceptance of the then-current terms.'
              : 'Οι όροι μπορούν να τροποποιηθούν χωρίς προειδοποίηση. Η συνέχιση της χρήσης του ιστοτόπου συνεπάγεται αποδοχή των εκάστοτε ενημερωμένων όρων.'}
          </p>
        </div>
      </section>
    </>
  )
}
