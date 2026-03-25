import { tv } from 'tailwind-variants'

export const topMenuVariants = tv({
  slots: {
    list: 'text-mid flex items-center justify-around gap-1 px-0 text-sm sm:px-1 lg:justify-end lg:gap-4 lg:px-3',
    item: '',
    link: 'flex items-center',
    label: 'text-dark font-sans text-sm font-normal',
    tag: 'text-dark font-sans text-xs font-bold',
  },
})
