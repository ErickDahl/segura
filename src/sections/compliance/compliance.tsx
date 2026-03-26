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
import { Trans, useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className={content()}>
          <div className={textCol()}>
            <Heading as="h2" color="invert">
              {t('compliance.heading')}
            </Heading>
            <p className={description()}>
              <Trans t={t} i18nKey="compliance.description" components={{ bold: <b /> }} />
            </p>
            <p className={tagline()}>{t('compliance.tagline')}</p>
          </div>
          <div className={media()}>
            <img src={complianceImg} alt={t('compliance.imageAlt')} className={image()} />
          </div>
        </div>
        <Link>{t('compliance.cta')}</Link>
        <div className={badgesSection()}>
          <p className={badgesLabel()}>{t('compliance.badgesLabel')}</p>
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
