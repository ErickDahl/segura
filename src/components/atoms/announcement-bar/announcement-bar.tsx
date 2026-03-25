import type { HTMLAttributes, ReactNode } from 'react'

type AnnouncementBarProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

const AnnouncementBar = ({ children, className, ...props }: AnnouncementBarProps) => {
  return (
    <section
      className={`bg-dark text-subtle font-display min-h-12 w-full py-3 text-center text-xs sm:text-base ${className ?? ''}`}
      {...props}
    >
      <span className="container mx-auto flex flex-col items-center justify-center gap-2 md:flex-row [&_a]:font-semibold">
        {children}
      </span>
    </section>
  )
}

export { AnnouncementBar }
