import { Link } from '@/components/atoms/link/link'
import { Heading } from '@/components/atoms/heading/heading'
import { Header } from './components/organisms/header/header'
import { NavList } from './components/atoms/nav-list/nav-list'
import { Container } from './components/atoms/container/container'

function App() {
  return (
    <>
      <Header />

      <Container as="section">
        <Link variant="primary">teste</Link>
        <Link variant="secondary">teste</Link>
        <Link variant="brand">teste</Link>
        <Link variant="brand-ghost">teste</Link>
        <Link variant="brand-ghost-invert">teste</Link>
        <Link variant="secondary-ghost">teste</Link>

        <NavList
          direction="row"
          items={[
            { label: 'a', href: '#' },
            { label: 'b', href: '#' },
            { label: 'c', href: '#' },
          ]}
        />

        <Heading size="display" color="brand">
          Vite + React
        </Heading>
      </Container>
    </>
  )
}

export default App
