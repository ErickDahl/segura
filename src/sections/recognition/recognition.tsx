import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { recognitionVariants } from './recognition.variants'
import regonitionImg from '@/assets/images/recognition/1.png'
import check from '@/assets/images/recognition/check.svg'
import { useTranslation } from 'react-i18next'

const { root, content, textCol, subtitle, listLabel, list, listItem, checkIcon, media, image } =
  recognitionVariants()

const Recognition = () => {
  const { t } = useTranslation()

  const insights = [
    { id: 'share', text: t('recognition.insights.share') },
    { id: 'reduce', text: t('recognition.insights.reduce') },
    { id: 'choose', text: t('recognition.insights.choose') },
  ]

  return (
    <section className={root()}>
      <Container as="div">
        <div className={content()}>
          <div className={textCol()}>
            <Heading as="h2" color="invert">
              {t('recognition.heading')}
            </Heading>
            <p className={subtitle()}>{t('recognition.subtitle')}</p>
            <p className={listLabel()}>{t('recognition.listLabel')}</p>
            <ul className={list()}>
              {insights.map(({ id, text }) => (
                <li key={id} className={listItem()}>
                  <img src={check} alt="" className={checkIcon()} />
                  {text}
                </li>
              ))}
            </ul>
            <Link variant="brand">{t('recognition.cta')}</Link>
          </div>
          <div className={media()}>
            <img src={regonitionImg} alt="Gartner Magic Quadrant 2025" className={image()} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Recognition }
