import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "construction-portable-power-selection";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title:
    "工事現場のポータブル電源の選び方｜工具・照明・冷温庫・非常用電源に使える容量と出力の目安",
  description:
    "工事現場や屋外作業でポータブル電源を選ぶときは、使いたい機器の消費電力、起動電力、容量Wh、定格出力W、充電時間、重量、安全性を確認することが重要です。MEIHO MPS1500・MPS2000・MPS3000の違いや、冷温庫・工具・照明・非常用電源としての使い方を解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "工事現場のポータブル電源の選び方｜工具・照明・冷温庫・非常用電源に使える容量と出力の目安",
    description:
      "工事現場や屋外作業でポータブル電源を選ぶときは、使いたい機器の消費電力、起動電力、容量Wh、定格出力W、充電時間、重量、安全性を確認することが重要です。",
    type: "article",
    images: [
      "/images/articles/construction-portable-power-selection/portable-power-station-construction-site-hero.jpg",
    ],
  },
};

const ARTICLE_IMG = "/images/articles/construction-portable-power-selection";
const productImage = (id: string) => `/products/${id}.jpg`;

const UTM =
  "utm_source=sagyou-navi&utm_medium=referral&utm_campaign=construction-portable-power";

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

type ProductItem = {
  imgId: string;
  name: string;
  url: string;
  store: "yahoo" | "rakuten";
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
          {store === "yahoo" ? "Yahoo!ショッピングで見る" : "楽天市場で見る"}
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

const MPS = [
  {
    model: "MPS1500",
    id: "172196",
    name: "MEIHO ポータブルパワーステーション MPS1500",
    wh: "1344Wh",
    w: "1500W",
    charge: "約3時間",
    size: "406×260×241mm",
    weight: "19kg",
    use: "照明・充電・小型機器中心",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172196.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
  {
    model: "MPS2000",
    id: "172197",
    name: "MEIHO ポータブルパワーステーション MPS2000",
    wh: "1536Wh",
    w: "2000W",
    charge: "約3時間",
    size: "406×260×241mm",
    weight: "22kg",
    use: "冷温庫・複数機器・非常用電源",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172197.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
  {
    model: "MPS3000",
    id: "172198",
    name: "MEIHO ポータブルパワーステーション MPS3000",
    wh: "1920Wh",
    w: "3000W",
    charge: "約4時間",
    size: "480×285×303mm",
    weight: "31kg",
    use: "高出力機器・長時間使用・防災備蓄",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172198.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
];

const URL_REITOUKO =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/172101.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=";
const URL_TRANS =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/224302.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=";
const URL_CHIKUDENMARU =
  "https://item.rakuten.co.jp/crecote-shop/kps-0202/";

const WAGONS: ProductItem[] = [
  {
    imgId: "bdw672yg",
    name: "バーディワゴン 750×500×H600 2段 BDW-672-W",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005289-bdw672w/",
    store: "rakuten",
  },
  {
    imgId: "bdw763yg",
    name: "バーディワゴン 600×400×H740 3段 BDW-763-W",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005293-bdw763w/",
    store: "rakuten",
  },
  {
    imgId: "bdw773w",
    name: "バーディワゴン 900×600×H600 2段 BDW-692-W",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005291-bdw692w/",
    store: "rakuten",
  },
  {
    imgId: "bdw963bkbk",
    name: "バーディワゴン 600×400×H880 3段 BDW-963-BKOR",
    url: "https://item.rakuten.co.jp/crecote-shop/ta005300-bdw963bkor/",
    store: "rakuten",
  },
];
const KARTIO: ProductItem[] = [
  {
    imgId: "167468",
    name: "カルティオ ブラック MPK-780-BK",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html",
    store: "yahoo",
  },
  {
    imgId: "190479",
    name: "カルティオ ブルー MPK-780-B",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190479.html",
    store: "yahoo",
  },
  {
    imgId: "190475",
    name: "カルティオ ブラック ストッパー付 MPK780BKSS",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html",
    store: "yahoo",
  },
  {
    imgId: "190476",
    name: "カルティオ オリーブ ストッパー付 MPK780ODSS",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190476.html",
    store: "yahoo",
  },
];

const mpsProducts: ProductItem[] = MPS.map((m) => ({
  imgId: m.id,
  name: m.name,
  url: m.url,
  store: "yahoo" as const,
}));
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";

const faqs = [
  {
    q: "工事現場でポータブル電源を選ぶときは何を確認すればよいですか？",
    a: "使いたい機器の消費電力、起動電力、必要な使用時間、容量Wh、定格出力W、充電時間、重量、使用環境を確認します。複数機器を同時に使う場合は、消費電力の合計が定格出力内に収まるかも確認しましょう。",
  },
  {
    q: "MPS1500・MPS2000・MPS3000はどう選べばよいですか？",
    a: "照明や充電器、小型機器中心ならMPS1500、冷温庫や複数機器を使うならMPS2000、高出力機器や非常用電源を重視するならMPS3000が候補になります。使用する機器の消費電力と使用時間に合わせて選ぶことが大切です。",
  },
  {
    q: "ポータブル電源で電動工具は使えますか？",
    a: "消費電力が定格出力内であれば使える可能性があります。ただし、コンプレッサーやモーター機器などは起動時に大きな電力を必要とするため、出力範囲内でも使えない場合があります。必ず機器側の消費電力・起動電力を確認してください。",
  },
  {
    q: "熱中症対策にポータブル電源は役立ちますか？",
    a: "冷温庫、照明、スマートフォン、送風機などの電源確保に役立つ場合があります。ただし、ポータブル電源は熱中症を直接防ぐものではありません。休憩、水分・塩分補給、WBGT確認、作業時間管理とあわせて使うことが重要です。",
  },
  {
    q: "ポータブルトランスとポータブル電源は何が違いますか？",
    a: "ポータブル電源は電気をためて出力する蓄電池です。ポータブルトランスは電圧を変換する機器であり、電気をためるものではありません。停電時や電源がない場所で使いたい場合は、ポータブル電源を検討します。",
  },
  {
    q: "ポータブル電源は夏場の車内に置いてもよいですか？",
    a: "避けた方がよいです。夏場の車内など高温の場所で使用・保管しないよう案内されています。直射日光や高温環境を避けて管理しましょう。",
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
      name: "工事現場のポータブル電源の選び方",
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
            工事現場のポータブル電源の選び方
          </span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          工事現場のポータブル電源の選び方｜工具・照明・冷温庫・非常用電源に使える容量と出力の目安
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月1日／約12分で読めます
        </p>

        <img
          src={`${ARTICLE_IMG}/portable-power-station-construction-site-hero.jpg`}
          alt="工事現場でポータブル電源を使って照明や冷温庫に給電するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5">
          <p className="mb-2 font-bold tracking-wide text-gray-900">
            工事現場のポータブル電源の選び方（要点）
          </p>
          <p className={cls.body.replace("mb-4 ", "")}>
            工事現場でポータブル電源を選ぶときは、まず「使いたい機器の消費電力」「起動時に大きな電力が必要か」「必要な使用時間」「持ち運びやすさ」「充電時間」「屋外使用時の保管環境」を確認します。照明や充電器中心なら1500Wクラス、冷温庫や複数機器を同時に使うなら2000Wクラス、高出力機器や非常用電源を重視するなら3000Wクラスが候補になります。
          </p>
        </div>

        <p className={cls.body}>
          工事現場・屋外作業・イベント設営では、近くに電源がない場面が多くあります。発電機は便利ですが、騒音・排気・燃料管理が気になる現場もあります。そうしたとき、ポータブル電源はAC100V機器やUSB機器を使える非常用・仮設電源として検討しやすい選択肢です。
        </p>
        <p className={cls.body}>
          夏場の熱中症対策でも、冷温庫や送風機、スマホ充電、照明などの電源確保につながります。ただし、すべての電動工具・モーター機器が使えるわけではなく、定格出力・起動電力・使用環境を確認することが大切です。本記事では、現場で使うポータブル電源の選び方と、MEIHO MPS1500・MPS2000・MPS3000の違いを整理します。
        </p>

        <H2>工事現場・屋外作業でポータブル電源が必要になる場面</H2>

        <img
          src={`${ARTICLE_IMG}/outdoor-work-portable-power-supply.jpg`}
          alt="屋外作業でポータブル電源を使うイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>電源がない場所で照明・充電器・測定機器を使いたい</H3>
        <p className={cls.body}>
          仮設電源が届かない場所や、夜間作業・点検・補修の現場では、スマホ、タブレット、無線機、ノートPC、測定器の充電や、LED投光器・小型機器の電源が必要になります。発電機を使いにくい場所での代替候補としても検討できます。
        </p>

        <H3>熱中症対策で冷温庫や送風機を使いたい</H3>
        <p className={cls.body}>
          夏場の現場では、飲料や保冷材を冷やすニーズがあります。冷温庫を現場に持ち込む場合は電源確保が課題になりやすく、ポータブル電源と充電式冷温庫を組み合わせると、電源が取りにくい場所でも運用しやすくなります。
        </p>
        <Note>
          冷温庫や送風機などの熱中症対策用品は補助的な手段です。ポータブル電源自体が熱中症を防ぐものではありません。休憩、水分・塩分補給、WBGT（暑さ指数）の確認、作業時間の管理とあわせて運用してください。
        </Note>

        <H3>停電・災害時の非常用電源として備えたい</H3>

        <img
          src={`${ARTICLE_IMG}/emergency-portable-power-office-storage.jpg`}
          alt="会社の防災備蓄としてポータブル電源を準備するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          会社・店舗・現場事務所で停電が起きたとき、照明、スマホ、タブレット、無線機、電気毛布などの電源として使えます。MEIHOのポータブルパワーステーションも、停電・災害時の非常用電源としての用途が案内されており、防災備蓄品としての導入も検討できます。
        </p>

        <CTA
          url="https://store.shopping.yahoo.co.jp/signcity-yshop/172197.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
          label="工事現場・屋外作業で使えるポータブル電源を確認する"
        />

        <H2>MEIHOポータブルパワーステーションの特徴</H2>

        <H3>大容量・高出力で複数台のデバイスに同時給電できる</H3>
        <p className={cls.body}>
          MPS1500・MPS2000・MPS3000の3モデルがあり、AC100Vコンセント、USB、USB-QC、USB
          Type-C、シガーソケット、12V DC出力などを備えます。スマートフォン、ノートPC、照明、冷温庫、電気毛布などに使いやすく、複数台のデバイスへ同時給電できます。たとえばMPS2000は、AC100V×3、USB出力4、12Vシガレットポート、12VDCポートを備えるモデルとして案内されています。
        </p>

        <H3>リン酸鉄リチウムイオン採用・約2000回サイクル</H3>
        <p className={cls.body}>
          バッテリーにはリン酸鉄リチウムイオン電池を採用し、約2000回の充電サイクルに対応するとされています。BMS（バッテリーマネジメントシステム＝過充電・過放電などを管理する保護機能）で安全性を確保し、PSE・RoHS2規格にも対応。長寿命・安全性を重視したい業務用備品として検討しやすい仕様です。
        </p>

        <H3>正弦波AC100Vで安定した電気を供給</H3>
        <p className={cls.body}>
          AC100Vコンセントは、商用電流と同等の正弦波（波形がなめらかな交流）を出力します。正弦波は、ノートPCや測定機器、充電器などに使いやすい波形です。電源品質が気になる精密機器を使う場合は、正弦波かどうかを事前に確認しておくと安心です。
        </p>

        <H3>ソーラーパネル充電にも対応</H3>
        <p className={cls.body}>
          別売のソーラーパネルでの充電にも対応しています。災害時や長期の屋外作業で補助電源として活用でき、CO2排出量の抑制という観点でも検討できます。ただし、発電量は天候や設置条件に左右されるため、確実な充電手段として過度に頼らない前提で考えましょう。
        </p>

        <H2>MPS1500・MPS2000・MPS3000の違い</H2>

        <img
          src={`${ARTICLE_IMG}/meiho-portable-power-station-comparison.jpg`}
          alt="MEIHO MPSの容量別比較イメージ"
          className="my-6 w-full rounded-lg"
        />

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">型番</th>
                <th className="p-3 text-left">容量</th>
                <th className="p-3 text-left">定格出力</th>
                <th className="p-3 text-left">充電時間</th>
                <th className="p-3 text-left">サイズ</th>
                <th className="p-3 text-left">重量</th>
                <th className="p-3 text-left">向いている用途</th>
              </tr>
            </thead>
            <tbody>
              {MPS.map((m) => (
                <tr key={m.model} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left align-top font-bold">
                    {m.model}
                  </th>
                  <td className="p-3 align-top">{m.wh}</td>
                  <td className="p-3 align-top">{m.w}</td>
                  <td className="p-3 align-top">{m.charge}</td>
                  <td className="whitespace-nowrap p-3 align-top">{m.size}</td>
                  <td className="p-3 align-top">{m.weight}</td>
                  <td className="p-3 align-top">{m.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductGrid items={mpsProducts} />

        <H2>容量Whと定格出力Wの見方</H2>

        <H3>容量Whは「どれくらい長く使えるか」の目安</H3>
        <p className={cls.body}>
          Wh（ワットアワー）はバッテリーの容量を表し、数値が大きいほど長時間使いやすくなります。ただし実際の使用時間は、機器の消費電力、電力変換のロス、使用環境（気温など）で変わります。メーカーが示す使用時間も、あくまで目安として扱いましょう。
        </p>

        <H3>定格出力Wは「どれくらい大きな機器を使えるか」の目安</H3>
        <p className={cls.body}>
          W（ワット）で表す定格出力は、同時に使える機器の大きさの目安です。1500W・2000W・3000Wの違いがあり、使いたい機器の消費電力の合計が定格出力の範囲に収まるかを確認します。複数機器を同時に使う場合は、合計Wで見ることが大切です。
        </p>
        <p className={cls.body}>
          参考として、メーカー案内の使用時間目安は次の通りです（いずれも目安で、実際の値は使用条件で変わります）。
        </p>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">機器（例）</th>
                <th className="p-3 text-left">MPS2000</th>
                <th className="p-3 text-left">MPS3000</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["スマートフォン充電（18W）", "約78回", "約98回"],
                ["電気毛布（55W）", "約25時間", "約32時間"],
                ["電子レンジ（1100W）", "約1.2時間", "約1.6時間"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="bg-gray-100 p-3 text-left align-top font-bold">
                    {r[0]}
                  </th>
                  <td className="p-3 align-top">{r[1]}</td>
                  <td className="p-3 align-top">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H3>モーター機器・コンプレッサー機器は起動電力に注意</H3>
        <p className={cls.body}>
          コンプレッサーやモーターを使う機器は、動き始めに大きな電力（起動電力）を必要とします。MEIHOの注意事項でも、こうした機器は消費電力が本機の出力範囲内であっても使用できない場合があると案内されています。電動工具などを使いたい場合は、定格消費電力だけでなく起動電力も確認してください。
        </p>

        <H2>用途別に選ぶMEIHOポータブルパワーステーション</H2>

        <H3>照明・スマホ・PC・小型機器中心ならMPS1500</H3>
        <p className={cls.body}>
          スマホ・タブレット・PCの充電、LEDライト・投光器、小型機器などが中心で、まず現場の電源確保を整えたい場合に向きます。19kgと3モデルの中で最も軽く、持ち運びの負担が比較的少ないモデルです。
        </p>
        <ProductGrid
          items={[
            {
              imgId: "172196",
              name: "MEIHO ポータブルパワーステーション MPS1500",
              url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172196.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
              store: "yahoo",
            },
          ]}
        />

        <H3>現場の冷温庫・複数機器・非常用電源ならMPS2000</H3>
        <p className={cls.body}>
          容量1536Wh・定格出力2000Wで、冷温庫・照明・スマホ充電などを組み合わせて使いたい現場に向きます。メーカー案内では、スマートフォン18W充電で約78回、電気毛布55Wで約25時間、電子レンジ1100Wで約1.2時間の使用目安が示されています。容量・出力・重量のバランスがよく、今回の用途では中心的な候補になります。
        </p>
        <ProductGrid
          items={[
            {
              imgId: "172197",
              name: "MEIHO ポータブルパワーステーション MPS2000",
              url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172197.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
              store: "yahoo",
            },
          ]}
        />

        <H3>高出力・長時間・防災備蓄ならMPS3000</H3>
        <p className={cls.body}>
          容量1920Wh・定格出力3000Wで、高出力機器や長時間使用、防災備蓄を考える現場に向きます。メーカー案内では、スマートフォン18W充電で約98回、電気毛布55Wで約32時間、電子レンジ1100Wで約1.6時間の使用目安が示されています。31kgあるため、運搬方法もあわせて検討しましょう。
        </p>
        <ProductGrid
          items={[
            {
              imgId: "172198",
              name: "MEIHO ポータブルパワーステーション MPS3000",
              url: "https://store.shopping.yahoo.co.jp/signcity-yshop/172198.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
              store: "yahoo",
            },
          ]}
        />

        <Note>
          ポータブル電源は電源確保に役立つ機器ですが、すべての電動工具やモーター機器に使えるわけではありません。コンプレッサーやモーター機器など、起動時に大きな電力を必要とする機器は、消費電力が本体の出力範囲内でも使用できない場合があります。購入前に、使用機器の消費電力・起動電力・使用条件を必ず確認してください。
        </Note>

        <CTA
          url="https://store.shopping.yahoo.co.jp/signcity-yshop/172197.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea="
          label="容量・定格出力でMEIHOポータブルパワーステーションを選ぶ（MPS2000）"
        />

        <H2>熱中症対策用品と組み合わせるなら冷温庫も確認する</H2>

        <img
          src={`${ARTICLE_IMG}/portable-power-cooler-heat-prevention.jpg`}
          alt="ポータブル電源と冷温庫で熱中症対策をするイメージ"
          className="my-6 w-full rounded-lg"
        />

        <H3>冷たい飲み物・保冷材の管理に冷温庫を使う</H3>
        <p className={cls.body}>
          夏場の現場で冷たい飲料や保冷材を管理したいときは、充電式のポータブル冷温庫が役立ちます。休憩所、現場事務所、イベント本部などで使いやすく、ポータブル電源と組み合わせれば、電源が取りにくい場所でも運用しやすくなります。
        </p>
        <Note>
          冷温庫などの熱中症対策用品は補助であり、ポータブル電源も含めて、それ自体が熱中症を防ぐものではありません。休憩・水分塩分補給・WBGT確認・作業時間管理との併用が重要です。
        </Note>
        <ProductGrid
          items={[
            {
              imgId: "172101",
              name: "ポータブル冷温庫 26L",
              url: URL_REITOUKO,
              store: "yahoo",
            },
          ]}
        />
        <CTA
          url={URL_REITOUKO}
          label="冷たい飲み物や保冷材の管理に使えるポータブル冷温庫を確認する"
        />

        <H2>ポータブル電源・ポータブルトランス・蓄電丸の違い</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3 text-left">商品</th>
                <th className="p-3 text-left">主な役割</th>
                <th className="p-3 text-left">向いている用途</th>
                <th className="p-3 text-left">注意点</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "MEIHO MPSシリーズ",
                  "電気をためてAC100V等で出力",
                  "現場電源・非常用・屋外作業",
                  "容量・定格出力・起動電力を確認",
                ],
                [
                  "ポータブルトランス",
                  "電圧を変換する機器",
                  "降圧・昇圧が必要な作業",
                  "電気をためる機器ではない",
                ],
                [
                  "蓄電丸",
                  "防災・アウトドア向け大容量ポータブル電源",
                  "防水・防塵を重視する防災・イベント",
                  "仕様・出力・容量を確認",
                ],
                [
                  "冷温庫",
                  "飲料や保冷材の保冷・保温",
                  "熱中症対策・休憩所",
                  "電源供給機器ではない",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-gray-300">
                  <th className="whitespace-nowrap bg-gray-100 p-3 text-left align-top font-bold">
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
        <p className={cls.body}>
          整理すると、ポータブルトランスは電圧を変換する機器で蓄電池ではなく、冷温庫は冷やす（温める）機器であって電源を供給する機器ではありません。停電時や電源のない場所で機器を動かしたい場合は、電気をためて出力できるポータブル電源が候補になります。
        </p>
        <ProductGrid
          items={[
            {
              imgId: "224302",
              name: "TRUSCO ポータブルトランス TPT-30BD",
              url: URL_TRANS,
              store: "yahoo",
            },
            {
              imgId: "kps-0202",
              name: "ポータブル電源 蓄電丸",
              url: URL_CHIKUDENMARU,
              store: "rakuten",
            },
          ]}
        />

        <H2>現場で使うときの注意点</H2>

        <H3>高温の車内や直射日光下で保管しない</H3>
        <p className={cls.body}>
          MEIHOの注意事項では、夏場の車内など高温の場所で使用・保管しないことが明記されています。リチウムイオン電池を使う製品は、高温環境や強い衝撃・圧力で発熱・発火などの事故につながる可能性があるため、消費者庁も高温での使用・保管を避けること、異常を感じたら使用を中止することなどを注意喚起しています。直射日光や高温環境を避けて管理してください。
        </p>

        <H3>長期保管時は6カ月に1回、80％まで充電する</H3>
        <p className={cls.body}>
          MEIHOの注意事項では、長期保管する場合は6カ月に1回の頻度で80％まで充電することが案内されています。使わない期間が続くときは、充電管理を運用ルールに入れておくとよいでしょう。
        </p>

        <H3>平坦で乾燥した場所で使用・保管する</H3>
        <p className={cls.body}>
          平坦で塵埃のない乾燥した場所での使用・保管が案内されています。水濡れ・粉じん・落下・衝撃に注意し、屋外で使うときは雨・水濡れ・高温・直射日光を避けてください。使用環境によっては、防雨カバーなどのオプションが必要になる場合もあります。
        </p>

        <H2>重いポータブル電源は運搬方法も考える</H2>

        <img
          src={`${ARTICLE_IMG}/portable-power-station-cart-wagon-transport.jpg`}
          alt="ポータブル電源を台車やワゴンで運搬するイメージ"
          className="my-6 w-full rounded-lg"
        />

        <p className={cls.body}>
          MPS2000は22kg、MPS3000は31kgあり、手持ちだけで頻繁に運ぶには負担が大きくなります。現場内の移動には、台車やワゴンの併用が便利です。使う際は、段差、床面、積載荷重、固定方法を確認しましょう。工具やケーブルをまとめて運ぶならツールワゴン、まとまった荷物を運ぶなら台車が向いています。
        </p>
        <p className={`${cls.ctaH3} mt-4`}>ツールワゴン（バーディワゴン）</p>
        <ProductGrid items={WAGONS} />
        <p className={`${cls.ctaH3} mt-4`}>運搬台車（カルティオ）</p>
        <ProductGrid items={KARTIO} />
        <CTA
          url="https://item.rakuten.co.jp/crecote-shop/ta005289-bdw672w/"
          label="現場内の移動には台車・ワゴンもあわせて確認する"
        />

        <H2>購入前に確認したいチェックリスト</H2>
        <ul className="my-6 space-y-2 leading-relaxed tracking-wide text-gray-800">
          {[
            "使いたい機器の消費電力",
            "起動電力が大きい機器か（モーター・コンプレッサー等）",
            "同時使用する機器の数",
            "必要な使用時間",
            "容量Wh",
            "定格出力W",
            "ACコンセント数",
            "USB出力（USB-QC／Type-C等）",
            "充電時間",
            "重量",
            "保管場所（高温車内に置かない運用ができるか）",
            "長期保管時の充電管理ができるか",
            "運搬台車やワゴンが必要か",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="font-bold text-gray-900">☑</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <H2>まとめ｜現場用ポータブル電源は容量・出力・使う機器で選ぶ</H2>
        <ul className={cls.list}>
          <li>照明や充電中心ならMPS1500</li>
          <li>冷温庫や複数機器ならMPS2000</li>
          <li>高出力や防災備蓄ならMPS3000</li>
          <li>冷温庫・ポータブルトランス・蓄電丸との役割の違いを確認</li>
          <li>高温保管や起動電力に注意する</li>
          <li>重い機種はカルティオやバーディワゴンなど運搬用品も確認</li>
        </ul>

        <ProductGrid items={mpsProducts} />
        <CTA
          url={URL_TRUSCO_LIST}
          label="現場や倉庫で必要な作業用品をまとめて確認する"
        />

        <H2>よくある質問（FAQ）</H2>
        <div className="my-6 space-y-4">
          {faqs.map((item, i) => (
            <div key={item.q} className="rounded-lg border border-gray-200 p-4">
              <p className={cls.faqQ}>
                Q{i + 1}. {item.q}
              </p>
              <p className={cls.bodySm}>{item.a}</p>
            </div>
          ))}
        </div>

        <H2>関連記事</H2>
        <ul className={cls.list}>
          <li>
            <Link
              href="/articles/outdoor-work-heat-countermeasure-goods"
              className="text-gray-900 underline hover:no-underline"
            >
              建設現場の暑さ対策グッズとは？空調服だけでは足りない酷暑現場の冷却設備と休憩所づくり
            </Link>
          </li>
          <li>
            <Link
              href="/articles/office-disaster-prevention-supplies"
              className="text-gray-900 underline hover:no-underline"
            >
              会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方
            </Link>
          </li>
          <li>
            <Link
              href="/articles/carutio-cart-guide"
              className="text-gray-900 underline hover:no-underline"
            >
              カルティオの選び方｜積載量・サイズ・用途別に運搬台車を比較
            </Link>
          </li>
          <li>
            <Link
              href="/articles/line-work-tool-wagon-selection"
              className="text-gray-900 underline hover:no-underline"
            >
              ライン作業の工具置き台に使えるワゴンの選び方｜部品の仮置き・移動作業を効率化
            </Link>
          </li>
        </ul>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
