import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import RotatingText from './RotatingText';

import '../styles/components/Project.scss';

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

const Project = ({ project }) => {
    const { heading, image, device, gitHubLink, tech, text, projectLink } = project;
    const { inView, ref } = useInView();
    const animationControl = useAnimation();

    if (inView) {
        // individual animationControls ??
        animationControl.start({
            opacity: 1,
            x: 0,
            transition: {
                delay: 1,
                duration: 0.7,
            },
        });
    }

    return (
        <motion.div id='project' ref={ref} initial='initial' animate={animationControl} variants={opacityVariant}>
            <motion.div
                className='container project__grid'
                key='projectKey'
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 1,
                        duration: 0.7,
                    },
                }}
                initial={{ opacity: 0, x: 100 }}
                exit={{
                    opacity: 0,
                    x: [0, -50, 100],
                    transition: {
                        duration: 0.7,
                        times: [0, 0.9, 1],
                    },
                }}>
                <div className='project__grid__images'>
                    <img className='project__grid__images__mainImage' src={image} alt='plants' />
                    <motion.img
                        initial={{ opacity: 0, x: -100, y: 50 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: {
                                delay: 1,
                                duration: 0.7,
                            },
                        }}
                        exit={{
                            opacity: 1,
                            x: [0, -100, -100],
                            y: [0, 0, 50],
                            transition: {
                                duration: 0.7,
                                times: [0, 0.9, 1],
                            },
                        }}
                        className='project__grid__images__device'
                        src={device}
                        alt='device'></motion.img>
                </div>
                <div className='project__grid__info'>
                    <div className='project__grid__info__heading'>
                        <h4 className='spaced-text'>{heading}</h4>
                        <a href={gitHubLink} target='_blank' rel='noreferrer'>
                            <button>
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </button>
                        </a>
                    </div>
                    <h4 className='project__grid__info__tech spaced-text'>{tech}</h4>
                    <p>{text}</p>
                    <div className='project__grid__info__button'>
                        <a href={projectLink} target='_blank' rel='noreferrer'>
                            <RotatingText className='spaced-text' text='VIEW ☠ PROJECT ☠ ' />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Project;
