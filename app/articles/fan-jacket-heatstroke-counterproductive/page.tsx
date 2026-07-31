import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "fan-jacket-heatstroke-counterproductive";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const heroImage = `/images/${slug}/fan-jacket-heatstroke-counterproductive-hero.webp`;
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=fan-jacket-heatstroke-counterproductive";

const title =
  "空調服を着ていても熱中症になる？逆効果と誤解される条件・正しい対策【2026年版】";
const description =
  "空調服を着ていても熱中症になる可能性はあります。ただし35℃を超えたら一律に逆効果という断定は正確ではありません。2026年の厚生労働省ガイドラインと研究をもとに、効果不足の条件、使用中止のサイン、冷却ベスト・スポットクーラー・工場扇・WBGT計との使い分けを解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "空調服を着ていても熱中症になる？【2026年版】",
    description:
      "逆効果という誤解、35℃説、継続・併用・切替・作業中止の判断を解説。",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-07-31",
    modifiedTime: "2026-07-31",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "空調服を着た作業者とWBGT計を確認する現場責任者",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "空調服を着ていても熱中症になる？",
    description: "35℃一律説を修正し、正しい中止・切替判断を解説。",
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  badge: string;
  role: string;
  fit: string;
  feature: string;
  check: string;
  image: string;
  mall: string;
  url: string;
};

type CategoryLink = {
  label: string;
  description: string;
  tone: "main" | "sub";
  url: string;
};

