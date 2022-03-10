import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import '../styles/components/About.scss';

const About = () => (
    <section id='about'>
        <div className='container about__text'>
            <h2 className='title__h2'>
                <span className='title__h2__number'>02</span>About
            </h2>
            <p>
                Self-taught developer, enthusiastic about learning and building purposeful projects with users in mind.
                Currently studying TypeScript, Three.js and Japanese.
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
                    <button>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </button>
                </a>
                <a href='https://www.linkedin.com/in/adam-pugh-59502b88/' target='_blank' rel='noreferrer'>
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                </a>
                <a href='https://twitter.com/adam_frontdev' target='_blank' rel='noreferrer'>
                    <button>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </button>
                </a>
            </div>
        </div>
    </section>
);

export default About;
