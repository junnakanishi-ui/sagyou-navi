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

const SLUG = "bear-spray-environment-ministry-requirements-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "クマ撃退スプレーの環境省推奨要件｜7.5m・6秒・CRCなど6項目を解説【2026年】";
const H1 =
  "環境省のクマ撃退スプレー推奨要件とは？6項目と選び方・性能比較【2026年版】";
const SHORT_TITLE = "クマ撃退スプレーの環境省推奨要件";
const DESCRIPTION =
  "2026年8月に環境省が公表したクマ撃退スプレーの推奨要件を、CRC濃度1.0〜2.0％程度、噴射距離7.5m程度以上、噴射時間6秒程度以上、霧状噴射、安全装置・携行ケース、使用期限まで分かりやすく解説。熊よけスプレーを価格だけで選ばないための比較ポイントを整理します。";
const PUBLISHED = "2026-08-28";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const ENV_PDF =
  "https://www.env.go.jp/nature/choju/effort/effort12/kuma-oshirase-r080825-1.pdf";
const CAA_URL =
  "https://www.caa.go.jp/policies/policy/consumer_safety/caution/caution_087/";

type BearProduct = (typeof productData.relatedBearProducts)[number];
type PestProduct = (typeof productData.relatedPestProducts)[number];
type VerifyStatus = "confirmed" | "needs-docs" | "separate";

const comparisonProduct = productData.comparisonProduct;
const bearProducts = productData.relatedBearProducts as BearProduct[];
const pestProducts = productData.relatedPestProducts as PestProduct[];
const { bear: BEAR_CTA, pest: PEST_CTA } = productData.ctas;

const holster = bearProducts[0];
const practiceSpray = bearProducts[1];
const alarm = bearProducts[2];
const whistle = bearProducts[3];
const bell = bearProducts[4];
const compareSprays = bearProducts.slice(5);

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
        url: `${SITE_URL}${IMG("bear-spray-environment-requirements-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "山間部の作業前に熊撃退スプレーと安全装備を確認するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("bear-spray-environment-requirements-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("bear-spray-environment-requirements-hero.webp")}`],
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

const requirementRows = [
  {
    category: "有効成分",
    requirement: "CRC濃度1.0〜2.0％程度",
    where: "商品ラベル・仕様表",
  },
  {
    category: "噴射距離",
    requirement: "7.5m程度以上",
    where: "「飛距離」「噴射距離」",
  },
  {
    category: "噴射時間",
    requirement: "6秒程度以上",
    where: "「連続噴射時間」",
  },
  {
    category: "噴射パターン",
    requirement: "霧状（ミスト状）・円錐状・微細粒子",
    where: "商品説明・噴射試験動画",
  },
  {
    category: "操作・安全",
    requirement: "手探りで方向判別、安全装置、専用携行ケース",
    where: "ノズル構造・セーフティ・ホルスター",
  },
  {
    category: "期限・表示",
    requirement: "使用期限、性能、使用手順、保管・誤噴射・廃棄等",
    where: "缶・箱・商品ページ",
  },
];

const aj260CompareRows: {
  item: string;
  envReq: string;
  publicInfo: string;
  status: VerifyStatus;
  note: string;
}[] = [
  {
    item: "有効成分",
    envReq: "CRC 1.0〜2.0％程度",
    publicInfo: "主要カプサイシノイド2.0％",
    status: "needs-docs",
    note: "数値は推奨範囲上限側。CRC表記との定義は最新資料で確認",
  },
  {
    item: "噴射距離",
    envReq: "7.5m程度以上",
    publicInfo: "約7.6〜9.1m",
    status: "confirmed",
    note: "公開情報上で数値要件を確認",
  },
  {
    item: "噴射時間",
    envReq: "6秒程度以上",
    publicInfo: "約9秒",
    status: "confirmed",
    note: "公開情報上で数値要件を確認",
  },
  {
    item: "噴射パターン",
    envReq: "霧状・円錐状・微細粒子",
    publicInfo: "霧状",
    status: "needs-docs",
    note: "霧状は確認。円錐・粒径はメーカー資料で最終確認",
  },
  {
    item: "安全装置",
    envReq: "確実な固定＋スムーズ解除",
    publicInfo: "ストッパーを引き抜きレバー操作",
    status: "needs-docs",
    note: "安全装置あり。手探り方向判別は資料確認",
  },
  {
    item: "携行ケース",
    envReq: "専用ケース等を備える",
    publicInfo: "別売専用ホルスター対応",
    status: "separate",
    note: "本体標準付属ではないためセット購入を検討",
  },
  {
    item: "使用期限",
    envReq: "検証に基づく期限表示",
    publicInfo: "商品画像にEXP表示",
    status: "confirmed",
    note: "購入品ごとに期限を確認",
  },
];

