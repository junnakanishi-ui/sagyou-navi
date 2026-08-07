// ============================================================
// 作業用品ナビ / articles/milwaukee-packout-selection-guide
// 「PACKOUT 選び方（どれから買う・組み合わせ）」徹底ガイド（自己完結page.tsx）
// ============================================================
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "milwaukee-packout-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const TITLE =
  "Milwaukee PACKOUTの選び方｜どれから買う？組み合わせ・連結・おすすめ構成を徹底ガイド【2026年】";
const DESCRIPTION =
  "ミルウォーキーのモジュラー式収納システムPACKOUTの選び方を、土台→収納モジュール→固定/移動の3ステップで解説。ボックス・オーガナイザー・引き出し・バッグ・カート・アクセサリのラインナップ、連結方法、用途別おすすめ構成、メリット・デメリットまで網羅します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "ja_JP",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/articles/packout/hero.jpg`,
        width: 1280,
        height: 720,
        alt: "連結・積み重ねたMilwaukee PACKOUTの収納システムのイメージ",
      },
    ],
  },
};

// ---- URL helpers -------------------------------------------
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string =>
    `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
const R = (p: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${p}`, UTM);
const RAW = (u: string) => buildUrl(u, UTM);

// ---- CTA（指定URL） ----------------------------------------
const CTA_MAIN = {
  label: "Milwaukee PACKOUT一覧はこちら",
  href: RAW(
    "https://search.rakuten.co.jp/search/mall/%EF%BC%B0%EF%BC%A1%EF%BC%A3%EF%BC%AB%EF%BC%AF%EF%BC%B5%EF%BC%B4/?sid=426972",
  ),
};
const CTA_SUB = [
  {
    label: "工具一覧",
    href: RAW(
      "https://search.rakuten.co.jp/search/mall/%E5%B7%A5%E5%85%B7/?sid=426972",
    ),
  },
  {
    label: "運搬台車一覧",
    href: RAW(
      "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc&prom=1&b=31&view=grid",
    ),
  },
];

// ---- YouTube（参考動画） -----------------------------------
const VIDEOS = ["b42FYK98E50", "5WJzos0l-gs", "fo-d21YGeVQ", "-5GlFL1cEvM"];

// ---- UI atoms ----------------------------------------------
function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
      {children}
    </span>
  );
}
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-gray-900 bg-gray-50 p-5 text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </div>
  );
}
function Caution({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
      <p className="mb-1 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}
function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={cls.table}>{children}</table>
    </div>
  );
}
function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}
function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}
function ArticleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        priority={priority}
        className="h-auto w-full rounded-lg border border-gray-200"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className={`mt-2 text-center ${cls.meta}`}>{alt}</figcaption>
    </figure>
  );
}

// ---- Shop links / product cards ----------------------------
function ShopButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-xs font-bold text-white hover:bg-gray-700"
    >
      {label}
    </a>
  );
}
function ShopLinks({ links }: { links: { label: string; href: string }[] }) {
  if (!links || links.length === 0) {
    return (
      <span className="inline-flex items-center rounded-md border border-dashed border-gray-400 px-3 py-2 text-xs text-gray-800">
        掲載準備中
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <ShopButton key={l.href} href={l.href} label={l.label} />
      ))}
    </div>
  );
}
function ProductCard({
  img,
  name,
  badge,
  feature,
  use,
  links,
}: {
  img: string;
  name: string;
  badge: string;
  feature: string;
  use: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-50">
        <Image
          src={`/products/${img}`}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
      <CategoryBadge>{badge}</CategoryBadge>
      <h3 className="mt-2 text-base font-black leading-snug text-gray-900">
        {name}
      </h3>
      <p className={`mt-1 ${cls.bodySm}`}>
        <span className="font-bold">特徴：</span>
        {feature}
      </p>
      <p className={`mt-1 ${cls.bodySm}`}>
        <span className="font-bold">向く使い方：</span>
        {use}
      </p>
      <p className={`mt-1 ${cls.meta}`}>
        ※価格・在庫・寸法・耐荷重・付属品・PACKOUT対応可否は各商品ページで要確認
      </p>
      <div className="mt-3">
        <ShopLinks links={links} />
      </div>
    </div>
  );
}

