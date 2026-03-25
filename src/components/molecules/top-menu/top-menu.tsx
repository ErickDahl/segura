import type { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { topMenuVariants } from './top-menu.variants'

type TopMenuItemBase = {
  href: string
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>
}

type TopMenuItem =
  | (TopMenuItemBase & { label: string; bold?: never })
  | (TopMenuItemBase & { bold: string; label?: never })

type TopMenuProps = HTMLAttributes<HTMLElement> & {
  items: TopMenuItem[]
}

const TopMenu = ({ items, className, ...props }: TopMenuProps) => {
  const { root, wrapper, list, item, link, label, bold } = topMenuVariants()

  return (
    <section className={root({ className })} {...props}>
      <div className={wrapper()}>
        <ul className={list()}>
          {items.map(({ href, anchorProps, ...text }) => (
            <li key={href} className={item()}>
              <a href={href} className={link()} {...anchorProps}>
                {'bold' in text ? (
                  <b className={bold()}>{text.bold}</b>
                ) : (
                  <p className={label()}>{text.label}</p>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { TopMenu }
export type { TopMenuItem }
