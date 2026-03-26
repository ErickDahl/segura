import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { Accordion, AccordionItem } from '@/components/molecules/accordion/accordion'
import faq1 from '@/assets/images/faq/1.webp'
import { whySeguraVariants } from './why-segura.variants'

const items = [
  {
    id: 'all-in-one',
    title: 'Solução All in One',
    content:
      'Tudo o que você precisa para gerenciamento de acesso privilegiado em uma única plataforma poderosa. Sem ferramentas extras, sem complexidade — apenas proteção completa.',
  },
  {
    id: 'custos',
    title: 'Sem Custos Ocultos',
    content:
      'Preços transparentes sem licenças extras. Para você ter previsibilidade no orçamento.',
  },
  {
    id: 'implementacao',
    title: 'Implementação Na Hora',
    content:
      'Com a Segura® você começa a usar a plataforma mais rápido do que qualquer outra solução PAM.',
  },
  {
    id: 'suporte',
    title: 'Suporte Top de Linha',
    content:
      'Com a melhor avaliação do mercado, a nossa equipe de especialistas está sempre pronta para ajudar.',
  },
]

const { root, content, media, image, ctaRow } = whySeguraVariants()

const WhySegura = () => {
  return (
    <section className={root()}>
      <Container layout="col" className="gap-8">
        <Heading as="h2" color="invert">
          Por que escolher a Segura®?
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
          <Link>Assista à Demo ›</Link>
          <Link variant="brand-ghost">Veja os Produtos ›</Link>
        </div>
      </Container>
    </section>
  )
}

export { WhySegura }
