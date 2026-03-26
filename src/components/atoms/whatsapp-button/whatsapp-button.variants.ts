import { tv } from 'tailwind-variants'

export const whatsappButtonVariants = tv({
  slots: {
    root: 'fixed right-6 bottom-6 z-50',
    link: 'flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110',
    icon: 'h-7 w-auto brightness-0 invert',
  },
})
