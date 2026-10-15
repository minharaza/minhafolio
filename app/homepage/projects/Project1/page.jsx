'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../projects.module.css';

const swotItems = [
  {
    letter: 'S',
    title: 'Strengths',
    className: 'strengths',
    description: 'A strong, impactful mission improving the community. Simple, plainly layed out information',
  },
  {
    letter: 'W',
    title: 'Weaknesses',
    className: 'weaknesses',
    description: 'Too much navigation, confusing catagorization of information. Not a good use of space. Too much blank space. Inaccessbile font styling choices.',
  },
  {
    letter: 'O',
    title: 'Opportunities',
    className: 'opportunities',
    description: 'Creating a better layout of information to allow users to connect with information better. Introduce the community to other opportunties involving the organization in a more efficient manner.',
  },
  {
    letter: 'T',
    title: 'Threats',
    className: 'threats',
    description: 'Due to the nature of information layout, user may disconnect with the online presense, detering them from their initial goal of donating or checking out the business.',
  },
];

const personas = [
  {
    id: 'budget-conscious-artist',
    name: 'The Budget-Conscious Artist',
    image: '/images/project-sec/Artist.png',
    className: 'strengths',
    details: 'As apart of the strong local art community, they are always looking for sustaiable ways to create.',
  },
  {
    id: 'parent',
    name: 'The Creative Parent',
    image: '/images/project-sec/Parent.png',
    className: 'weaknesses',
    details: 'A local parents wants to find budget friendly ways to help their children partake in creativity without breaking the bank.',
  },
  {
    id: 'student',
    name: 'The Student ',
    image: '/images/project-sec/Student.png',
    className: 'opportunities',
    details: 'As a student apart of the University of Cincinnatis DAAP program, they are always looking for materials for school and passion projects.',
  },
  {
    id: 'educator',
    name: 'The Educator',
    image: '/images/project-sec/Educator.png',
    className: 'threats',
    details: 'Oftentimes teachers are tasked with creating a classroom that is a safe place for learning, but are pushed to provide their own materials. They are always looking to get creative, since work is not providing extra resources.',
  },
  {
    id: 'community-member',
    name: 'The Community Member',
    image: '/images/Logo.png',
    className: 'opportunities',
    details: 'As a member of the vibrant community, they are looking to find office materials to help mail bills and find materials for work. They are looking for ways to gain items they need without the large price tag.',
  },
];

