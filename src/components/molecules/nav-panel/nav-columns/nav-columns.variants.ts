import { tv } from 'tailwind-variants'

export const navColumnsVariants = tv({
  slots: {
    wrapper: 'flex w-full flex-col gap-6',
    root: 'grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4',
    column: 'flex flex-col gap-3',
    columnTitle: 'font-display text-dark border-dark border-b pb-2 text-sm font-bold',
    columnSpacer: 'border-dark border-b pb-2',
    link: 'text-dark hover:text-mid hover:bg-brand-light/10 flex items-center gap-1 py-2 pl-3 text-sm transition-colors hover:rounded-lg',
    externalIcon: 'h-3 w-3 shrink-0',
    banner:
      'bg-brand-light flex flex-col gap-4 rounded-[10px] p-6 lg:flex-row lg:items-center lg:justify-between',
    bannerContent: 'flex flex-col gap-2',
    bannerTitle: 'font-display text-dark text-base font-bold',
    bannerDescription: 'text-dark max-w-3xl text-sm leading-relaxed',
  },
})
