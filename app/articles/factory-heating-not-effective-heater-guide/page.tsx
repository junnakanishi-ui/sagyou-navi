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

const slug = "factory-heating-not-effective-heater-guide";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const imgBase = `/images/articles/${slug}`;
const heroImage = `${imgBase}/factory-warehouse-heating-not-effective-hero.jpg`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const title =
  "工場・倉庫で暖房が効かない原因は？熱風・遠赤外線・ヒーターベストの寒さ対策【2026年版】";
const shortTitle = "工場・倉庫で暖房が効かない原因と対策";
const description =
  "工場や倉庫で暖房を強くしても足元が寒い原因を、高天井・シャッター・広い空間・作業者移動から解説。熱風式・放射式・遠赤外線・屋外ガスヒーター・ヒーターベストを3層で使い分けます。";

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
    publishedTime: "2026-08-07",
    modifiedTime: "2026-08-07",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "広い工場で熱風ヒーター・遠赤外線ヒーター・ヒーターベストを使い分けるイメージ",
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
  model: string;
  code: string;
  name: string;
  utmUrl: string;
  category: string;
  badge: string;
  layer: string;
  role: string;
  spec: string;
  feature: string;
  check: string;
  featured: boolean;
  included: boolean;
};

type CtaLink = { label: string; url: string };

const products = (productData.products as Product[]).filter((p) => p.included);
const byId = Object.fromEntries(products.map((p) => [p.id, p])) as Record<
  number,
  Product
>;
const ctas = productData.ctaLinks as CtaLink[];

const SHORT_NAMES: Record<number, string> = {
  1: "MEIHO MPH16N（熱風式16kW）",
  2: "静岡製機 HG50D（ホットガン）",
  3: "MEIHO MPH20FN（放射式20kW）",
  4: "MEIHO MPH30N（熱風式30kW）",
  5: "MEIHO MPH20N（熱風式20kW）",
  6: "室谷 MX1642 中綿ヒーターベスト",
  7: "Iwatani FWOH01（屋外専用）",
  9: "XEBEC 16790L ヒーター内蔵ベスト",
  10: "BURTLE 322076M ヒーターフーディ",
  11: "Iwatani CBGFH5 風暖",
  13: "TOYOTOMI EWHCS100PW",
  14: "MEIHO MCH1200 遠赤外線カーボン",
  15: "IRIS ACHSM12AW セラミック",
  16: "Suiden SEH10A1 ヒートスポット",
  19: "Suiden SEH10AH1（温調付き）",
  20: "Suiden SEH15A2（200V）",
  21: "IRIS IWH21208MW オイルヒーター",
};

const displayName = (product: Product) =>
  SHORT_NAMES[product.id] ?? product.model;

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

const layerBadgeClass = (layer: string) => {
  if (layer === "空間") return "bg-orange-100 text-orange-950";
  if (layer === "作業域") return "bg-sky-100 text-sky-950";
  if (layer === "身体") return "bg-emerald-100 text-emerald-950";
  return "bg-gray-100 text-gray-900";
};

const faqs = [
  {
    q: "工場の暖房が効かないのはなぜですか？",
    a: "天井が高く暖気が上へ逃げる、シャッターから冷気が入る、建物の断熱性が低い、作業者が移動するなどが主な原因です。全体暖房だけでなく局所暖房と着用型を組み合わせます。",
  },
  {
    q: "熱風式と遠赤外線はどちらがよいですか？",
    a: "空気・資材・対象物を加温・乾燥するなら熱風式、人や作業域を局所的に暖めるなら遠赤外線が向きます。",
  },
  {
    q: "16kW・20kW・30kWはどう選びますか？",
    a: "移動性と小規模区域は16kW、標準的なバランスは20kW、広い区域や高い熱量が必要なら30kWを比較します。天井高・換気・外気温も含めて判断します。",
  },
  {
    q: "100V遠赤外線ヒーターで倉庫全体を暖められますか？",
    a: "基本的には作業域・人を暖める局所暖房として考えます。広い倉庫全体の室温を一台で上げる用途には向きません。",
  },
  {
    q: "ヒーターベストだけで寒さ対策になりますか？",
    a: "移動作業の補助には有効ですが、作業環境、休憩室、床・手足の冷えなどを同時に改善する必要があります。",
  },
  {
    q: "灯油ヒーターは工場内で使えますか？",
    a: "メーカー指定の用途と使用条件を満たし、十分な換気、火気管理、可燃物との離隔を確保できる場合に限ります。密閉空間では使用しません。",
  },
  {
    q: "屋外専用ヒーターをテント内で使えますか？",
    a: "使用できません。屋外専用品は屋外で使用し、テント、車内、倉庫内などでは使用しないでください。",
  },
  {
    q: "休憩室にはどのヒーターが向きますか？",
    a: "小部屋用セラミックファンヒーター、オイルヒーター、小型遠赤外線などを、部屋の広さ、換気、電源、運用時間に合わせて選びます。",
  },
];

