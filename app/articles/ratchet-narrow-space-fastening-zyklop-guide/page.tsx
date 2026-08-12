import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "ratchet-narrow-space-fastening-zyklop-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "狭い場所のボルト締めを速くするには？首振り・早回しラチェットの選び方とWeraサイクロップ比較【2026年版】";
const SHORT_TITLE = "狭い場所のボルト締めを速くするには？";
const DESCRIPTION =
  "狭い場所でラチェットを振れない、ボルト締めに時間がかかる現場向けに、首振り・薄型・早回しラチェットの選び方を解説。WeraサイクロップのSpeed・Metal・Hybrid・Miniの違い、1/4・3/8・1/2の使い分け、セット選びまで実務目線で整理します。";
const PUBLISHED = "2026-08-12";
const HERO = "narrow-space-ratchet-work-hero.jpg";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=wera_zyklop_narrow_space_2026";

function withUtm(url: string) {
  if (url.includes("utm_source=")) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}${UTM}`;
}

const ctaByLabel = Object.fromEntries(
  productData.cta_links.map((c) => [c.label, withUtm(c.url)])
) as Record<string, string>;

const WERA_LIST = ctaByLabel["Wera サイクロップラチェット一覧"];
const HAND_TOOLS = ctaByLabel["手作業工具一覧"];
const TOOLBOX = ctaByLabel["工具箱一覧"];
const CART = ctaByLabel["運搬台車一覧"];
const WORKBENCH = ctaByLabel["作業台一覧"];
const TRUSCO = ctaByLabel["トラスコ中山掲載商品一覧"];

type CatalogFeatured = (typeof productData.featured_products)[number];

const catalogBySku = Object.fromEntries(
  productData.featured_products.map((p) => [p.sku, p])
) as Record<string, CatalogFeatured>;

function productImageExists(imageFile: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      imageFile
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
}

type FeaturedProduct = {
  sku: string;
  name: string;
  imageFile: string;
  url: string;
  badge: string;
  use: string;
  fit: string;
  reason: string;
  diff: string;
  check: string;
};

function enrich(
  sku: string,
  fields: Omit<FeaturedProduct, "sku" | "imageFile" | "url">
): FeaturedProduct {
  const cat = catalogBySku[sku];
  return {
    sku,
    imageFile: cat?.image ?? `${sku}.jpg`,
    url: withUtm(cat?.url ?? "#"),
    ...fields,
  };
}

const featured: Record<string, FeaturedProduct> = {
  "003500": enrich("003500", {
    name: "Wera サイクロップラチェット 1/4",
    badge: "Speed・1/4",
    use: "小型機械、装置内部、電装まわりなど、工具のコンパクトさを優先したい締結",
    fit: "細かい組立・小径ボルト中心の現場",
    reason: "可動ヘッドと早回しを活かし、姿勢を変えながら小径ボルトを速く回しやすい",
    diff: "Metalより薄さ最優先ではなく、首振り・ドライバー的操作を重視する選択肢",
    check: "既存ソケットの差込角が1/4か、狭所の主因が振り幅不足かを確認",
  }),
  "003550": enrich("003550", {
    name: "Wera サイクロップラチェット 3/8",
    badge: "Speed・3/8",
    use: "機械整備・設備保全など、汎用サイズのボルト締結",
    fit: "最初の1セットを何にするか迷う法人・保全部門",
    reason: "1/4ほど小型に寄りすぎず、1/2ほど大きくなりすぎないバランス",
    diff: "汎用域のSpeed。狭所ヘッド厚み優先なら同サイズMetalも比較",
    check: "対象ボルトと既存ソケットが3/8中心かを確認",
  }),
  "003600": enrich("003600", {
    name: "Wera サイクロップラチェット 1/2",
    badge: "Speed・1/2",
    use: "大きめソケットを使う締結で、可動ヘッドと早回しも欲しい作業",
    fit: "車両・大型設備寄りのボルトサイズを扱う現場",
    reason: "1/2でSpeedの可動ヘッド・早回しを使える",
    diff: "差込角が大きいほど狭所有利ではない。狭所最優先なら1/4・3/8も検討",
    check: "ヘッド・ソケット径が作業空間に収まるかを確認",
  }),
  "003793": enrich("003793", {
    name: "Wera 8008A サイクロップラチェット「ミニ」1/4",
    badge: "Mini・1/4",
    use: "小型装置、盤内、狭いカバー内部など、工具自体の大きさが問題になる場所",
    fit: "携行工具を小さくしたい現場",
    reason: "Speedの多機能やHybridの高トルクとは別方向。小型であることが価値",
    diff: "首振り多機能や長いハンドルではなく、コンパクトさを優先する選択肢",
    check: "大径・高トルク用途ではないことを作業対象で確認",
  }),
  "004003": enrich("004003", {
    name: "Wera 8003A サイクロップラチェット「メタル」1/4",
    badge: "Metal Push・1/4",
    use: "ラチェットヘッドそのものが入りにくい狭所の小径ボルト",
    fit: "ヘッド厚み・径を最優先したい1/4作業",
    reason: "フルメタルのスリム設計。押込み式の正逆切替で不意の切替やソケット紛失を避けやすい",
    diff: "Speedのような可動ヘッドではない。薄さ優先のMetal Push",
    check: "正逆切替がPush方式で問題ないか、狭所の主因がヘッド厚みかを確認",
  }),
  "004004": enrich("004004", {
    name: "Wera 8004A サイクロップラチェット「メタル」1/4 チェンジレバー",
    badge: "Metal Switch・1/4",
    use: "ヘッド薄さが必要で、方向切替をレバー操作で頻繁に行う1/4作業",
    fit: "狭所＋方向切替が多い現場",
    reason: "エクストラスリム設計のMetal Switch。レバー操作で直感的に正逆を変えやすい",
    diff: "同じMetalでもPushは押込み切替。頻繁切替ならSwitchが扱いやすい",
    check: "レバーが障害物に干渉しないか、必要な戻り角・厚みを確認",
  }),
  "004033": enrich("004033", {
    name: "Wera 8003B サイクロップラチェット「メタル」3/8",
    badge: "Metal Push・3/8",
    use: "ヘッドが入りにくい狭所で、3/8ソケットを使う保全・整備",
    fit: "汎用差込角でスリムヘッドが欲しい現場",
    reason: "Metal Pushの3/8。ヘッド厚み問題に対応しつつ汎用サイズを確保",
    diff: "同サイズSpeedは可動ヘッド寄り。薄さならMetal",
    check: "既存ソケットが3/8か、ヘッド隙間と振り幅のどちらが主因かを確認",
  }),
  "004063": enrich("004063", {
    name: "Wera 8003C サイクロップラチェット「メタル」1/2",
    badge: "Metal Push・1/2",
    use: "大きめソケットでもヘッド厚みが原因で入れない場所",
    fit: "1/2中心で狭所クリアランスが厳しい現場",
    reason: "1/2のMetal Push。大径寄りでもスリムヘッドを優先できる",
    diff: "Hybridはトルク側。Metalはヘッド薄さ側",
    check: "1/2ソケット装着後の全高が隙間に収まるかを確認",
  }),
  "003780": enrich("003780", {
    name: "Wera 8006C サイクロップラチェット「ハイブリッド」1/2",
    badge: "Hybrid・1/2",
    use: "アクセスはできるが、ハンドルが短くて力を掛けにくい締結",
    fit: "比較的大径ボルト、緩め始めに力が必要な作業",
    reason: "スリムなヘッドに長い全長を組み合わせ、トルク伝達を狙った設計",
    diff: "狭所用の最高モデルではない。トルク側へ振った選択肢",
    check: "長いハンドルを振れる空間があるか、必要なら専用エクステンションも検討",
  }),
  "004016": enrich("004016", {
    name: "Wera 8100SA6 サイクロップラチェット「スピード」セット 1/4",
    badge: "Speedセット・1/4",
    use: "1/4のSpeed一式を現場セットとして新規導入したい場合",
    fit: "何を組み合わせるか迷いたくない導入・支給",
    reason: "単品＋ソケットを個別選定するより、ケース単位で標準化しやすい",
    diff: "Metalセットは薄さ重視。Speedセットは可動ヘッド・早回し重視",
    check: "既存ソケット流用か、セット支給かを先に決める",
  }),
  "004046": enrich("004046", {
    name: "Wera 8100SB6 サイクロップラチェット「スピード」セット 3/8",
    badge: "Speedセット・3/8",
    use: "設備保全の汎用域として3/8 Speedセットを標準化したい場合",
    fit: "法人の最初の現場セット候補",
    reason: "3/8はサイズと力のバランスが取りやすく、セット導入と相性がよい",
    diff: "同サイズMetalセットはヘッド薄さ優先の構成",
    check: "主作業が3/8中心か、工具箱の定位置まで決められるか",
  }),
  "004076": enrich("004076", {
    name: "Wera 8100SC6 サイクロップラチェット「スピード」セット 1/2",
    badge: "Speedセット・1/2",
    use: "1/2 Speedをケースごと標準化したい導入",
    fit: "大きめボルト作業が多い部門の一式導入",
    reason: "ハンドルだけでなくソケット構成まで揃えて支給・管理しやすい",
    diff: "狭所最優先なら小さい差込角のセットも必要になりやすい",
    check: "1/2だけで全部統一しない方針かも確認",
  }),
  "004017": enrich("004017", {
    name: "Wera 8100SA7 サイクロップラチェット「メタル」セット 1/4",
    badge: "Metalセット・1/4",
    use: "ヘッド厚みが問題の狭所向けに、1/4 Metal一式を導入したい場合",
    fit: "小型・精密寄りでスリムヘッドを標準化したい現場",
    reason: "狭所対応を重視したMetalセット。ケース管理しやすい",
    diff: "Speedセットは首振り・早回し寄り。薄さならMetalセット",
    check: "狭さの主因がヘッド厚みか、可動ヘッド不足かを確認",
  }),
  "004047": enrich("004047", {
    name: "Wera 8100SB7 サイクロップラチェット「メタル」セット 3/8",
    badge: "Metalセット・3/8",
    use: "汎用3/8でスリムヘッドセットを標準化したい保全・整備",
    fit: "狭所クリアランスが厳しい汎用作業",
    reason: "3/8 Metalを一式で揃え、工具構成の迷いを減らせる",
    diff: "Speedセットと比較し、薄さ vs 可動ヘッドで選ぶ",
    check: "セット内容のソケットサイズが対象ボルトに合うか確認",
  }),
  "004077": enrich("004077", {
    name: "Wera 8100SC7 サイクロップラチェット「メタル」セット 1/2",
    badge: "Metalセット・1/2",
    use: "1/2でヘッド薄さを優先したセット導入",
    fit: "大径寄りでもクリアランスが厳しい現場",
    reason: "1/2 Metalをケース単位で標準化できる",
    diff: "Hybrid単品はトルク側。Metalセットは薄さ側の一式",
    check: "売切廃番の旧SKUと混同せず、現行セットを確認",
  }),
  "003529": enrich("003529", {
    name: "Wera 8784A1 サイクロップアダプター 1/4",
    badge: "アダプター・1/4",
    use: "Speedをドライバー的に使う、ビットやソケット構成を組み替える作業",
    fit: "1/4 Speed周辺の構成変更",
    reason: "本体の早回し・0°固定を活かすための周辺部品",
    diff: "ラチェット本体の代替ではなく、使い方を広げる部品",
    check: "対応差込角と使用ビット／ソケットの適合を確認",
  }),
  "003590": enrich("003590", {
    name: "Wera 8784B1 サイクロップアダプター 3/8",
    badge: "アダプター・3/8",
    use: "3/8サイクロップで構成を変えて早回し・ビット作業へつなぐ場合",
    fit: "3/8中心の現場セット補強",
    reason: "本体を買い足さず、作業内容に応じて構成を組み替えられる",
    diff: "エクステンション（長さ）とは役割が違う",
    check: "必要なアダプター差込角が本体と一致するか",
  }),
  "003641": enrich("003641", {
    name: "Wera 8784C1 サイクロップアダプター 1/2",
    badge: "アダプター・1/2",
    use: "1/2サイクロップの構成変更・ビット接続",
    fit: "1/2セットの周辺補強",
    reason: "Speed等のドライバー的操作や構成変更に使う",
    diff: "Hybridエクステンションはトルク延長用。アダプターは構成変更用",
    check: "用途が「長さ不足」ならエクステンション側も検討",
  }),
  "003781": enrich("003781", {
    name: "Wera 8006C エクステンションバー",
    badge: "Hybridエクステンション",
    use: "Hybridでさらに力を掛けたいが、スペースに余裕がある作業",
    fit: "Hybrid 8006Cと組み合わせる保全・整備",
    reason: "Wera公式でもより高いトルクを伝えるための延長として説明",
    diff: "アダプターとは違い、長さとトルク側の拡張部品",
    check: "長さを足すほど万能ではない。振れる空間と必要力を確認",
  }),
};

export const metadata: Metadata = {
  title: ARTICLE_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG(HERO)}`,
        width: 1600,
        height: 900,
        alt: "機械の奥まったボルトへアクセスし、狭い場所でラチェット作業を行う現場イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG(HERO)}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG(HERO)}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${SITE_URL}/articles`,
    },
    { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: CANONICAL },
  ],
};

