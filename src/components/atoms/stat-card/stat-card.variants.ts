import { tv } from 'tailwind-variants'

export const statCardVariants = tv({
  slots: {
    root: 'border-brand border-l-2 pl-4',
    value: 'font-display text-3xl font-semibold text-white',
    description: 'max-w-xs text-base leading-relaxed text-white',
  },
})
