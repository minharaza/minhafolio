'use client';

import { useEffect, useState } from 'react';
import About from '../../about';
import validateContent from '../../lib/validate';

export default function AboutRoutePage() {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch('/api/content');
        if (!res.ok) {
          throw new Error('Failed to fetch content');
        }

        const data = await res.json();
        const { isValid, message } = validateContent(data);

        if (!isValid) {
          throw new Error(message);
        }

        setContent(data);
      } catch (err) {
        setError(err.message || 'Unable to load about content');
      }
    }

    fetchContent();
  }, []);

  if (error) {
    return (
      <div className="relative bg-white p-5 text-center text-black">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        Loading about...
      </div>
    );
  }

  return <About content={content.about} />;
}
