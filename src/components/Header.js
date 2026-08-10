"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { translations } from "./translations";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);

  // Detect current locale
  const isArabic = pathname.startsWith("/ar");
  const locale = isArabic ? "ar" : "en";
  const t = translations[locale].nav;

  // Toggle Language Handler
  const toggleLanguage = () => {
    let newPathname = "";
    if (isArabic) {
      // Switch to English: Remove /ar prefix
      newPathname = pathname.replace(/^\/ar/, "/en");
    } else {
      // Switch to Arabic: Replace /en with /ar or prepend /ar
      newPathname = pathname.startsWith("/en") 
        ? pathname.replace(/^\/en/, "/ar") 
        : `/ar${pathname}`;
    }
    router.push(newPathname || "/en");
    setIsMobileMenuOpen(false);
    setIsCtaDropdownOpen(false);
  };

  const getLocalizedPath = (path) => {
    if (path.startsWith("/#")) {
      return `/${locale}${path.substring(1)}`;
    }
    return `/${locale}${path}`;
  };

  const navItems = [
    { name: t.home, path: "" },
    { name: t.services, path: "/services" },
    { name: t.brands, path: "/#brands" },
    { name: translations[locale].nav.about, path: "/about" },
    { name: t.contact, path: "/contact" }
  ];

  return (
    <header className="main-header glass" style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      width: "100%",
      borderBottom: "1px solid var(--card-border)",
      transition: "var(--transition)"
    }}>
      <div style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: isArabic ? "row-reverse" : "row",
        position: "relative"
      }}>
        {/* Navigation (Desktop) */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center", flexDirection: isArabic ? "row-reverse" : "row" }} className="header-nav">
          {navItems.map((item) => {
            const fullPath = getLocalizedPath(item.path);
            const isActive = pathname === fullPath || (item.path === "" && pathname === `/${locale}`);
            return (
              <Link 
                key={item.path} 
                href={fullPath}
                className={`nav-link ${isActive ? "active" : ""}`}
                style={{ fontSize: "0.95rem" }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Utility */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
          
          {/* Desktop Language Switcher */}
          <button 
            onClick={toggleLanguage} 
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid var(--card-border)",
              color: "white",
              padding: "0.5rem 0.85rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.8rem",
              transition: "var(--transition)"
            }}
            className="lang-selector-btn"
          >
            {t.langToggle}
          </button>

          {/* Mobile Language Globe Icon */}
          <button 
            onClick={toggleLanguage} 
            aria-label="Change Language"
            style={{
              background: "rgba(225,29,72,0.05)",
              border: "1px solid rgba(225,29,72,0.15)",
              color: "var(--accent, #e11d48)",
              padding: "0.5rem",
              borderRadius: "50%",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px"
            }}
            className="lang-selector-mobile-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          {/* Dropdown CTA Button (Red Box, White Call Icon) */}
          <div style={{ position: "relative" }}>
            <button 
              onClick={() => { setIsCtaDropdownOpen(!isCtaDropdownOpen); setIsMobileMenuOpen(false); }}
              style={{
                background: "var(--accent, #e11d48)",
                border: "none",
                color: "#ffffff",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(225, 29, 72, 0.2)",
                transition: "all 0.3s ease"
              }}
              aria-label="Contact Options"
              className="cta-dropdown-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </button>

            {isCtaDropdownOpen && (
              <div style={{
                position: "absolute",
                top: "100%",
                [isArabic ? "left" : "right"]: 0,
                marginTop: "0.5rem",
                background: "#ffffff",
                border: "1px solid var(--card-border, #e4e4e7)",
                borderRadius: "8px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                padding: "0.5rem",
                width: "200px",
                zIndex: 150,
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem"
              }} className="animate-fade-in">
                {/* Call Option */}
                <a 
                  href="tel:+96871717259" 
                  onClick={() => setIsCtaDropdownOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "6px",
                    color: "#18181b",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    transition: "background 0.2s ease",
                    flexDirection: isArabic ? "row-reverse" : "row"
                  }}
                  className="dropdown-item-hover"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent, #e11d48)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{isArabic ? "اتصال هاتف" : "Call Support"}</span>
                </a>
                
                {/* WhatsApp Option */}
                <a 
                  href="https://wa.me/96897420425" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsCtaDropdownOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "6px",
                    color: "#18181b",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    transition: "background 0.2s ease",
                    flexDirection: isArabic ? "row-reverse" : "row"
                  }}
                  className="dropdown-item-hover"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.326 1.967 13.863.94 11.245.94 5.808.94 1.387 5.31 1.383 10.74c-.001 1.745.463 3.447 1.345 4.95l-.994 3.633 3.733-.967c1.478.807 3.013 1.221 4.58 1.221zM17.9 14.18c-.3-.15-1.77-.872-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.972-.94 1.172-.17.2-.34.22-.64.07-1.125-.565-2.046-1.258-2.836-2.1-.66-.7-.2-1.17.07-1.37.15-.1.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.107 3.218 5.104 4.513.713.308 1.27.492 1.703.63.717.228 1.368.196 1.883.119.574-.085 1.77-.723 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.155-.275-.25-.575-.4z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                
                {/* Book Assistance Option */}
                <Link 
                  href={`/${locale}/book-appointment`} 
                  onClick={() => setIsCtaDropdownOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "6px",
                    color: "#18181b",
                    fontSize: "0.85rem",
                    fontWeight: "700",
                    transition: "background 0.2s ease",
                    flexDirection: isArabic ? "row-reverse" : "row"
                  }}
                  className="dropdown-item-hover"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{isArabic ? "حجز مساعدة" : "Book Assistance"}</span>
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button 
            onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsCtaDropdownOpen(false); }} 
            aria-label="Toggle Menu"
            style={{
              background: "none",
              border: "none",
              color: "var(--foreground, #18181b)",
              cursor: "pointer",
              padding: "0.5rem",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 110
            }}
            className="hamburger-btn"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-dropdown glass animate-fade-in" style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--card-border)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            zIndex: 99,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            textAlign: isArabic ? "right" : "left",
            direction: isArabic ? "rtl" : "ltr"
          }}>
            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {navItems.map((item) => {
                const fullPath = getLocalizedPath(item.path);
                const isActive = pathname === fullPath || (item.path === "" && pathname === `/${locale}`);
                return (
                  <Link 
                    key={item.path} 
                    href={fullPath}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    style={{ fontSize: "1.1rem", fontWeight: "700", display: "block" }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Quick Actions (Call) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "0.5rem" }}>
              <a href="tel:+96871717259" style={{
                background: "#f4f4f5",
                border: "1px solid #e4e4e7",
                borderRadius: "8px",
                padding: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: "700",
                color: "#18181b",
                flexDirection: isArabic ? "row-reverse" : "row"
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{isArabic ? "اتصل بمركز المساعدة" : "Call Customer Support"}</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .header-nav {
            display: none !important;
          }
          .lang-selector-btn {
            display: none !important;
          }
          .hamburger-btn,
          .lang-selector-mobile-btn {
            display: flex !important;
          }
        }
        .dropdown-item-hover:hover {
          background-color: #f4f4f5 !important;
        }
      `}</style>
    </header>
  );
}
