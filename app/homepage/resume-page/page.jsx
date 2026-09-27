'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const bookImages = ['/images/Book_1.png', '/images/Book_2.png', '/images/Book_3.png', '/images/Book_4.png', '/images/Book_1.png'];

export default function ResumePage() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState('book-1');
  const [showResume, setShowResume] = useState(false);
  const [isShelfHovered, setIsShelfHovered] = useState(false);

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

  const experienceEntries = content?.experience?.experienceList ?? [];
  const visibleJobs = experienceEntries.filter((_, index) => index !== 1).slice(0, 5);
  const bookEntries = visibleJobs.map((job, index) => ({
    id: `book-${index + 1}`,
    image: bookImages[index % bookImages.length],
    label: job.position,
  }));

  const selectedContent = (() => {
    const selectedIndex = Number(selectedBook.replace('book-', '')) - 1;
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
    <main className="flex min-h-screen items-center justify-center bg-[#eaf7ff] px-6 py-16 text-slate-800">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
        <h1 className="mb-8 text-center text-4xl font-bold">Resume</h1>

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
          <div className="relative h-[240px] w-[340px] pb-2">
            {bookEntries.map((book, index) => {
              const isActive = book.id === selectedBook;

              return (
                <div
                  key={book.id}
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: `${index * 55}px`,
                    zIndex: bookEntries.length - index,
                    transform: 'translateY(0) scale(1)',
                    transition: 'opacity 0.2s ease, filter 0.2s ease',
                    width: 300,
                    height: 49,
                    opacity: isActive ? 1 : 0.78,
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

          <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-inner">
            <div className="bg-slate-100 px-5 py-4">
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
