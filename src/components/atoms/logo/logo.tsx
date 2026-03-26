import type { ImgHTMLAttributes } from 'react'
import logoSrc from '@/assets/images/header/logo.svg'

type LogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>

const Logo = ({ className, ...props }: LogoProps) => {
  return <img width={190} src={logoSrc} alt="Segura" className={className} {...props} />
}

export { Logo }
