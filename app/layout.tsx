import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neta Rogovsky — Product & UX Design',
  description: 'Designing with curiosity, clarity, and a little personality. Neta Rogovsky, Product / UX Designer based in the New York City area.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top">{children}</body></html>;
}
