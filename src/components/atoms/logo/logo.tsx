import type { ImgHTMLAttributes } from 'react'
import logoSrc from '@/assets/images/logo.svg'

type LogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>

const Logo = ({ className, ...props }: LogoProps) => {
  return <img src={logoSrc} alt="Segura" className={className} {...props} />
}

export { Logo }
