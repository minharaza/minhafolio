'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './interests.module.css';

const interestItems = [
  { id: 'baking', label: 'Baking', src: '/images/interests/Bitesinam.png', position: 'interestCroissant' },
  { id: 'etsy', label: 'Etsy finds', src: '/images/interests/Etsy.png', position: 'interestEtsy' },
  { id: 'painting', label: 'Painting', src: '/images/interests/Painting.png', position: 'interestPainting' },
];

const bitesPosts = [
  { src: '272.png', alt: 'Food scrapbook page 1' },
  { src: 'Bar_Vetti.png', alt: 'Food scrapbook page from Bar Vetti' },
  { src: 'Cafe_Cotntinuum.png', alt: 'Food scrapbook page from Cafe Continuum' },
  { src: 'Con_Huevos.png', alt: 'Food scrapbook page from Con Huevos' },
  { src: 'Elliot.png', alt: 'Food scrapbook page from Elliot' },
  { src: 'Gastropub_Crown_Republic.png', alt: 'Food scrapbook page from Crown Republic' },
  { src: 'Guacamole_Post.png', alt: 'Guacamole food scrapbook page' },
  { src: 'Haven_cafe.png', alt: 'Food scrapbook page from Haven Cafe' },
  { src: 'Monarch_House.png', alt: 'Food scrapbook page from Monarch House' },
  { src: 'Post1.png', alt: 'Food scrapbook page' },
  { src: 'Untitled_Artwork 2.png', alt: 'Food scrapbook page' },
];

const floatingBubbles = [
  { left: '3%', size: 'clamp(4rem, 8vw, 8rem)', duration: '19s', delay: '-12s', drift: '7vw' },
  { left: '11%', size: 'clamp(3rem, 5vw, 5rem)', duration: '15s', delay: '-4s', drift: '-5vw' },
  { left: '18%', size: 'clamp(5rem, 10vw, 10rem)', duration: '24s', delay: '-17s', drift: '8vw' },
  { left: '27%', size: 'clamp(3.5rem, 7vw, 7rem)', duration: '17s', delay: '-8s', drift: '-7vw' },
  { left: '35%', size: 'clamp(4.5rem, 9vw, 9rem)', duration: '21s', delay: '-2s', drift: '6vw' },
  { left: '43%', size: 'clamp(3rem, 5.5vw, 5.5rem)', duration: '16s', delay: '-10s', drift: '-8vw' },
  { left: '50%', size: 'clamp(5rem, 11vw, 11rem)', duration: '25s', delay: '-20s', drift: '7vw' },
  { left: '58%', size: 'clamp(3.5rem, 7vw, 7rem)', duration: '18s', delay: '-6s', drift: '-6vw' },
  { left: '65%', size: 'clamp(4.5rem, 9vw, 9rem)', duration: '22s', delay: '-14s', drift: '8vw' },
  { left: '72%', size: 'clamp(3rem, 5vw, 5rem)', duration: '15s', delay: '-1s', drift: '-7vw' },
  { left: '78%', size: 'clamp(5rem, 10vw, 10rem)', duration: '24s', delay: '-18s', drift: '6vw' },
  { left: '84%', size: 'clamp(3.5rem, 7vw, 7rem)', duration: '17s', delay: '-9s', drift: '-8vw' },
  { left: '90%', size: 'clamp(4rem, 8vw, 8rem)', duration: '20s', delay: '-15s', drift: '5vw' },
  { left: '97%', size: 'clamp(3rem, 5.5vw, 5.5rem)', duration: '16s', delay: '-3s', drift: '-6vw' },
  { left: '31%', size: 'clamp(4rem, 8vw, 8rem)', duration: '23s', delay: '-21s', drift: '8vw' },
  { left: '6%', size: 'clamp(2.5rem, 4vw, 4rem)', duration: '14s', delay: '-7s', drift: '-6vw' },
  { left: '15%', size: 'clamp(4rem, 7vw, 7rem)', duration: '20s', delay: '-16s', drift: '5vw' },
  { left: '24%', size: 'clamp(3rem, 5vw, 5rem)', duration: '16s', delay: '-11s', drift: '-8vw' },
  { left: '32%', size: 'clamp(5rem, 9vw, 9rem)', duration: '22s', delay: '-5s', drift: '7vw' },
  { left: '40%', size: 'clamp(2.5rem, 4.5vw, 4.5rem)', duration: '15s', delay: '-19s', drift: '-5vw' },
  { left: '47%', size: 'clamp(4rem, 8vw, 8rem)', duration: '21s', delay: '-9s', drift: '8vw' },
  { left: '55%', size: 'clamp(3rem, 5vw, 5rem)', duration: '17s', delay: '-13s', drift: '-7vw' },
  { left: '62%', size: 'clamp(5rem, 9vw, 9rem)', duration: '24s', delay: '-3s', drift: '6vw' },
  { left: '69%', size: 'clamp(2.5rem, 4.5vw, 4.5rem)', duration: '15s', delay: '-20s', drift: '-6vw' },
  { left: '76%', size: 'clamp(4rem, 7vw, 7rem)', duration: '19s', delay: '-8s', drift: '7vw' },
];

