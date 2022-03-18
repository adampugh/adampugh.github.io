import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/Contact.scss';

const Contact = () => (
    <section id='contact'>
        <div className='container'>
            <h2 className='title__h2'>
                <span className='title__h2__number'>03</span>Cøntąct
            </h2>
            <a href='mailto:adampugh@zoho.com'>
                <FontAwesomeIcon className='contact__mail' icon={faEnvelope} />
            </a>
        </div>
    </section>
);

export default Contact;
