export const SAFETY_BANNER_SLUG = "construction-safety-banner-guide";
export const SAFETY_BANNER_PATH = `/articles/${SAFETY_BANNER_SLUG}`;
export const SAFETY_BANNER_COLLECTION = "https://www.gc-select.com/collections/安全機材用品-横幕-たれ幕";

export function safetyBannerUrl(placement: string, productId?: string) {
  const url = new URL(productId ? `https://www.gc-select.com/products/${productId}` : SAFETY_BANNER_COLLECTION);
  url.searchParams.set("utm_source", "sagyou_navi");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", SAFETY_BANNER_SLUG);
  url.searchParams.set("utm_content", placement);
  return url.toString();
}
