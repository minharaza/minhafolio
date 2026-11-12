import Link from 'next/link';
import styles from '../projects.module.css';

export default function ProjectTwoPage() {
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
          <h1>charMED-ID: <br />A Medical ID Keychain</h1>
        </header>
        <section className={styles.projectSection} aria-labelledby="project-section-title-01">
          <h2 id="project-section-01" className={styles.projectNumberTitle}>01</h2>
          <h3 id="project-section-title-01" className={styles.swotHeading}>Overview</h3>
        </section>
        <section className={styles.projectSection} aria-labelledby="project-section-title-02">
          <h2 id="project-section-02" className={styles.projectNumberTitle}>02</h2>
          <h3 id="project-section-title-02" className={styles.swotHeading}>Research &amp; Analysis</h3>
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