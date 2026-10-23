import { useCallback, useEffect, useState } from 'react';
import { navItems, profile } from '../data.js';
import { useActiveSection } from '../hooks.js';
import Icon from './Icon.jsx';

const sectionIds = navItems.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const goTo = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled || menuOpen ? 'navbar--solid' : ''}`}>
        <div className="container navbar__inner">
          <a href="#hero" className="navbar__brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {profile.name}
          </a>

          <nav className="navbar__links" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`navbar__link ${active === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="navbar__resume">
              <Icon name="file" /> Résumé
            </a>
            <span className="navbar__divider" />
            <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email">
              <Icon name="mail" size={18} />
            </a>
            {profile.social.github && (
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub profile">
                <Icon name="github" size={18} />
              </a>
            )}
            {profile.social.linkedin && (
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn profile">
                <Icon name="linkedin" size={18} />
              </a>
            )}
          </div>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <nav className="mobile-menu__links" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)} className="mobile-menu__link">
                {item.label}
              </button>
            ))}
          </nav>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="mobile-menu__resume" onClick={() => setMenuOpen(false)}>
            <Icon name="file" /> Download Résumé
          </a>
        </div>
      )}
    </>
  );
}
