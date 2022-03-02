import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import '../styles/components/About.scss';

const About = () => {
    return (
        <section id='about'>
            <div className='container about__text'>
                <h2 className='title__h2'>
                    <span className='title__h2__number'>02</span>About
                </h2>
                <p>
                    Self-taught developer, enthusiastic about learning and building purposeful projects with users in
                    mind. Currently studying TypeScript, D3.js and Japanese Self-taught developer, enthusiastic about
                    learning and building purposeful projects with users in mind. Currently studying TypeScript, D3.js
                    and Japanese.
                    <br />
                    <br />
                    <br />
                    <br />
                    初めまして
                    <br />
                    <br />
                </p>
                <div className='about__icons'>
                    <button>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
