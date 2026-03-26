import { tv } from 'tailwind-variants'

export const containerVariants = tv({
  base: 'container mx-auto flex items-center justify-center px-3 py-16',
  variants: {
    layout: {
      col: 'flex-col',
      row: 'flex-row',
    },
  },
})
