// Components/PrincipalsSection/PrincipalsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import principalsImg from '../../assets/principals.jpeg';
import './PrincipalsSection.scss';

const PrincipalsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="principals" id="principals" ref={sectionRef}>
      <div className={`principals__container ${isVisible ? 'animate' : ''}`}>
        {/* Left image */}
        <div className={`principals__image-wrapper ${isVisible ? 'animate' : ''}`}>
          <img 
            src={principalsImg} 
            alt="High-level advisory for public figures and institutions" 
            className="principals__image"
            loading='lazy'
          />
        </div>

        {/* Right content */}
        <div className="principals__content">
          <p className={`principals__pre-title ${isVisible ? 'animate' : ''}`}>
            OUR PRINCIPALS
          </p>
          <h2 className={`principals__headline ${isVisible ? 'animate' : ''}`}>
            Public Figures.<br />Private Counsel.
          </h2>
          <p className={`principals__description ${isVisible ? 'animate' : ''}`}>
            OPTIVOX works with individuals, offices, institutions and private influence networks 
            operating under public scrutiny, political complexity, reputational exposure, and long‑term 
            positioning requirements. Our advisory is designed for those whose communication, 
            perception, and public posture shape trust, authority, and consequence.
          </p>

          <p className={`principals__portfolio-title ${isVisible ? 'animate' : ''}`}>
            The Portfolio:
          </p>
          <ul className={`principals__list ${isVisible ? 'animate' : ''}`}>
            <li>Ministers and Political Offices</li>
            <li>Political Parties</li>
            <li>Leaders</li>
            <li>Government‑Linked Institutions</li>
            <li>Family Offices and Ultra‑HNIs</li>
            <li>Public Figures and Spokespersons</li>
            <li>Founders and Institutional Leaders</li>
          </ul>

          <a href="#principals" className={`principals__cta ${isVisible ? 'animate' : ''}`}>
            <span className="principals__cta-text">Who We Advise</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsSection;