import type { Metadata } from "next";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const slug = "machine-soundproof-box-acoustic-material-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/machine-soundproof-box-acoustic-material-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "防音ボックスの吸音材はどう選ぶ？コンプレッサー・発電機・機械カバーの騒音対策とカームフレックス比較【2026年版】";
const shortTitle = "防音ボックスの吸音材の選び方";
const description =
  "防音ボックスの内側に貼る吸音材を探している方向けに、吸音・遮音・制振の違い、コンプレッサー・発電機・機械カバーでの選び方、カームフレックスF-4LF・F-4・F-55・F-6の違いを解説します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: shortTitle,
    description,
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-05",
    modifiedTime: "2026-08-05",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "機械用防音ボックスの内側へ吸音材を施工するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: shortTitle,
    description,
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: number;
  code: string;
  name: string;
  shortName: string;
  utmUrl: string;
  series: string;
  thicknessMm: number;
  adhesive: boolean;
  finish: string;
  badge: string;
  role: string;
  feature: string;
  check: string;
};

type CtaLink = { label: string; url: string };

const allProducts = productData.products as Product[];
const byId = Object.fromEntries(allProducts.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.ctaLinks as CtaLink[];

const productImageExists = (code: string) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      slug,
      "products",
      `${code}.webp`
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
};

const faqs = [
  {
    q: "吸音材だけで防音できますか？",
    a: "吸音材はボックス内部の反響を抑える材料です。外への音漏れを抑えるには、遮音性のある筐体、隙間処理、制振・防振との組み合わせが必要です。",
  },
  {
    q: "F-4LFとF-4は何が違いますか？",
    a: "オレンジブックでは、F-4LFは2000Hz以下の低周波音、F-4は2000Hz前後の中周波音の吸音用途とされています。",
  },
  {
    q: "20mmと40mmはどう選びますか？",
    a: "内部スペースが狭い場合は20mm、性能と施工性のバランスは25〜30mm、十分な離隔を確保できる場合は35〜40mmを比較します。",
  },
  {
    q: "粘着タイプと非粘着タイプはどちらがよいですか？",
    a: "施工時間を短縮したい平滑面には粘着タイプ、交換性や固定方法を指定したい場合は非粘着タイプが向きます。",
  },
  {
    q: "RZ-3は吸音材ですか？",
    a: "吸音材ではなく制振材です。金属板のビビり・共鳴を抑える役割です。",
  },
  {
    q: "発電機の防音ボックスに使えますか？",
    a: "吸音材として検討される用途はありますが、燃焼式発電機の密閉・屋内使用は危険です。機器メーカー指定の排気・排熱・防音構造を優先してください。",
  },
];

const checkItems = [
  "対象機械と型式",
  "主な音の症状（低くこもる／反響／ビビり／床伝い）",
  "騒音を下げたい位置（作業者側・隣室・屋外など）",
  "ボックス内寸と貼付可能面積",
  "必要厚み（20〜40mm）と離隔距離",
  "粘着あり／なしと交換方針",
  "表面温度・油・水・粉じんの有無",
  "吸排気・排熱経路の確保",
  "点検・交換方法と保護面材の要否",
  "必要な燃焼規格と屋内使用条件",
  "吸音・遮音・制振・防振の役割分担",
  "試験施工後の測定方法",
];

const seriesRows: {
  series: string;
  role: string;
  surface: string;
  use: string;
  ids: number[];
}[] = [
  {
    series: "F-4LF",
    role: "2000Hz以下の低周波音の吸音",
    surface: "ウレタン皮膜",
    use: "コンプレッサー、ポンプ、モーターなどの低くこもる音",
    ids: [1, 17],
  },
  {
    series: "F-4",
    role: "2000Hz前後の中周波音の吸音",
    surface: "ウレタン皮膜",
    use: "機械カバー内部の反響音",
    ids: [5, 3],
  },
  {
    series: "F-55",
    role: "中周波吸音・耐光性",
    surface: "表面不織布",
    use: "光が入りやすい屋内設備、表面保護も意識する場合",
    ids: [11, 4],
  },
  {
    series: "F-6",
    role: "難燃性を重視した吸音",
    surface: "UL94 HF-1取得",
    use: "必要燃焼規格と照合する設備",
    ids: [2],
  },
  {
    series: "F-2",
    role: "汎用吸音の比較候補",
    surface: "ウレタンフォーム",
    use: "厚みと施工性を重視した一般的な吸音",
    ids: [9],
  },
  {
    series: "RZ-3",
    role: "制振",
    surface: "ブチルゴム",
    use: "金属板のビビり・パネル共鳴",
    ids: [19],
  },
];

