import { navItems, profile } from '../data.js';
import Icon from './Icon.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#hero" className="navbar__brand">{profile.name}</a>
            <p className="footer__tagline">
              Deskside engineer and Computer Science student keeping technology simple for the people who use it.
            </p>
          </div>
          <div>
            <h3 className="mini-heading">Navigation</h3>
            <ul className="footer__list">
              {navItems.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mini-heading">Connect</h3>
            <ul className="footer__list">
              <li><a href={`mailto:${profile.email}`}><Icon name="mail" /> Email</a></li>
              {profile.social.github && <li><a href={profile.social.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub</a></li>}
              {profile.social.linkedin && <li><a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn</a></li>}
              <li><a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"><Icon name="file" /> Résumé</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed and built with React.</p>
        </div>
      </div>
    </footer>
  );
}
