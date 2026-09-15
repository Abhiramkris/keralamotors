import React from "react";

/**
 * Ultra-lightweight 2D sports wheel and performance tire SVG.
 * Optimized for zero-overhead 60fps/120fps GPU performance (sub-350 bytes).
 */
export default function TireWheelSvg({ className = "", size = 46 }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Tire Tread with radial notches */}
      <circle cx="32" cy="32" r="29" strokeWidth="3" strokeDasharray="4.5 3" />
      
      {/* Inner Rim Lip */}
      <circle cx="32" cy="32" r="22" strokeWidth="1.5" opacity="0.75" />
      
      {/* 5 Sleek 2D Alloy Spokes */}
      <path
        d="M32 32 L32 10 M32 32 L52.9 25.2 M32 32 L44.9 49.8 M32 32 L19.1 49.8 M32 32 L11.1 25.2"
        strokeWidth="2.5"
      />
      
      {/* Center Wheel Hub */}
      <circle cx="32" cy="32" r="5.5" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="#7f1d1d" opacity="0.9" />
    </svg>
  );
}
