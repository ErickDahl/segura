import { tv } from 'tailwind-variants'

export const stripeVariants = tv({
  slots: {
    root: 'bg-mid',
    wrapper: 'py-4',
    content: 'flex flex-col items-center justify-center gap-5 lg:flex-row',
    description: 'text-subtle font-display text-lg',
    link: 'text-brand font-semibold underline',
  },
})
