import { tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: [
    'flex w-fit cursor-pointer items-center gap-2',
    'font-display rounded-[10px] border-2 font-semibold',
    'max-w-96 px-4 py-3',
    'transition-all duration-150 ease-in-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      primary: [
        'border-orange bg-orange',
        'text-brand-black focus-visible:outline-orange',
        'hover:bg-dark hover:border-dark hover:text-subtle hover:focus-visible:outline-dark',
      ],
      secondary: [
        'border-dark bg-dark',
        'text-subtle focus-visible:outline-dark',
        'hover:bg-brand-black hover:border-brand-black hover:text-subtle hover:focus-visible:outline-brand-black',
      ],
      brand: [
        'border-brand bg-brand',
        'text-dark focus-visible:outline-brand',
        'hover:bg-brand-black hover:border-brand-black hover:text-subtle hover:focus-visible:outline-brand-black',
      ],
      'secondary-ghost': [
        'border-dark bg-transparent',
        'text-dark focus-visible:outline-dark',
        'hover:bg-dark hover:border-dark hover:text-subtle hover:focus-visible:outline-dark',
      ],
      'brand-ghost': [
        'border-brand-light bg-transparent',
        'text-brand-light focus-visible:outline-brand-light',
        'hover:bg-brand-light hover:border-brand-light hover:text-dark hover:focus-visible:outline-brand-light',
      ],
      'brand-ghost-invert': [
        'border-default bg-transparent',
        'text-default focus-visible:outline-default',
        'hover:bg-default hover:border-default hover:text-brand-black hover:focus-visible:outline-default',
      ],
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
