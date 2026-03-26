import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { awardsVariants } from './awards.variants'
import badge1 from '@/assets/images/awards/1.png'
import badge2 from '@/assets/images/awards/2.webp'
import badge3 from '@/assets/images/awards/3.avif'
import badge4 from '@/assets/images/awards/4.avif'
import badge5 from '@/assets/images/awards/5.avif'
import badge6 from '@/assets/images/awards/6.avif'
import { Trans, useTranslation } from 'react-i18next'

const badges = [
  { id: 'gartner-customers', src: badge1, alt: 'Gartner Peer Insights Customers Choice 2026' },
  { id: 'gartner-mq', src: badge2, alt: 'Gartner Magic Quadrant' },
  { id: 'software-reviews', src: badge3, alt: 'Software Reviews Gold Medal 2023' },
  { id: 'cyber-security', src: badge4, alt: 'Cyber Security Excellence Awards Winner 2023' },
  { id: 'kuppingercole', src: badge5, alt: 'KuppingerCole Leadership Compass' },
  { id: 'g2-leader', src: badge6, alt: 'G2 Leader Fall 2023' },
]

const { root, content, leftCol, grid, badge, rightCol, quote, author } = awardsVariants()

const Awards = () => {
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container as="div">
        <div className={content()}>
          <div className={leftCol()}>
            <Heading as="h2">{t('awards.heading')}</Heading>
            <div className={grid()}>
              {badges.map(({ id, src, alt }) => (
                <img key={id} src={src} alt={alt} className={badge()} />
              ))}
            </div>
          </div>
          <div className={rightCol()}>
            <p className={quote()}>
              <Trans t={t} i18nKey="awards.quote1" components={{ bold: <b /> }} />
            </p>
            <p className={quote()}>
              <Trans t={t} i18nKey="awards.quote2" components={{ bold: <b /> }} />
            </p>
            <p className={quote()}>
              <Trans t={t} i18nKey="awards.quote3" components={{ bold: <b /> }} />
            </p>
            <span className={author()}>{t('awards.author')}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Awards }
