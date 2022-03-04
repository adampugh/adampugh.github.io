import { motion } from 'framer-motion';

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

const FadeIn = ({ children }) => {
    console.log('fade in ', children);

    return (
        <motion.div variants={opacityVariant} style={{ display: 'inline' }} initial='initial' animate='animate'>
            {children}
        </motion.div>
    );
};

export default FadeIn;