const corporateChecklist = [
  "熊用・撃退用の商品を選んだ",
  "CRC等の有効成分表示を確認した",
  "噴射距離を確認した",
  "噴射時間を確認した",
  "霧状噴射を確認した",
  "安全装置の解除方法を確認した",
  "専用ホルスターを用意した",
  "すぐ取り出せる装着位置を決めた",
  "使用期限を台帳管理した",
  "高温になる車内等へ放置しないルールを決めた",
  "練習用スプレー等で操作訓練した",
  "使いかけを本番用備蓄へ戻さない",
  "誤噴射時の洗浄方法を共有した",
  "対人使用禁止を周知した",
  "事前散布をしないことを周知した",
];

const faqs = [
  {
    q: "環境省が「おすすめ熊スプレー」を認定したのですか？",
    a: "環境省が公表したのは製品の性能に係る推奨要件です。特定商品を一律に「環境省認定品」とする制度として説明するのは適切ではありません。購入時は個々の商品仕様を推奨要件と照合してください。",
  },
  {
    q: "CRC濃度は高いほど良いですか？",
    a: "環境省は1.0〜2.0％程度を目安としています。2.0％を超える高濃度で撃退効果がさらに上がるかは明らかでなく、暴露時の健康リスクが高まる可能性も示されています。",
  },
  {
    q: "7.5mより短いスプレーではダメですか？",
    a: "環境省の推奨要件は7.5m程度以上です。推奨要件を満たさない製品の効果を一律に否定するものではありませんが、購入者が製品を選ぶ際の判断目安として7.5m程度以上が示されています。",
  },
  {
    q: "対人用の催涙スプレーを熊に使えますか？",
    a: "環境省は、対人用とクマ撃退用では成分や噴射パターン等の求められる設計が異なるため、流用しないよう明記しています。",
  },
  {
    q: "テントの周りへ熊スプレーを撒けば熊よけになりますか？",
    a: "推奨されません。環境省は、臭いがクマの好奇心を刺激して誘引する可能性を指摘しています。",
  },
  {
    q: "ホルスターは必要ですか？",
    a: "環境省は、腰や胸に確実に装着できる専用携行ケース等を備えることを推奨要件に含めています。リュックの中では緊急時に間に合わない可能性があります。",
  },
];

const RELATED = [
  {
    href: "/articles/farm-forest-bear-safety",
    label:
      "農作業・山林作業の熊対策用品｜鈴・ホイッスル・スプレー・電気柵の備え",
  },
];

function productImageExists(file: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      file
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

function Figure({ src, alt }: { src: string; alt: string }) {
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

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-gray-900 underline underline-offset-4"
    >
      {children}
    </a>
  );
}

