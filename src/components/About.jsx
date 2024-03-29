import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/components/About.scss';
import StaggeredText from './StaggeredText';

const opacityVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.6,
        },
    },
};

const About = () => {
    const { inView, ref } = useInView();
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            opacity: 1,
            y: 0,
            transition: {
                type: 'intertia',
                when: 'afterChildren',
                delay: 0.5,
                duration: 1,
            },
        });
    }
    return (
        <section id='about' ref={ref}>
            <motion.div
                className='container about__text'
                variants={opacityVariant}
                initial='initial'
                animate={animationControl}>
                <h2 className='title__h2' style={{ overflow: 'hidden' }}>
                    <span className='title__h2__number'>03</span>
                    <StaggeredText text='About' />
                </h2>
                <p>
                    Self-taught developer, enthusiastic about learning and building purposeful projects with users in
                    mind. Currently studying TypeScript, Three.js and Japanese.
                    <br />
                    <br />
                    <br />
                    <br />
                    初めまして
                    <br />
                    <br />
                </p>
                <div className='about__icons'>
                    <a href='https://github.com/adampugh' target='_blank' rel='noreferrer'>
                        <button aria-label='github'>
                            <FontAwesomeIcon icon={faGithubSquare} />
                        </button>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/adam-pugh-59502b88/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='linkedin'>
                        <button aria-label='linkedin'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>
                    </a>
                    <a href='https://twitter.com/adam_frontdev' target='_blank' rel='noreferrer' aria-label='twitter'>
                        <button aria-label='twitter'>
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
