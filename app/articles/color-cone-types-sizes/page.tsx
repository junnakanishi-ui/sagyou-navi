import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "color-cone-types-sizes";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const heroImage = `/images/${slug}/color-cone-types-hero.webp`;
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=color-cone-types-sizes";

const title =
  "カラーコーンの種類とサイズを徹底解説｜700mm・反射・伸縮式・ヘビーの違いと選び方【2026年版】";
const description =
  "カラーコーンの種類とサイズを、700mm標準、反射、ヘビー、伸縮式、LED、小型まで分かりやすく解説します。用途別の選び方と関連資材まで紹介します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "カラーコーンの種類とサイズを徹底解説【2026年版】",
    description: "700mm・反射・伸縮式・ヘビーの違いと選び方を解説。",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-03",
    modifiedTime: "2026-08-03",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "さまざまな種類のカラーコーンを比較するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "カラーコーンの種類とサイズを徹底解説【2026年版】",
    description: "700mm・反射・伸縮式・ヘビーの違いと選び方を解説。",
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  badge: string;
  use: string;
  feature: string;
  check: string;
  image: string;
  url: string;
};

type RelatedItem = {
  name: string;
  image: string;
  url: string;
};

type RelatedSection = {
  key: string;
  title: string;
  listLabel: string;
  listUrl: string;
  intro: string;
  items: RelatedItem[];
};

const images = {
  types: `/images/${slug}/standard-vs-reflective-cones.webp`,
  heavy: `/images/${slug}/heavy-cone-outdoor-use.webp`,
  telescopic: `/images/${slug}/telescopic-cone-carry.webp`,
  chain: `/images/${slug}/cone-with-chain-rope.webp`,
  fence: `/images/${slug}/cone-and-fence-safety-zone.webp`,
  procurement: `/images/${slug}/cone-procurement-comparison.webp`,
} as const;

