'use client';
export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
      <spotLight position={[-5, 8, -5]} intensity={1} angle={0.3} penumbra={1} />
    </>
  );
}