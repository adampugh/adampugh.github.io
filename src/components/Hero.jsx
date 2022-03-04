import '../styles/components/Hero.scss';

import HeroText from './HeroText';
import RotatingText from './RotatingText';

const Hero = () => {
    return (
        <section className='container' id='hero'>
            <div className='hero__title__container'>
                <HeroText />
            </div>

            <p className='hero__copyright spaced-text'>© 2022 KOKONOKA</p>
            <button className='hero__view-projects spaced-text'>
                <RotatingText text={'View ☠ Projects ☠ '} />
            </button>
        </section>
    );
};

export default Hero;
