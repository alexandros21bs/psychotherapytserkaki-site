import { useParams } from 'react-router-dom'
import BackLink from '../components/common/BackLink'

export default function Article() {
  const { slug } = useParams()

  return (
    <section className="section">
      <div className="container">
        <BackLink fallback="/blog" />
        <p className="eyebrow">Article</p>
        <h1>{slug}</h1>
        <p>[ARTICLE_TEXT_PLACEHOLDER]</p>
      </div>
    </section>
  )
}
