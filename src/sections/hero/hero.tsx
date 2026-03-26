import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { Container } from '@/components/atoms/container/container'
import bgImage from '@/assets/images/hero/section_1.jpg'
import riverwoodLogo from '@/assets/images/hero/riverwood.png'
import { heroVariants } from './hero.variants'

const {
  root,
  overlay,
  wrapper,
  leftCol,
  headingNormal,
  headingItalic,
  description,
  highlight,
  logo,
  actions,
  rightCol,
  statText,
} = heroVariants()

const Hero = () => {
  return (
    <section className={root()} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={overlay()} />
      <Container as="div" className={wrapper()}>
        <div className={leftCol()}>
          <Heading as="h1" size="lg" color="invert">
            <span className={headingNormal()}>Segura® capta</span>
            <em className={headingItalic()}>
              {' '}
              rodada <br />
              de investimento
            </em>
            <span className={headingNormal()}> da Riverwood Capital</span>
          </Heading>
          <p className={description()}>
            Venture capital do Vale do Silício investe US$ 25 milhões na plataforma PAM escolhida
            por <span className={highlight()}>mais de 1.000</span> empresas ao redor do mundo.
          </p>
          <img src={riverwoodLogo} alt="Riverwood Capital" className={logo()} />
          <div className={actions()}>
            <Link href="/" variant="brand">
              Leia o Anúncio ›
            </Link>
          </div>
        </div>
        <div className={rightCol()}>
          <p className={statText()}>Mais de 1.000 organizações em</p>
          <p className={statText()}>mais de 70 países</p>
          <p className={statText()}>confiam na Segura®</p>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
