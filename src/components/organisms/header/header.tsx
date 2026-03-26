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
import { useHeaderData } from './header.data'
import { headerVariants } from './header.variants'
import { useTranslation } from 'react-i18next'

const { root, nav, navActions, ctaLink } = headerVariants()

const Header = () => {
  const { t, i18n } = useTranslation()
  const {
    panelPlatform,
    panelSolutions,
    panelServices,
    panelPartners,
    panelCompany,
    panelResources,
  } = useHeaderData()

  return (
    <header className={root()}>
      <AnnouncementBar>
        {t('header.announcement')} <a href="/">{t('header.announcementLink')}</a>
      </AnnouncementBar>
      <TopMenu
        items={[
          { href: '/', bold: t('header.topMenu.partner') },
          { href: '/', label: t('header.topMenu.contact') },
          { href: '/', label: t('header.topMenu.support') },
          { href: '/', label: t('header.topMenu.docs') },
        ]}
      />
      <section className={nav()}>
        <Logo className="shrink-0" />
        <div className={navActions()}>
          <MainNav>
            <MainNavToggle />
            <MainNavList>
              <MainNavItem label={t('header.nav.platform')}>
                <NavPanel data={panelPlatform} />
              </MainNavItem>
              <MainNavItem label={t('header.nav.solutions')}>
                <NavColumns data={panelSolutions} />
              </MainNavItem>
              <MainNavItem label={t('header.nav.services')}>
                <NavCards data={panelServices} />
              </MainNavItem>
              <MainNavItem label={t('header.nav.partners')}>
                <NavPartners data={panelPartners} />
              </MainNavItem>
              <MainNavItem label={t('header.nav.company')}>
                <NavColumns data={panelCompany} />
              </MainNavItem>
              <MainNavItem label={t('header.nav.resources')}>
                <NavColumns data={panelResources} />
              </MainNavItem>
              <Link href="/" variant="primary" size="sm" className={ctaLink()}>
                {t('header.cta')}
              </Link>
            </MainNavList>
          </MainNav>

          <Dropdown>
            <DropdownTrigger>
              <img src={globeIcon} alt="" aria-hidden="true" className="h-5 w-5" />
              <ChevronDown size={14} aria-hidden="true" />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem onClick={() => i18n.changeLanguage('en')}>English</DropdownItem>
              <DropdownItem onClick={() => i18n.changeLanguage('pt')}>Português</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>
    </header>
  )
}

export { Header }
