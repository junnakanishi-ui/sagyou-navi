import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "barn-floor-rubber-mat";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "牛舎の床の底冷え・滑り対策に使うゴムマットの選び方｜酪農用マットの厚みを比較",
  description:
    "牛舎の床の底冷え・滑り対策に使う酪農用ゴムマットの選び方を解説。15mm・20mm・25mm・30mmの厚み別の違い、牛舎・馬房で確認したい床状態、重量・設置・清掃時の注意点、農作業用ゴムマットや足腰マットとの使い分けも紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "牛舎の床の底冷え・滑り対策に使うゴムマットの選び方｜酪農用マットの厚みを比較",
    description:
      "牛舎の床の底冷え・滑り対策に使う酪農用ゴムマットの選び方を解説。15mm・20mm・25mm・30mmの厚み別の違い、牛舎・馬房で確認したい床状態、重量・設置・清掃時の注意点、農作業用ゴムマットや足腰マットとの使い分けも紹介します。",
    type: "article",
    images: [
      "/images/articles/barn-floor-rubber-mat/barn-floor-rubber-mat-hero.jpg",
    ],
  },
};

const ARTICLE_IMG = "/images/articles/barn-floor-rubber-mat";
const productImage = (id: string) => `/products/${id}.jpg`;

const UTM =
  "utm_source=sagyou_navi&utm_medium=referral&utm_campaign=barn-floor-rubber-mat";

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
  store: "gc" | "yahoo";
};

