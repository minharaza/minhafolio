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
    image: '/images/other/Logo.png',
    className: 'opportunities',
    details: 'As a member of the vibrant community, they are looking to find office materials to help mail bills and find materials for work. They are looking for ways to gain items they need without the large price tag.',
  },
];

const comparisonPairs = [
  { id: '/images/project-sec/ID-01.png', idWidth: 1334, idHeight: 876, fd: '/images/project-sec/FD-01.png', fdWidth: 1906, fdHeight: 1158 },
  { id: '/images/project-sec/ID-02.png', idWidth: 1318, idHeight: 390, fd: '/images/project-sec/FD-02.png', fdWidth: 1782, fdHeight: 710 },
  { id: '/images/project-sec/ID-03.png', idWidth: 1338, idHeight: 512, fd: '/images/project-sec/FD-03.png', fdWidth: 1778, fdHeight: 682 },
  { id: '/images/project-sec/ID-04.png', idWidth: 1332, idHeight: 792, fd: '/images/project-sec/FD-04.png', fdWidth: 1780, fdHeight: 1058 },
];

const finalDesignImages = [
  { src: '/images/project-sec/complete-original.png', alt: 'Complete original Indigo Hippo website', width: 856, height: 1634 },
  { src: '/images/project-sec/final-01.png', alt: 'Final website design, screen 1', width: 862, height: 1646 },
  { src: '/images/project-sec/final-02.png', alt: 'Final website design, screen 2', width: 822, height: 1558 },
  { src: '/images/project-sec/final-03.png', alt: 'Final website design, screen 3', width: 826, height: 1556 },
  { src: '/images/project-sec/final-04.png', alt: 'Final website design, screen 4', width: 818, height: 1552 },
];

