import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/components/Work.scss';

import Project from './Project';
import StaggeredText from './StaggeredText';
import { projects, numerals } from '../assets/data/projects';

const opacityVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            when: 'afterChildren',
            delay: 0.1,
            duration: 0.6,
        },
    },
};

const Work = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
    }, [controls, inView]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 700);
        return () => clearTimeout(timer);
    }, [isAnimating]);

    const updateProject = (index) => {
        setActiveIndex(index);
        setIsAnimating(true);
        setCurrentProjectIndex(index);
    };

    const handleNumeralClick = (e) => {
        const datasetIndex = +e.target.dataset.index;
        updateProject(datasetIndex);
    };

    const handleNextProject = () => {
        console.log(currentProjectIndex);
        const nextIndex = projects[currentProjectIndex + 1] ? currentProjectIndex + 1 : 0;
        updateProject(nextIndex);
    };

    return (
        <div id='work'>
            <motion.div
                className='container work__header'
                variants={opacityVariant}
                initial='initial'
                animate={controls}
                ref={ref}>
                <div className='work__numerals'>
                    {numerals.map((text, index) => (
                        <button
                            key={text}
                            aria-label='next project'
                            className={index === +activeIndex ? 'work__numerals__selected' : ''}
                            data-index={index}
                            onClick={handleNumeralClick}>
                            {text}
                        </button>
                    ))}
                </div>
                <h2 className='title__h2' style={{ overflow: 'hidden' }}>
                    <span className='title__h2__number'>01</span>
                    <StaggeredText text='Work' id='work__heading' />
                </h2>
                <div className='work__nextProject'>
                    <button onClick={handleNextProject} className='spaced-text' aria-label='next project'>
                        NEXT PROJECT
                    </button>
                </div>
            </motion.div>
            <AnimatePresence>
                {!isAnimating && <Project project={projects[currentProjectIndex]} isAnimating={isAnimating} />}
            </AnimatePresence>
        </div>
    );
};

export default Work;
