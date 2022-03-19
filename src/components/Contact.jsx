import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import '../styles/components/Contact.scss';

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

const Contact = () => {
    const { inView, ref } = useInView();
    const animationControl = useAnimation();

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
        <section id='contact' ref={ref}>
            <motion.div className='container' variants={opacityVariant} initial='initial' animate={animationControl}>
                <h2 className='title__h2'>
                    <span className='title__h2__number'>04</span>Cøntąct
                </h2>
                <a href='mailto:adampugh@zoho.com'>
                    <FontAwesomeIcon className='contact__mail' icon={faEnvelope} />
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
