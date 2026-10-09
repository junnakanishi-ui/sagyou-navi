/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

/* =========================================================
   作業用品ナビ｜企業の防災備蓄は義務か
   slug: kigyo-bousai-bichiku-gimu
   自己完結 page.tsx（中央レジストリなし・共通コンポーネント不使用）
   ========================================================= */

const SLUG = "kigyo-bousai-bichiku-gimu";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const PUBLISHED = "2026-10-09";
const UPDATED = "2026-10-09";
const TITLE = "企業の防災備蓄は義務？法律・条例の結論と必要量【2026年版】";
const DESCRIPTION =
  "企業の防災備蓄に全国一律の法的義務はありませんが、東京都条例の努力義務と労働契約法の安全配慮義務から、実務上は備えが求められます。2026年1月改定の内閣府ガイドライン、2026年3月公表の実態調査、11月発足の防災庁まで踏まえ、1人あたりの必要量、人数別の早見表、トイレ・電源・救護用品の選び方を解説します。";
const UTM = `utm_source=sagyou_navi&utm_medium=article&utm_campaign=${SLUG}`;
const IMG_BASE = "/products/";

/* ---------- URL helpers（文字列連結のみ・URL APIで再加工しない） ---------- */
function buildUrl(base: string, query: string): string {
  const i = base.indexOf("#");
  const head = i === -1 ? base : base.slice(0, i);
  const hash = i === -1 ? "" : base.slice(i);
  return `${head}${head.includes("?") ? "&" : "?"}${query}${hash}`;
}
/** GC-select 商品ページ（パス型：既存クエリ・フラグメントを除去して UTM） */
function G(url: string): string {
  return `${url.split("#")[0].split("?")[0]}?${UTM}`;
}
/** GC-select 一覧・検索ページ（既存クエリ q= を保持して UTM を追加） */
function GQ(url: string): string {
  return buildUrl(url, UTM);
}

/* ---------- 型 ---------- */
type Store = "gc" | "rakuten";
type Product = {
  name: string;
  short: string;
  href: string;
  img: string;
  store: Store;
  tags: string[];
  point: string;
  spec: string;
};

const STORE_LABEL: Record<Store, string> = { gc: "GC-select", rakuten: "楽天市場" };
const EXT = { target: "_blank", rel: "noopener noreferrer sponsored" } as const;
const REF = { target: "_blank", rel: "noopener noreferrer" } as const;

