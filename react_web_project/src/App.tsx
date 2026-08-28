
import './App.scss'
import Nav from './components/Nav/Nav'
import HeroSection from './pages/Hero/hero-section'
import AboutSection from './pages/About/about-section'
import SkillsSection from './pages/Skills/skills-section'
import ProjectsSection from './pages/Projects/projects-section'
import ExperienceSection from './pages/Experience/experience-section'
import ContactSection from './pages/Contact/contact-section'

export default function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}


