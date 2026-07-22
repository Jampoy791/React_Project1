import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './Nav.scss'

const navigation = [
  { name: 'Home', href: '#hero', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Experience', href: '#experience', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="portfolio-nav">
      {({ open }) => (
        <>
          <div className="portfolio-nav__inner">
            <div className="portfolio-nav__mobile-toggle">
              <DisclosureButton className="portfolio-nav__button">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon aria-hidden="true" className="portfolio-nav__icon" />
                ) : (
                  <Bars3Icon aria-hidden="true" className="portfolio-nav__icon" />
                )}
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
                    className={classNames(
                      item.current ? 'portfolio-nav__link portfolio-nav__link--active' : 'portfolio-nav__link',
                      'portfolio-nav__link-base',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="portfolio-nav__actions">
              <button type="button" className="portfolio-nav__icon-button">
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="portfolio-nav__icon" />
              </button>

              <Menu as="div" className="portfolio-nav__menu">
                <MenuButton className="portfolio-nav__avatar-button">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="Profile avatar"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="portfolio-nav__avatar"
                  />
                </MenuButton>

                <MenuItems transition className="portfolio-nav__dropdown">
                  <MenuItem>
                    <a href="#" className="portfolio-nav__dropdown-link">Profile</a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="portfolio-nav__dropdown-link">Settings</a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="portfolio-nav__dropdown-link">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <DisclosurePanel className="portfolio-nav__mobile-panel">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'portfolio-nav__link portfolio-nav__link--active' : 'portfolio-nav__link',
                  'portfolio-nav__link-base portfolio-nav__link-base--mobile',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
