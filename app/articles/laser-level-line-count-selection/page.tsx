import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "laser-level-line-count-selection";
const ARTICLE_URL = `https://sagyou-navi.com/articles/${SLUG}`;
const UTM = "utm_source=sagyou_navi";

function appendUtm(url: string, utm: string): string {
  if (!url) return url;
  if (url.includes(utm)) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}

const R = (path: string) =>
  appendUtm(`https://item.rakuten.co.jp/crecote-shop/${path}`, UTM);

const LIST_LASER = appendUtm(
  "https://search.rakuten.co.jp/search/mall/%E5%A2%A8%E5%87%BA%E5%99%A8/?sid=426972",
  UTM
);
const LIST_MEASURE = appendUtm(
  "https://item.rakuten.co.jp/crecote-shop/c/0000000044/",
  UTM
);

type Product = {
  key: string;
  short: string;
  formal: string;
  category: string;
  use: string;
  selection: string;
  imageCode: string;
  url: string;
  tableNote?: string;
};

const products: Product[] = [
  {
    key: "sq10g",
    short: "STS SQ-10G",
    formal: "STS グリーンレーザー墨出器 SQ-10G",
    category: "少ライン・グリーン",
    use: "シンプルなグリーンレーザー機を比較の起点にしたい場合の候補。複雑なラインを常に必要としない作業では、操作が分かりやすい少ライン機の方が使いやすいことがあります。",
    selection: "水平・垂直を中心に使い、毎回複数方向を同時に出す必要がないかを確認。",
    imageCode: "ta028003-sq10g",
    url: R("ta028003-sq10g/"),
    tableNote: "グリーンレーザーのシンプル機",
  },
  {
    key: "atld1rg",
    short: "KDS ATL-D1RG",
    formal: "KDS リアルグリーンレーザー ATL-D1RG",
    category: "縦1・横1・地墨",
    use: "縦1・横1・鉛直十字・地墨に対応する構成。設備位置出しや、基本的な水平・垂直と地墨を押さえたい用途で比較しやすいモデルです。",
    selection: "鉛直十字や地墨が必要な作業か、単純なクロスラインで足りるかを確認。",
    imageCode: "ta022496-atld1rg",
    url: R("ta022496-atld1rg/"),
    tableNote: "縦1・横1・鉛直十字・地墨",
  },
  {
    key: "atl46",
    short: "KDS ATL-46RGセット",
    formal: "KDS ATL-46RG 受光器・三脚セット",
    category: "多ライン・セット",
    use: "本体だけでなく、受光器と三脚までまとめてそろえたい方向けの比較候補。購入後に屋外作業や高さ調整が必要になりそうなら、最初からセット品を検討すると適合確認や追加購入の手間を減らしやすくなります。",
    selection: "初めて業務用機を導入する場合は、現場投入に必要な構成がそろっているかを確認。",
    imageCode: "ta022486-atl46rgrsa",
    url: R("ta022486-atl46rgrsa/"),
    tableNote: "受光器・三脚セット",
  },
  {
    key: "las802",
    short: "MAX LA-S802DG",
    formal: "MAX LA-S802DG",
    category: "フルライン・電子整準",
    use: "フルラインと電子整準を備える機種。複数方向へ連続して墨出しする現場や、揺れ・振動のある場所で整準方式を重視したい場合の比較候補です。",
    selection: "部屋全体へ基準線を出す内装工事や、振動が気になる現場かを整理。",
    imageCode: "ta024411-las802dg",
    url: R("ta024411-las802dg/"),
    tableNote: "フルライン・電子整準",
  },
  {
    key: "sq10r",
    short: "STS SQ-10R",
    formal: "STS レッドレーザー墨出器 SQ-10R",
    category: "少ライン・レッド",
    use: "レッドとグリーンの違いを比較しやすいシンプル機。水平・垂直を中心に使う用途向け。",
    selection: "視認性、使用場所、連続使用時間をグリーン機と比較。",
    imageCode: "ta028004-sq10r",
    url: R("ta028004-sq10r/"),
    tableNote: "レッドレーザーのシンプル機",
  },
  {
    key: "sq15gt",
    short: "STS SQ-15GT",
    formal: "STS グリーンレーザー墨出器 SQ-15GT",
    category: "少ライン・コンパクト",
    use: "コンパクトなグリーン機。棚・器具・部分的な設備位置出し向け。",
    selection: "作業範囲が限定的か、多方向ラインが必要かを確認。",
    imageCode: "ta028005-sq15gt",
    url: R("ta028005-sq15gt/"),
    tableNote: "コンパクトなグリーン機",
  },
  {
    key: "olp2",
    short: "STS OLP-2",
    formal: "STS 鉛直レーザ OLP-2",
    category: "鉛直専用",
    use: "鉛直の移し替えが中心の作業向け。多機能機より専用機が扱いやすい場合があります。",
    selection: "鉛直専用で足りるか、水平・矩も必要かを確認。",
    imageCode: "ta026656-olp2",
    url: R("ta026656-olp2/"),
    tableNote: "鉛直作業向け",
  },
  {
    key: "zerotyz",
    short: "タジマ ZERO TYZ",
    formal: "タジマ ZERO TYZ",
    category: "標準複数ライン",
    use: "建具・間仕切り・直角確認向け。矩十字、地墨、鉛直点があると便利な用途。",
    selection: "単純な2ラインでは墨出器を置き直す回数が増えないかを確認。",
    imageCode: "ta029080-zerotyz",
    url: R("ta029080-zerotyz/"),
  },
  {
    key: "zeroky",
    short: "タジマ ZERO KY",
    formal: "タジマ ZERO KY",
    category: "標準複数ライン",
    use: "建具・間仕切り・直角確認向けの標準複数ライン機。",
    selection: "矩・地墨・鉛直点の要否を確認。",
    imageCode: "ta029067-zeroky",
    url: R("ta029067-zeroky/"),
  },
  {
    key: "zeroblky",
    short: "タジマ ZERO BLUE KY",
    formal: "タジマ ZERO BLUE KY",
    category: "標準複数ライン・ブルーグリーン",
    use: "ブルーグリーン採用の矩・直角確認向け機種。",
    selection: "KY、KJY、KJCなどのライン構成まで確認。",
    imageCode: "ta029029-zeroblky",
    url: R("ta029029-zeroblky/"),
  },
  {
    key: "cr210r",
    short: "STS CR-210R",
    formal: "STS CR-210R",
    category: "標準複数ライン",
    use: "建具・間仕切り・直角確認向けの候補。",
    selection: "矩十字、地墨、鉛直点の有無を確認。",
    imageCode: "ta022908-cr210r",
    url: R("ta022908-cr210r/"),
  },
  {
    key: "srs410g",
    short: "STS SRS-410G",
    formal: "STS SRS-410G",
    category: "標準複数ライン",
    use: "軽天・内装・複数方向への施工向け。",
    selection: "4〜5ラインやフルラインとの差を比較。",
    imageCode: "ta028006-srs410g",
    url: R("ta028006-srs410g/"),
  },
  {
    key: "g110",
    short: "MYZOX G-110SRセット",
    formal: "MYZOX G-110SR 受光器三脚セット",
    category: "標準複数ライン・セット",
    use: "標準複数ラインと受光器・三脚セット構成。",
    selection: "セット内容と適合受光器を確認。",
    imageCode: "ta021646-222742",
    url: R("ta021646-222742/"),
    tableNote: "受光器三脚セット",
  },
  {
    key: "g410",
    short: "MYZOX G-410SRセット",
    formal: "MYZOX G-410SR 受光器三脚セット",
    category: "多ライン・セット",
    use: "軽天・内装・複数方向への施工向け。複数の垂直方向を使う場合の候補。",
    selection: "4〜5ラインやフルラインとの作業効率の差を比較。",
    imageCode: "ta021645-222740",
    url: R("ta021645-222740/"),
    tableNote: "受光器三脚セット",
  },
  {
    key: "g440",
    short: "MYZOX G-440SRセット",
    formal: "MYZOX G-440SR 受光器三脚セット",
    category: "フルライン・セット",
    use: "部屋全体・大規模内装・施工範囲が広い現場向け。",
    selection: "複数の職人が同じ基準線を共有する必要があるかを確認。",
    imageCode: "ta021644-222723",
    url: R("ta021644-222723/"),
    tableNote: "受光器三脚セット",
  },
  {
    key: "la505",
    short: "MAX LA-505",
    formal: "MAX LA-505 受光器・三脚セット",
    category: "セット",
    use: "受光器・三脚セットが複数ある中の比較候補。",
    selection: "単品価格だけでなく、後から必要になるアクセサリーを含めた総額で比較。",
    imageCode: "ta024396-la505",
    url: R("ta024396-la505/"),
  },
  {
    key: "las501",
    short: "MAX LA-S501DG",
    formal: "MAX LA-S501DG",
    category: "多ライン",
    use: "軽天・内装・複数方向への施工向け。",
    selection: "フルラインとの作業範囲の差を確認。",
    imageCode: "ta024410-las501dg",
    url: R("ta024410-las501dg/"),
  },
  {
    key: "navikjy",
    short: "タジマ NAVI ZERO BLUE KJYセット",
    formal: "タジマ NAVI ZERO BLUE KJY 三脚セット",
    category: "NAVI・自動追尾",
    use: "一人作業で離れた地墨へ合わせる用途向け。NAVI機能付き。",
    selection: "一人で墨出しすることが多いか、狭い室内中心かを確認。",
    imageCode: "ta029036-zeroblnkjyset",
    url: appendUtm(
      "https://item.rakuten.co.jp/crecote-shop/ta029036-zeroblnkjyset/?variantId=TA029036",
      UTM
    ),
  },
  {
    key: "naviblkjc",
    short: "タジマ NAVI ZERO BLUE KJCセット",
    formal: "タジマ NAVI ZERO BLUE KJC 三脚セット",
    category: "NAVI・自動追尾",
    use: "NAVI機能で地墨合わせを一人で進めやすくするZERO BLUE系セット。",
    selection: "長い距離の地墨合わせが多いかを確認。",
    imageCode: "ta029034-zeroblnkjcset",
    url: R("ta029034-zeroblnkjcset/"),
  },
  {
    key: "naviblskjc",
    short: "タジマ ZERO BLUE センサーKJCセット",
    formal: "タジマ ZERO BLUE センサーKJC 受光器三脚セット",
    category: "センサー・フルライン",
    use: "部屋全体・大規模内装向け。ZERO BLUE センサーKJC系。",
    selection: "KJY、KJCなどのライン構成まで確認。",
    imageCode: "ta029038-zeroblskjcset",
    url: R("ta029038-zeroblskjcset/"),
  },
  {
    key: "navizerokjc",
    short: "タジマ NAVI ZERO KJCセット",
    formal: "タジマ NAVI ZERO KJC 三脚セット",
    category: "NAVI・自動追尾",
    use: "NAVI ZERO KJC系の比較候補。",
    selection: "対応受光器と三脚の適合を確認。",
    imageCode: "ta029072-zeronkjcset",
    url: R("ta029072-zeronkjcset/"),
  },
  {
    key: "scar045g",
    short: "STS SCAR-045G",
    formal: "STS SCAR-045G",
    category: "関連機種",
    use: "STSシリーズの関連機種として比較する場合の候補。",
    selection: "必要ライン構成との適合を確認。",
    imageCode: "ta013997-scar045g",
    url: R("ta013997-scar045g/"),
  },
  {
    key: "ss30g",
    short: "STS SS-30G",
    formal: "STS SS-30G グリーン用受光器",
    category: "受光器・グリーン",
    use: "グリーン用受光器。屋外・明るい現場でレーザー位置を確認。",
    selection: "本体の取扱説明書かメーカー適合表で対応機種を確認。",
    imageCode: "ta028008-ss30g",
    url: R("ta028008-ss30g/"),
  },
  {
    key: "ss50g",
    short: "STS SS-50G",
    formal: "STS SS-50G グリーン用受光器",
    category: "受光器・グリーン",
    use: "グリーン用受光器。使用距離と受光精度を確認。",
    selection: "メーカー公式の対応表で適合を確認。",
    imageCode: "ta028009-ss50g",
    url: R("ta028009-ss50g/"),
  },
  {
    key: "lad5gnv",
    short: "MAX LA-D5GNV",
    formal: "MAX LA-D5GNV グリーン用受光器",
    category: "受光器・グリーン",
    use: "MAXグリーン用受光器。",
    selection: "照射モードと受光器モードの切り替え要否を確認。",
    imageCode: "ta024400-lad5gnv",
    url: R("ta024400-lad5gnv/"),
  },
  {
    key: "lad5nv",
    short: "MAX LA-D5NV",
    formal: "MAX LA-D5NV レッド用受光器",
    category: "受光器・レッド",
    use: "MAXレッド用受光器。",
    selection: "レーザー色と本体型番の適合を確認。",
    imageCode: "ta024401-lad5nv",
    url: R("ta024401-lad5nv/"),
  },
  {
    key: "lrv4rg",
    short: "KDS LRV-4RG",
    formal: "KDS LRV-4RG リアルグリーン用受光器",
    category: "受光器・グリーン",
    use: "対応するリアルグリーン機用受光器。",
    selection: "KDSリアルグリーン機との適合表を確認。",
    imageCode: "ta025757-lrv4rg",
    url: R("ta025757-lrv4rg/"),
  },
  {
    key: "hd01",
    short: "STS HD-01",
    formal: "STS HD-01 レッド用受光器",
    category: "受光器・レッド",
    use: "STSレッド用受光器の比較候補。",
    selection: "レーザー色と本体型番の適合をメーカー情報で確認。",
    imageCode: "ta023956-hd01",
    url: R("ta023956-hd01/"),
  },
  {
    key: "ss50z",
    short: "STS SS-50Z",
    formal: "STS SS-50Z レッド用受光器",
    category: "受光器・レッド",
    use: "STSレッド用受光器の比較候補。",
    selection: "本体との適合をメーカー情報で確認。",
    imageCode: "ta028010-ss50z",
    url: R("ta028010-ss50z/"),
  },
  {
    key: "letc",
    short: "MYZOX LET-C",
    formal: "MYZOX エレベーター三脚 LET-C",
    category: "三脚",
    use: "腰高や天井付近へ水平線を出す用途向け。",
    selection: "最大高さ・最低高さ・収納時の長さを確認。",
    imageCode: "ta024490-letc",
    url: R("ta024490-letc/"),
  },
  {
    key: "elv300",
    short: "タジマ ELV300",
    formal: "タジマ エレベーター三脚3000 ELV300",
    category: "三脚",
    use: "高さ調整が必要な現場向けのエレベーター三脚。",
    selection: "取付ねじや別売アダプターの要否を確認。",
    imageCode: "ta029245-elv300",
    url: R("ta029245-elv300/"),
  },
  {
    key: "lanv1",
    short: "MAX 自動追尾台セット",
    formal: "MAX グリーンレーザー用受光器・自動追尾台セット",
    category: "自動追尾",
    use: "MAXグリーンレーザー用の受光器・自動追尾台セット。一人作業の効率化を検討するときの比較候補。",
    selection: "対応するMAX本体型番と受光器モードを公式情報で確認。",
    imageCode: "ta024402-lanv1d5gnv",
    url: R("ta024402-lanv1d5gnv/"),
  },
  {
    key: "rcvgnavi",
    short: "タジマ NAVI受光器",
    formal: "タジマ グリーンレーザーレシーバーNAVI",
    category: "受光器・NAVI",
    use: "タジマNAVI対応のグリーンレーザーレシーバー。",
    selection: "NAVI・リモコン機能の要否と対応本体をメーカー適合表で確認。",
    imageCode: "ta026822-rcvgnavi",
    url: R("ta026822-rcvgnavi/"),
  },
];

