import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";
import { InstagramEmbed } from "./instagram-embed";

const SLUG = "workwear-rainwear-water-repellent-restoration-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "レインウェア・作業着の撥水を復活させる方法｜生地用撥水スプレーの選び方【2026年】";
const H1 =
  "作業着・レインウェアの撥水を復活させるには？生地用撥水スプレーの選び方と長持ちさせるコツ【2026年版】";
const SHORT_TITLE = "作業着・レインウェアの撥水復活";
const DESCRIPTION =
  "レインウェアや作業着の撥水が弱くなった時に、洗濯・熱処理・生地用撥水スプレーでどう復活させるかを解説。TU-100/TU-300 生地用超撥水剤 HAJIKU の違い、サイズ選び、繊維素材への使い方の考え方まで分かりやすく整理します。";
const PUBLISHED = "2026-08-21";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const EXT_REL = "nofollow sponsored noopener";

const [tu100, tu300] = productData.mainProducts;
const ctas = productData.ctas;

const steps = [
  {
    title: "STEP1｜汚れを落とす",
    body: "泥や油分、皮脂、ほこりが残ったままだと、撥水剤を重ねても効果が出にくくなることがあります。まずは対象物の洗濯表示やお手入れ方法を確認し、適切に汚れを落とします。作業着やレインウェアは、見た目以上に表面へ汚れが残っていることがあります。",
  },
  {
    title: "STEP2｜しっかり乾かす",
    body: "水分が残ったままでは、状態確認もしづらくなります。洗濯後や濡れた後は、まずしっかり乾かします。",
  },
  {
    title: "STEP3｜熱処理で戻るか確認する",
    body: "モンベルのサポート情報でも、レインウェアのはっ水処理では、洗濯後にはっ水剤を使用し、その後に乾燥機やドライヤー、アイロンなどで熱処理を行う流れが案内されています。つまり、熱で撥水機能が整うケースがあるということです。「まだ着られるが、水をはじかない」「洗ったのに戻らない」と感じる時は、熱処理で様子を見たうえで、それでも弱ければ生地用撥水剤を検討する流れが自然です。",
  },
] as const;

const suitableItems = [
  "作業着",
  "レインウェア",
  "レインコート",
  "テントなどの布地",
  "傘の布部分",
  "布製バッグや布製品",
] as const;

const cautionItems = [
  "革",
  "特殊コーティング素材",
  "ビニール系素材",
  "樹脂面や金属面",
] as const;

const mistakes = [
  {
    title: "汚れたまま上からスプレーする",
    body: "これでは思ったほど効果を感じにくいことがあります。",
  },
  {
    title: "撥水と防水を同じ意味で考える",
    body: "「水がしみる＝全部買い替え」とせず、まずは表面の撥水低下かどうかを見るほうが合理的です。",
  },
  {
    title: "サイズ選びを間違える",
    body: "1本だけ試したいのに大容量を買う、逆に社内備品へ使いたいのに小容量で足りなくなる、といったミスマッチは避けたいところです。",
  },
  {
    title: "何にでも使えると思い込む",
    body: "今回の商品の用途は繊維素材向けです。対象素材を確認せずに使う前提にはしないほうが安全です。",
  },
] as const;

const checkItems = [
  "作業着・レインウェア・テントなど対象物を整理した",
  "繊維素材向けか確認した",
  "個人配布か共用備品かを決めた",
  "使用量に応じて100ml/300mlを選んだ",
  "撥水メンテの頻度を決めた",
  "試験運用する対象を決めた",
  "使い方の注意事項を社内共有した",
] as const;

