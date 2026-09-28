import type { Metadata } from 'next';
import { Toolkit } from '@/components/Toolkit';
import { Navigation } from '@/components/Navigation';
import { AboutIntro, JourneyCard, CreativePractice, ChildhoodOutro } from '@/components/about/AboutSections';
import './about.css';

export const metadata: Metadata = { title: 'About — Neta Rogovsky', description: 'Product Designer and UX Researcher. A little about my journey through design, music, visual art, and fashion.' };
export default function AboutPage() {
  return <div className="about-page">
    <a className="skip-link" href="#about-main">Skip to content</a>
    <Navigation />
    <main className="about-main" id="about-main">
      <AboutIntro />
      <Toolkit />
      <JourneyCard />
      <CreativePractice />
      <ChildhoodOutro />
    </main>
  </div>;
}
