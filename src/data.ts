export const profile = {
  name: 'Javeed Shaik',
  role: 'Frontend Engineer',
  focus: 'React · TypeScript · Next.js',
  email: 'javeedshaikon@gmail.com',
  phone: '+91-7981931193',
  location: 'Ahmedabad, India',
  availability: 'Available immediately · Open to Remote / Hybrid / Onsite',
  // Replace with your real links before deploying
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  resumeFile: '/Javeed_Shaik_Frontend_Engineer_React_2026.pdf',
}

export const summary =
  'Frontend engineer with 4+ years delivering enterprise React/TypeScript products at Litera, a global legal-tech company. I\u2019ve shipped across four product lines — AI-assisted document comparison, a cross-product design system, tenant admin tooling, and a comparison-rendering library — for workflows that top-tier law firms run on daily.'

export const stats = [
  { value: '4+', label: 'Years at Litera', color: 'violet' as const },
  { value: '4', label: 'Product lines shipped', color: 'amber' as const },
  { value: '40+', label: 'Components built', color: 'teal' as const },
  { value: '85%+', label: 'Test coverage maintained', color: 'raspberry' as const },
]

export type ProjectColor = 'violet' | 'amber' | 'teal' | 'raspberry'

export type Project = {
  name: string
  tagline: string
  stack: string[]
  points: string[]
  color: ProjectColor
}

export const projects: Project[] = [
  {
    name: 'Litera One Compare',
    tagline: 'AI-assisted legal document comparison platform',
    stack: ['React', 'TypeScript', 'Fluent UI', 'REST APIs', 'Jest'],
    points: [
      'Optimised rendering and memory handling so 100+ page legal documents compare without performance loss',
      'Used GitHub Copilot and Devin AI in the workflow, cutting average story points per sprint by ~30%',
      'Kept unit/component coverage above 85% with Jest and React Testing Library across every comparison module',
    ],
    color: 'violet',
  },
  {
    name: 'Admin Panel Centre',
    tagline: 'Tenant-level document workflow configuration',
    stack: ['React', 'TypeScript', 'Fluent UI', 'REST APIs'],
    points: [
      'Designed config UI for one-to-one, one-to-many and many-to-many comparison modes, cutting admin task time',
      'Built 15+ reusable components aligned to Litera\u2019s design system, shared across product teams',
      'Managed complex async state with React Hooks and TypeScript across multi-tenant environments',
    ],
    color: 'amber',
  },
  {
    name: 'Litera Design Systems',
    tagline: 'Cross-product UI component library',
    stack: ['React', 'TypeScript', 'Material UI', 'Fluent UI', 'Storybook'],
    points: [
      'Built 40+ production components with full TypeScript APIs and Storybook documentation',
      'Unified Material UI, Fluent UI and custom design tokens into one library, cutting cross-team UI drift',
      'Converted Figma specs into pixel-perfect, accessible components alongside the design team',
    ],
    color: 'teal',
  },
  {
    name: 'DeltaViewJS',
    tagline: 'Comparison-rendering library for document redlines',
    stack: ['React', 'SASS', 'AI Summarisation', 'Export Pipelines'],
    points: [
      'Built the rendering components behind redline and change-summary visualisation for end users',
      'Shipped multi-format export (PDF, DOCX, XLSX, PPT, ZIP) with consistent output across workflows',
      'Authored the SASS architecture — variables, mixins and theming — still used across the library',
    ],
    color: 'raspberry',
  },
]

export const skills: { group: string; items: string[]; color: ProjectColor }[] = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SASS/SCSS'], color: 'violet' },
  { group: 'State', items: ['Redux', 'React Hooks', 'Context API'], color: 'amber' },
  { group: 'UI Libraries', items: ['Fluent UI', 'Material UI', 'Bootstrap', 'Tailwind CSS', 'Storybook'], color: 'teal' },
  { group: 'Testing', items: ['Jest', 'React Testing Library'], color: 'raspberry' },
  { group: 'Performance', items: ['Lazy Loading', 'Memoization', 'Code Splitting', 'Bundle Optimization'], color: 'violet' },
  { group: 'Backend / DB', items: ['Node.js', 'REST APIs', 'MySQL', 'MongoDB'], color: 'teal' },
]

export const experience = {
  company: 'Litera Technologies Private Limited',
  role: 'Software Engineer',
  period: 'May 2022 — Present',
  location: 'Ahmedabad, India',
}
