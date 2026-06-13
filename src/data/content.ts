/**
 * AgentX2.ai — structured content powering the pages.
 * Grounded in: README.md, PRD_AgentX2.md, docs/00-overview/COMPANY_MODEL.md,
 * docs/03-agents/AGENT_CATALOG.md. No fabricated client names or metrics —
 * outcomes are framed as illustrative/representative or computed from user input.
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  summary: string;
  points: string[];
  href: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

export interface Industry {
  id: string;
  icon: string;
  name: string;
  summary: string;
  useCases: string[];
}

export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface AgentInfo {
  id: string;
  name: string;
  page: string;
  mission: string;
  tier: 1 | 2 | 3;
}

export interface WorkforceRole {
  icon: string;
  name: string;
  does: string;
}

/** System-true proof points (properties of the platform, not fabricated business metrics). */
export const STATS = [
  { num: '24/7', label: 'Autonomous Operation' },
  { num: '100%', label: 'Observable & Traced' },
  { num: '≤3', label: 'Clicks to Any Action' },
  { num: '0', label: 'Regression Tolerance' },
];

export const PILLARS: Service[] = [
  {
    id: 'strategy',
    icon: '🧭',
    title: 'AI Strategy',
    summary: 'Roadmaps, operating model, and fractional AI leadership that turn ambition into a sequenced plan.',
    points: ['AI opportunity & readiness assessment', 'Operating model & governance design', 'Fractional CAIO / advisory'],
    href: '/services/',
  },
  {
    id: 'build',
    icon: '🤖',
    title: 'AI Build',
    summary: 'Production agents, automation, RAG, and integrations — engineered, evaluated, and observable.',
    points: ['Autonomous & multi-agent systems', 'Workflow automation & RAG', 'Secure system integration'],
    href: '/agentic-ai/',
  },
  {
    id: 'operate',
    icon: '🛰️',
    title: 'AI Operate',
    summary: 'A managed AI workforce with monitoring, governance, and human-in-the-loop control.',
    points: ['Managed AI workforce', 'Monitoring & guardrails', 'Compliance & audit trails'],
    href: '/subscriptions/',
  },
  {
    id: 'improve',
    icon: '📈',
    title: 'AI Improve',
    summary: 'Continuous tuning, evaluation, and ROI tracking so systems get better every week.',
    points: ['Eval & A/B testing', 'Prompt & model tuning', 'ROI & outcome reporting'],
    href: '/finance-ai/',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'agentic',
    icon: '🤖',
    title: 'Agentic AI',
    summary: 'Autonomous agents that plan, reason, decide, and execute workflows with human-in-the-loop control.',
    points: ['Executive & operations assistants', 'Multi-agent collaboration', 'Tool use via MCP', 'Human approval gates'],
    href: '/agentic-ai/',
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'Intelligent Automation',
    summary: 'Deterministic, observable pipelines that remove repetitive work and accelerate operations.',
    points: ['Process discovery & design', 'Idempotent, retried workflows', 'Event-driven orchestration', 'Full audit logging'],
    href: '/services/',
  },
  {
    id: 'finance',
    icon: '💹',
    title: 'Finance AI',
    summary: 'AI for FP&A, close, forecasting, and decision support — finance-grade and governed.',
    points: ['Forecasting & scenario analysis', 'Close & reconciliation copilots', 'ROI assessment', 'Controls & traceability'],
    href: '/finance-ai/',
  },
  {
    id: 'data',
    icon: '🧠',
    title: 'Data Intelligence',
    summary: 'Knowledge graphs, vector search, and RAG that make enterprise knowledge usable by agents.',
    points: ['Knowledge graph & RAG', 'Vector search & memory', 'Grounded retrieval', 'Freshness & lineage'],
    href: '/services/',
  },
  {
    id: 'governance',
    icon: '🛡️',
    title: 'AI Governance',
    summary: 'Model, prompt, agent, and data governance with human approval and compliance evidence.',
    points: ['Responsible-AI controls', 'Approval policies & RBAC', 'Audit trails', 'Risk management'],
    href: '/services/',
  },
  {
    id: 'workforce',
    icon: '🛰️',
    title: 'Managed AI Workforce™',
    summary: 'Digital workers as a service — monitored, optimized, and governed on your behalf.',
    points: ['Agent fleet operations', 'Monitoring & remediation', 'Continuous optimization', 'Outcome reporting'],
    href: '/subscriptions/',
  },
];