const thicknessRows = [
  {
    thickness: "20mm",
    use: "狭いカバー、後付け、広い面積へ貼りたい",
    note: "低い音に対する期待値を上げすぎない",
    id: 10,
  },
  {
    thickness: "25mm",
    use: "20mmより性能を上げつつ省スペース",
    note: "粘着タイプ中心の商品構成",
    id: 15,
  },
  {
    thickness: "30mm",
    use: "性能・施工性・スペースの基準厚",
    note: "機械との離隔を確認",
    id: 1,
  },
  {
    thickness: "35mm",
    use: "低周波対策を強めたい",
    note: "扉・吸気通路との干渉",
    id: 18,
  },
  {
    thickness: "40mm",
    use: "厚み優先、内部空間に余裕がある場合",
    note: "施工面積と重量、排熱経路",
    id: 16,
  },
];

const fourElements = [
  {
    title: "吸音",
    symptom: "箱の中で音が響く",
    action: "内面へ多孔質材を配置し、反射する音のエネルギーを減衰",
    material: "F-4LF / F-4 / F-55 / F-6 / F-2",
  },
  {
    title: "遮音",
    symptom: "箱の外へ音が漏れる",
    action: "質量と気密性のある筐体で透過を抑える",
    material: "鉄板・厚い合板・高比重シートなど",
  },
  {
    title: "制振",
    symptom: "金属板がビリビリ鳴る",
    action: "振動する板へ制振材を貼り、共鳴を抑える",
    material: "RZ-3",
  },
  {
    title: "防振",
    symptom: "床や壁まで振動する",
    action: "機械脚部・架台・配管の振動伝達を抑える",
    material: "防振ゴム・架台・フレキシブル継手など",
  },
];

const relatedArticles = [
  {
    href: "/articles/foam-gap-filling-urethane-spray-guide",
    label: "発泡ウレタンで隙間埋めする方法｜配管・窓枠・貫通部の使い分け",
  },
  {
    href: "/articles/workshop-odor-control-deodorizer",
    label: "作業場の臭気対策と消臭剤の選び方",
  },
  {
    href: "/articles/welding-spark-protection-sheet-selection",
    label: "溶接火花防護シートの選び方",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
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

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 820px"
        />
      </div>
    </figure>
  );
}

function CtaGrid({ heading }: { heading?: string }) {
  return (
    <section className="my-8 rounded-2xl border-2 border-sky-200 bg-sky-50 p-5 md:p-6">
      {heading ? (
        <h3 className="mb-4 text-xl font-extrabold text-gray-900">{heading}</h3>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.url}
            target="_blank"
            rel={EXT_REL}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-300 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-sky-950 hover:bg-sky-100"
          >
            {cta.label} →
          </a>
        ))}
      </div>
    </section>
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
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const name = product.shortName || product.name;
  const hasImage = productImageExists(product.code);
  const imageSrc = `${imgBase}/products/${product.code}.webp`;

  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[200px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={imageSrc}
              alt={`${name}の商品画像`}
              width={400}
              height={400}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <ImagePending name={name} />
          )}
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
              {product.badge}
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.thicknessMm}mm
            </span>
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
              {product.adhesive ? "片面粘着" : "非粘着"}
            </span>
          </div>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {name}
          </h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">役割：</dt>
              <dd className="inline">{product.role}</dd>
            </div>
            <div>
              <dt className="inline font-bold">特徴：</dt>
              <dd className="inline">{product.feature}</dd>
            </div>
          </dl>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[15px] font-medium leading-6 text-amber-950">
            <strong>購入前確認：</strong>
            {product.check}
          </p>
          <a
            href={product.utmUrl}
            target="_blank"
            rel={EXT_REL}
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-800 px-5 py-3 text-[16px] font-bold text-white hover:bg-sky-900"
          >
            {product.thicknessMm}mm・{product.adhesive ? "片面粘着" : "非粘着"}
            の商品ページを見る →
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductStack({
  ids,
  priorityFirst = false,
}: {
  ids: number[];
  priorityFirst?: boolean;
}) {
  return (
    <div className="my-6 grid gap-5">
      {ids.map((id, index) => {
        const product = byId[id];
        if (!product) return null;
        return (
          <ProductCard
            key={id}
            product={product}
            priority={priorityFirst && index === 0}
          />
        );
      })}
    </div>
  );
}

