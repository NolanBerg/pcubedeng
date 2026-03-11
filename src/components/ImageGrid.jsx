import FadeUp from './FadeUp';
import Carousel from './Carousel';

const slides = [
  {
    title: 'Wind Farm Development — Wyoming',
    button: 'View Project',
    src: 'https://placehold.co/1200x800/c4beb6/212325?text=Wind+Farm+Project',
  },
  {
    title: 'Substation Expansion — Montana',
    button: 'View Project',
    src: 'https://placehold.co/1200x800/b8b2aa/212325?text=Substation+Project',
  },
  {
    title: 'Transmission Line Upgrade — Colorado',
    button: 'View Project',
    src: 'https://placehold.co/1200x800/a8a29a/212325?text=Transmission+Lines',
  },
  {
    title: 'Solar Array Installation — Utah',
    button: 'View Project',
    src: 'https://placehold.co/1200x800/d4cec6/212325?text=Solar+Array',
  },
];

export default function ImageGrid() {
  return (
    <section id="projects" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="mb-12">
            <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-4">(002)</p>
            <h2 className="text-[clamp(1.6rem,3vw,3rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey">
              Our Projects
            </h2>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="relative overflow-hidden w-full py-20">
            <Carousel slides={slides} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
