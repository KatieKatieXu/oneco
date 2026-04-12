import { type NextRequest } from "next/server";

/**
 * Geo-detection API route.
 *
 * 1. On Vercel, the `x-vercel-ip-country` header gives us the country
 *    code for free — no external API call needed.
 * 2. Fallback: call ip-api.com (free, no key required, 45 req/min).
 * 3. Maps country → language code that our i18n system supports.
 */

const COUNTRY_TO_LANG: Record<string, string> = {
  // Chinese-speaking
  CN: "zh",
  TW: "zh",
  HK: "zh",
  MO: "zh",
  // Spanish-speaking
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  EC: "es",
  GT: "es",
  CU: "es",
  BO: "es",
  DO: "es",
  HN: "es",
  PY: "es",
  SV: "es",
  NI: "es",
  CR: "es",
  PA: "es",
  UY: "es",
  // French-speaking
  FR: "fr",
  BE: "fr",
  CH: "fr",
  CA: "fr",
  SN: "fr",
  CI: "fr",
  ML: "fr",
  CM: "fr",
  MG: "fr",
  BF: "fr",
};

export async function GET(request: NextRequest) {
  // 1. Try Vercel's built-in geo header (instant, free)
  const vercelCountry = request.headers.get("x-vercel-ip-country");

  if (vercelCountry) {
    const lang = COUNTRY_TO_LANG[vercelCountry] ?? "en";
    return Response.json({ country: vercelCountry, lang });
  }

  // 2. Fallback: use ip-api.com for local dev / non-Vercel hosts
  try {
    // Get client IP from forwarded headers
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim();

    // ip-api.com: if no IP provided, it detects from the request origin
    const url = ip
      ? `http://ip-api.com/json/${ip}?fields=countryCode`
      : `http://ip-api.com/json/?fields=countryCode`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    const country = data.countryCode ?? "US";
    const lang = COUNTRY_TO_LANG[country] ?? "en";

    return Response.json({ country, lang });
  } catch {
    return Response.json({ country: "US", lang: "en" });
  }
}
