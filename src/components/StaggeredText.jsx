import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

const StaggeredText = ({ text }) => {
    return (
        <motion.span variants={container} initial='initial' animate='animate'>
            {text.split('').map((item, i) => (
                <motion.span key={i} variants={listItem} style={{ display: 'inline-block' }}>
                    {item}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default StaggeredText;
