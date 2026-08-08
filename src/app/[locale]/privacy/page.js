"use client";

import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocalizedPrivacyPolicyPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 4rem 2rem", maxWidth: "800px", margin: "0 auto", width: "100%", lineHeight: "1.7", color: "var(--text-muted)", background: "transparent", direction: isArabic ? "rtl" : "ltr", textAlign: isArabic ? "right" : "left" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "#ffffff" }}>
          {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        <p style={{ marginBottom: "1.5rem" }}>
          {isArabic 
            ? "في ورشة كيرلا أوتو موتورز، التي يمكن الوصول إليها من https://keralamotor.om، فإن إحدى أولوياتنا الرئيسية هي خصوصية زوارنا. تحتوي وثيقة سياسة الخصوصية هذه على أنواع المعلومات التي يتم جمعها وتسجيلها وكيفية استخدامها."
            : "At Kerala Auto Motors, accessible from https://keralamotor.om, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Kerala Auto Motors and how we use it."}
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginTop: "2rem", marginBottom: "1rem", color: "#ffffff" }}>
          {isArabic ? "المعلومات التي نجمعها" : "Information We Collect"}
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          {isArabic
            ? "سيتم توضيح المعلومات الشخصية المطلوبة منك تقديمها، وأسباب طلب تقديمها، عند النقطة التي نطلب منك فيها تقديم معلوماتك الشخصية."
            : "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."}
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          {isArabic
            ? "إذا اتصلت بنا مباشرة أو حجزت موعدًا، فقد نتلقى معلومات إضافية عنك مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وطراز مركبتك وإحداثيات الموقع (إذا تمت مشاركتها للمساعدة على الطريق)، ومحتويات الرسالة التي ترسلها."
            : "If you contact us directly or book an appointment, we may receive additional information about you such as your name, email address, phone number, vehicle model, coordinates (if shared for breakdown recovery), and the contents of the message you send."}
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginTop: "2rem", marginBottom: "1rem", color: "#ffffff" }}>
          {isArabic ? "كيفية استخدام معلوماتك" : "How We Use Your Information"}
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          {isArabic ? "نستخدم المعلومات التي نجمعها بطرق مختلفة، بما في ذلك:" : "We use the information we collect in various ways, including to:"}
        </p>
        <ul style={{ [isArabic ? "paddingRight" : "paddingLeft"]: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {isArabic ? (
            <>
              <li>توفير وتشغيل وصيانة موقعنا وأنظمة تقارير التشخيص</li>
              <li>تحسين وتخصيص وتوسيع خدماتنا وعملياتنا</li>
              <li>فهم وتحليل كيفية استخدامك لمنصتنا الإلكترونية</li>
              <li>التواصل معك بخصوص مواعيد الحجز وتحديثات المساعدة على الطريق</li>
              <li>إرسال تأكيدات الخدمة وتفاصيل التشخيص الفني لك</li>
            </>
          ) : (
            <>
              <li>Provide, operate, and maintain our website and diagnostic reporting systems</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our web platform</li>
              <li>Communicate with you regarding booking slots and roadside assistance updates</li>
              <li>Send you service confirmations and technical diagnostic details</li>
            </>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}
