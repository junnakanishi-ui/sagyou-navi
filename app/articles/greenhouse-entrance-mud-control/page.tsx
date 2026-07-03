import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "greenhouse-entrance-mud-control";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "ビニールハウス入口のぬかるみ対策｜農作業用ゴムマットで歩きやすい通路を作る方法",
  description:
    "ビニールハウス入口のぬかるみ対策を解説。雨上がりや梅雨・霜の時期に歩きにくいハウス前通路へ、農作業用ゴムマットを敷くメリット、幅350mm・500mm・700mm、厚み5mm・7mm・10mmの選び方、敷き方の注意点を紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "ビニールハウス入口のぬかるみ対策｜農作業用ゴムマットで歩きやすい通路を作る方法",
    description:
      "ビニールハウス入口のぬかるみ対策を解説。雨上がりや梅雨・霜の時期に歩きにくいハウス前通路へ、農作業用ゴムマットを敷くメリット、幅350mm・500mm・700mm、厚み5mm・7mm・10mmの選び方、敷き方の注意点を紹介します。",
    type: "article",
    images: [
      "/images/articles/greenhouse-entrance-mud-control/greenhouse-entrance-mud-rubber-mat-hero.jpg",
    ],
  },
};

const ARTICLE_IMG = "/images/articles/greenhouse-entrance-mud-control";
const productImage = (id: string) => `/products/${id}.jpg`;

const UTM =
  "utm_source=sagyou_navi&utm_medium=referral&utm_campaign=greenhouse-entrance-mud";

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
  place: string;
  guide: string;
  url: string;
};

const NOKI: Mat[] = [
  {
    imgId: "6300032870",
    name: "農作業用ゴムマット 5mm×350mm×2000mm",
    size: "厚5mm／幅350mm／長2000mm",
    place: "畝間・人が一人通る狭い通路",
    guide: "軽めのぬかるみ・季節限定・移動保管重視",
    url: "https://www.gc-select.com/products/6300032870",
  },
  {
    imgId: "6300032871",
    name: "農作業用ゴムマット 5mm×500mm×2000mm",
    size: "厚5mm／幅500mm／長2000mm",
    place: "ハウス入口・収穫かごを持った移動",
    guide: "軽めのぬかるみ・季節限定",
    url: "https://www.gc-select.com/products/6300032871",
  },
  {
    imgId: "6300032873",
    name: "農作業用ゴムマット 7mm×350mm×2000mm",
    size: "厚7mm／幅350mm／長2000mm",
    place: "畝間・ハウス入口の簡易歩行路",
    guide: "標準的な足元対策",
    url: "https://www.gc-select.com/products/6300032873",
  },
  {
    imgId: "6300032874",
    name: "農作業用ゴムマット 7mm×500mm×2000mm",
    size: "厚7mm／幅500mm／長2000mm",
    place: "ハウス入口・軽い台車通路",
    guide: "標準的な足元対策（迷ったら）",
    url: "https://www.gc-select.com/products/6300032874",
  },
  {
    imgId: "6300032875",
    name: "農作業用ゴムマット 7mm×700mm×2000mm",
    size: "厚7mm／幅700mm／長2000mm",
    place: "観光農園の歩行通路・台車/一輪車通路",
    guide: "標準・広めの通路",
    url: "https://www.gc-select.com/products/6300032875",
  },
  {
    imgId: "6300032876",
    name: "農作業用ゴムマット 10mm×350mm×2000mm",
    size: "厚10mm／幅350mm／長2000mm",
    place: "狭い通路で安定感を重視",
    guide: "ぬかるみ強め・安定感重視",
    url: "https://www.gc-select.com/products/6300032876",
  },
  {
    imgId: "6300032877",
    name: "農作業用ゴムマット 10mm×500mm×2000mm",
    size: "厚10mm／幅500mm／長2000mm",
    place: "ハウス入口・台車通路で安定感を重視",
    guide: "ぬかるみ強め・安定感重視",
    url: "https://www.gc-select.com/products/6300032877",
  },
  {
    imgId: "6300032878",
    name: "農作業用ゴムマット 10mm×700mm×2000mm",
    size: "厚10mm／幅700mm／長2000mm",
    place: "広いハウス前・観光農園・一輪車通路",
    guide: "ぬかるみ強め・広め・安定感重視",
    url: "https://www.gc-select.com/products/6300032878",
  },
];