export default function ProjectOnePage() {
  const [expandedSwot, setExpandedSwot] = useState(null);
  const [expandedPersona, setExpandedPersona] = useState(null);
  const [showSwotHints, setShowSwotHints] = useState(true);
  const [showPersonaHints, setShowPersonaHints] = useState(true);

  return (
    <main className={styles.page}>
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <Link
        className={styles.backButton}
        href="/homepage/projects"
        aria-label="Back to projects"
      >
        &larr;
      </Link>

      <section className={styles.content}>
        <header className={`${styles.header} ${styles.projectHeader}`}>
          <p className={styles.eyebrow}>Project One</p>
          <h1 className={styles.projectTitle}>Case Study: Redesigning Indigo Hippo's Website</h1>
        </header>
        <h1 className={styles.projectNumberTitle}>01</h1>
        <h2 className={styles.swotHeading} id="overview-heading">Overview</h2>
        <section className={styles.projectDetails} aria-label="Project details">
          <article className={styles.projectDetail}>
            <h2>Project Overview</h2>
            <p>
              Indigo Hippo is a beloved non-profit located in the heart of Cincinnati's Over-the-Rhine neighborhood. 
              The organization is dedicated to connecting the community with accessible art materials through a unique
            "pay-what-you-can" system. <br/><br/>
              This project aims to reflect Indigo Hippo's mission within website design, offering a case study on 
              certain pain points that inhibit the overall experience when connecting with customers online.
              This case study explores how design can not only reflect the passion behind the business, but also
              improve customers experience when shopping and donating online. 
            </p>
          </article>
          <article className={styles.projectDetail}>
            <h2>Design Challenge</h2>
            <p>
            
            The challenge is to capture Indigo Hippo's essence and passion, and translate it into their online presence.
            Aiming to create an online identity that is reflective of the business, while also addressing current 
            design choices that hinder the user experience currently. The redesign seeks to create a personable experience that
            gives users an application that is intuitively usable, and provides clear information for the users.
            </p>
          </article>
          <section className={styles.projectSection} aria-labelledby="research-heading">
            <h1 className={styles.projectNumberTitle}>02</h1>
            <h2 className={styles.swotHeading} id="research-heading">Research & Analysis</h2>
             <article className={styles.projectDetail}>
            <h2>The Approach</h2>
            <p>
            The research provided a clear view of the current user experience: the positives, the pain points, and the 
            space for improvement and opportunity. Using the SWOT anaylsis framework, the aspects of the website were
            mapped out. This discovered information expanded upon the understading of where the application 
            could more strongly communicate to its users.<br></br><br></br>

            This approach could be expanded upon in the future if this included the business's participation in the process. 
            User and customer reviews and survey feedback would also be essential for the process. Due to the constaints of this personal
            study outside of the business direct involvement, certain processes were not available.
            
            </p>
          </article>
            <div className={styles.swotBoard}>
              {showSwotHints && (
                <>
                  <button
                    className={`${styles.swotHint} ${styles.swotHintLeft}`}
                    type="button"
                    onClick={() => setShowSwotHints(false)}
                    aria-label="Dismiss click me hint"
                  >
                    <img src="/images/Click_Me.png" alt="Click me" />
                  </button>
                  <button
                    className={`${styles.swotHint} ${styles.swotHintRight}`}
                    type="button"
                    onClick={() => setShowSwotHints(false)}
                    aria-label="Dismiss click me hint"
                  >
                    <img src="/images/Click_Me_Left_.png" alt="Click me" />
                  </button>
                </>
              )}
              <div className={styles.swotGrid}>
                {swotItems.map((item) => {
                  const isExpanded = expandedSwot === item.letter;
                  const descriptionId = `swot-description-${item.letter}`;

                  return (
                    <button
                      className={`${styles.swotTile} ${styles[item.className]}${isExpanded ? ` ${styles.swotTileExpanded}` : ''}`}
                      type="button"
                      key={item.letter}
                      aria-expanded={isExpanded}
                      aria-controls={descriptionId}
                      onClick={() => {
                        setShowSwotHints(false);
                        setExpandedSwot(isExpanded ? null : item.letter);
                      }}
                    >
                      <span className={styles.swotLetter} aria-hidden="true">{item.letter}</span>
                      <span className={styles.swotTitle}>{item.title}</span>
                      <span className={styles.swotDescription} id={descriptionId} hidden={!isExpanded}>
                        {item.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <section className={styles.researchInsights} aria-label="Research insights">
              <article className={styles.projectDetail}>
                <h2>Identifying Weaknesses</h2>
                <ul>
                  <li>⋆˚꩜｡ Ineffective use of layout and excessive amount of whitespace.</li>
                  <li>⋆˚꩜｡ Font styling and sizing inhibit readability.</li>
                  <li>⋆˚꩜｡ Information layout is confusing and takes more effort finding information.</li>
                  <li>⋆˚꩜｡ Brand identity gets lost within design choices with a sense of unintentionality.</li>
                </ul>
              </article>
              <article className={styles.projectDetail}>
                <h2>Key Takeaways</h2>
                <ul>
                  <li>⋆˚꩜｡ There is a clear lack of design intention when it comes to choosing which information to display most effectively.</li>
                  <li>⋆˚꩜｡ The organizations identity becomes slightly muddled along with the actual opportunities the business provides.</li>
                  <li>⋆˚꩜｡ There needs to be a balance between design and impactful content presentation.</li>
                </ul>
              </article>
            </section>
            <section className={styles.researchVisual} aria-label="Design concept">
              <div className={styles.researchVisualFrame}>
                <Image
                  className={styles.researchVisualImage}
                  src="/images/project-sec/randa1-converted.png"
                  alt="Visual design concept for the Indigo Hippo website redesign"
                  width={4032}
                  height={3024}
                />
              </div>
              <article className={styles.projectDetail}>
                <h2>UX Research & Interviews</h2>
                <p>
                  In spirit of proper UX research, I conducted a number of user interviews to gain some authentic user 
                  feedback about the website. I asked them questions based on their experiences in person versus their online
                  interactions with the non-profit. This insight was integral to moulding my design process and goals. It provided insight
                  into where users were struggling and what pain points arose during their time donating and shopping in an online setting.
                  <br></br><br></br>
                  Check out some interview questions to the left!
                  <br></br><br></br>
                  As a disclaimer, it is important to mention these participants were selected based on my familiarity with them, 
                  knowing they are customers at the organization. If I was given more resources, I would have surveyed a larger group
                  of customers, especially ones I did not know personally.
                  
                   </p>
              </article>
            </section>
            <div className={styles.personaSection}>
              <h2 className={styles.swotHeading} id="personas-heading">User Personas</h2>
              <div className={styles.personaBoard}>
                {showPersonaHints && (
                  <>
                    <button
                      className={`${styles.swotHint} ${styles.swotHintLeft}`}
                      type="button"
                      onClick={() => setShowPersonaHints(false)}
                      aria-label="Dismiss left user persona hint"
                    >
                      <img src="/images/Click_Me.png" alt="Click me" />
                    </button>
                    <button
                      className={`${styles.swotHint} ${styles.swotHintRight}`}
                      type="button"
                      onClick={() => setShowPersonaHints(false)}
                      aria-label="Dismiss right user persona hint"
                    >
                      <img src="/images/Click_Me_Left_.png" alt="Click me" />
                    </button>
                  </>
                )}
                <div className={styles.personaGrid} aria-labelledby="personas-heading">
                {personas.map((persona) => {
                  const isExpanded = expandedPersona === persona.id;
                  const detailsId = `persona-details-${persona.id}`;

                  return (
                    <button
                      className={`${styles.personaButton} ${styles[persona.className]}${isExpanded ? ` ${styles.personaButtonExpanded}` : ''}`}
                      type="button"
                      key={persona.id}
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={() => {
                        setShowPersonaHints(false);
                        setExpandedPersona(isExpanded ? null : persona.id);
                      }}
                    >
                      <Image
                        className={styles.personaLogo}
                        src={persona.image}
                        alt=""
                        width={120}
                        height={120}
                      />
                      <span className={styles.personaName}>{persona.name}</span>
                      <span className={styles.personaDetails} id={detailsId} hidden={!isExpanded}>
                        {persona.details}
                      </span>
                    </button>
                  );
                })}
                </div>
              </div>
            </div>
        </section>
        <section className={styles.projectSection} aria-labelledby="design-process-heading">
          <h1 className={styles.projectNumberTitle}>03</h1>
          <h2 className={styles.swotHeading} id="design-process-heading">Design Process</h2>
        </section>
      </section>
      </section>
    </main>
  );
}