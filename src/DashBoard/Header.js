import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setIsVisible(isScrollingUp);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <h1>Oasis Crops</h1>
      </div>
      <span role="img" aria-label="settings" className="settings-icon">⚙️</span>
    </header>
  );
};

export default Header;