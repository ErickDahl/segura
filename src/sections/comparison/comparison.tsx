import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { comparisonVariants } from './comparison.variants'
import comparisonDesktop from '@/assets/images/comparison/1.png'
import comparisonMobile from '@/assets/images/comparison/1-mobile.gif'
import { Trans, useTranslation } from 'react-i18next'

const { root, wrapper, description, media, imageDesktop, imageMobile } = comparisonVariants()

const Comparison = () => {
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <Heading as="h2">{t('comparison.heading')}</Heading>
        <p className={description()}>
          <Trans t={t} i18nKey="comparison.description" components={{ bold: <b /> }} />
        </p>
        <div className={media()}>
          <img src={comparisonDesktop} alt={t('comparison.imageAlt')} className={imageDesktop()} />
          <img src={comparisonMobile} alt={t('comparison.imageAlt')} className={imageMobile()} />
        </div>
        <Link>{t('comparison.cta')}</Link>
      </Container>
    </section>
  )
}

export { Comparison }
