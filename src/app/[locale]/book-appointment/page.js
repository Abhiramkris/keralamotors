"use client";

import { useState, use } from "react";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

export default function LocalizedBookAppointmentPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: "",
    serviceType: "general-maintenance",
    date: "",
    time: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = isArabic 
      ? `مرحباً كيرلا أوتو موتورز، أود حجز موعد صيانة.\n\nالاسم: ${formData.name || "غير محدد"}\nالهاتف: ${formData.phone || "غير محدد"}\nطراز السيارة: ${formData.model || "غير محدد"}\nالخدمة: ${formData.serviceType}\nالتاريخ المفضل: ${formData.date || "غير محدد"}\nالوقت المفضل: ${formData.time || "غير محدد"}`
      : `Hello Kerala Auto Motors, I'd like to book a service appointment.\n\nName: ${formData.name || "N/A"}\nPhone: ${formData.phone || "N/A"}\nVehicle Model: ${formData.model || "N/A"}\nService: ${formData.serviceType}\nPreferred Date: ${formData.date || "N/A"}\nPreferred Time: ${formData.time || "N/A"}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/96897420425?text=${encoded}`, "_blank");
  };

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 4rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%", background: "transparent", direction: isArabic ? "rtl" : "ltr" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          
          {/* Form */}
          <div className="glass animate-fade-in" style={{ padding: "3rem 2rem", borderRadius: "8px", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
            <SectionTag text={t.booking.tag} isArabic={isArabic} />
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1.5rem", letterSpacing: "-0.5px", color: "#18181b" }}>
              {isArabic ? "حجز موعد" : t.booking.title}
            </h1>

            {submitted ? (
              <div style={{ padding: "2rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "6px", border: "1px solid var(--success)", textAlign: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem auto" }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#18181b", marginBottom: "0.5rem" }}>{t.booking.successTitle}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  {t.booking.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", textAlign: isArabic ? "right" : "left" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.fullName}</label>
                  <input 
                    type="text" 
                    required
                    placeholder={isArabic ? "مثال: سالم الريامي" : "e.g., Salim Al-Riyami"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem"
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.phone}</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+968 9XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                        border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem"
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.vehicleModel}</label>
                    <input 
                      type="text" 
                      required
                      placeholder={isArabic ? "مثال: بي إم دبليو ٧٥٠" : "e.g., BMW 750Li"}
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      style={{
                        width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                        border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.serviceType}</label>
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem"
                    }}
                  >
                    <option value="general-maintenance">{isArabic ? "صيانة عامة" : "General Maintenance"}</option>
                    <option value="engine-repair">{isArabic ? "خدمات المحرك" : "Engine Services"}</option>
                    <option value="transmission-service">{isArabic ? "خدمات ناقل الحركة" : "Transmission Services"}</option>
                    <option value="brake-repair">{isArabic ? "خدمات الفرامل" : "Brake Services"}</option>
                    <option value="suspension-steering">{isArabic ? "نظام التعليق والتوجيه (Airmatic)" : "Suspension & Steering (Airmatic & Hydraulic)"}</option>
                    <option value="electrical-electronics">{isArabic ? "الأنظمة الكهربائية والإلكترونية" : "Electrical & Electronics"}</option>
                    <option value="air-conditioning">{isArabic ? "تكييف الهواء" : "Air Conditioning"}</option>
                    <option value="body-paint">{isArabic ? "هيكل وطلاء السيارات (تعديل الضربات ورش)" : "Body & Paint (Denting & Painting)"}</option>
                  </select>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.date}</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{
                        width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                        border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem"
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.time}</label>
                    <input 
                      type="time" 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      style={{
                        width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                        border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.5rem", color: "#18181b" }}>{t.booking.requirements}</label>
                  <textarea 
                    rows="3"
                    placeholder={isArabic ? "صف مشكلة سيارتك بالتفصيل..." : "Describe your car's issue..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", background: "#ffffff", 
                      border: "1px solid var(--card-border)", borderRadius: "4px", color: "#18181b", outline: "none", fontSize: "0.95rem", resize: "none"
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                  {t.booking.onlineBtn}
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0.5rem 0" }}>
                  <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.05)" }}></div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600" }}>{t.booking.or}</span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.05)" }}></div>
                </div>

                <button 
                  type="button" 
                  onClick={handleWhatsAppInstant}
                  className="btn btn-secondary" 
                  style={{ 
                    width: "100%", 
                    border: "1px solid #25D366", 
                    color: "#25D366", 
                    background: "rgba(37, 211, 102, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    flexDirection: isArabic ? "row-reverse" : "row"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.326 1.967 13.863.94 11.245.94 5.808.94 1.387 5.31 1.383 10.74c-.001 1.745.463 3.447 1.345 4.95l-.994 3.633 3.733-.967c1.478.807 3.013 1.221 4.58 1.221z"/>
                  </svg>
                  {t.booking.waBtn}
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: isArabic ? "right" : "left" }}>
            <div className="glass" style={{ padding: "2.5rem 2rem", borderRadius: "8px", background: "#f8f9fa", border: "1px solid #e4e4e7" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "1rem", color: "#18181b" }}>{t.booking.importantTitle}</h3>
              <ul style={{ paddingRight: isArabic ? "1.25rem" : "0", paddingLeft: isArabic ? "0" : "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem", lineHeight: "1.5" }}>
                <li>{t.booking.info1}</li>
                <li>{t.booking.info2}</li>
                <li>{t.booking.info3}</li>
                <li>{t.booking.info4}</li>
              </ul>
            </div>

            <div style={{
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid var(--card-border)",
              height: "300px"
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

        </div>
      </div>
      <Footer />
    </>
  );
}
