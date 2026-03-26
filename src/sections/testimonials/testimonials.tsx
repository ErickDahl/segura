import { Container } from '@/components/atoms/container/container'
import { Link } from '@/components/atoms/link/link'
import { StatCard } from '@/components/atoms/stat-card/stat-card'
import bgImage from '@/assets/images/testimonials/cover.webp'
import starsSrc from '@/assets/images/testimonials/1.svg'
import { testimonialsVariants } from './testimonials.variants'

const { root, overlay, wrapper, stars, mainQuote, secondaryQuote, author, statsRow } =
  testimonialsVariants()

const Testimonials = () => {
  return (
    <section className={root()} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={overlay()} />
      <Container as="div" className={wrapper()}>
        <img src={starsSrc} alt="5 estrelas" className={stars()} />
        <div className="flex flex-col gap-2">
          <p className={mainQuote()}>
            "Segura® é uma ferramenta sólida e confiável para acesso remoto em ambientes críticos."
          </p>
          <p className={secondaryQuote()}>
            "Segura® oferece um conjunto abrangente de recursos de PAM. A plataforma PAM integra-se
            perfeitamente com vários sistemas (...)"
          </p>
          <span className={author()}>- Security Office Analyst, IT Services - USA</span>
        </div>
        <div className={statsRow()}>
          <StatCard value="98%">
            de <b>recomendação</b> no Gartner Peer Insights com{' '}
            <b>suporte ao cliente de alta classificação 5/5.</b>
          </StatCard>
          <StatCard value="70%">
            menor <b>Custo Total de Propriedade (TCO)</b> do que outras soluções líderes.
          </StatCard>
        </div>
        <Link variant="brand-ghost-invert">Veja porque CISOs confiam na Segura® ›</Link>
      </Container>
    </section>
  )
}

export { Testimonials }
