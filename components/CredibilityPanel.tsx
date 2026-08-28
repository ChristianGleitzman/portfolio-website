'use client';

import React from 'react';
import { useSpotlight } from './useSpotlight';

const items = [
  {
    label: 'Education',
    value: 'University of Southampton',
    detail: 'Final-Year BSc Computer Science',
  },
  {
    label: 'Award',
    value: 'Netcraft Prize',
    detail: 'Won 2 years running, top-10 CS average',
  },
  {
    label: 'Current Role',
    value: 'Technical Lead, Teleagriculture',
    detail: 'Programmer RA · since Jul 2026',
  },
];

export const CredibilityPanel: React.FC = () => {
  const spotlight = useSpotlight();

  return (
    <div className="credibility-panel spotlight" {...spotlight}>
      {items.map((item) => (
        <div key={item.label} className="credibility-item">
          <span className="credibility-label">{item.label}</span>
          <span className="credibility-value">{item.value}</span>
          <span className="credibility-detail">{item.detail}</span>
        </div>
      ))}
    </div>
  );
};
