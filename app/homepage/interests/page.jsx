'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './interests.module.css';

export default function InterestsPage() {
  const [interest, setInterest] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchInterest() {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) throw new Error('Unable to load interests.');

        const content = await response.json();
        const interestsTile = content.home?.tiles?.find(
          (tile) => tile.tilename.toLowerCase() === 'interests',
        );

        if (!interestsTile) throw new Error('Interests content was not found.');
        setInterest(interestsTile);
      } catch (fetchError) {
        setError(fetchError.message || 'Unable to load interests.');
      }
    }

    fetchInterest();
  }, []);

  return (
    <main className={styles.page}>
      <Link className={styles.backButton} href="/homepage?skipIntro=1" aria-label="Back to the house">
        &larr;
      </Link>
      <section className={styles.content}>
        <p className={styles.eyebrow}>A few things I enjoy</p>
        <h1>Interests</h1>
        {error ? (
          <p className={styles.message} role="alert">{error}</p>
        ) : interest ? (
          <p className={styles.description}>{interest.text}</p>
        ) : (
          <p className={styles.message} role="status">Loading interests...</p>
        )}
        <Link className={styles.projectsLink} href="/homepage/projects">Explore my projects</Link>
      </section>
    </main>
  );
}