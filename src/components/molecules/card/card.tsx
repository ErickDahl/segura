import type { ReactNode } from 'react'
import { Link } from '@/components/atoms/link/link'
import { cardVariants } from './card.variants'

type CardProps = {
  icon: ReactNode
  title: string
  description: string
  note: string
  cta: string
  href: string
}

const { root, iconWrapper, title, description, note, actions } = cardVariants()

const Card = ({
  icon,
  title: cardTitle,
  description: cardDescription,
  note: cardNote,
  cta,
  href,
}: CardProps) => {
  return (
    <div className={root()}>
      <div className={iconWrapper()}>{icon}</div>
      <p className={title()}>{cardTitle}</p>
      <p className={description()}>{cardDescription}</p>
      <p className={note()}>✓ {cardNote}</p>
      <div className={actions()}>
        <Link href={href} variant="brand">
          {cta} ›
        </Link>
      </div>
    </div>
  )
}

export { Card, type CardProps }
