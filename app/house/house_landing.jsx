'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './house_landing.css';

const rooms = [
  { label: 'About', href: '/homepage/about' },
  { label: 'Skills', href: '/homepage/skills' },
  { label: 'Experience', href: '/homepage/experience' },
  { label: 'Projects', href: '/homepage/projects' },
  { label: 'Contact', href: '/homepage/contact' },
];

export default function HousePage() {
  const [showPout, setShowPout] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  useEffect(() => {
    const speechBubbleTimer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 3000);

    return () => clearTimeout(speechBubbleTimer);
  }, []);

  return (
    <main className="house-landing">
      <nav aria-label="Portfolio sections">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href}>
            {room.label}
          </Link>
        ))}
      </nav>
      <div
        className="matcha-swap"
        onMouseEnter={() => setShowPout(true)}
        onMouseLeave={() => setShowPout(false)}
        aria-label="Portrait that changes when hovered"
      >
        <img
          className="matcha-image"
          src={showPout ? '/images/pout_with_matcha.png' : '/images/smiling_with_matcha.png'}
          alt={showPout ? 'Pout with matcha' : 'Smiling with matcha'}
        />
      </div>
      {showSpeechBubble && (
        <div className="speech-bubble" role="status" aria-label="Welcome in!">
          <img src="/images/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Hello!! My name is Minha!</span>
        </div>
      )}
    </main>
  );
}
