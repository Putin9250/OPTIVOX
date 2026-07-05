// Components/Preloader/Preloader.jsx
import React, { useEffect, useState } from 'react';
import './Preloader.scss';   // keep its styles separate
import Logo from '../../assets/Logo.png'

const Preloader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
      document.body.style.overflow = '';
    }, 1000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  if (!visible) return null;
  
  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__mark">
          <img src={Logo} alt="" />
        </div>
        <div className="preloader__title">OPTIVOX</div>
        <div className="preloader__line"></div>
        <div className="preloader__subtitle">Strategies &amp; Communication</div>
      </div>
    </div>
  );
};

export default Preloader;