import './hero.scss'

export default function HeroSection() {
  return (
    <section id="hero" className="hero-shell reveal">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">Junior Web Developer</p>
          <h1 className="hero-title">John Paul Villanueva</h1>
          <p className="hero-tagline">
            Building premium neo-brutalist portfolio experiences with raw structure, sharp contrast, and polished motion.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let’s talk
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel__badge">Web · UI · Motion</div>
          <div className="hero-panel__card">
            <span className="hero-panel__label">Signature</span>
            <p>Neo-brutalist systems for modern digital brands.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

