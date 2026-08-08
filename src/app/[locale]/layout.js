export default async function LocalizedLayout({ children, params }) {
  const { locale } = await params;
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
    </div>
  );
}
