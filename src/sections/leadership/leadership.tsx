import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { leadershipVariants } from './leadership.variants'
import leadershipImg from '@/assets/images/leadership/1.png'

const { root, content, media, image, textCol, description } = leadershipVariants()

const Leadership = () => {
  return (
    <section className={root()}>
      <Container as="div">
        <div className={content()}>
          <div className={media()}>
            <img src={leadershipImg} alt="Liderança da Segura" className={image()} />
          </div>
          <div className={textCol()}>
            <Heading as="h2">PAM Sem Medo do Futuro</Heading>
            <p className={description()}>
              A Segura® lidera os principais provedores de PAM por um motivo: segurança que
              funciona.
            </p>
            <p className={description()}>
              Analistas e consultorias reconhecem nossa inovação e velocidade, enquanto as equipes
              de TI nos avaliam com 5/5 em suporte e confiabilidade.
            </p>
            <Link variant="secondary">Veja o que nos torna inigualáveis ›</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Leadership }
