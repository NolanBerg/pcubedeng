import FadeUp from './FadeUp';
import Carousel from './Carousel';

const slides = [
  {
    title: 'Underground Utility Construction',
    button: 'View Project',
    src: '/brand_assets/project-1.png',
  },
  {
    title: 'Substation Development',
    button: 'View Project',
    src: '/brand_assets/project-2.png',
  },
  {
    title: 'Transmission Line Infrastructure',
    button: 'View Project',
    src: '/brand_assets/project-3.png',
  },
  {
    title: 'Substation Construction',
    button: 'View Project',
    src: '/brand_assets/project-4.png',
  },
  {
    title: 'Wind Turbine Installation',
    button: 'View Project',
    src: '/brand_assets/project-5.png',
  },
  {
    title: 'Substation Infrastructure',
    button: 'View Project',
    src: '/brand_assets/project-6.png',
  },
  {
    title: 'Wind Farm Construction',
    button: 'View Project',
    src: '/brand_assets/project-7.png',
  },
];

export default function ImageGrid() {
  return (
    <section id="projects" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="mb-6">
            <p className="font-mono text-xs text-brand-brown uppercase tracking-widest mb-4">(002)</p>
            <h2 className="text-[clamp(1.6rem,3vw,3rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey">
              Our Projects
            </h2>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="relative overflow-hidden w-full pt-4 pb-20">
            <Carousel slides={slides} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
