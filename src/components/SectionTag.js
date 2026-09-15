import React from "react";

export default function SectionTag({ text, isArabic = false, color = "var(--accent)", barColor = "var(--accent)" }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "0.75rem",
      flexDirection: isArabic ? "row-reverse" : "row"
    }}>
      {/* Three Slanted Bars */}
      <div style={{ 
        display: "inline-flex", 
        gap: "3px",
        flexDirection: isArabic ? "row-reverse" : "row"
      }}>
        {[1, 2, 3].map((i) => (
          <span 
            key={i} 
            style={{ 
              width: "4px", 
              height: "16px", 
              background: barColor, 
              transform: isArabic ? "skewX(20deg)" : "skewX(-20deg)",
              display: "inline-block"
            }} 
          />
        ))}
      </div>
      
      {/* Label Text */}
      <span style={{
        fontSize: "0.92rem",
        fontWeight: "800",
        letterSpacing: "3px",
        color: color,
        textTransform: "uppercase"
      }}>
        {text}
      </span>
    </div>
  );
}
