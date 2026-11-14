export const MARATHON_SLUG = "marathon-event-safety-equipment";
export const MARATHON_PATH = `/articles/${MARATHON_SLUG}`;
export const MARATHON_DESTINATION = "https://gc-anzen.com/events/marathon";

export function marathonUrl(placement: string) {
  const url = new URL(MARATHON_DESTINATION);
  url.searchParams.set("utm_source", "sagyou_navi");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", MARATHON_SLUG);
  url.searchParams.set("utm_content", placement);
  return url.toString();
}
