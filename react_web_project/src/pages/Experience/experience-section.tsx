import './experience.scss'

const experience = [
  {
    year: '2024',
    title: 'Junior Web Developer',
    company: 'Bold Launch Labs',
    detail: 'Built high-contrast frontends and component systems for ambitious digital brands.',
  },
  {
    year: '2023',
    title: 'Frontend Intern',
    company: 'Studio Hive',
    detail: 'Delivered interactive landing experiences with responsive grid systems and motion design.',
  },
  {
    year: '2022',
    title: 'Design Systems Assistant',
    company: 'Neon Grid',
    detail: 'Helped create reusable UI modules and layout structures for product launch websites.',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section portfolio-section--dark reveal">
      <div className="portfolio-section__inner experience-inner">
        <div className="experience-copy">
          <p className="portfolio-section__eyebrow">Experience</p>
          <h2 className="portfolio-section__title">A rugged timeline of modern frontend work.</h2>
          <p className="portfolio-section__text">
            From polished portfolio builds to fast product launches, each role sharpened the craft of frontend architecture and brutalist UI systems.
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
