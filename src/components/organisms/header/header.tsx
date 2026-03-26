import { AnnouncementBar } from '@/components/atoms/announcement-bar/announcement-bar'
import { Link } from '@/components/atoms/link/link'
import { Logo } from '@/components/atoms/logo/logo'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@/components/molecules/dropdown/dropdown'
import {
  MainNav,
  MainNavItem,
  MainNavList,
  MainNavToggle,
} from '@/components/molecules/main-nav/main-nav'
import { TopMenu } from '@/components/molecules/top-menu/top-menu'
import { Globe, ChevronDown } from 'lucide-react'
import { headerVariants } from './header.variants'

const { root, nav, navActions, ctaLink } = headerVariants()

const Header = () => {
  return (
    <header className={root()}>
      <AnnouncementBar>
        A senhasegura agora é Segura®! <a href="/">Conheça a nova marca ›</a>
      </AnnouncementBar>
      <TopMenu
        items={[
          { href: '/', bold: 'Seja parceiro' },
          { label: 'About', href: '/about' },
        ]}
      />
      <section className={nav()}>
        <Logo className="shrink-0" />
        <div className={navActions()}>
          <MainNav>
            <MainNavToggle />
            <MainNavList>
              <MainNavItem label="Plataforma">
                <p>Painel plataforma</p>
              </MainNavItem>
              <MainNavItem label="Soluções">
                <p>Painel soluções</p>
              </MainNavItem>
              <MainNavItem label="Serviços">
                <p>Painel serviços</p>
              </MainNavItem>
              <MainNavItem label="Parceiros">
                <p>Painel parceiros</p>
              </MainNavItem>
              <MainNavItem label="Empresa">
                <p>Painel empresa</p>
              </MainNavItem>
              <MainNavItem label="Recursos">
                <p>Painel recursos</p>
              </MainNavItem>
              <Link href="/" variant="primary" size="sm" className={ctaLink()}>
                Pedir Demo ›
              </Link>
            </MainNavList>
          </MainNav>

          <Dropdown>
            <DropdownTrigger>
              <Globe size={20} aria-hidden="true" />
              <ChevronDown size={14} aria-hidden="true" />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>Portugues</DropdownItem>
              <DropdownItem>ingles</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>
    </header>
  )
}

export { Header }