const featuredKeys = ["sq10g", "atld1rg", "atl46", "las802"] as const;
const simpleUseKeys = ["sq10r", "sq10g", "atld1rg", "sq15gt"] as const;
const squareUseKeys = ["zerotyz", "zeroky", "zeroblky", "cr210r"] as const;
const multiUseKeys = ["g410", "atl46", "las501", "srs410g"] as const;
const fullUseKeys = ["g440", "las802", "naviblskjc", "navikjy"] as const;
const verticalUseKeys = ["olp2"] as const;
const compactLineKeys = ["sq10r", "sq10g", "sq15gt", "atld1rg", "olp2"] as const;
const standardLineKeys = [
  "zerotyz",
  "zeroky",
  "zeroblky",
  "cr210r",
  "srs410g",
  "g110",
] as const;
const fullLineKeys = ["g410", "g440", "atl46", "las501", "las802"] as const;
const naviKeys = [
  "navikjy",
  "naviblkjc",
  "navizerokjc",
  "naviblskjc",
  "lanv1",
] as const;
const receiverKeys = [
  "ss30g",
  "ss50g",
  "lad5gnv",
  "lad5nv",
  "lrv4rg",
  "hd01",
  "ss50z",
  "rcvgnavi",
] as const;
const tripodKeys = ["letc", "elv300"] as const;