const faqs = [
  {
    q: "洗濯だけで撥水は戻りますか？",
    a: "戻るケースもあります。まずは汚れを落とし、乾燥・熱処理まで含めて状態を確認するのが基本です。それでも弱い時に、生地用撥水剤での再加工を検討します。",
  },
  {
    q: "撥水と防水の違いは何ですか？",
    a: "撥水は生地表面で水をはじく機能、防水は水を通しにくくする機能です。今回の HAJIKU は、繊維素材の撥水用として案内されています。",
  },
  {
    q: "TU-100とTU-300はどちらを選べばいいですか？",
    a: "少量で試したい、個人で使いたいなら TU-100。複数着や社内備品として継続利用したいなら TU-300 が選びやすいです。",
  },
  {
    q: "テントや傘にも使えますか？",
    a: "記事では、商品ページにある「繊維素材の撥水用」を前提に考えています。テント生地や傘の布部分のように、繊維素材であれば検討しやすい一方、素材構成は事前確認をおすすめします。",
  },
  {
    q: "どのくらい効果が続きますか？",
    a: "商品ページでは、約20回の洗濯でも撥水効果が持続する耐久性が記載されています。実際の持続感は、使用環境や洗濯頻度、摩擦の多さによって変わります。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/truck-bed-rain-protection-storage-sheet-guide",
    label: "トラック荷台の雨対策｜工具・資材を濡らさないアルミBOXとトラックシート",
  },
  {
    href: "/articles/workwear-heat-measures-procurement-guide",
    label: "暑さ対策の作業服は“服だけ”で選ばない。法人が失敗しない支給設計",
  },
  {
    href: "/articles/company-flood-stockpile-sandbag-guide",
    label: "会社・工場の水害対策で何を備蓄する？土のう・吸水土のうの選び方",
  },
] as const;

const tocItems = [
  { id: "key-points", label: "先に結論" },
  { id: "products", label: "TU-100 / TU-300" },
  { id: "why-weaken", label: "撥水が弱くなる原因" },
  { id: "three-steps", label: "まず試したい3ステップ" },
  { id: "repellent-vs-waterproof", label: "撥水と防水の違い" },
  { id: "hajiku", label: "HAJIKUとは" },
  { id: "comparison", label: "TU-100とTU-300の違い" },
  { id: "suitable", label: "向いている繊維素材" },
  { id: "instagram", label: "Instagram投稿" },
  { id: "checklist-before", label: "使う前の確認ポイント" },
  { id: "mistakes", label: "よくある失敗" },
  { id: "b2b", label: "法人向けの選び方" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
] as const;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("workwear-rainwear-water-repellent-hero.webp")}`,
        width: 1536,
        height: 1024,
        alt: "レインウェアに水滴が玉状にはじく撥水メンテナンスのイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("workwear-rainwear-water-repellent-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("workwear-rainwear-water-repellent-hero.webp")}`],
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
  dataCta,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dataCta?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={EXT_REL}
      data-cta={dataCta}
      className={className}
    >
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

function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={`${cls.table} min-w-[640px]`}>{children}</table>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function PrimaryCta({
  href,
  label,
  dataCta,
  fullWidth = false,
}: {
  href: string;
  label: string;
  dataCta: string;
  fullWidth?: boolean;
}) {
  return (
    <ExtLink
      href={href}
      dataCta={dataCta}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-orange-700 ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </ExtLink>
  );
}

function SecondaryCta({
  href,
  label,
  dataCta,
  fullWidth = false,
}: {
  href: string;
  label: string;
  dataCta: string;
  fullWidth?: boolean;
}) {
  return (
    <ExtLink
      href={href}
      dataCta={dataCta}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-5 py-3 text-center text-[15px] font-extrabold text-gray-900 transition hover:bg-gray-50 ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </ExtLink>
  );
}

