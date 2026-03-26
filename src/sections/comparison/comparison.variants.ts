import { tv } from 'tailwind-variants'

export const comparisonVariants = tv({
  slots: {
    root: 'bg-subtle',
    wrapper: 'items-center gap-10',
    description: 'text-dark max-w-2xl text-center text-lg leading-relaxed',
    media: 'w-full',
    imageDesktop: 'hidden h-auto w-full lg:block',
    imageMobile: 'h-auto w-full lg:hidden',
  },
})
