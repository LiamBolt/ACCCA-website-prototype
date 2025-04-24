import React from 'react';

// Common props that all icons will use
const iconProps = (className = '') => ({
  className: `inline-block ${className}`,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
});

// Cow Icon
export const CowIcon = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M5 3c.5-1.7 3-3 6-3s5.5 1.3 6 3c.5 2-1 3-1 3h-10s-1.5-1-1-3z" />
    <path d="M19 7c1 1 2 3 2 6 0 1-1 2-1 2 0 8-9 8-16 8-9 0-9-16 4-16 1-1 2-3 5-3 4 0 5 3 6 3z" />
    <path d="M5 10c-5 1-2 7 0 7 1 0 1-1 1-2 0-1 1-3 0-5zM19 10c5 1 2 7 0 7-1 0-1-1-1-2 0-1-1-3 0-5z" />
    <path d="M9 15c0 2 1 5 3 5s3-3 3-5-1-3-3-3-3 1-3 3z" />
    <path d="M7 4c-5 1-1 6 1 5 1 0 2-3 1-5M17 4c5 1 1 6-1 5-1 0-2-3-1-5" />
  </svg>
);

// Milk Icon
export const MilkIcon = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M8 2h8l2 4-2 1v13a2 2 0 01-2 2H8a2 2 0 01-2-2V7l-2-1 2-4z" />
    <path d="M6 7h12" />
    <path d="M11 10v7" />
    <path d="M15 10v7" />
  </svg>
);

// Dance Icon
export const DanceIcon = ({ className }) => (
  <svg {...iconProps(className)}>
    <circle cx="12" cy="5" r="3" />
    <path d="M10 8v7l-2 4" />
    <path d="M14 8v7l2 4" />
    <path d="M7 12h10" />
    <path d="M8 16h8" />
    <path d="M12 8v14" />
  </svg>
);

// Nature Icon
export const NatureIcon = ({ className }) => (
  <svg {...iconProps(className)}>
    <path d="M12 2.5c4.5 0 7.5 3 7.5 7.5 0 4-4 9-7.5 11-3.5-2-7.5-7-7.5-11 0-4.5 3-7.5 7.5-7.5z" />
    <path d="M12 6v8" />
    <path d="M8 10h8" />
  </svg>
);

// You can add more icons as needed 