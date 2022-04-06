import '../styles/components/Footer.scss';
import scrollToElement from '../utils/scrollToElement';

const Footer = () => (
    <footer>
        <div className='footer__contents'>
            <button className='footer__arrow' aria-label='return to top' onClick={() => scrollToElement('hero')}>
                ↑
            </button>
            <p className='spaced-text'>Adam Pugh</p>
            <p className='spaced-text footer__copyright'>© 2022 KOKONOKA</p>
        </div>
    </footer>
);

export default Footer;
