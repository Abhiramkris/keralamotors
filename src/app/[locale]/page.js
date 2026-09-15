"use client";

import { useState, useEffect, use, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import BlogEmbed from "@/components/BlogEmbed";

export default function LocalizedHomePage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  if (!t) {
    notFound();
  }

  // Brands list (Premium transparent logos mapped to auto-scrolling marquee)
  const europeanBrands = [
    { name: "Mercedes-Benz", logo: "/brands/mercedes-benz.png" },
    { name: "BMW", logo: "/brands/bmw.png" },
    { name: "Audi", logo: "/brands/audi.png" },
    { name: "Porsche", logo: "/brands/porsche.png" },
    { name: "Land Rover", logo: "/brands/land-rover.png" },
    { name: "Jaguar", logo: "/brands/jaguar.png" },
    { name: "Bentley", logo: "/brands/bentley.png" },
    { name: "Ferrari", logo: "/brands/ferrari.png" },
    { name: "Maserati", logo: "/brands/maserati.png" },
    { name: "Volvo", logo: "/brands/volvo.png" },
    { name: "Rolls-Royce", logo: "/brands/rolls-royce.png" },
    { name: "Aston Martin", logo: "/brands/aston-martin.png" }
  ];

  const americanBrands = [
    { name: "Ford", logo: "/brands/ford.png" },
    { name: "Chevrolet", logo: "/brands/chevrolet.png" },
    { name: "Jeep", logo: "/brands/jeep.png" },
    { name: "Cadillac", logo: "/brands/cadillac.png" }
  ];

  // Brands scroll ref
  const brandsScrollRef = useRef(null);

  const scrollBrands = (direction) => {
    if (brandsScrollRef.current) {
      const scrollAmount = 300;
      brandsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Slideshow configuration for Hero section (changes every 5 seconds)
  const slides = [
    {
      subtitle: t.hero.subtitle,
      title: isArabic ? (
        <>مركبتك الفاخرة <span style={{ color: "var(--accent)" }}>تستحق</span> رعاية <span style={{ color: "var(--accent)" }}>الخبراء</span>.</>
      ) : (
        <>Your Premium Vehicle <span style={{ color: "var(--accent)" }}>Deserves</span> <span style={{ color: "var(--accent)" }}>Expert</span> Care.</>
      ),
      desc: isArabic 
        ? "فنيون معتمدون لسيارات مرسيدس-بنز، بي إم دبليو، أودي، بورشه، لاند روفر وغيرها. خدمة بمستوى الوكالة وبدون سعر الوكالة المرتفع."
        : "Certified Technicians for Mercedes-Benz, BMW, Audi, Porsche, Land Rover and more. Dealership-level service without the dealership price tag.",
      img: "/hero_technician.jpg"
    },
    {
      subtitle: isArabic ? "تشخيصات بمستوى الوكلاء" : "Dealer-Grade Software Diagnostics",
      title: isArabic ? (
        <>أحدث البرمجيات و<span style={{ color: "var(--accent)" }}>أجهزة فحص</span> السيارات.</>
      ) : (
        <>Advanced <span style={{ color: "var(--accent)" }}>Software</span> & Code Scanning.</>
      ),
      desc: isArabic 
        ? "تشخيصات مرخصة ومبرمجة بالكامل باستخدام BMW ISTA و Mercedes Xentry. نحدد الأعطال الكهربائية بدقة متناهية."
        : "Licensed diagnostics and module programming using BMW ISTA and Mercedes Xentry. We pinpoint electrical faults with absolute factory accuracy.",
      img: "/service_ecu.jpg"
    },
    {
      subtitle: isArabic ? "أخصائيو ناقل الحركة والمحركات" : "Engine & Transmission Specialists",
      title: isArabic ? (
        <>توضيب دقيق لـ<span style={{ color: "var(--accent)" }}>المحرك</span> وناقل الحركة.</>
      ) : (
        <>Precision Engine & <span style={{ color: "var(--accent)" }}>Gearbox</span> Rebuilds.</>
      ),
      desc: isArabic 
        ? "معايرة هندسية خبيرة لعلب التروس المزدوجة ومتعددة السرعات المعقدة. نعيد قوة وعزم الدوران الطبيعي لسيارتك."
        : "Expert mechanical calibration for complex dual-clutch and multi-speed transmissions. We restore factory compression and smooth shift timings.",
      img: "/service_transmission.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Diagnostic software slider
  const softwares = [
    {
      title: isArabic ? "تشخيص ABRITES" : "ABRITES Diagnostics",
      description: isArabic
        ? "النظام الرائد لتعديل أمان المركبات، ومزامنة الوحدات، وبرمجة أجهزة الإرسال والاستقبال، ومطابقة حماية المكونات."
        : "Leading system for vehicle security modifications, module synchronization, transponder programming, and component protection matching.",
      iconSvg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      platform: "Multi-Brand Security Engine",
      image: "/diagnostics/abrites.png"
    },
    {
      title: isArabic ? "أوتيل MaxiSYS Ultra S2" : "Autel MaxiSYS Ultra S2",
      description: isArabic
        ? "وحدة تشخيص شاملة من الدرجة الأولى مع خرائط هيكلية النظام، وتمرير J2534، والتحليل الكامل للنظام الرقمي."
        : "Top-tier universal diagnostic console with system topology mapping, J2534 pass-thru, and complete digital system analysis.",
      iconSvg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      ),
      platform: "Universal Luxury Vehicle Coverage",
      image: "/diagnostics/autel.png"
    },
    {
      title: isArabic ? "تشخيص بي إم دبليو (ISTA)" : "BMW ISTA Diagnostics",
      description: isArabic 
        ? "واجهة تشخيص المصنع الرسمية لسيارات بي إم دبليو تتيح برمجة الوحدات وتعديل الكود والوصول للمخططات والتشخيص الدقيق."
        : "Official BMW factory diagnostic interface allowing module programming, vehicle coding, wiring diagrams access, and exact troubleshooting guides.",
      iconSvg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M12 7v4M12 11h.01" />
        </svg>
      ),
      platform: "BMW / MINI / Rolls-Royce",
      image: "/diagnostics/bmw-ista.png"
    },
    {
      title: isArabic ? "مرسيدس-بنز (Xentry)" : "Mercedes-Benz Xentry",
      description: isArabic
        ? "منصة تشخيص الأعطال وبرمجة (SCN) المتصلة مباشرة بخوادم المصنع لتنفيذ التعديلات الأمنية وبرمجة وحدات التحكم."
        : "Direct server-linked workshop diagnosis and SCN programming platform to execute security adaptions and flash control modules.",
      iconSvg: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      platform: "Mercedes-Benz / Smart / Maybach",
      image: "/diagnostics/mercedes-xentry.png"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % softwares.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + softwares.length) % softwares.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const previewServices = [
    {
      name: isArabic ? "صيانة عامة" : "General Maintenance",
      desc: isArabic ? "تغيير الزيت والفحص والرعاية الوقائية" : "Oil Change, Inspection & Preventive Care",
      price: isArabic ? "تبدأ من ٣٠ ر.ع." : "From 30 OMR",
      image: "/service_general.jpg",
      path: "/services/general-maintenance",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      name: isArabic ? "فحص وإصلاح المحرك" : "Engine Diagnostics & Repair",
      desc: isArabic ? "تشخيصات متقدمة وحلول إصلاح المحرك" : "Advanced diagnostics & engine repair solutions",
      price: isArabic ? "تبدأ من ٥٥ ر.ع." : "From 55 OMR",
      image: "/service_engine.jpg",
      path: "/services/engine-repair",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="7.5" rx="1.5" />
          <line x1="6" y1="4.5" x2="18" y2="4.5" />
          <line x1="6" y1="7" x2="18" y2="7" />
          <path d="M10 9.5v5.5a2.5 2.5 0 0 0 4 0V9.5" />
          <circle cx="12" cy="18" r="2.5" />
          <circle cx="12" cy="18" r="0.8" fill="currentColor" />
        </svg>
      )
    },
    {
      name: isArabic ? "صيانة ناقل الحركة" : "Transmission Service",
      desc: isArabic ? "تغيير سائل ناقل الحركة وإصلاحه وتوضيبه" : "Transmission fluid change, repair & rebuild",
      price: isArabic ? "تبدأ من ٧٥ ر.ع." : "From 75 OMR",
      image: "/service_transmission.jpg",
      path: "/services/transmission-service",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="2.5" />
          <path d="M8 2.5v2.5M8 11v2.5M2.5 8H5M11 8h2.5M4.1 4.1l1.8 1.8M10.1 10.1l1.8 1.8M4.1 11.9l1.8-1.8M10.1 5.9l1.8-1.8" />
          <circle cx="16" cy="16" r="2" />
          <path d="M16 11.5V13M16 19v1.5M11.5 16H13M19 16h1.5M12.8 12.8l1.1 1.1M18.1 18.1l1.1 1.1M12.8 19.2l1.1-1.1M18.1 13.9l1.1-1.1" />
        </svg>
      )
    },
    {
      name: isArabic ? "إصلاح الفرامل ونظام التعليق" : "Brake & Suspension Repair",
      desc: isArabic ? "فحص الفرامل واستبدالها وضبط نظام التعليق" : "Brake inspection, replacement & suspension tuning",
      price: isArabic ? "تبدأ من ٥٠ ر.ع." : "From 50 OMR",
      image: "/service_brake.jpg",
      path: "/services/suspension-steering",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="2.5" x2="17" y2="2.5" />
          <line x1="12" y1="2.5" x2="12" y2="5" />
          <path d="M7 5c0 1.5 10 1.5 10 3s-10 1.5-10 3 10 1.5 10 3-10 1.5-10 3 10 1.5 10 3" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="7" y1="22" x2="17" y2="22" />
        </svg>
      )
    },
    {
      name: isArabic ? "صيانة مكيف الهواء" : "AC Service (R-134a & R-1234yf)",
      desc: isArabic ? "تعبئة غاز المكيف وصيانة نظام التكييف بالكامل" : "AC gas refill & complete AC system service",
      price: isArabic ? "تبدأ من ٢٨ ر.ع." : "From 28 OMR",
      image: "/service_ac.jpg",
      path: "/services/air-conditioning",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="5" y1="19" x2="19" y2="5" />
          <path d="M8 6l4-3 4 3" />
          <path d="M8 18l4 3 4-3" />
          <path d="M6 8l-3 4 3 4" />
          <path d="M18 8l3 4-3 4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      name: isArabic ? "برمجة الأنظمة والكمبيوتر" : "Electrical & ECU Programming",
      desc: isArabic ? "تشخيص وبرمجة وبرمجة عقول السيارات" : "ECU diagnostics, coding & programming",
      price: isArabic ? "تبدأ من ٤٠ ر.ع." : "From 40 OMR",
      image: "/service_ecu.jpg",
      path: "/services/electrical-electronics",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 2v3M12 2v3M15 2v3" />
          <path d="M9 19v3M12 19v3M15 19v3" />
          <path d="M2 9h3M2 12h3M2 15h3" />
          <path d="M19 9h3M19 12h3M19 15h3" />
        </svg>
      )
    }
  ];

  const processes = [
    {
      step: "01",
      name: isArabic ? "جدولة الموعد" : "Appointment Scheduling",
      desc: isArabic 
        ? "احجز موعد خدمة سيارتك بسهولة عبر الإنترنت أو بالهاتف في الوقت الذي يناسبك."
        : "Book your car service appointment easily online or by phone at a time that suits you.",
      img: "/process_step1.jpg",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      step: "02",
      name: isArabic ? "الفحص الأولي" : "Initial Inspection",
      desc: isArabic
        ? "يقوم الفنيون بإجراء فحص شامل لتحديد أي مشاكل أو صيانة مطلوبة لسيارتك."
        : "Technicians perform a thorough inspection to identify any issues or required maintenance for your vehicle.",
      img: "/process_step2.jpg",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      step: "03",
      name: isArabic ? "استبدال الفلاتر" : "Filter Replacement",
      desc: isArabic
        ? "استبدال الفلاتر الأساسية (الهواء، الزيت، المقصورة) لتحسين أداء المحرك وجودة الهواء والكفاءة."
        : "Replace essential filters (air, oil, cabin) to improve engine performance, air quality, and efficiency.",
      img: "/process_step3.jpg",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <line x1="6" y1="8" x2="18" y2="8" />
          <line x1="6" y1="13" x2="18" y2="13" />
          <line x1="6" y1="17" x2="18" y2="17" />
        </svg>
      )
    },
    {
      step: "04",
      name: isArabic ? "الفحص النهائي" : "Final Inspection",
      desc: isArabic
        ? "إجراء فحص نهائي للتأكد من اكتمال كافة خدمات السيارة وجاهزيتها للطريق."
        : "Conduct a final check to ensure all car services are complete and the vehicle is ready for the road.",
      img: "/process_step4.jpg",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14h6" />
          <path d="M9 18h6" />
          <path d="M9 10h6" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{
        background: "#09090b",
        padding: "5.5rem 2rem 7rem 2rem",
        minHeight: "82vh",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        direction: isArabic ? "rtl" : "ltr",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Workshop Image with Professional Blend */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none"
        }}>
          <Image 
            src="/workshop_facade.jpg" 
            alt="Kerala Auto Motors Workshop Facade" 
            fill 
            priority 
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "brightness(0.38) contrast(1.15) saturate(1.05)",
              transform: "scale(1.02)"
            }}
          />
          {/* Multi-layer luxury dark gradients for professional seamless blend */}
          {/* Directional vignette to keep text 100% legible while revealing workshop facade & cars */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: isArabic
              ? "linear-gradient(270deg, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.88) 40%, rgba(9,9,11,0.55) 75%, rgba(9,9,11,0.7) 100%)"
              : "linear-gradient(90deg, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.88) 40%, rgba(9,9,11,0.55) 75%, rgba(9,9,11,0.7) 100%)"
          }} />
          {/* Top & bottom edge fading smoothly into navigation and adjacent section */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.15) 30%, rgba(9,9,11,0.3) 70%, #09090b 100%)"
          }} />
          {/* Subtle brand accent red glow */}
          <div style={{
            position: "absolute",
            top: "15%",
            [isArabic ? "left" : "right"]: "18%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(225,29,72,0.12) 0%, transparent 70%)"
          }} />
        </div>

        <div 
          key={currentSlide}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center"
          }} 
          className="animate-fade-in"
        >
          
          {/* Left Column (Text contents) */}
          <div style={{ textAlign: isArabic ? "right" : "left" }}>
            <SectionTag text={slides[currentSlide].subtitle} isArabic={isArabic} />
            <h1 style={{
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: "900",
              lineHeight: "1.15",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              letterSpacing: "-1.5px",
              color: "#ffffff"
            }}>
              {slides[currentSlide].title}
            </h1>
            <p style={{
              color: "#a1a1aa",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              marginBottom: "2.5rem",
              maxWidth: "520px"
            }}>
              {slides[currentSlide].desc}
            </p>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "flex-start",
              flexDirection: isArabic ? "row-reverse" : "row"
            }}>
              <Link href={`/${locale}/book-appointment`} className="btn btn-primary" style={{
                borderRadius: "30px", padding: "0.9rem 2rem", display: "flex", gap: "0.5rem", alignItems: "center"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {t.hero.ctaPrimary}
              </Link>
              
              <a href="tel:+96871717259" className="btn btn-secondary" style={{
                borderRadius: "30px", padding: "0.9rem 2rem", border: "1.5px solid rgba(255,255,255,0.25)",
                display: "flex", gap: "0.5rem", alignItems: "center", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right Column (Image Card with luxury glass rim) */}
          <div style={{
            position: "relative",
            width: "100%",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)"
          }}>
            <Image 
              src={slides[currentSlide].img} 
              alt="Professional Omani Technician working on car"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

        </div>

        {/* Slide Indicators */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.6rem",
          zIndex: 10
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: currentSlide === index ? "var(--accent)" : "rgba(255,255,255,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease"
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. SERVICES PREVIEW GRID (OUR PRECISION SOLUTIONS) */}
      <section id="services-preview" style={{ padding: "5rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", background: "#ffffff" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <SectionTag text={t.services.subtitle} isArabic={isArabic} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginTop: "0.5rem", color: "#18181b" }}>
            {isArabic ? "حلولنا الدقيقة" : t.services.title}
          </h2>
        </div>

        <div className="services-preview-grid">
          {previewServices.map((service, idx) => (
            <Link href={`/${locale}${service.path}`} key={idx} className="service-card">
              {/* Left content block (60% width) */}
              <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: "0.5rem", textAlign: isArabic ? "right" : "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%", background: "#e11d48", color: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    {service.iconSvg}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#18181b", lineHeight: "1.2" }}>{service.name}</h3>
                </div>
                  
                <p style={{ color: "#71717a", fontSize: "0.88rem", lineHeight: "1.5", margin: "0.25rem 0" }}>
                  {service.desc}
                </p>
              </div>

              {/* Right content block (Image 38% width) */}
              <div style={{
                width: "38%",
                height: "110px",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden"
              }}>
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Black Circular Button Overlay */}
                <div style={{
                  position: "absolute",
                  bottom: "6px",
                  [isArabic ? "left" : "right"]: "6px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#000000",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: "900",
                  border: "1.5px solid #ffffff",
                  zIndex: 5
                }}>
                  {isArabic ? "←" : "→"}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Option -> Redirect to /services */}
        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <Link
            href={`/${locale}/services`}
            className="load-more-services-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              padding: "1rem 2.5rem",
              borderRadius: "8px",
              background: "#18181b",
              color: "#ffffff",
              fontSize: "1rem",
              fontWeight: "700",
              letterSpacing: "0.02em",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              border: "1px solid #27272a",
              flexDirection: isArabic ? "row-reverse" : "row"
            }}
          >
            <span>{isArabic ? "تحميل المزيد من الخدمات (استكشف كافة الخدمات)" : "Load More Services (View All Services)"}</span>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "var(--accent, #e11d48)",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: "900",
              transition: "transform 0.3s ease"
            }}>
              {isArabic ? "←" : "→"}
            </span>
          </Link>
        </div>
      </section>


      {/* 3. WHY CHOOSE US? */}
      <section style={{ padding: "6rem 2rem", background: "#ffffff", borderTop: "1px solid var(--card-border)", borderBottom: "1px solid var(--card-border)" }}>
        <div className="why-choose-us-grid" style={{ 
          maxWidth: "var(--max-width)", 
          margin: "0 auto", 
          direction: isArabic ? "rtl" : "ltr"
        }}>
          
          {/* Column 1: Left Text Block */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: isArabic ? "right" : "left" }}>
            <span style={{
              color: "var(--accent, #e11d48)",
              fontSize: "0.8rem",
              fontWeight: "800",
              letterSpacing: "0.15em",
              textTransform: "uppercase"
            }}>
              {isArabic ? "/// لماذا تختارنا" : "/// Why Choose Us"}
            </span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginTop: "0.5rem", color: "#18181b", lineHeight: "1.15" }}>
              {isArabic ? "لماذا تختارنا" : "Why Choose Us"}
            </h2>
            <div style={{
              width: "50px",
              height: "3px",
              background: "var(--accent, #e11d48)",
              marginTop: "1rem",
              marginBottom: "1.75rem"
            }} />
            <p style={{ color: "#71717a", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
              {isArabic 
                ? "الدقة. الخبرة. الثقة. تحصل كل مركبة على تشخيصات بمستوى الوكالة، ومكونات ممتازة، وحرفية دقيقة من متخصصين مكرسين للسيارات الفاخرة الأوروبية."
                : "Precision. Expertise. Trust. Every vehicle receives manufacturer-level diagnostics, premium components, and meticulous craftsmanship from specialists dedicated to European luxury automobiles."}
            </p>
          </div>

          {/* Column 2: Center Image */}
          <div style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            aspectRatio: "1/1",
            boxShadow: "0 15px 40px -15px rgba(0,0,0,0.15)"
          }}>
            <Image 
              src="/why_choose_us_center.jpg" 
              alt="Diagnostics check"
              fill
              style={{ objectFit: "cover", filter: "grayscale(100%) contrast(1.1)" }}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Column 3: Right rows */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            {/* Row 1: Expertise */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1.25rem", 
              paddingBottom: "1.5rem", 
              borderBottom: "1px solid #e4e4e7",
              flexDirection: isArabic ? "row-reverse" : "row",
              textAlign: isArabic ? "right" : "left"
            }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#f4f4f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent, #e11d48)" }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h4 style={{ color: "#18181b", fontSize: "0.95rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                  {isArabic ? "الخبرة" : "Expertise"}
                </h4>
                <p style={{ color: "#71717a", fontSize: "0.85rem", lineHeight: "1.4", margin: 0 }}>
                  {isArabic ? "متخصصون في العلامات التجارية الأوروبية الفاخرة فقط." : "Specialized in European luxury brands only."}
                </p>
              </div>
            </div>

            {/* Row 2: Technology */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1.25rem", 
              padding: "1.5rem 0", 
              borderBottom: "1px solid #e4e4e7",
              flexDirection: isArabic ? "row-reverse" : "row",
              textAlign: isArabic ? "right" : "left"
            }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#f4f4f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent, #e11d48)" }}>
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="15" x2="23" y2="15" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
              </div>
              <div>
                <h4 style={{ color: "#18181b", fontSize: "0.95rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                  {isArabic ? "التكنولوجيا" : "Technology"}
                </h4>
                <p style={{ color: "#71717a", fontSize: "0.85rem", lineHeight: "1.4", margin: 0 }}>
                  {isArabic ? "برامج تشخيصية أصلية: BMW ISTA و Mercedes Xentry." : "BMW ISTA, Mercedes Xentry diagnostics."}
                </p>
              </div>
            </div>

            {/* Row 3: Parts & Care */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1.25rem", 
              paddingTop: "1.5rem",
              flexDirection: isArabic ? "row-reverse" : "row",
              textAlign: isArabic ? "right" : "left"
            }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#f4f4f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent, #e11d48)" }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 11 11 13 15 9" />
                </svg>
              </div>
              <div>
                <h4 style={{ color: "#18181b", fontSize: "0.95rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                  {isArabic ? "القطع والعناية" : "Parts & Care"}
                </h4>
                <p style={{ color: "#71717a", fontSize: "0.85rem", lineHeight: "1.4", margin: 0 }}>
                  {isArabic ? "قطع غيار أصلية OEM/OE، زيوت ممتازة، رعاية رقمية كاملة." : "OEM & OE-quality parts, premium oils, digital care."}
                </p>
              </div>
            </div>

          </div>

        </div>

        <style jsx global>{`
          .why-choose-us-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3.5rem;
            align-items: center;
          }
          @media (max-width: 1024px) {
            .why-choose-us-grid {
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }
          }
        `}</style>
      </section>

      {/* 4. DIAGNOSTIC SOFTWARE SHOWCASE */}
      <section className="software-showcase-section" style={{ maxWidth: "var(--max-width)", margin: "0 auto", background: "#ffffff" }}>
        <div className="software-showcase-header">
          <SectionTag text={t.software.tag} isArabic={isArabic} />
          <h2 className="software-showcase-title">
            {t.software.title}
          </h2>
          <p className="software-showcase-subtitle">{t.software.desc}</p>
        </div>

        <div className="software-showcase-card glass" style={{ direction: isArabic ? "rtl" : "ltr" }}>
          <div className="software-text-col" style={{ textAlign: isArabic ? "right" : "left" }}>
            {/* Responsive text container */}
            <div className="software-info-block">
              <div style={{ display: "inline-block", marginBottom: "0.75rem" }}>
                {softwares[activeSlide].iconSvg}
              </div>
              <span className="software-platform-badge">
                {softwares[activeSlide].platform}
              </span>
              <h3 className="software-slide-title">
                {softwares[activeSlide].title}
              </h3>
              <p className="software-slide-desc">
                {softwares[activeSlide].description}
              </p>
            </div>
            
            {/* Responsive Control buttons */}
            <div className="software-controls-wrapper" style={{
              flexDirection: isArabic ? "row-reverse" : "row"
            }}>
              <div className="software-btn-group" style={{
                flexDirection: isArabic ? "row-reverse" : "row"
              }}>
                <button onClick={prevSlide} className="btn btn-secondary software-nav-btn" style={{ background: "#ffffff", border: "1px solid #e4e4e7", color: "#18181b" }}>
                  {isArabic ? "السابق ←" : "← Prev"}
                </button>
                <button onClick={nextSlide} className="btn btn-primary software-nav-btn">
                  {isArabic ? "التالي →" : "Next →"}
                </button>
              </div>
              <div className="software-dots-wrapper">
                {softwares.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`software-dot ${activeSlide === idx ? "active" : ""}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Premium image card with responsive aspect ratio */}
          <div className="software-image-card">
            <Image
              src={softwares[activeSlide].image}
              alt={softwares[activeSlide].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS */}
      <section style={{ padding: "6rem 2rem", background: "#ffffff", borderTop: "1px solid var(--card-border)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          
          {/* Header Area */}
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{
              color: "var(--accent, #e11d48)",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "0.15em",
              textTransform: "uppercase"
            }}>
              {isArabic ? "عمليتنا" : "Our Process"}
            </span>
            <div style={{
              color: "var(--accent, #e11d48)",
              fontSize: "1.2rem",
              fontWeight: "900",
              margin: "0.25rem 0 0.5rem 0",
              letterSpacing: "2px"
            }}>
              {"///"}
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: "900", color: "#18181b", lineHeight: "1.2", margin: 0 }}>
              {isArabic ? (
                <>
                  تعرف على <span style={{ color: "var(--accent, #e11d48)" }}>خطوات عملنا</span>
                </>
              ) : (
                <>
                  Acquaint Yourself <span style={{ color: "var(--accent, #e11d48)" }}>with Our Process</span>
                </>
              )}
            </h2>
            <p style={{ color: "#71717a", fontSize: "0.95rem", marginTop: "1rem" }}>
              {isArabic 
                ? "تجربة سلسة مصممة للحفاظ على أداء سيارتك بأفضل حالاتها."
                : "A seamless experience designed to keep your car performing at its best."}
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
            direction: isArabic ? "rtl" : "ltr",
            position: "relative"
          }}>
            {processes.map((p, idx) => (
              <div key={idx} style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: isArabic ? "flex-end" : "flex-start",
                textAlign: isArabic ? "right" : "left"
              }}>
                {/* Image card wrapper */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "190px",
                  borderRadius: "16px",
                  marginBottom: "2rem",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.12)"
                }}>
                  <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative"
                  }}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Badge */}
                  <div style={{
                    position: "absolute",
                    bottom: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent, #e11d48)",
                    color: "#ffffff",
                    fontWeight: "800",
                    fontSize: "0.9rem",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(225,29,72,0.35)",
                    zIndex: 10
                  }}>
                    {p.step}
                  </div>

                  {/* Desktop connector line with center pointer (Hidden on Mobile) */}
                  {idx < 3 && (
                    <div className="desktop-process-connector" style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      [isArabic ? "right" : "left"]: "calc(100% + 0.25rem)",
                      width: "2rem",
                      height: "1px",
                      background: "rgba(225,29,72,0.3)",
                      zIndex: 5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <div style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "var(--accent, #e11d48)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: "7px",
                        fontWeight: "bold"
                      }}>
                        {isArabic ? "‹" : "›"}
                      </div>
                    </div>
                  )}
                </div>

                {/* Description details */}
                <div style={{ width: "100%", padding: "0 0.5rem" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                    flexDirection: isArabic ? "row-reverse" : "row"
                  }}>
                    <div style={{ color: "var(--accent, #e11d48)", display: "flex", alignItems: "center" }}>
                      {p.icon}
                    </div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#18181b" }}>
                      {p.name}
                    </h3>
                  </div>
                  <p style={{ color: "#71717a", fontSize: "0.85rem", lineHeight: "1.6" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Block */}
          <div style={{
            marginTop: "5rem",
            background: "#ffffff",
            border: "1px solid #e4e4e7",
            borderRadius: "16px",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            boxShadow: "0 10px 30px -15px rgba(0,0,0,0.05)"
          }} className="process-cta-box">
            
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#18181b",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="12" cy="16" r="3" />
                <polyline points="12 14 12 16 14 16" />
              </svg>
            </div>

            <div style={{ flex: "1 1 450px", textAlign: isArabic ? "right" : "left" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#18181b", marginBottom: "0.35rem" }}>
                {isArabic ? "جاهز للبدء؟" : "Ready to Get Started?"}
              </h3>
              <p style={{ color: "#71717a", fontSize: "0.85rem", lineHeight: "1.6" }}>
                {isArabic 
                  ? "لجدولة موعد لخدمة السيارات، اختر وقت الخدمة المفضل لديك عبر الإنترنت أو الهاتف. قدم تفاصيل سيارتك، وحدد الخدمات المطلوبة، وأكد حجزك. استلم التأكيد واستعد للخدمة."
                  : "To schedule an appointment for car service near me, choose your preferred service time online or via phone. Provide your vehicle details, select the required services, and confirm your booking. Receive a confirmation and prepare for service."}
              </p>
            </div>

            <div style={{ display: "flex", width: "auto" }}>
              <Link href={`/${locale}/book-appointment`} className="btn btn-primary" style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.85rem 1.75rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "700"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {isArabic ? "احجز خدمتك" : "Book Your Service"}
              </Link>
            </div>

          </div>

        </div>

        <style jsx global>{`
          @media (max-width: 1023px) {
            .desktop-process-connector {
              display: none !important;
            }
          }
        `}</style>
      </section>

      {/* 6. GOOGLE REVIEWS (TESTIMONIALS) */}
      <section style={{ padding: "5rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", background: "#ffffff" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <SectionTag text={t.testimonials.tag} isArabic={isArabic} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginTop: "0.5rem", color: "#18181b" }}>
            {t.testimonials.title}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", direction: isArabic ? "rtl" : "ltr" }}>
          <div className="glass" style={{ padding: "2rem", borderRadius: "8px", textAlign: isArabic ? "right" : "left", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <div style={{ color: "#fbbf24", marginBottom: "0.75rem" }}>★★★★★</div>
            <p style={{ color: "#71717a", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              {isArabic 
                ? "خدمة استثنائية لسيارتي أودي A6. لقد اكتشفوا تسريبًا معقدًا في نظام التعليق الهوائي (Airmatic) أغفلته الورش الأخرى وعايروه باستخدام التشخيص المناسب."
                : '"Exceptional service for my Audi A6. They identified a complex Airmatic suspension leak that other workshops missed and calibrated it using proper diagnostics."'}
            </p>
            <strong style={{ color: "#18181b", fontSize: "0.85rem" }}>{isArabic ? "— حارس الزدجالي" : "— Haris Al-Zadjali"}</strong>
          </div>

          <div className="glass" style={{ padding: "2rem", borderRadius: "8px", textAlign: isArabic ? "right" : "left", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <div style={{ color: "#fbbf24", marginBottom: "0.75rem" }}>★★★★★</div>
            <p style={{ color: "#71717a", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              {isArabic
                ? "مهنيون للغاية. شرح صادق لنتائج فحص علبة التروس الخاصة بي، بدون إشارات تسعير مخفية، وتوصيل سريع. مانوج عبقري حقيقي."
                : '"Very professional. Honest explanation of my gearbox diagnostic results, no hidden pricing references, and fast delivery. Manoj is a real genius."'}
            </p>
            <strong style={{ color: "#18181b", fontSize: "0.85rem" }}>{isArabic ? "— سليم البلوشي" : "— Salim Al-Balushi"}</strong>
          </div>

          <div className="glass" style={{ padding: "2rem", borderRadius: "8px", textAlign: isArabic ? "right" : "left", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <div style={{ color: "#fbbf24", marginBottom: "0.75rem" }}>★★★★★</div>
            <p style={{ color: "#71717a", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              {isArabic
                ? "خدمات ممتازة لتعديل الضربات وطلاء السيارات. تبدو سيارتي البي إم دبليو وكأنها جديدة تمامًا من المعرض. نوصي بشدة بورشة كيرلا أوتو موتورز لأي سيارة فاخرة في مسقط."
                : '"Excellent paint correction and denting services. My BMW looks showroom fresh. Highly recommend Kerala Auto Motors for any luxury car in Muscat."'}
            </p>
            <strong style={{ color: "#18181b", fontSize: "0.85rem" }}>{isArabic ? "— محمد الحارثي" : "— Mohammed Al-Harthy"}</strong>
          </div>
        </div>
      </section>

      {/* 7. BRANDS WE SERVICE */}
      <section id="brands" style={{
        padding: "5rem 0",
        background: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
        position: "relative"
      }}>
        <div style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto 2.5rem auto",
          padding: "0 2rem",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#18181b", marginBottom: "0.5rem" }}>
            {t.brands.title}
          </h2>
          <p style={{ color: "#71717a", fontSize: "0.95rem" }}>
            {isArabic ? "موثوق به من قبل مالكي أرقى السيارات في العالم." : "Trusted by owners of the world's finest automobiles."}
          </p>
        </div>

        {/* European Brands Track */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ maxWidth: "var(--max-width)", margin: "0 auto 1rem auto", padding: "0 2rem", textAlign: isArabic ? "right" : "left" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--accent, #e11d48)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {isArabic ? "— السيارات الأوروبية" : "— European Specialists"}
            </span>
          </div>
          <div className="marquee-container">
            <div className="marquee-content-left">
              {[...europeanBrands, ...europeanBrands].map((brand, idx) => (
                <div key={idx} className="marquee-item">
                  <div style={{ position: "relative", width: "70px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image 
                      src={brand.logo} 
                      alt={brand.name} 
                      fill
                      sizes="70px"
                      style={{ objectFit: "contain" }}
                      className="brand-logo-img"
                    />
                  </div>
                  <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "#18181b" }}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* American Brands Track */}
        <div>
          <div style={{ maxWidth: "var(--max-width)", margin: "0 auto 1rem auto", padding: "0 2rem", textAlign: isArabic ? "right" : "left" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--accent, #e11d48)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {isArabic ? "— السيارات الأمريكية" : "— American Specialists"}
            </span>
          </div>
          <div className="marquee-container">
            <div className="marquee-content-right">
              {[...americanBrands, ...americanBrands, ...americanBrands, ...americanBrands].map((brand, idx) => (
                <div key={idx} className="marquee-item">
                  <div style={{ position: "relative", width: "70px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image 
                      src={brand.logo} 
                      alt={brand.name} 
                      fill
                      sizes="70px"
                      style={{ objectFit: "contain" }}
                      className="brand-logo-img"
                    />
                  </div>
                  <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "#18181b" }}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .marquee-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            display: flex;
            padding: 0.5rem 0;
          }
          /* Masking gradient overlay on both sides for premium fading look */
          .marquee-container::before,
          .marquee-container::after {
            content: "";
            height: 100%;
            width: 15%;
            position: absolute;
            z-index: 2;
            pointer-events: none;
            top: 0;
          }
          .marquee-container::before {
            left: 0;
            background: linear-gradient(to right, #ffffff 0%, transparent 100%);
          }
          .marquee-container::after {
            right: 0;
            background: linear-gradient(to left, #ffffff 0%, transparent 100%);
          }

          .marquee-content-left {
            display: flex;
            gap: 2rem;
            animation: marquee-left 35s linear infinite;
            white-space: nowrap;
            width: max-content;
          }

          .marquee-content-right {
            display: flex;
            gap: 2rem;
            animation: marquee-right 30s linear infinite;
            white-space: nowrap;
            width: max-content;
          }
          
          .marquee-container:hover .marquee-content-left,
          .marquee-container:hover .marquee-content-right {
            animation-play-state: paused;
          }

          .marquee-item {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: 1rem;
            background: #f4f4f5;
            border: 1px solid #e4e4e7;
            border-radius: 12px;
            padding: 0.75rem 1.5rem;
            min-width: 190px;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .marquee-item:hover {
            background: #ffffff;
            border-color: var(--accent, #e11d48);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
          }

          .brand-logo-img {
            filter: grayscale(100%) opacity(0.65);
            transition: all 0.3s ease;
          }

          .marquee-item:hover .brand-logo-img {
            filter: grayscale(0%) opacity(1);
          }

          @keyframes marquee-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* 8. AUTOMOTIVE INSIGHTS & BLOG (3x3 Grid) */}
      <section id="blog" style={{ padding: "5rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", background: "#ffffff" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <SectionTag text={t.blog?.tag || (isArabic ? "المقالات والأخبار" : "Insights & News")} isArabic={isArabic} />
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginTop: "0.5rem", color: "#18181b" }}>
            {t.blog?.title || (isArabic ? "رؤى وأخبار السيارات" : "Automotive News & Insights")}
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0.75rem auto 0 auto", lineHeight: "1.6" }}>
            {t.blog?.subtitle || (isArabic ? "أحدث المقالات والإرشادات الهندسية لصيانة السيارات الفاخرة في مسقط." : "Latest stories, technical guides, and engineering updates from Kerala Auto Motors.")}
          </p>
        </div>

        <BlogEmbed 
          type="container" 
          projectId="c8e456a4-3a50-4a04-ba1e-58f6712e7b08" 
          limit={9} 
          redirectUrl={`/${locale}/blog`} 
        />
      </section>

      {/* 9. CALL TO ACTION */}
      <section style={{
        padding: "6rem 2rem",
        background: "linear-gradient(rgba(225,29,72,0.92), rgba(225,29,72,0.98)), url('/pierre.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white"
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "900", color: "white", marginBottom: "1rem", letterSpacing: "-1px" }}>
            {t.cta.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "2rem", lineHeight: "1.6" }}>
            {t.cta.desc}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", flexDirection: isArabic ? "row-reverse" : "row" }}>
            <Link href={`/${locale}/book-appointment`} className="btn btn-secondary" style={{ background: "white", color: "black", border: "none" }}>
              {t.cta.book}
            </Link>
            <Link href={`/${locale}/contact`} className="btn btn-secondary" style={{ borderColor: "white", color: "white", background: "transparent" }}>
              {t.cta.contact}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
