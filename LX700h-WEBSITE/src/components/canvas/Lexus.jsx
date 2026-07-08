'use client';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Lexus() {
  const { scene } = useGLTF('/models/lx700h.glb');
  const modelRef = useRef();

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={125}          
      position={[0, -1.5, 0]} 
    />
  );
}

useGLTF.preload('/models/lx700h.glb');