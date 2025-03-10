import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="/assets/img/photo4.png" alt="Bagas" />
        </div>
        
        <div>
          <h2 className="about__subtitle">
            I'am <span className="home__title-color">Bagas Pratama Junianika</span>
          </h2>
          <p className="about__text">
            Experienced with developing web applications with ERP concepts using the Laravel framework and critical understanding of business processes. My love of technology and problem solving has driven me to develop a strong foundation in various programming languages, software modeling, and web development. My life motto is "<span className="home__title-color">Dive into wisdom, unleash your might.</span>" therefore I want to continue to develop my abilities to the peak of my abilities. <br /><br />
            <span>Find out more about my <span className="home__title-color">skills</span> and <span className="home__title-color">works</span></span>!
          </p> 
        </div>                                   
      </div>
    </section>
  );
};

export default About; 