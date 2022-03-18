import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import RotatingText from './RotatingText';

import '../styles/components/Project.scss';

const Project = ({ project }) => {
    const { heading, image, gitHubLink, tech, text, projectLink } = project;

    return (
        <div id='project'>
            <div className='container project__grid'>
                <div className='project__grid__images'>
                    <img src={image} alt='plants' />
                </div>
                <div className='project__grid__info'>
                    <div className='project__grid__info__heading'>
                        <h2 className='spaced-text'>{heading}</h2>
                        <a href={gitHubLink} target='_blank' rel='noreferrer'>
                            <button>
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </button>
                        </a>
                    </div>
                    <h4 className='project__grid__info__tech spaced-text'>{tech}</h4>
                    <p>{text}</p>
                    <div className='project__grid__info__button'>
                        <RotatingText className='spaced-text' text='VIEW ☠ PROJECT ☠ ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
