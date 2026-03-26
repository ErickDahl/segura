import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { awardsVariants } from './awards.variants'
import badge1 from '@/assets/images/awards/1.png'
import badge2 from '@/assets/images/awards/2.webp'
import badge3 from '@/assets/images/awards/3.avif'
import badge4 from '@/assets/images/awards/4.avif'
import badge5 from '@/assets/images/awards/5.avif'
import badge6 from '@/assets/images/awards/6.avif'

const badges = [
  { id: 'gartner-customers', src: badge1, alt: 'Gartner Peer Insights Customers Choice 2026' },
  { id: 'gartner-mq', src: badge2, alt: 'Gartner Magic Quadrant' },
  { id: 'software-reviews', src: badge3, alt: 'Software Reviews Gold Medal 2023' },
  { id: 'cyber-security', src: badge4, alt: 'Cyber Security Excellence Awards Winner 2023' },
  { id: 'kuppingercole', src: badge5, alt: 'KuppingerCole Leadership Compass' },
  { id: 'g2-leader', src: badge6, alt: 'G2 Leader Fall 2023' },
]

const { root, content, leftCol, grid, badge, rightCol, quote, author } = awardsVariants()

const Awards = () => {
  return (
    <section className={root()}>
      <Container as="div">
        <div className={content()}>
          <div className={leftCol()}>
            <Heading as="h2">Uma solução e suporte de PAM de qualidade</Heading>
            <div className={grid()}>
              {badges.map(({ id, src, alt }) => (
                <img key={id} src={src} alt={alt} className={badge()} />
              ))}
            </div>
          </div>
          <div className={rightCol()}>
            <p className={quote()}>
              "A Segura® tem sido uma ótima solução para nós. <b>Nós o usamos diariamente</b> e nós
              somos <b>certeza de que nossa organização está mais segura</b> com isso.
            </p>
            <p className={quote()}>
              A característica de destaque da Segura® para mim é que ela é <b>intuitiva</b> e tem
              uma <b>interface amigável.</b>
            </p>
            <p className={quote()}>
              O <b>suporte ao cliente excepcional</b> fornecido pela Segura® também tem sido um
              fator chave em nossa <b>satisfação</b> com o produto."
            </p>
            <span className={author()}>- Análise do cliente, serviços de TI</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Awards }
