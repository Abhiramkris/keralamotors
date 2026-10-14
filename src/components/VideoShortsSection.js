"use client";

import { useState, useEffect, useRef } from "react";
import SectionTag from "@/components/SectionTag";
import shortsData from "@/data/shorts.json";
import { translations } from "@/components/translations";

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return "";
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const match = trimmed.match(/(?:shorts\/|v\/|watch\?v=|youtu\.be\/|\/embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : trimmed;
}

function ShortCard({ item, isArabic }) {
  const videoId = extractYouTubeId(item.id || item.url);
  const title = isArabic ? (item.titleAr || item.title || "فيديو ورشة العمل") : (item.title || "Workshop Short");
  const cardRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    // Use IntersectionObserver to lazy load the iframe when approaching viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      ref={cardRef}
      className="short-card"
      style={{
        flexShrink: 0,
        width: "290px",
        height: "515px",
        scrollSnapAlign: "center",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        background: "#09090b",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {/* Video / Poster Container */}
      <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}>
        {isIntersecting ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&loop=1&playlist=${videoId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block"
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.9)"
            }}
          />
        )}
      </div>

      {/* Subtle overlay header gradient */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1rem",
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "none"
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: "700",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#ffffff",
            background: "rgba(225, 29, 72, 0.85)",
            padding: "4px 10px",
            borderRadius: "9999px",
            backdropFilter: "blur(6px)"
          }}
        >
          {isArabic ? "شورتس" : "Shorts"}
        </span>

        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      </div>

      {/* Subtle overlay footer gradient */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.25rem 1rem",
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          color: "#ffffff",
          pointerEvents: "none"
        }}
      >
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: "600",
            lineHeight: "1.4",
            margin: 0,
            textShadow: "0 1px 3px rgba(0,0,0,0.8)"
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default function VideoShortsSection({ locale = "en", isArabic = false }) {
  const t = translations[locale] || translations.en;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    // Account for potential sub-pixel offsets and RTL
    const maxScroll = scrollWidth - clientWidth;
    setCanScrollLeft(Math.abs(scrollLeft) > 10);
    setCanScrollRight(Math.abs(scrollLeft) < maxScroll - 10);
  };

  useEffect(() => {
    checkScroll();
    const scroller = scrollRef.current;
    if (scroller) {
      scroller.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll, { passive: true });
    }
    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const distance = 320;
    const scrollValue = direction === "left" ? -distance : distance;
    const adjustedScroll = isArabic ? -scrollValue : scrollValue;
    scrollRef.current.scrollBy({ left: adjustedScroll, behavior: "smooth" });
  };

  if (!shortsData || shortsData.length === 0) {
    return null;
  }

  return (
    <section
      id="shorts"
      style={{
        padding: "5.5rem 1.5rem",
        background: "#f9fafb",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
            flexDirection: isArabic ? "row-reverse" : "row"
          }}
        >
          <div style={{ maxWidth: "620px", textAlign: isArabic ? "right" : "left" }}>
            <SectionTag
              text={t.shorts?.tag || (isArabic ? "فيديوهات قصيرة" : "Shorts & Reels")}
              isArabic={isArabic}
            />
            <h2
              style={{
                fontSize: "2.35rem",
                fontWeight: "800",
                marginTop: "0.5rem",
                color: "#18181b",
                letterSpacing: "-0.5px"
              }}
            >
              {t.shorts?.title || (isArabic ? "شاهد أعمالنا الميدانية" : "Workshop In Action")}
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                margin: "0.75rem 0 0 0",
                lineHeight: "1.6",
                fontSize: "1rem"
              }}
            >
              {t.shorts?.subtitle ||
                (isArabic
                  ? "فيديوهات حصرية توثق الدقة الهندسية والتقنيات الحديثة في فحص وصيانة السيارات الفاخرة."
                  : "Watch our certified technicians at work with high-precision repairs, diagnostics, and vehicle restoration.")}
            </p>
          </div>

          {/* Navigation Controls (Arrows) */}
          {shortsData.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "center",
                flexDirection: isArabic ? "row-reverse" : "row"
              }}
            >
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Previous video"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                  color: "#18181b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease"
                }}
                className="scroll-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Next video"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                  color: "#18181b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease"
                }}
                className="scroll-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "1.5rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            padding: "0.5rem 0.25rem 1.5rem 0.25rem",
            WebkitOverflowScrolling: "touch",
            direction: isArabic ? "rtl" : "ltr",
            justifyContent: shortsData.length === 1 ? "center" : "flex-start"
          }}
          className="shorts-scroll-container"
        >
          {shortsData.map((item, index) => (
            <ShortCard key={item.id || item.url || index} item={item} isArabic={isArabic} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .shorts-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
        .shorts-scroll-container::-webkit-scrollbar {
          height: 6px;
        }
        .shorts-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .shorts-scroll-container::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .shorts-scroll-container::-webkit-scrollbar-thumb:hover {
          background: var(--accent, #e11d48);
        }
        .short-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.15);
          border-color: rgba(225, 29, 72, 0.4);
        }
        .scroll-btn:hover {
          border-color: var(--accent, #e11d48);
          color: var(--accent, #e11d48);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
