import { posts } from '../data/posts'
import BackLink from '../components/common/BackLink'

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <BackLink fallback="/" />
        <p className="eyebrow">Blog</p>
        <h1>Άρθρα</h1>

        <div className="card-grid">
          {posts.map((post) => (
            <article className="card" key={post.slug}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
