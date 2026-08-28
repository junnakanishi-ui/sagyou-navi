import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const slug = "factory-spot-heating-far-infrared-electric-heater-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/factory-spot-heating-far-infrared-hero.webp`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "工場のスポット暖房｜高天井・倉庫で使う遠赤外線電気ヒーターの選び方【2026年】";
const h1 =
  "工場・倉庫の暖房が効かないときは？高天井・大空間を「スポット暖房」する遠赤外線電気ヒーターの選び方【2026年版】";
const shortTitle = "工場のスポット暖房｜遠赤外線電気ヒーターの選び方";
const description =
  "工場・倉庫で暖房をつけても寒い原因と、作業者がいる場所だけを暖めるスポット暖房の考え方を解説。遠赤外線電気ヒーターの特徴、100V・単相200V・3相200V、床置き・天吊りの違いを法人向けに比較します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-28",
    modifiedTime: "2026-08-28",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "高天井の工場で作業者がいる場所だけを遠赤外線ヒーターで暖めるイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  url: string;
  image: string;
  power: string;
  consumption: string;
  coverage: string;
  bestFor: string[];
  notes: string[];
  category: string;
};

type CtaLink = { label: string; url: string; priority: string };

const products = productData.products as Product[];
const byId = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  string,
  Product
>;
const ctas = productData.ctas as CtaLink[];
const primaryCta = ctas.find((c) => c.priority === "primary")!;
const relatedCtas = ctas.filter((c) => c.priority === "related");

const SHORT_NAMES: Record<string, string> = {
  wps20s: "WPS-20s",
  wps30as: "WPS-30As",
  wps30a: "WPS-30A",
  wps30t: "WPS-30T",
  toyotomi: "TOYOTOMI EWH-CS100P(W)",
  panel: "遠赤外線電気パネルヒーター",
};

const selectAxes = [
  {
    no: "1",
    title: "人が止まる場所",
    body: "固定作業か、10m・20mと動く工程か。検査台・組立台・操作盤はスポット暖房と相性がよい。",
  },
  {
    no: "2",
    title: "暖めたい距離・幅",
    body: "WPS-20sは前方2m・左右各1.5m。WPS-30As/Aは前方3m・左右各2m。1人か複数人かで必要な機種が変わる。",
  },
  {
    no: "3",
    title: "100V / 単相200V / 3相200V",
    body: "「200V」だけ見ず、単相か3相かまで確認する。WPS-30Asは単相、WPS-30A/Tは3相200V。",
  },
  {
    no: "4",
    title: "床置き / 天吊り・壁掛け",
    body: "台車・ハンドリフター・フォークリフトの動線を塞がないか。床を空けたいならWPS-30Tを検討。",
  },
  {
    no: "5",
    title: "防爆・プラグ・配線・周囲温度",
    body: "WPSシリーズは防爆仕様ではなく、プラグなし。使用環境温度-10〜+20℃も購入前に確認。",
  },
];

const powerRows = [
  ["100V", "TOYOTOMI EWH-CS100P(W)", "休憩所・小規模スポット"],
  ["単相200V", "WPS-20s", "狭めの工場スポット"],
  ["単相200V", "WPS-30As", "広めの工場スポット"],
  ["3相200V", "WPS-30A", "3相設備がある工場"],
  ["3相200V", "WPS-30T", "天吊り・壁掛け"],
];

const compareRows: { id: string; install: string; caution: string }[] = [
  {
    id: "wps20s",
    install: "可搬・キャスター",
    caution: "防爆仕様ではない / プラグなし",
  },
  {
    id: "wps30as",
    install: "可搬・キャスター",
    caution: "防爆仕様ではない / プラグなし",
  },
  {
    id: "wps30a",
    install: "可搬・キャスター",
    caution: "防爆仕様ではない / プラグなし / 3相200V",
  },
  {
    id: "wps30t",
    install: "天吊り・壁掛け専用",
    caution: "防爆仕様ではない / プラグなし / 3相200V",
  },
  {
    id: "toyotomi",
    install: "小型可搬",
    caution: "工場200V機とは用途を分ける",
  },
  {
    id: "panel",
    install: "可搬（室内向け）",
    caution: "工場床面用200V機と同列にしない",
  },
];