function ProductCard({ imgId, name, url, store }: ProductItem) {
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
          {store === "gc"
            ? "GREEN CROSS-selectで見る"
            : "Yahoo!ショッピングで見る"}
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={`${p.store}-${p.imgId}-${p.url}`} {...p} />
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

type Mat = {
  imgId: string;
  name: string;
  size: string;
  weight: string;
  place: string;
  guide: string;
  url: string;
};

const RAKUNO: Mat[] = [
  {
    imgId: "6300032879",
    name: "酪農用ゴムマット 15mm×1400mm×2000mm",
    size: "厚15mm／1400×2000mm",
    weight: "商品ページで要確認",
    place: "牛舎床の一部・まず敷きたい場所",
    guide: "扱いやすさ重視の基本対策",
    url: "https://www.gc-select.com/products/6300032879",
  },
  {
    imgId: "6300032880",
    name: "酪農用ゴムマット 20mm×1400mm×2000mm",
    size: "厚20mm／1400×2000mm",
    weight: "商品ページで要確認",
    place: "標準的な牛舎床・通路・立ち位置",
    guide: "底冷え対策と扱いやすさのバランス",
    url: "https://www.gc-select.com/products/6300032880",
  },
  {
    imgId: "6300032881",
    name: "酪農用ゴムマット 25mm×1400mm×2000mm",
    size: "厚25mm／1400×2000mm",
    weight: "商品ページで要確認",
    place: "冬場の冷え・床の硬さが気になる場所",
    guide: "クッション性・保温性を重視",
    url: "https://www.gc-select.com/products/6300032881",
  },
  {
    imgId: "6300032882",
    name: "酪農用ゴムマット 30mm×1400mm×2000mm",
    size: "厚30mm／1400×2000mm",
    weight: "商品ページで要確認（重め）",
    place: "厚手でしっかりした床材を検討する場所",
    guide: "クッション/保温を重視・重量に注意",
    url: "https://www.gc-select.com/products/6300032882",
  },
];

type NokiMat = {
  imgId: string;
  name: string;
  size: string;
  place: string;
  diff: string;
  url: string;
};

const NOKI: NokiMat[] = [
  {
    imgId: "6300032870",
    name: "農作業用ゴムマット 5mm×350mm×2000mm",
    size: "厚5mm／幅350mm",
    place: "畝間・狭い歩行路",
    diff: "薄手・幅狭。ハウス入口や畝間向けで牛舎床用ではない",
    url: "https://www.gc-select.com/products/6300032870",
  },
  {
    imgId: "6300032871",
    name: "農作業用ゴムマット 5mm×500mm×2000mm",
    size: "厚5mm／幅500mm",
    place: "ハウス入口・収穫かご移動",
    diff: "薄手。屋外通路のぬかるみ対策向け",
    url: "https://www.gc-select.com/products/6300032871",
  },
  {
    imgId: "6300032873",
    name: "農作業用ゴムマット 7mm×350mm×2000mm",
    size: "厚7mm／幅350mm",
    place: "畝間・ハウス入口の簡易歩行路",
    diff: "標準厚。歩行路向けで畜舎床の厚手対策とは別",
    url: "https://www.gc-select.com/products/6300032873",
  },
  {
    imgId: "6300032874",
    name: "農作業用ゴムマット 7mm×500mm×2000mm",
    size: "厚7mm／幅500mm",
    place: "ハウス入口・軽い台車通路",
    diff: "標準厚。屋外通路向け",
    url: "https://www.gc-select.com/products/6300032874",
  },
  {
    imgId: "6300032875",
    name: "農作業用ゴムマット 7mm×700mm×2000mm",
    size: "厚7mm／幅700mm",
    place: "観光農園の歩行通路・台車/一輪車",
    diff: "広め通路向け。牛舎床の保温対策とは用途が別",
    url: "https://www.gc-select.com/products/6300032875",
  },
  {
    imgId: "6300032876",
    name: "農作業用ゴムマット 10mm×350mm×2000mm",
    size: "厚10mm／幅350mm",
    place: "狭い通路で安定感を重視",
    diff: "農業通路向け。厚手床材の酪農用とは別",
    url: "https://www.gc-select.com/products/6300032876",
  },
  {
    imgId: "6300032877",
    name: "農作業用ゴムマット 10mm×500mm×2000mm",
    size: "厚10mm／幅500mm",
    place: "ハウス入口・台車通路で安定感重視",
    diff: "農業通路向け",
    url: "https://www.gc-select.com/products/6300032877",
  },
  {
    imgId: "6300032878",
    name: "農作業用ゴムマット 10mm×700mm×2000mm",
    size: "厚10mm／幅700mm",
    place: "広いハウス前・観光農園・一輪車",
    diff: "広め通路向け",
    url: "https://www.gc-select.com/products/6300032878",
  },
];

const YQ = "?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=";
const ASHIKOSHI = [
  {
    imgId: "158667",
    name: "TRUSCO 足腰マット TAM-4515-17（黒）",
    spec: "450×1500mm／厚17mm／黒",
    place: "選果場・作業台前の長めの定位置通路",
    diff: "乾いた床の定位置立ち作業向け。牛舎床の保温・滑り対策とは別",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158667.html${YQ}`,
  },
  {
    imgId: "158664",
    name: "TRUSCO 足腰マット TAM-4560-17（黒）",
    spec: "450×600mm／厚17mm／黒",
    place: "作業台1名分の足元",
    diff: "1人分のスポット設置向け。畜舎床用ではない",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158664.html${YQ}`,
  },
  {
    imgId: "158663",
    name: "TRUSCO 足腰マット TAM-4590-17-ESD-GR（帯電防止）",
    spec: "450×900mm／厚17mm／帯電防止・グリーン",
    place: "静電気を避けたい作業台前",
    diff: "帯電防止タイプ。精密・電子部品を扱う定位置作業向け",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158663.html${YQ}`,
  },
];

function toProductItems(
  items: { imgId: string; name: string; url: string }[],
  store: ProductItem["store"]
): ProductItem[] {
  return items.map((m) => ({ ...m, store }));
}

const URL_RAKUNO_SEARCH =
  "https://www.gc-select.com/pages/search-results-page?q=%E9%85%AA%E8%BE%B2%E7%94%A8%E3%82%B4%E3%83%A0";
const URL_NOKI_SEARCH =
  "https://www.gc-select.com/pages/search-results-page?q=%E8%BE%B2%E4%BD%9C%E6%A5%AD%E7%94%A8%E3%82%B4%E3%83%A0";
const URL_ASHIKOSHI_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%B6%B3%E8%85%B0%E3%83%9E%E3%83%83%E3%83%88#CentSrchFilter1";

const faqs = [
  {
    q: "Q1. 牛舎の床が冷たいときは何を敷けばよいですか？",
    a: "断熱性・保温性のある厚手の酪農用ゴムマットが候補になります。牛が立つ場所や通路など、冷えや硬さが気になる場所に敷く方法があります。床状態や排水、清掃性もあわせて確認しましょう。",
  },
  {
    q: "Q2. 酪農用ゴムマットの厚みは何mmがよいですか？",
    a: "扱いやすさを重視するなら15mm〜20mm、クッション性や底冷え対策を重視するなら25mm〜30mmが目安です。厚いほど重くなるため、設置人数・清掃性・動線に合わせて選びましょう。一番厚いものが必ず最適とは限りません。",
  },
  {
    q: "Q3. 牛舎の滑り止め対策にゴムマットは使えますか？",
    a: "滑りにくい床材の一つとして検討できます。ただし「必ず滑らない」ものではないため、濡れやすい場所の排水や清掃、端部の段差点検とあわせて運用することが大切です。",
  },
  {
    q: "Q4. 馬房にも酪農用ゴムマットは使えますか？",
    a: "馬房や畜舎床の冷え・滑り対策としても検討できます。床の状態、排水、清掃性、段差を確認して、厚みや敷く範囲を選びましょう。",
  },
  {
    q: "Q5. ハウス入口や畑の通路にも酪農用ゴムマットを使うべきですか？",
    a: "屋外通路のぬかるみ対策には、薄手で扱いやすい農作業用ゴムマットが向いています。酪農用は牛舎床・馬房向けの厚手タイプのため、用途で使い分けるのがおすすめです。",
  },
  {
    q: "Q6. 作業者の立ち仕事対策にはどのマットが向いていますか？",
    a: "乾いた床での定位置の立ち作業には、クッション性のあるTRUSCO足腰マットが関連対策になります。牛舎床の保温・滑り対策には酪農用ゴムマット、という使い分けが基本です。",
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
      name: "牛舎の床の底冷え・滑り対策に使うゴムマットの選び方",
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
            牛舎の床の底冷え・滑り対策に使うゴムマットの選び方
          </span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          牛舎の床の底冷え・滑り対策に使うゴムマットの選び方｜酪農用マットの厚みを比較
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月3日／約14分で読めます
        </p>

        <img
          src={`${ARTICLE_IMG}/barn-floor-rubber-mat-hero.jpg`}
          alt="牛舎床の底冷えと滑り対策に酪農用ゴムマットを敷くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">牛舎の床の底冷え・滑り対策（要点）</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            牛舎の床の底冷え・滑り対策では、コンクリート床の冷たさ、濡れやすさ、凹凸、排水状態を確認したうえで、牛や馬が歩く場所・立つ場所に酪農用ゴムマットを敷く方法があります。厚みは、扱いやすさを重視するなら15mm〜20mm、クッション性や底冷え対策を重視するなら25mm〜30mmを目安に検討できます。ただし、厚くなるほど重量も増えるため、設置人数・清掃性・端部の段差対策もあわせて確認することが大切です。
          </p>
        </div>

        <p className={cls.body}>
          冬場の牛舎の床が冷たい、コンクリート床が滑りやすい、牛や馬が歩きにくそうに見える——酪農・畜産の現場で起こりがちな悩みです。床の状態は、牛や馬の足元だけでなく、給餌・清掃・搾乳関連作業を行う作業者の足腰環境にも影響します。この記事では、牛舎床の底冷え・滑り対策に使う酪農用ゴムマットの選び方を、厚み（15/20/25/30mm）の違いや設置・清掃の注意点とあわせて解説します。
        </p>
        <Note>
          酪農用ゴムマットは床対策の一つとして役立ちますが、万能ではありません。「敷けば必ず滑らない」「絶対に転倒しない」ものではなく、床状態・排水・清掃性・端部の段差・マット下の水分管理を確認しながら、現場環境に合わせて検討してください。
        </Note>

        <H2>牛舎の床で底冷え・滑りが起きやすい理由</H2>

        <img
          src={`${ARTICLE_IMG}/cold-concrete-barn-floor.jpg`}
          alt="冬場の牛舎の冷たいコンクリート床と滑りやすい足元のイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>コンクリート床は冬場に冷たさを感じやすい</H3>
        <p className={cls.body}>
          牛舎・畜舎の床はコンクリートが多く、熱を伝えやすいため、冬場は床からの冷え（底冷え）を感じやすくなります。これは牛や馬だけでなく、その場で作業する人の足元環境にも影響します。
        </p>

        <H3>水・尿・洗浄水で床が濡れやすい</H3>
        <p className={cls.body}>
          牛舎の床は、水・尿・洗浄水などで濡れやすく、水分が残りやすい環境です。濡れた床は滑りやすさにつながるため、床材選びでは排水や清掃性も重要になります。
        </p>

        <H3>牛や馬の移動で床面が摩耗しやすい</H3>
        <p className={cls.body}>
          同じ動線を繰り返し歩くことで、床面の摩耗・凹凸・段差が出やすくなります。摩耗が進むと、さらに滑りやすさや歩きにくさにつながります。
        </p>

        <H2>牛舎床の底冷え・滑りを放置すると起きる問題</H2>

        <H3>牛や馬が歩きにくくなる</H3>
        <p className={cls.body}>
          滑りやすい床では、牛や馬が移動や方向転換をしにくくなる場合があります。特に通路、出入口、水飲み場周辺は注意が必要です。
        </p>

        <H3>作業者の足腰にも負担がかかりやすい</H3>
        <p className={cls.body}>
          冷たい床や硬い床での給餌・清掃・搾乳関連作業は、作業者の足腰にも負担がかかりやすくなります（負担の感じ方には個人差があり、医療的な効果を示すものではありません）。
        </p>

        <H3>清掃・衛生管理の手間にも影響する</H3>
        <p className={cls.body}>
          ぬめり、泥、汚れ、水分がたまりやすい場所では、マットを敷くだけでなく、清掃しやすい運用にすることが大切です。
        </p>

        <H2>牛舎の床材・滑り対策を考えるときの確認ポイント</H2>

        <H3>どの場所に敷くのか</H3>
        <p className={cls.body}>
          牛が立つ場所、牛が歩く通路、馬房・畜舎床、出入口、水飲み場周辺、作業者が長時間立つ場所など、設置場所ごとに必要な対策を考えます。
        </p>

        <H3>床は乾きやすいか、濡れやすいか</H3>
        <p className={cls.body}>
          排水の向き、水が残りやすい場所、洗浄頻度、マット下に水がたまらないかを確認します。
        </p>

        <H3>常設するか、一部だけ敷くか</H3>
        <p className={cls.body}>
          全面敷き、動線だけ、一部の立ち位置だけ、冬季重点など、設置範囲の考え方を決めておきます。
        </p>

        <H3>設置・移動・清掃に何人必要か</H3>
        <p className={cls.body}>
          厚みが増えるほど重量も増えます。大判サイズ（1400×2000mm）では、設置時に複数人で作業する前提になりやすく、清掃時にマットをめくる運用ができるかも確認しておきましょう。
        </p>

        <H2>酪農用ゴムマットとは？牛舎・馬房の床に使う厚手マット</H2>
        <p className={cls.body}>
          酪農用ゴムマットは、牛舎床向けの厚手ゴムマットです。主な特徴は次の通りです。
        </p>
        <ul className={cls.list}>
          <li>断熱性・保温性により、冬場の底冷え対策に役立つ</li>
          <li>クッション性により、作業者の足腰負担の軽減にもつながる</li>
          <li>牛や馬が滑りにくい床材として検討できる</li>
          <li>材質は合成ゴム</li>
          <li>サイズは1400mm×2000mm、厚みは15mm・20mm・25mm・30mm</li>
        </ul>
        <p className={cls.body}>
          導入時は、床状態、排水、清掃性、端部の段差、マット下の水分管理もあわせて確認しましょう。
        </p>
        <CTA
          url={URL_RAKUNO_SEARCH}
          label="牛舎・畜舎の床対策に使える酪農用ゴムマットを確認する"
        />

        <H2>酪農用ゴムマットの厚みはどう選ぶ？15mm・20mm・25mm・30mmの違い</H2>

        <img
          src={`${ARTICLE_IMG}/dairy-rubber-mat-thickness-comparison.jpg`}
          alt="酪農用ゴムマットの厚みを比較するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">厚み</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">重視するポイント</th>
                <th className="p-3 text-left">注意点</th>
                <th className="p-3 text-left">掲載商品</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "15mm",
                  "牛舎床の一部・まず敷きたい場所",
                  "扱いやすさ",
                  "底冷え対策は厚手より控えめ",
                  "15mm×1400×2000",
                ],
                [
                  "20mm",
                  "標準的な牛舎床・通路・立ち位置",
                  "底冷え対策と扱いやすさのバランス",
                  "設置範囲に応じ枚数を確認",
                  "20mm×1400×2000",
                ],
                [
                  "25mm",
                  "冬場の冷え・床の硬さが気になる場所",
                  "クッション性・保温性",
                  "重量が増える",
                  "25mm×1400×2000",
                ],
                [
                  "30mm",
                  "厚手でしっかりした床材を検討する場所",
                  "クッション性・保温性を重視",
                  "重量が大きい。設置人数・移動性・清掃性を必ず確認",
                  "30mm×1400×2000",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                  <td className="p-3 align-top">{r[3]}</td>
                  <td className="whitespace-nowrap p-3 align-top">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>
          「一番厚いものが必ず最適」ではありません。床状態、清掃頻度、設置人数、牛や馬の動線に合わせて選ぶことが大切です。
        </Note>

        <H2>掲載商品一覧｜酪農用ゴムマットの厚み別比較</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品名</th>
                <th className="p-3 text-left">サイズ</th>
                <th className="p-3 text-left">重量の目安</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">選び方の目安</th>
                <th className="p-3 text-left">導線</th>
              </tr>
            </thead>
            <tbody>
              {RAKUNO.map((m) => (
                <tr key={m.url} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left font-bold align-top">
                    {m.name}
                  </th>
                  <td className="whitespace-nowrap p-3 align-top">{m.size}</td>
                  <td className="p-3 align-top">{m.weight}</td>
                  <td className="p-3 align-top">{m.place}</td>
                  <td className="p-3 align-top">{m.guide}</td>
                  <td className="p-3 align-top">
                    <ProductLink url={m.url} label="商品ページ" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ProductGrid items={toProductItems(RAKUNO, "gc")} />
        <p className={cls.bodySm}>
          ※重量は商品ページの記載値をご確認ください。厚みが増えるほど重くなり、設置・移動・清掃の負担も変わります。
        </p>
        <CTA
          url={URL_RAKUNO_SEARCH}
          label="牛舎床の底冷え・滑り対策に使える酪農用ゴムマットを厚み別に確認する"
        />

        <H2>牛舎にゴムマットを敷く前に確認したい注意点</H2>

        <H3>床面の汚れ・水分を取り除いてから敷く</H3>
        <p className={cls.body}>
          設置前に床面を清掃し、汚れや水分を取り除きます。濡れた床や汚れた床の上にそのまま敷くと、ズレ・浮き・ぬめりの原因になる場合があります。
        </p>

        <H3>排水を妨げない配置にする</H3>
        <p className={cls.body}>
          水が流れる方向や排水溝をふさがないよう配置し、マット下に水が残らないかを確認します。
        </p>

        <H3>端部の段差・めくれを点検する</H3>
        <p className={cls.body}>
          端部の段差やめくれは、牛や馬・作業者のつまずき、清掃道具や台車の引っかかりの原因になります。定期的に点検しましょう。
        </p>

        <H3>清掃しやすい運用にする</H3>
        <p className={cls.body}>
          マット表面の汚れ、マット下の水分、摩耗・破損を点検し、清掃しやすい運用にしておくことが大切です。
        </p>

        <H2>牛舎のどこに酪農用ゴムマットを敷くとよいか</H2>

        <img
          src={`${ARTICLE_IMG}/barn-aisle-rubber-mat.jpg`}
          alt="牛舎通路に酪農用ゴムマットを設置するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>牛が立つ場所</H3>
        <p className={cls.body}>
          飼槽前、水飲み場周辺、立ち時間が長い場所などに敷くと、底冷えや硬さの対策として検討できます。
        </p>
        <H3>牛が歩く通路</H3>
        <p className={cls.body}>
          出入口、搾乳室までの通路、方向転換が多い場所などは、滑り対策として敷く場所の候補です。
        </p>
        <H3>馬房・畜舎床</H3>
        <p className={cls.body}>
          馬房や畜舎の床の冷え・滑り対策としても検討できます。
        </p>
        <H3>作業者が長時間立つ場所</H3>
        <p className={cls.body}>
          給餌、清掃、搾乳関連作業など、作業者の足元対策にもつながります。なお、選果場や作業台前など乾いた床での定位置作業には、後述のTRUSCO足腰マットも関連対策として検討できます。
        </p>

        <H2>農作業用ゴムマットとの違い｜ハウス入口・畝間には別タイプを使い分ける</H2>

        <img
          src={`${ARTICLE_IMG}/greenhouse-entrance-farm-rubber-mat.jpg`}
          alt="ハウス入口のぬかるみ対策に農作業用ゴムマットを敷くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          酪農用ゴムマットは牛舎床・馬房・畜舎向けの厚手タイプ、農作業用ゴムマットはハウス入口・畝間・温室通路・観光農園の歩行通路向けの薄手タイプで、用途が異なります。屋外通路のぬかるみ対策には農作業用ゴムマットが候補になります。ハウス入口のぬかるみ対策の詳しい選び方は
          <Link
            href="/articles/greenhouse-entrance-mud-control"
            className="text-gray-900 underline hover:no-underline"
          >
            ビニールハウス入口のぬかるみ対策
          </Link>
          もあわせてご覧ください。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品名</th>
                <th className="p-3 text-left">サイズ</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">酪農用ゴムマットとの違い</th>
                <th className="p-3 text-left">導線</th>
              </tr>
            </thead>
            <tbody>
              {NOKI.map((m) => (
                <tr key={m.url} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left font-bold align-top">
                    {m.name}
                  </th>
                  <td className="whitespace-nowrap p-3 align-top">{m.size}</td>
                  <td className="p-3 align-top">{m.place}</td>
                  <td className="p-3 align-top">{m.diff}</td>
                  <td className="p-3 align-top">
                    <ProductLink url={m.url} label="商品ページ" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ProductGrid items={toProductItems(NOKI, "gc")} />
        <CTA
          url={URL_NOKI_SEARCH}
          label="ハウス入口・畝間・温室通路に使える農作業用ゴムマットを確認する"
        />

        <H2>選果場・作業台前・工場の立ち仕事にはTRUSCO足腰マットも検討する</H2>

        <img
          src={`${ARTICLE_IMG}/sorting-area-anti-fatigue-mat.jpg`}
          alt="選果場の作業台前で足腰マットを使うイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          マットは用途で使い分けると選びやすくなります。牛舎床・馬房の底冷え・滑り対策には酪農用ゴムマット、ハウス入口・畝間・温室通路のぬかるみ対策には農作業用ゴムマット、選果場・作業台前・工場ラインなど乾いた床での立ち仕事対策にはTRUSCO足腰マットが候補です。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品名</th>
                <th className="p-3 text-left">サイズ・特徴</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">酪農用ゴムマットとの違い</th>
                <th className="p-3 text-left">導線</th>
              </tr>
            </thead>
            <tbody>
              {ASHIKOSHI.map((m) => (
                <tr key={m.url} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left font-bold align-top">
                    {m.name}
                  </th>
                  <td className="p-3 align-top">{m.spec}</td>
                  <td className="p-3 align-top">{m.place}</td>
                  <td className="p-3 align-top">{m.diff}</td>
                  <td className="p-3 align-top">
                    <ProductLink url={m.url} label="商品ページ" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ProductGrid items={toProductItems(ASHIKOSHI, "yahoo")} />
        <CTA
          url={URL_ASHIKOSHI_LIST}
          label="選果場・作業台前の立ち仕事対策にTRUSCO足腰マットを確認する"
        />

        <H2>牛舎床の底冷え・滑り対策チェックリスト</H2>
        <ul className="my-6 space-y-2 leading-relaxed tracking-wide text-gray-800">
          {[
            "牛舎床のどこが冷たい・滑りやすいか確認したか",
            "水がたまりやすい場所や排水方向を確認したか",
            "牛や馬が立つ場所・歩く場所を分けて考えたか",
            "15mm・20mm・25mm・30mmの厚みを比較したか",
            "厚みだけでなく重量・設置人数も確認したか",
            "清掃時にマットを動かす必要があるか確認したか",
            "端部の段差・めくれ・ズレを点検する運用にしたか",
            "ハウス入口や選果場など、他の足元対策も別途検討したか",
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

        <H2>まとめ｜牛舎床は厚み・重量・清掃性のバランスで選ぶ</H2>
        <p className={cls.body}>
          牛舎床の底冷え・滑り対策は、床の冷たさ・濡れやすさ・排水を確認したうえで、牛や馬の動線や立ち位置に合わせて酪農用ゴムマットの厚みを選ぶのが基本です。厚いほど保温・クッション性は高まりますが重量も増えるため、設置人数・清掃性・端部対策とのバランスで選びましょう。用途に応じて、ハウス入口・畝間には農作業用ゴムマット、選果場・作業台前の立ち仕事にはTRUSCO足腰マットも検討できます。
        </p>
        <CTA
          url={URL_RAKUNO_SEARCH}
          label="牛舎床の底冷え・滑り対策に使える酪農用ゴムマットを確認する"
        />
        <CTA
          url={URL_NOKI_SEARCH}
          label="ハウス入口・畝間・温室通路に使える農作業用ゴムマットを確認する"
        />
        <CTA
          url={URL_ASHIKOSHI_LIST}
          label="選果場・作業台前の立ち仕事対策にTRUSCO足腰マットを確認する"
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
