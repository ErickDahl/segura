import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { recognitionVariants } from './recognition.variants'
import regonitionImg from '@/assets/images/recognition/1.png'
import check from '@/assets/images/recognition/check.svg'

const insights = [
  { id: 'share', text: 'compartilhar com seu conselho,' },
  { id: 'reduce', text: 'reduzir a incerteza, e' },
  { id: 'choose', text: 'escolher seu próximo parceiro de PAM com confiança.' },
]

const { root, content, textCol, subtitle, listLabel, list, listItem, checkIcon, media, image } =
  recognitionVariants()

const Recognition = () => {
  return (
    <section className={root()}>
      <Container as="div">
        <div className={content()}>
          <div className={textCol()}>
            <Heading as="h2" color="invert">
              Descubra por que a Segura® PAM foi reconhecida.
            </Heading>
            <p className={subtitle()}>
              O relatório do Gartner® Magic Quadrant™ 2025 para PAM está aqui.
            </p>
            <p className={listLabel()}>Obtenha insights independentes para</p>
            <ul className={list()}>
              {insights.map(({ id, text }) => (
                <li key={id} className={listItem()}>
                  <img src={check} alt="" className={checkIcon()} />
                  {text}
                </li>
              ))}
            </ul>
            <Link variant="brand">Baixar Relatório ›</Link>
          </div>
          <div className={media()}>
            <img src={regonitionImg} alt="Gartner Magic Quadrant 2025" className={image()} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Recognition }
