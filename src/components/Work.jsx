import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/components/Work.scss';

import StaggeredText from './StaggeredText';
import Project from './Project';
import Example from '../assets/images/prepxp.png';
import Mobile from '../assets/images/prepxp-mobile.png';
import Kokonoka from '../assets/images/kokonoka.gif';
import KokonokaMobile from '../assets/images/kokonoka-mobile.png';

const opacityVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.6,
        },
    },
};

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
        gitHubLink: 'https://github.com/adampugh/prepxp',
        tech: 'REACT | REDUX | FIREBASE',
        text: 'PrepXP is a web application built in React, Redux and Firebase that allows users to create and search for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive test suite built in Jest and Enzyme.',
        projectLink: 'https://adampugh.github.io/prepxp/',
    },
    {
        image: Kokonoka,
        device: KokonokaMobile,
        heading: 'Kokonoka',
        gitHubLink: 'http://www.google.com',
        tech: 'REACT | FRAMER MOTION',
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
    const { inView, ref } = useInView();
    const animationControl = useAnimation();

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

    if (inView) {
        animationControl.start({
            opacity: 1,
            y: 0,
            transition: {
                type: 'intertia',
                when: 'beforeChildren',
                staggerChildren: 0.4,
                delay: 0.5,
                duration: 1,
            },
        });
    }

    return (
        <div id='work' ref={ref}>
            <motion.div
                className='container work__header'
                variants={opacityVariant}
                initial='initial'
                animate={animationControl}>
                <h2 className='title__h2'>
                    <span className='title__h2__number'>01</span>Work
                </h2>
            </motion.div>
            <Project project={projects[currentProjectIndex]} />
            <div className='container work__bottom'>
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
                <div className='work__nextProject'>
                    <button onClick={handleNextProject} className='spaced-text'>
                        NEXT PROJECT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Work;
