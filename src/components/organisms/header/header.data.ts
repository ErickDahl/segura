export type NavPanelItem = {
  id: string
  title: string
  description: string
  href: string
}

export type NavPanelBanner = {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export type NavPanelData = {
  items: NavPanelItem[]
  banner?: NavPanelBanner
}

export const panelPlataforma: NavPanelData = {
  items: [
    {
      id: 'acesso-privilegiado',
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
      id: 'certificados',
      title: 'Gestão de Certificados',
      description: 'Gestão de ciclo de vida completo de certificados, com automação e publicação.',
      href: '/',
    },
    {
      id: 'trabalho-remoto',
      title: 'Trabalho Remoto seguro',
      description:
        'Acesso remoto sem VPN e com nível de acesso detalhado para seus colaboradores, fornecedores e terceiros.',
      href: '/',
    },
    {
      id: 'senhas-pessoais',
      title: 'Gerenciador de Senhas Pessoais',
      description: 'Armazene com segurança suas senhas pessoais e dados sensíveis.',
      href: '/',
    },
    {
      id: 'infraestrutura',
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
