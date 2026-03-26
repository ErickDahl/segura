import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { mainNavVariants } from './main-nav.variants'

// ── Context ──────────────────────────────────────────────────────────

type MainNavContextValue = {
  mobileOpen: boolean
  toggleMobile: () => void
  activeMobileItem: string | null
  toggleMobileItem: (label: string) => void
  activeDesktopItem: string | null
  openDesktopItem: (label: string) => void
  closeDesktopItem: () => void
}

const MainNavContext = createContext<MainNavContextValue | null>(null)

const useMainNav = () => {
  const ctx = useContext(MainNavContext)
  if (!ctx) throw new Error('MainNav compound components must be used inside <MainNav />')
  return ctx
}

// ── Root ─────────────────────────────────────────────────────────────

type MainNavProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

const MainNavRoot = ({ children, className, ...props }: MainNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null)
  const [activeDesktopItem, setActiveDesktopItem] = useState<string | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { root } = mainNavVariants()

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), [])
  const toggleMobileItem = useCallback(
    (label: string) => setActiveMobileItem((prev) => (prev === label ? null : label)),
    [],
  )

  const openDesktopItem = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveDesktopItem(label)
  }, [])

  const closeDesktopItem = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDesktopItem(null)
      closeTimeoutRef.current = null
    }, 150)
  }, [])

  const ctx = useMemo(
    () => ({
      mobileOpen,
      toggleMobile,
      activeMobileItem,
      toggleMobileItem,
      activeDesktopItem,
      openDesktopItem,
      closeDesktopItem,
    }),
    [
      mobileOpen,
      toggleMobile,
      activeMobileItem,
      toggleMobileItem,
      activeDesktopItem,
      openDesktopItem,
      closeDesktopItem,
    ],
  )

  return (
    <MainNavContext.Provider value={ctx}>
      <nav className={root({ className })} {...props}>
        {children}
      </nav>
    </MainNavContext.Provider>
  )
}

// ── Toggle (hamburger) ───────────────────────────────────────────────

type MainNavToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
}

const MainNavToggle = ({ children, className, ...props }: MainNavToggleProps) => {
  const { mobileOpen, toggleMobile } = useMainNav()
  const { toggle } = mainNavVariants()

  return (
    <button
      type="button"
      aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={mobileOpen}
      onClick={toggleMobile}
      className={toggle({ className })}
      {...props}
    >
      {children ?? <Menu size={24} aria-hidden="true" />}
    </button>
  )
}

// ── List ─────────────────────────────────────────────────────────────

type MainNavListProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const MainNavList = ({ children, className, ...props }: MainNavListProps) => {
  const { mobileOpen } = useMainNav()
  const { list } = mainNavVariants({ mobileOpen })

  return (
    <div className={list({ className })} {...props}>
      {children}
    </div>
  )
}

// ── Item ─────────────────────────────────────────────────────────────

type MainNavItemProps = HTMLAttributes<HTMLDivElement> & {
  label: string
  children?: ReactNode
}

const MainNavItem = ({ label, children, className, ...props }: MainNavItemProps) => {
  const {
    activeMobileItem,
    toggleMobileItem,
    activeDesktopItem,
    openDesktopItem,
    closeDesktopItem,
  } = useMainNav()
  const mobileActive = activeMobileItem === label
  const desktopActive = activeDesktopItem === label
  const { item, trigger, chevron, panel, panelContent } = mainNavVariants({
    mobileActive,
    desktopActive,
  })

  return (
    <div
      className={item({ className })}
      onMouseEnter={() => children && openDesktopItem(label)}
      onMouseLeave={() => children && closeDesktopItem()}
      {...props}
    >
      <button type="button" className={trigger()} onClick={() => toggleMobileItem(label)}>
        <span>{label}</span>
        {children && <ChevronDown size={16} aria-hidden="true" className={chevron()} />}
      </button>

      {children && (
        <div aria-hidden={!mobileActive && !desktopActive} className={panel()}>
          <div className={panelContent()}>{children}</div>
        </div>
      )}
    </div>
  )
}

// ── Exports ──────────────────────────────────────────────────────────

export { MainNavRoot as MainNav, MainNavToggle, MainNavList, MainNavItem }
