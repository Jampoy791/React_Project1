import './projects.scss'

const projects = [
  {
    title: 'Bisita Carranglan',
    description: 'A Capstone Project for the Municipality of Carranglan Nueva Ecija, a tourism Web application promoting business opportunities enabling residents to offer BnB services and to also promote local tourism.',
    badge: 'BnB & Tourism Web App',
    tech: 'PHP, MySQL, CSS',
    repository: 'https://github.com/Jcvillanueva/Bisita-Pilipinas',
  },
  {
    title: 'Kyobi Travel Agency',
    description: 'A Travel agency Web application concept that helps users find the best travel deals with a budget tracker system to help users manage their travel expenses and plan their trips effectively.',
    badge: 'Travel Agency Web Application Concept',
    tech: 'Angular, Typescript, HTML, CSS',
    repository: 'https://github.com/Jampoy791/Kyobi-travel',
  },
  {
    title: 'CGI RoboExchange',
    description: 'A repository web application that supports RPA developers at CGI Philippines by providing a centralized platform for managing, storing, and sharing automation assets and reusable components.',
    badge: 'Internship Project at CGI Philippines',
    tech: 'Angular, Node.js, TypeScript, HTML, CSS',
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

              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`View repository for ${project.title}`}
                >
                  <svg className="project-link__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.78.42-1.29.75-1.58-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23A11.4 11.4 0 0 1 12 6.8c1.01 0 2.03.14 2.98.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"/>
                  </svg>
                  View Repository
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
