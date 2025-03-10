import React from 'react';
import 'boxicons';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title" style={{ color: 'white' }}>
        Connect with <span className="home__title-color">Bagas</span>!
      </p>
      <div className="footer__social">
        <a href="https://www.instagram.com/bagaspra16_/" className="footer__icon">
          <box-icon type='logo' name='instagram'></box-icon>
        </a>
        <a href="https://www.facebook.com/bagas.junianika" className="footer__icon">
          <box-icon type='logo' name='facebook'></box-icon>
        </a>
        <a href="https://wa.me/6281218177320" className="footer__icon">
          <box-icon type='logo' name='whatsapp'></box-icon>
        </a>
      </div>
      <p className="footer__copy">Designed and Developed by myself.</p>
      <p className="footer__copy">&#169;2024: bagaspra16</p>
    </footer>
  );
};

export default Footer; 