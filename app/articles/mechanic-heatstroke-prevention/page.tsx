import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "mechanic-heatstroke-prevention";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/mechanic-heatstroke-prevention-hero.jpg`,
  innerwear: `${ARTICLE_IMG}/mechanic-cooling-innerwear-work-clothes.jpg`,
  fans: `${ARTICLE_IMG}/auto-repair-workshop-industrial-fan-cooling.jpg`,
  breakRoom: `${ARTICLE_IMG}/mechanic-break-room-hydration-supplies.jpg`,
  tools: `${ARTICLE_IMG}/vehicle-maintenance-tools-efficiency-summer.jpg`,
  checklist: `${ARTICLE_IMG}/auto-repair-shop-heatstroke-supply-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "整備士の熱中症対策｜自動車整備工場で暑さを防ぐ作業環境・服装・冷却用品・工具選び｜作業用品ナビ",
  description:
    "整備士の熱中症対策を、自動車整備工場ならではの暑さ・作業内容に合わせて解説。冷感インナー、冷却ベスト、工場扇、スポットクーラー、アイススラリー、応急セットに加え、夏場の作業時間短縮につながる車輌整備用工具・整備用工具セットの選び方も紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "整備士の熱中症対策｜自動車整備工場で暑さを防ぐ作業環境・服装・冷却用品・工具選び",
    description:
      "整備士の熱中症対策を、自動車整備工場ならではの暑さ・作業内容に合わせて解説。冷感インナー、冷却ベスト、工場扇、スポットクーラー、アイススラリー、応急セットに加え、夏場の作業時間短縮につながる車輌整備用工具・整備用工具セットの選び方も紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

const UTM = "utm_source=sagyou_navi";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string = UTM): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) => `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const SC_CAT = "shopping-pc-web-category-storeitm-rsltlst-img";

function YBQ(id: string, sc: string): string {
  return buildUrl(
    `https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`
  );
}

function GC(path: string): string {
  return buildUrl(`https://www.gc-select.com/products/${path}`);
}

function R(path: string): string {
  return buildUrl(`https://item.rakuten.co.jp/crecote-shop/${path}`);
}

const URLS = {
  inner1: YBQ("171706", SC_CAT),
  inner2: YBQ("171722", SC_CAT),
  inner3: YBQ("172122", SC_CAT),
  inner4: YBQ("171713", SC_CAT),
  inner5: YBQ("172052", SC_CAT),
  inner6: YBQ("172056", SC_CAT),
  inner7: YBQ("172130", SC_CAT),
  innerList: buildUrl(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E7%86%B1%E4%B8%AD%E7%97%87+%E3%82%A4%E3%83%B3%E3%83%8A%E3%83%BC&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srchbox"
  ),
  vest1: YBQ("171779", SC_CAT),
  vest2: YBQ("172464", SC_CAT),
  vest3: YBQ("203171", SC_CAT),
  vestList: buildUrl(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%86%B7%E5%8D%B4%E3%83%99%E3%82%B9%E3%83%88#CentSrchFilter1"
  ),
  fanStand1: YBQ("171964", SC_CAT),
  fanStand2: YBQ("172321", SC_CAT),
  fanStand3: YBQ("172314", SC_CAT),
  fanFloor1: YBQ("171600", SC_CAT),
  fanFloor2: YBQ("203284", SC_CAT),
  fanFloor3: YBQ("171595", SC_CAT),
  fanWall1: YBQ("171601", SC_CAT),
  fanWall2: YBQ("171594", SC_CAT),
  fanWall3: YBQ("172434", SC_CAT),
  spotCooler1: YBQ("172009", SC_CAT),
  spotCooler2: YBQ("172012", SC_CAT),
  spotCooler3: YBQ("172108", SC_CAT),
  fanList: buildUrl(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%B7%A5%E5%A0%B4%E6%89%87#CentSrchFilter1"
  ),
  ume1: GC("1179030600"),
  ume2: GC("1179030590"),
  ume3: GC("1179030598"),
  slurry1: GC("1179030743"),
  slurry2: GC("1179030742"),
  slurry3: GC("1179030914"),
  slurry4: GC("1179030913"),
  firstAid1: GC("1179070000"),
  firstAid2: GC("1179071000"),
  toolSocketBit: R("ta034841-be5049/"),
  toolTrimRemover: R("ta034792-bbs20p12/"),
  toolBrakePiston: R("ta004589-ab10/"),
  toolBootBand: R("ta037458-lb201/"),
  toolOneManBleeder: R("ta038384-om212/"),
  toolBearingInstra: R("ta034961-bp3085/"),
  toolTieRodLifter: R("ta037462-lb207/"),
  setTsa350sv: R("ta041904-tsa350sv/"),
  setTss4331bk: R("ta041933-tss4331bk/"),
  setTsa350bk: R("ta041903-tsa350bk/"),
  setTsa3120: R("ta041895-tsa3120/"),
  setTsa3331: R("ta041899-tsa3331/"),
  setTsx950bk: R("ta041951-tsx950bk/"),
  maintList: buildUrl(
    "https://search.rakuten.co.jp/search/mall/%E6%95%B4%E5%82%99%E7%94%A8/?sid=426972"
  ),
  truscoList: buildUrl(
    "https://item.rakuten.co.jp/crecote-shop/c/0000000043/?l-id=shoptop_shopmenu_categorypage_16"
  ),
};

type Prod = {
  id: string;
  imgId?: string;
  name: string;
  use: string;
  url: string;
  btn?: string;
};

