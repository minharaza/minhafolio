'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import './house_landing.css';

const rooms = [
  { label: 'About', href: '/homepage/about' },
  { label: 'Skills', href: '/homepage/skills' },
  { label: 'Experience', href: '/homepage/experience' },
  { label: 'Projects', href: '/homepage/projects' },
  { label: 'Contact', href: '/homepage/contact' },
];

const houseItems = [
  { label: 'Resume', href: '/homepage/resume-page', image: '/images/other/Bookshelf.png', className: 'house-item-bookshelf' },
  { label: 'About', href: '/homepage/about-page', image: '/images/other/Bed.png', className: 'house-item-bed' },
  { label: 'Projects', href: '/homepage/projects', image: '/images/other/Table.png', className: 'house-item-table' },
  { label: 'Interests', href: '/homepage/interests', image: '/images/other/Bathtub.png', className: 'house-item-bathtub' },
];

const ingredientMenuItems = [
  { label: 'Resume', href: '/homepage/resume-page', image: '/images/other/Bun.png' },
  { label: 'About Me', href: '/homepage/about-page', image: '/images/other/Lettuce.png' },
  { label: 'Projects', href: '/homepage/projects', image: '/images/other/Tomato.png' },
  { label: 'AI Disclaimer', image: '/images/other/Patty.png', action: 'ai-disclaimer' },
];

