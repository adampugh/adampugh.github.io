import useWindowDimensions from '../hooks/useWindowDimensions';
import '../styles/components/Hero.scss';

import FadeIn from './FadeIn';
import StaggeredText from './StaggeredText';
import RotatingText from './RotatingText';

import scrollToElement from '../utils/scrollToElement';

const XsScreenStaggeredText = () => <></>;

const SScreenStaggeredText = () => (
    <h1>
        <span className='hero__title'>
            <StaggeredText text='Fron' />
        </span>
        <span className='hero__title hero__title--second'>
            <StaggeredText text='tend' />
        </span>
        <span className='hero__title hero__title--second'>
            <StaggeredText text='Dev' />
        </span>
        <span className='hero__title hero__title--second'>
            <StaggeredText text='elop' />
        </span>
        <span className='hero__title hero__title--second'>
            <StaggeredText text='er' />
        </span>
    </h1>
);

const LgScreenStaggeredText = () => (
    <h1>
        <span className='hero__title'>
            <StaggeredText text='Frontend' />
        </span>
        <span className='hero__title hero__title--second'>
            <StaggeredText text='Developer' />
        </span>
    </h1>
);

const Hero = () => {
    const { width } = useWindowDimensions();

    return (
        <section className='container' id='hero'>
            <div className='hero__title__container'>
                <div className='hero__title__wrapper'>
                    {width < 300 ? (
                        <XsScreenStaggeredText />
                    ) : width < 920 ? (
                        <SScreenStaggeredText />
                    ) : (
                        <LgScreenStaggeredText />
                    )}
                </div>
            </div>
            <FadeIn>
                <p className='hero__copyright spaced-text'>© 2022 KOKONOKA</p>
                <button
                    className='hero__view-projects spaced-text'
                    aria-label='view projects'
                    onClick={() => scrollToElement('work')}>
                    <RotatingText text={'View ☠ Projects ☠ '} />
                </button>
            </FadeIn>
        </section>
    );
};

export default Hero;
