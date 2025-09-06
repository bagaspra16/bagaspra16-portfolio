import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo">Bagas</Link>
        </div>

        <div className={`nav__menu ${showMenu ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a 
                href="#home" 
                className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`} 
                style={{ color: 'white' }}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#about" 
                className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`} 
                style={{ color: 'white' }}
                onClick={() => handleLinkClick('about')}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#skills" 
                className={`nav__link ${activeLink === 'skills' ? 'active-link' : ''}`} 
                style={{ color: 'white' }}
                onClick={() => handleLinkClick('skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#work" 
                className={`nav__link ${activeLink === 'work' ? 'active-link' : ''}`} 
                style={{ color: 'white' }}
                onClick={() => handleLinkClick('work')}
              >
                Work
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#contact" 
                className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`} 
                style={{ color: 'white' }}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div 
          className={`hamburger-menu ${showMenu ? 'active' : ''}`} 
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <div className="hamburger-inner">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 