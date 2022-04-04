import useWindowDimensions from '../hooks/useWindowDimensions';
import '../styles/components/Hero.scss';

import FadeIn from './FadeIn';
import StaggeredText from './StaggeredText';
import RotatingText from './RotatingText';

const XsScreenStaggeredText = () => <></>;

const SScreenStaggeredText = () => (
    <>
        <h1 className='hero__title'>
            <StaggeredText text='Fron' />
        </h1>
        <h1 className='hero__title hero__title--second'>
            <StaggeredText text='end' />
        </h1>
        <h1 className='hero__title hero__title--second'>
            <StaggeredText text='Dev' />
        </h1>
        <h1 className='hero__title hero__title--second'>
            <StaggeredText text='elop' />
        </h1>
        <h1 className='hero__title hero__title--second'>
            <StaggeredText text='er' />
        </h1>
    </>
);

const LgScreenStaggeredText = () => (
    <>
        <h1 className='hero__title'>
            <StaggeredText text='Frontend' />
        </h1>
        <h1 className='hero__title hero__title--second'>
            <StaggeredText text='Developer' />
        </h1>
    </>
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
                <button className='hero__view-projects spaced-text'>
                    <RotatingText text={'View ☠ Projects ☠ '} />
                </button>
            </FadeIn>
        </section>
    );
};

export default Hero;
