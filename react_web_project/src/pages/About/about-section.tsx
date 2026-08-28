import './about.scss'

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section portfolio-section--dark reveal">
      <div className="portfolio-section__inner about-inner">
        <div className="about-copy">
          <p className="portfolio-section__eyebrow">About</p>
          <h2 className="portfolio-section__title">I turn complex ideas into clear, usable interfaces.</h2>
          <p className="portfolio-section__text">
            I work with teams and independent creators to shape responsive websites that are easy to use, easy to maintain, and ready to grow.
          </p>
        </div>

        <div className="about-profile-card nb-card">
          <div className="about-profile-image" />
          <div className="about-profile-copy">
            <span className="profile-label">What I bring</span>
            <p>
              I combine React, TypeScript, HTML, CSS, and motion to create interfaces that feel considered on every screen size. I care about clear hierarchy, accessible interactions, and details that support the content.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-card nb-card">
            <h3>Clear visual direction</h3>
            <p>Layouts and type choices that make a product easier to recognize, scan, and remember.</p>
          </article>
          <article className="about-card nb-card">
            <h3>Reusable interfaces</h3>
            <p>Flexible components with consistent spacing, clear states, and responsive behavior.</p>
          </article>
          <article className="about-card nb-card">
            <h3>Thoughtful interaction</h3>
            <p>Motion and feedback that help people understand what changed without slowing them down.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
