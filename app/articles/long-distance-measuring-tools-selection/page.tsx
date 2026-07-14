import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "long-distance-measuring-tools-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/long-distance-measuring-tools-hero.jpg`,
  walking: `${ARTICLE_IMG}/walking-measuring-wheel-parking-site.jpg`,
  tape: `${ARTICLE_IMG}/long-reel-tape-straight-distance-measurement.jpg`,
  surface: `${ARTICLE_IMG}/measuring-wheel-surface-condition-comparison.jpg`,
  setting: `${ARTICLE_IMG}/setting-measure-workbench-positioning.jpg`,
  checklist: `${ARTICLE_IMG}/measurement-tools-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "長い距離を測る道具の選び方｜ウォーキングメジャー・巻尺の使い分け｜作業用品ナビ",
  description:
    "現場で長い距離を測る道具の選び方を解説。ウォーキングメジャー、ロードメジャー、デジタルカウントメジャー、30m・50m巻尺、セッティングメジャーの違いを、道路・駐車場・工場・倉庫など用途別に比較します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "長い距離を測る道具の選び方｜ウォーキングメジャー・巻尺の使い分け",
    description:
      "現場で長い距離を測る道具の選び方を解説。ウォーキングメジャー、ロードメジャー、デジタルカウントメジャー、30m・50m巻尺、セッティングメジャーの違いを、道路・駐車場・工場・倉庫など用途別に比較します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* ============================================================
   URL ヘルパー（UTM は # の前に付与。既存エンコードは再エンコードしない）
   ============================================================ */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string) {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string) => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}

// 楽天 crecote-shop（末尾スラッシュ必須）
const R = (p: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${p}`, UTM);
// Yahoo signcity-yshop（クリーン：カルティオ/安全靴/工具箱）
const YB = (id: string) =>
  buildUrl(`https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html`, UTM);
