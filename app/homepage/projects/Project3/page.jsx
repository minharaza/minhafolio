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
  const [showBench, setShowBench] = useState(true);
  const contentRef = useRef(null);

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
            <div className={styles.projectStepItem} id="project-step-01">
                {!hasDriven && (
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
                {(isDriving || hasDriven) && (
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
                {secondPhase === 'driving' && (
                  <div className={styles.secondBus} onAnimationEnd={() => {
                      setSecondPhase('done');
                      setThirdPhase('driving');
                    }} aria-hidden="true">
                    <Image src="/images/project-sec/Bus.png" alt="" width={2160} height={1620} sizes="40vw" />
                  </div>
                )}
                {secondPhase !== 'idle' && (
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
                {thirdPhase === 'driving' && (
                  <div className={styles.thirdBus} onAnimationEnd={() => setThirdPhase('done')} aria-hidden="true">
                    <Image src="/images/project-sec/Bus.png" alt="" width={2160} height={1620} sizes="40vw" />
                  </div>
                )}
                {thirdPhase !== 'idle' && (
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
                <h2 className={styles.projectNumberTitle}>01</h2>
                <article className={styles.projectDetail}>
                  <h2>A Little Overview</h2>
                  <p>Living within the Over-the-Rhine neighborhood of Cincinnati, the bus has become a consistent
                    step within my daily routine. Whether there were leaves to crunch underfoot or springtime 
                    drizzles pattering on my forehead, the morning '21' slowly became one of the best parts of my mornings.
                    <br /><br />
                    One morning, my eyes were struck by an uneasy sight. The bus stop was gone! Nothing but the divets
                    in the concrete from the screws that once held it down. Over the next coming weeks, I observed fellow 
                    bus goers experience a wave of emotions from the missing bench. Overarchingly, the missing seating was 
                    harmful to every rider. Elders and mothers did not have a place to sit anymore. The bench's absence caused
                    a ripple effect throughout the community in a negative way.    
                     </p>
                  
                </article>
                {showBench && (
                <div className={styles.projectBenchRow}>
                  <Image
                    className={styles.projectBenchHint}
                    src="/images/other/Click_Me.png"
                    alt="Click me"
                    width={800}
                    height={800}
                  />
                  <button
                    className={styles.projectBenchButton}
                    type="button"
                    onClick={() => setShowBench(false)}
                    aria-label="Bus stop bench"
                  >
                    <Image
                      className={styles.projectStepImage}
                      src="/images/project-sec/Bench.png"
                      alt="Illustration of a bus stop with a bench"
                      width={1932}
                      height={1932}
                    />
                    <Image
                      className={styles.projectBenchHappy}
                      src="/images/project-sec/Happy.png"
                      alt="Happy character sitting on the bus stop bench"
                      width={1024}
                      height={1536}
                    />
                  </button>
                </div>
                )}
              </div>
              <figure className={styles.busOriginStory} aria-label="The missing bus stop bench">
                <div className={styles.busOriginPhotos}>
                  <Image
                    className={`${styles.busOriginPhoto} ${styles.busOriginSelfie}`}
                    src="/images/project-sec/at-bus-stop.jpeg"
                    alt="Rider waiting beneath the blue shelter at the bus stop"
                    width={3024}
                    height={4032}
                    sizes="(max-width: 700px) 85vw, 22rem"
                  />
                  <span className={styles.busOriginOrnament} aria-hidden="true">⋆˚𓏲ּ｡➹</span>
                  <Image
                    className={styles.busOriginPhoto}
                    src="/images/project-sec/missing-bus-stop.png"
                    alt="The sidewalk where the bus stop bench was removed"
                    width={1536}
                    height={2048}
                    sizes="(max-width: 700px) 85vw, 22rem"
                  />
                </div>
                <figcaption className={styles.busOriginCaption}>
                  In the aftermath of “The Tragedy,” my mornings consisted of unintentionally experience research. Other bus users complained immensely about this change, and rightfully so. I heard commentary about a number of issues that arose with the removal, which led the gears in my brain to turn a little extra. I was experiencing firsthand the effects of a decision with an nonequivalent impact. How can a seemingly small change affect a community at large? The question weighed on me greatly, to a point of invention!
                </figcaption>
              </figure>
              <div className={styles.projectStepItem} id="project-step-02">
                <h2 className={styles.projectNumberTitle}>02</h2>
                <article className={styles.projectDetail}>
                  <h2>Research</h2>
                  <p>Paragraph for Research.</p>
                </article>
              </div>
              <div className={styles.projectStepItem} id="project-step-03">
                <h2 className={styles.projectNumberTitle}>03</h2>
                <article className={styles.projectDetail}>
                  <h2>Analysis &amp; Planning</h2>
                  <p>Paragraph for Analysis &amp; Planning.</p>
                </article>
              </div>
              <div className={styles.projectStepItem} id="project-step-04">
                <h2 className={styles.projectNumberTitle}>04</h2>
                <article className={styles.projectDetail}>
                  <h2>Design</h2>
                  <p>Paragraph for Design.</p>
                </article>
              </div>
              <div className={styles.projectStepItem} id="project-step-05">
                <h2 className={styles.projectNumberTitle}>05</h2>
                <article className={styles.projectDetail}>
                  <h2>Prototyping</h2>
                  <p>Paragraph for Prototyping.</p>
                </article>
              </div>
              <div className={styles.projectStepItem} id="project-step-06">
                <h2 className={styles.projectNumberTitle}>06</h2>
                <article className={styles.projectDetail}>
                  <h2>Testing</h2>
                  <p>Paragraph for Testing.</p>
                </article>
              </div>
              <div className={styles.projectStepItem} id="project-step-07">
                <h2 className={styles.projectNumberTitle}>07</h2>
                <article className={styles.projectDetail}>
                  <h2>Launch</h2>
                  <p>Paragraph for Launch.</p>
                </article>
              </div>
              <div className={styles.projectStepItem} id="project-step-08">
                <h2 className={styles.projectNumberTitle}>08</h2>
                <article className={styles.projectDetail}>
                  <h2>Iteration</h2>
                  <p>Paragraph for Iteration.</p>
                </article>
              </div>
          </div>
        </section>
      </section>
    </main>
  );
}