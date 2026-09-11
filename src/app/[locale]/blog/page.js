"use client";

import { use } from "react";
import Link from "next/link";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import BlogEmbed from "@/components/BlogEmbed";

export default function LocalizedBlogPage({ params }) {
  const { locale } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];

  return (
    <>
      <Header />
      <div style={{
        padding: "6rem 2rem 5rem 2rem",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        width: "100%",
        background: "transparent",
        direction: isArabic ? "rtl" : "ltr"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }} className="animate-fade-in">
          <SectionTag text={t.blog?.tag || (isArabic ? "المقالات والأخبار" : "Insights & News")} isArabic={isArabic} />
          <h1 style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: "900",
            marginTop: "0.5rem",
            marginBottom: "1rem",
            letterSpacing: "-1px",
            color: "#18181b"
          }}>
            {t.blog?.title || (isArabic ? "رؤى وأخبار السيارات" : "Automotive News & Insights")}
          </h1>
          <p style={{
            color: "var(--text-muted)",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontSize: "1rem"
          }}>
            {t.blog?.subtitle || (isArabic ? "أحدث المقالات والإرشادات الهندسية لصيانة السيارات الفاخرة في مسقط." : "Latest stories, technical guides, and engineering updates from Kerala Auto Motors in Muscat.")}
          </p>
        </div>

        {/* Single Post Reader / Blog List Container */}
        <div style={{ width: "100%", margin: "0 auto" }}>
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
