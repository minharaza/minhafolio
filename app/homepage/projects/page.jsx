'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './projects.module.css';

const mats = [
  { src: '/images/project-sec/Mat1.png', plate: '/images/project-sec/Plate1.png', drink: '/images/project-sec/Drink1.png', food: '/images/project-sec/Toast.png', project: 'Project1', foodAlt: 'Toast', alt: 'Pink place setting with plate, drink, fork, and knife' },
  { src: '/images/project-sec/Mat2.png', plate: '/images/project-sec/Plate2.png', drink: '/images/project-sec/Drink2.png', food: '/images/project-sec/Waffle.png', project: 'Project2', foodAlt: 'Waffle', alt: 'Orange place setting with plate, drink, fork, and knife' },
  { src: '/images/project-sec/Mat3.png', plate: '/images/project-sec/Plate3.png', drink: '/images/project-sec/Drink3.png', food: '/images/other/Pancake.png', project: 'Project3', foodAlt: 'Pancake', alt: 'Striped yellow place setting with plate, drink, fork, and knife' },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [showDirections, setShowDirections] = useState(true);
  const directionsCloseRef = useRef(null);

  useEffect(() => {
    directionsCloseRef.current?.focus();
  }, []);

  return (
    <main className={styles.page}>
      <div inert={showDirections ? '' : undefined}>
        <div className={styles.backgroundTexture} aria-hidden="true" />
        <button
          type="button"
          className={styles.backButton}
          onClick={() => router.push('/homepage?skipIntro=1')}
          aria-label="Go back to homepage"
        >
          &larr;
        </button>

        <section className={styles.content} aria-label="Project mats">
          <header className={styles.header}>
            <p className={styles.eyebrow}>A small collection</p>
            <h1>Projects</h1>
            <p className={styles.intro}>Ideas I have shaped into useful, thoughtful experiences.</p>
          </header>
          <div className={styles.grid}>
          {mats.map((mat) => (
            <figure className={styles.matCard} key={mat.src}>
              <Image
                src={mat.src}
                alt=""
                fill
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 31vw"
                className={styles.matImage}
              />
              <span className={`${styles.utensilPositioner} ${styles.forkPositioner}`} aria-hidden="true">
                <Image
                  src="/images/project-sec/Fork.png"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 28vw, 16rem"
                  className={styles.utensilImage}
                />
              </span>
              <span className={`${styles.utensilPositioner} ${styles.knifePositioner}`} aria-hidden="true">
                <Image
                  src="/images/project-sec/Knife.png"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 28vw, 16rem"
                  className={styles.utensilImage}
                />
              </span>
              <span className={styles.platePositioner}>
                <Image
                  src={mat.plate}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 38vw, 22rem"
                  className={styles.plateImage}
                />
              </span>
              <button
                type="button"
                className={styles.foodButton}
                onClick={() => router.push(`/homepage/projects/${mat.project}`)}
                aria-label={`Open ${mat.project}`}
              >
                <Image
                  src={mat.food}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 20vw, 14rem"
                  className={styles.foodImage}
                />
              </button>
              <span className={styles.foodClickHint} aria-hidden="true">
                <Image
                  src="/images/other/Click_Me.png"
                  alt=""
                  fill
                  sizes="(max-width: 700px) 12vw, 8rem"
                />
              </span>
              {mat.project === 'Project1' && (
                <svg className={styles.toastCaption} viewBox="0 0 500 130" aria-hidden="true">
                  <defs>
                    <path id="toast-caption-arc" d="M 20 110 Q 250 -50 480 110" />
                  </defs>
                  <text fill="currentColor">
                    <textPath href="#toast-caption-arc" startOffset="50%" textAnchor="middle">
                      Helping a local business with a
                    </textPath>
                  </text>
                </svg>
              )}
              {mat.project === 'Project3' && (
                <svg className={`${styles.toastCaption} ${styles.projectThreeCaption}`} viewBox="0 -35 500 170" aria-hidden="true">
                  <defs>
                    <path id="pancake-caption-arc" d="M 20 110 Q 270 -140 480 110" />
                  </defs>
                  <text fill="currentColor">
                    <textPath href="#pancake-caption-arc" startOffset="50%" textAnchor="middle">
                      Reimagining the Urban Experience through a
                    </textPath>
                  </text>
                </svg>
              )}
              <span className={styles.drinkPositioner} aria-hidden="true">
                <Image
                  src={mat.drink}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 18vw, 12rem"
                  className={styles.drinkImage}
                />
              </span>
            </figure>
          ))}
          </div>
        </section>
      </div>
      {showDirections && (
        <div className={styles.directionsBackdrop}>
          <section
            className={styles.directionsDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-directions-title"
            aria-describedby="projects-directions-copy"
          >
            <button
              ref={directionsCloseRef}
              type="button"
              className={styles.directionsClose}
              onClick={() => setShowDirections(false)}
              aria-label="Close directions and explore projects"
            >
              &times;
            </button>
            <p className={styles.directionsEyebrow}>Take a bite into</p>
            <h2 id="projects-directions-title">My Projects</h2>
            <p id="projects-directions-copy">
              Feast your eyes on some delicious projects! Click on a plate to slice right into my work!
            </p>
            <p className={styles.directionsPrompt}>Close this note to start exploring.</p>
          </section>
        </div>
      )}
    </main>
  );
}
