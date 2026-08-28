import React from 'react';

interface SigilMarkProps {
  size?: number;
  className?: string;
}

export const SigilMark: React.FC<SigilMarkProps> = ({ size = 28, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`sigil-mark ${className}`}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" stroke="var(--clr-teal)" strokeWidth="1.5" />
      <g className="sigil-mark-inner">
        <rect x="14" y="14" width="20" height="20" stroke="var(--clr-magenta)" strokeWidth="1.5" transform="rotate(45 24 24)" />
      </g>
      <circle cx="24" cy="24" r="3" fill="var(--clr-teal)" />
    </svg>
  );
};