function ProductTableCell({
  product,
  label,
}: {
  product?: Product;
  label: string;
}) {
  if (!product) {
    return <span className="font-bold">{label}</span>;
  }
  const name = product.shortName || product.name;
  const hasImage = productImageExists(product.code);
  return (
    <a
      href={product.utmUrl}
      target="_blank"
      rel={EXT_REL}
      className="group flex min-w-[16rem] items-start gap-3 text-gray-900 no-underline"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={`${imgBase}/products/${product.code}.webp`}
            alt={`${name}の商品画像`}
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
        <span className="mt-1 block text-xs leading-5 text-gray-900">
          {name}
        </span>
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <li>防音ボックスの吸音材</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[820px] px-4 pb-16 sm:px-6 lg:px-8">
          <header>
            <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-900">
              工場・機械の騒音対策 / 2026年8月5日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              機械の作動音が工場内に響く。コンプレッサーを動かすと会話が聞き取りづらい。ポンプやモーターを金属製カバーで囲ったものの、箱の中で音が反響して、期待したほど静かにならない。
            </P>
            <P>
              このようなときに検討されるのが、
              <Mark>防音ボックスの内側に貼る吸音材</Mark>
              です。ただし、吸音材を貼れば、それだけで音が外へ漏れなくなるわけではありません。
            </P>
            <P>
              この記事では、防音ボックスの吸音材を探している工場・設備保全・装置設計・法人購買担当者向けに、吸音材の役割、コンプレッサーや発電機など機械別の考え方、イノアック「カームフレックス」のシリーズ・厚み・粘着有無の選び方を解説します。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="機械用防音ボックスの内側へ吸音材を施工するイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 820px"
                />
              </div>
            </figure>
          </header>

          <section className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 md:p-6">
            <h2 className="text-lg font-extrabold text-amber-950">
              安全上の重要事項
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-amber-950 md:text-[16px]">
              発電機など燃焼式機器の排ガスには一酸化炭素が含まれます。屋内や換気不十分な場所で使用したり、汎用的な密閉箱へ入れたりしないでください。吸音材の施工よりも、
              <strong>
                機器メーカーが指定する排気・吸気・排熱・離隔距離・点検条件
              </strong>
              を最優先してください。
            </p>
          </section>

          <CtaGrid heading="まず商品・シリーズを確認する" />

          <section className="mt-8 rounded-2xl border-2 border-sky-300 bg-sky-950 p-6 text-white md:p-7">
            <p className="text-sm font-bold text-sky-200">30秒でわかる結論</p>
            <h2 className="mt-2 text-[23px] font-extrabold leading-snug md:text-[26px]">
              吸音材はボックス内部の反響を抑え、遮音・制振・防振と役割分担する
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="rounded-xl border border-sky-700 bg-sky-900/60 px-4 py-3 text-[15px] leading-7">
                <strong>低くこもる機械音</strong> → F-4LF（25〜40mmを基準比較）
              </li>
              <li className="rounded-xl border border-sky-700 bg-sky-900/60 px-4 py-3 text-[15px] leading-7">
                <strong>中周波の反響音</strong> → F-4・F-55
              </li>
              <li className="rounded-xl border border-sky-700 bg-sky-900/60 px-4 py-3 text-[15px] leading-7">
                <strong>難燃性を重視</strong> → F-6（必要規格と個別照合）
              </li>
              <li className="rounded-xl border border-sky-700 bg-sky-900/60 px-4 py-3 text-[15px] leading-7">
                <strong>金属板のビビり</strong> → RZ制振材＋吸音材
              </li>
            </ul>
            <p className="mt-4 mb-0 text-[16px] leading-8 text-sky-50">
              厚みは
              <Mark>25〜30mm</Mark>
              を基準に、内部スペースと排熱経路を確認して選びます。吸音材単体で完全防音できる、とは考えないでください。
            </p>
          </section>

          <H2 id="purpose">防音ボックスの吸音材は何のために貼るのか</H2>
          <P>
            防音ボックスの内側に吸音材を貼る最大の目的は、
            <Mark>箱の内部で跳ね返る反射音を減らすこと</Mark>
            です。金属板や合板などで機械を囲うと、何もしない状態より音が遮られる場合があります。しかし、内面が硬いままだと、機械から出た音が何度も反射し、内部にこもります。
          </P>
          <P>
            そこで、内壁・天井・扉の内側へ多孔質の吸音材を配置し、反射する音のエネルギーを減衰させます。
          </P>
          <H3>吸音材だけでは音漏れを止めきれない</H3>
          <P>
            吸音材は、音が外へ抜けることを完全に止める材料ではありません。薄いカバー、隙間の多い扉、配管やケーブルの貫通穴があると、内部の反響が減っても、外へ音が抜けます。防音ボックスでは次の順番で考えると整理しやすくなります。
          </P>
          <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>音源そのものを点検する</li>
            <li>振動が大きい部分へ制振・防振対策を行う</li>
            <li>質量と気密性のある筐体で遮音する</li>
            <li>内側へ吸音材を配置して反響を抑える</li>
            <li>吸排気口・排熱経路へ音が直進しにくい工夫をする</li>
          </ol>

          <H2 id="four-elements">吸音・遮音・制振・防振の違い</H2>
          <SectionImage
            src={`${imgBase}/sound-control-four-elements.jpg`}
            alt="吸音・遮音・制振・防振を機械設備で使い分けるイメージ"
          />
          <P>
            「吸音材と遮音材のどちらが優れているか」という比較ではありません。症状ごとに役割を分けます。
          </P>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {fourElements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-sky-800">{item.symptom}</p>
                <h3 className="mt-1 text-xl font-extrabold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-gray-900">
                  {item.action}
                </p>
                <p className="mt-3 rounded-lg bg-gray-100 px-3 py-2 text-[14px] font-bold text-gray-900">
                  例：{item.material}
                </p>
              </div>
            ))}
          </div>

          <H2 id="sound-types">まず機械音を4種類に分ける</H2>
          <H3>1. 低くこもる「ブーン」「ゴー」という音</H3>
          <P>
            コンプレッサー、発電機、ポンプ、モーターなどで感じやすい音です。低い音は回り込みやすく、薄い吸音材だけでは変化を感じにくいことがあります。このような用途では、低周波寄りの吸音を想定した
            <Mark>カームフレックスF-4LF</Mark>
            を中心に比較します。
          </P>
          <H3>2. 中くらいの高さの作動音・反響音</H3>
          <P>
            金属カバー内部で反射する作動音や、装置内の中周波音には、
            <strong>F-4</strong>や<strong>F-55</strong>が比較候補になります。
          </P>
          <H3>3. 金属板の「ビリビリ」「バタバタ」という音</H3>
          <P>
            これは空気中の音だけでなく、筐体そのものの振動が原因です。吸音材を厚くする前に、
            <Mark>RZ制振材</Mark>
            などでパネル振動を抑える方が合理的な場合があります。
          </P>
          <H3>4. 床・壁・配管を伝う振動音</H3>
          <P>
            機械脚部や配管を通じて伝わる音です。内貼り吸音材だけでは改善しにくいため、防振ゴムや配管支持方法も確認します。
          </P>

          <H2 id="f4lf-30">最重要商品：F-4LF 30mmをどう使うか</H2>
          <P>
            カームフレックスは、イノアックが展開する吸音・制振材料のシリーズです。低くこもる機械音を防音ボックス内部で抑えたい場合の中心候補が
            <Mark>F-4LF 30mm</Mark>
            です。
          </P>
          <ProductStack ids={[1, 17]} priorityFirst />
          <H3>非粘着タイプが向くケース</H3>
          <ul className={cls.list}>
            <li>接着方法を別途指定したい</li>
            <li>金具・押さえ板で固定したい</li>
            <li>交換しやすい構造にしたい</li>
            <li>曲面や複雑な形状へ加工して使いたい</li>
          </ul>
          <H3>片面粘着タイプを選ぶ前の確認</H3>
          <ul className={cls.list}>
            <li>接着面に油・水・粉じんがないか</li>
            <li>高温部へ近すぎないか</li>
            <li>点検時に取り外す必要がないか</li>
            <li>自重や振動で剥がれない面積・向きか</li>
            <li>粘着剤を使える材質か</li>
          </ul>
          <CtaGrid heading="厚み・粘着有無を一覧で比較する" />

          <H2 id="thickness">F-4LFの厚みは20・25・30・35・40mmのどれを選ぶか</H2>
          <SectionImage
            src={`${imgBase}/acoustic-foam-thickness-comparison.jpg`}
            alt="20mm・30mm・40mmの吸音材厚みを比較するイメージ"
          />
          <P>
            オレンジブックでは、厚みが厚いほど吸音特性が向上するとされています。ただし、厚ければ無条件に最適というわけではありません。防音ボックス内では、機械との離隔、吸気通路、点検スペースも必要です。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[780px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>厚み</th>
                  <th className={cls.th}>向く場面</th>
                  <th className={cls.th}>注意点</th>
                  <th className={cls.th}>参考商品</th>
                </tr>
              </thead>
              <tbody>
                {thicknessRows.map((row) => (
                  <tr key={row.thickness}>
                    <td className={`${cls.td} font-bold`}>{row.thickness}</td>
                    <td className={cls.td}>{row.use}</td>
                    <td className={cls.td}>{row.note}</td>
                    <td className={cls.td}>
                      <ProductTableCell
                        product={byId[row.id]}
                        label={`${row.thickness}のF-4LF`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            今回の中心商品である
            <Mark>30mm</Mark>
            は、性能と施工性・スペースのバランスを取りやすい基準厚です。内部が狭い場合は20mm、十分な離隔を確保できる場合は35〜40mmを比較します。
          </P>
          <ProductStack ids={[10, 16]} />

          <H2 id="series">カームフレックスのシリーズ比較</H2>
          <P>
            Fシリーズ（吸音）とRZ（制振）は役割が異なります。さらにFシリーズの中でも、想定する周波数帯・表面仕様・難燃性で分かれます。
          </P>
          <div className="my-4 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[920px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>シリーズ</th>
                  <th className={cls.th}>主な役割</th>
                  <th className={cls.th}>表面・特徴</th>
                  <th className={cls.th}>向く検討場面</th>
                  <th className={cls.th}>代表商品</th>
                </tr>
              </thead>
              <tbody>
                {seriesRows.map((row) => (
                  <tr key={row.series}>
                    <td className={`${cls.td} font-bold`}>{row.series}</td>
                    <td className={cls.td}>{row.role}</td>
                    <td className={cls.td}>{row.surface}</td>
                    <td className={cls.td}>{row.use}</td>
                    <td className={cls.td}>
                      <ProductTableCell
                        product={byId[row.ids[0]]}
                        label={row.series}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H3>F-4LFとF-4は何が違うのか</H3>
          <P>
            オレンジブックでは、
            <strong>F-4LFは2000Hz以下の低周波音</strong>、
            <strong>F-4は2000Hz前後の中周波音</strong>
            の吸音用途とされています。簡易的には次の症状で比較します。
          </P>
          <ul className={cls.list}>
            <li>低く「ブーン」「ゴー」と響く → F-4LFを起点</li>
            <li>カバー内部で作動音が反射する → F-4を比較</li>
            <li>パネル自体が鳴る → RZ制振材を併用</li>
            <li>複数の音が混ざる → 吸音・遮音・制振を組み合わせる</li>
          </ul>
          <ProductStack ids={[5, 3]} />

          <H3>F-55はどんな場合に選ぶか</H3>
          <P>
            F-55は、表面に不織布があり、耐光性と中周波音の吸音に優れるグレードです。屋内でも点検扉を開けた際に光が入りやすい、表面保護を意識したい場合に候補になります。
          </P>
          <ProductStack ids={[11, 4]} />

          <H3>F-6はどんな場合に選ぶか</H3>
          <P>
            F-6 30mmは、UL94 HF-1を取得した発泡ウレタン吸音材です。難燃性が重要な比較条件になる場合に検討しやすいグレードですが、必要な燃焼規格は業界・設備・発注仕様によって異なります。「難燃と書いてあるからどこでも使用できる」と判断せず、設計仕様書や設備メーカーの要件と照合してください。
          </P>
          <ProductStack ids={[2]} />

          <H3>F-2はどんな場合に比較するか</H3>
          <P>
            F-2 40mmは、汎用的なウレタン吸音材として、厚みと施工性を重視した比較に組み込みやすい候補です。対象周波数と燃焼性などの詳細仕様は、商品・メーカー情報で確認してください。
          </P>
          <ProductStack ids={[9]} />

          <H2 id="rz">RZ制振材は吸音材と何が違うか</H2>
          <SectionImage
            src={`${imgBase}/damping-sheet-and-acoustic-foam.jpg`}
            alt="金属カバーへ制振材と吸音材を併用するイメージ"
          />
          <P>
            RZ-3はブチルゴム製の制振材です。吸音材のように空気中の反響を減らすのではなく、金属板や薄いパネルの振動を減衰させます。
          </P>
          <ul className={cls.list}>
            <li>ボックスの側板がビリビリする</li>
            <li>扉を手で押さえると音が小さくなる</li>
            <li>薄い金属板が共鳴している</li>
            <li>モーター回転に合わせてパネルが鳴る</li>
          </ul>
          <P>
            この場合は、パネルの振動が大きい位置へRZを貼り、その上や別面へ吸音材を配置する考え方があります。
          </P>
          <ProductStack ids={[19]} />

          <H2 id="adhesive">粘着ありと非粘着はどう選ぶか</H2>
          <SectionImage
            src={`${imgBase}/adhesive-nonadhesive-acoustic-foam.jpg`}
            alt="片面粘着タイプと非粘着タイプの吸音材を比較するイメージ"
          />
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-300 bg-white p-5">
              <h3 className="text-lg font-extrabold text-gray-900">片面粘着</h3>
              <ul className={`${cls.list} mb-0`}>
                <li>平滑な金属板・樹脂板へ直接貼る</li>
                <li>施工時間を短縮したい</li>
                <li>交換頻度が低い</li>
                <li>垂直・水平面を中心に使う</li>
              </ul>
              <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[14px] leading-6 text-amber-950">
                脱脂・清掃、表面温度、振動、自重、粘着剤との相性を確認
              </p>
            </div>
            <div className="rounded-2xl border border-gray-300 bg-white p-5">
              <h3 className="text-lg font-extrabold text-gray-900">非粘着</h3>
              <ul className={`${cls.list} mb-0`}>
                <li>押さえ板や金具で固定する</li>
                <li>交換可能にしたい</li>
                <li>接着剤を指定したい</li>
                <li>設備メーカーの固定方法に合わせたい</li>
              </ul>
              <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-[14px] leading-6 text-amber-950">
                現場へ送るだけでなく、貼付面の清掃方法と交換方針も一緒に確認
              </p>
            </div>
          </div>

          <H2 id="by-machine">機械別の選び方</H2>
          <SectionImage
            src={`${imgBase}/compressor-acoustic-enclosure.jpg`}
            alt="コンプレッサー防音ボックス内へ吸音材を貼るイメージ"
          />
          <H3>コンプレッサー</H3>
          <P>起きやすい問題は、圧縮機本体の作動音、モーター音、吸排気音、タンクやカバーの共鳴、床への振動伝達です。</P>
          <ul className={cls.list}>
            <li>
              ボックス内面：<Mark>F-4LF 25〜40mm</Mark>
            </li>
            <li>カバーのビビり：RZ-3</li>
            <li>床への振動：防振ゴム</li>
            <li>音漏れ：筐体の隙間・扉・配管貫通部の見直し</li>
          </ul>
          <H3>ポンプ・モーター</H3>
          <P>
            連続した回転音がカバー内部で反射している場合は、F-4LFまたはF-4を比較します。薄い板金カバーが鳴る場合は、吸音材を増やす前にRZ制振材の検討が必要です。
          </P>
          <H3>工作機械・設備ユニット</H3>
          <P>
            機械全体を囲う場合は、作業者の安全、扉の開閉、非常停止、メンテナンス、切粉・油・粉じんへの対応が必要です。吸音材を露出したまま使用できる環境か確認し、必要に応じてパンチングメタルなどの保護面材も検討します。
          </P>
          <H3>発電機</H3>
          <P>
            F-4LFは発電機用吸音材の用途例がありますが、携帯発電機やエンジン式機器を汎用の密閉箱へ入れることは推奨できません。排ガス・一酸化炭素・排熱・燃料・吸気不足・火災・メーカー保証に関わるため、
            <strong>メーカー指定の防音仕様や専用防音型機器を優先</strong>
            してください。
          </P>

          <H2 id="steps">防音ボックスへ吸音材を配置する手順</H2>
          <ol className="my-4 list-decimal space-y-3 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
            <li>
              <strong>音源を特定する</strong>
              ：機械本体、吸気口、排気口、配管、床、カバーのどこが主な音源かを確認
            </li>
            <li>
              <strong>ボックスの音漏れを確認する</strong>
              ：扉の隙間、ケーブル穴、配管穴、換気口は音が漏れやすい
            </li>
            <li>
              <strong>振動する板を確認する</strong>
              ：パネル振動が大きい場合は制振を先に検討
            </li>
            <li>
              <strong>吸音材を貼れる面積を測る</strong>
              ：反射面が大きい扉、天井、側板を優先
            </li>
            <li>
              <strong>排熱・吸気・点検スペースを確保する</strong>
              ：ファン、フィルター、排気口、可動部へ接触させない
            </li>
            <li>
              <strong>厚みと固定方法を決める</strong>
              ：20〜40mmと片面粘着・非粘着を選ぶ
            </li>
            <li>
              <strong>試験施工と測定を行う</strong>
              ：一面または一部分で試し、騒音値・温度・機械動作・粘着状態を確認してから展開
            </li>
          </ol>

          <H2 id="failures">よくある失敗</H2>
          <H3>吸音材だけで外への音漏れも止まると思う</H3>
          <P>
            吸音材は内部反響を減らす材料です。筐体の遮音性と隙間対策が必要です。
          </P>
          <H3>吸気口・排気口を塞ぐ</H3>
          <P>
            機械の温度上昇や故障につながります。吸音材の配置より安全な熱設計が優先です。
          </P>
          <H3>低い振動音に吸音材だけを追加する</H3>
          <P>
            床・架台・パネルが振動している場合は、防振・制振が必要です。
          </P>
          <H3>厚みを増やして点検できなくなる</H3>
          <P>
            扉、フィルター、可動部、ボルト、点検口へ干渉しない寸法を確保します。
          </P>
          <H3>粘着面を清掃せず貼る</H3>
          <P>油や粉じんがあると、剥がれやすくなります。</P>
          <H3>屋外へそのまま貼る</H3>
          <P>
            掲載されたF-4・F-4LF・F-55・F-6は屋内使用条件です。紫外線や水分を含め、使用環境を確認してください。
          </P>

          <H2 id="checklist">法人購買・設備保全チェックリスト</H2>
          <SectionImage
            src={`${imgBase}/calmflex-procurement-selection.jpg`}
            alt="法人担当者が機械音に合わせて吸音材を選ぶイメージ"
          />
          <P>
            現場から「防音ボックスの吸音材が欲しい」と言われたとき、購買・設備保全の担当者は次の観点で確認すると手配ミスが減ります。
          </P>
          <ul className="my-6 space-y-3">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] leading-7 text-gray-900 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-sky-800 text-sm font-black text-sky-900"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問（FAQ）</H2>
          <div className="my-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className={cls.faqQ}>Q. {faq.q}</h3>
                <p className={`mb-0 ${cls.bodySm}`}>A. {faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            防音ボックスの吸音材選びでは、最初に「音が響いているのか」「外へ漏れているのか」「パネルや床が振動しているのか」を分けます。
          </P>
          <ul className={cls.list}>
            <li>
              低くこもる機械音：<Mark>F-4LF</Mark>
            </li>
            <li>中周波の反響音：F-4・F-55</li>
            <li>難燃性を重視：F-6</li>
            <li>汎用的な厚手吸音：F-2</li>
            <li>金属板のビビり：RZ制振材</li>
          </ul>
          <P>
            主力商品のF-4LF 30mmは、コンプレッサー・ポンプ・モーターなどの防音ボックス内貼り材を探すユーザーへ、もっとも自然に訴求しやすい商品です。商品名だけで決めず、対象音・貼付可能面積・内部離隔・排熱・点検性を整理してから選定してください。
          </P>

          <section className="my-10 rounded-xl border-2 border-sky-800 bg-sky-50 p-7 text-center">
            <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
              厚み・粘着有無を比較して選ぶ
            </p>
            <p className={`mb-5 ${cls.bodySm}`}>
              個別商品だけでなく、カームフレックス一覧から現場条件に合う商品を比較できます。
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.url}
                  target="_blank"
                  rel={EXT_REL}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-sky-800 px-6 py-4 text-base font-bold text-white transition hover:bg-sky-900"
                >
                  {cta.label} →
                </a>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="mb-4 text-xl font-black text-gray-900">関連記事</h2>
            <ul className="space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="font-semibold text-gray-900 underline underline-offset-4 hover:text-sky-800"
                  >
                    {article.label}
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
