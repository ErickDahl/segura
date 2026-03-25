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

const Header = () => {
  return (
    <header className="relative w-full overflow-x-clip">
      <AnnouncementBar>
        A senhasegura agora é Segura®! <a href="/">Conheça a nova marca ›</a>
      </AnnouncementBar>
      <TopMenu
        items={[
          { href: '/', bold: 'Seja parceiro' },
          { label: 'About', href: '/about' },
        ]}
      />
      <section className="mx-auto flex max-w-[90%] items-center justify-between gap-2 py-2 text-sm lg:justify-center">
        <Logo className="shrink-0" />
        <div className="flex gap-2">
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
              <Link href="/" variant="primary" size="sm" className="mx-[14%] my-2 lg:m-0">
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