const products: Product[] = [
  {
    id: "f1",
    name: "カラーコーン H700 レッド",
    badge: "標準タイプ",
    use: "工事現場・駐車場・イベント整理",
    feature: "最も基本的なH700標準サイズ。まず比較の起点にしやすい。",
    check: "一般的な誘導・区画ならまずこの高さ帯を基準に検討",
    image: `/images/${slug}/products/1105010102.jpg`,
    url: `https://www.gc-select.com/products/1105010102?${UTM}`,
  },
  {
    id: "f2",
    name: "カラーコーン H700 イエロー",
    badge: "標準タイプ",
    use: "注意喚起・視認性を高めたい場所",
    feature: "赤以外で色分けしたいときに便利。用途別の色分け運用に向く。",
    check: "赤・黄・青・緑・白で意味分けしたい現場に向く",
    image: `/images/${slug}/products/1105010103.jpg`,
    url: `https://www.gc-select.com/products/1105010103?${UTM}`,
  },
  {
    id: "f3",
    name: "スコッチコーン H700 反射赤/白",
    badge: "反射タイプ",
    use: "夜間工事・夕方の駐車場・薄暗い場所",
    feature: "反射材付きでライトに当たったときの視認性を高めやすい。",
    check: "夜間や早朝など見えにくい時間帯があるなら優先度が高い",
    image: `/images/${slug}/products/1105010212.jpg`,
    url: `https://www.gc-select.com/products/1105010212?${UTM}`,
  },
  {
    id: "f4",
    name: "ヘビーコーン 赤/白 H700",
    badge: "重し不要になりやすい",
    use: "風の影響を受けやすい屋外・車両付近",
    feature: "標準コーンより安定性を重視したいときの有力候補。",
    check: "倒れやすさに悩む現場では通常コーンより先に検討したい",
    image: `/images/${slug}/products/1105210112.jpg`,
    url: `https://www.gc-select.com/products/1105210112?${UTM}`,
  },
  {
    id: "f5",
    name: "ストロングコーン 赤/白",
    badge: "頑丈タイプ",
    use: "出し入れが多い現場・耐久性重視",
    feature: "日常的に使う現場で、傷みや倒れにくさを重視したい方向け。",
    check: "長く使う、移動が多い、業務頻度が高いなら比較候補",
    image: `/images/${slug}/products/1105300502.jpg`,
    url: `https://www.gc-select.com/products/1105300502?${UTM}`,
  },
  {
    id: "f6",
    name: "NOBI-CORN 赤（伸縮式）",
    badge: "伸縮タイプ",
    use: "車載・持ち運び・緊急時備え",
    feature: "コンパクトに収納しやすく、常設より持ち運び向き。",
    check: "常設用途より車両搭載や臨時利用に向く",
    image: `/images/${slug}/products/1105310106.jpg`,
    url: `https://www.gc-select.com/products/1105310106?${UTM}`,
  },
  {
    id: "f7",
    name: "NOBI-CORN-MINI 赤（伸縮式）",
    badge: "小型伸縮",
    use: "屋内・軽作業・仮注意喚起",
    feature:
      "通常700mmほどの存在感は不要だが、簡易表示はしたい場面に向く。",
    check: "歩行者案内や小規模区画で使いやすい",
    image: `/images/${slug}/products/1105310206.jpg`,
    url: `https://www.gc-select.com/products/1105310206?${UTM}`,
  },
  {
    id: "f8",
    name: "まる見えコーン 赤反射",
    badge: "表示併用しやすい",
    use: "表示物を入れて誘導したい現場",
    feature: "コーン単体だけでなく、表示物と組み合わせて使いやすい。",
    check: "進入禁止・通行方向・注意喚起を一緒に見せたいとき向く",
    image: `/images/${slug}/products/1105230112.jpg`,
    url: `https://www.gc-select.com/products/1105230112?${UTM}`,
  },
  {
    id: "f9",
    name: "ベストスコッチコーン H700 径40mm",
    badge: "バー・チェーン併用向き",
    use: "バーやロープを通して規制帯を作る",
    feature: "上部径を活かし、区画ラインづくりと相性がよい。",
    check: "コーンバー・チェーン・ロープ併用なら有力候補",
    image: `/images/${slug}/products/1105020212.jpg`,
    url: `https://www.gc-select.com/products/1105020212?${UTM}`,
  },
  {
    id: "f10",
    name: "高輝度 LEDコーン NLS-1-6",
    badge: "夜間特化",
    use: "夜間工事・視認性最優先の規制",
    feature: "点灯や高輝度性で存在を強く知らせたい場面に向く。",
    check: "夜間の安全確保を最優先したいときに比較したい",
    image: `/images/${slug}/products/6300059760.jpg`,
    url: `https://www.gc-select.com/products/6300059760?${UTM}`,
  },
  {
    id: "f11",
    name: "バリアライン トラテープ",
    badge: "関連アクセサリ",
    use: "コーン同士をつないで立入規制",
    feature: "コーン単体より規制範囲を分かりやすく見せやすい。",
    check: "コーンだけで足りないときの追加導線に最適",
    image: `/images/${slug}/products/6300098356.jpg`,
    url: `https://www.gc-select.com/products/6300098356?${UTM}`,
  },
  {
    id: "f12",
    name: "カラーコーン（小）2個セット",
    badge: "小型タイプ",
    use: "屋内・簡易注意喚起・卓上/低所",
    feature: "標準サイズほど大きくない、小回りの利く小型タイプ。",
    check: "室内や低い位置での軽い案内に向く",
    image: `/images/${slug}/products/6300053708.jpg`,
    url: `https://www.gc-select.com/products/6300053708?${UTM}`,
  },
];

