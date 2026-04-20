import { Link, useParams } from 'react-router-dom'
import BackLink from '../components/common/BackLink'
import { posts } from '../data/posts'

export default function Article() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="section article-page">
        <div className="container">
          <BackLink fallback="/blog" />
          <h1>Το άρθρο δεν βρέθηκε</h1>
          <p>Το συγκεκριμένο άρθρο δεν είναι διαθέσιμο.</p>
          <Link to="/blog" className="text-link">Επιστροφή στο blog →</Link>
        </div>
      </section>
    )
  }

  const directRelated = posts.filter((item) => post.relatedPosts.includes(item.slug) && item.slug !== post.slug)
  const fallbackRelated = posts.filter(
    (item) => item.slug !== post.slug && !directRelated.some((rel) => rel.slug === item.slug)
  )
  const related = [...directRelated, ...fallbackRelated].slice(0, 3)

  return (
    <section className="section article-page-section">
      <div className="container article-page">
        <BackLink fallback="/blog" />

        <article>
          <header className="article-hero">
            <img src={post.featuredImage} alt={post.featuredImageAlt} className="article-cover" loading="eager" />
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
              <span>{post.author}</span>
            </div>
            <p className="article-excerpt">{post.excerpt}</p>
          </header>

          <div className="article-content">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="article-tags" aria-label="Ετικέτες άρθρου">
            {post.tags.map((tag) => (
              <span className="blog-tag" key={tag}>#{tag}</span>
            ))}
          </div>

          {related.length > 0 ? (
            <section className="related-posts" aria-labelledby="related-posts-title">
              <h2 id="related-posts-title">Σχετικά άρθρα</h2>
              <div className="blog-grid" role="list">
                {related.map((item) => (
                  <article className="card blog-card" key={item.slug} role="listitem">
                    <Link to={`/blog/${item.slug}`} className="blog-cover" aria-label={`Άνοιγμα άρθρου ${item.title}`}>
                      <img src={item.featuredImage} alt={item.featuredImageAlt} loading="lazy" />
                    </Link>
                    <div className="blog-meta-row">
                      <span className="blog-category">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link to={`/blog/${item.slug}`} className="text-link">Διάβασε άρθρο →</Link>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </section>
  )
}