const seriesRows = [
  {
    name: "Zyklop Speed",
    strong: "可動ヘッド・早回し・ドライバー的操作",
    fit: "障害物がある場所、送り回数が多い作業",
    note: "ヘッドの薄さ最優先ならMetalも比較",
  },
  {
    name: "Zyklop Metal",
    strong: "スリムなフルメタルヘッド",
    fit: "ヘッドが入りにくい狭所",
    note: "可動ヘッドではない",
  },
  {
    name: "Zyklop Hybrid",
    strong: "長いハンドル、トルクを掛けやすい",
    fit: "比較的大きなボルト、力が必要な作業",
    note: "極端な狭所では長さが不利になる",
  },
  {
    name: "Zyklop Mini",
    strong: "コンパクト",
    fit: "小さな装置、限られたスペース",
    note: "大径・高トルク用途とは目的が違う",
  },
] as const;

const narrowTypes = [
  {
    title: "振り幅がない",
    body: "壁・配管・フレームに囲まれ、ハンドルを往復させる角度が取れない。送り角とヘッド角度が重要。",
  },
  {
    title: "ヘッドが入らない",
    body: "ボルト横の隙間が小さく、ラチェットヘッド自体を差し込めない。厚み・径・全高を優先。",
  },
  {
    title: "奥まで届かない",
    body: "カバーの奥や深いブラケット内など到達距離が足りない。エクステンションやアダプターが効く。",
  },
] as const;

