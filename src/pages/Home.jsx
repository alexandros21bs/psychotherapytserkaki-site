import { Link } from 'react-router-dom'
import { siteData } from '../data/site'
import { services } from '../data/services'
import { faqItems, faqItemsEn } from '../data/faq'
import { googleReviewsMeta, reviews } from '../data/reviews'
import { getLocalizedLatestPosts } from '../data/posts.i18n'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { isEnglish } = useLanguage()
  const previewFaqItems = isEnglish ? faqItemsEn : faqItems
  const localizedLatestPosts = getLocalizedLatestPosts(isEnglish)

  return (
    <>
      {/* 1 · Hero */}
      <section className="hero-section" aria-label={isEnglish ? 'Introduction' : 'Εισαγωγή'}>
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{isEnglish ? 'Psychotherapy · Counseling · Chania' : 'Ψυχοθεραπεία · Συμβουλευτική · Χανιά'}</p>
            <h1 className="hero-title-small">
              {isEnglish
                ? 'A safe space to be heard with honesty and reconnect with yourself'
                : 'Ένας ασφαλής χώρος για να ακουστείς με ειλικρίνεια και να σταθείς πιο κοντά στον εαυτό σου'}
            </h1>
            <p className="hero-sub">
              {isEnglish
                ? 'Psychotherapy is not about ready-made answers. It is about building a stable and meaningful framework where you can process what feels difficult and meet yourself with greater awareness, trust and support.'
                : 'Η ψυχοθεραπεία δεν αφορά έτοιμες λύσεις, γρήγορες απαντήσεις ή μια διαδικασία που εφαρμόζεται με τον ίδιο τρόπο σε όλους, αλλά τη δημιουργία ενός σταθερού, ασφαλούς και ουσιαστικού πλαισίου, όπου μπορείς να δώσεις χώρο σε όσα νιώθεις, να ακουστείς πραγματικά χωρίς φόβο κριτικής, να επεξεργαστείς με μεγαλύτερη ηρεμία και βάθος όσα σε δυσκολεύουν και να προσεγγίσεις τον εαυτό σου πιο ουσιαστικά, με περισσότερη επίγνωση, συναισθηματική στήριξη, εμπιστοσύνη, κατανόηση και σεβασμό στον δικό σου χρόνο, στις ανάγκες σου, στις εμπειρίες που κουβαλάς και στον προσωπικό τρόπο με τον οποίο βιώνεις όσα σε απασχολούν, ώστε μέσα από αυτή τη διαδικασία να μπορέσεις σταδιακά να αναγνωρίσεις βαθύτερα τον εαυτό σου, να φωτίσεις εσωτερικές δυσκολίες και μοτίβα, να σταθείς με περισσότερη αλήθεια απέναντι σε όσα ζεις και να χτίσεις μια πιο σταθερή, ουσιαστική και αυθεντική σχέση με τον εαυτό σου, τις ανάγκες σου, τις σχέσεις σου και τη ζωή σου συνολικά.'}
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                {isEnglish ? 'Book Appointment' : 'Κλείσε Ραντεβού'}
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                {isEnglish ? 'Learn more' : 'Μάθε περισσότερα'}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/images/hero-adam-mobile.webp"
              />
              <img
                src="/images/hero-adam.webp"
                alt={isEnglish ? 'Adamantia Tserkaki' : 'Αδαμαντία Τσερκάκη'}
                className="home-hero-image"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1080"
                height="1304"
                sizes="(max-width: 767px) 92vw, (max-width: 1099px) 46vw, 520px"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* 2 · Intro — θεραπευτική σχέση */}
      <section className="section" aria-label={isEnglish ? 'Brief introduction' : 'Σύντομη γνωριμία'}>
        <div className="container split-grid">
          <div className="split-media">
            <img
              src="/images/intro-dad.webp"
              alt={isEnglish ? 'Adamantia Tserkaki' : 'Αδαμαντία Τσερκάκη'}
              className="home-intro-image"
              loading="lazy"
              decoding="async"
              width="1200"
              height="798"
            />
          </div>

          <div className="split-text">
            <p className="eyebrow intro-eyebrow-large">{isEnglish ? 'Introduction' : 'Γνωριμία'}</p>
            <h2>
              <span className="intro-name-one-line title-size-approach-match">{siteData.brandName}</span>
              <br />
              <span className="heading-muted">{siteData.title}</span>
            </h2>
            <p>
              {isEnglish
                ? 'I work with adults, couples and families, creating a framework of safety, trust and meaningful collaboration, where each person can speak honestly, feel truly heard and move toward a more grounded and conscious relationship with life.'
                : 'Εργάζομαι με ενήλικες, ζευγάρια και οικογένειες, δημιουργώντας ένα πλαίσιο ασφάλειας, εμπιστοσύνης και ουσιαστικής συνεργασίας, όπου ο άνθρωπος μπορεί να εκφραστεί με ειλικρίνεια, να ακουστεί πραγματικά, να κατανοήσει βαθύτερα τον εαυτό του και να προχωρήσει, με τον δικό του ρυθμό, προς μια πιο σταθερή, συνειδητή και ουσιαστική σχέση με τη ζωή, τις ανάγκες και τις σχέσεις του.'}
            </p>
            <p>
              {isEnglish
                ? 'Within this therapeutic setting, change is not treated as pressure to become someone else, but as a deeper process of understanding, inner growth and reconnection with what is authentic and alive within you.'
                : 'Μέσα σε αυτό το θεραπευτικό πλαίσιο, η αλλαγή δεν αντιμετωπίζεται ως πίεση για να γίνει κανείς διαφορετικός, αλλά ως μια βαθύτερη διαδικασία κατανόησης, εσωτερικής ωρίμανσης και ουσιαστικής επιστροφής σε ό,τι είναι πιο αληθινό και ζωτικό μέσα του.'}
            </p>
            <Link to="/about" className="text-link intro-more-link">
              {isEnglish ? 'More about me →' : 'Περισσότερα για εμένα →'}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 · Services Preview */}
      <section className="section section-alt" aria-label={isEnglish ? 'Services' : 'Υπηρεσίες'}>
        <div className="container">
          <header className="section-header services-header-wide">
            <div className="services-header-main">
              <p className="eyebrow">{isEnglish ? 'Services' : 'Υπηρεσίες'}</p>
              <h2 className="title-size-approach-match">{isEnglish ? 'How I can help' : 'Πώς μπορώ να βοηθήσω'}</h2>
              <p className="section-lead">
                {isEnglish
                  ? 'Therapeutic support is tailored to your pace and needs, within a framework of safety, trust and meaningful processing. Every person is different, so every therapeutic journey requires its own time and way.'
                  : 'Η θεραπευτική υποστήριξη προσαρμόζεται στον δικό σου ρυθμό και στις ανάγκες σου, με στόχο να δημιουργηθεί ένα πλαίσιο ασφάλειας, εμπιστοσύνης και ουσιαστικής επεξεργασίας. Κάθε άνθρωπος είναι διαφορετικός, γι\' αυτό και κάθε θεραπευτική διαδρομή χρειάζεται τον δικό της χρόνο και τρόπο.'}
              </p>
            </div>
            <div className="services-header-actions">
              <Link to="/services" className="btn btn-outline services-header-cta">
                {isEnglish ? 'View services' : 'Δες τις υπηρεσίες'}
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
                    <img src={service.image} alt={isEnglish ? (service.titleEn || service.title) : service.title} loading="lazy" />
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
                <h3>{isEnglish ? (service.titleEn || service.title) : service.title}</h3>
                <p>{isEnglish ? (service.excerptEn || service.excerpt) : service.excerpt}</p>
                <span className="text-link">{isEnglish ? 'Learn more →' : 'Μάθε περισσότερα →'}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Προσέγγιση — Συνθετική Ψυχοθεραπεία */}
      <section className="section" aria-label={isEnglish ? 'Therapeutic approach' : 'Θεραπευτική προσέγγιση'}>
        <div className="container approach-grid">
          <div className="approach-text">
            <p className="eyebrow">{isEnglish ? 'Approach' : 'Προσέγγιση'}</p>
            <h2 className="approach-title-one-line">{isEnglish ? 'Integrative Psychotherapy' : 'Συνθετική Ψυχοθεραπεία'}</h2>
            <p>
              {isEnglish
                ? 'The integrative approach does not follow a single therapeutic school. It combines different theoretical and clinical tools so therapy can adapt to each person’s uniqueness, needs and lived experience.'
                : 'Η συνθετική προσέγγιση δεν ακολουθεί αποκλειστικά μία μόνο θεραπευτική σχολή. Συνδυάζει διαφορετικά θεωρητικά και θεραπευτικά εργαλεία, ώστε η θεραπεία να προσαρμόζεται στη μοναδικότητα του κάθε ανθρώπου — στις ανάγκες, τις εμπειρίες και στον προσωπικό τρόπο με τον οποίο βιώνει όσα τον απασχολούν.'}
            </p>
            <p>
              {isEnglish
                ? 'This means therapy is not limited to a predefined path. It becomes more flexible, human and meaningful, giving space to personal history, pace and individuality.'
                : 'Αυτό σημαίνει πως η θεραπεία δεν περιορίζεται σε μια προκαθορισμένη διαδρομή, αλλά διαμορφώνεται με τρόπο πιο ευέλικτο, πιο ανθρώπινο και πιο ουσιαστικό, δίνοντας χώρο στην προσωπική ιστορία, στον ρυθμό και στα ιδιαίτερα στοιχεία που φέρνει μαζί του κάθε άνθρωπος.'}
            </p>
            <p>
              {isEnglish
                ? 'There is no single answer for everyone. There is the path that can become more suitable and meaningful for you.'
                : 'Γιατί δεν υπάρχει μία απάντηση για όλους. Υπάρχει ο δρόμος που μπορεί να γίνει πιο ουσιαστικός και πιο κατάλληλος για εσένα.'}
            </p>
          </div>

          <ul className="approach-list" role="list">
            <li>
              <strong>{isEnglish ? 'Safe framework' : 'Ασφαλές πλαίσιο'}</strong>
              <span>{isEnglish ? 'Confidentiality and consistency in every session' : 'Εμπιστευτικότητα και σταθερότητα σε κάθε συνεδρία'}</span>
            </li>
            <li>
              <strong>{isEnglish ? 'Personalization' : 'Εξατομίκευση'}</strong>
              <span>{isEnglish ? 'Therapy tailored to your own pace' : 'Θεραπεία προσαρμοσμένη στον δικό σου ρυθμό'}</span>
            </li>
            <li>
              <strong>{isEnglish ? 'Respect' : 'Σεβασμός'}</strong>
              <span>{isEnglish ? 'No judgment, no pressure, full acceptance' : 'Χωρίς κρίση, χωρίς πίεση, με απόλυτη αποδοχή'}</span>
            </li>
            <li>
              <strong>{isEnglish ? 'Flexibility' : 'Ευελιξία'}</strong>
              <span>{isEnglish ? 'In-person in Chania or online from anywhere' : 'Δια ζώσης στα Χανιά ή online από οπουδήποτε'}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5 · Trust */}
      <section className="section section-alt" aria-label={isEnglish ? 'Reasons to trust therapy' : 'Λόγοι εμπιστοσύνης'}>
        <div className="container">
          <header className="section-header">
            <p className="eyebrow">{isEnglish ? 'Why psychotherapy' : 'Γιατί ψυχοθεραπεία'}</p>
            <h2 className="trust-title-one-line">{isEnglish ? 'Three reasons to begin' : 'Τρεις λόγοι για να ξεκινήσεις'}</h2>
          </header>

          <div className="trust-grid">
            <article className="trust-item">
              <span className="trust-number" aria-hidden="true">01</span>
              <h3>{isEnglish ? 'Self-awareness' : 'Αυτογνωσία'}</h3>
              <p>
                {isEnglish
                  ? 'Understand thought and behavior patterns that hold you back and discover healthier ways forward.'
                  : 'Κατανόησε τα μοτίβα σκέψης και συμπεριφοράς που σε κρατούν πίσω — και ανακάλυψε νέους τρόπους αντιμετώπισης.'}
              </p>
            </article>

            <article className="trust-item">
              <span className="trust-number" aria-hidden="true">02</span>
              <h3>{isEnglish ? 'Support' : 'Στήριξη'}</h3>
              <p>
                {isEnglish
                  ? 'A non-judgmental space where you can speak freely, feel heard and know you are not alone.'
                  : 'Ένας χώρος χωρίς κριτική, όπου μπορείς να μιλήσεις ελεύθερα, να νιώσεις ότι ακούγεσαι και ότι δεν είσαι μόνος/η.'}
              </p>
            </article>

            <article className="trust-item">
              <span className="trust-number" aria-hidden="true">03</span>
              <h3>{isEnglish ? 'Change' : 'Αλλαγή'}</h3>
              <p>
                {isEnglish
                  ? 'Small, consistent steps that bring meaningful change to relationships, emotions and daily life.'
                  : 'Μικρά, σταθερά βήματα που φέρνουν ουσιαστική αλλαγή στις σχέσεις, τα συναισθήματα και την καθημερινότητα.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6 · Reviews */}
      <section className="section" aria-label={isEnglish ? 'Reviews' : 'Αξιολογήσεις'}>
        <div className="container">
          <header className="section-header reviews-header">
            <div className="reviews-header-main">
              <p className="eyebrow">Google Reviews</p>
              <h2 className="reviews-title-one-line">{isEnglish ? 'What people say about working with me' : 'Τι λένε άνθρωποι που συνεργάστηκαν μαζί μου'}</h2>
              <div className="reviews-google-meta" aria-label={isEnglish ? 'Overall Google rating' : 'Συνολική βαθμολογία Google'}>
                <span className="reviews-stars" aria-hidden="true">★★★★★</span>
                <span className="reviews-score">{googleReviewsMeta.rating}/5</span>
                <span className="reviews-count">({googleReviewsMeta.total} {isEnglish ? 'reviews' : 'αξιολογήσεις'})</span>
              </div>
            </div>
            <div className="reviews-google-actions">
              <a
                href={googleReviewsMeta.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline reviews-google-cta"
              >
                {isEnglish ? 'View reviews' : 'Δείτε τις κριτικές'}
              </a>
              <a
                href={googleReviewsMeta.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary reviews-google-cta"
              >
                {isEnglish ? 'Write a review' : 'Γράψε μια κριτική'}
              </a>
            </div>
          </header>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.id}>
                <p className="review-quote">"{isEnglish ? (review.quoteEn || review.quote) : review.quote}"</p>
                <div className="review-meta">
                  <p className="review-author">{isEnglish ? (review.authorEn || review.author) : review.author}</p>
                  <p className="review-source">{review.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · FAQ Preview */}
      <section className="section" aria-label={isEnglish ? 'Frequently asked questions' : 'Συχνές ερωτήσεις'}>
        <div className="container faq-container">
          <header className="section-header">
            <p className="eyebrow">{isEnglish ? 'FAQ' : 'Συχνές Ερωτήσεις'}</p>
            <h2 className="faq-title-one-line">{isEnglish ? 'What you may be wondering' : 'Ό,τι μπορεί να αναρωτιέσαι'}</h2>
          </header>

          <div className="faq-list">
            {previewFaqItems.map((item, i) => (
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
                {isEnglish
                  ? 'A selection of recent articles with reflections and practical insights on emotional life and the therapeutic process.'
                  : 'Μια επιλογή από τα πιο πρόσφατα άρθρα, με σκέψεις και κείμενα που φωτίζουν πλευρές της καθημερινής εμπειρίας και της θεραπευτικής διαδικασίας.'}
              </p>
            </div>

            <div className="home-blog-cta">
              <Link to="/blog" className="btn btn-outline">
                {isEnglish ? 'View all articles' : 'Δες όλα τα άρθρα'}
              </Link>
            </div>
          </header>

          <div className="blog-grid blog-grid-home">
            {localizedLatestPosts.map((post) => (
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
                  {isEnglish ? 'Read more →' : 'Διάβασε περισσότερα →'}
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 9 · Final CTA */}
      <section className="section cta-section" aria-label={isEnglish ? 'Book an appointment' : 'Κλείσε ραντεβού'}>
        <div className="container cta-block">
          <p className="eyebrow cta-eyebrow">{isEnglish ? 'First step' : 'Πρώτο βήμα'}</p>
          <h2>{isEnglish ? 'Ready to begin?' : 'Έτοιμος/η να ξεκινήσεις;'}</h2>
          <p>
            {isEnglish
              ? 'Book a first introductory session, in person or online. No pressure, no commitment.'
              : 'Κλείσε μια πρώτη γνωριμία — δια ζώσης ή online. Χωρίς δέσμευση, χωρίς πίεση.'}
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            {isEnglish ? 'Book Appointment' : 'Κλείσε Ραντεβού'}
          </Link>
        </div>
      </section>
    </>
  )
}
