import { Container } from '@/components/atoms/container/container'
import { Link } from '@/components/atoms/link/link'
import { footerVariants } from './footer.variants'

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

const navColumns = [
  {
    id: 'servicos',
    title: 'Serviços',
    links: [
      { id: 'doc', label: 'Documentação', href: '/' },
      { id: 'centro', label: 'Centro de soluções', href: '/' },
      { id: 'treinamento', label: 'Treinamento e Certificação', href: '/' },
      { id: 'implantacao', label: 'Implantação', href: '/' },
      { id: 'suporte', label: 'Política de Suporte', href: '/' },
    ],
  },
  {
    id: 'recursos',
    title: 'Recursos',
    links: [
      { id: 'materiais', label: 'Materiais Ricos', href: '/' },
      { id: 'ebooks', label: 'eBooks', href: '/' },
      { id: 'docs-tecnicos', label: 'Documentos Técnicos', href: '/' },
      { id: 'folhas', label: 'Folhas de dados', href: '/' },
      { id: 'pam', label: 'PAM Maturity', href: '/' },
      { id: 'estudos', label: 'Estudos de Caso', href: '/' },
      { id: 'webinars', label: 'Webinars e Eventos', href: '/' },
    ],
  },
  {
    id: 'produtos',
    title: 'Produtos',
    links: [
      { id: 'solucoes', label: 'Soluções', href: '/' },
      { id: 'parceiro', label: 'Torne-se um parceiro', href: '/' },
      { id: 'casos', label: 'Casos de Uso', href: '/' },
    ],
  },
  {
    id: 'segura',
    title: 'Segura®',
    links: [
      { id: 'sobre', label: 'Sobre nós', href: '/' },
      { id: 'conquistas', label: 'Conquistas', href: '/' },
      { id: 'trabalhe', label: 'Trabalhe conosco', href: '/' },
      { id: 'operacoes', label: 'Operações', href: '/' },
      { id: 'termos', label: 'Termos de Uso', href: '/' },
      { id: 'privacidade', label: 'Política de Privacidade e Cookies', href: '/' },
      { id: 'seguranca', label: 'Política de Segurança da Informação', href: '/' },
      { id: 'denuncias', label: 'Canal de Denúncias', href: '/' },
    ],
  },
  {
    id: 'endereco',
    title: 'Endereço',
    links: [],
  },
]

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
  return (
    <footer className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className={topRow()}>
          <div className={connectCard()}>
            <h3 className={connectTitle()}>FIQUE CONECTADO</h3>
            <p className={connectDescription()}>
              Fique por dentro das melhores práticas de segurança, eventos e webinars futuros.
            </p>
            <Link variant="secondary-ghost" size="sm">
              Saiba como ›
            </Link>
          </div>
          <div className={navGrid()}>
            {navColumns.map(({ id, title, links }) => (
              <div key={id} className={navColumn()}>
                <h4 className={navTitle()}>{title}</h4>
                {id === 'endereco' ? (
                  <p className={navLink()}>
                    Rua Joaquim Antunes, 767. São Paulo — SP — Brasil <br /> <b>11 3069 3910</b>
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
            <p className={aiLabel()}>Pergunte para a IA o que torna a Segura® diferente</p>
            <div className={aiIconsClass()}>
              {aiIcons.map(({ id, src, alt, href }) => (
                <a key={id} href={href}>
                  <img src={src} alt={alt} className={aiIcon()} />
                </a>
              ))}
            </div>
            <p className={copyright()}>
              Copyright © 2026 Segura MT4 Tecnologia | Todos os direitos reservados.
            </p>
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
                Termos
              </a>
              <a href="/privacidade" className={legalLink()}>
                Privacidade
              </a>
              <a href="/cookies" className={legalLink()}>
                Cookies
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export { Footer }
