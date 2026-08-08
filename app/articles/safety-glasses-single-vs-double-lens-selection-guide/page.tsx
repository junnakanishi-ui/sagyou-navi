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

const SLUG = "safety-glasses-single-vs-double-lens-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const ARTICLE_TITLE =
  "保護メガネは一眼型・二眼型どっち？違いと作業別の選び方【2026年版】";
const SHORT_TITLE = "保護メガネは一眼型・二眼型どっち？";
const DESCRIPTION =
  "一眼型と二眼型の保護メガネは何が違うのか。研磨・切削・草刈り・工場作業を想定し、飛来方向、粉じん、フィット、度付きメガネ併用、曇り、JIS規格から選び方を解説。オーバーグラスや特殊用途品も整理します。";
const PUBLISHED = "2026-08-09";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ctas = productData.ctas;

type CatalogProduct = (typeof productData.products)[number];

const byImageFile = Object.fromEntries(
  productData.products.map((p) => [p.imageFile, p])
) as Record<string, CatalogProduct>;

function catalogUrl(imageFile: string) {
  return byImageFile[imageFile]?.url ?? "#";
}

type FeaturedProduct = {
  model: string;
  name: string;
  imageFile: string;
  use: string;
  fit: string;
  reason: string;
  check: string;
  badge: string;
};

const featured: Record<string, FeaturedProduct> = {
  SS9337E: {
    model: "SS9337E",
    name: "TRUSCO 一眼型セーフティグラス 超軽量フィットタイプ",
    imageFile: "162723.jpg",
    use: "製造・組立・軽作業など日常的に保護メガネを掛ける場面",
    fit: "軽量性と防曇・防傷を重視する現場",
    reason: "一眼型の超軽量フィットタイプ。広い一枚レンズで目元を覆いやすい",
    check: "顔との隙間と、作業で必要なカバー範囲を確認",
    badge: "一眼型・軽量",
  },
  "TSG-9160BK": {
    model: "TSG-9160BK",
    name: "TRUSCO 二眼型セーフティグラス フィットタイプ",
    imageFile: "162746.jpg",
    use: "機械加工、組立、設備保全などで長時間着用する現場",
    fit: "普通の眼鏡に近い形状とフィット調整を重視する現場",
    reason: "ツル・角度調整やノーズパッドなど、細かな合わせ込みがしやすい二眼型",
    check: "頬・こめかみ側の隙間と、ヘルメット等との干渉を確認",
    badge: "二眼型・フィット",
  },
  FGAG: {
    model: "FGAG",
    name: "TRUSCO 一眼型アジア人向けフィットグラス",
    imageFile: "162699.jpg",
    use: "粉じんの回り込みが気になる作業の候補",
    fit: "ガスケット付きで顔への沿い方を確認したい現場",
    reason: "アジア人の顔へのフィットを意識したガスケット付きシリーズ",
    check: "隙間の減り方と、長時間装着の圧迫感を試着で確認",
    badge: "一眼型・ガスケット",
  },
  "TOSG-727": {
    model: "TOSG-727",
    name: "TRUSCO 一眼型 オーバーグラスタイプ",
    imageFile: "162709.jpg",
    use: "切削、刈払い、木工、研磨など",
    fit: "度付きメガネを外せない作業者",
    reason: "メガネ併用を想定したオーバーグラス。上下クッションで顔に沿いやすい",
    check: "内側のメガネサイズ、干渉、曇り、耳周りの圧迫を確認",
    badge: "オーバーグラス",
  },
  VS101: {
    model: "VS101",
    name: "TRUSCO 一眼型オーバーセーフティグラス ゴーグルタイプ",
    imageFile: "162834.jpg",
    use: "より目元のカバー性を確認したい作業",
    fit: "オーバーグラスかつゴーグル寄りの形状が必要な現場",
    reason: "ゴーグルタイプでカバー範囲を広げたいときの候補",
    check: "対象危険源に対して十分な保護形状か、規格欄を個別に確認",
    badge: "オーバー・ゴーグル",
  },
  "TSG-8903BK": {
    model: "TSG-8903BK",
    name: "TRUSCO ライトフィット二眼型セーフティグラス",
    imageFile: "162762.jpg",
    use: "防曇・防傷を意識した長時間着用",
    fit: "軽めの二眼型フィットを求める現場",
    reason: "防曇性能の持続を訴求するライトフィット二眼型",
    check: "溶接作業には使わないこと。マスク併用時の曇りも確認",
    badge: "二眼型・防曇",
  },
  "TSG-814TM": {
    model: "TSG-814TM",
    name: "TRUSCO 二眼型セーフティグラス ゴーグルタイプ",
    imageFile: "162765.jpg",
    use: "粉じんや花粉など、回り込み対策を意識する作業",
    fit: "二眼型でもカバー性を高めたい現場",
    reason: "二眼型でもゴーグルタイプとしてカバー性を高めやすい候補",
    check: "「一眼＝高防護」と決めつけず、隙間と装着感で比較する",
    badge: "二眼型・ゴーグル",
  },
};

