'use client'

import './globals.css';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { ThemeProvider } from './components/theme-provider';
import ParticlesWrapper from './components/ParticlesWrapper';
import { Quicksand } from 'next/font/google';
import { useTheme } from 'next-themes';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    console.log('theme: ', theme);
  }, [theme]);

  return (
    <html lang="en" suppressHydrationWarning className={quicksand.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Box className="home-container">
            {mounted && <ParticlesWrapper />}
          </Box>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