/* ---------- 商品データマスター（build.py で生成） ---------- */
const P = {
  t_500: { name: "非常用 簡易トイレ 1回分×500個", short: "簡易トイレ 1回分×500個", href: G("https://www.gc-select.com/products/6300072265"), img: "6300072265.jpg", store: "gc", tags: ["500回分", "大人数向け"], point: "1回分ずつ個包装された500個入り。30人×3日（450回）に外部向け1割を足した495回がほぼ収まる量。", spec: "500回分" },
  t_kyowa: { name: "魅せるトイレ「京和柄」携帯トイレ 50回分", short: "魅せるトイレ「京和柄」50回分", href: G("https://www.gc-select.com/products/6300062372"), img: "6300062372.jpg", store: "gc", tags: ["50回分", "デザイン箱"], point: "和柄の箱に50回分を収めた携帯トイレ。応接室や受付に置いても目立ちにくい外観。", spec: "50回分" },
  t_seiza: { name: "魅せるトイレ「星座」携帯トイレ 50回分", short: "魅せるトイレ「星座」50回分", href: G("https://www.gc-select.com/products/6300062371"), img: "6300062371.jpg", store: "gc", tags: ["50回分", "デザイン箱"], point: "星座柄の箱に50回分。フロアごと・部署ごとに分散して置く使い方に向く。", spec: "50回分" },
  t_12: { name: "防災用 簡易トイレ 12回分（ブラック）", short: "防災用 簡易トイレ 12回分", href: G("https://www.gc-select.com/products/6300075559"), img: "6300075559.jpg", store: "gc", tags: ["12回分", "小分け"], point: "12回分の小分けセット。1人の3日分（15回）に近く、デスクや車両への常備用に。", spec: "12回分" },
  t_clean100: { name: "コンパクトイレクリーン100", short: "コンパクトイレクリーン100", href: G("https://www.gc-select.com/products/6300033126"), img: "6300033126.jpg", store: "gc", tags: ["携帯トイレ"], point: "コンパクトな携帯トイレ。入数と使い方は商品ページで確認を。", spec: "" },
  t_oritatami: { name: "折り畳み式救急トイレ Mサイズ 凝固剤付き（グリーン）", short: "折り畳み式救急トイレ M", href: G("https://www.gc-select.com/products/6300098316"), img: "6300098316.jpg", store: "gc", tags: ["凝固剤付き", "折り畳み"], point: "凝固剤付きの折り畳み式トイレ。便器が使えない場所でも座って用を足せる。", spec: "Mサイズ" },
  t_kumitate: { name: "組立簡易トイレ 防災士監修（便器・便座のみ）", short: "組立簡易トイレ（便器・便座）", href: G("https://www.gc-select.com/products/6300072242"), img: "6300072242.jpg", store: "gc", tags: ["防災士監修", "便器・便座"], point: "便器と便座だけのシンプルな組立式。手持ちの携帯トイレと組み合わせて使う。", spec: "便器・便座のみ" },
  t_marugoto: { name: "まるごと組み立てトイレセット", short: "まるごと組み立てトイレセット", href: G("https://www.gc-select.com/products/6300057132"), img: "6300057132.jpg", store: "gc", tags: ["組立式", "セット"], point: "組み立て式トイレをひとまとめにしたセット。構成品は商品ページで確認を。", spec: "" },
  t_puradan: { name: "簡易トイレ プラダントイレ", short: "プラダントイレ", href: G("https://www.gc-select.com/products/6300060740"), img: "6300060740.jpg", store: "gc", tags: ["組立式", "プラダン製"], point: "プラスチック段ボール製の簡易トイレ。軽く、未使用時は平たく保管できるタイプ。", spec: "" },
  t_benri: { name: "簡易トイレ ベンリートイレ", short: "ベンリートイレ", href: G("https://www.gc-select.com/products/6300004290"), img: "6300004290.jpg", store: "gc", tags: ["簡易トイレ"], point: "定番の簡易トイレ。付属品と使用回数は商品ページで確認を。", spec: "" },
  t_dokodemo: { name: "どこでもトイレⅡ", short: "どこでもトイレⅡ", href: G("https://www.gc-select.com/products/6300054868"), img: "6300054868.jpg", store: "gc", tags: ["簡易トイレ"], point: "設置場所を選ばない簡易トイレ。仕様は商品ページで確認を。", spec: "" },
  t_suisen: { name: "ポータブル水洗トイレ（簡易水洗・非常用）", short: "ポータブル水洗トイレ", href: G("https://www.gc-select.com/products/6300051858"), img: "6300051858.jpg", store: "gc", tags: ["簡易水洗", "持ち運び可"], point: "水を使う簡易水洗タイプ。介護用・事業所用としても使える持ち運び型。", spec: "" },
  t_tent: { name: "FUTURE FOX 防災用トイレテント（プライバシーテント）", short: "トイレ用プライバシーテント", href: G("https://www.gc-select.com/products/6300071919"), img: "6300071919.jpg", store: "gc", tags: ["目隠し", "着替えにも"], point: "トイレや着替えの目隠しになるテント。女性や来客が安心して使える個室をつくれる。", spec: "" },
  s_share30m: { name: "シェアする防災セット ベーシック30人分（マグネットM）", short: "シェアする防災セット 30人分", href: G("https://www.gc-select.com/products/6300046023"), img: "6300046023.jpg", store: "gc", tags: ["30人分", "共有型"], point: "30人分を1セットで管理できる共有型。部署単位の配備に向く。内容物は商品ページで確認を。", spec: "30人分" },
  s_share10ml: { name: "シェアする防災セット ベーシック10人分（マグネットL）", short: "シェアする防災セット 10人分（マグネットL）", href: G("https://www.gc-select.com/products/6300046036"), img: "6300046036.jpg", store: "gc", tags: ["10人分", "マグネット"], point: "10人分の共有型。マグネット仕様のLサイズ。", spec: "" },
  s_share10mm: { name: "シェアする防災セット ベーシック10人分（マグネットM）", short: "シェアする防災セット 10人分（マグネットM）", href: G("https://www.gc-select.com/products/6300046035"), img: "6300046035.jpg", store: "gc", tags: ["10人分", "マグネット"], point: "10人分の共有型。マグネット仕様のMサイズ。", spec: "" },
  s_share10sl: { name: "シェアする防災セット ベーシック10人分（ステッカーL）", short: "シェアする防災セット 10人分（ステッカーL）", href: G("https://www.gc-select.com/products/6300046033"), img: "6300046033.jpg", store: "gc", tags: ["10人分", "ステッカー"], point: "10人分の共有型。ステッカー仕様のLサイズ。", spec: "" },
  s_share10ss: { name: "シェアする防災セット ベーシック10人分（ステッカーS）", short: "シェアする防災セット 10人分（ステッカーS）", href: G("https://www.gc-select.com/products/6300046031"), img: "6300046031.jpg", store: "gc", tags: ["10人分", "ステッカー"], point: "10人分の共有型。ステッカー仕様のSサイズ。", spec: "" },
  s_a4_30: { name: "A4ボックス 非常用持出袋 30点 防災セット", short: "A4ボックス持出袋 30点", href: G("https://www.gc-select.com/products/6300054638"), img: "6300054638.jpg", store: "gc", tags: ["A4サイズ", "30点"], point: "A4ファイルと同じ感覚で棚やデスクに収まる箱型。30点入り。", spec: "30点" },
  s_a4_25: { name: "A4ボックス 非常用持出袋 25点 防災セット", short: "A4ボックス持出袋 25点", href: G("https://www.gc-select.com/products/6300054637"), img: "6300054637.jpg", store: "gc", tags: ["A4サイズ", "25点"], point: "A4サイズの箱型・25点入り。", spec: "" },
  s_a4_20: { name: "A4ボックス 非常用持出袋 20点 防災セット", short: "A4ボックス持出袋 20点", href: G("https://www.gc-select.com/products/6300054636"), img: "6300054636.jpg", store: "gc", tags: ["A4サイズ", "20点"], point: "A4サイズの箱型・20点入り。", spec: "" },
  s_a4_12: { name: "A4ボックス 非常用持出袋 12点 防災セット", short: "A4ボックス持出袋 12点", href: G("https://www.gc-select.com/products/6300054635"), img: "6300054635.jpg", store: "gc", tags: ["A4サイズ", "12点"], point: "A4サイズの箱型・12点入り。", spec: "" },
  s_a4_ruck12: { name: "A4ボックス 反射de持出リュック 12点 防災セット", short: "A4ボックス 反射de持出リュック 12点", href: G("https://www.gc-select.com/products/6300054639"), img: "6300054639.jpg", store: "gc", tags: ["A4サイズ", "反射材"], point: "A4ボックスに収まる持出リュック12点。暗い中でも見つけやすい反射仕様の名称。", spec: "" },
  s_abo49: { name: "A4ファイルサイズ防災セット 厳選7点（ABO-49）", short: "A4ファイルサイズ防災セット 7点（ABO-49）", href: G("https://www.gc-select.com/products/6300062680"), img: "6300062680.jpg", store: "gc", tags: ["A4ファイル", "7点"], point: "A4ファイルサイズに7点を厳選。デスクの引き出しに入れておける最小構成。", spec: "7点" },
  s_iris40: { name: "アイリスオーヤマ 防災セット 食品付き 1人用 40点（NBS1-40）", short: "アイリス 防災セット食品付き 1人用40点", href: G("https://www.gc-select.com/products/6300075178"), img: "6300075178.jpg", store: "gc", tags: ["食品付き", "1人用"], point: "食品付きの1人用40点。食品の内容と量は商品ページで確認を。", spec: "40点" },
  s_iris31: { name: "アイリスオーヤマ 防災セット 1人用 31点", short: "アイリス 防災セット 1人用31点", href: G("https://www.gc-select.com/products/6300099037"), img: "6300099037.jpg", store: "gc", tags: ["1人用", "31点"], point: "1人用31点のリュック型セット。", spec: "" },
  s_iris27: { name: "アイリスオーヤマ 防災セット 1人用 27点", short: "アイリス 防災セット 1人用27点", href: G("https://www.gc-select.com/products/6300099036"), img: "6300099036.jpg", store: "gc", tags: ["1人用", "27点"], point: "1人用27点のリュック型セット。", spec: "" },
  s_iris_2p44: { name: "アイリスオーヤマ 防災セット 2人用 44点（BS2-44・ホワイト）", short: "アイリス 防災セット 2人用44点", href: G("https://www.gc-select.com/products/6300075176"), img: "6300075176.jpg", store: "gc", tags: ["2人用", "44点"], point: "2人用44点。少人数の店舗や営業所の1セット目に。", spec: "44点" },
  s_acty37: { name: "ACTY 防災リュック＆トートバッグ 37点セット", short: "ACTY 防災リュック＆トート 37点", href: G("https://www.gc-select.com/products/6300055805"), img: "6300055805.jpg", store: "gc", tags: ["37点", "トート付き"], point: "リュックとトートの2点構成で37点。持ち出しと待機用を分けて使える。", spec: "37点" },
  s_acty25: { name: "ACTY 防災リュック＆トートバッグ 25点セット", short: "ACTY 防災リュック＆トート 25点", href: G("https://www.gc-select.com/products/6300055804"), img: "6300055804.jpg", store: "gc", tags: ["25点", "トート付き"], point: "リュックとトートの2点構成で25点。", spec: "" },
  s_dry17: { name: "防水ドライバッグ 17点セット 非常用 20L", short: "防水ドライバッグ 17点 20L", href: G("https://www.gc-select.com/products/6300072039"), img: "6300072039.jpg", store: "gc", tags: ["防水", "20L"], point: "20Lの防水ドライバッグに17点。浸水しやすい1階や屋外倉庫への配備にも。", spec: "20L" },
  s_otasuke: { name: "衛生防災セット おたすけ丸（一般向け）", short: "衛生防災セット おたすけ丸（一般向け）", href: G("https://www.gc-select.com/products/6300036587"), img: "6300036587.jpg", store: "gc", tags: ["衛生用品", "一般向け"], point: "衛生用品をまとめたセット。断水時の身だしなみ・清潔の維持に。", spec: "一般向け" },
  s_otasuke_w: { name: "衛生防災セット おたすけ丸（女性向け）", short: "衛生防災セット おたすけ丸（女性向け）", href: G("https://www.gc-select.com/products/6300036588"), img: "6300036588.jpg", store: "gc", tags: ["衛生用品", "女性向け"], point: "女性向けの衛生用品セット。従業員の構成に合わせて一般向けと組み合わせる。", spec: "女性向け" },
  r_berca: { name: "ベルカ SB-90A 救護用担架", short: "ベルカ SB-90A 救護用担架", href: G("https://www.gc-select.com/products/6300009120"), img: "6300009120.jpg", store: "gc", tags: ["担架", "救護"], point: "けが人を運ぶための救護用担架。エレベーターが止まったビルでの搬送に備えて。", spec: "" },
  r_tarpaulin: { name: "ターポリン救護担架", short: "ターポリン救護担架", href: G("https://www.gc-select.com/products/1134030104"), img: "1134030104.jpg", store: "gc", tags: ["担架", "ターポリン"], point: "ターポリン素材の救護担架。丸めて保管できるタイプは置き場所をとりにくい。", spec: "" },
  r_partition: { name: "救護用パーテーション あんしんウォール", short: "救護用パーテーション あんしんウォール", href: G("https://www.gc-select.com/products/6300062205"), img: "6300062205.jpg", store: "gc", tags: ["目隠し", "救護所"], point: "救護スペースや女性用スペースを区切るパーテーション。施設内待機を3日続ける前提の備え。", spec: "" },
  r_sleep: { name: "災害救助用寝袋 8枚入", short: "災害救助用寝袋 8枚入", href: G("https://www.gc-select.com/products/6300090866"), img: "6300090866.jpg", store: "gc", tags: ["8枚入", "保温"], point: "8枚入りの寝袋。毛布に代わる保温用品として、宿泊を伴う待機に。", spec: "8枚" },
  r_kit_a: { name: "レスキューツールキット（商品番号6300065875）", short: "レスキューツールキット（6300065875）", href: G("https://www.gc-select.com/products/6300065875"), img: "6300065875.jpg", store: "gc", tags: ["救助工具"], point: "救助用の工具をまとめたキット。構成品は商品ページで確認を。", spec: "" },
  r_kit_b: { name: "レスキューツールキット（商品番号6300065881）", short: "レスキューツールキット（6300065881）", href: G("https://www.gc-select.com/products/6300065881"), img: "6300065881.jpg", store: "gc", tags: ["救助工具"], point: "同名のもう1タイプ。2種類の構成を見比べて選べる。", spec: "" },
  r_megaphone: { name: "レイニーメガホン ルミナスメガPlus TS-533L", short: "ルミナスメガPlus TS-533L", href: G("https://www.gc-select.com/products/6300062406"), img: "6300062406.jpg", store: "gc", tags: ["メガホン", "誘導"], point: "停電した館内やビル前での誘導・点呼に使うメガホン。", spec: "" },
  r_anpi: { name: "安否確認マグネット ANP-2（救援・救護必要です）", short: "安否確認マグネット ANP-2", href: G("https://www.gc-select.com/products/6300040298"), img: "6300040298.jpg", store: "gc", tags: ["安否表示", "マグネット"], point: "扉などに貼って「救援・救護が必要」と外から知らせるマグネット表示。", spec: "" },
  r_sign: { name: "JIS標識ピクトサイン 救護所 A", short: "ピクトサイン 救護所 A", href: G("https://www.gc-select.com/products/6300001014"), img: "6300001014.jpg", store: "gc", tags: ["JIS標識", "救護所"], point: "救護所の場所を示すJIS標識のピクトサイン。初めての来所者にも伝わる。", spec: "" },
  r_bojin: { name: "防刃防護具収納3点セット", short: "防刃防護具収納3点セット", href: G("https://www.gc-select.com/products/6300044210"), img: "6300044210.jpg", store: "gc", tags: ["防護具", "3点"], point: "防刃仕様の防護具3点を収納したセット。受付や夜間の警備体制の備えに。内容は商品ページで確認を。", spec: "" },
  p_master2200: { name: "TogoPower MASTER2200 ポータブル電源", short: "TogoPower MASTER2200", href: G("https://www.gc-select.com/products/6300056699"), img: "6300056699.jpg", store: "gc", tags: ["大容量", "MASTER"], point: "MASTERシリーズの大型機。シリーズは停電時の自動切替（M-UPS）をうたう（販売店の説明）。容量は商品ページで確認を。", spec: "" },
  p_master1800: { name: "TogoPower MASTER1800NEW ポータブル電源", short: "TogoPower MASTER1800NEW", href: G("https://www.gc-select.com/products/6300056698"), img: "6300056698.jpg", store: "gc", tags: ["MASTER"], point: "MASTERシリーズの1800クラス。仕様は商品ページで確認を。", spec: "" },
  p_master1000: { name: "TogoPower MASTER1000 ポータブル電源", short: "TogoPower MASTER1000", href: G("https://www.gc-select.com/products/6300056697"), img: "6300056697.jpg", store: "gc", tags: ["MASTER"], point: "MASTERシリーズの1000クラス。小規模な事務所の1台目に。", spec: "" },
  p_inf600: { name: "TogoPower INFINITY 600 ポータブル電源（リン酸鉄）", short: "TogoPower INFINITY 600", href: G("https://www.gc-select.com/products/6300098184"), img: "6300098184.jpg", store: "gc", tags: ["560Wh", "リン酸鉄"], point: "定格600W・容量560Wh（量販店の掲載値）。リン酸鉄リチウムで長期保管に向く。", spec: "560Wh" },
  p_inf_plus600: { name: "TogoPower INFINITY PLUS600 ポータブル電源（リン酸鉄）", short: "TogoPower INFINITY PLUS600", href: G("https://www.gc-select.com/products/6300098180"), img: "6300098180.jpg", store: "gc", tags: ["リン酸鉄"], point: "INFINITYシリーズのPLUSモデル。仕様の違いは商品ページで比べて選ぶ。", spec: "" },
  p_b2000: { name: "B2000 SST 固体電池ポータブル電源", short: "B2000 SST 固体電池ポータブル電源", href: G("https://www.gc-select.com/products/6300069258"), img: "6300069258.jpg", store: "gc", tags: ["固体電池"], point: "固体電池を使ったポータブル電源。容量・出力は商品ページで確認を。", spec: "" },
  p_200w: { name: "200Wポータブル電源 153.6Wh（リン酸鉄・PD100W・パススルー）", short: "200Wポータブル電源 153.6Wh", href: G("https://www.gc-select.com/products/6300099155"), img: "6300099155.jpg", store: "gc", tags: ["153.6Wh", "パススルー"], point: "153.6Whの小型機。充電しながら給電できるパススルー対応で、受付のスマホ充電ステーションに。", spec: "153.6Wh" },
  p_radio: { name: "CICONIA ソーラーダイナモラジオライト", short: "CICONIA ソーラーダイナモラジオライト", href: G("https://www.gc-select.com/products/6300075354"), img: "6300075354.jpg", store: "gc", tags: ["ラジオ", "手回し・太陽光"], point: "ラジオとライトを1台に。太陽光と手回しで充電でき、乾電池切れの心配を減らせる。", spec: "" },
  p_lantern: { name: "ラジオランタン 4WAY電源 LS40-F", short: "ラジオランタン LS40-F", href: G("https://www.gc-select.com/products/6300031487"), img: "6300031487.jpg", store: "gc", tags: ["ラジオ", "4WAY電源"], point: "4通りの電源で動くラジオ付きランタン。待機スペースの明かりと情報源を兼ねる。", spec: "" },
  p_akarin: { name: "あかリン専用 ソーラーパネル付き電源ユニット（単管クランプ付き）", short: "あかリン専用 ソーラー電源ユニット", href: G("https://www.gc-select.com/products/6300094262"), img: "6300094262.jpg", store: "gc", tags: ["ソーラー", "単管クランプ"], point: "「あかリン」専用の電源ユニット。対応機器と取り付け方法は商品ページで確認を。", spec: "" },
} satisfies Record<string, Product>;

