import { Header } from './components/organisms/header/header'
import { Hero } from '@/sections/hero/hero'
import { Advantages } from '@/sections/advantages/advantages'
import { Partners } from './sections/partners/partners'
import { WhySegura } from './sections/why-segura/why-segura'
import { Testimonials } from './sections/testimonials/testimonials'
import { Compliance } from './sections/compliance/compliance'
import { Leadership } from './sections/leadership/leadership'
import { Recognition } from './sections/recognition/recognition'
import { Comparison } from './sections/comparison/comparison'
import { Support } from './sections/support/support'
import { Awards } from './sections/awards/awards'
import { Articles } from './sections/articles/articles'
import { Faqs } from './sections/faqs/faqs'
import { Stripe } from './sections/stripe/stripe'
import { Footer } from './components/organisms/footer/footer'
import { WhatsappButton } from './components/atoms/whatsapp-button/whatsapp-button'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('common.pageTitle')
  }, [t])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Partners />
        <WhySegura />
        <Testimonials />
        <Compliance />
        <Leadership />
        <Recognition />
        <Comparison />
        <Support />
        <Awards />
        <Faqs />
        <Articles />
        <Stripe />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App
