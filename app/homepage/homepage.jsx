'use client';

import { useEffect, useState } from 'react';
import '../globals.css';

import { Box } from '@mui/material';
import Home from '../home';
import Skills from '../skills';
import About from '../about';
import Experience from '../Experience';
import Project from '../projects';
import Contact from '../contact';
import Header from '../components/header';
import validateContent from '../lib/validate';

export default function HomepagePage() {
  const [content, setContent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch('/api/content');
        if (!res.ok) {
          throw new Error('Failed to fetch content : check content.yml format');
        }
        const data = await res.json();
        const { isValid, message } = validateContent(data);
        if (isValid) {
          setContent(data);
          setIsLoaded(true);
        } else {
          setError(message);
        }
      } catch (err) {
        setError(err.message + '. Try undoing the recent changes made to content.yml and refresh.');
      }
    }

    fetchContent();
  }, []);

  useEffect(() => {
    if (content) {
      document.title = content.name;
    }
  }, [content]);

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
        Loading portfolio...
      </div>
    );
  }

  return (
    <Box className="h-min-screen">
      {isLoaded && <Header content={content} />}
      <Box className="trigger-start" id="home-section">
        <section id="home" className="relative">
          <Home content={content.home} />
        </section>
        <br />
        <br />
        <br />
        <br />
        <section id="about" className="relative">
          <About content={content.about} />
        </section>
        <section id="skills" className="relative">
          <Skills content={content.skills} />
        </section>
        <br />
        <br />
        <br />
        <section id="experience" className="relative">
          <Experience content={content.experience} />
        </section>
        <br />
        <br />
        <br />
        <section id="project" className="relative">
          <Project content={content.projects} />
        </section>
        <section id="contact" className="relative">
          <Contact content={content.contact} name={content.name} />
        </section>
      </Box>
    </Box>
  );
}