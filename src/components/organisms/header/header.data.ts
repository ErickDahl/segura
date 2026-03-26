// ── Types ────────────────────────────────────────────────────────────

export type NavPanelItem = {
  id: string
  title: string
  description: string
  href: string
}

export type NavBanner = {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export type NavPanelData = {
  items: NavPanelItem[]
  banner?: NavBanner
}

export type NavColumnLink = {
  id: string
  label: string
  href: string
  external?: boolean
}

export type NavColumn = {
  id: string
  title: string
  links: NavColumnLink[]
}

export type NavColumnsData = {
  columns: NavColumn[]
  banner?: NavBanner
}

export type NavCard = {
  id: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export type NavCardsData = {
  cards: NavCard[]
}

export type NavPartnersData = {
  linkColumn: NavColumn
  ctaCard: {
    title: string
    description: string
    ctaLabel: string
    ctaHref: string
  }
}

// ── Platform ────────────────────────────────────────────────────────

export const panelPlatform: NavPanelData = {
  items: [
    {
      id: 'privileged-access',
      title: 'Acesso Privilegiado Seguro',
      description: 'Descubra, gerencie, proteja e audite contas e sessões.',
      href: '/',
    },
    {
      id: 'endpoint',
      title: 'Proteção de Endpoint & Dispositivos',
      description: 'Acesso Just In Time, gestão e elevação de privilégios sob demanda.',
      href: '/',
    },
    {
      id: 'multi-cloud',
      title: 'Segurança de Identidades Multi-Cloud',
      description: 'Acesso seguro em consoles e serviços de múltiplos ambientes em nuvem.',
      href: '/',
    },
    {
      id: 'devops',
      title: 'Gerenciamento de segredos de DevOps',
      description:
        'Gestão de secrets para aplicações, bancos de dados, ferramentas CI/CD e serviços.',
      href: '/',
    },
    {
      id: 'certificates',
      title: 'Gestão de Certificados',
      description: 'Gestão de ciclo de vida completo de certificados, com automação e publicação.',
      href: '/',
    },
    {
      id: 'remote-work',
      title: 'Trabalho Remoto seguro',
      description:
        'Acesso remoto sem VPN e com nível de acesso detalhado para seus colaboradores, fornecedores e terceiros.',
      href: '/',
    },
    {
      id: 'personal-passwords',
      title: 'Gerenciador de Senhas Pessoais',
      description: 'Armazene com segurança suas senhas pessoais e dados sensíveis.',
      href: '/',
    },
    {
      id: 'infrastructure',
      title: 'Infraestrutura Privilegiada',
      description: 'Infraestrutura ativa, segura, de alta disponibilidade e escalável.',
      href: '/',
    },
  ],
  banner: {
    title: 'Plataforma 360°',
    description:
      'Uma plataforma completa, que garante as melhores práticas de Privilégio Mínimo e melhora a postura de segurança em toda a sua organização com o menor custo de propriedade total e implementação mais rápida do mercado.',
    ctaLabel: 'Explore Nossos Produtos',
    ctaHref: '/',
  },
}

// ── Solutions ───────────────────────────────────────────────────────

export const panelSolutions: NavColumnsData = {
  columns: [
    {
      id: 'use-case-1',
      title: 'Por Tipo de Uso',
      links: [
        { id: 'audit', label: 'Auditoria e Compliance', href: '/' },
        { id: 'data-theft', label: 'Prevenção a Roubo de Dados', href: '/' },
        { id: 'devops', label: 'DevOps', href: '/' },
        { id: 'insider-threat', label: 'Eliminação de Ameaça Interna', href: '/' },
        { id: 'remote-access', label: 'Acesso Remoto e Terceiros', href: '/' },
        { id: 'session-recording', label: 'Gravação de Acesso Privilegiado', href: '/' },
        { id: 'privilege-abuse', label: 'Abuso de Privilégios', href: '/' },
        { id: 'hardcoded-passwords', label: 'Senhas Hardcoded', href: '/' },
      ],
    },
    {
      id: 'use-case-2',
      title: 'Por Tipo de Solução',
      links: [
        { id: 'password-reset', label: 'Redefinição de Senhas', href: '/' },
        { id: 'cyber-insurance', label: 'Seguro Cibernético', href: '/' },
        { id: 'machine-identity', label: 'Identidade de Máquina', href: '/' },
        {
          id: 'itdr',
          label: 'Detecção e Resposta a Ameaças de Identidade (ITDR)',
          href: '/',
        },
      ],
    },
    {
      id: 'industry',
      title: 'Por Indústria',
      links: [
        { id: 'energy', label: 'Energia e Infraestrutura', href: '/' },
        { id: 'financial', label: 'Financeira', href: '/' },
        { id: 'government', label: 'Governamental', href: '/' },
        { id: 'healthcare', label: 'Saúde', href: '/' },
        { id: 'legal', label: 'Jurídico', href: '/' },
        { id: 'telecom', label: 'Telecomunicações', href: '/' },
        { id: 'retail', label: 'Varejo', href: '/' },
      ],
    },
    {
      id: 'certification',
      title: 'Por Certificação',
      links: [
        { id: 'pci-dss', label: 'PCI DSS', href: '/' },
        { id: 'sox', label: 'SOX', href: '/' },
        { id: 'iso-27001', label: 'ISO 27001', href: '/' },
        { id: 'hipaa', label: 'HIPAA', href: '/' },
        { id: 'nist', label: 'NIST', href: '/' },
        { id: 'lgpd', label: 'LGPD', href: '/' },
        { id: 'iso-62443', label: 'ISO | 62443 | 4.0', href: '/' },
        { id: 'sama', label: 'SAMA', href: '/' },
        { id: 'ksa-nca-ntc', label: 'KSA | NCA | NTC', href: '/' },
      ],
    },
  ],
}

// ── Services ────────────────────────────────────────────────────────

export const panelServices: NavCardsData = {
  cards: [
    {
      id: 'deployment',
      title: 'Implantação',
      description:
        'Nós e nossos parceiros oferecemos serviços profissionais para a implementação de nossas soluções, incluindo configuração inicial, customização e consultoria.',
      ctaLabel: 'Veja Implementação',
      ctaHref: '/',
    },
    {
      id: 'support',
      title: 'Suporte',
      description:
        'Oferecemos o melhor suporte do mercado e em português para todos os nossos clientes. Saiba mais sobre nossos serviços, recursos e como contatar nosso time aqui.',
      ctaLabel: 'Acesse a Central de Suporte',
      ctaHref: '/',
    },
    {
      id: 'training',
      title: 'Treinamento e Certificação',
      description:
        'Acesse guias, documentação e vídeos para entender melhor sobre nossos produtos no nosso portal de e-learning.',
      ctaLabel: 'Veja Treinamentos & Certificados',
      ctaHref: '/',
    },
  ],
}

// ── Partners ────────────────────────────────────────────────────────

export const panelPartners: NavPartnersData = {
  linkColumn: {
    id: 'partner-program',
    title: 'Programa de Parceria Affinity',
    links: [
      { id: 'about-program', label: 'Sobre o Programa', href: '/' },
      { id: 'become-partner', label: 'Torne-se um Parceiro', href: '/' },
      { id: 'azure', label: 'Segura® na Azure', href: '/' },
      { id: 'linkedin', label: 'Grupo Parceiros Segura® no LinkedIn', href: '/' },
    ],
  },
  ctaCard: {
    title: 'Veja Nossos Parceiros',
    description:
      'Trabalhamos com parceiros em todo o mundo para oferecer nossa solução líder à sua organização.',
    ctaLabel: 'Encontre um Parceiro ›',
    ctaHref: '/',
  },
}

// ── Company ─────────────────────────────────────────────────────────

export const panelCompany: NavColumnsData = {
  columns: [
    {
      id: 'about-us',
      title: 'Sobre nós',
      links: [
        { id: 'meet-segura', label: 'Conheça a Segura®', href: '/' },
        { id: 'careers', label: 'Carreiras', href: '/' },
        { id: 'contact', label: 'Contato', href: '/' },
        { id: 'build-with-us', label: 'Construa Conosco', href: '/' },
      ],
    },
    {
      id: 'why-segura',
      title: 'Por que Segura®',
      links: [
        { id: 'advantage', label: 'A vantagem da Segura®', href: '/' },
        { id: 'pricing', label: 'Preços', href: '/' },
        { id: 'trust-center', label: 'Trust Center', href: '/' },
        { id: 'awards', label: 'Prêmios & Relatórios', href: '/' },
        { id: 'middle-east', label: 'Segura® no Oriente Médio', href: '/' },
        { id: 'jiujitciso', label: 'Segura@ JiuJitCISO', href: '/' },
      ],
    },
    {
      id: 'news',
      title: 'Notícias',
      links: [
        { id: 'press', label: 'Imprensa', href: '/' },
        { id: 'press-room', label: 'Sala de imprensa', href: '/' },
        { id: 'webinars-events', label: 'Webinars e Eventos', href: '/' },
      ],
    },
    {
      id: 'coe',
      title: 'Centros de Excelência',
      links: [
        { id: 'sao-paulo', label: 'São Paulo Headquarter', href: '/' },
        { id: 'riyadh', label: 'Riyadh', href: '/' },
        { id: 'austin', label: 'Austin - EM BREVE!', href: '/' },
        { id: 'katowice', label: 'Katowice CoE', href: '/' },
        { id: 'kuala-lumpur', label: 'Kuala Lumpur - EM BREVE!', href: '/' },
        { id: 'singapore', label: 'Singapura - EM BREVE!', href: '/' },
        { id: 'manila', label: 'Manila - EM BREVE!', href: '/' },
      ],
    },
  ],
}

// ── Resources ───────────────────────────────────────────────────────

export const panelResources: NavColumnsData = {
  columns: [
    {
      id: 'product-info',
      title: 'Informações do Produto',
      links: [
        { id: 'datasheets', label: 'Datasheets', href: '/', external: true },
        { id: 'architecture', label: 'Arquitetura', href: '/' },
        { id: 'integrations', label: 'Integrações', href: '/' },
        { id: 'security', label: 'Segurança', href: '/' },
        { id: 'docs', label: 'Documentação', href: '/', external: true },
        { id: 'case-studies', label: 'Cases de Clientes', href: '/' },
      ],
    },
    {
      id: 'cyber-info',
      title: 'Informações sobre Cibersegurança',
      links: [
        { id: 'blog', label: 'Blog', href: '/' },
        { id: 'pamaturity', label: 'PAMaturity', href: '/' },
        { id: 'pam-101', label: 'Gestão de Acesso Privilegiado 101', href: '/' },
        {
          id: 'attack-surface',
          label: 'Guia para Gestão de Superfície de Ataque',
          href: '/',
        },
        {
          id: 'cloud-security',
          label: 'Segurança em Nuvem: 5 Motivos para se preocupar',
          href: '/',
        },
        { id: 'metrics', label: '16 Métricas para Proteção Cibernética', href: '/' },
        { id: 'pam-cost', label: 'Quanto Custa Implementar PAM', href: '/' },
        {
          id: 'identity-intelligence',
          label: 'Inteligência em Segurança de Identidade',
          href: '/',
        },
      ],
    },
    {
      id: 'reports',
      title: 'Relatórios',
      links: [
        { id: 'gartner-2025', label: 'Relatório Gartner Magic Quadrant 2025', href: '/' },
        {
          id: 'softwarereviews',
          label: 'SoftwareReviews Data Quadrant Report Privileged Access Management 2024',
          href: '/',
          external: true,
        },
        {
          id: 'kuppingercole',
          label: 'KuppingerCole 2023 Leadership Compass Report for Privileged Access Management',
          href: '/',
          external: true,
        },
        {
          id: 'gartner-2021',
          label: 'Gartner Magic Quadrant for PAM 2021 Report',
          href: '/',
        },
        {
          id: 'frost-sullivan',
          label: '2022 Frost & Sullivan Customer Value Leadership Award',
          href: '/',
        },
      ],
    },
    {
      id: 'licensing',
      title: 'Licenciamento e Jurídico',
      links: [
        { id: 'terms', label: 'Termos de Uso', href: '/' },
        { id: 'eula', label: 'Contrato de Licença de Usuário Final (EULA)', href: '/' },
        { id: 'privacy-cookies', label: 'Política de Privacidade e Cookies', href: '/' },
        { id: 'general-terms', label: 'Termos e Condições Gerais', href: '/' },
        { id: 'operations', label: 'Operações', href: '/' },
      ],
    },
  ],
}
