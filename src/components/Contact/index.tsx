import './styles.scss'
import { IoIosSend } from 'react-icons/io'
import { BsArrowUp } from 'react-icons/bs'
import Guitar from '../../assets/guitar.webp'
import Plant1 from '../../assets/plant-1.webp'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__form__wrapper">
          <form action="" className="contact__form">
            <label htmlFor="email" className="contact__form__label">
              Email
            </label>
            <input name="email" aria-required="true" />
            <label htmlFor="message" className="contact__form__label">
              Message
            </label>
            <textarea rows={6} />
            <button type="submit" className="contact__form__button">
              Send Message <IoIosSend size={20} />
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
        >
          Back to the top <BsArrowUp size={26} />
        </button>
      </div>
    </section>
  )
}

export default Contact
