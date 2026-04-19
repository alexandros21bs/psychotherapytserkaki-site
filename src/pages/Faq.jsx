import BackLink from '../components/common/BackLink'
import { faqSections } from '../data/faq'

export default function Faq() {
  return (
    <>
      <section className="hero-section hero-compact" aria-label="Συχνές ερωτήσεις">
        <div className="container">
          <BackLink fallback="/" />
          <p className="eyebrow">FAQ</p>
          <h1>Ό,τι μπορεί να αναρωτιέσαι</h1>
          <p className="hero-sub">
            Απαντήσεις σε συχνές ερωτήσεις για τη θεραπευτική διαδικασία,
            την πρώτη συνεδρία, τη διάρκεια και το πλαίσιο συνεργασίας.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Λίστα συχνών ερωτήσεων">
        <div className="container faq-container">
          {faqSections.map((section) => (
            <section className="faq-section-block" key={section.title}>
              <header className="section-header">
                <h2>{section.title}</h2>
              </header>

              <dl className="faq-list">
                {section.items.map((item, i) => (
                  <details className="faq-item" key={`${section.title}-${i}`}>
                    <summary>
                      <span>{item.question}</span>
                    </summary>
                    <dd>{item.answer}</dd>
                  </details>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}