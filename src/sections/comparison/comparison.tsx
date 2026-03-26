import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { comparisonVariants } from './comparison.variants'
import comparisonDesktop from '@/assets/images/comparison/1.png'
import comparisonMobile from '@/assets/images/comparison/1-mobile.gif'

const { root, wrapper, description, media, imageDesktop, imageMobile } = comparisonVariants()

const Comparison = () => {
  return (
    <section className={root()}>
      <Container as="div" layout="col" className={wrapper()}>
        <Heading as="h2">Por que mais equipes estão escolhendo o Segura®?</Heading>
        <p className={description()}>
          Ouvimos a mesma história repetidamente: implantações longas, recursos ausentes e
          ferramentas que nunca se encaixam perfeitamente. Ao contrário das soluções PAM antiquadas
          disponíveis no mercado,{' '}
          <b>O Segura® se encaixa em uma infraestrutura moderna sem atrasar você.</b>
        </p>
        <div className={media()}>
          <img
            src={comparisonDesktop}
            alt="Comparativo Segura vs concorrentes"
            className={imageDesktop()}
          />
          <img
            src={comparisonMobile}
            alt="Comparativo Segura vs concorrentes"
            className={imageMobile()}
          />
        </div>
        <Link>Veja a Segura® em ação ›</Link>
      </Container>
    </section>
  )
}

export { Comparison }
