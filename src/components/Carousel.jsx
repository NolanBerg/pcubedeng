import React, { useState, useRef, useId, useEffect } from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty('--x', `${xRef.current}px`);
      slideRef.current.style.setProperty('--y', `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = '1';
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? 'scale(0.98) rotateX(8deg)'
              : 'scale(1) rotateX(0deg)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transformOrigin: 'bottom',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-grey rounded-[1%] overflow-hidden"
          style={{
            transform:
              current === index
                ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
                : 'none',
            transition: 'transform 0.15s ease-out',
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover"
            style={{
              opacity: current === index ? 1 : 0.5,
              transition: 'opacity 0.6s ease-in-out',
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div
              className="absolute inset-0 bg-black/30"
              style={{ transition: 'opacity 1s ease' }}
            />
          )}
        </div>

        <article
          className="relative p-[4vmin]"
          style={{
            opacity: current === index ? 1 : 0,
            visibility: current === index ? 'visible' : 'hidden',
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative font-sans">
            {title}
          </h2>
          <div className="flex justify-center">
            <button className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-grey bg-cream h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:opacity-80 focus-visible:ring-2 focus-visible:ring-cream/60 active:scale-[0.97] cursor-pointer"
              style={{
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                boxShadow: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
              }}
            >
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-taupe border-3 border-transparent rounded-full focus:border-grey/40 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer ${
        type === 'previous' ? 'rotate-180' : ''
      }`}
      style={{ transition: 'transform 0.2s ease' }}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-grey" />
    </button>
  );
};

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin]"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
