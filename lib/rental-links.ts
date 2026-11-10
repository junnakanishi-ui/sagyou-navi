export const RENTAL_SLUG = "safety-supplies-rental-guide";
export const RENTAL_PATH = `/articles/${RENTAL_SLUG}`;

export function rentalUrl(placement: string, anchor?: string) {
  const url = new URL("https://gc-anzen.com/rental");
  url.searchParams.set("utm_source", "sagyou_navi");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", RENTAL_SLUG);
  url.searchParams.set("utm_content", placement);
  if (anchor) url.hash = anchor;
  return url.toString();
}