function StatusBadge({ status }: { status: VerifyStatus }) {
  const map = {
    confirmed: {
      label: "確認済",
      className: "bg-emerald-100 text-emerald-950",
    },
    "needs-docs": {
      label: "要追加資料",
      className: "bg-amber-100 text-amber-950",
    },
    separate: {
      label: "別売対応",
      className: "bg-sky-100 text-sky-950",
    },
  } as const;
  const { label, className } = map[status];
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold ${className}`}
    >
      {label}
    </span>
  );
}

function ProductLink({ product }: { product: BearProduct | PestProduct }) {
  const hasImage = productImageExists(product.imageFile);
  return (
    <li>
      <ExtLink
        href={product.url}
        className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 no-underline hover:border-gray-400"
      >
        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
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
          <span className="block font-black leading-6 text-gray-900 group-hover:underline">
            {product.name}
          </span>
          <span className="mt-1 block text-[14px] leading-6 text-gray-900">
            {product.role}
          </span>
        </span>
      </ExtLink>
    </li>
  );
}

function CtaBlock({
  heading,
  sub,
  showPest = false,
}: {
  heading: string;
  sub: string;
  showPest?: boolean;
}) {
  return (
    <section className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">{heading}</h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">{sub}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ExtLink
          href={BEAR_CTA}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-extrabold text-white hover:bg-orange-500"
        >
          熊対策アイテム一覧 →
        </ExtLink>
        {showPest && (
          <ExtLink
            href={PEST_CTA}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-[16px] font-extrabold text-white hover:bg-orange-500"
          >
            害獣対策アイテム一覧 →
          </ExtLink>
        )}
      </div>
    </section>
  );
}

export default function Page() {
  const aj260HasImage = productImageExists(comparisonProduct.imageFile);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SiteHeader />
      <main className="bg-white">
        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <nav className="pt-6 text-sm text-gray-800">
            <Link href="/" className="hover:underline">
              ホーム
            </Link>
            <span className="mx-2">›</span>
            <Link href="/articles" className="hover:underline">
              記事一覧
            </Link>
            <span className="mx-2">›</span>
            <span>{SHORT_TITLE}</span>
          </nav>

          <p className={`${cls.meta} mt-4`}>
            公開日：{PUBLISHED.replace(/-/g, "/")} ｜ 読了目安：約18分
          </p>

          <p className="mt-4 text-sm font-bold text-emerald-800">
            2026年8月25日 環境省 推奨要件公表
          </p>

          <h1 className={cls.h1}>{H1}</h1>

          <Figure
            src={IMG("bear-spray-environment-requirements-hero.webp")}
            alt="山間部の作業前に熊撃退スプレーと安全装備を確認するイメージ"
          />

          <P>
            2026年8月25日、環境省は「クマ撃退スプレーの性能に係る推奨要件」を公表しました。
            熊よけスプレー、熊スプレー、クマ撃退スプレー。ネット上ではさまざまな名前の商品が販売されていますが、これまで国内には「クマ撃退スプレーならこの性能が必要」という統一的な公的ルールがありませんでした。
          </P>
          <P>
            環境省は、国内で流通する製品の中に、対人用催涙スプレーをクマ対策用として販売するものや、噴射距離・噴射時間などの性能に差がある製品が確認されたことを背景に、
            <strong>人命を守るために必要と考えられる性能の目安</strong>
            を6つの項目に整理しました。
          </P>
          <P>
            この記事では、環境省資料を購入者目線で整理し、
            <strong>商品ページのどこを見れば「クマ撃退用として選びやすいか」</strong>
            を一枚の表で確認できるようにします。一次情報は
            <SourceLink href={ENV_PDF}>
              環境省の公表資料（PDF）
            </SourceLink>
            、
            <SourceLink href={CAA_URL}>消費者庁の注意喚起</SourceLink>
            を参照してください。
          </P>

          <section className="my-10 rounded-2xl border-4 border-emerald-700 bg-emerald-50 p-6 md:p-8">
            <H2>先に結論｜環境省が見るのは「辛さ」だけではありません</H2>
            <P>
              クマ撃退スプレーを選ぶときに、環境省資料で特に確認したいのは次の6カテゴリです。
            </P>
            <ul className={cls.list}>
              <li>
                有効成分：<Mark>CRC濃度1.0〜2.0％程度</Mark>
              </li>
              <li>
                噴射距離：<Mark>7.5m程度以上</Mark>
              </li>
              <li>
                噴射時間：<Mark>6秒程度以上</Mark>
              </li>
              <li>
                噴射パターン：霧状（ミスト状）で円錐状に広がる
              </li>
              <li>
                操作・安全：方向判別、安全装置、<strong>専用携行ケース</strong>
              </li>
              <li>使用期限・表示：期限と客観性能、使い方、注意事項が確認できる</li>
            </ul>
            <div className="mt-5 rounded-xl border-2 border-amber-500 bg-amber-50 p-5 text-gray-900">
              <p className="font-black text-lg">誤解防止</p>
              <P>
                <strong>
                  「環境省認定の熊スプレー一覧」ができたわけではありません。
                </strong>
                環境省が示したのは、製品を製造・販売・購入するときに参考にする「推奨要件」です。「環境省認定」「環境省お墨付き」「国が認めた最強」といった言い換えは避け、商品ごとに6項目を確認するのが正確です。
              </P>
            </div>
          </section>

          <CtaBlock
            heading="熊対策用品を確認する"
            sub="スプレー・ホルスター・練習用品・音対策など、熊対策アイテムを一覧で確認できます。"
          />

          <H2 id="why-now">なぜ今、環境省が推奨要件を出したのか</H2>
          <P>
            環境省によると、2025年度は東日本を中心にクマが大量出没し、人身被害が過去最多となりました。一方、国内で「クマ撃退スプレー」「熊よけスプレー」として流通する商品には統一規格がなく、対人用催涙スプレーの流用や、模造品、性能差の大きい商品が確認されていました。
          </P>
          <P>
            クマ撃退スプレーは、近距離でクマと遭遇したときの危険回避手段の一つです。しかし、何でもよいわけではありません。だからこそ、2026年8月に初めて、選ぶための目安が整理されたというわけです。
          </P>

          <H2 id="not-same">まず知っておきたい｜クマ撃退スプレーと「熊よけ」は同じではない</H2>
          <P>
            環境省が定義するクマ撃退スプレーは、
            <strong>
              近距離で遭遇したクマの攻撃や接近を一時的に抑止するため、刺激物質を噴射する製品
            </strong>
            です。
          </P>
          <H3>遭遇を避けるための対策</H3>
          <ul className={cls.list}>
            <li>熊鈴</li>
            <li>ホイッスル</li>
            <li>アラーム</li>
            <li>行動前の出没情報確認</li>
          </ul>
          <H3>敷地への侵入を減らす対策</H3>
          <ul className={cls.list}>
            <li>電気柵</li>
            <li>防獣フェンス</li>
            <li>生ゴミ管理</li>
          </ul>
          <H3>近距離で遭遇してしまった時の対策</H3>
          <ul className={cls.list}>
            <li>クマ撃退スプレー</li>
          </ul>
          <P>
            クマ撃退スプレーをテントや荷物の周囲へ事前に吹いて「忌避剤」のように使うことは推奨されていません。環境省は、噴射後の臭いがかえってクマの好奇心を刺激する可能性を指摘しています。
          </P>

          <Figure
            src={IMG("bear-countermeasure-three-layer.webp")}
            alt="熊鈴・電気柵・撃退スプレーなど役割の異なる対策を示すイメージ"
          />

          <section
            id="six-items"
            className="my-14 scroll-mt-24 rounded-2xl border-4 border-gray-900 bg-gradient-to-b from-gray-50 to-white p-6 md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-gray-800">
              この記事の最重要コンテンツ
            </p>
            <H2>環境省の推奨要件6項目を一覧で確認</H2>
            <P>
              購入時に商品ページのどこを見ればよいかまで含め、6項目を一枚の表にまとめました。「CRCが高いからOK」「10m飛ぶからOK」のように、1項目だけで判断しないことがポイントです。
            </P>
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>チェック項目</th>
                    <th className={cls.th}>環境省の推奨要件</th>
                    <th className={cls.th}>購入時に見る場所</th>
                  </tr>
                </thead>
                <tbody>
                  {requirementRows.map((row) => (
                    <tr key={row.category}>
                      <td className={`${cls.td} font-bold`}>{row.category}</td>
                      <td className={cls.td}>{row.requirement}</td>
                      <td className={cls.td}>{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <H2 id="crc">1. CRC濃度1.0〜2.0％程度とは？</H2>
          <P>
            CRCは、Capsaicin and Related Capsaicinoidsの略で、カプサイシンと関連カプサイシノイドの合計濃度を指します。環境省は、クマへの撃退効果と誤噴射時の健康影響のバランスから、
            <Mark>CRC濃度1.0〜2.0％程度</Mark>を目安としています。
          </P>
          <P>
            「濃ければ濃いほど強い」とは限りません。環境省資料では、2.0％を超えて濃度を高くしても撃退効果が向上するかは明らかではなく、暴露時の健康リスクが高まる可能性があるため、1.0〜2.0％程度を目安としています。
          </P>
          <H3>SHUだけで比べない</H3>
          <P>
            商品によっては「200万SHU」「300万SHU」といった辛さ表示があります。ただし環境省は、製品の客観的比較ではCRC濃度の％表示を基本としています。SHUが書いてあるかではなく、
            <strong>完成品のカプサイシノイド濃度が明確か</strong>
            を見るほうが選びやすくなります。
          </P>

          <H2 id="distance">2. 噴射距離は7.5m程度以上</H2>
          <Figure
            src={IMG("bear-spray-safe-distance-concept.webp")}
            alt="熊撃退スプレーで必要な距離の考え方を示す安全教育イメージ"
          />
          <P>
            環境省の推奨要件は、常温・無風条件で
            <Mark>7.5m程度以上</Mark>です。クマは非常に速く接近します。距離が短い製品では、クマが有効範囲に入った時点で使用者との距離も近くなります。
          </P>
          <P>
            そのため「何m飛ぶか」は見栄えのための数字ではなく、
            <strong>危険回避の余裕を作る性能</strong>です。
          </P>

          <H2 id="duration">3. 噴射時間は6秒程度以上</H2>
          <P>
            推奨要件は<Mark>6秒程度以上の連続噴射</Mark>
            です。実際の使用事例では1〜3秒程度の噴射でクマが反転・逃走した例もありますが、一度ひるんだ後に再接近する場合もあります。一発で全部使い切るための6秒ではありません。
          </P>
          <P>
            状況に応じて複数回噴射できる余裕を持つことが重要です。消費者庁も、原則として使いかけを緊急用に再利用せず、事前に操作練習を行うことを案内しています。
          </P>

          <H2 id="pattern">4. 「霧状」に広がることも重要</H2>
          <P>
            環境省は、噴射パターンとして
            <strong>
              霧状（ミスト状）で円錐状に広がり、空気中に滞留しやすい微細な粒子
            </strong>
            を求めています。緊急時に、細い一直線の液体を正確に熊の目だけへ当てるのは簡単ではありません。
          </P>

          <H2 id="safety-holster">5. 安全装置とホルスターも「性能」の一部</H2>
          <Figure
            src={IMG("bear-spray-holster-carry.webp")}
            alt="熊撃退スプレーを腰部の専用ホルスターに装着するイメージ"
          />
          <P>環境省の推奨要件で見落とされやすいのがここです。</P>
          <ul className={cls.list}>
            <li>手探りでも安全装置を外せる</li>
            <li>噴射方向を判別できる</li>
            <li>歩行中や藪への接触で安全装置が簡単に外れない</li>
            <li>意図した時にはスムーズに解除できる</li>
            <li>腰や胸に確実に装着できる専用携行ケースを備える</li>
          </ul>
          <P>
            性能が良いスプレーを買っても、リュックの底に入れていては意味がありません。
            <strong>すぐ手が届く位置に正しく携行できることまで含めて「備える」</strong>
            のが環境省の考え方です。
          </P>

          <section className="my-8">
            <h3 className={cls.ctaH3}>関連：専用ホルスター</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              <ProductLink product={holster} />
            </ul>
          </section>

          <H2 id="expiry">6. 使用期限は必ず確認する</H2>
          <Figure
            src={IMG("bear-spray-expiry-inspection.webp")}
            alt="熊撃退スプレーの缶・安全装置・使用期限を点検するイメージ"
          />
          <P>
            エアゾール製品は、時間経過とともに有効成分やガス圧が変化する可能性があります。環境省は、製造者の検証データに基づいて、必要な性能を維持できる使用期限を設定・表示することを求めています。
          </P>
          <P>
            会社で備蓄する場合は購入日ではなく、
            <strong>缶ごとの使用期限</strong>で管理します。年1回など点検月を決めて、期限・缶の腐食・変形・安全装置・ホルスター・未使用かどうかを確認すると運用しやすくなります。
          </P>

          <H2 id="price-vs-spec">安い熊よけスプレーはダメ？「価格」ではなく6項目で見る</H2>
          <P>
            ここで誤解したくないのが、「安い製品は全部危険」という話ではないことです。価格と性能は単純に比例しません。ただ、環境省が推奨要件を作った背景には、国内で性能・品質がさまざまな製品が流通し、対人用催涙スプレーを熊対策用として扱う例まで確認されたことがあります。
          </P>
          <P>
            <strong>「安いから不安」「高いから安心」ではなく、仕様が確認できるか。</strong>
            これが2026年以降の熊スプレー選びの基準になります。商品ページに「環境省推奨要件クリア品」とあっても、
            <strong>推奨要件に照らして6項目を自分で確認する</strong>
            ことが大切です。
          </P>

          <section
            id="aj260-compare"
            className="my-14 scroll-mt-24 rounded-2xl border-4 border-indigo-700 bg-gradient-to-b from-indigo-50 to-white p-6 md:p-8"
          >
            <H2>公開情報でAJ-260を環境省要件と照らしてみる</H2>
            <P>
              GREEN CROSS-selectでは、GC熊よけスプレー AJ-260を「環境省推奨要件クリア品」として掲載しています。公開ページで確認できる主な情報を、環境省要件と並べます。
              <strong>
                比較表の〇を増やすことではなく、最新の商品ラベル・取扱説明書・メーカー資料で6項目を確認すること
              </strong>
              が購入判断の前提です。
            </P>

            <article className="my-6 rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm">
              <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                  {aj260HasImage ? (
                    <Image
                      src={PROD(comparisonProduct.imageFile)}
                      alt="GC熊よけスプレー AJ-260の商品画像"
                      width={360}
                      height={360}
                      className="h-auto w-full object-contain p-3"
                    />
                  ) : (
                    <div className="flex aspect-square items-center justify-center text-sm">
                      画像準備中
                    </div>
                  )}
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-950">
                    比較例（公開情報ベース）
                  </span>
                  <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900">
                    {comparisonProduct.name}
                  </h3>
                  <ExtLink
                    href={comparisonProduct.url}
                    className="mt-3 inline-flex min-h-11 items-center rounded-xl bg-orange-600 px-4 py-2 text-[15px] font-extrabold text-white hover:bg-orange-500"
                  >
                    商品ページで仕様を確認 →
                  </ExtLink>
                </div>
              </div>
            </article>

            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-300">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>項目</th>
                    <th className={cls.th}>環境省推奨要件</th>
                    <th className={cls.th}>AJ-260 公開情報</th>
                    <th className={cls.th}>記事での評価</th>
                    <th className={cls.th}>確認ポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {aj260CompareRows.map((row) => (
                    <tr key={row.item}>
                      <td className={`${cls.td} font-bold`}>{row.item}</td>
                      <td className={cls.td}>{row.envReq}</td>
                      <td className={cls.td}>{row.publicInfo}</td>
                      <td className={cls.td}>
                        <StatusBadge status={row.status} />
                      </td>
                      <td className={cls.td}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-xl border-2 border-red-300 bg-red-50 p-5 text-red-950">
              <p className="font-black">商品ページ表記と数値の確認について</p>
              <P>
                商品ページに「環境省推奨要件クリア品」とある場合でも、
                <strong>公開情報上で数値要件（7.5m・6秒・CRC等）を個別に確認</strong>
                してください。掲載仕様が推奨要件と一致しない商品も流通しているため、1179060611のように飛距離・噴射時間・対人使用表記が要件と矛盾するページでは、表記どおりに「全要件クリア」とは判断しません。
              </P>
            </div>
          </section>

          <CtaBlock
            heading="熊対策アイテム一覧でスプレー・ホルスター等を確認"
            sub="スプレー本体に加え、ホルスターや練習用品もあわせて確認できます。"
          />

          <H2 id="no-human-use">クマ撃退スプレーは人に使わない</H2>
          <P>
            環境省は、対人用催涙スプレーとクマ撃退スプレーを明確に区別しています。対人用を熊へ流用することも、クマ撃退スプレーを人へ使用することも、
            <strong>
              人への安全性とクマへの有効性の両面から行うべきではない
            </strong>
            としています。「護身にも使えるから一石二鳥」という選び方はしません。
          </P>

          <H2 id="practice">練習用スプレーは「本番の缶を試す」代わりになる</H2>
          <Figure
            src={IMG("bear-spray-training-practice.webp")}
            alt="練習用スプレーで操作方法を確認する安全教育イメージ"
          />
          <P>
            クマが接近する場面で初めて、セーフティの外し方・持ち方・噴射方向・5〜10mの距離感を確認するのでは遅すぎます。消費者庁は、練習用スプレーなどによる実射を含めて事前練習を推奨しています。
          </P>
          <P>
            法人で熊対策品を支給する場合は、
            <strong>「本番用スプレーを配る」＋「一度は練習する」</strong>
            までをセットにするほうが実際の備えになります。
          </P>

          <section className="my-8">
            <h3 className={cls.ctaH3}>関連：練習用スプレー・遭遇予防の音対策</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              <ProductLink product={practiceSpray} />
              <ProductLink product={alarm} />
              <ProductLink product={whistle} />
              <ProductLink product={bell} />
            </ul>
          </section>

          <H2 id="three-layers">熊対策は3レイヤーで考える</H2>
          <H3>1. 遭遇予防</H3>
          <P>熊鈴、電子ホイッスル、アラームなど。音で存在を知らせ、突発遭遇のリスクを下げます。</P>
          <H3>2. 敷地への侵入対策</H3>
          <P>
            山間部の現場事務所、資材置場、農地等では電気柵や防獣フェンスを検討する場面があります。これらはクマ撃退スプレーの代わりではありません。
          </P>
          <H3>3. 近距離遭遇時の緊急対応</H3>
          <P>
            ここで使うのがクマ撃退スプレーです。この3つは競合商品ではなく、役割が違います。
          </P>

          <H2 id="corporate-checklist">法人で支給する場合のチェックリスト</H2>
          <Figure
            src={IMG("company-bear-safety-equipment-check.webp")}
            alt="山間部作業の熊対策装備を法人が点検するイメージ"
          />
          <ul className="my-6 grid gap-2 sm:grid-cols-2">
            {corporateChecklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span aria-hidden className="mt-0.5 font-bold text-emerald-700">
                  □
                </span>
                {item}
              </li>
            ))}
          </ul>

          <section className="my-10">
            <H2 id="compare-sprays">他の熊撃退スプレーは6項目を個別確認して選ぶ</H2>
            <P>
              以下は比較候補です。価格や商品名だけで選ばず、環境省推奨要件6項目を商品ページ・ラベルで確認してください。
            </P>
            <ul className="grid gap-3 sm:grid-cols-2">
              {compareSprays.map((product) => (
                <ProductLink key={product.sku} product={product} />
              ))}
            </ul>
          </section>

          <H2 id="pest-section">熊以外の害獣対策もまとめて確認したい場合</H2>
          <Figure
            src={IMG("wildlife-damage-prevention-fence.webp")}
            alt="山間部施設で防獣フェンスなどの侵入対策を行うイメージ"
          />
          <P>
            防獣ネット、獣害対策金網、アニマルフェンス、ゴミ被せネット、動物撃退器などは、
            <strong>熊撃退スプレーの代わりではありません</strong>
            。施設・敷地の害獣対策という別の目的で使います。
          </P>
          <ul className="grid gap-3 sm:grid-cols-2">
            {pestProducts.map((product) => (
              <ProductLink key={product.sku} product={product} />
            ))}
          </ul>

          <CtaBlock
            heading="熊対策・害獣対策を一覧で確認"
            sub="近距離撃退用スプレーと、敷地・施設向けの害獣対策用品は目的が異なります。必要なレイヤーから確認してください。"
            showPest
          />

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <section key={item.q}>
                <h3 className={cls.faqQ}>{item.q}</h3>
                <P>{item.a}</P>
              </section>
            ))}
          </div>

          <H2 id="summary">まとめ｜2026年以降は「価格」より環境省6項目で選ぶ</H2>
          <P>
            クマ撃退スプレーは、普段は使わないかもしれません。しかし使う時は、クマが近距離まで接近している可能性がある場面です。安さだけで選ぶのでも、高いから安心と思うのでもなく、CRC濃度・噴射距離・時間・噴射パターン・安全装置・携行方法・使用期限・製品表示を確認して選びます。
          </P>
          <P>
            環境省の推奨要件は「この商品を買えば絶対安全」という保証ではありません。それでも、2026年8月以前よりは、購入者が客観的に比較するための軸が明確になりました。まずは、熊用・撃退用として販売され、必要な性能情報が確認できる製品から比較してください。
          </P>

          <section className="my-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {RELATED.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-gray-900 underline underline-offset-4 hover:text-gray-700"
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
