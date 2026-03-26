import { Header } from './components/organisms/header/header'
import { Hero } from '@/sections/hero/hero'
import { Advantages } from '@/sections/advantages/advantages'
import { Partners } from './sections/partners/partners'
import { Faq } from './sections/faq/faq'
import { Testimonials } from './sections/testimonials/testimonials'
import { Proportion } from './sections/proportion/proportion'

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
    </>
  )
}

export default App
