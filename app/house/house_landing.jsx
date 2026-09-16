import Link from 'next/link';
import './house_landing.css';

const rooms = [
  { label: 'About', href: '/homepage/about' },
  { label: 'Skills', href: '/homepage/skills' },
  { label: 'Experience', href: '/homepage/experience' },
  { label: 'Projects', href: '/homepage/projects' },
  { label: 'Contact', href: '/homepage/contact' },
];

export default function HousePage() {
  return (
    <main className="house-landing">
      <nav aria-label="Portfolio sections">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href}>
            {room.label}
          </Link>
        ))}
      </nav>
      <img
        className="smile_with_matcha"
        src="/images/Smiling_With_Matcha.png"
        alt="Smiling with matcha"
      />
    </main>
  );
}