const specialLinks = [
  {
    label: "YAG・ファイバーレーザー用 TLSG-YG",
    imageFile: "162792.jpg",
    note: "レーザー用専用品。一般保護メガネと混同しない",
  },
  {
    label: "遮光度番号#3 遮光グラス TSG-71W",
    imageFile: "225187.jpg",
    note: "遮光用途。透明レンズの代用にしない",
  },
  {
    label: "ガス溶接用#1.4 GS-37W-14",
    imageFile: "222177.jpg",
    note: "ガス溶接用。必要な遮光度を確認",
  },
  {
    label: "ガス溶接用#1.7 TWG-17",
    imageFile: "225640.jpg",
    note: "ガス溶接用。作業条件に合う遮光度を確認",
  },
  {
    label: "オートクレーブタイプ TSG-440-AC",
    imageFile: "162790.jpg",
    note: "滅菌条件は取扱説明書で確認。名前だけで温度・時間を推測しない",
  },
  {
    label: "小型オートクレーブタイプ TSG-340-AC-S",
    imageFile: "162789.jpg",
    note: "小型・オートクレーブ対応。滅菌条件は機器側・製品側で確認",
  },
] as const;

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
        url: `${SITE_URL}${IMG("safety-glasses-single-double-hero.jpg")}`,
        width: 1600,
        height: 900,
        alt: "一眼型と二眼型の保護メガネを作業内容に合わせて選ぶイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("safety-glasses-single-double-hero.jpg")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("safety-glasses-single-double-hero.jpg")}`],
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

const faqs = [
  {
    q: "一眼型と二眼型では、どちらの保護性能が高いですか？",
    a: "形状だけでは決まりません。一眼型・二眼型のどちらにもさまざまなカバー範囲、規格、レンズ加工があります。作業の危険源、顔との隙間、フィット、必要規格から判断してください。",
  },
  {
    q: "グラインダー作業は一眼型を選べばいいですか？",
    a: "一眼型は候補になりますが、一眼型という理由だけでは十分ではありません。飛来方向、隙間、耐衝撃性、防傷、防曇、工具側のガードなどを確認し、必要に応じてゴーグルや顔面保護具も検討します。",
  },
  {
    q: "普通のメガネの上から保護メガネを着けられますか？",
    a: "オーバーグラスタイプなら併用を想定した製品があります。ただし、内側のメガネ寸法と干渉、曇り、耳への圧迫を試着で確認してください。",
  },
  {
    q: "JIS T 8147品ならどんな作業にも使えますか？",
    a: "いいえ。JIS T 8147は保護めがねの重要な規格ですが、薬液、高濃度の粉じん、溶接光、レーザー光などは作業ごとに追加条件があります。対象作業のリスク評価と適合する保護具を確認してください。",
  },
  {
    q: "曇らない保護メガネはありますか？",
    a: "防曇加工を施した製品は多くありますが、使用環境によって曇る可能性はあります。防曇性能に加えて、マスクとの干渉、通気、温湿度差、汚れも確認してください。",
  },
  {
    q: "透明レンズとグレーレンズはどちらがいいですか？",
    a: "屋内中心なら色の見え方を変えにくいクリアが選びやすく、屋外の眩しさが強い環境ではグレー等が候補になります。ただし照明条件や色識別の必要性で選んでください。色付きレンズを溶接・レーザー用の遮光保護具として代用してはいけません。",
  },
  {
    q: "保護メガネは何年使えますか？",
    a: "一律の年数では決められません。レンズの傷、透明度、フレームの変形、ネジやツルの状態、ゴム・バンドの劣化などを点検し、メーカーの取扱説明書や社内基準に従って交換します。",
  },
] as const;

const checkItems = [
  "飛来物、粉じん、薬液、光など「何から守るか」が明確",
  "正面だけでなく横・下からの侵入可能性を確認した",
  "一眼型・二眼型を保護性能の上下関係として扱っていない",
  "顔との隙間、鼻・耳への当たりを試着で確認した",
  "度付きメガネ利用者向けの選択肢を用意した",
  "防曇・防傷の必要性を作業環境から判断した",
  "ヘルメット、マスク、イヤーマフとの干渉を確認した",
  "必要なJIS・ANSI・EN等の規格を個別商品で確認した",
  "溶接・レーザーなど特殊光は専用品として別管理した",
  "レンズの傷、フレーム変形、ゴム・バンド劣化など交換基準を決めた",
  "新規採用品は少量試着してからまとめ買いする",
  "見学者用・常時着用者用・特殊作業用を必要に応じて分けた",
] as const;

const relatedArticles = [
  {
    href: "/articles/grinder-polishing-dust-control-mask-guide",
    label: "グラインダー・研磨作業の粉じん対策｜防じんマスクと集じんの選び方",
  },
  {
    href: "/articles/shujinki-bojin-mask-heiyou",
    label: "集塵機があれば防じんマスクはいらない？工場の粉じん対策と併用方法",
  },
  {
    href: "/articles/chemical-protective-clothing-selection",
    label: "化学防護服の選び方｜薬品・洗浄・消毒作業の保護具組み合わせ",
  },
  {
    href: "/articles/welding-shade-glass-number-selection",
    label: "溶接の遮光ガラスは何番？#7〜#13の選び方と電流別の目安",
  },
] as const;

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

