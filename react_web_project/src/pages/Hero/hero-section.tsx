import './hero.scss'

export default function HeroSection() {
  return (
    <section id="hero" className="hero-shell reveal">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">Junior Web Developer</p>
          <h1 className="hero-title">John Paul Villanueva</h1>
          <p className="hero-tagline">
            Entry-level Web Developer with hands-on experience building responsive, scalable web applications using 
            Angular, TypeScript, JavaScript, PHP, HTML5, and Node.js. Skilled in RESTful API integration, Git 
            version control, and Agile workflows, with a track record of collaborating across development teams to 
            deliver quality code on time. Eager to bring strong problem-solving skills and a passion for clean, 
            maintainable code to a growing engineering team. 
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              See selected work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a conversation
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel__badge">Entry-level Web Developer</div>
          <div className="hero-panel__card">
            <span className="hero-panel__label">What I make</span>
            <p>I make Custom web solutions for clients who want to establish or enhance their online presence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

