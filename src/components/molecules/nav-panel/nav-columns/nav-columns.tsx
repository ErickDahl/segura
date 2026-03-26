import { ArrowUpRight } from 'lucide-react'
import { Link } from '@/components/atoms/link/link'
import type { NavColumnsData } from '@/components/organisms/header/header.data'
import { navColumnsVariants } from './nav-columns.variants'

const {
  wrapper,
  root,
  column,
  columnTitle,
  columnSpacer,
  link,
  externalIcon,
  banner,
  bannerContent,
  bannerTitle,
  bannerDescription,
} = navColumnsVariants()

type NavColumnsProps = {
  data: NavColumnsData
}

const NavColumns = ({ data }: NavColumnsProps) => {
  return (
    <div className={wrapper()}>
      <div className={root()}>
        {data.columns.map(({ id, title, links }) => (
          <div key={id} className={column()}>
            {title ? (
              <h4 className={columnTitle()}>{title}</h4>
            ) : (
              <div className={columnSpacer()} aria-hidden="true" />
            )}
            {links.map(({ id: linkId, label, href, external }) => (
              <a
                key={linkId}
                href={href}
                className={link()}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
                {!!external && <ArrowUpRight className={externalIcon()} aria-hidden="true" />}
              </a>
            ))}
          </div>
        ))}
      </div>

      {!!data.banner && (
        <div className={banner()}>
          <div className={bannerContent()}>
            <h4 className={bannerTitle()}>{data.banner.title}</h4>
            <p className={bannerDescription()}>{data.banner.description}</p>
          </div>
          <Link variant="secondary" size="sm" href={data.banner.ctaHref} className="shrink-0">
            {data.banner.ctaLabel}
          </Link>
        </div>
      )}
    </div>
  )
}

export { NavColumns }
