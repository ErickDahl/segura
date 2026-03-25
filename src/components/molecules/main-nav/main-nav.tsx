import {
  createContext,
  useCallback,
  useContext,
  useMemo,
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
  const { root } = mainNavVariants()

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), [])
  const toggleMobileItem = useCallback(
    (label: string) => setActiveMobileItem((prev) => (prev === label ? null : label)),
    [],
  )

  const ctx = useMemo(
    () => ({ mobileOpen, toggleMobile, activeMobileItem, toggleMobileItem }),
    [mobileOpen, toggleMobile, activeMobileItem, toggleMobileItem],
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
  const { activeMobileItem, toggleMobileItem } = useMainNav()
  const mobileActive = activeMobileItem === label
  const { item, trigger, chevron, panel, panelContent } = mainNavVariants({ mobileActive })

  return (
    <div className={item({ className })} {...props}>
      <button type="button" className={trigger()} onClick={() => toggleMobileItem(label)}>
        <span>{label}</span>
        {children && <ChevronDown size={16} aria-hidden="true" className={chevron()} />}
      </button>

      {children && (
        <div aria-hidden={!mobileActive} className={panel()}>
          <div className={panelContent()}>{children}</div>
        </div>
      )}
    </div>
  )
}

// ── Exports ──────────────────────────────────────────────────────────

export { MainNavRoot as MainNav, MainNavToggle, MainNavList, MainNavItem }
