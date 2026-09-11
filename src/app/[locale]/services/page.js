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
      desc: isArabic ? "تغيير الزيت والفحص والرعاية الوقائية الشاملة" : "Oil Change, Inspection & Preventive Care",
      price: isArabic ? "تبدأ من ٣٠ ر.ع." : "From 30 OMR",
      image: "/service_general.jpg",
      highlights: isArabic 
        ? ["خدمة المركبات الدورية", "صيانة صغرى", "صيانة كبرى", "تغيير الزيت والفلتر", "فحص متعدد النقاط للمركبة", "تعبئة واستبدال السوائل"]
        : ["Periodic Vehicle Service", "Minor Service", "Major Service", "Oil & Filter Change", "Multi-Point Vehicle Inspection", "Fluid Top-Up & Replacement"]
    },
    {
      title: isArabic ? "خدمات المحرك" : "Engine Services",
      slug: "engine-repair",
      desc: isArabic ? "تشخيصات متقدمة وحلول إصلاح وتوضيب المحرك" : "Advanced diagnostics & engine repair solutions",
      price: isArabic ? "تبدأ من ٥٥ ر.ع." : "From 55 OMR",
      image: "/service_engine.jpg",
      highlights: isArabic
        ? ["تشخيص المحرك بالكمبيوتر", "إصلاح وتوضيب المحرك", "استبدال جنزير/سير التوقيت", "صيانة نظام التبريد", "إصلاح واستبدال الراديتر"]
        : ["Engine Diagnostics", "Engine Repair & Overhaul", "Timing Belt/Chain Replacement", "Cooling System Service", "Radiator Repair & Replacement"]
    },
    {
      title: isArabic ? "خدمات ناقل الحركة" : "Transmission Services",
      slug: "transmission-service",
      desc: isArabic ? "تغيير سائل ناقل الحركة ومعايرة التروس وتوضيبها" : "Transmission fluid change, repair & rebuild",
      price: isArabic ? "تبدأ من ٧٥ ر.ع." : "From 75 OMR",
      image: "/service_transmission.jpg",
      highlights: isArabic
        ? ["صيانة ناقل الحركة الأوتوماتيكي", "تشخيص علبة التروس", "تغيير زيت ناقل الحركة", "إصلاح وتوضيب ناقل الحركة الأوتوماتيكي"]
        : ["Automatic Transmission Service", "Gearbox Diagnostics", "Transmission Oil Change", "Automatic Transmission Repair & Overhaul"]
    },
    {
      title: isArabic ? "خدمات الفرامل" : "Brake Services",
      slug: "brake-repair",
      desc: isArabic ? "فحص الفرامل واستبدال الفحمات والأقراص وصيانة ABS" : "Brake inspection, replacement & ABS system servicing",
      price: isArabic ? "تبدأ من ٥٠ ر.ع." : "From 50 OMR",
      image: "/service_brake.jpg",
      highlights: isArabic
        ? ["استبدال فحمات الفرامل", "استبدال أقراص/ديسكات الفرامل", "غسيل سائل الفرامل", "تشخيص وإصلاح نظام ABS", "فحص كامل لنظام الفرامل"]
        : ["Brake Pad Replacement", "Brake Disc/Rotor Replacement", "Brake Fluid Flush", "ABS Diagnostics & Repair", "Complete Brake System Inspection"]
    },
    {
      title: isArabic ? "نظام التعليق والتوجيه" : "Suspension & Steering",
      slug: "suspension-steering",
      desc: isArabic ? "صيانة خبيرة لأنظمة التعليق الهوائي Airmatic والهيدروليكي" : "Expert suspension and airmatic system tuning",
      price: isArabic ? "تبدأ من ٥٠ ر.ع." : "From 50 OMR",
      image: "/process_step3.jpg",
      highlights: isArabic
        ? ["إصلاح نظام التعليق", "استبدال المساعدات (هوائي Airmatic وهيدروليكي)", "إصلاح نظام التوجيه (كهربائي وهيدروليكي)", "محاذاة العجلات بالليزر", "موازنة وترصيص العجلات"]
        : ["Suspension Repair", "Shock Absorber Replacement (Airmatic & Hydraulic)", "Steering System Repair (Electrical & Hydraulic)", "Wheel Alignment", "Wheel Balancing"]
    },
    {
      title: isArabic ? "الأنظمة الكهربائية والإلكترونية" : "Electrical & Electronics",
      slug: "electrical-electronics",
      desc: isArabic ? "تشخيص وبرمجة عقول السيارات ECU وترميز SCN المعتمد" : "ECU diagnostics, coding & programming",
      price: isArabic ? "تبدأ من ٤٠ ر.ع." : "From 40 OMR",
      image: "/service_ecu.jpg",
      highlights: isArabic
        ? ["تشخيص الأعطال بالكمبيوتر", "فحص واستبدال البطارية", "إصلاح سلف التشغيل", "إصلاح دينامو الشحن", "برمجة عقول السيارات ECU", "برمجة أنظمة VGS 3&4", "تحديث برمجيات السيارة", "استبدال وبرمجة عقل القير TCU", "ترميز SCN أونلاين", "استبدال الحساسات", "إصلاح أنظمة الإضاءة"]
        : ["Computer Diagnostics", "Battery Testing & Replacement", "Starter Motor Repair", "Alternator Repair", "ECU Programming", "VGS 3&4 Programming", "Software Updation", "TCU Replacement & Coding", "SCN Coding", "Sensor Replacement", "Lighting System Repair"]
    },
    {
      title: isArabic ? "تكييف الهواء" : "Air Conditioning",
      slug: "air-conditioning",
      desc: isArabic ? "تعبئة غاز المكيف واستبدال الثلاجة وصيانة النظام بالكامل" : "AC gas refill & complete AC system service",
      price: isArabic ? "تبدأ من ٢٨ ر.ع." : "From 28 OMR",
      image: "/service_ac.jpg",
      highlights: isArabic
        ? ["فحص أداء مكيف الهواء", "شحن غاز المكيف (R-134a و R-1234yf)", "إصلاح الكومبريسور", "استبدال فلتر المقصورة", "كشف تسريبات الفريون", "استبدال ثلاجة المكيف وفك الداشبورد"]
        : ["A/C Performance Check", "Gas Recharge (R-134a & R-1234yf)", "Compressor Repair", "Cabin Filter Replacement", "A/C Leak Detection", "Evaporator Changing"]
    },
    {
      title: isArabic ? "الإطارات والعجلات" : "Tires & Wheels",
      slug: "tires-wheels",
      desc: isArabic ? "استبدال الإطارات الفاخرة، إصلاح الجنوط، وتعبئة النيتروجين" : "Tire replacement, alloy wheel repair & nitrogen servicing",
      price: isArabic ? "تبدأ من ٢٠ ر.ع." : "From 20 OMR",
      image: "/process_step2.jpg",
      highlights: isArabic
        ? ["تبديل الإطارات", "تدوير الإطارات الدوري", "إصلاح رقع الإطارات", "تعبئة غاز النيتروجين", "إصلاح وتعديل الجنوط"]
        : ["Tire Replacement", "Tire Rotation", "Tire Repair", "Nitrogen Filling", "Alloy Wheel Repair"]
    },
    {
      title: isArabic ? "هيكل وطلاء السيارات" : "Body & Paint",
      slug: "body-paint",
      desc: isArabic ? "تعديل الصدمات بدون طلاء ورش بأفران حرارية متطورة" : "Paintless dent repair, spray bake painting & accident restoration",
      price: isArabic ? "اتصل للتسعير" : "Call for Quote",
      image: "/service_general.jpg",
      highlights: isArabic
        ? ["تعديل الضربات والسمكرة", "إزالة الخدوش ومعالجة السطح", "طلاء كامل في أفران حرارية", "حماية وتغليف الطلاء", "إصلاح أضرار وصدمات الحوادث"]
        : ["Dent Repair", "Scratch Removal", "Full Body Painting", "Paint Protection", "Accident Repair"]
    },
    {
      title: isArabic ? "العناية والحماية الفائقة" : "Detailing & Protection",
      slug: "detailing-protection",
      desc: isArabic ? "تنظيف داخلي عميق وتصحيح الطلاء وحماية النانو سيراميك" : "Interior deep cleaning, multi-stage paint correction & ceramic coating",
      price: isArabic ? "تبدأ من ٤٥ ر.ع." : "From 45 OMR",
      image: "/why_choose_us_center.jpg",
      highlights: isArabic
        ? ["غسيل سيارات فاخر وتفصيلي", "تنظيف وتطهير داخلي عميق", "تلميع وتفصيل الهيكل الخارجي", "تصحيح الطلاء وإزالة الدوائر", "طلاء النانو سيراميك 9H", "تلميع المصابيح الأمامية", "تنظيف وتلميع حوض المحرك"]
        : ["Premium Car Wash", "Interior Deep Cleaning", "Exterior Detailing", "Paint Correction", "Ceramic Coating", "Headlight Restoration", "Engine Bay Cleaning"]
    },
    {
      title: isArabic ? "خدمات السيارات الفاخرة والأداء العالي" : "Luxury & Performance Services",
      slug: "luxury-performance",
      desc: isArabic ? "ترقية أنظمة العادم والمساعدات الرياضية وصيانة السوبركار" : "Exhaust upgrades, suspension tuning & bespoke supercar maintenance",
      price: isArabic ? "اتصل للتسعير" : "Call for Quote",
      image: "/process_step4.jpg",
      highlights: isArabic
        ? ["ترقية وتعديل أنظمة العادم", "ترقية أنظمة التعليق الرياضي", "صيانة فائقة للسيارات الفاخرة والخارقة"]
        : ["Exhaust System Upgrades", "Suspension Upgrades", "Luxury Vehicle Maintenance"]
    },
    {
      title: isArabic ? "خدمات الطوارئ والمساعدة" : "Emergency Services",
      slug: "emergency-services",
      desc: isArabic ? "اشتراك وشحن البطارية، المساعدة على الطريق، وسحب المركبات 24/7" : "Battery jump start, roadside assistance & flatbed recovery 24/7",
      price: isArabic ? "تبدأ من ١٥ ر.ع." : "From 15 OMR",
      image: "/process_step1.jpg",
      highlights: isArabic
        ? ["اشتراك وشحن البطارية فوراً", "المساعدة الطارئة على الطريق", "سحب ونقل المركبات المتعطلة", "دعم فوري للأعطال الطارئة"]
        : ["Battery Jump Start", "Roadside Assistance", "Vehicle Recovery & Towing", "Emergency Breakdown Support"]
    },
    {
      title: isArabic ? "خدمات إضافية وتجهيزات" : "Additional Services",
      slug: "additional-services",
      desc: isArabic ? "تركيب الإكسسوارات الفاخرة، التظليل الحراري، وتنجيد الفرش" : "Car accessories installation, ceramic window tinting & upholstery",
      price: isArabic ? "تبدأ من ٢٥ ر.ع." : "From 25 OMR",
      image: "/hero_technician.jpg",
      highlights: isArabic
        ? ["تركيب إكسسوارات وشاشات السيارات", "تظليل النوافذ العازل للحرارة", "تنجيد وتجديد المقاعد والفرش الداخلي"]
        : ["Car Accessories Installation", "Window Tinting", "Car Upholstery"]
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
          {serviceCategories.map((cat) => (
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
                    {cat.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} style={{ fontSize: "0.7rem", color: "#71717a" }}>✓ {h}</span>
                    ))}
                    {cat.highlights.length > 3 && (
                      <span style={{ fontSize: "0.7rem", color: "var(--accent, #e11d48)", fontWeight: "700" }}>
                        +{cat.highlights.length - 3} {isArabic ? "المزيد" : "more"}
                      </span>
                    )}
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
