'use client';

import { useRouter } from 'next/navigation';
import './globals.css';

import Welcome from './components/welcome';

export default function WelcomePage() {
  const router = useRouter();

  return <Welcome onClose={() => router.push('/homepage')} />;
}
