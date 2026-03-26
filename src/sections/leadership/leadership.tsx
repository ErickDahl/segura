import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { leadershipVariants } from './leadership.variants'
import leadershipImg from '@/assets/images/leadership/1.png'
import { useTranslation } from 'react-i18next'

const { root, content, media, image, textCol, description } = leadershipVariants()

const Leadership = () => {
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container as="div">
        <div className={content()}>
          <div className={media()}>
            <img src={leadershipImg} alt={t('leadership.imageAlt')} className={image()} />
          </div>
          <div className={textCol()}>
            <Heading as="h2">{t('leadership.heading')}</Heading>
            <p className={description()}>{t('leadership.description1')}</p>
            <p className={description()}>{t('leadership.description2')}</p>
            <Link variant="secondary">{t('leadership.cta')}</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Leadership }