const products: Product[] = [
  {
    id: "p1",
    name: "CUC WZ 遮熱チタンベスト",
    badge: "直射日光・屋外向け",
    role: "ファン付き作業着",
    fit: "屋外建設、設備点検、巡回など、日射の影響を受けやすい現場",
    feature: "遮熱チタン加工、フード脱着、ハイバック仕様",
    check: "ファン・バッテリーが付属するか、ハーネスや安全ベストと干渉しないかを確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/1124810042-900132.webp",
    mall: "楽天市場",
    url: `https://item.rakuten.co.jp/crecote-shop/1124810042-900132/?${UTM}`,
  },
  {
    id: "p2",
    name: "アイトス エコ2WAY サイドファン空調服",
    badge: "腰回りの干渉対策",
    role: "ファン付き作業着",
    fit: "腰ベルト、車両シート、工具袋との干渉を避けたい現場",
    feature: "サイドファン、半袖・長袖を選択可能",
    check: "使用するファン・バッテリーとの互換性と、実作業時の風路を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/1124810540-az50295.webp",
    mall: "楽天市場",
    url: `https://item.rakuten.co.jp/crecote-shop/1124810540-az50295/?${UTM}`,
  },
  {
    id: "p3",
    name: "G.B.Z ハーネス対応長袖 CX-G3 36Vセット",
    badge: "フルハーネス対応",
    role: "ファン付き作業着",
    fit: "高所作業、建設、設備施工などフルハーネスを着用する現場",
    feature: "ハーネス対応長袖、36Vファン・バッテリーセット",
    check: "ランヤード、背面パッド、安全ベストを装着した状態で試着する",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/cx-g3-black-s-36v.webp",
    mall: "楽天市場",
    url: `https://item.rakuten.co.jp/crecote-shop/cx-g3-black-s-36v/?${UTM}`,
  },
  {
    id: "p4",
    name: "SHOWA ペルチェ付き空調服 COOLFIX PLT2",
    badge: "送風＋接触冷却",
    role: "複合冷却ウェア",
    fit: "高温多湿など、送風だけでは体感が不足しやすい現場",
    feature: "ペルチェ付き半袖ブルゾン",
    check: "重量、冷却位置、稼働時間、予備電源、洗濯・メンテナンスを確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/203259.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/203259.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
  {
    id: "p5",
    name: "サンコー 冷蔵服3",
    badge: "直接冷却へ切替",
    role: "冷却ベスト",
    fit: "高温多湿、熱源近く、服内送風だけでは足りない作業",
    feature: "ペルチェ式の冷却ウェア",
    check: "連続使用時間、予備バッテリー、冷却面の位置、重量を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/172464.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/172464.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
  {
    id: "p6",
    name: "サンコー ハーネス対応冷蔵ベスト",
    badge: "高所・ハーネス向け",
    role: "冷却ベスト",
    fit: "フルハーネスを着用し、送風ウェアの風路を確保しにくい現場",
    feature: "ハーネス対応、デュアルユニット冷却",
    check: "ハーネスのメーカー指示、配線、ランヤード、重量バランスを確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/172296.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/172296.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
  {
    id: "p7",
    name: "山真製鋸 アイスマンPRO-X2",
    badge: "水冷式",
    role: "冷却ベスト",
    fit: "長時間の屋外作業や、保冷剤交換の頻度を抑えたい現場",
    feature: "水冷式冷却ウェア",
    check: "凍結ボトル等の準備、循環系の清掃、重量、作業姿勢を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/289935.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/289935.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
  {
    id: "p8",
    name: "TRUSCO 保冷剤用クールベスト TCV-BK",
    badge: "電源不要",
    role: "冷却ベスト",
    fit: "火気・粉じん・水濡れなど、電子機器付きウェアを使いにくい現場",
    feature: "保冷剤を使用するベスト",
    check: "交換用保冷剤、冷凍設備、結露、連続使用時間を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/290117.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/290117.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
  {
    id: "p9",
    name: "ICE EDGE 冷感コンプレッションシャツ",
    badge: "服内環境の補助",
    role: "冷感インナー",
    fit: "空調服の下で汗のベタつきや肌離れを改善したい現場",
    feature: "冷感コンプレッションシャツ",
    check: "締め付け過ぎないサイズと、現場の肌露出・保護要件を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/1124300805-.webp",
    mall: "楽天市場",
    url: `https://item.rakuten.co.jp/crecote-shop/1124300805-/?${UTM}`,
  },
  {
    id: "p10",
    name: "ミズケイ アイスジェルヘルメットインナー あたまんぞく",
    badge: "頭部の補助冷却",
    role: "冷感グッズ",
    fit: "ヘルメット内の蒸れや頭部の暑さが強い作業",
    feature: "アイスジェル式ヘルメットインナー",
    check: "ヘルメットのフィット、保護性能、装着安定性を損なわないか確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/1121910323-5501470.webp",
    mall: "楽天市場",
    url: `https://item.rakuten.co.jp/crecote-shop/1121910323-5501470/?${UTM}`,
  },
  {
    id: "p11",
    name: "NICHIDO スポットクーラー SPC-25ACN",
    badge: "作業場所・休憩所を冷やす",
    role: "スポットクーラー",
    fit: "固定作業場所、検査台、休憩所、プレクーリング・回復場所",
    feature: "スポットエアコン",
    check: "排熱、ドレン、電源、吹出口・吸込口、騒音を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/203231.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/203231.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
  {
    id: "p12",
    name: "TRUSCO 全閉式工場扇 AF-45A",
    badge: "休憩場所の送風",
    role: "工場扇",
    fit: "倉庫、工場、荷捌き場、休憩場所の空気を動かしたい現場",
    feature: "全閉式・据置き・大風量",
    check: "熱風の循環だけにならない配置、粉じん飛散、転倒防止を確認",
    image: "/images/fan-jacket-heatstroke-counterproductive/products/203283.webp",
    mall: "Yahoo!ショッピング",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/203283.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=&${UTM}`,
  },
];

const categoryLinks: CategoryLink[] = [
  {
    label: "空調服・冷却ベスト一覧",
    description: "ファン付き作業着、ペルチェ・水冷・保冷剤式をまとめて比較",
    tone: "main",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/b6f5c4b4c9.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&${UTM}`,
  },
  {
    label: "スポットクーラー一覧",
    description: "固定作業場所・休憩所を直接冷却",
    tone: "sub",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/a5b9a5dda5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&${UTM}`,
  },
  {
    label: "工場扇・冷風機一覧",
    description: "作業場・荷捌き場・休憩場所の環境改善",
    tone: "sub",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/b9a9beecc0.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&${UTM}`,
  },
  {
    label: "冷感グッズ一覧",
    description: "インナー・頭部・身体冷却の補助用品",
    tone: "sub",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/cee4b4d6a5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&${UTM}`,
  },
  {
    label: "計測器一覧",
    description: "WBGT・温湿度を測り、体感だけの判断を避ける",
    tone: "sub",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/b7d7c2acb4.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&${UTM}`,
  },
];

const riskConditions = [
  {
    title: "休憩・作業短縮を減らす過信",
    text: "空調服を配っただけで休憩を短縮できるわけではありません。WBGT、作業強度、暑熱順化、健康状態を評価し、バディ制等で確認することが前提です。",
  },
  {
    title: "バッテリー切れ・ファン停止",
    text: "風量低下、片側停止、異音、異臭、異常発熱があれば、暑熱環境で着続けず、涼しい場所へ移動して点検・交換します。",
  },
  {
    title: "高湿度で蒸発が追いつかない",
    text: "湿度が高いほど汗は蒸発しにくくなります。直接冷却、除湿、スポットクーラー、休憩強化へ切り替えます。",
  },
  {
    title: "放射熱が強い",
    text: "屋根、鉄板、アスファルト、炉、厨房、溶接周辺では受ける熱が大きく、服内送風だけでは不足します。",
  },
  {
    title: "ハーネス・安全ベストで風路がふさがる",
    text: "ファンから首・袖口までの風路が確保できなければ効果が落ちます。装備一式を着けて試着します。",
  },
  {
    title: "火気・粉じん・水濡れ等の不適合",
    text: "製品が想定しない環境では使用せず、取扱説明書と現場のリスクアセスメントを優先します。",
  },
  {
    title: "症状があるのに作業を続ける",
    text: "めまい、頭痛、吐き気、倦怠感、判断力低下などがあれば、風を感じていても作業から離脱します。",
  },
];

const faqs = [
  {
    q: "空調服を着ていても熱中症になりますか？",
    a: "なります。空調服は熱負担を軽減する補助策ですが、熱中症リスクをゼロにはできません。WBGT、休憩、水分塩分、作業時間、体調確認を組み合わせます。",
  },
  {
    q: "35℃を超えると空調服は逆効果ですか？",
    a: "35℃だけで一律に逆効果とは言えません。40℃の高温乾燥条件で効果を検討した研究もあります。湿度、放射熱、作業強度、風路、個人差を含めて判断します。",
  },
  {
    q: "高湿度の日は使わないほうがよいですか？",
    a: "高湿度では汗が蒸発しにくく、効果が不足しやすくなります。使用を一律中止するのではなく、WBGTと体調を確認し、直接冷却や環境冷却を追加します。",
  },
  {
    q: "バッテリーが切れたらどうすればよいですか？",
    a: "暑熱環境でそのまま着続けず、涼しい場所へ移動して交換・点検します。予備電源と退避手順を事前に準備してください。",
  },
  {
    q: "冷却ベストと空調服はどちらがよいですか？",
    a: "移動作業や服内の蒸れ対策には空調服、高温多湿や熱源近くではペルチェ・水冷・保冷剤式が向く場合があります。現場によって併用も検討します。",
  },
  {
    q: "空調服を着ていれば休憩を減らせますか？",
    a: "自動的には減らせません。2026年ガイドラインでは身体冷却服の効果を考慮できる場合がありますが、作業条件と健康状態の評価、バディによる確認等が前提です。",
  },
  {
    q: "どんな症状で作業を止めるべきですか？",
    a: "めまい、ふらつき、生あくび、筋肉痛、頭痛、吐き気、倦怠感、集中力・判断力の低下、返事がおかしい、高体温などがあれば作業を離脱します。",
  },
];

const checklistItems = [
  "空調服を着ていても熱中症になることを全員へ周知した",
  "35℃を一律基準にしていない",
  "作業位置でWBGTを測定している",
  "作業強度と暑熱順化を評価している",
  "空調服を理由に休憩を自動短縮していない",
  "ハーネス等を装着した状態で風路を確認した",
  "バッテリー切れ・故障時の退避手順がある",
  "高温多湿・放射熱が強い現場の代替冷却がある",
  "冷房休憩場所がある",
  "水分・塩分補給を時間で管理している",
  "バディ制または巡視を行っている",
  "離脱・冷却・見守り・搬送手順を周知した",
];

const relatedArticles = [
  {
    href: "/articles/workwear-heat-protection-clothing",
    label:
      "現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方",
  },
  {
    href: "/articles/outdoor-work-heat-countermeasure-goods",
    label: "建設現場の暑さ対策グッズ",
  },
  {
    href: "/articles/black-globe-wbgt-meter-selection-guide",
    label: "黒球式熱中症指数計の選び方",
  },
  {
    href: "/articles/worksite-rest-area-heat",
    label: "現場休憩所の暑さ対策",
  },
  {
    href: "/articles/construction-site-safety-checklist",
    label: "建設現場の安全チェックリスト",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label: "屋外作業の熱中症対策",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "空調服を着ていても熱中症になる？逆効果と誤解される条件・正しい対策【2026年版】",
  description:
    "空調服を着ていても熱中症になる条件、35℃逆効果説、使用中止のサイン、冷却ベスト・環境冷却との使い分けを解説。",
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-07-31",
  dateModified: "2026-07-31",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: siteUrl,
  },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${siteUrl}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "空調服を着ていても熱中症になる？",
      item: canonicalUrl,
    },
  ],
};

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

function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}

function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </ol>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    </figure>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
        {product.badge}
      </span>
      <div className="mt-4 grid gap-5 md:grid-cols-[180px_1fr]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            width={720}
            height={540}
            className="h-full min-h-40 w-full object-contain p-3"
          />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">{product.role}</p>
          <h3 className="mt-1 text-lg font-black text-gray-900">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-3 text-[15px] leading-7 text-gray-900">
            <div>
              <dt className="font-bold">向く現場</dt>
              <dd>{product.fit}</dd>
            </div>
            <div>
              <dt className="font-bold">特徴</dt>
              <dd>{product.feature}</dd>
            </div>
            <div>
              <dt className="font-bold">購入前確認</dt>
              <dd>{product.check}</dd>
            </div>
          </dl>
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-5 inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            {product.mall}で見る
          </a>
        </div>
      </div>
    </article>
  );
}

function CategoryCard({ item }: { item: CategoryLink }) {
  const main = item.tone === "main";
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored"
      className={`rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 ${
        main
          ? "border-orange-300 bg-orange-50 hover:bg-orange-100"
          : "border-gray-300 bg-white hover:border-gray-900"
      }`}
    >
      <span
        className={`text-base font-bold ${main ? "text-orange-800" : "text-gray-900"}`}
      >
        {item.label}
      </span>
      <span className="mt-2 block text-sm leading-6 text-gray-900">
        {item.description}
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className="text-sm text-gray-800">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>空調服を着ていても熱中症になる？</li>
            </ol>
          </nav>
        </div>

        <article>
          <header className="border-y border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-bold text-orange-800">
                2026年7月31日 全面改稿
              </p>
              <h1 className={cls.h1}>
                空調服を着ていても熱中症になる？逆効果と誤解される条件・正しい対策【2026年版】
              </h1>
              <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
                <span>作業用品ナビ編集部</span>
                <time dateTime="2026-07-31">公開・更新：2026年7月31日</time>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <P>
              「空調服を着ていたのに熱中症になった」「気温が35℃を超えると、空調服は逆効果になるらしい」。こうした話を見て、使い続けてよいのか不安になっている方も多いのではないでしょうか。
            </P>
            <P>
              先に結論をお伝えします。
            </P>
            <P>
              <strong>
                空調服を着ていても熱中症になる可能性はあります。ただし、空調服そのものが一律に逆効果になるわけではなく、「35℃を超えたら必ず危険」という単純な基準も正確ではありません。
              </strong>
            </P>
            <P>
              ファン付き作業服は、服の中に外気を取り込み、汗の蒸発と服内換気を助けることで熱負担を軽くする補助策です。2026年の厚生労働省ガイドラインでも、温度
              <Mark>30℃</Mark>・湿度
              <Mark>85％</Mark>
              の運動実験において、非着用時と同じ体温へ達するまで
              <Mark>15分</Mark>
              遅らせ、推定発汗量を約
              <Mark>20％</Mark>
              減らした知見が紹介されています。
            </P>
            <P>
              一方で、空調服は冷房ではありません。高温多湿、強い放射熱、激しい作業、風路をふさぐ装備、バッテリー切れ、体調不良などが重なると、冷却が追いつかないことがあります。さらに「着ているから大丈夫」という過信から、休憩、給水、作業離脱が遅れると、結果的に危険を大きくします。
            </P>
            <P>
              この記事では、「空調服は危険か安全か」という二択ではなく、次の4段階で判断できるように整理します。
            </P>
            <Ol>
              <li>空調服を継続する</li>
              <li>冷感インナーや冷却ベストを併用する</li>
              <li>スポットクーラー・工場扇・冷房休憩へ切り替える</li>
              <li>作業を中止して身体を冷却する</li>
            </Ol>

            <SectionImage
              src={heroImage}
              alt="空調服を着た作業者とWBGT計を確認する現場責任者"
            />

            <section className="my-8 rounded-2xl border border-gray-300 bg-gray-50 p-6 md:p-8">
              <p className="text-sm font-bold text-gray-800">この記事の結論</p>
              <Ul>
                <li>空調服を着ていても熱中症になることはある</li>
                <li>空調服には一定の熱負担低減効果が確認されている</li>
                <li>
                  「
                  <Mark>35℃</Mark>
                  を超えたら一律に逆効果」という断定は適切ではない
                </li>
                <li>
                  危険なのは、効果不足、機能停止、風路阻害、過信、症状の見逃し
                </li>
                <li>
                  気温だけでなく、WBGT、湿度、放射熱、作業強度、暑熱順化、体調で判断する
                </li>
                <li>
                  高温多湿や熱源近くでは、冷却ベストや環境冷却へ切り替える
                </li>
                <li>
                  めまい、ふらつき、頭痛、吐き気、倦怠感、判断力低下などがあれば作業を離脱する
                </li>
                <li>
                  体調不良者を一人にせず、涼しい場所で冷却し、必要に応じて医療機関へつなぐ
                </li>
              </Ul>
            </section>

            <section className="my-8 rounded-2xl border border-orange-200 bg-orange-50 p-6">
              <H3>最初に確認したい対策カテゴリー</H3>
              <P>
                現場条件がまだ整理できていない場合は、次の2カテゴリーを先に比較すると判断しやすくなります。空調服を買い足す前に、現在の課題が「服内の蒸れ」なのか、「高温多湿・放射熱で冷却が足りない」なのか、「現場の暑さを測れていない」のかを分けることが重要です。
              </P>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <CategoryCard item={categoryLinks[0]} />
                <CategoryCard item={categoryLinks[4]} />
              </div>
            </section>

            <section className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900">目次</h2>
              <ol className="mt-4 grid gap-2 text-sm leading-7 text-gray-900 md:grid-cols-2">
                <li>1. 空調服を着ていても熱中症になるのか</li>
                <li>2. 35℃を超えると逆効果なのか</li>
                <li>3. 逆効果のように働く7条件</li>
                <li>4. 涼しいと感じても安全とは限らない</li>
                <li>5. 継続・併用・切替・作業中止</li>
                <li>6. 空調服を継続する場合の選び方</li>
                <li>7. 直接冷却へ切り替える場合</li>
                <li>8. 冷感インナーと頭部対策</li>
                <li>9. 環境側を冷やす方法</li>
                <li>10. 現場別の注意点</li>
                <li>11. 着方・点検・休憩の決め方</li>
                <li>12. 会社の運用ルール</li>
                <li>13. 症状が出たときの対応</li>
                <li>14. 対策費・失敗例・チェックリスト</li>
                <li>15. FAQ・参考情報・まとめ</li>
              </ol>
            </section>

            <H2 id="can-heatstroke">空調服を着ていても熱中症になるのか</H2>
            <H3>結論：なる可能性はあるが、空調服が原因とは限らない</H3>
            <P>
              熱中症は、体内でつくられる熱と、身体から逃がせる熱のバランスが崩れ、深部体温が上昇することで発生します。空調服は熱を逃がす働きを助けますが、作業によってつくられる熱や、周囲から受ける熱が大きければ、冷却が追いつかないことがあります。
            </P>
            <P>例えば、次の条件が重なるほどリスクは上がります。</P>
            <Ul>
              <li>WBGTが高い</li>
              <li>身体作業強度が高い</li>
              <li>暑熱順化していない</li>
              <li>
                直射日光や鉄板、屋根、アスファルトからの放射熱が強い
              </li>
              <li>湿度が高く汗が蒸発しにくい</li>
              <li>フルハーネスや安全ベストで風路が狭い</li>
              <li>体調不良、睡眠不足、脱水、持病や服薬がある</li>
              <li>休憩・給水・体調確認が不足している</li>
            </Ul>
            <P>
              したがって、「空調服を着ている」という一要素だけで安全を判断することはできません。
            </P>

            <H3>空調服には一定の効果がある</H3>
            <P>
              2026年の厚生労働省ガイドラインでは、身体を冷却する服の着用によって深部体温の上昇抑制などが確認できる場合、作業と休憩の設定を検討する材料にできるとしています。
            </P>
            <P>
              同ガイドラインが紹介する温度
              <Mark>30℃</Mark>・湿度
              <Mark>85％</Mark>
              の運動実験では、ファン付き作業服を着用した場合、非着用時と同じ体温へ達するまで
              <Mark>15分</Mark>
              遅れ、推定発汗量も約
              <Mark>20％</Mark>
              減少しました。
            </P>
            <P>
              また、
              <Mark>40℃</Mark>・相対湿度
              <Mark>30％</Mark>
              の高温乾燥条件と、
              <Mark>30℃</Mark>・相対湿度
              <Mark>85％</Mark>
              の温暖多湿条件を用いた研究でも、ファン付き長袖ジャケットによる熱負担の軽減が検討されています。
            </P>
            <P>
              つまり、空調服は「効果がない」のではありません。ただし、効果があることと、熱中症を完全に防げることは別です。
            </P>
            <div className="my-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
              <p className="font-bold text-gray-900">重要</p>
              <p className="mt-2 leading-7 text-gray-900">
                「空調服に効果がある」と「空調服を着れば安全」は別です。WBGT、作業強度、暑熱順化、放射熱、健康状態を同時に確認します。
              </p>
            </div>

            <H2 id="over-35c">空調服は35℃を超えると逆効果なのか</H2>
            <H3>結論：35℃だけで一律に判断する根拠は不足している</H3>
            <P>
              「気温が体温を超えると、熱風を入れるので逆効果になる」という説明は分かりやすい反面、人体の熱放散を単純化しすぎています。
            </P>
            <P>実際の冷却効果は、気温だけではなく次の条件で変わります。</P>
            <Ul>
              <li>相対湿度</li>
              <li>汗の量と蒸発しやすさ</li>
              <li>日射・放射熱</li>
              <li>風量と風路</li>
              <li>作業強度</li>
              <li>インナーと上着の透湿性</li>
              <li>暑熱順化</li>
              <li>体格、健康状態、服薬</li>
              <li>冷房休憩や水分塩分補給</li>
            </Ul>
            <P>
              <Mark>40℃</Mark>
              でも乾燥していて汗が蒸発しやすい条件と、
              <Mark>30℃</Mark>
              でも湿度が高く汗が蒸発しにくい条件では、体感と熱負担が異なります。
            </P>
            <P>
              したがって、「
              <Mark>35℃</Mark>
              になったら必ず脱ぐ」「
              <Mark>35℃</Mark>
              未満なら安全」といった固定ルールではなく、WBGT、作業強度、体調、実際の冷却状況を見て判断します。
            </P>

            <SectionImage
              src={`/images/${slug}/fan-jacket-temperature-humidity-radiant-heat.webp`}
              alt="気温だけでなく湿度や放射熱を確認する空調服の使用判断"
            />

            <H3>「逆効果」というより「冷却が足りない」が正確</H3>
            <P>
              空調服を着ていても体温が上がる場面はあります。ただし、多くは空調服が身体を加熱しているというより、次の状態です。
            </P>
            <Ul>
              <li>受ける熱が大きすぎる</li>
              <li>汗の蒸発が追いつかない</li>
              <li>服内の風が通っていない</li>
              <li>ファンが止まっている</li>
              <li>作業を続けすぎている</li>
              <li>個人の体調が悪い</li>
            </Ul>
            <P>
              この違いを理解しないと、「危険だから一律に脱ぐ」「空調服があるから何時間でも作業する」という両極端な運用になります。
            </P>

            <H2 id="seven-conditions">
              空調服が逆効果のように働く7つの条件
            </H2>
            <SectionImage
              src={`/images/${slug}/fan-jacket-airflow-blocked-battery-check.webp`}
              alt="フルハーネスによる風路阻害と空調服のバッテリー点検"
            />
            <div className="my-6 grid gap-4 md:grid-cols-2">
              {riskConditions.map((item, index) => (
                <section
                  key={item.title}
                  className="rounded-xl border border-gray-300 bg-white p-5 shadow-sm"
                >
                  <span className="text-sm font-bold text-gray-800">
                    条件{index + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-black text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-900">
                    {item.text}
                  </p>
                </section>
              ))}
            </div>

            <H3>1. 空調服を理由に休憩や作業短縮を減らす</H3>
            <P>
              最も危険なのは、空調服そのものではなく過信です。
            </P>
            <P>
              2026年ガイドラインは、身体冷却服の効果を考慮して休憩設定を検討できる場合があるとしています。しかし、それは空調服を配布すれば自動的に休憩を減らせるという意味ではありません。
            </P>
            <P>
              個人差、作業強度、暑熱順化、WBGT、体調を評価し、バディ制などで健康状態を確認することが前提です。「空調服を着ている人は休憩を
              <Mark>10分</Mark>
              減らす」といった一律運用は避けてください。
            </P>

            <H3>2. バッテリー切れ・ファン停止後も着続ける</H3>
            <P>
              ファンが止まると、空調服は本来の服内換気を行えません。遮熱性や気密性を重視した生地の場合、停止後は蒸れや熱こもりを感じやすくなることがあります。
            </P>
            <P>次の状態では、作業を止めて点検または着替えを行います。</P>
            <Ul>
              <li>風量が急に弱くなった</li>
              <li>片側のファンだけ止まった</li>
              <li>異音・異臭・異常発熱がある</li>
              <li>ケーブルが外れやすい</li>
              <li>バッテリー残量が足りない</li>
              <li>吸込口が粉じん等でふさがれている</li>
            </Ul>
            <P>
              予備バッテリーを準備するだけでなく、「停止時はどこへ退避するか」まで決めておくことが必要です。
            </P>

            <H3>3. 高湿度で汗の蒸発が追いつかない</H3>
            <P>
              空調服は汗の蒸発を助ける方式です。湿度が高いほど、汗が蒸発しにくくなります。
            </P>
            <P>
              高湿度の屋内、梅雨明け直後、雨上がり、蒸気が発生する工程では、風を感じても深部体温の上昇を十分に抑えられない可能性があります。このような現場では、次を追加します。
            </P>
            <Ul>
              <li>ペルチェ・水冷・保冷剤式の直接冷却</li>
              <li>除湿や冷房</li>
              <li>スポットクーラー</li>
              <li>作業時間の短縮</li>
              <li>冷房休憩</li>
              <li>WBGTの再測定</li>
            </Ul>

            <H3>4. 放射熱が強く、受ける熱が大きすぎる</H3>
            <P>
              屋根上、鉄板、アスファルト、炉前、厨房、溶接周辺などでは、周囲の空気温度だけでなく、日射や高温物体からの放射熱を受けます。ファンの風があっても、受ける熱が大きければ冷却が追いつきません。
            </P>
            <P>
              直射日光が強い場合は遮熱タイプを検討し、熱源近くでは遮へい、作業時間変更、距離確保、スポット冷却、作業交代を優先します。
            </P>

            <H3>5. フルハーネス・安全ベスト・工具で風路がふさがる</H3>
            <P>
              ファン付き作業服は、取り込んだ空気が胴体を通り、首や袖口から排出されて初めて効果を発揮します。フルハーネス、安全ベスト、腰ベルト、工具袋、車両シートなどが服を押さえると、風路が狭くなります。
            </P>
            <P>
              高所作業では、ハーネス対応、サイドファン、ハイバックファン、内側スペーサーなどを検討し、実際の装備をすべて着けた状態で試着します。
            </P>

            <H3>
              6. 火気・火花・粉じん・水濡れなど、製品が想定しない環境で使う
            </H3>
            <P>
              ファンとバッテリーを備えた作業着は、すべての現場で使えるわけではありません。
            </P>
            <Ul>
              <li>火気や火花</li>
              <li>爆発性雰囲気</li>
              <li>導電性粉じん</li>
              <li>大量の粉じん</li>
              <li>雨、水洗い、水しぶき</li>
              <li>化学物質</li>
              <li>食品・衛生管理上の制約</li>
            </Ul>
            <P>
              こうした環境では、各製品の取扱説明書と現場ルールを確認します。電子機器付きウェアが適さない場合は、保冷剤式ベスト、個人冷却器、環境冷却へ切り替えます。
            </P>

            <H3>7. 症状があるのに「まだ涼しい」と作業を続ける</H3>
            <P>
              体感の涼しさと、深部体温や脱水状態は一致しない場合があります。次の症状があれば、空調服の風を感じていても作業を離脱します。
            </P>
            <Ul>
              <li>めまい、ふらつき</li>
              <li>生あくび</li>
              <li>筋肉痛、こむら返り</li>
              <li>頭痛</li>
              <li>吐き気</li>
              <li>強い倦怠感</li>
              <li>集中力・判断力の低下</li>
              <li>返事がおかしい</li>
              <li>まっすぐ歩けない</li>
              <li>高体温</li>
            </Ul>
            <P>
              体調不良者を一人にせず、十分に涼しい場所へ移動し、身体冷却を行います。自力で水分を取れない、意識や応答がおかしい場合は、救急要請を含めて速やかに医療へつなぎます。
            </P>

            <H2 id="feel-cool">涼しいと感じても安全とは限らない</H2>
            <H3>体感とWBGTを分けて確認する</H3>
            <P>
              ファンの風で皮膚表面が快適になっても、作業強度が高ければ体内では熱がつくられ続けます。安全判断では次を確認します。
            </P>
            <Ul>
              <li>作業位置のWBGT</li>
              <li>直射日光・放射熱</li>
              <li>作業強度</li>
              <li>暑熱順化</li>
              <li>着衣・保護具</li>
              <li>作業時間</li>
              <li>休憩中に体温や体調が戻っているか</li>
              <li>作業前後の体重変化</li>
              <li>心拍、疲労、吐き気、めまい等</li>
            </Ul>
            <P>
              厚生労働省の2026年ガイドラインでは、暑熱順化者でも作業強度に応じてWBGT基準値が異なります。例えば中程度の代謝率では
              <Mark>28℃</Mark>
              、高代謝率では
              <Mark>26℃</Mark>
              が基準の目安です。暑熱順化していない場合はさらに低い値になります。
            </P>
            <P>
              空調服を着ているかどうかだけで、この基準を無視することはできません。詳細は
              <Link
                href="/articles/black-globe-wbgt-meter-selection-guide"
                className="font-bold underline underline-offset-4"
              >
                黒球式熱中症指数計の選び方
              </Link>
              もあわせて確認してください。
            </P>

            <H2 id="decision-table">
              継続・併用・切替・作業中止の判断表
            </H2>
            <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>状態</th>
                    <th className={cls.th}>判断</th>
                    <th className={cls.th}>主な対策</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>
                      風が通り、体調良好、WBGTと作業計画の範囲内
                    </td>
                    <td className={cls.td}>
                      <Mark>継続</Mark>
                    </td>
                    <td className={cls.td}>
                      適切なサイズ、予備電源、定時給水
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      高湿度、日射、ハーネスで効果が弱い
                    </td>
                    <td className={cls.td}>
                      <Mark>併用</Mark>
                    </td>
                    <td className={cls.td}>
                      遮熱、冷感インナー、冷却ベスト、休憩強化
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      熱源近く、固定作業、服内送風では不足
                    </td>
                    <td className={cls.td}>
                      <Mark>切替</Mark>
                    </td>
                    <td className={cls.td}>
                      ペルチェ・水冷・保冷剤、スポットクーラー
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      めまい、頭痛、吐き気、判断力低下、異常な疲労
                    </td>
                    <td className={cls.td}>
                      <Mark>作業中止</Mark>
                    </td>
                    <td className={cls.td}>
                      離脱、涼しい場所、身体冷却、見守り、医療接続
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      ファン停止、異常発熱、故障、使用禁止環境
                    </td>
                    <td className={cls.td}>
                      <Mark>使用中止</Mark>
                    </td>
                    <td className={cls.td}>
                      電源を切る、点検、別方式へ変更
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <SectionImage
              src={`/images/${slug}/fan-jacket-cooling-method-selection.webp`}
              alt="空調服・冷却ベスト・スポットクーラーを比較する法人担当者"
            />

            <H2 id="continue-fan-jacket">
              空調服を継続する場合の選び方
            </H2>
            <P>
              空調服を継続する場合は、風量の数字だけでなく、日射、ファン位置、ハーネス・安全ベストとの干渉を確認します。次の3商品は、異なる弱点を補う候補です。関連記事として
              <Link
                href="/articles/workwear-heat-protection-clothing"
                className="font-bold underline underline-offset-4"
              >
                現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方
              </Link>
              も参考にしてください。
            </P>

            <H3>直射日光が強い現場：遮熱タイプ</H3>
            <P>
              CUC WZ 遮熱チタンベストは、直射日光の影響を受けやすい屋外作業で検討しやすいタイプです。ハイバック仕様やフード脱着式は、用途に合えば風路と日射対策を両立しやすくなります。ただし、遮熱加工があっても、WBGTが高い状態で長時間作業できる保証はありません。
            </P>

            <H3>腰回りがふさがる現場：サイドファン</H3>
            <P>
              アイトス エコ2WAY サイドファン空調服は、腰ベルト、工具袋、車両シートなど、通常の腰ファンが干渉しやすい現場で検討できます。ファンの位置だけでなく、半袖・長袖、実際の作業姿勢、上から着る装備を確認してください。
            </P>

            <H3>高所作業：ハーネス対応</H3>
            <P>
              G.B.Z ハーネス対応長袖 CX-G3 36Vセットは、フルハーネスを使用する現場向けの候補です。購入前には、ハーネス、ランヤード、安全ベスト、工具袋をすべて装着して、ファン位置、ケーブル、排気口がふさがれないか確認します。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="direct-cooling">
              高温多湿・熱源近くでは直接冷却へ切り替える
            </H2>
            <SectionImage
              src={`/images/${slug}/fan-jacket-high-humidity-direct-cooling.webp`}
              alt="高温多湿の現場で空調服から冷却ベストへ切り替えるイメージ"
            />
            <P>
              汗の蒸発だけでは不足する場合は、ペルチェ、水冷、保冷剤など、身体を直接冷やす方式へ切り替えます。空調服より装備が重くなることがあるため、稼働時間、交換、清掃、作業姿勢まで含めて選びます。
            </P>

            <H3>送風＋ペルチェ</H3>
            <P>
              SHOWA ペルチェ付き空調服 COOLFIX
              PLT2は、ファンによる服内送風と接触冷却を組み合わせたい場合の候補です。単純な空調服より装備が増えるため、重量、稼働時間、冷却位置、洗濯方法を確認します。
            </P>

            <H3>ペルチェ式冷却ベスト</H3>
            <P>
              サンコー 冷蔵服3やハーネス対応冷蔵ベストは、高温多湿や熱源近くなど、汗の蒸発だけでは不足しやすい条件で検討できます。空調服より直接的に冷やしやすい反面、バッテリー管理や重量が増えるため、作業内容との相性を確認します。
            </P>

            <H3>水冷式</H3>
            <P>
              山真製鋸 アイスマンPRO-X2のような水冷式は、循環する冷水で身体を冷やす方式です。長時間作業に使う場合は、凍結ボトル等の準備、交換、清掃、重量を含めて運用を設計します。
            </P>

            <H3>保冷剤式</H3>
            <P>
              TRUSCO
              保冷剤用クールベストは、電子機器付きウェアを使いにくい現場で検討しやすい方式です。予備保冷剤と冷凍設備を確保し、交換時間を作業計画へ入れます。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(3, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="inner-head">
              冷感インナーと頭部対策は補助として使う
            </H2>
            <H3>冷感インナー</H3>
            <P>
              ICE EDGE
              冷感コンプレッションシャツは、空調服の下で汗のベタつきや肌離れを改善したい場合の候補です。インナーだけで深部体温の上昇を止めることはできないため、主対策ではなく服内環境を整える補助として扱います。
            </P>

            <H3>ヘルメットインナー</H3>
            <P>
              ミズケイ
              アイスジェルヘルメットインナー「あたまんぞく」は、頭部の蒸れや暑さを軽くしたい場合の候補です。装着によってヘルメットのフィットや保護性能を損なわないことを確認してください。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(8, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="environment">
              スポットクーラー・工場扇・計測器で環境側を改善する
            </H2>
            <SectionImage
              src={`/images/${slug}/fan-jacket-cooled-rest-area.webp`}
              alt="スポットクーラーと工場扇を設置した現場休憩所"
            />
            <P>
              固定作業や休憩では、着る対策だけでなく周囲の環境を下げることが重要です。
              <Link
                href="/articles/worksite-rest-area-heat"
                className="font-bold underline underline-offset-4"
              >
                現場休憩所の暑さ対策
              </Link>
              や
              <Link
                href="/articles/outdoor-work-heat-countermeasure-goods"
                className="font-bold underline underline-offset-4"
              >
                建設現場の暑さ対策グッズ
              </Link>
              もあわせてご覧ください。
            </P>

            <H3>スポットクーラー</H3>
            <P>
              NICHIDO スポットクーラー
              SPC-25ACNは、固定作業場所、休憩所、プレクーリング、休憩時の回復場所に向きます。本体の冷風だけでなく、排熱、ドレン、電源、吸込口、騒音まで設計します。排熱が同じ空間へ戻ると、周辺の温度上昇につながる場合があります。
            </P>

            <H3>工場扇</H3>
            <P>
              TRUSCO 全閉式工場扇
              AF-45Aは、倉庫、工場、荷捌き場、休憩場所で空気を動かす候補です。気温が高い空間で熱風を循環させるだけにならないよう、外気導入、排気、日陰、冷房、ミスト等との組み合わせを検討します。粉じん飛散や作業品質への影響がある現場では配置に注意します。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(10, 12).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H3>計測器</H3>
            <P>
              空調服を配布する前に、作業場所のWBGTを測定できる状態を整えます。測定は事務所や入口ではなく、作業者が実際にいる高さ・位置で行います。日なたと日陰、熱源近くと離れた場所、午前と午後で値が変わるため、作業計画に応じて確認します。
            </P>
            <div className="my-6">
              <CategoryCard item={categoryLinks[4]} />
            </div>

            <H2 id="by-site">現場別｜空調服だけでは足りなくなりやすい条件</H2>
            <H3>建設・土木</H3>
            <P>
              建設・土木では、日射、照り返し、重量物、長距離移動、フルハーネス、ヘルメットが重なりやすくなります。朝は空調服だけで作業できても、午後にWBGTが上昇すると同じ装備では足りなくなることがあります。
            </P>
            <P>
              午前・午後で同じ運用に固定せず、次のように段階を変えます。
            </P>
            <Ul>
              <li>朝：空調服＋定時給水</li>
              <li>日射が強くなる前：遮熱、休憩間隔の短縮</li>
              <li>午後：冷却ベスト併用、作業交代</li>
              <li>WBGTや体調が基準を超える：作業中止・時間帯変更</li>
            </Ul>

            <H3>工場・倉庫</H3>
            <P>
              工場・倉庫では、外気温よりも局所熱源、天井付近の熱気、蒸気、風の滞留が問題になることがあります。荷捌き場のように外気が入る場所ではファン付き作業服が使いやすい一方、炉、乾燥設備、成形機、ボイラーの近くでは直接冷却や遮へいを優先します。
            </P>
            <P>
              工場扇は熱気を拡散するだけにならないよう、排気や外気導入と組み合わせます。冷風機やミストは湿度を上げる場合があるため、もともと高湿度の場所ではWBGTを確認しながら使います。
            </P>

            <H3>警備・イベント</H3>
            <P>
              警備やイベント運営では、立位の時間が長く、休憩場所が遠く、本人の判断で離脱しにくいことがリスクになります。空調服を着用していても、交代要員、日陰待機、予備バッテリー、巡回責任者、定時連絡が必要です。黒色や高視認装備の重ね着で熱を受けやすい場合は、服の色や装備全体も見直します。
            </P>

            <H3>農業・造園</H3>
            <P>
              農業や造園では、日射、湿度、しゃがみ姿勢、刈払機や背負い機器による風路阻害が起きやすくなります。背負い機器を使う作業ではサイドファンや直接冷却を検討し、ハウス内では空調服だけでなく換気、遮光、作業時間帯変更を優先します。
            </P>

            <H3>溶接・火気作業</H3>
            <P>
              溶接や火花が飛ぶ作業では、一般的なファン・バッテリー付きウェアを無条件に使用しません。火花で生地や部品が損傷する可能性、ファンがヒュームや粉じんを取り込む可能性、現場の防炎要件を確認します。
            </P>
            <P>
              直火花工程では使用せず、準備・運搬・休憩時だけ使うなど工程を分ける方法もあります。個別製品の仕様と事業場のリスクアセスメントを優先してください。
            </P>

            <H2 id="wear-check">空調服の効果を下げない着方・点検方法</H2>
            <H3>サイズは「大きければよい」ではない</H3>
            <P>
              服内に空気の通り道を作る余裕は必要ですが、大きすぎると首や袖口から空気が早く抜け、狙った部位へ風が届かないことがあります。小さすぎると服が身体に密着し、風路がつぶれます。
            </P>
            <P>
              通常の作業服サイズだけで決めず、次の装備を着けた状態で確認します。
            </P>
            <Ul>
              <li>インナー</li>
              <li>フルハーネス</li>
              <li>反射・安全ベスト</li>
              <li>腰ベルト</li>
              <li>工具袋</li>
              <li>防じん・防毒マスク</li>
              <li>車両や重機の座席</li>
            </Ul>

            <H3>インナーは汗を保持しすぎないものを選ぶ</H3>
            <P>
              空調服の冷却は汗の蒸発を利用しますが、汗で重くなり身体へ貼り付く厚手素材は、風を感じにくくすることがあります。吸汗速乾性と肌離れを重視し、現場の保護要件を満たす範囲で薄手のインナーを選びます。綿素材が禁止という意味ではなく、汗量、火気、静電気、肌トラブルなど現場条件との適合で判断します。
            </P>

            <H3>吸込口をふさがない</H3>
            <P>
              ファンの吸込側を壁、座席、腰袋、資材へ押し付けると風量が低下します。重機・フォークリフト・車両運転では、座った姿勢でファンがふさがれないか確認してください。
            </P>

            <H3>清掃と部品の組み合わせ</H3>
            <P>
              ファンに粉じんが付着すると、風量低下や異音につながります。電源を切り、メーカーの取扱方法に従って清掃します。異なるメーカー、電圧、コネクターのファンとバッテリーを自己判断で組み合わせず、互換性が明示された構成を使います。
            </P>

            <H2 id="rest-rule">空調服を着用した人の休憩をどう決めるか</H2>
            <P>
              2026年ガイドラインは、身体を冷却する服の効果により深部体温上昇を抑えられる場合、休憩時間や作業中止基準の設定を調整できる可能性を示しています。しかし、実務では次の順番が必要です。
            </P>
            <Ol>
              <li>作業強度と暑熱順化を区分する</li>
              <li>作業位置のWBGTを測定する</li>
              <li>標準の休憩目安を設定する</li>
              <li>冷却服の効果を実測・観察する</li>
              <li>バディ制と巡視で異常を確認する</li>
              <li>個人差の大きい人は短い間隔で確認する</li>
              <li>体温・体調が戻らない場合は休憩延長または作業中止</li>
            </Ol>
            <P>
              空調服のメーカー風量や電圧だけを根拠に、休憩時間を短縮しないでください。また、空調服の効果がある人と、暑熱順化していない新人、高年齢者、睡眠不足・体調不良の人を同じルールで扱わないことも重要です。
            </P>

            <H2 id="company-rules">会社が決めるべき運用ルール</H2>
            <H3>1. 空調服支給と休憩基準を分ける</H3>
            <P>
              空調服を支給したことを理由に、休憩を自動で短縮しません。身体冷却服による休憩設定の調整を検討する場合も、WBGT、作業強度、暑熱順化、健康状態、実測・観察に基づき、安全衛生担当者等が判断します。朝礼での周知は
              <Link
                href="/articles/construction-site-safety-checklist"
                className="font-bold underline underline-offset-4"
              >
                建設現場の安全チェックリスト
              </Link>
              も参考になります。
            </P>

            <H3>2. 始業前点検</H3>
            <Ul>
              <li>バッテリー残量</li>
              <li>ファン左右の動作</li>
              <li>ケーブル</li>
              <li>異音・異臭・異常発熱</li>
              <li>吸込口の詰まり</li>
              <li>服の破れ</li>
              <li>装備との干渉</li>
            </Ul>

            <H3>3. 定時給水・塩分補給</H3>
            <P>
              「汗が少なく感じるから飲まなくてよい」と判断せず、作業計画に合わせて定期的に摂取します。疾病や食事制限がある人は、産業医・主治医等の指示を優先します。
            </P>

            <H3>4. バディ制・巡視</H3>
            <P>
              周囲の作業者と声をかけ合い、返事、歩き方、集中力、顔色、発汗の変化を確認します。本人が「大丈夫」と答えても、普段と様子が違う場合は作業を止めます。
            </P>

            <H3>5. 代替冷却を準備</H3>
            <P>
              空調服が使えない、または効きにくい場面に備えて、冷却ベスト、スポットクーラー、工場扇、冷房休憩所、アイススラリー等の選択肢を準備します。
            </P>

            <H3>6. 異常時手順</H3>
            <P>
              熱中症のおそれがある人を発見したら、作業離脱、身体冷却、責任者への報告、見守り、医療機関への接続を行います。回復したように見えても、後から悪化する場合があるため、連絡体制を整えます。
            </P>

            <H2 id="response">熱中症が疑われるときの対応</H2>
            <SectionImage
              src={`/images/${slug}/fan-jacket-heat-illness-response.webp`}
              alt="空調服着用中に体調不良となった作業者を離脱させ冷却する訓練"
            />
            <div className="my-6 rounded-2xl border border-rose-300 bg-rose-50 p-6">
              <H3>1. すぐに作業から離脱させる</H3>
              <P>
                「少し休めば戻れる」「空調服の風量を上げればよい」と判断せず、作業を中止します。高所、道路、機械周辺など危険な場所から安全に移動させます。
              </P>
              <H3>2. 十分に涼しい場所へ移す</H3>
              <P>
                冷房のある休憩所、スポットクーラーを使える場所、日陰で風通しのよい場所へ移します。空調服のファンだけで回復させようとしません。
              </P>
              <H3>3. 身体を冷却する</H3>
              <P>
                衣服や保護具を安全に緩め、水をかけて送風する、濡れタオルを当てる、保冷材やアイススラリー等を使うなど、現場で定めた方法で冷却します。
              </P>
              <H3>4. 一人にしない</H3>
              <P>
                熱中症は経過中に急変することがあります。意識が明確に見えても、回復確認や医療接続が終わるまで見守ります。
              </P>
              <H3>5. 医療機関へつなぐ</H3>
              <P>
                返事がおかしい、自力で水分を飲めない、歩けない、けいれん、高体温、症状が改善しない場合は、救急隊要請を含め速やかに医療へつなぎます。判断に迷う場合も専門機関へ相談します。
              </P>
            </div>
            <P>
              屋外作業全体の対策は
              <Link
                href="/articles/outdoor-work-heatstroke-measures"
                className="font-bold underline underline-offset-4"
              >
                屋外作業の熱中症対策
              </Link>
              もあわせて確認してください。
            </P>

            <H2 id="budget">対策費をどこへ配分するか</H2>
            <P>
              熱中症対策の予算を空調服だけへ集中させると、現場全体の弱点が残ります。例えば
              <Mark>20人</Mark>
              の現場で、全員へ最上位の空調服を配る前に、次の配分も比較します。
            </P>
            <Ul>
              <li>作業位置ごとのWBGT計</li>
              <li>予備バッテリー</li>
              <li>ペルチェ・水冷・保冷剤式の選択肢</li>
              <li>冷房休憩所</li>
              <li>スポットクーラー</li>
              <li>工場扇と排気</li>
              <li>給水・塩分用品</li>
              <li>交代要員</li>
              <li>体調確認と教育</li>
            </Ul>
            <P>
              空調服が向く人には空調服を、向かない工程には直接冷却や環境冷却を割り当てるほうが、実効性の高い対策になります。
            </P>

            <H2 id="failures">よくある失敗例</H2>
            <H3>35℃だけで判断する</H3>
            <P>
              気温は重要ですが、湿度、放射熱、作業強度、暑熱順化を無視すると誤ります。WBGTと現場条件で判断してください。
            </P>
            <H3>涼しいから安全と思う</H3>
            <P>
              皮膚表面が快適でも、深部体温、脱水、疲労が進んでいる可能性があります。
            </P>
            <H3>空調服の下に厚着する</H3>
            <P>
              汗をため込み、風路ができにくい組み合わせは効果を落とします。作業上必要な保護を維持したうえで、透湿性・吸汗性を確認します。
            </P>
            <H3>バッテリー切れを放置する</H3>
            <P>
              停止後の対応場所、交換手順、予備電源を決めていないと、暑い場所で点検することになります。
            </P>
            <H3>空調服以外へ予算を振り分けない</H3>
            <P>
              全員へ高性能空調服を配るより、現場によってはWBGT計、冷房休憩所、スポットクーラー、交代要員へ予算を配分したほうが効果的です。
            </P>

            <H2 id="checklist">法人担当者向けチェックリスト</H2>
            <ul className="mt-6 grid gap-3 text-gray-900 md:grid-cols-2">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>

            <H2 id="category-cta">対策カテゴリーをまとめて確認</H2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {categoryLinks.map((item) => (
                <CategoryCard key={item.url} item={item} />
              ))}
            </div>

            <H2 id="faq">よくある質問</H2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border border-gray-300 bg-white p-5"
                >
                  <summary className={`cursor-pointer ${cls.faqQ}`}>
                    {faq.q}
                  </summary>
                  <p className={`mt-3 ${cls.body}`}>{faq.a}</p>
                </details>
              ))}
            </div>

            <H2 id="references">参考情報</H2>
            <ul className="my-4 space-y-3 text-[15px] leading-7 text-gray-900">
              <li>
                <a
                  href="https://neccyusho.mhlw.go.jp/pdf/2026/r8_neccyusho_guidelines.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  厚生労働省「職場における熱中症防止のためのガイドライン」2026年版
                </a>
              </li>
              <li>
                <a
                  href="https://www.jisha.or.jp/info/campaign/neccyusho/youkou.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  中央労働災害防止協会「令和8年 STOP！熱中症
                  クールワークキャンペーン」
                </a>
              </li>
              <li>
                <a
                  href="https://neccyusho.mhlw.go.jp/pdf/2026/necchusho2026_pamphlet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  厚生労働省「熱中症防止」2026年パンフレット
                </a>
              </li>
              <li>
                <a
                  href="https://onlinelibrary.wiley.com/doi/10.1002/1348-9585.12323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  Mori et
                  al., Mitigation of heat strain by wearing a long-sleeve
                  fan-attached jacket in a hot or humid environment
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  Google Search Central「生成AI機能向け最適化ガイド」
                </a>
              </li>
            </ul>

            <H2 id="summary">まとめ</H2>
            <P>
              空調服を着ていても熱中症になる可能性はあります。しかし、空調服そのものを「
              <Mark>35℃</Mark>
              を超えたら逆効果」と一律に否定するのも正確ではありません。
            </P>
            <P>
              空調服は、汗の蒸発や服内換気を助ける有効な補助策です。2026年の厚生労働省ガイドラインでも一定の効果が紹介されています。
            </P>
            <P>
              危険を防ぐポイントは、空調服を着るか脱ぐかの二択ではなく、次の順番で判断することです。
            </P>
            <Ol>
              <li>WBGT、湿度、放射熱、作業強度、体調を確認する</li>
              <li>ファン、バッテリー、風路を点検する</li>
              <li>効果が不足する場合は直接冷却を併用する</li>
              <li>固定作業や休憩場所は環境側を冷やす</li>
              <li>症状があれば作業を中止する</li>
              <li>
                体調不良者を一人にせず、身体冷却と医療接続を行う
              </li>
            </Ol>
            <P>
              空調服・冷却ベスト、スポットクーラー、工場扇・冷風機、冷感グッズ、計測器を、現場の弱点に合わせて組み合わせてください。
            </P>

            <section className="mt-12 rounded-2xl border border-gray-300 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900">関連記事</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-900">
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
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
