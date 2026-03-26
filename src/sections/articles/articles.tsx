import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { articlesVariants } from './articles.variants'
import article1 from '@/assets/images/articles/1.png'
import article2 from '@/assets/images/articles/2.png'
import article3 from '@/assets/images/articles/3.png'
import article4 from '@/assets/images/articles/4.png'
import { useTranslation } from 'react-i18next'

const articleSrcs = [article1, article2, article3, article4]
const articleHrefs = [
  '/blog/pam-guide',
  '/blog/cisos',
  '/blog/machine-identity',
  '/blog/locked-shields',
]
const articleAltKeys = ['pamGuide', 'cisos', 'machineIdentity', 'lockedShields'] as const

const { root, wrapper, description, grid, card, cardImage } = articlesVariants()

const Articles = () => {
  const { t } = useTranslation()

  const articles = articleAltKeys.map((key, i) => ({
    id: key,
    src: articleSrcs[i],
    href: articleHrefs[i],
    alt: t(`articles.items.${key}`),
  }))

  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className="flex flex-col items-center justify-center gap-2">
          <Heading as="h2">{t('articles.heading')}</Heading>
          <p className={description()}>{t('articles.description')}</p>
        </div>
        <div className={grid()}>
          {articles.map(({ id, src, href, alt }) => (
            <a key={id} href={href} className={card()}>
              <img src={src} alt={alt} className={cardImage()} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Articles }
