 'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../projects.module.css';

const researchPersonas = [
  {
    id: 'student-commuter',
    name: 'Student Commuter',
    image: '/images/project-sec/Student.png',
    details: 'This high school student has two working parents who cannot drop her off to school, so she depends fully on the bus as a mode of transportation on a daily basis to get to school. School is too far of a walk to do alone, especially since the streets are not supportive of pedrestrians around her neighborhood.',
  },
  {
    id: 'parent-rider',
    name: 'Parent Rider',
    image: '/images/project-sec/Parent.png',
    details: 'This parent depends on the bus to get around the city. Her daughter is still younger, so she needs an adult to ride with her to school. Sometimes the mornings are challenging because she needs to keep track of her daughter along with other things while waiting for the bus. This is challenging without a place to sit.',
  },
  {
    id: 'educator-commuter',
    name: 'Corporate Commuter',
    image: '/images/project-sec/Educator.png',
    details: 'This downtown local relied on the bus to get to work. If he were to walk everyday it would consume over an hour of his morning, along with a toll on his body. He has a chronic illness that prevents him from walking long distances. Sometimes the bus changes their routes causing him painful mornings due to overexertion.',
  },
];

const transportationBenefits = [
  {
    label: 'Economic Opportunity',
    icon: '/images/project-sec/proj%203/increase-svgrepo-com.svg',
  },
  {
    label: 'Better Safety',
    icon: '/images/project-sec/proj%203/safety-svgrepo-com.svg',
  },
  {
    label: 'Higher Affordability',
    icon: '/images/project-sec/proj%203/save-money-cash-savings-money-reserve-svgrepo-com.svg',
  },
  {
    label: 'Less Gas Consumption',
    icon: '/images/project-sec/proj%203/gasoline-svgrepo-com.svg',
  },
  {
    label: 'Reduces Air Pollution',
    icon: '/images/project-sec/proj%203/pollution-contamination-environmental-pollution-industrian-waste-svgrepo-com.svg',
  },
  {
    label: 'Better Accessibility',
    icon: '/images/project-sec/proj%203/wheelchair-svgrepo-com.svg',
  },
  {
    label: 'Promotes Healthy Lifestyle',
    icon: '/images/project-sec/proj%203/walking-1-svgrepo-com.svg',
  },
];

const publicArtBenefits = [
  {
    label: 'Economic Growth',
    icon: '/images/project-sec/proj%203/pub%20health/money-cash-svgrepo-com.svg',
  },
  {
    label: 'Increased Cultural Identity',
    icon: '/images/project-sec/proj%203/pub%20health/gender-male-female-svgrepo-com.svg',
  },
  {
    label: 'Validates Local Artists',
    icon: '/images/project-sec/proj%203/pub%20health/artist-palette-art-artistic-svgrepo-com.svg',
  },
  {
    label: 'Reinforces Social Connection',
    icon: '/images/project-sec/proj%203/pub%20health/connection-svgrepo-com.svg',
  },
  {
    label: 'Benefits Public Mental Health',
    icon: '/images/project-sec/proj%203/pub%20health/mental-health-fill-svgrepo-com.svg',
  },
];