function CtaPair({
  heading,
  showTrusco = false,
}: {
  heading?: string;
  showTrusco?: boolean;
}) {
  return (
    <aside className="my-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
      {heading ? (
        <p className="mb-4 text-xl font-extrabold text-gray-900">{heading}</p>
      ) : null}
      <div
        className={`grid gap-3 ${showTrusco ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
      >
        <ExtButton href={ctas.singleLens.url}>{ctas.singleLens.label} →</ExtButton>
        <ExtButton href={ctas.doubleLens.url}>
          {ctas.doubleLens.label} →
        </ExtButton>
        {showTrusco ? (
          <ExtButton href={ctas.trusco.url} tone="rose">
            {ctas.trusco.label} →
          </ExtButton>
        ) : null}
      </div>
    </aside>
  );
}

function ImagePending({ name }: { name: string }) {
  return (
    <div
      className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-center text-sm font-medium text-gray-800"
      role="img"
      aria-label={`${name}の画像準備中`}
    >
      {/* TODO: 商品画像未取得。Yahoo商品ページからメイン画像を保存してください */}
      画像準備中
    </div>
  );
}

function ProductCard({
  product,
  priority = false,
}: {
  product: FeaturedProduct;
  priority?: boolean;
}) {
  const hasImage = productImageExists(product.imageFile);
  const href = catalogUrl(product.imageFile);

  return (
    <article className="my-6 rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
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
              {product.model}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">用途：</dt>
              <dd className="inline">{product.use}</dd>
            </div>
            <div>
              <dt className="inline font-bold">向く現場：</dt>
              <dd className="inline">{product.fit}</dd>
            </div>
            <div>
              <dt className="inline font-bold">選ぶ理由：</dt>
              <dd className="inline">{product.reason}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <div className="mt-5">
            <ExtButton href={href}>商品ページを見る →</ExtButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function SpecialLinkList({
  imageFiles,
}: {
  imageFiles?: readonly string[];
}) {
  const items = imageFiles
    ? specialLinks.filter((item) => imageFiles.includes(item.imageFile))
    : specialLinks;

  return (
    <ul className="my-4 space-y-3">
      {items.map((item) => {
        const hasImage = productImageExists(item.imageFile);
        return (
          <li key={item.imageFile}>
            <ExtLink
              href={catalogUrl(item.imageFile)}
              className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 no-underline hover:border-gray-400"
            >
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                {hasImage ? (
                  <Image
                    src={PROD(item.imageFile)}
                    alt={`${item.label}の商品画像`}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
                    準備中
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-gray-900 group-hover:underline">
                  {item.label}
                </span>
                <span className="mt-1 block text-[14px] leading-6 text-gray-900">
                  {item.note}
                </span>
              </span>
            </ExtLink>
          </li>
        );
      })}
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className={cls.meta}>
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
              <li>{SHORT_TITLE}</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-950">
              安全保護具・眼の保護 / 2026年8月9日更新
            </div>
            <h1 className={cls.h1}>{ARTICLE_TITLE}</h1>
            <P>
              グラインダーで金属を削る。木材を切る。刈払機を使う。工場で機械を操作する。こうした作業では、ほんの小さな切粉や破片でも目に入れば作業を続けられなくなります。
            </P>
            <P>
              そこで保護メガネを探すと、「一眼型」「二眼型」「オーバーグラス」「ゴーグルタイプ」と似た製品が大量に並びます。見た目の好みだけで選ぶと、横から粉じんが入りやすい、普段のメガネと干渉する、汗ですぐ曇る、といった使いにくさが出ることがあります。
            </P>
            <P>
              一眼型と二眼型は、単純にどちらか一方が上位という関係ではありません。
              <Mark>
                まず何から目を守るのかを決め、その次にカバー範囲、顔へのフィット、度付きメガネとの併用、曇りやすさ、必要な規格を確認する
              </Mark>
              のが実務的な選び方です。
            </P>
            <Figure
              src={IMG("safety-glasses-single-double-hero.jpg")}
              alt="一眼型と二眼型の保護メガネを作業内容に合わせて選ぶイメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-400 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-amber-300">
              選び方を先にまとめると
            </p>
            <ul className="mt-4 space-y-3 text-[16px] leading-8 md:text-[17px]">
              <li>
                広い視野と目元全体のカバーを重視するなら、
                <strong className="text-amber-300">一眼型</strong>
                が候補になりやすい
              </li>
              <li>
                普通のメガネに近い掛け心地や左右独立したレンズを好むなら、
                <strong className="text-amber-300">二眼型</strong>
                が選びやすい
              </li>
              <li>
                度付きメガネの上から使うなら、
                <strong className="text-amber-300">オーバーグラスタイプ</strong>
                を確認する
              </li>
              <li>
                粉じんや飛沫が横・下から入りやすい作業では、形状だけでなくガスケットやゴーグルタイプまで検討する
              </li>
              <li>
                薬液飛沫、溶接光、レーザー光は一般的な透明保護メガネだけで判断せず、対象作業に適した専用品・規格を確認する
              </li>
            </ul>
          </section>

          <P>
            日本保安用品協会は、保護めがねを飛来物、粉じん、薬品、熱、有害な光などから眼を守る保護具として説明し、関連規格としてJIS T
            8147「保護めがね」とJIS T 8141「遮光保護具」を挙げています。
            <br />
            参考：
            <a
              href="https://jsaa.or.jp/%E4%BF%9D%E8%AD%B7%E3%82%81%E3%81%8C%E3%81%AD/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              日本保安用品協会「保護めがね」
            </a>
          </P>

          <H2 id="browse-first">まず商品を見比べたい場合</H2>
          <P>
            作業内容が決まっていて、一眼型と二眼型を実物から比較したい場合は、先に一覧を見る方が早いこともあります。記事後半では、どちらを選ぶかを作業別に整理します。
          </P>
          <CtaPair heading="一眼型・二眼型を一覧で比較する" />

          <H2 id="difference">
            一眼型と二眼型の違いは「レンズの枚数」だけではない
          </H2>
          <P>
            一眼型は、左右の目を一枚のレンズで覆う形状です。二眼型は、一般的な眼鏡のように左右のレンズが分かれています。
          </P>
          <P>
            この形状差から、視野、顔への沿い方、重量配分、デザイン、レンズ交換のしやすさなどに違いが出ます。ただし、
            <Mark>
              一眼型だから必ず防護性能が高い、二眼型だから必ず軽い、という決め方はできません。
            </Mark>
            同じ一眼型でも、軽量な直掛けタイプ、度付きメガネを覆うオーバーグラス、ガスケット付き、ヘッドバンドを使うゴーグル寄りの製品まであります。
          </P>
          <Figure
            src={IMG("single-vs-double-lens-safety-glasses-comparison.jpg")}
            alt="一眼型と二眼型の保護メガネの形状を比較するイメージ"
          />

          <H3>一眼型が向きやすい場面</H3>
          <P>
            一枚レンズで目元を広く覆う構造は、正面だけでなく周辺視野を確保しやすい製品が多く、軽作業から研磨・切削まで幅広いラインアップがあります。
          </P>
          <P>
            たとえばTRUSCOのSS9337Eは、一眼型の超軽量フィットタイプです。オレンジブックではJIS T
            8147規格品、18g、防曇・防傷加工のポリカーボネートレンズとされています。
          </P>
          <ProductCard product={featured.SS9337E} priority />
          <P>
            一方、同じ一眼型でも、目元の隙間を減らしたい場合はガスケット付きやゴーグル寄りの形状を見ます。FGAGはアジア人の顔へのフィットを意識したガスケット付きシリーズで、粉じんが気になる作業の候補になります。
          </P>
          <ProductCard product={featured.FGAG} />

          <H3>二眼型が向きやすい場面</H3>
          <P>
            二眼型は左右のレンズが独立し、普段の眼鏡に近い外観の製品が多いタイプです。フレーム形状、ツルの長さ・角度、鼻パッドなどを調整できるモデルもあり、フィット感を細かく合わせたい場合に候補になります。
          </P>
          <P>
            TRUSCO
            TSG-9160BKは、二眼型のフィットタイプです。オレンジブックでは28g、クリアレンズ、防曇・防傷加工、ツル・角度調整、ノーズパッド付きとされています。
          </P>
          <ProductCard product={featured["TSG-9160BK"]} />

          <H3>一眼型・二眼型の比較早見表</H3>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[760px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>比較ポイント</th>
                  <th className={cls.th}>一眼型</th>
                  <th className={cls.th}>二眼型</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "基本形状",
                    "左右を一枚のレンズで覆う",
                    "左右のレンズが分かれる",
                  ],
                  [
                    "視野",
                    "広い視野を取りやすい製品が多い",
                    "普通の眼鏡に近い感覚で使いやすい",
                  ],
                  [
                    "顔への沿い方",
                    "湾曲したレンズや大型レンズで覆う製品が多い",
                    "フレーム・ツル・鼻パッドで合わせる製品が多い",
                  ],
                  [
                    "度付きメガネ併用",
                    "オーバーグラスタイプが豊富",
                    "製品ごとに併用可否を確認",
                  ],
                  [
                    "粉じん対策",
                    "ガスケット・ゴーグル型まで選択肢が広い",
                    "ガスケット付き・ゴーグル兼用型ならカバー性を高めやすい",
                  ],
                  [
                    "長時間装着",
                    "軽量モデルを選ぶと負担を抑えやすい",
                    "フィット調整できるモデルが選びやすい",
                  ],
                  [
                    "法人での標準化",
                    "同一モデルのまとめ買いがしやすい",
                    "顔幅や装着感に合わせ複数候補を用意しやすい",
                  ],
                ].map(([point, single, double]) => (
                  <tr key={point}>
                    <td className={cls.td}>
                      <strong>{point}</strong>
                    </td>
                    <td className={cls.td}>{single}</td>
                    <td className={cls.td}>{double}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            ここで大切なのは、形状を決めてから用途を当てはめるのではなく、
            <Mark>危険源を確認してから必要な形状へ絞る</Mark>
            ことです。
          </P>

          <H2 id="five-checks">保護メガネは「5つの確認」で選ぶと迷いにくい</H2>
          <P>
            現場で選定するときは、一眼型か二眼型かを最初の質問にしない方がうまくいきます。次の5点を順番に確認すると、必要な仕様が見えやすくなります。
          </P>
          <Figure
            src={IMG("grinding-flying-particles-eye-protection.jpg")}
            alt="研磨やグラインダー作業で飛来物から目を守る保護メガネのイメージ"
          />

          <H3>1. 何が、どの方向から飛んでくるか</H3>
          <P>
            切削片、研磨粉、木くず、砂、草、小石など、目に入るものによって飛び方が違います。
          </P>
          <P>
            正面から比較的大きな飛来物が来る作業と、細かな粉じんが横や下から回り込む作業では、同じ保護メガネでも必要なカバー性が変わります。グラインダーや研磨作業では、保護メガネだけでなく機械のガード、集じん、作業姿勢、周囲の立入管理なども含めて対策します。
          </P>

          <H3>2. 顔との隙間が大きくないか</H3>
          <P>
            保護メガネは掛けていれば終わりではありません。鼻、頬、こめかみとの隙間が大きいと、横方向の飛来物や浮遊粉じんが入りやすくなります。
          </P>
          <P>
            山本光学も、顔には個人差があるため、自分の顔に合うものを選び、鼻と両耳の三点で均等に支えることを選択ポイントとして案内しています。
            <br />
            参考：
            <a
              href="https://yk-yamamoto.co.jp/category/safetyglasses/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              山本光学「保護めがね」
            </a>
          </P>
          <P>
            現場で複数人へ支給するなら、「フリーサイズを一種類配って終わり」ではなく、小顔向け、調整幅が広いタイプ、ガスケット付きなどを少数ずつ試着し、ズレや隙間を確認したうえで標準品を決める方が失敗を減らせます。
          </P>

          <H3>3. 度付きメガネを使う人がいるか</H3>
          <Figure
            src={IMG("prescription-glasses-over-safety-glasses.jpg")}
            alt="度付きメガネの上からオーバーグラス型保護メガネを着用するイメージ"
          />
          <P>
            普段から視力矯正用メガネを使う人に、普通の保護メガネを無理に重ねると、ツル同士が干渉したり、圧迫されたり、保護メガネが浮いたりします。その場合は
            <Mark>オーバーグラスタイプ</Mark>
            を選びます。
          </P>
          <P>
            TRUSCO
            TOSG-727は、オレンジブックでメガネ併用可能とされ、レンズ上下のクッションゴムで顔にフィットしやすい構造です。切削、刈払い、木工、研磨などが用途として挙げられています。
          </P>
          <ProductCard product={featured["TOSG-727"]} />
          <P>
            さらにカバー性を求める場合は、VS101のようなゴーグルタイプも候補です。VS101はJIS T
            8147規格品で、防曇・防傷加工、顔あたりソフトの仕様が掲載されています。
          </P>
          <ProductCard product={featured.VS101} />

          <H3>4. 曇りと傷で「外したくなる」状態にならないか</H3>
          <Figure
            src={IMG("safety-glasses-fogging-worksite.jpg")}
            alt="マスク併用や高湿度環境で保護メガネの曇りを確認するイメージ"
          />
          <P>
            保護メガネは、実際に着用し続けられて初めて意味があります。夏の工場、マスク併用、湿度の高い現場、屋外と空調室を行き来する作業では曇りが起こりやすくなります。頻繁に曇る製品では、作業者がずらしたり外したりする原因になりかねません。
          </P>
          <P>
            防曇加工の有無だけでなく、顔への密着度、通気、マスクとの干渉、作業環境を一緒に見ます。また、研磨粉が頻繁に当たる現場では、傷による視認性低下も確認します。
          </P>
          <P>
            TRUSCOのライトフィット二眼型TSG-8903BKは、オレンジブックでEN166のオプション規格「K」「N」をクリアしたコーティングを特徴としており、防曇性能の持続を訴求しています。一方で、メーカー注意として溶接作業には使用しない旨も明記されています。
          </P>
          <ProductCard product={featured["TSG-8903BK"]} />

          <H3>5. 一般作業ではなく「特殊な危険」がないか</H3>
          <P>
            透明または色付きの保護メガネだからといって、すべての作業に使えるわけではありません。商品群には、レーザー用、ガス溶接用の遮光グラス、オートクレーブ対応品なども含まれます。これらは一般的な一眼型・二眼型の比較から切り離して考えるべき製品です。
          </P>
          <SpecialLinkList
            imageFiles={[
              "162792.jpg",
              "225187.jpg",
              "222177.jpg",
              "225640.jpg",
            ]}
          />
          <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
            <p className="mb-2 text-sm font-bold text-gray-900">
              ⚠ 特殊光は専用品で
            </p>
            <p className={cls.bodySm}>
              <strong>
                レーザー、溶接・溶断、有害光線では、レンズ色だけで選ばないでください。
              </strong>
              対象となる波長や作業条件、必要な遮光度、設備側の安全対策を確認し、適合する専用保護具を選定します。
            </p>
          </div>

          <H2 id="by-work">作業別｜一眼型と二眼型のどちらから検討するか</H2>

          <H3>グラインダー・研磨・切削</H3>
          <P>
            金属加工では切粉や砥粒が飛来します。正面からの飛来だけでなく、作業姿勢や工具角度によって横・下方向へ回り込むことがあります。
          </P>
          <P>
            まず機械側のガードや集じん等を確認し、そのうえで顔への隙間が少ない保護メガネを選びます。目元全体を広く覆いたいなら一眼型、細かくフィット調整したいなら二眼型が候補ですが、粉じんが多い場合はガスケット付きやゴーグルタイプまで検討します。
          </P>
          <P>
            この用途では「一眼か二眼か」より、
            <Mark>隙間・レンズの耐衝撃性・防傷・防曇</Mark>
            の方が選定に効く場合があります。粉じんの呼吸保護については、
            <Link
              href="/articles/grinder-polishing-dust-control-mask-guide"
              className="font-bold underline underline-offset-4"
            >
              グラインダー・研磨作業の粉じん対策
            </Link>
            もあわせて確認してください。
          </P>

          <H3>木工・製材・穴あけ</H3>
          <P>
            木くずや切粉が正面や斜めから飛んでくるため、目元のカバー範囲を確認します。大型一眼レンズは視野を取りやすく、作業内容を把握しやすい利点があります。ただし長時間の組立や軽作業まで同じメガネを使う場合は、二眼型の軽量・フィットタイプも使いやすい選択肢です。
          </P>

          <H3>草刈り・刈払い</H3>
          <P>
            小石、草片、砂が予測しにくい方向から飛ぶ作業です。保護メガネだけでなく、飛散防護カバーや顔面保護具など、作業条件に応じた対策を組み合わせます。度付きメガネ使用者には、TOSG-727のようなオーバーグラスを候補にすると、通常メガネを無理に外さずに済みます。
          </P>

          <H3>工場内の一般作業・見学者用</H3>
          <P>
            機械加工エリアへ立ち入る人の標準保護具として支給する場合は、軽量性、フィット調整、交換性、まとめ買い単位を重視します。常時使用者と見学者・来客用で同じ仕様にする必要はありません。使用頻度とリスクが違うなら、支給区分を分けます。
          </P>

          <H3>薬品・洗浄液を扱う作業</H3>
          <Figure
            src={IMG("chemical-splash-eye-protection-goggles.jpg")}
            alt="薬液飛沫がある作業で保護ゴーグルを使用するイメージ"
          />
          <P>
            薬液飛沫では、一般的なセーフティグラスの隙間から液体が入る可能性を考えます。ゴーグルなど、作業に応じた保護眼鏡を選ぶ必要があります。
          </P>
          <P>
            厚生労働省の「職場のあんぜんサイト」は、皮膚等障害化学物質等を製造・取り扱う業務では、安衛則第594条の2に基づき、保護眼鏡など適切な保護具を使用させることを規定しています。化学物質を扱う場合は、SDSとリスクアセスメント、最新の「皮膚障害等防止用保護具の選定マニュアル」も確認してください。体幹部の防護については
            <Link
              href="/articles/chemical-protective-clothing-selection"
              className="font-bold underline underline-offset-4"
            >
              化学防護服の選び方
            </Link>
            も参照できます。
            <br />
            参考：
            <a
              href="https://anzeninfo.mhlw.go.jp/yougo/yougo108_1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              厚生労働省「皮膚等障害化学物質」
            </a>
          </P>

          <H3>研究・衛生管理で滅菌が必要な作業</H3>
          <P>
            一般作業用と違い、使用後にオートクレーブ処理を前提とする現場では、対応品を選ぶ必要があります。一眼型オートクレーブタイプのTSG-440-ACと、小型のTSG-340-AC-Sがあります。
          </P>
          <SpecialLinkList imageFiles={["162790.jpg", "162789.jpg"]} />
          <P>
            滅菌条件は機器側・製品側の取扱説明書を確認し、「オートクレーブ対応」という商品名だけで温度や時間を推測しないでください。
          </P>

          <H2 id="myth">「一眼型なら粉じんに強い」は誤解</H2>
          <div className="my-6 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-5 md:p-6">
            <p className="text-lg font-extrabold text-amber-950 md:text-xl">
              防じん性はレンズの枚数では決まりません
            </p>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              一眼型は目元を一枚で覆うため、見た目ではカバー範囲が大きく感じます。ただし、実際の防じん性は
              <Mark>
                レンズの枚数ではなく、顔との隙間やガスケット、フレーム形状、装着状態
              </Mark>
              に左右されます。
            </p>
          </div>
          <P>
            二眼型でも、TSG-814TMのようにゴーグルタイプとして販売されている製品があります。オレンジブックでは防じん・花粉症対策にも適した商品として案内されています。
          </P>
          <ProductCard product={featured["TSG-814TM"]} />
          <P>
            逆に、一眼型でも顔との隙間が大きければ、細かな粉じんが入り込むことがあります。
            <Mark>「一眼＝高防護」「二眼＝軽作業」という分類はしない</Mark>
            方が安全です。
          </P>

          <H2 id="jis">JIS T 8147は何を確認する規格か</H2>
          <P>
            保護めがねを法人で選定するときは、商品ページに記載された適合規格を確認します。日本保安用品協会によると、保護めがねの関連規格はJIS
            T
            8147で、種類、形式、性能、品質が規定されています。一般のファッション眼鏡やサングラスと、作業用の保護めがねを同じものとして扱わないことが大切です。
          </P>
          <P>
            一方で、商品すべてがJIS T
            8147適合とは限りません。ANSIやENなど別規格の製品もあります。
            <Mark>
              「保護メガネという商品名だからJIS品」とは判断せず、個別商品ごとに規格欄を確認してください。
            </Mark>
            また、遮光用途はJIS T
            8141など新たな観点が加わります。一般透明レンズと遮光保護具を混同しないようにします。溶接遮光の番号については
            <Link
              href="/articles/welding-shade-glass-number-selection"
              className="font-bold underline underline-offset-4"
            >
              溶接の遮光ガラスは何番？
            </Link>
            も参考になります。
          </P>

          <H2 id="lens-color">
            レンズ色はどう選ぶ？クリア・グレー・イエロー・シルバー
          </H2>
          <H3>クリアレンズ</H3>
          <P>
            屋内作業や色の見え方を変えたくない作業で基本になりやすいタイプです。工場の標準支給品としても比較しやすいでしょう。
          </P>
          <H3>グレーレンズ</H3>
          <P>
            屋外や明るい環境で眩しさを抑えたい場面に候補になります。ただし、暗い場所へ移動する作業では視認性も確認します。
          </P>
          <H3>イエロー・シルバー等</H3>
          <P>
            コントラストや眩しさ対策を意図した製品があります。レンズ色だけで「どの作業にも見やすい」と決めず、照明環境、屋内外の移動、色識別の必要性を確認します。
          </P>
          <H3>偏光レンズ</H3>
          <P>
            水面や照り返しなどの反射光対策を目的に使われる偏光タイプもあります。UVEX
            ポーラビジョン9231などが該当します。
          </P>
          <div className="my-4">
            <ExtButton href={catalogUrl("171840.jpg")}>
              UVEX ポーラビジョン9231の商品ページを見る →
            </ExtButton>
          </div>
          <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
            <p className="mb-2 text-sm font-bold text-gray-900">
              ⚠ 色付きレンズ≠遮光保護具
            </p>
            <p className={cls.bodySm}>
              <strong>
                偏光・グレー・ミラー等の色付きレンズを、溶接やレーザーなど有害光線用の遮光保護具として代用しないでください。
              </strong>
            </p>
          </div>

          <H2 id="corporate">
            法人で支給するときは「全員同じ一種類」にしない
          </H2>
          <Figure
            src={IMG("corporate-safety-glasses-procurement-standardization.jpg")}
            alt="法人担当者が複数種類の保護メガネを試着比較して標準化するイメージ"
          />
          <P>
            保護メガネをまとめ買いすると、管理は楽になります。しかし、全員へ同じモデルを配ることが必ずしも最適とは限りません。顔幅、鼻の高さ、度付きメガネの有無、作業内容、マスク・ヘルメットとの併用が違うためです。
          </P>

          <H3>標準化するなら3区分が扱いやすい</H3>
          <P>
            法人購買では、次のような支給区分を作ると管理しやすくなります。
          </P>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[720px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>支給区分</th>
                  <th className={cls.th}>想定</th>
                  <th className={cls.th}>候補</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={cls.td}>
                    <strong>標準</strong>
                  </td>
                  <td className={cls.td}>一般作業・常時着用</td>
                  <td className={cls.td}>軽量一眼型、フィット二眼型</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>オーバーグラス</strong>
                  </td>
                  <td className={cls.td}>度付きメガネ使用者</td>
                  <td className={cls.td}>TOSG-727、VS101等</td>
                </tr>
                <tr>
                  <td className={cls.td}>
                    <strong>高カバー・特殊</strong>
                  </td>
                  <td className={cls.td}>粉じん、飛沫、特殊光、滅菌等</td>
                  <td className={cls.td}>ガスケット・ゴーグル・専用品</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            この3区分なら、在庫品種をむやみに増やさず、合わない人へ無理に同じものを使わせる状況も減らせます。
          </P>

          <H3>まとめ買い前に試着用を用意する</H3>
          <P>
            いきなり大量購入するより、候補を数種類試し、以下を確認してから標準化する方が合理的です。
          </P>
          <ul className={cls.list}>
            <li>下を向いたときにズレないか</li>
            <li>こめかみや耳が痛くならないか</li>
            <li>頬との隙間が大きすぎないか</li>
            <li>マスクをすると曇りやすくないか</li>
            <li>ヘルメット、イヤーマフ等と干渉しないか</li>
            <li>度付きメガネ使用者が無理なく装着できるか</li>
            <li>30分〜1時間着用して圧迫感が強くないか</li>
          </ul>

          <H2 id="failures">よくある失敗</H2>
          <H3>失敗1：デザインだけで一眼・二眼を決める</H3>
          <P>
            見た目がスポーティー、普通の眼鏡に近い、といった好みは着用継続には大切です。しかし、危険源より先にデザインを決めるとカバー範囲が足りないことがあります。
          </P>
          <H3>失敗2：保護メガネならどれでもグラインダーに使えると思う</H3>
          <P>
            製品ごとに適合規格、レンズ材質、カバー範囲が違います。さらにグラインダー作業では、工具側のガード、作業姿勢、必要に応じた顔面保護具なども検討します。
          </P>
          <H3>失敗3：度付きメガネの上に無理やり重ねる</H3>
          <P>
            浮き、ズレ、圧迫、曇りの原因になります。オーバーグラスのサイズを確認してください。
          </P>
          <H3>失敗4：防曇加工なら絶対に曇らないと思う</H3>
          <P>
            防曇性能が高い製品でも、湿度、温度差、マスクから上がる呼気、汚れなどの影響を受けます。環境側の条件も見直します。
          </P>
          <H3>失敗5：色付きレンズなら溶接光にも使えると思う</H3>
          <P>
            一般的なグレーレンズや偏光レンズと、遮光保護具は別物です。溶接・溶断・レーザーでは専用品を使用します。
          </P>
          <H3>失敗6：傷だらけでも使い続ける</H3>
          <P>
            細かな傷が増えると視認性が落ち、作業ミスや着用ストレスにつながります。定期点検と交換基準を決めます。
          </P>
          <H3>失敗7：規格を商品カテゴリ単位で決めつける</H3>
          <P>
            同じ一眼型の中にもJIS品、ANSI/EN適合品、特殊用途品などがあります。個別の商品仕様を確認します。
          </P>

          <H2 id="checklist">購入前チェックリスト</H2>
          <P>法人で選定する場合は、注文前に次を確認してください。</P>
          <ul className="my-4 space-y-2">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-amber-700 bg-white text-xs font-bold text-amber-800"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="catalog">一眼型・二眼型を一覧から比較する</H2>
          <P>
            選定条件が見えてきたら、商品一覧から「軽量」「オーバーグラス」「防曇」「レンズ色」「フィット」などを比較すると選びやすくなります。
          </P>
          <H3>一眼型から探す</H3>
          <P>
            広い一枚レンズ、超軽量、オーバーグラス、ガスケット、オートクレーブ対応、遮光・レーザー用など、用途の幅が広いカテゴリです。
          </P>
          <H3>二眼型から探す</H3>
          <P>
            一般眼鏡に近い形状、フィット調整、ライトフィット、ゴーグル兼用、偏光、カラー違いなどから比較できます。
          </P>
          <H3>TRUSCOの保護具・作業用品をまとめて確認する</H3>
          <P>
            保護メガネ以外の保護具や作業用品もまとめて見直したい場合はこちらです。
          </P>
          <CtaPair heading="用途が決まったら一覧で比較する" showTrusco />

          <H2 id="faq">FAQ</H2>
          <div className="my-6 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                  {faq.q}
                </summary>
                <p className="mt-3 text-[16px] leading-8 text-gray-900">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜一眼か二眼かより、「危険源→隙間→フィット」で決める
          </H2>
          <P>
            保護メガネは、一眼型と二眼型の見た目だけで選ぶと迷います。先に確認したいのは、
            <Mark>
              何が飛んでくるのか、どこから入るのか、顔に合うか、度付きメガネを使うか、曇りや特殊光への対応が必要か
            </Mark>
            です。
          </P>
          <P>
            広い一枚レンズの一眼型が合う現場もあれば、調整しやすい二眼型が長時間作業に合う現場もあります。粉じんが多ければガスケットやゴーグルへ、度付きメガネ利用者ならオーバーグラスへ、溶接やレーザーなら専用品へと分けて考えます。
          </P>
          <P>
            法人でまとめて購入する場合も、一種類へ統一することより、標準・オーバーグラス・高カバー／特殊用途の3区分程度に整理した方が、現場で使われ続ける保護具になりやすいでしょう。
          </P>

          <section className="my-10 rounded-2xl bg-slate-950 p-6 text-white md:p-8">
            <h3 className="text-2xl font-black tracking-wide md:text-3xl">
              用途が決まったら一覧で比較
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-slate-100">
              軽量、オーバーグラス、防曇、レンズ色、フィットなどを商品一覧から比較できます。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <ExtButton href={ctas.singleLens.url}>
                {ctas.singleLens.label} →
              </ExtButton>
              <ExtButton href={ctas.doubleLens.url}>
                {ctas.doubleLens.label} →
              </ExtButton>
              <ExtButton href={ctas.trusco.url} tone="rose">
                {ctas.trusco.label} →
              </ExtButton>
            </div>
          </section>

          <H2 id="references">参考にした一次情報・公式情報</H2>
          <ul className={cls.list}>
            <li>
              <a
                href="https://jsaa.or.jp/%E4%BF%9D%E8%AD%B7%E3%82%81%E3%81%8C%E3%81%AD/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4"
              >
                日本保安用品協会「保護めがね」
              </a>
            </li>
            <li>
              <a
                href="https://www.jisha.or.jp/order2023/hogogu/movie_02.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4"
              >
                中央労働災害防止協会「安全衛生保護具の基礎知識 - 保護めがね」
              </a>
            </li>
            <li>
              <a
                href="https://anzeninfo.mhlw.go.jp/yougo/yougo108_1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4"
              >
                厚生労働省「皮膚等障害化学物質」
              </a>
            </li>
            <li>
              <a
                href="https://www.mhlw.go.jp/content/11300000/001670143.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4"
              >
                厚生労働省「皮膚障害等防止用保護具の選定マニュアル」
              </a>
            </li>
            <li>
              <a
                href="https://yk-yamamoto.co.jp/category/safetyglasses/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4"
              >
                山本光学「保護めがね」
              </a>
            </li>
            <li>オレンジブック.Com（各TRUSCO製品の仕様確認）</li>
          </ul>

          <H2 id="related">関連記事</H2>
          <ul className="my-4 space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="text-[16px] font-bold text-gray-900 underline underline-offset-4"
                >
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