const failItems = [
  {
    fail: "工場の面積だけで選ぶ",
    fix: "全体暖房とスポット暖房では選び方が違う。人がいる地点から逆算する。",
  },
  {
    fail: "「200V」だけ見て単相・3相を確認しない",
    fix: "WPS-30As（単相）とWPS-30A（3相）は出力帯が近くても電源が異なる。",
  },
  {
    fail: "プラグが付いていると思う",
    fix: "WPSシリーズはメーカーがプラグなしと案内している。",
  },
  {
    fail: "防爆エリアでも電気式なら使えると思う",
    fix: "電気式＝防爆ではない。設備担当者へ確認する。",
  },
  {
    fail: "台車動線へ床置きする",
    fix: "暖かくても物流動線や避難・通行を邪魔しては意味がない。",
  },
  {
    fail: "1台で工場全体を暖めようとする",
    fix: "スポット暖房は「必要な場所へ暖かさを届ける」考え方。",
  },
  {
    fail: "ヒーターだけ増やし、冷気侵入を放置する",
    fix: "開口部・間仕切り・空気循環も合わせて考える。",
  },
];

const checkItems = [
  "暖めたい作業地点を図面上で決めた",
  "1地点あたりの作業人数を確認した",
  "作業者が固定か移動か確認した",
  "必要な暖房距離・幅を決めた",
  "100V / 単相200V / 3相200Vを確認した",
  "ブレーカー・配線容量を確認した",
  "プラグ付属有無を確認した",
  "防爆エリアではないことを確認した",
  "台車・ハンドリフター・フォークリフト動線を確認した",
  "天吊り・壁掛けが必要か検討した",
  "可燃物・周辺設備との位置関係を確認した",
  "使用環境温度を確認した",
  "間仕切り・空気循環との併用を検討した",
  "導入後、作業者の体感を確認する",
];

const faqs = [
  {
    q: "工場全体を遠赤外線ヒーターで暖められますか？",
    a: "今回のExcel商品群は、広大な工場の室温全体を上げるより、作業者がいる地点をスポットで暖める使い方と相性があります。工場全体の寒さは、断熱・開口部・空気循環も合わせて検討します。",
  },
  {
    q: "単相200Vと3相200Vはどちらを選べばよいですか？",
    a: "現場で用意できる電源によります。WPS-30Asは単相200V、WPS-30AとWPS-30Tは3相200Vです。購入前に設備担当へ確認してください。",
  },
  {
    q: "WPS-20sとWPS-30Asの違いは？",
    a: "WPS-20sは最大2.0kWでスリム、メーカーが示す暖房エリアは前方2m・左右各1.5mです。WPS-30Asは最大3.0kWでワイド、前方3m・左右各2mです。作業人数・暖めたい距離・幅で比較します。",
  },
  {
    q: "天吊りタイプはどんな工場に向きますか？",
    a: "台車・ハンドリフター・人の通路を床置き暖房で狭めたくない工程で検討しやすいです。WPS-30Tは天吊り・壁掛け専用です。",
  },
  {
    q: "防爆エリアでも使えますか？",
    a: "WPSシリーズはメーカーが防爆仕様ではないと明記しています。可燃性ガス・蒸気等が発生する可能性がある場所では一般品を自己判断で使わず、安全基準・設備担当者へ確認してください。",
  },
];

const relatedArticles = [
  {
    href: "/articles/factory-heating-not-effective-heater-guide",
    label:
      "工場・倉庫で暖房が効かない原因は？熱風・遠赤外線・ヒーターベストの寒さ対策",
  },
  {
    href: "/articles/warehouse-heat-countermeasures-large-fans",
    label:
      "倉庫の暑さ対策に大型扇風機は有効？工場扇・冷風機・スポットクーラーの選び方",
  },
  {
    href: "/articles/factory-breakroom-locker-room-odor-control",
    label: "工場休憩室・更衣室の臭い対策",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: h1,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
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
      name: shortTitle,
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

function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className={cls.h3}>
      {children}
    </h3>
  );
}

