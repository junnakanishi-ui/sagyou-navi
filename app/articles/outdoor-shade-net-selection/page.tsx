import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "outdoor-shade-net-selection";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "屋外作業場の日よけに使う遮光ネットの選び方｜ハトメ付きネットの固定方法と遮光率を解説",
  description:
    "屋外作業場・資材置き場・仮設ヤードの日よけに使う遮光ネットの選び方を解説。遮光率約95％、85〜90％、80〜85％、65〜75％の違い、黒・シルバーの使い分け、ハトメ付き遮光ネットの固定方法、大判サイズの選び方を紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "屋外作業場の日よけに使う遮光ネットの選び方｜ハトメ付きネットの固定方法と遮光率を解説",
    description:
      "屋外作業場・資材置き場・仮設ヤードの日よけに使う遮光ネットの選び方を解説。遮光率約95％、85〜90％、80〜85％、65〜75％の違い、黒・シルバーの使い分け、ハトメ付き遮光ネットの固定方法、大判サイズの選び方を紹介します。",
    type: "article",
    images: [
      "/images/articles/outdoor-shade-net-selection/outdoor-shade-net-hero.jpg",
    ],
  },
};

const ARTICLE_IMG = "/images/articles/outdoor-shade-net-selection";
const productImage = (id: string) => `/products/${id}.jpg`;

const UTM =
  "utm_source=sagyou_navi&utm_medium=referral&utm_campaign=outdoor-shade-net";

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

function CTA({ url, label }: { url: string; label: string }) {
  if (!url) return null;
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="my-4 block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
    >
      {label}
    </a>
  );
}

function ProductLink({ url, label }: { url: string; label: string }) {
  if (!url) return null;
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-gray-700"
    >
      {label}
    </a>
  );
}

type ProductItem = {
  imgId: string;
  name: string;
  url: string;
};

function ProductCard({ imgId, name, url }: ProductItem) {
  return (
    <a
      href={buildUrl(url, UTM)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(imgId)}
          alt={name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="flex-1 text-sm leading-snug text-gray-800">{name}</p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">
          GREEN CROSS-selectで見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.url} {...p} />
      ))}
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function Note({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-r-lg border-l-4 border-gray-400 bg-gray-50 p-4 text-sm leading-relaxed tracking-wide text-gray-700">
      {children}
    </div>
  );
}

type Net = {
  imgId: string;
  name: string;
  rate: string;
  size: string;
  type: "小型" | "細長" | "中型" | "大判";
  color: "黒" | "シルバー";
  url: string;
};

const NETS: Net[] = [
  {
    imgId: "6300030415",
    name: "H212BK 5×7",
    rate: "約95％",
    size: "5×7m",
    type: "大判",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030415",
  },
  {
    imgId: "6300030399",
    name: "H212BK 3×4",
    rate: "約95％",
    size: "3×4m",
    type: "中型",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030399",
  },
  {
    imgId: "6300030397",
    name: "H212BK 2×10",
    rate: "約95％",
    size: "2×10m",
    type: "細長",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030397",
  },
  {
    imgId: "6300030389",
    name: "H212BK 2×2",
    rate: "約95％",
    size: "2×2m",
    type: "小型",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030389",
  },
  {
    imgId: "6300030380",
    name: "H212BK 1×2",
    rate: "約95％",
    size: "1×2m",
    type: "小型",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030380",
  },
  {
    imgId: "6300030366",
    name: "H113BK 6×8",
    rate: "85〜90％",
    size: "6×8m",
    type: "大判",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030366",
  },
  {
    imgId: "6300030361",
    name: "H113BK 5×8",
    rate: "85〜90％",
    size: "5×8m",
    type: "大判",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030361",
  },
  {
    imgId: "6300030291",
    name: "H112BK 3×6",
    rate: "80〜85％",
    size: "3×6m",
    type: "中型",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030291",
  },
  {
    imgId: "6300030268",
    name: "H110BK 10×10",
    rate: "65〜75％",
    size: "10×10m",
    type: "大判",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030268",
  },
  {
    imgId: "6300030243",
    name: "H110BK 4×6",
    rate: "65〜75％",
    size: "4×6m",
    type: "中型",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030243",
  },
  {
    imgId: "6300030228",
    name: "H110BK 2×6",
    rate: "65〜75％",
    size: "2×6m",
    type: "細長",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030228",
  },
  {
    imgId: "6300030226",
    name: "H110BK 2×4",
    rate: "65〜75％",
    size: "2×4m",
    type: "細長",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030226",
  },
  {
    imgId: "6300030223",
    name: "H110BK 1×10",
    rate: "65〜75％",
    size: "1×10m",
    type: "細長",
    color: "黒",
    url: "https://www.gc-select.com/products/6300030223",
  },
  {
    imgId: "6300051135",
    name: "H112S 9×10",
    rate: "商品ページで確認",
    size: "9×10m",
    type: "大判",
    color: "シルバー",
    url: "https://www.gc-select.com/products/6300051135",
  },
  {
    imgId: "6300051126",
    name: "H112S 6×10",
    rate: "商品ページで確認",
    size: "6×10m",
    type: "大判",
    color: "シルバー",
    url: "https://www.gc-select.com/products/6300051126",
  },
  {
    imgId: "6300051246",
    name: "H212S 10×10",
    rate: "商品ページで確認",
    size: "10×10m",
    type: "大判",
    color: "シルバー",
    url: "https://www.gc-select.com/products/6300051246",
  },
];

