import { Link, useParams } from 'react-router-dom'
import BackLink from '../components/common/BackLink'
import { posts } from '../data/posts'
import { localizePost } from '../data/posts.i18n'
import { useLanguage } from '../context/LanguageContext'

export default function Article() {
  const { isEnglish } = useLanguage()
  const { slug } = useParams()
  const basePost = posts.find((item) => item.slug === slug)
  const post = basePost ? localizePost(basePost, isEnglish) : null

  if (!post) {
    return (
      <section className="section article-page">
        <div className="container">
          <BackLink fallback="/blog" />
          <h1>{isEnglish ? 'Article not found' : 'Το άρθρο δεν βρέθηκε'}</h1>
          <p>{isEnglish ? 'This article is not available.' : 'Το συγκεκριμένο άρθρο δεν είναι διαθέσιμο.'}</p>
          <Link to="/blog" className="text-link">{isEnglish ? 'Back to blog →' : 'Επιστροφή στο blog →'}</Link>
        </div>
      </section>
    )
  }

  const directRelated = posts.filter((item) => post.relatedPosts.includes(item.slug) && item.slug !== post.slug)
  const fallbackRelated = posts.filter(
    (item) => item.slug !== post.slug && !directRelated.some((rel) => rel.slug === item.slug)
  )
  const related = [...directRelated, ...fallbackRelated].slice(0, 3).map((item) => localizePost(item, isEnglish))

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

          <div className="article-tags" aria-label={isEnglish ? 'Article tags' : 'Ετικέτες άρθρου'}>
            {post.tags.map((tag) => (
              <span className="blog-tag" key={tag}>#{tag}</span>
            ))}
          </div>

          {related.length > 0 ? (
            <section className="related-posts" aria-labelledby="related-posts-title">
              <h2 id="related-posts-title">{isEnglish ? 'Related articles' : 'Σχετικά άρθρα'}</h2>
              <div className="blog-grid" role="list">
                {related.map((item) => (
                  <article className="card blog-card" key={item.slug} role="listitem">
                    <Link to={`/blog/${item.slug}`} className="blog-cover" aria-label={isEnglish ? `Open article ${item.title}` : `Άνοιγμα άρθρου ${item.title}`}>
                      <img src={item.featuredImage} alt={item.featuredImageAlt} loading="lazy" />
                    </Link>
                    <div className="blog-meta-row">
                      <span className="blog-category">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link to={`/blog/${item.slug}`} className="text-link">{isEnglish ? 'Read article →' : 'Διάβασε άρθρο →'}</Link>
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
