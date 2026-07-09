// Article-interest tracking. Two layers, both fire on every article read:
//   1. Google Analytics 4 (window.gtag) — rich marketing dashboards. Activates once
//      the GA4 Measurement ID is set in public/index.html.
//   2. Self-hosted counter — POSTs to our own Express backend so we own the raw data.
//      Only records when the backend is running/deployed; failures are swallowed so
//      the page never breaks.

export const trackArticleView = (slug, title) => {
  // Layer 1: GA4
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "article_view", {
      article_slug: slug,
      article_title: title,
    });
  }

  // Layer 2: self-hosted counter
  try {
    fetch("/api/track/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, title }),
      keepalive: true,
    }).catch(() => {});
  } catch (e) {
    // ponytail: tracking is best-effort — never let it surface to the reader
  }
};
