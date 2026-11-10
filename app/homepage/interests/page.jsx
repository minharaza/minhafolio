'use client';

import Link from 'next/link';
import styles from './interests.module.css';

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
  return (
    <main className={styles.page}>
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
      <Link className={styles.backButton} href="/homepage?skipIntro=1" aria-label="Back to the house">
        &larr;
      </Link>
    </main>
  );
}