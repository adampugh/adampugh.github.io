import '../styles/components/Hero.scss';

import FadeIn from './FadeIn';
import StaggeredText from './StaggeredText';
import RotatingText from './RotatingText';

const Hero = () => {
    return (
        <section className='container' id='hero'>
            <div className='hero__title__container'>
                <div className='hero__title__wrapper'>
                    <h1 className='hero__title'>
                        <StaggeredText text='Frontend' />
                    </h1>
                    <h1 className='hero__title hero__title--second'>
                        <StaggeredText text='Developer' />
                    </h1>
                </div>
            </div>
            <FadeIn>
                <p className='hero__copyright spaced-text'>© 2022 KOKONOKA</p>
                <button className='hero__view-projects spaced-text'>
                    <RotatingText text={'View ☠ Projects ☠ '} />
                </button>
            </FadeIn>
        </section>
    );
};

export default Hero;