const faqs = [
  {
    question: "レーザー墨出器は2ラインで十分ですか？",
    answer:
      "壁面や器具の水平・垂直など、限定的な作業なら十分な場合があります。直角や複数方向、部屋全体へ同時に出したい場合は矩十字、多ライン、フルラインを検討します。",
  },
  {
    question: "内装工事には何ライン必要ですか？",
    answer:
      "部分施工なら2〜3ライン、間仕切りや軽天を複数方向へ施工するなら4〜5ラインやフルラインが候補です。作業範囲と本体を回す頻度で判断します。",
  },
  {
    question: "グリーンレーザーの方がよいですか？",
    answer:
      "視認性を重視する場合に選ばれやすい一方、価格や電池持ちも確認が必要です。屋内・近距離中心ならレッドでも十分な場合があります。",
  },
  {
    question: "屋外では受光器が必要ですか？",
    answer:
      "肉眼でラインが見えにくい明るい場所では、対応受光器を使うのが基本的な選択肢です。機種と受光器の適合を確認してください。",
  },
  {
    question: "三脚セットを選ぶべきですか？",
    answer:
      "初回導入、高さ調整、屋外作業を想定する場合はセットが便利です。既に適合三脚を持つ場合は本体のみでも構いません。",
  },
  {
    question: "自動追尾はどんな人に向きますか？",
    answer:
      "一人で離れた地墨へラインを合わせる作業が多い人に向きます。少人数化や移動回数削減の効果を見込める現場で比較してください。",
  },
  {
    question: "受光器は他メーカーでも使えますか？",
    answer:
      "色や波長、パルス方式、通信機能が異なるため、使えるとは限りません。メーカーの対応表や取扱説明書で確認してください。",
  },
];

const failures = [
  "とにかくフルラインを選ぶ",
  "ライン本数だけを見て「矩・地墨・鉛直点」を見ない",
  "屋外で使うのに受光器を買わない",
  "受光器の色・型番を間違える",
  "本体のみの価格だけで選ぶ",
  "校正・修理を考えない",
];

const failureDetails = [
  "作業効率は上がりますが、少ラインしか使わない場合は費用や重量が過剰になる可能性があります。",
  "必要な方向や点が出せなければ、ライン数が多くても作業に合いません。",
  "明るい場所ではラインが見えにくくなるため、対応受光器の有無を確認します。",
  "グリーン用とレッド用、NAVI対応などで適合が異なります。",
  "三脚や受光器が後から必要になると、セット品より総額が高くなることがあります。",
  "業務用では精度維持と停止期間も重要です。メーカーの点検・修理体制も選定基準にします。",
];

const checklist = [
  "工種ごとに必要なライン構成を定義した",
  "本体を回す回数と作業人数を把握した",
  "屋外・明るい場所で使う班を整理した",
  "受光器・三脚・アダプターの適合を確認した",
  "電池や充電器を統一できるか確認した",
  "防塵・防滴、使用温度、精度を確認した",
  "高機能機と標準機を班別に配備する案を比較した",
  "校正・点検・修理の窓口を決めた",
];

const references = [
  {
    label: "TAJIMA レーザー墨出器製品一覧",
    url: "https://jpn.tajimatool.co.jp/category/39",
  },
  {
    label: "TAJIMA NAVI説明",
    url: "https://jpn.tajimatool.co.jp/page/newlazernavi_description",
  },
  {
    label: "MAX レーザ墨出器製品一覧",
    url: "https://www.max-ltd.co.jp/product/kikouhin/laser/marking/",
  },
  {
    label: "MAX 受光器一覧",
    url: "https://www.max-ltd.co.jp/product/kikouhin/laser/receiver/",
  },
  {
    label: "KDS ATL-46RG",
    url: "https://muratec-kds.jp/products/atl-46rg/",
  },
  {
    label: "KDS ATL-D1RG",
    url: "https://muratec-kds.jp/products/atl-d1rg/",
  },
  {
    label: "STS SQ-10G",
    url: "https://www.sts-s.co.jp/product/detail/74",
  },
  {
    label: "MYZOX G-440SR",
    url: "https://www.myzox.co.jp/data/products/article/988",
  },
];

