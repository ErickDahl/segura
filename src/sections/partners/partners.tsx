import { Container } from '@/components/atoms/container/container'
import { Heading } from '@/components/atoms/heading/heading'
import { partnersVariants } from './partners.variants'

import partner1 from '@/assets/images/partners/1.png'
import partner2 from '@/assets/images/partners/2.png'
import partner3 from '@/assets/images/partners/3.png'
import partner4 from '@/assets/images/partners/4.png'
import partner5 from '@/assets/images/partners/5.png'
import partner6 from '@/assets/images/partners/6.png'
import partner7 from '@/assets/images/partners/7.png'
import partner8 from '@/assets/images/partners/8.png'
import partner9 from '@/assets/images/partners/9.png'
import partner10 from '@/assets/images/partners/10.png'
import partner11 from '@/assets/images/partners/11.png'
import partner12 from '@/assets/images/partners/12.png'

const partners = [
  { id: 'partner-1', src: partner1 },
  { id: 'partner-2', src: partner2 },
  { id: 'partner-3', src: partner3 },
  { id: 'partner-4', src: partner4 },
  { id: 'partner-5', src: partner5 },
  { id: 'partner-6', src: partner6 },
  { id: 'partner-7', src: partner7 },
  { id: 'partner-8', src: partner8 },
  { id: 'partner-9', src: partner9 },
  { id: 'partner-10', src: partner10 },
  { id: 'partner-11', src: partner11 },
  { id: 'partner-12', src: partner12 },
]

import { useTranslation } from 'react-i18next'

const { root, grid, logo } = partnersVariants()

const Partners = () => {
  const { t } = useTranslation()

  return (
    <section className={root()}>
      <Container layout="col">
        <div className="flex w-full flex-col items-center gap-10 max-md:max-w-full">
          <Heading as="h2" size="sm">
            {t('partners.heading')}
          </Heading>
          <div className={grid()}>
            {partners.map(({ id, src }) => (
              <img key={id} src={src} alt={id} className={logo()} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Partners }
