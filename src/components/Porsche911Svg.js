import React from "react";

/**
 * Ultra-lightweight 2D Porsche 911 (992) Side Profile SVG.
 * Designed with the iconic 911 flyline, teardrop window profile,
 * front luggage hood curve, rear haunches, and spinning sports wheels.
 */
export default function Porsche911Svg({ className = "", width = 160 }) {
  const height = Math.round((width * 54) / 180);

  return (
    <svg
      viewBox="0 0 220 66"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 911 Aerodynamic Body Shell Silhouette */}
      <path
        d="M 12 48 
           L 19 48 
           A 14 14 0 0 1 47 48 
           L 142 48 
           A 14 14 0 0 1 170 48 
           L 204 48 
           C 213 48 217 43 214 37 
           C 210 30 193 25 174 23 
           C 166 22 158 22 152 24 
           L 145 24 
           C 133 15 119 9 101 8 
           C 78 8 57 14 37 23 
           C 25 29 16 35 12 40 
           Z"
        strokeWidth="2.2"
        fill="currentColor"
        fillOpacity="0.03"
      />

      {/* Signature Porsche Teardrop Window DLO (Daylight Opening) */}
      <path
        d="M 141 23 
           C 131 16 118 11 102 11 
           C 85 11 68 15 53 23 
           L 57 24 
           C 73 24 105 24 141 24 
           Z"
        strokeWidth="1.6"
        fill="currentColor"
        fillOpacity="0.06"
      />

      {/* B-Pillar & Door Seam Lines */}
      <line x1="97" y1="11" x2="97" y2="24" strokeWidth="1.2" opacity="0.6" />
      <path d="M 94 24 L 91 46" strokeWidth="1.2" opacity="0.45" />

      {/* Aerodynamic Side Mirror */}
      <path d="M 138 23 L 144 20 L 145 23 Z" fill="currentColor" opacity="0.7" />

      {/* Front Headlight Oval Outline */}
      <ellipse
        cx="198"
        cy="29"
        rx="4.5"
        ry="2.2"
        transform="rotate(-20 198 29)"
        strokeWidth="1.4"
        opacity="0.7"
      />

      {/* Iconic Rear Full-Width Lightbar */}
      <line x1="12" y1="38" x2="22" y2="35" strokeWidth="2" opacity="0.8" />

      {/* Rear Wheel (Rotating Spoked Alloy) */}
      <g className="porsche-wheel-item" style={{ transformOrigin: "33px 48px" }}>
        <circle cx="33" cy="48" r="13" strokeWidth="2.4" />
        <circle cx="33" cy="48" r="9" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />
        <circle cx="33" cy="48" r="3" fill="currentColor" />
        <line x1="33" y1="39" x2="33" y2="57" strokeWidth="1.5" />
        <line x1="24" y1="48" x2="42" y2="48" strokeWidth="1.5" />
        <line x1="26.6" y1="41.6" x2="39.4" y2="54.4" strokeWidth="1.2" />
        <line x1="26.6" y1="54.4" x2="39.4" y2="41.6" strokeWidth="1.2" />
      </g>

      {/* Front Wheel (Rotating Spoked Alloy) */}
      <g className="porsche-wheel-item" style={{ transformOrigin: "156px 48px" }}>
        <circle cx="156" cy="48" r="13" strokeWidth="2.4" />
        <circle cx="156" cy="48" r="9" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />
        <circle cx="156" cy="48" r="3" fill="currentColor" />
        <line x1="156" y1="39" x2="156" y2="57" strokeWidth="1.5" />
        <line x1="147" y1="48" x2="165" y2="48" strokeWidth="1.5" />
        <line x1="149.6" y1="41.6" x2="162.4" y2="54.4" strokeWidth="1.2" />
        <line x1="149.6" y1="54.4" x2="162.4" y2="41.6" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
