import { tv } from 'tailwind-variants'

export const headingVariants = tv({
  base: 'tracking-tight',
  variants: {
    size: {
      display: 'font-display text-6xl leading-none font-semibold lg:text-7xl',
      xl: 'font-display text-4xl leading-tight font-semibold lg:text-5xl',
      lg: 'font-display text-3xl leading-snug font-medium lg:text-4xl',
      md: 'font-sans text-xl leading-snug font-normal lg:text-2xl',
      sm: 'font-sans text-lg leading-snug font-normal',
    },
    color: {
      default: 'text-dark',
      invert: 'text-subtle',
      brand: 'text-brand',
    },
  },
  defaultVariants: {
    size: 'xl',
    color: 'default',
  },
})
