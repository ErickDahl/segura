import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { supportVariants } from './support.variants'
import supportImg from '@/assets/images/support/1.webp'
import { Trans, useTranslation } from 'react-i18next'

const competitors = [
  { id: 'cyberark', competitor: 'CyberArk', href: '/vs-cyberark' },
  { id: 'beyondtrust', competitor: 'BeyondTrust', href: '/vs-beyondtrust' },
  { id: 'delinea', competitor: 'Delinea', href: '/vs-delinea' },
  { id: 'arcon', competitor: 'Arcon', href: '/vs-arcon' },
]

const { root, wrapper, content, textCol, description, media, image, linksRow, linkItem } =
  supportVariants()

const Support = () => {
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className={content()}>
          <div className={textCol()}>
            <Heading as="h2">{t('support.heading')}</Heading>
            <p className={description()}>{t('support.description1')}</p>
            <p className={description()}>
              <Trans t={t} i18nKey="support.description2" components={{ bold: <b /> }} />
            </p>
            <Link>{t('support.cta')}</Link>
          </div>
          <div className={media()}>
            <img src={supportImg} alt={t('support.imageAlt')} className={image()} />
          </div>
        </div>
        <div className={linksRow()}>
          {competitors.map(({ id, competitor, href }) => (
            <a key={id} href={href} className={linkItem()}>
              <b>Segura®</b> {t('support.vsLabel')} {competitor} »
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Support }
