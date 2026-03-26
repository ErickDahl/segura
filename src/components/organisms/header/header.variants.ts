import { tv } from 'tailwind-variants'

export const headerVariants = tv({
  slots: {
    root: 'sticky top-0 z-50 w-full overflow-x-clip bg-white shadow-xl',
    nav: 'mx-auto flex max-w-[90%] items-center justify-between gap-2 py-2 text-sm lg:justify-center',
    navActions: 'flex gap-2',
    ctaLink: 'mx-[14%] my-2 lg:m-0',
  },
})
