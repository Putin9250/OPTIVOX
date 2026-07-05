// Components/Footer/Footer.jsx
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand + tagline */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-o">O</span>
            <span className="footer__logo-v">V</span>
          </div>
          <h3 className="footer__name">OPTIVOX</h3>
          <p className="footer__tagline">
            Strategies &amp; Communication
          </p>
        </div>

        {/* Navigation / CTA */}
        <div className="footer__actions">
          <a href="#contact" className="footer__cta">
            Request a Private Consultation
          </a>
          <div className="footer__links">
            <a href="#capabilities">Capabilities</a>
            <a href="#principals">Principals</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#doctrine">Doctrine</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} OPTIVOX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;