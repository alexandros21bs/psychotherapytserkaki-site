import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import BackLink from '../components/common/BackLink'

export default function Blog() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  const formatDateCompact = (date) => date.replaceAll('-', '.')
  const toFixedExcerpt = (text, max = 150) => {
    if (!text) return ''
    if (text.length <= max) return text
    return `${text.slice(0, max).trimEnd()}...`
  }

  return (
    <section className="section blog-page" aria-labelledby="blog-page-title">
      <div className="container">
        <BackLink fallback="/" />
        <header className="blog-hero">
          <p className="eyebrow">Blog</p>
          <h1 id="blog-page-title" className="blog-title-small">Άρθρα για την ψυχοθεραπεία, την αυτογνωσία και τις σχέσεις</h1>
          <p className="section-lead">
            Σκέψεις και κείμενα γύρω από την αυτογνωσία, τις σχέσεις και την ψυχική ισορροπία, με στόχο να προσφέρουν χώρο για κατανόηση, προβληματισμό και ουσιαστική σύνδεση με την καθημερινή εμπειρία.
          </p>
        </header>

        <div className="blog-grid" role="list">
          {sortedPosts.map((post) => (
            <article className="card blog-card" key={post.slug} role="listitem">
              <Link to={`/blog/${post.slug}`} className="blog-cover" aria-label={`Άνοιγμα άρθρου ${post.title}`}>
                <img src={post.featuredImage} alt={post.featuredImageAlt} loading="lazy" />
              </Link>

              <div className="blog-meta-row">
                <span className="blog-category">{post.category}</span>
                  <span>{formatDateCompact(post.date)}</span>
                  <span>{post.readingTime.replace(' λεπτά', "'")}</span>
              </div>

              <h3>{post.title}</h3>
              <p>{toFixedExcerpt(post.excerpt)}</p>

              {post.tags?.length ? (
                <div className="blog-tags blog-tags-card" aria-label={`Ετικέτες για ${post.title}`}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span className="blog-tag" key={tag}>#{tag}</span>
                  ))}
                </div>
              ) : null}

              <Link to={`/blog/${post.slug}`} className="text-link blog-card-link">
                Διάβασε το άρθρο →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
