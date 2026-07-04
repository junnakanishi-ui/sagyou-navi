import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "large-bag-for-construction-waste";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles/large-bag-for-construction-waste";

export const metadata: Metadata = {
  title:
    "廃材を入れる大きい袋の選び方｜ガラ袋・トン袋・大型土のう・フレコンバッグの使い分け｜作業用品ナビ",
  description:
    "廃材や土砂を入れる大きい袋の名前は、現場ではフレコンバッグ・トン袋・大型土のう袋などと呼ばれます。ガラ袋との違い、排出口あり・なし、耐候性タイプ、ハンドパレット・台車・作業台との組み合わせまで、現場別にわかりやすく解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "廃材を入れる大きい袋の選び方｜ガラ袋・トン袋・大型土のう・フレコンバッグの使い分け",
    description:
      "廃材や土砂を入れる大きい袋の名前は、現場ではフレコンバッグ・トン袋・大型土のう袋などと呼ばれます。ガラ袋との違い、排出口あり・なし、耐候性タイプ、ハンドパレット・台車・作業台との組み合わせまで、現場別にわかりやすく解説します。",
    type: "article",
    images: [`${ARTICLE_IMG}/hero.jpg`],
  },
};

const UTM = "utm_source=sagyou_navi";
const productImage = (id: string) => `/products/${id}.jpg`;

function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const u = (url: string) => buildUrl(url, UTM);

const URL_HANDPALLET_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%8F%E3%83%B3%E3%83%89%E3%83%91%E3%83%AC%E3%83%83%E3%83%88&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox";
const URL_CART_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc";
const URL_LIGHT_BENCH_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%BB%BD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0#CentSrchFilter1";
const URL_HEAVY_BENCH_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E4%B8%AD%E9%87%8F%E4%BD%9C%E6%A5%AD%E5%8F%B0&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srchbox";
const URL_NB_SHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/b0c2c1b4b7.html?b=91&view=grid";
const URL_SHOES_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E5%AE%89%E5%85%A8%E9%9D%B4&b=151&view=grid";
const URL_TRUSCO_LIST =
  "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems";

type Item = {
  id: string;
  name: string;
  col1: string;
  col2: string;
  col3: string;
  url: string;
};

