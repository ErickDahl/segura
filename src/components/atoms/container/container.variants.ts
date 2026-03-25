import { tv } from 'tailwind-variants'

export const containerVariants = tv({
  base: 'container mx-auto',
  variants: {
    layout: {
      col: 'flex flex-col',
      row: 'flex flex-row',
    },
  },
})
