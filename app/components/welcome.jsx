'use client';

import { useEffect } from 'react';
import './welcome.css';

export default function Welcome({ onClose }) {
  useEffect(() => {
    const previousOverflowX = document.documentElement.style.overflowX;
    const previousOverflowY = document.body.style.overflowY;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overflowX = previousOverflowX;
      document.body.style.overflowY = previousOverflowY;
    };
  }, []);

  return (
    <div className="welcome-screen">
      <div className="welcome-bg">
        <img src="/images/Brick.png" alt="" />
      </div>

      <button type="button" onClick={onClose} aria-label="Close welcome screen" className="welcome-close">
        <img src="/images/Key.png" alt="Close welcome screen" />
      </button>

      <div className="welcome-plant left">
        <img src="/images/Plant1.png" alt="Plant 1" />
      </div>

      <div className="welcome-plant right">
        <img src="/images/Plant2.png" alt="Plant 2" />
      </div>

      <div className="welcome-mat">
        <img src="/images/Welcome_Mat.png" alt="Welcome mat" />
      </div>
      <div className="welcome-text">
        <h1>
          Welc
          <img className="welcome-logo-letter" src="/images/Logo.png" alt="o" />
          me
        </h1>
        <p>to my portfolio</p>
      </div>
    </div>
  );
}
