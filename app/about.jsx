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
  { src: '/images/Tennis_Racquet.png', alt: 'A pink tennis racquet', className: 'tennisRacquet' },
  { src: '/images/Tennis_Ball.png', alt: 'A pink tennis ball', className: 'tennisBall' },
];

const travelPhotos = [
  '0701E767-A800-42C0-AC42-506DEBF4F43E_4_5005_c.jpeg',
  '08ED415D-62E3-405A-91FA-38392CEF79EE_4_5005_c.jpeg',
  '094C0FD6-8DCC-417B-A2E6-267EE6BF9A5E_4_5005_c.jpeg',
  '0A0ED08C-FB84-4036-8D01-525FD60AACD1_1_105_c.jpeg',
  '13DE7D08-A6C0-46ED-BEFD-5C548555D4DE_4_5005_c.jpeg',
  '198E9E83-359D-444C-86D4-0EA975CA6DAE_1_105_c.jpeg',
  '23757ADD-7042-427D-8F60-A0C0EB67BEEF_4_5005_c.jpeg',
  '24930BA9-458F-428C-B0C0-8058F7DB40D5_1_105_c.jpeg',
  '2B795F1F-4C9E-491C-B076-2C57D369B9B0_1_105_c.jpeg',
  '2F4A03D0-57F1-4A9D-916B-7F9C6647E346_4_5005_c.jpeg',
  '33FA8AA3-B050-49BD-AB46-752DDC2F095B_1_105_c.jpeg',
  '37D64532-B5F4-4156-9713-8ABB14A78D12_1_105_c.jpeg',
  '38A95A88-AE94-4E93-ACD0-002B80A241E6_1_105_c.jpeg',
  '41B4EE9C-E491-4B1A-A0C4-04020C72E9E4_1_105_c.jpeg',
  '4586D55B-7AFC-4122-9045-D7005FD85CC1_4_5005_c.jpeg',
  '4987E621-751D-454A-B13F-CFAD283D93EC_4_5005_c.jpeg',
  '49C698D2-89E6-40A3-A20E-9F4F185CDB71_1_105_c.jpeg',
  '4F7B389D-8E26-4169-B620-0F8C7C04DD7E_1_105_c.jpeg',
  '52DC4916-DFBF-43E7-BDE4-9A22A978F361_1_105_c.jpeg',
  '54B686CA-CC0F-4061-A2DD-823E91B608FD_1_105_c.jpeg',
  '55E9D573-85A2-4950-A96C-BA76DCC054A1_1_105_c.jpeg',
  '567F56C3-E036-441C-80C5-036EF843DC64_1_105_c.jpeg',
  '5A264CEA-66F5-4226-9325-BA9095CFB413_1_105_c.jpeg',
  '652B0D50-7B60-4A40-89B7-49F5822874B5_1_105_c.jpeg',
  '6C94634B-F9A7-4858-916D-48A00F0A8B06_4_5005_c.jpeg',
  '71B3BB52-8F44-44E6-9307-838D6F8787D0_4_5005_c.jpeg',
  '76BAA5F5-F76F-4D37-AB7B-EFA37A702F92_4_5005_c.jpeg',
  '7AF1C85D-EBE0-4514-B78A-9AA625255EB4_1_105_c.jpeg',
  '7B96FABF-EC16-4EDF-8ABA-04991E20338C_1_105_c.jpeg',
  '7EBD95AB-FF2D-4827-8DC2-E19B2D9FD4D9_1_105_c.jpeg',
  '865B6B48-CBCF-45B7-BFAF-508666EBFE3B_4_5005_c.jpeg',
  '87CB0A1A-BAA4-4E43-996F-4090C79D1B98_1_105_c.jpeg',
  '87FD2059-1EAF-4D67-BE1F-92FF3A53A2AF_1_105_c.jpeg',
  '89D0B9CF-22DF-4E73-940F-6475EEB4BB3C_1_105_c.jpeg',
  '9F42AA4D-0920-49E9-8AE2-7440B947810F_1_105_c.jpeg',
  'A41A41B1-4D5E-4936-A6D8-FA47D772C56A_1_105_c.jpeg',
  'A5451CD2-0275-4D69-911A-B13A59C3F229_1_105_c.jpeg',
  'A78AB53E-C7FC-43E0-9B15-6D232FD8AC98_1_105_c.jpeg',
  'BC1A0478-9FB9-4F7F-90CA-4E1FF372070B_4_5005_c.jpeg',
  'BC7F4248-4BCE-4CB0-84D0-C8D1ED5C6440_4_5005_c.jpeg',
  'C371BE82-68C0-4BFC-BBEB-D2EE4A77A375_1_105_c.jpeg',
  'C403D08E-03B2-4515-8D27-B23231894EBA_4_5005_c.jpeg',
  'C7956564-E6FF-4D57-8A06-8AE3FAC59E81_4_5005_c.jpeg',
  'D075BC93-401A-4F0D-9FD5-AABC982359C1_1_105_c.jpeg',
  'D5B98852-66A7-4AF0-8C4F-4F2AFB356A00_1_105_c.jpeg',
  'E0740B64-ABC5-4F01-A971-4F3099630E25_4_5005_c.jpeg',
  'E4AEE5AE-5ACE-409C-A223-CF45F3A3361B_1_105_c.jpeg',
  'E6C4E0E0-A93C-43C2-ABA8-6D5927060B7B_4_5005_c.jpeg',
  'E9C1ADC1-48A0-4823-9242-CA283C22B33D_1_105_c.jpeg',
  'EDA94796-2AB3-4301-9816-A1F4FBAD98E4_4_5005_c.jpeg',
  'F1716011-2C1C-40AB-90DC-18B363103D60_4_5005_c.jpeg',
  'FC3AE07B-0A76-4D7C-8664-800CF2D51486_1_105_c.jpeg',
];

