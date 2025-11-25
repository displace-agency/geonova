import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-3">
    <img 
      src="https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/6923479f663e77e15e14cd17_6881640934f1be795bb4ca41_GEONOVA%20x%20THE%20OFFSITE_LOGO.svg" 
      alt="GEONOVA" 
      className="h-6 w-auto object-contain brightness-0" 
    />
  </div>
);

export const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0014 13V1H2.09229" stroke="currentColor" strokeWidth="1.5"></path>
    <path d="M0.998535 13L12.9985 1" stroke="currentColor" strokeWidth="1.5"></path>
  </svg>
);

export const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0014 13V1H2.09229" stroke="currentColor" strokeWidth="1.5"></path>
    <path d="M0.998535 13L12.9985 1" stroke="currentColor" strokeWidth="1.5"></path>
    <path d="M13 13L1 1" stroke="currentColor" strokeWidth="1.5"></path>
  </svg>
);

export const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute w-4 h-4 ${className}`}>
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/50 -translate-y-1/2"></div>
    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-accent/50 -translate-x-1/2"></div>
  </div>
);

export const LinkedIn = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.2 13.5H0.5V4.5H3.2V13.5ZM1.85 3.3C0.95 3.3 0.35 2.7 0.35 1.95C0.35 1.2 0.95 0.6 1.85 0.6C2.75 0.6 3.35 1.2 3.35 1.95C3.35 2.7 2.75 3.3 1.85 3.3ZM13.5 13.5H10.8V8.85C10.8 7.65 10.35 6.9 9.3 6.9C8.55 6.9 8.1 7.35 7.8 7.95C7.8 8.1 7.8 8.4 7.8 8.7V13.5H5.1C5.1 13.5 5.1 5.4 5.1 4.5H7.8V5.7C8.1 5.1 9 4.35 10.35 4.35C12.15 4.35 13.5 5.55 13.5 8.25V13.5Z" fill="currentColor"/>
  </svg>
);

export const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.306 6.252L13.278 0.5H12.1L7.782 5.495L4.334 0.5H0.361L5.593 8.079L0.361 14.136H1.539L6.116 8.837L9.766 14.136H13.74L8.306 6.252ZM6.692 8.119L6.164 7.365L1.964 1.358H3.773L7.162 6.206L7.69 6.96L12.103 13.274H10.294L6.692 8.119Z" fill="currentColor"/>
  </svg>
);

export const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
  </svg>
);