const relatedArticles = [
  {
    href: "/articles/long-distance-measuring-tools-selection",
    title: "長い距離を測る道具の選び方",
  },
  {
    href: "/articles/digital-manifold-selection",
    title: "デジタルマニホールドの選び方",
  },
  {
    href: "/articles/high-precision-platform-scale-selection",
    title: "高精度台秤の選び方",
  },
  {
    href: "/articles/drainage-pipe-leak-test-method",
    title: "排水管の水漏れ試験方法",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "レーザー墨出器は何ライン必要？ライン数・色・受光器・三脚の選び方【2026年版】",
  description:
    "レーザー墨出器は何ライン必要なのか、2ライン・矩十字・4〜5ライン・フルラインを工種別に比較。グリーンとレッド、電子整準とジンバル、受光器・三脚・自動追尾の必要性まで、商品サムネ付きで失敗しない選び方を解説します。",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  mainEntityOfPage: ARTICLE_URL,
  image: [
    `https://sagyou-navi.com/images/${SLUG}/laser-level-line-count-hero.jpg`,
  ],
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: "https://sagyou-navi.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: "https://sagyou-navi.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: "https://sagyou-navi.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "レーザー墨出器は何ライン必要？",
      item: ARTICLE_URL,
    },
  ],
};

export const metadata: Metadata = {
  title:
    "レーザー墨出器は何ライン必要？ライン数・色・受光器・三脚の選び方【2026年版】",
  description:
    "レーザー墨出器は何ライン必要なのか、2ライン・矩十字・4〜5ライン・フルラインを工種別に比較。グリーンとレッド、電子整準とジンバル、受光器・三脚・自動追尾の必要性まで、商品サムネ付きで失敗しない選び方を解説します。",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title:
      "レーザー墨出器は何ライン必要？ライン数・色・受光器・三脚の選び方【2026年版】",
    description:
      "レーザー墨出器のライン数を工種別に比較。色・整準方式・受光器・三脚・NAVIまで、商品サムネ付きで選び方を解説します。",
    images: [
      {
        url: `/images/${SLUG}/laser-level-line-count-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "レーザー墨出器のライン数を工種別に比較検討するイメージ",
      },
    ],
  },
};

function getProduct(key: string): Product {
  const found = products.find((product) => product.key === key);
  if (!found) throw new Error(`Product not found: ${key}`);
  return found;
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className={cls.h2}>
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-300">
      {children}
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}

function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-6 rounded-2xl border-2 border-gray-900 bg-amber-50 p-5">
      {children}
    </section>
  );
}

function Figure({ file, alt }: { file: string; alt: string }) {
  return (
    <figure className="my-7 overflow-hidden rounded-2xl border border-gray-300">
      <Image
        src={`/images/${SLUG}/${file}`}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full"
      />
    </figure>
  );
}

function CtaButtons() {
  return (
    <div className="my-6 flex flex-wrap gap-3">
      <a
        href={LIST_LASER}
        target="_blank"
        rel="nofollow sponsored"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
      >
        レーザー墨出器一覧はこちら
      </a>
      <a
        href={LIST_MEASURE}
        target="_blank"
        rel="nofollow sponsored"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
      >
        測定・計測用品一覧はこちら
      </a>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={`/products/${product.imageCode}.jpg`}
          alt={`${product.short}の商品画像`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-3 p-5">
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-gray-900">
          {product.category}
        </span>
        <h3 className="text-xl font-black leading-snug text-gray-900">
          {product.formal}
        </h3>
        <p className="text-[15px] leading-7 text-gray-900">{product.use}</p>
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-gray-900">
          <strong>導入前確認：</strong>
          {product.selection}
        </p>
        <a
          href={product.url}
          target="_blank"
          rel="nofollow sponsored"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-900 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-gray-700"
        >
          楽天で見る
        </a>
      </div>
    </article>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="nofollow sponsored"
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <Image
          src={`/products/${product.imageCode}.jpg`}
          alt={`${product.short}の商品画像`}
          fill
          sizes="80px"
          className="object-contain p-1.5 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4 group-hover:text-gray-600">
          {product.short}
        </span>
        {product.tableNote ? (
          <span className="block text-xs leading-5 text-gray-900">
            {product.tableNote}
          </span>
        ) : null}
      </span>
    </a>
  );
}

function ProductGrid({ keys }: { keys: readonly string[] }) {
  return (
    <div className="my-5 grid gap-5 sm:grid-cols-2">
      {keys.map((key) => (
        <ProductCard key={key} product={getProduct(key)} />
      ))}
    </div>
  );
}

function CategoryTable({
  keys,
  showNote = true,
}: {
  keys: readonly string[];
  showNote?: boolean;
}) {
  return (
    <TableWrap>
      <table className={cls.table}>
        <thead>
          <tr>
            <Th>商品</Th>
            {showNote ? <Th>特徴</Th> : null}
          </tr>
        </thead>
        <tbody>
          {keys.map((key) => {
            const product = getProduct(key);
            return (
              <tr key={key}>
                <Td>
                  <ProductTableCell product={product} />
                </Td>
                {showNote ? (
                  <Td>{product.tableNote ?? product.category}</Td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrap>
  );
}

export default function Page() {
  const featured = featuredKeys.map(getProduct);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 py-8 text-gray-900 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <nav aria-label="パンくず" className="mb-5 text-sm text-gray-800">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="font-bold underline underline-offset-4">
                作業用品ナビ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/articles"
                className="font-bold underline underline-offset-4"
              >
                記事一覧
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-bold">
              レーザー墨出器は何ライン必要？
            </li>
          </ol>
        </nav>

        <header>
          <p className="text-sm font-bold tracking-wide text-gray-900">
            ライン数・色・受光器・三脚・NAVIまで｜工種別比較
          </p>
          <h1 className={cls.h1}>
            レーザー墨出器は何ライン必要？
            <span className="mt-3 block text-2xl font-black sm:text-3xl">
              ライン数・色・受光器・三脚の選び方【2026年版】
            </span>
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-800">
            公開日・最終更新日：2026年7月27日 ｜ 作業用品ナビ編集部
          </p>
        </header>

        <p className="mb-4 leading-8 text-gray-900">
          レーザー墨出器を選ぶとき、最も迷いやすいのが「何ライン必要なのか」という点です。商品を見比べると、縦1本・横1本のシンプルな機種から、矩十字、4〜5ライン、フルライン、自動追尾付きまで幅広く、価格差も大きくなります。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          高機能な機種ほど作業範囲は広がりますが、すべての現場でフルラインが必要なわけではありません。一方、必要な方向のラインが不足すると、墨出器を何度も回したり、別の工具で補ったりすることになり、買い直しにつながることもあります。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          この記事では、
          <strong>
            レーザー墨出器のライン数を作業内容から逆算して選ぶ方法
          </strong>
          を中心に、次の疑問をまとめて解決します。
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>2ライン・矩十字・4〜5ライン・フルラインの違い</li>
          <li>グリーン、レッド、ブルーグリーンの選び分け</li>
          <li>電子整準とジンバル式の違い</li>
          <li>受光器や三脚が必要な現場</li>
          <li>一人作業で役立つNAVI・自動追尾</li>
          <li>本体のみと受光器・三脚セットの選び分け</li>
        </ul>
        <p className="mb-4 leading-8 text-gray-900">
          添付の商品群から代表的なレーザー墨出器を用途別に絞り、記事前半から商品サムネ付きで比較できるようにしています。
        </p>

        <Figure
          file="laser-level-line-count-hero.jpg"
          alt="レーザー墨出器のライン数を工種別に比較検討するイメージ"
        />

        <AnswerBox>
          <p className="text-base font-black text-gray-900">
            まず結論｜必要なライン数は「同時に出したい基準線」で決める
          </p>
          <p className="mt-2 leading-8 text-gray-900">
            レーザー墨出器は、作業中に同時に確認したい方向から選ぶと失敗しにくくなります。
          </p>
          <TableWrap>
            <table className={cls.table}>
              <thead>
                <tr>
                  <Th>主な作業</Th>
                  <Th>選びやすいライン構成</Th>
                  <Th>向く機種の考え方</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>棚・器具・簡単な設備位置出し</Td>
                  <Td>
                    <Mark>縦1＋横1</Mark>
                  </Td>
                  <Td>2ライン・コンパクト機</Td>
                </tr>
                <tr>
                  <Td>建具・間仕切り・直角確認</Td>
                  <Td>
                    <Mark>矩十字・3〜4ライン</Mark>
                  </Td>
                  <Td>矩・地墨対応機</Td>
                </tr>
                <tr>
                  <Td>軽天・内装を複数方向へ連続施工</Td>
                  <Td>
                    <Mark>4〜5ライン</Mark>
                  </Td>
                  <Td>多方向ライン機</Td>
                </tr>
                <tr>
                  <Td>部屋全体・大規模内装・複数面施工</Td>
                  <Td>
                    <Mark>フルライン</Mark>
                  </Td>
                  <Td>フルライン・電子整準機</Td>
                </tr>
                <tr>
                  <Td>一人で離れた地墨へ合わせる</Td>
                  <Td>
                    <Mark>NAVI・自動追尾</Mark>
                  </Td>
                  <Td>受光器連動モデル</Td>
                </tr>
                <tr>
                  <Td>屋外・明るい現場</Td>
                  <Td>
                    <Mark>対応受光器</Mark>
                  </Td>
                  <Td>受光器セットまたは追加購入</Td>
                </tr>
                <tr>
                  <Td>天井・高さを変える作業</Td>
                  <Td>
                    <Mark>適合三脚</Mark>
                  </Td>
                  <Td>三脚セット・昇降三脚</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
        </AnswerBox>

        <SubTitle>ライン数が多いほどよいとは限らない</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          多ラインやフルラインは、本体を回す回数を減らし、複数方向へ効率よく基準線を出せるのが利点です。しかし、価格、重量、電池消費は増えやすくなります。毎回使うのが縦1本と水平だけなら、シンプルな機種の方が扱いやすい場合もあります。
        </p>

        <CtaButtons />

        <SectionTitle id="featured">
          ライン数の比較起点にしたい4商品
        </SectionTitle>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {featured.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </div>

        <SectionTitle id="line-config">
          レーザー墨出器のライン構成を理解する
        </SectionTitle>

        <SubTitle>縦・横</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          最も基本的な組み合わせです。棚、器具、配管支持、壁面の位置出しなど、垂直と水平を確認できれば足りる作業では、縦1＋横1の機種が候補になります。
        </p>

        <SubTitle>矩・直角</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          床や壁で90度の基準を取りたい作業では、単純な縦横だけでなく「矩」に対応する機種が便利です。間仕切り、建具、床材、設備の直角配置などで使いやすくなります。
        </p>

        <SubTitle>地墨・鉛直点</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          床の基準点を天井へ移したり、上下の位置関係を確認したりする作業では、地墨や鉛直点の有無が重要です。ライン本数だけでなく、点や下部ポイントの仕様も確認してください。
        </p>

        <SubTitle>4〜5ライン</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          複数方向の垂直線と水平線を一度に使えるため、墨出器を回転させる回数を減らしやすくなります。内装、軽天、設備工事など、作業範囲が広い場合に候補になります。
        </p>

        <SubTitle>フルライン</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          水平全周と複数方向の垂直ラインを一度に照射できるタイプです。部屋全体、広い内装、複数面を連続施工する現場では効率を上げやすくなります。ただし、フルラインを常に使わない作業者には過剰になる場合もあります。
        </p>

        <SectionTitle id="by-work">作業別｜何ライン必要か</SectionTitle>

        <SubTitle>棚・器具・部分的な設備位置出し</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          縦1＋横1を中心にした少ライン機で対応しやすい用途です。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">候補例：</p>
        <ProductGrid keys={simpleUseKeys} />
        <p className="mb-4 leading-8 text-gray-900">
          赤と緑のどちらを選ぶかは、視認性、使用場所、価格、連続使用時間を比較します。
        </p>
        <Figure
          file="two-line-laser-interior-work.jpg"
          alt="2ラインのレーザー墨出器で内装作業するイメージ"
        />

        <SubTitle>建具・間仕切り・直角確認</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          矩十字、地墨、鉛直点があると便利です。単純な2ラインでは、墨出器を置き直す回数が増えることがあります。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">候補例：</p>
        <ProductGrid keys={squareUseKeys} />

        <SubTitle>軽天・内装・複数方向への施工</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          複数の垂直方向を使う場合は、4〜5ラインやフルラインが候補になります。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">候補例：</p>
        <ProductGrid keys={multiUseKeys} />

        <SubTitle>部屋全体・大規模内装・施工範囲が広い現場</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          フルラインは、本体を回す回数を減らし、複数の職人が同じ基準線を共有しやすいのが利点です。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">候補例：</p>
        <ProductGrid keys={fullUseKeys} />
        <Figure
          file="full-line-laser-large-interior.jpg"
          alt="フルラインのレーザー墨出器で大規模内装作業するイメージ"
        />

        <SubTitle>鉛直の移し替えが中心</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          鉛直専用に近い使い方なら、多機能機より専用機が扱いやすい場合があります。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">候補例：</p>
        <ProductGrid keys={verticalUseKeys} />

        <SectionTitle id="compare-table">
          商品サムネ付き比較｜ライン数・機能別の代表モデル
        </SectionTitle>

        <SubTitle>少ライン・コンパクト</SubTitle>
        <CategoryTable keys={compactLineKeys} />

        <SubTitle>標準複数ライン</SubTitle>
        <CategoryTable keys={standardLineKeys} />

        <SubTitle>多ライン・フルライン</SubTitle>
        <CategoryTable keys={fullLineKeys} />

        <SubTitle>NAVI・自動追尾</SubTitle>
        <CategoryTable keys={naviKeys} />

        <SectionTitle id="laser-color">
          グリーン・レッド・ブルーグリーンの違い
        </SectionTitle>

        <SubTitle>グリーン</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          一般に人の目で見やすい色として選ばれることが多く、明るい室内や長い距離でラインを確認したい場合に比較しやすいタイプです。一方、出力や使用モードによって電池持ちが変わるため、連続使用時間も確認します。
        </p>

        <SubTitle>レッド</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          屋内の近距離作業や、価格を抑えたい場合の候補です。受光器を使う前提なら、屋外・明所でも作業範囲を広げられる機種があります。
        </p>

        <SubTitle>ブルーグリーン</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          タジマのZERO BLUEシリーズなどで採用される色です。公式情報では鮮視度やギラつきを抑えた見え方を特徴として案内しています。色名だけで判断せず、鮮視度、ライン幅、使用時間を比較してください。
        </p>

        <SectionTitle id="leveling">電子整準とジンバル式はどう選ぶ？</SectionTitle>

        <SubTitle>ジンバル式</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          振り子や磁気ダンパーを使って整準する方式です。一般的な現場で使いやすく、選択肢が多いのが特徴です。
        </p>

        <SubTitle>電子整準</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          センサーとモーターで整準する方式です。MAXやMYZOX、タジマの一部高機能機では、揺れや振動のある現場での安定性を特徴として案内しています。高層現場や振動が気になる場所、精度管理を重視する場合に比較候補になります。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          方式だけで優劣を決めず、使用環境、立ち上がり、重量、価格、修理体制まで含めて選びます。
        </p>

        <SectionTitle id="receiver">受光器は必要？</SectionTitle>

        <SubTitle>屋外・明るい現場では検討価値が高い</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          レーザーラインは、屋外や窓際など明るい場所では肉眼で見えにくくなります。受光器はレーザーの位置を音や表示で確認するためのアクセサリーです。
        </p>

        <SubTitle>受光器は色と機種の適合が重要</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          グリーン用、レッド用、NAVI用などがあり、色が同じでもすべての機種で共用できるとは限りません。MAX、KDS、タジマなどの公式情報でも、対応機種の確認が案内されています。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">主な商品例：</p>
        <CategoryTable keys={receiverKeys} showNote={false} />
        <p className="mb-4 leading-8 text-gray-900">
          購入前に必ず本体の取扱説明書かメーカー適合表を確認してください。
        </p>
        <Figure
          file="outdoor-laser-receiver-use.jpg"
          alt="屋外でレーザー墨出器と受光器を使うイメージ"
        />

        <SectionTitle id="tripod">三脚は必要？</SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          床置きで必要な高さにラインが届く作業だけなら、本体のみでも対応できます。しかし、次のような作業では三脚が便利です。
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>腰高や天井付近へ水平線を出す</li>
          <li>毎回同じ高さへ設置する</li>
          <li>不整地で設置高さを調整する</li>
          <li>本体を安定させ、微調整しやすくする</li>
        </ul>
        <p className="mb-2 font-bold leading-8 text-gray-900">商品例：</p>
        <CategoryTable keys={tripodKeys} showNote={false} />
        <p className="mb-4 leading-8 text-gray-900">
          三脚取付ねじやアダプターの要否は機種ごとに確認します。
        </p>
        <Figure
          file="laser-level-tripod-height-adjustment.jpg"
          alt="三脚でレーザー墨出器の高さを調整するイメージ"
        />

        <SectionTitle id="set-vs-body">本体のみと受光器・三脚セットはどちらがよい？</SectionTitle>

        <SubTitle>本体のみが向く人</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>既に適合受光器・三脚を持っている</li>
          <li>屋内の近距離作業が中心</li>
          <li>必要なアクセサリーだけ個別に選びたい</li>
        </ul>

        <SubTitle>セットが向く人</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>初めてレーザー墨出器を導入する</li>
          <li>屋外作業や高さ調整を想定している</li>
          <li>適合確認の手間を減らしたい</li>
          <li>すぐ現場投入できる構成を求める</li>
        </ul>
        <p className="mb-4 leading-8 text-gray-900">
          MYZOX Gシリーズ、KDS ATL-46RG、タジマ各シリーズ、MAX LA-505など、受光器・三脚セットが複数あります。単品価格だけでなく、後から必要になるアクセサリーを含めた総額で比較してください。
        </p>

        <SectionTitle id="navi">一人作業ならNAVI・自動追尾を検討</SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          タジマのNAVI機能は、受光器を合わせたい地墨位置に置き、本体のレーザーラインを受光器側へ誘導する仕組みです。公式案内では、従来2人で行う位置合わせを一人で進めやすくする機能として紹介されています。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          一人親方や少人数班で、離れた位置の地墨合わせが多い場合は、高価でも作業時間短縮につながる可能性があります。一方、狭い場所や近距離の位置出しが中心なら、NAVIなしでも十分な場合があります。
        </p>
        <Figure
          file="laser-level-auto-tracking-solo-work.jpg"
          alt="一人作業でNAVI・自動追尾機能を使うイメージ"
        />

        <SectionTitle id="specs">精度・防塵防滴・電源も確認する</SectionTitle>
        <p className="mb-2 leading-8 text-gray-900">
          ライン数が同じでも、現場での使いやすさは次の仕様で変わります。
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>ライン精度</li>
          <li>ライン幅</li>
          <li>自動補正範囲</li>
          <li>防塵・防滴性能</li>
          <li>動作温度</li>
          <li>連続使用時間</li>
          <li>リチウム、乾電池、ACの電源方式</li>
          <li>校正、点検、修理体制</li>
        </ul>
        <p className="mb-4 leading-8 text-gray-900">
          精密機器のため、落下や振動、保管状態で精度に影響が出る可能性があります。定期点検や校正の運用も導入前に決めてください。
        </p>

        <SectionTitle id="detail-products">
          代表商品の選び分けをもう少し詳しく見る
        </SectionTitle>

        <SubTitle>シンプルな2ライン系｜STS SQ-10R・SQ-10G</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          SQ-10RとSQ-10Gは、レッドとグリーンの違いを比較しやすい組み合わせです。水平・垂直を中心に使い、毎回複数方向を同時に出す必要がない場合は、こうしたシンプル機が候補になります。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          シンプルな機種の利点は、操作を覚えやすく、必要以上に大型化しにくいことです。作業範囲が壁一面や器具1か所に限られる場合、フルラインを導入しても機能を使い切れない可能性があります。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          一方、同じ部屋の複数面へ連続して基準線を出す作業では、本体を回転させる回数が増えるため、多ライン機との差が出やすくなります。
        </p>
        <div className="mb-6 grid gap-5 sm:grid-cols-2">
          <ProductCard product={getProduct("sq10r")} />
          <ProductCard product={getProduct("sq10g")} />
        </div>

        <SubTitle>基本機能に地墨を加えたい｜KDS ATL-D1RG</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          KDSの公式情報では、ATL-D1RGは本体と受光器・三脚のセット構成も用意されています。掲載商品は本体のみですが、将来屋外や高さ調整で使う可能性がある場合は、別売アクセサリーの費用も含めて比較してください。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          縦1・横1だけでなく、鉛直十字や地墨が必要な作業では、単純なクロスライン機より作業範囲が広がります。配管・電気設備・器具設置などで、床基準と壁面基準を併用する場合に確認したい構成です。
        </p>
        <ProductCard product={getProduct("atld1rg")} />

        <SubTitle>多方向とセット構成を重視｜KDS ATL-46RG</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          ATL-46RGは、受光器と三脚を含むセット商品が掲載されています。初めて業務用機を導入する場合は、本体価格だけでなく、現場投入に必要な構成がそろっているかが重要です。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          屋内中心でも、天井・壁・床の高さが変わる現場では三脚を使う機会があります。屋外や明るい場所では受光器が必要になることもあるため、セット品は「本体購入後に追加でそろえる手間」を抑えやすい選択肢です。
        </p>
        <ProductCard product={getProduct("atl46")} />

        <SubTitle>電子整準とフルライン｜MAX LA-S802DG</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          MAXの公式製品情報では、LA-S802DGはフルラインの電子整準機として案内されています。部屋全体へ基準線を出す内装工事や、複数方向を同時に使う現場で比較しやすい機種です。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          電子整準機は、揺れや振動への対応を重視する場合に候補になります。ただし、ジンバル式より高価格帯になりやすいため、実際の現場でどれだけ振動があり、どの程度の作業時間短縮を期待するかを整理してください。
        </p>
        <ProductCard product={getProduct("las802")} />

        <SubTitle>一人作業の効率を重視｜タジマ NAVIシリーズ</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          タジマのNAVIは、受光器を合わせたい位置に置き、本体を遠隔で誘導して縦ラインを合わせる機能です。公式説明では、本体と受光器を使って地墨合わせを進める手順が案内されています。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">
          次のような現場では比較価値が高くなります。
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>作業者が一人で墨出しすることが多い</li>
          <li>墨出器と合わせたい位置の間を何度も往復している</li>
          <li>長い距離の地墨合わせが多い</li>
          <li>少人数化と作業時間短縮を重視している</li>
        </ul>
        <p className="mb-4 leading-8 text-gray-900">
          反対に、狭い室内や本体の近くで位置合わせする作業が中心なら、NAVI機能を使う機会が少ない可能性があります。
        </p>
        <ProductGrid keys={naviKeys} />

        <SectionTitle id="green-red">
          グリーンとレッドは「見やすさ」だけで決めない
        </SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          レーザー色は重要な比較軸ですが、単純にグリーンが上位、レッドが下位という関係ではありません。
        </p>

        <SubTitle>グリーンが向きやすい場面</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>明るい室内でラインを目視する</li>
          <li>比較的長い距離で作業する</li>
          <li>複数人がラインを共有する</li>
          <li>ラインの見つけやすさを重視する</li>
        </ul>

        <SubTitle>レッドが向きやすい場面</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>屋内・近距離が中心</li>
          <li>使用頻度が限られている</li>
          <li>必要機能を絞って導入費を抑えたい</li>
          <li>受光器を併用する予定がある</li>
        </ul>

        <SubTitle>ブルーグリーンの確認点</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          タジマのZERO BLUEシリーズは、公式サイトで鮮視度やギラつきを抑えたラインを特徴として案内しています。ただし、シリーズ内でもジンバル、センサー、NAVI、ライン構成が異なります。「ZERO
          BLUE」という名称だけで選ばず、KY、KJY、KJCなどのライン構成まで確認してください。
        </p>

        <SectionTitle id="accuracy">
          精度の数字は同じ距離へ換算して比較する
        </SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          レーザー墨出器の精度は、メーカーや製品ページによって「±1mm/10m」「±1mm/7.5m」「±1mm/5m」など、異なる距離で記載される場合があります。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">
          数字だけを横並びにすると比較しにくいため、次の点を確認してください。
        </p>
        <ol className="mb-4 list-decimal space-y-2 pl-6 leading-8 text-gray-900">
          <li>水平・垂直ラインの精度</li>
          <li>直角精度</li>
          <li>鉛直点・地墨の精度</li>
          <li>左右通り精度</li>
          <li>ライン幅</li>
          <li>自動補正範囲</li>
        </ol>
        <p className="mb-4 leading-8 text-gray-900">
          精度が高くてもラインが太いと、どの位置を基準に墨を取るか迷いやすくなります。一般にはライン中央を基準にするため、長い距離で作業する場合はライン幅も確認したい項目です。
        </p>

        <SubTitle>校正証明書が必要な現場</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          元請けや品質管理ルールによっては、校正証明書や検査成績書が必要になる場合があります。購入前に、メーカーや販売店が書類発行に対応しているかを確認してください。
        </p>

        <SectionTitle id="outdoor">屋外・明るい場所で使う場合の選び方</SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          屋外では、グリーンレーザーでも日光の影響でラインが見えにくくなることがあります。屋内外兼用と書かれていても、屋外では受光器を使う前提の製品があります。
        </p>

        <SubTitle>屋外用として確認したい項目</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>対応受光器が販売されているか</li>
          <li>受光距離</li>
          <li>防塵・防滴性能</li>
          <li>動作温度</li>
          <li>三脚やスタッフへ固定しやすいか</li>
          <li>受光器モードへ切り替える必要があるか</li>
        </ul>

        <SubTitle>受光器モードにも注意</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          一部の機種では、高輝度モードでは受光器が反応せず、受光器用のパルスモードへ切り替える必要があります。MAXの公式FAQでも、モードによって受光器が反応しないケースが案内されています。
        </p>
        <p className="mb-4 leading-8 text-gray-900">
          現場で「受光器が故障した」と判断する前に、本体の照射モード、受光器の色、対応機種、電池残量を確認してください。
        </p>

        <SectionTitle id="receiver-buy">
          受光器を別購入する場合の確認手順
        </SectionTitle>
        <ol className="mb-4 list-decimal space-y-2 pl-6 leading-8 text-gray-900">
          <li>本体のメーカーと型番を確認する</li>
          <li>レーザー色を確認する</li>
          <li>メーカー公式の対応表を確認する</li>
          <li>NAVI・リモコン機能の要否を確認する</li>
          <li>クランプやロッド固定具が付属するか確認する</li>
          <li>使用距離と受光精度を確認する</li>
        </ol>
        <p className="mb-4 leading-8 text-gray-900">
          「グリーン用」と書かれているだけで選ぶと、通信機能やパルス方式の違いで使えない可能性があります。STS、MAX、KDS、タジマの受光器が含まれていますが、メーカーをまたいで共用できるとは考えない方が安全です。
        </p>

        <SectionTitle id="tripod-buy">
          三脚を別購入する場合の確認手順
        </SectionTitle>

        <SubTitle>取付ねじとアダプター</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          レーザー墨出器用三脚には、機種によって取付ねじやアダプターの条件があります。タジマのエレベーター三脚3000など、機種によって別売アダプターが必要になる場合があります。
        </p>

        <SubTitle>高さと昇降幅</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>床近くの地墨確認</li>
          <li>腰高の設備位置</li>
          <li>天井付近の水平ライン</li>
        </ul>
        <p className="mb-4 leading-8 text-gray-900">
          必要な高さによって三脚を選びます。最大高さだけでなく、最低高さ、収納時の長さ、重量も確認してください。
        </p>

        <SubTitle>設置安定性</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          三脚を使うと高さ調整しやすくなりますが、脚が不安定な状態では精度を活かせません。通路にはみ出さない位置へ設置し、作業者や資材が接触しないようにします。
        </p>

        <SectionTitle id="power">電源方式と連続使用時間の選び方</SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          業務用レーザー墨出器では、リチウムイオン充電池、乾電池、AC電源の複数方式に対応する機種があります。
        </p>

        <SubTitle>リチウムイオン充電池</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          長時間使用しやすく、繰り返し使う現場向けです。会社で複数台導入する場合は、充電器と予備電池の管理も必要です。
        </p>

        <SubTitle>乾電池</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          急な電池切れに対応しやすく、現場近くで調達しやすい利点があります。使用時間と交換頻度を確認してください。
        </p>

        <SubTitle>AC電源</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          据え置きで長時間使う現場では便利ですが、コードが通路を横切ると安全面の問題が出るため、配線方法も考えます。
        </p>

        <SubTitle>ライン全点灯時の使用時間</SubTitle>
        <p className="mb-4 leading-8 text-gray-900">
          連続使用時間は、1ラインだけ点灯する場合とフルラインを全点灯する場合で異なることがあります。カタログの最長時間だけでなく、普段使うモードでの時間を確認してください。
        </p>

        <SectionTitle id="storage">防塵・防滴と保管方法</SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          建設現場では、粉じん、水滴、温度差、振動の影響を受けます。IP54相当などの表示があっても、雨天で無制限に使える意味ではありません。
        </p>
        <p className="mb-2 font-bold leading-8 text-gray-900">使用後は次のように管理します。</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>本体表面の粉じんや水分を拭く</li>
          <li>レーザー窓を傷つけない</li>
          <li>電池を確認し、長期保管時は取扱説明書に従う</li>
          <li>専用ケースへ収納する</li>
          <li>落下や強い衝撃があった場合は精度を点検する</li>
          <li>定期的に校正・点検へ出す</li>
        </ul>

        <SectionTitle id="corporate">
          法人で複数台導入する場合の標準化例
        </SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          全員へ同じ高機能機を支給する必要はありません。作業班ごとに標準機を分けると、導入費と作業効率のバランスを取りやすくなります。
        </p>

        <Figure
          file="laser-level-procurement-comparison.jpg"
          alt="法人向けにレーザー墨出器の導入構成を比較検討するイメージ"
        />

        <SubTitle>標準班</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>縦横・矩を中心に使う標準機</li>
          <li>共通の受光器・三脚</li>
          <li>乾電池または共通充電池</li>
        </ul>

        <SubTitle>内装・軽天班</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>4〜5ラインまたはフルライン</li>
          <li>三脚セット</li>
          <li>予備電池</li>
        </ul>

        <SubTitle>屋外・長距離班</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>対応受光器</li>
          <li>防塵・防滴性能を確認した本体</li>
          <li>ロッドクランプや三脚</li>
        </ul>

        <SubTitle>一人作業班</SubTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          <li>NAVI・自動追尾</li>
          <li>対応受光器</li>
          <li>一人作業手順の教育</li>
        </ul>
        <p className="mb-4 leading-8 text-gray-900">
          機種を増やしすぎると、受光器・充電池・ケースの管理が複雑になります。メーカーやシリーズをある程度統一することも検討してください。
        </p>

        <SectionTitle id="mistakes">よくある失敗例</SectionTitle>
        <ol className="mt-5 grid gap-3">
          {failures.map((item, index) => (
            <li
              key={item}
              className="rounded-lg border border-gray-300 bg-white p-4"
            >
              <p className="text-lg font-black text-gray-900">
                {index + 1}. {item}
              </p>
              <p className="mt-2 leading-7 text-gray-900">
                {failureDetails[index]}
              </p>
            </li>
          ))}
        </ol>

        <SectionTitle id="checklist">法人購買担当者向けチェックリスト</SectionTitle>
        <ul className="mb-4 list-disc space-y-2 pl-6 leading-8 text-gray-900">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <SectionTitle id="faq">FAQ</SectionTitle>
        <div className="divide-y divide-gray-300 rounded-xl border border-gray-300 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="p-5">
              <summary className="cursor-pointer list-none pr-8 text-lg font-black leading-7 text-gray-900">
                {faq.question}
              </summary>
              <p className="mt-3 leading-8 text-gray-900">{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium leading-6 text-gray-800">
          FAQは本文理解を助けるために掲載しています。FAQPage構造化データは実装していません。
        </p>

        <SectionTitle id="summary">
          まとめ｜必要ラインを決めてから色・整準・セット構成を選ぶ
        </SectionTitle>
        <p className="mb-4 leading-8 text-gray-900">
          レーザー墨出器選びでは、最初に「何本多いか」ではなく、
          <strong>作業中にどの方向を同時に出したいか</strong>
          を整理することが重要です。
        </p>
        <ol className="mb-4 list-decimal space-y-2 pl-6 leading-8 text-gray-900">
          <li>工種から必要ラインを決める</li>
          <li>使用環境から色を選ぶ</li>
          <li>揺れや振動から整準方式を比較する</li>
          <li>屋外なら受光器、高さ調整なら三脚を確認する</li>
          <li>一人作業が多ければNAVI・自動追尾を検討する</li>
        </ol>
        <p className="mb-4 leading-8 text-gray-900">
          この順で選ぶと、不要な高機能機を買う失敗と、ライン不足で買い直す失敗の両方を減らしやすくなります。
        </p>

        <CtaButtons />

        <SectionTitle id="references">参考情報</SectionTitle>
        <ul className="space-y-3">
          {references.map((ref) => (
            <li
              key={ref.url}
              className="rounded-lg border border-gray-300 bg-white p-4"
            >
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-black text-gray-900 underline underline-offset-4"
              >
                {ref.label}
              </a>
            </li>
          ))}
        </ul>

        <SectionTitle id="related">関連記事</SectionTitle>
        <ul className="space-y-3">
          {relatedArticles.map((article) => (
            <li key={article.href}>
              <Link
                href={article.href}
                className="text-base font-bold text-gray-900 underline underline-offset-4"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