function ProductCard({
  product,
  accent,
}: {
  product: (typeof productData.mainProducts)[number];
  accent: "orange" | "sky";
}) {
  const accentClass =
    accent === "orange"
      ? "border-orange-300 bg-orange-50"
      : "border-sky-300 bg-sky-50";
  const badgeClass =
    accent === "orange" ? "text-orange-800" : "text-sky-800";

  return (
    <article
      className={`overflow-hidden rounded-2xl border-2 ${accentClass} shadow-sm`}
    >
      <div className="relative mx-auto aspect-square max-w-[280px] bg-white">
        <Image
          src={product.image}
          alt={`${product.name}の商品画像`}
          fill
          sizes="280px"
          className="object-contain p-4"
          priority
        />
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <p className={`text-sm font-bold ${badgeClass}`}>{product.badge}</p>
        <h3 className="text-2xl font-black leading-snug text-gray-900 sm:text-3xl">
          {product.short}
        </h3>
        <ul className={`!mt-2 ${cls.list}`}>
          <li>容量：{product.specs.capacity}</li>
          <li>重量：{product.specs.weight}</li>
          <li>税込価格：{product.specs.priceTaxIn}</li>
          <li>向く人：{product.bestFor}</li>
        </ul>
        <P>
          フッ素不使用・シリコン樹脂主成分。繊維素材の撥水用として、
          <Mark>約20回の洗濯でも撥水効果が持続</Mark>
          と商品ページで訴求されています。
        </P>
        <PrimaryCta
          href={product.url}
          label={product.ctaLabel}
          dataCta={`top-${product.id}`}
          fullWidth
        />
      </div>
    </article>
  );
}

function ProductTableCell({
  product,
}: {
  product: (typeof productData.mainProducts)[number];
}) {
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4 group-hover:text-gray-600">
          {product.short}
        </span>
        <span className="block text-xs font-bold text-gray-800">
          品番：{product.sku}
        </span>
      </span>
    </ExtLink>
  );
}

