import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Accordion, AccordionItem } from '@/components/molecules/accordion/accordion'
import { faqsVariants } from './faqs.variants'
import { useTranslation } from 'react-i18next'

const faqKeys = [
  'whoIsSegura',
  'whatMakesDifferent',
  'whyRebrand',
  'integration',
  'support247',
  'deploymentSpeed',
  'countries',
  'whyTrust',
] as const

const faqIds = [
  'who-is-segura',
  'what-makes-different',
  'why-rebrand',
  'integration',
  'support-247',
  'deployment-speed',
  'countries',
  'why-trust',
]

const { root } = faqsVariants()

const Faqs = () => {
  const { t } = useTranslation()

  const faqItems = faqKeys.map((key, i) => ({
    id: faqIds[i],
    title: t(`faqs.items.${key}.title`),
    content: t(`faqs.items.${key}.paragraphs`, { returnObjects: true }) as unknown as string[],
  }))

  return (
    <section className={root()}>
      <Container layout="col" className="gap-10">
        <Heading as="h2" color="invert">
          {t('faqs.heading')}
        </Heading>
        <Accordion>
          {faqItems.map(({ id, title, content }) => (
            <AccordionItem key={id} id={id} title={title}>
              {content.map((paragraph, i) => (
                <p key={`${id}-p${i}`}>{paragraph}</p>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export { Faqs }
