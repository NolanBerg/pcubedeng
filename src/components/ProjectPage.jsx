import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import projects from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar isLoading={false} />
        <div className="pt-32 px-6 md:px-10 lg:px-16 text-center">
          <h1 className="text-3xl font-bold text-grey mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="text-sm text-brand-brown hover:text-grey transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar isLoading={false} />
      <div className="pt-28 pb-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-grey/50 hover:text-grey transition-colors duration-200 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 12L6 8L10 4" />
            </svg>
            Back to Projects
          </Link>
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-grey/40 mb-4">Project</p>
            <h1 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-grey">
              {project.title}
            </h1>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-w-4xl">
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
