import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { Accordion, AccordionItem } from '@/components/molecules/accordion/accordion'
import faq1 from '@/assets/images/faq/1.webp'
import { whySeguraVariants } from './why-segura.variants'
import { useTranslation } from 'react-i18next'

const itemKeys = [
  { id: 'all-in-one', key: 'allInOne' },
  { id: 'custos', key: 'costs' },
  { id: 'implementacao', key: 'implementation' },
  { id: 'suporte', key: 'support' },
] as const

const { root, content, media, image, ctaRow } = whySeguraVariants()

const WhySegura = () => {
  const { t } = useTranslation()

  const items = itemKeys.map(({ id, key }) => ({
    id,
    title: t(`whySegura.items.${key}.title`),
    content: t(`whySegura.items.${key}.content`),
  }))

  return (
    <section className={root()}>
      <Container layout="col" className="gap-8">
        <Heading as="h2" color="invert">
          {t('whySegura.heading')}
        </Heading>
        <div className={content()}>
          <div className={media()}>
            <img src={faq1} width={500} alt="FAQ 1" className={image()} />
          </div>
          <Accordion defaultItem="all-in-one">
            {items.map(({ id, title, content: text }) => (
              <AccordionItem key={id} id={id} title={title}>
                {text}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className={ctaRow()}>
          <Link>{t('whySegura.ctaPrimary')}</Link>
          <Link variant="brand-ghost">{t('whySegura.ctaSecondary')}</Link>
        </div>
      </Container>
    </section>
  )
}

export { WhySegura }
