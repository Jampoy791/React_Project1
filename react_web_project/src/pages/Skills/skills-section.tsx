import './skills.scss'

const skills = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'React',
  'Tailwind',
  'GoHighLevel',
  'Figma',
  'Vite',
]

export default function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section portfolio-section--cream reveal">
      <div className="portfolio-section__inner skills-inner">
        <p className="portfolio-section__eyebrow">Skills</p>
        <h2 className="portfolio-section__title">Tools I use to build and ship.</h2>
        <p className="portfolio-section__text">
          I use these tools to build responsive interfaces, reusable components, and polished web experiences.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
