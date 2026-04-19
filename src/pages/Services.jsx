import { services } from '../data/services'

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>Υπηρεσίες</h1>

        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
