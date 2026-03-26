import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { accordionVariants } from './accordion.variants'

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0 0L16 12.5L0 25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ── Context ──────────────────────────────────────────────────────────

type AccordionContextValue = {
  activeItem: string | null
  toggle: (id: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

const useAccordion = () => {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion compound components must be used inside <Accordion />')
  return ctx
}

// ── Root ─────────────────────────────────────────────────────────────

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  defaultItem?: string | null
}

const AccordionRoot = ({ children, defaultItem = null, className, ...props }: AccordionProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(defaultItem)
  const { root } = accordionVariants()

  const toggle = useCallback((id: string) => setActiveItem((prev) => (prev === id ? null : id)), [])

  const ctx = useMemo(() => ({ activeItem, toggle }), [activeItem, toggle])

  return (
    <AccordionContext.Provider value={ctx}>
      <div className={root({ className })} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// ── Item ─────────────────────────────────────────────────────────────

type AccordionItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  title: string
  children: ReactNode
}

const AccordionItem = ({ id, title, children, className, ...props }: AccordionItemProps) => {
  const { activeItem, toggle } = useAccordion()
  const isOpen = activeItem === id
  const { item, trigger, chevron, panel, content } = accordionVariants({ open: isOpen })

  return (
    <div className={item({ className })} {...props}>
      <button type="button" className={trigger()} onClick={() => toggle(id)} aria-expanded={isOpen}>
        <ChevronIcon className={chevron()} />
        <span>{title}</span>
      </button>
      <div className={panel()} aria-hidden={!isOpen}>
        <div className={content()}>{children}</div>
      </div>
    </div>
  )
}

// ── Exports ──────────────────────────────────────────────────────────

export { AccordionRoot as Accordion, AccordionItem }
