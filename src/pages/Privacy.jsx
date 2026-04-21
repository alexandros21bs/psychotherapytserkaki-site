import BackLink from '../components/common/BackLink'
import { useLanguage } from '../context/LanguageContext'

export default function Privacy() {
  const { isEnglish } = useLanguage()

  return (
    <>
      <section className="hero-section hero-compact" aria-label={isEnglish ? 'Privacy Policy' : 'Πολιτική Απορρήτου'}>
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">GDPR</p>
          <h1>{isEnglish ? 'Privacy Policy' : 'Πολιτική Απορρήτου'}</h1>
          <p className="hero-sub">{isEnglish ? 'Last updated: 20 April 2026' : 'Τελευταία ενημέρωση: 20 Απριλίου 2026'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <h2>{isEnglish ? 'What data is collected' : 'Ποια δεδομένα συλλέγονται'}</h2>
          <p>
            {isEnglish
              ? 'Through the contact form, we may collect the information you voluntarily provide (full name, email, phone, message). This data is used solely to respond to your request.'
              : 'Μέσω της φόρμας επικοινωνίας μπορεί να συλλέγονται τα στοιχεία που καταχωρείς οικειοθελώς (ονοματεπώνυμο, email, τηλέφωνο, μήνυμα). Τα δεδομένα χρησιμοποιούνται αποκλειστικά για απάντηση στο αίτημά σου.'}
          </p>

          <h2>{isEnglish ? 'Legal basis for processing' : 'Νομική βάση επεξεργασίας'}</h2>
          <p>
            {isEnglish
              ? 'Processing is based on your consent and our legitimate interest in providing information about psychotherapy services.'
              : 'Η επεξεργασία βασίζεται στη συναίνεσή σου και στο έννομο συμφέρον για την παροχή ενημέρωσης σχετικά με τις υπηρεσίες ψυχοθεραπείας.'}
          </p>

          <h2>{isEnglish ? 'Data retention' : 'Χρόνος διατήρησης'}</h2>
          <p>
            {isEnglish
              ? 'Contact details are retained only as long as needed to handle your request and for a reasonable follow-up communication period.'
              : 'Τα στοιχεία επικοινωνίας διατηρούνται μόνο για όσο απαιτείται για την εξυπηρέτηση του αιτήματος και για εύλογο διάστημα παρακολούθησης επικοινωνίας.'}
          </p>

          <h2>Cookies</h2>
          <p>
            {isEnglish
              ? 'This website only uses essential cookies or equivalent local storage for functions such as storing consent choices. No marketing cookies are used without explicit prior consent.'
              : 'Ο ιστότοπος χρησιμοποιεί μόνο απαραίτητα cookies ή ισοδύναμη τοπική αποθήκευση για λειτουργίες όπως αποθήκευση συναίνεσης. Δεν χρησιμοποιούνται cookies marketing χωρίς προηγούμενη ρητή αποδοχή.'}
          </p>

          <h2>{isEnglish ? 'Data subject rights' : 'Δικαιώματα υποκειμένου'}</h2>
          <p>
            {isEnglish
              ? 'You have the right of access, rectification, erasure, restriction of processing and portability where applicable. For any request, contact info@psychotherapy.gr.'
              : 'Έχεις δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού επεξεργασίας και φορητότητας όπου εφαρμόζεται. Για οποιοδήποτε αίτημα επικοινώνησε στο info@psychotherapy.gr.'}
          </p>

          <h2>{isEnglish ? 'Security' : 'Ασφάλεια'}</h2>
          <p>
            {isEnglish
              ? 'Reasonable technical and organizational safeguards are applied, and website connections use secure HTTPS protocol.'
              : 'Γίνεται εύλογη προσπάθεια τεχνικής και οργανωτικής προστασίας, ενώ οι συνδέσεις του ιστότοπου χρησιμοποιούν ασφαλές πρωτόκολλο HTTPS.'}
          </p>
        </div>
      </section>
    </>
  )
}
