'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../projects.module.css';

export default function ProjectTwoPage() {
  const [showCombinedRobot, setShowCombinedRobot] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <nav className={styles.sectionNavigation} aria-label="Jump to project section">
        <a href="#project-section-01" aria-label="Go to section 1, Overview">01</a>
        <a href="#project-section-02" aria-label="Go to section 2, Research and Analysis">02</a>
        <a href="#project-section-03" aria-label="Go to section 3, Concept Development">03</a>
        <a href="#project-section-04" aria-label="Go to section 4, Design and Prototype">04</a>
        <a href="#project-section-05" aria-label="Go to section 5, Final Thoughts">05</a>
      </nav>
      <Link className={styles.backButton} href="/homepage/projects" aria-label="Back to projects">
        &larr;
      </Link>

      <section className={`${styles.content} ${styles.projectTwoContent}`}>
        <header id="project-top" className={`${styles.header} ${styles.projectTwoHeader}`}>
          <p className={styles.eyebrow}>Project 2</p>
          <h1>CharMED-ID: <br />A Medical ID Keychain</h1>
        </header>
        <section className={styles.projectSection} aria-labelledby="project-section-title-01">
          <h2 id="project-section-01" className={styles.projectNumberTitle}>01</h2>
          <h3 id="project-section-title-01" className={styles.swotHeading}>Overview</h3>
          <section className={styles.projectDetails} aria-label="Project details">
          <article className={styles.projectDetail}>
            <h2>Project Overview</h2>
            <p>
              CharMED-ID is a medical ID NFC tag created to blend the cross section of functionality and fashion. It gives
              users the ability to bring along crucial medical information on-the-go in a personalized manner. Inspired by the
              "charmification" of purses, belts, phones and more, CharMED-ID leans into this trend while providing use in serious 
              medical situations.
            </p>
          </article>
        </section>
         <h2 className={styles.researchFindingIntro}>What is the best solution that for two completely different needs?</h2>
          <div className={styles.projectTwoSolutionLine}>
            <div className={styles.projectTwoRobotPair} aria-label="Robot keychain before and after customization">
              <Image
                src="/images/proj2/RB-1.png"
                alt="Plain CharMED-ID robot keychain"
                width={2048}
                height={2048}
                sizes="(max-width: 700px) 40vw, 20rem"
              />
              <span aria-hidden="true">+</span>
              <Image
                src="/images/proj2/Rb-2.png"
                alt="CharMED-ID robot keychain dressed with a bow and outfit"
                width={2048}
                height={2048}
                sizes="(max-width: 700px) 40vw, 20rem"
              />
            </div>
            <button
              className={styles.projectTwoCombineButton}
              type="button"
              aria-expanded={showCombinedRobot}
              aria-controls="project-two-combined-robot"
              aria-label={showCombinedRobot ? 'Hide combined solution' : 'Combine solutions'}
              title={showCombinedRobot ? 'Hide combined solution' : 'Combine solutions'}
              onClick={() => setShowCombinedRobot((isVisible) => !isVisible)}
            >
              <Image
                className={styles.projectTwoCombineHint}
                src="/images/other/Click_Me.png"
                alt=""
                aria-hidden="true"
                width={800}
                height={800}
              />
              =
            </button>
            {showCombinedRobot && (
              <div className={styles.projectTwoRobotResult} id="project-two-combined-robot">
                <Image
                  src="/images/proj2/Rb-3.png"
                  alt="Combined CharMED-ID robot keychain solution"
                  width={2048}
                  height={2048}
                  sizes="(max-width: 700px) 70vw, 24rem"
                />
              </div>
            )}
          </div>
          {showCombinedRobot && (
            <h2 className={styles.researchFindingIntro}>Find something that balances both!</h2>
          )}
        </section>
        <section className={styles.projectSection} aria-labelledby="project-section-title-02">
          <h2 id="project-section-02" className={styles.projectNumberTitle}>02</h2>
          <h3 id="project-section-title-02" className={styles.swotHeading}>Research &amp; Analysis</h3>
          <p className={styles.projectTwoResearchCopy}>
            Medical IDs are essential, but traditional options may not feel personal enough for everyday wear. I explored how people customize their bags and accessories with charms, then looked for ways to make a medical ID feel expressive while remaining easy to carry and recognize.
          </p>
          <div className={styles.projectTwoKeychainGallery} aria-label="CharMED-ID keychain concepts">
            {[
              { src: '/images/proj2/KC-1.png', alt: 'CharMED-ID keychain concept 1' },
              { src: '/images/proj2/KC-2.png', alt: 'CharMED-ID keychain concept 2' },
              { src: '/images/proj2/KC-3.png', alt: 'CharMED-ID keychain concept 3' },
              { src: '/images/proj2/KC-4.png', alt: 'CharMED-ID keychain concept 4' },
              { src: '/images/proj2/KC-5.png', alt: 'CharMED-ID keychain concept 5' },
              { src: '/images/proj2/KC-6.png', alt: 'CharMED-ID keychain concept 6' },
              { src: '/images/proj2/KC-6 1.png', alt: 'CharMED-ID keychain concept 7' },
            ].map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={2048}
                height={2048}
                sizes="(max-width: 700px) 42vw, (max-width: 1100px) 28vw, 20rem"
              />
            ))}
          </div>
        </section>
        <section className={styles.projectSection} aria-labelledby="project-section-title-03">
          <h2 id="project-section-03" className={styles.projectNumberTitle}>03</h2>
          <h3 id="project-section-title-03" className={styles.swotHeading}>Concept Development</h3>
        </section>
        <section className={styles.projectSection} aria-labelledby="project-section-title-04">
          <h2 id="project-section-04" className={styles.projectNumberTitle}>04</h2>
          <h3 id="project-section-title-04" className={styles.swotHeading}>Design &amp; Prototype</h3>
        </section>
        <section className={styles.projectSection} aria-labelledby="project-section-title-05">
          <h2 id="project-section-05" className={styles.projectNumberTitle}>05</h2>
          <h3 id="project-section-title-05" className={styles.swotHeading}>Final Thoughts</h3>
        </section>
      </section>
    </main>
  );
}