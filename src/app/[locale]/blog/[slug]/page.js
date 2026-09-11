"use client";

import { use } from "react";
import Link from "next/link";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogEmbed from "@/components/BlogEmbed";

export default function LocalizedBlogPostPage({ params }) {
  const { locale, slug } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  return (
    <>
      <Header />
      <div style={{
        padding: "5rem 2rem 5rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
        background: "transparent",
        direction: isArabic ? "rtl" : "ltr"
      }}>
        {/* Navigation Bar / Back button */}
        <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center" }}>
          <Link 
            href={`/${locale}/blog`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "var(--accent, #e11d48)",
              textDecoration: "none"
            }}
          >
            {isArabic ? "← العودة إلى كافة المقالات" : "← Back to All Articles"}
          </Link>
        </div>

        {/* Single Post Reader Container */}
        <div style={{ width: "100%" }}>
          <BlogEmbed 
            type="post" 
            projectId="c8e456a4-3a50-4a04-ba1e-58f6712e7b08"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
