import './projects.scss'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A sharp, polished portfolio interface built with React and modern CSS patterns.',
    badge: 'Featured',
    tech: 'React · TypeScript · CSS',
  },
  {
    title: 'E-commerce UI',
    description: 'A streamlined product experience with clear cards, bold typography, and visual rhythm.',
    badge: 'Production',
    tech: 'React · Vite · Tailwind',
  },
  {
    title: 'Design system',
    description: 'A reusable UI library with clean components, consistent spacing, and strong visual contrast.',
    badge: 'System',
    tech: 'Figma · Component Library · Tokens',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section portfolio-section--cream reveal">
      <div className="portfolio-section__inner projects-inner">
        <p className="portfolio-section__eyebrow">Projects</p>
        <h2 className="portfolio-section__title">Selected work built for premium digital impact.</h2>
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
