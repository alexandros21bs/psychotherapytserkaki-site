import { Link } from 'react-router-dom'
import { siteData } from '../data/site'
import { services } from '../data/services'
import { faqItems } from '../data/faq'
import { googleReviewsMeta, reviews } from '../data/reviews'
import { latestPosts } from '../data/posts'
import introImage from '../../dad.webp'
import heroImage from '../../ADAM.webp'

export default function Home() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="hero-section" aria-label="Εισαγωγή">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Ψυχοθεραπεία · Συμβουλευτική · Χανιά</p>
            <h1 className="hero-title-small">
              Ένας ασφαλής χώρος για να ακουστείς με ειλικρίνεια και να σταθείς πιο κοντά στον εαυτό σου
            </h1>
            <p className="hero-sub">
              Η ψυχοθεραπεία δεν αφορά έτοιμες λύσεις, αλλά τη δημιουργία ενός
              σταθερού και ουσιαστικού πλαισίου, όπου μπορείς να δώσεις χώρο σε
              όσα νιώθεις, να επεξεργαστείς όσα σε δυσκολεύουν και να συναντήσεις
              τον εαυτό σου με περισσότερη επίγνωση, στήριξη, εμπιστοσύνη και
              κατανόηση.
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
            <img
              src={heroImage}
              alt="Αδαμαντία Τσερκάκη"
              className="home-hero-image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* 2 · Intro — θεραπευτική σχέση */}
      <section className="section" aria-label="Σύντομη γνωριμία">
        <div className="container split-grid">
          <div className="split-media">
            <img
              src={introImage}
              alt="Αδαμαντία Τσερκάκη"
              className="home-intro-image"
              loading="lazy"
            />
          </div>

          <div className="split-text">
            <p className="eyebrow intro-eyebrow-large">Γνωριμία</p>
            <h2>
              <span className="intro-name-one-line title-size-approach-match">{siteData.brandName}</span>
              <br />
              <span className="heading-muted">{siteData.title}</span>
            </h2>
            <p>
              Εργάζομαι με ενήλικες, ζευγάρια και οικογένειες, δημιουργώντας
              ένα πλαίσιο ασφάλειας, εμπιστοσύνης και ουσιαστικής συνεργασίας,
              όπου ο άνθρωπος μπορεί να εκφραστεί με ειλικρίνεια, να ακουστεί
              πραγματικά, να κατανοήσει βαθύτερα τον εαυτό του και να
              προχωρήσει, με τον δικό του ρυθμό, προς μια πιο σταθερή,
              συνειδητή και ουσιαστική σχέση με τη ζωή, τις ανάγκες και τις
              σχέσεις του.
            </p>
            <p>
              Μέσα σε αυτό το θεραπευτικό πλαίσιο, η αλλαγή δεν αντιμετωπίζεται
              ως πίεση για να γίνει κανείς διαφορετικός, αλλά ως μια βαθύτερη
              διαδικασία κατανόησης, εσωτερικής ωρίμανσης και ουσιαστικής
              επιστροφής σε ό,τι είναι πιο αληθινό και ζωτικό μέσα του.
            </p>
            <Link to="/about" className="text-link intro-more-link">
              Περισσότερα για εμένα →
            </Link>
          </div>
        </div>
      </section>

      {/* 3 · Services Preview */}
      <section className="section section-alt" aria-label="Υπηρεσίες">
        <div className="container">
          <header className="section-header services-header-wide">
            <div className="services-header-main">
              <p className="eyebrow">Υπηρεσίες</p>
              <h2 className="title-size-approach-match">Πώς μπορώ να βοηθήσω</h2>
              <p className="section-lead">
                Η θεραπευτική υποστήριξη προσαρμόζεται στον δικό σου ρυθμό και στις
                ανάγκες σου, με στόχο να δημιουργηθεί ένα πλαίσιο ασφάλειας,
                εμπιστοσύνης και ουσιαστικής επεξεργασίας. Κάθε άνθρωπος είναι
                διαφορετικός, γι' αυτό και κάθε θεραπευτική διαδρομή χρειάζεται τον
                δικό της χρόνο και τρόπο.
              </p>
            </div>
            <div className="services-header-actions">
              <Link to="/services" className="btn btn-outline services-header-cta">
                Δες τις υπηρεσίες
              </Link>
            </div>
          </header>

          <div className="card-grid">
            {services.map((service) => (
              <Link
                to={`/services/${service.slug}`}
                className="card card-hover"
                key={service.slug}
              >
                <div className="home-service-media" aria-hidden="true">
                  {service.image ? (
                    <img src={service.image} alt={service.title} loading="lazy" />
                  ) : (
                    <svg
                      className="home-service-fallback-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
                      <path
                        d="M5 18C5 14.6863 8.13401 12 12 12C15.866 12 19 14.6863 19 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
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
            <h2 className="approach-title-one-line">Συνθετική Ψυχοθεραπεία</h2>
            <p>
              Η συνθετική προσέγγιση δεν ακολουθεί αποκλειστικά μία μόνο
              θεραπευτική σχολή. Συνδυάζει διαφορετικά θεωρητικά και θεραπευτικά
              εργαλεία, ώστε η θεραπεία να προσαρμόζεται στη μοναδικότητα του κάθε
              ανθρώπου — στις ανάγκες, τις εμπειρίες και στον προσωπικό τρόπο με
              τον οποίο βιώνει όσα τον απασχολούν.
            </p>
            <p>
              Αυτό σημαίνει πως η θεραπεία δεν περιορίζεται σε μια
              προκαθορισμένη διαδρομή, αλλά διαμορφώνεται με τρόπο πιο ευέλικτο,
              πιο ανθρώπινο και πιο ουσιαστικό, δίνοντας χώρο στην προσωπική
              ιστορία, στον ρυθμό και στα ιδιαίτερα στοιχεία που φέρνει μαζί του
              κάθε άνθρωπος.
            </p>
            <p>
              Γιατί δεν υπάρχει μία απάντηση για όλους. Υπάρχει ο δρόμος που
              μπορεί να γίνει πιο ουσιαστικός και πιο κατάλληλος για εσένα.
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
            <h2 className="trust-title-one-line">Τρεις λόγοι για να ξεκινήσεις</h2>
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
          <header className="section-header reviews-header">
            <div className="reviews-header-main">
              <p className="eyebrow">Google Reviews</p>
              <h2 className="reviews-title-one-line">Τι λένε άνθρωποι που συνεργάστηκαν μαζί μου</h2>
              <div className="reviews-google-meta" aria-label="Συνολική βαθμολογία Google">
                <span className="reviews-stars" aria-hidden="true">★★★★★</span>
                <span className="reviews-score">{googleReviewsMeta.rating}/5</span>
                <span className="reviews-count">({googleReviewsMeta.total} αξιολογήσεις)</span>
              </div>
            </div>
            <div className="reviews-google-actions">
              <a
                href={googleReviewsMeta.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline reviews-google-cta"
              >
                Δείτε τις κριτικές
              </a>
              <a
                href={googleReviewsMeta.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary reviews-google-cta"
              >
                Γράψε μια κριτική
              </a>
            </div>
          </header>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <p className="review-quote">"{review.quote}"</p>
                <div className="review-meta">
                  <p className="review-author">{review.author}</p>
                  <p className="review-source">{review.source}</p>
                </div>
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
            <h2 className="faq-title-one-line">Ό,τι μπορεί να αναρωτιέσαι</h2>
          </header>

          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details className="faq-item" key={i} open={i === 0}>
                <summary>
                  <span>{item.question}</span>
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Blog */}
      <section className="section section-alt" aria-label="Blog">
        <div className="container">
          <header className="section-header home-blog-header">
            <div className="home-blog-header-main">
              <p className="eyebrow">Blog</p>
              <h2 className="blog-title-one-line">Τελευταία άρθρα</h2>
              <p className="section-lead">
                Μια επιλογή από τα πιο πρόσφατα άρθρα, με σκέψεις και κείμενα που φωτίζουν πλευρές της καθημερινής εμπειρίας και της θεραπευτικής διαδικασίας.
              </p>
            </div>

            <div className="home-blog-cta">
              <Link to="/blog" className="btn btn-outline">
                Δες όλα τα άρθρα
              </Link>
            </div>
          </header>

          <div className="blog-grid blog-grid-home">
            {latestPosts.map((post) => (
              <article className="card blog-card" key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="blog-cover" aria-label={`Άνοιγμα άρθρου ${post.title}`}>
                  <img src={post.featuredImage} alt={post.featuredImageAlt} loading="lazy" />
                </Link>
                <div className="blog-meta-row">
                  <span className="blog-category">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-link">
                  Διάβασε περισσότερα →
                </Link>
              </article>
            ))}
          </div>

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
