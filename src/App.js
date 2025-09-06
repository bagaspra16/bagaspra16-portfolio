import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import 'boxicons/css/boxicons.min.css';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PDFGenerator from './components/PDFGenerator';

// Styles
import './assets/css/styles.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });

    if (isLoaded) {
      sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
      sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
      sr.reveal('.home__social-icon', { interval: 200 });
      sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
    }

    // Clear form on page unload
    const handleBeforeUnload = () => {
      document.querySelectorAll('form').forEach(form => {
        form.reset();
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isLoaded]);

  const handleLoadComplete = () => {
    setIsLoaded(true);
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#161424' }}>
        {!isLoaded && <Preloader onLoadComplete={handleLoadComplete} />}
        
        <div className={`app ${isLoaded ? 'loaded' : ''}`}>
          <Header />
          
                 <main className="l-main">
                   <Home />
                   <About />
                   <Skills />
                   <Work />
                   <Contact />
                   <PDFGenerator />
                 </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App; 