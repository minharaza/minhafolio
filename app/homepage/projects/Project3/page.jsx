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

const busStopDesignGroups = [
  {
    id: 'technology-driven',
    title: 'Technology Driven Designs',
    photos: [
      { src: '/images/project-sec/proj%203/busstops/mod-bs.png', alt: 'Modern Seoul bus stop with route map, digital displays, and seating' },
      { src: '/images/project-sec/proj%203/busstops/mod-bs2.png', alt: 'Contemporary bus stop shelter with a broad canopy and accessible seating' },
      { src: '/images/project-sec/proj%203/busstops/mod-bs3.png', alt: 'Transit stop featuring a digital interactive display and passenger seating' },
      { src: '/images/project-sec/proj%203/busstops/mod-bs4.png', alt: 'Technology-driven bus stop design, image 4' },
      { src: '/images/project-sec/proj%203/busstops/mod-bs5.png', alt: 'Technology-driven bus stop design, image 5' },
    ],
  },
  {
    id: 'culture-driven',
    title: 'Culture Driven Designs',
    photos: [
      { src: '/images/project-sec/proj%203/busstops/cool-bs.png', alt: 'Fruit-shaped bus stop shelters beside the waterfront' },
      { src: '/images/project-sec/proj%203/busstops/cool-bs2.png', alt: 'Bus stop designed as a colorful strawberry shelter' },
      { src: '/images/project-sec/proj%203/busstops/cool-bs3.png', alt: 'Bus stop transformed into a whimsical living-room scene with a red sofa bench' },
      { src: '/images/project-sec/proj%203/busstops/cool-bs4.png', alt: 'Bus stop with a large umbrella canopy and brick shelter inspired by local character' },
    ],
  },
];

const worksCitedBooks = [
  {
    id: '1',
    image: '/images/other/Book_1.png',
    author: 'ArtsWave',
    year: 'n.d.',
    title: 'ArtsWave economic impact report',
    format: '[PDF].',
    url: 'https://artswave.org/wp-content/uploads/artswaveeconomicimpact_final.pdf',
  },
  {
    id: '2',
    image: '/images/other/Book_2.png',
    author: 'ArtsWave',
    year: 'n.d.',
    title: 'ArtsWave',
    url: 'https://artswave.org/',
  },
  {
    id: '3',
    image: '/images/other/Book_3.png',
    author: 'University of Cincinnati',
    year: '2025, July',
    title: 'How street murals impact communities: A study',
    site: 'University of Cincinnati News.',
    url: 'https://www.uc.edu/news/articles/2025/07/how-street-murals-impact-communities-a-study.html',
  },
  {
    id: '4',
    image: '/images/other/Book_4.png',
    author: 'Fancourt, D., & Finn, S.',
    year: '2019',
    title: 'What is the evidence on the role of the arts in improving health and well-being? A scoping review',
    site: 'World Health Organization Regional Office for Europe.',
    url: 'http://www.euro.who.int/en/publications/abstracts/what-is-the-evidence-on-the-role-of-the-arts-in-improving-health-and-well-being-a-scoping-review-2019',
  },
  {
    id: '5',
    image: '/images/other/Book_1.png',
    author: 'Destination Station',
    year: 'n.d.',
    title: 'Destination Station report (Version 2)',
    format: '[PDF].',
    url: 'https://cdn.prod.website-files.com/581110f944272e4a11871c01/5f0dfdb527350349d9092a42_5d3b6d4acb7dfd23ddee1fd5_Destination%20Station%20Report%20v2.pdf',
  },
  {
    id: '6',
    image: '/images/other/Book_2.png',
    author: 'Americans for the Arts',
    year: 'n.d.',
    title: 'Why public art matters',
    format: '[PDF].',
    url: 'https://www.americansforthearts.org/sites/default/files/Why%20Public%20Art%20Matters_FINAL_web.pdf',
  },
  {
    id: '7',
    image: '/images/other/Book_3.png',
    author: 'PPTA',
    year: 'n.d.',
    title: 'Building better bus stops: Quick reference',
    format: '[PDF].',
    url: 'https://ppta.net/wp-content/uploads/2026/01/Building-Better-Bus-Stops-Quick-Reference.pdf',
  },
  {
    id: '8',
    image: '/images/other/Book_4.png',
    author: 'Gulati, N.',
    year: '2019, September 6',
    title: 'How a humble bus stop can anchor a whole neighborhood',
    site: 'Project for Public Spaces.',
    url: 'https://www.pps.org/article/how-a-humble-bus-stop-can-anchor-a-whole-neighborhood',
  },
];

