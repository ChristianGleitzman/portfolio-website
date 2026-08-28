'use client';

import { useCallback } from 'react';

/**
 * Tracks the pointer inside a card and exposes its position as CSS custom
 * properties, so the highlight is painted by CSS rather than by re-rendering.
 */
export function useSpotlight() {
  const onPointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  const onPointerLeave = useCallback((event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.removeProperty('--mx');
    event.currentTarget.style.removeProperty('--my');
  }, []);

  return { onPointerMove, onPointerLeave };
}
