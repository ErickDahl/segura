import { tv } from 'tailwind-variants'

export const cardVariants = tv({
  slots: {
    root: 'flex flex-col gap-4 rounded-2xl bg-white p-6',
    iconWrapper: 'border-brand text-brand flex w-fit items-center justify-center p-3',
    title: 'text-dark text-xl leading-snug font-semibold',
    description: 'text-dark text-base leading-relaxed',
    note: 'text-dark text-base leading-relaxed italic',
    actions: 'mt-auto pt-2',
  },
})