const INNERWEAR_MAIN: Prod[] = [
  {
    id: "171706",
    name: "バートル 長袖エアーフィット 4070-68 ミルスグレー",
    use: "長袖作業着の下に。汗処理・蒸れ対策のインナー（メーカー公表値・要確認）",
    url: URLS.inner1,
  },
  {
    id: "171722",
    name: "バートル 半袖エアーフィット 4071-68 ミルスグレー",
    use: "半袖で通気性を優先したい整備作業向け（要確認）",
    url: URLS.inner2,
  },
  {
    id: "172122",
    name: "おたふく BTパワーストレッチEVO ロングスリーブ クルーネック JW-726",
    use: "ストレッチ性があり、車両下など動きやすさ重視の作業に（要確認）",
    url: URLS.inner3,
  },
];

const INNERWEAR_MORE: Prod[] = [
  {
    id: "171713",
    name: "バートル 半袖エアーフィット 4071-29 ホワイト",
    use: "半袖・白系。暑さ優先のインナーに（要確認）",
    url: URLS.inner4,
  },
  {
    id: "172052",
    name: "リベルタ L/S クルーネック ホワイト FTW",
    use: "長袖・白系。作業着の下に重ね着しやすい（要確認）",
    url: URLS.inner5,
  },
  {
    id: "172056",
    name: "リベルタ L/S クルーネック ブラック FTW",
    use: "長袖・黒系。油汚れが目立ちにくい色（要確認）",
    url: URLS.inner6,
  },
  {
    id: "172130",
    name: "おたふく BTパワーストレッチEVO ショートスリーブ クルーネック JW-728",
    use: "半袖・ストレッチ。夏場の軽作業・洗車準備に（要確認）",
    url: URLS.inner7,
  },
];

const COOLING_VESTS: Prod[] = [
  {
    id: "171779",
    name: "空調風神服 クールベスト The tough ブラック",
    use: "ピット作業・屋外車両移動など、長時間作業の冷却補助に（要確認）",
    url: URLS.vest1,
  },
  {
    id: "172464",
    name: "サンコー 冷蔵服3 ネイビー TKCV24FNV",
    use: "しっかり体を冷やしたい高温作業・出張整備向け（要確認）",
    url: URLS.vest2,
  },
  {
    id: "203171",
    name: "BURTLE 冷却ベスト アイスクラフト IC101S ブラック",
    use: "保冷剤タイプ。洗車・納車準備など屋外作業の補助に（要確認）",
    url: URLS.vest3,
  },
];

const FAN_STAND: Prod[] = [
  {
    id: "171964",
    name: "アクアシステム 無給油エアモーター式工場扇 スタンド大型 AFG-24NL",
    use: "リフト周辺など広いエリアの送風。作業位置に合わせて移動しやすい（要確認）",
    url: URLS.fanStand1,
  },
  {
    id: "172321",
    name: "スイデン 工場扇 スタンド型 樹脂ハネ45cm SF-45VS-1VP2",
    use: "標準的なスタンド型。作業エリアを変えやすい（要確認）",
    url: URLS.fanStand2,
  },
  {
    id: "172314",
    name: "スイデン 工場扇 スタンドタイプMS 樹脂ハネ45cm SF-45MS-1VP",
    use: "建設・工場・整備工場の作業場向けスタンド型（要確認）",
    url: URLS.fanStand3,
  },
];

const FAN_FLOOR: Prod[] = [
  {
    id: "171600",
    name: "TRUSCO ゼフィール トレー付キャスタータイプ TFZPA-45T",
    use: "ピット周辺・リフト付近に据え置き。風量確保しやすい（要確認）",
    url: URLS.fanFloor1,
  },
  {
    id: "203284",
    name: "TRUSCO 全閉式DCモーター工場扇 ジェネラルファン・ビッグ 105cm DF-105",
    use: "大型ハネで広範囲送風。ピット周辺のこもり熱対策に（要確認）",
    url: URLS.fanFloor2,
  },
  {
    id: "171595",
    name: "TRUSCO ゼフィール 卓上タイプ TFZPA-45A",
    use: "作業台・検査ライン付近のピンポイント送風に（要確認）",
    url: URLS.fanFloor3,
  },
];

const FAN_WALL: Prod[] = [
  {
    id: "171601",
    name: "TRUSCO ゼフィール 壁掛けタイプ TFZPA-45W",
    use: "通路や固定作業エリアの送風。床スペースを占有しない（要確認）",
    url: URLS.fanWall1,
  },
  {
    id: "171594",
    name: "TRUSCO ゼフィール 本体 単相100V TFZPA-45",
    use: "設置形態を選んで使う本体タイプ（要確認）",
    url: URLS.fanWall2,
  },
  {
    id: "172434",
    name: "TRUSCO ジェネラルファン 壁掛けタイプ アルミハネ ブラック TFBA-45W-BK",
    use: "壁面設置で通路を確保したい固定エリアに（要確認）",
    url: URLS.fanWall3,
  },
];

const SPOT_COOLERS: Prod[] = [
  {
    id: "172009",
    name: "ナカトミ 除湿機 DM-10",
    use: "検査ライン・作業台付近の局所冷却・除湿。排熱・電源を確認（要確認）",
    url: URLS.spotCooler1,
  },
  {
    id: "172012",
    name: "ナカトミ 除湿機 DM-22",
    use: "より広めの作業エリアの局所冷却・除湿に（要確認）",
    url: URLS.spotCooler2,
  },
  {
    id: "172108",
    name: "IRIS スポットクーラー 2.5kw ブラック",
    use: "作業者が滞在するピット・検査ラインの局所冷却に（要確認）",
    url: URLS.spotCooler3,
  },
];

