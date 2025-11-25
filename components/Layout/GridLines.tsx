
import React from 'react';
import { Crosshair } from '../ui/Icons';

export const GridLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Vertical Lines */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-primary/5"></div>
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-primary/5"></div>
      
      {/* Corners */}
      <Crosshair className="left-4 md:left-10 top-24" />
      <Crosshair className="right-4 md:right-10 top-24" />
      <Crosshair className="left-4 md:left-10 bottom-24" />
      <Crosshair className="right-4 md:right-10 bottom-24" />
    </div>
  );
};