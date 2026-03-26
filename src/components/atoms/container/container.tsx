import type { HTMLAttributes } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { containerVariants } from './container.variants'

type ContainerTag = 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer'

type ContainerProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof containerVariants> & {
    as?: ContainerTag
  }

const Container = ({ as: Tag = 'div', layout, className, ...props }: ContainerProps) => {
  return <Tag className={containerVariants({ layout, className })} {...props} />
}

export { Container }
