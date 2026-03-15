import React, { useState, useRef, useId, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowNarrowRight } from '@tabler/icons-react';

const Slide = ({ slide, offset, isCurrent, handleClick }) => {
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

  const { src, button, title, slug } = slide;

  // Each slide is absolutely positioned and translated by its offset from current
  // offset: -1 = one to the left, 0 = current, 1 = one to the right, etc.
  const slideWidth = 78; // 70vmin + 2*4vmin margins

  return (
    <li
      ref={slideRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center text-center text-white w-[70vmin] h-[70vmin] z-10 cursor-pointer [perspective:1200px]"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translateX(calc(${offset * slideWidth}vmin)) ${
          !isCurrent ? 'scale(0.98) rotateX(8deg)' : 'scale(1) rotateX(0deg)'
        }`,
        // Only animate nearby slides; distant ones reposition instantly while hidden
        transition: Math.abs(offset) <= 2
          ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease'
          : 'none',
        transformOrigin: 'bottom',
        opacity: Math.abs(offset) <= 1 ? 1 : 0,
        pointerEvents: isCurrent ? 'auto' : 'none',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-grey rounded-[1%] overflow-hidden"
        style={{
          transform: isCurrent
            ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
            : 'none',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <img
          className="absolute inset-0 w-[120%] h-[120%] object-cover"
          style={{
            opacity: isCurrent ? 1 : 0.4,
            transition: 'opacity 0.6s ease-in-out',
          }}
          alt={title}
          src={src}
          loading="eager"
          decoding="sync"
        />
        {isCurrent && (
          <div
            className="absolute inset-0 bg-black/30"
            style={{ transition: 'opacity 1s ease' }}
          />
        )}
      </div>

      <article
        className="relative p-[4vmin]"
        style={{
          opacity: isCurrent ? 1 : 0,
          visibility: isCurrent ? 'visible' : 'hidden',
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative font-sans">
          {title}
        </h2>
        <div className="flex justify-center">
          <Link
            to={`/projects/${slug}`}
            onClick={(e) => e.stopPropagation()}
            className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-grey bg-cream h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:opacity-80 focus-visible:ring-2 focus-visible:ring-cream/60 active:scale-[0.97] cursor-pointer no-underline"
            style={{
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              boxShadow:
                '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
            }}
          >
            {button}
          </Link>
        </div>
      </article>
    </li>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-taupe border-3 border-transparent rounded-full focus:border-grey/40 focus:outline-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0.5 ${
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

// Get the shortest offset from `from` to `to` in a circular array of length `len`
function circularOffset(from, to, len) {
  const diff = to - from;
  // Normalize to range [-len/2, len/2]
  if (diff > len / 2) return diff - len;
  if (diff < -len / 2) return diff + len;
  return diff;
}

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const len = slides.length;

  const handlePreviousClick = () => {
    setCurrent((c) => (c - 1 + len) % len);
  };

  const handleNextClick = () => {
    setCurrent((c) => (c + 1) % len);
  };

  const handleSlideClick = (index) => {
    if (index !== current) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul className="absolute inset-0">
        {slides.map((slide, index) => {
          const offset = circularOffset(current, index, len);
          return (
            <Slide
              key={index}
              slide={slide}
              offset={offset}
              isCurrent={index === current}
              handleClick={() => handleSlideClick(index)}
            />
          );
        })}
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
