import { notFound } from "next/navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { translations } from "@/components/translations";

export default async function LocalizedLayout({ children, params }) {
  const { locale } = await params;
  if (!translations[locale]) {
    notFound();
  }
  const isArabic = locale === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  return (
    <div dir={dir} lang={locale} style={{ 
      display: "flex", 
      flexDirection: "column", 
      minHeight: "100vh",
      width: "100%",
      direction: dir
    }}>
      {children}
      <FloatingWhatsApp locale={locale} />
    </div>
  );
}
