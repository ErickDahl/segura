import { tv } from 'tailwind-variants'

export const supportVariants = tv({
  slots: {
    root: 'bg-brand-light',
    wrapper: 'items-start gap-10',
    content: 'flex w-full flex-col-reverse gap-8 lg:flex-row lg:items-center',
    textCol: 'flex flex-col gap-6 lg:w-1/2',
    description: 'text-dark max-w-lg text-xl leading-relaxed',
    media: 'lg:w-1/2',
    image: 'h-auto w-full',
    linksRow: 'grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
    linkItem: 'text-dark font-display border-dark border-l-2 pl-4 text-base',
  },
})
