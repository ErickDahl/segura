import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { articlesVariants } from './articles.variants'
import article1 from '@/assets/images/articles/1.png'
import article2 from '@/assets/images/articles/2.png'
import article3 from '@/assets/images/articles/3.png'
import article4 from '@/assets/images/articles/4.png'

const articles = [
  {
    id: 'pam-guide',
    src: article1,
    href: '/blog/pam-guide',
    alt: 'Gerenciamento de Acesso Privilegiado: Um Guia Completo',
  },
  {
    id: 'cisos',
    src: article2,
    href: '/blog/cisos',
    alt: 'Cibersegurança como Impulsionadora de Negócios',
  },
  {
    id: 'machine-identity',
    src: article3,
    href: '/blog/machine-identity',
    alt: 'Identidade de Máquina e Identidade Não-Humana na Segurança Cibernética',
  },
  {
    id: 'locked-shields',
    src: article4,
    href: '/blog/locked-shields',
    alt: 'O maior exercício de defesa cibernética do mundo: lições do Locked Shields 2025',
  },
]

const { root, wrapper, description, grid, card, cardImage } = articlesVariants()

const Articles = () => {
  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className="flex flex-col items-center justify-center gap-2">
          <Heading as="h2">Artigos em Destaque</Heading>
          <p className={description()}>
            Acesse o nosso blog e acompanhe as últimas tendências, melhores práticas e atualizações
            sobre estratégias e tecnologias de segurança.
          </p>
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
