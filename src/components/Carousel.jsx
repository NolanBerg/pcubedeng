import Link from 'next/link';
import Image from 'next/image';
import { Marquee } from './Marquee';

function ProjectCard({ title, src, slug }) {
  return (
    <div className="group relative w-[clamp(200px,60vw,480px)] h-52 sm:h-64 md:h-80 shrink-0 overflow-hidden rounded-2xl bg-grey cursor-pointer">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 60vw, 480px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        <h3 className="text-sm font-semibold text-white leading-tight max-w-[60%]">{title}</h3>
        <Link
          href={`/projects/${slug}`}
          className="text-xs font-medium text-white/80 hover:text-white border border-white/40 hover:border-white/80 px-3 py-1.5 rounded-lg backdrop-blur-sm transition-colors duration-200 cursor-pointer shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default function Carousel({ slides }) {
  return (
    <div className="relative w-full">
      {/* Left fade */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-r from-cream to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-l from-cream to-transparent" />

      <Marquee className="[--duration:50s]" style={{ '--gap': '1.5rem' }} pauseOnHover>
        {slides.map((slide) => (
          <ProjectCard key={slide.slug} {...slide} />
        ))}
      </Marquee>
    </div>
  );
}
