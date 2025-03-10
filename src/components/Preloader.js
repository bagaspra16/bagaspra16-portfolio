import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoadComplete }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Disable scrolling when preloader is active
    document.body.style.overflow = 'hidden';
    
    // Simulate loading time
    const timer1 = setTimeout(() => {
      setIsHidden(true);
      
      const timer2 = setTimeout(() => {
        // Re-enable scrolling when preloader is removed
        document.body.style.overflow = '';
        
        if (onLoadComplete) {
          onLoadComplete();
        }
      }, 500);
      
      return () => clearTimeout(timer2);
    }, 3000);
    
    return () => {
      clearTimeout(timer1);
      // Ensure scrolling is re-enabled if component unmounts
      document.body.style.overflow = '';
    };
  }, [onLoadComplete]);

  return (
    <div className={`preload-content ${isHidden ? 'hidden' : ''}`}>
      <dotlottie-player 
        src="https://lottie.host/c0fa01ea-4c01-4a46-aafb-86ab003548d8/Pg70fttTXo.json" 
        background="transparent" 
        speed="2" 
        style={{ width: '200px', height: '200px' }} 
        className="load" 
        loop 
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Preloader; 