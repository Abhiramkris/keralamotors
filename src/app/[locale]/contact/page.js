"use client";

import { useState, use } from "react";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

export default function LocalizedContactPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 4rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%", background: "transparent", direction: isArabic ? "rtl" : "ltr" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="animate-fade-in">
          <SectionTag text={t.contact.tag} isArabic={isArabic} />
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1rem", letterSpacing: "-1px", color: "#18181b" }}>
            {isArabic ? "اتصل بنا" : t.contact.title}
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "550px", margin: "0 auto", lineHeight: "1.6" }}>
            {t.contact.desc}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start", direction: isArabic ? "rtl" : "ltr" }}>
          
          {/* Info Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: isArabic ? "right" : "left" }}>
            <div className="glass" style={{ padding: "2.5rem 2rem", borderRadius: "8px", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1.5rem", color: "#18181b" }}>{t.contact.direct}</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexDirection: isArabic ? "row-reverse" : "row" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.contact.phoneLabel}</span>
                    <a href="tel:+96871717259" style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", transition: "var(--transition)" }} className="contact-link">
                      +968 71717259
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexDirection: isArabic ? "row-reverse" : "row" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", flexShrink: 0 }}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.contact.waLabel}</span>
                    <a href="https://wa.me/96897420425" target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", transition: "var(--transition)" }} className="contact-link">
                      +968 97420425
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexDirection: isArabic ? "row-reverse" : "row" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.contact.emailLabel}</span>
                    <a href="mailto:info@keralamotor.om" style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", transition: "var(--transition)" }} className="contact-link">
                      info@keralamotor.om
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass" style={{ padding: "2.5rem 2rem", borderRadius: "8px", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "#18181b" }}>{t.contact.hoursTitle}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", whiteSpace: "pre-line" }}>
                {t.contact.hoursDesc}
              </p>
            </div>

            <div style={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--card-border)",
              height: "250px"
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.480088921865!2d58.5587781!3d23.5511874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff6cf7dbad9b%3A0x6b72a6b2ea82697c!2sAl%20Wadi%20Al%20Kabir%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="glass" style={{ padding: "3rem 2rem", borderRadius: "8px", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1.5rem", color: "#18181b", textAlign: isArabic ? "right" : "left" }}>
              {t.contact.sendMsg}
            </h3>
            
            {submitted ? (
              <div style={{ padding: "2rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "6px", border: "1px solid var(--success)", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", color: "var(--success)" }}>✓</span>
                <h4 style={{ color: "#18181b", marginTop: "0.5rem" }}>{t.contact.successTitle}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                  {t.contact.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: isArabic ? "right" : "left" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.contact.nameLabel}</label>
                  <input 
                    type="text"
                    required
                    placeholder={isArabic ? "مثال: سليم" : "e.g., Salim"}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem",
                      textAlign: isArabic ? "right" : "left"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.contact.emailLabelField}</label>
                  <input 
                    type="email"
                    required
                    placeholder={isArabic ? "مثال: salim@example.com" : "e.g., salim@example.com"}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem",
                      textAlign: isArabic ? "right" : "left"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.contact.subjectLabel}</label>
                  <input 
                    type="text"
                    required
                    placeholder={isArabic ? "مثال: استفسار حول الصيانة" : "e.g., Booking request details"}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem",
                      textAlign: isArabic ? "right" : "left"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.contact.msgLabel}</label>
                  <textarea 
                    rows="4"
                    required
                    placeholder={isArabic ? "اكتب تفاصيل رسالتك..." : "Enter details..."}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem", resize: "none",
                      textAlign: isArabic ? "right" : "left"
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  {t.contact.submitBtn}
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
