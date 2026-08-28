'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Concentric geometric mark behind the hero panel.
 * Rings drift at different rates with the pointer, which reads as depth.
 * Falls back to the static composition for touch input and reduced motion.
 */
export const HeroSigil: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!motionOk || !finePointer) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty('--px', x.toFixed(4));
      el.style.setProperty('--py', y.toFixed(4));
    };

    const onMove = (event: PointerEvent) => {
      x = Math.max(-1, Math.min(1, (event.clientX / window.innerWidth) * 2 - 1));
      y = Math.max(-1, Math.min(1, (event.clientY / window.innerHeight) * 2 - 1));
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Rounded because Node and the browser serialise trig results differently in
  // the last digit, which trips React's hydration check.
  const round = (n: number) => Number(n.toFixed(3));

  const ticks = Array.from({ length: 36 }, (_, i) => {
    const angle = (i / 36) * Math.PI * 2;
    const major = i % 3 === 0;
    const outer = 196;
    const inner = major ? 178 : 188;
    return {
      key: i,
      x1: round(200 + outer * Math.cos(angle)),
      y1: round(200 + outer * Math.sin(angle)),
      x2: round(200 + inner * Math.cos(angle)),
      y2: round(200 + inner * Math.sin(angle)),
      major,
    };
  });

  // "Squaring the circle": circle, square, triangle, circle nested together.
  // The classical alchemical figure, and deliberately not a hexagram.
  const vertex = (deg: number, r: number) => {
    const rad = (deg * Math.PI) / 180;
    return [round(200 + r * Math.cos(rad)), round(200 + r * Math.sin(rad))] as const;
  };

  const toPoints = (pts: readonly (readonly [number, number])[]) =>
    pts.map(([x, y]) => `${x},${y}`).join(' ');

  const SQUARE_R = 142;
  const square = [
    vertex(-90, SQUARE_R),
    vertex(0, SQUARE_R),
    vertex(90, SQUARE_R),
    vertex(180, SQUARE_R),
  ];
  const triangle = [vertex(-90, 104), vertex(30, 104), vertex(150, 104)];

  return (
    <svg ref={ref} className="hero-sigil" viewBox="0 0 400 400" fill="none" aria-hidden="true">
      {/* Outer band: paired rings with tick marks between them. */}
      <g className="sigil-layer sigil-layer-1">
        <g className="sigil-spin-cw">
          <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
          <circle cx="200" cy="200" r="186" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          {ticks.map((t) => (
            <line
              key={t.key}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="currentColor"
              strokeWidth={t.major ? 1.25 : 0.75}
              opacity={t.major ? 0.9 : 0.4}
            />
          ))}
        </g>
      </g>

      {/* The inscribed square and its corner nodes. */}
      <g className="sigil-layer sigil-layer-2">
        <g className="sigil-spin-ccw">
          <circle cx="200" cy="200" r="158" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
          <circle cx="200" cy="200" r="142" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 9" opacity="0.6" />
          <polygon points={toPoints(square)} stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
          {square.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
          ))}
        </g>
      </g>

      {/* Inner array, carried in the accent colour. */}
      <g className="sigil-layer sigil-layer-3 sigil-accent">
        <g className="sigil-spin-cw-slow">
          <circle cx="200" cy="200" r="112" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
          <polygon points={toPoints(triangle)} stroke="currentColor" strokeWidth="1" fill="none" opacity="0.65" />
        </g>
      </g>

      <g className="sigil-layer sigil-layer-4">
        <circle cx="200" cy="200" r="52" stroke="currentColor" strokeWidth="0.75" opacity="0.45" />
        <circle cx="200" cy="200" r="46" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      </g>
    </svg>
  );
};
