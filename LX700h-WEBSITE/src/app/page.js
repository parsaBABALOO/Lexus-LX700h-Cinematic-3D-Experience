'use client';
import { useState, useEffect } from 'react';
import Scene from '../components/canvas/Scene';
import Overlay from '../components/dom/Overlay';

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    // Premium XHR preloader to natively cache the cinematic asset
    const preloadVideo = async () => {
      try {
        const response = await fetch('/lexus-video.mp4');
        if (!response.ok) throw new Error('Network response failure');
        
        const reader = response.body.getReader();
        const contentLength = +response.headers.get('Content-Length');
        
        let receivedLength = 0;
        
        while(true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          receivedLength += value.length;
          if (contentLength) {
            setDownloadProgress(Math.round((receivedLength / contentLength) * 100));
          }
        }
        
        setVideoReady(true);
      } catch (error) {
        console.error("Preloading checkpoint bypassed:", error);
        setVideoReady(true);
      }
    };

    preloadVideo();
  }, []);

  return (
    <main style={{ 
      position: 'relative', 
      width: '100vw', 
      height: '100vh',           // FIXED: Locked viewport height to ensure 100% smooth video playback
      overflowY: 'auto',         // FIXED: Enabled natural vertical scrolling within the optimized viewport
      overflowX: 'hidden', 
      backgroundColor: '#000000'
    }}>
      
      {/* High-End Luxury Cinematic Preloader (Porsche-Inspired Typography) */}
      {!videoReady && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#050505',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          fontFamily: '"Times New Roman", Times, serif' // Elegant serif branding style
        }}>
          {/* Premium Brand Title */}
          <h1 style={{ 
            letterSpacing: '16px', 
            fontWeight: '300', 
            fontSize: '2.5rem', 
            marginBottom: '4px', 
            textTransform: 'uppercase',
            opacity: 0.95
          }}>
            LEXUS
          </h1>
          
          {/* Elite Subtitle */}
          <h2 style={{ 
            letterSpacing: '6px', 
            fontWeight: '300', 
            fontSize: '0.75rem', 
            marginBottom: '50px', 
            textTransform: 'uppercase',
            color: '#8e8e93',
            fontFamily: 'sans-serif'
          }}>
            LX 700h • Cinematic Preloader
          </h2>
          
          {/* Ultra-Thin Minimalist Progress Line */}
          <div style={{ width: '240px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', position: 'relative' }}>
            <div style={{ 
              width: `${downloadProgress}%`, 
              height: '100%', 
              backgroundColor: '#ffffff', 
              transition: 'width 0.1s ease'
            }} />
          </div>
          
          {/* Sleek Progress Percentage */}
          <span style={{ 
            marginTop: '16px', 
            fontSize: '0.75rem', 
            color: '#8e8e93', 
            letterSpacing: '2px',
            fontFamily: 'sans-serif'
          }}>
            {downloadProgress}%
          </span>
        </div>
      )}

      {/* 3D WebGL Canvas Layer - Overridden inline for absolute layout sync */}
      <div 
        className="canvas-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1
        }}
      >
        <Scene />
      </div>
      
      {/* DOM Overlay Content Layer */}
      <div 
        className="dom-container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%'
        }}
      >
        <Overlay />
      </div>
    </main>
  );
}