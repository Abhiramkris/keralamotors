"use client";

import { useEffect, useRef } from "react";

export default function BlogEmbed({ 
  type = "container", 
  projectId = "c8e456a4-3a50-4a04-ba1e-58f6712e7b08", 
  limit = 9, 
  redirectUrl = "/blog" 
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    const SCRIPT_SRC = "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed";

    function ensureLoaded() {
      const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      } else {
        // Reset rendered flag so the script will process the fresh container
        const targetId = type === "post" ? "certifyied-blog-post" : "certifyied-blog-container";
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          // Clear any previously injected content by the external script to prevent duplicates
          targetEl.innerHTML = "";
          delete targetEl.dataset.rendered;
          // Trigger DOM mutation to wake up MutationObserver inside embed script
          const tick = document.createElement("span");
          targetEl.appendChild(tick);
          targetEl.removeChild(tick);
        }
      }
    }

    ensureLoaded();
  }, [type, projectId, limit, redirectUrl]);

  if (type === "post") {
    return (
      <div 
        id="certifyied-blog-post" 
        data-project-id={projectId}
        style={{ minHeight: "320px", width: "100%" }}
      />
    );
  }

  return (
    <div 
      id="certifyied-blog-container" 
      data-project-id={projectId} 
      data-limit={limit} 
      data-redirect-url={redirectUrl}
      style={{ minHeight: "320px", width: "100%" }}
    />
  );
}