const URL_LIST =
  "https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E8%B3%87%E6%9D%90%E9%96%A2%E9%80%A3-%E9%81%AE%E5%85%89-%E9%98%B2%E9%9F%B3%E3%82%B7%E3%83%BC%E3%83%88";

const URL_95 = "https://www.gc-select.com/products/6300030415";
const URL_8590 = "https://www.gc-select.com/products/6300030361";
const URL_6575 = "https://www.gc-select.com/products/6300030243";
const URL_OOBAN = "https://www.gc-select.com/products/6300030268";

const productItems: ProductItem[] = NETS.map((n) => ({
  imgId: n.imgId,
  name: `遮光ネット ${n.name}`,
  url: n.url,
}));

const faqs = [
  {
    q: "Q1. 屋外作業場の日よけには遮光率何％のネットがよいですか？",
    a: "強い直射日光をしっかり遮りたい場所は約95％、遮光性と作業の明るさのバランスを取りたい場所は85〜90％や80〜85％、明るさ・通気性も残したい場所は65〜75％が目安です。作業内容に合わせて選びましょう。",
  },
  {
    q: "Q2. 遮光ネットはロープで固定できますか？",
    a: "ハトメ付きの遮光ネットなら、ハトメにロープやひもを通して固定できます。四隅だけでなく中間部も含めて複数箇所で分散固定すると、風であおられにくくなります。",
  },
  {
    q: "Q3. 黒とシルバーの遮光ネットはどう違いますか？",
    a: "黒タイプは遮光率の選択肢が多く、用途に合わせて選びやすいのが特徴です。シルバータイプは大判の日よけの比較候補になります。遮光率・仕様は商品ページで確認して選びましょう。",
  },
  {
    q: "Q4. 資材置き場の日よけにはどのサイズが向いていますか？",
    a: "広い範囲を覆う資材置き場には、5×8や10×10などの大判サイズが向いています。覆いたい範囲を測り、固定分の余裕も見てサイズを選びましょう。",
  },
  {
    q: "Q5. 遮光ネットを張ると熱中症対策になりますか？",
    a: "直射日光を抑える対策の一つとして役立ちますが、遮光ネットだけで熱中症を防げるわけではありません。休憩、水分・塩分補給、送風、作業時間の調整などとあわせて運用することが重要です。",
  },
  {
    q: "Q6. 個人宅にも配送できますか？",
    a: "商品によっては個人宅配送不可の場合があります。法人名・事業所・現場納品などの配送条件を、購入前に商品ページで確認してください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "選び方ガイド",
      item: `${SITE_URL}/category/guide`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "屋外作業場の日よけに使う遮光ネットの選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">
            屋外作業場の日よけに使う遮光ネットの選び方
          </span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          屋外作業場の日よけに使う遮光ネットの選び方｜ハトメ付きネットの固定方法と遮光率を解説
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月3日／約14分で読めます
        </p>

        <img
          src={`${ARTICLE_IMG}/outdoor-shade-net-hero.jpg`}
          alt="屋外作業場の日よけに遮光ネットを設置するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">
            屋外作業場の日よけに遮光ネットを選ぶ（要点）
          </p>
          <p className={cls.body.replace("mb-4 ", "")}>
            屋外作業場の日よけに遮光ネットを使う場合は、まず「どの程度日差しを遮りたいか」「作業時の明るさをどれくらい残したいか」「どこに固定できるか」を確認します。強い直射日光をしっかり遮りたい場所では遮光率約95％、明るさや通気性も残したい場所では65〜85％台の遮光ネットを検討すると選びやすくなります。屋外で固定する場合は、ハトメ付き・周囲ロープ補強タイプを選び、ロープやひもで複数箇所を分散して固定することが重要です。
          </p>
        </div>

        <p className={cls.body}>
          屋外作業場や資材置き場、仮設ヤードでは、テントや屋根を常設しにくくても、遮光ネットを使えば簡易的な日陰をつくりやすくなります。この記事では、屋外作業場の日よけという現場課題に絞って、遮光率（約95％／85〜90％／80〜85％／65〜75％）とサイズの選び方、黒・シルバーの使い分け、ハトメ付き遮光ネットの固定方法を整理します。
        </p>
        <Note>
          遮光ネットは直射日光を抑える対策の一つです。「熱中症を完全に防ぐ」「必ず涼しくなる」ものではありません。屋外作業の暑さ対策では、休憩、水分・塩分補給、送風、作業時間の調整などとあわせて運用することが重要です。
        </Note>

        <H2>屋外作業場の日よけに遮光ネットが使われる理由</H2>

        <H3>直射日光をやわらげて作業環境を整えやすい</H3>
        <p className={cls.body}>
          屋外作業場では、夏場だけでなく春〜秋にかけて日差しが作業負担になります。テントや屋根を常設しにくい場所でも、遮光ネットなら支柱やフェンスなどを使って簡易的な日よけをつくりやすいのが利点です。
        </p>

        <H3>大判サイズなら広いスペースも覆いやすい</H3>
        <p className={cls.body}>
          5×7、5×8、6×8、9×10、10×10などの大判サイズなら、作業者が立つ場所、資材保管スペース、ペットハウスの日よけなど、広い範囲も覆いやすくなります。
        </p>

        <H3>ハトメ付きならロープで固定しやすい</H3>
        <p className={cls.body}>
          ハトメ（縁の穴に取り付けた金具）にひもやロープを通して固定できます。約50cmピッチでハトメ加工がある商品は、複数箇所で分散して固定しやすく、周囲ロープ補強タイプは屋外設置時の安心材料になります。
        </p>

        <H2>遮光ネットを選ぶ前に確認したい3つのこと</H2>

        <H3>どこに日陰を作りたいか</H3>
        <p className={cls.body}>
          作業台の上、資材置き場、農作業場、ハウス周り、ペットハウス、屋外荷捌き場、仮設ヤードなど、設置場所ごとに必要なサイズや遮光率が変わります。
        </p>

        <H3>どの程度暗くしてよいか</H3>
        <p className={cls.body}>
          遮光率が高いほど日差しを抑えやすい一方で、作業時の明るさが不足しないか確認が必要です。植物や作業内容によっては、遮光しすぎに注意します。
        </p>

        <H3>どこに固定できるか</H3>
        <p className={cls.body}>
          単管パイプ、支柱、フェンス、建物の柱、ハウス骨組み、仮設フレームなど、固定できる場所を先に確認しておくと、サイズやハトメ位置を選びやすくなります。
        </p>

        <H2>遮光率は何％がよい？65〜95％の選び方</H2>

        <img
          src={`${ARTICLE_IMG}/shade-net-shading-rate-comparison.jpg`}
          alt="遮光率の違いで日差しの入り方が変わるイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">遮光率</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">メリット</th>
                <th className="p-3 text-left">注意点</th>
                <th className="p-3 text-left">掲載商品</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "約95％",
                  "強い直射日光を遮りたい屋外作業場・ペットハウス・資材置き場",
                  "日差しを大きく抑えやすい",
                  "暗くなりやすく作業内容に注意",
                  "H212BK",
                ],
                [
                  "85〜90％",
                  "日差しをかなり抑えたい作業場・大きめの屋外スペース",
                  "遮光性と作業性のバランスを取りやすい",
                  "場所により明るさを確認",
                  "H113BK",
                ],
                [
                  "80〜85％",
                  "日よけしつつ明るさも残したい場所",
                  "遮光しすぎを避けやすい",
                  "強い日差しには物足りない場合も",
                  "H112BK",
                ],
                [
                  "65〜75％",
                  "植物・農作業場・通気性や明るさも重視する場所",
                  "明るさ・通気性を残しやすい",
                  "強い日差しを大きく遮りたい場所は上位遮光率も検討",
                  "H110BK",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                  <td className="p-3 align-top">{r[3]}</td>
                  <td className="p-3 align-top">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>黒とシルバーの遮光ネットはどう使い分ける？</H2>

        <H3>黒の遮光ネットはしっかり日差しを抑えたい場所に使いやすい</H3>
        <p className={cls.body}>
          黒タイプ（H212BK／H113BK／H112BK／H110BK）は、屋外作業場、農作業場、資材置き場などに使いやすく、遮光率の選択肢が多いのが特徴です。用途に合わせて約95％〜65〜75％から選べます。
        </p>

        <H3>シルバータイプは大判の日よけとして比較候補に入れやすい</H3>
        <p className={cls.body}>
          シルバータイプ（H112S 9×10、H112S 6×10、H212S 10×10）は、広いスペースを覆いたい場合の選択肢です。遮光率や仕様は商品ページで確認して選びましょう。
        </p>

        <H2>サイズはどう選ぶ？小型・細長・大判の使い分け</H2>

        <img
          src={`${ARTICLE_IMG}/material-yard-shade-net.jpg`}
          alt="資材置き場の日よけに大判遮光ネットを使うイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">サイズタイプ</th>
                <th className="p-3 text-left">サイズ例</th>
                <th className="p-3 text-left">向いている場所</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "小型",
                  "1×2・2×2",
                  "小さな作業台・ペットハウス・部分的な日よけ",
                ],
                [
                  "細長タイプ",
                  "1×10・2×10・2×6・2×4",
                  "通路・ハウス脇・フェンス沿い・細長い作業スペース",
                ],
                [
                  "中型",
                  "3×4・3×6・4×6",
                  "農作業場・資材置き場の一部・仮設スペース",
                ],
                [
                  "大判",
                  "5×7・5×8・6×8・9×10・10×10",
                  "屋外作業場・広いヤード・休憩スペース・資材保管場所",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="whitespace-nowrap p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>掲載商品一覧｜遮光率・サイズ別に選べる遮光ネット</H2>

        <img
          src={`${ARTICLE_IMG}/shade-net-size-selection.jpg`}
          alt="担当者が遮光ネットのサイズと遮光率を確認するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品（型番・サイズ）</th>
                <th className="p-3 text-left">遮光率</th>
                <th className="p-3 text-left">色</th>
                <th className="p-3 text-left">サイズタイプ</th>
                <th className="p-3 text-left">導線</th>
              </tr>
            </thead>
            <tbody>
              {NETS.map((n) => (
                <tr key={n.url} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left font-bold align-top">
                    遮光ネット {n.name}
                  </th>
                  <td className="whitespace-nowrap p-3 align-top">{n.rate}</td>
                  <td className="p-3 align-top">{n.color}</td>
                  <td className="p-3 align-top">{n.type}</td>
                  <td className="p-3 align-top">
                    <ProductLink url={n.url} label="商品ページ" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ProductGrid items={productItems} />
        <CTA
          url={URL_LIST}
          label="屋外作業場・資材置き場の日よけに使える遮光ネットを確認する"
        />

        <H2>ハトメ付き遮光ネットの固定方法</H2>

        <img
          src={`${ARTICLE_IMG}/shade-net-grommet-rope-fixing.jpg`}
          alt="ハトメ付き遮光ネットをロープで固定するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>固定する場所を先に決める</H3>
        <p className={cls.body}>
          支柱、単管パイプ、フェンス、建物の柱、ハウス骨組み、仮設フレームなど、固定先を先に決めます。固定先が決まると、必要なサイズやハトメ位置を選びやすくなります。
        </p>

        <H3>ハトメにロープやひもを通して複数箇所で固定する</H3>
        <p className={cls.body}>
          1点に力が集中しないよう、四隅だけでなく中間部分も固定します。約50cmピッチでハトメがある商品は、細かく分散して固定しやすくなります。
        </p>

        <H3>たるみを残しすぎない</H3>
        <p className={cls.body}>
          たるみが大きいと風を受けやすく、水がたまりやすくなる場合があります。一方で、強く張りすぎるとハトメや固定箇所に負担がかかるため、現場に合わせて張り具合を調整します。
        </p>

        <H3>風が強い日は外す・たたむ運用も考える</H3>
        <p className={cls.body}>
          強風時は無理に張りっぱなしにせず、外す・たたむ運用も検討します。仮設利用なら取り外しやすさも重要です。設置後も、定期的にロープのゆるみを確認しましょう。
        </p>

        <H2>屋外作業場で遮光ネットを使うときの注意点</H2>

        <H3>遮光ネットだけで暑さ対策が完結するわけではない</H3>
        <p className={cls.body}>
          遮光ネットは日差しを抑える対策の一つです。休憩、水分・塩分補給、作業時間の調整、送風機などとあわせて運用することが重要です。あわせて読みたい：
          <Link
            href="/articles/outdoor-work-heat-countermeasure-goods"
            className="text-gray-900 underline hover:no-underline"
          >
            建設現場の暑さ対策グッズ
          </Link>
          、
          <Link
            href="/articles/spot-cooler-rest-area"
            className="text-gray-900 underline hover:no-underline"
          >
            休憩所のスポットクーラー選び
          </Link>
          も参考にしてください。
        </p>

        <H3>暗くなりすぎないか確認する</H3>
        <p className={cls.body}>
          遮光率約95％は日差しを抑えやすい一方で、検品、細かい作業、機械操作などでは明るさも重要になります。作業内容に応じて遮光率を選びましょう。
        </p>

        <H3>風を受ける場所では固定方法を慎重に考える</H3>
        <p className={cls.body}>
          大判サイズほど風の影響を受けやすくなります。固定箇所、ロープ、支柱の強度、ハトメ周辺の負荷を定期点検してください。
        </p>

        <H3>個人宅配送不可の場合がある</H3>
        <p className={cls.body}>
          商品によっては個人宅配送不可の場合があります。法人名、事業所、現場納品などの配送条件を、購入前に必ず確認してください。
        </p>

        <H2>現場別のおすすめ遮光率・サイズの選び方</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">現場</th>
                <th className="p-3 text-left">遮光率の目安</th>
                <th className="p-3 text-left">サイズの目安</th>
                <th className="p-3 text-left">商品例</th>
                <th className="p-3 text-left">選び方の注意点</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "屋外作業場",
                  "約95％／85〜90％",
                  "大判（5×7・6×8）",
                  "H212BK 5×7・H113BK 6×8",
                  "作業の明るさとのバランスを確認",
                ],
                [
                  "資材置き場",
                  "85〜95％",
                  "大判（5×8・10×10）",
                  "H113BK 5×8・H110BK 10×10",
                  "覆う範囲に対して余裕あるサイズを",
                ],
                [
                  "仮設ヤード",
                  "85〜95％",
                  "大判",
                  "H212BK 5×7・H113BK 6×8",
                  "取り外し・たたみやすさも考慮",
                ],
                [
                  "ハウス周り",
                  "65〜75％",
                  "細長・中型",
                  "H110BK 2×6・4×6",
                  "遮光しすぎに注意（植物）",
                ],
                [
                  "ペットハウス",
                  "約95％",
                  "小型",
                  "H212BK 1×2・2×2",
                  "しっかり日差しを遮る",
                ],
                [
                  "細長い通路",
                  "65〜95％",
                  "細長（1×10・2×10）",
                  "H110BK 1×10・H212BK 2×10",
                  "固定先の間隔に合わせて長さを選ぶ",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="whitespace-nowrap p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                  <td className="p-3 align-top">{r[3]}</td>
                  <td className="p-3 align-top">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>遮光ネット選びでよくある失敗</H2>
        <H3>遮光率だけで選んで暗くなりすぎる</H3>
        <p className={cls.body}>
          「とにかく高遮光率」で選ぶと、検品や細かい作業に必要な明るさが不足することがあります。作業内容に合わせて遮光率を選びましょう。
        </p>
        <H3>サイズが足りず、日陰が必要な場所を覆えない</H3>
        <p className={cls.body}>
          実寸を測らずに選ぶと、覆いたい範囲に届かないことがあります。固定分の余裕も見て、必要な幅・長さを確認します。
        </p>
        <H3>固定箇所が少なく、風であおられやすい</H3>
        <p className={cls.body}>
          四隅だけの固定は風であおられやすくなります。中間部のハトメも使い、複数箇所で分散固定しましょう。
        </p>
        <H3>配送条件を確認せずに注文してしまう</H3>
        <p className={cls.body}>
          個人宅配送不可の商品もあります。注文前に配送条件（法人・事業所・現場納品など）を確認しましょう。
        </p>

        <H2>農作業場・ハウス周りの日よけにも使える</H2>

        <img
          src={`${ARTICLE_IMG}/farm-greenhouse-shade-net.jpg`}
          alt="農作業場やハウス周りの日よけに遮光ネットを使うイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          農作業場やハウス周りでは、植物や作業の明るさ・通気性を残したいことが多く、65〜75％（H110BK）などの中〜低遮光率が使いやすい場面もあります。逆に、休憩スペースや資材保管など、しっかり日差しを抑えたい場所には約95％（H212BK）が候補です。用途に合わせて遮光率を使い分けましょう。ハウス入口の足元対策は
          <Link
            href="/articles/greenhouse-entrance-mud-control"
            className="text-gray-900 underline hover:no-underline"
          >
            ビニールハウス入口のぬかるみ対策
          </Link>
          もあわせて参考にしてください。
        </p>

        <H2>遮光ネット選びのチェックリスト</H2>
        <ul className="my-6 space-y-2 leading-relaxed tracking-wide text-gray-800">
          {[
            "日よけを作りたい場所を決めたか",
            "作業時に必要な明るさを確認したか",
            "遮光率約95％・85〜90％・80〜85％・65〜75％の違いを比較したか",
            "黒タイプとシルバータイプを比較したか",
            "必要な幅・長さを測ったか",
            "ロープ固定分の余裕を見たか",
            "ハトメの位置や固定ピッチを確認したか",
            "支柱・単管パイプ・フェンスなど固定先を確認したか",
            "風が強い日の取り外し運用を決めたか",
            "個人宅配送不可など配送条件を確認したか",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="font-bold text-gray-900">☑</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H2>よくある質問（FAQ）</H2>
        <div className="my-6 space-y-6">
          {faqs.map((item) => (
            <div key={item.q}>
              <p className={cls.faqQ}>{item.q}</p>
              <p className={cls.body.replace("mb-4 ", "")}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>まとめ｜遮光率・サイズ・固定方法を現場に合わせて選ぶ</H2>
        <p className={cls.body}>
          屋外作業場の日よけは、遮光率（約95％〜65〜75％）と必要なサイズを現場に合わせて選び、ハトメ付き・ロープ固定で複数箇所を分散して固定するのが基本です。暑さ対策は遮光ネット単体で完結せず、休憩・水分塩分補給・送風・作業時間調整との併用が大切です。熱中症対策の基本は
          <Link
            href="/articles/outdoor-work-heatstroke-measures"
            className="text-gray-900 underline hover:no-underline"
          >
            屋外作業の熱中症対策
          </Link>
          も参考にしてください。用途別に、以下から選んでください。
        </p>
        <CTA
          url={URL_95}
          label="強い日差しをしっかり抑えたい屋外作業場には遮光率約95％タイプを確認する"
        />
        <CTA
          url={URL_8590}
          label="明るさとのバランスを取りたい作業場には80〜90％台の遮光ネットを確認する"
        />
        <CTA
          url={URL_6575}
          label="農作業場や植物周りには65〜75％タイプも比較する"
        />
        <CTA
          url={URL_OOBAN}
          label="広い資材置き場・仮設ヤードには大判サイズの遮光ネットを確認する"
        />
        <CTA
          url={URL_LIST}
          label="迷った場合は遮光・防音シート販売一覧でサイズ・遮光率をまとめて確認する"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
