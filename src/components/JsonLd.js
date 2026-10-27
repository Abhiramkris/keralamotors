export default function JsonLd({ locale = "en" }) {
  const isArabic = locale === "ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://keralamotor.om/#autorepair",
    name: "Kerala Auto Motors",
    alternateName: isArabic ? "كيرلا للسيارات" : "Kerala Auto Motors Workshop",
    url: `https://keralamotor.om/${locale}`,
    logo: "https://keralamotor.om/kerala_motors_logo_transparent.png",
    image: [
      "https://keralamotor.om/workshop_facade_hero.webp",
      "https://keralamotor.om/process_step1.jpg"
    ],
    description: isArabic
      ? "مركز صيانة وتشخيص متكامل للسيارات الأوروبية والأمريكية الفاخرة في الوادي الكبير، مسقط، سلطنة عمان."
      : "Specialized maintenance and diagnostic services for European and American luxury vehicle brands in Al Wadi Al Kabir, Muscat, Oman.",
    telephone: "+96871717259",
    email: "info@keralamotor.om",
    priceRange: "$$",
    currenciesAccepted: "OMR",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Modern Raha Beach, Al Wadi Al Kabir",
      addressLocality: "Muscat",
      addressRegion: "Muscat",
      addressCountry: "OM"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.585497,
      longitude: 58.5588108
    },
    hasMap: "https://maps.google.com/maps?q=23.585497%2C58.5588108",
    areaServed: {
      "@type": "City",
      name: "Muscat"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "15:30",
        closes: "19:30"
      }
    ],
    openingHours: [
      "Mo-Su 08:00-13:00",
      "Mo-Su 15:30-19:30"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
      }}
    />
  );
}
