import Image from 'next/image';
import { publicPath } from '@/lib/paths';
import portrait from '../../public/profile.jpg';
import { ArrowDown, ArrowUpRight, Download, MapPin, Github, Linkedin, Phone } from 'lucide-react';
import { personal, projects, skills, experiences, education, activities, focusAreas } from '@/content/portfolio';
import { ArtworkEntrance, CopyEmail } from '@/components/interactions';
import { ProjectShowcase } from '@/components/project-showcase';
import { ProjectGallery } from '@/components/project-gallery';

export default function Home() {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: personal.name, jobTitle: personal.title, email: personal.email, telephone: personal.internationalPhone, address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' }, alumniOf: { '@type': 'EducationalOrganization', name: education.institution }, sameAs: [personal.githubUrl, personal.linkedinUrl], knowsAbout: skills.flatMap(s => [...s.items]) };
  return <main id="main-content" tabIndex={-1}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />
    <section id="hero" className="hero container" aria-labelledby="hero-heading">
      <ArtworkEntrance><div className="hero-portrait"><Image src={portrait} placeholder="blur" alt={personal.name} width={845} height={1280} sizes="280px" loading="eager" fetchPriority="high" /></div></ArtworkEntrance>
      <p className="hero-role">AI Engineer <span aria-hidden="true">/</span> Cairo, Egypt</p>
      <h1 id="hero-heading">Arwa Elsayed Eldesawy<span className="heading-period">.</span></h1>
      <p className="hero-description">Building practical applications with machine learning,<br className="desktop-break" /> computer vision, and generative AI.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDown size={18} /></a><a className="button button-secondary" href={publicPath(personal.cvUrl)} download>Download CV <Download size={17} /></a></div>
      <p className="hero-availability">Open to AI engineering roles & internships</p>
    </section>

    <section id="projects" className="projects-section container" aria-labelledby="projects-heading">
      <div className="section-heading"><h2 id="projects-heading">Selected projects.</h2><p>A look at what I’ve built, how it works, and what I achieved.</p></div>
      <ProjectGallery labels={projects.map(project => ({ slug: project.slug, title: project.title.replace('AI Customer Support Automation', 'Customer support').replace('Brain Tumor Classification', 'Brain classification').replace('AI-Powered Resume Screening', 'Resume screening').replace('Network Intrusion Detection System', 'Network security') }))}>{projects.map(project => <ProjectShowcase key={project.slug} project={project} />)}</ProjectGallery>
    </section>

    <section id="about" className="about-section container" aria-labelledby="about-heading">
      <div className="section-heading"><h2 id="about-heading">A little about me.</h2><p>Arwa Eldesawy, AI Engineer.</p></div>
      <div className="about-copy"><p>I’m an entry-level AI Engineer with a foundation in machine learning, deep learning, computer vision, and generative AI.</p><p>I develop AI applications and intelligent workflows using Python, PyTorch, TensorFlow, FastAPI, LLM APIs, and n8n. Through my internships, I’ve worked on model development and retrieval-augmented generation (RAG), with a focus on AI integration, REST APIs, and workflow automation.</p><p className="location"><MapPin size={16} />{personal.location}</p></div>
      <div className="focus-areas">{focusAreas.map(area => <div key={area.title}><h3>{area.title}</h3><p>{area.technologies.join(' · ')}</p></div>)}</div>
    </section>

    <section id="skills" className="skills-section container" aria-labelledby="skills-heading">
      <div className="section-heading"><h2 id="skills-heading">My toolkit.</h2><p>The languages, frameworks, and practices I work with.</p></div>
      <div className="skills-grid">{skills.map(category => <div className="skill-category" key={category.name}><h3>{category.name}</h3><ul>{category.items.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
    </section>

    <section id="experience" className="experience-section container" aria-labelledby="experience-heading">
      <div className="section-heading"><h2 id="experience-heading">Experience.</h2><p>Hands-on learning in AI, product development, and data.</p></div>
      <div className="experience-list">{experiences.map(experience => <article key={experience.id}><h3>{experience.company}</h3><p className="experience-role">{experience.role}</p><ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
    </section>

    <section id="education" className="education-section container" aria-labelledby="education-heading">
      <div className="section-heading"><h2 id="education-heading">Education.</h2><p>My academic foundation and continued learning.</p></div>
      <div className="education-content"><article className="degree"><p className="degree-years">{education.years}</p><h3>{education.degree}</h3><p>Major in {education.major}</p><p>{education.institution}</p><span className="gpa">GPA {education.gpa}</span></article><div className="activities">{activities.map(activity => <article key={activity.title}><h3>{activity.title}</h3><p>{activity.description}</p></article>)}</div></div>
    </section>

    <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="container">
      <div className="contact-heading"><p>Have a role or project in mind?</p><h2 id="contact-heading">Let’s work together.</h2><p>I’m looking for AI engineering roles, graduate programs,<br className="desktop-break" /> and research internships in Cairo and remotely.</p></div>
      <a className="email-link" href={`mailto:${personal.email}`}>{personal.email}<ArrowUpRight size={24} /></a><CopyEmail email={personal.email} />
      <div className="contact-other"><a href={`tel:${personal.internationalPhone}`}><Phone size={17} /><span>{personal.phone}</span></a><a href={personal.linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={16} /></a><a href={personal.githubUrl} target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><ArrowUpRight size={16} /></a></div>
    </div></section>
  </main>;
}
