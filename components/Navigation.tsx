'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const isAbout = usePathname() === '/about';
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Ease into a paper header as the scene starts to scroll underneath it.
      const progress = Math.min(1, Math.max(0, (window.scrollY - 16) / 140));
      headerRef.current?.style.setProperty('--header-progress', String(progress));
      headerRef.current?.setAttribute('data-solid', String(progress > 0.5));
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { window.removeEventListener('scroll', scroll); cancelAnimationFrame(frame); };
  }, []);
  return <header ref={headerRef} className="site-header">
    <nav className="navigation" aria-label="Main navigation">
      <a className="wordmark" href={isAbout ? "/#top" : "#top"}>Neta Rogovsky</a>
      <a href={isAbout ? "/#product" : "#product"}>Product</a>
      <a href={isAbout ? "/#communities" : "#communities"}>Community</a>
      <a href="/about" aria-current={isAbout ? "page" : undefined}>About</a>
      <a className="connect-link" href="#connect">Let’s Connect</a>
    </nav>
  </header>;
}
