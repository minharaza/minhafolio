 'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../projects.module.css';

export default function ProjectThreePage() {
  const busQuestion = 'Have you ever tried to take the bus...?';
  const busQuestion2 = 'And then your bus stop was missing its bench?';
  const busQuestion3 = 'Well I have! What a tragedy!';
  const [isDriving, setIsDriving] = useState(false);
  const [hasDriven, setHasDriven] = useState(false);
  const [secondPhase, setSecondPhase] = useState('idle');
  const [thirdPhase, setThirdPhase] = useState('idle');
  const [busAnchor, setBusAnchor] = useState({ top: null, left: 0 });
  const contentRef = useRef(null);
  const projectSteps = [
    'Define',
    'Research',
    'Analysis & Planning',
    'Design',
    'Prototyping',
    'Testing',
    'Launch',
    'Iteration',
  ];

  return (
    <main
      className={styles.page}
      style={busAnchor.top === null ? undefined : { '--bus-anchor': `${busAnchor.top}px`, '--bus-left': `${busAnchor.left}px` }}
    >
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <Link className={styles.backButton} href="/homepage/projects" aria-label="Back to projects">
        &larr;
      </Link>

      <section className={styles.content} ref={contentRef}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>A Deep Dive into:</p>
          <h1>Bus Stops:</h1>
          <p className={styles.eyebrow}>The Cornerstones of Community!</p>
        </header>
        <section className={styles.projectSection} aria-label="Project steps">
          <div className={styles.projectStepsGrid}>
            {projectSteps.map((step, index) => (
              <div className={styles.projectStepItem} key={step}>
                {index === 0 && !hasDriven && (
                  <div
                    className={`${styles.projectStepBusPrompt} ${isDriving ? styles.projectBusDriving : ''} ${isDriving || hasDriven ? styles.projectBusClicked : ''}`}
                    onAnimationEnd={() => {
                      setIsDriving(false);
                      setHasDriven(true);
                      setSecondPhase('driving');
                    }}
                  >
                    <button
                      className={styles.projectBusButton}
                      type="button"
                      onClick={(e) => {
                        const busRect = e.currentTarget.parentElement.getBoundingClientRect();
                        const contentRect = contentRef.current.getBoundingClientRect();
                        setBusAnchor({ top: busRect.top - contentRect.top, left: busRect.left - contentRect.left });
                        setHasDriven(false);
                        setSecondPhase('idle');
                        setThirdPhase('idle');
                        setIsDriving(true);
                      }}
                      aria-label="Jump to step 1: Define"
                    >
                      <Image
                        src="/images/project-sec/Bus.png"
                        alt=""
                        width={2160}
                        height={1620}
                        sizes="(max-width: 700px) 40vw, 14rem"
                      />
                    </button>
                    <Image
                      className={styles.projectStepBusHint}
                      src="/images/other/Click_Me_Left_.png"
                      alt="Click me"
                      width={300}
                      height={300}
                    />
                  </div>
                )}
                {index === 0 && (isDriving || hasDriven) && (
                  <p className={styles.busQuestion} aria-label={busQuestion}>
                    {[...busQuestion].map((char, i) => (
                      <span
                        aria-hidden="true"
                        className={styles.busQuestionLetter}
                        key={i}
                        style={{ animationDelay: `${0.3 + (i * 3) / busQuestion.length}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </p>
                )}
                {index === 0 && secondPhase === 'driving' && (
                  <div className={styles.secondBus} onAnimationEnd={() => {
                      setSecondPhase('done');
                      setThirdPhase('driving');
                    }} aria-hidden="true">
                    <Image src="/images/project-sec/Bus.png" alt="" width={2160} height={1620} sizes="40vw" />
                  </div>
                )}
                {index === 0 && secondPhase !== 'idle' && (
                  <p className={`${styles.busQuestion} ${styles.busQuestion2}`} aria-label={busQuestion2}>
                    {[...busQuestion2].map((char, i) => (
                      <span
                        aria-hidden="true"
                        className={styles.busQuestionLetter}
                        key={i}
                        style={{ animationDelay: `${0.8 + ((busQuestion2.length - 1 - i) * 4) / busQuestion2.length}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </p>
                )}
                {index === 0 && thirdPhase === 'driving' && (
                  <div className={styles.thirdBus} onAnimationEnd={() => setThirdPhase('done')} aria-hidden="true">
                    <Image src="/images/project-sec/Bus.png" alt="" width={2160} height={1620} sizes="40vw" />
                  </div>
                )}
                {index === 0 && thirdPhase !== 'idle' && (
                  <p className={`${styles.busQuestion} ${styles.busQuestion3}`} aria-label={busQuestion3}>
                    {[...busQuestion3].map((char, i) => (
                      <span
                        aria-hidden="true"
                        className={styles.busQuestionLetter}
                        key={i}
                        style={{ animationDelay: `${1.4 + (i * 0.8) / busQuestion3.length}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </p>
                )}
                <h2 className={styles.projectNumberTitle}>{String(index + 1).padStart(2, '0')}</h2>
                <article className={styles.projectStepCard} id={`project-step-${String(index + 1).padStart(2, '0')}`}>
                  <p className={styles.projectStepTitle}>{step}</p>
                </article>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}