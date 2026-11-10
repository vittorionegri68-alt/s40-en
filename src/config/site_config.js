// Site-level settings for this language version (English).
export const site = {
  lang: "en",
  locale: "en-GB",
  brand: "S40 Fietsservice",
  siteUrl: "https://en.s40.nl",
  // Language switcher targets. On *.vercel.app the staging URLs are used, otherwise the final domains.
  // useStagingLinks: false since go-live (10/11/2026). Set to true only to point the EN site at the NL staging while s40.nl is unavailable.
  switcher: {
    useStagingLinks: false,
    current: "EN",
    other: "NL",
    otherLabel: "Nederlands",
    otherHrefFinal: "https://s40.nl",
    otherHrefStaging: "https://s40-nl.vercel.app",
  },
  weatherEndpoint: "/api/weather",
  authorCredit: { label: "Website by AI'm by VNS", href: "https://www.aim-vns.com" },
};

export function otherLanguageHref() {
  const s = site.switcher;
  if (s.useStagingLinks) return s.otherHrefStaging;
  if (typeof window !== "undefined" && /vercel\.app$/.test(window.location.hostname)) return s.otherHrefStaging;
  return s.otherHrefFinal;
}
