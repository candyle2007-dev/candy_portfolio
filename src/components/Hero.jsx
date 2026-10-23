import { capabilityStream, profile } from '../data.js';
import HeroCanvas from './HeroCanvas.jsx';
import Icon from './Icon.jsx';

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <HeroCanvas />
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow intro" style={{ '--d': '0.1s' }}>
              IT Support · Computer Science · Singapore
            </p>
            <h1 className="display-lg intro" style={{ '--d': '0.2s' }}>
              {profile.headline}
            </h1>
            <p className="hero__sub intro" style={{ '--d': '0.3s' }}>
              {profile.subheadline}
            </p>
            <div className="hero__ctas intro" style={{ '--d': '0.4s' }}>
              <a href="#experience" className="btn btn--primary">
                View My Experience <Icon name="arrowDown" />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <Icon name="file" /> Download Résumé
              </a>
            </div>
            <div className="hero__meta intro" style={{ '--d': '0.5s' }}>
              {profile.social.github && (
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                  <Icon name="github" /> GitHub
                </a>
              )}
              {profile.social.linkedin && (
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icon name="linkedin" /> LinkedIn
                </a>
              )}
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" /> Email
              </a>
              <span>
                <Icon name="mapPin" size={14} /> Based in {profile.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="stream high-tech-border" aria-label="Focus areas">
        <div className="container stream__inner">
          <span className="stream__label">Capability Stream //</span>
          {capabilityStream.map((item) => (
            <span key={item} className="stream__item">
              <span className="pulsing-node" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
