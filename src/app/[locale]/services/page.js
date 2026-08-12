"use client";

import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

export default function LocalizedServicesPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  const serviceCategories = [
    {
      title: isArabic ? "صيانة عامة" : "General Maintenance",
      slug: "general-maintenance",
      desc: isArabic ? "تغيير الزيت والفحص والرعاية الوقائية" : "Oil Change, Inspection & Preventive Care",
      price: isArabic ? "تبدأ من ٣٠ ر.ع." : "From 30 OMR",
      image: "/service_general.jpg",
      highlights: isArabic 
        ? ["خدمة المركبات الدورية", "صيانة صغرى وكبرى", "تغيير الزيت والفلتر", "فحص متعدد النقاط"]
        : ["Periodic Vehicle Service", "Minor & Major Service", "Oil & Filter Change", "Multi-Point Inspection"]
    },
    {
      title: isArabic ? "خدمات المحرك" : "Engine Services",
      slug: "engine-repair",
      desc: isArabic ? "تشخيصات متقدمة وحلول إصلاح المحرك" : "Advanced diagnostics & engine repair solutions",
      price: isArabic ? "تبدأ من ٥٥ ر.ع." : "From 55 OMR",
      image: "/service_engine.jpg",
      highlights: isArabic
        ? ["تشخيص المحرك بالكمبيوتر", "إصلاح وتوضيب المحرك", "استبدال جنزير/سير التوقيت", "إصلاح راديتر التبريد"]
        : ["Engine Diagnostics", "Engine Repair & Overhaul", "Timing Belt/Chain Replacement", "Radiator Repair"]
    },
    {
      title: isArabic ? "خدمات ناقل الحركة" : "Transmission Services",
      slug: "transmission-service",
      desc: isArabic ? "تغيير سائل ناقل الحركة وإصلاحه وتوضيبه" : "Transmission fluid change, repair & rebuild",
      price: isArabic ? "تبدأ من ٧٥ ر.ع." : "From 75 OMR",
      image: "/service_transmission.jpg",
      highlights: isArabic
        ? ["صيانة ناقل الحركة الأوتوماتيكي", "تشخيص علبة التروس", "تغيير زيت ناقل الحركة", "توضيب علبة التروس بالكامل"]
        : ["Automatic Transmission Service", "Gearbox Diagnostics", "Transmission Oil Change", "Transmission Overhaul"]
    },
    {
      title: isArabic ? "خدمات الفرامل" : "Brake Services",
      slug: "brake-repair",
      desc: isArabic ? "فحص الفرامل واستبدالها وضبط نظام التعليق" : "Brake inspection, replacement & suspension tuning",
      price: isArabic ? "تبدأ من ٥٠ ر.ع." : "From 50 OMR",
      image: "/service_brake.jpg",
      highlights: isArabic
        ? ["استبدال فحمات الفرامل", "استبدال أقراص/هوبات الفرامل", "غسيل سائل الفرامل", "تشخيص وإصلاح نظام ABS"]
        : ["Brake Pad Replacement", "Brake Disc/Rotor Replacement", "Brake Fluid Flush", "ABS Diagnostics & Repair"]
    },
    {
      title: isArabic ? "نظام التعليق والتوجيه" : "Suspension & Steering",
      slug: "suspension-steering",
      desc: isArabic ? "صيانة خبيرة لأنظمة التعليق الهوائي والهيدروليكي المتقدمة" : "Expert suspension and airmatic system tuning",
      price: isArabic ? "تبدأ من ٥٠ ر.ع." : "From 50 OMR",
      image: "/service_brake.jpg",
      highlights: isArabic
        ? ["تعليق هوائي (Airmatic)", "تعليق هيدروليكي (Hydraulic)", "إصلاح علبة التوجيه", "محاذاة العجلات بالليزر"]
        : ["Airmatic Suspension", "Hydraulic Suspension", "Steering System Repair", "Wheel Alignment & Balance"]
    },
    {
      title: isArabic ? "الأنظمة الكهربائية والإلكترونية" : "Electrical & Electronics",
      slug: "electrical-electronics",
      desc: isArabic ? "تشخيص وبرمجة وبرمجة عقول السيارات" : "ECU diagnostics, coding & programming",
      price: isArabic ? "تبدأ من ٤٠ ر.ع." : "From 40 OMR",
      image: "/service_ecu.jpg",
      highlights: isArabic
        ? ["تشخيص الأعطال بالكمبيوتر", "برمجة عقول السيارات (ECU)", "برمجة TCU و SCN Coding", "برمجة أنظمة VGS 3 & 4"]
        : ["Computer Diagnostics", "ECU Programming", "TCU Coding & SCN Coding", "VGS 3&4 Programming"]
    },
    {
      title: isArabic ? "تكييف الهواء" : "Air Conditioning",
      slug: "air-conditioning",
      desc: isArabic ? "تعبئة غاز المكيف وصيانة نظام التكييف بالكامل" : "AC gas refill & complete AC system service",
      price: isArabic ? "تبدأ من ٢٨ ر.ع." : "From 28 OMR",
      image: "/service_ac.jpg",
      highlights: isArabic
        ? ["فحص كفاءة المكيف", "شحن الغاز (R-134a و R-1234yf)", "إصلاح الكومبريسور", "استبدال ثلاجة المكيف الداخلية"]
        : ["A/C Performance Check", "Gas Recharge (R-134a & R-1234yf)", "Compressor Repair", "Evaporator Changing"]
    },
    {
      title: isArabic ? "هيكل وطلاء السيارات" : "Body & Paint",
      slug: "body-paint",
      desc: isArabic ? "إصلاح ضربات الصاج ورش وطلاء بجودة الوكالة" : "Premium denting, panel beating & showroom painting",
      price: isArabic ? "اتصل للتسعير" : "Call for Quote",
      image: "/service_general.jpg",
      highlights: isArabic
        ? ["إصلاح ضربات الصاج (تعديل)", "رش وطلاء بجودة الوكالة", "تصحيح الطلاء والنانو سيراميك", "إزالة الخدوش البسيطة"]
        : ["Dent Repair", "Custom Premium Painting", "Ceramic Coating & Paint Correction", "Scratch Removal"]
    }
  ];

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 4rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%", background: "transparent", direction: isArabic ? "rtl" : "ltr" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="animate-fade-in">
          <SectionTag text={t.services.fullMenuSubtitle} isArabic={isArabic} />
          <h1 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1rem", letterSpacing: "-1px", color: "#18181b" }}>
            {isArabic ? "خدماتنا المهنية" : t.services.fullMenuTitle}
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            {t.services.fullMenuDesc}
          </p>
        </div>

        <div className="services-preview-grid">
          {serviceCategories.map((cat, idx) => (
            <Link href={`/${locale}/services/${cat.slug}`} key={cat.slug} className="service-card">
              {/* Left content block (60% width) */}
              <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: "0.5rem", textAlign: isArabic ? "right" : "left" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#18181b", lineHeight: "1.2" }}>{cat.title}</h3>
                <p style={{ color: "#71717a", fontSize: "0.8rem", lineHeight: "1.4" }}>
                  {cat.desc}
                </p>

                <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "0.5rem", marginTop: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#18181b", display: "block", marginBottom: "0.25rem" }}>
                    {isArabic ? "المميزات:" : "Highlights:"}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem 0.5rem" }}>
                    {cat.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} style={{ fontSize: "0.7rem", color: "#71717a" }}>✓ {h}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content block (Image 38% width) */}
              <div style={{
                width: "38%",
                height: "130px",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden"
              }}>
                <Image 
                  src={cat.image} 
                  alt={cat.title}
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
                  fontSize: "0.75rem",
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
      </div>
      <Footer />
    </>
  );
}