function FinalCtaGrid() {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>TU-100 100ml</p>
        <p className={`mt-2 ${cls.bodySm}`}>お試し・個人・少量用途向け</p>
        <div className="mt-4">
          <PrimaryCta
            href={tu100.url}
            label="TU-100を見る"
            dataCta="bottom-tu-100"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className={cls.ctaH3}>TU-300 300ml</p>
        <p className={`mt-2 ${cls.bodySm}`}>複数着・備品管理・継続運用向け</p>
        <div className="mt-4">
          <PrimaryCta
            href={tu300.url}
            label="TU-300を見る"
            dataCta="bottom-tu-300"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
        <p className={cls.ctaH3}>撥水スプレー一覧</p>
        <p className={`mt-2 ${cls.bodySm}`}>関連商品をまとめて比較</p>
        <div className="mt-4">
          <SecondaryCta
            href={ctas.sprayList}
            label="撥水スプレー一覧を見る"
            dataCta="bottom-spray-list"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1 lg:col-start-1">
        <p className={cls.ctaH3}>撥水加工アイテム</p>
        <p className={`mt-2 ${cls.bodySm}`}>楽天CRECOTEショップで確認</p>
        <div className="mt-4">
          <SecondaryCta
            href={ctas.rakutenWaterRepellent}
            label="撥水加工アイテム一覧を見る"
            dataCta="bottom-rakuten"
            fullWidth
          />
        </div>
      </aside>
      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
        <p className={cls.ctaH3}>トラスコ中山商品</p>
        <p className={`mt-2 ${cls.bodySm}`}>TRUSCO掲載品をまとめて見る</p>
        <div className="mt-4">
          <SecondaryCta
            href={ctas.trusco}
            label="トラスコ中山商品一覧を見る"
            dataCta="bottom-trusco"
            fullWidth
          />
        </div>
      </aside>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 pb-16 pt-10 sm:px-6">
        <JsonLd data={articleSchema} />
        <JsonLd data={breadcrumbSchema} />

        <nav aria-label="パンくず" className={`mb-5 ${cls.meta}`}>
          <Link href="/" className="underline underline-offset-4">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="underline underline-offset-4">
            選び方ガイド
          </Link>
          <span className="mx-2">/</span>
          <span>{SHORT_TITLE}</span>
        </nav>

        <p className={`${cls.meta} font-bold`}>雨対策・衣類メンテナンス</p>
        <h1 className={cls.h1}>{H1}</h1>
        <div className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
          <span>執筆：作業用品ナビ編集部</span>
          <time dateTime={PUBLISHED}>公開・更新：2026年8月21日</time>
        </div>

        <Figure
          src={IMG("workwear-rainwear-water-repellent-hero.webp")}
          alt="レインウェアに水滴が玉状にはじく撥水メンテナンスのイメージ"
          priority
        />

        <nav
          aria-label="記事内目次"
          className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5"
        >
          <p className="font-bold text-gray-900">この記事の目次</p>
          <ul className="mt-3 grid gap-2 text-sm leading-7 sm:grid-cols-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <P>
          レインウェアや作業着を使っていると、最初はしっかり雨をはじいていたのに、いつの間にか水が生地にしみるように感じることがあります。
        </P>
        <P>
          雨の日の現場作業、屋外イベント、通勤、アウトドア、倉庫まわりの軽作業。こうした場面では「完全防水」でなくても、表面でしっかり水をはじく状態を保てるかどうかで、快適さがかなり変わります。
        </P>
        <P>
          ただ、撥水が弱くなった時に、洗濯で戻るのか、ドライヤーや熱処理で戻るのか、撥水スプレーを使うべきなのか、そもそも撥水と防水は何が違うのかが分かりにくく、なんとなく対処して終わってしまうケースも少なくありません。
        </P>
        <P>
          そこでこの記事では、
          <Mark>作業着・レインウェア・布製品の撥水をどう復活させるか</Mark>
          を、まず基本から整理します。そのうえで、生地用超撥水剤
          <strong> HAJIKU </strong>
          の100ml・300mlの違い、どんな人に向いているかを前半から分かりやすく紹介します。
        </P>

        <section
          id="key-points"
          className="my-10 scroll-mt-24 rounded-2xl border-2 border-gray-900 bg-gray-50 p-6 sm:p-8"
        >
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
            先に結論
          </h2>
          <ul className={`mt-5 ${cls.list}`}>
            <li>
              撥水が弱くなったら、まず
              <strong>汚れを落とし、乾燥・熱処理で戻るか確認する</strong>。
            </li>
            <li>
              それでも弱い時は、
              <Mark>繊維素材向けの撥水剤</Mark>
              で再加工するのが分かりやすい。
            </li>
            <li>
              HAJIKU は、GREEN CROSS-select で販売されている
              <strong>フッ素不使用・シリコン樹脂主成分の生地用超撥水剤</strong>
              。
            </li>
            <li>
              商品ページでは、
              <Mark>約20回の洗濯でも撥水効果が持続する耐久性</Mark>
              を訴求している。
            </li>
            <li>
              <strong>100ml</strong>
              は試したい人や少量用途向け、
              <strong>300ml</strong>
              は複数着や社内備品のまとめ管理向け。
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryCta
              href={tu100.url}
              label="TU-100を見る"
              dataCta="key-tu-100"
            />
            <PrimaryCta
              href={tu300.url}
              label="TU-300を見る"
              dataCta="key-tu-300"
            />
            <SecondaryCta
              href={ctas.sprayList}
              label="撥水スプレー一覧を見る"
              dataCta="key-spray-list"
            />
          </div>
        </section>

        <H2 id="products">まずはサイズを見たい方へ｜TU-100 / TU-300</H2>
        <P>
          繊維素材向けの撥水メンテを始めたいなら、HAJIKU の2サイズを先に確認しておくと選びやすくなります。
        </P>
        <div
          id="product-cards"
          className="my-8 grid scroll-mt-24 gap-5 md:grid-cols-2"
        >
          <ProductCard product={tu100} accent="orange" />
          <ProductCard product={tu300} accent="sky" />
        </div>

        <H2 id="why-weaken">レインウェアや作業着の撥水はなぜ弱くなる？</H2>
        <Figure
          src={IMG("workwear-water-repellent-maintenance.webp")}
          alt="作業着の表面状態を確認しながら撥水メンテナンスを行うイメージ"
        />
        <P>
          撥水が落ちる理由は、単に「古くなった」だけではありません。
        </P>

        <H3>1. 表面の汚れで撥水しにくくなる</H3>
        <P>
          作業着やレインウェアには、ほこり、皮脂、泥、排気汚れなどが付着します。表面に汚れが残ると、本来の撥水性能が発揮されにくくなります。
        </P>

        <H3>2. 洗濯や摩擦で撥水層が弱くなる</H3>
        <P>
          着脱や洗濯、こすれの繰り返しで、表面の撥水機能は少しずつ落ちていきます。特に、ひじ・袖口・肩まわり・太ももなど、摩擦が多い部分は先に弱くなりやすいです。
        </P>

        <H3>3. 「防水」と「撥水」を混同してしまう</H3>
        <P>
          生地の表面で水滴をころがす働きが弱くなると、「防水が切れた」と感じやすくなります。しかし実際には、防水膜の問題ではなく、
          <Mark>表面の撥水機能が弱くなっているだけ</Mark>
          のこともあります。この違いを整理しておくと、むやみに買い替える前に、メンテナンスで立て直せるか判断しやすくなります。
        </P>

        <H2 id="three-steps">まず試したい3ステップ</H2>
        <P>
          撥水が弱くなった時、いきなりスプレーを大量に使う前に、次の順で考えると失敗しにくくなります。
        </P>
        <Figure
          src={IMG("rainwear-after-wash-dry.webp")}
          alt="洗濯後に乾燥したレインウェアを点検するイメージ"
        />
        <div className="my-8 space-y-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm sm:p-6"
            >
              <p className="text-sm font-bold text-gray-800">
                優先順位 {index + 1}
              </p>
              <h3 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
                {step.title}
              </h3>
              <p className={`mt-3 ${cls.bodySm}`}>{step.body}</p>
            </article>
          ))}
        </div>
        <Figure
          src={IMG("rainwear-heat-treatment.webp")}
          alt="ドライヤーで撥水メンテナンスを補助するイメージ"
        />

        <H2 id="repellent-vs-waterproof">撥水と防水の違い</H2>
        <P>ここは意外と誤解が多いポイントです。</P>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <aside className="rounded-2xl border-2 border-gray-900 bg-gray-50 p-5">
            <h3 className="text-2xl font-black text-gray-900">撥水</h3>
            <p className={`mt-3 ${cls.bodySm}`}>
              生地の表面で水を玉状にして、はじきやすくする機能です。雨や水滴をつきにくくし、濡れにくくするイメージです。
            </p>
          </aside>
          <aside className="rounded-2xl border border-gray-300 bg-white p-5">
            <h3 className="text-2xl font-black text-gray-900">防水</h3>
            <p className={`mt-3 ${cls.bodySm}`}>
              水が内部にしみ込むのを防ぐ機能です。構造や素材、加工など、より強く水の侵入を防ぐ考え方です。
            </p>
          </aside>
        </div>
        <P>
          今回紹介する HAJIKU は、商品ページ上で
          <Mark>「繊維素材の撥水用」</Mark>
          と案内されている商品です。したがって、この記事でも
          <strong>撥水メンテナンス</strong>
          の文脈で扱います。
        </P>

        <H2 id="hajiku">生地用超撥水剤 HAJIKU とは？</H2>
        <P>
          HAJIKU は、GREEN CROSS-select で販売されている繊維素材向けの撥水剤です。
        </P>
        <ul className={cls.list}>
          <li>
            <strong>フッ素不使用</strong>
          </li>
          <li>
            <strong>シリコン樹脂を主成分</strong>
            とした撥水剤
          </li>
          <li>
            <Mark>約20回の洗濯でも撥水効果が持続</Mark>
            する耐久性を訴求
          </li>
          <li>
            ティッシュに塗布すると、水を吸収せず水玉になって転がり落ちる例を紹介
          </li>
          <li>
            用途は<strong>繊維素材の撥水用</strong>
          </li>
        </ul>
        <P>
          「まずは1本試したい」「現場で使う衣類・レインウェア・布製品の撥水を戻したい」というニーズに合わせやすい商品です。
        </P>
        <div className="my-6 flex flex-wrap gap-3">
          <PrimaryCta
            href={tu100.url}
            label="TU-100 商品ページへ"
            dataCta="mid-tu-100"
          />
          <PrimaryCta
            href={tu300.url}
            label="TU-300 商品ページへ"
            dataCta="mid-tu-300"
          />
        </div>

        <H2 id="comparison">TU-100とTU-300の違い</H2>
        <P>
          2商品は中身の考え方は近く、主な違いは容量と運用イメージです。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>商品</Th>
              <Th>容量</Th>
              <Th>重量</Th>
              <Th>税込価格</Th>
              <Th>向いている使い方</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <ProductTableCell product={tu100} />
              </Td>
              <Td>{tu100.specs.capacity}</Td>
              <Td>{tu100.specs.weight}</Td>
              <Td>
                <Mark>{tu100.specs.priceTaxIn}</Mark>
              </Td>
              <Td>まず試したい、個人で使いたい、少量の衣類や小物向け</Td>
            </tr>
            <tr>
              <Td>
                <ProductTableCell product={tu300} />
              </Td>
              <Td>{tu300.specs.capacity}</Td>
              <Td>{tu300.specs.weight}</Td>
              <Td>
                <Mark>{tu300.specs.priceTaxIn}</Mark>
              </Td>
              <Td>
                複数着に使いたい、レインウェアや備品をまとめて管理したい、社内ストック向け
              </Td>
            </tr>
          </tbody>
        </Table>

        <H3>100mlが向く人</H3>
        <ul className={cls.list}>
          <li>まず1本試したい</li>
          <li>使用頻度がそこまで高くない</li>
          <li>個人でレインウェアや作業着をメンテしたい</li>
          <li>置き場所や携帯性も意識したい</li>
        </ul>

        <H3>300mlが向く人</H3>
        <ul className={cls.list}>
          <li>複数着を定期的にメンテしたい</li>
          <li>社内で共用備品として置きたい</li>
          <li>イベント用品や布製備品など、対象物が複数ある</li>
          <li>単発ではなく継続運用を考えている</li>
        </ul>
        <P>
          税込価格ベースでは、100ml換算で見ると300mlのほうが割安です。そのため、
          <Mark>継続利用や複数人での利用なら300ml</Mark>
          のほうが選びやすいケースがあります。
        </P>

        <H2 id="suitable">どんなものに向いている？</H2>
        <Figure
          src={IMG("tent-fabric-water-repellent-care.webp")}
          alt="テントなどの布地の撥水性を見直すイメージ"
        />
        <P>
          記事内では、商品ページに明記されている
          <Mark>「繊維素材の撥水用」</Mark>
          を前提に考えます。
        </P>
        <Figure
          src={IMG("workwear-rainwear-selection.webp")}
          alt="複数の繊維素材アイテムに撥水メンテナンスを検討するイメージ"
        />
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <aside className="rounded-2xl border border-gray-300 bg-white p-5">
            <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
              向きやすい例
            </h3>
            <ul className={`mt-3 ${cls.list}`}>
              {suitableItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="rounded-2xl border border-gray-300 bg-gray-50 p-5">
            <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
              事前確認したい例
            </h3>
            <ul className={`mt-3 ${cls.list}`}>
              {cautionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
        <P>
          「何にでも使える」と広げるのではなく、
          <strong>まずは繊維素材かどうか</strong>
          を確認し、必要に応じて目立たない箇所で試す前提が安心です。
        </P>

        <H2 id="instagram">実際のイメージを見たい方へ</H2>
        <P>
          自社Instagramでも HAJIKU を紹介しています。使用イメージがあると、商品ページだけでは分かりにくい方にも伝わりやすくなります。
        </P>
        <InstagramEmbed permalink={productData.instagram.permalink} />

        <H2 id="checklist-before">使う前に確認したいポイント</H2>
        <H3>1. まず「撥水を戻したい対象」を決める</H3>
        <P>
          個人で1着のレインウェアをケアしたいのか、現場で使う複数の作業着をまとめて管理したいのかで、選ぶ容量が変わります。
        </P>
        <H3>2. 汚れたまま使わない</H3>
        <P>
          撥水機能は、土台となる表面状態の影響を受けます。汚れを落としてから考えるのが基本です。
        </P>
        <H3>3. 素材の方向性を確認する</H3>
        <P>
          HAJIKU は繊維素材向けです。布地に近い対象へ向いている一方、異素材が混在する場合は対象部分を確認したほうが安心です。
        </P>
        <H3>4. メンテの「頻度」を決める</H3>
        <P>
          撥水は一度ケアして終わりではありません。現場で頻繁に使うレインウェアなら、雨のシーズン前後、洗濯回数が増える時期、使用感が落ちた時など、
          <Mark>見直すタイミングを決めておく</Mark>
          と継続しやすくなります。
        </P>

        <H2 id="mistakes">よくある失敗</H2>
        <div className="my-6 space-y-4">
          {mistakes.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
                {item.title}
              </h3>
              <p className={`mt-2 ${cls.bodySm}`}>{item.body}</p>
            </article>
          ))}
        </div>

        <H2 id="b2b">法人向け｜備品として選ぶならどちら？</H2>
        <Figure
          src={IMG("company-rainwear-maintenance-stock.webp")}
          alt="法人がレインウェアや備品の撥水メンテナンスを管理するイメージ"
        />
        <P>
          法人やチームで扱う場合は、「性能」だけでなく、
          <Mark>運用しやすいか</Mark>
          が重要です。
        </P>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <aside className="rounded-2xl border border-orange-300 bg-orange-50 p-5">
            <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
              TU-100が向くケース
            </h3>
            <ul className={`mt-3 ${cls.list}`}>
              <li>試験導入したい</li>
              <li>特定の現場だけで使いたい</li>
              <li>少人数で管理する</li>
              <li>まず反応を見たい</li>
            </ul>
          </aside>
          <aside className="rounded-2xl border border-sky-300 bg-sky-50 p-5">
            <h3 className="text-xl font-black text-gray-900 sm:text-2xl">
              TU-300が向くケース
            </h3>
            <ul className={`mt-3 ${cls.list}`}>
              <li>レインウェアや作業着を複数人で使う</li>
              <li>テントや布製備品も含めてまとめて管理したい</li>
              <li>季節前に集中メンテしたい</li>
              <li>ストックとして持っておきたい</li>
            </ul>
          </aside>
        </div>
        <P>
          「誰が・何に・どれくらい使うか」が決まっていれば、容量選びで迷いにくくなります。
        </P>

        <div className="my-8 rounded-2xl border-2 border-gray-900 bg-white p-6 sm:p-8">
          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">
            法人向けチェックリスト
          </h3>
          <ul className="mt-5 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[17px] leading-8 text-gray-900"
              >
                <span
                  aria-hidden
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-900"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <H2 id="faq">よくある質問</H2>
        <div className="space-y-8">
          {faqs.map((item) => (
            <section key={item.q}>
              <h3 className={cls.faqQ}>{item.q}</h3>
              <P>{item.a}</P>
            </section>
          ))}
        </div>

        <H2 id="summary">
          まとめ｜「撥水が落ちた」悩みから選びやすい2サイズ
        </H2>
        <P>
          撥水が弱くなった時は、いきなり買い替えに進むのではなく、まずは汚れを落とし、乾燥・熱処理で戻るかを見るのが基本です。
        </P>
        <P>
          それでも十分でない時、
          <Mark>繊維素材向けの撥水剤</Mark>
          を使って再加工する選択肢があります。
        </P>
        <P>
          HAJIKU は、フッ素不使用、シリコン樹脂主成分、繊維素材向け、約20回の洗濯でも撥水効果が持続と訴求、という分かりやすい特長があり、レインウェアや作業着の撥水メンテを考える人に合わせやすい商品です。
        </P>
        <P>
          まず試すなら 100ml、継続利用や複数人運用なら 300ml。悩みに合わせて選びやすい2サイズです。
        </P>

        <section className="my-10 rounded-2xl bg-gray-900 p-7 text-white sm:p-8">
          <h2 className="text-3xl font-black sm:text-4xl">
            商品ページ・関連カテゴリはこちら
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-gray-100">
            TU-100 / TU-300 の確認から、撥水関連カテゴリまでまとめて探せます。
          </p>
          <FinalCtaGrid />
        </section>

        <section className="my-10 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="font-bold text-gray-900">関連記事</p>
          <ul className="mt-3 space-y-2 text-sm leading-7">
            {relatedArticles.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
