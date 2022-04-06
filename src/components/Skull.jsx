import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import skullModel from '../assets/models/skull.glb';
import '../styles/components/Skull.scss';

const opacityVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

const Skull = (props) => {
    const { inView, ref } = useInView();
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            opacity: 1,
            y: 0,
            transition: {
                type: 'intertia',
                when: 'afterChildren',
                delay: 0.5,
                duration: 0.6,
            },
        });
    }

    const gltf = useLoader(GLTFLoader, skullModel);
    const skull = gltf.scene;
    skull.scale.set(0.25, 0.25, 0.25);
    skull.position.y = -1.9;
    skull.rotation.y = 0.31;
    skull.rotation.x = 0.5;

    const lightShadow = {
        mapSize: {
            height: 1024,
            width: 1024,
        },
        camera: {
            far: 1,
            left: -7,
            top: 7,
            right: 7,
            bottom: -7,
        },
    };

    return (
        <motion.div
            className='skullContainer'
            ref={ref}
            variants={opacityVariant}
            initial='initial'
            animate={animationControl}>
            <Canvas>
                <ambientLight color={'#ffffff'} intensity={'0.4'} />
                <directionalLight
                    color={'#90EE90'}
                    intensity={'1'}
                    castShadow={true}
                    shadow={lightShadow}
                    position={[3, 0.15, -0.94]}
                />
                <directionalLight
                    color={'#FF00FF'}
                    intensity={'0.5'}
                    castShadow={true}
                    shadow={lightShadow}
                    position={[-0.9, -0.2, -0.24]}
                />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <primitive object={skull} />
                </Suspense>
            </Canvas>
        </motion.div>
    );
};
export default Skull;
