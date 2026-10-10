import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectThumbnail } from './project-thumbnail';
import type { Project } from '@/content/portfolio';
export function ProjectShowcase({ project }: { project: Project }) {
  return <article className="project-card" data-project={project.slug} tabIndex={-1}>
    <Link href={`/projects/${project.slug}`} className="thumbnail-link" aria-label={`View ${project.title} case study`}><ProjectThumbnail slug={project.slug} /><span className="thumbnail-open"><ArrowUpRight size={21} /></span></Link>
    <div className="project-copy"><p className="project-category">{project.category}</p><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p className="project-featured-achievement">{project.featuredAchievement}</p><p className="project-overview">{project.cardSummary}</p><div className="project-results"><h4>Results & achievements</h4><ul>{project.achievements.slice(1, 3).map(item => <li key={item}>{item}</li>)}</ul></div><Link className="text-link" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={17} /></Link></div>
  </article>;
}
