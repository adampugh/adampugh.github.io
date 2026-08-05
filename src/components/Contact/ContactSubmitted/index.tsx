import './styles.scss'
import { m } from '@/paraglide/messages.js'

const ContactSubmitted = () => {
  return (
    <div className="contact-submitted">
      <h3 className="contact-submitted__title">{m.contactSuccessTitle()}</h3>
      <p className="contact-submitted__message">{m.contactSuccessMessage()}</p>
    </div>
  )
}

export default ContactSubmitted
