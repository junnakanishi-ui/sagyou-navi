export const STORE_LINKS = {
  gcSelect: "https://www.gc-select.com/",
  rakuten: "https://www.rakuten.co.jp/anzenkiki/",
  yahoo: "https://store.shopping.yahoo.co.jp/signcity-yshop/",
} as const;

export const buildUrl = (base: string, utmContent: string) => {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=sagyou_navi&utm_medium=referral&utm_campaign=2026_sagyou&utm_content=${utmContent}`;
};

export const productImg = (id: string) => `/products/${id}.jpg`;
