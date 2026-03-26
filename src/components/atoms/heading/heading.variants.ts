import { tv } from 'tailwind-variants'

export const headingVariants = tv({
  base: 'font-semibold tracking-tight',
  variants: {
    size: {
      lg: 'font-display text-[48px] leading-tight',
      md: 'font-display text-[36px] leading-snug',
      sm: 'font-display text-[24px] leading-snug',
    },
    color: {
      default: 'text-dark',
      invert: 'text-subtle',
      brand: 'text-brand',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})
