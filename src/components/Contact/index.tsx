import './styles.scss'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact</h2>
        <form action="" className="contact__form">
          <label htmlFor="email" className="contact__form__label">
            Email
          </label>
          <input name="email" aria-required="true" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
