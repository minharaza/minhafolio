 'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../projects.module.css';

export default function ProjectThreePage() {
  const [isDriving, setIsDriving] = useState(false);
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
    <main className={styles.page}>
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <Link className={styles.backButton} href="/homepage/projects" aria-label="Back to projects">
        &larr;
      </Link>

      <section className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>A Deep Dive into:</p>
          <h1>Bus Stops:</h1>
          <p className={styles.eyebrow}>The Cornerstones of Community!</p>
        </header>
        <section className={styles.projectSection} aria-label="Project steps">
          <div className={styles.projectStepsGrid}>
            {projectSteps.map((step, index) => (
              <div className={styles.projectStepItem} key={step}>
                {index === 0 && (
                  <div
                    className={`${styles.projectStepBusPrompt} ${isDriving ? styles.projectBusDriving : ''}`}
                    onAnimationEnd={() => setIsDriving(false)}
                  >
                    <button
                      className={styles.projectBusButton}
                      type="button"
                      onClick={() => {
                        setIsDriving(true);
                        document.getElementById('project-step-01')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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