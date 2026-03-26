import type { HTMLAttributes, ReactNode } from 'react'
import { statCardVariants } from './stat-card.variants'

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  value: string
  children: ReactNode
}

const { root, value: valueClass, description } = statCardVariants()

const StatCard = ({ value, children, className, ...props }: StatCardProps) => {
  return (
    <div className={root({ className })} {...props}>
      <p className={valueClass()}>{value}</p>
      <p className={description()}>{children}</p>
    </div>
  )
}

export { StatCard }
