import whatsappIcon from '@/assets/images/footer/12.svg'
import { whatsappButtonVariants } from './whatsapp-button.variants'
import { useTranslation } from 'react-i18next'

const { root, link, icon } = whatsappButtonVariants()

const WhatsappButton = () => {
  const { t } = useTranslation()

  return (
    <div className={root()}>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={link()}
        aria-label={t('common.whatsappLabel')}
      >
        <img src={whatsappIcon} alt="" aria-hidden="true" className={icon()} />
      </a>
    </div>
  )
}

export { WhatsappButton }
