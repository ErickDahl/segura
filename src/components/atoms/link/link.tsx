import type { AnchorHTMLAttributes } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { linkVariants } from './link.variants'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof linkVariants>

const Link = ({ children, variant, size, className, ...props }: LinkProps) => {
  return (
    <a className={linkVariants({ variant, size, className })} {...props}>
      {children}
    </a>
  )
}

export { Link }