const RAKUNO: Mat[] = [
  {
    imgId: "6300032879",
    name: "酪農用ゴムマット 15mm×1400mm×2000mm",
    size: "厚15mm／幅1400mm／長2000mm",
    place: "牛舎・畜舎・馬房の床",
    guide: "厚手で底冷え・滑り対策",
    url: "https://www.gc-select.com/products/6300032879",
  },
  {
    imgId: "6300032880",
    name: "酪農用ゴムマット 20mm×1400mm×2000mm",
    size: "厚20mm／幅1400mm／長2000mm",
    place: "牛舎・畜舎・馬房の床",
    guide: "より厚手でクッション性重視",
    url: "https://www.gc-select.com/products/6300032880",
  },
  {
    imgId: "6300032881",
    name: "酪農用ゴムマット 25mm×1400mm×2000mm",
    size: "厚25mm／幅1400mm／長2000mm",
    place: "牛舎・畜舎・馬房の床",
    guide: "厚みのある床対策",
    url: "https://www.gc-select.com/products/6300032881",
  },
  {
    imgId: "6300032882",
    name: "酪農用ゴムマット 30mm×1400mm×2000mm",
    size: "厚30mm／幅1400mm／長2000mm",
    place: "牛舎・畜舎・馬房の床",
    guide: "最も厚手・重量に注意",
    url: "https://www.gc-select.com/products/6300032882",
  },
];

