"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations } from "./translations";

export default function Footer() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const locale = isArabic ? "ar" : "en";
  const t = translations[locale].footer;

  const getLocalizedPath = (path) => {
    return `/${locale}${path}`;
  };

  return (
    <footer className="main-footer glass" style={{
      borderTop: "1px solid var(--card-border)",
      padding: "4rem 2rem 2rem 2rem",
      marginTop: "auto"
    }}>
      <div style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "3rem",
        marginBottom: "3rem",
        direction: isArabic ? "rtl" : "ltr"
      }}>
        {/* Company Info */}
        <div style={{ textAlign: isArabic ? "right" : "left" }}>
          <Image 
            src="/kerala_motors_logo_transparent.png" 
            alt="Kerala Auto Motors Logo" 
            width={180} 
            height={55} 
            style={{ objectFit: "contain", marginBottom: "1.5rem" }}
          />
          <p style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            lineHeight: "1.6",
            marginBottom: "1.5rem"
          }}>
            {t.desc}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: isArabic ? "flex-start" : "flex-start" }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
              width: "38px", height: "38px", borderRadius: "50%", background: "rgba(0,0,0,0.05)",
              border: "1px solid var(--card-border)",
              display: "flex", alignItems: "center", justifyContent: "center", transition: "var(--transition)"
            }} className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
              width: "38px", height: "38px", borderRadius: "50%", background: "rgba(0,0,0,0.05)",
              border: "1px solid var(--card-border)",
              display: "flex", alignItems: "center", justifyContent: "center", transition: "var(--transition)"
            }} className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ textAlign: isArabic ? "right" : "left" }}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1.5rem", color: "var(--foreground)" }}>{t.contact}</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexDirection: isArabic ? "row-reverse" : "row" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ marginTop: "3px" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <strong>{isArabic ? "دعم الاتصال:" : "Call Support:"}</strong>
                <a href="tel:+96871717259" style={{ display: "block", color: "var(--foreground)", marginTop: "2px", transition: "var(--transition)" }} className="footer-link">+968 71717259</a>
              </div>
            </li>
            <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexDirection: isArabic ? "row-reverse" : "row" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ marginTop: "3px" }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <div>
                <strong>{isArabic ? "واتساب:" : "WhatsApp:"}</strong>
                <a href="https://wa.me/96897420425" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "var(--foreground)", marginTop: "2px", transition: "var(--transition)" }} className="footer-link">+968 97420425</a>
              </div>
            </li>
            <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexDirection: isArabic ? "row-reverse" : "row" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ marginTop: "3px" }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong>{isArabic ? "البريد الإلكتروني:" : "Email:"}</strong>
                <a href="mailto:info@keralamotor.om" style={{ display: "block", color: "var(--foreground)", marginTop: "2px", transition: "var(--transition)" }} className="footer-link">info@keralamotor.om</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Location & Hours */}
        <div style={{ textAlign: isArabic ? "right" : "left" }}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1.5rem", color: "var(--foreground)" }}>{t.location}</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1rem" }}>
            {isArabic ? (
              <>
                شاطئ الراحة الحديث،<br />
                الوادي الكبير، مسقط،<br />
                سلطنة عمان.
              </>
            ) : (
              <>
                Modern Raha Beach,<br />
                Al Wadi Al Kabir, Muscat,<br />
                Sultanate of Oman.
              </>
            )}
          </p>
          <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--foreground)" }}>{isArabic ? "ساعات العمل:" : "Business Hours:"}</strong>
            <p style={{ marginTop: "2px" }}>{isArabic ? "السبت - الخميس: ٨:٠٠ صباحًا - ٨:٠٠ مساءً" : "Saturday - Thursday: 8:00 AM - 8:00 PM"}</p>
            <p style={{ color: "var(--accent)", marginTop: "4px" }}>{isArabic ? "الجمعة: مغلق" : "Friday: Closed"}</p>
          </div>
        </div>

        {/* Find Us */}
        <div style={{ textAlign: isArabic ? "right" : "left" }}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1.5rem", color: "var(--foreground)" }}>{t.find}</h4>
          <div style={{
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
            height: "150px",
            position: "relative"
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.480088921865!2d58.5587781!3d23.5511874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff6cf7dbad9b%3A0x6b72a6b2ea82697c!2sAl%20Wadi%20Al%20Kabir%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(0.5) contrast(1.1)" }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        borderTop: "1px solid var(--card-border)",
        paddingTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
        fontSize: "0.85rem",
        color: "var(--text-muted)",
        flexDirection: isArabic ? "row-reverse" : "row"
      }}>
        <p>{t.rights}</p>
        <div style={{ display: "flex", gap: "1.5rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
          <Link href={getLocalizedPath("/services")} className="footer-link">{isArabic ? "خدماتنا" : "Services"}</Link>
          <Link href={getLocalizedPath("/about")} className="footer-link">{isArabic ? "من نحن" : "About"}</Link>
          <Link href={getLocalizedPath("/contact")} className="footer-link">{isArabic ? "اتصل بنا" : "Contact"}</Link>
          <Link href={getLocalizedPath("/privacy")} className="footer-link">{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
        </div>
      </div>
    </footer>
  );
}