const relatedSections: RelatedSection[] = [
  {
    key: "fence",
    title: "フェンス・ネット",
    listLabel: "フェンス・ネット一覧",
    listUrl: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E3%83%95%E3%82%A7%E3%83%B3%E3%82%B9-%E3%83%8D%E3%83%83%E3%83%88?${UTM}`,
    intro:
      "大きな区画管理や仮囲いが必要な場面では、コーンだけでなくフェンスの併用が有効です。コーンは点で示し、フェンスは面で仕切れるため、役割が異なります。",
    items: [
      {
        name: "メッキオールネットフェンスⅡ スライド扉付 1800×1800",
        image: `/images/${slug}/products/1104520206.jpg`,
        url: `https://www.gc-select.com/products/1104520206?${UTM}`,
      },
      {
        name: "扉付メッキオールネットフェンスⅡ 1800×900",
        image: `/images/${slug}/products/1104520205.jpg`,
        url: `https://www.gc-select.com/products/1104520205?${UTM}`,
      },
      {
        name: "ガードフェンス オールネット 1800×1800",
        image: `/images/${slug}/products/1104500301.jpg`,
        url: `https://www.gc-select.com/products/1104500301?${UTM}`,
      },
      {
        name: "オールネットフェンス スライド扉付1800×1800",
        image: `/images/${slug}/products/1104520211.jpg`,
        url: `https://www.gc-select.com/products/1104520211?${UTM}`,
      },
    ],
  },
  {
    key: "chain",
    title: "チェーン・ロープ",
    listLabel: "チェーン・ロープ一覧",
    listUrl: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3-%E3%83%AD%E3%83%BC%E3%83%97?${UTM}`,
    intro:
      "コーン同士をつなぐ最も分かりやすい追加資材です。歩行者動線や立入禁止範囲を視覚的に伝えやすくなります。",
    items: [
      {
        name: "国産標識ロープ(トラロープ) 12mm×100m",
        image: `/images/${slug}/products/6300063417.jpg`,
        url: `https://www.gc-select.com/products/6300063417?${UTM}`,
      },
      {
        name: "プラチェーン8mm 黄黒",
        image: `/images/${slug}/products/6300098381.jpg`,
        url: `https://www.gc-select.com/products/6300098381?${UTM}`,
      },
      {
        name: "プラチェーン6mm イエロー",
        image: `/images/${slug}/products/6300098375.jpg`,
        url: `https://www.gc-select.com/products/6300098375?${UTM}`,
      },
      {
        name: "トラロープ #12×100M",
        image: `/images/${slug}/products/1137020410.jpg`,
        url: `https://www.gc-select.com/products/1137020410?${UTM}`,
      },
    ],
  },
  {
    key: "arrow",
    title: "矢印板・誘導標識",
    listLabel: "矢印板・誘導標識一覧",
    listUrl: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E7%9F%A2%E5%8D%B0%E6%9D%BF-%E8%AA%98%E5%B0%8E%E6%A8%99%E8%AD%98?${UTM}`,
    intro:
      "車両や歩行者へ進行方向を明確に示したい場合に役立ちます。工事現場や駐車場では、コーンだけでなく矢印表示があると迷いが減ります。",
    items: [
      {
        name: "【レンタル】蛍光高輝度二方向矢印板",
        image: `/images/${slug}/products/4106040413.jpg`,
        url: `https://www.gc-select.com/products/4106040413?${UTM}`,
      },
      {
        name: "アロースリーmini（ソーラー式LED矢印板）",
        image: `/images/${slug}/products/1106011022.jpg`,
        url: `https://www.gc-select.com/products/1106011022?${UTM}`,
      },
    ],
  },
  {
    key: "measurement",
    title: "計測・測量",
    listLabel: "計測・測量一覧",
    listUrl: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E8%A8%88%E6%B8%AC-%E6%B8%AC%E9%87%8F?${UTM}`,
    intro:
      "現場の管理業務と一緒にそろえる備品として相性が良いカテゴリです。安全資材以外も同時に準備したい担当者に向いています。",
    items: [
      {
        name: "ポータブルアルコール検知器 MKC-8",
        image: `/images/${slug}/products/6300025610.jpg`,
        url: `https://www.gc-select.com/products/6300025610?${UTM}`,
      },
      {
        name: "パルスゼロメーター OMC-CNPM001",
        image: `/images/${slug}/products/6300005386.jpg`,
        url: `https://www.gc-select.com/products/6300005386?${UTM}`,
      },
      {
        name: "しゃべるデジタル温湿度計",
        image: `/images/${slug}/products/6300056269.jpg`,
        url: `https://www.gc-select.com/products/6300056269?${UTM}`,
      },
      {
        name: "デジタル温湿度計 大型",
        image: `/images/${slug}/products/6300098479.jpg`,
        url: `https://www.gc-select.com/products/6300098479?${UTM}`,
      },
    ],
  },
  {
    key: "step",
    title: "足場台・脚立・ステップ",
    listLabel: "足場台・脚立・ステップ一覧",
    listUrl: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E8%B6%B3%E5%A0%B4%E5%8F%B0-%E8%84%9A%E7%AB%8B-%E3%82%B9%E3%83%86%E3%83%83%E3%83%97?${UTM}`,
    intro:
      "施設管理や現場作業で、周辺備品もまとめて手配したい場合の関連導線として有効です。",
    items: [
      {
        name: "トラック昇降ステップ DXF-14",
        image: `/images/${slug}/products/6300044301.jpg`,
        url: `https://www.gc-select.com/products/6300044301?${UTM}`,
      },
      {
        name: "多機能はしご 5.7m",
        image: `/images/${slug}/products/6300095630.jpg`,
        url: `https://www.gc-select.com/products/6300095630?${UTM}`,
      },
      {
        name: "折りたたみ踏み台4段 ブラック",
        image: `/images/${slug}/products/6300095626.jpg`,
        url: `https://www.gc-select.com/products/6300095626?${UTM}`,
      },
      {
        name: "折りたたみ式 踏み台",
        image: `/images/${slug}/products/6300095621.jpg`,
        url: `https://www.gc-select.com/products/6300095621?${UTM}`,
      },
    ],
  },
];

