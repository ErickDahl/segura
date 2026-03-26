import { tv } from 'tailwind-variants'

export const partnersVariants = tv({
  slots: {
    root: 'bg-subtle',
    grid: 'grid w-full grid-cols-2 place-items-center items-center justify-center gap-12 md:grid-cols-6',
    logo: 'h-8 w-auto object-contain',
  },
})
