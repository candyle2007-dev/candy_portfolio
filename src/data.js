// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: 'Candy Lim',
  role: 'Deskside Engineer Intern · CS Student',
  location: 'Singapore',
  email: 'candyle2007@gmail.com',
  headline: 'I keep technology running so people can get on with their work.',
  subheadline:
    'Computer Science (AI & Big Data) student at the University of Wollongong through SIM, currently supporting end users as a Deskside Engineer Intern at Ng Teng Fong General Hospital.',
  bio:
    "I'm a Singapore-based Computer Science student specialising in Artificial Intelligence and Big Data at the University of Wollongong (UOW) through the Singapore Institute of Management (SIM). Right now I'm gaining hands-on IT experience as a Deskside Engineer Intern — troubleshooting hardware and software, reimaging and patching Windows machines, and managing user accounts in Active Directory.",
  bio2:
    'Before IT, I spent time in client-facing work at Prudential, which taught me how to listen carefully, explain things clearly and stay calm under pressure. I bring that same mindset to technical support, and I have a keen interest in technology, data and artificial intelligence.',
  social: {
    // Add your links here — empty links are hidden automatically.
    github: '',
    linkedin: '',
  },
  resumeUrl: 'resume.pdf',
};

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const capabilityStream = [
  'Windows OS Support',
  'Hardware Troubleshooting',
  'Active Directory',
  'Python',
  'AI & Big Data',
];

// Projects marked `sample: true` are placeholders — replace them with your own work.
export const projects = [
  {
    slug: 'portfolio',
    category: 'Web',
    title: 'Personal Portfolio Website',
    year: '2026',
    role: 'Designer & Developer',
    summary:
      'This site — a responsive single-page portfolio built with React, featuring an animated particle-network hero, scroll-reveal sections and a contact form.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite'],
    visual: ['<App />', 'Hero', 'Work', 'Experience', 'Contact'],
    githubUrl: '',
    sample: false,
  },
  {
    slug: 'python-oop',
    category: 'Coursework',
    title: 'Python OOP Practice',
    year: '2026',
    role: 'Student',
    summary:
      'Object-oriented programming exercises in Python covering classes, inheritance, encapsulation and polymorphism. Replace this with a short description of your favourite exercise.',
    technologies: ['Python', 'OOP'],
    visual: ['class Device:', '  def __init__(self):', '  def reimage(self):', 'class Laptop(Device):'],
    githubUrl: '',
    sample: true,
  },
  {
    slug: 'data-project',
    category: 'AI & Big Data',
    title: 'Data Analysis Project',
    year: '2026',
    role: 'Student',
    summary:
      'A placeholder for an AI or data project from your UOW coursework — describe the dataset, what you analysed and what you found.',
    technologies: ['Python', 'Data Analysis'],
    visual: ['import pandas as pd', 'df = pd.read_csv(...)', 'df.describe()', 'model.fit(X, y)'],
    githubUrl: '',
    sample: true,
  },
];

export const experience = [
  {
    id: 'ntfgh',
    company: 'Ng Teng Fong General Hospital',
    role: 'Deskside Engineer Intern',
    date: 'Jul 2026 – Dec 2026',
    location: 'Singapore',
    summary:
      'Provide on-site technical support to hospital staff, keeping end-user devices, accounts and applications running reliably.',
    points: [
      'Provide deskside technical support to end users, troubleshooting hardware, software and Windows-related issues.',
      'Perform Windows OS reimaging, patching, system updates and device deployment.',
      'Use Active Directory to support user accounts, including enabling, disabling and troubleshooting account-related issues.',
      'Install, configure and troubleshoot applications, laptops, desktops and other IT equipment for end users.',
    ],
    technologies: ['Windows', 'Active Directory', 'OS Reimaging', 'Patching', 'Hardware'],
  },
  {
    id: 'prudential',
    company: 'Prudential',
    role: 'Telemarketer',
    date: 'Jun 2025 – Feb 2026',
    location: 'Singapore',
    summary:
      'Engaged potential and existing clients by phone, introducing insurance products and handling enquiries professionally.',
    points: [
      'Conducted outbound calls to engage potential and existing clients and introduce relevant insurance products and services.',
      'Responded to client enquiries professionally and provided clear and accurate information.',
      'Maintained accurate client records and supported administrative tasks, including documentation and data entry.',
      'Developed strong communication, customer service and client-handling skills in a professional environment.',
    ],
    technologies: ['Communication', 'Customer Service', 'Data Entry'],
  },
];

export const education = [
  {
    institution: 'University of Wollongong (via SIM)',
    degree: 'Bachelor of Computer Science (Artificial Intelligence and Big Data)',
    date: 'Jun 2026 – Present',
  },
  {
    institution: 'Singapore Institute of Management',
    degree: 'Diploma in Information Technology',
    date: 'Apr 2025 – Mar 2026',
  },
  {
    institution: 'Singapore Institute of Management',
    degree: 'Information Technology Foundation Studies',
    date: 'Oct 2024 – Mar 2025',
  },
];

export const capabilities = [
  {
    title: 'End-User Support',
    items: [
      'Deskside technical support',
      'Hardware & software troubleshooting',
      'Application install & configuration',
      'Clear, patient communication',
    ],
  },
  {
    title: 'Systems & Deployment',
    items: [
      'Windows OS support',
      'OS reimaging & device deployment',
      'Windows patching & updates',
      'Laptops, desktops & peripherals',
    ],
  },
  {
    title: 'Accounts & Networking',
    items: [
      'Active Directory user accounts',
      'Enabling, disabling & unlocking users',
      'Basic networking',
      'Account issue troubleshooting',
    ],
  },
  {
    title: 'Programming',
    items: ['Python', 'C++', 'JavaScript & HTML', 'AI & Big Data coursework'],
  },
];

export const principles = [
  'Listen first, then fix.',
  'Explain the fix in plain language.',
  'Document what worked for next time.',
  'Leave every desk better than I found it.',
];

export const learning = [
  'Object-oriented programming in Python',
  'Artificial intelligence fundamentals',
  'Big data & data analysis',
  'Enterprise IT & Windows administration',
];
