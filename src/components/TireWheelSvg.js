import React from "react";

/**
 * Detailed luxury sports wheel and performance tire SVG.
 * Designed with tire tread notches, double sidewall, alloy wheel rim,
 * brake rotor with cooling perforations, brake caliper, 5-twin-spoke turbine spokes,
 * and 5 lug nuts around a central emblem hub.
 */
export default function TireWheelSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Tire Tread Peripheral Lugs (Aggressive sports tire grip) */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray="7 5"
        opacity="0.9"
      />
      {/* Outer Tire Circumference Edge */}
      <circle
        cx="100"
        cy="100"
        r="91"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Tire Rubber Sidewall Bands */}
      <circle
        cx="100"
        cy="100"
        r="83"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="16 4 4 4"
        opacity="0.45"
      />
      <circle
        cx="100"
        cy="100"
        r="73"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.8"
      />

      {/* Outer Wheel Rim Lip (Polished Alloy Rim Edge) */}
      <circle
        cx="100"
        cy="100"
        r="65"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.95"
      />
      <circle
        cx="100"
        cy="100"
        r="61"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Ventilated Brake Rotor Disc behind Spokes */}
      <circle
        cx="100"
        cy="100"
        r="51"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.35"
      />
      <circle
        cx="100"
        cy="100"
        r="44"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.4"
      />

      {/* High-Performance Brake Caliper */}
      <path
        d="M 54,68 A 56 56 0 0 1 70,52 L 64,43 A 67 67 0 0 0 43,64 Z"
        fill="currentColor"
        opacity="0.5"
      />

      {/* 5-Twin-Spoke Forged Alloy Wheel Rim Design (10 spokes total) */}
      <g opacity="0.92">
        {/* Main Primary Spokes rotated 72 deg apart */}
        {[0, 72, 144, 216, 288].map((angle) => (
          <g key={`main-${angle}`} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M 96,61 L 97.5,24 L 102.5,24 L 104,61 Z"
              fill="currentColor"
            />
          </g>
        ))}

        {/* Secondary Twin Blade Spokes */}
        {[36, 108, 180, 252, 324].map((angle) => (
          <g key={`twin-${angle}`} transform={`rotate(${angle} 100 100)`}>
            <path
              d="M 98,61 L 99,26 L 101,26 L 102,61 Z"
              fill="currentColor"
              opacity="0.75"
            />
          </g>
        ))}
      </g>

      {/* Center Hub & Wheel Bearing Collar */}
      <circle
        cx="100"
        cy="100"
        r="23"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.95"
      />
      <circle
        cx="100"
        cy="100"
        r="15"
        fill="currentColor"
        opacity="0.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* 5 Wheel Lug Nuts (Titanium Hex Bolt Heads) */}
      <circle cx="100" cy="87" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="112" cy="96" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="107" cy="110" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="93" cy="110" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="88" cy="96" r="2.5" fill="currentColor" opacity="0.9" />

      {/* Center Wheel Cap Badge Pip */}
      <circle cx="100" cy="100" r="5.5" fill="currentColor" />
    </svg>
  );
}
