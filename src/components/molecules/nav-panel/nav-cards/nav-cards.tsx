import { Link } from '@/components/atoms/link/link'
import type { NavCardsData } from '@/components/organisms/header/header.data'
import { navCardsVariants } from './nav-cards.variants'

const { root, card, cardTitle, cardDescription } = navCardsVariants()

type NavCardsProps = {
  data: NavCardsData
}

const NavCards = ({ data }: NavCardsProps) => {
  return (
    <div className={root()}>
      {data.cards.map(({ id, title, description, ctaLabel, ctaHref }) => (
        <div key={id} className={card()}>
          <h4 className={cardTitle()}>{title}</h4>
          <p className={cardDescription()}>{description}</p>
          <Link variant="secondary-ghost" size="sm" href={ctaHref}>
            {ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  )
}

export { NavCards }
