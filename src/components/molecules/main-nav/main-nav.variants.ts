import { tv } from 'tailwind-variants'

export const mainNavVariants = tv({
  slots: {
    root: 'min-w-0 flex-1',
    toggle: [
      'flex items-center justify-center',
      'h-10 w-10 cursor-pointer',
      'max-lg:mx-auto',
      'lg:hidden',
    ],
    list: [
      'flex justify-between max-lg:absolute max-lg:inset-x-0 max-lg:top-full max-lg:z-40 max-lg:w-full max-lg:bg-white',
      'max-lg:flex-col max-lg:overflow-y-auto',
      'max-lg:transition-all max-lg:duration-300 max-lg:ease-out',
      'lg:flex lg:flex-row lg:items-center lg:gap-1',
    ],
    item: 'group/item w-full lg:static lg:w-fit',
    trigger: [
      'flex w-full cursor-pointer items-center justify-between gap-1 lg:w-fit',
      'px-[14%] py-2 lg:p-3',
      'text-dark font-sans text-sm font-normal',
      'transition-colors duration-150',
      'hover:text-mid hover:bg-brand-light/10 hover:rounded-lg',
      'lg:justify-center',
    ],
    chevron: ['h-4 w-4 shrink-0', 'transition-transform duration-200 ease-out'],
    panel: [
      'max-lg:max-h-0 max-lg:overflow-hidden max-lg:opacity-0',
      'max-lg:transition-all max-lg:duration-200 max-lg:ease-out',
      'lg:absolute lg:inset-x-0 lg:top-full lg:z-50',
      'lg:shadow/10 lg:shadow-lg',
      'lg:border-brand-light/20 lg:bg-white lg:py-8',
      'lg:transition-opacity lg:duration-200 lg:ease-out',
      'lg:pointer-events-none lg:max-h-0 lg:overflow-hidden lg:border-b-0 lg:opacity-0',
    ],
    panelContent: [
      'flex flex-col lg:flex-row',
      'mx-auto px-[5%] lg:container',
      'items-start justify-between gap-6',
    ],
  },

  variants: {
    mobileOpen: {
      true: {
        list: 'max-lg:flex max-lg:max-h-screen max-lg:opacity-100',
      },
      false: {
        list: 'max-lg:hidden max-lg:max-h-0 max-lg:opacity-0',
      },
    },
    mobileActive: {
      true: {
        chevron: 'max-lg:rotate-180',
        panel:
          'max-lg:max-h-none max-lg:overflow-visible max-lg:py-3 max-lg:pb-24 max-lg:opacity-100',
      },
      false: {},
    },
    desktopActive: {
      true: {
        chevron: 'lg:rotate-180',
        panel:
          'lg:pointer-events-auto lg:max-h-screen lg:overflow-visible lg:border-b lg:opacity-100',
      },
      false: {},
    },
  },

  defaultVariants: {
    mobileOpen: false,
    mobileActive: false,
    desktopActive: false,
  },
})
