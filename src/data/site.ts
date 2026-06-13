/**
 * AgentX2.ai — site configuration: brand, navigation, footer.
 * Single source of truth for global IA so navigation stays consistent and ≤3-click.
 * Docs: docs/02-website/WEBSITE_ARCHITECTURE.md
 */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  title: string;
  links: NavLink[];
}

export const SITE = {
  name: 'AgentX2.ai',
  shortName: 'AgentX2',
  url: 'https://agentx2.ai',
  tagline: 'AI-Native Consulting. Autonomous Execution. Measurable Outcomes.',
  description:
    'AgentX2.ai designs, deploys, governs, and continuously optimizes enterprise AI systems — agentic AI, automation, data intelligence, and a managed AI workforce delivered as a subscription.',
  email: 'hello@agentx2.ai',
  founded: 2026,
  social: [
    { label: 'GitHub', href: 'https://github.com/', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
  ] as NavLink[],
};

/** Primary navigation — every top-level destination, exposed on every page. */
export const NAV: NavLink[] = [
  { label: 'Services', href: '/services/' },
  { label: 'Agentic AI', href: '/agentic-ai/' },
  { label: 'Finance AI', href: '/finance-ai/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Subscriptions', href: '/subscriptions/' },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
];

/** Footer groups — guarantees every page is reachable (no orphans). */
export const FOOTER: FooterGroup[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Services', href: '/services/' },
      { label: 'Agentic AI', href: '/agentic-ai/' },
      { label: 'Finance AI', href: '/finance-ai/' },
      { label: 'Industries', href: '/industries/' },
      { label: 'Subscriptions', href: '/subscriptions/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Careers', href: '/careers/' },
      { label: 'Partners', href: '/partners/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Live Demo', href: '/demo/' },
      { label: 'ROI Calculator', href: '/roi-calculator/' },
      { label: 'Mission Control', href: '/mission-control/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
      { label: 'Security', href: 'https://github.com/', external: true },
    ],
  },
];
