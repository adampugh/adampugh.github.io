import './styles.scss'
import SkullRotation from '../../../assets/skull_rotation.webp'

const ContactLoader = () => {
  return (
    <div className="contact-loader">
      <h3 className="contact-loader__title">Loading</h3>
      <img className="contact-loader__skull" src={SkullRotation} alt="rotating skull" />
    </div>
  )
}

export default ContactLoader
