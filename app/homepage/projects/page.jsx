'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import styles from './projects.module.css';

export default function ProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [activeTechnology, setActiveTechnology] = useState('All');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) throw new Error('Failed to fetch project content');
        const data = await response.json();
        setProjects(data.projects?.projectList ?? []);
      } catch (fetchError) {
        setError(fetchError.message || 'Unable to load projects');
      }
    }

    fetchProjects();
  }, []);

  const technologies = useMemo(() => (
    ['All', ...new Set(projects.flatMap((project) => project.technologies ?? []))]
  ), [projects]);

  const filteredProjects = activeTechnology === 'All'
    ? projects
    : projects.filter((project) => project.technologies?.includes(activeTechnology));

  if (error) {
    return <main className={styles.page}><p className={styles.error}>{error}</p></main>;
  }

  return (
    <main className={styles.page}>
      <div className={styles.backgroundTexture} aria-hidden="true" />
      <button
        type="button"
        className={styles.backButton}
        onClick={() => router.push('/homepage?skipIntro=1')}
        aria-label="Go back to homepage"
      >
        &larr;
      </button>

      <section className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>A small collection</p>
          <h1>Projects</h1>
          <p className={styles.intro}>Ideas I have shaped into useful, thoughtful experiences.</p>
        </header>

        <div className={styles.filters} aria-label="Filter projects by technology">
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              className={`${styles.filter} ${activeTechnology === technology ? styles.activeFilter : ''}`}
              onClick={() => setActiveTechnology(technology)}
              aria-pressed={activeTechnology === technology}
            >
              {technology}
            </button>
          ))}
        </div>

        {!projects.length ? (
          <p className={styles.loading}>Loading projects...</p>
        ) : (
          <div className={styles.grid}>
            {filteredProjects.map((project, index) => (
              <article className={styles.project} key={project.title}>
                <div className={styles.imageFrame}>
                  <Image
                    src={project.imagePath}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 92vw, (max-width: 1100px) 44vw, 31vw"
                    className={styles.projectImage}
                    priority={index < 2}
                  />
                  <span className={styles.projectNumber}>0{index + 1}</span>
                </div>
                <div className={styles.projectBody}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {(project.technologies ?? []).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  {project.links?.length > 0 && (
                    <div className={styles.links}>
                      {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                          {link.name} <span aria-hidden="true">&nearr;</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {projects.length > 0 && filteredProjects.length === 0 && (
          <p className={styles.empty}>No projects use {activeTechnology} yet.</p>
        )}
      </section>
    </main>
  );
}
