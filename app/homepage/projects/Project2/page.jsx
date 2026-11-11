import Link from 'next/link';
import styles from '../projects.module.css';

export default function ProjectTwoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <Link className={styles.backButton} href="/homepage/projects" aria-label="Back to projects">
        &larr;
      </Link>

      <section className={styles.content}>
        <header className={`${styles.header} ${styles.projectTwoHeader}`}>
          <p className={styles.eyebrow}>Project 2</p>
          <h1>Designing NFC Medical ID into Whimsical Keychains</h1>
        </header>
      </section>
    </main>
  );
}