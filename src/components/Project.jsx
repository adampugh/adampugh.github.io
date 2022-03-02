import RotatingText from './RotatingText';
import ExampleImage from '../assets/images/example.png';

import '../styles/components/Project.scss';

const Project = () => {
    return (
        <div className='project container'>
            <div className='image__wrapper'>
                <p className='image__text spaced-text'>PrepXP</p>
                <img src={ExampleImage} alt='prepxp' />
            </div>
            <div className='project__text'>
                <p className='project__text__tech spaced-text'>React | Node | TypeScript</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae accusantium, numquam non, optio est
                    nobis, odit incidunt adipisci consequuntur cumque sequi rem nihil saepe earum obcaecati eius libero
                    explicabo magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                    explicabo?
                </p>
                <div className='project__rotating__text spaced-text'>
                    <RotatingText text='View ☠ Project ☠ ' />
                </div>
            </div>
        </div>
    );
};

export default Project;
