import { tv } from 'tailwind-variants'

export const heroVariants = tv({
  slots: {
    root: 'relative min-h-150 bg-cover bg-center',
    overlay: 'bg-brand-black/75 absolute inset-0',
    wrapper: 'relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_2fr]',
    leftCol: 'flex w-full flex-col items-start gap-6 lg:w-[80%]',
    headingNormal: 'font-normal',
    headingItalic: 'italic',
    description: 'max-w-xl text-lg leading-relaxed text-white/90',
    highlight: 'text-brand font-semibold',
    logo: 'h-10 w-auto',
    actions: 'flex flex-wrap gap-4',
    rightCol: 'border-brand border-l-2 pl-6',
    statText: 'text-brand text-lg leading-snug',
  },
})
