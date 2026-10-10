import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/content/portfolio';
import { ProjectArtwork } from '@/components/artwork';
import { ProjectThumbnail } from '@/components/project-thumbnail';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.overview, openGraph: { title: `${p.title} — Arwa Eldesawy`, description: p.overview, type: 'article' } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const index = projects.findIndex(p => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index], next = projects[(index + 1) % projects.length], previous = projects[(index - 1 + projects.length) % projects.length];
  return <main id="main-content" tabIndex={-1} className="case-study container">
    <Link href="/#projects" className="text-link back-link"><ArrowLeft size={17} />All projects</Link>
    <div className="case-heading"><p className="project-category">{p.category}</p><h1>{p.title}</h1><p className="case-subtitle">{p.fullTitle !== p.title ? p.fullTitle.replace(`${p.title}: `, '') : p.overview}</p></div>
    <div className="case-thumbnail"><ProjectThumbnail slug={p.slug} /></div>
    <div className="case-content">
      <section aria-labelledby="overview"><h2 id="overview">Overview</h2><p>{p.overview}</p></section>
      <section className="case-achievements" aria-labelledby="results"><h2 id="results">Results & achievements</h2><ul>{p.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul></section>
      <section aria-labelledby="stack"><h2 id="stack">Project stack</h2><ul className="stack">{p.stack.map(item => <li key={item}>{item}</li>)}</ul>{p.repository && <a href={p.repository} className="text-link repository-link" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={17} /></a>}</section>
      <section aria-labelledby="approach"><h2 id="approach">Technical approach</h2>{p.approach.map(step => <div className="approach-step" key={step.title}><h3>{step.title}</h3><p>{step.text}</p></div>)}<ProjectArtwork slug={p.slug} /></section>
      <section aria-labelledby="highlights"><h2 id="highlights">Project highlights</h2><ul className="highlight-list">{p.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></section>
    </div>
    <nav className="case-pagination" aria-label="Project navigation"><Link href={`/projects/${previous.slug}`}><ArrowLeft size={21} /><span>Previous project<strong>{previous.title}</strong></span></Link><Link href="/#projects" className="all-projects-link">All projects</Link><Link href={`/projects/${next.slug}`}><span>Next project<strong>{next.title}</strong></span><ArrowRight size={21} /></Link></nav>
  </main>;
}