/* ---------- CTA（依頼文の実URLのみ） ---------- */
const CTA = {
  taifu: {
    href: GQ("https://www.gc-select.com/collections/taifu_hazard_2026"),
    label: "台風・水害対策の商品一覧",
  },
  shisuiban: {
    href: GQ("https://www.gc-select.com/pages/search-results-page?q=%E6%AD%A2%E6%B0%B4%E6%9D%BF"),
    label: "止水板の一覧",
  },
  bousai: {
    href: GQ("https://www.gc-select.com/pages/search-results-page?q=%E9%98%B2%E7%81%BD%E3%82%BB%E3%83%83%E3%83%88"),
    label: "防災セットの一覧",
  },
  toilet: {
    href: GQ("https://www.gc-select.com/search?q=%E3%83%88%E3%82%A4%E3%83%AC&options%5Bprefix%5D=product"),
    label: "簡易トイレの一覧",
  },
  rescue: {
    href: GQ("https://www.gc-select.com/pages/search-results-page?q=%E6%95%91%E5%8A%A9"),
    label: "救助アイテムの一覧",
  },
  battery: {
    href: GQ("https://www.gc-select.com/pages/search-results-page?q=%E9%9B%BB%E6%BA%90"),
    label: "バッテリーアイテムの一覧",
  },
} as const;

/* ---------- 内部リンク・姉妹サイト ---------- */
const HEAT = "https://www.heatstroke-navi.com/articles";
const RELATED: { title: string; href: string; site: "sagyou" | "heat" }[] = [
  { title: "企業の水害対策グッズ｜止水板・土のうの必要数と選び方", href: "/articles/kigyo-suigai-taisaku-goods", site: "sagyou" },
  { title: "災害備蓄ラックの選び方（トラスコ）", href: "/articles/saigai-bichiku-rack-trusco", site: "sagyou" },
  { title: "災害用トイレの選び方と備蓄目安", href: `${HEAT}/disaster-toilet-stockpile-selection-guide`, site: "heat" },
  { title: "防災備蓄の夏の保管方法", href: `${HEAT}/disaster-stockpile-summer-storage-guide`, site: "heat" },
  { title: "停電時の熱中症対策完全ガイド", href: `${HEAT}/power-outage-heatstroke-guide`, site: "heat" },
];

/* ---------- 参考資料（本文の数値の出典） ---------- */
const REFERENCES: { title: string; href: string }[] = [
  { title: "首相官邸「令和8年9月25日 定例閣議案件」（防災庁設置法の施行期日を定める政令ほか）", href: "https://www.kantei.go.jp/jp/kakugi/2026/kakugi-2026092501.html" },
  { title: "内閣府（防災担当）帰宅困難者対策のページ（ガイドライン等）", href: "https://www.bousai.go.jp/jishin/kitakukonnan/" },
  { title: "内閣府「令和7年度 企業の事業継続及び防災の取組に関する実態調査（概要）」令和8年3月", href: "https://www.bousai.go.jp/kyoiku/kigyou/pdf/r7_gaiyou.pdf" },
  { title: "内閣府「事業継続ガイドライン改定等に関する検討会」第1回資料（令和8年7月13日）", href: "https://www.bousai.go.jp/kaigirep/kentokai/jigyoukeizoku/pdf/siryo2.pdf" },
  { title: "東京都「東京都帰宅困難者対策条例」条文", href: "https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/000/536/jyourei.pdf" },
  { title: "東京都 防災ホームページ（東京事業所防災実践マニュアルに基づく備蓄の目安）", href: "https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/030/501/202524.pdf" },
  { title: "東京都総務局「今後の帰宅困難者対策に関する検討会議」報告書（概要）", href: "https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2018/02/20/documents/03_01.pdf" },
  { title: "大阪市「大阪市防災・減災条例」の概要（防災冊子）", href: "https://www.city.osaka.lg.jp/kikikanrishitsu/cmsfiles/contents/0000011/11873/R7_p0.pdf" },
];

/* =========================================================
   表示コンポーネント（page.tsx 内で定義）
   ========================================================= */
function H2({ id, num, children }: { id: string; num: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-6 mt-14 flex scroll-mt-24 items-start gap-3 border-l-[6px] border-gray-900 pl-4 text-3xl font-black leading-snug tracking-wide text-gray-900 sm:text-4xl"
    >
      <span className="mt-1 inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 px-2 text-sm font-bold text-white">
        {num}
      </span>
      <span>{children}</span>
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 mt-8 flex items-center gap-2 text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl">
      <span aria-hidden="true" className="inline-block h-5 w-1.5 rounded bg-gray-900" />
      {children}
    </h3>
  );
}

function Mk({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function PointBox({ title = "ポイント", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <span className="rounded bg-gray-900 px-2 py-0.5 text-xs text-white">POINT</span>
        {title}
      </p>
      <div className="space-y-2 text-[16px] leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function CautionBox({ title = "注意", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-2 border-gray-900 bg-white p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
          !
        </span>
        {title}
      </p>
      <div className="space-y-2 text-[16px] leading-relaxed text-gray-900">{children}</div>
    </div>
  );
}

function StoreBadge({ store }: { store: Store }) {
  return (
    <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] font-bold tracking-wide text-white">
      {STORE_LABEL[store]}
    </span>
  );
}

/** 商品カード：カード全体が <a>（作業用品ナビ仕様） */
function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブ）`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <div className="relative aspect-square bg-gray-50">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={p.name}
          loading="lazy"
          width={480}
          height={480}
          className="h-full w-full object-contain p-3"
        />
        <span className="absolute left-2 top-2">
          <StoreBadge store={p.store} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm font-bold leading-snug text-gray-900 group-hover:underline">{p.name}</p>
        {p.spec ? <p className="mt-1 text-xs text-gray-500">{p.spec}</p> : null}
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gray-900 px-3 text-sm font-bold text-white transition group-hover:bg-gray-700">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

/** 大きめの横長カード（その章の主役商品） */
function FeaturedCard({ p, lead }: { p: Product; lead: string }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブ）`}
      className="group my-6 flex flex-col overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-400 sm:flex-row"
    >
      <div className="relative bg-gray-50 sm:w-2/5">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={p.name}
          loading="lazy"
          width={560}
          height={560}
          className="aspect-square h-full w-full object-contain p-4"
        />
        <span className="absolute left-3 top-3">
          <StoreBadge store={p.store} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold tracking-widest text-gray-500">{lead}</p>
        <p className="mt-1 text-lg font-bold leading-snug text-gray-900 group-hover:underline">{p.name}</p>
        {p.spec ? <p className="mt-1 text-sm text-gray-500">{p.spec}</p> : null}
        <div className="mt-3 flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-4 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-gray-900 px-5 text-base font-bold text-white transition group-hover:bg-gray-700">
          {STORE_LABEL[p.store]}で価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