const SLURRY: Prod[] = [
  {
    id: "1179030743",
    name: "アイススラリー（Ume）",
    use: "休憩時のプレクーリング補助。冷たい飲料とあわせて（要確認）",
    url: URLS.slurry1,
    btn: "GREEN CROSS-selectで見る",
  },
  {
    id: "1179030742",
    name: "アイススラリー（別タイプ）",
    use: "休憩所・事務所でのまとめ補給に（要確認）",
    url: URLS.slurry2,
    btn: "GREEN CROSS-selectで見る",
  },
  {
    id: "1179030914",
    name: "アイススラリー",
    use: "多人数の整備工場・スタッフ配布向け（要確認）",
    url: URLS.slurry3,
    btn: "GREEN CROSS-selectで見る",
  },
  {
    id: "1179030913",
    name: "アイススラリー（別タイプ）",
    use: "休憩時の体内冷却補助。摂取タイミングに配慮（要確認）",
    url: URLS.slurry4,
    btn: "GREEN CROSS-selectで見る",
  },
];

const UME: Prod[] = [
  {
    id: "1179030600",
    name: "カリカリ梅",
    use: "水分補給とあわせた塩分補給の補助に（要確認）",
    url: URLS.ume1,
    btn: "GREEN CROSS-selectで見る",
  },
  {
    id: "1179030590",
    name: "カリカリ梅（別タイプ）",
    use: "休憩所・個人配布用の塩分補給食品（要確認）",
    url: URLS.ume2,
    btn: "GREEN CROSS-selectで見る",
  },
  {
    id: "1179030598",
    name: "カリカリ梅（別タイプ）",
    use: "こまめな塩分補給に。水分補給とセットで（要確認）",
    url: URLS.ume3,
    btn: "GREEN CROSS-selectで見る",
  },
];

const FIRST_AID: Prod[] = [
  {
    id: "1179070000",
    name: "熱中症対策キット 6点セット",
    use: "事務所・救護スペースの万一の備え。報告体制とセットで（要確認）",
    url: URLS.firstAid1,
    btn: "GREEN CROSS-selectで見る",
  },
  {
    id: "1179071000",
    name: "熱中症応急セット 10点セット",
    use: "手厚い初動対応備品。連絡先・報告ルールを周知（要確認）",
    url: URLS.firstAid2,
    btn: "GREEN CROSS-selectで見る",
  },
];

const TOOL_SETS: Prod[] = [
  {
    id: "ta041904-tsa350sv",
    name: "TONE ツールセット 72点 シルバー TSA350SV",
    use: "よく使う工具がまとまり、探す時間・移動を減らしやすい（要確認）",
    url: URLS.setTsa350sv,
    btn: "楽天市場で見る",
  },
  {
    id: "ta041903-tsa350bk",
    name: "TONE ツールセット 72点 マットブラック TSA350BK",
    use: "新人整備士・工場備品・出張整備用の基本セット（要確認）",
    url: URLS.setTsa350bk,
    btn: "楽天市場で見る",
  },
  {
    id: "ta041951-tsx950bk",
    name: "TONE ツールセット 86点 マットブラック TSX950BK",
    use: "員数が多いフルセット。工具探しの時間短縮に（要確認）",
    url: URLS.setTsx950bk,
    btn: "楽天市場で見る",
  },
  {
    id: "ta041899-tsa3331",
    name: "TONE ツールセット オートメカニック用 TSA3331",
    use: "自動車整備向けに選ばれた工具構成（要確認）",
    url: URLS.setTsa3331,
    btn: "楽天市場で見る",
  },
  {
    id: "ta041895-tsa3120",
    name: "TONE ツールセット 43pcs レッド TSA3120",
    use: "コンパクトな整備用工具セット。持ち出し・個人備品に（要確認）",
    url: URLS.setTsa3120,
    btn: "楽天市場で見る",
  },
  {
    id: "ta041933-tss4331bk",
    name: "TONE ツールセット マットブラック TSS4331BK",
    use: "工具整理で探す時間を削減。夏場の作業効率化に（要確認）",
    url: URLS.setTss4331bk,
    btn: "楽天市場で見る",
  },
];

const SPECIALTY_TOOLS: Prod[] = [
  {
    id: "ta004589-ab10",
    name: "KTC ディスクブレーキピストンツール AB10",
    use: "ブレーキ整備のピストン戻し作業時間を短縮（要確認）",
    url: URLS.toolBrakePiston,
    btn: "楽天市場で見る",
  },
  {
    id: "ta034792-bbs20p12",
    name: "BAHCO トリムリムーバー BBS20P12",
    use: "内装クリップ外しの作業性向上。再作業を減らしやすい（要確認）",
    url: URLS.toolTrimRemover,
    btn: "楽天市場で見る",
  },
  {
    id: "ta034961-bp3085",
    name: "HASCO ベアリングインストラ BP3085",
    use: "足回りの圧入・引き抜き作業の負担軽減に（要確認）",
    url: URLS.toolBearingInstra,
    btn: "楽天市場で見る",
  },
  {
    id: "ta037462-lb207",
    name: "日平 タイロッドエンドリフター LB207",
    use: "足回り整備の固着・引き抜き作業向け（要確認）",
    url: URLS.toolTieRodLifter,
    btn: "楽天市場で見る",
  },
  {
    id: "ta037458-lb201",
    name: "日平 ブーツバンドツール LB201",
    use: "ブーツバンド装着の作業時間短縮に（要確認）",
    url: URLS.toolBootBand,
    btn: "楽天市場で見る",
  },
];