export const PROCESS = [
  { title: 'Assess', body: 'AI opportunity, readiness, automation, and ROI assessments establish a grounded baseline.' },
  { title: 'Architect', body: 'We design the agents, data, integrations, governance, and observability before building.' },
  { title: 'Build', body: 'Agents and automations are built, evaluated against golden datasets, and instrumented.' },
  { title: 'Operate', body: 'A managed AI workforce runs in production with monitoring and human-in-the-loop control.' },
  { title: 'Improve', body: 'Continuous evaluation, tuning, and ROI tracking compound value every cycle.' },
];

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Assessment',
    cadence: 'fixed scope',
    blurb: 'For SMBs beginning their AI journey.',
    features: ['AI readiness assessment', 'Monthly advisory session', 'Opportunity identification', 'Prioritized roadmap'],
    cta: 'Start with an assessment',
    href: '/contact/',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 'Subscription',
    cadence: 'monthly',
    blurb: 'For teams actively implementing AI.',
    features: [
      'Dedicated AI consultant',
      'Solution architecture',
      'Deployment support',
      'KPI & ROI reporting',
      'Quarterly optimization',
    ],
    cta: 'Talk to us',
    href: '/contact/',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual',
    blurb: 'For organizations scaling AI across functions.',
    features: [
      'Dedicated delivery team',
      'Multi-agent solutions',
      'System integrations',
      'Governance & compliance',
      'Continuous optimization',
    ],
    cta: 'Design your program',
    href: '/contact/',
  },
  {
    id: 'workforce',
    name: 'Managed AI Workforce™',
    price: 'Per agent',
    cadence: 'monthly',
    blurb: 'Digital workers operated for you.',
    features: [
      'Agent fleet operations',
      'Monitoring & remediation',
      'Continuous optimization',
      'Governance & reporting',
      'Human-in-the-loop control',
    ],
    cta: 'Deploy a workforce',
    href: '/contact/',
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'financial-services',
    icon: '🏦',
    name: 'Financial Services',
    summary: 'Finance-grade AI with controls, traceability, and governance built in.',
    useCases: ['FP&A & forecasting copilots', 'Reconciliation & close', 'Risk & compliance assistants', 'Client service agents'],
  },
  {
    id: 'healthcare',
    icon: '🩺',
    name: 'Healthcare',
    summary: 'Governed automation and decision support with privacy by design.',
    useCases: ['Operational automation', 'Documentation copilots', 'Knowledge retrieval', 'Compliance support'],
  },
  {
    id: 'manufacturing',
    icon: '🏭',
    name: 'Manufacturing',
    summary: 'Operations intelligence and predictive workflows across the value chain.',
    useCases: ['Predictive maintenance', 'Supply-chain automation', 'Quality analytics', 'Ops assistants'],
  },
  {
    id: 'technology',
    icon: '💻',
    name: 'Technology',
    summary: 'Agentic software delivery, support, and growth across the stack.',
    useCases: ['Engineering agents', 'Support automation', 'Research agents', 'Revenue operations'],
  },
  {
    id: 'professional-services',
    icon: '📊',
    name: 'Professional Services',
    summary: 'Leverage expertise with proposal, research, and delivery agents.',
    useCases: ['Proposal generation', 'Research & analysis', 'Delivery automation', 'Knowledge management'],
  },
  {
    id: 'public-sector',
    icon: '🏛️',
    name: 'Public Sector',
    summary: 'Transparent, auditable AI aligned to accountability requirements.',
    useCases: ['Citizen service agents', 'Process automation', 'Document intelligence', 'Audit & transparency'],
  },
];