const primaryCta = `https://www.gc-select.com/pages/search-results-page?q=%E3%82%AB%E3%83%A9%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%B3&tab=products&${UTM}`;

const categoryLinks = [
  {
    label: "カラーコーン一覧",
    description: "標準・反射・ヘビー・伸縮をまとめて比較",
    tone: "main" as const,
    url: primaryCta,
  },
  ...relatedSections.map((section) => ({
    label: section.listLabel,
    description: section.title,
    tone: "sub" as const,
    url: section.listUrl,
  })),
];

const compareRows = [
  ["標準タイプ", "H700前後", "工事現場・駐車場・イベント", "汎用性が高い", "夜間視認性は別途検討"],
  ["反射タイプ", "H700前後", "夜間・夕方・出入口", "ライトを受けて見やすい", "日中のみなら標準でも可"],
  ["ヘビータイプ", "H700前後", "風の強い屋外・接触が多い場所", "倒れにくい", "持ち運びはやや重い"],
  ["伸縮式", "使用時中〜標準", "車載・緊急用・臨時規制", "収納しやすい", "常設向きではない"],
  ["小型タイプ", "低め", "屋内・軽作業", "取り回しが良い", "広い屋外では目立ちにくい"],
  ["LEDタイプ", "標準前後", "夜間工事", "視認性を強く高める", "管理面を確認"],
  ["表示併用タイプ", "標準前後", "案内・誘導", "情報も一緒に見せられる", "単純規制だけなら不要なこともある"],
];

