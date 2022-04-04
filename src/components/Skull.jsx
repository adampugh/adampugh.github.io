import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import skullModel from '../assets/models/skull.glb';
import '../styles/components/Skull.scss';

const Skull = (props) => {
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
        <Canvas style={{ height: '100vh', width: '100%', position: 'absolute', zIndex: 1 }}>
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
    );
};
export default Skull;
