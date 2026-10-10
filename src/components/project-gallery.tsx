'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ProjectGallery({ children, labels }: { children: ReactNode; labels: { slug: string; title: string }[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ first: 1, last: 3, start: true, end: false });
  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const update = () => {
      const bounds = element.getBoundingClientRect();
      const cards = Array.from(element.querySelectorAll<HTMLElement>('.project-card'));
      const visible = cards.map((card, index) => ({ index, bounds: card.getBoundingClientRect() })).filter(card => (Math.min(card.bounds.right, bounds.right) - Math.max(card.bounds.left, bounds.left)) / card.bounds.width > 0.5);
      setPosition({ first: (visible[0]?.index ?? 0) + 1, last: (visible.at(-1)?.index ?? 0) + 1, start: element.scrollLeft < 8, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 8 });
    };
    const resize = new ResizeObserver(update);
    resize.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => { resize.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  const behavior = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' as const : 'smooth' as const;
  function browse(direction: number) {
    const element = viewport.current;
    const card = element?.querySelector<HTMLElement>('.project-card');
    if (element && card) element.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: behavior() });
  }
  function jump(slug: string) {
    const element = viewport.current;
    const card = element?.querySelector<HTMLElement>(`[data-project="${slug}"]`);
    if (element && card) {
      element.scrollTo({ left: card.offsetLeft - element.offsetLeft, behavior: behavior() });
      card.focus({ preventScroll: true });
    }
  }
  return <div className="project-gallery">
    <nav className="project-index" aria-label="Browse projects">{labels.map(label => <button key={label.slug} onClick={() => jump(label.slug)}>{label.title}</button>)}</nav>
    <div className="gallery-toolbar"><p>Swipe or scroll to explore</p><div className="gallery-controls"><button onClick={() => browse(-1)} disabled={position.start} aria-label="Previous projects"><ArrowLeft size={19} /></button><span aria-live="polite">{position.first === position.last ? position.first : `${position.first}–${position.last}`} / {labels.length}</span><button onClick={() => browse(1)} disabled={position.end} aria-label="Next projects"><ArrowRight size={19} /></button></div></div>
    <div className="gallery-viewport" ref={viewport} tabIndex={0} role="region" aria-label="Project gallery. Scroll horizontally to browse all six projects." aria-roledescription="carousel"><div className="gallery-track">{children}</div></div>
    <div className="gallery-bottom-controls gallery-controls" role="group" aria-label="Project navigation below cards"><button onClick={() => browse(-1)} disabled={position.start} aria-label="Previous projects below gallery"><ArrowLeft size={19} /></button><span aria-hidden="true">{position.first === position.last ? position.first : `${position.first}–${position.last}`} / {labels.length}</span><button onClick={() => browse(1)} disabled={position.end} aria-label="Next projects below gallery"><ArrowRight size={19} /></button></div>
  </div>;
}