const FRECON: Item[] = [
  {
    id: "223182",
    name: "TRUSCO フレコンバッグ 排出口無し 10枚入り 1100φ×1100H TFG-002",
    col1: "通常タイプ／排出口なし",
    col2: "1100φ×1100H",
    col3: "廃材・土砂・ガラの一時保管。入れたものをそのまま回収・運搬",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/223182.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
  {
    id: "223183",
    name: "TRUSCO フレコンバッグ 排出口有り 10枚入り 1100φ×1100H TFG-005",
    col1: "通常タイプ／排出口あり",
    col2: "1100φ×1100H",
    col3: "中身を下から排出したい作業に。土砂・粉粒体など",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/223183.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
  {
    id: "225638",
    name: "TRUSCO 耐候性フレコンバッグ 排出口無し 1100φ×1050H TWFG-002A",
    col1: "耐候性タイプ／排出口なし",
    col2: "1100φ×1050H",
    col3: "屋外仮置き・大型土のう用途。土砂せき止めなど",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/225638.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
  {
    id: "225639",
    name: "TRUSCO 耐候性フレコンバッグ 排出口有り 1100φ×1050H TWFG-005A",
    col1: "耐候性タイプ／排出口あり",
    col2: "1100φ×1050H",
    col3: "屋外仮置き＋排出作業がある現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/225639.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
  },
];

const HANDPALLETS: Item[] = [
  {
    id: "168791",
    name: "TRUSCO ハンドパレットトラック 1.5t用 L1050×W550mm 軽量型 THPT15-105-55S",
    col1: "1.5t",
    col2: "L1050×W550mm",
    col3: "標準的なパレットに合わせやすい軽量型",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168791.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
  {
    id: "168790",
    name: "TRUSCO ハンドパレットトラック 1.5t用 L850×W520mm 軽量 THPT15-85-52S",
    col1: "1.5t",
    col2: "L850×W520mm",
    col3: "取り回し重視の軽量タイプ",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168790.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
  {
    id: "168809",
    name: "TRUSCO ハンドパレットトラック PK付 2t L1150×W540mm THP-20-511-PK",
    col1: "2t",
    col2: "L1150×W540mm",
    col3: "パーキングブレーキ付で停止保持しやすい",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168809.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
  {
    id: "168827",
    name: "TRUSCO 電動ハンドパレットトラック E-TRA 1.2t用 L1070×W540 ET12-510SP",
    col1: "1.2t（電動）",
    col2: "L1070×W540mm",
    col3: "運搬距離・頻度が多い現場の負担軽減に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/168827.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
];

const CARTS: Item[] = [
  {
    id: "167468",
    name: "カルティオ 新型 ブラック MPK-780-BK",
    col1: "通常台車",
    col2: "小口・軽量物の水平運搬",
    col3: "標準的な運搬。軽量・静音",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/167468.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "190475",
    name: "カルティオ 新型 ブラック スチールストッパー付 MPK780BKSS",
    col1: "通常台車（ストッパー付）",
    col2: "積み下ろし時に停止保持",
    col3: "停車作業が多い現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/190475.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "216713",
    name: "カルティオビッグ 折畳 900×600 ストッパー付 オリーブ MPK-906-OG-S",
    col1: "大型台車（折りたたみ・ストッパー付）",
    col2: "大型荷物の運搬・保管性重視",
    col3: "大きな荷物を運び、保管時は省スペースに",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/216713.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "159750",
    name: "カルティオビッグ 固定ハンドルタイプ ブルー MPK-900-B",
    col1: "大型台車（固定ハンドル）",
    col2: "定位置で常時使用",
    col3: "工場・倉庫の定位置運用に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/159750.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
];

const LIGHT_BENCH: Item[] = [
  {
    id: "161973",
    name: "軽量作業台 TFAE型 1200×600×740mm TFAEL-1260",
    col1: "軽量",
    col2: "1200×600×740mm",
    col3: "省スペースな分別・仕分け作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161973.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "160785",
    name: "軽量作業台 基本タイプ ダークグレー 1200×750×740mm BE-1275",
    col1: "軽量",
    col2: "1200×750×740mm",
    col3: "標準的な軽作業スペースに",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160785.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "161354",
    name: "軽量立ち作業台 上棚付 ホワイト 900×600×1204mm HAE-0960YURB W",
    col1: "軽量（上棚付・立ち作業）",
    col2: "900×600×1204mm",
    col3: "立ち作業＋上棚で工具を整理したい場合に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161354.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "160909",
    name: "軽量作業台 基本タイプ ヤンググリーン 1200×750×740mm AE-1200 YG",
    col1: "軽量",
    col2: "1200×750×740mm",
    col3: "標準的な軽作業スペースに",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160909.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "160767",
    name: "軽量作業台 キャスター付 1200×750×806mm BO-1275C75",
    col1: "軽量（キャスター付）",
    col2: "1200×750×806mm",
    col3: "レイアウト変更が多い現場に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/160767.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "173187",
    name: "軽荷重作業台（300kg）AE型 900×450×H740 基本タイプ ホワイト AE-0945 W",
    col1: "軽荷重（300kg）",
    col2: "900×450×H740",
    col3: "小型・省スペースな軽作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/173187.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
];

const HEAVY_BENCH: Item[] = [
  {
    id: "161631",
    name: "中量作業台 基本タイプ ヤンググリーン 1200×750×740mm GWP-1275 YG",
    col1: "中量",
    col2: "1200×750×740mm",
    col3: "やや重い資材の仕分け・作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161631.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "220888",
    name: "中荷重作業台（800kg）GW型 900×450×H740 基本タイプ グリーン GWR-0945",
    col1: "中荷重（800kg）",
    col2: "900×450×H740",
    col3: "重量物を扱う小型作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/220888.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "221217",
    name: "中荷重作業台（1200kg）HW型 1200×900×H740 基本タイプ グリーン HW-1209",
    col1: "中荷重（1200kg）",
    col2: "1200×900×H740",
    col3: "重量物を広い天板で扱いたい場合に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/221217.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
  },
  {
    id: "161679",
    name: "中量作業台 回転台付アンビルバイス付 グリーン 1800×750×740mm HW-1800VRS",
    col1: "中量（バイス付）",
    col2: "1800×750×740mm",
    col3: "固定して加工・分解する作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/161679.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
  {
    id: "173342",
    name: "中荷重作業台（500kg）AEW型 1500×900×H740 基本タイプ ダークグレー AEWP-1590",
    col1: "中荷重（500kg）",
    col2: "1500×900×H740",
    col3: "広い天板で重量物を扱う作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/173342.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
  {
    id: "219000",
    name: "中荷重作業台（500kg）CFW型 1800×750×H740 薄型2段引出付 ダークグレー CFWS-1875UDK2",
    col1: "中荷重（500kg・引出付）",
    col2: "1800×750×H740",
    col3: "工具収納も兼ねたい作業に",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/219000.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title&ea=",
  },
];

const NB_SHOES: Item[] = [
  {
    id: "155406",
    name: "ニューバランス 安全靴（タイプA）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155406.html",
  },
  {
    id: "155335",
    name: "ニューバランス 安全靴（タイプB）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155335.html",
  },
  {
    id: "155361",
    name: "ニューバランス 安全靴（タイプC）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155361.html",
  },
  {
    id: "155329",
    name: "ニューバランス 安全靴（タイプD）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155329.html",
  },
  {
    id: "155391",
    name: "ニューバランス 安全靴（タイプE）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155391.html",
  },
  {
    id: "155376",
    name: "ニューバランス 安全靴（タイプF）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155376.html",
  },
  {
    id: "155420",
    name: "ニューバランス 安全靴（タイプG）",
    col1: "安全靴",
    col2: "台車・運搬作業の足元保護",
    col3: "サイズ・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/155420.html",
  },
];

const TRUSCO_SHOES: Item[] = [
  {
    id: "235217",
    name: "トラスコ中山 安全靴（コスパタイプA）※商品名確認",
    col1: "安全靴",
    col2: "コスト重視の足元保護",
    col3: "商品名・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/235217.html",
  },
  {
    id: "235355",
    name: "トラスコ中山 安全靴（コスパタイプB）※商品名確認",
    col1: "安全靴",
    col2: "コスト重視の足元保護",
    col3: "商品名・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/235355.html",
  },
  {
    id: "234829",
    name: "トラスコ中山 安全靴（コスパタイプC）※商品名確認",
    col1: "安全靴",
    col2: "コスト重視の足元保護",
    col3: "商品名・規格は商品ページで確認",
    url: "https://store.shopping.yahoo.co.jp/signcity-yshop/234829.html",
  },
];

const NAME_TABLE = [
  {
    name: "フレコンバッグ",
    meaning: "フレキシブルコンテナバッグの略称",
    site: "工場・倉庫・建設・土木・農業",
    content: "ガラ・木くず・廃プラ・土砂など幅広い内容物",
  },
  {
    name: "トン袋・1トン袋",
    meaning: "1t前後の内容物を入れる袋の通称",
    site: "建設・解体・土木",
    content: "大量の廃材・土砂",
  },
  {
    name: "大型土のう袋",
    meaning: "土砂せき止め・仮設土のう用途",
    site: "河川・崖・土木・災害対策",
    content: "土砂・砂利など",
  },
  {
    name: "ガラ袋",
    meaning: "廃材やガラを入れる袋の総称（小型を指す場合も）",
    site: "解体・リフォーム・建築",
    content: "少量の廃材・ゴミ",
  },
];

const SITE_TABLE = [
  {
    site: "建設・解体",
    content: "ガラ、木くず、廃材",
    type: "排出口無し・耐候性タイプ",
    related: "安全靴、台車",
  },
  {
    site: "土木・外構",
    content: "土砂、砂利、砕石",
    type: "耐候性フレコン、大型土のう",
    related: "ハンドパレット、安全靴",
  },
  {
    site: "工場・倉庫",
    content: "端材、原料くず、廃プラ",
    type: "通常フレコン",
    related: "台車、作業台",
  },
  {
    site: "看板製作・資材加工",
    content: "板材端材、梱包材",
    type: "排出口無し",
    related: "軽量作業台、運搬台車",
  },
  {
    site: "農業・造園",
    content: "土、落ち葉、剪定くず",
    type: "用途に応じて選定",
    related: "台車、安全靴",
  },
];

const FAIL_TABLE = [
  {
    fail: "袋の名前がわからず小さいガラ袋だけを買う",
    problem: "廃材量に対して容量が足りない",
    fix: "フレコンバッグ・トン袋も候補にする",
  },
  {
    fail: "屋外保管なのに通常タイプを選ぶ",
    problem: "紫外線や雨風で劣化しやすい",
    fix: "耐候性タイプを検討する",
  },
  {
    fail: "排出口の有無を確認しない",
    problem: "中身を出す作業で手間が増える",
    fix: "排出方法を事前に確認する",
  },
  {
    fail: "鋭利な廃材をそのまま入れる",
    problem: "袋の破れにつながる",
    fix: "中身の形状や投入方法を確認する",
  },
  {
    fail: "吊り上げ・移動方法を考えない",
    problem: "運搬時に困る",
    fix: "ハンドパレット・台車・フォークリフト導線を確認",
  },
  {
    fail: "廃棄物の管理ルールを確認しない",
    problem: "保管・処理でトラブルになる",
    fix: "産廃区分・保管場所・委託先を確認",
  },
  {
    fail: "安全靴を見落とす",
    problem: "足元リスクへの備えが不足する",
    fix: "現場ルールに合わせて安全靴を確認",
  },
];

const CHECKLIST = [
  { item: "入れるもの", detail: "土砂、ガラ、木くず、廃プラ、端材など" },
  { item: "容量", detail: "小型ガラ袋で足りるか、フレコンが必要か" },
  { item: "重量", detail: "耐荷重に余裕があるか" },
  { item: "排出口", detail: "下から排出する必要があるか" },
  { item: "保管場所", detail: "屋内か屋外か" },
  { item: "耐候性", detail: "屋外仮置きなら耐候性タイプが必要か" },
  { item: "運搬方法", detail: "手運び、台車、ハンドパレット、フォークリフトのどれか" },
  { item: "作業場所", detail: "分別・仕分け用の作業台が必要か" },
  { item: "足元対策", detail: "安全靴が必要な作業か" },
  { item: "廃棄物管理", detail: "産廃区分・保管ルール・処理委託先を確認したか" },
];

const FAQ_ITEMS = [
  {
    q: "廃材を入れる大きい袋の名前は何ですか？",
    a: "現場では、フレコンバッグ、トン袋、1トン袋、大型土のう袋、ガラ袋などと呼ばれることがあります。大量の廃材・土砂・ガラをまとめて保管・運搬したい場合は、フレコンバッグが候補になります。",
  },
  {
    q: "ガラ袋とフレコンバッグは何が違いますか？",
    a: "一般的なガラ袋は比較的小型で、少量の廃材やゴミの回収に使われます。フレコンバッグは大型で、土砂や廃材をまとめて保管・運搬したい場合に使われます。フレコンバッグは大型土のう袋の一種として説明されることもあります。",
  },
  {
    q: "土砂を入れるならどのタイプがよいですか？",
    a: "土砂を入れる場合は、大型土のう用途に使えるフレコンバッグや耐候性タイプが候補になります。屋外で仮置きする場合は、紫外線や雨風による劣化も考慮し、耐候性タイプを検討してください。",
  },
  {
    q: "排出口ありと排出口なしはどちらを選べばよいですか？",
    a: "中身をそのまま回収・運搬するなら排出口なし、下から中身を出す作業があるなら排出口ありが候補になります。ただし、廃材やガラは形状が不揃いなため、排出口から出しやすい内容物かどうかを確認してください。詳しくはフレコンバッグの選び方の記事もご確認ください。",
  },
  {
    q: "フレコンバッグは屋外に置いても大丈夫ですか？",
    a: "屋外で使う場合は耐候性タイプを検討できます。ただし、耐候性タイプでも劣化しないわけではありません。使用前や保管中は、生地の破れ、擦り切れ、縫製のほつれ、吊りベルトの状態などを確認してください。",
  },
  {
    q: "フレコンバッグと一緒にそろえたい用品はありますか？",
    a: "現場によって、ハンドパレット、運搬台車、作業台、安全靴をあわせて確認すると便利です。パレット移動が多いならハンドパレット、小口荷物の移動なら運搬台車、廃材の仕分けには作業台、足元対策には安全靴が候補になります。",
  },
];

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

function ProductCard({ item }: { item: Item }) {
  return (
    <a
      href={u(item.url)}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition hover:shadow-md"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImage(item.id)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-sm font-medium leading-snug text-gray-900">
          {item.name}
        </p>
        <p className="mt-1 text-xs text-gray-600">
          {item.col1}／{item.col2}
        </p>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-gray-600">
          {item.col3}
        </p>
        <span className="mt-2 inline-block rounded bg-gray-900 px-3 py-1 text-center text-sm font-semibold text-white">
          商品ページを見る
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items }: { items: Item[] }) {
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
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
          <span className="text-gray-700">廃材を入れる大きい袋の選び方</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          廃材を入れる大きい袋の選び方｜ガラ袋・トン袋・大型土のう・フレコンバッグの使い分け
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月4日／約14分で読めます
        </p>

        <div className="my-8 rounded-lg border border-gray-300 bg-gray-100 p-5 leading-relaxed">
          <p className="mb-2 font-bold">廃材を入れる大きい袋の選び方（要点）</p>
          <p className={cls.body.replace("mb-4 ", "")}>
            廃材や土砂を入れる大きい袋は、一般的に「フレコンバッグ」「トン袋」「1トン袋」「大型土のう袋」などと呼ばれます。建設現場や解体現場では、ガラ・木くず・廃プラスチック・土砂などをまとめて回収、運搬、保管する用途で使われます。少量の廃材なら一般的なガラ袋、大量の廃材や土砂をまとめて扱うならフレコンバッグや大型土のう袋が候補になります。選ぶときは、中に入れるもの、屋内外の保管場所、排出口の有無、耐候性、運搬方法、作業台や台車との組み合わせまで確認することが重要です。
          </p>
        </div>

        <ArticleImg
          src={`${ARTICLE_IMG}/hero.jpg`}
          alt="建設現場で廃材を入れる大きい袋を準備するイメージ"
        />

        <CTA href={u(FRECON[0].url)}>
          廃材・土砂の一時保管に使えるTRUSCOフレコンバッグを確認する
        </CTA>

        <H2>
          廃材を入れる大きい袋の名前は？フレコンバッグ・トン袋・大型土のう袋の違い
        </H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/name-comparison.jpg`}
          alt="フレコンバッグ・トン袋・大型土のう袋の呼び名を比較するイメージ"
        />

        <H3>現場で見る大きな袋は「フレコンバッグ」と呼ばれることが多い</H3>
        <p className={cls.body}>
          現場でよく見る大きな袋は、正式には「フレキシブルコンテナバッグ」といい、略して「フレコンバッグ」と呼ばれます。工場・倉庫・建設・土木・農業など幅広い現場で、内容物をまとめて入れる袋として使われています。商品を探すときは、この「フレコンバッグ」という名称で検索すると見つけやすくなります。
        </p>

        <H3>「トン袋」「1トン袋」は現場で使われる呼び名</H3>
        <p className={cls.body}>
          フレコンバッグは、1t前後の内容物を入れられることから、現場では「トン袋」「1トン袋」と呼ばれることもあります。建設・解体・土木の現場で耳にする呼び名で、指しているものはフレコンバッグとほぼ同じです。
        </p>

        <H3>土砂を入れる用途では「大型土のう袋」と呼ばれることもある</H3>
        <p className={cls.body}>
          土砂を入れて仮設の土のうとして使う用途では、「大型土のう袋」と呼ばれることがあります。河川や崖の仮設、土砂せき止めなどでは、耐候性を備えた大型土のう用途のフレコンバッグが使われます。
        </p>

        <H3>少量の廃材なら一般的なガラ袋、大量ならフレコンバッグが候補</H3>
        <p className={cls.body}>
          「ガラ袋」は廃材やガラを入れる袋の総称で、比較的小型のものを指す場合もあります。少量の廃材なら一般的なガラ袋で足りますが、大量の廃材や土砂をまとめて扱うならフレコンバッグが候補になります。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">呼び名</th>
                <th className="border px-3 py-2">主な意味</th>
                <th className="border px-3 py-2">使われやすい現場</th>
                <th className="border px-3 py-2">向いている内容物</th>
              </tr>
            </thead>
            <tbody>
              {NAME_TABLE.map((row) => (
                <tr key={row.name}>
                  <td className="border px-3 py-2 font-semibold">{row.name}</td>
                  <td className="border px-3 py-2">{row.meaning}</td>
                  <td className="border px-3 py-2">{row.site}</td>
                  <td className="border px-3 py-2">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>廃材・ガラ・土砂を入れるならどの袋を選ぶ？</H2>
        <H3>ガラ・木くず・廃プラなどを入れる場合</H3>
        <p className={cls.body}>
          ガラ・木くず・建築廃棄物・廃プラスチックなどをまとめて回収・運搬・保管したい場合は、通常タイプのフレコンバッグが候補です。中身をそのまま運び出すことが多いなら、排出口なしタイプが扱いやすくなります。
        </p>
        <H3>土砂・砂利・砕石を入れる場合</H3>
        <p className={cls.body}>
          土砂・砂利・砕石など重量のある内容物を入れる場合は、大型土のう用途にも使える耐候性タイプが候補です。屋外で仮置きするなら、後述の耐候性タイプもあわせて検討してください。
        </p>
        <H3>屋外で仮置きする場合</H3>
        <p className={cls.body}>
          屋外で一定期間仮置きする場合は、紫外線や雨風による劣化を考慮し、耐候性タイプを検討します。ただし耐候性タイプでも劣化しないわけではないため、定期的な状態確認が必要です。
        </p>
        <H3>排出作業まで考える場合</H3>
        <p className={cls.body}>
          中身を下から出す排出作業がある場合は、排出口ありタイプが候補になります。ただし、廃材やガラは形状が不揃いなため、排出口から出しやすい内容物かどうかを確認してください。
        </p>

        <H2>TRUSCOフレコンバッグの比較表</H2>
        <H3>排出口無しは、土砂・廃材の一時保管に使いやすい</H3>
        <p className={cls.body}>
          排出口無しタイプは、入れたものをそのまま回収・運搬したい一時保管に向いています。廃材・土砂・ガラの保管に幅広く使えます。
        </p>
        <H3>排出口有りは、中身を下から出したい作業に向く</H3>
        <p className={cls.body}>
          排出口有りタイプは、中身を下から出したい作業に向いています。土砂や粉粒体など、排出しやすい内容物で効果を発揮します。
        </p>
        <H3>耐候性タイプは屋外仮置きの候補になる</H3>
        <p className={cls.body}>
          耐候性タイプは、屋外仮置きや大型土のう用途の候補になります。屋外での使用が前提の現場で検討してください。
        </p>
        <H3>屋外保管でも劣化しないわけではないため定期確認が必要</H3>
        <p className={cls.body}>
          耐候性タイプでも、屋外保管で劣化しないわけではありません。生地の破れ、擦り切れ、縫製のほつれ、吊りベルトの状態などを定期的に確認してください。
        </p>

        <ProductGrid items={FRECON} />
        <CTA href={u(FRECON[0].url)}>
          TRUSCOフレコンバッグを排出口あり・なし、耐候性タイプで比較する
        </CTA>
        <p className={cls.body}>
          排出口あり・なし、耐候性タイプの詳しい選び方は
          <Link
            href="/articles/flexible-container-bag-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            「フレコンバッグの選び方」
          </Link>
          の記事もあわせてご確認ください。
        </p>

        <H2>排出口あり・なしはどう使い分ける？</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/discharge-comparison.jpg`}
          alt="排出口ありと排出口なしのフレコンバッグを比較するイメージ"
        />

        <H3>入れたものをそのまま回収・運搬するなら排出口無し</H3>
        <p className={cls.body}>
          中身をそのまま回収・運搬する使い方が中心なら、シンプルな排出口無しタイプが扱いやすくなります。
        </p>
        <H3>中身を下から出したいなら排出口有り</H3>
        <p className={cls.body}>
          保管後に中身を下から出す作業があるなら、排出口有りタイプが候補です。
        </p>
        <H3>土砂・粉粒体・原料を扱う場合は排出方法も確認する</H3>
        <p className={cls.body}>
          土砂・粉粒体・原料など流動性のある内容物では、排出方法もあわせて確認しておくと作業がスムーズです。
        </p>
        <H3>廃材・ガラは形状によって排出口に向かない場合もある</H3>
        <p className={cls.body}>
          廃材やガラは形状が不揃いで、排出口から出しにくい場合もあります。詳しい使い分けは
          <Link
            href="/articles/flexible-container-bag-selection"
            className="text-gray-900 underline hover:no-underline"
          >
            「フレコンバッグの選び方」
          </Link>
          の記事をご確認ください。
        </p>

        <H2>屋外に置くなら耐候性タイプを検討する</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/weather-resistant-outdoor.jpg`}
          alt="屋外で耐候性フレコンバッグを仮置きするイメージ"
        />

        <H3>通常タイプは短期使用・屋内保管向き</H3>
        <p className={cls.body}>
          通常タイプは、短期間の使用や屋内での保管に向いています。長期の屋外曝露を前提とした作りではない点に注意してください。
        </p>
        <H3>屋外仮置きでは紫外線や雨風による劣化に注意</H3>
        <p className={cls.body}>
          屋外での仮置きでは、紫外線や雨風による生地の劣化が進みやすくなります。屋外前提なら耐候性タイプを検討してください。
        </p>
        <H3>耐候性タイプでも定期点検は必要</H3>
        <p className={cls.body}>
          耐候性タイプでも、劣化しないわけではありません。使用前や保管中に、生地の破れ、擦り切れ、縫製のほつれ、吊りベルトの状態を確認してください。
        </p>
        <H3>長期保管前提なら保管期間と現場条件を確認する</H3>
        <p className={cls.body}>
          長期保管を前提にする場合は、保管期間や現場の条件（日当たり・風雨・置き方）を確認し、状態に応じて交換の判断をしてください。
        </p>
        <CTA href={u(FRECON[2].url)}>
          屋外仮置きや大型土のう用途には、耐候性フレコンバッグを確認する
        </CTA>

        <H2>フレコンバッグを使う現場別の選び方</H2>
        <H3>建設・解体現場｜ガラ・木くず・廃材の回収に</H3>
        <p className={cls.body}>
          建設・解体現場では、ガラ・木くず・廃材の回収に排出口無しや耐候性タイプが使いやすくなります。足元対策の安全靴や、運搬用の台車もあわせて確認しましょう。
        </p>
        <H3>土木・外構工事｜土砂・砂利・砕石の一時保管に</H3>
        <p className={cls.body}>
          土木・外構工事では、土砂・砂利・砕石の一時保管に耐候性フレコンや大型土のう用途が向いています。重量物になるため、ハンドパレットでの運搬も検討してください。
        </p>
        <H3>工場・倉庫｜端材・原料くず・廃プラの整理に</H3>
        <p className={cls.body}>
          工場・倉庫では、端材・原料くず・廃プラの整理に通常タイプのフレコンが使いやすくなります。仕分け作業には作業台、移動には台車が役立ちます。
        </p>
        <H3>看板製作・資材加工｜板材端材・梱包材・廃材の保管に</H3>
        <p className={cls.body}>
          看板製作・資材加工では、板材端材・梱包材・廃材の保管に排出口無しタイプが使いやすくなります。分別には軽量作業台、移動には運搬台車が便利です。
        </p>
        <H3>農業・造園｜土・落ち葉・剪定くずの整理に</H3>
        <p className={cls.body}>
          農業・造園では、土・落ち葉・剪定くずの整理に、用途に応じたフレコンを選びます。運搬用の台車や足元対策の安全靴もあわせて確認しておくと安心です。
        </p>

        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">現場</th>
                <th className="border px-3 py-2">入れるもの</th>
                <th className="border px-3 py-2">推奨タイプ</th>
                <th className="border px-3 py-2">一緒に確認したい用品</th>
              </tr>
            </thead>
            <tbody>
              {SITE_TABLE.map((row) => (
                <tr key={row.site}>
                  <td className="border px-3 py-2 font-semibold">{row.site}</td>
                  <td className="border px-3 py-2">{row.content}</td>
                  <td className="border px-3 py-2">{row.type}</td>
                  <td className="border px-3 py-2">{row.related}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>フレコンバッグだけでなく、運搬方法も一緒に考える</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/material-handling.jpg`}
          alt="フレコンバッグとハンドパレットや台車を組み合わせるイメージ"
        />

        <H3>パレット単位で動かすならハンドパレット</H3>
        <p className={cls.body}>
          フレコンをパレットに載せて動かす現場では、ハンドパレットトラックが役立ちます。
        </p>
        <H3>小口荷物や備品移動なら運搬台車</H3>
        <p className={cls.body}>
          袋単体ではなく小口の廃材・資材を運ぶ場合は、運搬台車が便利です。
        </p>
        <H3>フレコンを置く・詰める・仕分ける場所には作業台も便利</H3>
        <p className={cls.body}>
          廃材や端材を分別する作業スペースには、作業台があると作業がはかどります。
        </p>
        <H3>足元対策として安全靴も確認する</H3>
        <p className={cls.body}>
          重量物や袋の移動では足元に荷物が近づくため、安全靴もあわせて確認しておくと安心です。吊り上げ・運搬時はメーカーの注意事項や社内ルールに沿って使用してください。
        </p>

        <H2>ハンドパレットと組み合わせたいケース</H2>
        <H3>パレットに載せて保管・移動する現場</H3>
        <p className={cls.body}>
          フレコンをパレットごと保管・移動する現場では、ハンドパレットトラックが基本の運搬手段になります。
        </p>
        <H3>倉庫内で重量物を移動する現場</H3>
        <p className={cls.body}>
          倉庫内で重量のある荷物を移動する場合も、ハンドパレットなら少ない力で運べます。
        </p>
        <H3>フォークリフトまでは不要だが、手作業では重い現場</H3>
        <p className={cls.body}>
          フォークリフトを導入するほどではないが、手作業では重いという現場に向いています。
        </p>
        <H3>電動ハンドパレットも選択肢になるケース</H3>
        <p className={cls.body}>
          運搬距離が長い、頻度が高い、重量物を連続で運ぶ現場では、電動タイプも選択肢になります。
        </p>

        <ProductGrid items={HANDPALLETS} />
        <CTA href={u(URL_HANDPALLET_LIST)}>
          フレコンやパレット荷物の移動に、ハンドパレット一覧を確認する
        </CTA>

        <H2>運搬台車と組み合わせたいケース</H2>
        <H3>袋単体ではなく小口の廃材・資材を運ぶ場合</H3>
        <p className={cls.body}>
          フレコンに入れる前の小口の廃材・資材を運ぶ場合は、運搬台車が扱いやすくなります。
        </p>
        <H3>作業場内の短距離移動が多い場合</H3>
        <p className={cls.body}>
          作業場内での短距離移動が多い現場では、軽量で静音性のあるカルティオが便利です。
        </p>
        <H3>ストッパー付き台車は積み下ろし時に便利</H3>
        <p className={cls.body}>
          積み下ろし中に台車を止めたい場合は、ストッパー付きが便利です。ただし不安定な路面では過信せず、メーカーの注意事項や社内ルールに沿って使用してください。
        </p>
        <H3>大型荷物ならカルティオビッグも候補</H3>
        <p className={cls.body}>
          大きな荷物を運ぶ場合は、荷台の広いカルティオビッグも候補になります。
        </p>

        <ProductGrid items={CARTS} />
        <CTA href={u(URL_CART_LIST)}>
          小口荷物・現場備品の移動には運搬台車一覧を確認する
        </CTA>

        <H2>作業台と組み合わせたいケース</H2>
        <H3>廃材や端材を分別する作業スペースを作りたい</H3>
        <p className={cls.body}>
          フレコンに入れる前に廃材や端材を分別する作業スペースには、作業台があると効率的です。
        </p>
        <H3>梱包材・部品・資材を仕分ける場所が必要</H3>
        <p className={cls.body}>
          梱包材・部品・資材を仕分ける定位置として、作業台が役立ちます。
        </p>
        <H3>軽作業なら軽量作業台、重量物なら中量作業台を検討</H3>
        <p className={cls.body}>
          扱う物の重さに応じて、軽作業なら軽量作業台、重量物を扱うなら中量作業台を検討してください。
        </p>
        <H3>キャスター付き作業台はレイアウト変更にも使いやすい</H3>
        <p className={cls.body}>
          現場のレイアウトを変えることが多い場合は、キャスター付き作業台が便利です。
        </p>

        <H3>軽量作業台</H3>
        <ProductGrid items={LIGHT_BENCH} />
        <CTA href={u(URL_LIGHT_BENCH_LIST)}>軽量作業台の一覧を確認する</CTA>

        <H3>中量作業台</H3>
        <ProductGrid items={HEAVY_BENCH} />
        <CTA href={u(URL_HEAVY_BENCH_LIST)}>中量作業台の一覧を確認する</CTA>
        <CTA href={u(URL_LIGHT_BENCH_LIST)}>
          廃材・端材の分別や仕分けには、軽量作業台・中量作業台も確認する
        </CTA>

        <H2>安全靴もあわせて確認したい理由</H2>

        <ArticleImg
          src={`${ARTICLE_IMG}/sorting-safety-shoes.jpg`}
          alt="作業台で廃材を分別し安全靴を準備するイメージ"
        />

        <H3>廃材・土砂・袋の移動では足元に荷物が近づきやすい</H3>
        <p className={cls.body}>
          廃材や土砂、フレコンの移動では、荷物や袋が足元に近づく場面があります。足元の安全対策も確認しておきたいポイントです。
        </p>
        <H3>台車やハンドパレット作業では安全靴の着用ルールを確認する</H3>
        <p className={cls.body}>
          台車やハンドパレットを使う現場では、安全靴の着用ルールが定められていることがあります。作業内容や社内ルールに応じて確認してください。
        </p>
        <H3>現場用品をまとめて手配すると購買管理しやすい</H3>
        <p className={cls.body}>
          フレコン・台車・作業台とあわせて安全靴もまとめて手配すると、購買管理がしやすくなります。
        </p>

        <H3>ニューバランス安全靴</H3>
        <ProductGrid items={NB_SHOES} />
        <CTA href={u(URL_NB_SHOES_LIST)}>
          台車・運搬作業の足元対策にニューバランス安全靴も確認する
        </CTA>

        <H3>安価で高品質のトラスコ中山製品</H3>
        <ProductGrid items={TRUSCO_SHOES} />
        <CTA href={u(URL_SHOES_LIST)}>
          コスト重視で選ぶなら安全靴一覧も確認する
        </CTA>

        <H2>廃材を入れる大きい袋選びでよくある失敗</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">失敗</th>
                <th className="border px-3 py-2">起こりやすい問題</th>
                <th className="border px-3 py-2">対策</th>
              </tr>
            </thead>
            <tbody>
              {FAIL_TABLE.map((row) => (
                <tr key={row.fail}>
                  <td className="border px-3 py-2 font-semibold">{row.fail}</td>
                  <td className="border px-3 py-2">{row.problem}</td>
                  <td className="border px-3 py-2">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          なお、産業廃棄物は、保管場所の囲いや掲示板、飛散・悪臭・害虫対策などが求められる場合があります。フレコンバッグは産業廃棄物の保管・運搬に使われる手段の一つですが、廃棄物の種類や現場のルールに応じて、適切な保管・処理方法を確認することが重要です。
        </p>

        <H2>購入前チェックリスト</H2>
        <div className="my-4 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">チェック項目</th>
                <th className="border px-3 py-2">確認内容</th>
              </tr>
            </thead>
            <tbody>
              {CHECKLIST.map((row) => (
                <tr key={row.item}>
                  <td className="border px-3 py-2 font-semibold">{row.item}</td>
                  <td className="border px-3 py-2">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>よくある質問</H2>
        <div className="mt-4 space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <p className={cls.faqQ}>Q. {item.q}</p>
              <p className={cls.body}>A. {item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-gray-300 bg-gray-50 p-6">
          <h2 className={cls.ctaH3}>
            現場や倉庫などで必須な作業用品が全て揃います！
          </h2>
          <p className={cls.body}>
            フレコンバッグ・ハンドパレット・台車・作業台・安全靴まで、現場の状況に合わせてまとめて確認できます。用途に応じて選ぶことが重要です。
          </p>
          <CTA href={u(URL_TRUSCO_LIST)}>
            トラスコ中山一覧から、フレコンバッグ・ハンドパレット・台車・作業台・安全靴をまとめて確認する
          </CTA>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