const EFFICIENCY_TOOLS: Prod[] = [
  {
    id: "ta038384-om212",
    name: "HASCO ワンマンブリーダー OM212",
    use: "1人作業でブレーキエア抜き。人手待ちを減らしやすい（要確認）",
    url: URLS.toolOneManBleeder,
    btn: "楽天市場で見る",
  },
  {
    id: "ta034841-be5049",
    name: "BAHCO 車輌整備用ソケットビット BE5049",
    use: "車輌整備用のソケットビット。基本整備の効率化に（要確認）",
    url: URLS.toolSocketBit,
    btn: "楽天市場で見る",
  },
];

const FAQ_ITEMS = [
  {
    q: "整備士に冷感インナーは必要ですか？",
    a: "必須ではありませんが、夏場の整備工場では作業着の下に汗がこもりやすいため、冷感インナーやストレッチ性のあるインナーは不快感対策として検討しやすいアイテムです。",
  },
  {
    q: "整備士に冷却ベストは使いやすいですか？",
    a: "ピット作業、洗車、屋外車両移動、出張整備などでは使いやすい場合があります。ただし、車両下作業や狭い場所では引っ掛かりや動きにくさがないか確認が必要です。",
  },
  {
    q: "整備工場には工場扇とスポットクーラーのどちらが向いていますか？",
    a: "工場全体の空気を動かしたい場合は工場扇、特定の作業場所を冷やしたい場合はスポットクーラーが向いています。リフト周辺・ピット・洗車場など、場所別に組み合わせるのが実務的です。",
  },
  {
    q: "整備士の熱中症対策で工具を見直す意味はありますか？",
    a: "あります。暑い環境では、工具を探す時間、無理な姿勢での作業時間、再作業が負担になります。車輌整備用工具や整備用工具セットを見直すことで、作業時間短縮や作業効率化につながります。ただし工具は熱中症対策用品ではないため、休憩・水分補給などの基本対策と併用してください。",
  },
  {
    q: "休憩所には何を置くべきですか？",
    a: "冷たい飲料、アイススラリー、塩分補給食品、冷却用品、応急セット、体調不良時の連絡先を準備します。水分・塩分補給をしやすい環境にすることが重要です。",
  },
  {
    q: "整備工場の熱中症対策は何から始めればよいですか？",
    a: "まずWBGTや工場内の暑さを確認し、休憩ルール、水分・塩分補給、工場扇・スポットクーラーの配置、冷感インナーや冷却ベストの支給、応急セットの準備を進めるのが現実的です。",
  },
];

const RELATED = [
  {
    href: "/articles/warehouse-heatstroke-taisaku",
    label:
      "倉庫作業の熱中症対策｜工場扇・スポットクーラー・冷却ベストで現場を守る方法",
  },
  {
    href: "/articles/worksite-rest-area-heat",
    label:
      "現場休憩所の暑さ対策｜屋外作業でそろえたい日よけ・工場扇・冷却用品",
  },
  {
    href: "/articles/insulated-tool-set-selection",
    label:
      "絶縁工具セットの選び方｜電気工事・制御盤作業・EV整備で必要な工具一覧",
  },
  {
    href: "/articles/outdoor-work-heatstroke-measures",
    label:
      "外仕事の熱中症対策｜現場・イベント・屋外倉庫で使える暑さ対策グッズと実務チェックリスト",
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
        href={href}
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
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full rounded-lg bg-gray-900 px-6 py-6 text-center text-lg font-bold text-white shadow-lg transition-colors hover:bg-gray-700"
      >
        {children}
      </a>
    </div>
  );
}

