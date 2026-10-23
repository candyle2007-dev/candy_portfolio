import { projects } from '../data.js';
import Icon from './Icon.jsx';
import { Reveal, SectionHeader, Tag } from './ui.jsx';

function ProjectVisual({ project }) {
  return (
    <div className="project__visual">
      <div className="project__window">
        <div className="project__window-bar">
          <span /><span /><span />
          <p>{project.slug}</p>
        </div>
        <pre className="project__code">
          {project.visual.map((line, i) => (
            <code key={i}>
              <span className="project__ln">{String(i + 1).padStart(2, '0')}</span>
              {line}
            </code>
          ))}
        </pre>
      </div>
    </div>
  );
}

function ProjectRow({ project, index }) {
  const reversed = index % 2 !== 0;
  return (
    <Reveal as="article" y={40} delay={index * 0.1} className={`project ${reversed ? 'project--reversed' : ''}`}>
      <ProjectVisual project={project} />
      <div className="project__body">
        <div className="project__meta">
          <span className="project__category">{project.category}</span>
          <span className="project__year">{project.year}</span>
          {project.sample && <span className="project__sample">Sample — replace me</span>}
        </div>
        <h3 className="display-sm">{project.title}</h3>
        <p className="project__summary">{project.summary}</p>
        <p className="project__role">Role: {project.role}</p>
        <div className="tags">
          {project.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            View on GitHub <Icon name="external" size={14} />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          label="Selected Work"
          title="Things I've been building."
          description="Personal and coursework projects from my Computer Science studies."
        />
        <div className="projects">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="work__cta">
          <a href="#contact" className="glow-btn">
            <span className="pulsing-node" />
            Open to IT support & internship roles
            <Icon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  );
}
