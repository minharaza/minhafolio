'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const bookImages = ['/images/Book_1.png', '/images/Book_2.png', '/images/Book_3.png', '/images/Book_4.png', '/images/Book_1.png'];
const bookPalette = [
  { dark: '#4fa8b8', light: '#cfeef3' },
  { dark: '#d99b5a', light: '#f6e3c2' },
  { dark: '#d875ac', light: '#f7d7e9' },
  { dark: '#8f6fc8', light: '#e8dff7' },
  { dark: '#4fa8b8', light: '#cfeef3' },
];

export default function ResumePage() {
  const router = useRouter();
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState('book-1');
  const [showResume, setShowResume] = useState(false);
  const [isShelfHovered, setIsShelfHovered] = useState(false);
  const [booksVisible, setBooksVisible] = useState(false);
  const [booksWave, setBooksWave] = useState(false);
  const [shelfVisible, setShelfVisible] = useState(false);

  const experienceEntries = content?.experience?.experienceList ?? [];
  const visibleJobs = experienceEntries.filter((_, index) => index !== 1).slice(0, 5);
  const bookEntries = visibleJobs.map((job, index) => ({
    id: `book-${index + 1}`,
    image: bookImages[index % bookImages.length],
    label: job.position,
  }));

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch('/api/content');
        if (!res.ok) throw new Error('Failed to fetch content');
        const data = await res.json();
        setContent(data);
      } catch (err) {
        setError(err.message || 'Unable to load resume content');
      }
    }

    fetchContent();
  }, []);

  useEffect(() => {
    if (!showResume) {
      setBooksVisible(false);
      setBooksWave(false);
      setShelfVisible(false);
      return;
    }

    const revealTimeout = setTimeout(() => setBooksVisible(true), 50);
    const waveTimeout = setTimeout(() => setBooksWave(true), (bookEntries.length * 170) + 500);
    const shelfTimeout = setTimeout(() => setShelfVisible(true), (bookEntries.length * 170) + 1600);

    return () => {
      clearTimeout(revealTimeout);
      clearTimeout(waveTimeout);
      clearTimeout(shelfTimeout);
    };
  }, [showResume, bookEntries.length]);

  const selectedIndex = Number(selectedBook.replace('book-', '')) - 1;
  const activeBookPalette = bookPalette[selectedIndex] || bookPalette[0];

  const selectedContent = (() => {
    const job = visibleJobs[selectedIndex];

    if (!job) {
      return {
        title: 'Experience',
        subtitle: '',
        meta: '',
        items: [],
      };
    }

    return {
      title: job.position,
      subtitle: job.company,
      meta: `${job.startDate} - ${job.endDate}`,
      items: job.description ?? [],
    };
  })();

  if (error) {
    return <div className="p-5 text-center text-black"><strong>Error:</strong> {error}</div>;
  }

  if (!content || !visibleJobs.length) {
    return <div className="flex min-h-screen items-center justify-center bg-white text-black">Loading resume...</div>;
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#7a4f3a] px-6 py-16 text-slate-800" style={{ fontFamily: "'Signika', sans-serif" }}>
      <button
        type="button"
        onClick={() => router.push('/homepage?skipIntro=1')}
        aria-label="Go back to homepage"
        className="absolute left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#695687] bg-white/80 text-xl font-bold text-[#695687] shadow-md transition-transform duration-200 hover:scale-105"
      >
        ←
      </button>
      <div className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
        <h1 className="mb-8 text-center text-4xl font-bold" style={{ fontFamily: "'Lily Script One', cursive" }}>Resume</h1>

        {!showResume ? (
          <div className="flex min-h-[640px] items-center justify-center">
            <button
              type="button"
              aria-label="Open resume bookshelf"
              onClick={() => setShowResume(true)}
              onMouseEnter={() => setIsShelfHovered(true)}
              onMouseLeave={() => setIsShelfHovered(false)}
              style={{
                position: 'relative',
                width: 'min(500px, 80vw)',
height: 'min(620px, 80vh)',
                border: 'none',
                background: 'transparent',
                padding: 0,
                cursor: 'pointer',
                transition: 'transform 0.2s ease, filter 0.2s ease',
                transform: isShelfHovered ? 'scale(1.04)' : 'scale(1)',
                filter: isShelfHovered ? 'drop-shadow(0 10px 18px rgba(252, 227, 65, 0.7))' : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.16))',
              }}
            >
              <Image src="/images/Bookshelf.png" alt="Open resume bookshelf" fill sizes="320px" className="object-contain" priority />
              <Image
                src="/images/Click_Me.png"
                alt=""
                aria-hidden="true"
                width={150}
                height={150}
                style={{
                  position: 'absolute',
                  top: '18%',
                  left: '-30%',
                  width: 'clamp(160px, 18vw, 220px)',
                  height: 'auto',
                  opacity: isShelfHovered ? 1 : 0,
                  transform: isShelfHovered ? 'translateX(0) rotate(-6deg)' : 'translateX(12px) rotate(-6deg)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  pointerEvents: 'none',
                }}
              />
            </button>
          </div>
        ) : (
        <section className="mb-8 flex flex-col items-center justify-center gap-8">
          <div className="relative h-[290px] w-[340px] pb-2">
            <Image
              src="/images/Shelf2.png"
              alt=""
              aria-hidden="true"
              width={340}
              height={340}
              style={{
                position: 'absolute',
                top: '15px',
                left: 0,
                zIndex: 0,
                width: 340,
                height: 340,
                maxWidth: 'none',
                pointerEvents: 'none',
                opacity: shelfVisible ? 1 : 0,
                transition: 'opacity 650ms ease',
              }}
            />
            {bookEntries.map((book, index) => {
              const isActive = book.id === selectedBook;
              const waveOffset = booksWave ? -((index + 1) * 18) : 0;

              return (
                <div
                  key={book.id}
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: `${index * 55}px`,
                    zIndex: bookEntries.length - index,
                    transform: booksVisible ? `translateY(${waveOffset}px) scale(1)` : 'translateY(24px) scale(0.96)',
                    transition: `opacity 0.35s ease ${index * 120}ms, transform 1s cubic-bezier(0.12, 0.8, 0.2, 1.8) ${index * 160}ms, filter 0.3s ease ${index * 120}ms`,
                    width: 300,
                    height: 49,
                    opacity: booksVisible ? (isActive ? 1 : 0.78) : 0,
                    filter: isActive ? 'brightness(1.08) saturate(1.12)' : 'brightness(0.92) saturate(0.9)',
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{ width: 300, height: 49, position: 'relative', overflow: 'hidden', filter: isActive ? 'drop-shadow(0 12px 20px rgba(0,0,0,0.18))' : 'drop-shadow(0 8px 14px rgba(0,0,0,0.12))' }}>
                    <Image
                      src={book.image}
                      alt={book.label}
                      width={2048}
                      height={2048}
                      style={{ position: 'absolute', width: 300, height: 300, maxWidth: 'none', left: 0, top: -127 }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedBook(book.id)}
                    aria-label={`Open ${book.label}`}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: 300,
                      height: 49,
                      border: 'none',
                      background: 'transparent',
                      padding: 0,
                      cursor: 'pointer',
                      pointerEvents: 'auto',
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 shadow-inner transition-colors duration-300"
            style={{ backgroundColor: activeBookPalette.light }}
          >
            <div className="px-5 py-4" style={{ backgroundColor: `${activeBookPalette.light}CC` }}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Selected</p>
                  <p className="mt-1 text-xl font-semibold text-slate-800">{selectedContent.title}</p>
                  <p className="text-slate-600">{selectedContent.subtitle}</p>
                </div>
                <span className="text-sm text-slate-500">{selectedContent.meta}</span>
              </div>
            </div>
            <div
              className="overflow-hidden px-5 py-4 transition-all duration-300 ease-in-out"
              style={{
                maxHeight: '260px',
                opacity: 1,
                transform: 'translateY(0)',
                backgroundColor: activeBookPalette.light,
              }}
            >
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                {selectedContent.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
        )}
      </div>
    </main>
  );
}
