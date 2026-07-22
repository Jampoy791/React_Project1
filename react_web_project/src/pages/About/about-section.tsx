import './about.scss'

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section portfolio-section--dark reveal">
      <div className="portfolio-section__inner about-inner">
        <div className="about-copy">
          <p className="portfolio-section__eyebrow">About</p>
          <h2 className="portfolio-section__title">I craft bold web experiences with precision and attitude.</h2>
          <p className="portfolio-section__text">
            I merge raw brutalist structure with sophisticated polish to build digital products that feel modern, premium, and purpose-built for portfolios and client-facing interfaces.
          </p>
        </div>

        <div className="about-profile-card nb-card">
          <div className="about-profile-image" />
          <div className="about-profile-copy">
            <span className="profile-label">Profile</span>
            <p>
              Experienced in React, TypeScript, HTML5, CSS, and motion-driven interfaces. I deliver a sharp visual identity across every page with bold typography, exposed grids, and tactile interactions.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-card nb-card">
            <h3>Brand systems</h3>
            <p>Chunky layouts, standout blocks, and intentional asymmetry for memorable product pages.</p>
          </article>
          <article className="about-card nb-card">
            <h3>Component design</h3>
            <p>Reusable UI with bold borders, clear states, and interactive polish that elevate every interface.</p>
          </article>
          <article className="about-card nb-card">
            <h3>Motion & interaction</h3>
            <p>Hover shifts, reveal animations, and micro-interactions that keep attention without overwhelming the experience.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
