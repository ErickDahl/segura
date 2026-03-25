import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { headingVariants } from './heading.variants'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingTag
  }

const Heading = ({ as: Tag = 'h2', size, color, className, ...props }: HeadingProps) => {
  return <Tag className={headingVariants({ size, color, className })} {...props} />
}

export { Heading }
