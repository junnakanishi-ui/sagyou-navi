import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "standing-work-anti-fatigue-mat";
const SITE_URL = "https://sagyou-navi.com";

export const metadata: Metadata = {
  title: "立ち仕事の疲労軽減マットの選び方｜工場・レジ・作業場で足腰の負担を減らすには",
  description:
    "立ち仕事で足腰が疲れやすい工場、レジ、作業台、製造ラインでは、足元に疲労軽減マットを敷くことで体重負担の分散や底冷え対策に役立つ場合があります。TRUSCO足腰マット、帯電防止タイプ、エラストマットESD-II・STD-IIの違いと選び方を解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
};

/* ===== リンク生成（UTM付与・%25二重エンコード回避） ===== */
const YAHOO_BASE = "https://store.shopping.yahoo.co.jp/signcity-yshop/";
const TS_BASE = "https://www.trade-sign.com/";
const UTM = { source: "sagyou_navi", medium: "referral", campaign: "anti_fatigue_mat" };

function buildUrl(base: string, utmContent: string) {
  const [path, fragment] = base.split("#");
  const sep = path.includes("?") ? "&" : "?";
  const query =
    `utm_source=${UTM.source}` +
    `&utm_medium=${UTM.medium}` +
    `&utm_campaign=${UTM.campaign}` +
    `&utm_content=${utmContent}`;
  return `${path}${sep}${query}${fragment ? "#" + fragment : ""}`;
}

type Card = { name: string; href: string; img: string };

// Yahoo signcity-yshop（数値ID）
function yahoo(id: string, name: string): Card {
  return { name, href: buildUrl(`${YAHOO_BASE}${id}.html`, `${SLUG}_${id}`), img: `/products/${id}.jpg` };
}
// 自社EC trade-sign.com エラストマット（workgoods/{code}.html）
function elasto(code: string, name: string): Card {
  return { name, href: buildUrl(`${TS_BASE}workgoods/${code}.html`, `${SLUG}_tradesign_${code}`), img: `/products/${code}.jpg` };
}

/* ===== 商品データ ===== */
const MAT_17: Card[] = [
  yahoo("158667", "TRUSCO 足腰マット（厚さ17mm）黒 450×1500mm TAM-4515-17※名称仮"),
  yahoo("158666", "TRUSCO 足腰マット（厚さ17mm）黒 450×1200mm TAM-4512-17※名称仮"),
  yahoo("158665", "TRUSCO 足腰マット（厚さ17mm）黒 450×900mm TAM-4590-17※名称仮"),
  yahoo("158664", "TRUSCO 足腰マット（厚さ17mm）黒 450×600mm TAM-4560-17※名称仮"),
];

const MAT_ESD: Card[] = [
  yahoo("158663", "TRUSCO 足腰マット（帯電防止）グリーン 450×900mm TAM-4590-17-ESD-GR※名称仮"),
  yahoo("158662", "TRUSCO 足腰マット（帯電防止）グリーン 450×600mm TAM-4560-17-ESD-GR※名称仮"),
];

const MAT_9: Card[] = [
  yahoo("158661", "TRUSCO 足腰マット（厚さ9mm）グリーン 450×900mm TAM-4590-GR※名称仮"),
  yahoo("158660", "TRUSCO 足腰マット（厚さ9mm）グリーン 450×600mm TAM-4560-GR※名称仮"),
];

const ELASTO_STD: Card[] = [
  elasto("074344", "エラストマット STD-II グリーン 915×600×11mm※名称仮"),
  elasto("074345", "エラストマット STD-II グリーン 600×465×11mm※名称仮"),
];

const ELASTO_ESD: Card[] = [
  elasto("074342", "エラストマット ESD-II グレー 915×600×11mm※名称仮"),
  elasto("074343", "エラストマット ESD-II グレー 600×465×11mm※名称仮"),
];

