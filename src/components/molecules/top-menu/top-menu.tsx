import type { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { topMenuVariants } from './top-menu.variants'

type TopMenuItem = {
  label: string
  href: string
  tag?: string
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>
}

type TopMenuProps = HTMLAttributes<HTMLElement> & {
  items: TopMenuItem[]
}

const TopMenu = ({ items, className, ...props }: TopMenuProps) => {
  const { list, item, link, label, tag } = topMenuVariants()

  return (
    <section className={`bg-subtle w-full py-3 ${className ?? ''}`} {...props}>
      <div className="container mx-auto w-full max-lg:max-w-full">
        <ul className={list()}>
          {items.map(({ label: text, href, tag: tagText, anchorProps }) => (
            <li key={href} className={item()}>
              <a href={href} className={link()} {...anchorProps}>
                <p className={label()}>{text}</p>
                {tagText && <b className={tag()}>{tagText}</b>}
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
