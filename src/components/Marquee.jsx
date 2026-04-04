export function Marquee({ children, pauseOnHover, className, style }) {
  const pauseClass = pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '';
  const row = (hidden) => (
    <div
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 animate-marquee ${pauseClass}`}
      style={{ gap: 'var(--gap, 1.5rem)' }}
    >
      {children}
    </div>
  );
  return (
    <div className={`group flex overflow-hidden ${className ?? ''}`} style={{ gap: 'var(--gap, 1.5rem)', ...style }}>
      {row(false)}
      {row(true)}
    </div>
  );
}