const faqs = [
  {
    q: "カラーコーンの標準サイズは何mmですか？",
    a: "実務上は700mm前後を基準に考えると分かりやすいです。工事現場や駐車場など幅広い用途に対応しやすい高さです。",
  },
  {
    q: "700mm以外を選ぶのはどんなときですか？",
    a: "屋内や簡易表示なら小型タイプ、車載や臨時利用なら伸縮式など、用途に応じて選び分けます。",
  },
  {
    q: "反射付きは必須ですか？",
    a: "日中のみなら必須ではありませんが、夜間や夕方、車両周辺では優先度が高まります。",
  },
  {
    q: "ヘビーコーンのメリットは何ですか？",
    a: "通常の軽量コーンより安定しやすく、風や接触で倒れにくい点がメリットです。",
  },
  {
    q: "伸縮式は常設に向きますか？",
    a: "常設よりも、持ち運びや車載、臨時利用に向くタイプです。",
  },
];

const relatedArticles = [
  {
    href: "/articles/color-cone-selection",
    label:
      "カラーコーンの選び方｜駐車場・工事現場・イベントで使うコーン・バー・チェーンの使い分け",
  },
  {
    href: "/articles/plastic-chain-vs-cone-bar",
    label:
      "プラチェーンとコーンバーの違い｜駐車場・通路・立入禁止エリアの区画用品はどっちが良い？",
  },
  {
    href: "/articles/safety-walkway-setup",
    label:
      "安全通路の作り方｜工場・倉庫・工事現場で使うカラーコーン・コーンカバー・安全用品",
  },
  {
    href: "/articles/parking-lot-curve-mirror-installation-standards",
    label:
      "駐車場カーブミラーの設置基準は？位置・高さ・サイズ・一面鏡/二面鏡の選び方【2026年版】",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
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
      name: "カラーコーンの種類とサイズ",
      item: canonicalUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
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
          <h3 className="text-lg font-black text-gray-900">{product.name}</h3>
          <dl className="mt-4 space-y-3 text-[15px] leading-7 text-gray-900">
            <div>
              <dt className="font-bold">向く用途</dt>
              <dd>{product.use}</dd>
            </div>
            <div>
              <dt className="font-bold">特徴</dt>
              <dd>{product.feature}</dd>
            </div>
            <div>
              <dt className="font-bold">選定ポイント</dt>
              <dd>{product.check}</dd>
            </div>
          </dl>
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-5 inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            商品を見る
          </a>
        </div>
      </div>
    </article>
  );
}

function RelatedProductCard({ item }: { item: RelatedItem }) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <Image
          src={item.image}
          alt={`${item.name}の商品画像`}
          width={480}
          height={360}
          className="h-40 w-full object-contain p-3"
        />
      </div>
      <h4 className="mt-3 text-base font-bold text-gray-900">{item.name}</h4>
      <a
        href={item.url}
        target="_blank"
        rel="nofollow sponsored"
        className="mt-4 inline-flex rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-700"
      >
        商品を見る
      </a>
    </article>
  );
}

