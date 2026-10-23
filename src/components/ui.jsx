import { useInView } from '../hooks.js';

export function Reveal({ children, delay = 0, y = 30, className = '', as: Element = 'div' }) {
  const [ref, inView] = useInView();
  return (
    <Element
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px` }}
    >
      {children}
    </Element>
  );
}

export function SectionHeader({ label, title, description }) {
  return (
    <div className="section-header">
      {label && <p className="section-label">{label}</p>}
      <h2 className="display-md">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export function Bullet({ children, teal = false }) {
  return (
    <li className="bullet">
      <span className={teal ? 'dot dot--teal' : 'dot'}>●</span>
      {children}
    </li>
  );
}