export default function InterestsPage() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [bakingStarted, setBakingStarted] = useState(false);
  const [showBitesPosts, setShowBitesPosts] = useState(false);

  useEffect(() => {
    if (!bakingStarted) return undefined;

    const revealTimer = window.setTimeout(() => setShowBitesPosts(true), 1100);
    return () => window.clearTimeout(revealTimer);
  }, [bakingStarted]);

  const handleInterestClick = (id) => {
    if (id === 'baking') {
      if (bakingStarted) return;
      setSelectedInterest(null);
      setBakingStarted(true);
      return;
    }

    setSelectedInterest((current) => current === id ? null : id);
  };

  return (
    <main className={`${styles.page}${bakingStarted ? ` ${styles.bakingStarted}` : ''}${showBitesPosts ? ` ${styles.showBitesPosts}` : ''}`}>
      <div className={styles.floatingBubbles} aria-hidden="true">
        {floatingBubbles.map((bubble, index) => (
          <span
            className={styles.bubble}
            key={index}
            style={{
              '--bubble-left': bubble.left,
              '--bubble-size': bubble.size,
              '--bubble-duration': bubble.duration,
              '--bubble-delay': bubble.delay,
              '--bubble-drift': bubble.drift,
            }}
          />
        ))}
      </div>
      {!showBitesPosts && (
      <div className={`${styles.interestItems}${bakingStarted ? ` ${styles.interestItemsFlying}` : ''}`} aria-label="My interests">
        {interestItems.map((item, index) => {
          const isSelected = selectedInterest === item.id;

          return (
            <button
              className={`${styles.interestButton} ${styles[item.position]}${isSelected ? ` ${styles.interestButtonSelected}` : ''}`}
              key={item.id}
              type="button"
              aria-label={item.label}
              aria-pressed={item.id === 'baking' ? bakingStarted : isSelected}
              onClick={() => handleInterestClick(item.id)}
              style={{ '--interest-delay': `${index * -1.7}s` }}
            >
              <Image
                src={item.src}
                alt=""
                width={2048}
                height={2048}
                sizes="(max-width: 700px) 46vw, 25vw"
              />
              <span className={styles.interestLabel} aria-hidden={!isSelected}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      )}
      {bakingStarted && (
        <section className={styles.bitesExperience} aria-labelledby="bites-title">
          <div className={styles.bitesIntro}>
            <p className={styles.bitesEyebrow}>A little food diary</p>
            <h1 id="bites-title">Bites I remember</h1>
            <p>Food is one of my favorite ways to explore a place. I love discovering cozy cafes, trying new dishes, and saving the moments that make each meal memorable.</p>
          </div>
          {showBitesPosts && (
            <div className={styles.bitesGrid}>
              {bitesPosts.map((post, index) => (
                <figure
                  className={styles.bitesPost}
                  key={post.src}
                  style={{ '--post-delay': `${900 + index * 55}ms` }}
                >
                  <Image
                    src={`/images/interests/bitesposts/${post.src}`}
                    alt={post.alt}
                    width={768}
                    height={768}
                    sizes="(max-width: 600px) 44vw, (max-width: 1000px) 28vw, 18vw"
                  />
                </figure>
              ))}
            </div>
          )}
        </section>
      )}
      <Link className={styles.backButton} href="/homepage?skipIntro=1" aria-label="Back to the house">
        &larr;
      </Link>
    </main>
  );
}