export default function ProjectThreePage() {
  const busQuestion = 'Have you ever tried to take the bus...?';
  const busQuestion2 = 'And then your bus stop was missing its bench?';
  const busQuestion3 = 'Well I have! What a tragedy!';
  const researchQuestion = 'How can we build a better bus stop?';
  const publicArtQuestion = 'Why is public art important to community?';
  const [isDriving, setIsDriving] = useState(false);
  const [hasDriven, setHasDriven] = useState(false);
  const [secondPhase, setSecondPhase] = useState('idle');
  const [thirdPhase, setThirdPhase] = useState('idle');
  const [busAnchor, setBusAnchor] = useState({ top: null, left: 0 });
  const [benchClicked, setBenchClicked] = useState(false);
  const [researchBusPhase, setResearchBusPhase] = useState('idle');
  const [researchBusAnchor, setResearchBusAnchor] = useState({ top: null, left: 0 });
  const [publicArtBusPhase, setPublicArtBusPhase] = useState('idle');
  const [publicArtBusAnchor, setPublicArtBusAnchor] = useState({ top: null, left: 0 });
  const [expandedResearchPersona, setExpandedResearchPersona] = useState(null);
  const [showResearchPersonaHints, setShowResearchPersonaHints] = useState(true);
  const contentRef = useRef(null);

  return (
    <main
      className={styles.page}
      style={busAnchor.top === null && researchBusAnchor.top === null && publicArtBusAnchor.top === null ? undefined : {
        '--bus-anchor': busAnchor.top === null ? undefined : `${busAnchor.top}px`,
        '--bus-left': busAnchor.top === null ? undefined : `${busAnchor.left}px`,
        '--research-bus-anchor': researchBusAnchor.top === null ? undefined : `${researchBusAnchor.top}px`,
        '--research-bus-left': researchBusAnchor.top === null ? undefined : `${researchBusAnchor.left}px`,
        '--public-art-bus-anchor': publicArtBusAnchor.top === null ? undefined : `${publicArtBusAnchor.top}px`,
        '--public-art-bus-left': publicArtBusAnchor.top === null ? undefined : `${publicArtBusAnchor.left}px`,
      }}
    >
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <Link className={styles.backButton} href="/homepage/projects" aria-label="Back to projects">
        &larr;
      </Link>

      <section className={styles.content} ref={contentRef}>
        <header className={`${styles.header} ${styles.projectThreeHeader}`}>
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
                <div className={styles.projectBenchRow}>
                  {!benchClicked && (
                    <Image
                      className={styles.projectBenchHint}
                      src="/images/other/Click_Me.png"
                      alt="Click me"
                      width={800}
                      height={800}
                    />
                  )}
                  <button
                    className={styles.projectBenchButton}
                    type="button"
                    onClick={() => setBenchClicked(true)}
                    aria-label={benchClicked ? 'Sad rider where the bus stop bench stood' : 'Click the bus stop bench'}
                  >
                    {!benchClicked && (
                      <Image
                        className={styles.projectStepImage}
                        src="/images/project-sec/Bench.png"
                        alt="Illustration of a bus stop with a bench"
                        width={1932}
                        height={1932}
                      />
                    )}
                    <Image
                      className={`${styles.projectBenchCharacter} ${benchClicked ? styles.projectBenchCharacterSad : ''}`}
                      src={benchClicked ? '/images/project-sec/Sad.png' : '/images/project-sec/Happy.png'}
                      alt={benchClicked ? 'Sad character where the bus stop bench stood' : 'Happy character sitting on the bus stop bench'}
                      width={1024}
                      height={1536}
                    />
                    {benchClicked && (
                      <span className={styles.projectBenchSpeech}>
                        <Image
                          src="/images/other/Speech_Bubble.png"
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="(max-width: 700px) 40vw, 12rem"
                        />
                        <span>I miss the bench!</span>
                      </span>
                    )}
                  </button>
                </div>
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
                <div className={styles.researchBusPrompt}>
                  <button
                    className={`${styles.projectBusButton} ${styles.researchBusButton} ${researchBusPhase !== 'idle' ? styles.researchBusButtonInactive : ''}`}
                    type="button"
                    onClick={(event) => {
                      const busRect = event.currentTarget.getBoundingClientRect();
                      const contentRect = contentRef.current.getBoundingClientRect();
                      setResearchBusAnchor({
                        top: busRect.top - contentRect.top,
                        left: busRect.left - contentRect.left,
                      });
                      setResearchBusPhase('driving');
                    }}
                    aria-label="Start the bus and reveal the research question"
                    aria-expanded={researchBusPhase !== 'idle'}
                    disabled={researchBusPhase !== 'idle'}
                  >
                    <Image
                      src="/images/project-sec/Bus.png"
                      alt=""
                      width={2160}
                      height={1620}
                      sizes="(max-width: 700px) 55vw, 18rem"
                    />
                  </button>
                  {researchBusPhase === 'idle' && (
                    <Image
                      className={styles.projectStepBusHint}
                      src="/images/other/Click_Me_Left_.png"
                      alt="Click me"
                      width={300}
                      height={300}
                    />
                  )}
                </div>
                {researchBusPhase !== 'idle' && (
                  <p className={styles.researchQuestion} role="status" aria-label={researchQuestion}>
                    {[...researchQuestion].map((char, index) => (
                      <span
                        aria-hidden="true"
                        className={styles.busQuestionLetter}
                        key={index}
                        style={{ animationDelay: `${0.2 + (index * 2.4) / researchQuestion.length}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </p>
                )}
                {researchBusPhase === 'driving' && (
                  <div className={styles.researchBusDriving} onAnimationEnd={() => setResearchBusPhase('done')} aria-hidden="true">
                    <Image src="/images/project-sec/Bus.png" alt="" width={2160} height={1620} sizes="40vw" />
                  </div>
                )}
                <h2 className={styles.researchFindingIntro}>Based on my field research, discussing with other bus goers, here’s what I found:</h2>
                <section className={styles.researchChallenges} aria-labelledby="research-challenges-title">
                  <h3 className={styles.researchChallengesTitle} id="research-challenges-title">Challenges</h3>
                  <ul className={styles.researchChallengeGrid}>
                    <li>No Wifi Connection</li>
                    <li>Incoming Bus Information Not Displayed Clearly</li>
                    <li>No Seating</li>
                    <li>Bus Drivers Missing Bus Stop Waiters</li>
                    <li>Bus Only Takes Exact Change</li>
                    <li>Disruption of Local Community</li>
                    <li>No Weather Protection</li>
                    <li>Bus Route Adjustment Information is Unclear</li>
                    <li>Lack of Consideration for Passengers</li>
                  </ul>
                </section>
                <section className={styles.researchInsights} aria-labelledby="research-userpersonas-title">
                  <h3 className={styles.researchInsightsTitle} id="research-userpersonas-title">User Personas</h3>
                  <div className={styles.researchPersonaBoard}>
                    {showResearchPersonaHints && (
                      <>
                        <button
                          className={`${styles.researchPersonaHint} ${styles.researchPersonaHintLeft}`}
                          type="button"
                          onClick={() => setShowResearchPersonaHints(false)}
                          aria-label="Dismiss left persona hint"
                        >
                          <Image src="/images/other/Click_Me.png" alt="Click me" width={800} height={800} />
                        </button>
                        <button
                          className={`${styles.researchPersonaHint} ${styles.researchPersonaHintRight}`}
                          type="button"
                          onClick={() => setShowResearchPersonaHints(false)}
                          aria-label="Dismiss right persona hint"
                        >
                          <Image src="/images/other/Click_Me_Left_.png" alt="Click me" width={300} height={300} />
                        </button>
                      </>
                    )}
                    <div className={styles.researchPersonaGrid}>
                    {researchPersonas.map((persona) => {
                      const isExpanded = expandedResearchPersona === persona.id;
                      const detailsId = `research-persona-details-${persona.id}`;

                      return (
                        <button
                          className={`${styles.researchPersonaCard}${isExpanded ? ` ${styles.researchPersonaCardExpanded}` : ''}`}
                          type="button"
                          key={persona.id}
                          aria-expanded={isExpanded}
                          aria-controls={detailsId}
                          onClick={() => {
                            setShowResearchPersonaHints(false);
                            setExpandedResearchPersona(isExpanded ? null : persona.id);
                          }}
                        >
                          <Image
                            className={styles.researchPersonaImage}
                            src={persona.image}
                            alt=""
                            width={512}
                            height={512}
                            sizes="(max-width: 700px) 40vw, 12rem"
                          />
                          <span className={styles.researchPersonaName}>{persona.name}</span>
                          <span className={styles.researchPersonaDetails} id={detailsId} hidden={!isExpanded}>
                            {persona.details}
                          </span>
                        </button>
                      );
                    })}
                    </div>
                  </div>
                </section>
                <section className={`${styles.researchInsights} ${styles.transportationBenefitsSection}`} aria-labelledby="transportation-benefits-title">
                  <h3 className={styles.researchInsightsTitle} id="transportation-benefits-title">Benefits of Investing in Public Transportation</h3>
                  <ul className={styles.transportationBenefitsGrid}>
                    {transportationBenefits.map((benefit) => (
                      <li className={styles.transportationBenefit} key={benefit.label}>
                        <span className={styles.transportationBenefitIcon}>
                          <Image src={benefit.icon} alt="" width={128} height={128} sizes="(max-width: 700px) 7rem, 9rem" />
                        </span>
                        <span className={styles.transportationBenefitLabel}>{benefit.label}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <article className={styles.projectDetail}>
                  <p>It is unequivocally evident that research shows how public transportation is vital 
                    to the health of cities and local communities. Bus stops become a portal into opportunity 
                    and resources, especially within the Downtown Cincinnati area. This raises curiosity 
                    about how such a vital point within thousands of people’s everyday lives is overlooked. 
                    Whether a city is large or small, a bus stop guarantees community members to spend time 
                    in a location point waiting for transportation. If cities invest in public spaces, 
                    there would be a large positive impact on not only the individual residents, 
                    but the overall health of the city. 
                    <br /><br />
                    There are two categories of improvement that can be considered when redesigning a bus stop. 
                    Utilitarian improvements are solutions that alleviate an operational needs such as 
                    improving accessibility or providing a bench at a stop. Aesthetic design improvements 
                    are solutions aimed to improvement the quality of an experience through culturally 
                    intertwined design. 
                     <br /><br />
                     My goal in a solution for this opportunity is to combine both utilitarianism and 
                     aesthetics into a design that creates a comforting space for bus-goers. Not only 
                     should the function of the bus stop be catered to all users needs, but also it should 
                     tap into the local cities character with the use of public art!
                    </p>
                </article>
                <div className={styles.publicArtBusPrompt}>
                  <button
                    className={`${styles.projectBusButton} ${styles.publicArtBusButton} ${publicArtBusPhase !== 'idle' ? styles.researchBusButtonInactive : ''}`}
                    type="button"
                    disabled={publicArtBusPhase !== 'idle'}
                    onClick={(event) => {
                      const busRect = event.currentTarget.getBoundingClientRect();
                      const contentRect = contentRef.current.getBoundingClientRect();
                      setPublicArtBusAnchor({
                        top: busRect.top - contentRect.top,
                        left: busRect.left - contentRect.left,
                      });
                      setPublicArtBusPhase('driving');
                    }}
                    aria-label="Reveal why public art is important to community"
                  >
                    <Image src="/images/project-sec/Bus.png" alt="Click to continue" width={2160} height={1620} sizes="(max-width: 700px) 65vw, 30rem" />
                  </button>
                  {publicArtBusPhase === 'idle' && (
                    <Image
                      className={styles.projectStepBusHint}
                      src="/images/other/Click_Me_Left_.png"
                      alt="Click me"
                      width={300}
                      height={300}
                    />
                  )}
                </div>
                {publicArtBusPhase !== 'idle' && (
                  <p className={styles.publicArtQuestion} role="status" aria-label={publicArtQuestion}>
                    {[...publicArtQuestion].map((char, index) => (
                      <span
                        aria-hidden="true"
                        className={styles.busQuestionLetter}
                        key={index}
                        style={{ animationDelay: `${0.2 + (index * 2.4) / publicArtQuestion.length}s` }}
                      >
                        {char}
                      </span>
                    ))}
                  </p>
                )}
                {publicArtBusPhase === 'driving' && (
                  <div className={styles.publicArtBusDriving} onAnimationEnd={() => setPublicArtBusPhase('done')} aria-hidden="true">
                    <Image src="/images/project-sec/Bus.png" alt="" width={2160} height={1620} sizes="40vw" />
                  </div>
                )}
                <section
                  className={`${styles.researchInsights} ${styles.publicArtBenefitsSection}`}
                  aria-labelledby="public-art-benefits-title"
                >
                  <h3 className={styles.researchInsightsTitle} id="public-art-benefits-title">Benefits of Investing in Public Art</h3>
                  <ul className={styles.publicArtBenefitsGrid}>
                    {publicArtBenefits.map((benefit) => (
                      <li className={styles.publicArtBenefit} key={benefit.label}>
                        <span className={styles.publicArtBenefitIcon}>
                          <Image src={benefit.icon} alt="" width={128} height={128} sizes="(max-width: 700px) 7rem, 9rem" />
                        </span>
                        <span className={styles.publicArtBenefitLabel}>{benefit.label}</span>
                      </li>
                    ))}
                  </ul>
                </section>
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