// Yahoo signcity-yshop（sc_i / ea= 保持：カルティオビッグ）
const SC_RES = "shopping-pc-web-result-storesch-rsltlst-img";
const YBQ = (id: string, sc: string) =>
  buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`,
    UTM
  );

/* ---- 一覧CTA ---- */
const LIST_DAISHA = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html",
  UTM
); // 運搬台車一覧（今回クリーン）
const LIST_SEIBI = buildUrl(
  "https://search.rakuten.co.jp/search/mall/%E6%95%B4%E5%82%99%E7%94%A8/?sid=426972",
  UTM
); // 整備用工具一覧（楽天検索）
const LIST_TRUSCO = buildUrl(
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctp&prom=1&view=grid",
  UTM
); // トラスコ中山商品一覧

type Item = { id: string; url: string; name: string };

const productImage = (id: string) => `/products/${id}.jpg`;

/* ---- 車輪式・ウォーキングメジャー（楽天／名称・スペックは要確認・価格非掲載） ---- */
const W_DWS160C: Item = {
  id: "ta023222-dws160c",
  url: R("ta023222-dws160c/"),
  name: "STS デジタルウォーキングメジャー DWS160C",
};
const W_DWM190P: Item = {
  id: "ta023220-dwm190p",
  url: R("ta023220-dwm190p/"),
  name: "STS デジタルウォーキングメジャー DWM-190P",
};
const W_75419: Item = {
  id: "ta003906-75419",
  url: R("ta003906-75419/"),
  name: "シンワ デジタルカウントメジャー 75419",
};
const W_MG100: Item = {
  id: "ta021640-222302",
  url: R("ta021640-222302/"),
  name: "MYZOX ホイールメジャー MG-100",
};
const W_MG200: Item = {
  id: "ta021641-222303",
  url: R("ta021641-222303/"),
  name: "MYZOX ホイールメジャー MG-200",
};
const W_D44: Item = {
  id: "ta022976-d44",
  url: R("ta022976-d44/"),
  name: "宣真 コロコロメジャー4型 D44",
};
const W_D33: Item = {
  id: "ta022974-d33",
  url: R("ta022974-d33/"),
  name: "宣真 コロコロメジャー3型 D33",
};
const W_B20S: Item = {
  id: "ta022511-b20s",
  url: R("ta022511-b20s/"),
  name: "宣真工業 コロコロメジャー B20S",
};
const W_E20S: Item = {
  id: "ta022086-75422",
  url: R("ta022086-75422/"),
  name: "シンワ カウントメジャー E20-S",
};
const W_ENR1000: Item = {
  id: "ta023351-enr1000",
  url: R("ta023351-enr1000/"),
  name: "タジマ エンジニヤ ロードメジャー1000 ENR1000",
};
// 長尺巻尺
const T_HSW50: Item = {
  id: "ta024051-hsw50",
  url: R("ta024051-hsw50/"),
  name: "タジマ エンジニヤ スーパーワイド 50m HSW50",
};
const T_HSW30: Item = {
  id: "ta024046-hsw30",
  url: R("ta024046-hsw30/"),
  name: "タジマ エンジニヤ スーパーワイド 30m HSW30",
};
const T_UL1350: Item = {
  id: "ta028551-ul1350",
  url: R("ta028551-ul1350/"),
  name: "KDS ユニロング 50m UL1350",
};
const T_ST1330: Item = {
  id: "ta028018-st1330",
  url: R("ta028018-st1330/"),
  name: "KDS スピードテクロン 30m ST1330",
};
const T_YSR50: Item = {
  id: "ta029012-ysr50",
  url: R("ta029012-ysr50/"),
  name: "タジマ シムロン-R 50m YSR50",
};
const T_HSW3100R: Item = {
  id: "ta024049-hsw3100r",
  url: R("ta024049-hsw3100r/"),
  name: "タジマ スーパーワイド 100m用交換テープ HSW3100R",
};
// セッティングメジャー
const S_ST1002: Item = {
  id: "ta014569-st1002bp",
  url: R("ta014569-st1002bp/"),
  name: "KDS セッティングメジャー 10巾2m ST10-02BP",
};
const S_STB1302: Item = {
  id: "ta014614-stb1302bp",
  url: R("ta014614-stb1302bp/"),
  name: "KDS セッティングメジャー 逆目盛 2m STB13-02BP",
};
const S_STB1305: Item = {
  id: "ta014615-stb1305bp",
  url: R("ta014615-stb1305bp/"),
  name: "KDS セッティングメジャー 逆目盛 5m STB13-05BP",
};
const S_SST1002: Item = {
  id: "ta014565-sst1002bp",
  url: R("ta014565-sst1002bp/"),
  name: "KDS ステンレスセッティングメジャー 2m SST10-02BP",
};
// 専用メジャー（HMF/HMCは1モデル1リンク。仕様はメーカー確認）
const P_HMF052: Item = {
  id: "ta024001-hmf052",
  url: R("ta024001-hmf052/"),
  name: "東京ニホス ハンディーメジャー HMF-052（仕様はメーカー要確認）",
};
const P_HMC051: Item = {
  id: "ta023999-hmc051",
  url: R("ta023999-hmc051/"),
  name: "東京ニホス ハンディーメジャー HMC-051（仕様はメーカー要確認）",
};
const P_HMF051: Item = {
  id: "ta008672-hmf051",
  url: R("ta008672-hmf051/"),
  name: "東京ニホス ハンディーメジャー HMF-051（仕様はメーカー要確認）",
};
const P_NDV750W: Item = {
  id: "ta011518-ndv750w",
  url: R("ta011518-ndv750w/"),
  name: "日本度器 ガラス繊維製 Vベルトメジャー NDV-750W",
};
// 落下防止
const H_HOLSTER: Item = {
  id: "ta021418-1500100",
  url: R("ta021418-1500100/"),
  name: "3M DBI-サラ メジャーホルスターキット",
};
// 関連（Yahoo）
const K_KARU: Item = {
  id: "167468",
  url: YB("167468"),
  name: "TRUSCO カルティオ ブラック",
};
const K_KARU_BL: Item = {
  id: "190479",
  url: YB("190479"),
  name: "TRUSCO カルティオ ブルー",
};
const K_KARU_STOP: Item = {
  id: "190475",
  url: YB("190475"),
  name: "TRUSCO カルティオ スチールストッパー付",
};
const KB_BLACK: Item = {
  id: "159757",
  url: YBQ("159757", SC_RES),
  name: "TRUSCO カルティオビッグ ブラック",
};
const KB_BLACK_STOP: Item = {
  id: "216708",
  url: YBQ("216708", SC_RES),
  name: "TRUSCO カルティオビッグ ブラック ストッパー付",
};
const KB_OLIVE_STOP: Item = {
  id: "216713",
  url: YBQ("216713", SC_RES),
  name: "TRUSCO カルティオビッグ オリーブ ストッパー付",
};
const SHOE_A: Item = {
  id: "155406",
  url: YB("155406"),
  name: "ニューバランス 安全靴（型番は商品ページで要確認）",
};
const SHOE_B: Item = {
  id: "155335",
  url: YB("155335"),
  name: "ニューバランス 安全靴（型番は商品ページで要確認）",
};
const SHOE_C: Item = {
  id: "155361",
  url: YB("155361"),
  name: "ニューバランス 安全靴（型番は商品ページで要確認）",
};
const BOX_A: Item = {
  id: "157971",
  url: YB("157971"),
  name: "工具ボックス（仕様は商品ページで要確認）",
};
const BOX_B: Item = {
  id: "157957",
  url: YB("157957"),
  name: "工具ボックス（仕様は商品ページで要確認）",
};
const BOX_C: Item = {
  id: "158008",
  url: YB("158008"),
  name: "工具ボックス（仕様は商品ページで要確認）",
};
const TONE_SV: Item = {
  id: "ta041904-tsa350sv",
  url: R("ta041904-tsa350sv/"),
  name: "TONE 整備用工具セット TSA350SV",
};
const TONE_BK: Item = {
  id: "ta041903-tsa350bk",
  url: R("ta041903-tsa350bk/"),
  name: "TONE 整備用工具セット TSA350BK",
};
const TONE_4331: Item = {
  id: "ta041933-tss4331bk",
  url: R("ta041933-tss4331bk/"),
  name: "TONE 整備用工具セット TSS4331BK",
};

const CAT_REP: Item[] = [W_DWS160C, T_HSW50, S_ST1002, P_HMF052];
const WHEEL_DIGITAL: Item[] = [W_DWS160C, W_DWM190P, W_75419];
const WHEEL_MECH: Item[] = [
  W_MG100,
  W_MG200,
  W_D44,
  W_D33,
  W_B20S,
  W_E20S,
  W_ENR1000,
];
const TAPES: Item[] = [
  T_HSW30,
  T_HSW50,
  T_ST1330,
  T_UL1350,
  T_YSR50,
  T_HSW3100R,
];
const SETTINGS: Item[] = [S_ST1002, S_STB1302, S_STB1305, S_SST1002];
const SPECIALS: Item[] = [P_HMF052, P_HMC051, P_HMF051, P_NDV750W];
const KARU_ALL: Item[] = [K_KARU, K_KARU_BL, K_KARU_STOP];
const KARUBIG_ALL: Item[] = [KB_BLACK, KB_BLACK_STOP, KB_OLIVE_STOP];
const SHOES: Item[] = [SHOE_A, SHOE_B, SHOE_C];
const BOXES: Item[] = [BOX_A, BOX_B, BOX_C];
const TONES: Item[] = [TONE_SV, TONE_BK, TONE_4331];

const FAQ_ITEMS = [
  {
    q: "長い距離を一人で測るには何を使えばよいですか？",
    a: "道路・駐車場・工場通路など地面に沿った距離ならウォーキングメジャーが使いやすい候補です。2点間の正確な直線は、長尺巻尺やレーザー距離計なども比較します。",
  },
  {
    q: "ウォーキングメジャーとロードメジャーは違いますか？",
    a: "どちらも車輪を転がして距離を測る製品を指す名称として使われます。ホイールメジャー・カウントメジャー・ローラー距離計などの名称もあるため、名称より仕様と用途を確認します。",
  },
  {
    q: "ウォーキングメジャーで曲線を測れますか？",
    a: "地面に沿った緩やかな曲線や経路は測りやすいです。ただし蛇行すると、その分も距離に加算されます。",
  },
  {
    q: "砂利道でも測れますか？",
    a: "測定自体は可能な場合がありますが、車輪の滑り・跳ね・沈み込みで誤差が増えやすくなります。複数回測り、必要に応じて別方式で再確認します。",
  },
  {
    q: "デジタル式と機械式はどちらがよいですか？",
    a: "数値の読みやすさやホールド機能を重視するならデジタル式、電池管理を減らしシンプルに使いたいなら機械式が候補です。実際の機能は各商品ページで確認します。",
  },
  {
    q: "30mと50mの巻尺はどう選びますか？",
    a: "日常的な中距離測定なら30m、広い敷地や50m近い直線を頻繁に測るなら50mが候補です。使用頻度・重量・巻き取り・保管方法も確認します。",
  },
  {
    q: "レーザー距離計とはどう使い分けますか？",
    a: "見通せる2点間を測るならレーザー距離計、道路・外周・曲線など地面のルートを測るならウォーキングメジャーが向きます。",
  },
  {
    q: "正式な測量に使えますか？",
    a: "概算距離の確認には便利ですが、正式な測量・検査・契約寸法では、求められる精度や手順に適合する測量機器を使用してください。",
  },
  {
    q: "セッティングメジャーの逆目盛は何に使いますか？",
    a: "基準点から逆方向へ数値を読みたい作業台・加工機・切断機などで使いやすいタイプです。取り付け方向を確認して選びます。",
  },
  {
    q: "測定値は何回確認すべきですか？",
    a: "路面状態や必要精度によりますが、少なくとも再測定し、値に大きな差がないか確認すると記録の信頼性を高めやすくなります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "長い距離を測る道具の選び方",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

/* ============================================================
   自前コンポーネント（作業用品ナビ・自己完結）
   ============================================================ */
function CTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mb-4 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function FinalCTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-10 rounded-xl border-2 border-gray-900 bg-gray-50 p-7 text-center">
      <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
        {title}
      </p>
      <p className={`mb-5 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function ProductLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
    >
      {name}
    </a>
  );
}

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-900 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="flex-1 text-xs font-bold leading-snug text-gray-900 sm:text-sm">
          {item.name}
        </p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-bold text-white sm:text-sm">
          商品を見る
        </span>
      </div>
    </a>
  );
}

