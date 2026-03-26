import { tv } from 'tailwind-variants'

export const articlesVariants = tv({
  slots: {
    root: '',
    wrapper: 'items-center gap-8',
    description: 'text-dark text-center text-lg leading-relaxed',
    grid: 'grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
    card: 'block overflow-hidden rounded-[10px]',
    cardImage: 'h-auto w-full',
  },
})
