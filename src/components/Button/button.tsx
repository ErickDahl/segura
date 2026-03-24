import type { ButtonHTMLAttributes } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { buttonVariants } from './button.variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ children, variant, size, className, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  )
}

export { Button }