const About = () => {
  const [activeGallery, setActiveGallery] = useState(null);
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  const [ballBounceSequence, setBallBounceSequence] = useState(0);
  const isGalleryOpen = activeGallery !== null;

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (enlargedPhoto) {
          setEnlargedPhoto(null);
        } else {
          setActiveGallery(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, enlargedPhoto]);

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
        ) : item.className === 'tennisRacquet' ? (
          <button
            key={item.src}
            type="button"
            className={`${styles.item} ${styles.tennisRacquet} ${styles.tennisRacquetTrigger}`}
            onClick={() => setBallBounceSequence((sequence) => sequence + 1)}
            aria-label="Make the tennis ball bounce"
          >
            <Image src={item.src} alt={item.alt} width={2048} height={2048} />
          </button>
        ) : item.className === 'tennisBall' ? (
          <button
            key={`${item.src}-${ballBounceSequence}`}
            type="button"
            className={`${styles.item} ${styles.tennisBall} ${styles.tennisBallTrigger}${ballBounceSequence ? ` ${styles.bouncing}` : ''}`}
            onClick={() => setBallBounceSequence((sequence) => sequence + 1)}
            aria-label="Make the tennis ball bounce"
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
            {activeGallery === 'travel' ? (
              <div className={styles.galleryGrid}>
                {travelPhotos.map((photo, index) => (
                  <button
                    className={styles.galleryPhoto}
                    key={photo}
                    type="button"
                    onClick={() => setEnlargedPhoto({ photo, index })}
                    aria-label={`Enlarge travel photo ${index + 1}`}
                  >
                    <Image
                      src={`/images/travel/p/${photo}`}
                      alt={`Travel photo ${index + 1}`}
                      fill
                      sizes="(max-width: 600px) 42vw, (max-width: 1000px) 28vw, 220px"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <p className={styles.galleryEmpty}>No photography added yet.</p>
            )}
          </section>
        </div>
      )}
      {enlargedPhoto && (
        <div className={styles.photoViewerBackdrop} onClick={() => setEnlargedPhoto(null)}>
          <section
            className={styles.photoViewer}
            role="dialog"
            aria-modal="true"
            aria-label={`Enlarged travel photo ${enlargedPhoto.index + 1}`}
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
              <Image
                src={`/images/travel/p/${enlargedPhoto.photo}`}
                alt={`Travel photo ${enlargedPhoto.index + 1}`}
                fill
                sizes="90vw"
              />
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default About;
