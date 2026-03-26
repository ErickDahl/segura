import { Container } from '@/components/atoms/container/container'
import { stripeVariants } from './stripe.variants'

const { root, wrapper, content, description, link } = stripeVariants()

const Stripe = () => {
  return (
    <section className={root()}>
      <Container className={wrapper()}>
        <div className={content()}>
          <p className={description()}>
            Confira nossa biblioteca de recursos práticos para equipes, gerentes e executivos de
            segurança.
          </p>
          <a href="/" className={link()}>
            Acesse Agora ›
          </a>
        </div>
      </Container>
    </section>
  )
}

export { Stripe }
