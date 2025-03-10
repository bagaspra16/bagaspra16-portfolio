import React from 'react';

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid">
        <a href="https://github.com/bagaspra16/information-system-rpl" className="work__img">
          <img src="/assets/img/project11.png" alt="Information System RPL" style={{ height: '100%' }} />
        </a>
        <a href="https://github.com/bagaspra16/present-web" className="work__img">
          <img src="/assets/img/project12.png" alt="Present Web" style={{ height: '100%' }} />
        </a>
        <a href="https://github.com/bagaspra16/library-system-java" className="work__img">
          <img src="/assets/img/project13.png" alt="Library System Java" style={{ height: '100%' }} />
        </a>
        <a href="https://github.com/bagaspra16/rpl5-profile" className="work__img">
          <img src="/assets/img/project21.png" alt="RPL5 Profile" style={{ height: '100%' }} />
        </a>
        <a href="https://github.com/bagaspra16/laravel-crud" className="work__img">
          <img src="/assets/img/project22.png" alt="Laravel CRUD" style={{ height: '100%' }} />
        </a>
        <a href="https://github.com/bagaspra16/quicks-web" className="work__img">
          <img src="/assets/img/project23.png" alt="Quicks Web" style={{ height: '100%' }} />
        </a>
      </div>
    </section>
  );
};

export default Work; 