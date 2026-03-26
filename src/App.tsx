import { Header } from './components/organisms/header/header'
import { Hero } from '@/sections/hero/hero'
import { Advantages } from '@/sections/advantages/advantages'
import { Partners } from './sections/partners/partners'
import { Faq } from './sections/faq/faq'
import { Testimonials } from './sections/testimonials/testimonials'
import { Proportion } from './sections/proportion/proportion'
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
      <Hero />
      <Advantages />
      <Partners />
      <Faq />
      <Testimonials />
      <Proportion />
      <Leadership />
      <Recognition />
      <Comparison />
      <Support />
      <Awards />
      <Articles />
      <Stripe />
    </>
  )
}

export default App
