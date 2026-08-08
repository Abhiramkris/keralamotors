"use client";

import Image from "next/image";
import { use } from "react";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

export default function LocalizedAboutPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  const team = [
    {
      name: isArabic ? "خالد البلوشي" : "Khalid Al-Balushi",
      role: isArabic ? "مدير الورشة ومؤسسها" : "Workshop Director & Founder",
      image: "/khalid.jpg",
      bio: isArabic 
        ? "أكثر من 15 عاماً في الإشراف على كراجات السيارات الفاخرة في مسقط. ملتزم بتقديم دقة مستوى الوكلاء بشروط عادلة."
        : "Over 15 years overseeing luxury automotive garages in Muscat. Committed to bringing dealership level precision at fair terms."
    },
    {
      name: isArabic ? "مانوج كومار" : "Manoj Kumar",
      role: isArabic ? "كبير أخصائيي التشخيص والمدير" : "Master Diagnostician & Manager",
      image: "/manoj.jpg",
      bio: isArabic
        ? "متخصص في إلكترونيات السيارات الألمانية الفاخرة. مشغل خبير لأنظمة الفحص والبرمجة المعتمدة بي إم دبليو ومرسيدس."
        : "Specialist in German on-board electronics. Expert operator of certified BMW ISTA and Mercedes-Benz Xentry systems."
    },
    {
      name: isArabic ? "بيير دوبوا" : "Pierre Dubois",
      role: isArabic ? "كبير فنيي نظام التعليق" : "Senior Suspension Specialist",
      image: "/pierre.jpg",
      bio: isArabic
        ? "تلقى تدريبه في شتوتغارت، ألمانيا. يركز حصريًا على إعدادات الأداء العالي، والمساعدات الهوائية (Airmatic)، والتحكم الهيدروليكي."
        : "Trained in Stuttgart, Germany. Focuses exclusively on high-performance setups, Airmatic struts, and active hydraulic control."
    },
    {
      name: isArabic ? "راجيش ناير" : "Rajesh Nair",
      role: isArabic ? "خبير توضيب علب التروس" : "Master Gearbox Rebuilder",
      image: "/rajesh.jpg",
      bio: isArabic
        ? "أكثر من عقد من الزمن في تشخيص مجموعات ناقل الحركة المعقدة ومحولات عزم الدوران والقوابض الإلكترونية متعددة السرعات."
        : "Over a decade diagnosing complex gear transmission clusters, torque converters, and multi-speed electronic clutches."
    },
    {
      name: isArabic ? "آمنة الريامية" : "Amna Al-Riyami",
      role: isArabic ? "مديرة علاقات العملاء" : "Customer Relations Manager",
      image: "/amna.jpg",
      bio: isArabic
        ? "تضمن تقديم تقديرات شفافة، وإيجازات تشخيصية واضحة، وتنسق تجربة خدمة العملاء المريحة لدينا."
        : "Ensures transparent estimates, clear diagnostic briefings, and coordinates our comfortable client service experience."
    }
  ];

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 4rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%", background: "transparent", direction: isArabic ? "rtl" : "ltr" }}>
        
        {/* Brand Story */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", marginBottom: "6rem" }} className="animate-fade-in">
          <div style={{ textAlign: isArabic ? "right" : "left" }}>
            <SectionTag text={t.about.tag} isArabic={isArabic} />
            <h1 style={{ fontSize: "3rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1.5rem", letterSpacing: "-1px", color: "#18181b" }}>
              {isArabic ? "المعيار الذهبي في الرعاية" : t.about.title}
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.25rem" }}>
              {t.about.desc1}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.8" }}>
              {t.about.desc2}
            </p>
          </div>
          <div style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
            height: "400px"
          }}>
            <Image 
              src="/pierre.jpg" 
              alt="Workshop Facility" 
              fill
              style={{ objectFit: "cover" }}
            />
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              padding: "2rem",
              color: "white",
              textAlign: isArabic ? "right" : "left"
            }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.25rem" }}>{t.about.facilityTitle}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{t.about.facilityDesc}</p>
            </div>
          </div>
        </div>

        {/* Facility Description */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "6rem",
          direction: isArabic ? "rtl" : "ltr"
        }}>
          <div className="glass" style={{ padding: "2.5rem 2rem", borderRadius: "8px", textAlign: isArabic ? "right" : "left", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", marginBottom: "1rem" }}>
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.75rem", color: "#18181b" }}>{t.about.toolingTitle}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              {t.about.toolingDesc}
            </p>
          </div>
          <div className="glass" style={{ padding: "2.5rem 2rem", borderRadius: "8px", textAlign: isArabic ? "right" : "left", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", marginBottom: "1rem" }}>
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.75rem", color: "#18181b" }}>{t.about.diagnosticTitle}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              {t.about.diagnosticDesc}
            </p>
          </div>
          <div className="glass" style={{ padding: "2.5rem 2rem", borderRadius: "8px", textAlign: isArabic ? "right" : "left", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", marginBottom: "1rem" }}>
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.75rem", color: "#18181b" }}>{t.about.loungeTitle}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              {t.about.loungeDesc}
            </p>
          </div>
        </div>

        {/* Team Profiles Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <SectionTag text={t.about.teamTag} isArabic={isArabic} />
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1rem", letterSpacing: "-0.5px", color: "#18181b" }}>
              {isArabic ? "التقِ بالمتخصصين" : t.about.teamTitle}
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "550px", margin: "0 auto", fontSize: "0.95rem", lineHeight: "1.6" }}>
              {t.about.teamDesc}
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "2rem"
          }}>
            {team.map((member, idx) => (
              <div key={idx} className="glass glass-hover" style={{
                borderRadius: "8px",
                overflow: "hidden",
                transition: "var(--transition)",
                display: "flex",
                flexDirection: "column",
                textAlign: isArabic ? "right" : "left",
                background: "#f8f9fa",
                border: "1px solid #e4e4e7"
              }}>
                <div style={{ position: "relative", width: "100%", height: "240px", background: "#e4e4e7" }}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#18181b", marginBottom: "0.25rem" }}>
                    {member.name}
                  </h3>
                  <span style={{ display: "block", fontSize: "0.8rem", color: "var(--accent)", fontWeight: "600", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    {member.role}
                  </span>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.5" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
