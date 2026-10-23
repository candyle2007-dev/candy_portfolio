import { useState } from 'react';
import { profile } from '../data.js';
import Icon from './Icon.jsx';
import { Reveal, SectionHeader } from './ui.jsx';

const emptyForm = { name: '', email: '', company: '', reason: '', message: '' };
const reasons = ['Internship opportunity', 'Full-time role', 'IT support enquiry', 'General'];

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Please write at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // No backend: compose the message in the visitor's email app.
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `[${form.reason || 'General'}] Message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}${form.company ? `\n${form.company}` : ''}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm(emptyForm);
  };

  const field = (name) => `input ${errors[name] ? 'input--error' : ''}`;

  return (
    <section id="contact" className="section section--tinted">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's work together."
          description="Whether it's an internship, an IT support role or just a question, send me a message with a little context and I'll get back to you."
        />
        <div className="split">
          <Reveal className="split__main">
            {sent ? (
              <div className="success">
                <Icon name="check" size={40} />
                <h3>Your email app should now be open.</h3>
                <p>Just hit send there. Thanks for reaching out!</p>
                <button onClick={() => setSent(false)} className="text-link">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="form" noValidate>
                <div>
                  <label htmlFor="contact-name">Name <span className="req">*</span></label>
                  <input id="contact-name" name="name" value={form.name} onChange={onChange} placeholder="Your name" className={field('name')} />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email">Email <span className="req">*</span></label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" className={field('email')} />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-company">Company or organisation <span className="optional">Optional</span></label>
                  <input id="contact-company" name="company" value={form.company} onChange={onChange} placeholder="Your company" className="input" />
                </div>
                <div>
                  <label htmlFor="contact-reason">Reason for contacting</label>
                  <select id="contact-reason" name="reason" value={form.reason} onChange={onChange} className="input">
                    <option value="">Select a reason</option>
                    {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message">Message <span className="req">*</span></label>
                  <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell me a little about the role or what you need help with…" className={field('message')} />
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <button type="submit" className="btn btn--primary">
                  Send Message <Icon name="send" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="split__side">
            <div>
              <h3 className="mini-heading">Direct</h3>
              <a href={`mailto:${profile.email}`} className="contact__direct">
                <Icon name="mail" /> {profile.email}
              </a>
              <p className="contact__direct">
                <Icon name="mapPin" /> {profile.location}
              </p>
            </div>
            <div>
              <h3 className="mini-heading">Availability</h3>
              <p className="contact__note">
                Currently interning as a Deskside Engineer until December 2026 while studying at UOW. Open to IT support and tech internship opportunities.
              </p>
            </div>
            <div>
              <h3 className="mini-heading">Résumé</h3>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                <Icon name="file" /> Download PDF
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
