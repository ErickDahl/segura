import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: [
    'flex w-fit cursor-pointer items-center gap-2',
    'font-display rounded-[10px] border-2 font-semibold',
    'transition-all duration-150 ease-in-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      primary: [
        'border-orange bg-orange px-4 py-2 whitespace-nowrap',
        'focus-visible:outline-orange text-brand-black',
        'hover:bg-dark hover:focus-visible:outline-dark hover:border-dark hover:text-subtle',
      ],
      secondary: [
        'border-dark bg-dark flex-wrap px-4 py-3',
        'focus-visible:outline-dark text-subtle',
        'hover:bg-brand-black hover:focus-visible:outline-brand-black hover:border-brand-black hover:text-subtle',
      ],
      ghost: [
        'border-transparent bg-transparent px-4 py-2',
        'text-brand-black hover:bg-subtle focus-visible:outline-dark',
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
