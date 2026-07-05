// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.scss';

// Menu data — top-level items with optional nested links (accordion sub-menus)
const MENU_ITEMS = [
  {
    label: 'Areness',
    children: [
      { label: 'About Us', href: '#about' },
      { label: 'Media Coverage', href: '#media-coverage' },
    ],
  },
  {
    label: 'Expertise',
    children: [
      { label: 'Arbitration', href: '#arbitration' },
      { label: 'Aviation', href: '#aviation' },
      { label: 'Banking', href: '#banking' },
      { label: 'Capital Markets & Securities', href: '#capital-markets' },
      { label: 'Competition & Anti-trust', href: '#competition' },
      { label: 'Corporate Advisory', href: '#corporate-advisory' },
      { label: 'Corporate Governance', href: '#corporate-governance' },
      { label: 'Corporate Restructuring', href: '#corporate-restructuring' },
      { label: 'View All Expertise', href: '#expertise' },
    ],
  },
  {
    label: 'Knowledge Centre',
    children: [
      { label: 'Opinions', href: '#opinions' },
      { label: 'Publici Juris', href: '#publici-juris' },
      { label: 'Newsletter', href: '#newsletter' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Innovation', href: '#innovation' },
      { label: 'Podcast Episodes', href: '#podcast' },
    ],
  },
  {
    label: 'Careers',
    children: [
      { label: 'Work with us', href: '#careers' },
      { label: 'Internship', href: '#internship' },
      { label: 'Partnerships', href: '#partnerships' },
    ],
  },
  {
    label: 'Contact Us',
    href: '#contact',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Lock body scroll while the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenIndex(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenIndex(null);
  };

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <header className="navbar">
      <div className="navbar__bar">
        <div className="navbar__container">
          {/* Logo — icon left empty; drop your OV mark (svg/img) inside navbar__logo-icon */}
          <a href="#home" className="navbar__logo">
            <span className="navbar__logo-icon" aria-hidden="true"></span>
            <span className="navbar__logo-text-group">
              <span className="navbar__logo-text">OPTIVOX</span>
              <span className="navbar__logo-subtext">STRATEGIES &amp; COMMUNICATION</span>
            </span>
          </a>

          {/* Menu pill — identical on every breakpoint, stays visible above the overlay */}
          <button
            className="navbar__menu-pill"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="navbar__menu-pill-text">Menu</span>
            <span className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`}>
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Accordion-style overlay menu */}
      <div className={`navbar__overlay ${isMenuOpen ? 'navbar__overlay--open' : ''}`}>
        <div className="navbar__overlay-scroll">
          <nav className="navbar__accordion">
            {MENU_ITEMS.map((item, index) => {
              const hasChildren = Boolean(item.children && item.children.length);
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.label}
                  className={`navbar__accordion-item ${isOpen ? 'navbar__accordion-item--open' : ''}`}
                >
                  {hasChildren ? (
                    <>
                      <button
                        className={`navbar__accordion-trigger ${isOpen ? 'navbar__accordion-trigger--active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <span className="navbar__accordion-chevron" aria-hidden="true">&#9662;</span>
                      </button>
                      <div className="navbar__accordion-panel">
                        <ul className="navbar__accordion-links">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a href={child.href} onClick={closeMenu}>
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a className="navbar__accordion-link-flat" href={item.href} onClick={closeMenu}>
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;