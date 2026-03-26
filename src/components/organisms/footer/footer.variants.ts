import { tv } from 'tailwind-variants'

export const footerVariants = tv({
  slots: {
    root: 'bg-subtle',
    wrapper: 'items-start gap-12',
    topRow: 'flex w-full flex-col gap-10 lg:flex-row',
    connectCard: 'border-dark flex h-3/4 flex-col gap-4 rounded-[10px] border-2 p-10 lg:w-1/4',
    connectTitle: 'font-display text-dark text-base font-bold uppercase',
    connectDescription: 'text-dark text-base leading-relaxed',
    navGrid: 'grid w-full grid-cols-2 gap-8 lg:grid-cols-5',
    navColumn: 'flex flex-col gap-4',
    navTitle: 'font-display border-dark text-dark border-b-2 pb-2 text-base font-bold',
    navLink:
      'text-dark hover:text-mid hover:bg-brand-light/10 cursor-pointer p-2 text-base transition-colors hover:rounded-lg',
    logo: 'h-auto w-48',
    bottomBar: 'bg-brand-light/11 w-full',
    bottomContent: 'flex flex-col gap-8 py-8 lg:flex-row lg:items-end lg:justify-between',
    leftSection: 'flex flex-col gap-4',
    aiLabel: 'text-dark text-sm font-light',
    aiIcons: 'flex items-center gap-3',
    aiIcon: 'h-8 w-auto',
    copyright: 'text-dark text-sm font-light',
    rightSection: 'flex flex-col gap-6 lg:items-end',
    socialIcons: 'flex items-center gap-3',
    socialIcon: 'h-7 w-auto',
    legalLinks: 'flex gap-6',
    legalLink: 'text-dark text-sm font-light',
  },
})
