import whatsappIcon from '@/assets/images/footer/12.svg'
import { whatsappButtonVariants } from './whatsapp-button.variants'

const { root, link, icon } = whatsappButtonVariants()

const WhatsappButton = () => {
  return (
    <div className={root()}>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={link()}
        aria-label="Fale conosco no WhatsApp"
      >
        <img src={whatsappIcon} alt="" aria-hidden="true" className={icon()} />
      </a>
    </div>
  )
}

export { WhatsappButton }
