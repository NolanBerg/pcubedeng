import React from 'react';
import FadeUp from './FadeUp';

const services = [
  {
    title: 'Construction Management',
    type: 'Management',
    description: 'Our experienced team provides comprehensive construction management services, overseeing every phase of power infrastructure projects from planning through completion.',
    reverse: false,
    image: 'https://placehold.co/800x600/d4cec6/212325?text=Construction+Management',
  },
  {
    title: 'Safety Supervising',
    type: 'Safety',
    description: 'P Cubed prioritizes safety above all else. Our dedicated safety supervisors ensure that every project site maintains the highest standards of compliance and worker protection.',
    reverse: true,
    image: 'https://placehold.co/800x600/b8b2aa/212325?text=Safety+Supervising',
  },
  {
    title: 'Electrical Inspecting',
    type: 'Inspection',
    description: 'Our certified electrical inspectors provide thorough evaluation of installations, ensuring all work meets code requirements and industry best practices.',
    reverse: false,
    image: 'https://placehold.co/800x600/c8c2ba/212325?text=Electrical+Inspecting',
  },
  {
    title: 'QA/QC',
    type: 'Quality',
    description: 'Quality assurance and quality control are at the core of everything we do. Our QA/QC processes guarantee long-term reliability and performance across all projects.',
    reverse: true,
    image: 'https://placehold.co/800x600/a8a29a/212325?text=QA+QC',
  },
];

export default function Projects() {
  return (
    <section id="services-detail" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-4">(003)</p>
              <h2 className="text-[clamp(1.6rem,3vw,3rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey">
                Our Services
              </h2>
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-grey/60 hover:text-grey cursor-pointer group transition-colors duration-200"
            >
              Get in touch
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </FadeUp>

        {services.map((service, i) => (
          <FadeUp key={service.title} className={i < services.length - 1 ? 'mb-16 md:mb-24' : ''}>
            <div className={`grid md:grid-cols-2 gap-6 md:gap-10`}>
              <div className={`relative rounded-sm overflow-hidden ${service.reverse ? 'md:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[55vw] md:h-[450px] object-cover cursor-pointer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
              </div>
              <div className={`flex flex-col justify-center ${service.reverse ? 'md:order-1' : ''}`}>
                <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-3">{service.type}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] text-grey mb-4">{service.title}</h3>
                <p className="leading-[1.7] text-grey/60 text-base mb-6 max-w-md">{service.description}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
