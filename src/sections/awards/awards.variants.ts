import { tv } from 'tailwind-variants'

export const awardsVariants = tv({
  slots: {
    root: 'bg-subtle',
    content: 'flex w-full flex-col gap-10 lg:flex-row',
    leftCol: 'flex flex-col gap-8 lg:w-1/2',
    grid: 'grid grid-cols-2 place-items-center gap-6 lg:grid-cols-3',
    badge: 'rounded-10 block h-auto w-full max-w-full object-contain md:w-1/2',
    rightCol: 'border-brand flex flex-col gap-4 lg:w-1/2 lg:border-l-2 lg:pl-10',
    quote: 'text-dark font-sans text-xl leading-relaxed italic',
    author: 'font-display text-mid text-base italic',
  },
})
