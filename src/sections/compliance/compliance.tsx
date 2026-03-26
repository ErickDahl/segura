import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import complianceImg from '@/assets/images/proportion/1.png'
import isoIcon from '@/assets/images/proportion/2.svg'
import pciIcon from '@/assets/images/proportion/3.svg'
import hipaaIcon from '@/assets/images/proportion/4.svg'
import gdprIcon from '@/assets/images/proportion/5.svg'
import soxIcon from '@/assets/images/proportion/6.svg'
import { complianceVariants } from './compliance.variants'

const badges = [
  { id: 'iso', icon: isoIcon, label: 'ISO 27001' },
  { id: 'pci', icon: pciIcon, label: 'PCI DSS' },
  { id: 'hipaa', icon: hipaaIcon, label: 'HIPAA' },
  { id: 'gdpr', icon: gdprIcon, label: 'GDPR' },
  { id: 'sox', icon: soxIcon, label: 'SOX' },
]

const {
  root,
  wrapper,
  content,
  textCol,
  description,
  tagline,
  media,
  image,
  badgesSection,
  badgesLabel,
  badgesRow,
  badgeIcon,
} = complianceVariants()

const Compliance = () => {
  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className={content()}>
          <div className={textCol()}>
            <Heading as="h2" color="invert">
              Auditorias sem medo: garanta conformidade em cibersegurança
            </Heading>
            <p className={description()}>
              Com{' '}
              <b>trilhas de auditoria automatizadas, rotação de senhas e gravação de sessões,</b> a
              Segura® PAM elimina as brechas de segurança que os órgãos reguladores mais fiscalizam.
            </p>
            <p className={tagline()}>Não se desespere. Prepare-se:</p>
          </div>
          <div className={media()}>
            <img src={complianceImg} alt="Profissional de segurança" className={image()} />
          </div>
        </div>
        <Link>Fale com um Especialista ›</Link>
        <div className={badgesSection()}>
          <p className={badgesLabel()}>Perfeita para auditorias de:</p>
          <div className={badgesRow()}>
            {badges.map(({ id, icon, label }) => (
              <Link
                key={id}
                variant="brand-ghost-invert"
                className="group w-full max-w-none justify-center"
              >
                <img src={icon} alt="" className={badgeIcon()} />
                {label} ›
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Compliance }
