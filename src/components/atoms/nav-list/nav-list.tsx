import type { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { navListVariants } from './nav-list.variants'

type NavItem = {
  label: string
  href: string
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>
}

type NavListProps = HTMLAttributes<HTMLUListElement> &
  VariantProps<typeof navListVariants> & {
    items: NavItem[]
  }

const NavList = ({ items, direction, className, ...props }: NavListProps) => {
  const { list, item, link } = navListVariants({ direction })

  return (
    <ul className={list({ className })} {...props}>
      {items.map(({ label, href, anchorProps }) => (
        <li key={label} className={item()}>
          <a href={href} className={link()} {...anchorProps}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export { NavList }
export type { NavItem }