const LIGHT_BENCH: Card[] = [
  yahoo("161973", "TRUSCO 軽量作業台 TFAE型 1200×600×740 TFAEL-1260※名称仮"),
  yahoo("160785", "TRUSCO 軽量作業台 基本 ダークグレー 1200×750×740 BE-1275※名称仮"),
  yahoo("161354", "TRUSCO 軽量立ち作業台 上棚付 ホワイト 900×600×1204 HAE-0960YURB W※名称仮"),
  yahoo("160909", "TRUSCO 軽量作業台 基本 ヤンググリーン 1200×750×740 AE-1200 YG※名称仮"),
  yahoo("160767", "TRUSCO 軽量作業台 キャスター付 1200×750×806 BO-1275C75※名称仮"),
  yahoo("173187", "TRUSCO 軽荷重作業台（300kg）AE型 900×450×H740 ホワイト AE-0945 W※名称仮"),
];

const MEDIUM_BENCH: Card[] = [
  yahoo("161631", "TRUSCO 中量作業台 基本 ヤンググリーン 1200×750×740 GWP-1275 YG※名称仮"),
  yahoo("220888", "TRUSCO 中荷重作業台（800kg）GW型 900×450×H740 グリーン GWR-0945※名称仮"),
  yahoo("221217", "TRUSCO 中荷重作業台（1200kg）HW型 1200×900×H740 グリーン HW-1209※名称仮"),
  yahoo("161679", "TRUSCO 中量作業台 回転台付アンビルバイス付 グリーン 1800×750×740 HW-1800VRS※名称仮"),
  yahoo("173342", "TRUSCO 中荷重作業台（500kg）AEW型 1500×900×H740 ダークグレー AEWP-1590※名称仮"),
  yahoo("219000", "TRUSCO 中荷重作業台500kg CFW型 1800×750×H740 薄型2段引出付 ダークグレー CFWS-1875UDK2※名称仮"),
];

/* ===== 一覧URL（再エンコード禁止でそのまま定数化） ===== */
const LIST_URLS = {
  matYahoo: `${YAHOO_BASE}search.html?p=%E8%B6%B3%E8%85%B0%E3%83%9E%E3%83%83%E3%83%88#CentSrchFilter1`,
  elastoTS: `${TS_BASE}search/?q=%E7%96%B2%E5%8A%B4%E8%BB%BD%E6%B8%9B`,
  lightBench: `${YAHOO_BASE}search.html?p=%E8%BB%BD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0#CentSrchFilter1`,
  mediumBench: `${YAHOO_BASE}search.html?aq=&oq=&p=%E4%B8%AD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0&storeid=signcity-yshop`,
  trusco: `${YAHOO_BASE}a5c8a5e9a5.html#sideNaviItems`,
};

/* ===== 共通パーツ（作業用品ナビ＝黒系ボタン） ===== */
function ProductCard({ name, href, img }: Card) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener" className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img src={img} alt={name} loading="lazy" className="h-full w-full object-contain transition group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="flex-1 text-sm leading-snug text-gray-800">{name}</p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">商品を見る</span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Card[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((p) => (<ProductCard key={p.href} {...p} />))}
    </div>
  );
}

