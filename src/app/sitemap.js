export default async function sitemap() {
  const baseUrl = "https://keralamotor.om";

  const paths = [
    "",
    "/services",
    "/services/general-maintenance",
    "/services/engine-repair",
    "/services/transmission-service",
    "/services/brake-repair",
    "/services/suspension-steering",
    "/services/electrical-electronics",
    "/services/air-conditioning",
    "/services/tires-wheels",
    "/services/body-paint",
    "/services/detailing-protection",
    "/services/luxury-performance",
    "/services/emergency-services",
    "/services/additional-services",
    "/about",
    "/blog",
    "/contact",
    "/book-appointment",
    "/emergency",
  ];

  const locales = ["en", "ar"];
  const sitemapEntries = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "weekly",
        priority: path === "" ? 1.0 : path.startsWith("/services/") ? 0.8 : 0.6,
      });
    });
  });

  return sitemapEntries;
}
