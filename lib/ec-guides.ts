export const EC_GUIDE_DATE = "2026-11-22";
export const EC_GUIDE_IMAGES = "/images/articles/gc-select-product-guides/";

export const EC_GUIDES = {
  cone: {
    slug: "cone-sign-installation-guide",
    title: "コーン看板の取り付け方と選び方｜表示板・カバー・専用キャップを比較",
    shortTitle: "コーン看板・カバーの選び方",
    headline: ["コーンに看板を", "付けるには？"],
    subhead: ["表示板・カバーと", "取付部品を比較"],
    description: "コーンに看板を取り付けたい方へ。GCコーンサイン、反射コーンカバー、充電式LEDサインを写真と仕様で比較。専用キャップの別売、両面表示に必要な枚数、コーンへの適合確認まで解説します。",
    lead: "駐車場の入口や施設の通路で、コーンに「立入禁止」や進行方向を表示したい。そんなときは、文言と一緒に取り付け方を選ぶと、必要なものが分かります。この記事では、GCセレクトの表示用品4点と専用部品1点を紹介します。",
    collection: "https://www.gc-select.com/collections/安全機材用品-コーン用品",
    collectionLabel: "コーン用品の一覧を見る",
    image: `${EC_GUIDE_IMAGES}6300036077.jpg`,
    readTime: "約8分",
    heroProducts: [
      { id: "6300036077", label: "立入禁止の表示板" },
      { id: "1105080603", label: "かぶせる反射カバー" },
      { id: "6300008368", label: "光るLEDサイン" },
      { id: "1105070301", label: "別売の専用キャップ" },
    ],
  },
  blanket: {
    slug: "office-emergency-blanket-selection",
    title: "会社の備蓄毛布の選び方｜圧縮毛布・アルミシートの違いと収納サイズ",
    shortTitle: "会社の備蓄毛布・アルミシート比較",
    headline: ["会社の備蓄毛布、", "何を選ぶ？"],
    subhead: ["圧縮毛布・アルミシートを", "用途で比較"],
    description: "会社に備蓄する圧縮毛布とアルミシート・ポンチョの違いを、使う場面・収納サイズ・販売単位で整理。GCセレクトの4商品を写真で比較し、保管スペースと購入数量の確認方法を紹介します。",
    lead: "防災用の毛布を人数分そろえたいけれど、保管場所に余裕がない。アルミシートで代用できるのかも気になる。まずは「社内で休むため」と「持ち出して使うため」を分けて考えると、選びやすくなります。収納寸法と販売単位も確認しながら、4つの商品を比べてみましょう。",
    collection: "https://www.gc-select.com/collections/安全機材用品-災害対策",
    collectionLabel: "防災用品の一覧を見る",
    image: `${EC_GUIDE_IMAGES}6300030136.jpg`,
    readTime: "約8分",
    heroProducts: [
      { id: "6300056722", label: "1枚ずつ備える毛布" },
      { id: "6300030136", label: "10枚入りの圧縮毛布" },
      { id: "6300088249", label: "静音アルミシート" },
      { id: "6300046005", label: "50人分のポンチョ" },
    ],
  },
} as const;

export type EcGuideKey = keyof typeof EC_GUIDES;

export function ecGuideUrl(guideKey: EcGuideKey, placement: string, productId?: string) {
  const guide = EC_GUIDES[guideKey];
  const url = new URL(productId ? `https://www.gc-select.com/products/${productId}` : guide.collection);
  url.searchParams.set("utm_source", "sagyou_navi");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", guide.slug);
  url.searchParams.set("utm_content", placement);
  return url.toString();
}
