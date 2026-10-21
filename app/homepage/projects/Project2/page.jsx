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
        <header className={styles.header}>
          <p className={styles.eyebrow}>Project showcase</p>
          <h1>Waffle Project</h1>
        </header>
      </section>
    </main>
  );
}