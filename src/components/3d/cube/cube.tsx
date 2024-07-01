import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Cube: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [rotationVelocity, setRotationVelocity] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationVelocity.x;
            meshRef.current.rotation.y += rotationVelocity.y;

            if (!isDragging) {
                setRotationVelocity({
                    x: rotationVelocity.x * 0.8,
                    y: rotationVelocity.y * 0.8,
                });
            }
        }
    });

    const handlePointerDown = () => {
        setIsDragging(true);
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    const handlePointerMove = (event: any) => {
        if (isDragging) {
            setRotationVelocity({
                x: event.movementY * 0.001,
                y: event.movementX * 0.001,
            });
        }
    };

    return (
        <mesh
            ref={meshRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            scale={[2, 2, 2]} // Scale the box to make it fill half the screen width
            castShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color={'orange'} opacity={0.75} transparent={true} />
        </mesh>
    );
};

const FixedDirectionalLight: React.FC = () => {
    const lightRef = useRef<THREE.DirectionalLight>(null);

    useEffect(() => {
        if (lightRef.current) {
            lightRef.current.target.position.set(0, 0, 0);
            lightRef.current.target.updateMatrixWorld();
        }
    }, []);

    return (
        <>
            <directionalLight
                ref={lightRef}
                position={[0, 5, 0]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <primitive object={lightRef.current ? lightRef.current.target : new THREE.Object3D()} />
        </>
    );
};

export const Cube3D: React.FC = () => {
    return (
        <div style={{ width: '95vw', height: '80vh' }}>
            <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <FixedDirectionalLight />
                <Cube />
                <OrbitControls />
                <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial opacity={0.5} />
                </mesh>
            </Canvas>
        </div>
    );
};
