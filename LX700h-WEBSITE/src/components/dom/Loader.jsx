'use client';
import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function Loader() {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // When 3D assets finish downloading, fade out seamlessly
    if (!active && progress === 100) {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000', // Absolute dark background from your reference image
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      {/* Luxury minimal typography for LEXUS branding */}
      <h1 style={{ 
        fontSize: '1.4rem', 
        fontWeight: '300', 
        letterSpacing: '14px', 
        color: '#ffffff',
        marginBottom: '35px',
        textTransform: 'uppercase',
        paddingLeft: '14px' // Perfectly centers the text by offsetting letter-spacing
      }}>
        LEXUS
      </h1>
      
      {/* The sleek circular spinning wheel */}
      <div className="premium-spinner"></div>
    </div>
  );
}