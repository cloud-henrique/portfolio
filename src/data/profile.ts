export const profile = {
  name: 'Claudio Henrique',
  displayName: 'Cláudio Henrique',
  role: 'Fullstack Developer',
  email: '00claudio.henrique@gmail.com',
  github: 'https://github.com/cloud-henrique',
  linkedin: 'https://linkedin.com/in/cloud-henrique',
  twobirubes: 'https://twobirubes.com.br',
}

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['Angular', 'Angular Material', 'TypeScript', 'Next.js', 'React'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'PHP', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Dados',
    items: ['MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Infraestrutura e automação',
    items: ['Docker', 'Linux/VPS', 'Coolify', 'n8n'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'SDD', 'Claude Code', 'Codex', 'documentação técnica'],
  },
]

export const cases = [
  {
    title: 'Twobirubes',
    subtitle: 'Cardápio digital e painel administrativo',
    description:
      'Aplicação fullstack para negócio local de salgados artesanais, com cardápio público e painel administrativo para gestão de produtos.',
    role: 'Desenvolvimento completo da aplicação no contexto da Pulsatrix Apps.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'shadcn/ui', 'Vercel'],
    href: profile.twobirubes,
    status: 'Case público',
    image: {
      src: '/static/img/twobirubes.png',
      alt: 'Preview do cardápio digital Twobirubes',
    },
  },
  {
    title: 'Plataforma de gestão de cuidados',
    subtitle: 'Healthtech',
    description:
      'Atuação na evolução e sustentação técnica de uma plataforma web para gestão de cuidados com idosos, envolvendo frontend, backend, banco de dados, integrações, automações e deploy.',
    role: 'Frontend com Angular, backend com Laravel, banco MySQL, integrações com WhatsApp Business/Cloud API, automações e manutenção em ambiente VPS/Docker.',
    stack: ['Angular', 'Angular Material', 'Laravel', 'PHP', 'MySQL', 'Docker', 'VPS/Linux', 'n8n'],
    status: 'Case profissional descritivo',
  },
  {
    title: 'OpsBoard',
    subtitle: 'Painel operacional fullstack',
    description:
      'Projeto demonstrativo em desenvolvimento para consolidar práticas de produto, API REST, autenticação, permissões, dashboard, documentação técnica e deploy com Docker.',
    role: 'Direção técnica voltada a produto, documentação e manutenção real.',
    stack: ['Angular', 'Laravel', 'PostgreSQL/MySQL', 'Docker'],
    status: 'Em desenvolvimento',
  },
]

export const experiences = [
  {
    title: 'Fullstack Developer',
    company: 'Cia Cuidadores',
    period: 'dez/2024 — atualmente',
    description:
      'Responsável pela evolução, manutenção e sustentação técnica de uma plataforma web para gestão de cuidados com idosos, atuando em frontend, backend, banco de dados, infraestrutura, integrações e automação de processos.',
    highlights: [
      'interfaces web com Angular, Angular Material e TypeScript',
      'APIs REST, regras de negócio e rotinas backend com Laravel e PHP',
      'manutenção e análise de dados em MySQL',
      'integrações com WhatsApp Business/Cloud API',
      'deploy e manutenção em VPS/Linux com Docker',
      'automações com n8n',
      'refinamento de demandas com stakeholders não técnicos',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Cia Cuidadores',
    period: 'mar/2024 — dez/2024',
    description:
      'Atuação focada no desenvolvimento e manutenção do frontend da plataforma, com Angular, Angular Material e TypeScript.',
    highlights: [
      'criação e manutenção de telas administrativas e fluxos operacionais',
      'consumo de APIs REST',
      'correção de bugs, ajustes de usabilidade e melhorias de responsividade',
      'colaboração direta com a equipe operacional para entendimento das demandas',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Guiavet',
    period: 'ago/2022 — jun/2023',
    description:
      'Desenvolvimento e manutenção de funcionalidades em plataformas web e mobile para uma startup focada em saúde e bem-estar de animais de estimação.',
    stack: 'React • React Native • Django',
  },
  {
    title: 'Mobile Developer',
    company: 'Mereo',
    period: 'set/2021 — ago/2022',
    description:
      'Desenvolvimento de funcionalidades mobile em React Native e TypeScript para uma HR Tech com plataforma de gestão de pessoas e organizações.',
    highlight: 'Implementação de módulo de Matriz de Desempenho e Potencial (Nine Box).',
  },
  {
    title: 'Desenvolvedor',
    company: 'Bigou Delivery',
    period: 'fev/2021 — set/2021',
    description:
      'Desenvolvimento e manutenção de plataformas web e mobile para startup de delivery, com atuação em Next.js, React, React Native e Vue.',
  },
]

export const workflowSteps = [
  {
    title: 'Especificação antes de código',
    description:
      'Uso SDD (spec-driven development): antes de implementar, escrevo uma spec técnica. Alinho escopo com stakeholders, evito retrabalho e gero documentação útil.',
  },
  {
    title: 'Implementação com revisão contínua',
    description:
      'Código legível, manutenível e seguro. Revisão contínua para garantir qualidade, clareza e aderência à especificação.',
  },
  {
    title: 'Validação e evolução incremental',
    description:
      'Testes manuais, ajustes de performance, melhoria contínua. Foco em manutenção real preventiva.',
  },
]
