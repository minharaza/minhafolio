'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import styles from './about.module.css';

const collageItems = [
  { src: '/images/about-me/About_Me_Airport.png', alt: 'Travel keepsakes', className: 'airport' },
  { src: '/images/about-me/About_Me_Camera.png', alt: 'My camera and favorite accessories', className: 'camera' },
  { src: '/images/about-me/About_Me_Notebook_.png', alt: 'My decorated notebook', className: 'notebook' },
  { src: '/images/about-me/About_Me_Purse.png', alternateSrc: '/images/about-me/About_Me_Purse_2.png', alt: 'My favorite purse', className: 'purse' },
  { src: '/images/about-me/About_Me_Shoes.png', alternateSrc: '/images/about-me/About_Me_Shoe_2.png', alt: 'My red shoes', className: 'shoes' },
  { src: '/images/about-me/about-me-head.png', alt: 'My portrait', className: 'head' },
  { src: '/images/about-me/about-me-shirt.png', alternateSrc: '/images/about-me/About_Me_Shirt_2.png', alt: 'A favorite band shirt', className: 'shirt' },
  { src: '/images/about-me/About-me-skirt.png', alternateSrc: '/images/about-me/About_Me_Skirt2.png', alt: 'A favorite skirt', className: 'skirt' },
  { src: '/images/other/Tennis_Racquet.png', alt: 'A pink tennis racquet', className: 'tennisRacquet' },
  { src: '/images/other/Tennis_Ball.png', alt: 'A pink tennis ball', className: 'tennisBall' },
];

const collageImageSizes = '(max-width: 700px) 46vw, 37vh';

const btsImages = [
  { src: '/images/bts/bts-1.gif', alt: 'BTS members together, image 1' },
  { src: '/images/bts/bts-2.gif', alt: 'BTS members together, image 2' },
  { src: '/images/bts/bts-3.gif', alt: 'BTS members together, image 3' },
];

const photographyPhotos = [
  '63B0F48E-D188-48CC-889C-3B621F7B81D2.JPG',
  'DA05D628-15CE-4A9D-A72D-040A6C2FA801.JPG',
  'P1010083 2.JPG',
  'P1010083.JPG',
  'P1010103.JPG',
  'P1010238.JPG',
  'P1010309.JPG',
  'P1010458.JPG',
  'P1010495.JPG',
  'P1010505.JPG',
  'P1010517.JPG',
  'P1010518.JPG',
  'P1010545.JPG',
  'P1010603.JPG',
  'P1010648.JPG',
  'P1010650.JPG',
  'P1010658.JPG',
  'P1010681.JPG',
  'P1241334.JPG',
  'P6120892.JPG',
  'P6140920.JPG',
  'P6160995.JPG',
  'P6161007.JPG',
  'P6161009.JPG',
  'P6161018.JPG',
  'P6171082.JPG',
  'P6181121.JPG',
  'P6191157.JPG',
  'P6191178.JPG',
  'P6191187.JPG',
  'P6191194.JPG',
  'P6191198.JPG',
  'P8201241.JPG',
  'P8201249.JPG',
  'P8201257.JPG',
  'P8201265.JPG',
  'P8221271.JPG',
  'P8251278.JPG',
  'P9141204.JPG',
  'P9141228.JPG',
  'P9141230.JPG',
  'PA041207.JPG',
  'PA041211.JPG',
];

const travelPhotos = [
  'IMG_0015.JPG',
  'IMG_0159.jpeg',
  'IMG_0304.jpeg',
  'IMG_0312.JPG',
  'IMG_0482.JPG',
  'IMG_0901.jpeg',
  'IMG_0997.jpeg',
  'IMG_1009.jpeg',
  'IMG_1036.jpeg',
  'IMG_1095.JPG',
  'IMG_1100.jpeg',
  'IMG_1132.jpeg',
  'IMG_2434.jpeg',
  'IMG_2496.jpeg',
  'IMG_2512.jpeg',
  'IMG_2531.jpeg',
  'IMG_2548.jpeg',
  'IMG_2559.jpeg',
  'IMG_2602.jpeg',
  'IMG_2641.jpeg',
  'IMG_2713.jpeg',
  'IMG_2782.jpeg',
  'IMG_2808.jpeg',
  'IMG_2895.jpeg',
  'IMG_2925.jpeg',
  'IMG_2929.jpeg',
  'IMG_3103.jpeg',
  'IMG_3209.JPG',
  'IMG_3252.jpeg',
  'IMG_3314.jpeg',
  'IMG_3420.jpeg',
  'IMG_3496.jpeg',
  'IMG_3505.jpeg',
  'IMG_4863.JPG',
  'IMG_7943.JPG',
  'IMG_8096.JPG',
  'IMG_8201.jpeg',
  'IMG_8671.JPG',
  'IMG_8977.jpeg',
  'IMG_9039.JPG',
  'IMG_9065.jpeg',
  'IMG_9184.JPG',
  'IMG_9200.jpeg',
  'IMG_9333.jpeg',
  'IMG_9431.JPG',
  'IMG_9706.jpeg',
  'IMG_9717.jpeg',
  'IMG_9926.jpeg',
  'P6080601.JPG',
  'P6080614.JPG',
  'P6090722.JPG',
  'P6120851.JPG',
  'P9141225.JPG',
];

