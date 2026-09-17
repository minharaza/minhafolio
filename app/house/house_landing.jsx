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
  const [showFollowupBubble, setShowFollowupBubble] = useState(false);
  const [showFinalBubble, setShowFinalBubble] = useState(false);
  const [isSpeechBubblePopping, setIsSpeechBubblePopping] = useState(false);
  const [isFinalBubblePopping, setIsFinalBubblePopping] = useState(false);
  const [showStarsBackground, setShowStarsBackground] = useState(false);
  const [showLandscapeOnly, setShowLandscapeOnly] = useState(false);
  const [isMatchaLeaving, setIsMatchaLeaving] = useState(false);
  const [showExploreBubble, setShowExploreBubble] = useState(false);
  const [isExplorePopping, setIsExplorePopping] = useState(false);
  const [isMatchaExiting, setIsMatchaExiting] = useState(false);
  const [showMatcha, setShowMatcha] = useState(true);

  const toggleBackground = () => {
    setShowStarsBackground((current) => !current);
  };

  useEffect(() => {
    const speechBubbleTimer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 3000);

    return () => clearTimeout(speechBubbleTimer);
  }, []);

  return (
    <main
      className={`house-landing${showStarsBackground ? ' stars-background' : ''}${showLandscapeOnly ? ' landscape-only' : ''}`}
    >
      <nav aria-label="Portfolio sections">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href}>
            {room.label}
          </Link>
        ))}
      </nav>
      <img className="house-image" src="/images/House.png" alt="" aria-hidden="true" />
      {showMatcha && (
      <div
        className={`matcha-swap${isMatchaLeaving ? ' matcha-leaving' : ''}${isMatchaExiting ? ' matcha-exiting' : ''}`}
        onMouseEnter={() => setShowPout(true)}
        onMouseLeave={() => setShowPout(false)}
        onAnimationEnd={(event) => {
          if (event.animationName === 'matcha-leave') {
            setShowExploreBubble(true);
          }
          if (event.animationName === 'matcha-exit') {
            setShowMatcha(false);
          }
        }}
        aria-label="Portrait that changes when hovered"
      >
        <img
          className="matcha-image"
          src={showPout ? '/images/pout_with_matcha.png' : '/images/smiling_with_matcha.png'}
          alt={showPout ? 'Pout with matcha' : 'Smiling with matcha'}
        />
      </div>
      )}
      {showSpeechBubble && (
        <div
          className={`speech-bubble${isSpeechBubblePopping ? ' is-popping' : ''}`}
          role="button"
          tabIndex="0"
          aria-label="Dismiss welcome message"
          onClick={() => {
            toggleBackground();
            setIsSpeechBubblePopping(true);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              toggleBackground();
              setIsSpeechBubblePopping(true);
            }
          }}
          onAnimationEnd={(event) => {
            if (event.animationName === 'speech-bubble-pop') {
              setShowSpeechBubble(false);
              setShowFollowupBubble(true);
            }
          }}
        >
          <img src="/images/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Hello!! My name is Minha!</span>
        </div>
      )}
      {showFollowupBubble && (
        <div
          className="speech-bubble speech-bubble-followup speech-bubble-clickable"
          role="button"
          tabIndex="0"
          aria-label="Switch background"
          onClick={() => {
            setShowStarsBackground(false);
            setShowFollowupBubble(false);
            setShowFinalBubble(true);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setShowStarsBackground(false);
              setShowFollowupBubble(false);
              setShowFinalBubble(true);
            }
          }}
        >
          <img src="/images/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Welcome to my house tour!</span>
        </div>
      )}
      {showFinalBubble && (
        <div
          className={`speech-bubble speech-bubble-final${isFinalBubblePopping ? ' is-popping' : ''}`}
          role="button"
          tabIndex="0"
          aria-label="Return to the regular background"
          onClick={() => {
            setShowStarsBackground(false);
            setShowLandscapeOnly(true);
            setIsMatchaLeaving(true);
            setIsFinalBubblePopping(true);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setShowStarsBackground(false);
              setShowLandscapeOnly(true);
              setIsMatchaLeaving(true);
              setIsFinalBubblePopping(true);
            }
          }}
          onAnimationEnd={(event) => {
            if (event.animationName === 'speech-bubble-pop') {
              setShowFinalBubble(false);
            }
          }}
        >
          <img src="/images/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Let&apos;s get started!</span>
        </div>
      )}
      {showExploreBubble && (
        <div
          className={`speech-bubble speech-bubble-explore${isExplorePopping ? ' is-popping' : ''}`}
          role="button"
          tabIndex="0"
          aria-label="Explore the house"
          onClick={() => {
            setIsExplorePopping(true);
            setIsMatchaExiting(true);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setIsExplorePopping(true);
              setIsMatchaExiting(true);
            }
          }}
          onAnimationEnd={(event) => {
            if (event.animationName === 'speech-bubble-pop') {
              setShowExploreBubble(false);
            }
          }}
        >
          <img src="/images/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Feel free to explore my house to learn more about me and my work!</span>
        </div>
      )}
    </main>
  );
}
