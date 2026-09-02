import './contact.scss'

export default function ContactSection() {
  return (
    <section id="contact" className="portfolio-section portfolio-section--accent reveal">
      <div className="portfolio-section__inner contact-inner">
        <div className="contact-copy">
          <p className="portfolio-section__eyebrow">Contact</p>
          <h2 className="portfolio-section__title">Do you need a developer?</h2>
          <p className="portfolio-section__text">
            Tell me what you are working on, what you need, and when you want to launch. I will reply by email so we can decide on a useful next step.
          </p>
        </div>

        <div className="portfolio-contact-card">
          <div className="contact-card-row">
            <span>Email</span>
            <a href="mailto:jaypeeeev@gmail.com">jaypeeeeev@gmail.com</a>
          </div>
          <div className="contact-card-row">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/jpaulvillanueva/" target="_blank" rel="noreferrer">
              John Paul Villanueva
            </a>
          </div>
          <div className="contact-card-actions">
            <a href="mailto:jaypeeeev@gmail.com" className="btn btn-primary">Send an email</a>
            <a href="#hero" className="btn btn-secondary">Return to top</a>
          </div>
        </div>
      </div>
    </section>
  )
}
