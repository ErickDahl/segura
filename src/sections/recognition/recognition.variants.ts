import { tv } from 'tailwind-variants'

export const recognitionVariants = tv({
  slots: {
    root: 'bg-dark',
    content: 'flex w-full flex-col-reverse gap-10 lg:flex-row lg:items-center',
    textCol: 'flex flex-col gap-6 lg:w-1/2',
    subtitle: 'font-display text-subtle text-2xl italic',
    listLabel: 'text-subtle text-xl font-semibold',
    list: 'flex flex-col gap-4',
    listItem: 'text-subtle flex items-center gap-3 text-base',
    checkIcon: 'h-6 w-6 shrink-0',
    media: 'lg:w-1/2',
    image: 'h-auto w-full',
  },
})
