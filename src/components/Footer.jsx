import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer__contents'>
                <button className='footer__arrow'>↑</button>
                <p className='spaced-text'>Adam Pugh</p>
                <p className='spaced-text footer__copyright'>© 2022 KOKONOKA</p>
            </div>
        </footer>
    );
};

export default Footer;
