import { tv } from 'tailwind-variants'

export const accordionVariants = tv({
  slots: {
    root: 'flex flex-col gap-8',
    item: 'border-subtle border-b-2 pb-8',
    trigger: [
      'flex w-full cursor-pointer items-center gap-3',
      'text-subtle text-left font-sans text-xl font-normal',
      'font-display transition-colors duration-150',
    ],
    chevron: 'h-5 w-5 shrink-0 transition-transform duration-200 ease-out',
    panel: 'grid transition-all duration-200 ease-out',
    content: 'text-subtle overflow-hidden pt-4 pl-6 text-base leading-relaxed font-light',
  },
  variants: {
    open: {
      true: {
        chevron: 'rotate-90',
        panel: 'grid grid-rows-[1fr] opacity-100',
      },
      false: {
        panel: 'grid grid-rows-[0fr] opacity-0',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
})
