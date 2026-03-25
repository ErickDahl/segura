import { tv } from 'tailwind-variants'

export const announcementBarVariants = tv({
  slots: {
    root: 'bg-dark text-subtle font-display w-full py-2 text-center text-sm font-semibold md:py-3 md:text-base',
    content: [
      'mx-auto flex flex-col items-center justify-center gap-1 px-4 md:flex-row md:gap-2 md:px-6',
      'leading-snug text-pretty md:leading-normal',
    ],
  },
})
