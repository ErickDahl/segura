import { tv } from 'tailwind-variants'

export const navListVariants = tv({
  slots: {
    list: 'flex',
    item: '',
    link: ['block px-4 py-3', 'text-dark font-sans text-base font-normal'],
  },
  variants: {
    direction: {
      col: { list: 'flex-col', item: 'w-full', link: 'w-full' },
      row: { list: 'flex-row items-center', item: '', link: '' },
    },
  },
  defaultVariants: {
    direction: 'col',
  },
})