function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}

function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
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
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function PrimaryCta({ label }: { label?: string }) {
  return (
    <a
      href={primaryCta.url}
      target="_blank"
      rel={EXT_REL}
      className="my-6 block min-h-12 w-full rounded-xl bg-orange-600 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-orange-700 md:text-lg"
    >
      {label ?? primaryCta.label}
    </a>
  );
}

function FeaturedProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const short = SHORT_NAMES[product.id] ?? product.name;
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${short}の商品画像`}
            width={400}
            height={400}
            priority={priority}
            className="h-auto w-full object-contain p-3"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-950">
              {product.category}
            </span>
            <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-950">
              {product.power}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {short}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">最大消費電力：</dt>
              <dd className="inline">{product.consumption}</dd>
            </div>
            <div>
              <dt className="inline font-bold">暖房エリア：</dt>
              <dd className="inline">{product.coverage}</dd>
            </div>
            <div>
              <dt className="inline font-bold">向く作業：</dt>
              <dd className="inline">{product.bestFor.join("、")}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-red-300 bg-red-50 p-3 text-[15px] font-medium leading-6 text-red-950">
            <strong>注意：</strong>
            {product.notes.join(" / ")}
          </p>
          <a
            href={product.url}
            target="_blank"
            rel={EXT_REL}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-orange-700"
          >
            商品ページを見る →
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  const short = SHORT_NAMES[product.id] ?? product.name;
  return (
    <a
      href={product.url}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={product.image}
          alt={`${short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-black leading-6 group-hover:underline">
          {short}
        </span>
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {product.name}
        </span>
      </span>
    </a>
  );
}

