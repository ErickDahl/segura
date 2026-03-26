import { Link } from '@/components/atoms/link/link'
import type { NavPartnersData } from '@/components/organisms/header/header.data'
import { navPartnersVariants } from './nav-partners.variants'

const { root, column, columnTitle, link, ctaCard, ctaTitle, ctaDescription } = navPartnersVariants()

type NavPartnersProps = {
  data: NavPartnersData
}

const NavPartners = ({ data }: NavPartnersProps) => {
  return (
    <div className={root()}>
      <div className={column()}>
        <h4 className={columnTitle()}>{data.linkColumn.title}</h4>
        {data.linkColumn.links.map(({ id, label, href }) => (
          <a key={id} href={href} className={link()}>
            {label}
          </a>
        ))}
      </div>

      <div className={ctaCard()}>
        <h4 className={ctaTitle()}>{data.ctaCard.title}</h4>
        <p className={ctaDescription()}>{data.ctaCard.description}</p>
        <Link variant="secondary-ghost" size="sm" href={data.ctaCard.ctaHref}>
          {data.ctaCard.ctaLabel}
        </Link>
      </div>
    </div>
  )
}

export { NavPartners }
