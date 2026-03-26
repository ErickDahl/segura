import { tv } from 'tailwind-variants'

export const faqVariants = tv({
  slots: {
    root: 'bg-dark',
    content: 'relative grid w-full grid-cols-1 gap-10 lg:grid-cols-2',
    media: 'h-fit overflow-hidden rounded-[10px]',
    image: 'h-auto w-full object-cover',
    ctaRow: 'flex flex-col items-center justify-center gap-8 md:flex-row',
  },
})
