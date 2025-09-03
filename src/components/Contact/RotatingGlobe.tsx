import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const RotatingGlobe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * Math.PI;
    }
  });

  return (
    <Sphere ref={globeRef} args={[3, 25, 25]}>
      <meshStandardMaterial
        color="#25b1f3"
        wireframe
        transparent
        opacity={0.5}
      />
    </Sphere>
  );
};