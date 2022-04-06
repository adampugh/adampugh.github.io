import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

const container = {
    initial: { y: 0 },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const listItem = {
    initial: {
        opacity: 0,
        y: 400,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ...transition },
    },
};

const StaggeredText = ({ text, id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('animate');
        }
    }, [controls, inView]);

    return (
        <motion.span variants={container} initial='initial' animate={controls} ref={ref} id={id}>
            {text.split('').map((item, i) => (
                <motion.span key={i} variants={listItem} style={{ display: 'inline-block' }}>
                    {item}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default StaggeredText;
