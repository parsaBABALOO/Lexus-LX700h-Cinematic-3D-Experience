'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Environment } from '@react-three/drei';
import Lexus from './Lexus';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
      {/* Pure black background for the 3D scene */}
      <color attach="background" args={['#000000']} />
      
      {/* High-end Studio Lighting Environment for realistic silver/metallic reflections */}
      <Environment preset="studio" intensity={1.5} />
      
      {/* Additional subtle lights to pop the metallic car paint */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />

      <Suspense fallback={null}>
        <Center>
          <Lexus />
        </Center>
      </Suspense>
      
      {/* OrbitControls configuration:
        - enableZoom={false} & enablePan={false} ensures mouse wheel scrolls the PAGE, not the 3D canvas.
        - autoRotate={true} keeps it turning beautifully until the user grabs it.
      */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}zz
        autoRotate={true} 
        autoRotateSpeed={3.0} 
        makeDefault
      />
    </Canvas>
  );
}