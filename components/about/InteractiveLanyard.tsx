'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import card from '@/public/about/id-front.png';

function CardFallback() {
  return <div className="lanyard-fallback"><span /><Image src={card} alt="Neta Rogovsky — UX Researcher and Product Designer, HCI at NJIT" priority /></div>;
}
const Scene = dynamic(() => import('./LanyardScene'), { ssr: false, loading: CardFallback });
class CanvasBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <CardFallback /> : this.props.children; }
}

export function InteractiveLanyard() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const preference = () => setReduced(media.matches);
    preference();
    let visible = true;
    const sync = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    if (ref.current) observer.observe(ref.current);
    media.addEventListener('change', preference);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); media.removeEventListener('change', preference); document.removeEventListener('visibilitychange', sync); };
  }, []);
  return <div ref={ref} className="lanyard-area" role="img" aria-label="Hanging pink ID card showing Neta Rogovsky, UX Researcher and Product Designer. Drag the card to swing it.">
    <CanvasBoundary><Scene active={active} reduced={reduced} /></CanvasBoundary>
    <p className="lanyard-hint">{reduced ? 'Neta Rogovsky · HCI @ NJIT' : 'A little introduction. Give it a swing.'}</p>
  </div>;
}
