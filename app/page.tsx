import { CommunitiesSection } from '@/components/CommunitiesSection';
import { ContactFooter } from '@/components/ContactFooter';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main">
      <Hero />
      <section className="next-section" id="product" aria-labelledby="product-title">
        <h2 id="product-title">Product</h2>
        <p>Selected work, coming into focus.</p>
      </section>
      <CommunitiesSection />
    </main>
    <ContactFooter />
  </>;
}
