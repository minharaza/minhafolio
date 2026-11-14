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
          <article className={styles.projectDetail}>
            <h2>Design Challenge</h2>
            <p className={styles.projectTwoResearchCopy}> 
              The two catagories of fashion and medical function seemingly clash when it comes to design aesthetics.
              This project aims to design a keychain that leans towards playful customization, while having the purposeful
              function of a Medical ID tag. The challenge arises in balancing two superficially, mutually exculisive design
              catagories into a seamless interntional solution.
            </p>
          </article>
        </section>
        <section className={styles.projectSection} aria-labelledby="project-section-title-02">
          <h2 id="project-section-02" className={styles.projectNumberTitle}>02</h2>
          <h3 id="project-section-title-02" className={styles.swotHeading}>Research &amp; Analysis</h3>
          
          <div className={`${styles.projectTwoResearchCopy} ${styles.projectDetail}`}>
            <h2>What it Means to "Charmify"</h2>
            <p>
              In the uptick of the "Trinket Girl" aesthetic, adding charms everyday items has taken the internet by storm in the past
              couple years. From personalizing bags to phone cases to belts, charming as spread into everyday fashion. 
              This phenomenon reflects the new generations' value of self-expression even in the mundune.
              <br /><br />
              Check out some examples of "charmifying" below!
            </p>
          </div>     
          <div className={styles.projectTwoKeychainGallery} aria-label="CharMED-ID keychain concepts">
            <p className={styles.projectTwoOrbitLabel}>The Art of Charmifying!</p>
            <div className={styles.projectTwoKeychainOrbit}>
              {[
              { src: '/images/proj2/KC-1.png', alt: 'CharMED-ID keychain concept 1' },
              { src: '/images/proj2/KC-2.png', alt: 'CharMED-ID keychain concept 2' },
              { src: '/images/proj2/KC-3.png', alt: 'CharMED-ID keychain concept 3' },
              { src: '/images/proj2/KC-4.png', alt: 'CharMED-ID keychain concept 4' },
              { src: '/images/proj2/KC-5.png', alt: 'CharMED-ID keychain concept 5' },
              { src: '/images/proj2/KC-6.png', alt: 'CharMED-ID keychain concept 6' },
              { src: '/images/proj2/KC-6 1.png', alt: 'CharMED-ID keychain concept 7' },
              ].map((image, index) => (
                <figure
                  className={styles.projectTwoKeychainOrbitItem}
                  key={image.src}
                  style={{ '--orbit-angle': `${(360 / 7) * index}deg` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={2048}
                    height={2048}
                    sizes="(max-width: 700px) 28vw, 12rem"
                  />
                </figure>
              ))}
            </div>
          </div>
          <h3 className={styles.swotHeading}>Existing Medical ID Tags</h3>
          <div className={`${styles.projectTwoResearchCopy} ${styles.projectDetail}`}>  
             <h2> NFC Tags on the Market</h2>
          <p>
           Currently a keychain with an embedded "Near Field Communication" tag is not a new product. However, they typically
           provide a similar experience in terms of the design choices. In the realm of medicine, products often reflect a 
           clinical, simplistic focus. These design choices are reflected upon in the examples shown below. These tags are
           straighforward, using words and constrasting colors to clearly convey the use of this at a glance. 
           These design choices are reflected upon in the examples shown below.
          </p>
          </div>
          <div className={styles.projectTwoMedicalKeyring} aria-label="Existing NFC medical ID tags">
            {[
              { src: '/images/proj2/MID-1.png', alt: 'Heart condition NFC medical ID tag' },
              { src: '/images/proj2/MID-2.png', alt: 'Non-verbal NFC medical ID tag' },
              { src: '/images/proj2/MID-3.png', alt: 'Round medical information NFC tag' },
              { src: '/images/proj2/MID-4.png', alt: 'Red medical alert NFC tag' },
            ].map((tag) => (
              <figure className={styles.projectTwoMedicalKeyringTag} key={tag.src}>
                <Image
                  src={tag.src}
                  alt={tag.alt}
                  width={2048}
                  height={2048}
                  sizes="(max-width: 700px) 22vw, 14rem"
                />
              </figure>
            ))}
          </div>
          <div className={`${styles.projectTwoResearchCopy} ${styles.projectDetail}`}>  
             <h2>Personalized Tags on the Market</h2>
          <p>
           The culture surrounding personalizing items with charms leans heavily into the chunky aesthethic of maximalism.
           There are many subcultures within this space, especially when it comes to themes and niches, yet the look is the same.
           Some may even say more is more! The designs can take numerous colorful turns, incorporating plushies, beads, photographs,
           and way more. Check out some inspiration below!
          </p>
          </div>
          <div className={styles.projectTwoMedicalKeyring} aria-label="Existing NFC medical ID tags">
            {[
              { src: '/images/proj2/PTM-1.png', alt: 'plushie keychain' },
              { src: '/images/proj2/PTM-2.png', alt: 'window keychain' },
              { src: '/images/proj2/PTM-5.png', alt: 'carabeaner beaded keychain' },
              { src: '/images/proj2/PTM-4.png', alt: 'Resin keychain' },

            ].map((tag) => (
              <figure className={styles.projectTwoMedicalKeyringTag} key={tag.src}>
                <Image
                  src={tag.src}
                  alt={tag.alt}
                  width={2048}
                  height={2048}
                  sizes="(max-width: 700px) 22vw, 14rem"
                />
              </figure>
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