import { useState } from 'react';
import '../styles/components/Work.scss';

import Project from './Project';
import Example from '../assets/images/prepxp.png';
import Mobile from '../assets/images/mobile.png';

const projects = [
    {
        image: Example,
        device: Mobile,
        heading: 'Daily HIIT',
        gitHubLink: 'http://www.google.com',
        tech: 'REACT | NEXT | TYPESCRIPT',
        text: 'PrepXP is a web application built in React, Redux and Firebase that allows users to create and search for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive test suite built in Jest and Enzyme.',
        projectLink: 'http://www.cool.com',
    },
    {
        image: Example,
        device: Mobile,
        heading: 'PrepXP',
        gitHubLink: 'http://www.google.com',
        tech: 'REACT | REDUX | FIREBASE',
        text: 'PrepXP is a web application built in React, Redux and Firebase that allows users to create and search for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive test suite built in Jest and Enzyme.',
        projectLink: 'http://www.cool.com',
    },
    {
        image: Example,
        device: Mobile,
        heading: 'Kokonoka',
        gitHubLink: 'http://www.google.com',
        tech: 'REACT | FRAMER MOTION | SASS',
        text: 'PrepXP is a web application built in React, Redux and Firebase that allows users to create and search for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive test suite built in Jest and Enzyme.',
        projectLink: 'http://www.cool.com',
    },
    {
        image: Example,
        device: Mobile,
        heading: 'Portfolio',
        gitHubLink: 'http://www.google.com',
        tech: 'REACT | THREE.JS | SASS',
        text: 'PrepXP is a web application built in React, Redux and Firebase that allows users to create and search for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive test suite built in Jest and Enzyme.',
        projectLink: 'http://www.cool.com',
    },
];

const numerals = ['I', 'II', 'III', 'IV'];

const Work = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNumeralClick = (e) => {
        const datasetIndex = e.target.dataset.index;
        setActiveIndex(datasetIndex);
        setCurrentProjectIndex(datasetIndex);
    };

    const handleNextProject = () => {
        const nextIndex = projects[currentProjectIndex + 1] ? currentProjectIndex + 1 : 0;
        setActiveIndex(nextIndex);
        setCurrentProjectIndex(nextIndex);
    };

    return (
        <div id='work'>
            <div className='container work__header'>
                <div className='work__numerals'>
                    {numerals.map((text, index) => {
                        return (
                            <>
                                <button
                                    className={index === +activeIndex ? 'work__numerals__selected' : ''}
                                    data-index={index}
                                    onClick={handleNumeralClick}>
                                    {text}
                                </button>{' '}
                            </>
                        );
                    })}
                </div>
                <h2 className='title__h2'>
                    <span className='title__h2__number'>01</span>Wørk
                </h2>
                <div className='work__nextProject'>
                    <button onClick={handleNextProject} className='spaced-text'>
                        NEXT PROJECT
                    </button>
                </div>
            </div>
            <Project project={projects[currentProjectIndex]} />
        </div>
    );
};

export default Work;
