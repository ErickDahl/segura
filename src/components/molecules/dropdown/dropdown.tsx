import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { dropdownVariants } from './dropdown.variants'

type DropdownContextValue = {
  open: boolean
  toggle: () => void
  show: () => void
  hide: () => void
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

const useDropdown = () => {
  const ctx = useContext(DropdownContext)
  if (!ctx) throw new Error('Dropdown compound components must be used inside <Dropdown />')
  return ctx
}

// Root

type DropdownProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const DropdownRoot = ({ children, className, ...props }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { root } = dropdownVariants()

  const toggle = useCallback(() => setOpen((prev) => !prev), [])
  const show = useCallback(() => setOpen(true), [])
  const hide = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) hide()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [hide])

  const ctx = useMemo(() => ({ open, toggle, show, hide }), [open, toggle, show, hide])

  return (
    <DropdownContext.Provider value={ctx}>
      <div ref={ref} className={root({ className })} {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// Trigger

type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const DropdownTrigger = ({ children, className, ...props }: DropdownTriggerProps) => {
  const { toggle, show, hide, open } = useDropdown()
  const { trigger } = dropdownVariants()

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-haspopup="menu"
      onClick={toggle}
      onMouseEnter={show}
      onMouseLeave={hide}
      className={trigger({ className })}
      {...props}
    >
      {children}
    </button>
  )
}

// Menu

type DropdownMenuProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

const DropdownMenu = ({ children, className, ...props }: DropdownMenuProps) => {
  const { open, show, hide } = useDropdown()
  const { menu, list } = dropdownVariants({ open })

  return (
    <div
      role="menu"
      tabIndex={0}
      aria-hidden={!open}
      className={menu({ className })}
      onMouseEnter={show}
      onMouseLeave={hide}
      {...props}
    >
      <ul className={list()}>{children}</ul>
    </div>
  )
}

// Item

type DropdownItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

const DropdownItem = ({ children, className, ...props }: DropdownItemProps) => {
  const { item } = dropdownVariants()

  return (
    <a role="menuitem" tabIndex={0} {...props}>
      <li className={item({ className })}>{children}</li>
    </a>
  )
}

export { DropdownRoot as Dropdown, DropdownTrigger, DropdownMenu, DropdownItem }
