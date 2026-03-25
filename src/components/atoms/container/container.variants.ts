import { tv } from 'tailwind-variants'

export const containerVariants = tv({
  base: 'container mx-auto px-6 md:px-8',
  variants: {
    layout: {
      col: 'flex flex-col',
      row: 'flex flex-row',
    },
  },
})
