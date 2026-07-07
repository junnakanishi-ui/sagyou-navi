import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "outdoor-worksite-portable-power";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/outdoor-worksite-portable-power-supply-hero.jpg`,
  devices: `${ARTICLE_IMG}/worksite-devices-need-portable-power.jpg`,
  waterproof: `${ARTICLE_IMG}/waterproof-dustproof-portable-power-jobsite.jpg`,
  comparison: `${ARTICLE_IMG}/portable-power-station-procurement-comparison.jpg`,
  disaster: `${ARTICLE_IMG}/portable-power-disaster-office-site.jpg`,
  trusco: `${ARTICLE_IMG}/worksite-power-safety-supplies-trusco.jpg`,
};

export const metadata: Metadata = {
  title:
    "屋外現場で使うポータブル電源の選び方｜工場扇・冷温庫・工具・災害時電源に使える業務用電源とは｜作業用品ナビ",
  description:
    "屋外現場で使うポータブル電源の選び方を解説。工場扇・冷温庫・照明・工具・災害時電源に必要な容量、出力、防水・防塵性能を比較し、蓄電丸・MEIHOポータブルパワーステーション・冷温庫・ポータブルトランスの使い分けを紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "屋外現場で使うポータブル電源の選び方｜工場扇・冷温庫・工具・災害時電源に使える業務用電源とは",
    description:
      "屋外現場で使うポータブル電源の選び方を解説。工場扇・冷温庫・照明・工具・災害時電源に必要な容量、出力、防水・防塵性能を比較し、蓄電丸・MEIHOポータブルパワーステーション・冷温庫・ポータブルトランスの使い分けを紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

const UTM = "utm_source=sagyou_navi";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url);

const Y = (id: string) =>
  `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=`;

const URL_CHIKUDENMARU = "https://item.rakuten.co.jp/crecote-shop/kps-0202/";
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
  btn?: string;
};

const CHIKUDENMARU: Prod = {
  id: "kps-0202",
  imgId: "kps-0202",
  name: "ポータブル電源 蓄電丸（リン酸鉄リチウム・IP65防水防塵）",
  use: "屋外現場・防災・仮設電源向け",
  url: URL_CHIKUDENMARU,
  btn: "楽天市場で見る",
};

const MEIHO: Prod[] = [
  {
    id: "172196",
    name: "MEIHO ポータブルパワーステーション MPS1500",
    use: "中規模現場の電源補助",
    url: Y("172196"),
  },
  {
    id: "172197",
    name: "MEIHO ポータブルパワーステーション MPS2000",
    use: "複数機器を運用したい現場",
    url: Y("172197"),
  },
  {
    id: "172198",
    name: "MEIHO ポータブルパワーステーション MPS3000",
    use: "大容量・長時間使用を重視したい現場",
    url: Y("172198"),
  },
];

const COMPARE: Prod[] = [
  CHIKUDENMARU,
  ...MEIHO,
  {
    id: "172101",
    name: "IRIS 充電式ポータブル冷温庫 26L ホワイト IPDW-B3A-W",
    use: "飲料・保冷剤の冷温管理",
    url: Y("172101"),
  },
  {
    id: "224302",
    name: "TRUSCO ポータブルトランス 30A 3kVA 降圧・昇圧兼用型 TPT-30BD",
    use: "電圧変換が必要な作業環境",
    url: Y("224302"),
  },
];

const FAQ_ITEMS = [
  {
    q: "屋外現場でポータブル電源を選ぶときの最重要ポイントは何ですか？",
    a: "最初に確認するのは、使用したい機器の消費電力と使用時間です。容量Whだけでなく、定格出力W、起動電力、防水・防塵性能、重量、充電方法もあわせて確認しましょう。",
  },
  {
    q: "工場扇をポータブル電源で使うには何を確認すればよいですか？",
    a: "工場扇の消費電力、起動時の電力、使いたい時間を確認します。複数台使う場合は合計消費電力も見て、ポータブル電源の定格出力に余裕があるか確認しましょう。",
  },
  {
    q: "蓄電丸はどんな現場に向いていますか？",
    a: "蓄電丸は、IP65防塵・防水、2160Wh容量、2000W出力、リン酸鉄リチウムイオンバッテリー、UPS機能などを備える業務用ポータブル電源として紹介されています（数値は参考値）。屋外現場、イベント、災害時、休憩所、倉庫ヤードなど、電源確保が課題になる場所で比較候補になります。",
  },
  {
    q: "ポータブル電源とポータブルトランスは何が違いますか？",
    a: "ポータブル電源は電気をためて機器に給電するものです。ポータブルトランスは電圧を変換する機器で、電気をためるものではありません。停電時や電源のない場所で使いたい場合は、ポータブル電源が候補になります。",
  },
  {
    q: "冷温庫があればポータブル電源はいりませんか？",
    a: "冷温庫は飲料や保冷剤を冷やす機器であり、工場扇や照明に給電する電源ではありません。電源のない屋外休憩所で冷温庫を使う場合は、ポータブル電源もあわせて検討します。",
  },
  {
    q: "防水ポータブル電源なら雨の中でも自由に使えますか？",
    a: "防水・防塵性能がある製品でも、使用条件や接続部の扱い、ケーブル、設置場所、メーカーの注意事項を確認する必要があります。雨天時や屋外使用では、仕様書と使用ルールに従って運用しましょう。",
  },
];

const RELATED = [
  {
    href: "/articles/worksite-rest-area-heat",
    label:
      "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品",
  },
  {
    href: "/articles/construction-portable-power-selection",
    label:
      "工事現場のポータブル電源の選び方｜工具・照明・冷温庫・非常用電源に使える容量と出力の目安",
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

function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={u(href)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-4 text-center font-bold text-white transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function FinalCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="my-6">
      <a
        href={u(href)}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-900">
      <p className="mb-1 font-semibold">⚠️ ご確認ください</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-400 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(imgId)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{item.name}</p>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{item.use}</p>
        <span className="mt-3 inline-block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-bold text-white">
          {item.btn ?? "商品ページを見る"}
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Prod[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={`${item.id}-${item.name}`} item={item} />
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

function ArticleImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="my-6 w-full rounded-lg"
    />
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 text-sm align-top">
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
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">屋外現場のポータブル電源</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          屋外現場で使うポータブル電源の選び方｜工場扇・冷温庫・工具・災害時電源に使える業務用電源とは
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月7日／約14分で読めます
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5 leading-relaxed">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            屋外現場でポータブル電源を選ぶときは、まず「何を・何時間使いたいか」を決めることが出発点です。工場扇、冷温庫、照明、充電機器、電動工具など、使用する機器の消費電力と台数を確認し、必要な容量（Wh）・定格出力（W）・防水防塵性能・持ち運びやすさを比較しましょう。
          </p>
          <p className={cls.body}>
            工事現場・イベント会場・屋外休憩所のように雨や砂ぼこりが気になる場所では、防水・防塵性能を備えた業務用ポータブル電源が候補になります。蓄電丸は、IP65防塵・防水、2160Whの容量、2000Wの出力、リン酸鉄リチウムイオンバッテリー、UPS機能などを備えたポータブル電源として紹介されています（数値は参考値）。
          </p>
          <p className={cls.body}>
            ただし、容量だけで判断せず、使用機器の消費電力・起動電力・使用時間・設置環境・充電方法・メーカー仕様を確認することが大切です。屋外での電気の取り扱いは、接続部・ケーブル・設置場所にも注意して運用しましょう。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="屋外現場でポータブル電源を使い工場扇や冷温庫を動かすイメージ"
        />

        <ProductGrid items={[CHIKUDENMARU]} />

        <CTA href={URL_CHIKUDENMARU}>
          屋外現場の電源確保に、防水・防塵の業務用ポータブル電源「蓄電丸」を確認する
        </CTA>

        <H2>屋外現場でポータブル電源が必要になる場面</H2>
        <ArticleImg
          src={IMG.devices}
          alt="屋外現場でポータブル電源が必要な機器を並べたイメージ"
        />
        <p className={cls.body}>
          屋外現場では、コンセントが近くにない・仮設電源が足りない・雨や砂ぼこりで機器の取り回しに気を使う、といった悩みが起きやすいものです。この記事は
          <Link
            href="/articles/worksite-rest-area-heat"
            className="text-gray-900 underline hover:no-underline"
          >
            「現場休憩所の暑さ対策」
          </Link>
          全体ではなく、
          <strong>屋外現場での電源確保に特化</strong>
          して整理します。まずは、電源が必要になりやすい場面を見ていきます。
        </p>

        <H3>工場扇や大型扇風機を使いたい</H3>
        <p className={cls.body}>
          屋外の休憩所やヤードで工場扇・大型扇風機を回したい場面です。モーター機器は起動時に大きな電力が必要になることがあるため、消費電力と起動電力、使用時間を確認しておくと安心です。
        </p>

        <H3>冷温庫・クーラーボックス・保冷用品を運用したい</H3>
        <p className={cls.body}>
          飲料や保冷剤の管理に冷温庫を使いたい場面です。冷温庫は「飲料などを冷やす機器」であり、他の機器へ給電する電源そのものではありません。屋外で冷温庫を使う場合は、その電源としてポータブル電源を検討することになります。クーラーボックスとの使い分けも、保冷用途の整理として検討の余地があります。
        </p>

        <H3>照明・誘導灯・受付機器・通信機器を使いたい</H3>
        <p className={cls.body}>
          イベント受付、仮設ブース、夜間作業などで、照明・誘導灯・受付端末・通信機器の電源が必要になる場面です。使用機器が増えるほど合計消費電力が上がるため、容量と定格出力に余裕を持たせておきたいところです。
        </p>

        <H3>電動工具や計測機器を一時的に使いたい</H3>
        <p className={cls.body}>
          電源が引けない場所で電動工具や計測機器を一時的に使う場面です。工具は起動電力が大きい場合があるため、定格出力・最大出力の確認が重要になります。
        </p>

        <H3>災害時・停電時の非常用電源も兼ねたい</H3>
        <p className={cls.body}>
          事業所や施設で、停電・災害時の備え（BCP）として最低限の電源を確保しておきたい場面です。日常は現場用、非常時はバックアップ、という兼用の考え方もあります。
        </p>

        <Caution>
          <p>
            ポータブル電源は、電源確保の選択肢の一つです。熱中症対策としての使用を想定する場合も、機器（工場扇・冷温庫など）を動かすための電源であり、
            <strong>それ自体が熱中症を防ぐものではありません</strong>
            。WBGT（暑さ指数）の確認、こまめな休憩、水分・塩分補給、作業時間の管理、体調不良時の報告体制とあわせて運用してください。体調不良時は無理をせず、必要に応じて119番・医療機関の受診を優先してください。
          </p>
        </Caution>

        <H2>ポータブル電源選びは「容量・出力・防水防塵・用途」で考える</H2>
        <p className={cls.body}>
          製品を比べる前に、確認しておきたい項目を整理します。容量（Wh）だけで選ぶと出力不足になりやすいため、定格出力（W）・起動電力・防水防塵・重量などをセットで見るのがポイントです。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>確認項目</Th>
                <Th>見るポイント</Th>
                <Th>現場での意味</Th>
                <Th>確認時の注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>容量</Td><Td>Wh</Td><Td>どれくらい長く使えるか</Td><Td>変換ロス・温度で実使用は変動</Td></tr>
              <tr><Td>定格出力</Td><Td>W</Td><Td>消費電力の大きい機器を使えるか</Td><Td>合計消費電力が定格を超えない範囲で</Td></tr>
              <tr><Td>最大出力・起動電力</Td><Td>W</Td><Td>モーター機器・工具の起動時に重要</Td><Td>定格内でも起動時に保護が働くことがある</Td></tr>
              <tr><Td>防水・防塵</Td><Td>IP等級</Td><Td>屋外・雨・砂ぼこりへの対応</Td><Td>等級があっても使用条件・接続部の扱いを確認</Td></tr>
              <tr><Td>バッテリー種類</Td><Td>リン酸鉄（LFP）など</Td><Td>寿命・安全性・繰り返し利用</Td><Td>充電・保管の温度条件を確認</Td></tr>
              <tr><Td>充電時間</Td><Td>時間</Td><Td>現場投入までの準備時間</Td><Td>環境温度・充電方法で変動</Td></tr>
              <tr><Td>重量</Td><Td>kg</Td><Td>持ち運び・設置人数</Td><Td>台車・複数人での運搬も想定</Td></tr>
              <tr><Td>出力ポート</Td><Td>AC・USBなど</Td><Td>接続できる機器</Td><Td>必要なポート種類・口数を確認</Td></tr>
              <tr><Td>並列運転</Td><Td>可否・台数</Td><Td>複数台運用や大規模電源確保</Td><Td>専用コード・コネクターの要否を確認</Td></tr>
              <tr><Td>UPS</Td><Td>切替時間</Td><Td>停電時のバックアップ用途</Td><Td>対応機器・切替条件をメーカー仕様で確認</Td></tr>
            </tbody>
          </table>
        </div>

        <H2>蓄電丸とは？屋外現場向けポータブル電源としての特徴</H2>
        <ArticleImg
          src={IMG.waterproof}
          alt="防水防塵ポータブル電源を屋外現場で使うイメージ"
        />
        <p className={cls.body}>
          蓄電丸は、グループ会社アスコの製品情報で、屋外・雨天・災害時・工事現場などでの利用を想定した業務用ポータブル電源として紹介されています。以下の数値は参考値で、仕様は変更される場合があります。
        </p>

        <H3>IP65防塵・防水仕様で屋外現場に検討しやすい</H3>
        <p className={cls.body}>
          防塵・防水性能IP65を備える設計で、雨天や砂塵の多い環境での使用を想定した製品として紹介されています。屋外現場・仮設現場の電源として比較候補になります。
        </p>

        <H3>2160Wh容量・2000W出力で幅広い機器に対応しやすい</H3>
        <p className={cls.body}>
          定格容量2160Wh、定格出力2000Wとされ、工場扇・冷温庫・照明・充電機器など、消費電力の大きめな機器の運用も想定できるクラスです。実際の使用可否は各機器の消費電力・起動電力によります。
        </p>

        <H3>リン酸鉄リチウムイオンバッテリーで繰り返し使用を想定</H3>
        <p className={cls.body}>
          電気自動車にも使われるリン酸鉄リチウムイオン（LFP）バッテリーを搭載し、約2,000回の充放電サイクル（循環後80％維持）とされています。繰り返し使う業務用途を想定した構成です。
        </p>

        <H3>最大5台の並列運転に対応し、大規模電源にも拡張可能</H3>
        <p className={cls.body}>
          専用の並列コード（別売）で2台、拡張コネクター（別売・受注生産）で3〜5台までの並列運転に対応するとされ、消費電力の大きい用途にも拡張できる構成です。並列時の出力は台数に応じて拡張されると案内されています。
        </p>

        <H3>UPS機能・Wi-Fi接続・消火システムなども搭載</H3>
        <p className={cls.body}>
          UPS（無停電電源装置）切替時間10ms以下、Wi-Fiによる状態確認、内部温度180℃で作動する酸素遮断式の消火システム、-20〜5℃でバッテリーを加熱するシステム、PV入力（最大800W）、AC100V×2・USB-A×1・USB-C×1、重量約41kg、サイズL649×W431×H452mm、IK09耐衝撃性能などが仕様として挙げられています。
        </p>

        <Caution>
          <p>
            上記の数値は参考値であり、仕様は予告なく変更される場合があります。防水・防塵性能があっても「雨の中で自由に使える」ことを保証するものではありません。使用条件、接続部・ケーブル・設置場所の扱い、充電・保管の温度条件など、
            <strong>メーカー仕様と使用上の注意に沿って運用</strong>
            してください。消火システムが作動した場合、本機は再使用できないとされています。
          </p>
        </Caution>

        <ProductGrid items={[CHIKUDENMARU]} />

        <CTA href={URL_CHIKUDENMARU}>
          IP65防塵・防水、2160Wh、2000W出力の業務用ポータブル電源「蓄電丸」を確認する
        </CTA>

        <H2>蓄電丸が向いている現場</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>現場</Th>
                <Th>課題</Th>
                <Th>蓄電丸が候補になる理由</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>建設・土木現場</Td><Td>雨・砂ぼこり・仮設電源不足</Td><Td>IP65、防塵・防水、2000W出力</Td><Td>使用機器の消費電力・起動電力を確認</Td></tr>
              <tr><Td>屋外イベント</Td><Td>受付・照明・冷温庫・送風機を使いたい</Td><Td>大容量・複数機器接続・UPS</Td><Td>同時使用時の合計消費電力を確認</Td></tr>
              <tr><Td>現場休憩所</Td><Td>工場扇・冷温庫・充電機器を使いたい</Td><Td>熱中症対策用品の電源補助になり得る</Td><Td>電源であり熱中症対策そのものではない</Td></tr>
              <tr><Td>倉庫・屋外ヤード</Td><Td>電源から離れた場所で作業したい</Td><Td>持ち運び可能な大容量電源</Td><Td>重量約41kg。運搬・設置方法を確認</Td></tr>
              <tr><Td>災害・停電対策</Td><Td>非常時の電源確保</Td><Td>LFP、UPS、ソーラー充電に対応</Td><Td>必要機器・使用時間を平時に想定しておく</Td></tr>
              <tr><Td>商業施設・仮設店舗</Td><Td>一時的なバックアップ電源</Td><Td>並列運転・高出力運用の選択肢</Td><Td>並列は専用コード・コネクターが別売</Td></tr>
            </tbody>
          </table>
        </div>

        <H2>MEIHOポータブルパワーステーションとの比較</H2>
        <ArticleImg
          src={IMG.comparison}
          alt="業務用ポータブル電源を比較する購買担当者のイメージ"
        />
        <p className={cls.body}>
          MEIHOのポータブルパワーステーションは、MPS1500・MPS2000・MPS3000のラインナップがあります。型番の数字は容量・出力クラスの目安として案内されることが多いですが、
          <strong>具体的な容量・定格出力はメーカー仕様の確認が必要</strong>
          です。ここでは役割ベースで整理します。
        </p>

        <H3>MPS1500は中規模現場の電源補助に</H3>
        <p className={cls.body}>
          容量と可搬性のバランスを取りたい、休憩所・イベント・中規模現場の電源補助に向く位置づけです。
        </p>
        <H3>MPS2000は使用機器が多い現場に</H3>
        <p className={cls.body}>
          工場扇・冷温庫・照明など、複数機器を運用したい現場に向く位置づけです。
        </p>
        <H3>MPS3000は容量を重視したい現場に</H3>
        <p className={cls.body}>
          長時間使用や大型イベントなど、容量を重視したい場面に向く位置づけです。
        </p>
        <H3>蓄電丸は防水・防塵・業務用屋外運用を重視したい場合に比較候補</H3>
        <p className={cls.body}>
          雨・砂ぼこりのある屋外現場や災害対策を重視する場合、IP65・防水防塵の蓄電丸が比較候補になります。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品</Th>
                <Th>役割</Th>
                <Th>想定用途</Th>
                <Th>比較ポイント</Th>
                <Th>向いている現場</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>蓄電丸</Td><Td>ポータブル電源</Td><Td>屋外現場・防災・仮設電源</Td><Td>IP65・防水防塵、2160Wh、2000W、並列運転</Td><Td>雨・砂ぼこり・災害対策を重視する現場</Td></tr>
              <tr><Td>MEIHO MPS1500</Td><Td>ポータブル電源</Td><Td>中規模の電源補助</Td><Td>容量と可搬性のバランス（詳細はメーカー仕様を確認）</Td><Td>休憩所・イベント・現場電源</Td></tr>
              <tr><Td>MEIHO MPS2000</Td><Td>ポータブル電源</Td><Td>複数機器運用</Td><Td>出力・容量を重視（詳細はメーカー仕様を確認）</Td><Td>工場扇・冷温庫・照明</Td></tr>
              <tr><Td>MEIHO MPS3000</Td><Td>ポータブル電源</Td><Td>大容量運用</Td><Td>長時間使用を重視（詳細はメーカー仕様を確認）</Td><Td>大型イベント・広い現場</Td></tr>
              <tr><Td>IRIS 充電式ポータブル冷温庫26L</Td><Td>冷温庫</Td><Td>保冷・保温</Td><Td>電源ではなく冷温庫。給電はできない</Td><Td>飲料・保冷剤管理</Td></tr>
              <tr><Td>TRUSCO ポータブルトランス</Td><Td>変圧器</Td><Td>降圧・昇圧</Td><Td>電圧変換用。蓄電はできない</Td><Td>電源条件の変換が必要な現場</Td></tr>
            </tbody>
          </table>
        </div>

        <ProductGrid items={COMPARE} />

        <CTA href={Y("172197")}>
          MEIHOポータブルパワーステーション MPS1500・MPS2000・MPS3000も比較する
        </CTA>

        <H2>工場扇・冷温庫・工具を使うときの確認ポイント</H2>
        <H3>工場扇は消費電力と使用時間を確認する</H3>
        <p className={cls.body}>
          工場扇の消費電力・起動電力・使いたい時間を確認します。複数台なら合計消費電力を見て、定格出力に余裕があるか確認しましょう。
        </p>
        <H3>冷温庫は保冷用途と電源用途を分けて考える</H3>
        <p className={cls.body}>
          冷温庫は飲料などを冷やす機器で、他機器へ給電する電源ではありません。屋外で使う場合はその電源としてポータブル電源を検討します。
        </p>
        <H3>電動工具は起動電力・定格出力を確認する</H3>
        <p className={cls.body}>
          工具は起動時に大きな電力が必要な場合があります。定格出力・最大出力とあわせて、メーカー仕様で確認しましょう。
        </p>
        <H3>複数機器を同時使用する場合は合計消費電力を確認する</H3>
        <p className={cls.body}>
          同時使用する機器の消費電力を合算し、ポータブル電源の定格出力を超えない範囲で運用します。
        </p>
        <H3>雨天・屋外ではケーブル・設置場所・接続部の扱いに注意する</H3>
        <p className={cls.body}>
          防水・防塵性能がある製品でも、接続部やケーブル、設置場所の扱いには注意が必要です。使用条件はメーカー仕様に従ってください。
        </p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-4">
          <p className="font-bold">使用時間の目安（概算）</p>
          <p className={`mt-2 ${cls.bodySm}`}>
            使用時間の目安は、概算で「ポータブル電源の容量Wh ÷ 使用機器の消費電力W」で考えられます。実際には変換ロス、周囲温度、バッテリー状態、起動電力などで変わるため、
            <strong>余裕を見て選ぶ</strong>
            ことをおすすめします。
          </p>
        </div>

        <H2>ポータブル電源・冷温庫・ポータブルトランスの違い</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>種類</Th>
                <Th>役割</Th>
                <Th>電気をためられるか</Th>
                <Th>向いている用途</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>ポータブル電源</Td><Td>電気をためて機器に給電する</Td><Td>できる</Td><Td>屋外現場・災害・イベント</Td><Td>容量と定格出力の両方を確認</Td></tr>
              <tr><Td>冷温庫</Td><Td>飲料や保冷剤を冷やす</Td><Td>基本的に電源機器ではない</Td><Td>休憩所・熱中症対策の補助</Td><Td>他機器へ給電はできない</Td></tr>
              <tr><Td>ポータブルトランス</Td><Td>電圧を変換する</Td><Td>できない</Td><Td>電圧条件を合わせる</Td><Td>蓄電はできない。用途を混同しない</Td></tr>
              <tr><Td>発電機</Td><Td>燃料で発電する</Td><Td>燃料が必要</Td><Td>長時間・大電力用途</Td><Td>排気・燃料・騒音・使用場所に注意</Td></tr>
              <tr><Td>ソーラーパネル</Td><Td>太陽光で充電補助</Td><Td>単体では蓄電しない</Td><Td>充電補助・防災</Td><Td>ポータブル電源と組み合わせて使う</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          蓄電丸はPV入力（ソーラー充電）にも対応し、ソーラーパネルとの組み合わせも案内されています。電圧変換が必要な現場では、蓄電池ではなくポータブルトランスが役割として合致します。
        </p>
        <ProductGrid items={[COMPARE[5]]} />
        <CTA href={Y("224302")}>
          電圧変換が必要な現場では、TRUSCOポータブルトランスも確認する
        </CTA>

        <H2>現場別・おすすめ電源構成例</H2>
        <ArticleImg
          src={IMG.disaster}
          alt="施設の停電対策としてポータブル電源を準備するイメージ"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>現場</Th>
                <Th>使いたい機器</Th>
                <Th>構成例</Th>
                <Th>確認ポイント</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>建設現場休憩所</Td><Td>工場扇、冷温庫、スマホ充電</Td><Td>蓄電丸またはMEIHO＋冷温庫</Td><Td>同時使用の合計消費電力</Td></tr>
              <tr><Td>屋外イベント受付</Td><Td>照明、受付端末、送風機</Td><Td>蓄電丸＋予備電源＋冷温庫</Td><Td>使用時間と充電タイミング</Td></tr>
              <tr><Td>災害時拠点</Td><Td>通信機器、照明、最低限の家電</Td><Td>蓄電丸＋ソーラー充電</Td><Td>平時に必要機器・時間を想定</Td></tr>
              <tr><Td>倉庫ヤード</Td><Td>扇風機、計測機器、仮設照明</Td><Td>MEIHOまたは蓄電丸</Td><Td>運搬・設置方法</Td></tr>
              <tr><Td>仮設店舗</Td><Td>決済端末、照明、小型機器</Td><Td>ポータブル電源＋UPS確認</Td><Td>UPS対応機器・切替条件</Td></tr>
              <tr><Td>工事車両・巡回</Td><Td>充電機器、小型工具</Td><Td>MEIHO小型〜中型クラス</Td><Td>可搬性と必要出力</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          飲料・保冷剤の管理には、給電機器とは別に冷温庫を組み合わせる構成も現場で使われています。
        </p>
        <ProductGrid items={[COMPARE[4]]} />
        <CTA href={Y("172101")}>
          休憩所の飲料・保冷剤管理には、IRIS充電式ポータブル冷温庫も確認する
        </CTA>

        <H2>購入前に確認したい注意点</H2>
        <H3>容量だけでなく定格出力を見る</H3>
        <p className={cls.body}>
          容量Whが大きくても、定格出力Wが足りないと消費電力の大きい機器は動かせない場合があります。両方を確認しましょう。
        </p>
        <H3>モーター機器は起動電力を確認する</H3>
        <p className={cls.body}>
          工場扇・工具などモーター機器は、起動時に定格を超える電力が必要な場合があります。メーカー仕様を確認します。
        </p>
        <H3>防水・防塵性能は使用条件を確認する</H3>
        <p className={cls.body}>
          IP等級があっても使用条件があります。雨天・屋外での運用可否は仕様書と使用ルールに従ってください。
        </p>
        <H3>重量と移動方法を確認する</H3>
        <p className={cls.body}>
          大容量機は重くなりがちです（蓄電丸は約41kgと案内）。台車・設置人数など運搬方法も検討します。
        </p>
        <H3>保管温度・充電温度・メンテナンスを確認する</H3>
        <p className={cls.body}>
          バッテリーには充電・保管の温度条件があります。長期保管の条件やメンテナンスもメーカー仕様で確認します。
        </p>
        <H3>屋外使用時は接続部・ケーブル・設置場所に注意する</H3>
        <p className={cls.body}>
          屋外での電気の取り扱いは、接続部・ケーブル・設置場所の扱いに注意が必要です。
        </p>

        <Caution>
          <p>
            屋外での電気の使用は、感電・漏電・転倒・つまずきなどのリスクを伴います。ケーブルの取り回し、接続部の防水・防塵、設置場所の安定、たこ足配線の回避などに注意し、
            <strong>各機器・電源のメーカー仕様と、会社・現場の安全ルールに従って運用</strong>
            してください。ポータブル電源だけで現場の安全や停電・熱中症を保証できるものではありません。
          </p>
        </Caution>

        <H2>よくある失敗</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>失敗</Th>
                <Th>起こりやすい問題</Th>
                <Th>対策</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>容量Whだけで選ぶ</Td><Td>出力不足で機器が動かない</Td><Td>定格出力Wも確認</Td></tr>
              <tr><Td>工場扇や工具の起動電力を見落とす</Td><Td>起動時に保護が働く可能性</Td><Td>メーカー仕様を確認</Td></tr>
              <tr><Td>屋外なのに防水防塵を確認しない</Td><Td>雨・粉じん環境で使いにくい</Td><Td>IP等級と使用条件を確認</Td></tr>
              <tr><Td>冷温庫を電源と混同する</Td><Td>他の機器へ給電できない</Td><Td>冷温庫とポータブル電源を分ける</Td></tr>
              <tr><Td>ポータブルトランスを蓄電池と思う</Td><Td>電気をためられない</Td><Td>役割を理解して選ぶ</Td></tr>
              <tr><Td>重量を確認しない</Td><Td>現場で運搬しづらい</Td><Td>台車・設置人数も考える</Td></tr>
              <tr><Td>熱中症対策用品だけ買う</Td><Td>電源がなく使えない</Td><Td>工場扇・冷温庫と電源をセットで検討</Td></tr>
            </tbody>
          </table>
        </div>

        <H2>購入前チェックリスト</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>チェック項目</Th>
                <Th>確認内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>使用機器</Td><Td>工場扇、冷温庫、照明、工具など何を使うか</Td></tr>
              <tr><Td>消費電力</Td><Td>各機器のW数を確認したか</Td></tr>
              <tr><Td>使用時間</Td><Td>何時間使いたいか</Td></tr>
              <tr><Td>同時使用</Td><Td>複数機器を同時に使うか</Td></tr>
              <tr><Td>定格出力</Td><Td>合計消費電力に足りるか</Td></tr>
              <tr><Td>起動電力</Td><Td>モーター機器・工具の起動時に対応できるか</Td></tr>
              <tr><Td>容量</Td><Td>Whの余裕があるか</Td></tr>
              <tr><Td>防水防塵</Td><Td>屋外・雨・粉じん環境で使うか</Td></tr>
              <tr><Td>重量</Td><Td>運搬・設置方法を決めたか</Td></tr>
              <tr><Td>充電方法</Td><Td>AC充電・ソーラー充電・保管場所を確認したか</Td></tr>
              <tr><Td>比較対象</Td><Td>蓄電丸、MEIHO、冷温庫、トランスを役割別に比較したか</Td></tr>
            </tbody>
          </table>
        </div>

        <H2>よくある質問</H2>
        <div className="my-6 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
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
          {RELATED.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-900 underline hover:no-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <H2>まとめ：屋外現場の電源は「使う機器」から逆算して選ぶ</H2>
        <ArticleImg
          src={IMG.trusco}
          alt="電源用品と作業用品をまとめて準備するイメージ"
        />
        <p className={cls.body}>
          屋外現場のポータブル電源は、「何を・何時間・同時に何台使うか」から逆算し、容量・定格出力・起動電力・防水防塵・重量・充電方法を確認して選ぶのが基本です。蓄電丸は防水・防塵の屋外運用を重視したい場合の比較候補、MEIHOは容量クラス別に、冷温庫・トランスは役割の違いを理解して使い分けましょう。
        </p>

        <FinalCTA href={URL_TRUSCO_LIST}>
          屋外現場・倉庫・イベントで使う作業用品をまとめて確認するなら、トラスコ中山一覧へ
        </FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
