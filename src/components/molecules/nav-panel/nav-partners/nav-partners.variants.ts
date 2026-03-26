import { tv } from 'tailwind-variants'

export const navPartnersVariants = tv({
  slots: {
    root: 'grid w-full grid-cols-1 gap-8 lg:grid-cols-2',
    column: 'flex flex-col gap-3',
    columnTitle: 'font-display text-dark border-dark border-b pb-2 text-sm font-bold',
    link: 'text-dark hover:text-mid hover:bg-brand-light/10 py-2 pl-3 text-sm transition-colors hover:rounded-lg',
    ctaCard: 'flex flex-col gap-6',
    ctaTitle: 'font-display text-dark border-dark border-b pb-2 text-sm font-bold',
    ctaDescription: 'text-dark text-sm leading-relaxed',
  },
})
