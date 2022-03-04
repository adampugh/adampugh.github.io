import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};

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

const container2 = {
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

const listItem2 = {
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

const HeroText = () => {
    return (
        <motion.div className='hero__title__wrapper'>
            <motion.h1 className='hero__title' variants={container} initial='initial' animate='animate'>
                {'Frontend'.split('').map((item, i) => (
                    <motion.span key={i} variants={listItem} style={{ display: 'inline-block' }}>
                        {item}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.h1 className='hero__title' variants={container2} initial='initial' animate='animate'>
                {'Developer'.split('').map((item, i) => (
                    <motion.span key={i} variants={listItem2} style={{ display: 'inline-block' }}>
                        {item}
                    </motion.span>
                ))}
            </motion.h1>
        </motion.div>
    );
};

export default HeroText;
