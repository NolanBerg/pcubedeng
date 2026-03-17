import React from 'react';
import FadeUp from './FadeUp';

const services = [
  {
    num: '01',
    title: 'Construction Management',
    text: 'Our experienced team provides comprehensive construction management services, overseeing all phases of power industry projects from planning through completion.',
  },
  {
    num: '02',
    title: 'Safety Supervising',
    text: 'P Cubed prioritizes safety above all else. Our dedicated safety supervisors ensure every project site maintains the highest standards of compliance and worker protection.',
  },
  {
    num: '03',
    title: 'Electrical Inspecting',
    text: 'Our certified electrical inspectors provide thorough inspection services ensuring all electrical systems meet code requirements and industry standards.',
  },
  {
    num: '04',
    title: 'QA/QC',
    text: 'Quality assurance and quality control are at the core of everything we do. We implement rigorous testing and verification protocols throughout every project.',
  },
];

export default function Process() {
  return (
    <section id="services-detail" className="text-white px-6 md:px-10 lg:px-16 py-12 md:py-20" style={{ backgroundColor: '#2F3336' }}>
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest mb-6">(003)</p>
            <h2 className="text-[clamp(1.6rem,3vw,3rem)] leading-[1.15] font-bold tracking-[-0.03em] max-w-2xl">
              Our Services
            </h2>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {services.map((service) => (
              <div
                key={service.num}
                className={`border border-transparent hover:border-white/60 rounded-lg p-6 -m-6 transition-transform duration-300 ease-out hover:scale-105 cursor-default`}
              >
                <p className={`font-mono text-sm mb-4 ${Number(service.num) % 2 === 1 ? 'text-brand-gold' : 'text-brand-brown'}`}>{service.num}</p>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/50 leading-[1.7] text-sm">{service.text}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
