import './styles.scss'
import { useState } from 'react'
import { m } from '@/paraglide/messages.js'
import { IoIosSend } from 'react-icons/io'
import { BsArrowUp } from 'react-icons/bs'
import Guitar from '../../assets/guitar.webp'
import Plant1 from '../../assets/plant-1.webp'
import { useForm, ValidationError } from '@formspree/react'
import ContactLoader from './ContactLoader'
import ContactSubmitted from './ContactSubmitted'
import { useLettersRevealMask } from '@/hooks/useGSAPAnimation'

const MIN_MESSAGE_LENGTH = 10

type ClientErrors = {
  email?: string
  message?: string
}

const Contact = () => {
  const [state, handleSubmit] = useForm('mqpzzrne')
  const [loading, setLoading] = useState(false)
  const [clientErrors, setClientErrors] = useState<ClientErrors>({})
  const { ref: contactHeadingRef } = useLettersRevealMask<HTMLHeadingElement>()

  const validate = (formData: FormData): ClientErrors => {
    const errors: ClientErrors = {}
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = m.contactErrorEmail()
    }
    if (message.trim().length < MIN_MESSAGE_LENGTH) {
      errors.message = m.contactErrorMessageLength({ min: MIN_MESSAGE_LENGTH })
    }
    return errors
  }

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const errors = validate(formData)
    setClientErrors(errors)

    if (Object.keys(errors).length > 0) {
      event.preventDefault()
      return setLoading(false)
    }

    handleSubmit(event).then(() => {
      setLoading(false)
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title" ref={contactHeadingRef}>
          {m.contactTitle()}
        </h2>
        <div className="contact__form__wrapper">
          <form onSubmit={onSubmit} className="contact__form">
            {loading ? <ContactLoader /> : <></>}
            {state.succeeded ? <ContactSubmitted /> : <></>}
            <label htmlFor="email" className="contact__form__label">
              {m.contactEmailLabel()}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              aria-required="true"
              aria-invalid={Boolean(clientErrors.email)}
              aria-describedby={clientErrors.email ? 'email-error' : undefined}
            />
            {clientErrors.email && (
              <p id="email-error" className="contact__form__error">
                {clientErrors.email}
              </p>
            )}
            <label htmlFor="message" className="contact__form__label">
              {m.contactMessageLabel()}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              aria-invalid={Boolean(clientErrors.message)}
              aria-describedby={clientErrors.message ? 'message-error' : undefined}
            />
            {clientErrors.message && (
              <p id="message-error" className="contact__form__error">
                {clientErrors.message}
              </p>
            )}
            <p className="contact__form__error">
              <ValidationError errors={state.errors} />
            </p>
            <button type="submit" className="contact__form__button">
              {m.contactButtonText()} <IoIosSend size={20} />
            </button>
          </form>
          <div className="contact__guitar">
            <img src={Guitar} alt="guitar" />
          </div>
          <div className="contact__plant">
            <img src={Plant1} alt="plant" />
          </div>
        </div>
      </div>
      <div className="contact__scroll-to-top__wrapper">
        <button
          className="contact__scroll-to-top"
          onClick={() =>
            scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
          disabled={state.submitting}
        >
          {m.backToTopLink()} <BsArrowUp size={18} />
        </button>
      </div>
    </section>
  )
}

export default Contact