const driveSizes = [
  {
    size: "1/4",
    use: "小型ボルト、電装・機器、自転車・小型機械、ヘッドサイズを抑えたい場所",
    merit: "コンパクト／小さいソケットを揃えやすい／狭いスペースに入りやすい",
  },
  {
    size: "3/8",
    use: "一般的な設備保全、自動車・バイク整備、中サイズのボルト、汎用性を取りたい現場",
    merit: "サイズと力のバランス／一つのセットで広めの作業を担当しやすい",
  },
  {
    size: "1/2",
    use: "大径ソケット、高い力を必要とする作業、車両・大型設備、Hybridを使う場面",
    merit: "大きな作業に対応しやすい（ヘッド・ソケットも大きくなりやすい点に注意）",
  },
] as const;

const failures = [
  {
    title: "歯数だけで選ぶ",
    body: "「72歯だから狭所に強い」と考えても、ヘッドが入らなければ使えません。送り角、ヘッド寸法、首振り、全長をまとめて見ます。",
  },
  {
    title: "首振りならどこでも入ると思う",
    body: "首振りはハンドルの逃げを作る機能です。ヘッド厚みそのものが原因ならMetalやMiniのような別形状を比較したほうが効果的です。",
  },
  {
    title: "長いラチェットを狭い場所へ持ち込む",
    body: "長いハンドルは力を掛けやすい一方、往復スペースが必要です。Hybridは力が必要な作業には向きますが、周囲が完全に塞がれた場所ならコンパクトなタイプが使いやすいことがあります。",
  },
  {
    title: "1/2で全部統一する",
    body: "ソケット管理は楽になりますが、小型装置では工具自体が大きくなります。工具管理の都合だけで差込角を決めず、作業場所を優先します。",
  },
  {
    title: "ラチェットで規定トルクまで管理する",
    body: "ラチェットは締結作業を効率化する工具ですが、指定トルクの管理が必要な作業は別です。作業標準やメーカー指定に従い、必要に応じてトルクレンチを使います。",
  },
] as const;

const checkItems = [
  "主に使うボルト・ナットサイズを把握した",
  "作業場所の隙間と奥行きを確認した",
  "「振り幅不足」「ヘッド厚み」「到達距離」のどれが問題か整理した",
  "1/4・3/8・1/2の役割を決めた",
  "Speed / Metal / Hybrid / Miniの用途を決めた",
  "既存ソケットを流用するか確認した",
  "セット支給か単品追加か決めた",
  "アダプター・エクステンションの必要数を決めた",
  "工具箱内の定位置を決めた",
  "リペアキットや補修部品の管理方法を決めた",
  "規定トルク管理が必要な工程では別工具を用意した",
] as const;

