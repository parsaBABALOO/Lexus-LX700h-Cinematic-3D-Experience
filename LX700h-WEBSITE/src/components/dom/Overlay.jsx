'use client';
import { useEffect, useRef, useState } from 'react';

// کامپوننت هوشمند برای افکت ظاهر شدن کاراکتر به کاراکتر
const TypewriterText = ({ text, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // وقتی 30 درصد متن وارد صفحه شد انیمیشن شروع می‌شود
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ ...style, display: 'inline-block' }}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.1s ease ${index * 0.04}s`, // تاخیر 0.04 ثانیه‌ای برای هر حرف
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal'
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default function Overlay() {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showSoundBtn, setShowSoundBtn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play()
            .then(() => {
              setIsMuted(false);
              setShowSoundBtn(true);
            })
            .catch((error) => {
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                setShowSoundBtn(true);
                videoRef.current.play();
              }
            });
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggleMute = () => {
    if (videoRef.current) {
      const currentMuteState = videoRef.current.muted;
      videoRef.current.muted = !currentMuteState;
      setIsMuted(!currentMuteState);
    }
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'transparent' }}>
      
      {/* Section 1: Interactive 3D Canvas Showcase */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ fontSize: '0.85rem', letterSpacing: '6px', color: '#8e8e93', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Introducing the Pinnacle
        </span>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '400', letterSpacing: '6px' }}>
          LX 700h
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#aeaeb2', maxWidth: '460px', lineHeight: '1.8', fontWeight: '300' }}>
          Where unyielding hybrid power blends seamlessly with elite Japanese master craftsmanship. Built for absolute dominance.
        </p>
      </section>

      {/* Section 2: Immersive Cinematic Video Component */}
      <section 
        ref={videoSectionRef} 
        style={{ 
          position: 'relative', 
          overflow: 'hidden',
          height: '100vh', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#000000',
          pointerEvents: 'auto' 
        }}
      >
        <video
          ref={videoRef}
          src="/lexus-video.mp4"
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
          zIndex: 2
        }} />

        <div style={{ position: 'relative', zIndex: 3, paddingLeft: '10%' }}>
          <span style={{ fontSize: '0.85rem', letterSpacing: '6px', color: '#ffffff', marginBottom: '0.5rem', textTransform: 'uppercase', opacity: 0.8 }}>
            Cinematic Motion
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '400', letterSpacing: '4px', color: '#ffffff' }}>
            PURE POWER IN MOTION
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#aeaeb2', maxWidth: '460px', lineHeight: '1.8', fontWeight: '300' }}>
            Experience the breathtaking audio and raw acceleration of the twin-turbo hybrid engine in real-time environments.
          </p>
        </div>
        
        {showSoundBtn && (
          <button
            onClick={handleToggleMute}
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '10%',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              color: '#ffffff',
              padding: '12px 24px',
              fontSize: '0.75rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              zIndex: 4, 
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            {isMuted ? '🔊 Sound On' : '🔇 Mute'}
          </button>
        )}
      </section>

      {/* Section 3: Master Craftsmanship Gallery */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        backgroundColor: '#000000',
        pointerEvents: 'auto'
      }}>
        <span style={{ fontSize: '0.85rem', letterSpacing: '6px', color: '#8e8e93', marginBottom: '0.5rem', textTransform: 'uppercase', paddingLeft: '12%' }}>
          Craftsmanship Details
        </span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: '400', letterSpacing: '4px', paddingLeft: '12%' }}>
          THE ART OF LEXUS
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px', 
          width: '100%',
          padding: '0 12%'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ width: '100%', height: '250px', backgroundColor: '#1c1c1e', overflow: 'hidden', borderRadius: '2px' }}>
              <img 
                src="/images/interior.jpg" 
                alt="Lexus Interior" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '400', letterSpacing: '2px' }}>TAKUMI INTERIOR</h3>
            <p style={{ fontSize: '0.9rem', color: '#aeaeb2', lineHeight: '1.6', fontWeight: '300' }}>
              Handcrafted leather and authentic wood accents curated by master Japanese artisans for ultimate comfort.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ width: '100%', height: '250px', backgroundColor: '#1c1c1e', overflow: 'hidden', borderRadius: '2px' }}>
              <img 
                src="/images/wheel.jpg" 
                alt="Lexus Detail" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'transform 0.5s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '400', letterSpacing: '2px' }}>COMMANDING PRESENCE</h3>
            <p style={{ fontSize: '0.9rem', color: '#aeaeb2', lineHeight: '1.6', fontWeight: '300' }}>
              Bold signature grille lines paired with exclusive premium wheels engineered for both aesthetics and aerodynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The Finale / Footer (بخش جدید) */}
      <section style={{ 
        height: '100vh', 
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        backgroundColor: '#000000',
        pointerEvents: 'auto',
        overflow: 'hidden'
      }}>
        {/* تصویر پس‌زمینه ماشین */}
        <img 
          src="/images/footer-bg.jpg" 
          alt="Lexus Final Edition" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5, // کمی تاریک‌تر تا متن‌ها خوانا باشند
            zIndex: 1
          }}
        />

        {/* گرادینت برای خوانایی بیشتر متن و محو شدن لبه‌ها */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, #000000 100%), linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 100%)',
          zIndex: 2
        }} />

        {/* محتوای متنی تایپ‌شونده */}
        <div style={{ position: 'relative', zIndex: 3, paddingLeft: '12%', maxWidth: '800px' }}>
          <TypewriterText 
            text="LEXUS LX 700h BLACK EDITION" 
            style={{ fontSize: '3rem', fontWeight: '500', letterSpacing: '2px', lineHeight: '1.2', textTransform: 'uppercase', marginBottom: '10px' }} 
          />
          <br />
          <TypewriterText 
            text="ELEGANCE AND UNYIELDING POWER." 
            style={{ fontSize: '3rem', fontWeight: '500', letterSpacing: '2px', lineHeight: '1.2', textTransform: 'uppercase', color: '#e5e5ea' }} 
          />
        </div>

        {/* برند و شبکه‌های اجتماعی در پایین صفحه */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 3
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '300', letterSpacing: '14px', marginBottom: '40px', textTransform: 'uppercase' }}>
            LEXUS
          </h2>
          
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#8e8e93', marginBottom: '15px', textTransform: 'uppercase' }}>
            Follow Us
          </span>
          
          {/* آیکون‌های سوشیال مدیا */}
          <div style={{ display: 'flex', gap: '25px', marginBottom: '30px' }}>
            {['Facebook', 'Instagram', 'X', 'YouTube', 'LinkedIn'].map((network, i) => (
              <span key={i} style={{ fontSize: '0.8rem', color: '#ffffff', cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8e8e93'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                {network}
              </span>
            ))}
          </div>
          
          {/* کپی‌رایت */}
          <p style={{ fontSize: '0.65rem', color: '#636366', letterSpacing: '1px' }}>
            ©2024 Lexus Corporation. All rights reserved. Legal notices and privacy policies.
          </p>
        </div>
      </section>

    </div>
  );
}