function GalleryImage({ src, alt, sizes, priority = false }) {
  const [imageState, setImageState] = useState('loading');

  return (
    <>
      {imageState === 'loading' && (
        <span className={styles.photoLoading} aria-hidden="true">
          <span className={styles.photoSpinner} />
        </span>
      )}
      {imageState === 'error' && <span className={styles.photoError}>Unable to load photo</span>}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        data-gallery-loader="true"
        onLoad={() => setImageState('loaded')}
        onError={() => setImageState('error')}
        style={imageState === 'error' ? { visibility: 'hidden' } : undefined}
      />
    </>
  );
}

const About = () => {
  const router = useRouter();
  const [showDirections, setShowDirections] = useState(true);
  const directionsCloseRef = useRef(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  const [ballBounceSequence, setBallBounceSequence] = useState(0);
  const [alternateItems, setAlternateItems] = useState({});
  const [starsCrazy, setStarsCrazy] = useState(false);
  const isGalleryOpen = activeGallery !== null;

  useEffect(() => {
    directionsCloseRef.current?.focus();
  }, []);

  const closeGallery = () => {
    setActiveGallery(null);
    setEnlargedPhoto(null);
  };

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (enlargedPhoto) {
          setEnlargedPhoto(null);
        } else {
          closeGallery();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, enlargedPhoto]);

  return (
    <main className={`${styles.aboutPage}${starsCrazy ? ` ${styles.starsCrazy}` : ''}`}>
      <div inert={showDirections ? '' : undefined}>
        <button
          type="button"
          className={`${styles.backButton} back-navigation-button`}
          onClick={() => router.push('/homepage?skipIntro=1')}
          aria-label="Go back to homepage"
        >
          &larr;
        </button>
        <h1 className={styles.aboutTitle}>About me</h1>
        <div className={styles.scene} aria-label="A collage of things that represent me, arranged on a pink bed">
        <Image
          src="/images/other/top-of-bed.png"
          alt="A pink bed"
          fill
          priority
          loading="eager"
          sizes="(max-width: 700px) 92vw, 75vh"
          className={styles.bed}
        />
        {collageItems.map((item) => item.className === 'airport' || item.className === 'camera' ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles[item.className]} ${styles.galleryTrigger}`}
            data-hover-label={item.className === 'airport'
              ? 'Fun fact: I\'ve been to 19 countries...and counting! Click in to see some memories!'
              : 'Photography is a hobby of mine. Click in to see some of my work!'}
            onClick={() => {
              const gallery = item.className === 'airport' ? 'travel' : 'photography';
              setActiveGallery(gallery);
            }}
            aria-label={`Open ${item.className === 'airport' ? 'travel' : 'photography'} photo gallery`}
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} sizes={collageImageSizes} loading="eager" />
          </button>
        ) : item.className === 'notebook' ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles.notebook} ${styles.galleryTrigger}`}
            data-hover-label="I love new music. Click in for a surprise!"
            onClick={() => {
              setActiveGallery('bts');
              confetti({
                particleCount: 220,
                spread: 150,
                startVelocity: 48,
                scalar: 1.15,
                origin: { y: 0.56 },
                colors: ['#f7d8e5', '#e5b96f', '#a6c9bb', '#8f6fc8', '#fff8fb'],
                disableForReducedMotion: true,
              });
            }}
            aria-label="Open BTS photo gallery"
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} sizes={collageImageSizes} loading="eager" />
          </button>
        ) : item.className === 'head' ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles.head} ${styles.headTrigger}`}
            data-hover-label="I love making art and writing code! It's even more awesome when I can combine both!"
            onClick={() => {
              setStarsCrazy(true);
              window.setTimeout(() => setStarsCrazy(false), 1800);
            }}
            aria-label="Make the background stars sparkle"
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} sizes={collageImageSizes} loading="eager" />
          </button>
        ) : item.className === 'tennisRacquet' ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles.tennisRacquet} ${styles.tennisRacquetTrigger}`}
            data-hover-label="I love tennis! I've been playing since I was 6!"
            onClick={() => {
              setBallBounceSequence((sequence) => sequence + 1);
            }}
            aria-label="Make the tennis ball bounce"
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} sizes={collageImageSizes} loading="eager" />
          </button>
        ) : item.className === 'tennisBall' ? (
          <button
            key={`${item.src}-${ballBounceSequence}`}
            type="button"
            className={`${styles.item} ${styles.tennisBall} ${styles.tennisBallTrigger}${ballBounceSequence ? ` ${styles.bouncing}` : ''}`}
            data-hover-label="I love tennis! I've been playing since I was 6!"
            onClick={() => {
              setBallBounceSequence((sequence) => sequence + 1);
            }}
            aria-label="Make the tennis ball bounce"
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} sizes={collageImageSizes} loading="eager" />
          </button>
        ) : item.alternateSrc ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles[item.className]} ${styles.swapTrigger}`}
            data-hover-label="I love fashion. Let's change it up!"
            onClick={() => {
              setAlternateItems((current) => ({
                ...current,
                [item.className]: !current[item.className],
              }));
            }}
            aria-label={`Switch ${item.className} image`}
          >
            <Image
              src={alternateItems[item.className] ? item.alternateSrc : item.src}
              alt={item.alt}
              width={2048}
              height={2048}
              sizes={collageImageSizes}
              loading="eager"
            />
          </button>
        ) : (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={2048}
            height={2048}
            sizes={collageImageSizes}
            loading="eager"
            className={`${styles.item} ${styles[item.className]}`}
          />
        ))}
        </div>
      </div>
      {showDirections && (
        <div className={styles.directionsBackdrop}>
          <section
            className={styles.directionsDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-directions-title"
            aria-describedby="about-directions-copy"
          >
            <button
              ref={directionsCloseRef}
              type="button"
              className={styles.directionsClose}
              onClick={() => setShowDirections(false)}
              aria-label="Close directions and explore the About page"
            >
              &times;
            </button>
            <p className={styles.directionsEyebrow}>Time to Learn </p>
            <h2 id="about-directions-title">A little about me!</h2>
            <p id="about-directions-copy">
              Get to know me better by exploring and clicking on the different elements!
               </p>
            <p className={styles.directionsPrompt}>Close this note to start exploring.</p>
          </section>
        </div>
      )}
      {isGalleryOpen && (
        <div className={`${styles.galleryBackdrop} ${activeGallery === 'bts' ? styles.btsGalleryBackdrop : ''}`} onClick={closeGallery}>
          <section
            className={`${styles.galleryDialog} ${activeGallery === 'bts' ? styles.btsGalleryDialog : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.galleryClose}
              onClick={closeGallery}
              aria-label="Close photo gallery"
            >
              &times;
            </button>
            <h2 id="gallery-title">{activeGallery === 'travel' ? 'Travel Memories' : activeGallery === 'bts' ? 'I LOVE BTS!!!!' : 'Photography'}</h2>
            {activeGallery === 'travel' || activeGallery === 'photography' ? (
              <div className={styles.galleryGrid}>
                {(activeGallery === 'travel' ? travelPhotos : photographyPhotos).map((photo, index) => (
                  <button
                    className={styles.galleryPhoto}
                    key={photo}
                    type="button"
                    onClick={() => setEnlargedPhoto({ photo, index, gallery: activeGallery })}
                    aria-label={`Enlarge ${activeGallery} photo ${index + 1}`}
                  >
                    <GalleryImage
                      src={activeGallery === 'travel' ? `/images/travel/${photo}` : `/images/photography/${photo}`}
                      alt={`${activeGallery === 'travel' ? 'Travel' : 'Photography'} photo ${index + 1}`}
                      sizes="(max-width: 600px) 42vw, (max-width: 1000px) 28vw, 220px"
                    />
                  </button>
                ))}
              </div>
            ) : activeGallery === 'bts' ? (
              <div className={styles.btsGalleryGrid}>
                {btsImages.map((image, index) => (
                  <figure className={styles.btsGalleryItem} key={image.src}>
                    <img src={image.src} alt={image.alt} />
                   
                  </figure>
                ))}
              </div>
            ) : null}
          </section>
        </div>
      )}
      {enlargedPhoto && (
        <div className={styles.photoViewerBackdrop} onClick={() => setEnlargedPhoto(null)}>
          <section
            className={styles.photoViewer}
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged ${enlargedPhoto.gallery} photo ${enlargedPhoto.index + 1}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.galleryClose}
              onClick={() => setEnlargedPhoto(null)}
              aria-label="Close enlarged photo"
            >
              &times;
            </button>
            <div className={styles.photoViewerImage}>
              <GalleryImage
                key={`${enlargedPhoto.gallery}-${enlargedPhoto.photo}`}
                src={enlargedPhoto.gallery === 'travel' ? `/images/travel/${enlargedPhoto.photo}` : `/images/photography/${enlargedPhoto.photo}`}
                alt={`${enlargedPhoto.gallery === 'travel' ? 'Travel' : 'Photography'} photo ${enlargedPhoto.index + 1}`}
                sizes="90vw"
                priority
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default About;
