import './experience.scss'

const experience = [
  {
    year: '2025',
    title: 'GHL Developer',
    company: 'Laminar Digital Solutions',
    detail: 'Built and shipped a responsive GoHighLevel web app (JS/CSS3) from client requirements to deployment, using Agile/Trello workflows.',
  },
  {
    year: '2023',
    title: 'I.T Trainee: Business Analyst/Developer',
    company: 'CGI Philippines',
    detail: 'Developed a custom web solution for the RPA development team, using Angular, Node.js, Typescript and MySQL. Collaborated with cross-functional teams to gather requirements and implement features.',
  },
 
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section portfolio-section--dark reveal">
      <div className="portfolio-section__inner experience-inner">
        <div className="experience-copy">
          <p className="portfolio-section__eyebrow">Experience</p>
          <h2 className="portfolio-section__title">Experience that shaped how I build.</h2>
          <p className="portfolio-section__text">
            Each role strengthened my frontend foundations: building responsive pages, organizing reusable UI, and working from a clear visual system.
          </p>
        </div>

        <div className="timeline-grid">
          {experience.map((item) => (
            <article key={item.year} className="timeline-card nb-card">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