export default function HousePage() {
  const searchParams = useSearchParams();
  const skipIntro = searchParams.get('skipIntro') === '1';
  const [isIngredientMenuOpen, setIsIngredientMenuOpen] = useState(false);
  const [isAiDisclaimerOpen, setIsAiDisclaimerOpen] = useState(false);
  const aiDisclaimerCloseRef = useRef(null);
  const [showPout, setShowPout] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [showFollowupBubble, setShowFollowupBubble] = useState(false);
  const [isSpeechBubblePopping, setIsSpeechBubblePopping] = useState(false);
  const [showStarsBackground, setShowStarsBackground] = useState(false);
  const [showLandscapeOnly, setShowLandscapeOnly] = useState(false);
  const [isMatchaLeaving, setIsMatchaLeaving] = useState(false);
  const [isMatchaExiting, setIsMatchaExiting] = useState(false);
  const [showMatcha, setShowMatcha] = useState(true);
  const [isCutoutReady, setIsCutoutReady] = useState(false);

  useEffect(() => {
    if (skipIntro) {
      setShowSpeechBubble(false);
      setShowFollowupBubble(false);
      setShowMatcha(false);
      setShowLandscapeOnly(true);
      setShowStarsBackground(false);
      setIsMatchaLeaving(false);
      setIsMatchaExiting(false);
    }
  }, [skipIntro]);

  const toggleBackground = () => {
    setShowStarsBackground((current) => !current);
  };

  useEffect(() => {
    if (skipIntro) {
      return;
    }

    const speechBubbleTimer = setTimeout(() => {
      setShowSpeechBubble(true);
    }, 1000);

    return () => clearTimeout(speechBubbleTimer);
  }, [skipIntro]);

  useEffect(() => {
    const cutoutImage = new Image();
    const starsCutoutImage = new Image();
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === 2) {
        setIsCutoutReady(true);
      }
    };

    cutoutImage.onload = handleImageLoad;
    starsCutoutImage.onload = handleImageLoad;
    cutoutImage.src = '/images/other/Cut_Out.png';
    starsCutoutImage.src = '/images/other/Cut_Out_Of_Stars.png';

    return () => {
      cutoutImage.onload = null;
      starsCutoutImage.onload = null;
    };
  }, []);

  useEffect(() => {
    if (!isIngredientMenuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsIngredientMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isIngredientMenuOpen]);

  useEffect(() => {
    if (!isAiDisclaimerOpen) return undefined;

    aiDisclaimerCloseRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsAiDisclaimerOpen(false);
      } else if (event.key === 'Tab') {
        event.preventDefault();
        aiDisclaimerCloseRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAiDisclaimerOpen]);

  return (
    <main
      className={`house-landing${showStarsBackground ? ' stars-background' : ''}${showLandscapeOnly ? ' landscape-only' : ''}`}
    >
      <nav className={`ingredient-menu${isIngredientMenuOpen ? ' is-open' : ''}`} aria-label="Quick navigation">
        <button
          type="button"
          className="ingredient-menu-toggle"
          onClick={() => setIsIngredientMenuOpen((isOpen) => !isOpen)}
          aria-label={isIngredientMenuOpen ? 'Close quick navigation' : 'Open quick navigation'}
          aria-expanded={isIngredientMenuOpen}
          aria-controls="ingredient-menu-links"
        >
          <img src="/images/other/Hamburger.png" alt="" aria-hidden="true" />
        </button>
        <div
          className="ingredient-menu-links"
          id="ingredient-menu-links"
          aria-hidden={!isIngredientMenuOpen}
        >
          {ingredientMenuItems.map((item, index) => (
            item.action ? (
              <button
                key={item.action}
                type="button"
                className="ingredient-menu-link ingredient-menu-action"
                tabIndex={isIngredientMenuOpen ? 0 : -1}
                onClick={() => {
                  setIsIngredientMenuOpen(false);
                  setIsAiDisclaimerOpen(true);
                }}
                style={{ '--menu-delay': `${index * 70}ms` }}
              >
                <span className="ingredient-menu-image">
                  <img src={item.image} alt="" aria-hidden="true" />
                </span>
                <span className="ingredient-menu-label">{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.href}
                className="ingredient-menu-link"
                href={item.href}
                tabIndex={isIngredientMenuOpen ? 0 : -1}
                onClick={() => setIsIngredientMenuOpen(false)}
                style={{ '--menu-delay': `${index * 70}ms` }}
              >
                <span className="ingredient-menu-image">
                  <img src={item.image} alt="" aria-hidden="true" />
                </span>
                <span className="ingredient-menu-label">{item.label}</span>
              </Link>
            )
          ))}
        </div>
      </nav>
      {isAiDisclaimerOpen && (
        <div className="ai-disclaimer-backdrop">
          <section
            className="ai-disclaimer-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ai-disclaimer-title"
            aria-describedby="ai-disclaimer-copy"
          >
            <button
              ref={aiDisclaimerCloseRef}
              type="button"
              className="ai-disclaimer-close"
              onClick={() => setIsAiDisclaimerOpen(false)}
              aria-label="Close AI disclaimer"
            >
              &times;
            </button>
            <p className="ai-disclaimer-eyebrow">Some insight into</p>
            <h2 id="ai-disclaimer-title">AI Usage</h2>
            <div className="ai-disclaimer-copy">
              <p id="ai-disclaimer-copy">
               As someone who is passionate about the human centered, and human made art. I found that I relied on myself
               for drawing components digitally by hand for all of my projects. No AI was used in the planning or creation of this project.
               Even in brainstorming sessions AI was not used within the development of my ideas. 
               It was also not used in any part of the writing used in my projects.
               <br/><br/>
               Copilot AI was used as a tool to debug my code, and was only used in a software engineering capacity.
              </p>
            </div>
          </section>
        </div>
      )}
      <nav aria-label="Portfolio sections">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href}>
            {room.label}
          </Link>
        ))}
      </nav>
    {isCutoutReady && (
    <div className="house-scene">
      <img className="house-image" src="/images/other/House.png" alt="" aria-hidden="true" />
      <div className="house-items" aria-label="Explore my house">
      {houseItems.map((item) => (
        <Link key={item.href} className={`house-item ${item.className}`} href={item.href}>
        <img src={item.image} alt="" aria-hidden="true" />
        <span>{item.label}</span>
        </Link>
      ))}
      </div>
    </div>
    )}
      {showMatcha && (
      <div
        className={`matcha-swap${isMatchaLeaving ? ' matcha-leaving' : ''}${isMatchaExiting ? ' matcha-exiting' : ''}`}
        onMouseEnter={() => setShowPout(true)}
        onMouseLeave={() => setShowPout(false)}
        onAnimationEnd={(event) => {
          if (event.animationName === 'matcha-leave') {
            setIsMatchaExiting(true);
          }
          if (event.animationName === 'matcha-exit') {
            setShowMatcha(false);
          }
        }}
        aria-label="Portrait that changes when hovered"
      >
        <img
          className="matcha-image"
          src={showPout ? '/images/other/Pout_With_Matcha.png' : '/images/other/Smiling_With_Matcha.png'}
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
          <img src="/images/other/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Hello!! My name is Minha and welcome to my house tour!</span>
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
            setShowLandscapeOnly(true);
            setIsMatchaLeaving(true);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setShowStarsBackground(false);
              setShowFollowupBubble(false);
              setShowLandscapeOnly(true);
              setIsMatchaLeaving(true);
            }
          }}
        >
          <img src="/images/other/Speech_Bubble.png" alt="" aria-hidden="true" />
          <span>Hover over different parts in the rooms to reveal different sections! Don&apos;t forget to click in!</span>
        </div>
      )}
    </main>
  );
}
