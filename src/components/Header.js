"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { translations } from "./translations";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

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
        flexDirection: isArabic ? "row-reverse" : "row"
      }}>
        {/* Logo */}
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image 
            src="/kerala_motors_logo_transparent.png" 
            alt="Kerala Auto Motors Logo" 
            width={160} 
            height={50} 
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Navigation */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
          <a href="tel:+96871717259" style={{
            color: "var(--foreground)",
            fontWeight: "600",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "var(--transition)",
            flexDirection: isArabic ? "row-reverse" : "row"
          }} className="phone-nav-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="desktop-only">{t.phone}</span>
          </a>

          <a href="https://wa.me/96897420425" target="_blank" rel="noopener noreferrer" style={{
            color: "#25D366",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.326 1.967 13.863.94 11.245.94 5.808.94 1.387 5.31 1.383 10.74c-.001 1.745.463 3.447 1.345 4.95l-.994 3.633 3.733-.967c1.478.807 3.013 1.221 4.58 1.221zM17.9 14.18c-.3-.15-1.77-.872-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.972-.94 1.172-.17.2-.34.22-.64.07-1.125-.565-2.046-1.258-2.836-2.1-.66-.7-.2-1.17.07-1.37.15-.1.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.107 3.218 5.104 4.513.713.308 1.27.492 1.703.63.717.228 1.368.196 1.883.119.574-.085 1.77-.723 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.155-.275-.25-.575-.4z"/>
            </svg>
          </a>

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
        </div>
      </div>
    </header>
  );
}
