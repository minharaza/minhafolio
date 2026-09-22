'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const bookEntries = [
  { id: 'book-1', image: '/images/Book_1.png', label: 'Experience' },
  { id: 'book-2', image: '/images/Book_2.png', label: 'Skills' },
  { id: 'book-3', image: '/images/Book_3.png', label: 'Projects' },
  { id: 'book-4', image: '/images/Book_4.png', label: 'About' },
];

export default function ResumePage() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState('book-1');

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

  const firstJob = content?.experience?.experienceList?.[0];
  const secondJob = content?.experience?.experienceList?.[1];
  const resumeSkills = content?.skills?.skillList ?? [];
  const projects = content?.projects?.projectList ?? [];

  const selectedContent = (() => {
    switch (selectedBook) {
      case 'book-1':
        return {
          title: firstJob?.position ?? 'Experience',
          subtitle: firstJob?.company ?? '',
          meta: `${firstJob?.startDate ?? ''} - ${firstJob?.endDate ?? ''}`,
          items: firstJob?.description ?? [],
        };
      case 'book-2':
        return {
          title: 'Skills',
          subtitle: 'Core technologies and strengths',
          meta: `${resumeSkills.length} areas`,
          items: resumeSkills.map((skill) => skill.name),
        };
      case 'book-3':
        return {
          title: 'Projects',
          subtitle: 'Recent work and highlights',
          meta: `${projects.length} projects`,
          items: projects.map((project) => project.title),
        };
      case 'book-4':
        return {
          title: 'About',
          subtitle: 'How I work and what I value',
          meta: 'Approach',
          items: [
            'I build thoughtful digital products with a focus on clarity, usability, and business value.',
            'I enjoy turning complex ideas into polished, interactive experiences that feel effortless to use.',
            'I work best in collaborative environments where iteration, creativity, and user feedback shape the final product.',
          ],
        };
      default:
        return {
          title: 'Experience',
          subtitle: '',
          meta: '',
          items: [],
        };
    }
  })();

  if (error) {
    return <div className="p-5 text-center text-black"><strong>Error:</strong> {error}</div>;
  }

  if (!content || !firstJob) {
    return <div className="flex min-h-screen items-center justify-center bg-white text-black">Loading resume...</div>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eaf7ff] px-6 py-16 text-slate-800">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm">
        <h1 className="mb-8 text-center text-4xl font-bold">Resume</h1>

        <section className="mb-8 flex flex-col items-center justify-center gap-6">
          <div className="relative h-[240px] w-[340px]">
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
              {selectedBook === 'book-2' ? (
                <div className="flex flex-wrap gap-2">
                  {selectedContent.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700">{item}</span>
                  ))}
                </div>
              ) : (
                <ul className="list-disc space-y-2 pl-5 text-slate-700">
                  {selectedContent.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