// ---- Video grid --------------------------------------------
function VideoGrid() {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {VIDEOS.map((id, i) => (
        <div
          key={id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-black"
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={`Milwaukee PACKOUT 参考動画 ${i + 1}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className={`bg-white px-3 py-2 text-center ${cls.meta}`}>
            参考動画{["①", "②", "③", "④"][i]}
          </p>
        </div>
      ))}
    </div>
  );
}

// ---- CTA blocks --------------------------------------------
function MainCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6 text-center">
      <p className={cls.ctaH3}>Milwaukee PACKOUT をまとめて探す</p>
      <p className={cls.meta}>
        ボックス・オーガナイザー・引き出し・バッグ・カートまで、組み合わせ自在。
      </p>
      <a
        href={CTA_MAIN.href}
        target="_blank"
        rel="nofollow sponsored"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
      >
        {CTA_MAIN.label} ›
      </a>
    </div>
  );
}
function FinalCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6 text-center">
      <p className="mb-2 text-xl font-black tracking-wide text-gray-900 sm:text-2xl">
        あなたの現場に合うPACKOUTを見つけよう
      </p>
      <p className={cls.meta}>
        まずは土台から。工具・運搬台車もあわせてチェックできます。
      </p>
      <a
        href={CTA_MAIN.href}
        target="_blank"
        rel="nofollow sponsored"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
      >
        {CTA_MAIN.label} ›
      </a>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {CTA_SUB.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-xs font-bold text-gray-900 hover:bg-gray-100"
          >
            {c.label} ›
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- FAQ data ----------------------------------------------
const FAQ = [
  {
    q: "PACKOUT（パックアウト）とは何ですか？",
    a: "Milwaukee（ミルウォーキー）のモジュラー式収納システムです。2021年に日本上陸し、75種類以上のモジュールを自由に組み合わせ・積み重ね・連結できるのが特徴です。ボックス・オーガナイザー・引き出し・バッグ・カートなどを、現場や車両に合わせて“自分仕様”に構築できます。",
  },
  {
    q: "PACKOUTはどれから買えばいいですか？",
    a: "まず土台になる大型ボックスかカート（ローリングストレージ）を選び、その上に用途別のモジュール（引き出し・オーガナイザー・トート）を積んでいくのが定石です。移動が多いならカート、車載・据え置き中心ならボックスを土台にすると失敗しにくいです。",
  },
  {
    q: "PACKOUTの選び方のポイントは？",
    a: "「①土台（ボックス/カート）→②収納モジュール（引き出し/オーガナイザー/トレイ）→③固定・移動（マウンティングプレート/収納棚/カート）」の3ステップで考えます。持ち運ぶ工具の量・現場までの移動手段・車載や壁面固定の有無を基準に選ぶと、無駄なく組めます。",
  },
  {
    q: "PACKOUT同士はどうやって連結しますか？",
    a: "上下にワンタッチで連結できます。固定は上のボックスを所定位置から奥へスライド、解除は中央のレバーを上げながら手前に引くだけ。連結レバーが手前一箇所にまとまっているため、片手でも扱いやすい設計です。",
  },
  {
    q: "引き出し収納とオーガナイザーの違いは？",
    a: "引き出し収納（キャビネット）は前面が開閉するため、下段に積んでいても上のボックスを外さずに中身を取り出せます。オーガナイザーは細かいパーツを分類する透明天板のケースで、中身がひと目で分かります。工具は引き出し、ビス・ビット等の小物はオーガナイザー、と役割で使い分けます。",
  },
  {
    q: "オーガナイザーのサイズ展開は？",
    a: "フルサイズのMサイズと、ハーフサイズのSサイズがあります。Sサイズは高さ違いがあるため、並べて連結する際は高さに注意します。工具箱に組み込むか単体で持ち出すかで、サイズと個数を選びます。",
  },
  {
    q: "カート（ローリングストレージ）のメリットは？",
    a: "大型タイヤと伸縮ハンドルで、工具を大量に積んだままスムーズに移動できます。耐衝撃ポリマー製で耐荷重が高く、全路面タイヤやIP65相当の防水性能を備えるモデルもあり、他のPACKOUTを積み上げる“土台”としても最適です。",
  },
  {
    q: "車載や壁面に固定できますか？",
    a: "できます。マウンティングプレートや収納棚モジュールを使えば、作業場の壁面やバンの荷室にPACKOUTを固定できます。据え置きの整理整頓や、走行中のズレ防止に役立ちます。",
  },
  {
    q: "PACKOUTのデメリットや注意点は？",
    a: "積み重ねると下段の中身が取り出しにくい（→前面開閉の引き出しで解決）、フル装備は重くなる、樹脂製ボックスとしては価格が高め、といった点があります。また保証の扱いは製品・販売店で異なるため、購入前に確認するのが安心です。",
  },
  {
    q: "DIYでも使えますか？プロ専用ですか？",
    a: "プロ現場での支持が厚い一方、頑丈さ・拡張性・デザイン性からDIYや趣味用途でも人気です。まずはボックス＋オーガナイザーなど小さな構成から始め、必要に応じて拡張していけます。",
  },
  {
    q: "PACKOUTの耐久性・防水性は？",
    a: "耐衝撃ポリマーや金属補強ラッチを採用し、モデルによってIP65相当の防水性能を備えます。屋外・車載・過酷な現場を想定した設計ですが、具体的な耐荷重・防水等級は製品ごとに異なるため各商品ページで確認してください。",
  },
  {
    q: "M18対応の扇風機やアクセサリもPACKOUTに載りますか？",
    a: "PACKOUT対応のM18扇風機など、システムに組み込めるアクセサリがあります。真空ボトルやクーラーボックスなど現場を快適にするアイテムもラインナップされ、収納から快適装備まで同じシステムで揃えられます。",
  },
  {
    q: "マキタのマックパックやタジマと何が違いますか？",
    a: "各社ともモジュラー式の収納システムを展開していますが、連結方式・ラインナップの幅・アクセサリ・耐久設計・価格が異なります。PACKOUTは対応モジュールの種類が非常に多く、拡張性・カスタム性の高さが強みです。使っている電動工具ブランドや必要な拡張性で選ぶとよいでしょう。",
  },
  {
    q: "トートバッグとツールバッグはどう違いますか？",
    a: "トートバッグは開口が広く出し入れしやすいオープン系、ツールバッグはポケットが多く工具を整理して携行しやすいタイプです。10・15・20インチなどサイズ展開があり、運ぶ工具の量と種類で選びます。PACKOUTのボックスと連結できるものもあります。",
  },
  {
    q: "PACKOUTは重ねたまま運べますか？",
    a: "連結した状態でカートに載せれば、複数のボックスをまとめて運べます。連結は片手のレバー操作で解除できるので、現場では必要なモジュールだけ外して持ち運ぶ、といった使い方も可能です。",
  },
  {
    q: "どこで買えますか？",
    a: "工具専門店や通販で購入できます。記事内の各商品リンク、または末尾の「PACKOUT一覧」からまとめて比較できます。工具本体や運搬台車もあわせて揃えたい場合は、サブの一覧リンクもご活用ください。",
  },
];

// ---- JSON-LD -----------------------------------------------
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sagyou-navi.com/logo.png",
    },
  },
  datePublished: "2026-07-16",
  dateModified: "2026-07-30",
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://www.sagyou-navi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://www.sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PACKOUTの選び方",
      item: CANONICAL,
    },
  ],
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ============================================================
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 py-10">
        <nav className={`mb-4 ${cls.meta}`} aria-label="パンくず">
          <a href="https://www.sagyou-navi.com/" className="hover:underline">
            ホーム
          </a>{" "}
          ／{" "}
          <a
            href="https://www.sagyou-navi.com/articles"
            className="hover:underline"
          >
            記事一覧
          </a>{" "}
          ／ <span className="text-gray-900">PACKOUTの選び方</span>
        </nav>

        <CategoryBadge>工具箱・収納</CategoryBadge>
        <h1 className={cls.h1}>{TITLE}</h1>
        <p className={cls.body}>
          「PACKOUT、気になるけど種類が多すぎて
          <strong>どれから買えばいい？</strong>
          」——ミルウォーキーのモジュラー式収納システムPACKOUTは、自由な組み合わせが魅力な一方、最初の一台で迷いがちです。この記事では、
          <Mark>土台→収納モジュール→固定/移動の3ステップ</Mark>
          で失敗しない選び方を解説。ボックス・オーガナイザー・引き出し・バッグ・カートの
          <strong>ラインナップ</strong>、<strong>連結のやり方</strong>、
          <strong>用途別おすすめ構成</strong>
          、メリット・デメリットまで、これ一本で分かります。
        </p>
        <p className={cls.meta}>最終更新：2026年7月30日</p>

        <ArticleImage
          src="/articles/packout/hero.jpg"
          alt="連結・積み重ねたMilwaukee PACKOUTの収納システムのイメージ"
          priority
        />

        {/* ============ H2-1 とは・結論 ============ */}
        <h2 className={cls.h2}>
          PACKOUTとは？モジュラー式収納システム【選び方の結論】
        </h2>
        <AnswerBox>
          <p>
            <strong>PACKOUT（パックアウト）</strong>は、Milwaukee（ミルウォーキー）のモジュラー式収納システムです。75種類以上のモジュールを
            <Mark>ワンタッチで連結・積み重ね</Mark>
            でき、現場や車両に合わせて自分仕様に組めます。選び方の結論はシンプルで、
            <Mark>
              ①土台（大型ボックス or カート）を決める →
              ②収納モジュール（引き出し・オーガナイザー・トレイ）を積む →
              ③固定/移動（マウンティングプレート・収納棚・カート）で仕上げる
            </Mark>
            の3ステップ。移動が多いならカートを土台に、車載・据え置き中心ならボックスを土台にすると失敗しにくいです。
          </p>
        </AnswerBox>

        <p className={cls.body}>
          まずは“最初の一台”に選ばれやすい定番から。下のボタンから各商品ページで寸法・価格・在庫を確認できます。
        </p>
        <CardGrid>
          <ProductCard
            img="ta040861-48228427.jpg"
            name="PACKOUT キャリー式ツールボックス 48228427"
            badge="土台・移動"
            feature="大型タイヤとハンドルで大量の工具も楽に移動。積み上げの土台に"
            use="移動が多い現場の起点"
            links={[{ label: "楽天市場で見る", href: R("ta040861-48228427/") }]}
          />
          <ProductCard
            img="ta032451-48228422.jpg"
            name="PACKOUT コンパクトツールボックス 48228422"
            badge="土台・入門"
            feature="取り回しの良い小型ボックス。はじめの一台に"
            use="DIY・軽装備のスタート"
            links={[{ label: "楽天市場で見る", href: R("ta032451-48228422/") }]}
          />
          <ProductCard
            img="ta032453-48228430.jpg"
            name="PACKOUT オーガナイザー Mサイズ 48228430"
            badge="整理"
            feature="透明天板で小物が一目で分かるフルサイズ"
            use="ビス・ビット・小物の分類"
            links={[{ label: "楽天市場で見る", href: R("ta032453-48228430/") }]}
          />
          <ProductCard
            img="ta032436-48228301.jpg"
            name="PACKOUT バックパック 48228301"
            badge="持ち運び"
            feature="両手が空くバックパック型。頑丈で自立"
            use="身軽に工具を携行"
            links={[{ label: "楽天市場で見る", href: R("ta032436-48228301/") }]}
          />
        </CardGrid>
        <MainCta />

        {/* ============ H2-2 3ステップの選び方 ============ */}
        <h2 className={cls.h2}>
          PACKOUTの選び方＝「土台 → 収納モジュール → 固定/移動」の3ステップ
        </h2>
        <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>
            <strong>土台を決める</strong>
            ：移動が多い→カート（ローリングストレージ）、車載・据え置き→大型ボックス/コンテナ。ここが積み上げの起点になります。
          </li>
          <li>
            <strong>収納モジュールを積む</strong>
            ：工具は前面開閉の<strong>引き出し収納</strong>
            、ビス・ビットなど小物は透明天板の
            <strong>オーガナイザー</strong>、細かな仕分けに
            <strong>ツールトレイ</strong>。
          </li>
          <li>
            <strong>固定/移動で仕上げる</strong>
            ：車載・壁面は<strong>マウンティングプレート・収納棚</strong>
            、持ち運びは<strong>トート・バッグ・バックパック</strong>で。
          </li>
        </ol>
        <p className={cls.body}>
          この順で考えると、手持ちの工具量・移動手段・車載の有無から、無駄なく“自分の一式”が組めます。以降で各カテゴリを、代表アイテムとともに見ていきましょう。
        </p>

        {/* ============ H2-3 土台 ============ */}
        <h2 className={cls.h2}>
          【土台】ボックス・コンテナ・カート（連結の起点を選ぶ）
        </h2>
        <p className={cls.body}>
          システムの起点になるのが土台です。大量の工具を運ぶなら
          <strong>カート</strong>、車載・据え置き中心なら
          <strong>ボックス・コンテナ</strong>
          。フォーム入りのツールボックスは、精密工具の保護にも向きます。
        </p>
        <CardGrid>
          <ProductCard
            img="ta032452-48228424.jpg"
            name="PACKOUT ツールボックス Mサイズ 48228424"
            badge="土台"
            feature="積み重ねの中核になる定番ボックス"
            use="工具の収納・持ち運びの中心"
            links={[{ label: "楽天市場で見る", href: R("ta032452-48228424/") }]}
          />
          <ProductCard
            img="ta032457-48228450.jpg"
            name="PACKOUT ツールボックス Mサイズ フォーム入り 48228450"
            badge="土台"
            feature="フォームで精密工具を保護"
            use="精密工具・計測器の収納"
            links={[{ label: "楽天市場で見る", href: R("ta032457-48228450/") }]}
          />
          <ProductCard
            img="ta032456-48228440.jpg"
            name="PACKOUT コンテナ 48228440"
            badge="土台"
            feature="大容量コンテナ。かさばる工具・資材に"
            use="大物の収納・運搬"
            links={[
              { label: "楽天市場で見る", href: R("ta032456-48228440/") },
              { label: "楽天市場で見る（2）", href: R("ta002916-48228440/") },
            ]}
          />
          <ProductCard
            img="ta040859-48228415.jpg"
            name="PACKOUT カート 48228415"
            badge="土台・移動"
            feature="ホイール付きで多彩な組み合わせの土台に"
            use="大量の工具を運ぶ・据える"
            links={[{ label: "楽天市場で見る", href: R("ta040859-48228415/") }]}
          />
          <ProductCard
            img="ta032432-48228027.jpg"
            name="PACKOUT キャリー式ツールボックス専用 折り畳みハンドル 48228027"
            badge="アクセサリ"
            feature="キャリー運用を補助する折り畳みハンドル"
            use="キャリー式の拡張"
            links={[{ label: "楽天市場で見る", href: R("ta032432-48228027/") }]}
          />
        </CardGrid>

        {/* ============ H2-4 整理 ============ */}
        <h2 className={cls.h2}>
          【整理】オーガナイザー・引き出し・トレイ（細かい工具を分類）
        </h2>
        <p className={cls.body}>
          <strong>引き出し収納</strong>
          は前面から開くので、下段に積んでも上を外さずに取り出せて便利。
          <strong>オーガナイザー</strong>
          は透明天板で小物の在庫がひと目で分かります。用途で組み合わせましょう。
        </p>
        <CardGrid>
          <ProductCard
            img="ta040864-48228442.jpg"
            name="PACKOUT 引き出し収納（2段/3段/4段）"
            badge="整理・引き出し"
            feature="前面開閉で下段でも取り出せる引き出し。段数で選択"
            use="工具を段ごとに整理"
            links={[
              { label: "2段 48228442", href: R("ta040864-48228442/") },
              { label: "3段 48228443", href: R("ta040865-48228443/") },
              { label: "4段 48228444", href: R("ta040866-48228444/") },
            ]}
          />
          <ProductCard
            img="ta002914-48228435.jpg"
            name="PACKOUT オーガナイザー Sサイズ 48228435"
            badge="整理"
            feature="ハーフサイズのオーガナイザー。高さ違いに注意"
            use="小物の細分類"
            links={[{ label: "楽天市場で見る", href: R("ta002914-48228435/") }]}
          />
          <ProductCard
            img="ta002913-48228432.jpg"
            name="PACKOUT ディープオーガナイザー 48228432"
            badge="整理"
            feature="深型で背の高い小物も収納"
            use="やや大きめのパーツ整理"
            links={[
              { label: "タイプA", href: R("ta002913-48228432/") },
              { label: "タイプA（2）", href: R("ta032455-48228432/") },
            ]}
          />
          <ProductCard
            img="ta032433-48228045.jpg"
            name="PACKOUT ツールトレイ 48228045"
            badge="整理"
            feature="浅型トレイで細かな仕分けに"
            use="小物・消耗品の仕分け"
            links={[
              { label: "タイプA", href: R("ta032433-48228045/") },
              { label: "タイプA（2）", href: R("ta002899-48228045/") },
            ]}
          />
        </CardGrid>

        {/* ============ H2-5 持ち運び ============ */}
        <h2 className={cls.h2}>【持ち運び】バッグ・トート・バックパック</h2>
        <p className={cls.body}>
          ボックスほど大げさにしたくない、身軽に動きたい——そんなときはバッグ類。開口の広い
          <strong>トートバッグ</strong>、ポケットの多い
          <strong>ツールバッグ</strong>、両手が空く
          <strong>バックパック</strong>
          から、運ぶ工具に合わせて選べます。
        </p>
        <CardGrid>
          <ProductCard
            img="ta032439-48228310n.jpg"
            name="PACKOUT トートバッグ（10/15/20インチ）"
            badge="持ち運び・トート"
            feature="開口が広く出し入れしやすいオープン系。サイズで選択"
            use="工具を素早く出し入れ"
            links={[
              { label: "10インチ 48228310N", href: R("ta032439-48228310n/") },
              {
                label: "10インチ 48228310N（2）",
                href: R("ta002900-48228310n/"),
              },
              { label: "15インチ 48228315N", href: R("ta002901-48228315n/") },
              { label: "20インチ 48228320N", href: R("ta032444-48228320n/") },
            ]}
          />
          <ProductCard
            img="ta032440-48228311.jpg"
            name="PACKOUT タフトートバッグ（ベルト付10/15）"
            badge="持ち運び・トート"
            feature="タフ仕様のトート。ベルト付きや大型も"
            use="ハードに使う携行"
            links={[
              {
                label: "ベルト付10インチ 48228311",
                href: R("ta032440-48228311/"),
              },
              { label: "15インチ 48228317", href: R("ta032443-48228317/") },
            ]}
          />
          <ProductCard
            img="ta032445-48228321n.jpg"
            name="PACKOUT ツールバッグ（15/20インチ）"
            badge="持ち運び・バッグ"
            feature="ポケットが多く工具を整理して携行"
            use="工具を分類して持ち運ぶ"
            links={[
              { label: "15インチ 48228321N", href: R("ta032445-48228321n/") },
              { label: "20インチ 48228322N", href: R("ta032446-48228322n/") },
            ]}
          />
        </CardGrid>

        {/* ============ H2-6 固定・拡張 ============ */}
        <h2 className={cls.h2}>
          【固定・拡張】収納棚・マウンティングプレート（車載・壁面）
        </h2>
        <p className={cls.body}>
          作業場の壁面やバンの荷室にPACKOUTを固定するなら、
          <strong>マウンティングプレート</strong>や
          <strong>収納棚モジュール</strong>
          が活躍します。据え置きの整理整頓や走行中のズレ防止に。
        </p>
        <CardGrid>
          <ProductCard
            img="ta040869-48228480.jpg"
            name="PACKOUT 収納棚モジュール（棚/棚キット）"
            badge="固定・拡張"
            feature="壁面・車載でPACKOUTを固定する棚"
            use="据え置き・車載の整理"
            links={[
              { label: "収納棚キット 48228480", href: R("ta040869-48228480/") },
              { label: "収納棚 48228481", href: R("ta032458-48228481/") },
            ]}
          />
          <ProductCard
            img="ta032460-48228488.jpg"
            name="PACKOUT デスクトップ 48228488"
            badge="固定・拡張"
            feature="天板化して作業台・据え置きに"
            use="作業スペースの拡張"
            links={[{ label: "楽天市場で見る", href: R("ta032460-48228488/") }]}
          />
          <ProductCard
            img="ta032461-48228496.jpg"
            name="PACKOUT ウォールマウンティングプレート（S）48228496"
            badge="固定・拡張"
            feature="壁面にPACKOUTを取り付けるプレート"
            use="壁面固定・省スペース"
            links={[{ label: "楽天市場で見る", href: R("ta032461-48228496/") }]}
          />
        </CardGrid>

        {/* ============ H2-7 快適・現場アイテム ============ */}
        <h2 className={cls.h2}>
          【快適・現場アイテム】クーラー・真空ボトル・M18扇風機・ソケットセット
        </h2>
        <p className={cls.body}>
          PACKOUTは収納だけでなく、現場を快適にするアイテムも同じシステムで揃えられます。クーラーボックスや真空ボトル、
          <strong>M18対応の扇風機</strong>
          、収納ケース付きのソケットセットなどです。
        </p>
        <CardGrid>
          <ProductCard
            img="ta052161-48228460.jpg"
            name="PACKOUT クーラーボックス 48228460"
            badge="快適"
            feature="PACKOUT対応のクーラーボックス"
            use="現場の保冷・飲料"
            links={[{ label: "楽天市場で見る", href: R("ta052161-48228460/") }]}
          />
          <ProductCard
            img="ta032449-48228397b.jpg"
            name="PACKOUT 真空ボトル（L・1,065mL）"
            badge="快適"
            feature="保温・保冷の真空ボトル。カラーで選択"
            use="現場の水分補給"
            links={[
              { label: "ブラック 48228397B", href: R("ta032449-48228397b/") },
              { label: "レッド 48228397R", href: R("ta032450-48228397r/") },
            ]}
          />
          <ProductCard
            img="ta052907-m18afg20apj.jpg"
            name="M18 PACKOUT 扇風機 M18AFG20APJ"
            badge="快適・電動"
            feature="M18バッテリー対応の扇風機。夏の現場に"
            use="暑い現場の送風"
            links={[
              { label: "楽天市場で見る", href: R("ta052907-m18afg20apj/") },
            ]}
          />
          <ProductCard
            img="ta032511-49666801.jpg"
            name="SHOCKWAVE ディープインパクトソケット 3/8 19PCS PACKOUTセット 49666801"
            badge="工具・セット"
            feature="PACKOUTケース付きインパクトソケットセット"
            use="インパクト作業の一式"
            links={[{ label: "楽天市場で見る", href: R("ta032511-49666801/") }]}
          />
        </CardGrid>

        {/* ============ H2-8 連結のやり方 ============ */}
        <h2 className={cls.h2}>連結・積み重ねのやり方（固定と解除）</h2>
        <p className={cls.body}>
          PACKOUT最大の魅力が、工具なしでできる
          <Mark>ワンタッチ連結</Mark>
          です。手順はシンプルで、慣れれば片手でも扱えます。
        </p>
        <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>
            <strong>固定</strong>
            ：上のボックスを土台の所定位置に載せ、
            <strong>奥へスライド</strong>して固定する
          </li>
          <li>
            <strong>解除</strong>：手前の
            <strong>中央レバーを上げながら手前へ引く</strong>と外れる
          </li>
          <li>
            <strong>組み替え</strong>
            ：連結レバーが手前一箇所にまとまっているため、必要なモジュールだけ素早く付け外しできる
          </li>
        </ol>
        <ArticleImage
          src="/articles/packout/renketsu.jpg"
          alt="PACKOUTを積み重ねてワンタッチで連結する様子のイメージ"
        />

        {/* ============ H2-9 用途別おすすめ構成 ============ */}
        <h2 className={cls.h2}>用途別おすすめ構成（職人・DIY・車載）</h2>
        <Table>
          <thead>
            <tr>
              <Th>タイプ</Th>
              <Th>おすすめ構成の考え方</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>移動が多い職人</Td>
              <Td>
                カートを土台に、引き出し収納＋オーガナイザーを積む。現場では必要な段だけ外して持ち運ぶ
              </Td>
            </tr>
            <tr>
              <Td>DIY・はじめての一台</Td>
              <Td>
                コンパクト/Mサイズのボックス＋オーガナイザーから。使いながら引き出しやバッグを買い足す
              </Td>
            </tr>
            <tr>
              <Td>車載・据え置き</Td>
              <Td>
                マウンティングプレート/収納棚で荷室に固定。ボックス＋引き出しで整理し、走行中のズレを防ぐ
              </Td>
            </tr>
            <tr>
              <Td>身軽に動きたい</Td>
              <Td>
                トート/ツールバッグ＋バックパック。必要工具だけを軽快に携行
              </Td>
            </tr>
          </tbody>
        </Table>

        {/* ============ H2-10 メリット・デメリット ============ */}
        <h2 className={cls.h2}>PACKOUTのメリット・デメリット・注意点</h2>
        <Table>
          <thead>
            <tr>
              <Th>メリット</Th>
              <Th>デメリット・注意点</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>連結・積み重ねで自由にカスタム</Td>
              <Td>フル装備は重くなる（土台にカート推奨）</Td>
            </tr>
            <tr>
              <Td>頑丈な耐衝撃ポリマー・高い耐荷重</Td>
              <Td>樹脂ボックスとしては価格が高め</Td>
            </tr>
            <tr>
              <Td>引き出しは前面開閉で下段も取り出せる</Td>
              <Td>
                ボックス積みは下段が取り出しにくい（引き出しで解決）
              </Td>
            </tr>
            <tr>
              <Td>対応モジュールが豊富で拡張性が高い</Td>
              <Td>Sサイズは高さ違いに注意して連結する</Td>
            </tr>
          </tbody>
        </Table>
        <Caution title="購入前に確認したいこと">
          <p>
            耐荷重・防水等級（IP等級）・寸法・PACKOUT対応可否は製品ごとに異なります。また保証の扱いは製品・販売店で異なる場合があるため、購入前に各商品ページやメーカー情報で確認すると安心です。重い構成をカートなしで持ち上げると、腰などを痛める恐れがあるため無理のない運用を。
          </p>
        </Caution>

        {/* ============ H2-11 参考動画 ============ */}
        <h2 className={cls.h2}>参考動画（使い方・連結・レビュー）</h2>
        <p className={cls.body}>
          連結や組み合わせの雰囲気は、動画が一番わかりやすいです。使い方・レビューの参考動画をまとめました。
        </p>
        <VideoGrid />

        {/* ============ H2-12 他ブランド比較 ============ */}
        <h2 className={cls.h2}>
          マキタ・タジマ等 他ブランドとの違いと選び方
        </h2>
        <p className={cls.body}>
          モジュラー式の収納システムは、PACKOUT（ミルウォーキー）のほかにも
          <strong>マキタ（マックパック）</strong>、<strong>タジマ</strong>
          などが展開しています。連結方式・ラインナップの幅・アクセサリ・耐久設計・価格が各社で異なります。
          <Mark>
            PACKOUTは対応モジュールの種類が非常に多く、拡張性・カスタム性が強み
          </Mark>
          。使っている電動工具ブランドとの相性や、必要な拡張性・車載固定の有無で選ぶとよいでしょう。工具本体や運搬台車もあわせて揃えたい場合は、末尾のサブ一覧が便利です。
        </p>

        {/* ============ H2-13 まとめ + 最終CTA ============ */}
        <h2 className={cls.h2}>
          まとめ｜まず土台から。あとは積み上げるだけ
        </h2>
        <p className={cls.body}>
          PACKOUT選びは、
          <Mark>
            ①土台（カート/ボックス）→②収納モジュール（引き出し/オーガナイザー/トレイ）→③固定・移動
          </Mark>
          の順に考えれば失敗しません。最初から完璧を目指さず、まず土台と1〜2個のモジュールから始め、現場で使いながら拡張していくのが賢い増やし方です。下の一覧から、あなたの現場に合う組み合わせを見つけてください。
        </p>
        <FinalCta />

        {/* ============ H2-14 FAQ ============ */}
        <h2 className={cls.h2}>よくある質問（FAQ）</h2>
        <div className="my-6 space-y-3">
          {FAQ.map((f, i) => (
            <details
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <summary className={`cursor-pointer ${cls.faqQ}`}>{f.q}</summary>
              <p className={`mt-2 ${cls.bodySm}`}>{f.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
