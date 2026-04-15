'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import projects from '../../../src/data/projects';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBackToProjects = (e) => {
    e.preventDefault();
    sessionStorage.setItem('scrollTarget', '#projects');
    router.push('/');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar isLoading={false} />
        <div className="pt-32 px-6 md:px-10 lg:px-16 text-center">
          <h1 className="text-3xl font-bold text-grey mb-4">Project Not Found</h1>
          <Link
            href="/"
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
          <a
            href="/#projects"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-grey/50 hover:text-grey transition-colors duration-200 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 12L6 8L10 4" />
            </svg>
            Back to Projects
          </a>
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-grey/40 mb-4">Project</p>
            <h1 className="text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-grey">
              {project.title}
            </h1>
            {project.location && (
              <p className="font-mono text-sm text-brand-brown mt-2">{project.location}</p>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full lg:w-3/5 shrink-0">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Description + bullets */}
            {(project.description || project.bullets) && (
              <div className="lg:pt-2">
                {project.description && (
                  <p className="text-lg leading-[1.7] text-grey/70 mb-8">
                    {project.description}
                  </p>
                )}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="flex flex-col gap-3">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="text-base leading-[1.7] text-grey/60">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