/** 横一列のミニカード（組み合わせパーツ・サブ商品） */
function MiniRow({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブ）`}
      className="group flex min-h-[72px] items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <img
        src={`${IMG_BASE}${p.img}`}
        alt=""
        loading="lazy"
        width={64}
        height={64}
        className="h-16 w-16 shrink-0 rounded-lg border border-gray-100 bg-gray-50 object-contain p-1"
      />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-1.5">
          <StoreBadge store={p.store} />
          <span className="text-sm font-bold leading-snug text-gray-900 group-hover:underline">{p.short}</span>
        </span>
        {p.point ? <span className="mt-1 block text-xs leading-relaxed text-gray-600">{p.point}</span> : null}
      </span>
      <span aria-hidden="true" className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white">
        見る →
      </span>
    </a>
  );
}

/** サイズ違い・型番違いをまとめるカード（コンテナは div、各リンクを分離して <a> の入れ子を回避） */
function VariantCard({
  title,
  lead,
  note,
  items,
}: {
  title: string;
  lead: string;
  note: string;
  items: { label: string; p: Product }[];
}) {
  const first = items[0].p;
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <a
        href={first.href}
        {...EXT}
        aria-label={`${first.name}の価格・在庫を${STORE_LABEL[first.store]}で見る（新しいタブ）`}
        className="group block focus:outline-none focus:ring-4 focus:ring-gray-400"
      >
        <div className="relative aspect-[4/3] bg-gray-50">
          <img
            src={`${IMG_BASE}${first.img}`}
            alt={title}
            loading="lazy"
            width={480}
            height={360}
            className="h-full w-full object-contain p-3"
          />
          <span className="absolute left-2 top-2">
            <StoreBadge store={first.store} />
          </span>
        </div>
        <p className="px-4 pt-3 text-xs font-bold tracking-widest text-gray-500">{lead}</p>
        <p className="px-4 text-base font-bold leading-snug text-gray-900 group-hover:underline">{title}</p>
      </a>
      <div className="flex flex-1 flex-col p-4 pt-2">
        <div className="mb-2 flex flex-wrap gap-1">
          {first.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <p className="flex-1 text-[13px] leading-relaxed text-gray-700">{note}</p>
        <p className="mt-3 text-xs font-bold text-gray-900">サイズ・型番を選んで価格・在庫を見る</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {items.map((v) => (
            <a
              key={v.label}
              href={v.p.href}
              {...EXT}
              aria-label={`${v.p.name}の価格・在庫を${STORE_LABEL[v.p.store]}で見る（新しいタブ）`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gray-900 px-2 text-sm font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400"
            >
              {v.label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** 表・リスト内の商品リンク（サムネ付き） */
function PLink({ p, label }: { p: Product; label?: string }) {
  return (
    <a
      href={p.href}
      {...EXT}
      className="inline-flex items-center gap-1.5 rounded py-0.5 font-semibold text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <img
        src={`${IMG_BASE}${p.img}`}
        alt=""
        loading="lazy"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded border border-gray-200 bg-white object-contain"
      />
      <span>{label ?? p.short}</span>
    </a>
  );
}

/** メインCTA（台風・水害対策一覧） */
function MainCta({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <aside aria-label="商品一覧への案内" className="my-10 overflow-hidden rounded-2xl border-2 border-gray-900 bg-white">
      <div className="bg-gray-900 px-5 py-2 text-xs font-bold tracking-widest text-white">{eyebrow}</div>
      <div className="p-5 sm:p-6">
        <p className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">{body}</p>
        <a
          href={CTA.taifu.href}
          {...EXT}
          className="mt-4 inline-flex min-h-[56px] w-full items-center justify-center rounded-xl bg-gray-900 px-6 text-base font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400 sm:w-auto"
        >
          {CTA.taifu.label}を見る（GC-select）→
        </a>
      </div>
    </aside>
  );
}

/** サブCTA（一覧ページ） */
function SubCta({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <a
      href={href}
      {...EXT}
      className="group my-4 flex min-h-[64px] items-center justify-between gap-3 rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 transition hover:border-gray-900 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <span>
        <span className="block text-base font-bold text-gray-900 group-hover:underline">{label}を見る</span>
        <span className="block text-xs text-gray-600">{note}</span>
      </span>
      <span aria-hidden="true" className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-sm font-bold text-white">
        →
      </span>
    </a>
  );
}

function SisterLink({ href, title, note }: { href: string; title: string; note: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="my-4 flex items-center gap-3 rounded-xl border border-dashed border-gray-400 bg-white px-4 py-3 text-sm transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400"
    >
      <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-[11px] font-bold text-gray-700">姉妹サイト</span>
      <span>
        <span className="block font-bold text-gray-900 underline decoration-gray-400 underline-offset-2">{title}</span>
        <span className="block text-xs text-gray-600">{note}</span>
      </span>
    </a>
  );
}

function TableWrap({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="bg-gray-900 px-4 py-2 text-left text-sm font-bold text-white">{caption}</caption>
        {children}
      </table>
    </div>
  );
}

const TH = "border-b border-gray-400 bg-gray-100 px-3 py-2.5 text-sm font-bold text-gray-900";
const TD = "border-b border-gray-200 px-3 py-3 align-top text-[15px] leading-7 text-gray-900";

/* =========================================================
   メタデータ・構造化データ
   ========================================================= */
export const metadata: Metadata = {
  title: `${TITLE} | 作業用品ナビ`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "作業用品ナビ",
    locale: "ja_JP",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
    images: [{ url: `${SITE}${IMG_BASE}6300046023.jpg`, width: 1200, height: 1200, alt: "シェアする防災セット 30人分" }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "企業の防災備蓄は法律で義務づけられていますか？",
    a: "全国一律で備蓄を義務づけた法律はありません。東京都帰宅困難者対策条例は従業員3日分の備蓄を求めていますが、努力義務で罰則はありません。一方で、労働契約法第5条の安全配慮義務はすべての使用者に課される法的義務。災害時に従業員を守る備えが不十分なら、その点が問われるおそれがあります。",
  },
  {
    q: "東京都以外の会社にも備蓄は必要ですか？",
    a: "必要と考えるのが実務的です。内閣府のガイドラインは、大規模地震で被災する可能性のある全ての事業者を備蓄の対象としています。大阪市防災・減災条例のように、事業者に防災資機材の整備などを求める条例を持つ自治体もあります。所在地の条例もあわせて確認してください。",
  },
  {
    q: "従業員1人あたり何をどれだけ備蓄すればいいですか？",
    a: "3日分として、水は1人1日3リットルで計9リットル、主食は1日3食で計9食、毛布は1人1枚が目安です。簡易トイレは東京都の目安で1日5回分、計15回分。来客など外部の帰宅困難者向けに、1割程度を上乗せすることも国のガイドラインに示されています。",
  },
  {
    q: "パートやアルバイトの分も必要ですか？",
    a: "内閣府のガイドラインは、正規・非正規を問わず事業所内で勤務する全従業員を対象としています。シフト制の職場では、在館人数が最も多い時間帯を基準に数量を決めるのが安全です。",
  },
  {
    q: "2026年11月に防災庁ができると、企業の備蓄は義務になりますか？",
    a: "2026年10月時点で、防災庁の設置によって民間企業に備蓄を義務づける規定は確認できません。ただし防災庁は事前防災の推進を掲げており、国では事業継続ガイドラインの改定に向けた検討も進んでいます。備えている企業が評価される方向へ進むとみて、早めに整えておくのが得策です。",
  },
  {
    q: "企業の備蓄で一番不足しやすいものは何ですか？",
    a: "トイレです。内閣府の2026年3月公表の調査では、中堅企業で簡易・携帯トイレを3日分以上備えているのは32.1%にとどまり、37.1%は備蓄がありませんでした。飲料水や食料より後回しにされやすい品目です。",
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    image: [`${SITE}${IMG_BASE}6300046023.jpg`],
    author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE}/articles` },
      { "@type": "ListItem", position: 3, name: "企業の防災備蓄は義務？", item: PAGE_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const TOC = [
  { id: "sec1", label: "結論：企業の防災備蓄は「義務」なのか" },
  { id: "sec2", label: "2026年の動き：防災庁の発足と国の指針" },
  { id: "sec3", label: "1人あたりの必要量と人数別早見表" },
  { id: "sec4", label: "実態：多くの企業で足りていないもの" },
  { id: "sec5", label: "トイレの備蓄：3種類の組み合わせ方" },
  { id: "sec6", label: "防災セットの選び方：4つの型" },
  { id: "sec7", label: "電源と情報：停電中の安否確認" },
  { id: "sec8", label: "救護・救助用品：待機中のけがと混乱に" },
  { id: "sec9", label: "保管と期限管理：備蓄を運用する5つのルール" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
];

const TIMELINE: { date: string; text: string }[] = [
  { date: "2025年12月", text: "国の首都直下地震対策検討ワーキンググループが報告書を公表。1都4県で最大約840万人の帰宅困難者、うち約250万人が要配慮者と推計。防災庁の基本方針も閣議決定" },
  { date: "2026年1月", text: "内閣府が帰宅困難者対策のガイドラインを改定。名称を改め、地震以外（暴風・豪雨・停電など）で帰宅困難者が出る場面も対象に" },
  { date: "2026年3月", text: "内閣府「企業の事業継続及び防災の取組に関する実態調査」公表。中堅企業の備蓄、特にトイレと毛布の不足が明らかに" },
  { date: "2026年7月", text: "防災庁設置法が成立・公布。内閣府は事業継続ガイドラインの改定に向けた検討会を開始" },
  { date: "2026年9月25日", text: "防災庁の発足日を11月2日とすることを閣議決定。定員352人、内閣府の防災部局を改組" },
  { date: "2026年11月2日", text: "防災庁が発足（予定）。首相をトップに、事前防災から復旧・復興までを一貫して担う" },
];

const QTY_ROWS: { n: number; water: string; food: string; blanket: string; toilet: string }[] = [
  { n: 10, water: "99L", food: "99食", blanket: "11枚", toilet: "165回分" },
  { n: 30, water: "297L", food: "297食", blanket: "33枚", toilet: "495回分" },
  { n: 50, water: "495L", food: "495食", blanket: "55枚", toilet: "825回分" },
  { n: 100, water: "990L", food: "990食", blanket: "110枚", toilet: "1,650回分" },
];

const STOCK_STATS: { item: string; large: number; mid: number }[] = [
  { item: "飲料水", large: 66.1, mid: 43.0 },
  { item: "食料品", large: 65.3, mid: 41.4 },
  { item: "簡易・携帯トイレ", large: 55.7, mid: 32.1 },
];

/* =========================================================
   ページ本体
   ========================================================= */
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 pb-20 pt-6 text-gray-900 sm:px-6">
      {JSON_LD.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <nav aria-label="パンくずリスト" className="mb-5 text-xs text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="underline-offset-2 hover:underline">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/articles" className="underline-offset-2 hover:underline">
              記事一覧
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-700">企業の防災備蓄は義務？</li>
        </ol>
      </nav>

      <header className="overflow-hidden rounded-2xl bg-gray-900 text-white">
        <div className="p-6 sm:p-8">
          <p className="inline-block rounded bg-white px-2 py-0.5 text-xs font-bold text-gray-900">防災備蓄・BCP</p>
          <h1 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">{TITLE}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {["総務・BCP担当向け", "防災庁11月発足", "2026年改定ガイドライン", "人数別の必要量早見表"].map((c) => (
              <span key={c} className="rounded-full border border-gray-500 px-3 py-1 text-xs font-medium text-gray-100">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-300">
            公開日：<time dateTime={PUBLISHED}>2026年10月9日</time>　最終更新日：
            <time dateTime={UPDATED}>2026年10月9日</time>　文：作業用品ナビ編集部
          </p>
        </div>
      </header>

      <section className="mt-8 space-y-4 text-[16px] leading-[1.95]">
        <p>
          「うちの会社も、防災備蓄をしないといけないのか」。総務やBCPの担当になると、まずこの疑問にぶつかります。調べると「義務」「努力義務」「推奨」と書き方がばらばらで、社内でどう説明すればいいか迷う方も多いはずです。
        </p>
        <p>
          この記事では、条例と法律の根拠を整理したうえで、<Mk>何を・何人分・どれだけ</Mk>
          そろえればよいかを数字で示します。11月2日に発足する防災庁、2026年1月に改定された内閣府のガイドライン、3月公表の企業調査も反映しました。
        </p>
      </section>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-2 text-sm font-bold text-gray-900">この記事が役に立つ人</p>
        <ul className="space-y-1.5 text-sm leading-relaxed text-gray-700">
          <li>・会社の防災備蓄やBCPを任され、法的な位置づけを社内に説明したい総務・人事担当</li>
          <li>・従業員数に応じた備蓄量を出して、稟議や予算化を進めたい</li>
          <li>・水と食料は用意したが、トイレや電源、救護用品が手つかずになっている</li>
        </ul>
      </div>

      <section aria-labelledby="conclusion" className="mt-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 sm:p-6">
        <h2 id="conclusion" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <span className="rounded bg-gray-900 px-2 py-0.5 text-xs text-white">結論</span>
          企業の防災備蓄は「努力義務＋安全配慮義務」で、実質的に必要
        </h2>
        <ol className="mt-4 space-y-3 text-[15px] leading-relaxed">
          {[
            "全国一律に備蓄を義務づけた法律はない。東京都帰宅困難者対策条例の「3日分の備蓄」は努力義務で、罰則もない。",
            "ただし労働契約法第5条の安全配慮義務は、従業員を1人でも雇えば発生する法的義務。災害への備えもその判断材料になり得る。",
            "目安は全従業員の3日分。水9L・主食9食・毛布1枚・トイレ15回分が1人あたりの基本で、外部の帰宅困難者向けに1割を上乗せ。",
            "国の最新調査では、中堅企業の約4割がトイレを備蓄していない。水・食料の次はトイレから埋めるのが効率的。",
            "防災庁の発足で備蓄が義務化されるわけではない。それでも事前防災の重視は確実で、備えのある企業が評価される流れにある。",
          ].map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>

      <MainCta
        eyebrow="GC-select｜防災・BCP用品"
        title="トイレ・防災セット・電源・救護用品を、用途別にまとめて確認"
        body="従業員数と在館人数のメモを手元に置いて、特集ページから必要な品目を拾っていくと選定が早く進みます。"
      />

      <nav aria-label="目次" className="my-10 rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-3 text-sm font-bold text-gray-900">目次</p>
        <ol className="space-y-2 text-sm">
          {TOC.map((t, i) => (
            <li key={t.id} className="flex gap-2">
              <span className="w-6 shrink-0 font-bold text-gray-400">{String(i + 1).padStart(2, "0")}</span>
              <a href={`#${t.id}`} className="text-gray-800 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="text-[16px] leading-[1.95]">
        {/* ================= 01 ================= */}
        <H2 id="sec1" num="01">
          結論：企業の防災備蓄は「義務」なのか
        </H2>
        <p>
          企業の備蓄をめぐる決まりは、強さの違う3つの層に分かれています。「条例の努力義務」「法律上の義務」「国の指針」。これを混ぜて語ると、「義務だから必ずやる」「努力義務だからやらなくていい」のどちらにも話が振れてしまいます。
        </p>
        <TableWrap caption="企業の防災備蓄にかかわる根拠の整理">
          <thead>
            <tr>
              <th className={TH}>根拠</th>
              <th className={TH}>求めていること</th>
              <th className={TH}>強さ</th>
              <th className={TH}>罰則</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} font-bold`}>東京都帰宅困難者対策条例（2013年4月施行）</td>
              <td className={TD}>従業者の施設内待機のため、3日分の飲料水・食料などを備蓄するよう努める（第7条第2項）</td>
              <td className={TD}>努力義務</td>
              <td className={TD}>なし</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>大阪市防災・減災条例（2015年2月施行）</td>
              <td className={TD}>事業所の安全確保や防災資機材の整備、事業継続計画の作成など</td>
              <td className={TD}>努力義務</td>
              <td className={TD}>なし</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>労働契約法 第5条（安全配慮義務）</td>
              <td className={TD}>労働者が生命・身体等の安全を確保しつつ働けるよう、必要な配慮をする</td>
              <td className={TD}>法的義務</td>
              <td className={TD}>刑事罰はないが、違反があれば損害賠償の対象になり得る</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>内閣府 帰宅困難者対策ガイドライン（2026年1月改定）</td>
              <td className={TD}>全従業員の3日分の備蓄を目安に、外部向けに1割程度を上乗せ</td>
              <td className={TD}>指針</td>
              <td className={TD}>なし</td>
            </tr>
          </tbody>
        </TableWrap>
        <p>
          罰則がないからといって、備えがなくてよいことにはなりません。安全配慮義務の裁判では、危険を予見できたか、避けるための措置をとっていたかが争点になります。東日本大震災でも、津波で従業員が亡くなった事案で企業の安全配慮義務が争われました（七十七銀行女川支店事件など）。<Mk>「国や都が目安を示している備え」をしていない状態</Mk>
          は、説明がつきにくい弱点になり得ます。
        </p>
        <PointBox title="社内説明は「努力義務＋安全配慮義務」の2本立てで">
          <p>
            「条例上は努力義務で罰則はない。ただし安全配慮義務は法律上の義務で、国の指針が示す3日分の備蓄はその水準の目安になる」。経営層への説明は、この順番で組み立てると誤解が生じにくくなります。なお、本記事は法的助言ではありません。個別の判断は顧問弁護士などに確認してください。
          </p>
        </PointBox>
        <H3>条例のない地域の会社はどう考える？</H3>
        <p>
          東京都や大阪市のような条例がない地域でも、備えが不要になるわけではありません。内閣府のガイドラインは備蓄の対象を「大規模地震により被災の可能性がある全ての事業者」とし、官公庁も含めています。2026年1月の改定では、暴風や豪雨、停電などで交通が止まる場面も対象に加わりました。地震の少ない地域でも、台風や大雪で従業員が帰れなくなる日は起こり得ます。所在地の条例を確かめたうえで、自社の立地で起こりやすい災害から備蓄の優先順位を決めていきましょう。
        </p>

        {/* ================= 02 ================= */}
        <H2 id="sec2" num="02">
          2026年の動き：防災庁の発足と、国の指針・調査の更新
        </H2>
        <p>
          2026年は、企業防災をめぐる国の動きが集中した年です。担当者として押さえておきたい出来事を時系列にまとめました。
        </p>
        <ol className="relative my-8 space-y-5 border-l-4 border-gray-900 pl-6">
          {TIMELINE.map((t) => (
            <li key={t.date} className="relative">
              <span aria-hidden="true" className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-gray-900 ring-2 ring-gray-900" />
              <p className="text-sm font-bold text-gray-900">{t.date}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-gray-700">{t.text}</p>
            </li>
          ))}
        </ol>
        <H3>防災庁で、企業の備蓄は義務になるのか</H3>
        <p>
          防災庁は、内閣府の防災部門を発展的に改組した組織です。首相をトップに防災相を置き、平時の事前防災から発災時の対応、復旧・復興までを一貫して担います。他の省庁に対する勧告権も持つ「司令塔」です。
        </p>
        <p>
          一方で、2026年10月時点で、防災庁の設置によって民間企業に備蓄を義務づける規定は確認できません。変わるのは国の体制の側です。とはいえ、内閣府はすでに事業継続ガイドラインの改定に向けた検討会を7月に立ち上げ、BCPに取り組む企業が社会的に評価されるための環境づくりも議題に挙げています。<Mk>「備えている会社が選ばれる」方向</Mk>
          に進むと見て、今のうちに整えておくのが得策でしょう。
        </p>
        <H3>2026年1月版ガイドラインで押さえたい3点</H3>
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            { t: "地震以外も対象に", d: "2026年1月の改定で、暴風・豪雨・積雪・停電・通信障害、遠地津波などで交通が止まる場面も対象として整理された。" },
            { t: "電源の提供", d: "一時滞在施設では、モバイルバッテリーや電源の提供にも可能な範囲で対応することが望ましいとしている。" },
            { t: "3日分以上も検討", d: "企業の備蓄は3日分を目安としつつ、3日分以上の備蓄も検討するよう示している。" },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">{c.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
        <p>
          ガイドラインの冒頭では、首都直下地震で発生する帰宅困難者約840万人のうち、約250万人が高齢者や障害者などの要配慮者と推計されています。社内にも、持病のある人や妊娠中の人、家族の介護を担う人がいるはず。備蓄を「平均的な従業員」だけで考えず、女性向けの衛生用品や、休める場所を区切るパーテーションも検討に入れておくと、待機の3日間を乗り切りやすくなります。
        </p>
        <div className="my-4 flex flex-col gap-1 rounded-xl bg-gray-50 p-4 text-sm">
          <p className="font-bold text-gray-900">要配慮者への備えの例</p>
          <PLink p={P.s_otasuke_w} />
          <PLink p={P.r_partition} />
        </div>

        {/* ================= 03 ================= */}
        <H2 id="sec3" num="03">
          何をどれだけ？1人あたりの必要量と人数別の早見表
        </H2>
        <p>
          備蓄量の基準は、内閣府のガイドラインと東京都のマニュアルでほぼ共通しています。対象は、正社員・パート・派遣などの雇用形態を問わず、事業所内で働く全従業員です。
        </p>
        <TableWrap caption="従業員1人あたりの3日分の目安">
          <thead>
            <tr>
              <th className={TH}>品目</th>
              <th className={TH}>1日あたり</th>
              <th className={TH}>3日分</th>
              <th className={TH}>関連する商品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} font-bold`}>水（ペットボトル）</td>
              <td className={TD}>3L</td>
              <td className={TD}>9L</td>
              <td className={TD}>—（別途調達）</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>主食（アルファ化米・乾パンなど）</td>
              <td className={TD}>3食</td>
              <td className={TD}>9食</td>
              <td className={TD}>
                <PLink p={P.s_iris40} />
              </td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>毛布・保温用品</td>
              <td className={TD}>—</td>
              <td className={TD}>1人1枚</td>
              <td className={TD}>
                <PLink p={P.r_sleep} />
              </td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>簡易トイレ</td>
              <td className={TD}>5回分</td>
              <td className={TD}>15回分</td>
              <td className={TD}>
                <PLink p={P.t_500} />
              </td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>ラジオ・ライト・電池・救急用品など</td>
              <td className={TD}>—</td>
              <td className={TD}>物資ごとに算定</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.p_radio} />
                  <PLink p={P.s_share30m} />
                </div>
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">
          出典：内閣府「災害発生時における大規模な帰宅困難者等の発生への対策に関するガイドライン」（2026年1月）参考資料、東京都「東京事業所防災実践マニュアル」（簡易トイレの数量）
        </p>

        <H3>人数別早見表（外部の帰宅困難者向け1割を含む）</H3>
        <TableWrap caption="従業員数別・3日分の備蓄量（1割上乗せ後）">
          <thead>
            <tr>
              <th className={TH}>従業員数</th>
              <th className={TH}>水</th>
              <th className={TH}>主食</th>
              <th className={TH}>毛布</th>
              <th className={TH}>簡易トイレ</th>
            </tr>
          </thead>
          <tbody>
            {QTY_ROWS.map((r) => (
              <tr key={r.n}>
                <td className={`${TD} whitespace-nowrap font-bold`}>{r.n}人</td>
                <td className={TD}>{r.water}</td>
                <td className={TD}>{r.food}</td>
                <td className={TD}>{r.blanket}</td>
                <td className={`${TD} font-bold`}>{r.toilet}</td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
        <p>
          たとえば30人の事業所なら、トイレは30人×15回＝450回分に1割を足して495回分。<Mk>1回分×500個入りのセット1つでほぼ収まる</Mk>
          計算です。シフト制の職場では、在籍人数ではなく「在館人数が最も多い時間帯」を基準にすると、足りなくなる心配が減ります。
        </p>
        <FeaturedCard p={P.t_500} lead="30人規模の3日分＋外部向け1割に" />

        <H3>基本の4品目に上乗せを検討したいもの</H3>
        <p>
          ガイドラインは、水・主食・毛布・トイレに加え、事業継続の観点から企業ごとに必要な備蓄品を検討するよう求めています。例として挙げられている品目を、使い方とあわせて整理しました。
        </p>
        <TableWrap caption="上乗せを検討したい備蓄品（ガイドラインの例示をもとに整理）">
          <thead>
            <tr>
              <th className={TH}>品目の例</th>
              <th className={TH}>想定する使い方</th>
              <th className={TH}>関連する商品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} font-bold`}>携帯ラジオ・懐中電灯・乾電池</td>
              <td className={TD}>停電中の情報収集と明かり</td>
              <td className={TD}>
                <PLink p={P.p_lantern} />
              </td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>非常用の電源</td>
              <td className={TD}>通信機器や照明の維持。発電機の燃料は保管量によって消防署への手続きが必要な場合がある</td>
              <td className={TD}>
                <PLink p={P.p_master1000} label="燃料不要のポータブル電源（MASTER1000）" />
              </td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>ヘルメット・軍手・工具類</td>
              <td className={TD}>閉じ込めからの救出や片付け</td>
              <td className={TD}>
                <PLink p={P.r_kit_b} />
              </td>
            </tr>
            <tr>
              <td className={`${TD} font-bold`}>敷物・救急医療薬品類</td>
              <td className={TD}>床で休む場所づくり、軽いけがの手当て</td>
              <td className={TD}>
                <PLink p={P.s_share10mm} />
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">防災セットの内容物は製品ごとに異なります。敷物や救急用品が含まれるかは商品ページで確認してください。</p>

        {/* ================= 04 ================= */}
        <H2 id="sec4" num="04">
          実態：多くの企業で足りていないのは「トイレ」と「毛布」
        </H2>
        <p>
          内閣府が2026年3月に公表した企業調査では、大企業は飲料水・食料・トイレ・毛布のいずれも備蓄率が7割を超えた一方、中堅企業は品目ごとに5〜8割とばらつきました。特に差が大きいのがトイレです。
        </p>
        <figure className="my-6 rounded-xl border border-gray-200 bg-white p-5">
          <figcaption className="mb-4 text-sm font-bold text-gray-900">全従業員分を3日分以上備蓄している企業の割合</figcaption>
          <div className="space-y-4">
            {STOCK_STATS.map((s) => (
              <div key={s.item}>
                <p className="mb-1 text-sm font-bold text-gray-800">{s.item}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-14 shrink-0 text-xs text-gray-500">大企業</span>
                    <div className="h-4 flex-1 rounded bg-gray-100">
                      <div className="h-4 rounded bg-gray-900" style={{ width: `${s.large}%` }} />
                    </div>
                    <span className="w-12 shrink-0 text-right text-xs font-bold">{s.large}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-14 shrink-0 text-xs text-gray-500">中堅企業</span>
                    <div className="h-4 flex-1 rounded bg-gray-100">
                      <div className="h-4 rounded bg-gray-400" style={{ width: `${s.mid}%` }} />
                    </div>
                    <span className="w-12 shrink-0 text-right text-xs font-bold">{s.mid}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-gray-500">
            出典：内閣府「令和7年度 企業の事業継続及び防災の取組に関する実態調査（概要）」2026年3月。毛布は日数を問わない「あり」の割合で、大企業76.0%・中堅企業46.5%。
          </p>
        </figure>
        <p>
          中堅企業では、トイレを全く備蓄していない企業が37.1%、毛布がない企業は50.2%にのぼります。何らかの備蓄をしている企業のうち、来客など従業員以外の分まで上乗せしているのは3割程度でした。水と食料を用意して「備蓄は済んだ」と考えがちな点が、数字からも読み取れます。
        </p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.t_kyowa} />
          <ProductCard p={P.r_sleep} />
          <ProductCard p={P.s_share30m} />
        </div>

        {/* ================= 05 ================= */}
        <H2 id="sec5" num="05">
          トイレの備蓄：「携帯トイレ」「組立トイレ」「目隠し」の3点で考える
        </H2>
        <p>
          大地震では、断水や排水管の損傷で、建物の水洗トイレが使えなくなることがあります。便器が無事なら、袋と凝固剤の携帯トイレを便器にかぶせて使えます。便器そのものが使えない、あるいは数が足りない場合は、組み立て式の便器が必要です。さらに数日の待機では、女性や来客が安心して使える目隠しも欠かせません。
        </p>
        <TableWrap caption="トイレ備蓄の3タイプと役割">
          <thead>
            <tr>
              <th className={TH}>タイプ</th>
              <th className={TH}>役割</th>
              <th className={TH}>数量の考え方</th>
              <th className={TH}>主な商品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>携帯トイレ（袋＋凝固剤）</td>
              <td className={TD}>既存の便器や組立便器にかぶせて使う。数量の主役</td>
              <td className={TD}>1人1日5回×人数×日数</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.t_500} />
                  <PLink p={P.t_seiza} />
                  <PLink p={P.t_12} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>組立・簡易トイレ（便器）</td>
              <td className={TD}>便器が壊れた・足りないときに、座れる場所をつくる</td>
              <td className={TD}>フロアやトイレ待ちの人数に応じて複数台</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.t_kumitate} />
                  <PLink p={P.t_oritatami} />
                  <PLink p={P.t_puradan} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>目隠し（テント・仕切り）</td>
              <td className={TD}>屋外や会議室に臨時の個室をつくる</td>
              <td className={TD}>組立トイレの台数に合わせる</td>
              <td className={TD}>
                <PLink p={P.t_tent} />
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.t_kumitate} />
          <ProductCard p={P.t_oritatami} />
          <ProductCard p={P.t_tent} />
        </div>
        <p className="mt-6 text-sm font-bold text-gray-900">そのほかのトイレ備蓄</p>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.t_seiza} />
          <MiniRow p={P.t_12} />
          <MiniRow p={P.t_clean100} />
          <MiniRow p={P.t_marugoto} />
          <MiniRow p={P.t_puradan} />
          <MiniRow p={P.t_benri} />
          <MiniRow p={P.t_dokodemo} />
          <MiniRow p={P.t_suisen} />
        </div>
        <PointBox title="保管場所を分けると「使えない備蓄」を防げる">
          <p>
            内閣府のガイドラインは、備蓄品の保管場所を分散させることや、従業員へ配っておくことの検討を求めています。携帯トイレは軽くてかさばらないので、各フロアや個人のデスクに小分けして置くのに向いた品目です。
          </p>
        </PointBox>
        <SubCta href={CTA.toilet.href} label={CTA.toilet.label} note="携帯トイレ・組立トイレ・テントをGC-selectで比較" />

        {/* ================= 06 ================= */}
        <H2 id="sec6" num="06">
          防災セットの選び方：共有型・デスク常備型・個人リュック・衛生セット
        </H2>
        <p>
          水と食料、トイレ以外の細かな物資は、防災セットでまとめてそろえると管理が楽になります。会社で選ぶときは「誰が・どこで使うか」で4つの型に分けると、重複買いや抜けが起きにくくなります。
        </p>
        <TableWrap caption="会社向け防災セットの4つの型">
          <thead>
            <tr>
              <th className={TH}>型</th>
              <th className={TH}>向く使い方</th>
              <th className={TH}>代表的な商品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>共有型（人数単位）</td>
              <td className={TD}>部署・フロア単位で1セット。管理者を決めて保管</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.s_share30m} />
                  <PLink p={P.s_share10ml} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>デスク常備型（A4サイズ）</td>
              <td className={TD}>個人の机や書庫に入れておき、在席中の被災に備える</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.s_a4_30} />
                  <PLink p={P.s_abo49} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>個人リュック型</td>
              <td className={TD}>帰宅開始時や移動時に持ち出す。営業車や現場事務所にも</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.s_iris31} />
                  <PLink p={P.s_acty37} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>衛生セット</td>
              <td className={TD}>断水中の清潔の維持。女性向けを分けて用意</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.s_otasuke} />
                  <PLink p={P.s_otasuke_w} />
                </div>
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <FeaturedCard p={P.s_share30m} lead="30人規模の部署・フロアに1セット" />
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.s_a4_30} />
          <ProductCard p={P.s_iris40} />
          <ProductCard p={P.s_otasuke_w} />
        </div>
        <p className="mt-6 text-sm font-bold text-gray-900">人数・置き場所に合わせて選べるバリエーション</p>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.s_share10ml} />
          <MiniRow p={P.s_share10mm} />
          <MiniRow p={P.s_share10sl} />
          <MiniRow p={P.s_share10ss} />
          <MiniRow p={P.s_a4_25} />
          <MiniRow p={P.s_a4_20} />
          <MiniRow p={P.s_a4_12} />
          <MiniRow p={P.s_a4_ruck12} />
          <MiniRow p={P.s_abo49} />
          <MiniRow p={P.s_iris27} />
          <MiniRow p={P.s_iris31} />
          <MiniRow p={P.s_iris_2p44} />
          <MiniRow p={P.s_acty37} />
          <MiniRow p={P.s_acty25} />
          <MiniRow p={P.s_dry17} />
          <MiniRow p={P.s_otasuke} />
        </div>
        <PointBox title="従業員自身の備えも呼びかける">
          <p>
            内閣府のガイドラインは、企業だけでなく従業員自らも、常備薬や携帯電話用の電源、歩きやすい靴などを職場に置いておくよう勧めています。会社の備蓄と個人の備えを組み合わせると、予算を抑えつつ抜けを減らせます。
          </p>
        </PointBox>
        <SubCta href={CTA.bousai.href} label={CTA.bousai.label} note="共有型・A4型・リュック型をGC-selectでまとめて比較" />

        <MainCta
          eyebrow="GC-select｜防災・BCP用品"
          title="トイレと防災セットが決まったら、特集ページで在庫を確認"
          body="人数分をそろえる品目は、納期の確認も含めて早めに手配しておくと安心です。台風・水害への備えも同じページから探せます。"
        />

        {/* ================= 07 ================= */}
        <H2 id="sec7" num="07">
          電源と情報：停電中も安否確認と情報収集を止めない
        </H2>
        <p>
          待機中の3日間、従業員が最も気にするのは家族の安否と交通の情報です。内閣府のガイドラインは、備蓄の「特に必要性が高いもの」に携帯ラジオ・懐中電灯・乾電池を挙げ、従業員自身にも携帯電話用の電源を備えるよう勧めています。現行のガイドラインは、一時滞在施設でモバイルバッテリーや電源を提供することにも触れています。
        </p>
        <div className="my-6 rounded-xl bg-gray-900 p-5 text-white">
          <p className="text-sm font-bold">計算例：30人のスマートフォンを3日間充電する</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-100">
            <li>・1台1回の充電を約15Whと仮定 → 30人×1日1回×3日＝1,350Wh</li>
            <li>・変換ロスを見込んで0.8で割ると、必要な容量は約1,700Wh</li>
            <li>・2kWh級の大容量機1台か、中型機を複数台に分けて配置するのが目安</li>
          </ul>
          <p className="mt-3 text-xs text-gray-300">1台あたりの電力量と係数0.8は編集部の仮定値です。実際は機種の表示や仕様で確認してください。</p>
        </div>
        <TableWrap caption="電源・情報機器の使い分け">
          <thead>
            <tr>
              <th className={TH}>機器</th>
              <th className={TH}>特徴（確認できた仕様）</th>
              <th className={TH}>向く役割</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.p_master2200} /></td>
              <td className={TD}>MASTERシリーズの大型機。シリーズは停電時の自動切替（M-UPS）をうたう</td>
              <td className={TD}>本部・受付のスマホ充電、通信機器</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_master1800} /></td>
              <td className={TD}>MASTERシリーズの1800クラス</td>
              <td className={TD}>フロアごとの充電拠点</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_master1000} /></td>
              <td className={TD}>MASTERシリーズの1000クラス</td>
              <td className={TD}>小規模事務所の1台目</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_inf600} /></td>
              <td className={TD}>定格600W・容量560Wh、リン酸鉄リチウム</td>
              <td className={TD}>分散配置用の中型機</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_inf_plus600} /></td>
              <td className={TD}>INFINITYシリーズのPLUSモデル</td>
              <td className={TD}>分散配置用の中型機</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_b2000} /></td>
              <td className={TD}>固体電池を採用</td>
              <td className={TD}>仕様を確認のうえ大型機の候補に</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_200w} /></td>
              <td className={TD}>153.6Wh、パススルー対応</td>
              <td className={TD}>受付の常設充電スポット</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_radio} /></td>
              <td className={TD}>太陽光・手回し充電のラジオライト</td>
              <td className={TD}>情報収集と非常灯</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_lantern} /></td>
              <td className={TD}>4WAY電源のラジオ付きランタン</td>
              <td className={TD}>待機スペースの明かり</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.p_akarin} /></td>
              <td className={TD}>あかリン専用のソーラー電源ユニット</td>
              <td className={TD}>対応機器を使っている現場向け</td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">仕様は販売店・量販店の掲載情報によるもの。容量・出力が空欄の機種は商品ページで確認してください。</p>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.p_master2200} />
          <ProductCard p={P.p_inf600} />
          <ProductCard p={P.p_radio} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.p_master1800} />
          <MiniRow p={P.p_master1000} />
          <MiniRow p={P.p_inf_plus600} />
          <MiniRow p={P.p_b2000} />
          <MiniRow p={P.p_200w} />
          <MiniRow p={P.p_lantern} />
          <MiniRow p={P.p_akarin} />
        </div>
        <SubCta href={CTA.battery.href} label={CTA.battery.label} note="ポータブル電源・ラジオ・ライトをGC-selectで探す" />
        <SisterLink
          href={`${HEAT}/power-outage-heatstroke-guide`}
          title="停電時の熱中症対策完全ガイド（熱中症対策ナビ）"
          note="夏の停電で待機するときの暑さ対策を、熱中症の視点でまとめています"
        />

        {/* ================= 08 ================= */}
        <H2 id="sec8" num="08">
          救護・救助用品：待機中の「けが人」と「混乱」に備える
        </H2>
        <p>
          大地震の直後、行政は救命・救助や消火を最優先にします。ガイドラインが想定するのは、発災から3日目までは行政がその対応に集中し、4日目以降に帰宅支援へ移っていく流れです。その間に社内でけが人が出ても、すぐに救急車が来るとは限りません。施設内で待機する以上、<Mk>応急の救護と、人の誘導・表示</Mk>
          は自社で回せるようにしておく必要があります。
        </p>
        <TableWrap caption="施設内待機中に必要になる救護・救助用品">
          <thead>
            <tr>
              <th className={TH}>場面</th>
              <th className={TH}>必要になること</th>
              <th className={TH}>主な商品</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>けが人の搬送</td>
              <td className={TD}>エレベーター停止時に階段で運ぶ</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.r_berca} />
                  <PLink p={P.r_tarpaulin} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>救護スペース</td>
              <td className={TD}>手当てや休養の場所を区切り、場所を示す</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.r_partition} />
                  <PLink p={P.r_sign} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>閉じ込め・救出</td>
              <td className={TD}>家具やドアに挟まれた人の救出、扉への救援表示</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.r_kit_a} />
                  <PLink p={P.r_anpi} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>誘導・点呼</td>
              <td className={TD}>停電した館内や屋外での指示出し</td>
              <td className={TD}>
                <PLink p={P.r_megaphone} />
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>夜間の待機</td>
              <td className={TD}>保温と休息、防犯</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.r_sleep} />
                  <PLink p={P.r_bojin} />
                </div>
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.r_berca} />
          <ProductCard p={P.r_partition} />
          <ProductCard p={P.r_megaphone} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.r_tarpaulin} />
          <MiniRow p={P.r_kit_a} />
          <MiniRow p={P.r_kit_b} />
          <MiniRow p={P.r_anpi} />
          <MiniRow p={P.r_sign} />
          <MiniRow p={P.r_bojin} />
        </div>
        <CautionBox title="救出作業は「安全が確保できる範囲」で">
          <p>
            余震の続く中での救出は、助けに入った人が二次被害に遭うおそれがあります。工具は安全が確保できる範囲で使い、倒壊の危険がある場所には立ち入らないこと。重いけがや意識のない人がいる場合は、つながる限り119番への通報を続けてください。
          </p>
        </CautionBox>
        <SubCta href={CTA.rescue.href} label={CTA.rescue.label} note="担架・救助工具・救護用品をGC-selectで比較" />

        {/* ================= 09 ================= */}
        <H2 id="sec9" num="09">
          保管と期限管理：備蓄を「使える状態」に保つ5つのルール
        </H2>
        <p>
          東京都の調査（2017年）では、従業員向けに水・食料を3日分以上備蓄している事業者は50.1%で、従業員規模が小さいほど備蓄が進んでいませんでした。買って終わりにせず、いざという時に取り出せる状態を保つ仕組みまで決めておくことが、備蓄の仕上げになります。
        </p>
        <ol className="my-6 space-y-3">
          {[
            { t: "置き場所を分散し、全員に知らせる", d: "1か所に集めると、そこが被災した時点ですべて使えなくなるおそれ。フロアごとに分け、場所を従業員に共有しておくことは東京都のマニュアルも求めています。" },
            { t: "管理担当と点検日を決める", d: "誰が、いつ、何を確認するかを決めておきましょう。年1回以上の訓練の日に合わせると忘れにくくなります。" },
            { t: "期限の近いものは訓練で使う", d: "期限切れの食料を災害時に配るのは慎重に、とガイドラインも注意しています。訓練で試食・試用して入れ替えるのが確実な方法。" },
            { t: "浸水しない高さに置く", d: "1階や地下に置いた備蓄は、水害で一度に使えなくなるおそれがある。台風や豪雨の多い地域では、上階への保管と止水対策をセットで考えましょう。" },
            { t: "数量の基準を毎年見直す", d: "人員の増減やテナント入居、来客数の変化で必要量は変わるもの。人数別の早見表を基準表として社内に残しておきましょう。" },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span>
                <span className="block font-bold text-gray-900">{s.t}</span>
                <span className="mt-1 block text-[15px] leading-relaxed text-gray-700">{s.d}</span>
              </span>
            </li>
          ))}
        </ol>
        <H3>訓練で備蓄を「使ってみる」</H3>
        <p>
          ガイドラインは、年1回以上の実動訓練や図上訓練で手順を確かめ、改善していくよう求めています。備蓄の点検は、この訓練に組み込むのが効率的。組立トイレを実際に組む、携帯トイレの使い方を全員で確認する、ポータブル電源で何台のスマホを充電できるか試す、担架で階段を下りてみる。使ってみて初めて「人数に対して少ない」「置き場所が遠い」と気づくことも多いものです。訓練の記録は、備えの状況を社内外に説明する材料にもなります。
        </p>
        <div className="my-4 flex flex-col gap-1 rounded-xl bg-gray-50 p-4 text-sm">
          <p className="font-bold text-gray-900">訓練で試しておきたい備蓄品</p>
          <PLink p={P.t_marugoto} />
          <PLink p={P.r_tarpaulin} />
        </div>
        <p>
          2026年9月の台風25号では、千葉県の印旛沼で堤防が決壊しました。地震だけでなく水害でも備蓄が失われ得ることを前提に、保管場所の浸水対策も見直しておくと安心です。
        </p>
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <SubCta href={CTA.taifu.href} label={CTA.taifu.label} note="備蓄倉庫を水から守る道具をGC-selectで探す" />
          <SubCta href={CTA.shisuiban.href} label={CTA.shisuiban.label} note="倉庫・備蓄室の入口を止める止水板を比較" />
        </div>
        <p className="text-sm">
          入口ごとの止水板・土のうの必要数は
          <Link href="/articles/kigyo-suigai-taisaku-goods" className="font-semibold underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900">
            企業の水害対策グッズの記事
          </Link>
          で、備蓄品を整理して置く棚は
          <Link href="/articles/saigai-bichiku-rack-trusco" className="font-semibold underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900">
            災害備蓄ラックの選び方
          </Link>
          で詳しく解説しています。
        </p>
        <SisterLink
          href={`${HEAT}/disaster-stockpile-summer-storage-guide`}
          title="防災備蓄の夏の保管方法（熱中症対策ナビ）"
          note="高温になりやすい倉庫での保管の注意点を別の記事で紹介"
        />

        {/* ================= FAQ ================= */}
        <H2 id="faq" num="Q&A">
          よくある質問
        </H2>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="flex gap-3 font-bold text-gray-900">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                  Q{i + 1}
                </span>
                <span>{f.q}</span>
              </p>
              <p className="mt-3 flex gap-3 text-[15px] leading-relaxed text-gray-700">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-xs font-bold text-gray-900">
                  A
                </span>
                <span>{f.a}</span>
              </p>
            </div>
          ))}
        </div>

        {/* ================= まとめ ================= */}
        <H2 id="summary" num="✓">
          まとめ：「義務かどうか」より「説明できる備え」を
        </H2>
        <p>
          企業の防災備蓄は、条例上は努力義務にとどまります。それでも、従業員の安全に配慮する義務は法律で定められており、国や自治体は3日分という具体的な目安を示しています。防災庁の発足を控えた今、問われるのは「義務かどうか」より、従業員と来客を守る備えを数字で説明できるかどうかです。
        </p>
        <ol className="my-6 space-y-3">
          {[
            "根拠は「条例の努力義務」「安全配慮義務」「国の指針」の3層で整理する",
            "全従業員の3日分（水9L・主食9食・毛布1枚・トイレ15回分）に、外部向け1割を上乗せする",
            "不足しやすいトイレと毛布から先に埋め、電源・ラジオ・救護用品で待機の3日間を支える",
            "分散保管・管理担当・訓練での入れ替えを決め、浸水しない場所に置く",
          ].map((t, i) => (
            <li key={t} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 text-[15px] leading-relaxed">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>

        <MainCta
          eyebrow="GC-select｜防災・BCP用品"
          title="人数が決まったら、足りない品目から順に確保を"
          body="早見表の数量をメモして、トイレ・防災セット・電源・救護用品の順に特集ページで確認してみてください。"
        />

        <section aria-label="商品一覧へのリンク" className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
          <p className="mb-4 text-base font-bold text-gray-900">品目ごとに一覧を開く（GC-select）</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[CTA.toilet, CTA.bousai, CTA.battery, CTA.rescue, CTA.taifu, CTA.shisuiban].map((c) => (
              <a
                key={c.href}
                href={c.href}
                {...EXT}
                className="inline-flex min-h-[56px] items-center justify-between rounded-xl bg-gray-900 px-5 text-sm font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400"
              >
                <span>{c.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <div className="my-8 rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-600">
          <p className="font-bold text-gray-800">ご利用にあたって</p>
          <p className="mt-2">
            本記事は、公的機関の公表資料と販売店の掲載情報（2026年10月時点）にもとづく一般的な情報です。法的助言ではありません。条例や制度の適用、安全配慮義務の判断は個別の事情で変わるため、必要に応じて専門家に相談してください。価格・在庫・仕様の最新情報は各商品ページで確認してください。
          </p>
        </div>

        <section aria-label="参考にした資料" className="my-8 rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-3 text-sm font-bold text-gray-900">参考にした公的資料</p>
          <ul className="space-y-1.5 text-xs leading-relaxed text-gray-600">
            {REFERENCES.map((r) => (
              <li key={r.href}>
                ・
                <a href={r.href} {...REF} className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-700">
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="関連記事" className="my-8">
          <p className="mb-3 text-base font-bold text-gray-900">関連記事</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {RELATED.filter((r) => r.href !== "").map((r) => (
              <li key={r.href}>
                {r.site === "sagyou" ? (
                  <Link
                    href={r.href}
                    className="flex min-h-[56px] items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-900"
                  >
                    <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">作業用品ナビ</span>
                    {r.title}
                  </Link>
                ) : (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener"
                    className="flex min-h-[56px] items-center gap-2 rounded-xl border border-dashed border-gray-400 bg-white px-4 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-900"
                  >
                    <span className="rounded bg-gray-200 px-2 py-0.5 text-[11px] text-gray-700">熱中症対策ナビ</span>
                    {r.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
      <SiteFooter />
    </>
  );
}
