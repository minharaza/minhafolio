'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './about.module.css';

const collageItems = [
  { src: '/images/About_Me_Airport.png', alt: 'Travel keepsakes', className: 'airport' },
  { src: '/images/About_Me_Camera.png', alt: 'My camera and favorite accessories', className: 'camera' },
  { src: '/images/About_Me_Notebook_.png', alt: 'My decorated notebook', className: 'notebook' },
  { src: '/images/About_Me_Purse.png', alt: 'My favorite purse', className: 'purse' },
  { src: '/images/About_Me_Shoes.png', alt: 'My red shoes', className: 'shoes' },
  { src: '/images/about-me-head.png', alt: 'My portrait', className: 'head' },
  { src: '/images/about-me-shirt.png', alt: 'A favorite band shirt', className: 'shirt' },
  { src: '/images/About-me-skirt.png', alt: 'A favorite skirt', className: 'skirt' },
];

const About = () => {
  const [activeGallery, setActiveGallery] = useState(null);
  const isGalleryOpen = activeGallery !== null;

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsGalleryOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen]);

  return (
    <main className={styles.aboutPage}>
      <div className={styles.scene} aria-label="A collage of things that represent me, arranged on a pink bed">
        <Image
          src="/images/top-of-bed.png"
          alt="A pink bed"
          fill
          priority
          sizes="(max-width: 700px) 92vw, 75vh"
          className={styles.bed}
        />
        {collageItems.map((item) => item.className === 'airport' || item.className === 'camera' ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles[item.className]} ${styles.galleryTrigger}`}
            onClick={() => setActiveGallery(item.className === 'airport' ? 'travel' : 'photography')}
            aria-label={`Open ${item.className === 'airport' ? 'travel' : 'photography'} photo gallery`}
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} />
          </button>
        ) : (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={2048}
            height={2048}
            className={`${styles.item} ${styles[item.className]}`}
          />
        ))}
      </div>
      {isGalleryOpen && (
        <div className={styles.galleryBackdrop} onClick={() => setActiveGallery(null)}>
          <section
            className={styles.galleryDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.galleryClose}
              onClick={() => setActiveGallery(null)}
              aria-label="Close photo gallery"
            >
              &times;
            </button>
            <h2 id="gallery-title">{activeGallery === 'travel' ? 'Travel Memories' : 'Photography'}</h2>
            <p className={styles.galleryEmpty}>
              {activeGallery === 'travel' ? 'No travel photos added yet.' : 'No photography added yet.'}
            </p>
          </section>
        </div>
      )}
    </main>
  );
};

export default About;
