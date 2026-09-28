import { Starfield } from './Starfield';

export function ContactFooter() {
  return <footer className="contact-footer" id="connect" aria-labelledby="contact-title">
    <Starfield />
    <h2 id="contact-title">Let’s Work<br />Together</h2>
    <div className="contact-actions" aria-label="Contact links">
      <a href="mailto:nr598@njit.edu">Email</a>
      <a href="https://www.linkedin.com/in/neta-rogovsky/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <button disabled title="Résumé coming soon">Résumé</button>
    </div>
    <nav className="footer-navigation" aria-label="Footer navigation">
      <a href="#product">Product</a>
      <a href="#communities">Community</a>
      <a href="/about">About</a>
    </nav>
  </footer>;
}
