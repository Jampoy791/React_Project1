import './projects.scss'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio that presents the work, skills, and contact path in one focused experience.',
    badge: 'Featured build',
    tech: 'React, TypeScript, CSS',
  },
  {
    title: 'E-commerce UI',
    description: 'A storefront concept that helps shoppers compare products, understand details, and check out with less friction.',
    badge: 'Storefront concept',
    tech: 'React, Vite, Tailwind',
  },
  {
    title: 'Design system',
    description: 'A shared set of components and design rules that keeps product pages consistent as they grow.',
    badge: 'Reusable system',
    tech: 'Figma, components, design tokens',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section portfolio-section--cream reveal">
      <div className="portfolio-section__inner projects-inner">
        <p className="portfolio-section__eyebrow">Projects</p>
        <h2 className="portfolio-section__title">A few interfaces I have designed and built.</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card nb-card">
              <div className="project-card__top">
                <h3 className="portfolio-card__title">{project.title}</h3>
                <span className="project-badge">{project.badge}</span>
              </div>
              <p className="portfolio-card__text">{project.description}</p>
              <span className="project-tech">{project.tech}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
