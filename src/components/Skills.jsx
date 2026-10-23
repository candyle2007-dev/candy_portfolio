import { capabilities } from '../data.js';
import { Bullet, Reveal, SectionHeader } from './ui.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <SectionHeader
          label="Capabilities"
          title="What I work with."
          description="Technical skills from the help desk to the code editor."
        />
        <div className="skills">
          {capabilities.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1} className="card card--hover">
              <h3 className="card__title">{group.title}</h3>
              <ul className="bullets">
                {group.items.map((item) => <Bullet key={item}>{item}</Bullet>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
