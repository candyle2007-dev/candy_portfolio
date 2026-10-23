import { education, experience } from '../data.js';
import Icon from './Icon.jsx';
import { Bullet, Reveal, SectionHeader, Tag } from './ui.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader label="Experience" title="Hands-on IT support, built on people skills." />

        <div className="timeline">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.08} className="timeline__entry">
              <div className="timeline__when">
                <span>{entry.date}</span>
                <span className="timeline__where">{entry.location}</span>
              </div>
              <div>
                <h3 className="timeline__role">{entry.role}</h3>
                <p className="timeline__company">{entry.company}</p>
                <p className="timeline__summary">{entry.summary}</p>
                <ul className="bullets">
                  {entry.points.map((p) => <Bullet key={p}>{p}</Bullet>)}
                </ul>
                <div className="tags">
                  {entry.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="education__heading">
            <Icon name="grad" size={20} />
            <h3>Education</h3>
          </div>
          <div className="education">
            {education.map((ed) => (
              <div key={ed.degree} className="card">
                <h4>{ed.degree}</h4>
                <p className="card__sub">{ed.institution}</p>
                <p className="card__date">{ed.date}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
