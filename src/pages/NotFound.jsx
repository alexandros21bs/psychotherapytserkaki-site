import BackLink from '../components/common/BackLink'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <BackLink fallback="/" />
        <h1>404</h1>
        <p>Η σελίδα δεν βρέθηκε.</p>
      </div>
    </section>
  )
}
