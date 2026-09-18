import React from 'react';

export default function PistonSvg({ size = 32, color = "currentColor", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      <g stroke={color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* Piston Head */}
        <path d="M20 12 L44 12 C46.2 12 48 13.8 48 16 L48 30 C48 32.2 46.2 34 44 34 L20 34 C17.8 34 16 32.2 16 30 L16 16 C16 13.8 17.8 12 20 12 Z" />
        {/* Piston Rings */}
        <line x1="16" y1="18" x2="48" y2="18" />
        <line x1="16" y1="23" x2="48" y2="23" />
        <line x1="16" y1="28" x2="48" y2="28" />
        
        {/* Wrist pin hole */}
        <circle cx="32" cy="23" r="4" fill="none" />
        
        {/* Connecting Rod */}
        <path d="M28 34 L26 50 C26 53.3 28.7 56 32 56 C35.3 56 38 53.3 38 50 L36 34" fill="none" />
        
        {/* Rod end eye */}
        <circle cx="32" cy="50" r="4" fill="none" />
      </g>
    </svg>
  );
}
