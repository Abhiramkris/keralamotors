"use client";

import { translations } from "@/components/translations";

export default function FloatingWhatsApp({ locale = "en" }) {
  const isArabic = locale === "ar";
  const t = translations[locale]?.floatingWhatsApp || translations.en.floatingWhatsApp;
  const whatsappUrl = `https://wa.me/96897420425?text=${encodeURIComponent(t.defaultMessage)}`;

  return (
    <aside aria-label="WhatsApp Contact" className="floating-wa-container">
      {/* Tooltip / Label visible on desktop hover */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-tooltip"
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="floating-wa-tooltip-dot" />
        <span>{t.tooltipTitle}</span>
      </a>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label={t.ariaLabel}
        title={t.tooltipTitle}
      >
        {/* Animated radar/ripple ring */}
        <span className="floating-wa-pulse" aria-hidden="true" />
        
        {/* WhatsApp Vector Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.326 1.967 13.863.94 11.245.94 5.808.94 1.387 5.31 1.383 10.74c-.001 1.745.463 3.447 1.345 4.95l-.994 3.633 3.733-.967c1.478.807 3.013 1.221 4.58 1.221zM17.9 14.18c-.3-.15-1.77-.872-2.04-.972-.27-.1-.47-.15-.67.15-.2.3-.77.972-.94 1.172-.17.2-.34.22-.64.07-1.125-.565-2.046-1.258-2.836-2.1-.66-.7-.2-1.17.07-1.37.15-.1.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.107 3.218 5.104 4.513.713.308 1.27.492 1.703.63.717.228 1.368.196 1.883.119.574-.085 1.77-.723 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.155-.275-.25-.575-.4z" />
        </svg>

        {/* Small live online dot badge */}
        <span className="floating-wa-badge" aria-hidden="true">
          <span className="floating-wa-badge-dot" />
        </span>
      </a>
    </aside>
  );
}
