import { Container } from '@/components/atoms/container/container'
import { Link } from '@/components/atoms/link/link'
import { StatCard } from '@/components/atoms/stat-card/stat-card'
import bgImage from '@/assets/images/testimonials/cover.webp'
import starsSrc from '@/assets/images/testimonials/1.svg'
import { testimonialsVariants } from './testimonials.variants'
import { Trans, useTranslation } from 'react-i18next'

const { root, overlay, wrapper, stars, mainQuote, secondaryQuote, author, statsRow } =
  testimonialsVariants()

const Testimonials = () => {
  const { t } = useTranslation()

  return (
    <section className={root()} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={overlay()} />
      <Container as="div" className={wrapper()}>
        <img src={starsSrc} alt={t('testimonials.starsAlt')} className={stars()} />
        <div className="flex flex-col gap-2">
          <p className={mainQuote()}>{t('testimonials.mainQuote')}</p>
          <p className={secondaryQuote()}>{t('testimonials.secondaryQuote')}</p>
          <span className={author()}>{t('testimonials.author')}</span>
        </div>
        <div className={statsRow()}>
          <StatCard value={t('testimonials.stat1Value')}>
            <Trans t={t} i18nKey="testimonials.stat1Text" components={{ bold: <b /> }} />
          </StatCard>
          <StatCard value={t('testimonials.stat2Value')}>
            <Trans t={t} i18nKey="testimonials.stat2Text" components={{ bold: <b /> }} />
          </StatCard>
        </div>
        <Link variant="brand-ghost-invert">{t('testimonials.cta')}</Link>
      </Container>
    </section>
  )
}

export { Testimonials }
