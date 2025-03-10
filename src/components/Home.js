import React, { useEffect, useRef, useState } from 'react';
import 'boxicons';

const Home = () => {
  const textAnimatedRef = useRef(null);
  const blobRef = useRef(null);
  const imageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const textArr = ["FullStack Dev", "Java Engineer", "Freelancer"];
  
  // Gunakan useRef untuk menyimpan state yang tidak memicu render ulang
  const currTextIndexRef = useRef(0);
  const letterIndexRef = useRef(0);
  const textRef = useRef("");

  // Refs untuk tracking posisi mouse/touch
  const mousePosition = useRef({ x: 0, y: 0 });
  const initialPosition = useRef({ x: 0, y: 0 });

  const addLetter = () => {
    if (!textAnimatedRef.current) return;
    
    letterIndexRef.current++;
    if (letterIndexRef.current <= textRef.current.length) {
      if (textAnimatedRef.current) {
        textAnimatedRef.current.textContent = textRef.current.substring(0, letterIndexRef.current);
      }
      setTimeout(addLetter, 100);
    } else {
      setTimeout(removeLetter, 2000);
    }
  };

  const removeLetter = () => {
    if (!textAnimatedRef.current) return;
    
    letterIndexRef.current--;
    if (letterIndexRef.current >= 0) {
      if (textAnimatedRef.current) {
        textAnimatedRef.current.textContent = textRef.current.substring(0, letterIndexRef.current);
      }
      setTimeout(removeLetter, 100);
    } else {
      updateText();
    }
  };

  const updateText = () => {
    currTextIndexRef.current++;
    if (currTextIndexRef.current >= textArr.length) {
      currTextIndexRef.current = 0;
    }
    textRef.current = textArr[currTextIndexRef.current];
    letterIndexRef.current = 0;
    addLetter();
  };

  // Fungsi untuk menangani pergerakan 3D
  const handleMouseMove = (e) => {
    if (!blobRef.current || !imageRef.current) return;
    
    const { clientX, clientY } = e;
    const blob = blobRef.current.getBoundingClientRect();
    const centerX = blob.left + blob.width / 2;
    const centerY = blob.top + blob.height / 2;
    
    // Hitung pergerakan relatif terhadap pusat blob
    const moveX = (clientX - centerX) / 25;
    const moveY = (clientY - centerY) / 25;
    
    // Terapkan transformasi 3D
    imageRef.current.style.transform = `
      translate3d(${moveX}px, ${moveY}px, 0)
      rotateX(${-moveY}deg)
      rotateY(${moveX}deg)
    `;
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.2s ease-out';
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.5s ease-out';
      imageRef.current.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
    }
  };

  // Fungsi untuk menangani sentuhan pada perangkat mobile
  const handleTouchStart = (e) => {
    if (!blobRef.current || !imageRef.current) return;
    
    const touch = e.touches[0];
    initialPosition.current = { x: touch.clientX, y: touch.clientY };
    mousePosition.current = { x: 0, y: 0 };
    
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.2s ease-out';
    }
  };

  const handleTouchMove = (e) => {
    if (!blobRef.current || !imageRef.current) return;
    
    const touch = e.touches[0];
    const moveX = (touch.clientX - initialPosition.current.x) / 15;
    const moveY = (touch.clientY - initialPosition.current.y) / 15;
    
    mousePosition.current = { x: moveX, y: moveY };
    
    // Batasi pergerakan
    const limitedX = Math.max(-10, Math.min(10, moveX));
    const limitedY = Math.max(-10, Math.min(10, moveY));
    
    // Terapkan transformasi 3D
    imageRef.current.style.transform = `
      translate3d(${limitedX}px, ${limitedY}px, 0)
      rotateX(${-limitedY}deg)
      rotateY(${limitedX}deg)
    `;
  };

  const handleTouchEnd = () => {
    if (imageRef.current) {
      imageRef.current.style.transition = 'transform 0.5s ease-out';
      imageRef.current.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)';
    }
  };

  // Fungsi untuk menangani efek ripple pada tombol
  const handleButtonClick = (e) => {
    const button = e.currentTarget;
  };

  useEffect(() => {
    // Pastikan DOM sudah siap sebelum memulai animasi
    const timer = setTimeout(() => {
      if (textAnimatedRef.current) {
        textRef.current = textArr[0];
        textAnimatedRef.current.textContent = "";
        addLetter();
      }
    }, 100);
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="home bd-grid" id="home" style={{ marginBottom: '65px' }}>
      <div className="home__data">
        <h1 className="home__title">
          Hi all,<br />
          I'am <span className="home__title-color">Bagas</span><br />
          <p className="textAnimated" ref={textAnimatedRef}></p>
        </h1>
        <a href="/assets/img/CV-Bagas Pratama Junianika.pdf" className="button">CV</a>
      </div>

      <div className="home__social">
        <a href="https://www.linkedin.com/in/bagas-pratama-junianika" className="home__social-icon">
          <box-icon type='logo' name='linkedin'></box-icon>
        </a>
        <a href="https://github.com/bagaspra16" className="home__social-icon">
          <box-icon type='logo' name='github'></box-icon>
        </a>
        <a href="https://www.youtube.com/channel/UC9Rb7-D7vhEviJUqIQxA9bg" className="home__social-icon">
          <box-icon type='logo' name='youtube'></box-icon>
        </a>
      </div>

      <div 
        className="home__img"
        ref={blobRef}
        onMouseMove={isHovering ? handleMouseMove : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <svg className="home__blob" viewBox="0 0 479 467">
          <defs>
            <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3" />
            </filter>
          </defs>
          <image 
            className="home__blob-img" 
            ref={imageRef}
            x="100" 
            y="0" 
            href="/assets/img/photo3.png"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s ease-out',
              transformOrigin: 'center center',
              filter: 'url(#shadow3D)'
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;