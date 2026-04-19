import { useParams } from 'react-router-dom'

export default function ServiceSingle() {
  const { slug } = useParams()

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Service</p>
        <h1>{slug}</h1>
        <p>[SERVICE_TEXT_PLACEHOLDER]</p>
      </div>
    </section>
  )
}