/** Illustrative engagement patterns — archetypes, not named clients; outcomes are qualitative. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lender-fpna',
    sector: 'Financial Services',
    title: 'Finance copilot for a mid-market lender',
    challenge: 'Manual forecasting and reconciliation consumed the finance team and slowed the monthly close.',
    approach: 'A governed Finance AI copilot for forecasting and reconciliation, grounded in ledger data with full audit trails and human approval.',
    outcome: 'Faster close cycles and analyst time redirected to higher-value analysis, with every action observable and traceable.',
  },
  {
    id: 'saas-support',
    sector: 'Technology',
    title: 'Support automation for a B2B SaaS company',
    challenge: 'Rising ticket volume strained the support team and slowed first-response times.',
    approach: 'A grounded support agent with knowledge retrieval, escalation policies, and human-in-the-loop handoff for sensitive cases.',
    outcome: 'Routine questions resolved autonomously and human agents focused on complex work — with quality measured by evaluation.',
  },
  {
    id: 'mfg-ops',
    sector: 'Manufacturing',
    title: 'Operations intelligence for a manufacturer',
    challenge: 'Operational signals were siloed, making proactive decisions difficult.',
    approach: 'A multi-agent operations layer unifying data with predictive workflows and dashboards in Mission Control.',
    outcome: 'Earlier visibility into operational risk and a single decision-first pane of glass for the operations team.',
  },
];

export const FAQS: Faq[] = [
  {
    q: 'What makes AgentX2.ai different from a traditional consulting firm?',
    a: 'We operate as an ongoing AI transformation partner through subscriptions, and we run on the same agentic swarms we sell. Everything we deliver is evaluated, observable, and governed.',
  },
  {
    q: 'Do you use our data to train models?',
    a: 'No. Client data stays governed and isolated. Our default is local-first models with strict data classification, redaction in logs, and human approval for sensitive actions.',
  },
  {
    q: 'How do you keep AI safe and compliant?',
    a: 'A guardian model screens inputs and outputs, prompts and agents are version-controlled and evaluated, and high-risk actions stop for human approval. Compliance evidence is mapped to recognized frameworks.',
  },
  {
    q: 'Which models and tools do you use?',
    a: 'We are vendor-agnostic. We default to local Ollama models and add cloud models when warranted. Agents reach tools through a governed Model Context Protocol boundary.',
  },
  {
    q: 'How fast can we get started?',
    a: 'Most engagements begin with a focused assessment, followed by an architecture and a first production agent. Subscriptions then operate and improve the system continuously.',
  },
  {
    q: 'How do you measure ROI?',
    a: 'We instrument outcomes from day one — time saved, cost avoided, and revenue influenced — and report them in Mission Control. Try the ROI calculator for a directional estimate.',
  },
];

/** On-page AI agents (per docs/03-agents/AGENT_CATALOG.md). Drives the AI widget per page. */
export const AGENTS: AgentInfo[] = [
  { id: 'consultation', name: 'AI Consultation Agent', page: 'home', mission: 'Qualify your needs and help you book a consultation.', tier: 2 },
  { id: 'advisor', name: 'AI Solution Advisor', page: 'services', mission: 'Recommend the right offering for your goals.', tier: 1 },
  { id: 'cfo', name: 'AI CFO Agent', page: 'finance-ai', mission: 'Explore finance AI use-case fit and value.', tier: 1 },
  { id: 'builder', name: 'Agent Builder', page: 'agentic-ai', mission: 'Help you scope an agent for your workflow.', tier: 1 },
  { id: 'roi', name: 'AI ROI Calculator', page: 'subscriptions', mission: 'Quantify the value of automating a workflow.', tier: 1 },
  { id: 'discovery', name: 'AI Discovery Agent', page: 'contact', mission: 'Run structured discovery to prepare your consult.', tier: 2 },
  { id: 'knowledge', name: 'Knowledge Agent', page: 'faq', mission: 'Answer questions grounded in our content.', tier: 1 },
  { id: 'industry', name: 'Industry Advisor', page: 'industries', mission: 'Recommend AI plays for your vertical.', tier: 1 },
];

export const WORKFORCE: WorkforceRole[] = [
  { icon: '👔', name: 'Executive Agents', does: 'Briefings, prioritization, and decision support.' },
  { icon: '💹', name: 'Finance Agents', does: 'Forecasting, reconciliation, and reporting.' },
  { icon: '📣', name: 'Sales Agents', does: 'Qualification, outreach drafting, and CRM hygiene.' },
  { icon: '🎯', name: 'Marketing Agents', does: 'Content, SEO, and campaign operations.' },
  { icon: '🎧', name: 'Support Agents', does: 'Grounded answers with escalation to humans.' },
  { icon: '🛠️', name: 'Engineering Agents', does: 'Build, test, and remediation under review.' },
  { icon: '⚙️', name: 'Operations Agents', does: 'Workflow execution and incident triage.' },
  { icon: '🛡️', name: 'Compliance Agents', does: 'Policy checks, audits, and evidence capture.' },
  { icon: '🔬', name: 'Research Agents', does: 'Time-anchored, source-grounded research.' },
];

export const VALUES = [
  { icon: '🎯', title: 'Outcome-obsessed', body: 'We measure success in business outcomes, not slideware.' },
  { icon: '🔍', title: 'Observable by default', body: 'Every action is traced, measured, and explainable.' },
  { icon: '🛡️', title: 'Governed & safe', body: 'Human-in-the-loop control and zero-regression discipline.' },
  { icon: '🧩', title: 'Vendor-agnostic', body: 'Local-first models; the right tool for each job.' },
];
