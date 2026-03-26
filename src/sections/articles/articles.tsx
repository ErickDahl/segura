import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { articlesVariants } from './articles.variants'
import ptArticle1 from '@/assets/images/articles/pt-br/1.png'
import ptArticle2 from '@/assets/images/articles/pt-br/2.png'
import ptArticle3 from '@/assets/images/articles/pt-br/3.png'
import ptArticle4 from '@/assets/images/articles/pt-br/4.png'
import enArticle1 from '@/assets/images/articles/en-us/1.webp'
import enArticle2 from '@/assets/images/articles/en-us/2.png'
import enArticle3 from '@/assets/images/articles/en-us/3.webp'
import enArticle4 from '@/assets/images/articles/en-us/4.webp'
import { useTranslation } from 'react-i18next'

const articleSrcsByLang: Record<string, string[]> = {
  pt: [ptArticle1, ptArticle2, ptArticle3, ptArticle4],
  en: [enArticle1, enArticle2, enArticle3, enArticle4],
}

const articleHrefs = [
  '/blog/pam-guide',
  '/blog/cisos',
  '/blog/machine-identity',
  '/blog/locked-shields',
]
const articleAltKeys = ['pamGuide', 'cisos', 'machineIdentity', 'lockedShields'] as const

const { root, wrapper, description, grid, card, cardImage } = articlesVariants()

const Articles = () => {
  const { t, i18n } = useTranslation()

  const articleSrcs = articleSrcsByLang[i18n.language] ?? articleSrcsByLang['pt']

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