function CategoryCard({
  item,
}: {
  item: {
    label: string;
    description: string;
    tone: "main" | "sub";
    url: string;
  };
}) {
  const isMain = item.tone === "main";
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored"
      className={`rounded-xl border px-4 py-4 transition ${
        isMain
          ? "border-orange-300 bg-orange-50 hover:bg-orange-100"
          : "border-gray-300 bg-white hover:bg-gray-50"
      }`}
    >
      <div
        className={`text-sm font-black ${
          isMain ? "text-orange-800" : "text-gray-900"
        }`}
      >
        {item.label}
      </div>
      <p className="mt-1 text-sm leading-6 text-gray-900">{item.description}</p>
    </a>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <div className="mx-auto max-w-6xl px-4 py-8">
          <nav className={`mb-6 ${cls.meta}`}>
            <Link href="/" className="underline underline-offset-2">
              ホーム
            </Link>
            {" > "}
            <Link href="/articles" className="underline underline-offset-2">
              記事一覧
            </Link>
            {" > "}
            <span>カラーコーンの種類とサイズ</span>
          </nav>

          <article className="mx-auto max-w-4xl">
            <header>
              <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
                作業用品ナビ / 2026年8月更新
              </div>
              <h1 className={`mt-4 ${cls.h1}`}>{title}</h1>
              <P>
                カラーコーンの種類とサイズを、標準
                <Mark>700mm</Mark>
                を基準に、反射、ヘビー、伸縮式、LED、小型タイプまで整理し、用途別に選び方を解説します。
              </P>
              <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                <div className="relative aspect-video">
                  <Image
                    src={heroImage}
                    alt="さまざまな種類のカラーコーンを比較するイメージ"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                </div>
              </figure>
            </header>

            <section className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                AEO回答：カラーコーンはどう選ぶ？
              </h2>
              <P>
                カラーコーンを選ぶときは、まず
                <Mark>どこで使うか</Mark>
                を確認し、次に
                <Mark>
                  標準700mmで足りるか、重さや反射、収納性が必要か
                </Mark>
                を判断します。一般的な工事現場や駐車場の整理なら700mmの標準タイプが基準です。夜間や夕方は反射付き、風の強い屋外はヘビータイプ、車載や臨時利用は伸縮式、表示を見せたいならまる見えコーン、規制範囲を作るならバー・チェーン併用タイプが向いています。
              </P>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {categoryLinks.map((item) => (
                  <CategoryCard key={`aeo-${item.url}`} item={item} />
                ))}
              </div>
            </section>

            <H2 id="conclusion">
              先に結論：用途・視認性・安定性・収納性で決める
            </H2>
            <Ol>
              <li>
                一般的な誘導・区画なら
                <Mark>700mm前後の標準タイプ</Mark>
                が基準
              </li>
              <li>
                夜間・夕方・薄暗い場所なら
                <Mark>反射付きやLEDタイプ</Mark>
                を優先
              </li>
              <li>
                風の影響を受けやすい屋外や接触が多い現場では
                <Mark>ヘビータイプ</Mark>
                が有力
              </li>
              <li>
                車載・臨時利用・持ち運び重視なら
                <Mark>伸縮式や小型タイプ</Mark>
                が向く
              </li>
            </Ol>
            <P>
              さらに、コーン単体だけでは規制帯や動線が分かりにくい場合があります。その場合は、コーンバー、チェーン、ロープ、フェンス、矢印板などを組み合わせると、現場が一気に分かりやすくなります。用途別の使い分けは
              <Link
                href="/articles/color-cone-selection"
                className="font-bold underline underline-offset-4"
              >
                カラーコーンの選び方
              </Link>
              、区画ラインの作り方は
              <Link
                href="/articles/plastic-chain-vs-cone-bar"
                className="font-bold underline underline-offset-4"
              >
                プラチェーンとコーンバーの違い
              </Link>
              もあわせて確認してください。
            </P>

            <H2 id="types">カラーコーンの種類は大きく何に分かれる？</H2>
            <SectionImage
              src={images.types}
              alt="標準コーンと反射コーンを比較するイメージ"
            />
            <P>
              カラーコーンは、見た目の色違いだけでなく、
              <Mark>機能と使い方</Mark>
              でいくつかの種類に分けられます。
            </P>
            <H3>1. 標準タイプ</H3>
            <P>
              最も一般的なカラーコーンです。工事現場や駐車場、通路整理など、幅広い場面で使いやすく、初めて導入する場合の比較基準になります。高さ700mm前後のものが多く、現場で最も見かけやすいタイプです。
            </P>
            <H3>2. 反射タイプ</H3>
            <P>
              コーン本体に反射材が付いており、車のライトや照明を受けたときに見えやすくなるタイプです。夜間工事、夕方の屋外、駐車場出入口など、視認性を高めたい場面に向きます。
            </P>
            <H3>3. ヘビー・ストロングタイプ</H3>
            <P>
              ベースの重さや本体の頑丈さを重視したタイプです。風で倒れにくく、日常的に出し入れする現場や、車両付近など接触が起こりやすい場所にも向いています。
            </P>
            <H3>4. 伸縮式タイプ</H3>
            <P>
              折りたたみや伸縮ができるタイプです。車に積みっぱなしにしたい、必要なときだけ展開したい、持ち運びを重視したい場合に便利です。常設よりも、臨時利用や緊急用に向きます。
            </P>
            <H3>5. 小型タイプ</H3>
            <P>
              高さを抑えたタイプで、屋内や軽作業、簡易的な区画分けに向きます。広い屋外の規制には存在感が足りないこともあるため、使用場所を選びます。
            </P>
            <H3>6. LEDタイプ</H3>
            <P>
              点灯や高輝度性で存在を強く知らせたい場面に向くタイプです。夜間や視認性最優先の規制で検討したい選択肢です。
            </P>
            <H3>7. 表示併用タイプ</H3>
            <P>
              「まる見えコーン」のように、コーンだけでなく表示や案内も見せたいタイプです。進入禁止、工事中、通行方向などをあわせて伝えたいときに便利です。
            </P>

            <H2 id="size">カラーコーンのサイズは何mmが多い？</H2>
            <P>
              実務上は
              <Mark>700mm前後</Mark>
              を基準に考えると分かりやすいです。工事現場、駐車場、物流、イベントなど、多くの用途で使いやすく、標準タイプ・反射タイプ・ヘビータイプもこのクラスを中心に比較できます。
            </P>
            <H3>700mm前後：最も一般的な基準サイズ</H3>
            <P>
              迷ったらまず700mmクラスを基準に比較すると判断しやすくなります。色分けや反射の有無、重さの違いも、この高さ帯で横比較しやすいです。
            </P>
            <H3>小型サイズ：屋内・簡易表示向け</H3>
            <P>
              200mm〜400mm程度の小型タイプは、屋外の本格規制にはやや小さく感じることがありますが、屋内や軽作業の注意喚起では使いやすいです。
            </P>
            <H3>伸縮式：収納時サイズも重要</H3>
            <P>
              伸縮式は、使用時の高さだけでなく、収納時のコンパクトさが大きな価値です。車載用や緊急用では、展開時サイズだけでなく、しまいやすさも確認したいポイントです。
            </P>

            <H2 id="products">代表商品を種類別に比較</H2>
            <SectionImage
              src={images.heavy}
              alt="風のある屋外でヘビーコーンを使うイメージ"
            />
            <div className="mt-6 grid gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="compare">比較表：どの種類を選ぶべき？</H2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-300">
              <table className={`${cls.table} min-w-[720px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>種類</th>
                    <th className={cls.th}>サイズ感</th>
                    <th className={cls.th}>向く用途</th>
                    <th className={cls.th}>強み</th>
                    <th className={cls.th}>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className={cls.td}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H2 id="use-cases">用途別の選び方</H2>
            <SectionImage
              src={images.telescopic}
              alt="伸縮式カラーコーンを車載・持ち運びするイメージ"
            />
            <H3>工事現場・屋外規制</H3>
            <P>
              まずは700mm標準を基準に、夜間は反射、風の強い場所はヘビーやストロングタイプを検討します。規制帯を明確にしたい場合は、バーやロープを併用できるタイプが便利です。通路区画の具体例は
              <Link
                href="/articles/safety-walkway-setup"
                className="font-bold underline underline-offset-4"
              >
                安全通路の作り方
              </Link>
              も参考になります。
            </P>
            <H3>駐車場・施設管理</H3>
            <P>
              車両視認性を重視し、反射タイプや表示併用タイプが有力です。夜間利用があるならLEDタイプも比較対象にしたいところです。出口の死角対策は
              <Link
                href="/articles/parking-lot-curve-mirror-installation-standards"
                className="font-bold underline underline-offset-4"
              >
                駐車場カーブミラーの設置基準
              </Link>
              とあわせて見直すと、駐車場まわりの安全対策を一通り揃えやすくなります。
            </P>
            <H3>イベント・学校・店舗前</H3>
            <P>
              撤収や収納のしやすさを考え、標準タイプに加えて伸縮式も比較候補になります。人の流れを見せたい場合は、チェーンやロープ併用が有効です。
            </P>
            <H3>倉庫・工場・屋内</H3>
            <P>
              標準タイプや小型タイプで足りることが多いですが、搬入口では反射タイプも有効です。フォークリフト通路では表示併用タイプで意味をはっきりさせると伝わりやすくなります。
            </P>

            <H2 id="related-products">コーンと一緒に揃えたい関連商品</H2>
            <P>
              カラーコーンは単体でも使えますが、関連商材を組み合わせると現場が一気に分かりやすくなります。
            </P>
            <SectionImage
              src={images.chain}
              alt="カラーコーンとチェーンやロープで規制帯を作るイメージ"
            />

            {relatedSections.map((section) => (
              <section
                key={section.key}
                className="mt-10 rounded-2xl border border-gray-300 bg-gray-50 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-black text-gray-900">
                    {section.title}
                  </h3>
                  <a
                    href={section.listUrl}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-700"
                  >
                    {section.listLabel}を見る
                  </a>
                </div>
                <P>{section.intro}</P>
                {section.key === "fence" && (
                  <SectionImage
                    src={images.fence}
                    alt="カラーコーンとフェンスを併用して区画を管理するイメージ"
                  />
                )}
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {section.items.map((item) => (
                    <RelatedProductCard key={item.url} item={item} />
                  ))}
                </div>
              </section>
            ))}

            <H2 id="failures">よくある失敗例</H2>
            <Ol>
              <li>すべて標準コーンで済ませて夜間視認性が不足する</li>
              <li>風の強い場所で軽いコーンを使ってしまう</li>
              <li>車載用なのに収納しづらい大型タイプを選ぶ</li>
              <li>コーン単体だけで規制帯を作ろうとして伝わりにくい</li>
              <li>色分けルールがなく現場で意味が統一されない</li>
            </Ol>

            <H2 id="checklist">法人向けチェックリスト</H2>
            <SectionImage
              src={images.procurement}
              alt="法人担当者がカラーコーンや関連資材を比較検討するイメージ"
            />
            <Ul>
              <li>使用場所は屋内か屋外か</li>
              <li>夜間や夕方にも使うか</li>
              <li>風や接触が多いか</li>
              <li>常設か、持ち運びか</li>
              <li>コーンバー、ロープ、チェーンを併用するか</li>
              <li>色分けルールを決めるか</li>
              <li>表示や案内も一緒に見せたいか</li>
              <li>LEDや反射材が必要か</li>
            </Ul>

            <H2 id="faq">FAQ</H2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border border-gray-300 bg-white p-5"
                >
                  <summary className={`cursor-pointer ${cls.faqQ}`}>
                    {faq.q}
                  </summary>
                  <p className={`mt-3 ${cls.bodySm}`}>{faq.a}</p>
                </details>
              ))}
            </div>

            <H2 id="related">関連記事</H2>
            <Ul>
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
            </Ul>

            <H2 id="summary">まとめて比較したい方はこちら</H2>
            <P>
              カラーコーンの種類とサイズを選ぶときは、まず700mm前後の標準タイプを基準に考え、そのうえで
              <Mark>夜間なら反射、屋外ならヘビー、持ち運びなら伸縮式</Mark>
              、表示併用ならまる見えコーン、規制帯を作るならバーやロープ対応タイプというように用途で絞り込むと失敗しにくくなります。
            </P>
            <P>
              また、コーン単体で終わらせず、フェンス、チェーン・ロープ、矢印板などを組み合わせると、現場の安全性と分かりやすさが大きく向上します。まずはカラーコーン一覧を確認し、現場に合う種類とサイズを比較してみてください。
            </P>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {categoryLinks.map((item) => (
                <CategoryCard key={`end-${item.url}`} item={item} />
              ))}
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