const checkItems = [
  "暖める対象を空間・作業域・身体に分けた",
  "天井高・床面積・開口部を確認した",
  "人の防寒と物の乾燥を分けた",
  "灯油・ガス・100V・200Vを確認した",
  "換気と一酸化炭素対策を決めた",
  "火気・可燃物・溶剤・粉じんを確認した",
  "移動経路と転倒・衝突リスクを確認した",
  "電気回路容量を確認した",
  "ヒーターベストのサイズとバッテリーを管理した",
  "始業前点検・給油・消火・充電担当を決めた",
];

const relatedArticles = [
  {
    href: "/articles/warehouse-heat-countermeasures-large-fans",
    label: "倉庫の暑さ対策に大型扇風機は有効？工場扇・冷風機・スポットクーラーの選び方",
  },
  {
    href: "/articles/workwear-heat-measures-procurement-guide",
    label: "暑さ対策の作業服は“服だけ”で選ばない。法人が失敗しない支給設計",
  },
  {
    href: "/articles/factory-breakroom-locker-room-odor-control",
    label: "工場休憩室・更衣室の臭い対策",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-07",
  dateModified: "2026-08-07",
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
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
    </figure>
  );
}

function CtaGrid({ heading }: { heading?: string }) {
  return (
    <section className="my-8 rounded-2xl border-2 border-orange-300 bg-orange-50 p-5 md:p-6">
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
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 py-3 text-center text-[15px] font-extrabold text-white hover:bg-orange-700"
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
  const name = displayName(product);
  const hasImage = productImageExists(product.code);
  const imageSrc = `${imgBase}/products/${product.code}.webp`;
  const isOutdoor = product.badge.includes("屋外専用");
  const is200V = product.badge.includes("200V") || product.spec.includes("200V");

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
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-950">
              {product.badge}
            </span>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${layerBadgeClass(product.layer)}`}
            >
              {product.layer}層
            </span>
            {isOutdoor ? (
              <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-950">
                屋外専用・屋内禁止
              </span>
            ) : null}
            {is200V ? (
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-950">
                200V確認必須
              </span>
            ) : null}
            {product.spec.includes("100V") && !is200V ? (
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-950">
                100V
              </span>
            ) : null}
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
              <dt className="inline font-bold">仕様：</dt>
              <dd className="inline">{product.spec}</dd>
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
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-bold text-white hover:bg-orange-700"
          >
            商品ページを見る →
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
  const name = displayName(product);
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
              <li>工場 暖房 効かない</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-950">
              作業用品ナビ編集部 / 2026年8月7日更新
            </div>
            <h1 className={cls.h1}>{title}</h1>
            <P>
              工場や倉庫で暖房を強くしているのに、「足元が寒い」「シャッターが開くと一気に冷える」「フォークリフトに乗っていると身体が冷える」と言われることがあります。
              <Mark>工場 暖房 効かない</Mark>
              の原因は、ヒーター能力不足だけではありません。高い天井・広い床・搬入口の開閉で暖気が逃げ、作業者がいる帯まで熱が届かないまま外へ逃げます。
            </P>
            <figure className="mt-7 overflow-hidden rounded-2xl border border-gray-200">
              <div className="relative aspect-video">
                <Image
                  src={heroImage}
                  alt="広い工場で熱風ヒーター・遠赤外線ヒーター・ヒーターベストを使い分けるイメージ"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              </div>
            </figure>
          </header>

          <section className="mt-8 rounded-2xl border-2 border-red-300 bg-red-50 p-5 md:p-6">
            <h2 className="text-lg font-extrabold text-red-950">
              燃焼式ヒーターの安全注意
            </h2>
            <p className="mt-2 text-[15px] leading-7 text-red-950 md:text-[16px]">
              灯油・ガスなどの燃焼式ヒーターは、換気不足により一酸化炭素中毒を起こすおそれがあります。メーカー指定の用途・換気・離隔・燃料条件を守り、屋外専用品を屋内・テント内・車内で使用しないでください。直火式業務機は物の加温・乾燥用であり、家庭用・閉鎖した休憩室用ではありません。
            </p>
          </section>

          <CtaGrid heading="まず商品カテゴリを確認する" />

          <section className="mt-8 rounded-2xl border-2 border-slate-800 bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-bold text-orange-300">30秒でわかる結論</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
              暖房は「空間・作業域・身体」の3層で分ける
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-slate-100 md:text-[17px]">
              工場・倉庫の寒さ対策は、一台で室温全体を上げる考え方だけでは効率が悪くなります。
              <Mark>空間</Mark>（熱風式）・<Mark>作業域</Mark>
              （放射・遠赤外線）・<Mark>身体</Mark>
              （ヒーターベスト）を組み合わせます。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                {
                  layer: "空間",
                  way: "熱風式・ファンヒーター",
                  target: "空気・資材・作業区域",
                  tone: "bg-orange-500",
                },
                {
                  layer: "作業域",
                  way: "放射式・遠赤外線",
                  target: "定位置作業者・対象物",
                  tone: "bg-sky-500",
                },
                {
                  layer: "身体",
                  way: "ヒーターベスト等",
                  target: "移動作業者",
                  tone: "bg-emerald-500",
                },
              ].map((item) => (
                <div
                  key={item.layer}
                  className="rounded-xl border border-white/20 bg-white/5 p-4"
                >
                  <span
                    className={`inline-flex rounded-full ${item.tone} px-3 py-1 text-xs font-bold text-white`}
                  >
                    {item.layer}
                  </span>
                  <p className="mt-3 text-base font-bold">{item.way}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-200">
                    {item.target}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-300">
            <div className="overflow-x-auto">
              <table className={`${cls.table} min-w-[720px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>寒さの状態</th>
                    <th className={cls.th}>優先する対策</th>
                    <th className={cls.th}>主な商品</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>資材・空気・作業場所を短時間で加温したい</td>
                    <td className={cls.td}>
                      <Mark>熱風式</Mark>
                    </td>
                    <td className={cls.td}>MPH16N・20N・30N、HG50D</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>風が入り、空気を暖めても逃げる</td>
                    <td className={cls.td}>
                      <Mark>放射・遠赤外線</Mark>
                    </td>
                    <td className={cls.td}>MPH20FN、MCH1200、SEHシリーズ</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>作業者が広い範囲を移動する</td>
                    <td className={cls.td}>
                      <Mark>着用型</Mark>
                    </td>
                    <td className={cls.td}>MX1642、XEBEC、BURTLE</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>屋外で電源が取れない</td>
                    <td className={cls.td}>屋外専用ガス式</td>
                    <td className={cls.td}>FWOH01</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>詰所・休憩室だけ寒い</td>
                    <td className={cls.td}>小部屋用</td>
                    <td className={cls.td}>CBGFH5、セラミック、オイルヒーター</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <P>
            暖房器具を増やす前に、「空気を暖めたいのか」「人を暖めたいのか」「物を加温・乾燥したいのか」を決めることが重要です。
          </P>

          <ProductStack ids={[5, 14, 6]} priorityFirst />

          <H2 id="causes">工場・倉庫で暖房が効かない5つの原因</H2>
          <SectionImage
            src={`${imgBase}/factory-heating-loss-causes.jpg`}
            alt="高い天井・シャッター・冷たい床で暖房が効きにくい工場"
          />

          <H3>1. 天井が高く、暖気が上へ逃げる</H3>
          <P>
            暖かい空気は上へ上昇します。天井の高い工場で温風を出すと、天井付近は暖かくても、作業者の足元は冷たいままになることがあります。この場合、空気全体を暖めるだけでなく、作業者へ直接熱を届ける遠赤外線・放射式を組み合わせます。
          </P>

          <H3>2. シャッター・搬入口から冷気が入る</H3>
          <P>
            物流倉庫や工場では、トラックやフォークリフトの出入りで大型シャッターを開けます。開くたびに暖気が外へ逃げるため、全体暖房だけでは光熱費が増えやすくなります。搬入口付近は、ビニールカーテン等で冷気を区切る、定位置作業へ遠赤外線、移動作業者へヒーターベスト、開放時間を減らす運用の組み合わせが現実的です。
          </P>

          <H3>3. 工場全体を暖める必要がない</H3>
          <P>
            作業者がいるのは検品台、組立台、整備場所など一部だけというケースがあります。使っていない通路・保管エリアまで暖めると、エネルギーの無駄が大きくなります。作業域を囲い、遠赤外線・放射式で局所暖房する方法が向きます。
          </P>

          <H3>4. 床・建物自体が冷えている</H3>
          <P>
            コンクリート床、金属屋根、薄い外壁は、身体から熱を奪います。室温だけを上げても足元の冷えが残る場合は、断熱マット、防寒靴、作業位置の変更も必要です。
          </P>

          <H3>5. 作業者が移動し続ける</H3>
          <P>
            倉庫ピッキング、巡回、運搬、フォークリフト、屋外と屋内を往復する作業では、固定ヒーターの前に留まれません。ヒーターベストなどを組み合わせ、身体へ暖かさを持たせます。
          </P>

          <H2 id="three-layers">独自の選び方｜空間・作業域・身体の3層暖房</H2>
          <H3>第1層：空間を暖める</H3>
          <P>
            空気や資材、作業区域を短時間で暖めたい場合は、熱風式・ファンヒーターを検討します。工事現場の加温、塗料・接着剤の乾燥、コンクリート養生、工場・倉庫の限定区域、仮設休憩室などに向きます。
          </P>
          <H3>第2層：作業域を暖める</H3>
          <P>
            遠赤外線・放射式は、空気を暖めるより、人や物へ熱を届ける考え方です。高天井の工場、搬入口付近、検品・梱包・組立など定位置作業、風が入りやすい半屋外、静音性が必要な場所に向きます。
          </P>
          <H3>第3層：身体を暖める</H3>
          <P>
            ヒーターベストは、暖房器具の熱が届かない移動作業者へ向きます。倉庫ピッキング、フォークリフト、巡回・警備、荷役、屋外と屋内を行き来する作業が典型です。ただし着用型だけで会社の寒さ対策を終わらせるのではなく、作業環境改善と併用します。
          </P>

          <H2 id="compare-types">熱風式・放射式・遠赤外線の違い</H2>
          <div className="overflow-hidden rounded-2xl border border-gray-300">
            <div className="overflow-x-auto">
              <table className={`${cls.table} min-w-[780px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>方式</th>
                    <th className={cls.th}>暖める対象</th>
                    <th className={cls.th}>強み</th>
                    <th className={cls.th}>注意点</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["熱風式直火形", "空気・物", "高出力、即暖、乾燥", "換気、火気、騒音、燃料"],
                    ["放射式直火形", "物・局所", "必要な場所へ熱を届ける", "換気、高温部、離隔"],
                    ["電気遠赤外線", "人・作業域", "静音、燃焼ガスなし、局所暖房", "電源容量、照射範囲"],
                    ["ガス式", "小空間・屋外", "電源不要、可搬", "使用場所の厳守、換気"],
                    ["着用型", "作業者", "移動中も使える", "電池、洗濯、作業適合"],
                  ].map((row) => (
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
          </div>

          <H2 id="hot-air">空間・対象物を暖める熱風式業務用ヒーター</H2>
          <SectionImage
            src={`${imgBase}/industrial-hot-air-heater-drying.jpg`}
            alt="熱風式業務用ヒーターで資材を加温・乾燥するイメージ"
          />
          <P>
            MPHシリーズの熱風式直火形は、温めた空気を直接風で送る業務用機です。メーカーは物の加温・乾燥用として案内しており、家庭用暖房ではありません。必ず換気し、密閉空間や休憩室暖房として使用しないでください。
          </P>

          <H3>MPH16N・MPH20N・MPH30N比較表</H3>
          <div className="overflow-hidden rounded-2xl border border-gray-300">
            <div className="overflow-x-auto">
              <table className={`${cls.table} min-w-[860px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>型式</th>
                    <th className={cls.th}>熱出力</th>
                    <th className={cls.th}>タンク</th>
                    <th className={cls.th}>連続運転</th>
                    <th className={cls.th}>質量</th>
                    <th className={cls.th}>向き</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>
                      <ProductTableCell product={byId[1]} label="MPH16N" />
                    </td>
                    <td className={cls.td}>
                      <Mark>16kW</Mark>
                    </td>
                    <td className={cls.td}>14L</td>
                    <td className={cls.td}>約8.8時間</td>
                    <td className={cls.td}>15.8kg</td>
                    <td className={cls.td}>移動性・小〜中規模</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      <ProductTableCell product={byId[5]} label="MPH20N" />
                    </td>
                    <td className={cls.td}>
                      <Mark>20kW</Mark>
                    </td>
                    <td className={cls.td}>22L</td>
                    <td className={cls.td}>約10.7時間</td>
                    <td className={cls.td}>18.4kg</td>
                    <td className={cls.td}>標準バランス</td>
                  </tr>
                  <tr>
                    <td className={cls.td}>
                      <ProductTableCell product={byId[4]} label="MPH30N" />
                    </td>
                    <td className={cls.td}>
                      <Mark>30kW</Mark>
                    </td>
                    <td className={cls.td}>38L</td>
                    <td className={cls.td}>約12.7時間</td>
                    <td className={cls.td}>22.5kg</td>
                    <td className={cls.td}>広い区域・高熱量</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <ul className={cls.list}>
            <li>
              <strong>MPH16N</strong>：持ち運び優先、小〜中規模、保管スペースを抑えたい場合
            </li>
            <li>
              <strong>MPH20N</strong>：16kWでは不足するが30kWほど大きくしたくない標準配備機
            </li>
            <li>
              <strong>MPH30N</strong>：広い現場、強い冷え込み、長時間運転を重視する場合
            </li>
          </ul>
          <P>
            高出力ほど優れているわけではありません。大きすぎると可燃物との離隔確保、燃料消費、本体移動、換気量の確保が難しくなります。必要な熱量と安全な設置場所を合わせて選びます。
          </P>

          <ProductStack ids={[1, 5, 4, 2]} />

          <H2 id="radiant">作業域を暖める放射式・遠赤外線ヒーター</H2>
          <SectionImage
            src={`${imgBase}/infrared-spot-heating-workstation.jpg`}
            alt="遠赤外線ヒーターで工場の定位置作業者を局所暖房するイメージ"
          />
          <P>
            熱風で空気を広げるより、必要な場所や対象物・定位置作業者へ熱を届けたい場合は、放射式直火形や電気遠赤外線を比較します。100V機は導入しやすく、200V機は固定作業場で電源条件を満たせる場合に検討します。
          </P>
          <ProductStack ids={[3, 14, 16, 19, 20]} />

          <H2 id="wearable">移動作業者にはヒーターベストを組み合わせる</H2>
          <SectionImage
            src={`${imgBase}/heated-vest-mobile-warehouse-work.jpg`}
            alt="ヒーターベストを着用して倉庫内を移動する作業者"
          />
          <P>
            固定ヒーターは、その前にいる人しか暖められません。広い倉庫、屋外ヤード、荷役、巡回では、着用型暖房が効果的です。法人導入では、バッテリー付属有無、連続使用時間、温度切替、サイズ在庫、洗濯方法、発熱部位置、フード・コードの巻き込まれ、火気周辺での可否、充電場所と担当者を確認します。
          </P>
          <P>
            着用型は身体の寒さを補助しますが、床や手すりの凍結、指先の冷え、資材・機械の低温、休憩室の寒さは解決しません。作業環境改善と併用してください。
          </P>
          <ProductStack ids={[6, 9, 10]} />

          <H2 id="outdoor">屋外・仮設・停電時のヒーター</H2>
          <SectionImage
            src={`${imgBase}/outdoor-worker-heater-winter.jpg`}
            alt="屋外専用ヒーターで冬の屋外待機場所を暖めるイメージ"
          />
          <P>
            FWOH01は屋外専用ヒーターです。電源が取りにくい屋外待機、イベント、屋外作業などで比較できます。ただし
            <Mark>屋外専用</Mark>
            は重要な使用条件です。テント内・車内・倉庫内・仮設小屋内・換気が悪い半密閉空間では使用しません。
          </P>
          <P>
            CBGFH5はカセットガスの燃焼熱から電気を作り、ファンを回すコードレスファンヒーターです。電源がない小空間や停電時の選択肢になりますが、広い工場の主暖房には向きません。使用可能な場所・換気・ボンベ交換・可燃物との距離・連続運転時間を取扱説明書で確認します。
          </P>
          <ProductStack ids={[7, 11]} />

          <H2 id="small-room">詰所・休憩室・事務室の小型暖房</H2>
          <P>
            工場フロアと休憩室では、ヒーターの選び方が異なります。人感センサー付きセラミック、オイルヒーター、小型遠赤外線は更衣室・休憩室・事務所などで比較します。粉じん、油、溶剤、水分が多い工場フロアへ家庭・小部屋用ヒーターを置く場合は、使用条件を確認してください。オイルヒーターは即暖性が高くないため、開放的な倉庫やシャッター前には向きません。
          </P>
          <ProductStack ids={[15, 21, 13]} />

          <H2 id="kw-select">16・20・30kWと100V/200Vの選び方</H2>
          <P>
            業務用熱風式は、数字が大きいほど熱出力が上がります。ただし必要能力は床面積だけで決まりません。天井高、屋外か屋内か、シャッター開放、換気量、外気温、暖める対象物、作業時間、乾燥・養生条件、本体から対象までの距離を確認します。
          </P>
          <ul className={cls.list}>
            <li>
              移動性・小規模：<Mark>16kW</Mark>
            </li>
            <li>
              標準バランス：<Mark>20kW</Mark>
            </li>
            <li>
              広い区域・高い熱量：<Mark>30kW</Mark>
            </li>
          </ul>
          <H3>100V</H3>
          <P>
            一般的な電源で使いやすく、移動・複数拠点配備に向きます。同一回路で複数台使うとブレーカーが落ちることがあるため、延長コードの定格・長さ・巻いた状態での使用に注意し、1200W級を他機器と同時使用する場合は回路を確認します。
          </P>
          <H3>200V</H3>
          <P>
            高出力機を選びやすく、固定作業場の局所暖房に向きます。対応コンセント・回路が必要で、電気担当者による確認が必須です。100Vと同じ感覚で移動できません。
          </P>

          <H2 id="by-site">現場別おすすめ構成</H2>
          <div className="overflow-hidden rounded-2xl border border-gray-300">
            <div className="overflow-x-auto">
              <table className={`${cls.table} min-w-[820px]`}>
                <thead>
                  <tr>
                    <th className={cls.th}>現場</th>
                    <th className={cls.th}>おすすめ構成</th>
                    <th className={cls.th}>代表商品</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={cls.td}>搬入口・トラックバース</td>
                    <td className={cls.td}>
                      冷気遮断＋定位置遠赤外線＋着用型。屋外待機は屋外専用
                    </td>
                    <td className={cls.td}>
                      <div className="space-y-3">
                        <ProductTableCell product={byId[14]} label="MCH1200" />
                        <ProductTableCell product={byId[6]} label="MX1642" />
                        <ProductTableCell product={byId[7]} label="FWOH01" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>検品・梱包・組立台</td>
                    <td className={cls.td}>
                      100V遠赤外線。背面または斜め前から照射し、梱包材との距離を確保
                    </td>
                    <td className={cls.td}>
                      <div className="space-y-3">
                        <ProductTableCell product={byId[16]} label="SEH10A1" />
                        <ProductTableCell product={byId[19]} label="SEH10AH1" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>塗装・接着・養生・乾燥</td>
                    <td className={cls.td}>
                      熱風式／放射式。人の防寒とは別に対象物温度・換気・火気を管理
                    </td>
                    <td className={cls.td}>
                      <div className="space-y-3">
                        <ProductTableCell product={byId[5]} label="MPH20N" />
                        <ProductTableCell product={byId[2]} label="HG50D" />
                        <ProductTableCell product={byId[3]} label="MPH20FN" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>フォークリフト・ピッキング</td>
                    <td className={cls.td}>
                      着用型＋防寒手袋・足元防寒。通路への固定機設置は衝突リスクに注意
                    </td>
                    <td className={cls.td}>
                      <div className="space-y-3">
                        <ProductTableCell product={byId[9]} label="XEBEC 16790L" />
                        <ProductTableCell product={byId[10]} label="BURTLE 322076M" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={cls.td}>詰所・休憩室</td>
                    <td className={cls.td}>
                      小部屋用。換気できる場合のみガスファンヒーターも比較
                    </td>
                    <td className={cls.td}>
                      <div className="space-y-3">
                        <ProductTableCell product={byId[15]} label="ACHSM12AW" />
                        <ProductTableCell product={byId[21]} label="IWH21208MW" />
                        <ProductTableCell product={byId[11]} label="CBGFH5" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <H2 id="safety">安全に使うための確認</H2>
          <SectionImage
            src={`${imgBase}/workplace-heater-procurement-safety.jpg`}
            alt="法人担当者が工場用ヒーターと安全条件を比較するイメージ"
          />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <h3 className="text-lg font-extrabold text-red-950">燃焼式</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7 text-red-950">
                <li>必ず換気</li>
                <li>一酸化炭素警報器の検討</li>
                <li>灯油はJIS1号／ガソリン禁止</li>
                <li>可燃物との離隔・水平設置</li>
                <li>給油時は停止・消火</li>
                <li>始業前点検・終業時消火確認</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-lg font-extrabold text-amber-950">電気式</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7 text-amber-950">
                <li>回路容量・ブレーカー</li>
                <li>延長コード定格</li>
                <li>コード損傷</li>
                <li>水・粉じん・油</li>
                <li>転倒OFF・可燃物距離</li>
                <li>
                  <Mark>100V/200V</Mark>の電源条件
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-lg font-extrabold text-emerald-950">着用型</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-7 text-emerald-950">
                <li>充電池の損傷</li>
                <li>洗濯方法</li>
                <li>異常発熱</li>
                <li>火気・溶接周辺</li>
                <li>巻き込まれ・サイズ</li>
                <li>充電担当者</li>
              </ul>
            </div>
          </div>

          <H2 id="mistakes">よくある失敗</H2>
          <ul className={cls.list}>
            <li>
              <strong>工場全体を小型電気ヒーターで暖める</strong>
              ：1000〜1200W級は局所用。広い空間全体には向きません。
            </li>
            <li>
              <strong>高出力ヒーターを置けば解決すると思う</strong>
              ：シャッター開放や暖気の天井逃げがある状態では効率が悪くなります。
            </li>
            <li>
              <strong>直火ヒーターを休憩用に使う</strong>
              ：メーカーが物の加温・乾燥用としている業務機を、家庭用や閉鎖した休憩室用に使わないでください。
            </li>
            <li>
              <strong>屋外専用品を囲う</strong>
              ：テント・シート・車内などで囲うと、燃焼ガス・火災・ボンベ加熱の危険があります。
            </li>
            <li>
              <strong>ヒーターベストのバッテリーを管理しない</strong>
              ：充電切れ・サイズ不合・洗濯後故障など、運用ルール不足が起きやすいです。
            </li>
          </ul>

          <H2 id="checklist">法人導入チェックリスト</H2>
          <div className="grid gap-3 sm:grid-cols-2">
            {checkItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-[15px] font-semibold text-gray-900"
              >
                □ {item}
              </div>
            ))}
          </div>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <summary className={`${cls.faqQ} cursor-pointer list-none`}>
                  {item.q}
                </summary>
                <p className="mt-3 text-[16px] leading-8 text-gray-900">{item.a}</p>
              </details>
            ))}
          </div>

          <H2 id="summary">まとめ</H2>
          <P>
            工場・倉庫で暖房が効かない場合は、暖房能力を上げる前に、寒さの原因と暖める対象を整理します。空間・対象物は熱風式、定位置作業・半屋外は放射式・遠赤外線、移動作業者はヒーターベスト、屋外・電源なしは屋外専用ガス式、詰所・休憩室は小部屋用暖房。一台ですべてを解決しようとせず、
            <Mark>空間・作業域・身体</Mark>
            の3層を組み合わせることが、暖房効率と作業者の体感を改善する近道です。
          </P>

          <CtaGrid heading="用途と安全条件を確認して比較する" />

          <section className="mt-10 rounded-2xl border border-gray-300 bg-gray-50 p-5 md:p-6">
            <h3 className={cls.ctaH3}>関連記事</h3>
            <ul className="mt-3 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="font-bold text-gray-900 underline underline-offset-4"
                  >
                    {a.label}
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
