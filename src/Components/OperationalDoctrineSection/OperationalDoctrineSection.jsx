// Components/OperationalDoctrineSection/OperationalDoctrineSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import doctrineBgImg from '../../assets/doctrine-bg.jpeg';
import './OperationalDoctrineSection.scss';

const OperationalDoctrineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);  // async image loading
  const sectionRef = useRef(null);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = doctrineBgImg;
    img.onload = () => setBgLoaded(true);
    if (img.complete) setBgLoaded(true);  // cached
  }, []);

  // Scroll‑triggered visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      className={`doctrine ${bgLoaded ? 'doctrine--bg-loaded' : ''}`}
      id="doctrine"
      ref={sectionRef}
      style={bgLoaded ? { backgroundImage: `url(${doctrineBgImg})` } : {}}
    >
      {/* Dark overlay remains visible even while image loads */}
      <div className="doctrine__overlay"></div>

      <div className={`doctrine__container ${isVisible ? 'animate' : ''}`}>
        <p className={`doctrine__pre-title ${isVisible ? 'animate' : ''}`}>
          OPERATIONAL DOCTRINE
        </p>

        <h2 className={`doctrine__headline ${isVisible ? 'animate' : ''}`}>
          Beyond Visibility.
          <br />
          <em>Cognitive Positioning.</em>
        </h2>

        <p className={`doctrine__description ${isVisible ? 'animate' : ''}`}>
          Traditional communications pursue visibility. Optivox focuses on consequence.
          Optivox takes an architectural approach to how perception is shaped, how authority is
          protected, how narratives are managed, and how public positioning is sustained with
          discipline and discretion.
        </p>

        <div className={`doctrine__grid ${isVisible ? 'animate' : ''}`}>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Architectural, Not Cosmetic</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Discreet by Design</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Seasoned Mandates</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Prepared Before Exposure</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Narrative Dominance</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Anticipating Risk</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Reputation-Sensitive Execution</p>
          </div>
          <div className="doctrine__grid-item">
            <span className="doctrine__grid-bullet">▸</span>
            <p>Long-Term Positioning</p>
          </div>
        </div>

        <a href="#doctrine" className={`doctrine__cta ${isVisible ? 'animate' : ''}`}>
          <span className="doctrine__cta-text">Discover Our Methodology</span>
        </a>
      </div>
    </section>
  );
};

export default OperationalDoctrineSection;