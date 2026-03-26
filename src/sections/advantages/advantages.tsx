import { Card } from '@/components/molecules/card/card'
import { Container } from '@/components/atoms/container/container'
import { advantagesVariants } from './advantages.variants'

import icon1 from '@/assets/images/advantages/1.png'
import icon2 from '@/assets/images/advantages/2.svg'
import icon3 from '@/assets/images/advantages/3.png'
import icon4 from '@/assets/images/advantages/4.png'
import icon5 from '@/assets/images/advantages/5.png'
import icon6 from '@/assets/images/advantages/6.png'
import icon7 from '@/assets/images/advantages/7.png'
import icon8 from '@/assets/images/advantages/8.png'
import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { useTranslation } from 'react-i18next'

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8]
const itemKeys = [
  'pamCore',
  'cloudSecurity',
  'compliance',
  'iam',
  'vault',
  'devSecOps',
  'reports',
  'userManagement',
] as const

const hrefs = [
  '/pam-core',
  '/cloud-security',
  '/conformidade',
  '/iam',
  '/cofre',
  '/devsecops',
  '/relatorios',
  '/usuarios',
]

const { root, wrapper, stickyCol, description, ctaRow, grid } = advantagesVariants()

const Advantages = () => {
  const { t } = useTranslation()

  const items = itemKeys.map((key, i) => ({
    id: String(i + 1),
    icon: <img src={icons[i]} alt="" className="h-10 w-auto" />,
    title: t(`advantages.items.${key}.title`),
    description: t(`advantages.items.${key}.description`),
    note: t(`advantages.items.${key}.note`),
    cta: t(`advantages.items.${key}.cta`),
    href: hrefs[i],
  }))

  return (
    <section className={root()}>
      <Container as="div" className={wrapper()}>
        <div className={stickyCol()}>
          <Heading as="h2" size="md" className="font-semibold">
            {t('advantages.heading')}
          </Heading>
          <p className={description()}>{t('advantages.description')}</p>
          <div className={ctaRow()}>
            <Link>{t('advantages.ctaPrimary')}</Link>
            <Link variant="secondary">{t('advantages.ctaSecondary')}</Link>
          </div>
        </div>
        <div className={grid()}>
          {items.map(({ id, ...card }) => (
            <Card key={id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export { Advantages }
