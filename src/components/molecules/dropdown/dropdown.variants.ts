import { tv } from 'tailwind-variants'

export const dropdownVariants = tv({
  slots: {
    root: 'relative shrink-0',
    trigger: 'flex h-full cursor-pointer items-center gap-1',
    menu: [
      'absolute top-full left-0 z-50 w-fit',
      'p-1',
      'border-brand-light/20 bg-white',
      'shadow-dark/10 shadow-lg',
      'transition-all duration-200 ease-out',
      "before:absolute before:inset-x-0 before:-top-1 before:h-1 before:content-['']",
    ],
    list: ['flex flex-col items-center gap-2'],
    item: [
      'flex px-3 py-2',
      'text-mid font-sans text-sm font-normal',
      'hover:bg-brand-light/10 hover:text-mid hover:cursor-pointer hover:rounded-lg',
      'transition-colors duration-150',
    ],
  },
  variants: {
    open: {
      true: { menu: 'pointer-events-auto translate-y-0 opacity-100' },
      false: { menu: 'pointer-events-none translate-y-1 opacity-0' },
    },
  },
  defaultVariants: { open: false },
})
