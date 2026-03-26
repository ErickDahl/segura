import { Header } from './components/organisms/header/header'
import { Hero } from '@/sections/hero/hero'
import { Advantages } from '@/sections/advantages/advantages'
import { Partners } from './sections/partners/partners'
import { Faq } from './sections/faq/faq'
import { Testimonials } from './sections/testimonials/testimonials'
import { Compliance } from './sections/compliance/compliance'
import { Leadership } from './sections/leadership/leadership'
import { Recognition } from './sections/recognition/recognition'
import { Comparison } from './sections/comparison/comparison'
import { Support } from './sections/support/support'
import { Awards } from './sections/awards/awards'
import { Articles } from './sections/articles/articles'
import { Stripe } from './sections/stripe/stripe'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Partners />
        <Faq />
        <Testimonials />
        <Compliance />
        <Leadership />
        <Recognition />
        <Comparison />
        <Support />
        <Awards />
        <Articles />
        <Stripe />
      </main>
    </>
  )
}

export default App
