import './globals.css';
import { Box } from '@mui/material';

import { ThemeProvider } from './components/theme-provider';
import ParticlesWrapper from './components/ParticlesWrapper';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export const metadata = {
  icons: {
    icon: '/images/Logo.png',
  },
};

export default function RootLayout({ children }) {
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
            <ParticlesWrapper />
          </Box>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
