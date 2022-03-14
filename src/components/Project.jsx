import RotatingText from './RotatingText';
import ExampleImage from '../assets/images/example2.jpg';

import '../styles/components/Project.scss';

const Project = () => (
    <div className='project container'>
        <div className='image__wrapper'>
            <p className='image__text spaced-text'>PrepXP</p>
            <img src={ExampleImage} alt='prepxp' />
        </div>
        <div className='project__text'>
            <p className='project__text__tech spaced-text'>React | Redux | Firebase</p>
            <p>
                PrepXP is a web application built in React, Redux and Firebase that allows users to create and search
                for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive
                test suite built in Jest and Enzyme.
            </p>
            <div className='project__rotating__text spaced-text'>
                <RotatingText text='View ☠ Project ☠ ' />
            </div>
        </div>
    </div>
);

export default Project;