function ExpandableDesignImage({ src, alt, controls, expanded, onClick, label }) {
  return (
    <figure className={styles.busStopDesignProgressionImage}>
      <button
        className={styles.busStopDesignImageButton}
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-expanded={expanded}
        aria-controls={controls}
      >
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={2000}
          sizes="(max-width: 10rem) 150vw, 100rem"
        />
        {!expanded && (
          <Image
            className={styles.busStopDesignClickHint}
            src="/images/other/Click_Me.png"
            alt=""
            aria-hidden="true"
            width={800}
            height={800}
          />
        )}
      </button>
    </figure>
  );
}

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
  const [showWorksCitedHints, setShowWorksCitedHints] = useState(true);
  const [selectedWorksCitedBook, setSelectedWorksCitedBook] = useState(null);
  const [expandedDesignDetails, setExpandedDesignDetails] = useState({});
  const contentRef = useRef(null);
  const toggleDesignDetails = (id) => {
    setExpandedDesignDetails((current) => ({ ...current, [id]: !current[id] }));
  };

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
                <h2 className={styles.researchInsightsTitle}>Overview</h2>
                <article className={styles.projectDetail}>
                   <h2>A Little Insight into the Inspiration for the Project</h2>
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
                    sizes="(max-width: 700px) 85vw, 30rem"
                  />
                  <span className={styles.busOriginOrnament} aria-hidden="true">⋆˚𓏲ּ｡➹</span>
                  <Image
                    className={styles.busOriginPhoto}
                    src="/images/project-sec/missing-bus-stop.png"
                    alt="The sidewalk where the bus stop bench was removed"
                    width={1536}
                    height={2048}
                    sizes="(max-width: 700px) 85vw, 30rem"
                  />
                </div>
                <figcaption className={styles.busOriginCaption}>
                  <p className={styles.thoughtsHeading}>The Inspiration</p>
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
                  <h2>Public Transportation Rocks!</h2>
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
                <article className={styles.projectDetail}>
                  <h2>Public Art Rocks Too!</h2>
                  <p>Overall, the benefits public art has within a community’s mental safety is enormous! 
                    The Cincinnati local government and organizations have invested in murals on building 
                    facades all over the Over-The-Rhine area. This initiative has given a breath of life 
                    into the area, especially in recent decades. 
                    <br /><br />
                    ArtsWave is the driving engine for the Cincinnati arts community, which has helped 
                    transform the city fueling the community’s Identity. Of the public art benefits listed 
                    above, ArtsWave has encapsulated each area at an immense impact. The non-profit 
                    organization has supported over 150 organizations across the city, and most notably, 
                    had a $1.6 billion economic impact upon the city. This organization has been truly 
                    groundbreaking to the city, and has transformed its identity from one of unrest to a 
                    revitalized effort highlighting the vibrancy of its community members.
                    <br /><br />
                    Cincinnati is the perfect case study for how public art can channel positive 
                    change into benefiting community health. 


                    </p>
                </article>
                <section className={styles.worksCitedSection} aria-labelledby="works-cited-title">
                  <h3 className={styles.researchInsightsTitle} id="works-cited-title">Works Cited</h3>
                  <div className={styles.worksCitedBoard}>
                    {showWorksCitedHints && (
                      <>
                        <button
                          className={`${styles.worksCitedHint} ${styles.worksCitedHintLeft}`}
                          type="button"
                          aria-label="Dismiss left Works Cited click hint"
                          onClick={() => setShowWorksCitedHints(false)}
                        >
                          <Image src="/images/other/Click_Me.png" alt="Click me" width={800} height={800} />
                        </button>
                        <button
                          className={`${styles.worksCitedHint} ${styles.worksCitedHintRight}`}
                          type="button"
                          aria-label="Dismiss right Works Cited click hint"
                          onClick={() => setShowWorksCitedHints(false)}
                        >
                          <Image src="/images/other/Click_Me_Left_.png" alt="Click me" width={300} height={300} />
                        </button>
                      </>
                    )}
                    <div className={styles.worksCitedShelves}>
                      {[0, 1].map((shelfIndex) => {
                        const shelfBooks = worksCitedBooks.slice(shelfIndex * 4, shelfIndex * 4 + 4);

                        return (
                          <div className={styles.worksCitedShelf} key={shelfIndex}>
                            <Image
                              className={styles.worksCitedShelfImage}
                              src="/images/other/Shelf2.png"
                              alt=""
                              width={2048}
                              height={2048}
                              sizes="(max-width: 700px) 90vw, 36rem"
                            />
                            {shelfBooks.map((book, index) => (
                              <Image
                                className={styles.worksCitedBookArtwork}
                                src={book.image}
                                alt=""
                                width={2048}
                                height={2048}
                                sizes="(max-width: 700px) 90vw, 36rem"
                                key={`art-${book.id}`}
                                style={{ '--book-index': index }}
                              />
                            ))}
                            {shelfBooks.map((book, index) => (
                              <button
                                className={styles.worksCitedBookButton}
                                type="button"
                                key={book.id}
                                style={{ '--book-top': `${66.25 - (index * 15.625)}%`, '--book-index': index }}
                                aria-label={`Show citation information for book ${book.id}`}
                                aria-expanded={selectedWorksCitedBook === book.id}
                                aria-controls="works-cited-book-details"
                                onClick={() => {
                                  setShowWorksCitedHints(false);
                                  setSelectedWorksCitedBook(book.id);
                                }}
                              />
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {selectedWorksCitedBook && (
                    <div className={styles.worksCitedDetails} id="works-cited-book-details" aria-live="polite">
                      <h4>Book {selectedWorksCitedBook}</h4>
                      {(() => {
                        const citation = worksCitedBooks.find((book) => book.id === selectedWorksCitedBook);
                        return (
                          <p>
                            {citation.author} ({citation.year}). <em>{citation.title}</em>{citation.format ? ` ${citation.format}` : '.'}{citation.site ? ` ${citation.site}` : ''}{' '}
                            <a href={citation.url} target="_blank" rel="noreferrer">{citation.url}</a>
                          </p>
                        );
                      })()}
                    </div>
                  )}
                </section>
              </div>
              <div className={styles.projectStepItem} id="project-step-03">
                <h2 className={styles.projectNumberTitle}>03</h2>
                <h2 className={styles.researchInsightsTitle}>Research Consideration &amp; Planning</h2>
                <article className={styles.projectDetail}>
                  <p> After researching a few visuals of bus stop designs, some with a techologically functional focus 
                    along with others with a cultural art focus, a lot of inspiration could be drawn from both categories.
                    The functional designs leaned upon innovation, specifically by adding features like a screen with live updates 
                    or solar panels that generating heating and electricity for the stop. Most of these took a modern simplistic
                    approach that focused on the advanced additions. 
                    <br /><br />
                    Contrastly, the artistic design honed in on adding vibrancy through functional installations. Most notably, the Japanese
                    fruit bus stop installations have gain worldwide attention for their uniqueness and ecclectic pressence. They
                    have become landmarks, attracting tourists from far and wide.
                    <br /><br />
                    Successfully blending technical innovation with artisitic expression may be a mighty challenge, however, the
                    lasting, positive impact upon the communtiy leaves the city for the better.  </p>
                </article>
                <section className={styles.busStopDesignComparison} aria-label="Bus stop design inspiration">
                  {busStopDesignGroups.map((group) => (
                    <section className={styles.busStopDesignGroup} key={group.id} aria-labelledby={`${group.id}-title`}>
                      <h3 className={styles.busStopDesignTitle} id={`${group.id}-title`}>{group.title}</h3>
                      <div className={styles.busStopDesignPhotos}>
                        {group.photos.map((photo) => (
                          <figure className={styles.busStopDesignPhoto} key={photo.src}>
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              width={1200}
                              height={900}
                              sizes="(max-width: 700px) 90vw, 36vw"
                            />
                          </figure>
                        ))}
                      </div>
                    </section>
                    
                  ))}
                  
                </section>
              </div>
              <section className={styles.busStopNeedsLayout} aria-label="Bus stop interface planning">
                <article className={styles.projectDetail}>
                  <p>
                    One aspect of redesigning the bus stop that seemed to easily solve a lot of issues riders
                    were experiencing was the lack of information readily available. In this bus stop redesign, 
                    a touchscreen user interface seemed to be the most natural and effective solution to solving any issues with 
                    displaying relevent bus information.
                    <br /><br />
                    After brainstorming a bit, a list of important functions was created allowing for
                    a basic design to brew into fruition.
                  </p>
                </article>
               <figure className={styles.busStopNeedsFigure}>
                  <Image
                    className={styles.busStopNeedsImage}
                    src="/images/project-sec/proj%203/busstops/busstop-needs.png"
                    alt="Handwritten planning notes listing bus rider touchscreen needs and additional community resources"
                    width={1154}
                    height={1308}
                    sizes="(max-width: 700px) 90vw, 23rem"
                  />
                </figure>
              </section>
              <div className={styles.projectStepItem} id="project-step-04">
                <h2 className={styles.projectNumberTitle}>04</h2>
                <h2 className={styles.researchFindingIntro}>Design Breakdown</h2>
                <h2 className={styles.researchInsightsTitle}>Bus Stop Screen User Interface</h2>
            
              <section className={styles.busStopDesignProgression} aria-label="Bus stop wireframe and interface design">
                <figure className={styles.busStopDesignProgressionImage}>
                  <Image
                    src="/images/project-sec/proj%203/busstops/bs-wireframe.png"
                    alt="Hand-drawn wireframe for the bus stop touchscreen interface"
                    width={2000}
                    height={2000}
                    sizes="(max-width: 10rem) 150vw, 100rem"
                  />
                </figure>
                <span className={styles.busStopDesignProgressionDivider} aria-hidden="true">⋆˚𓏲ּ｡➹</span>
                <figure className={styles.busStopDesignProgressionImage}>
                  <Image
                    src="/images/project-sec/proj%203/busstops/figma/bs-figma.png"
                    alt="Figma mockup of the bus stop touchscreen interface"
                    width={2000}
                    height={2000}
                    sizes="(max-width: 10rem) 150vw, 100rem"
                  />
                </figure>
                </section>
                <article className={styles.projectDetail}>
                  <p>Using the ideas laid out in the brainstorming session, a wireframe for an electronic
                    user interface was developed. The goal of the design is to create a screen that acknowledges
                    user's needs in one simple, but efficient layout. With the user personas in mind, the created wireframe
                    aims to be a user-friendly addition to a traditional bus stop, where technology would benefit the community.
                  </p>
                </article>
                <section>
                  <ExpandableDesignImage
                    src="/images/project-sec/proj%203/busstops/figma/color-palette.png"
                    alt="Color palette for the bus stop touchscreen interface"
                    controls="design-detail-color"
                    expanded={Boolean(expandedDesignDetails.color)}
                    onClick={() => toggleDesignDetails('color')}
                    label="Show or hide the color palette explanation"
                  />
                </section>
                <article className={styles.projectDetail} id="design-detail-color" hidden={!expandedDesignDetails.color}>
                  <h2>Choosing Color</h2>
                  <p>The color palette was an easy choice. In hopes of these designs being implemented in the future, it
                    would be important to work with the city metro. Naturally, using the color scheme of organization was the obvious
                    choice for a cohesive design overall.</p>
                </article>
              
                <section className={styles.busStopDesignProgression} aria-label="Bus stop interface design">
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma-0.png"
                  alt="Figma mockup of the bus stop touchscreen interface"
                  controls="design-detail-device design-detail-interface"
                  expanded={Boolean(expandedDesignDetails.interfaceFeatures)}
                  onClick={() => toggleDesignDetails('interfaceFeatures')}
                  label="Show or hide the interface feature explanations"
                />
                <span className={styles.busStopDesignProgressionDivider} aria-hidden="true">⋆˚𓏲ּ｡➹</span>
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma.png"
                  alt="Figma mockup of the bus stop touchscreen interface"
                  controls="design-detail-device design-detail-interface"
                  expanded={Boolean(expandedDesignDetails.interfaceFeatures)}
                  onClick={() => toggleDesignDetails('interfaceFeatures')}
                  label="Show or hide the interface feature explanations"
                />
                </section>
                <div className={styles.busStopFeatureExplanations}>
                <article className={styles.projectDetail} id="design-detail-device" hidden={!expandedDesignDetails.interfaceFeatures}>
                  <h2>Device Layout Feature Explanation</h2>
                  <p>
                    The design begins with an outer interface with three main components: An 'SOS' help button, 
                    a money slot, an a ticket printer. Within the field research, it was found that bus tickets are currently 
                    bought on the bus. This poses a challenge due to the nature of the system for buying. Sometimes, buses get 
                    held up due to ticket purchasing causing delays. Newer bus goers mentioned the unclarity of where to purchase when initially
                    utilizing the bus system. The ticket printer feature aims to alleviate this issue, so that bus goers can
                    easily purchase tickets at the physical bus stops. 
                    <br /><br />
                    The "Change Exchanger" money slot aims to work similarly to that of an ATM machine. Another challenge discovered in the field research was that
                    users faced difficulties since the bus only accepts exact change. Currently, the Cincinnati Metro costs $2.20 per bus ride. Many frequent riders
                    tended to use cash instead of a digital bus pass. This caused some people to lose money if they did not have exact change. Moreover, this resulted
                    in more bus delays due to the nature of counting change. In order to improve upon this challenge, the money slot was added so that bus riders could
                    more easily obtain exact change per bus ride at any stop, reducing any type of unnecessary money loss or bus delays.
                    <br /><br />
                    Finally, an 'SOS' button was added in order to provide immediate access during any emergency. This allows for a wholistic solution
                    to a multiple of problems extending into other areas of the city outside of public transport.
                    </p>
                </article>
                <article className={styles.projectDetail} id="design-detail-interface" hidden={!expandedDesignDetails.interfaceFeatures}>
                  <h2>User Interface Layout Feature Explanation</h2>
                  <p>
                    The actual interface aims to be as user friendly as possible, especially considering the diversity of 
                    riders with different technology proficiency levels. With the screen the overall layout consists of 
                    a map. Within it, a side menu with incoming buses along with the duration of their arrival. Each bus
                    is color-coded differently to make it visually apparent to differentiate between them. Additionally,
                    each incoming bus is displayed upon the map, providing a real-time visual of the bus numbers and their
                    respection locations. This furthers the overall idea of making bus information readily available
                    without much effort for the user.
                    <br /><br />
                    Along with the largely displayed bus information, there are four icons in the bottom left-hand corner: A home menu icon, 
                    a money exchanger icon, a ticket print icon, and a search icon. In spirit of making information apparent, yet simple,
                    the icons are place strategically to ensure less confusion. These icons functionally will be explained further, and it is
                    important to highlight that these icons to not take away from any of the bus information at any time.
                    </p>
                </article>
                <section className={styles.busStopDesignProgression} aria-label="Bus stop home and incoming buses screens">
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma2.png"
                  alt="Bus stop interface showing incoming buses and their arrival times"
                  controls="design-detail-bus-card design-detail-home-icon"
                  expanded={Boolean(expandedDesignDetails.busScreens)}
                  onClick={() => toggleDesignDetails('busScreens')}
                  label="Show or hide the bus card and home screen explanations"
                />
                <span className={styles.busStopDesignProgressionDivider} aria-hidden="true">⋆˚𓏲ּ｡➹</span>
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma3.png"
                  alt="Bus stop interface home screen with a resource guide over the city map"
                  controls="design-detail-bus-card design-detail-home-icon"
                  expanded={Boolean(expandedDesignDetails.busScreens)}
                  onClick={() => toggleDesignDetails('busScreens')}
                  label="Show or hide the bus card and home screen explanations"
                />
                </section>
                <article className={styles.projectDetail} id="design-detail-bus-card" hidden={!expandedDesignDetails.busScreens}>
                  <h2>Clicking on a Bus Card</h2>
                  <p>After the user taps on a bus on a bus card, this screen displays. If you look on the upper right
                    hand corner, the bus cards changed from displaying the different bus numbers to the same bus number 
                    with each future incoming bus with its respective arrival time.  
                  </p>
                </article>
                <article className={styles.projectDetail} id="design-detail-home-icon" hidden={!expandedDesignDetails.busScreens}>
                  <h2>Clicking on the Home Icon</h2>
                  <p></p>
                </article>
                 <section className={styles.busStopDesignProgression} aria-label="Bus stop home and incoming buses screens">
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma4.png"
                  alt="Bus stop interface showing incoming buses and their arrival times"
                  controls="design-detail-money design-detail-money-flow"
                  expanded={Boolean(expandedDesignDetails.money)}
                  onClick={() => toggleDesignDetails('money')}
                  label="Show or hide the money exchange explanation"
                />
                <span className={styles.busStopDesignProgressionDivider} aria-hidden="true"></span>
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma4-1.png"
                  alt="Bus stop interface home screen with a resource guide over the city map"
                  controls="design-detail-money design-detail-money-flow"
                  expanded={Boolean(expandedDesignDetails.money)}
                  onClick={() => toggleDesignDetails('money')}
                  label="Show or hide the money exchange explanation"
                />
                </section>
                <article className={styles.projectDetail} id="design-detail-money" hidden={!expandedDesignDetails.money}>
                  <h2>Money Exchange Icon</h2>
                  <p></p>
                </article>
                <article className={styles.projectDetail} id="design-detail-money-flow" hidden={!expandedDesignDetails.money}>
                  <h2>Pop Up Flow</h2>
                  <p></p>
                </article>
                <section className={styles.busStopDesignProgression} aria-label="Bus stop home and incoming buses screens">
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma5.png"
                  alt="Bus stop interface showing incoming buses and their arrival times"
                  controls="design-detail-ticket design-detail-ticket-flow"
                  expanded={Boolean(expandedDesignDetails.ticket)}
                  onClick={() => toggleDesignDetails('ticket')}
                  label="Show or hide the ticket printer explanation"
                />
                <span className={styles.busStopDesignProgressionDivider} aria-hidden="true"></span>
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma5-1.png"
                  alt="Bus stop interface home screen with a resource guide over the city map"
                  controls="design-detail-ticket design-detail-ticket-flow"
                  expanded={Boolean(expandedDesignDetails.ticket)}
                  onClick={() => toggleDesignDetails('ticket')}
                  label="Show or hide the ticket printer explanation"
                />
                </section>
                <article className={styles.projectDetail} id="design-detail-ticket" hidden={!expandedDesignDetails.ticket}>
                  <h2>Ticket Printer Icon</h2>
                  <p></p>
                </article>
                <article className={styles.projectDetail} id="design-detail-ticket-flow" hidden={!expandedDesignDetails.ticket}>
                  <h2>Pop Up Flow</h2>
                  <p></p>
                </article>
                <section className={styles.busStopDesignProgression} aria-label="Bus stop home and incoming buses screens">
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma6.png"
                  alt="Bus stop interface showing incoming buses and their arrival times"
                  controls="design-detail-search design-detail-search-flow"
                  expanded={Boolean(expandedDesignDetails.search)}
                  onClick={() => toggleDesignDetails('search')}
                  label="Show or hide the search explanation"
                />
                <span className={styles.busStopDesignProgressionDivider} aria-hidden="true"></span>
                <ExpandableDesignImage
                  src="/images/project-sec/proj%203/busstops/figma/bs-figma6-1.png"
                  alt="Bus stop interface home screen with a resource guide over the city map"
                  controls="design-detail-search design-detail-search-flow"
                  expanded={Boolean(expandedDesignDetails.search)}
                  onClick={() => toggleDesignDetails('search')}
                  label="Show or hide the search explanation"
                />
                </section>
                <article className={styles.projectDetail} id="design-detail-search" hidden={!expandedDesignDetails.search}>
                  <h2>Search Icon</h2>
                  <p></p>
                </article>
                <article className={styles.projectDetail} id="design-detail-search-flow" hidden={!expandedDesignDetails.search}>
                  <h2>Pop Up Flow</h2>
                  <p></p>
                </article>
                </div>
                <section>
                  <ExpandableDesignImage
                    src="/images/project-sec/proj%203/busstops/figma/bs-figma7.png"
                    alt="Bus stop interface showing the SOS emergency control"
                    controls="design-detail-sos"
                    expanded={Boolean(expandedDesignDetails.sos)}
                    onClick={() => toggleDesignDetails('sos')}
                    label="Show or hide the SOS button explanation"
                  />
                </section>
                <article className={styles.projectDetail} id="design-detail-sos" hidden={!expandedDesignDetails.sos}>
                  <h2>Pressing on SOS Button</h2>
                  <p>
                     </p>
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