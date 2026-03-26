import { tv } from 'tailwind-variants'

export const navPanelVariants = tv({
  slots: {
    root: 'flex w-full flex-col gap-6',
    grid: 'grid grid-cols-1 gap-6 lg:grid-cols-2',
    item: 'border-dark hover:bg-brand-light/10 flex flex-col gap-1 border-l py-2 pl-3 hover:rounded-lg',
    itemTitle: 'font-display text-dark text-sm font-bold',
    itemDescription: 'text-dark text-sm leading-relaxed font-light',
    banner:
      'bg-brand-light flex flex-col gap-4 rounded-[10px] p-6 lg:flex-row lg:items-center lg:justify-between',
    bannerContent: 'flex flex-col gap-2',
    bannerTitle: 'font-display text-dark text-base font-bold',
    bannerDescription: 'text-dark max-w-3xl text-sm leading-relaxed',
  },
})