function CardGrid({ items, cols }: { items: Item[]; cols?: string }) {
  return (
    <div
      className={`my-6 grid grid-cols-2 gap-3 sm:gap-4 ${cols ?? "md:grid-cols-3 lg:grid-cols-4"}`}
    >
      {items.map((it) => (
        <ProductCard key={it.id} item={it} />
      ))}
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-1 font-bold text-red-700">⚠️ ご確認ください</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function ArticleImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} loading="lazy" className="my-6 w-full rounded-lg" />
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold text-gray-900">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 align-top text-sm text-gray-700">
      {children}
    </td>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">長い距離を測る道具の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          現場で長い距離を測る道具の選び方｜ウォーキングメジャー・長尺巻尺・専用メジャーを比較
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月14日／約16分で読めます
        </p>

        <p className={cls.body}>
          駐車場・道路・工場通路・敷地外周など、長い距離を測りたいとき、どの道具を選べばよいか迷いがちです。本記事では、商品名から選ぶのではなく「何を・どこで・どの精度で測るか」から測定方式を選べるよう、ウォーキングメジャー（車輪式）・長尺巻尺・セッティングメジャー・専用メジャーの違いを、現場責任者・購買担当の実務目線で整理します。
        </p>

        <ArticleImg
          src={IMG.hero}
          alt="ウォーキングメジャーや長尺巻尺を現場で比較するイメージ"
        />

        {/* AEO回答ブロック（グレー枠） */}
        <div className="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">
            結論：長い距離を測る道具は「測る対象」と「必要な精度」で選びます。
          </p>
          <ul className="mb-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
            <li>
              道路・駐車場・工場通路など地面に沿った距離を一人で測る：ウォーキングメジャー・ロードメジャー
            </li>
            <li>2点間の直線距離を測る：30m・50mなどの長尺巻尺</li>
            <li>曲線や敷設ルートを測る：車輪式メジャー</li>
            <li>作業台や機械の位置決めを繰り返す：セッティングメジャー</li>
            <li>Vベルトなど専用対象を測る：対象物に対応した専用メジャー</li>
            <li>見通せる2点間を素早く測る：レーザー距離計も比較対象</li>
          </ul>
          <p className={cls.bodySm}>
            車輪式メジャーは素早く測れる一方、凹凸・段差・砂地・泥・草地では滑りや跳ねによる誤差が出やすくなります。正確な施工寸法や正式な測量に使う場合は、必要精度に合う巻尺・レーザー距離計・測量機器を選びましょう。
          </p>
        </div>

        <CTA
          href={LIST_TRUSCO}
          title="測る対象から現場用メジャーを選ぶ"
          body="地面に沿った距離、2点間の直線、作業台の位置決めなど、測定方法に合う工具を確認しましょう（仕様・価格・在庫は商品ページでご確認ください）。"
          label="測定工具・現場用品の一覧を見る"
        />
        <p className="mb-2 text-sm font-bold text-gray-900">測定方式ごとの代表例</p>
        <CardGrid items={CAT_REP} />

        <H2>長い距離を測る道具は「測る対象」で選ぶ</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：測りたい対象別の道具
            </caption>
            <thead>
              <tr>
                <Th>測りたい対象</Th>
                <Th>向く道具</Th>
                <Th>特徴</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>道路・駐車場・通路</Td>
                <Td>ウォーキングメジャー</Td>
                <Td>一人で歩きながら測りやすい</Td>
              </tr>
              <tr>
                <Td>曲線・外周・敷設ルート</Td>
                <Td>ホイール・ロードメジャー</Td>
                <Td>地面の経路に沿って測れる</Td>
              </tr>
              <tr>
                <Td>建物幅・区画・直線</Td>
                <Td>長尺巻尺</Td>
                <Td>2点間の直線を確認しやすい</Td>
              </tr>
              <tr>
                <Td>見通しのよい2点間</Td>
                <Td>レーザー距離計</Td>
                <Td>素早く測れるが環境条件を確認</Td>
              </tr>
              <tr>
                <Td>作業台・機械</Td>
                <Td>セッティングメジャー</Td>
                <Td>常設目盛りとして使いやすい</Td>
              </tr>
              <tr>
                <Td>Vベルト等</Td>
                <Td>専用メジャー</Td>
                <Td>対象物に合う仕様を選ぶ</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>地面に沿った距離はウォーキングメジャー</H3>
        <p className={cls.body}>
          道路・駐車場・工場通路など、地面に沿った距離を一人で素早く測るならウォーキングメジャー（車輪式）が向きます。
        </p>
        <H3>2点間の直線距離は長尺巻尺</H3>
        <p className={cls.body}>
          建物幅・区画・基準線など、2点間の直線を確認するなら30m・50mの長尺巻尺が向きます。
        </p>
        <H3>見通せる2点間はレーザー距離計</H3>
        <p className={cls.body}>
          見通しのよい2点間を素早く測るならレーザー距離計も候補です（反射面・日光・障害物などの環境条件を確認）。本記事の掲載商品には含みませんが、比較のため触れています。
        </p>
        <H3>作業台・機械の位置決めはセッティングメジャー</H3>
        <p className={cls.body}>
          作業台や機械で同じ位置を繰り返し確認するなら、常設目盛りとして使うセッティングメジャーが向きます。
        </p>
        <H3>ベルト・線材などは専用メジャー</H3>
        <p className={cls.body}>
          Vベルトや線材など、一般的な巻尺では測りにくい対象は、対象物に対応した専用メジャーを選びます。
        </p>

        <H2>ウォーキングメジャー・ロードメジャーとは？</H2>
        <ArticleImg
          src={IMG.walking}
          alt="駐車場や道路でウォーキングメジャーを使うイメージ"
        />
        <H3>車輪の回転数から移動距離を測る</H3>
        <p className={cls.body}>
          車輪式の測定器は、車輪を地面に沿って転がし、その回転数から移動距離を求めます。ホイールメジャー・カウントメジャー・ローラー距離計などの名称でも呼ばれます。
        </p>
        <H3>一人で長い距離を測りやすい</H3>
        <p className={cls.body}>
          歩きながら測れるため、長い距離を一人で素早く測りやすいのが利点です。
        </p>
        <H3>直線だけでなく緩やかな曲線も測れる</H3>
        <p className={cls.body}>
          地面に沿った緩やかな曲線や外周・敷設ルートも測りやすくなります。
        </p>
        <H3>地面の表面距離を測る点に注意する</H3>
        <p className={cls.body}>
          車輪式が測るのは、原則として「車輪が通った表面に沿った距離」です。2点間の水平直線距離とは異なる点に注意します。
        </p>
        <H3>正式な測量・高精度測定との違い</H3>
        <p className={cls.body}>
          概算距離の確認には便利ですが、正式な測量や高い精度が求められる寸法確認では、必要精度に合う巻尺・レーザー距離計・測量機器と手順を用います。
        </p>

        <CTA
          href={W_DWS160C.url}
          title="道路・駐車場・工場通路を一人で測りたい方へ"
          body="デジタル表示、機械式カウンター、車輪径、収納性などを比較して選びましょう。まずは代表的なデジタルウォーキングメジャーから確認できます。"
          label="STS デジタルウォーキングメジャー DWS160C を見る"
        />

        <H2>ウォーキングメジャーを選ぶ7つのポイント</H2>
        <H3>デジタル表示か機械式カウンターか</H3>
        <p className={cls.body}>
          数値の読みやすさやホールド機能を重視するならデジタル、電池管理を減らしシンプルに使うなら機械式が候補です。
        </p>
        <H3>測定できる最大距離</H3>
        <p className={cls.body}>
          現場で測る距離に対して十分な測定範囲があるかを確認します。
        </p>
        <H3>車輪径と取り回し</H3>
        <p className={cls.body}>
          車輪径は路面への追従性や取り回しに影響します。舗装・砂利など使用路面に合うかを確認します。
        </p>
        <H3>前進・後進測定への対応</H3>
        <p className={cls.body}>
          前進だけでなく後進測定に対応するか、機種の仕様を確認します。
        </p>
        <H3>リセット・ホールド機能</H3>
        <p className={cls.body}>
          測定前のゼロリセットや、数値のホールド機能があると作業しやすくなります。
        </p>
        <H3>防じん・防水性</H3>
        <p className={cls.body}>
          屋外・粉じんの多い現場では、保護性能を商品ページで確認します。
        </p>
        <H3>折りたたみ・伸縮・収納性</H3>
        <p className={cls.body}>
          持ち運びや保管を考え、折りたたみ・伸縮・収納性も確認します。
        </p>
        <p className="mb-2 mt-6 text-sm font-bold text-gray-900">デジタル式の候補</p>
        <CardGrid items={WHEEL_DIGITAL} />
        <p className="mb-2 mt-4 text-sm font-bold text-gray-900">
          機械式・カウンター式の候補
        </p>
        <CardGrid items={WHEEL_MECH} />

        <H2>デジタル式と機械式はどちらを選ぶ？</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：デジタル式・機械式の違い
            </caption>
            <thead>
              <tr>
                <Th>比較項目</Th>
                <Th>デジタル式</Th>
                <Th>機械式</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>表示</Td>
                <Td>数値を読み取りやすい</Td>
                <Td>シンプル</Td>
              </tr>
              <tr>
                <Td>記録補助</Td>
                <Td>ホールド等を備える機種がある</Td>
                <Td>紙や端末へ記録</Td>
              </tr>
              <tr>
                <Td>電源</Td>
                <Td>電池の確認が必要</Td>
                <Td>電池不要の機種が多い</Td>
              </tr>
              <tr>
                <Td>雨・粉じん</Td>
                <Td>保護性能を確認</Td>
                <Td>機構部への異物に注意</Td>
              </tr>
              <tr>
                <Td>購入判断</Td>
                <Td>機能重視</Td>
                <Td>扱いやすさ・管理の簡便さ重視</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>数値の読みやすさならデジタル式</H3>
        <p className={cls.body}>
          数値表示は読み取りミスを減らしやすく、ホールド機能で記録もしやすくなります。ただしデジタルが必ず高精度というわけではなく、路面条件の影響は共通です。
        </p>
        <H3>電池管理を減らしたいなら機械式</H3>
        <p className={cls.body}>
          電池不要の機種が多く、管理をシンプルにしたい現場に向きます。
        </p>
        <H3>測定者・拠点を統一するなら操作方法も確認</H3>
        <p className={cls.body}>
          複数拠点・複数担当で使うなら、操作方法をそろえられるかも確認します。
        </p>
        <H3>機能数より現場で使う機能を優先する</H3>
        <p className={cls.body}>
          機能の多さより、実際に現場で使う機能を優先して選びます。
        </p>

        <H2>長尺巻尺は30m・50mをどう選ぶ？</H2>
        <ArticleImg
          src={IMG.tape}
          alt="建設現場で長尺巻尺を使い直線距離を測るイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：30m・50m巻尺の違い
            </caption>
            <thead>
              <tr>
                <Th>選定軸</Th>
                <Th>30m</Th>
                <Th>50m</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>向く現場</Td>
                <Td>中規模施設・建設現場</Td>
                <Td>広い敷地・外構・道路</Td>
              </tr>
              <tr>
                <Td>持ち運び</Td>
                <Td>比較的しやすい</Td>
                <Td>重量・収納を確認</Td>
              </tr>
              <tr>
                <Td>展開・回収</Td>
                <Td>比較的短時間</Td>
                <Td>巻き取り性能が重要</Td>
              </tr>
              <tr>
                <Td>選び方</Td>
                <Td>日常用途</Td>
                <Td>長距離の使用頻度が高い場合</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>日常的な現場測定には30m</H3>
        <p className={cls.body}>
          中規模の施設・建設現場で日常的に測るなら30mが扱いやすい候補です。
        </p>
        <H3>広い敷地・外構・施設では50m</H3>
        <p className={cls.body}>
          広い敷地・外構・道路など、50m近い直線を頻繁に測るなら50mが候補です。
        </p>
        <H3>長いほど便利とは限らない</H3>
        <p className={cls.body}>
          50mは30mより優れているわけではありません。重量・収納・展開回収の手間も踏まえ、使用頻度で選びます。
        </p>
        <H3>テープ素材・幅・巻き取り速度を確認する</H3>
        <p className={cls.body}>
          テープ素材（スチール・ガラス繊維など）・幅・巻き取り方式は使い勝手に影響します。ガラス繊維は絶縁性や取り回しの面で選ばれることがあります。
        </p>
        <H3>交換テープの有無も確認する</H3>
        <p className={cls.body}>
          長期利用では、交換テープの入手可否も確認しておくと安心です。
        </p>
        <CardGrid items={TAPES} />

        <H2>ウォーキングメジャーと長尺巻尺の違い</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：ウォーキングメジャーと長尺巻尺の違い
            </caption>
            <thead>
              <tr>
                <Th>比較項目</Th>
                <Th>ウォーキングメジャー</Th>
                <Th>長尺巻尺</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>測る距離</Td>
                <Td>車輪が通った表面距離</Td>
                <Td>原則として2点間</Td>
              </tr>
              <tr>
                <Td>曲線</Td>
                <Td>測りやすい</Td>
                <Td>沿わせれば可能だが扱いにくい</Td>
              </tr>
              <tr>
                <Td>使用人数</Td>
                <Td>一人でも使いやすい</Td>
                <Td>長距離では複数人が便利</Td>
              </tr>
              <tr>
                <Td>路面の影響</Td>
                <Td>受けやすい</Td>
                <Td>張り方・たるみの影響を受ける</Td>
              </tr>
              <tr>
                <Td>向く用途</Td>
                <Td>概算・道路・通路・外周</Td>
                <Td>基準線・直線・区画</Td>
              </tr>
              <tr>
                <Td>精度重視</Td>
                <Td>路面条件に注意</Td>
                <Td>張力・たるみ・始点終点に注意</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：車輪式・長尺巻尺・レーザー距離計の違い
            </caption>
            <thead>
              <tr>
                <Th>項目</Th>
                <Th>車輪式</Th>
                <Th>長尺巻尺</Th>
                <Th>レーザー距離計</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>地面の経路</Td>
                <Td>得意</Td>
                <Td>手間がかかる</Td>
                <Td>不向き</Td>
              </tr>
              <tr>
                <Td>曲線</Td>
                <Td>得意</Td>
                <Td>扱いにくい</Td>
                <Td>不向き</Td>
              </tr>
              <tr>
                <Td>直線</Td>
                <Td>概算向き</Td>
                <Td>得意</Td>
                <Td>見通せれば得意</Td>
              </tr>
              <tr>
                <Td>一人作業</Td>
                <Td>しやすい</Td>
                <Td>長距離では難しい</Td>
                <Td>しやすい</Td>
              </tr>
              <tr>
                <Td>電源</Td>
                <Td>不要機種あり</Td>
                <Td>不要</Td>
                <Td>電池が必要</Td>
              </tr>
              <tr>
                <Td>主な注意</Td>
                <Td>路面による誤差</Td>
                <Td>たるみ・張力</Td>
                <Td>反射面・日光・障害物</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>場所別｜現場でどのメジャーを選ぶ？</H2>
        <H3>道路・舗装・駐車場</H3>
        <p className={cls.body}>
          舗装面ではウォーキングメジャー・ロードメジャーが使いやすく、直線確認には長尺巻尺も併用します。
        </p>
        <H3>建設・外構工事</H3>
        <p className={cls.body}>
          敷地の概算は車輪式、基準線は長尺巻尺、正式な測量は適切な測量機器・手順を用います。
        </p>
        <H3>工場・倉庫</H3>
        <p className={cls.body}>
          通路長は車輪式、設備間隔は巻尺、作業台の位置決めはセッティングメジャーが向きます。
        </p>
        <H3>イベント・展示会</H3>
        <p className={cls.body}>
          会場外周や動線は車輪式、ブース幅は巻尺。工具・コーンは台車で運搬すると効率的です。
        </p>
        <H3>造園・農地</H3>
        <p className={cls.body}>
          緩やかな外周は車輪式が向きますが、砂地・草地・ぬかるみでは誤差に注意します。
        </p>
        <H3>ケーブル・ホース敷設</H3>
        <p className={cls.body}>
          実際のルートに沿った概算は車輪式、対象物そのものの長さは専用メジャーの仕様を確認します。
        </p>

        <H2>凹凸・砂利・傾斜地で測るときの注意点</H2>
        <ArticleImg
          src={IMG.surface}
          alt="舗装路・砂利・土の路面で車輪式メジャーを比較するイメージ"
        />
        <H3>車輪の滑り・跳ねで誤差が増える</H3>
        <p className={cls.body}>
          砂地・泥・凹凸面では、車輪の滑りや跳ね、沈み込みにより誤差が増えやすくなります。
        </p>
        <H3>草や石を避けた経路を選ぶ</H3>
        <p className={cls.body}>
          草・石・障害物を避けた経路を選び、迂回した分は距離に加算される点も踏まえます。
        </p>
        <H3>斜面では表面距離と水平距離が異なる</H3>
        <p className={cls.body}>
          傾斜地では、車輪が測る表面距離と、図面上の水平距離が異なります。用途に応じて使い分けます。
        </p>
        <H3>複数回測って差を記録する</H3>
        <p className={cls.body}>
          1回だけでなく往路・復路や複数回測り、差を記録して信頼性を確認します。
        </p>
        <H3>必要精度が高い場合は別方式で再確認する</H3>
        <p className={cls.body}>
          高い精度が必要な場合は、巻尺・レーザー距離計・測量機器など別方式で再確認します。
        </p>

        <Caution>
          車輪式メジャーが測るのは、原則として車輪が通った「表面に沿った距離」で、2点間の水平直線距離とは異なります。凹凸・段差・砂地・泥・草地・傾斜では滑り・跳ね・沈み込みで誤差が増えやすく、どんな路面でも誤差がないわけではありません。正式な測量・検査・契約寸法には使えると断定せず、必要精度に合う測定機器と社内手順を用いてください。
        </Caution>

        <H2>測定誤差を減らす使い方</H2>
        <H3>始点と終点へ明確な印を付ける</H3>
        <p className={cls.body}>
          測定の始点・終点にマーキングし、基準を明確にします。
        </p>
        <H3>測定前にゼロへ戻す</H3>
        <p className={cls.body}>測定前にカウンターをゼロにリセットします。</p>
        <H3>車輪を地面へ正しく当てる</H3>
        <p className={cls.body}>
          車輪を路面へ垂直に当て、浮きや傾きがないようにします。
        </p>
        <H3>蛇行せず一定速度で進む</H3>
        <p className={cls.body}>
          蛇行すると距離が増えます。まっすぐ一定速度で進みます。
        </p>
        <H3>往路・復路または複数回測る</H3>
        <p className={cls.body}>
          往路・復路や複数回測り、差が大きくないか確認します。
        </p>
        <H3>路面・天候・測定者を記録する</H3>
        <p className={cls.body}>
          路面状態・天候・使用工具・測定者を記録すると、後から見返しやすくなります。
        </p>
        <H3>巻尺はたるみ・ねじれ・始点ずれを確認する</H3>
        <p className={cls.body}>
          長尺巻尺は、たるみ・ねじれ・始点のずれ・張力で値が変わります。まっすぐ張って確認します。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：測定記録テンプレート
            </caption>
            <thead>
              <tr>
                <Th>項目</Th>
                <Th>記録内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>測定日時</Td>
                <Td>日付・時刻</Td>
              </tr>
              <tr>
                <Td>測定場所</Td>
                <Td>現場・区画</Td>
              </tr>
              <tr>
                <Td>始点・終点</Td>
                <Td>基準物・マーキング</Td>
              </tr>
              <tr>
                <Td>使用工具</Td>
                <Td>商品名・管理番号</Td>
              </tr>
              <tr>
                <Td>路面状態</Td>
                <Td>舗装・砂利・土・傾斜</Td>
              </tr>
              <tr>
                <Td>1回目 / 2回目 / 差</Td>
                <Td>測定値と再確認の要否</Td>
              </tr>
              <tr>
                <Td>測定者 / 備考</Td>
                <Td>担当者名・雨・障害物など</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>セッティングメジャー・逆目盛はどんな作業に使う？</H2>
        <ArticleImg
          src={IMG.setting}
          alt="作業台にセッティングメジャーを取り付けて位置決めするイメージ"
        />
        <H3>作業台へ目盛りを常設する</H3>
        <p className={cls.body}>
          作業台に目盛りを貼り付けて常設すると、切断・停止位置をすぐ確認できます。
        </p>
        <H3>切断・梱包・加工の基準にする</H3>
        <p className={cls.body}>
          木工・金属加工・梱包など、繰り返し作業の基準出しに使いやすいタイプです。
        </p>
        <H3>右基準・左基準で逆目盛を使い分ける</H3>
        <p className={cls.body}>
          基準点から逆方向へ数値を読みたい場合は逆目盛が便利です。取り付け方向を確認して選びます。
        </p>
        <H3>ステンレス仕様を選びたい環境</H3>
        <p className={cls.body}>
          水やさびが気になる環境では、ステンレス仕様が候補になります。
        </p>
        <H3>貼付面の汚れ・油・凹凸を確認する</H3>
        <p className={cls.body}>
          貼り付け面の汚れ・油・凹凸があると剥がれやすくなります。清掃してから貼付します。
        </p>
        <CardGrid items={SETTINGS} />

        <H2>専用ハンディーメジャー・Vベルトメジャーを使う場面</H2>
        <H3>一般的な巻尺では測りにくい対象物</H3>
        <p className={cls.body}>
          線材やベルトなど、一般的な巻尺では測りにくい対象物に使う専用測定工具です。
        </p>
        <H3>対象物を通して連続長を測る場合</H3>
        <p className={cls.body}>
          対象物を通して連続した長さを測る用途に使われる場合があります。具体的な測定方法は商品仕様を確認します。
        </p>
        <H3>Vベルトの選定・交換時に長さを確認する場合</H3>
        <p className={cls.body}>
          Vベルトメジャーは、ベルトの選定・交換時に長さを確認する用途に向くタイプです。
        </p>
        <H3>測定可能範囲・対象素材を確認する</H3>
        <p className={cls.body}>
          測定可能範囲・対象素材・送り方向・カウンター仕様は、必ずメーカー情報・商品ページで確認します。
        </p>
        <H3>HMF・HMC各型番の違いはメーカー情報を確認する</H3>
        <p className={cls.body}>
          東京ニホスのHMF・HMCシリーズ、051・052の違いは、商品名からは判断せず、メーカー資料・商品ページでご確認ください。
        </p>

        <Caution>
          専用ハンディーメジャー（HMF・HMCシリーズ等）は、測定対象・測定可能範囲・表示方式・HMFとHMCの違い・051と052の違いを、商品名から推測しないでください。用途・仕様は必ずメーカー資料・商品ページで確認したうえで導入をご判断ください。
        </Caution>
        <CardGrid items={SPECIALS} />

        <H2>高所作業ではメジャーの落下防止も確認する</H2>
        <H3>ベルトクリップだけに頼らない</H3>
        <p className={cls.body}>
          高所・足場・脚立上では、ベルトクリップだけに頼らず、落下防止用品も検討します。
        </p>
        <H3>工具に対応するホルスターを選ぶ</H3>
        <p className={cls.body}>
          携帯する工具に対応したホルスター・取り付け方法かを確認します。
        </p>
        <H3>取り付け部・使用荷重・工具サイズを確認する</H3>
        <p className={cls.body}>
          取り付け部・使用荷重・工具サイズの適合を、商品情報で確認します。
        </p>
        <H3>足場・高所作業の社内ルールを優先する</H3>
        <p className={cls.body}>
          落下防止は、製品だけでなく足場・高所作業の社内ルール・法令を優先します。
        </p>

        <Caution>
          「ホルスターがあれば落下しない」と断定はできません。対象工具・取り付け方法・使用荷重・工具サイズの適合を確認し、足場・高所作業に関する社内ルールや法令を優先してください。落下防止は用品単体でなく運用全体で確保するものです。
        </Caution>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <ProductCard item={H_HOLSTER} />
        </div>

        <H2>距離測定と一緒に準備したい現場用品</H2>
        <p className={cls.body}>
          測定器だけでなく、運搬・保管・足元・整備までそろえると、現場の測定作業を標準化しやすくなります。
        </p>
        <H3>カルティオ・カルティオビッグ</H3>
        <p className={cls.body}>
          測定器・カラーコーン・マーキング用品・工具箱などを広い現場内で運ぶ場合に。ストッパー付き・大型もあります。
        </p>
        <CardGrid items={KARU_ALL} />
        <CardGrid items={KARUBIG_ALL} />
        <div className="my-4">
          <ProductLink href={LIST_DAISHA} name="運搬台車一覧を見る" />
        </div>
        <H3>工具ボックス</H3>
        <p className={cls.body}>
          長尺巻尺・予備電池・杭・チョーク・筆記具などの保管に。仕様は商品ページで確認します。
        </p>
        <CardGrid items={BOXES} />
        <H3>安全靴</H3>
        <p className={cls.body}>
          屋外や工場内を歩いて測定する場合の足元用品として。用途・規格・サイズ・作業環境への適合を確認します。
        </p>
        <CardGrid items={SHOES} />
        <H3>整備用工具</H3>
        <p className={cls.body}>
          測定後の設備調整・設置・締め付け作業の関連導線として。
        </p>
        <CardGrid items={TONES} />
        <div className="my-4">
          <ProductLink href={LIST_SEIBI} name="整備用工具一覧を見る" />
        </div>

        <H2>メジャー選びでよくある失敗</H2>
        <ol className="mb-4 list-decimal space-y-2 pl-5 leading-[1.95] tracking-[0.04em] text-gray-800">
          <li>
            <span className="font-semibold text-gray-900">
              測定可能距離だけで選ぶ
            </span>
            ：重量・収納・車輪径・表示方式の方が作業性に影響する場合があります。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              表面距離と水平距離を混同する
            </span>
            ：車輪式は原則、地面の表面に沿った距離です。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              砂利や泥で1回だけ測る
            </span>
            ：滑り・沈み込み・跳ねの誤差を確認するため複数回測ります。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              正式な測量に車輪式を使う
            </span>
            ：必要精度・検査条件・社内手順に合う機器を使用します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              長すぎる巻尺を選び持て余す
            </span>
            ：使用頻度・重量・収納を踏まえて長さを選びます。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              デジタル式の電池切れを想定しない
            </span>
            ：予備電池を備品計画に含めます。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              逆目盛の方向を確認しない
            </span>
            ：基準方向を確認して選びます。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              始点・終点を記録しない
            </span>
            ：基準物・マーキングを記録します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              測定工具の管理番号を付けない
            </span>
            ：工具管理番号で点検・共有をしやすくします。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              同一モデルの重複商品を並べる
            </span>
            ：1モデル1リンクにして混乱を防ぎます。
          </li>
        </ol>

        <H2>法人向け｜距離測定工具の発注前チェックリスト</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：発注前チェックリスト
            </caption>
            <thead>
              <tr>
                <Th>区分</Th>
                <Th>確認項目</Th>
                <Th>確認</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>測る対象</Td>
                <Td>地面に沿った距離/2点間/曲線/機械・作業台/ベルト・線材</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>距離と形状</Td>
                <Td>必要距離（m）・直線か曲線か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>必要精度</Td>
                <Td>概算か・施工判断か・正式な測量/検査か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>路面・環境</Td>
                <Td>舗装/砂利/土/草地・傾斜・段差</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>使用人数</Td>
                <Td>一人か複数人か</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>表示・記録</Td>
                <Td>デジタル/機械式・ホールド/リセット・記録票</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>収納・運搬</Td>
                <Td>折りたたみ・車輪径・台車/工具箱の要否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>落下防止</Td>
                <Td>高所でのホルスター・社内ルール</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>電池・交換部品</Td>
                <Td>予備電池・交換テープの入手可否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>工具管理</Td>
                <Td>管理番号・点検・記録の統一</Td>
                <Td>□</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>測る対象</H3>
        <p className={cls.body}>
          地面に沿った距離・2点間・曲線・機械/作業台・ベルト/線材のどれを測るかを整理します。
        </p>
        <H3>距離と形状・必要精度</H3>
        <p className={cls.body}>
          必要距離と、概算でよいか・施工判断か・正式な測量/検査かで方式を選びます。
        </p>
        <H3>路面・作業環境・使用人数</H3>
        <p className={cls.body}>
          路面状態・傾斜・段差、一人か複数人かを踏まえて選びます。
        </p>
        <H3>表示・記録・収納・落下防止・電池・管理</H3>
        <p className={cls.body}>
          表示方式・記録機能・収納運搬・高所落下防止・予備電池/交換部品・工具管理番号までを確認します。
        </p>

        <H2>よくある質問</H2>
        <div className="space-y-5">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>まとめ｜長い距離を測る道具は「経路・精度・路面」で選ぶ</H2>
        <ArticleImg
          src={IMG.checklist}
          alt="法人担当者が現場用メジャーと関連用品を確認するイメージ"
        />
        <p className={cls.body}>
          長い距離を測る道具は、測る経路（地面に沿うか2点間か）・必要精度（概算か施工判断か測量か）・路面状態で選びます。地面のルートや曲線は車輪式、2点間の直線は長尺巻尺、見通せる2点間はレーザー距離計、繰り返しの位置決めはセッティングメジャー、専用対象は専用メジャーが候補です。車輪式は表面距離を測るため路面で誤差が変わり、正式な測量には必要精度に合う機器を用います。測定器だけでなく、運搬台車・工具箱・安全靴・整備用工具まで含めて備えると、現場の測定作業を標準化しやすくなります。仕様・価格・在庫は各商品ページでご確認ください。
        </p>

        <FinalCTA
          href={LIST_TRUSCO}
          title="現場の測定・設置・整備用品をまとめて確認"
          body="距離測定工具を選ぶ際は、測定器だけでなく、収納・運搬・落下防止・測定後の整備工具まで含めて準備すると、現場作業を標準化しやすくなります。"
          label="トラスコ中山商品一覧を見る"
        />
        <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-4">
          <ProductLink href={W_DWS160C.url} name="デジタルウォーキングメジャー" />
          <ProductLink href={T_HSW50.url} name="長尺巻尺 50m" />
          <ProductLink href={LIST_DAISHA} name="運搬台車一覧へ" />
          <ProductLink href={LIST_SEIBI} name="整備用工具一覧へ" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
