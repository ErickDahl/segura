import { Container } from '@/components/atoms/container/container'
import { stripeVariants } from './stripe.variants'

import { useTranslation } from 'react-i18next'

const { root, wrapper, content, description, link } = stripeVariants()

const Stripe = () => {
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container as="div" className={wrapper()}>
        <div className={content()}>
          <p className={description()}>{t('stripe.description')}</p>
          <a href="/" className={link()}>
            {t('stripe.cta')}
          </a>
        </div>
      </Container>
    </section>
  )
}

export { Stripe }
