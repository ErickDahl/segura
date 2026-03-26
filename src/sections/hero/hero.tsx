import { Heading } from '@/components/atoms/heading/heading'
import { Link } from '@/components/atoms/link/link'
import { Container } from '@/components/atoms/container/container'
import bgImage from '@/assets/images/hero/section_1.jpg'
import riverwoodLogo from '@/assets/images/hero/riverwood.png'
import { heroVariants } from './hero.variants'
import { Trans, useTranslation } from 'react-i18next'

const {
  root,
  overlay,
  wrapper,
  leftCol,
  headingNormal,
  headingItalic,
  description,
  highlight,
  logo,
  actions,
  rightCol,
  statText,
} = heroVariants()

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className={root()} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={overlay()} />
      <Container as="div" className={wrapper()}>
        <div className={leftCol()}>
          <Heading as="h1" size="lg" color="invert">
            <span className={headingNormal()}>{t('hero.headingNormal1')}</span>
            <em className={headingItalic()}>{t('hero.headingItalic')}</em>
            <span className={headingNormal()}>{t('hero.headingNormal2')}</span>
          </Heading>
          <p className={description()}>
            <Trans
              i18nKey="hero.description"
              components={{ highlight: <span className={highlight()} /> }}
            />
          </p>
          <img src={riverwoodLogo} alt="Riverwood Capital" className={logo()} />
          <div className={actions()}>
            <Link href="/" variant="brand">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
        <div className={rightCol()}>
          <p className={statText()}>{t('hero.stat1')}</p>
          <p className={statText()}>{t('hero.stat2')}</p>
          <p className={statText()}>{t('hero.stat3')}</p>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
