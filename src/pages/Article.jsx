import { useParams } from 'react-router-dom'

export default function Article() {
  const { slug } = useParams()

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Article</p>
        <h1>{slug}</h1>
        <p>[ARTICLE_TEXT_PLACEHOLDER]</p>
      </div>
    </section>
  )
}
