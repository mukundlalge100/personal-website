import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_ITEMS } from '../../data/resume-data';
import type { SectionId } from '../../types/resume';
import './Navbar.scss';

export default function Navbar(): ReactNode {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', ...NAV_ITEMS.map((item) => item.id)] as SectionId[]);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (id: SectionId): void => {
      setIsMobileOpen(false);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const top = element.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__container">
        <button
          className="navbar__logo"
          onClick={() => handleNavClick('hero')}
          type="button"
          aria-label="Go to top"
        >
          <span className="navbar__logo-text">ML</span>
        </button>

        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                type="button"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          type="button"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setIsMobileOpen(false)} role="presentation" />
      )}

      <div className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__mobile-link ${activeSection === item.id ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                type="button"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