export default function Page() {
  const wps20s = byId.wps20s;
  const wps30as = byId.wps30as;

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
              <li>工場 スポット暖房</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-950">
              作業用品ナビ編集部 / 2026年8月28日更新
            </div>
            <h1 className={cls.h1}>{h1}</h1>
            <P>
              冬の工場や倉庫で「暖房をつけているのに、現場から寒いと言われる」ということは珍しくありません。オフィスなら室温を上げれば暖かくなりますが、工場は事情が違います。天井が高く、シャッターや搬入口が大きく、コンクリート床から冷えやすい。しかも、実際に人が立っているのは広い建物の一部だけという現場も多くあります。
            </P>
            <P>
              こうした場所で工場全体の空気を暖めようとすると、必要な暖房能力が大きくなります。そこで候補になるのが、
              <Mark>人が作業する場所を狙って暖める「スポット暖房」</Mark>
              です。この記事では、全体暖房が効きにくい理由から、遠赤外線電気ヒーターの選び方、100V・単相200V・3相200Vの違い、床置きと天吊りの選び方まで整理します。
            </P>
            <SectionImage
              src={heroImage}
              alt="高天井の工場で作業者がいる場所だけを遠赤外線ヒーターで暖めるイメージ"
            />
          </header>

          <section className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
            <H2 id="key-points">先に要点</H2>
            <Ul>
              <li>
                高天井・大空間の工場では、暖気が上へたまりやすく、全体暖房だけでは作業者の足元まで暖かくなりにくい。
              </li>
              <li>
                シャッターや搬入口の開閉が多い現場では、暖めた空気が逃げやすい。
              </li>
              <li>
                作業者の位置が固定される検査台・組立台・梱包場などは、スポット暖房と相性がよい。
              </li>
              <li>
                工場向け遠赤外線電気ヒーターは「何畳用」だけでなく、
                <strong>
                  暖めたい距離・幅、電源、床スペース、現場条件
                </strong>
                で選ぶ。
              </li>
              <li>
                静岡製機WPS-20sは単相200V・最大2.0kWで、暖房エリアは前方2m・左右各1.5m。
              </li>
              <li>
                WPS-30As / WPS-30Aは最大3.0kWで前方3m・左右各2m。単相200Vと3相200Vで電源が異なる。
              </li>
              <li>
                WPS-30Tは3相200Vの天吊り・壁掛け専用。台車やハンドリフターが通る床を空けたい工程で検討しやすい。
              </li>
              <li>
                WPSシリーズは防爆仕様ではなく、電源プラグなし。購入前の設備確認が必要。
              </li>
            </Ul>
          </section>

          <section className="mt-10 rounded-2xl border-2 border-slate-800 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-orange-300">
              工場全部を暖めず、作業地点を暖めたい方へ
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
              まずはWPS-20s / WPS-30Asを比較
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-slate-100 md:text-[17px]">
              狭めの固定作業ならWPS-20s、もう少し広い作業地点ならWPS-30As。どちらも単相200Vですが、暖房エリアと出力が異なります。
            </p>
            <div className="mt-6 grid gap-5">
              {wps20s ? (
                <FeaturedProductCard product={wps20s} priority />
              ) : null}
              {wps30as ? <FeaturedProductCard product={wps30as} /> : null}
            </div>
            <PrimaryCta label="遠赤外線電気ヒーター一覧を見る" />
          </section>

          <H2 id="why-cold">工場で暖房をつけても寒いのはなぜ？</H2>
          <SectionImage
            src={`${imgBase}/high-ceiling-factory-cold-work-zone.webp`}
            alt="高天井で足元が冷えやすい工場の冬季作業イメージ"
          />
          <P>
            工場の寒さは「ヒーターの能力が足りない」だけでは説明できません。建物の構造や作業動線が、一般的な部屋とは大きく違うからです。
          </P>
          <H3>天井が高く、暖気が上にたまりやすい</H3>
          <P>
            暖められた空気は上へ移動します。天井の高い工場では、暖房機器を動かしていても、天井付近だけ暖かくなり、作業者がいる床付近には冷たい空気が残ることがあります。「空調の設定温度は高いのに、足元は寒い」という状態です。
          </P>
          <H3>シャッター・搬入口から冷気が入る</H3>
          <P>
            工場や倉庫は、材料・製品・台車・フォークリフトの出入りがあります。大きなシャッターを開けるたびに外気が入り、暖めた空気が外へ逃げます。特に出荷場や荷受け場では、空間全体を暖める方式だけで寒さを抑えるのが難しくなります。
          </P>
          <H3>コンクリート床から底冷えする</H3>
          <P>
            工場はコンクリート床が多く、長時間の立ち作業では足元から冷えを感じやすくなります。防寒靴やマットも有効ですが、それだけで全身の冷えまで解決できるとは限りません。
          </P>
          <H3>人がいない場所まで暖めてしまう</H3>
          <P>
            たとえば1000㎡の工場でも、常時人がいるのは検査台、組立ライン、梱包台など一部だけという場合があります。
            <Mark>人がいる場所だけを暖める</Mark>
            という考え方が、ここで重要になります。
          </P>

          <H2 id="spot-heating">「工場全体」ではなく「人がいる場所」を暖める</H2>
          <SectionImage
            src={`${imgBase}/factory-worker-targeted-spot-heating.webp`}
            alt="検査台の作業者だけを局所的に暖めるスポット暖房のイメージ"
          />
          <H3>スポット暖房</H3>
          <P>
            特定の作業者、検査台、操作盤、組立場所などをピンポイントで暖めます。作業者の位置がほぼ固定、1〜数人、工程ごとに稼働時間が違う、工場全体を暖める必要がない現場に向きます。
          </P>
          <H3>ゾーン暖房</H3>
          <P>
            1人だけでなく、ラインや一定の作業エリアをまとめて暖めます。作業者がある程度移動する組立・梱包・検品エリアなどでは、複数台のヒーターや広めの暖房エリアを持つ機種を検討します。
          </P>
          <H3>全体暖房をやめる、という意味ではない</H3>
          <P>
            スポット暖房は万能ではありません。出入口から大量に冷気が入るなら、間仕切りやビニールカーテン。暖気が天井へ偏るなら、シーリングファンや空気循環。建物自体が冷え切るなら、断熱改修。こうした対策と組み合わせて、
            <Mark>作業者の体感を補うのがスポット暖房</Mark>
            です。
          </P>

          <H2 id="why-far-infrared">
            遠赤外線電気ヒーターが工場のスポット暖房に向く理由
          </H2>
          <H3>「室温」より「作業地点」を狙いやすい</H3>
          <P>
            工場では「室温を何度まで上げるか」より、作業者が立つ場所で暖かさを感じられるかが重要な場合があります。遠赤外線ヒーターなら、パネルの向きや設置位置を調整し、必要な方向へ暖房を向けられる機種があります。
          </P>
          <H3>高天井でも考えやすい</H3>
          <P>
            温風で暖めた空気は上昇します。一方、遠赤外線タイプのスポット暖房では、空間全部を暖めるのではなく対象方向へ暖かさを届ける考え方ができます。
          </P>
          <H3>電気式なので燃料補給の運用がない</H3>
          <P>
            電気ヒーターは、灯油の補給・保管・給油作業がありません。ただし、200V機では電源設備が必要です。特にWPSシリーズは電源プラグが付属しないため、導入前に電源方式・配線・容量を確認します。
          </P>
          <H3>防爆仕様かどうかは別問題</H3>
          <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-950">
            <p className="font-bold">重要：WPSシリーズは防爆仕様ではない</p>
            <p className="mt-2 text-[15px] leading-7 md:text-[16px]">
              WPS-20s、WPS-30As、WPS-30A、WPS-30Tは、メーカーが
              <strong>防爆仕様ではない</strong>
              と明記しています。可燃性ガス・蒸気等が発生する可能性のある区域では、「電気式だから安全」と自己判断せず、工場の安全基準・設備担当者へ確認してください。
            </p>
          </div>

          <H2 id="five-axes">
            失敗しない選び方は「畳数」ではなく5項目
          </H2>
          <P>
            家庭用暖房では「○畳用」という表記をよく見ます。しかし工場のスポット暖房では、それより先に見るべき項目があります。
          </P>
          <div className="my-8 divide-y-2 divide-gray-300 rounded-2xl border-2 border-gray-900 bg-white">
            {selectAxes.map((axis) => (
              <div
                key={axis.no}
                className="grid gap-3 p-5 md:grid-cols-[56px_220px_1fr] md:items-start md:gap-4 md:p-6"
              >
                <span className="text-4xl font-black leading-none text-orange-600">
                  {axis.no}
                </span>
                <h3 className="text-xl font-black text-gray-900 md:text-2xl">
                  {axis.title}
                </h3>
                <p className="text-[16px] leading-8 text-gray-900 md:text-[17px]">
                  {axis.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="power-comparison">100V / 単相200V / 3相200Vの違い</H2>
          <P>
            これは購入前に必ず確認します。「200V」とだけ見て購入せず、
            <Mark>単相か3相か</Mark>
            まで確認してください。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>電源</th>
                  <th className={cls.th}>Excel掲載の例</th>
                  <th className={cls.th}>想定用途</th>
                </tr>
              </thead>
              <tbody>
                {powerRows.map(([power, example, use]) => (
                  <tr key={`${power}-${example}`}>
                    <td className={cls.td}>
                      <strong>{power}</strong>
                    </td>
                    <td className={cls.td}>{example}</td>
                    <td className={cls.td}>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3 id="floor-vs-ceiling">床置きか、天吊り・壁掛けか</H3>
          <SectionImage
            src={`${imgBase}/factory-heater-cart-aisle-clearance.webp`}
            alt="工場でヒーター設置位置と台車動線を確認するイメージ"
          />
          <P>
            工場の床は暖房器具だけの場所ではありません。台車、ハンドリフター、フォークリフト、作業者、資材が移動します。床置きヒーターが通路へ出るなら、暖房性能以前にレイアウトが問題になります。WPS-30Tのような天吊り・壁掛け専用機は、床スペースを空けたい工程で検討しやすいタイプです。
          </P>

          <H2 id="product-compare">
            Excel掲載の遠赤外線ヒーター6商品を用途別に比較
          </H2>
          <P>
            比較する時は「どれが一番強いか」ではなく、
            <Mark>どの現場に合うか</Mark>
            で見ます。
          </P>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>商品</th>
                  <th className={cls.th}>電源</th>
                  <th className={cls.th}>出力</th>
                  <th className={cls.th}>暖房エリア/設置</th>
                  <th className={cls.th}>向く現場</th>
                  <th className={cls.th}>注意</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => {
                  const product = byId[row.id];
                  if (!product) return null;
                  return (
                    <tr key={row.id}>
                      <td className={cls.td}>
                        <ProductTableCell product={product} />
                      </td>
                      <td className={cls.td}>{product.power}</td>
                      <td className={cls.td}>{product.consumption}</td>
                      <td className={cls.td}>
                        {product.coverage}
                        <br />
                        <span className="text-sm">{row.install}</span>
                      </td>
                      <td className={cls.td}>
                        {product.bestFor.join("、")}
                      </td>
                      <td className={cls.td}>{row.caution}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className={`${cls.bodySm} text-gray-800`}>
            ※仕様はメーカー・商品ページの確認情報。購入時は最新ページを確認してください。
          </p>

          <H3>WPS-20s｜狭めの固定作業へ</H3>
          <P>
            WPS-20sは単相200V、弱1.0kW・強2.0kW。メーカーが示す暖房エリアは、前方2m・左右各1.5mです。1人の検査台、2人程度が並ぶ狭めの作業地点など、「必要な場所だけ」を狙う使い方と合わせやすい機種です。
          </P>

          <H3>WPS-30As｜単相200Vで広めに暖めたい</H3>
          <P>
            WPS-30Asは単相200V、1.5〜3.0kWの4段階。メーカーが示す暖房エリアは前方3m・左右各2mです。WPS-20sより広めの固定工程、複数人が作業する場所で比較しやすくなります。
          </P>

          <H3>WPS-30A｜3相200V設備がある工場</H3>
          <P>
            WPS-30Aは、暖房エリアや最大3.0kWという考え方はWPS-30Asに近い一方、電源が3相200Vです。工場側で3相200Vを利用できる場合の候補になります。
          </P>

          <H3 id="wps30t">WPS-30T｜床を空けたいなら天吊り・壁掛け</H3>
          <SectionImage
            src={`${imgBase}/factory-overhead-radiant-heater.webp`}
            alt="工場の床スペースを空けて上部から作業エリアを暖めるイメージ"
          />
          <P>
            WPS-30Tは3相200V、天吊り・壁掛け専用です。本体を床へ置かないため、台車が多い、ハンドリフターを使う、ライン脇の床を狭めたくない、作業者の通路を確保したいという現場で比較しやすいタイプです。有線リモコンで、暖かさ4段階・オフタイマー操作ができます。
          </P>

          <H3>TOYOTOMI EWH-CS100P(W)｜100Vで小さなスポット</H3>
          <P>
            TOYOTOMIのEWH-CS100Pは、速暖カーボンと遠赤シーズを組み合わせた100Vクラスの電気ヒーターです。強1000W、弱500W。工場の広いラインを暖めるというより、休憩所・詰所・事務スペース、1人の小さなスポットなどで考えやすい機種です。
          </P>

          <H3>GREEN CROSS-select 遠赤外線電気パネルヒーター｜休憩室・詰所へ</H3>
          <P>
            このパネルヒーターは、木造5畳・コンクリート8畳という室内向けの効果範囲が商品ページに記載されています。広い工場床面より、休憩室、談話室、現場詰所、室内の足元暖房などへ役割を分けるほうが分かりやすくなります。
          </P>

          <H2 id="site-selection">現場別｜どのタイプを選ぶ？</H2>
          <H3>検査台・組立台</H3>
          <P>
            作業者がほぼ同じ場所に立つならスポット暖房を検討しやすい工程です。1〜2人ならWPS-20s、もう少し広めならWPS-30As/Aを比較します。
          </P>
          <H3>梱包・出荷場</H3>
          <P>
            シャッターに近く冷気が入りやすいエリアです。全体空調だけでは体感が上がりにくい場合、作業地点へ向けるヒーターを補助的に置く方法があります。ただし、フォークリフトや台車の進路に置かないことが前提です。
          </P>
          <H3 id="shutter-area">シャッター付近</H3>
          <SectionImage
            src={`${imgBase}/warehouse-shutter-winter-spot-heating.webp`}
            alt="搬入口から冷気が入る倉庫で作業地点を暖めるイメージ"
          />
          <P>
            ヒーターだけで冷気侵入を打ち消そうとせず、間仕切り・カーテン・開閉ルールも合わせて検討します。
          </P>
          <H3 id="break-room">休憩所・詰所</H3>
          <SectionImage
            src={`${imgBase}/factory-break-room-electric-heater.webp`}
            alt="工場の休憩所で小型電気ヒーターを使うイメージ"
          />
          <P>
            ここは工場床面とは違い、100V機や室内向けパネルヒーターが使いやすいことがあります。作業エリア用200V機と、休憩所用暖房を別に考えると選定しやすくなります。
          </P>
          <H3>ハンドリフター・台車が通るライン</H3>
          <P>
            床置きタイプでは動線に干渉する可能性があります。ライン周辺の床を空けたい場合は、WPS-30Tのような天吊り・壁掛けタイプを検討します。
          </P>

          <H2 id="before-200v">200Vヒーター導入前に必ず確認したいこと</H2>
          <SectionImage
            src={`${imgBase}/factory-electric-heater-power-check.webp`}
            alt="設備担当者が200V電源とヒーター設置条件を確認するイメージ"
          />
          <Ul>
            <li>
              <strong>単相か3相か：</strong>
              WPS-30Asは単相200V、WPS-30AとWPS-30Tは3相200Vです。
            </li>
            <li>
              <strong>ブレーカー・配線容量：</strong>
              設備担当、電気工事担当へ確認します。
            </li>
            <li>
              <strong>プラグ付属の有無：</strong>
              WPSシリーズはメーカーがプラグなしと案内しています。
            </li>
            <li>
              <strong>防爆エリアではないか：</strong>
              WPSシリーズは防爆仕様ではありません。
            </li>
            <li>
              <strong>通路・可燃物・離隔距離：</strong>
              設置場所は取扱説明書に従い、周辺に可燃物や障害物がないか確認します。
            </li>
          </Ul>

          <H2 id="common-failures">よくある失敗</H2>
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <thead>
                <tr>
                  <th className={cls.th}>失敗パターン</th>
                  <th className={cls.th}>対策</th>
                </tr>
              </thead>
              <tbody>
                {failItems.map((item) => (
                  <tr key={item.fail}>
                    <td className={cls.td}>
                      <strong>{item.fail}</strong>
                    </td>
                    <td className={cls.td}>{item.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="checklist">法人向け導入チェックリスト</H2>
          <ul className="my-4 space-y-2 text-[17px] leading-[1.95] text-gray-900">
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

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <p className={cls.bodySm}>{faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">
            まとめ｜工場暖房は「何㎡あるか」より「どこに人がいるか」から考える
          </H2>
          <P>
            高天井・大空間の工場では、広い空間全体を暖めることだけが答えではありません。検査台、組立、梱包、機械操作など、
            <Mark>人が長くいる地点を見つけ、その場所へ暖かさを届ける</Mark>
            という考え方があります。
          </P>
          <Ol>
            <li>作業者が止まる場所</li>
            <li>暖めたい距離・幅</li>
            <li>100V / 単相200V / 3相200V</li>
            <li>床置きか天吊りか</li>
            <li>防爆・配線・プラグ・安全条件</li>
          </Ol>
          <PrimaryCta />

          <H2 id="winter-review">冬季の工場作業をまとめて見直す</H2>
          <P>
            暖房設備だけでなく、冬場の物流・足元・運搬環境も合わせて見直す場合はこちら。
          </P>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedCtas.map((cta) => (
              <a
                key={cta.label}
                href={cta.url}
                target="_blank"
                rel={EXT_REL}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-center text-[15px] font-bold text-gray-900 transition hover:bg-gray-100"
              >
                {cta.label} →
              </a>
            ))}
          </div>

          <section className="mt-14 border-t border-gray-200 pt-10">
            <h2 className="mb-4 text-2xl font-black text-gray-900">
              関連記事
            </h2>
            <ul className="space-y-3">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-gray-900 underline underline-offset-4 hover:text-orange-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
