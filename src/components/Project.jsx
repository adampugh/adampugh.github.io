import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import RotatingText from './RotatingText';

import '../styles/components/Project.scss';

const Project = ({ project }) => {
    const { heading, image, device, gitHubLink, tech, text, projectLink } = project;

    return (
        <motion.div id='project'>
            <motion.div
                className='container project__grid'
                key='projectKey'
                initial={{ opacity: 0, x: 100 }}
                exit={{
                    opacity: 0,
                    x: [0, -100, 100],
                    transition: {
                        duration: 0.7,
                        times: [0, 0.9, 1],
                    },
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 1,
                        duration: 0.7,
                    },
                }}>
                <div className='project__grid__images'>
                    <img className='project__grid__images__mainImage' src={image} alt='plants' />
                    <img className='project__grid__images__device' src={device} alt='device' />
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
