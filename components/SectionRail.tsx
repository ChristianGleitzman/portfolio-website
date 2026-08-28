'use client';

import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionRailProps {
  sections: Section[];
}

/**
 * Sticky index that marks the section currently in view. Uses the empty
 * left margin rather than adding another band of stacked content.
 */
export const SectionRail: React.FC<SectionRailProps> = ({ sections }) => {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView.length > 0) setActive(inView[0].target.id);
      },
      { rootMargin: '-25% 0px -60% 0px' }
    );

    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="section-rail" aria-label="Sections on this page">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={active === section.id ? 'active' : ''}
              aria-current={active === section.id ? 'true' : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
