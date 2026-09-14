'use client';

import Image from 'next/image';

export default function Welcome({ onClose }) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f5f1ea]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Brick.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close welcome screen"
        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#9f7ad0] bg-[#f7f3fb]/90 text-3xl font-light text-[#7b5d9d] shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition hover:scale-105"
      >
        ×
      </button>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 z-10 -translate-x-4 -translate-y-1">
          <Image src="/images/Plant1.png" alt="Plant 1" width={180} height={180} className="object-contain" />
        </div>

        <div className="absolute right-0 top-0 z-10 translate-x-2 -translate-y-1">
          <Image src="/images/Plant2.png" alt="Plant 2" width={180} height={180} className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center px-4">
        <Image
          src="/images/Welcome_Mat.png"
          alt="Welcome mat"
          width={820}
          height={460}
          className="w-[min(76vw,820px)] drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)]"
          priority
        />
      </div>
    </div>
  );
}
