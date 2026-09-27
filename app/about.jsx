"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ContainerScroll } from "./components/ui/container-scroll-animation";

const bookEntries = [
  {
    id: 'book-1',
    image: '/images/Book_1.png',
    title: 'My Story',
    description:
      'I am a developer who enjoys building thoughtful digital experiences that feel personal, polished, and easy to explore.',
  },
  {
    id: 'book-2',
    image: '/images/Book_2.png',
    title: 'What I Build',
    description:
      'I focus on responsive, user-centered products that combine clean interfaces with practical functionality and strong frontend engineering.',
  },
  {
    id: 'book-3',
    image: '/images/Book_3.png',
    title: 'How I Work',
    description:
      'I like to approach projects with curiosity, iteration, and attention to detail so every interaction feels intentional and useful.',
  },
  {
    id: 'book-4',
    image: '/images/Book_4.png',
    title: 'What Drives Me',
    description:
      'I am motivated by growth, creativity, and the chance to turn ideas into experiences that people genuinely enjoy using.',
  },
];

const About = ({ content }) => {
  const [selectedBook, setSelectedBook] = useState(bookEntries[0].id);

  const activeBook = bookEntries.find((book) => book.id === selectedBook) || bookEntries[0];

  return (
    <ContainerScroll
      className="bg-gradient-to-r from-blue-500 to-blue-700"
      titleComponent={
        <div className="text-center z-10 relative text-3xl text-white font-bold md:mb-10">
          {content.title}
        </div>
      }
    >
      <section className="relative text-white px-6 md:px-24 border-1">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center">
            <div className="relative h-[260px] w-[220px]">
              {bookEntries.map((book, index) => {
                const isActive = book.id === selectedBook;

                return (
                  <button
                    key={book.id}
                    type="button"
                    onClick={() => setSelectedBook(book.id)}
                    aria-label={`Open ${book.title}`}
                    style={{
                      position: 'absolute',
                      left: `${index * 18}px`,
                      top: `${index * 18}px`,
                      zIndex: bookEntries.length - index,
                      transform: isActive ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
                      transition: 'all 0.2s ease',
                      border: 'none',
                      background: 'transparent',
                      padding: 0,
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ width: 170, height: 210, position: 'relative', filter: isActive ? 'drop-shadow(0 10px 18px rgba(0,0,0,0.2))' : 'drop-shadow(0 6px 10px rgba(0,0,0,0.12))' }}>
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="w-full max-w-xl text-center md:text-left z-20">
              <p className="text-md leading-relaxed mb-4">
                {content.description}
              </p>
              <div className="rounded-2xl border border-white/30 bg-white/10 p-4 shadow-lg backdrop-blur-sm">
                <p className="mb-1 text-sm uppercase tracking-[0.2em] text-blue-100">Selected</p>
                <h3 className="mb-2 text-2xl font-semibold text-white">{activeBook.title}</h3>
                <p className="text-sm leading-relaxed text-blue-50">{activeBook.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerScroll>
  );
};

export default About;
