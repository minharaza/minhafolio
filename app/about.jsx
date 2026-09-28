"use client";

import Image from 'next/image';

const About = ({ content }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7dfe7] px-0 py-0">
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/top-of-bed.png"
          alt="Bed"
          width={1800}
          height={1200}
          priority
          className="h-[100vh] w-[100vw] object-contain object-center"
        />
      </div>
    </main>
  );
};

export default About;
