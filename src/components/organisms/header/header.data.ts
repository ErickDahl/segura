import { useTranslation } from 'react-i18next'

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

// ── Hook ─────────────────────────────────────────────────────────────

export function useHeaderData() {
  const { t } = useTranslation()

  const panelPlatform: NavPanelData = {
    items: [
      {
        id: 'privileged-access',
        title: t('panels.platform.items.privilegedAccess.title'),
        description: t('panels.platform.items.privilegedAccess.description'),
        href: '/',
      },
      {
        id: 'endpoint',
        title: t('panels.platform.items.endpoint.title'),
        description: t('panels.platform.items.endpoint.description'),
        href: '/',
      },
      {
        id: 'multi-cloud',
        title: t('panels.platform.items.multiCloud.title'),
        description: t('panels.platform.items.multiCloud.description'),
        href: '/',
      },
      {
        id: 'devops',
        title: t('panels.platform.items.devops.title'),
        description: t('panels.platform.items.devops.description'),
        href: '/',
      },
      {
        id: 'certificates',
        title: t('panels.platform.items.certificates.title'),
        description: t('panels.platform.items.certificates.description'),
        href: '/',
      },
      {
        id: 'remote-work',
        title: t('panels.platform.items.remoteWork.title'),
        description: t('panels.platform.items.remoteWork.description'),
        href: '/',
      },
      {
        id: 'personal-passwords',
        title: t('panels.platform.items.personalPasswords.title'),
        description: t('panels.platform.items.personalPasswords.description'),
        href: '/',
      },
      {
        id: 'infrastructure',
        title: t('panels.platform.items.infrastructure.title'),
        description: t('panels.platform.items.infrastructure.description'),
        href: '/',
      },
    ],
    banner: {
      title: t('panels.platform.banner.title'),
      description: t('panels.platform.banner.description'),
      ctaLabel: t('panels.platform.banner.ctaLabel'),
      ctaHref: '/',
    },
  }

  const panelSolutions: NavColumnsData = {
    columns: [
      {
        id: 'use-case-1',
        title: t('panels.solutions.columns.useCase.title'),
        links: [
          { id: 'audit', label: t('panels.solutions.columns.useCase.links.audit'), href: '/' },
          {
            id: 'data-theft',
            label: t('panels.solutions.columns.useCase.links.dataTheft'),
            href: '/',
          },
          { id: 'devops', label: t('panels.solutions.columns.useCase.links.devops'), href: '/' },
          {
            id: 'insider-threat',
            label: t('panels.solutions.columns.useCase.links.insiderThreat'),
            href: '/',
          },
          {
            id: 'remote-access',
            label: t('panels.solutions.columns.useCase.links.remoteAccess'),
            href: '/',
          },
          {
            id: 'session-recording',
            label: t('panels.solutions.columns.useCase.links.sessionRecording'),
            href: '/',
          },
          {
            id: 'privilege-abuse',
            label: t('panels.solutions.columns.useCase.links.privilegeAbuse'),
            href: '/',
          },
          {
            id: 'hardcoded-passwords',
            label: t('panels.solutions.columns.useCase.links.hardcodedPasswords'),
            href: '/',
          },
        ],
      },
      {
        id: 'use-case-2',
        title: t('panels.solutions.columns.solutionType.title'),
        links: [
          {
            id: 'password-reset',
            label: t('panels.solutions.columns.solutionType.links.passwordReset'),
            href: '/',
          },
          {
            id: 'cyber-insurance',
            label: t('panels.solutions.columns.solutionType.links.cyberInsurance'),
            href: '/',
          },
          {
            id: 'machine-identity',
            label: t('panels.solutions.columns.solutionType.links.machineIdentity'),
            href: '/',
          },
          { id: 'itdr', label: t('panels.solutions.columns.solutionType.links.itdr'), href: '/' },
        ],
      },
      {
        id: 'industry',
        title: t('panels.solutions.columns.industry.title'),
        links: [
          { id: 'energy', label: t('panels.solutions.columns.industry.links.energy'), href: '/' },
          {
            id: 'financial',
            label: t('panels.solutions.columns.industry.links.financial'),
            href: '/',
          },
          {
            id: 'government',
            label: t('panels.solutions.columns.industry.links.government'),
            href: '/',
          },
          {
            id: 'healthcare',
            label: t('panels.solutions.columns.industry.links.healthcare'),
            href: '/',
          },
          { id: 'legal', label: t('panels.solutions.columns.industry.links.legal'), href: '/' },
          { id: 'telecom', label: t('panels.solutions.columns.industry.links.telecom'), href: '/' },
          { id: 'retail', label: t('panels.solutions.columns.industry.links.retail'), href: '/' },
        ],
      },
      {
        id: 'certification',
        title: t('panels.solutions.columns.certification.title'),
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

  const panelServices: NavCardsData = {
    cards: [
      {
        id: 'deployment',
        title: t('panels.services.deployment.title'),
        description: t('panels.services.deployment.description'),
        ctaLabel: t('panels.services.deployment.ctaLabel'),
        ctaHref: '/',
      },
      {
        id: 'support',
        title: t('panels.services.support.title'),
        description: t('panels.services.support.description'),
        ctaLabel: t('panels.services.support.ctaLabel'),
        ctaHref: '/',
      },
      {
        id: 'training',
        title: t('panels.services.training.title'),
        description: t('panels.services.training.description'),
        ctaLabel: t('panels.services.training.ctaLabel'),
        ctaHref: '/',
      },
    ],
  }

  const panelPartners: NavPartnersData = {
    linkColumn: {
      id: 'partner-program',
      title: t('panels.partners.columnTitle'),
      links: [
        { id: 'about-program', label: t('panels.partners.links.aboutProgram'), href: '/' },
        { id: 'become-partner', label: t('panels.partners.links.becomePartner'), href: '/' },
        { id: 'azure', label: t('panels.partners.links.azure'), href: '/' },
        { id: 'linkedin', label: t('panels.partners.links.linkedin'), href: '/' },
      ],
    },
    ctaCard: {
      title: t('panels.partners.ctaCard.title'),
      description: t('panels.partners.ctaCard.description'),
      ctaLabel: t('panels.partners.ctaCard.ctaLabel'),
      ctaHref: '/',
    },
  }

  const panelCompany: NavColumnsData = {
    columns: [
      {
        id: 'about-us',
        title: t('panels.company.columns.aboutUs.title'),
        links: [
          {
            id: 'meet-segura',
            label: t('panels.company.columns.aboutUs.links.meetSegura'),
            href: '/',
          },
          { id: 'careers', label: t('panels.company.columns.aboutUs.links.careers'), href: '/' },
          { id: 'contact', label: t('panels.company.columns.aboutUs.links.contact'), href: '/' },
          {
            id: 'build-with-us',
            label: t('panels.company.columns.aboutUs.links.buildWithUs'),
            href: '/',
          },
        ],
      },
      {
        id: 'why-segura',
        title: t('panels.company.columns.whySegura.title'),
        links: [
          {
            id: 'advantage',
            label: t('panels.company.columns.whySegura.links.advantage'),
            href: '/',
          },
          { id: 'pricing', label: t('panels.company.columns.whySegura.links.pricing'), href: '/' },
          {
            id: 'trust-center',
            label: t('panels.company.columns.whySegura.links.trustCenter'),
            href: '/',
          },
          { id: 'awards', label: t('panels.company.columns.whySegura.links.awards'), href: '/' },
          {
            id: 'middle-east',
            label: t('panels.company.columns.whySegura.links.middleEast'),
            href: '/',
          },
          {
            id: 'jiujitciso',
            label: t('panels.company.columns.whySegura.links.jiujitciso'),
            href: '/',
          },
        ],
      },
      {
        id: 'news',
        title: t('panels.company.columns.news.title'),
        links: [
          { id: 'press', label: t('panels.company.columns.news.links.press'), href: '/' },
          { id: 'press-room', label: t('panels.company.columns.news.links.pressRoom'), href: '/' },
          {
            id: 'webinars-events',
            label: t('panels.company.columns.news.links.webinarsEvents'),
            href: '/',
          },
        ],
      },
      {
        id: 'coe',
        title: t('panels.company.columns.coe.title'),
        links: [
          { id: 'sao-paulo', label: t('panels.company.columns.coe.links.saoPaulo'), href: '/' },
          { id: 'riyadh', label: t('panels.company.columns.coe.links.riyadh'), href: '/' },
          { id: 'austin', label: t('panels.company.columns.coe.links.austin'), href: '/' },
          { id: 'katowice', label: t('panels.company.columns.coe.links.katowice'), href: '/' },
          {
            id: 'kuala-lumpur',
            label: t('panels.company.columns.coe.links.kualaLumpur'),
            href: '/',
          },
          { id: 'singapore', label: t('panels.company.columns.coe.links.singapore'), href: '/' },
          { id: 'manila', label: t('panels.company.columns.coe.links.manila'), href: '/' },
        ],
      },
    ],
  }

  const panelResources: NavColumnsData = {
    columns: [
      {
        id: 'product-info',
        title: t('panels.resources.columns.productInfo.title'),
        links: [
          {
            id: 'datasheets',
            label: t('panels.resources.columns.productInfo.links.datasheets'),
            href: '/',
            external: true,
          },
          {
            id: 'architecture',
            label: t('panels.resources.columns.productInfo.links.architecture'),
            href: '/',
          },
          {
            id: 'integrations',
            label: t('panels.resources.columns.productInfo.links.integrations'),
            href: '/',
          },
          {
            id: 'security',
            label: t('panels.resources.columns.productInfo.links.security'),
            href: '/',
          },
          {
            id: 'docs',
            label: t('panels.resources.columns.productInfo.links.docs'),
            href: '/',
            external: true,
          },
          {
            id: 'case-studies',
            label: t('panels.resources.columns.productInfo.links.caseStudies'),
            href: '/',
          },
        ],
      },
      {
        id: 'cyber-info',
        title: t('panels.resources.columns.cyberInfo.title'),
        links: [
          { id: 'blog', label: t('panels.resources.columns.cyberInfo.links.blog'), href: '/' },
          {
            id: 'pamaturity',
            label: t('panels.resources.columns.cyberInfo.links.pamaturity'),
            href: '/',
          },
          { id: 'pam-101', label: t('panels.resources.columns.cyberInfo.links.pam101'), href: '/' },
          {
            id: 'attack-surface',
            label: t('panels.resources.columns.cyberInfo.links.attackSurface'),
            href: '/',
          },
          {
            id: 'cloud-security',
            label: t('panels.resources.columns.cyberInfo.links.cloudSecurity'),
            href: '/',
          },
          {
            id: 'metrics',
            label: t('panels.resources.columns.cyberInfo.links.metrics'),
            href: '/',
          },
          {
            id: 'pam-cost',
            label: t('panels.resources.columns.cyberInfo.links.pamCost'),
            href: '/',
          },
          {
            id: 'identity-intelligence',
            label: t('panels.resources.columns.cyberInfo.links.identityIntelligence'),
            href: '/',
          },
        ],
      },
      {
        id: 'reports',
        title: t('panels.resources.columns.reports.title'),
        links: [
          {
            id: 'gartner-2025',
            label: t('panels.resources.columns.reports.links.gartner2025'),
            href: '/',
          },
          {
            id: 'softwarereviews',
            label: t('panels.resources.columns.reports.links.softwarereviews'),
            href: '/',
            external: true,
          },
          {
            id: 'kuppingercole',
            label: t('panels.resources.columns.reports.links.kuppingercole'),
            href: '/',
            external: true,
          },
          {
            id: 'gartner-2021',
            label: t('panels.resources.columns.reports.links.gartner2021'),
            href: '/',
          },
          {
            id: 'frost-sullivan',
            label: t('panels.resources.columns.reports.links.frostSullivan'),
            href: '/',
          },
        ],
      },
      {
        id: 'licensing',
        title: t('panels.resources.columns.licensing.title'),
        links: [
          { id: 'terms', label: t('panels.resources.columns.licensing.links.terms'), href: '/' },
          { id: 'eula', label: t('panels.resources.columns.licensing.links.eula'), href: '/' },
          {
            id: 'privacy-cookies',
            label: t('panels.resources.columns.licensing.links.privacyCookies'),
            href: '/',
          },
          {
            id: 'general-terms',
            label: t('panels.resources.columns.licensing.links.generalTerms'),
            href: '/',
          },
          {
            id: 'operations',
            label: t('panels.resources.columns.licensing.links.operations'),
            href: '/',
          },
        ],
      },
    ],
  }

  return {
    panelPlatform,
    panelSolutions,
    panelServices,
    panelPartners,
    panelCompany,
    panelResources,
  }
}
