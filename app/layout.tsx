import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serenity Spa — Facials, Massage & Rituals',
  description:
    'Serenity Spa is a calm beauty retreat offering botanical facials, deep-rest massage, and restorative body rituals. Book your visit today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
