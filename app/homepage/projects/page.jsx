'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './projects.module.css';

const mats = [
  { src: '/images/project-sec/Mat1.png', plate: '/images/Plate1.png', alt: 'Pink mat with a decorative plate' },
  { src: '/images/project-sec/Mat2.png', plate: '/images/Plate2.png', alt: 'Orange mat with a decorative plate' },
  { src: '/images/project-sec/Mat3.png', plate: '/images/Plate3.png', alt: 'Striped yellow mat with a decorative plate' },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className={styles.page}>
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
              <span className={styles.platePositioner}>
                <Image
                  src={mat.plate}
                  alt={mat.alt}
                  fill
                  sizes="(max-width: 700px) 38vw, 22rem"
                  className={styles.plateImage}
                />
              </span>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
