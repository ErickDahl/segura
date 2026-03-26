import { tv } from 'tailwind-variants'

export const complianceVariants = tv({
  slots: {
    root: 'bg-dark',
    wrapper: 'items-start gap-10',
    content: 'flex w-full flex-col-reverse gap-8 lg:flex-row lg:items-center',
    textCol: 'flex flex-col gap-6 lg:w-1/2',
    description: 'text-subtle max-w-lg text-xl leading-relaxed',
    tagline: 'font-display text-subtle text-lg italic',
    media: 'overflow-hidden rounded-[10px] lg:w-1/2',
    image: 'h-auto w-full object-cover',
    badgesSection: 'flex w-full flex-col gap-4',
    badgesLabel: 'text-subtle text-base',
    badgesRow: 'flex w-full flex-col items-center gap-3 lg:flex-row lg:gap-8',
    badgeIcon: 'h-5 w-auto transition-all duration-150 group-hover:brightness-0',
  },
})