export default function ProjectOnePage() {
  const [expandedSwot, setExpandedSwot] = useState(null);
  const [expandedPersona, setExpandedPersona] = useState(null);
  const [showSwotHints, setShowSwotHints] = useState(true);
  const [showPersonaHints, setShowPersonaHints] = useState(true);
  const [showFeatureHint, setShowFeatureHint] = useState(true);
  const [showProgressionHint, setShowProgressionHint] = useState(true);
  const [activeProgressionImage, setActiveProgressionImage] = useState(0);
  const [selectedFinalImage, setSelectedFinalImage] = useState(null);

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
                    <img src="/images/other/Click_Me.png" alt="Click me" />
                  </button>
                  <button
                    className={`${styles.swotHint} ${styles.swotHintRight}`}
                    type="button"
                    onClick={() => setShowSwotHints(false)}
                    aria-label="Dismiss click me hint"
                  >
                    <img src="/images/other/Click_Me_Left_.png" alt="Click me" />
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
                      <img src="/images/other/Click_Me.png" alt="Click me" />
                    </button>
                    <button
                      className={`${styles.swotHint} ${styles.swotHintRight}`}
                      type="button"
                      onClick={() => setShowPersonaHints(false)}
                      aria-label="Dismiss right user persona hint"
                    >
                      <img src="/images/other/Click_Me_Left_.png" alt="Click me" />
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
          <article className={styles.projectDetail}>
            <p>
              By taking what was learneed from the research analysis, I was then able to approach the design process with
              a better understanding of the needs. Learning from the websites current strengths and pain points allowed
              me to take what was working and reform what was not. For this showcase, I felt the most strongly about improving
              upon the landing home page, where users first point of contact occurs. I found this to be one of the most critical
              points of the application, meaning that it's design should be intentional and impactful in a positive way.
              <br />  <br />
              I started my process with reflecting upon the research against the front landing page, and jumping into the old school method of sketching!
              This simple redesign wireframe was extremely layout focused. The white space of the original design bugged me. 
              The question kept arising, "How can we ultize layout to display conentent in a better way?" 
              <br />  <br />
              Below is the original landing page design, followed by a simple sketch of content layout reimagined. 


              </p>
          </article>
          <div className={styles.designProcessGallery}>
            <div className={styles.designProcessImageFrame}>
              <Image
                className={styles.designProcessImage}
                src="/images/project-sec/og-layout.png"
                alt="Original Indigo Hippo landing page layout"
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
              />
            </div>
            <span className={styles.designProcessArrow} role="img" aria-label="leads to redesigned sketches">
              ⋆˚𓏲ּ｡➹
            </span>
            <div className={styles.designProcessSketches}>
              <div className={styles.designProcessImageFrame}>
              <Image
                className={styles.designProcessImage}
                src="/images/project-sec/randa2-converted.png"
                alt="Design process board showing the second stage of the Indigo Hippo website redesign"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              </div>
              <div className={styles.designProcessImageFrame}>
              <Image
                className={styles.designProcessImage}
                src="/images/project-sec/randa3-converted.png"
                alt="Design process board showing the third stage of the Indigo Hippo website redesign"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              </div>
            </div>
          </div>
          <article className={styles.projectDetail}>
            <p>
              Using figma, I was then able to bring my reimagined layout to the screen. Additionally, I took the opportunity
              to add content that was not originally on this page. The intention behind this came from certain important 
              information being hidden behind too many drop down menu navigations, which could be easily missed. I found 
              the new arrangment would make important information more accessbile while being highlighted on the first landing page.
              </p>
          </article>
          <Image
            className={styles.designProcessStepImage}
            src="/images/project-sec/step2.png"
            alt="Step 2 digital layout concept alongside the original Indigo Hippo landing page"
            width={1382}
            height={1220}
            sizes="(max-width: 700px) 100vw, 60rem"
          />
          <div className={styles.designProcessScrapbookRow}>
            <Image
              className={styles.designProcessScrapbookImage}
              src="/images/project-sec/scarpbooking-layout.png"
              alt="Scrapbook-inspired Indigo Hippo landing page layout concept"
              width={1336}
              height={844}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <article className={styles.projectDetail}>
              <p>
                After establishing a basic wireframe of a more impactful layout, I researched ways to emphasize Indigo Hippo's playful, unique character in a digital format. As a customer, I reflected on the materials that have supported my school projects and art escapades. A digital scrapbook felt like the right way to capture the brand's identity, so I researched examples and explored how that visual direction could shape the site.
                <br />  <br />
                I also explored typography to complement the scrappy, playful design, balancing character with readability.
              </p>
            </article>
          </div>
          <div className={styles.designProcessVisuals}>
            <Image
              className={styles.designProcessVisualImage}
              src="/images/project-sec/Brand-identiy.png"
              alt="Three visual identity and website design directions"
              width={1808}
              height={982}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <Image
              className={styles.designProcessVisualImage}
              src="/images/project-sec/typography.png"
              alt="Typography explorations for the Indigo Hippo brand"
              width={710}
              height={344}
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </section>
        <section className={styles.projectSection} aria-labelledby="final-design-heading">
          <h1 className={styles.projectNumberTitle}>04</h1>
          <h2 className={styles.swotHeading} id="final-design-heading">Final Design and Analysis</h2>
          <div className={styles.designProcessScrapbookRow}>
            <article className={styles.projectDetail}>
              <p>
                And here is the final mockup that truly encapsulates the livley nature of Indigo Hippo! 
                Not only does this design tackle the issue of a lack of brand identity, but it also
                acknowledges the overuse of whitespace. By reimagining the use of space, the design was able to be way
                more impactful and present more relevent information to users right away with the first impression of
                the landing page. This reimagined approach creates a better engaging atmosphere that prioritizes ever
                user need.

              </p>
            </article>
            <div className={styles.finalDesignFeature}>
              <button
                className={`${styles.finalDesignImageButton} ${styles.finalDesignFeatureButton}`}
                type="button"
                onClick={() => {
                  setShowFeatureHint(false);
                  setSelectedFinalImage({
                    src: '/images/project-sec/final-04.png',
                    alt: 'Final Indigo Hippo landing page with a scrapbook-style collage layout',
                  });
                }}
                aria-label="Enlarge final landing page design"
              >
                <Image
                  className={styles.finalDesignFeatureImage}
                  src="/images/project-sec/final-04.png"
                  alt="Final Indigo Hippo landing page with a scrapbook-style collage layout"
                  width={818}
                  height={1552}
                  sizes="(max-width: 700px) 100vw, 22rem"
                />
              </button>
              {showFeatureHint && (
                <button
                  className={`${styles.swotHint} ${styles.finalDesignFeatureHint}`}
                  type="button"
                  onClick={() => setShowFeatureHint(false)}
                  aria-label="Dismiss click me hint"
                >
                  <img src="/images/other/Click_Me_Left_.png" alt="Click me" />
                </button>
              )}
            </div>
          </div>
          <h2 className={styles.swotHeading} id="personas-heading">Design Progression</h2>
          <div className={styles.finalDesignLayout}>
            <div className={styles.finalDesignGallery} aria-label="Design progression carousel">
              <div className={styles.finalDesignProgressionSide}>
                {showProgressionHint && (
                  <button
                    className={`${styles.swotHint} ${styles.finalDesignProgressionHint}`}
                    type="button"
                    onClick={() => setShowProgressionHint(false)}
                    aria-label="Dismiss click me hint"
                  >
                    <img src="/images/other/Click_Me.png" alt="Click me" />
                  </button>
                )}
                <button
                  className={`${styles.finalDesignCarouselControl} ${styles.finalDesignPreviousControl}`}
                  type="button"
                  onClick={() => setActiveProgressionImage((activeProgressionImage - 1 + finalDesignImages.length) % finalDesignImages.length)}
                  aria-label="Show previous design"
                >
                  &#8592;
                </button>
              </div>
              {finalDesignImages.map((image, index) => (
                <button
                  className={styles.finalDesignImageButton}
                  type="button"
                  key={image.src}
                  onClick={() => setSelectedFinalImage(image)}
                  aria-label={`Enlarge ${image.alt}`}
                  hidden={index !== activeProgressionImage}
                >
                  <Image
                    className={styles.finalDesignImage}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 700px) 75vw, 30rem"
                  />
                </button>
              ))}
              <button
                className={`${styles.finalDesignCarouselControl} ${styles.finalDesignNextControl}`}
                type="button"
                onClick={() => setActiveProgressionImage((activeProgressionImage + 1) % finalDesignImages.length)}
                aria-label="Show next design"
              >
                &#8594;
              </button>
              <div className={styles.finalDesignCarouselPagination} aria-label="Choose a design">
                {finalDesignImages.map((image, index) => (
                  <button
                    className={styles.finalDesignCarouselDot}
                    type="button"
                    key={image.src}
                    onClick={() => setActiveProgressionImage(index)}
                    aria-label={`Show design ${index + 1} of ${finalDesignImages.length}`}
                    aria-current={index === activeProgressionImage ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
          <article className={styles.projectDetail}>
              <p>
                When dissecting the final design, we can easily see how intentional choices resolved many of the pain
                points involved in the user experience.
                <br /> <br />
                Starting with the <strong>introductory</strong> section, intially the ineffective typography was very apparent. The readability
                was below ideal, leaving the user most likely not knowing where to navigate from here. In spirit of reusuing 
                materials, the design leans heavility into the scrapbook visual. The new approach uses the original image, but 
                in an exciting visual, along with enlarging the typography for better impact and readability. The navigation
                bar is not lost upon the user, and the overall mission of the non-profit business is clearly communicated
                as a "shout" on first glace.
                <br /> <br />
                Moving onto the <strong>"How Indigo Hippo Works"</strong> section, there is excessive whitespace and the 
                prevelant theme of lacking readability continues. Seeing as this is a quite important section of information,
                one of the first section relaying text and calling to action, it was absolutely critical to reimagine the presenation
                of the information. By continuing the use of "materials," the design ultizes paper and fabric textures layered behind
                the text. The ripped paper edges add a continuous feel for the application as well. The white space feels more intentional,
                finding balance between overuse and effectiveness.
                <br /> <br />
                And additionally section was added that was not in the original design. Furthering the solution for
                excessive whitespace, this section was added to highlight important events within the organization. 
                When observing painpoints in my own user journey, this was something that came to my attention. It is required 
                to naviagate through the top bar in order to find out about the donation box. This causes many users to miss
                this vital information that would highly benefit the organization. The intetional decision to have a carousel 
                in the form of a "notebook," allows fundraising and other efforts to be displayed in the front page. This avoids
                any chances of users missing important updates.
                <br /> <br />
                Finally, the <strong>"Contact & Visit" section </strong>and the<strong> "Stay Connect & Sponser" section</strong> were
                converted into smaller sections, maximizing the use of space. The common problems of the original design
                persevered to the end. The redesign once again uses the concept of layering "materials" to display
                information, while keeping the original essence intact. This section especially leans into their mission
                of giving pieces and parts an new life. The display of information is amusing and enjoyable, without taking
                away from the necessary information or user experience.

              </p>
            </article>
          <div className={styles.comparisonList}>
            {comparisonPairs.map((pair, index) => (
              <div className={styles.comparisonRow} key={pair.id}>
                <Image
                  className={styles.comparisonImage}
                  src={pair.id}
                  alt={`Original website, section ${index + 1}`}
                  width={pair.idWidth}
                  height={pair.idHeight}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
                <span className={styles.comparisonArrow} aria-hidden="true">⋆˚𓏲ּ｡➹</span>
                <Image
                  className={styles.comparisonImage}
                  src={pair.fd}
                  alt={`Final design, section ${index + 1}`}
                  width={pair.fdWidth}
                  height={pair.fdHeight}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      </section>
      {selectedFinalImage && (
        <div className={styles.finalDesignModalBackdrop} onClick={() => setSelectedFinalImage(null)}>
          <div
            className={styles.finalDesignModal}
            role="dialog"
            aria-modal="true"
            aria-label={selectedFinalImage.alt}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.finalDesignModalClose}
              type="button"
              onClick={() => setSelectedFinalImage(null)}
              aria-label="Close enlarged image"
            >
              &times;
            </button>
            <div className={styles.finalDesignModalImageFrame}>
              <Image
                src={selectedFinalImage.src}
                alt={selectedFinalImage.alt}
                fill
                sizes="90vw"
                className={styles.finalDesignModalImage}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}