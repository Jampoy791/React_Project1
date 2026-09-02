import { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './Nav.scss'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-10% 0px -45% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace('#', ''))
  }

  return (
    <Disclosure as="nav" className="portfolio-nav">
      {({ open }) => (
        <>
          <div className="portfolio-nav__inner">
            <div className="portfolio-nav__mobile-toggle">
              <DisclosureButton className="portfolio-nav__button">
                <span className="sr-only">{open ? 'Close main menu' : 'Open main menu'}</span>
                {open ? (
                  <XMarkIcon aria-hidden="true" className="portfolio-nav__icon" />
                ) : (
                  <Bars3Icon aria-hidden="true" className="portfolio-nav__icon" />
                )}
              </DisclosureButton>
            </div>

            <div className="portfolio-nav__brand">
              <span className="portfolio-nav__name">John Paul Villanueva</span>
            </div>

            <div className="portfolio-nav__content">
              <div className="portfolio-nav__links">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '')

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={classNames(
                        isActive ? 'portfolio-nav__link portfolio-nav__link--active' : 'portfolio-nav__link',
                        'portfolio-nav__link-base',
                      )}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <DisclosurePanel className="portfolio-nav__mobile-panel">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')

              return (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={classNames(
                    isActive ? 'portfolio-nav__link portfolio-nav__link--active' : 'portfolio-nav__link',
                    'portfolio-nav__link-base portfolio-nav__link-base--mobile',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              )
            })}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
