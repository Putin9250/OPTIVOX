// Components/NewsletterSection/NewsletterSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import './NewsletterSection.scss';

const NewsletterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your newsletter service here
    console.log('Newsletter signup:', email);
    setEmail('');  // clear input
  };

  return (
    <section className="newsletter" id="newsletter" ref={sectionRef}>
      <div className={`newsletter__container ${isVisible ? 'animate' : ''}`}>
        <p className={`newsletter__pre-title ${isVisible ? 'animate' : ''}`}>
          STAY INFORMED
        </p>
        <h2 className={`newsletter__headline ${isVisible ? 'animate' : ''}`}>
          Subscribe to OptiVox Newsletter
        </h2>
        <p className={`newsletter__description ${isVisible ? 'animate' : ''}`}>
          Enter your e‑mail address and get started for free.
        </p>

        <form
          className={`newsletter__form ${isVisible ? 'animate' : ''}`}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="newsletter__input"
            placeholder="Your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit" className="newsletter__submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;