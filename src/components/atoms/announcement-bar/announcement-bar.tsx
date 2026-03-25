import type { HTMLAttributes, ReactNode } from 'react'
import { announcementBarVariants } from './announcement-bar.variants'

type AnnouncementBarProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

const AnnouncementBar = ({ children, className, ...props }: AnnouncementBarProps) => {
  const { root, content } = announcementBarVariants()

  return (
    <section className={root({ className })} {...props}>
      <span className={content()}>{children}</span>
    </section>
  )
}

export { AnnouncementBar }
