import './hero.css'

export default function HeroSection() {
  return (
    <section id="hero" className="hero-shell">
      <div className="hero-content">
        <div className="hero-text-block">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Hello, I’m
          </p>
          <h1 className="hero-title text-white">
            John Paul Villanueva
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            I build modern web experiences with React, Tailwind, and thoughtful design.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#" className="rounded-md bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-400">
              Get started
            </a>
            <a href="#" className="rounded-md border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

