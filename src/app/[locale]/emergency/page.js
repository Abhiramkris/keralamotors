"use client";

import { useState, use } from "react";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

export default function LocalizedEmergencyPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  const [sent, setSent] = useState(false);
  const [loc, setLoc] = useState("");

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        setLoc(coords);
      }, () => {
        alert(isArabic ? "فشل تحديد الموقع. يرجى كتابة موقعك الحالي أدناه." : "Unable to fetch GPS. Please write location below.");
      });
    } else {
      alert("Geolocation is not supported.");
    }
  };

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleWhatsAppEmergency = () => {
    const text = isArabic 
      ? `⚠️ طلب مساعدة طارئة على الطريق ⚠️\n\nإحداثيات الموقع الحالي: ${loc || "غير محدد"}`
      : `⚠️ EMERGENCY BREAKDOWN REQUEST ⚠️\n\nGPS Coordinates / Location: ${loc || "Not Shared"}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/96897420425?text=${encoded}`, "_blank");
  };

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 4rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%", background: "transparent", direction: isArabic ? "rtl" : "ltr" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="animate-fade-in">
          <SectionTag text={t.emergency.tag} isArabic={isArabic} />
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1rem", letterSpacing: "-1px", color: "#18181b" }}>
            {isArabic ? "دعم الأعطال الطارئة" : t.emergency.title}
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "550px", margin: "0 auto", lineHeight: "1.6" }}>
            {t.emergency.desc}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
          
          {/* Rapid Call */}
          <div className="glass" style={{ padding: "3rem 2rem", borderRadius: "8px", border: "1px solid var(--accent)", position: "relative", background: "#f8f9fa" }}>
            <span style={{
              position: "absolute", top: "-12px", [isArabic ? "left" : "right"]: "20px", background: "var(--accent)", color: "white", 
              padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: "700", borderRadius: "20px", textTransform: "uppercase"
            }}>
              {t.emergency.fastest}
            </span>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1.5rem", color: "#18181b", textAlign: isArabic ? "right" : "left" }}>
              {t.emergency.callNow}
            </h3>
            
            <a href="tel:+96871717259" className="btn btn-primary" style={{
              width: "100%", padding: "1.5rem", fontSize: "1.3rem", letterSpacing: "1px", display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", flexDirection: isArabic ? "row-reverse" : "row"
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {t.nav.phone}
            </a>
            
            <button 
              onClick={handleWhatsAppEmergency}
              className="btn btn-secondary" 
              style={{
                width: "100%", padding: "1.25rem", fontSize: "1.1rem", border: "1px solid #25D366", color: "#25D366", background: "rgba(37,211,102,0.05)",
                display: "flex", gap: "0.75rem", alignItems: "center", justifyContent: "center", flexDirection: isArabic ? "row-reverse" : "row"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              {t.emergency.waBtn}
            </button>
          </div>

          {/* Form */}
          <div className="glass" style={{ padding: "3rem 2rem", borderRadius: "8px", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1.5rem", color: "#18181b", textAlign: isArabic ? "right" : "left" }}>
              {t.emergency.sendTitle}
            </h3>
            
            {sent ? (
              <div style={{ padding: "2rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "6px", border: "1px solid var(--success)", textAlign: "center" }}>
                <span style={{ fontSize: "2rem" }}>✓</span>
                <h4 style={{ color: "#18181b", marginTop: "0.5rem" }}>{t.emergency.successTitle}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                  {t.emergency.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleEmergencySubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: isArabic ? "right" : "left" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.emergency.gpsLabel}</label>
                  <div style={{ display: "flex", gap: "0.5rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
                    <input 
                      type="text"
                      required
                      placeholder={t.emergency.gpsPlaceholder}
                      value={loc}
                      onChange={(e) => setLoc(e.target.value)}
                      style={{
                        flex: 1, padding: "0.75rem 1rem", background: "#ffffff", 
                        border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.9rem",
                        textAlign: isArabic ? "right" : "left"
                      }}
                    />
                    <button 
                      type="button"
                      onClick={handleShareLocation}
                      style={{
                        background: "#ffffff", border: "1px solid var(--card-border)", 
                        color: "#18181b", padding: "0 1rem", borderRadius: "4px", cursor: "pointer", fontSize: "0.85rem", fontWeight: "600"
                      }}
                    >
                      {t.emergency.gpsBtn}
                    </button>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.emergency.issueLabel}</label>
                  <input 
                    type="text"
                    required
                    placeholder={t.emergency.issuePlaceholder}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem",
                      textAlign: isArabic ? "right" : "left"
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", background: "#ef4444" }}>
                  {t.emergency.towBtn}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
