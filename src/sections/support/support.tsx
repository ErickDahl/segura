import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { supportVariants } from './support.variants'
import supportImg from '@/assets/images/support/1.webp'

const competitors = [
  { id: 'cyberark', competitor: 'CyberArk', href: '/vs-cyberark' },
  { id: 'beyondtrust', competitor: 'BeyondTrust', href: '/vs-beyondtrust' },
  { id: 'delinea', competitor: 'Delinea', href: '/vs-delinea' },
  { id: 'arcon', competitor: 'Arcon', href: '/vs-arcon' },
]

const { root, wrapper, content, textCol, description, media, image, linksRow, linkItem } =
  supportVariants()

const Support = () => {
  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <div className={content()}>
          <div className={textCol()}>
            <Heading as="h2">Melhor Suporte do Mercado</Heading>
            <p className={description()}>
              Segura® é o provedor de PAM mais bem avaliado no Gartner Peer Insights por um motivo.
            </p>
            <p className={description()}>
              Nossos clientes nos dão a classificação mais alta de{' '}
              <b>4,9 no Gartner Peer Insights e 98%</b> em Recomendação.
            </p>
            <Link>Peça uma Demo ›</Link>
          </div>
          <div className={media()}>
            <img
              src={supportImg}
              alt="Comparativo de avaliações Gartner Peer Insights"
              className={image()}
            />
          </div>
        </div>
        <div className={linksRow()}>
          {competitors.map(({ id, competitor, href }) => (
            <a key={id} href={href} className={linkItem()}>
              <b>Segura®</b> vs. {competitor} »
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Support }
