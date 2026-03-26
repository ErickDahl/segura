import { tv } from 'tailwind-variants'

export const leadershipVariants = tv({
  slots: {
    root: 'bg-subtle',
    content: 'flex w-full flex-col gap-10 lg:flex-row lg:items-center',
    media: 'lg:w-1/2',
    image: 'h-auto w-full',
    textCol: 'flex flex-col gap-6 lg:w-1/2',
    description: 'text-dark max-w-lg text-lg leading-relaxed',
  },
})
