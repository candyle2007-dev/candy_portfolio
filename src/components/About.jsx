import { education, learning, principles, profile } from '../data.js';
import { Bullet, Reveal, SectionHeader } from './ui.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader label="About" title="A bit more context." />
        <div className="split">
          <Reveal className="split__main">
            <p className="prose">{profile.bio}</p>
            <p className="prose">{profile.bio2}</p>
          </Reveal>
          <Reveal delay={0.1} className="split__side">
            <div>
              <h3 className="mini-heading">How I Work</h3>
              <ul className="bullets">
                {principles.map((p) => <Bullet key={p} teal>{p}</Bullet>)}
              </ul>
            </div>
            <div>
              <h3 className="mini-heading">Currently Learning</h3>
              <ul className="bullets">
                {learning.map((p) => <Bullet key={p}>{p}</Bullet>)}
              </ul>
            </div>
            <div>
              <h3 className="mini-heading">Education</h3>
              {education.slice(0, 1).map((ed) => (
                <div key={ed.degree}>
                  <p className="about__degree">{ed.degree}</p>
                  <p className="about__school">{ed.institution}</p>
                  <p className="about__date">{ed.date}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