function Caution({
  title = "⚠️ ご確認ください",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-5 text-red-900">
      <p className="mb-1 font-semibold">{title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}

function ProductCard({ item }: { item: Prod }) {
  const imgId = item.imgId ?? item.id;
  return (
    <a
      href={item.url}
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
  return <img src={src} alt={alt} loading="lazy" className="my-6 w-full rounded-lg" />;
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return <td className="border border-gray-300 px-3 py-2 text-sm align-top">{children}</td>;
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
          <span className="text-gray-700">整備士の熱中症対策</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          整備士の熱中症対策｜自動車整備工場で暑さを防ぐ作業環境・服装・冷却用品・工具選び
        </h1>

        <p className="mb-6 text-sm text-gray-500">公開日：2026年7月10日／約18分で読めます</p>

        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-3 font-bold">この記事の要点（先に結論）</p>
          <p className={cls.body}>
            整備士の熱中症対策は、冷却グッズだけでなく「作業環境」「服装」「休憩・水分塩分補給」「作業効率を上げる工具」を組み合わせることが重要です。自動車整備工場では、エンジン熱、車両下のこもり熱、コンクリート床や金属屋根の輻射熱、長袖作業着による熱のこもり、洗車・車両移動時の屋外作業などが重なりやすくなります。
          </p>
          <p className={cls.body}>
            そのため、WBGT確認、こまめな休憩、水分・塩分補給、工場扇・スポットクーラーによる送風、冷感インナー・冷却ベストの着用、作業時間を短くしやすい整備用工具の見直しをセットで考えましょう。厚生労働省も、暑熱環境の評価では気温だけでなく、湿度・風速・輻射熱・身体作業強度・作業服の熱特性を考慮する必要があるとしています。
          </p>
        </div>

        <ArticleImg
          src={IMG.hero}
          alt="自動車整備工場で整備士の熱中症対策用品を確認するイメージ"
        />

        <CTA href={URLS.innerList}>
          整備士向けの熱中症対策インナー・冷却ベスト・工場扇などをまとめて確認する
        </CTA>

        <H2>整備士はなぜ熱中症リスクが高い？自動車整備工場ならではの暑さ</H2>
        <H3>エンジン熱・車両下・ピット作業で熱がこもりやすい</H3>
        <p className={cls.body}>
          エンジン停止後もボンネット内は熱く、車両下やピット周辺は風が通りにくいため、熱がこもりやすくなります。
        </p>
        <H3>シャッター開放・金属屋根・コンクリート床の影響</H3>
        <p className={cls.body}>
          シャッター開放で外気が入り、金属屋根やコンクリート床からの輻射熱も加わります。
        </p>
        <H3>長袖作業着・安全靴・手袋で熱が逃げにくい</H3>
        <p className={cls.body}>
          長袖作業着・安全靴・手袋は保護のために必要な一方、熱がこもりやすく、汗で衣服内が不快になりがちです。
        </p>
        <H3>洗車・納車準備・車両移動で屋外作業も発生する</H3>
        <p className={cls.body}>
          洗車・納車準備・車両移動などで屋外に出る機会もあり、直射日光を受けやすくなります。
        </p>
        <H3>忙しい時期ほど休憩が後回しになりやすい</H3>
        <p className={cls.body}>
          繁忙期は休憩や水分補給が後回しになりやすく、体調変化に気づきにくくなります。
        </p>

        <Caution title="⚠️ 熱中症対策の基本について">
          <p>
            冷却用品や送風設備は、熱中症対策を<strong>補助する用品</strong>
            であり、これだけで熱中症を防げるわけではありません。環境省・厚生労働省が示すように、暑熱環境は気温だけでなく湿度・風速・輻射熱・作業強度・作業服の熱特性で評価します。WBGT確認、こまめな休憩、水分・塩分補給、作業時間の管理、体調不良時の報告体制を必ず組み合わせてください。めまい・頭痛・吐き気などの症状があれば作業を中止し、必要に応じて医療機関の受診や救急要請（119番）を検討しましょう。
          </p>
        </Caution>

        <H2>整備士の熱中症対策は4つに分けて考える</H2>
        <H3>作業環境の対策</H3>
        <p className={cls.body}>
          工場扇・スポットクーラーによる送風・局所冷却、シャッターや通路の風の通り道づくりなど、環境そのものを整えます。
        </p>
        <H3>作業者本人の服装・冷却対策</H3>
        <p className={cls.body}>
          作業着の下に着る冷感インナー、屋外・長時間作業向けの冷却ベストなど、身につける対策を検討します。
        </p>
        <H3>休憩・水分塩分補給・応急対応</H3>
        <p className={cls.body}>
          休憩所に冷たい飲料・アイススラリー・塩分補給食品・応急セットを準備し、体調不良時の報告体制を整えます。
        </p>
        <H3>作業効率を上げる工具・備品の見直し</H3>
        <p className={cls.body}>
          暑い環境で工具を探す時間や無理な姿勢の時間、再作業を減らすため、整備用工具の見直しも対策の一つになります。
        </p>

        <H2>整備士向けの服装・着用アイテム</H2>
        <ArticleImg
          src={IMG.innerwear}
          alt="整備士向け冷感インナーと作業着を準備するイメージ"
        />
        <H3>作業着の下に着やすい冷感インナー</H3>
        <p className={cls.body}>
          汗をかきやすい夏の整備作業では、汗処理やストレッチ性のあるインナーを作業着の下に着ることで、衣服内の不快感対策として役立ちます。
        </p>
        <ProductGrid items={INNERWEAR_MAIN} />
        <H3>長袖・半袖インナーの使い分け</H3>
        <p className={cls.body}>
          日焼けや接触対策で長袖、暑さ優先で半袖など、作業内容や好みで使い分けます。
        </p>
        <ProductGrid items={INNERWEAR_MORE} />
        <CTA href={URLS.innerList}>熱中症対策インナー一覧を見る</CTA>
        <H3>冷却ベスト・空調系ベストが向く作業</H3>
        <p className={cls.body}>
          ピット作業・洗車・屋外車両移動・出張整備など、長時間や風が通りにくい場所では、冷却ベストを休憩・水分補給と併用して検討できます。
        </p>
        <ProductGrid items={COOLING_VESTS} />
        <H3>油汚れ・汗・動きやすさを考えた選び方</H3>
        <p className={cls.body}>
          整備作業では油汚れ・汗・狭所での動きやすさも重要です。車両下や狭い場所では引っ掛かりや動きにくさがないか確認します。
        </p>
        <CTA href={URLS.vestList}>冷却ベスト一覧を見る</CTA>

        <H2>整備工場の暑さ対策に使いやすい設備</H2>
        <ArticleImg
          src={IMG.fans}
          alt="整備工場で工場扇やスポットクーラーを使用するイメージ"
        />
        <H3>工場扇スタンドタイプは作業エリアを変えやすい</H3>
        <p className={cls.body}>
          スタンドタイプは移動しやすく、作業エリアに合わせて送風位置を変えられます。
        </p>
        <ProductGrid items={FAN_STAND} />
        <H3>据え置き・キャスタータイプはピット周辺に向く</H3>
        <p className={cls.body}>
          据え置き・キャスタータイプは風量が確保しやすく、ピット周辺やリフト付近に向きます。
        </p>
        <ProductGrid items={FAN_FLOOR} />
        <H3>壁掛け・天井付けタイプは通路や固定エリアに向く</H3>
        <p className={cls.body}>
          壁掛け・天井付けは床を占有せず、通路や固定作業エリアの送風に向きます。
        </p>
        <ProductGrid items={FAN_WALL} />
        <H3>スポットクーラーは局所的に冷やしたい場所に向く</H3>
        <p className={cls.body}>
          検査ライン・作業台付近など、局所的に冷やしたい場所にはスポットクーラーが向きます。排熱処理と電源を確認します。
        </p>
        <ProductGrid items={SPOT_COOLERS} />
        <H3>送風時は粉じん・排気・溶剤・安全性にも注意する</H3>
        <p className={cls.body}>
          送風は、粉じんの舞い上がり、排気ガス、塗装・洗浄溶剤の拡散、火気に注意して使用します。
        </p>
        <CTA href={URLS.fanList}>工場扇一覧を見る</CTA>

        <Caution title="⚠️ 送風・冷却設備の使用上の注意">
          <p>
            工場扇・スポットクーラーは<strong>送風・局所冷却の補助</strong>
            であり、これだけで熱中症を防げるわけではありません。送風時は、粉じん・排気ガス・塗装や洗浄の溶剤の拡散、火気に注意してください。スポットクーラーは排熱処理・電源容量・設置場所の確認が必要です。設備の導入とあわせて、WBGT確認・休憩・水分/塩分補給・作業時間管理を必ず行ってください。
          </p>
        </Caution>

        <H2>休憩所・事務所に準備したい熱中症対策備品</H2>
        <ArticleImg
          src={IMG.breakRoom}
          alt="休憩所に熱中症対策用品を準備するイメージ"
        />
        <H3>アイススラリー・冷たい飲料</H3>
        <p className={cls.body}>
          休憩時のプレクーリング補助として、アイススラリーや冷たい飲料を用意すると、こまめな補給がしやすくなります。
        </p>
        <ProductGrid items={SLURRY} />
        <H3>カリカリ梅などの塩分補給食品</H3>
        <p className={cls.body}>
          水分補給とあわせて、塩分補給食品も用意します。水分だけでなく塩分の補給も大切です。
        </p>
        <ProductGrid items={UME} />
        <H3>応急セットと報告体制</H3>
        <p className={cls.body}>
          万一の体調不良に備え、事務所や救護スペースに応急セットを準備し、連絡先・報告体制を共有します。
        </p>
        <ProductGrid items={FIRST_AID} />
        <H3>体調不良を言いやすいルールづくり</H3>
        <p className={cls.body}>
          体調不良を我慢させないため、早めに申告・報告できる雰囲気とルールづくりが重要です。休憩所の備品選びは
          <Link href="/articles/worksite-rest-area-heat" className="text-gray-900 underline hover:no-underline">
            現場休憩所の暑さ対策
          </Link>
          も参考にしてください。
        </p>

        <H2>暑い整備工場では「作業時間を短くする工具選び」も重要</H2>
        <ArticleImg
          src={IMG.tools}
          alt="作業効率化のための車輌整備用工具を確認するイメージ"
        />
        <p className={cls.body}>
          工具は熱中症を防ぐ用品ではありませんが、暑い環境で工具を探す時間・無理な姿勢での作業時間・再作業を減らすことは、作業者の負担軽減につながります。作業効率化の観点で、整備用工具の見直しも検討しましょう。電気系整備で感電リスクに配慮が必要な作業では、
          <Link href="/articles/insulated-tool-set-selection" className="text-gray-900 underline hover:no-underline">
            絶縁工具セットの選び方
          </Link>
          もあわせて確認してください。
        </p>
        <H3>工具を探す時間を減らす整備用工具セット</H3>
        <p className={cls.body}>
          よく使う工具がまとまったセットは、探す時間や移動を減らしやすくなります。新人整備士・工場備品・出張整備用にも向きます。
        </p>
        <ProductGrid items={TOOL_SETS} />
        <H3>ブレーキ・足回り・内装作業に使う専用工具</H3>
        <p className={cls.body}>
          ブレーキのピストン戻し、内装のクリップ外し、足回りの固着・圧入・引き抜きなど、専用工具で作業性を高められます。
        </p>
        <ProductGrid items={SPECIALTY_TOOLS} />
        <H3>1人作業・再作業を減らす車輌整備用品</H3>
        <p className={cls.body}>
          ワンマンブリーダーのように、人手や待ち時間を減らしやすい用品もあります。
        </p>
        <ProductGrid items={EFFICIENCY_TOOLS} />
        <H3>夏場の作業効率化に工具導線を入れる理由</H3>
        <p className={cls.body}>
          暑い時期は作業時間が長いほど負担が増えます。工具の見直しで作業時間を短くすることも、熱中症対策と並行して考えたいポイントです。
        </p>
        <CTA href={URLS.maintList}>車輌整備用工具一覧はこちら</CTA>
        <CTA href={URLS.maintList}>整備用工具一覧はこちら</CTA>

        <H2>作業内容別｜整備士の熱中症対策用品の選び方</H2>
        <H3>車検・点検作業</H3>
        <p className={cls.body}>
          比較的軽作業でも、冷感インナーや送風で衣服内の不快感を抑えます。
        </p>
        <H3>タイヤ交換・足回り作業</H3>
        <p className={cls.body}>
          作業強度が高く発汗も多いため、送風・冷却ベスト・こまめな休憩と水分/塩分補給を組み合わせます。
        </p>
        <H3>エンジンルーム作業</H3>
        <p className={cls.body}>
          エンジン停止後も熱いため、作業間隔・冷感インナー・作業時間の分散を意識します。
        </p>
        <H3>洗車・納車準備</H3>
        <p className={cls.body}>
          直射日光・水作業・屋外移動が伴うため、冷感インナー・冷却ベスト・塩分補給を検討します。
        </p>
        <H3>出張整備・屋外作業</H3>
        <p className={cls.body}>
          電源や休憩場所が限られるため、冷却ベスト・アイススラリー・応急セットを携行します。
        </p>

        <H2>整備工場の熱中症対策用品・工具比較表</H2>
        <H3>個人装備・工場設備・休憩所備品・整備用工具</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>商品カテゴリ</Th>
                <Th>向いている作業</Th>
                <Th>主な役割</Th>
                <Th>注意点</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>冷感インナー</Td>
                <Td>点検・車検・軽整備・洗車・納車準備</Td>
                <Td>作業着内の蒸れ・汗対策</Td>
                <Td>休憩や水分補給の代わりにはならない</Td>
              </tr>
              <tr>
                <Td>冷却ベスト</Td>
                <Td>ピット作業・屋外作業・長時間作業</Td>
                <Td>身体の冷却補助</Td>
                <Td>動きやすさ・バッテリー・着用感を確認</Td>
              </tr>
              <tr>
                <Td>工場扇</Td>
                <Td>リフト周辺・工場全体・通路</Td>
                <Td>空気を動かし暑さのこもりを抑える</Td>
                <Td>粉じん・排気・安全性に注意</Td>
              </tr>
              <tr>
                <Td>スポットクーラー</Td>
                <Td>ピット・検査ライン・作業台付近</Td>
                <Td>局所的な冷却</Td>
                <Td>排熱処理・電源確認が必要</Td>
              </tr>
              <tr>
                <Td>アイススラリー</Td>
                <Td>休憩所・事務所・スタッフ配布</Td>
                <Td>休憩時のプレクーリング補助</Td>
                <Td>体調・摂取タイミングに配慮</Td>
              </tr>
              <tr>
                <Td>カリカリ梅</Td>
                <Td>休憩所・個人配布</Td>
                <Td>塩分補給の補助</Td>
                <Td>水分補給とセットで使う</Td>
              </tr>
              <tr>
                <Td>熱中症応急セット</Td>
                <Td>事務所・救護スペース</Td>
                <Td>万一の備え</Td>
                <Td>報告体制・救急対応とセットで準備</Td>
              </tr>
              <tr>
                <Td>整備用工具</Td>
                <Td>各整備作業</Td>
                <Td>作業時間短縮・作業効率化（暑さ対策の補助）</Td>
                <Td>熱中症対策用品ではない</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>整備工場の場所別・暑さ対策</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>場所</Th>
                <Th>起こりやすい課題</Th>
                <Th>対策</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>リフト周辺</Td>
                <Td>車両下に熱がこもる・風が通りにくい</Td>
                <Td>工場扇、スポットクーラー、冷却ベスト</Td>
              </tr>
              <tr>
                <Td>エンジンルーム作業</Td>
                <Td>エンジン停止後も熱い</Td>
                <Td>休憩間隔、冷感インナー、作業時間分散</Td>
              </tr>
              <tr>
                <Td>洗車場</Td>
                <Td>直射日光・水作業・屋外移動</Td>
                <Td>冷感インナー、冷却ベスト、塩分補給</Td>
              </tr>
              <tr>
                <Td>受付・事務所裏</Td>
                <Td>休憩が不十分になりやすい</Td>
                <Td>冷たい飲料、アイススラリー、応急セット</Td>
              </tr>
              <tr>
                <Td>工具置き場</Td>
                <Td>工具を探す時間が増える</Td>
                <Td>工具セット、専用工具の整理</Td>
              </tr>
              <tr>
                <Td>出張整備</Td>
                <Td>屋外・電源なし・休憩場所不足</Td>
                <Td>冷却ベスト、アイススラリー、応急セット</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>整備作業別に見直したい工具</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>作業</Th>
                <Th>起こりやすい負担</Th>
                <Th>使いやすい工具導線</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ブレーキ整備</Td>
                <Td>ピストン戻し・分解作業に時間がかかる</Td>
                <Td>ディスクブレーキピストンツール</Td>
              </tr>
              <tr>
                <Td>内装作業</Td>
                <Td>クリップ外しで時間がかかる</Td>
                <Td>トリムリムーバー</Td>
              </tr>
              <tr>
                <Td>足回り整備</Td>
                <Td>固着・圧入・引き抜き作業が重い</Td>
                <Td>プーラー、ベアリングインストラ</Td>
              </tr>
              <tr>
                <Td>基本整備</Td>
                <Td>工具を探す時間が発生</Td>
                <Td>整備用工具セット</Td>
              </tr>
              <tr>
                <Td>1人作業</Td>
                <Td>人手待ちが発生</Td>
                <Td>ワンマンブリーダー</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>整備士の熱中症対策でよくある失敗</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>失敗</Th>
                <Th>対策</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>工場扇だけで十分だと思ってしまう</Td>
                <Td>WBGT・休憩・水分塩分・服装・応急体制とセットで考える</Td>
              </tr>
              <tr>
                <Td>冷却ベストを作業内容に合わせず選ぶ</Td>
                <Td>車両下・洗車・検査など作業別に動きやすさを確認</Td>
              </tr>
              <tr>
                <Td>水分補給はしていても塩分補給が不足する</Td>
                <Td>塩分補給食品もあわせて準備</Td>
              </tr>
              <tr>
                <Td>工具不足で暑い中の作業時間が伸びる</Td>
                <Td>工具セット・専用工具で作業時間を短縮</Td>
              </tr>
              <tr>
                <Td>体調不良を報告しづらい雰囲気がある</Td>
                <Td>早めに申告・報告できるルールづくり</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <Caution title="⚠️ 暑さに慣れていない人への配慮">
          <p>
            新人整備士・高齢のスタッフ・暑さに慣れていない人は、特に注意が必要です。厚生労働省の資料でも、暑さに体を慣らす「暑熱順化」には一定期間が必要とされています。作業開始初期は作業時間や強度を無理なく調整し、体調変化に気づいたら早めに休憩・報告できる体制を整えてください。冷却用品や工具はあくまで補助であり、休憩・水分/塩分補給・WBGT確認と併用することが前提です。
          </p>
        </Caution>

        <H2>整備工場向けチェックリスト</H2>
        <H3>工場長・管理者向けチェックリスト</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>チェック項目</Th>
                <Th>確認内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>暑さの把握</Td>
                <Td>WBGT計の設置・携帯、リフト周辺/洗車場/屋外の暑さ把握</Td>
              </tr>
              <tr>
                <Td>設備配置</Td>
                <Td>工場扇・スポットクーラーの配置見直し</Td>
              </tr>
              <tr>
                <Td>休憩・補給</Td>
                <Td>休憩ルール、冷たい飲料・アイススラリー・塩分補給食品</Td>
              </tr>
              <tr>
                <Td>応急・報告</Td>
                <Td>応急セットの設置場所共有、体調不良時の報告ルール</Td>
              </tr>
              <tr>
                <Td>人への配慮</Td>
                <Td>新人・高齢・暑さに慣れていない人の把握</Td>
              </tr>
              <tr>
                <Td>工具</Td>
                <Td>不足しがちな整備用工具の補充、工具整理で探す時間を削減</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>整備士本人向けチェックリスト</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>チェック項目</Th>
                <Th>確認内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>体調</Td>
                <Td>作業前の体調確認、悪いときは早めに報告</Td>
              </tr>
              <tr>
                <Td>服装</Td>
                <Td>作業着の下に汗処理しやすいインナー、作業別に冷却ベスト</Td>
              </tr>
              <tr>
                <Td>補給</Td>
                <Td>休憩前後で水分・塩分補給</Td>
              </tr>
              <tr>
                <Td>作業</Td>
                <Td>車両下・エンジンルーム作業を連続させすぎない、専用工具を活用</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>法人購買向け備品リスト</H3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>区分</Th>
                <Th>備品</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>個人装備</Td>
                <Td>冷感インナー、冷却ベスト</Td>
              </tr>
              <tr>
                <Td>工場設備</Td>
                <Td>工場扇、スポットクーラー</Td>
              </tr>
              <tr>
                <Td>休憩所備品</Td>
                <Td>アイススラリー、カリカリ梅、熱中症応急セット</Td>
              </tr>
              <tr>
                <Td>整備用工具</Td>
                <Td>車輌整備用工具、整備用工具セット、トラスコ中山商品一覧</Td>
              </tr>
            </tbody>
          </table>
        </div>

        <H2>よくある質問</H2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        <ArticleImg
          src={IMG.checklist}
          alt="管理者が熱中症対策用品と工具の備品リストを確認するイメージ"
        />

        <H2>まとめ｜整備士の熱中症対策は「冷却用品・工場環境・工具改善」をセットで考える</H2>
        <p className={cls.body}>
          整備士の熱中症対策は、作業環境（工場扇・スポットクーラー）、服装（冷感インナー・冷却ベスト）、休憩・水分塩分補給・応急対応、そして暑い時期の作業時間を短くする工具の見直しをセットで考えることが重要です。冷却用品や送風設備、工具はあくまで補助であり、これだけで熱中症を防げるわけではありません。WBGT確認・こまめな休憩・水分/塩分補給・作業時間管理・体調不良時の報告体制と必ず併用しましょう。工場長・整備士・購買担当が同じ備品リストで共有できるよう整えると、夏場の作業効率と安全管理の両立につながります。
        </p>

        <H2>関連記事</H2>
        <ul className="my-4 list-disc space-y-2 pl-6">
          {RELATED.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="text-gray-900 underline hover:no-underline">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>

        <FinalCTA href={URLS.innerList}>
          熱中症対策インナー・冷却ベスト・工場扇をまとめて確認する
        </FinalCTA>
        <FinalCTA href={URLS.maintList}>
          車輌整備用工具・整備用工具セットを確認する
        </FinalCTA>
        <FinalCTA href={URLS.truscoList}>
          トラスコ中山商品一覧を見る
        </FinalCTA>
      </main>
      <SiteFooter />
    </>
  );
}
