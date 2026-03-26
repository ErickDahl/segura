import { tv } from 'tailwind-variants'

export const advantagesVariants = tv({
  slots: {
    root: 'bg-subtle',
    wrapper: 'flex flex-col gap-12 md:flex-row md:items-start',
    stickyCol: 'flex w-full flex-col gap-8 self-start md:sticky md:top-1/6 md:w-2/5',
    description: 'text-dark text-lg leading-relaxed',
    ctaRow: 'flex gap-3',
    grid: 'grid grid-cols-1 gap-8 lg:grid-cols-2',
  },
})