const faqs = [
  {
    q: "WeraサイクロップSpeedとMetalは、どちらが狭い場所に向きますか？",
    a: "ハンドルが障害物へ当たるなら、可動ヘッドを持つSpeedが使いやすい場面があります。ラチェットヘッドそのものを入れる隙間が小さい場合は、スリム設計のMetalを比較してください。「狭さの原因」で選ぶのが基本です。",
  },
  {
    q: "Zyklop Hybridは何が違いますか？",
    a: "長いハンドルとスリムなヘッドを組み合わせ、より高い力を伝えやすい方向のシリーズです。専用エクステンションもあります。極狭所より、比較的大きなトルクが必要な作業に向きます。",
  },
  {
    q: "1/4・3/8・1/2はどれを選べばよいですか？",
    a: "小型機械や狭所を優先するなら1/4、汎用性なら3/8、大きめのボルトや力が必要な作業なら1/2が基本的な考え方です。実際には使用ソケットと対象ボルトに合わせます。",
  },
  {
    q: "歯数は多いほど良いですか？",
    a: "送り角が小さくなるため狭い場所では有利ですが、歯数だけで決めるのは不十分です。ヘッド寸法、工具強度、首振り、ハンドル長も確認してください。",
  },
  {
    q: "サイクロップSpeedはドライバー代わりになりますか？",
    a: "Wera公式は、ヘッドを0°に固定して適切なアダプターとビットを付けることでドライバーのように使えると案内しています。早回し工程との相性がよい機能です。",
  },
  {
    q: "単品とセットではどちらが良いですか？",
    a: "すでにソケットを持っているなら単品、新規に現場セットを標準化するならセットが選びやすいです。法人支給ではケース単位で管理できるセットにも利点があります。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/manual-press-fit-work-efficiency-guide",
    label: "圧入の手作業を効率化するには？ハンドプレスの選び方",
  },
  {
    href: "/articles/roller-cabinet-tool-storage-workflow-guide",
    label: "ローラーキャビネットで工具保管と動線を整える",
  },
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label: "電線の圧着作業を効率化するには？",
  },
  {
    href: "/articles/socket-12kaku-6kaku-sashikomikaku",
    label: "ソケットは12角・6角・差込角でどう選ぶ？",
  },
] as const;

