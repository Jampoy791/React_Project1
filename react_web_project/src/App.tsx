
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'
import HeroSection from './pages/Hero/hero-section'

const navigation = [
  { name: 'Home', href: '#hero', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]
function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  return (
    <div>
    <Disclosure as="nav" className="portfolio-nav">
      <div className="portfolio-nav__inner">
        <div className="portfolio-nav__mobile-toggle">
          <DisclosureButton className="portfolio-nav__button">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
          </DisclosureButton>
        </div>
        <div className="portfolio-nav__content">
          <div className="portfolio-nav__brand">
            <span className="portfolio-nav__name">John Paul Villanueva</span>
          </div>
          <div className="portfolio-nav__links">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(item.current ? 'portfolio-nav__link portfolio-nav__link--active' : 'portfolio-nav__link', 'portfolio-nav__link-base')}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="portfolio-nav__actions">
          <button type="button" className="portfolio-nav__icon-button">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>

          <Menu as="div" className="portfolio-nav__menu">
            <MenuButton className="portfolio-nav__avatar-button">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="portfolio-nav__avatar"
              />
            </MenuButton>

            <MenuItems transition className="portfolio-nav__dropdown">
              <MenuItem>
                <a href="#" className="portfolio-nav__dropdown-link">
                  Your profile
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="portfolio-nav__dropdown-link">
                  Settings
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="portfolio-nav__dropdown-link">
                  Sign out
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="portfolio-nav__mobile-panel">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(item.current ? 'portfolio-nav__link portfolio-nav__link--active' : 'portfolio-nav__link', 'portfolio-nav__link-base portfolio-nav__link-base--mobile')}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    <HeroSection />

    <section id="about" className="portfolio-section portfolio-section--dark">
      <div className="portfolio-section__inner">
        <p className="portfolio-section__eyebrow">About</p>
        <h2 className="portfolio-section__title">I build modern web experiences with React and Tailwind.</h2>
        <p className="portfolio-section__text">
          This section can hold your short bio, values, and background so visitors quickly understand who you are.
        </p>
      </div>
    </section>

    <section id="projects" className="portfolio-section portfolio-section--accent">
      <div className="portfolio-section__inner">
        <p className="portfolio-section__eyebrow">Projects</p>
        <div className="portfolio-card-grid">
          <div className="portfolio-card">
            <h3 className="portfolio-card__title">Portfolio Website</h3>
            <p className="portfolio-card__text">A clean single-page experience built with React and Tailwind.</p>
          </div>
          <div className="portfolio-card">
            <h3 className="portfolio-card__title">E-commerce UI</h3>
            <p className="portfolio-card__text">A polished storefront layout with product cards and responsive sections.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="portfolio-section portfolio-section--dark">
      <div className="portfolio-contact-card">
        <p className="portfolio-section__eyebrow">Contact</p>
        <h2 className="portfolio-section__title">Let’s build something great together.</h2>
        <p className="portfolio-section__text">
          Replace this with your email, social links, or a contact form when you are ready.
        </p>
      </div>
    </section>
    </div>
  )
}