const YQ = "?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=";
const ASHIKOSHI = [
  {
    imgId: "158667",
    name: "TRUSCO 足腰マット TAM-4515-17（黒）",
    spec: "450×1500mm／厚17mm／黒",
    place: "選果場・作業台前の長めの定位置通路",
    diff: "屋外のぬかるみ用ではなく、乾いた床の定位置立ち作業向け",
    url: `https://store.shopping.yahoo.co.jp/signcity-yshop/158667.html${YQ}`,
  },
  {
    imgId: "158664",
    name: "TRUSCO 足腰マット TAM-4560-17（黒）",
    spec: "450×600mm／厚17mm／黒",
    place: "作業台1名分の足元",
    diff: "1人分のスポット設置に。屋外ぬかるみには不向き",
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

const URL_NOKI_SEARCH =
  "https://www.gc-select.com/pages/search-results-page?q=%E8%BE%B2%E4%BD%9C%E6%A5%AD%E7%94%A8%E3%82%B4%E3%83%A0";
const URL_RAKUNO_SEARCH =
  "https://www.gc-select.com/pages/search-results-page?q=%E9%85%AA%E8%BE%B2%E7%94%A8%E3%82%B4%E3%83%A0";
const URL_ASHIKOSHI_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%B6%B3%E8%85%B0%E3%83%9E%E3%83%83%E3%83%88#CentSrchFilter1";

const faqs = [
  {
    q: "Q1. ビニールハウス入口のぬかるみ対策では何をすればよいですか？",
    a: "まず水がたまる場所を確認し、整地・排水で足元を整えたうえで、歩行や台車移動が多い部分に農作業用ゴムマットを敷く方法があります。ぬかるみが強い場合は、先に排水改善を行うことが大切です。",
  },
  {
    q: "Q2. 農作業用ゴムマットの幅は350mm・500mm・700mmのどれを選べばよいですか？",
    a: "人が一人ずつ通る細い通路や畝間は350mm、ハウス入口や収穫かごを持った移動は500mm、台車・一輪車や観光農園の歩行通路は700mmが目安です。動線に合わせて選びましょう。",
  },
  {
    q: "Q3. 厚みは5mm・7mm・10mmのどれがよいですか？",
    a: "軽めのぬかるみや季節限定の設置は5mm、ハウス入口や台車通行など標準用途は7mm、ぬかるみや凹凸が気になる場所や安定感重視は10mmが目安です。厚いほど重くなるため、移動・保管のしやすさも確認してください。",
  },
  {
    q: "Q4. 農作業用ゴムマットはハウス入口以外にも使えますか？",
    a: "畝間や作物間の通路、種苗用ハウスの歩行路、観光農園の歩行通路、選果場周辺の足元対策などにも使えます。用途に合えば導入しやすい選択肢です。",
  },
  {
    q: "Q5. 牛舎にも農作業用ゴムマットを使えますか？",
    a: "牛舎・畜舎・馬房の床には、より厚手の酪農用ゴムマット（15〜30mm）の検討が向いています。用途が異なるため、現場の床状態・清掃性・排水・段差を確認して選びましょう。",
  },
  {
    q: "Q6. 選果場の立ち仕事にはどのマットが向いていますか？",
    a: "乾いた床での定位置の立ち作業には、クッション性のあるTRUSCO足腰マットが関連対策になります。屋外のぬかるみ通路には農作業用ゴムマット、という使い分けが基本です。",
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
      name: "ビニールハウス入口のぬかるみ対策",
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
          <span className="text-gray-700">ビニールハウス入口のぬかるみ対策</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          ビニールハウス入口のぬかるみ対策｜農作業用ゴムマットで歩きやすい通路を作る方法
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月3日／約14分で読めます</p>

        <img
          src={`${ARTICLE_IMG}/greenhouse-entrance-mud-rubber-mat-hero.jpg`}
          alt="ハウス入口のぬかるみ対策に農作業用ゴムマットを敷くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">ビニールハウス入口のぬかるみ対策（要点）</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            ビニールハウス入口のぬかるみ対策では、まず水がたまりやすい場所を確認し、土をならして排水しやすい状態にしたうえで、歩行や台車移動が多い部分に農作業用ゴムマットを敷く方法があります。人が歩くだけの狭い入口なら幅350mm〜500mm、台車や一輪車も通る場所なら幅500mm〜700mm、ぬかるみが強い場所や安定感を重視する場所では厚み7mm〜10mmを目安に検討すると選びやすくなります。
          </p>
        </div>

        <p className={cls.body}>
          雨上がりや梅雨・霜の時期、ビニールハウスの入口がぬかるんで歩きにくい——多くのハウス栽培の現場で起こりがちな悩みです。長靴や作業服が泥だらけになり、台車や一輪車が動かしにくく、ハウス内へ泥を持ち込んでしまうこともあります。この記事では、農作業用ゴムマットを使ったハウス入口のぬかるみ対策を、幅・厚みの選び方や敷き方の注意点とあわせて解説します。
        </p>
        <Note>
          農作業用ゴムマットは足元対策の一つとして役立ちますが、万能ではありません。水たまりや凹凸が強い場所では、排水の確認、整地、端部のズレ対策、定期点検も必要です。現場環境に合わせて検討してください。
        </Note>

        <H2>ビニールハウス入口がぬかるみやすい理由</H2>

        <H3>雨水が入口付近に集まりやすい</H3>
        <p className={cls.body}>
          ハウスの屋根（被覆）を流れた雨水は、軒先にあたる入口付近へ落ちて集まりやすくなります。さらに入口は毎日踏み固められて土が締まり、水が地面に染み込みにくくなります。周囲より低くて水が逃げにくい地形だと、雨のたびに水がたまりやすくなります。
        </p>

        <H3>人・台車・農機の出入りで土がえぐれやすい</H3>
        <p className={cls.body}>
          入口は毎日同じ場所を通るため、車輪跡やへこみができやすい場所です。えぐれた部分に水がたまると、さらにぬかるみが進みます。
        </p>

        <H3>梅雨・霜・朝露の時期は足元が悪化しやすい</H3>
        <p className={cls.body}>
          梅雨の長雨、冬場の霜、早朝の朝露などで、土の表面が濡れて滑りやすくなります。特に早朝作業では足元が見えにくく、注意が必要です。
        </p>

        <H2>ハウス入口のぬかるみを放置すると起きる問題</H2>

        <img
          src={`${ARTICLE_IMG}/greenhouse-entrance-mud-comparison.jpg`}
          alt="ぬかるんだ入口とマットを敷いた通路の比較イメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>長靴や作業服が汚れ、ハウス内に泥を持ち込みやすい</H3>
        <p className={cls.body}>
          入口がぬかるむと、長靴や作業服に泥が付き、そのままハウス内へ持ち込んでしまいます。床の清掃負担が増え、作物や資材の周辺の衛生感にも影響します。
        </p>

        <H3>台車・一輪車・農業機械が動かしにくくなる</H3>
        <p className={cls.body}>
          車輪が泥に沈むと、押す力が余計に必要になり、作業効率が落ちます。荷崩れや転倒のリスクにもつながります。
        </p>

        <H3>観光農園では来園者の歩きやすさに影響する</H3>
        <p className={cls.body}>
          いちご狩り、果物狩り、収穫体験などでは、来園者が歩く通路の状態が印象を左右します。ぬかるみや泥はねは、歩きにくさや足元の不安につながります。
        </p>

        <H2>ビニールハウス入口のぬかるみ対策でまず確認したいこと</H2>

        <H3>水がどこから来て、どこにたまるかを見る</H3>
        <p className={cls.body}>
          屋根からの雨だれの落ち位置、周囲の高低差、排水溝や溝の有無を確認します。水の出どころと集まる場所がわかると、整地・排水・マット敷設の優先順位を決めやすくなります。
        </p>

        <H3>通るのは人だけか、台車・農機も通るか</H3>
        <p className={cls.body}>
          人だけが歩くのか、収穫かごを持つのか、台車を押すのか、農業機械が通るのか——動線によって必要な幅や厚みが変わります。
        </p>

        <H3>常設か、季節限定かを決める</H3>
        <p className={cls.body}>
          梅雨だけ、冬季だけ、観光農園の営業期間だけ、あるいは常設か。設置期間によって、扱いやすさや重量の考え方（薄手で動かしやすいか、厚手で安定重視か）が変わります。
        </p>

        <H2>ハウス入口の敷材は何がよい？砂利・板・人工芝・ゴムマットの違い</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">敷材</th>
                <th className="p-3 text-left">メリット</th>
                <th className="p-3 text-left">注意点</th>
                <th className="p-3 text-left">向いている場所</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "砂利",
                  "排水性が高い・比較的安価",
                  "車輪が取られやすい・沈む・撤去に手間",
                  "常設で排水を改善したい場所",
                ],
                [
                  "木板・コンパネ",
                  "入手しやすい・一時的に平面を作れる",
                  "濡れると滑る・腐食や反りが出る",
                  "ごく短期の応急対応",
                ],
                [
                  "人工芝",
                  "見た目がよい・泥はねを抑えやすい",
                  "泥で目詰まり・固定や耐久に注意",
                  "観光農園の見せる通路",
                ],
                [
                  "農作業用ゴムマット",
                  "敷くだけで歩行路を固定・台車が通りやすい",
                  "水たまりの上には不向き・端部段差・重量",
                  "ハウス入口・温室通路・畑の通路・選果場周辺",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                  <td className="p-3 align-top">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>農作業用ゴムマットをハウス入口に敷くメリット</H2>

        <img
          src={`${ARTICLE_IMG}/tourist-farm-walkway-mat.jpg`}
          alt="来園者が歩くハウス通路にマットを敷くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>歩行路を作りやすい</H3>
        <p className={cls.body}>
          泥の上を直接歩かずに済み、作業者が通る動線を固定しやすくなります。決まった場所を歩くことで、ぬかるみの拡大も抑えやすくなります。
        </p>

        <H3>台車・一輪車を動かしやすくなる</H3>
        <p className={cls.body}>
          車輪が沈みにくい通路を作りやすく、収穫物や資材の運搬がしやすくなります。
        </p>

        <H3>観光農園の歩行通路にも使いやすい</H3>
        <p className={cls.body}>
          来園者が歩く場所を明確にでき、泥はねや足元の悪さの印象を軽減しやすくなります。
        </p>

        <H3>選果場や種苗用ハウスの足元対策にも広げられる</H3>
        <p className={cls.body}>
          歩行路だけでなく、立ち作業の足元対策としても使えます。ハウス入口以外への展開も検討できます。
        </p>

        <H2>農作業用ゴムマットの幅はどう選ぶ？350mm・500mm・700mmの使い分け</H2>

        <img
          src={`${ARTICLE_IMG}/rubber-mat-width-thickness-selection.jpg`}
          alt="農作業用ゴムマットの幅と厚みを選ぶイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">幅</th>
                <th className="p-3 text-left">向いている通行</th>
                <th className="p-3 text-left">目安の商品</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "350mm",
                  "人が一人ずつ通る細い通路・畝間・簡易歩行路",
                  "5/7/10mm × 350mm",
                ],
                [
                  "500mm",
                  "ハウス入口・収穫かごを持った移動・軽い台車",
                  "5/7/10mm × 500mm",
                ],
                [
                  "700mm",
                  "観光農園の歩行通路・台車/一輪車・広めのハウス前",
                  "7/10mm × 700mm",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>厚みはどう選ぶ？5mm・7mm・10mmの使い分け</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">厚み</th>
                <th className="p-3 text-left">向いている状況</th>
                <th className="p-3 text-left">目安の商品</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "5mm",
                  "軽めのぬかるみ・季節限定の設置・移動や保管を重視",
                  "5mm × 350/500mm",
                ],
                [
                  "7mm",
                  "ハウス入口・畝間・台車通行など標準的な足元対策",
                  "7mm × 350/500/700mm",
                ],
                [
                  "10mm",
                  "ぬかるみや凹凸が気になる場所・安定感を重視",
                  "10mm × 350/500/700mm",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left font-bold align-top">
                    {r[0]}
                  </th>
                  <td className="p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>
          厚みが増えるほど安定感は高まりますが、重量も増えます。設置・移動・保管のしやすさもあわせて確認してください。
        </Note>

        <H2>掲載商品一覧｜農作業用ゴムマットのサイズ別比較</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品名</th>
                <th className="p-3 text-left">サイズ</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">選び方の目安</th>
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
                  <td className="p-3 align-top">{m.guide}</td>
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

        <H2>ハウス入口に農作業用ゴムマットを敷く手順</H2>

        <H3>水たまりと凹凸を確認する</H3>
        <p className={cls.body}>
          雨の翌日に水が残る場所を確認し、入口のへこみや段差をならします。ぬかるみがひどい場合は、先に整地や排水の改善を行ってから敷くのが基本です。
        </p>

        <H3>通路幅を決める</H3>
        <p className={cls.body}>
          人だけなら350mm〜500mm、台車・一輪車なら500mm〜700mm、観光農園なら700mmまたは複数枚を並べる配置も検討します。
        </p>

        <H3>必要枚数を計算する</H3>
        <p className={cls.body}>
          1枚の長さは2mです。入口からどこまで敷くか、ハウス内の通路まで延ばすかで必要枚数が変わります。敷きたい距離を2mで割って枚数の目安を出しましょう。
        </p>

        <H3>敷いた後にズレ・浮き・端部を点検する</H3>
        <p className={cls.body}>
          つまずき、台車通行時の浮き、マット下の水たまり、泥の堆積がないか、定期的に点検します。
        </p>

        <H2>失敗しやすいハウス入口のぬかるみ対策</H2>
        <H3>水たまりの上にそのまま敷いてしまう</H3>
        <p className={cls.body}>
          水が抜けない場所にそのまま敷くと、マット下に水がたまり、かえって不安定になります。先に排水・整地を行いましょう。
        </p>
        <H3>幅が狭すぎて、結局マットの外を歩いてしまう</H3>
        <p className={cls.body}>
          通行に対して幅が足りないと、人や台車がマットの外を通り、効果が薄れます。動線に合った幅を選びます。
        </p>
        <H3>厚みだけで選んで、移動・保管しにくくなる</H3>
        <p className={cls.body}>
          厚いほど安定しますが重くなります。季節限定で片付ける運用なら、扱いやすさとのバランスも大切です。
        </p>
        <H3>端部の段差対策を忘れる</H3>
        <p className={cls.body}>
          端部の段差はつまずきや台車の引っかかりの原因になります。端の処理や固定も確認しましょう。
        </p>

        <H2>ハウス入口以外で農作業用ゴムマットを使いやすい場所</H2>
        <H3>畝間・作物間の通路</H3>
        <p className={cls.body}>
          足場の悪い畝や、収穫時の歩行路として使えます。
        </p>
        <H3>種苗用ハウスの歩行路</H3>
        <p className={cls.body}>
          水やり、苗の出し入れ、台車移動の通路として役立ちます。
        </p>
        <H3>観光農園の歩行通路</H3>
        <p className={cls.body}>
          いちご狩り、果物狩り、収穫体験など、来園者の導線づくりに使えます。
        </p>
        <H3>選果場・袋詰め作業場の足元</H3>
        <p className={cls.body}>
          農作業用ゴムマットで足元を整えられます。加えて、長時間の定位置作業では、後述のTRUSCO足腰マットも関連商品として検討できます。足腰マット全般の選び方は
          <Link
            href="/articles/standing-work-anti-fatigue-mat"
            className="text-gray-900 underline hover:no-underline"
          >
            立ち仕事の疲労軽減マットの選び方
          </Link>
          もあわせてご覧ください。
        </p>

        <H2>牛舎・畜舎の床には酪農用ゴムマットも検討する</H2>

        <img
          src={`${ARTICLE_IMG}/barn-dairy-rubber-mat.jpg`}
          alt="牛舎床に厚手ゴムマットを敷くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          農作業用ゴムマットとは用途が異なりますが、牛舎・畜舎・馬房の床対策には、より厚手の酪農用ゴムマットが候補になります。冬季の底冷え対策、作業者の足腰の疲労軽減、牛や馬が滑りにくい床材として検討できます。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品名</th>
                <th className="p-3 text-left">サイズ</th>
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
        <Note>
          酪農用ゴムマットを導入する際は、現場の床状態、清掃性、排水、段差、設置作業のしやすさを必ず確認してください。滑りにくさや疲労軽減は環境により異なり、転倒や体調を保証するものではありません。
        </Note>
        <CTA
          url={URL_RAKUNO_SEARCH}
          label="牛舎・畜舎の底冷えや滑り対策に使える酪農用ゴムマットを確認する"
        />

        <H2>選果場・工場・作業台前の立ち仕事にはTRUSCO足腰マットも関連対策になる</H2>

        <img
          src={`${ARTICLE_IMG}/sorting-area-anti-fatigue-mat.jpg`}
          alt="作業台前に疲労軽減マットを敷くイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          屋外のぬかるみ通路には農作業用ゴムマット、選果場・作業台前・工場ラインなどの乾いた床での定位置作業にはTRUSCO足腰マット、という使い分けができます。足腰マットは長時間の立ち作業の足元に敷くクッション性のあるマットです。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品名</th>
                <th className="p-3 text-left">サイズ・特徴</th>
                <th className="p-3 text-left">向いている場所</th>
                <th className="p-3 text-left">農作業用ゴムマットとの違い</th>
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

        <H2>ハウス入口のぬかるみ対策チェックリスト</H2>
        <ul className="my-6 space-y-2 leading-relaxed tracking-wide text-gray-800">
          {[
            "雨の後に水がたまる場所を確認したか",
            "ハウス入口の凹凸や段差をならしたか",
            "人だけが通るのか、台車・一輪車も通るのか確認したか",
            "通路幅に合わせて350mm・500mm・700mmを選んだか",
            "ぬかるみの強さに合わせて5mm・7mm・10mmを検討したか",
            "必要な長さに合わせて2mマットの枚数を計算したか",
            "端部のつまずきやズレを点検する運用にしたか",
            "選果場・作業台前など、立ち仕事の足元対策も別途確認したか",
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

        <H2>まとめ｜用途と現場環境に合わせてマットを選ぶ</H2>
        <p className={cls.body}>
          ハウス入口のぬかるみ対策は、水の流れを確認し、整地・排水を整えたうえで、動線に合った幅・厚みの農作業用ゴムマットを敷くのが基本です。用途に応じて、牛舎・畜舎には酪農用ゴムマット、選果場・作業台前の立ち仕事にはTRUSCO足腰マットも検討できます。
        </p>
        <CTA
          url={URL_NOKI_SEARCH}
          label="ハウス入口・畝間・温室通路に使える農作業用ゴムマットを確認する"
        />
        <CTA
          url={URL_RAKUNO_SEARCH}
          label="牛舎・畜舎の底冷えや滑り対策に使える酪農用ゴムマットを確認する"
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
