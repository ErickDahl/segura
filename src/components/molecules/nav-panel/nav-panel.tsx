import { Link } from '@/components/atoms/link/link'
import type { NavPanelData } from '@/components/organisms/header/header.data'
import { navPanelVariants } from './nav-panel.variants'

const {
  root,
  grid,
  item,
  itemTitle,
  itemDescription,
  banner,
  bannerContent,
  bannerTitle,
  bannerDescription,
} = navPanelVariants()

type NavPanelProps = {
  data: NavPanelData
}

const NavPanel = ({ data }: NavPanelProps) => {
  return (
    <div className={root()}>
      <div className={grid()}>
        {data.items.map(({ id, title, description, href }) => (
          <a key={id} href={href} className={item()}>
            <h4 className={itemTitle()}>{title}</h4>
            <p className={itemDescription()}>{description}</p>
          </a>
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

export { NavPanel }
