import { tv } from 'tailwind-variants'

export const testimonialsVariants = tv({
  slots: {
    root: 'bg-dark relative overflow-hidden bg-cover bg-center',
    overlay: 'from-brand-black absolute inset-0 bg-linear-to-r to-transparent',
    wrapper: 'relative flex flex-col items-start gap-8',
    stars: 'h-8 w-auto',
    mainQuote: 'font-display max-w-2xl text-xl leading-snug font-semibold text-white',
    secondaryQuote: 'text-subtle max-w-2xl text-base leading-relaxed',
    author: 'text-subtle text-sm',
    statsRow: 'flex flex-col justify-between gap-5 md:flex-row',
  },
})
