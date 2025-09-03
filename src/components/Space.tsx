import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export const Space = () => {
  const starsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <>
      <Stars
        ref={starsRef}
        radius={300}
        depth={50}
        count={200000}
        factor={10}
        saturation={0}
        fade
        speed={1.5}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};