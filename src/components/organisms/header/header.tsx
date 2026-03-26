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
import { ChevronDown } from 'lucide-react'
import globeIcon from '@/assets/images/header/1.svg'
import { NavCards } from '@/components/molecules/nav-panel/nav-cards/nav-cards'
import { NavColumns } from '@/components/molecules/nav-panel/nav-columns/nav-columns'
import { NavPanel } from '@/components/molecules/nav-panel/nav-panel/nav-panel'
import { NavPartners } from '@/components/molecules/nav-panel/nav-partners/nav-partners'
import {
  panelCompany,
  panelPartners,
  panelPlatform,
  panelResources,
  panelServices,
  panelSolutions,
} from './header.data'
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
          { href: '/', label: 'Contato' },
          { href: '/', label: 'Suporte' },
          { href: '/', label: 'Docs' },
        ]}
      />
      <section className={nav()}>
        <Logo className="shrink-0" />
        <div className={navActions()}>
          <MainNav>
            <MainNavToggle />
            <MainNavList>
              <MainNavItem label="Plataforma">
                <NavPanel data={panelPlatform} />
              </MainNavItem>
              <MainNavItem label="Soluções">
                <NavColumns data={panelSolutions} />
              </MainNavItem>
              <MainNavItem label="Serviços">
                <NavCards data={panelServices} />
              </MainNavItem>
              <MainNavItem label="Parceiros">
                <NavPartners data={panelPartners} />
              </MainNavItem>
              <MainNavItem label="Empresa">
                <NavColumns data={panelCompany} />
              </MainNavItem>
              <MainNavItem label="Recursos">
                <NavColumns data={panelResources} />
              </MainNavItem>
              <Link href="/" variant="primary" size="sm" className={ctaLink()}>
                Pedir Demo ›
              </Link>
            </MainNavList>
          </MainNav>

          <Dropdown>
            <DropdownTrigger>
              <img src={globeIcon} alt="" aria-hidden="true" className="h-5 w-5" />
              <ChevronDown size={14} aria-hidden="true" />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Português</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>
    </header>
  )
}

export { Header }
