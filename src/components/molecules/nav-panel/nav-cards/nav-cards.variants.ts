import { tv } from 'tailwind-variants'

export const navCardsVariants = tv({
  slots: {
    root: 'grid w-full grid-cols-1 gap-8 lg:grid-cols-3',
    card: 'flex flex-col gap-6',
    cardTitle: 'font-display text-dark border-dark border-b pb-2 text-sm font-bold',
    cardDescription: 'text-dark text-sm leading-relaxed',
  },
})
