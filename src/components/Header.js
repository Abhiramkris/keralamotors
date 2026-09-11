"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { translations } from "./translations";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Detect current locale
  const isArabic = pathname.startsWith("/ar");
  const locale = isArabic ? "ar" : "en";
  const t = translations[locale].nav;

  const serviceCategories = [
    {
      title: isArabic ? "صيانة عامة" : "General Maintenance",
      slug: "general-maintenance",
      desc: isArabic ? "تغيير الزيت والفحص والرعاية الوقائية" : "Oil Change, Inspection & Preventive Care"
    },
    {
      title: isArabic ? "خدمات المحرك" : "Engine Services",
      slug: "engine-repair",
      desc: isArabic ? "تشخيصات متقدمة وحلول إصلاح المحرك" : "Advanced diagnostics & engine repair solutions"
    },
    {
      title: isArabic ? "خدمات ناقل الحركة" : "Transmission Services",
      slug: "transmission-service",
      desc: isArabic ? "تغيير سائل ناقل الحركة وإصلاحه وتوضيبه" : "Transmission fluid change, repair & rebuild"
    },
    {
      title: isArabic ? "خدمات الفرامل" : "Brake Services",
      slug: "brake-repair",
      desc: isArabic ? "فحص الفرامل واستبدالها وصيانة ABS" : "Brake inspection, replacement & ABS tuning"
    },
    {
      title: isArabic ? "نظام التعليق والتوجيه" : "Suspension & Steering",
      slug: "suspension-steering",
      desc: isArabic ? "صيانة خبيرة لأنظمة التعليق الهوائي Airmatic" : "Expert suspension and airmatic system tuning"
    },
    {
      title: isArabic ? "الأنظمة الكهربائية والإلكترونية" : "Electrical & Electronics",
      slug: "electrical-electronics",
      desc: isArabic ? "تشخيص وبرمجة عقول السيارات ECU و SCN" : "ECU diagnostics, coding & programming"
    },
    {
      title: isArabic ? "تكييف الهواء" : "Air Conditioning",
      slug: "air-conditioning",
      desc: isArabic ? "تعبئة غاز المكيف وصيانة نظام التكييف بالكامل" : "AC gas recharge & complete climate control service"
    },
    {
      title: isArabic ? "الإطارات والعجلات" : "Tires & Wheels",
      slug: "tires-wheels",
      desc: isArabic ? "استبدال الإطارات الفاخرة، إصلاح الجنوط، والنيتروجين" : "Tire replacement, alloy wheel repair & nitrogen"
    },
    {
      title: isArabic ? "هيكل وطلاء السيارات" : "Body & Paint",
      slug: "body-paint",
      desc: isArabic ? "إصلاح ضربات الصاج ورش وطلاء بجودة الوكالة" : "Denting, panel beating & showroom-quality painting"
    },
    {
      title: isArabic ? "العناية والحماية الفائقة" : "Detailing & Protection",
      slug: "detailing-protection",
      desc: isArabic ? "تنظيف داخلي عميق وتصحيح الطلاء وحماية السيراميك" : "Interior deep cleaning, paint correction & ceramic coating"
    },
    {
      title: isArabic ? "خدمات السيارات الفاخرة والأداء العالي" : "Luxury & Performance Services",
      slug: "luxury-performance",
      desc: isArabic ? "ترقية أنظمة العادم والتعليق وصيانة السوبركار" : "Exhaust upgrades, suspension tuning & supercar care"
    },
    {
      title: isArabic ? "خدمات الطوارئ والمساعدة" : "Emergency Services",
      slug: "emergency-services",
      desc: isArabic ? "اشتراك البطارية، المساعدة على الطريق، والسطحات 24/7" : "Battery jump start, roadside assistance & flatbed towing"
    },
    {
      title: isArabic ? "خدمات إضافية وتجهيزات" : "Additional Services",
      slug: "additional-services",
      desc: isArabic ? "تركيب الإكسسوارات الفاخرة، التظليل، وتنجيد المقاعد" : "Accessories installation, window tinting & upholstery"
    }
  ];

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

  const switchLanguage = (targetLang) => {
    if (targetLang === "ar" && !isArabic) {
      const newPathname = pathname.startsWith("/en") 
        ? pathname.replace(/^\/en/, "/ar") 
        : `/ar${pathname}`;
      router.push(newPathname || "/ar");
    } else if (targetLang === "en" && isArabic) {
      const newPathname = pathname.replace(/^\/ar/, "/en");
      router.push(newPathname || "/en");
    }
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
    { name: t.blog, path: "/blog" },
    { name: t.contact, path: "/contact" }
  ];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      width: "100%",
      transition: "var(--transition)"
    }}>
      {/* Top Bar matching reference */}
      <div className="header-topbar">
        <div className="header-topbar-inner" style={{
          flexDirection: isArabic ? "row-reverse" : "row"
        }}>
          {/* Left: Email & Our Locations */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexDirection: isArabic ? "row-reverse" : "row"
          }}>
            {/* Email */}
            <a 
              href="mailto:info@keralamotor.om"
              className="topbar-link"
              aria-label="Email: info@keralamotor.om"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#e11d48" style={{ flexShrink: 0 }}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@keralamotor.om</span>
            </a>

            {/* Location */}
            <Link 
              href={`/${locale}/contact`}
              className="topbar-link topbar-location"
              aria-label={t.locations || (isArabic ? "مواقعنا" : "Our Locations")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#e11d48" style={{ flexShrink: 0 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>{t.locations || (isArabic ? "مواقعنا" : "Our Locations")}</span>
            </Link>
          </div>

          {/* Right: Language switchers & Social media */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            flexDirection: isArabic ? "row-reverse" : "row"
          }}>
            {/* Language Switchers */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              direction: "ltr"
            }}>
              {/* English */}
              <button
                type="button"
                onClick={() => switchLanguage("en")}
                className={`topbar-lang-btn ${!isArabic ? "active" : ""}`}
                aria-label="Switch to English"
              >
                <svg width="18" height="12" viewBox="0 0 60 30" style={{ borderRadius: "2px", overflow: "hidden", display: "block" }}>
                  <clipPath id="topbar-uk-clip">
                    <path d="M0,0 v30 h60 v-30 z"/>
                  </clipPath>
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#topbar-uk-clip)"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </svg>
                <span>English</span>
              </button>

              {/* Arabic */}
              <button
                type="button"
                onClick={() => switchLanguage("ar")}
                className={`topbar-lang-btn topbar-lang-ar ${isArabic ? "active" : ""}`}
                aria-label="التبديل إلى العربية"
              >
                <svg width="18" height="12" viewBox="0 0 600 300" style={{ borderRadius: "2px", overflow: "hidden", display: "block" }}>
                  <rect width="600" height="100" fill="#ffffff" />
                  <rect y="100" width="600" height="100" fill="#db161e" />
                  <rect y="200" width="600" height="100" fill="#008000" />
                  <rect width="150" height="300" fill="#db161e" />
                  <g fill="#ffffff" transform="translate(35, 20) scale(0.65)">
                    <path d="M35 15 L35 75 M15 35 L75 35" stroke="#ffffff" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M20 20 L65 65 M65 20 L20 65" stroke="#ffffff" strokeWidth="5" strokeLinecap="round"/>
                  </g>
                </svg>
                <span>العربية</span>
              </button>
            </div>

            {/* Social Icons matching reference */}
            <div className="topbar-socials" style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              direction: "ltr"
            }}>
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="Facebook"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="X (Twitter)"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="LinkedIn"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="YouTube"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="TikTok"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/96897420425" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="topbar-social-btn"
                aria-label="WhatsApp"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.326 1.967 13.863.94 11.245.94 5.808.94 1.387 5.31 1.383 10.74c-.001 1.745.463 3.447 1.345 4.95l-.994 3.633 3.733-.967c1.478.807 3.013 1.221 4.58 1.221zM17.9 14.18c-.3-.15-1.77-.872-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.972-.94 1.172-.17.2-.34.22-.64.07-1.125-.565-2.046-1.258-2.836-2.1-.66-.7-.2-1.17.07-1.37.15-.1.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.107 3.218 5.104 4.513.713.308 1.27.492 1.703.63.717.228 1.368.196 1.883.119.574-.085 1.77-.723 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.155-.275-.25-.575-.4z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-header glass" style={{
        borderBottom: "1px solid var(--card-border)",
        transition: "var(--transition)",
        width: "100%"
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
        {/* Logo */}
        <Link href={`/${locale}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} onClick={() => { setIsMobileMenuOpen(false); setIsCtaDropdownOpen(false); }}>
          <Image 
            src="/kerala_motors_logo_transparent.png" 
            alt="Kerala Auto Motors Logo" 
            width={160} 
            height={50} 
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Navigation (Desktop) */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center", flexDirection: isArabic ? "row-reverse" : "row" }} className="header-nav">
          {navItems.map((item) => {
            if (item.path === "/services") {
              const fullPath = getLocalizedPath(item.path);
              const isServicesActive = pathname.startsWith(`/${locale}/services`);
              return (
                <div
                  key="services-dropdown"
                  className="services-nav-container"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  style={{ position: "relative" }}
                >
                  <Link 
                    href={fullPath}
                    className={`nav-link ${isServicesActive ? "active" : ""}`}
                    style={{
                      fontSize: "0.95rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      flexDirection: isArabic ? "row-reverse" : "row"
                    }}
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isServicesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease"
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {isServicesDropdownOpen && (
                    <div
                      className="services-dropdown-menu animate-fade-in"
                      style={{
                        position: "absolute",
                        top: "100%",
                        [isArabic ? "right" : "left"]: "-40px",
                        paddingTop: "0.5rem",
                        zIndex: 250
                      }}
                    >
                      <div style={{
                        width: "560px",
                        maxWidth: "90vw",
                        background: "#ffffff",
                        borderRadius: "12px",
                        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.14), 0 0 1px 1px rgba(0, 0, 0, 0.06)",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        padding: "1.25rem",
                        direction: isArabic ? "rtl" : "ltr",
                        textAlign: isArabic ? "right" : "left",
                        maxHeight: "75vh",
                        overflowY: "auto"
                      }}>
                        {/* Header in dropdown */}
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingBottom: "0.75rem",
                          marginBottom: "0.75rem",
                          borderBottom: "1px solid #f4f4f5",
                          flexDirection: isArabic ? "row-reverse" : "row"
                        }}>
                          <span style={{
                            fontSize: "0.75rem",
                            fontWeight: "800",
                            color: "var(--accent, #e11d48)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                          }}>
                            {isArabic ? "خدماتنا المعتمدة" : "Certified Workshop Services"}
                          </span>
                          <Link
                            href={`/${locale}/services`}
                            onClick={() => setIsServicesDropdownOpen(false)}
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: "700",
                              color: "#18181b",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem"
                            }}
                            className="view-all-link"
                          >
                            <span>{isArabic ? "عرض جميع الخدمات" : "View All"}</span>
                            <span>{isArabic ? "←" : "→"}</span>
                          </Link>
                        </div>

                        {/* Services Grid (2 Columns) */}
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.5rem"
                        }}>
                          {serviceCategories.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/${locale}/services/${svc.slug}`}
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="dropdown-service-card"
                              style={{
                                padding: "0.65rem 0.85rem",
                                borderRadius: "8px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.2rem",
                                transition: "all 0.2s ease"
                              }}
                            >
                              <span style={{
                                fontSize: "0.88rem",
                                fontWeight: "700",
                                color: "#18181b",
                                lineHeight: 1.3
                              }} className="svc-card-title">
                                {svc.title}
                              </span>
                              <span style={{
                                fontSize: "0.75rem",
                                color: "#71717a",
                                lineHeight: 1.3
                              }}>
                                {svc.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

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
                if (item.path === "/services") {
                  const fullPath = getLocalizedPath(item.path);
                  const isServicesActive = pathname.startsWith(`/${locale}/services`);
                  return (
                    <div key="mobile-services-item" style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: isArabic ? "row-reverse" : "row"
                      }}>
                        <Link 
                          href={fullPath}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`nav-link ${isServicesActive ? "active" : ""}`}
                          style={{ fontSize: "1.1rem", fontWeight: "700" }}
                        >
                          {item.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          aria-label="Toggle Services List"
                          style={{
                            background: "rgba(0, 0, 0, 0.05)",
                            border: "none",
                            borderRadius: "6px",
                            padding: "0.35rem 0.6rem",
                            cursor: "pointer",
                            color: "#18181b",
                            display: "flex",
                            alignItems: "center"
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              transform: isMobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.25s ease"
                            }}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      </div>

                      {/* Expanded Mobile Services list */}
                      {isMobileServicesOpen && (
                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                          [isArabic ? "paddingRight" : "paddingLeft"]: "1rem",
                          borderInlineStart: "2px solid #e4e4e7",
                          marginTop: "0.25rem"
                        }} className="animate-fade-in">
                          <Link
                            href={`/${locale}/services`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                              fontSize: "0.85rem",
                              fontWeight: "700",
                              color: "var(--accent, #e11d48)",
                              padding: "0.2rem 0"
                            }}
                          >
                            {isArabic ? "← استكشف كافة الخدمات" : "Explore All Services →"}
                          </Link>
                          {serviceCategories.map((svc) => (
                            <Link
                              key={svc.slug}
                              href={`/${locale}/services/${svc.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              style={{
                                fontSize: "0.9rem",
                                color: "#52525b",
                                fontWeight: "500",
                                padding: "0.2rem 0"
                              }}
                              className="mobile-sub-link"
                            >
                              {svc.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

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
