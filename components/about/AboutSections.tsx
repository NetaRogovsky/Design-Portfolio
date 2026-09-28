import Image, { type StaticImageData } from 'next/image';
import { PastelDrawing } from './PastelDrawing';
import { InteractiveLanyard } from './InteractiveLanyard';
import skyline from '@/public/about/nyc-skyline.png';
import stamp from '@/public/about/nyc-stamp.jpg';
import portrait from '@/public/about/graphite-portrait.jpg';
import stillLife from '@/public/about/graphite-still-life.png';
import profile from '@/public/about/graphite-profile.png';
import singing from '@/public/about/music-performance.png';
import records from '@/public/about/music-records.png';
import bass from '@/public/about/music-bass.png';
import garment from '@/public/about/fashion-garment.png';
import moodboard from '@/public/about/fashion-moodboard.png';
import design from '@/public/about/fashion-design.png';
import childhood from '@/public/about/childhood-scrapbook.png';
import brush from '@/public/about/brush-stroke.png';

export function AboutIntro() {
  return <section className="about-intro" aria-labelledby="about-title">
    <div className="about-intro-copy">
      <h1 id="about-title">I’m Neta, a <span>New York City</span> Based<br /><em>Product Designer &amp; UX Researcher</em></h1>
      <div className="about-bio">
        <p>There are two things that feed my drive:</p>
        <p className="drive-line">I love to <em>build</em> and to <em>learn.</em></p>
        <p>Which led me to study <em>Human-Computer Interaction</em> at NJIT. My craft sits somewhere between the technical and the creative. I’ve worked across product design, accessibility research, and emerging technology.</p>
        <p>I care about understanding how people think, translating messy systems into seamless experiences, and making products that feel intentional down to the smallest interaction.</p>
      </div>
    </div>
    <InteractiveLanyard />
  </section>;
}

export function JourneyCard() {
  return <section className="journey-card" aria-labelledby="journey-title">
    <div className="journey-skyline"><Image src={skyline} alt="Hand-drawn New York City skyline" sizes="(max-width: 700px) 40vw, 380px" /></div>
    <div className="journey-copy">
      <header><h2 id="journey-title">My Journey</h2><Image src={stamp} alt="Vintage New York postage stamp" sizes="90px" /></header>
      <p><strong>Creativity has always paved my way.</strong></p>
      <p>Before product design, I spent years immersed in music, visual art, and fashion design.</p>
      <p>Moving between those disciplines taught me to pay attention to composition, emotion, aesthetics, and the way people experience what we create.</p>
      <p>Eventually, I found product design, where those instincts could meet research, technology, and problem-solving.<br />That combination is what keeps me interested: I like to build, and I like to learn.</p>
    </div>
  </section>;
}

type GalleryImage = { src: StaticImageData; alt: string };
function PracticeRow({ kind, images, title, caption }: { kind: string; images: GalleryImage[]; title: string; caption: string }) {
  return <figure id={kind === "music" ? "music" : undefined} className={`practice-row ${kind}`}>
    <div className="practice-images">{images.map(({ src, alt }) => <Image key={alt} src={src} alt={alt} sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 450px" />)}</div>
    <figcaption><strong>{title}</strong><p>{caption}</p></figcaption>
  </figure>;
}
export function CreativePractice() {
  return <section className="creative-practice" aria-labelledby="practice-title">
    <h2 id="practice-title">Creative Practice</h2>
    <PracticeRow kind="graphite" images={[
      { src: portrait, alt: 'Graphite portrait of a child blowing a soap bubble' },
      { src: stillLife, alt: 'Graphite still life with a skull, flower, and perfume bottle' },
      { src: profile, alt: 'Graphite profile study with botanical and textured details' },
    ]} title="Drawn by hand" caption="A few graphite studies exploring portraits, still life, texture, and form." />
    <PracticeRow kind="music" images={[
      { src: singing, alt: 'Neta singing on stage under orange and purple lights' },
      { src: records, alt: 'Neta listening to music among vinyl records' },
      { src: bass, alt: 'Neta playing bass guitar at a live performance' },
    ]} title="Made to be heard" caption="Since April 2025, I’ve taught voice, bass guitar, and group classes at School of Rock, leading private and group lessons for students ages 4–50. Adapting to different goals, abilities, and experience levels strengthens how I listen, communicate, and work with a wide range of customers and users. Alongside teaching, I create, perform, and collaborate through music." />
    <PracticeRow kind="fashion" images={[
      { src: garment, alt: 'Constructed cream dress shown from multiple angles' },
      { src: moodboard, alt: 'Fall collection moodboard with earth tones, textures, and silhouettes' },
      { src: design, alt: 'Fashion illustration and technical sketches for a tailored outfit' },
    ]} title="From moodboard to garment" caption="Concept development, seasonal research, color palettes, illustration, 3D design, construction, and sewing." />
  </section>;
}

export function ChildhoodOutro() {
  return <section className="childhood-outro" id="connect" aria-labelledby="childhood-title">
    <Image className="brush-stroke" src={brush} alt="" aria-hidden="true" sizes="(max-width: 700px) 60vw, 440px" />
    <PastelDrawing />
    <div className="childhood-copy">
      <h2 id="childhood-title">Still the same person,<br />always <span>crafting,</span><br /><span>creating,</span> and<br /><span>thinking</span> outside the box</h2>
      <div className="childhood-links"><button disabled title="Résumé will be added soon">Résumé</button><a href="mailto:nr598@njit.edu">Email</a><a href="https://www.linkedin.com/in/neta-rogovsky/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
    </div>
    <Image loading="eager" className="childhood-photo" src={childhood} alt="Neta at age six with her Robot Friends, built from discarded materials collected around the house. March, 2012." sizes="(max-width: 700px) 80vw, 450px" />
  </section>;
}