const refLinks = [
  {
    label: "Wera「Zyklop Speed」",
    href: "https://www.wera.de/ja/工具/ハイライト-great-tools/zyklop-speed",
  },
  {
    label: "Wera「8003 A Zyklop Metal Push」",
    href: "https://www.wera.de/ja/工具/8003-a-サイクロップメタルラチェット1-4-押込み型スイッチ式",
  },
  {
    label: "Wera「8004 A Zyklop Metal Switch」",
    href: "https://www.wera.de/ja/工具/8004-a-サイクロップメタルラチェット1-4-レバー式",
  },
  {
    label: "Wera「Zyklop Hybrid」",
    href: "https://www.wera.de/en/tools/highlights-great-tools/zyklop-hybrid",
  },
  {
    label: "Google Search Central「Guide to Optimizing for Generative AI Features」",
    href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
  },
] as const;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel={EXT_REL} className={className}>
      {children}
    </a>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`${cls.h2} scroll-mt-24`}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function Figure({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function ExtButton({
  href,
  children,
  tone = "amber",
}: {
  href: string;
  children: ReactNode;
  tone?: "amber" | "dark" | "rose";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-slate-900 hover:bg-slate-800"
      : tone === "rose"
        ? "bg-rose-700 hover:bg-rose-800"
        : "bg-amber-600 hover:bg-amber-700";
  return (
    <ExtLink
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-[15px] font-extrabold text-white transition ${toneClass}`}
    >
      {children}
    </ExtLink>
  );
}

function ImagePending({ name }: { name: string }) {
  return (
    <div
      className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm font-medium text-gray-800"
      role="img"
      aria-label={`${name}の画像準備中`}
    >
      画像準備中
    </div>
  );
}

function ProductCard({
  sku,
  priority = false,
}: {
  sku: string;
  priority?: boolean;
}) {
  const product = featured[sku];
  if (!product) return null;
  const hasImage = productImageExists(product.imageFile);

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.imageFile)}
              alt={`${product.name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={product.name} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.sku}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">向く作業：</dt>
              <dd className="inline">{product.use}</dd>
            </div>
            <div>
              <dt className="inline font-bold">選ぶ理由：</dt>
              <dd className="inline">{product.reason}</dd>
            </div>
            <div>
              <dt className="inline font-bold">他シリーズとの違い：</dt>
              <dd className="inline">{product.diff}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <ExtButton href={product.url}>商品ページを見る →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({
  sku,
  label,
}: {
  sku: string;
  label: string;
}) {
  const product = featured[sku];
  if (!product) {
    return <span className="font-bold">{label}</span>;
  }
  const hasImage = productImageExists(product.imageFile);
  return (
    <a
      href={product.url}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={PROD(product.imageFile)}
            alt={`${product.name}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
            準備中
          </span>
        )}
      </span>
      <span className="min-w-0">
        <span className="block font-black leading-6 group-hover:underline">
          {label}
        </span>
        <span className="mt-1 block text-[13px] leading-5 text-gray-900">
          {product.badge} ／ {product.sku}
        </span>
      </span>
    </a>
  );
}

function WeraListCta({
  title = "Wera サイクロップをまとめて比較したい方へ",
}: {
  title?: string;
}) {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      <p className="mb-4 text-xl font-extrabold text-gray-900">{title}</p>
      <ExtButton href={WERA_LIST}>Wera サイクロップラチェット一覧を見る →</ExtButton>
    </aside>
  );
}

function FinalCta() {
  return (
    <aside className="my-10 rounded-2xl border-2 border-amber-400 bg-amber-50 p-6 md:p-8">
      <h3 className={cls.ctaH3}>Wera サイクロップのラインアップをまとめて確認する</h3>
      <p className={`${cls.body} mb-5`}>
        狭さの原因と締結工程から逆算し、Speed / Metal / Hybrid / Miniと差込角を選んでください。
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <ExtButton href={WERA_LIST}>Wera サイクロップラチェット一覧 →</ExtButton>
        <ExtButton href={HAND_TOOLS}>手作業工具一覧 →</ExtButton>
        <ExtButton href={TOOLBOX} tone="dark">
          工具箱一覧 →
        </ExtButton>
        <ExtButton href={CART} tone="dark">
          運搬台車一覧 →
        </ExtButton>
        <ExtButton href={WORKBENCH} tone="dark">
          作業台一覧 →
        </ExtButton>
        <ExtButton href={TRUSCO} tone="rose">
          トラスコ中山掲載商品一覧 →
        </ExtButton>
      </div>
    </aside>
  );
}

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 pt-8 sm:px-6">
          <nav className={`${cls.meta} mb-6`} aria-label="パンくずリスト">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-2 hover:underline">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/articles"
                  className="underline-offset-2 hover:underline"
                >
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-bold text-gray-900">{SHORT_TITLE}</li>
            </ol>
          </nav>

          <p className="mb-3 text-sm font-bold tracking-wide text-amber-800">
            ソケットレンチ / 設備保全 / 狭所作業
          </p>
          <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
          <p className={cls.meta}>
            公開日：{PUBLISHED.replace(/-/g, "/")} ／ 読了目安：約26分
          </p>

          <P>
            機械の奥でラチェットが振れず、ボルト締めに時間がかかる現場向けに、首振り・薄型・早回しラチェットの選び方とWeraサイクロップ（Speed・Metal・Hybrid・Mini）の使い分けを整理します。
          </P>

          <Figure
            src={IMG(HERO)}
            alt="狭い機械内部で首振りラチェットを使ってボルトを締める作業イメージ"
            priority
          />

          <P>
            機械の奥にあるボルトを回そうとして、ラチェットのハンドルがフレームに当たる。少し回しては戻し、また少し回す。ボルト自体は難しい場所にあるわけではないのに、工具の振り幅が取れないだけで作業時間が伸びる――設備保全や自動車整備、機械組立ではよくある場面です。
          </P>
          <P>
            こうした作業では、単に「歯数が多いラチェット」を選べば解決するとは限りません。
          </P>
          <P>
            狭い場所には、大きく分けて次の3種類があります。
          </P>
          <ul className={cls.list}>
            <li>ハンドルを振るスペースがない</li>
            <li>ラチェットヘッドそのものが入らない</li>
            <li>ボルトが奥にあり、ハンドルまで距離がある</li>
          </ul>
          <P>
            必要な工具は、このどれに困っているかで変わります。Weraのサイクロップには可動ヘッドと早回しのSpeed、薄いフルメタルヘッドのMetal、長いハンドルのHybrid、コンパクトなMiniがあり、役割はそれぞれ異なります。
          </P>

          <section className="my-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
              先に要点
            </h2>
            <ul className={cls.list}>
              <li>
                振り幅がないなら、<Mark>送り角が小さいラチェット</Mark>
                が使いやすい
              </li>
              <li>
                障害物を避けたいなら、<Mark>可動ヘッドのSpeed</Mark>が候補
              </li>
              <li>
                ヘッド厚みそのものが問題なら、<Mark>スリムなMetal</Mark>が候補
              </li>
              <li>
                強い力を掛けたい場面では、<Mark>長いハンドルのHybrid</Mark>
                が候補
              </li>
              <li>
                とにかく小さく入りたいなら<Mark>Mini</Mark>を検討
              </li>
              <li>
                1/4・3/8・1/2は「大きいほど上位」ではなく、
                <strong>ボルトサイズと作業空間</strong>で選ぶ
              </li>
              <li>
                最終的に規定トルクが必要な締結は、
                <strong>対象作業に合うトルク工具で管理</strong>する
              </li>
            </ul>
          </section>

          <WeraListCta />

          <H2 id="three-reasons">狭い場所でラチェット作業が遅くなる3つの理由</H2>
          <Figure
            src={IMG("three-narrow-space-fastening-problems.jpg")}
            alt="振り幅不足・ヘッドが入らない・奥まで届かない、狭所締結の3タイプを示すイメージ"
          />
          <P>「狭い」と一言で言っても、実際には原因が違います。</P>

          <div className="my-6 grid gap-4 md:grid-cols-3">
            {narrowTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-300 bg-white p-5"
              >
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H3>1. ハンドルを振る角度が取れない</H3>
          <P>
            ラチェットは、ボルトやナットへ装着したままハンドルを往復させて回します。便利な反面、次の歯へ掛かるまで戻す角度が必要です。
          </P>
          <P>
            一般に、この必要角度が小さいほど、壁や配管、機械フレームに囲まれた場所で動かしやすくなります。
          </P>
          <P>
            WeraのZyklop Speedは<Mark>72ギアで戻り角5°</Mark>
            。Wera公式も、この短い回転角を狭い場所での作業性につなげています。
          </P>
          <P>
            ただし、送り角だけを見ればよいわけではありません。ハンドルそのものが障害物へ当たる場合は、ヘッド角度を変えられるかも重要です。
          </P>

          <H3>2. ラチェットヘッドが厚くて入らない</H3>
          <P>これは送り角では解決しません。</P>
          <P>
            ボルトと周囲の部品との隙間が小さく、「普通のラチェットを差し込むこと自体ができない」場合です。
          </P>
          <P>このとき優先したいのは、</P>
          <ul className={cls.list}>
            <li>ヘッド厚み</li>
            <li>ヘッド径</li>
            <li>ソケット装着後の全高</li>
            <li>ハンドル形状</li>
          </ul>
          <P>
            WeraのZyklop
            Metalは、この問題を強く意識したシリーズです。公式でも「限られたスペース」を開発課題として挙げ、フルメタルのスリム設計を特徴にしています。
          </P>

          <H3>3. ボルトが奥まっていて手が届かない</H3>
          <P>
            ラチェット本体を変えるより、エクステンションやアダプターの追加が効く場合があります。
          </P>
          <P>たとえば、</P>
          <ul className={cls.list}>
            <li>装置カバーの奥</li>
            <li>深いブラケット内</li>
            <li>車両の補機類の裏</li>
            <li>フレーム越しにアクセスする位置</li>
          </ul>
          <P>
            では、手元のラチェットを無理に傾けるより、ソケットをボルトまで延長したほうが安定します。
          </P>
          <P>
            狭所対策は、ラチェット本体だけではなく
            <Mark>ヘッド・送り角・長さの3点セット</Mark>
            で考えるのが基本です。
          </P>

          <H2 id="four-steps">
            ラチェット作業を速くするなら「締結の4工程」で考える
          </H2>
          <Figure
            src={IMG("ratchet-fast-spinning-workflow.jpg")}
            alt="緩め始め・早回し・着座・規定トルク仕上げの締結4工程イメージ"
          />
          <P>
            早回し性能を見るときは、作業を一括りにしないほうが分かりやすくなります。
          </P>

          <H3>工程1：固着したボルトを緩め始める</H3>
          <P>最初は比較的大きな力が必要です。</P>
          <P>ここでは、</P>
          <ul className={cls.list}>
            <li>ハンドル長</li>
            <li>グリップ</li>
            <li>工具の強度</li>
            <li>作業姿勢</li>
          </ul>
          <P>
            が重要です。狭い場所で長いハンドルを使えないこともあるため、必要トルクとスペースのバランスを見ます。
          </P>

          <H3>工程2：軽くなったボルトを送り込む・抜く</H3>
          <P>ここが作業時間に差が出やすいところです。</P>
          <P>
            ボルトが一度緩んだ後は、それほど大きな力はいりません。それでも通常のラチェットで何十回も往復していると時間がかかります。
          </P>
          <P>
            WeraのZyklop
            Speedは、ヘッドを0°に固定してドライバーのように使える設計です。Wera公式では、早回しスリーブと組み合わせて時短作業を意図した機構として説明しています。
          </P>

          <H3>工程3：着座させる</H3>
          <P>
            ボルトやナットが座面に近づくと、再び少し力が必要になります。
          </P>
          <P>ここではラチェット本来の往復操作へ戻すのが自然です。</P>
          <P>
            Speedの場合、ヘッド角度を変えながら使えるため、早回しから狭所の締め付け操作へ移りやすいのが特徴です。
          </P>

          <H3>工程4：規定トルクで仕上げる</H3>
          <P>ここは「速さ」より管理が優先です。</P>
          <P>
            車両、設備、構造物などで締付トルクが指定されている場合、ラチェットハンドルの感覚だけで完了させず、対象作業の基準に従ってトルクレンチなど適切な工具を使います。
          </P>
          <P>
            つまり、サイクロップの強みは
            <Mark>作業途中の持ち替えや送り時間を減らすこと</Mark>
            にあります。規定トルク管理の代替工具として考えるものではありません。
          </P>

          <H2 id="series">Wera サイクロップラチェットは何が違う？</H2>
          <P>Weraの「サイクロップ」は一種類ではありません。</P>
          <P>
            今回の商品データにはSpeed系、Metal、Hybrid、Miniが揃っているため、商品名だけを見るより、役割で整理したほうが選びやすくなります。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>シリーズ</th>
                  <th className={cls.th}>強み</th>
                  <th className={cls.th}>向く作業</th>
                  <th className={cls.th}>注意したい点</th>
                </tr>
              </thead>
              <tbody>
                {seriesRows.map((row) => (
                  <tr key={row.name}>
                    <td className={cls.td}>
                      <strong>{row.name}</strong>
                    </td>
                    <td className={cls.td}>{row.strong}</td>
                    <td className={cls.td}>{row.fit}</td>
                    <td className={cls.td}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            この表だけでも、「どれが上位モデルか」という見方が適切ではないことが分かります。
          </P>

          <WeraListCta title="シリーズを踏まえて商品一覧を見たい方へ" />

          <H2 id="speed">
            Speed：首振り・早回し・持ち替え削減を重視するなら
          </H2>
          <P>
            Zyklop Speedの特徴は、
            <Mark>一つのハンドルで作業姿勢を変えやすいこと</Mark>
            です。
          </P>
          <P>
            Wera公式では、ヘッドを0°、15°、90°で固定でき、0°ではアダプターとビットを付けてドライバーのように使えると説明しています。72ギアで戻り角は5°です。
          </P>
          <H3>こんな現場に向く</H3>
          <ul className={cls.list}>
            <li>機械フレームを避けながら回したい</li>
            <li>ボルトを緩めた後の送りを速くしたい</li>
            <li>横振りとドライバー的な回し方を切り替えたい</li>
            <li>一つの工具で姿勢を変えながら作業したい</li>
            <li>設備保全で多種類のボルトへ対応したい</li>
          </ul>

          <H3>1/4：細かい組立・小径ボルト中心</H3>
          <ProductCard sku="003500" priority />
          <P>
            1/4は、小型機械、装置内部、電装まわりなど、工具自体のコンパクトさを優先したい場面で使いやすい差込角です。単品を買って後からソケットを揃えるより、「何を組み合わせればよいか迷いたくない」場合は
            <ExtLink
              href={featured["004016"].url}
              className="font-bold underline underline-offset-4"
            >
              8100SA6 Speedセット 1/4（004016）
            </ExtLink>
            が導入しやすいでしょう。セット比較は後半でまとめます。
          </P>

          <H3>3/8：設備保全の汎用域として使いやすい</H3>
          <ProductCard sku="003550" />
          <P>
            3/8は、1/4ほど小型に寄りすぎず、1/2ほど大きくなりすぎないため、機械整備・設備保全で幅を持たせやすい差込角です。「最初の1セットを何にするか」で迷う法人にも比較しやすいサイズです。
          </P>

          <H3>1/2：大きめのボルトにも対応したい</H3>
          <ProductCard sku="003600" />
          <P>
            1/2は大きめのソケットを使う作業向けです。ただし、差込角が大きいほど狭所で有利になるわけではありません。ソケット径やヘッド寸法も大きくなりやすいため、狭い場所を最優先するなら1/4・3/8との使い分けが必要です。
          </P>

          <H2 id="metal">
            Metal：ヘッドが入らない狭所なら、可動性より薄さを見る
          </H2>
          <Figure
            src={IMG("slim-ratchet-head-tight-clearance.jpg")}
            alt="クリアランスの狭いボルト横へスリムなラチェットヘッドを入れるイメージ"
          />
          <P>
            「首を振れば入る」のではなく、
            <Mark>そもそもラチェットヘッドがボルト横へ入らない</Mark>
            場合があります。
          </P>
          <P>ここで比較したいのがZyklop Metalです。</P>
          <P>
            Wera公式の1/4モデルでは、Metal Switch
            8004Aはエクストラスリム設計、72歯、戻り角5°。Metal Push
            8003Aは押込み式の正逆切り替えで、4.7°の戻り角を示しています。
          </P>

          <H3>Metal PushとMetal Switchの違い</H3>
          <P>大きな違いは正逆切り替え方法です。</P>

          <H3>Metal Push</H3>
          <P>押込み型の四角差込部で方向を切り替えるタイプ。</P>
          <P>
            Weraは、不意の方向切替やソケット紛失を避けたい場合にPushを案内しています。
          </P>
          <div className="grid gap-6 md:grid-cols-2">
            <ProductCard sku="004003" />
            <ProductCard sku="004033" />
            <ProductCard sku="004063" />
          </div>

          <H3>Metal Switch</H3>
          <P>レバー操作で回転方向を変えるタイプです。</P>
          <P>
            方向を頻繁に切り替える作業では直感的に扱いやすいでしょう。
          </P>
          <ProductCard sku="004004" />
          <P>
            商品データには1/2の8004Cも含まれているため、必要な差込角に合わせて選べます。
          </P>

          <H3>SpeedとMetal、狭い場所ならどちら？</H3>
          <P>これは「狭い」の意味で決まります。</P>
          <ul className={cls.list}>
            <li>
              <strong>ハンドルが障害物へ当たる</strong> →
              Speedの可動ヘッドが有利
            </li>
            <li>
              <strong>ヘッド自体が入らない</strong> →
              Metalのスリム形状を優先
            </li>
            <li>
              <strong>送り角だけが問題</strong> →
              どちらも細かい送り角を持つモデルがあるため、形状と操作性で判断
            </li>
          </ul>
          <P>
            Speed＝上位、Metal＝下位という関係ではありません。
          </P>

          <H2 id="hybrid">Hybrid：狭さより「力不足」が問題なら候補</H2>
          <P>
            ボルトへアクセスはできるものの、ハンドルが短くて力を掛けにくい場合はHybridが候補です。
          </P>
          <P>
            Wera公式はZyklop
            Hybridについて、スリムなヘッドに加え、長い全長で高いトルク伝達を狙った設計と説明しています。専用エクステンションを組み合わせれば、さらに力を掛けられる構成です。
          </P>
          <ProductCard sku="003780" />
          <H3>向く場面</H3>
          <ul className={cls.list}>
            <li>比較的大径のボルト</li>
            <li>緩め始めに力が必要</li>
            <li>長いハンドルを振れる空間がある</li>
            <li>1/2ドライブを中心に使う</li>
            <li>可動ヘッドよりトルク伝達を優先したい</li>
          </ul>
          <H3>極狭所では逆に使いにくいこともある</H3>
          <P>
            長いハンドルは力を掛けやすい反面、周囲に障害物が多いと取り回しが悪くなります。
          </P>
          <P>
            「狭所用の最高モデル」ではなく、
            <Mark>トルク側へ振った選択肢</Mark>
            として見ると分かりやすいです。
          </P>

          <H2 id="mini">Mini：工具の大きさ自体を減らしたいとき</H2>
          <P>
            機械内部やコンパクトな設備では、普通のラチェットそのものが大きすぎる場合があります。そのときはMini系を比較します。
          </P>
          <ProductCard sku="003793" />
          <P>
            Miniは、Speedのような首振り多機能やHybridの高トルクとは別の方向性です。小型であることが価値なので、
          </P>
          <ul className={cls.list}>
            <li>小型装置</li>
            <li>盤内</li>
            <li>狭いカバー内部</li>
            <li>携行工具を小さくしたい</li>
          </ul>
          <P>といった場面で候補になります。</P>

          <H2 id="drive-size">1/4・3/8・1/2はどう選ぶ？</H2>
          <Figure
            src={IMG("ratchet-drive-size-comparison.jpg")}
            alt="1/4・3/8・1/2の差込角サイズ比較イメージ"
          />
          <P>
            差込角は「大きいほど強いから大きいものを買う」という選び方をすると、狭所作業で使いにくくなることがあります。
          </P>
          <div className="my-6 grid gap-4 md:grid-cols-3">
            {driveSizes.map((item) => (
              <div
                key={item.size}
                className="rounded-2xl border border-gray-300 bg-white p-5"
              >
                <p className="text-sm font-bold text-amber-900">差込角</p>
                <h3 className="mt-1 text-2xl font-black text-gray-900">
                  {item.size}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-900">
                  <strong>向く作業：</strong>
                  {item.use}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  <strong>メリット：</strong>
                  {item.merit}
                </p>
              </div>
            ))}
          </div>
          <H3>法人なら「一つに統一」より役割分担が現実的</H3>
          <P>保全部門で標準工具を選ぶなら、</P>
          <ul className={cls.list}>
            <li>
              <Mark>1/4</Mark>：小型・精密寄り
            </li>
            <li>
              <Mark>3/8</Mark>：汎用
            </li>
            <li>
              <Mark>1/2</Mark>：大径・力が必要
            </li>
          </ul>
          <P>
            と役割を決めておくと、工具箱の中で用途が重複しにくくなります。
          </P>

          <H2 id="single-vs-set">単品とセット、どちらを買うべき？</H2>
          <Figure
            src={IMG("ratchet-set-toolbox-standardization.jpg")}
            alt="ラチェットセットを工具箱に定位置化し標準化するイメージ"
          />
          <P>
            商品データにはサイクロップのセットが多く含まれています。これは商品数が多いからこそ、記事内で「全部紹介」するのではなく、購入パターンで整理したほうが選びやすい部分です。
          </P>
          <H3>単品が向く</H3>
          <ul className={cls.list}>
            <li>すでにソケットを持っている</li>
            <li>Wera以外のソケットと組み合わせる</li>
            <li>破損・追加導入でハンドルだけ欲しい</li>
            <li>特定の差込角だけ強化したい</li>
          </ul>
          <H3>セットが向く</H3>
          <ul className={cls.list}>
            <li>現場用として一式を新規導入</li>
            <li>ソケットサイズをまとめて標準化したい</li>
            <li>持ち出し用ケースごと管理したい</li>
            <li>個人ごとに同じ工具構成を支給したい</li>
          </ul>

          <H3>Speedセット</H3>
          <P>
            8100SA6（1/4）、8100SB6（3/8）、8100SC6（1/2）などが代表例です。
          </P>
          <div className="grid gap-6 md:grid-cols-2">
            <ProductCard sku="004016" />
            <ProductCard sku="004046" />
            <ProductCard sku="004076" />
          </div>

          <H3>Metalセット</H3>
          <P>Metalにも1/4、3/8、1/2のセットがあります。</P>
          <div className="grid gap-6 md:grid-cols-2">
            <ProductCard sku="004017" />
            <ProductCard sku="004047" />
            <ProductCard sku="004077" />
          </div>
          <P>
            狭所対応を重視して新しい工具セットを作るなら、SpeedセットとMetalセットを比較すると選びやすくなります。
          </P>

          <H2 id="adapters">
            アダプターとエクステンションで、ラチェット本体をもっと活かす
          </H2>
          <P>
            狭所作業では本体選びだけでなく、周辺部品が効くことがあります。
          </P>
          <H3>サイクロップアダプター</H3>
          <P>
            8784A1（1/4）、8784B1（3/8）、8784C1（1/2）が含まれています。
          </P>
          <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>差込角</th>
                  <th className={cls.th}>役割</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <ProductTableCell sku="003529" label="8784A1 アダプター" />
                  </td>
                  <td className={cls.td}>1/4</td>
                  <td className={cls.td}>構成変更・ビット接続</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <ProductTableCell sku="003590" label="8784B1 アダプター" />
                  </td>
                  <td className={cls.td}>3/8</td>
                  <td className={cls.td}>構成変更・ビット接続</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <ProductTableCell sku="003641" label="8784C1 アダプター" />
                  </td>
                  <td className={cls.td}>1/2</td>
                  <td className={cls.td}>構成変更・ビット接続</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Speedをドライバー的に使う、ビットやソケット構成を変えるときなど、作業内容に応じて構成を組み替えるための部品です。
          </P>

          <H3>Hybrid用エクステンション</H3>
          <ProductCard sku="003781" />
          <P>
            Wera公式ではHybrid用延長ハンドルについて、より高いトルクを伝えるためのものと説明しています。長さを足すほど何でも良くなるわけではないため、スペースがあり、より大きな力が必要な場合に使い分けます。
          </P>

          <H3>保持機能付きソケット</H3>
          <P>
            商品データにはWera
            HF系のソケット・ベルトセットも多く含まれています。奥まったボルトでは、ソケット内でボルトを保持しやすい構造が作業を助けることがあります。Wera公式のHFソケットには、保持機能により六角ボルトやナットを保持し、片手しか使えない狭いスペースにも適する旨が説明されています。
          </P>
          <P>
            本体だけでなく、<Mark>ボルトをどう保持するか</Mark>
            まで考えると狭所作業の失敗が減ります。
          </P>

          <H2 id="failures">作業効率を落とすよくある失敗</H2>
          {failures.map((item) => (
            <div key={item.title}>
              <H3>{item.title}</H3>
              <P>{item.body}</P>
            </div>
          ))}

          <H2 id="checklist">
            法人でWeraサイクロップを標準工具にするときのチェックリスト
          </H2>
          <Figure
            src={IMG("ratchet-tool-procurement-selection.jpg")}
            alt="法人調達でラチェット工具を選定・標準化するイメージ"
          />
          <ul className="my-4 space-y-3 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
            {checkItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-900"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H3>周辺工具もまとめて整える場合</H3>
          <div className="my-6 grid gap-3 sm:grid-cols-2">
            <ExtButton href={HAND_TOOLS}>手作業工具一覧を見る →</ExtButton>
            <ExtButton href={TOOLBOX} tone="dark">
              工具箱一覧を見る →
            </ExtButton>
            <ExtButton href={WORKBENCH} tone="dark">
              作業台一覧を見る →
            </ExtButton>
          </div>
          <P>
            設備保全部門などで共用する場合は、サイクロップ本体だけでなく、ソケット・アダプター・ケース・作業台まで含めて定位置化すると使いやすくなります。
          </P>

          <H2 id="faq">FAQ</H2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className={cls.faqQ}>{item.q}</h3>
                <P>{item.a}</P>
              </div>
            ))}
          </div>

          <H2 id="summary">
            まとめ：狭所ラチェットは「何が邪魔なのか」を先に決める
          </H2>
          <P>
            狭い場所のボルト締めを速くするには、「高性能なラチェット」を一つ選ぶより、作業を邪魔している原因を整理するほうが先です。
          </P>
          <ul className={cls.list}>
            <li>振り幅が足りない</li>
            <li>障害物を避けたい</li>
            <li>ヘッドが入らない</li>
            <li>ボルトまで届かない</li>
            <li>早回しに時間がかかる</li>
            <li>緩め始めの力が足りない</li>
          </ul>
          <P>
            この違いが分かれば、Weraサイクロップの選び方もシンプルになります。
          </P>
          <ul className={cls.list}>
            <li>
              <strong>Speed</strong>
              は、可動ヘッドと早回しを活かして持ち替えを減らしたい作業。
            </li>
            <li>
              <strong>Metal</strong>は、ヘッドの薄さを優先したい狭所。
            </li>
            <li>
              <strong>Hybrid</strong>は、大きめの力を掛けたい作業。
            </li>
            <li>
              <strong>Mini</strong>は、工具の大きさ自体が問題になる極狭所。
            </li>
          </ul>
          <P>
            そして1/4・3/8・1/2を作業対象に合わせます。商品名だけで選ぶのではなく、現場の「狭さ」と締結工程から逆算することが、作業時間を短くし、買った工具を使わなくなる失敗も減らします。
          </P>

          <FinalCta />

          <H3>関連記事</H3>
          <ul className={cls.list}>
            {relatedArticles.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-bold underline underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <H2 id="references">参考情報</H2>
          <ul className={cls.list}>
            {refLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
