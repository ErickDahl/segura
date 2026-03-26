import { Container } from '@/components/atoms/container/container'
import { Link } from '@/components/atoms/link/link'
import { footerVariants } from './footer.variants'
import { useTranslation } from 'react-i18next'

import footerLogo from '@/assets/images/footer/1.png'
import aiIcon1 from '@/assets/images/footer/2.svg'
import aiIcon2 from '@/assets/images/footer/3.svg'
import aiIcon3 from '@/assets/images/footer/4.svg'
import aiIcon4 from '@/assets/images/footer/5.svg'
import aiIcon5 from '@/assets/images/footer/6.svg'
import socialLinkedin from '@/assets/images/footer/7.svg'
import socialX from '@/assets/images/footer/8.svg'
import socialFacebook from '@/assets/images/footer/9.svg'
import socialInstagram from '@/assets/images/footer/10.svg'
import socialYoutube from '@/assets/images/footer/11.svg'
import socialWhatsapp from '@/assets/images/footer/12.svg'

const aiIcons = [
  { id: 'chatgpt', src: aiIcon1, alt: 'ChatGPT', href: '/' },
  { id: 'perplexity', src: aiIcon2, alt: 'Perplexity', href: '/' },
  { id: 'gemini', src: aiIcon3, alt: 'Gemini', href: '/' },
  { id: 'ai-star', src: aiIcon4, alt: 'AI', href: '/' },
  { id: 'claude', src: aiIcon5, alt: 'Claude', href: '/' },
]

const socialLinks = [
  { id: 'linkedin', src: socialLinkedin, alt: 'LinkedIn', href: '/' },
  { id: 'x', src: socialX, alt: 'X', href: '/' },
  { id: 'facebook', src: socialFacebook, alt: 'Facebook', href: '/' },
  { id: 'instagram', src: socialInstagram, alt: 'Instagram', href: '/' },
  { id: 'youtube', src: socialYoutube, alt: 'YouTube', href: '/' },
  { id: 'whatsapp', src: socialWhatsapp, alt: 'WhatsApp', href: '/' },
]

const {
  root,
  wrapper,
  topRow,
  connectCard,
  connectTitle,
  connectDescription,
  navGrid,
  navColumn,
  navTitle,
  navLink,
  logo,
  bottomBar,
  bottomContent,
  leftSection,
  aiLabel,
  aiIcons: aiIconsClass,
  aiIcon,
  copyright,
  rightSection,
  socialIcons,
  socialIcon,
  legalLinks,
  legalLink,
} = footerVariants()

const Footer = () => {
  const { t } = useTranslation()

  const navColumns = [
    {
      id: 'services',
      title: t('footer.navColumns.services.title'),
      links: [
        { id: 'doc', label: t('footer.navColumns.services.links.documentation'), href: '/' },
        { id: 'centro', label: t('footer.navColumns.services.links.solutionCenter'), href: '/' },
        { id: 'treinamento', label: t('footer.navColumns.services.links.training'), href: '/' },
        { id: 'implantacao', label: t('footer.navColumns.services.links.deployment'), href: '/' },
        { id: 'suporte', label: t('footer.navColumns.services.links.supportPolicy'), href: '/' },
      ],
    },
    {
      id: 'resources',
      title: t('footer.navColumns.resources.title'),
      links: [
        { id: 'materiais', label: t('footer.navColumns.resources.links.richMaterials'), href: '/' },
        { id: 'ebooks', label: t('footer.navColumns.resources.links.ebooks'), href: '/' },
        {
          id: 'docs-tecnicos',
          label: t('footer.navColumns.resources.links.technicalDocs'),
          href: '/',
        },
        { id: 'folhas', label: t('footer.navColumns.resources.links.datasheets'), href: '/' },
        { id: 'pam', label: t('footer.navColumns.resources.links.pamMaturity'), href: '/' },
        { id: 'estudos', label: t('footer.navColumns.resources.links.caseStudies'), href: '/' },
        { id: 'webinars', label: t('footer.navColumns.resources.links.webinarsEvents'), href: '/' },
      ],
    },
    {
      id: 'products',
      title: t('footer.navColumns.products.title'),
      links: [
        { id: 'solucoes', label: t('footer.navColumns.products.links.solutions'), href: '/' },
        { id: 'parceiro', label: t('footer.navColumns.products.links.becomePartner'), href: '/' },
        { id: 'casos', label: t('footer.navColumns.products.links.useCases'), href: '/' },
      ],
    },
    {
      id: 'segura',
      title: t('footer.navColumns.segura.title'),
      links: [
        { id: 'sobre', label: t('footer.navColumns.segura.links.aboutUs'), href: '/' },
        { id: 'conquistas', label: t('footer.navColumns.segura.links.achievements'), href: '/' },
        { id: 'trabalhe', label: t('footer.navColumns.segura.links.workWithUs'), href: '/' },
        { id: 'operacoes', label: t('footer.navColumns.segura.links.operations'), href: '/' },
        { id: 'termos', label: t('footer.navColumns.segura.links.termsOfUse'), href: '/' },
        { id: 'privacidade', label: t('footer.navColumns.segura.links.privacyPolicy'), href: '/' },
        { id: 'seguranca', label: t('footer.navColumns.segura.links.securityPolicy'), href: '/' },
        { id: 'denuncias', label: t('footer.navColumns.segura.links.whistleblower'), href: '/' },
      ],
    },
    {
      id: 'address',
      title: t('footer.navColumns.address.title'),
      links: [],
    },
  ]

  return (
    <footer className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className={topRow()}>
          <div className={connectCard()}>
            <h3 className={connectTitle()}>{t('footer.connectTitle')}</h3>
            <p className={connectDescription()}>{t('footer.connectDescription')}</p>
            <Link variant="secondary-ghost" size="sm">
              {t('footer.connectCta')}
            </Link>
          </div>
          <div className={navGrid()}>
            {navColumns.map(({ id, title, links }) => (
              <div key={id} className={navColumn()}>
                <h4 className={navTitle()}>{title}</h4>
                {id === 'address' ? (
                  <p className={navLink()}>
                    {t('footer.navColumns.address.text')} <br /> <b>11 3069 3910</b>
                  </p>
                ) : (
                  links.map(({ id: linkId, label, href }) => (
                    <a key={linkId} href={href} className={navLink()}>
                      {label}
                    </a>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
        <img src={footerLogo} alt="Segura - Futureproof Identity Security" className={logo()} />
      </Container>
      <div className={bottomBar()}>
        <Container as="div" className={bottomContent()}>
          <div className={leftSection()}>
            <p className={aiLabel()}>{t('footer.aiLabel')}</p>
            <div className={aiIconsClass()}>
              {aiIcons.map(({ id, src, alt, href }) => (
                <a key={id} href={href}>
                  <img src={src} alt={alt} className={aiIcon()} />
                </a>
              ))}
            </div>
            <p className={copyright()}>{t('footer.copyright')}</p>
          </div>
          <div className={rightSection()}>
            <div className={socialIcons()}>
              {socialLinks.map(({ id, src, alt, href }) => (
                <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={alt} className={socialIcon()} />
                </a>
              ))}
            </div>
            <div className={legalLinks()}>
              <a href="/termos" className={legalLink()}>
                {t('footer.legal.terms')}
              </a>
              <a href="/privacidade" className={legalLink()}>
                {t('footer.legal.privacy')}
              </a>
              <a href="/cookies" className={legalLink()}>
                {t('footer.legal.cookies')}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export { Footer }
