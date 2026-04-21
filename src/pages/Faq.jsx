import BackLink from '../components/common/BackLink'
import { faqSections, faqSectionsEn } from '../data/faq'
import { useLanguage } from '../context/LanguageContext'

export default function Faq() {
  const { isEnglish } = useLanguage()
  const sections = isEnglish ? faqSectionsEn : faqSections

  return (
    <>
      <section className="hero-section hero-compact" aria-label={isEnglish ? 'Frequently asked questions' : 'Συχνές ερωτήσεις'}>
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">FAQ</p>
          <h1>{isEnglish ? 'What you may be wondering' : 'Ό,τι μπορεί να αναρωτιέσαι'}</h1>
          <p className="hero-sub">
            {isEnglish
              ? 'Answers to frequent questions about the therapeutic process, first sessions, duration and framework of collaboration.'
              : 'Απαντήσεις σε συχνές ερωτήσεις για τη θεραπευτική διαδικασία, την πρώτη συνεδρία, τη διάρκεια και το πλαίσιο συνεργασίας.'}
          </p>
        </div>
      </section>

      <section className="section" aria-label={isEnglish ? 'FAQ list' : 'Λίστα συχνών ερωτήσεων'}>
        <div className="container faq-container">
          {sections.map((section) => (
            <section className="faq-section-block" key={section.title}>
              <header className="section-header">
                <h2>{section.title}</h2>
              </header>

              <div className="faq-list">
                {section.items.map((item, i) => (
                  <details className="faq-item" key={`${section.title}-${i}`}>
                    <summary>
                      <span>{item.question}</span>
                    </summary>
                    <p className="faq-answer">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}