function ListCTA({ href, utm, heading, text, label, strong = false }: { href: string; utm: string; heading: string; text: string; label: string; strong?: boolean }) {
  return (
    <div className={"my-6 rounded-lg border p-5 " + (strong ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-gray-50")}>
      <h3 className={cls.ctaH3}>{heading}</h3>
      <p className={cls.bodySm + " mb-4"}>{text}</p>
      <a href={buildUrl(href, utm)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md bg-gray-900 px-5 py-2.5 font-semibold text-white transition hover:bg-gray-700">{label} →</a>
    </div>
  );
}

/* ===== JSON-LD ===== */
const faqs = [
  {
    q: "立ち仕事の疲労軽減マットはどんな場所で使えますか？",
    a: "工場の作業台前・検品台前・梱包台前、スーパーやコンビニのレジ下、店舗カウンター、受付、厨房など、長時間同じ場所に立つ作業で使いやすいです。水や油、静電気対策の有無に合わせて、耐油・耐水タイプや導電性タイプを選びます。",
  },
  {
    q: "足腰マットとエラストマットは何が違いますか？",
    a: "足腰マットは、厚さ17mmタイプなどクッション性を重視した立ち仕事用マットとして使いやすい商品です。エラストマットはSTD-IIとESD-IIがあり、STD-IIは工場・レジ・店舗カウンター向け、ESD-IIは静電気対策が必要な現場向けに検討しやすいマットです。",
  },
  {
    q: "厚さ17mmと11mmではどちらを選べばよいですか？",
    a: "クッション性を重視する場合は17mmタイプ、レジ下や限られたスペースで使いたい場合は11mm前後のエラストマットも候補になります。設置場所の段差、台車の通行、人の動線、つまずきにくさもあわせて確認しましょう。",
  },
  {
    q: "静電気対策が必要な現場ではどのマットを選べばよいですか？",
    a: "電子部品・半導体・精密機器など静電気を嫌う現場では、帯電防止足腰マットやエラストマットESD-IIなど、導電性・帯電防止仕様のあるマットを検討します。マットだけでなく、作業靴・作業台・アース環境なども含めて確認することが大切です。",
  },
  {
    q: "油や水がある場所でも使えますか？",
    a: "TRUSCO足腰マットは耐油性・耐水性に優れると案内されています。油や水がある工場・厨房・作業場では、マットの素材・清掃方法・滑りにくさ・設置場所を確認して選びましょう。",
  },
  {
    q: "疲労軽減マットを敷けば足腰の痛みはなくなりますか？",
    a: "疲労軽減マットは足元環境を改善する対策の一つですが、足腰の痛みや不調を必ず解消するものではありません。靴、インソール、作業台の高さ、休憩、姿勢、作業時間などもあわせて見直すことが重要です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "比較", item: `${SITE_URL}/category/compare` },
    { "@type": "ListItem", position: 3, name: "立ち仕事の疲労軽減マットの選び方", item: `${SITE_URL}/articles/${SLUG}` },
  ],
};

/* ===== ページ本体 ===== */
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-1">/</span><span>比較</span><span className="mx-1">/</span>
          <span className="text-gray-700">立ち仕事の疲労軽減マットの選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">比較</span>

        <h1 className={cls.h1}>
          立ち仕事の疲労軽減マットの選び方｜工場・レジ・作業場で足腰の負担を減らすには
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年6月27日／約14分で読めます</p>

        <img src="/images/standing-work-anti-fatigue-mat-hero.jpg" alt="立ち仕事の疲労軽減マットを作業場で確認するイメージ" className="mb-6 w-full rounded-lg object-cover" />

        <p className={cls.body}>
          工場・倉庫・レジ・厨房・作業台前では、長時間同じ場所に立つことが多く、足裏・膝・腰の疲れが出やすくなります。足元に敷く疲労軽減マット（足腰マット・エラストマット）は、こうした足元環境を改善する選択肢の一つです。ただし、足腰の疲れはマットだけで決まるものではないため、作業靴・インソール・作業台の高さ・休憩・姿勢・床面の状況とあわせて考えることが大切です。この記事では、現場別にどのマットが向くかを、足腰マットとエラストマットの違いも含めて整理します。
        </p>

        {/* AEO回答ブロック（結論＝青） */}
        <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className={cls.body.replace("mb-4 ", "")}>
            立ち仕事の疲労軽減マットを選ぶときは、まず「立つ時間」「床の硬さ」「水や油の有無」「静電気対策の必要性」「作業場所の広さ」を確認します。一般的な工場・レジ・作業台前なら疲労軽減用マット、油や水がある場所では耐油・耐水性、電子部品工場や静電気を嫌う現場では帯電防止・導電性タイプを検討すると選びやすくなります。
          </p>
        </div>

        {/* 健康注意（amber・YMYL） */}
        <div className="my-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className={cls.bodySm}>
            <strong className="text-amber-700">ご注意：</strong>
            疲労軽減マットは足元環境を改善する対策の一つであり、足腰の痛みや不調を必ず解消するもの・治療するものではありません。足腰の疲れは複数の要因で起こるため、作業靴・インソール・作業台の高さ・休憩・姿勢・作業時間もあわせて見直すことが大切です。滑りにくさ・安全性・静電気対策はマット単体で完結するものではないため、設置場所の床面・油や水・台車の通行・段差・清掃性、作業台や床・靴・アース環境もあわせて確認してください。
          </p>
        </div>

        {/* ===== H2：床の硬さ ===== */}
        <h2 className={cls.h2}>
          立ち仕事の足腰対策は「床の硬さ」から見直す
        </h2>
        <h3 className={cls.h3}>コンクリート床や硬い床では足裏に負担がかかりやすい</h3>
        <p className={cls.body}>
          工場・倉庫・厨房・店舗ではコンクリートや硬い塗床が多く、長時間立つと足裏・膝・腰に疲れが出やすくなります。疲労軽減マットは、立ち位置が決まっている作業に導入しやすいのが利点です。レジ下、作業台前、検品台前、組立ライン、機械操作盤前など、人がとどまる場所に合わせて敷くと効果を活かしやすくなります。
        </p>
        <h3 className={cls.h3}>マットだけでなく、靴・姿勢・作業台高さも確認する</h3>
        <p className={cls.body}>
          足腰の疲れは、床の硬さだけでなく、作業靴やインソール、作業台の高さ、姿勢、休憩の取り方など複数の要因で起こります。マットの導入とあわせて、これらの要素も見直すと、現場全体の負担軽減につながりやすくなります。
        </p>

        {/* ===== H2：できること ===== */}
        <h2 className={cls.h2}>
          疲労軽減マット・足腰マットでできること
        </h2>
        <h3 className={cls.h3}>体重負担を分散し、足腰の疲労軽減に役立つ</h3>
        <p className={cls.body}>
          クッション性のあるマットは、足元の硬さを和らげ、体重負担を分散することで、足裏・膝・腰の疲労感対策に役立つ場合があります。立ち位置が固定される作業ほど、効果を実感しやすい傾向があります（感じ方には個人差があります）。
        </p>
        <h3 className={cls.h3}>床からの冷気対策にも使える</h3>
        <p className={cls.body}>
          冬場や冷蔵・冷凍エリアに近い場所では、床からの冷えも不快感や疲れの原因になります。足腰マットは、足元と床の間に層をつくることで、底冷え対策としても使えます。
        </p>

        {/* ===== H2：選び方早見表 ===== */}
        <h2 className={cls.h2}>
          まず確認したい疲労軽減マットの選び方早見表
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">確認項目</th>
                <th className="border border-gray-200 px-3 py-2">選び方</th>
                <th className="border border-gray-200 px-3 py-2">向いている商品</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">長時間同じ場所に立つ</td><td className="border border-gray-200 px-3 py-2">クッション性を重視</td><td className="border border-gray-200 px-3 py-2">TRUSCO足腰マット 17mm</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">水や油がある</td><td className="border border-gray-200 px-3 py-2">耐油・耐水性と清掃性を確認</td><td className="border border-gray-200 px-3 py-2">耐油・耐水の足腰マット/エラスト</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">静電気対策が必要</td><td className="border border-gray-200 px-3 py-2">帯電防止・導電性仕様</td><td className="border border-gray-200 px-3 py-2">帯電防止足腰マット/エラストESD-II</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">レジ・店舗カウンターで使う</td><td className="border border-gray-200 px-3 py-2">コンパクト・つまずきにくさ</td><td className="border border-gray-200 px-3 py-2">エラストSTD-II/足腰マット450×600</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">作業台前・検品台前で使う</td><td className="border border-gray-200 px-3 py-2">立ち位置に合う長さ</td><td className="border border-gray-200 px-3 py-2">足腰マット450×900〜1500</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">冬場の底冷えが気になる</td><td className="border border-gray-200 px-3 py-2">厚みのあるタイプ</td><td className="border border-gray-200 px-3 py-2">足腰マット 17mm</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">法人で複数箇所に敷く</td><td className="border border-gray-200 px-3 py-2">サイズ・数量を統一</td><td className="border border-gray-200 px-3 py-2">足腰マット/エラスト一式</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2：TRUSCO足腰マット17mm ===== */}
        <h2 className={cls.h2}>
          TRUSCO足腰マットの特徴と向いている現場
        </h2>
        <img src="/images/factory-workbench-fatigue-reduction-mat.jpg" alt="工場の作業台前に足腰マットを敷くイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className={cls.h3}>厚さ17mmタイプはクッション性を重視したい現場に向く</h3>
        <p className={cls.body}>
          厚さ17mmタイプは、クッション性で体重負担を分散したい現場に向きます。耐油性・耐水性に優れると案内されており、作業台前・検品・梱包・レジ・受付など、立ち位置が固定される場所で使いやすいタイプです。色は黒で、汚れが目立ちにくいのも実務向きです。
        </p>
        <ProductGrid items={MAT_17} />
        <ListCTA href={LIST_URLS.matYahoo} utm={`${SLUG}_matlist`} heading="作業台前・レジ下に使いやすいTRUSCO足腰マットを確認する" text="立ち位置に合う長さ・厚み・帯電防止の要否を確認して選びましょう。" label="足腰マット一覧へ" strong />

        <h3 className={cls.h3}>450×600・450×900・450×1200・450×1500の使い分け</h3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">サイズ</th>
                <th className="border border-gray-200 px-3 py-2">向いている場所</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">450×600mm</td><td className="border border-gray-200 px-3 py-2">1人用の定位置（レジ・受付・操作盤前）</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">450×900mm</td><td className="border border-gray-200 px-3 py-2">作業台前・検品台前</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">450×1200mm</td><td className="border border-gray-200 px-3 py-2">梱包台や長めの作業台</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">450×1500mm</td><td className="border border-gray-200 px-3 py-2">横長ライン・広めの作業スペース</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2：帯電防止 ===== */}
        <h2 className={cls.h2}>
          帯電防止足腰マットは静電気対策が必要な現場に向く
        </h2>
        <img src="/images/esd-anti-fatigue-mat-electronics-factory.jpg" alt="電子部品工場で導電性疲労軽減マットを使うイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className={cls.h3}>電子部品・精密機器・静電気を嫌う作業場で検討する</h3>
        <p className={cls.body}>
          帯電防止タイプは、疲労軽減に加えて静電気対策が必要な場所向けです。電子部品・検査・組立・精密機器など、静電気を嫌う環境で検討します。選ぶ際は表面抵抗値などの仕様を確認しましょう。
        </p>
        <div className="my-4 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
          <p className={cls.bodySm}>
            静電気対策はマット単体で完結するものではありません。作業台・床・作業靴・リストストラップ・アース（接地）環境などもあわせて確認し、現場全体で対策を組み立ててください。
          </p>
        </div>
        <ProductGrid items={MAT_ESD} />

        {/* ===== H2：9mm ===== */}
        <h2 className={cls.h2}>
          厚さ9mmタイプは省スペースや段差を抑えたい場所で検討する
        </h2>
        <p className={cls.body}>
          厚さ9mmタイプは、17mmよりクッション性は控えめになりますが、段差を抑えたい場所や設置の都合で薄めを選びたい場合に向きます。人の動線、台車の通行、つまずきにくさを確認して選びましょう。
        </p>
        <ProductGrid items={MAT_9} />

        {/* ===== H2：エラストマット ===== */}
        <h2 className={cls.h2}>
          エラストマットの特徴と向いている現場
        </h2>
        <img src="/images/store-counter-standing-mat.jpg" alt="店舗カウンターやレジ下で疲労軽減マットを使うイメージ" className="my-6 w-full rounded-lg object-cover" />
        <h3 className={cls.h3}>エラストマットSTD-IIは工場・レジ・店舗カウンターに向く</h3>
        <p className={cls.body}>
          STD-IIは、一般的な立ち作業の疲労対策向けです。工場の立ち作業、スーパー・コンビニのレジ下、店舗カウンターの足元などに使いやすく、厚さ11mmで、915×600mmと600×465mmのサイズ展開があります。
        </p>
        <ProductGrid items={ELASTO_STD} />
        <h3 className={cls.h3}>エラストマットESD-IIは静電気対策が必要な現場に向く</h3>
        <p className={cls.body}>
          ESD-IIは、導電性・耐油性・疲労軽減を重視する現場向けです。半導体・電子部品工場、製薬工場、研究所、印刷工場などで検討しやすく、アースコードを使って接地できる仕様があります。接地方法や仕様は商品ページで確認してください。
        </p>
        <ProductGrid items={ELASTO_ESD} />
        <ListCTA href={LIST_URLS.elastoTS} utm={`${SLUG}_tradesign_elastolist`} heading="レジ・工場・静電気対策に使えるエラストマットを確認する" text="STD-II（一般立ち作業向け）とESD-II（静電気対策向け）から、現場条件に合うタイプを選びましょう。自社EC（サインシティ）で確認できます。" label="エラストマット一覧へ" strong />

        {/* ===== H2：違い 比較表 ===== */}
        <h2 className={cls.h2}>
          足腰マットとエラストマットの違い
        </h2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-3 py-2">比較項目</th>
                <th className="border border-gray-200 px-3 py-2">TRUSCO足腰マット</th>
                <th className="border border-gray-200 px-3 py-2">エラスト STD-II</th>
                <th className="border border-gray-200 px-3 py-2">エラスト ESD-II</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 px-3 py-2">主な用途</td><td className="border border-gray-200 px-3 py-2">立ち作業の疲労軽減</td><td className="border border-gray-200 px-3 py-2">一般立ち作業の疲労軽減</td><td className="border border-gray-200 px-3 py-2">静電気対策＋疲労軽減</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">厚さ</td><td className="border border-gray-200 px-3 py-2">17mm / 9mm</td><td className="border border-gray-200 px-3 py-2">11mm</td><td className="border border-gray-200 px-3 py-2">11mm</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">サイズ展開</td><td className="border border-gray-200 px-3 py-2">450×600〜1500</td><td className="border border-gray-200 px-3 py-2">915×600・600×465</td><td className="border border-gray-200 px-3 py-2">915×600・600×465</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">耐油性</td><td className="border border-gray-200 px-3 py-2">優れると案内</td><td className="border border-gray-200 px-3 py-2">要確認</td><td className="border border-gray-200 px-3 py-2">耐油性あり</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">耐水性</td><td className="border border-gray-200 px-3 py-2">優れると案内</td><td className="border border-gray-200 px-3 py-2">要確認</td><td className="border border-gray-200 px-3 py-2">要確認</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">静電気対策</td><td className="border border-gray-200 px-3 py-2">帯電防止タイプあり</td><td className="border border-gray-200 px-3 py-2">なし（一般向け）</td><td className="border border-gray-200 px-3 py-2">導電性（接地仕様）</td></tr>
              <tr><td className="border border-gray-200 px-3 py-2">向いている場所</td><td className="border border-gray-200 px-3 py-2">作業台前・検品・梱包・レジ</td><td className="border border-gray-200 px-3 py-2">工場・レジ・店舗カウンター</td><td className="border border-gray-200 px-3 py-2">電子部品・半導体・製薬・研究所</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 px-3 py-2">導線</td><td className="border border-gray-200 px-3 py-2">Yahoo!店</td><td className="border border-gray-200 px-3 py-2">自社EC</td><td className="border border-gray-200 px-3 py-2">自社EC</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2：設置場所別 ===== */}
        <h2 className={cls.h2}>
          設置場所別の選び方
        </h2>
        <h3 className={cls.h3}>工場・倉庫の作業台前</h3>
        <p className={cls.body}>クッション性重視のTRUSCO足腰マット17mm。作業台の幅に合わせて450×900・450×1200・450×1500を使い分けます。</p>
        <h3 className={cls.h3}>スーパー・コンビニ・店舗レジ下</h3>
        <p className={cls.body}>エラストマットSTD-II 600×465や、足腰マット450×600など、コンパクトでつまずきにくいサイズが向きます。</p>
        <h3 className={cls.h3}>電子部品・半導体・精密機器の作業場</h3>
        <p className={cls.body}>エラストマットESD-IIや帯電防止足腰マットなど、導電性・帯電防止仕様のタイプを検討します。作業台・靴・アース環境もあわせて確認します。</p>
        <h3 className={cls.h3}>厨房・油や水がある作業場</h3>
        <img src="/images/kitchen-oil-water-resistant-standing-mat.jpg" alt="厨房や水回りで耐油耐水マットを使うイメージ" className="my-6 w-full rounded-lg object-cover" />
        <p className={cls.body}>耐油性・耐水性のある足腰マットやエラストマットを検討します。清掃性・滑りにくさ・端部のつまずきに注意して選びましょう。</p>
        <h3 className={cls.h3}>受付・カウンター・スタンディングデスク</h3>
        <p className={cls.body}>足腰マット450×600やエラストマットSTD-II 600×465が向きます。見た目・サイズ・つまずきにくさも確認しましょう。</p>

        {/* ===== H2：関連 作業台 ===== */}
        <h2 className={cls.h2}>
          立ち作業の環境改善には作業台の高さも見直す
        </h2>
        <p className={cls.body}>
          足腰の負担は、足元のマットだけでなく作業台の高さや姿勢にも左右されます。前かがみや無理な姿勢が続く場合は、作業内容や身長に合った高さの作業台を選ぶことも、立ち作業の環境改善につながります。比較的軽い作業には軽量作業台、重量物を扱う作業には中量（中荷重）作業台が目安です。
        </p>
        <p className="mb-2 mt-4 font-semibold text-gray-900">軽量作業台（比較的軽い立ち作業向け）</p>
        <ProductGrid items={LIGHT_BENCH} />
        <ListCTA href={LIST_URLS.lightBench} utm={`${SLUG}_lightbenchlist`} heading="立ち作業向けの軽量作業台を確認する" text="天板サイズ・高さ・上棚やキャスターの有無を、作業内容に合わせて選びましょう。" label="軽量作業台一覧へ" />
        <p className="mb-2 mt-4 font-semibold text-gray-900">中量・中荷重作業台（重量物を扱う作業向け）</p>
        <ProductGrid items={MEDIUM_BENCH} />
        <ListCTA href={LIST_URLS.mediumBench} utm={`${SLUG}_mediumbenchlist`} heading="重量物作業向けの中量作業台を確認する" text="耐荷重（500〜1200kgなど）・天板サイズ・引出やバイスの有無で選びましょう。" label="中量作業台一覧へ" />

        {/* ===== H2：法人チェックリスト ===== */}
        <h2 className={cls.h2}>
          法人で導入する前に確認したいチェックリスト
        </h2>
        <img src="/images/standing-work-mat-purchasing-checklist.jpg" alt="法人担当者が立ち仕事用マットの導入チェックリストを確認するイメージ" className="my-6 w-full rounded-lg object-cover" />
        <ul className={cls.list}>
          <li>作業者は何時間程度立つか</li>
          <li>床はコンクリートか、塗床か、タイルか</li>
          <li>水や油があるか</li>
          <li>静電気対策が必要か</li>
          <li>作業者は横移動するか</li>
          <li>台車が通る場所か</li>
          <li>マットの厚みによる段差は問題ないか</li>
          <li>清掃しやすいか</li>
          <li>サイズは立ち位置に合っているか</li>
          <li>複数人分をまとめて導入するか</li>
          <li>靴やインソール、作業台高さもあわせて見直すか</li>
        </ul>

        {/* ===== H2：カテゴリ別に確認 ===== */}
        <h2 className={cls.h2}>
          立ち仕事用マットをカテゴリ別に確認する
        </h2>
        <div className="my-6 flex flex-wrap gap-3">
          <a href={buildUrl(LIST_URLS.matYahoo, `${SLUG}_cat_mat`)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">足腰マット一覧（Yahoo!店）→</a>
          <a href={buildUrl(LIST_URLS.elastoTS, `${SLUG}_cat_elasto`)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">エラストマット一覧（サインシティ）→</a>
          <a href={buildUrl(LIST_URLS.trusco, `${SLUG}_cat_trusco`)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">トラスコ中山一覧（Yahoo!）→</a>
        </div>

        {/* ===== H2：まとめ ===== */}
        <h2 className={cls.h2}>
          まとめ｜立ち仕事の疲労軽減マットは現場条件で選ぶ
        </h2>
        <p className={cls.body}>
          立ち仕事の疲労軽減マットは、現場条件で選ぶのが基本です。作業台前や検品台前にはクッション性の高いTRUSCO足腰マット、レジ下や店舗カウンターにはコンパクトなエラストマットSTD-II、静電気対策が必要なら帯電防止足腰マットやエラストマットESD-II、油や水がある場所では耐油性・耐水性を確認します。そして、マットだけでなく靴・インソール・作業台の高さ・休憩・姿勢もあわせて見直すことが、足腰の負担軽減につながります。
        </p>

        {/* 最終CTA */}
        <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h3 className={cls.ctaH3}>立ち仕事の足腰対策に使えるマットを確認する</h3>
          <div className="flex flex-wrap gap-3">
            <a href={buildUrl(LIST_URLS.matYahoo, `${SLUG}_final_mat`)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">足腰マット一覧へ →</a>
            <a href={buildUrl(LIST_URLS.elastoTS, `${SLUG}_final_elasto`)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">エラストマット一覧へ →</a>
            <a href={buildUrl(LIST_URLS.trusco, `${SLUG}_final_trusco`)} target="_blank" rel="nofollow noopener" className="inline-block rounded-md border border-gray-900 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">トラスコ中山一覧へ →</a>
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <h2 className={cls.h2}>よくある質問（FAQ）</h2>
        <div className="my-4 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-4">
              <p className={cls.faqQ}>Q{i + 1}. {f.q}</p>
              <p className={cls.bodySm}>{f.a}</p>
            </div>
          ))}
        </div>

        {/* ===== 関連記事（slugはgrepで実在確認してから残す） ===== */}
        <h2 className={cls.h2}>関連記事</h2>
        <ul className={cls.list}>
          <li><Link href="/articles/workwear-heat-protection-clothing" className="text-gray-900 underline hover:no-underline">現場の暑さ対策は服装から｜冷感インナー・空調服・冷却ベストの選び方</Link></li>
          <li><Link href="/articles/flexible-container-bag-selection" className="text-gray-900 underline hover:no-underline">フレコンバッグの選び方｜排出口あり・なし、耐候性、用途別の使い分け</Link></li>
        </ul>

        {/* 構造化データ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      </main>
      <SiteFooter />
    </>
  );
}
