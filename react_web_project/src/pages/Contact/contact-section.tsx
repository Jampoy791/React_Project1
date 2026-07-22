import './contact.scss'

export default function ContactSection() {
  return (
    <section id="contact" className="portfolio-section portfolio-section--accent reveal">
      <div className="portfolio-section__inner contact-inner">
        <div className="contact-copy">
          <p className="portfolio-section__eyebrow">Contact</p>
          <h2 className="portfolio-section__title">Bold work starts with a bold hello.</h2>
          <p className="portfolio-section__text">
            Ready to launch a premium digital experience? Reach out via email or connect on LinkedIn and let’s build something sharp, polished, and unforgettable.
          </p>
        </div>

        <div className="portfolio-contact-card">
          <div className="contact-card-row">
            <span>Email</span>
            <a href="mailto:hello@johnpaulweb.com">hello@johnpaulweb.com</a>
          </div>
          <div className="contact-card-row">
            <span>LinkedIn</span>
            <a href="#">linkedin.com/in/johnpaulweb</a>
          </div>
          <div className="contact-card-actions">
            <a href="mailto:hello@johnpaulweb.com" className="btn btn-primary">Email me</a>
            <a href="#hero" className="btn btn-secondary">Back to top</a>
          </div>
        </div>
      </div>
    </section>
  )
}
