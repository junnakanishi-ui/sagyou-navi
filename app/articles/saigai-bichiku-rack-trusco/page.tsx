/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// ============================================================
// 作業用品ナビ｜TRUSCO災害備蓄ラックの選び方
// 自己完結の page.tsx（中央レジストリなし）
// ============================================================

const SLUG = "saigai-bichiku-rack-trusco";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const PUBLISHED = "2026-10-08";
const UPDATED = "2026-10-08";
const IMG_BASE = "/products/";
const ARTICLE_IMG = `/images/articles/${SLUG}/`;

const TITLE =
  "TRUSCO災害備蓄ラックの選び方｜M1.5・M2・M3型の違いとサイズ早見表【人数から台数を逆算】";
const DESCRIPTION =
  "トラスコ中山の災害備蓄ラックをM1.5型・M2型・M3型の耐荷重、間口・奥行・高さ、単体と連結の組み合わせで比較。従業員数から必要な台数を逆算する早見表、棚割りの例、固定と点検の注意点まで、防災担当者向けにまとめました。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [{ url: `${SITE}${ARTICLE_IMG}eyecatch-ogp.jpg`, width: 1200, height: 630 }],
  },
};

// ------------------------------------------------------------
// URLヘルパー（ストア別の不変条件）
// ------------------------------------------------------------
const UTM = `utm_source=sagyou_navi&utm_medium=article&utm_campaign=${SLUG}`;

/** UTM を # フラグメントより前に挿入する（エンコード済みの値には触れない） */
function buildUrl(base: string, query: string): string {
  const i = base.indexOf("#");
  const head = i === -1 ? base : base.slice(0, i);
  const hash = i === -1 ? "" : base.slice(i);
  const sep = head.includes("?") ? "&" : "?";
  return `${head}${sep}${query}${hash}`;
}

/** Yahoo!店 signcity-yshop：既存の sc_i 等を保持し、&ea=&utm_source= の順で付与 */
function Y(url: string): string {
  const i = url.indexOf("#");
  const head = i === -1 ? url : url.slice(0, i);
  return buildUrl(url, /[?&]ea=/.test(head) ? UTM : `ea=&${UTM}`);
}

/** GREEN CROSS-select（Shopify）：パス型。既存クエリ・フラグメントは除去して UTM のみ付与 */
function G(url: string): string {
  const clean = url.split("#")[0].split("?")[0];
  return `${clean}?${UTM}`;
}

// ------------------------------------------------------------
// CTA（依頼で指定された一覧ページ）
// ------------------------------------------------------------
const CTA = {
  rack: Y(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E7%81%BD%E5%AE%B3%E5%82%99%E8%93%84%E3%83%A9%E3%83%83%E3%82%AF#CentSrchFilter1",
  ),
  bousai: Y(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E9%98%B2%E7%81%BD&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
  ),
  shisuiban: Y(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E6%AD%A2%E6%B0%B4%E6%9D%BF&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
  ),
  set: Y(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E9%98%B2%E7%81%BD%E3%82%BB%E3%83%83%E3%83%88&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
  ),
};

// ------------------------------------------------------------
// 商品データ（取得結果.xlsx 由来・URLは実URLのみ）
// ------------------------------------------------------------
type Store = "yahoo" | "gc";
type Product = {
  id: string;
  store: Store;
  name: string;
  model: string;
  tags: string[];
  point: string;
  url: string;
  img: string;
};
type RackType = "M1.5" | "M2" | "M3";
type Rack = {
  id: string;
  type: RackType;
  w: number;
  d: number;
  h: number;
  kind: "単体" | "連結";
  model: string;
};

const PRODUCTS: Record<string, Product> = {
  "232609": { id: "232609", store: "yahoo", name: "多人数用災害用トイレ 200回分", model: "SWC200", tags: ["簡易トイレ", "200回分"], point: "断水時のトイレを200回分まとめて確保。50名・3日分なら4箱が目安。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/232609.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "232609.jpg" },
  "172888": { id: "172888", store: "yahoo", name: "セットトライ 災害時用 湯わかしBOX 基本セット", model: "UWB-A1", tags: ["火を使わない", "温かい食事"], point: "火気を使わずに湯わかし・加温。火気厳禁の屋内でも使いやすい。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/172888.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "172888.jpg" },
  "233155": { id: "233155", store: "yahoo", name: "TRUSCO 災害工具セット", model: "TRC-C-SET", tags: ["救助・復旧", "工具一式"], point: "救助・復旧に使う工具を1箱に。内容は商品ページで確認を。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/233155.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "233155.jpg" },
  "218215": { id: "218215", store: "yahoo", name: "TRUSCO 災害時用ノーパンク自転車 ハザードランナー 26インチ", model: "THR5526", tags: ["ノーパンク", "26インチ"], point: "がれき・ガラス片のある道でもパンクの心配がない移動手段。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/218215.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "218215.jpg" },
  "218224": { id: "218224", store: "yahoo", name: "TRUSCO 災害時用ノーパンク自転車 ハザードランナー シティタイプ 26インチ", model: "THRC-5526", tags: ["ノーパンク", "シティタイプ"], point: "普段使いしやすいシティタイプ。平時の構内移動にも。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/218224.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "218224.jpg" },
  "218209": { id: "218209", store: "yahoo", name: "TRUSCO 災害時用ノーパンク自転車 ハザードランナー 20インチ", model: "THR5520", tags: ["ノーパンク", "20インチ"], point: "小柄な人も乗りやすい20インチ。保管スペースも小さめ。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/218209.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "218209.jpg" },
  "218180": { id: "218180", store: "yahoo", name: "TRUSCO 災害時用ノーパンク三輪自転車 ハザードランナートライ", model: "THR5503", tags: ["ノーパンク", "三輪・荷物運搬"], point: "安定感のある三輪。物資の受け取り・運搬向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/218180.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "218180.jpg" },
  "233154": { id: "233154", store: "yahoo", name: "TRUSCO 災害工具セット用ツールボックス（箱のみ）", model: "TRC-C", tags: ["工具箱のみ", "手持ち工具の整理"], point: "手持ちの工具を災害用として1箱にまとめ直したい場合に。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/233154.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "233154.jpg" },
  "232317": { id: "232317", store: "yahoo", name: "TRUSCO 非常災害用備蓄品箱 W900×D420×H370", model: "FB-9000", tags: ["備蓄品箱", "奥行420mm"], point: "奥行445mm以上の棚の最下段に収まる計算。細かい備蓄品を箱ごと管理。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/232317.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "232317.jpg" },
  "232836": { id: "232836", store: "yahoo", name: "TRUSCO 災害用テント 1.5間×2間 フレーム付き", model: "TENTS-2736", tags: ["救護所", "フレーム付き"], point: "救護・更衣・授乳など、仕切られた空間を屋外や体育館に。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/232836.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "232836.jpg" },
  "226723": { id: "226723", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1200×D471×H1800 5段 単体", model: "M3-DS6455", tags: ["300kg/段", "単体", "H1800", "奥行471"], point: "支柱4本で自立する基本の1台。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226723.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226723.jpg" },
  "226735": { id: "226735", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1200×D471×H2100 5段 単体", model: "M3-DS7455", tags: ["300kg/段", "単体", "H2100", "奥行471"], point: "支柱4本で自立する基本の1台。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226735.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226735.jpg" },
  "226736": { id: "226736", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1200×D471×H2100 5段 連結", model: "M3-DS7455B", tags: ["300kg/段", "連結", "H2100", "奥行471"], point: "単体の横に増設する連結用（単体1台が別途必要）。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226736.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226736.jpg" },
  "226724": { id: "226724", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1200×D471×H1800 5段 連結", model: "M3-DS6455B", tags: ["300kg/段", "連結", "H1800", "奥行471"], point: "単体の横に増設する連結用（単体1台が別途必要）。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226724.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226724.jpg" },
  "221591": { id: "221591", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1460×D595×H2100 5段 連結", model: "M1.5-DS7565B", tags: ["150kg/段", "連結", "H2100", "奥行595"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221591.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221591.jpg" },
  "221589": { id: "221589", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1460×D445×H2100 5段 連結", model: "M1.5-DS7545B", tags: ["150kg/段", "連結", "H2100", "奥行445"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221589.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221589.jpg" },
  "223276": { id: "223276", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1460×D450×H2100 5段 連結", model: "M2-DS7545B", tags: ["200kg/段", "連結", "H2100", "奥行450"], point: "単体の横に増設する連結用（単体1台が別途必要）。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223276.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223276.jpg" },
  "223278": { id: "223278", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1460×D600×H2100 5段 連結", model: "M2-DS7565B", tags: ["200kg/段", "連結", "H2100", "奥行600"], point: "単体の横に増設する連結用（単体1台が別途必要）。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223278.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223278.jpg" },
  "226727": { id: "226727", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1500×D471×H1800 5段 単体", model: "M3-DS6555", tags: ["300kg/段", "単体", "H1800", "奥行471"], point: "支柱4本で自立する基本の1台。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226727.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226727.jpg" },
  "221580": { id: "221580", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1460×D445×H1800 5段 連結", model: "M1.5-DS6545B", tags: ["150kg/段", "連結", "H1800", "奥行445"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221580.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221580.jpg" },
  "221593": { id: "221593", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1760×D445×H2100 5段 連結", model: "M1.5-DS7645B", tags: ["150kg/段", "連結", "H2100", "奥行445"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221593.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221593.jpg" },
  "226728": { id: "226728", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1500×D471×H1800 5段 連結", model: "M3-DS6555B", tags: ["300kg/段", "連結", "H1800", "奥行471"], point: "単体の横に増設する連結用（単体1台が別途必要）。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226728.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226728.jpg" },
  "221578": { id: "221578", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1160×D445×H1800 5段 連結", model: "M1.5-DS6445B", tags: ["150kg/段", "連結", "H1800", "奥行445"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221578.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221578.jpg" },
  "221582": { id: "221582", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1760×D445×H1800 5段 連結", model: "M1.5-DS6645B", tags: ["150kg/段", "連結", "H1800", "奥行445"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221582.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221582.jpg" },
  "221584": { id: "221584", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1160×D445×H2100 5段 単体", model: "M1.5-DS7445", tags: ["150kg/段", "単体", "H2100", "奥行445"], point: "支柱4本で自立する基本の1台。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221584.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221584.jpg" },
  "221586": { id: "221586", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1160×D595×H2100 5段 単体", model: "M1.5-DS7465", tags: ["150kg/段", "単体", "H2100", "奥行595"], point: "支柱4本で自立する基本の1台。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221586.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221586.jpg" },
  "223277": { id: "223277", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1460×D600×H2100 5段 単体", model: "M2-DS7565", tags: ["200kg/段", "単体", "H2100", "奥行600"], point: "支柱4本で自立する基本の1台。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223277.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223277.jpg" },
  "226740": { id: "226740", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1500×D471×H2100 5段 連結", model: "M3-DS7555B", tags: ["300kg/段", "連結", "H2100", "奥行471"], point: "単体の横に増設する連結用（単体1台が別途必要）。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226740.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226740.jpg" },
  "221587": { id: "221587", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1160×D595×H2100 5段 連結", model: "M1.5-DS7465B", tags: ["150kg/段", "連結", "H2100", "奥行595"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221587.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221587.jpg" },
  "221590": { id: "221590", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1460×D595×H2100 5段 単体", model: "M1.5-DS7565", tags: ["150kg/段", "単体", "H2100", "奥行595"], point: "支柱4本で自立する基本の1台。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221590.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221590.jpg" },
  "223266": { id: "223266", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1460×D600×H1800 5段 連結", model: "M2-DS6565B", tags: ["200kg/段", "連結", "H1800", "奥行600"], point: "単体の横に増設する連結用（単体1台が別途必要）。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223266.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223266.jpg" },
  "223273": { id: "223273", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1160×D600×H2100 5段 単体", model: "M2-DS7465", tags: ["200kg/段", "単体", "H2100", "奥行600"], point: "支柱4本で自立する基本の1台。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223273.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223273.jpg" },
  "223262": { id: "223262", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1160×D600×H1800 5段 連結", model: "M2-DS6465B", tags: ["200kg/段", "連結", "H1800", "奥行600"], point: "単体の横に増設する連結用（単体1台が別途必要）。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223262.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223262.jpg" },
  "223280": { id: "223280", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1760×D450×H2100 5段 連結", model: "M2-DS7645B", tags: ["200kg/段", "連結", "H2100", "奥行450"], point: "単体の横に増設する連結用（単体1台が別途必要）。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223280.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223280.jpg" },
  "223271": { id: "223271", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1160×D450×H2100 5段 単体", model: "M2-DS7445", tags: ["200kg/段", "単体", "H2100", "奥行450"], point: "支柱4本で自立する基本の1台。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223271.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223271.jpg" },
  "221579": { id: "221579", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1160×D595×H1800 5段 連結", model: "M1.5-DS6465B", tags: ["150kg/段", "連結", "H1800", "奥行595"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221579.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221579.jpg" },
  "223261": { id: "223261", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1160×D600×H1800 5段 単体", model: "M2-DS6465", tags: ["200kg/段", "単体", "H1800", "奥行600"], point: "支柱4本で自立する基本の1台。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223261.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223261.jpg" },
  "223272": { id: "223272", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1160×D450×H2100 5段 連結", model: "M2-DS7445B", tags: ["200kg/段", "連結", "H2100", "奥行450"], point: "単体の横に増設する連結用（単体1台が別途必要）。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223272.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223272.jpg" },
  "221581": { id: "221581", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1460×D595×H1800 5段 連結", model: "M1.5-DS6565B", tags: ["150kg/段", "連結", "H1800", "奥行595"], point: "単体の横に増設する連結用（単体1台が別途必要）。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221581.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221581.jpg" },
  "186302": { id: "186302", store: "yahoo", name: "オリオン ジェットヒーター ブライト", model: "HR330E-L", tags: ["冬季の暖房", "要換気"], point: "冬の発災時の暖房に。燃焼式のため換気必須、密閉空間では使わない。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/186302.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "186302.jpg" },
  "223105": { id: "223105", store: "yahoo", name: "TRUSCO 充電式スマートLED電球 50個まとめ買い", model: "TDRS-26H-50P", tags: ["停電対策", "50個"], point: "バッテリー内蔵の充電式LED電球。事業所の照明をまとめて入れ替えたい場合に。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223105.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223105.jpg" },
  "172902": { id: "172902", store: "yahoo", name: "ユーアイニクス 地震感知動作制御器 グラカット", model: "GC5000", tags: ["感震", "二次災害防止"], point: "揺れを感知して接続機器の動作を制御。接続条件は商品ページで確認を。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/172902.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "172902.jpg" },
  "172884": { id: "172884", store: "yahoo", name: "コクゴ 水のいらない全身キレイセット", model: "304-0023710", tags: ["断水対策", "清拭"], point: "水を使わずに体を拭ける。避難が3日を超えたときの衛生対策に。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/172884.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "172884.jpg" },
  "226744": { id: "226744", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1800×D471×H2100 5段 連結", model: "M3-DS7655B", tags: ["300kg/段", "連結", "H2100", "奥行471"], point: "単体の横に増設する連結用（単体1台が別途必要）。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226744.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226744.jpg" },
  "226733": { id: "226733", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1800×D571×H1800 5段 単体", model: "M3-DS6665", tags: ["300kg/段", "単体", "H1800", "奥行571"], point: "支柱4本で自立する基本の1台。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226733.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226733.jpg" },
  "226743": { id: "226743", store: "yahoo", name: "TRUSCO 災害備蓄ラック M3型 W1800×D471×H2100 5段 単体", model: "M3-DS7655", tags: ["300kg/段", "単体", "H2100", "奥行471"], point: "支柱4本で自立する基本の1台。水ケースの積み重ね・重量物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/226743.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "226743.jpg" },
  "221594": { id: "221594", store: "yahoo", name: "TRUSCO 災害備蓄ラック M1.5型 W1760×D595×H2100 5段 単体", model: "M1.5-DS7665", tags: ["150kg/段", "単体", "H2100", "奥行595"], point: "支柱4本で自立する基本の1台。毛布・衛生用品など軽くかさばる物向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/221594.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "221594.jpg" },
  "223269": { id: "223269", store: "yahoo", name: "TRUSCO 災害備蓄ラック M2型 W1760×D600×H1800 5段 単体", model: "M2-DS6665", tags: ["200kg/段", "単体", "H1800", "奥行600"], point: "支柱4本で自立する基本の1台。食料と水の混載向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/223269.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "223269.jpg" },
  "6300068614": { id: "6300068614", store: "gc", name: "ポータブル蓄電池 AC240P", model: "AC240P", tags: ["蓄電池", "大容量クラス"], point: "照明・通信・小型家電の電源に。容量・出力は商品ページで確認を。", url: G("https://www.gc-select.com/products/6300068614"), img: "6300068614.jpg" },
  "6300046024": { id: "6300046024", store: "gc", name: "シェアする防災セット ベーシック 30人分 マグネットLサイズ", model: "ベーシック30人分", tags: ["30人分", "オフィス向け"], point: "30人分を1セットで。品目の抜け漏れを防ぎたい事業所向け。", url: G("https://www.gc-select.com/products/6300046024"), img: "6300046024.jpg" },
  "6300095083": { id: "6300095083", store: "gc", name: "土のう袋 20枚入 30袋セット", model: "20枚入×30袋", tags: ["水害対策", "計600枚"], point: "出入口のすき間や排水口の逆流対策に。まとめて備蓄できる数量。", url: G("https://www.gc-select.com/products/6300095083"), img: "6300095083.jpg" },
  "6300099083": { id: "6300099083", store: "gc", name: "アイリスオーヤマ 止水板 内カーブタイプ", model: "内カーブ", tags: ["止水板", "内カーブ"], point: "設置場所の形状に合わせて選ぶ止水板。内側に曲がる形状用。", url: G("https://www.gc-select.com/products/6300099083"), img: "6300099083.jpg" },
  "6300099084": { id: "6300099084", store: "gc", name: "アイリスオーヤマ 止水板 外カーブタイプ", model: "外カーブ", tags: ["止水板", "外カーブ"], point: "設置場所の形状に合わせて選ぶ止水板。外側に曲がる形状用。", url: G("https://www.gc-select.com/products/6300099084"), img: "6300099084.jpg" },
  "6300093098": { id: "6300093098", store: "gc", name: "タメルラボ ポータブル蓄電池", model: "TL-12000NE", tags: ["蓄電池", "業務用"], point: "事業所の停電対策用。容量・出力は商品ページで確認を。", url: G("https://www.gc-select.com/products/6300093098"), img: "6300093098.jpg" },
  "6300093099": { id: "6300093099", store: "gc", name: "タメルラボ ダブルインバーター ポータブル蓄電池", model: "TL-6000NE-D", tags: ["蓄電池", "ダブルインバーター"], point: "ダブルインバーター搭載モデル。仕様は商品ページで確認を。", url: G("https://www.gc-select.com/products/6300093099"), img: "6300093099.jpg" },
  "6300072039": { id: "6300072039", store: "gc", name: "防水ドライバッグ 17点セット 非常用防災セット 20L", model: "20L・17点", tags: ["持ち出し用", "防水"], point: "防水バッグ型の持ち出しセット。雨の中の徒歩帰宅に。", url: G("https://www.gc-select.com/products/6300072039"), img: "6300072039.jpg" },
  "6300065810": { id: "6300065810", store: "gc", name: "防水deリュック 30点 防災用セット", model: "30点", tags: ["持ち出し用", "30点"], point: "品目数を重視するならこの30点。各自の席・出入口付近に。", url: G("https://www.gc-select.com/products/6300065810"), img: "6300065810.jpg" },
  "6300065809": { id: "6300065809", store: "gc", name: "防水deリュック 25点 防災用セット", model: "25点", tags: ["持ち出し用", "25点"], point: "品目と重さのバランスを取りたい場合の25点。", url: G("https://www.gc-select.com/products/6300065809"), img: "6300065809.jpg" },
  "6300065807": { id: "6300065807", store: "gc", name: "防水deリュック 15点 防災用セット", model: "15点", tags: ["持ち出し用", "15点"], point: "人数分を揃えやすい15点。軽さ優先の配布用に。", url: G("https://www.gc-select.com/products/6300065807"), img: "6300065807.jpg" },
  "6300068612": { id: "6300068612", store: "gc", name: "ポータブル蓄電池 AC70P", model: "AC70P", tags: ["蓄電池", "小型"], point: "持ち運びやすい小型クラス。スマホ・照明の電源確保に。", url: G("https://www.gc-select.com/products/6300068612"), img: "6300068612.jpg" },
  "6300068610": { id: "6300068610", store: "gc", name: "ポータブル蓄電池 AC2P", model: "AC2P", tags: ["蓄電池", "コンパクト"], point: "コンパクトな蓄電池。部署ごとに分散配置したい場合に。", url: G("https://www.gc-select.com/products/6300068610"), img: "6300068610.jpg" },
  "6300068611": { id: "6300068611", store: "gc", name: "ポータブル蓄電池用 拡張バッテリー B80P", model: "B80P", tags: ["拡張バッテリー", "対応機種要確認"], point: "対応する本体の容量を増やす拡張用。本体との適合を確認して選ぶ。", url: G("https://www.gc-select.com/products/6300068611"), img: "6300068611.jpg" },
  "6300068613": { id: "6300068613", store: "gc", name: "ポータブル蓄電池 AC200PL", model: "AC200PL", tags: ["蓄電池", "大容量クラス"], point: "長時間の停電に備える大容量クラス。容量・出力は商品ページで確認を。", url: G("https://www.gc-select.com/products/6300068613"), img: "6300068613.jpg" },
};

const RACKS: Rack[] = [
  { id: "226723", type: "M3", w: 1200, d: 471, h: 1800, kind: "単体", model: "M3-DS6455" },
  { id: "226735", type: "M3", w: 1200, d: 471, h: 2100, kind: "単体", model: "M3-DS7455" },
  { id: "226736", type: "M3", w: 1200, d: 471, h: 2100, kind: "連結", model: "M3-DS7455B" },
  { id: "226724", type: "M3", w: 1200, d: 471, h: 1800, kind: "連結", model: "M3-DS6455B" },
  { id: "221591", type: "M1.5", w: 1460, d: 595, h: 2100, kind: "連結", model: "M1.5-DS7565B" },
  { id: "221589", type: "M1.5", w: 1460, d: 445, h: 2100, kind: "連結", model: "M1.5-DS7545B" },
  { id: "223276", type: "M2", w: 1460, d: 450, h: 2100, kind: "連結", model: "M2-DS7545B" },
  { id: "223278", type: "M2", w: 1460, d: 600, h: 2100, kind: "連結", model: "M2-DS7565B" },
  { id: "226727", type: "M3", w: 1500, d: 471, h: 1800, kind: "単体", model: "M3-DS6555" },
  { id: "221580", type: "M1.5", w: 1460, d: 445, h: 1800, kind: "連結", model: "M1.5-DS6545B" },
  { id: "221593", type: "M1.5", w: 1760, d: 445, h: 2100, kind: "連結", model: "M1.5-DS7645B" },
  { id: "226728", type: "M3", w: 1500, d: 471, h: 1800, kind: "連結", model: "M3-DS6555B" },
  { id: "221578", type: "M1.5", w: 1160, d: 445, h: 1800, kind: "連結", model: "M1.5-DS6445B" },
  { id: "221582", type: "M1.5", w: 1760, d: 445, h: 1800, kind: "連結", model: "M1.5-DS6645B" },
  { id: "221584", type: "M1.5", w: 1160, d: 445, h: 2100, kind: "単体", model: "M1.5-DS7445" },
  { id: "221586", type: "M1.5", w: 1160, d: 595, h: 2100, kind: "単体", model: "M1.5-DS7465" },
  { id: "223277", type: "M2", w: 1460, d: 600, h: 2100, kind: "単体", model: "M2-DS7565" },
  { id: "226740", type: "M3", w: 1500, d: 471, h: 2100, kind: "連結", model: "M3-DS7555B" },
  { id: "221587", type: "M1.5", w: 1160, d: 595, h: 2100, kind: "連結", model: "M1.5-DS7465B" },
  { id: "221590", type: "M1.5", w: 1460, d: 595, h: 2100, kind: "単体", model: "M1.5-DS7565" },
  { id: "223266", type: "M2", w: 1460, d: 600, h: 1800, kind: "連結", model: "M2-DS6565B" },
  { id: "223273", type: "M2", w: 1160, d: 600, h: 2100, kind: "単体", model: "M2-DS7465" },
  { id: "223262", type: "M2", w: 1160, d: 600, h: 1800, kind: "連結", model: "M2-DS6465B" },
  { id: "223280", type: "M2", w: 1760, d: 450, h: 2100, kind: "連結", model: "M2-DS7645B" },
  { id: "223271", type: "M2", w: 1160, d: 450, h: 2100, kind: "単体", model: "M2-DS7445" },
  { id: "221579", type: "M1.5", w: 1160, d: 595, h: 1800, kind: "連結", model: "M1.5-DS6465B" },
  { id: "223261", type: "M2", w: 1160, d: 600, h: 1800, kind: "単体", model: "M2-DS6465" },
  { id: "223272", type: "M2", w: 1160, d: 450, h: 2100, kind: "連結", model: "M2-DS7445B" },
  { id: "221581", type: "M1.5", w: 1460, d: 595, h: 1800, kind: "連結", model: "M1.5-DS6565B" },
  { id: "226744", type: "M3", w: 1800, d: 471, h: 2100, kind: "連結", model: "M3-DS7655B" },
  { id: "226733", type: "M3", w: 1800, d: 571, h: 1800, kind: "単体", model: "M3-DS6665" },
  { id: "226743", type: "M3", w: 1800, d: 471, h: 2100, kind: "単体", model: "M3-DS7655" },
  { id: "221594", type: "M1.5", w: 1760, d: 595, h: 2100, kind: "単体", model: "M1.5-DS7665" },
  { id: "223269", type: "M2", w: 1760, d: 600, h: 1800, kind: "単体", model: "M2-DS6665" },
];

function R(id: string): Product {
  const p = PRODUCTS[id];
  if (!p) throw new Error(`product not found: ${id}`);
  return p;
}

const STORE_LABEL: Record<Store, string> = { yahoo: "Yahoo!店", gc: "GC-select" };
const STORE_BADGE: Record<Store, string> = {
  yahoo: "bg-white text-red-600 ring-1 ring-red-200",
  gc: "bg-white text-emerald-700 ring-1 ring-emerald-200",
};
const LOAD: Record<RackType, number> = { "M1.5": 150, M2: 200, M3: 300 };

// ------------------------------------------------------------
// UIコンポーネント（gray-900 系）
// ------------------------------------------------------------
function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-16 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-xl font-bold leading-snug text-gray-900 md:text-2xl"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 text-lg font-bold text-gray-900">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-8 text-gray-800">{children}</p>;
}

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブで開きます）`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      <div className="relative aspect-square bg-white p-3">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={p.name}
          loading="lazy"
          width={400}
          height={400}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
        />
        <span
          className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[11px] font-bold ${STORE_BADGE[p.store]}`}
        >
          {STORE_LABEL[p.store]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-gray-100 p-4">
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="line-clamp-2 text-sm font-bold leading-snug text-gray-900">{p.name}</p>
        <p className="text-xs text-gray-500">型番：{p.model}</p>
        <p className="text-xs leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-auto inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-sm font-bold text-white transition group-hover:bg-gray-700">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ items, cols = 3 }: { items: Product[]; cols?: 2 | 3 }) {
  const grid = cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 md:grid-cols-3";
  return (
    <div className={`my-6 grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}

function FeatureCard({ p, label }: { p: Product; label: string }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${p.name}の価格・在庫を${STORE_LABEL[p.store]}で見る（新しいタブで開きます）`}
      className="group my-8 flex flex-col overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:flex-row"
    >
      <div className="relative bg-white p-4 sm:w-2/5">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={p.name}
          loading="lazy"
          width={480}
          height={480}
          className="mx-auto aspect-square w-full max-w-[280px] object-contain"
        />
        <span
          className={`absolute left-3 top-3 rounded px-2 py-0.5 text-xs font-bold ${STORE_BADGE[p.store]}`}
        >
          {STORE_LABEL[p.store]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-gray-100 p-5 sm:border-l sm:border-t-0">
        <span className="w-fit rounded bg-gray-900 px-2 py-1 text-xs font-bold text-white">{label}</span>
        <p className="text-base font-bold leading-snug text-gray-900">{p.name}</p>
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-auto inline-flex min-h-[52px] items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-base font-bold text-white transition group-hover:bg-gray-700">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

function MainCTA({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="my-10 rounded-2xl bg-gray-900 p-6 text-white md:p-8">
      <p className="text-lg font-bold md:text-xl">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">{desc}</p>
      <a
        href={CTA.rack}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-bold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto"
      >
        災害備蓄ラックの一覧を見る（Yahoo!店）→
      </a>
    </div>
  );
}

function SubCTA({ href, title, desc, label }: { href: string; title: string; desc: string; label: string }) {
  return (
    <div className="my-8 flex flex-col gap-4 rounded-xl border-2 border-gray-200 bg-gray-50 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-bold text-gray-900">{title}</p>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        {label} →
      </a>
    </div>
  );
}

function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-gray-300 bg-white p-5">
      <p className="font-bold text-gray-900">{title}</p>
      <div className="mt-2 text-sm leading-7 text-gray-700">{children}</div>
    </div>
  );
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-3 py-3 text-left font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-3 align-top leading-relaxed text-gray-800">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RackTable({ type }: { type: RackType }) {
  const list = RACKS.filter((r) => r.type === type).sort(
    (a, b) => a.h - b.h || a.w - b.w || a.d - b.d || (a.kind === "単体" ? -1 : 1),
  );
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[600px] border-collapse text-sm">
        <caption className="bg-gray-100 px-3 py-2 text-left font-bold text-gray-900">
          {type}型（{LOAD[type]}kg/段）当店取扱いサイズ
        </caption>
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="px-3 py-2 text-left">高さ</th>
            <th className="px-3 py-2 text-left">間口×奥行</th>
            <th className="px-3 py-2 text-left">タイプ</th>
            <th className="px-3 py-2 text-left">型番</th>
            <th className="px-3 py-2 text-left">商品ページ</th>
          </tr>
        </thead>
        <tbody>
          {list.map((r) => (
            <tr key={r.id} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
              <td className="px-3 py-2">H{r.h}</td>
              <td className="px-3 py-2">
                W{r.w}×D{r.d}
              </td>
              <td className="px-3 py-2">
                <span
                  className={`rounded px-2 py-0.5 text-xs font-bold ${
                    r.kind === "単体" ? "bg-gray-900 text-white" : "border border-gray-400 text-gray-700"
                  }`}
                >
                  {r.kind}
                </span>
              </td>
              <td className="px-3 py-2 font-mono text-xs">{r.model}</td>
              <td className="px-3 py-2">
                <a
                  href={PRODUCTS[r.id].url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  aria-label={`${r.model}の価格・在庫を見る（新しいタブで開きます）`}
                  className="inline-flex min-h-[40px] items-center rounded-md bg-gray-900 px-3 py-2 text-xs font-bold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
                >
                  価格を見る →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ------------------------------------------------------------
// FAQ（本文表示と FAQPage JSON-LD を同じ配列から生成）
// ------------------------------------------------------------
const FAQS: { q: string; a: string }[] = [
  {
    q: "TRUSCOの災害備蓄ラックと普通のスチールラックは何が違いますか？",
    a: "本体を壁や床に留める転倒防止用金具と、荷物の飛び出しを抑える回転式の落下防止バーが最初から付いている点です。棚板や支柱の構造はトラスコ中山の軽中量棚（M1.5型・M2型）と中量棚（M3型）がベースで、ボルトレスで組み立てられる点、高さと奥行が同じなら支柱を共有して連結できる点は通常品と共通です。",
  },
  {
    q: "M1.5型・M2型・M3型はどう選べばいいですか？",
    a: "1段あたりの均等耐荷重がM1.5型150kg、M2型200kg、M3型300kgです。毛布や衛生用品など軽くかさばる物が中心ならM1.5型、食料と水を混載するならM2型、2Lの水ケースを積み重ねる・蓄電池や工具など重量物を置くならM3型が目安です。荷重が1点に集中すると耐荷重は半分になる点も考慮してください。",
  },
  {
    q: "連結型だけを買っても使えますか？",
    a: "使えません。連結型は支柱が2本で、隣に置いた単体の支柱を共有して組み立てる構造です。2台並べるなら単体1台＋連結1台、3台なら単体1台＋連結2台の組み合わせになります。連結できるのは高さと奥行が同じもの同士です。",
  },
  {
    q: "従業員50人分の備蓄には、災害備蓄ラックが何台必要ですか？",
    a: "3日分を基準にすると、水だけで450L（2Lペットボトル6本入りで約38ケース、約475kg）になります。食料・毛布・簡易トイレなどを含めると、M3型の単体1台＋連結1〜2台が目安です。保管品の種類やケースの寸法で変わるため、実際に置く物の寸法で棚割りを確認してください。",
  },
  {
    q: "災害備蓄ラックは床や壁に固定する必要がありますか？",
    a: "必要です。付属の転倒防止用金具で壁や床に固定して初めて地震対策として機能します。壁の下地がコンクリート・鉄骨・石膏ボードのどれかで固定方法が変わるため、下地がわからない場合はビル管理会社や施工業者に相談してください。",
  },
  {
    q: "個人宅でも購入・設置できますか？",
    a: "業務用の大型ラックのため、販売店によっては個人宅への配送に対応していない場合があります。購入前に商品ページで配送条件を確認してください。設置には外寸と天井高、搬入経路の確認も必要です。",
  },
];

const RELATED: { title: string; href: string }[] = [
  { title: "スチール棚の選び方｜耐荷重区分と使い分け", href: "/articles/steel-shelf-erabikata" },
  { title: "TRUSCO鋼鉄製運搬車（スチール台車）の選び方", href: "/articles/trusco-steel-cart-selection-guide" },
  { title: "運搬台車の業務用の選び方", href: "/articles/commercial-cart-selection-guide" },
  { title: "スタッカー・リフター（コゾウ）の選び方", href: "/articles/trusco-kozou-stacker-lifter-selection-guide" },
];

const TOC = [
  { id: "about", label: "TRUSCOの災害備蓄ラックとは｜普通のラックとの違い" },
  { id: "types", label: "M1.5型・M2型・M3型の違い｜耐荷重で選ぶ" },
  { id: "quantity", label: "何人分を何台で？備蓄量から台数を逆算" },
  { id: "size", label: "サイズ早見表と型番の読み方" },
  { id: "scene", label: "置き場所・用途別の選び方" },
  { id: "layout", label: "棚割りの基本と、ラックに入れる備蓄品" },
  { id: "outside", label: "ラックの外で備えるもの｜停電・水害・移動" },
  { id: "install", label: "設置と運用の注意点｜固定・床・通路・点検" },
  { id: "faq", label: "よくある質問" },
];

// ------------------------------------------------------------
// ページ本体
// ------------------------------------------------------------
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      image: `${SITE}${ARTICLE_IMG}eyecatch-ogp.jpg`,
      mainEntityOfPage: PAGE_URL,
      author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE },
      publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE },
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
        { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE}/articles` },
        { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
      ],
    },
  ];

  const related = RELATED.filter((r) => r.href !== "");

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="パンくずリスト" className="text-xs text-gray-500">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-1">›</span>
        <Link href="/articles" className="hover:underline">
          記事一覧
        </Link>
        <span className="mx-1">›</span>
        <span className="text-gray-700">TRUSCO災害備蓄ラックの選び方</span>
      </nav>

      <header className="mt-4">
        <p className="text-sm font-bold text-gray-600">防災・備蓄｜保管用品</p>
        <h1 className="mt-2 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">{TITLE}</h1>
        <p className="mt-3 text-xs text-gray-500">
          公開日：<time dateTime={PUBLISHED}>2026年10月8日</time>　最終更新日：
          <time dateTime={UPDATED}>2026年10月8日</time>　作業用品ナビ編集部
        </p>
      </header>

      {/* CURSOR指示：アイキャッチ画像
          内容：明るい倉庫・備蓄倉庫の壁際に、グレーのスチール製災害備蓄ラックが3台連結で並ぶ。
                棚には段ボール箱、2Lペットボトルの水ケース（最下段）、毛布の束（最上段）、防災リュックが整然と収まり、
                各棚の前面に横向きの落下防止バーが見える。床に「備蓄品」の掲示ラベル。人物なし。
          スタイル：写実的な写真風。自然光＋蛍光灯のフラットな光。グレー・白基調で、差し色は防災オレンジを少量。
                    文字・ロゴ・メーカー名は入れない（特定メーカーの製品に見せない）。
          比率/サイズ：16:9 / 1600×900px（WebP）。OGP用に同構図で 1200×630px（JPG）も書き出し。
          保存先：/public/images/articles/saigai-bichiku-rack-trusco/eyecatch.webp
                  /public/images/articles/saigai-bichiku-rack-trusco/eyecatch-ogp.jpg */}
      <img
        src={`${ARTICLE_IMG}eyecatch.webp`}
        alt="倉庫の壁際に連結して並べた災害備蓄ラックと、棚に収めた水や毛布などの備蓄品"
        width={1600}
        height={900}
        className="mt-6 aspect-video w-full rounded-2xl object-cover"
      />

      <P>
        「TRUSCOの災害備蓄ラックが気になるが、M1.5型・M2型・M3型のどれを選べばいいのかわからない」。この記事は、会社の総務・防災担当、学校や福祉施設の施設管理担当など、備蓄倉庫や事務所の一角に棚を入れる立場の方に向けて書いています。型ごとの耐荷重、間口・奥行・高さの選び方、単体と連結の組み合わせ、従業員数から台数を逆算する方法までを1ページにまとめました。
      </P>

      <section aria-label="この記事の結論" className="mt-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
        <p className="text-base font-bold text-gray-900">結論：迷ったらこの基準で選ぶ</p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-800">
          <li>
            <strong>2Lの水ケースを積み重ねる・蓄電池など重量物を置く</strong>なら
            <strong>M3型（300kg/段）</strong>。
          </li>
          <li>
            <strong>毛布・衛生用品・紙おむつ</strong>など軽くかさばる物が中心なら、奥行595mmを選べる
            <strong>M1.5型（150kg/段）</strong>。
          </li>
          <li>
            食料と水を混ぜて置くなら中間の<strong>M2型（200kg/段）</strong>。奥行450mmと600mmから選べる。
          </li>
          <li>
            2台以上並べるときは<strong>単体1台＋連結（台数−1）</strong>。連結型だけでは組み立てられない。
          </li>
          <li>
            置き場所の天井高と<strong>外寸</strong>を先に測る。外寸は表記寸法より奥行で約10cm大きいモデルもある。
          </li>
        </ul>
      </section>

      <nav aria-label="目次" className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
        <p className="font-bold text-gray-900">目次</p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="text-gray-800 underline-offset-2 hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <MainCTA
        title="サイズが決まっている方は、一覧から型番で探せます"
        desc="M1.5型・M2型・M3型、単体・連結、高さ1800／2100mmまで、TRUSCO災害備蓄ラックをまとめて掲載しています。"
      />

      <Note title="この記事で想定している読者">
        <ul className="list-disc space-y-1 pl-5">
          <li>従業員20〜300名規模の事業所で、3日分の備蓄を置く棚を探している総務・防災担当</li>
          <li>学校・公民館・福祉施設・病院で、防災倉庫や空き部屋を備蓄スペースにしたい施設管理担当</li>
          <li>工場・倉庫で、工具や蓄電池など重い防災資機材もまとめて保管したい安全衛生担当</li>
        </ul>
      </Note>

      {/* ===================== 1 ===================== */}
      <H2 id="about">TRUSCOの災害備蓄ラックとは｜普通のスチールラックと何が違う？</H2>
      <P>
        TRUSCOの災害備蓄ラックは、トラスコ中山のボルトレス棚をベースに、地震で起きる「倒れる」「落ちる」への対策部材を最初から組み込んだモデルです。ベースはM1.5型・M2型が軽中量棚、M3型が中量棚。型番の頭に「DS」が付くのが災害備蓄用の目印です。
      </P>

      <P>
        地震の被害では、建物が無事でも室内の棚が倒れて通路をふさいだり、備蓄品が床に散乱して取り出せなくなったりする例が繰り返し報告されています。備蓄品は「あること」より「発災直後に取り出せること」に価値がある。棚の選び方が防災計画の一部になるのはこのためです。
      </P>

      <H3>通常品との違いは2点</H3>
      <P>
        1つ目は<strong>本体の転倒防止用金具</strong>。ラックを壁や床に留めるための金具で、通常の棚なら別に手配する部材です。2つ目は棚の前面に付く<strong>回転式の落下防止バー</strong>。揺れで荷物が前に飛び出すのを抑えます。メーカーは「普段はバーを上げた状態で使用する」よう案内しているため、運用は付属の取扱説明書に合わせてください。
      </P>
      <P>
        それ以外の基本構造は通常品と同じ系統です。ボルトを使わずに組み立てられ、棚板の高さは細かいピッチで段替えできます。高さと奥行が同じ棚どうしなら、支柱を共有して横に連結することも可能。
      </P>

      <H3>「普通のラック＋後付け部材」とどちらを選ぶか</H3>
      <Table
        head={["比較項目", "災害備蓄ラック（DS）", "通常ラック＋後付け部材"]}
        rows={[
          ["転倒防止", "専用の転倒防止用金具が付属", "金具・耐震ベルトなどを別途選定"],
          ["落下防止", "回転式の落下防止バーを標準装備", "落下防止ベルト・ネットを別途用意"],
          ["手配", "型番1つで揃う", "部材ごとに適合を確認して手配"],
          ["向く場面", "備蓄倉庫を新設する／棚を入れ替える", "既存の棚をそのまま活かしたい"],
        ]}
      />
      <P>
        判断の目安はシンプルです。新しく備蓄スペースを作るなら最初から災害備蓄ラック。既に通常のスチールラックがあり、まだ使えるなら後付け部材で補強。部材の適合確認や手配の手間を省けるのが、専用モデルを選ぶ一番の理由になります。
      </P>

      <FeatureCard
        p={R("226723")}
        label="迷ったらまずこの1台"
      />

      {/* ===================== 2 ===================== */}
      <H2 id="types">M1.5型・M2型・M3型の違い｜1段あたりの耐荷重で選ぶ</H2>
      <P>
        型番の「M」の後ろの数字は、1段あたりの均等耐荷重を表しています。M1.5型が150kg/段、M2型が200kg/段、M3型が300kg/段。見た目は似ていても、支柱や棚板の強度が違います。
      </P>

      <Table
        head={["型", "区分", "耐荷重", "間口（当店取扱い）", "奥行", "向く備蓄品"]}
        rows={[
          ["M1.5型", "軽中量棚", "150kg/段", "1160・1460・1760mm", "445・595mm", "毛布、衛生用品、紙おむつ、簡易トイレ、ダンボールベッド"],
          ["M2型", "軽中量棚", "200kg/段", "1160・1460・1760mm", "450・600mm", "食料と水の混載、防災セット、工具箱"],
          ["M3型", "中量棚", "300kg/段", "1200・1500・1800mm", "471・571mm", "2Lの水ケースの積み重ね、蓄電池、土のう、資機材"],
        ]}
      />

      <H3>「均等耐荷重」の落とし穴：荷重が1点に集まると半分になる</H3>
      <P>
        表の数字は、棚板全体に均等に荷物を載せたときの値です。メーカーの注意書きでは、集中荷重になると耐荷重能力は半減するとされています。蓄電池や工具箱のように小さくて重い物を棚の中央に置くなら、M3型でも実質150kg/段として計画するのが安全側の考え方です。
      </P>

      <H3>2Lペットボトルで試算すると、どこで型が分かれるか</H3>
      <P>
        2Lペットボトル6本入りのケースを、外装寸法およそ31×21×32cm、重さ約12.5kgとして計算します（実際の寸法はメーカーで異なります）。有効間口が約1,400mm、奥行595mmの棚なら、横に4ケース・奥に2列で1層8ケース、約100kg。ここまではどの型でも収まります。
      </P>
      <P>
        差が出るのは、棚板の位置を上げて棚間を70cm前後取り、2層に積んだ場合です。16ケースで約200kgとなり、M1.5型の150kg/段を超えます。M2型では上限ちょうど、M3型なら100kg近い余裕が残る計算です。「水を1層で並べるなら型は問わない。限られた面積に詰めて積むならM3型」と覚えておくと判断が早くなります。
      </P>

      <H3>高さは1800mmか2100mmか：天井高と最上段の使い方で決める</H3>
      <P>
        高さは2種類。H2100はH1800より棚間を広く取れるので、同じ5段でもかさばる毛布や段ボールが入れやすくなります。ただし最上段の棚板は大人でも手を伸ばす位置になり、出し入れには踏み台が欲しいところ。外寸は表記より高くなる（例：H2100表記のM1.5-DS7545で外寸2,184mm）ため、天井高2,400mm未満の部屋や、照明・スプリンクラーが低い位置にある倉庫ではH1800が無難です。
      </P>
      <P>
        判断の目安は「最上段に何を置くか」。毛布や保温シートなど軽くて年に数回しか触らない物ならH2100で収納量を稼ぐ。日常的に出し入れする物まで最上段に回すなら、H1800で全段を手の届く範囲に収める。この2択で考えると決めやすくなります。
      </P>

      <ProductGrid items={[R("221590"), R("223277"), R("226735")]} />

      <MainCTA
        title="型が決まったら、間口と奥行で絞り込み"
        desc="同じM3型でも間口1200・1500・1800mm、高さ1800・2100mmがあります。設置場所の寸法に合うものを一覧から選べます。"
      />

      {/* ===================== 3 ===================== */}
      <H2 id="quantity">何人分を何台で？備蓄量から必要台数を逆算する</H2>
      <P>
        台数は「人数×日数×1人あたりの量」で決まります。基準として使いやすいのが、東京都の帰宅困難者対策条例です。事業者に従業員3日分の備蓄を努力義務として求めており、目安は水が1人1日3L、主食が1人1日3食、毛布が1人1枚。都外の企業でも、この3日分を社内基準にしている例が多くあります。
      </P>
      <P>
        見落としやすいのがトイレです。断水すると水洗トイレは使えません。1人1日5回程度を目安に、簡易トイレの回数も備蓄量に含めておきます。
      </P>

      <Table
        head={["人数", "水（3日分）", "2L×6本ケース換算", "水の重さ", "簡易トイレ（3日分）", "ラック構成の目安"]}
        rows={[
          ["10名", "90L", "8ケース", "約100kg", "150回", "M1.5型またはM2型 単体1台"],
          ["30名", "270L", "23ケース", "約290kg", "450回", "M2型 単体1台＋連結1台"],
          ["50名", "450L", "38ケース", "約475kg", "750回", "M3型 単体1台＋連結1〜2台"],
          ["100名", "900L", "75ケース", "約940kg", "1,500回", "M3型 単体1台＋連結2〜3台（2列配置も検討）"],
        ]}
      />
      <p className="text-xs leading-6 text-gray-500">
        ※ラック構成は、水・主食・毛布・簡易トイレ・衛生用品を置く前提での当編集部の目安です。ケース寸法、毛布の圧縮有無、段の使い方で必要台数は変わります。
      </p>

      <P>
        表を見るとわかるとおり、台数の大半を決めるのは水と毛布です。水は重く、毛布はかさばる。この2つの置き場所を先に決め、残りの段に食料や衛生用品を割り当てる順番で考えると、台数を見誤りにくくなります。
      </P>

      <H3>備蓄品のチェックリスト（3日分）</H3>
      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {[
          "飲料水：1人1日3L",
          "主食：1人1日3食（アルファ化米・パンの缶詰など）",
          "毛布・保温シート：1人1枚",
          "簡易トイレ・トイレットペーパー：1人1日5回程度",
          "衛生用品：ウェットタオル、清拭用品、マスク",
          "救急用品・常備薬",
          "照明：懐中電灯、ランタン、予備電池",
          "情報：ラジオ、スマホ充電用の電源",
          "救助・復旧用の工具",
          "ヘルメット・軍手",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3">
            <span aria-hidden="true" className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900" />
            <span className="text-gray-800">{t}</span>
          </li>
        ))}
      </ul>

      <P>
        トイレは200回分で1箱という単位で揃えると数えやすくなります。50名・3日分なら750回なので4箱。救急・衛生・照明などの細かい品目は、人数分がまとまった防災セットで揃えると、品目の抜け漏れが起きにくくなります。
      </P>

      <ProductGrid items={[R("232609"), R("6300046024")]} cols={2} />

      <SubCTA
        href={CTA.set}
        title="人数分をまとめて揃えるなら防災セット"
        desc="オフィス向けの多人数セットから、個人用の持ち出しリュックまで掲載しています。"
        label="防災セットの一覧を見る"
      />

      {/* ===================== 4 ===================== */}
      <H2 id="size">サイズ早見表｜型番の読み方と単体・連結の組み合わせ</H2>

      <H3>型番の読み方（例：M3-DS7455B）</H3>
      <P>
        型番は規則的に並んでいるので、読み方を覚えると一覧から目的のサイズを探す時間が短くなります。以下は当店取扱い品の型番から整理したものです。
      </P>
      <Table
        head={["部分", "例", "意味"]}
        rows={[
          ["先頭", "M3", "型（M1.5＝150kg/段、M2＝200kg/段、M3＝300kg/段）"],
          ["DS", "DS", "災害備蓄用"],
          ["1桁目", "7", "高さ（6＝1800mm、7＝2100mm）"],
          ["2桁目", "4", "間口（4＝1160／1200mm、5＝1460／1500mm、6＝1760／1800mm）"],
          ["3桁目", "5", "奥行（M1.5・M2型：4＝445／450mm、6＝595／600mm。M3型：5＝471mm、6＝571mm）"],
          ["4桁目", "5", "段数（5段）"],
          ["末尾", "B", "連結型（Bなし＝単体）"],
        ]}
      />

      <H3>単体と連結の組み合わせ方</H3>
      <P>
        単体は支柱4本で自立する基本の1台。連結は支柱が2本で、隣に置いた棚の支柱を共有して組み立てます。メーカーも「連結型のみでは使用できない」としているので、必ず単体1台からスタートしてください。連結できるのは<strong>高さと奥行が同じもの</strong>どうしです。
      </P>

      <div className="my-6 rounded-xl border border-gray-200 bg-white p-5" aria-label="単体と連結の組み合わせ例">
        <p className="text-sm font-bold text-gray-900">壁一面に3台並べる場合</p>
        <div className="mt-4 flex items-end gap-0 overflow-x-auto pb-2">
          <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center border-x-4 border-y-2 border-gray-900 bg-gray-100 text-xs font-bold">
            単体
            <span className="mt-1 font-normal text-gray-600">支柱4本</span>
          </div>
          <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-4 border-gray-900 bg-white text-xs font-bold">
            連結
            <span className="mt-1 font-normal text-gray-600">支柱2本</span>
          </div>
          <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center border-y-2 border-r-4 border-gray-900 bg-white text-xs font-bold">
            連結
            <span className="mt-1 font-normal text-gray-600">支柱2本</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          3台＝単体1台＋連結2台。支柱を共有するぶん、単体を3台並べるより部材が少なく、横幅も詰められます。
        </p>
      </div>

      {/* CURSOR指示：図解イラスト（単体＋連結の組み立てイメージ）
          内容：正面から見たスチールラック3台の線画。左端に「単体（支柱4本）」、右へ「連結（支柱2本）」×2。
                共有している支柱を濃いグレーで強調し、「支柱を共有」の吹き出し。下部に「高さ・奥行が同じものどうしで連結」の注記。
          スタイル：フラットな図解イラスト。白背景、gray-900系の線と塗り、差し色にオレンジ1色。日本語ラベル入り。
          比率/サイズ：16:9 / 1200×675px（WebP）
          保存先：/public/images/articles/saigai-bichiku-rack-trusco/diagram-renketsu.webp */}
      <img
        src={`${ARTICLE_IMG}diagram-renketsu.webp`}
        alt="単体1台に連結2台をつないで支柱を共有する組み立て図"
        loading="lazy"
        width={1200}
        height={675}
        className="my-6 w-full rounded-xl border border-gray-200"
      />

      <H3>外寸は表記寸法より大きい</H3>
      <P>
        商品名のW×D×Hは棚の呼び寸法で、設置に必要な外寸はひと回り大きくなります。たとえばM1.5-DS7545（表記W1460×D445×H2100）は、仕様表上の外寸が間口1,516×奥行552×高さ2,184mm、有効間口は1,416mmです。奥行で約10cm、高さで約8cm大きい。天井の照明やスプリンクラー、扉の開閉範囲、通路幅は外寸で確認してください。
      </P>

      <ProductGrid items={[R("221586"), R("221587")]} cols={2} />

      <H3>全ラインナップ早見表（当店取扱い34モデル）</H3>
      <P>
        高さ→間口→奥行の順に並べています。「価格を見る」から各商品ページへ移動できます。
      </P>
      <RackTable type="M1.5" />
      <RackTable type="M2" />
      <RackTable type="M3" />

      <MainCTA
        title="表にないサイズ・単体を探す場合は一覧へ"
        desc="早見表に単体が載っていないサイズでも、一覧ページで在庫と組み合わせを確認できます。"
      />

      {/* ===================== 5 ===================== */}
      <H2 id="scene">置き場所・用途別の選び方</H2>
      <P>
        同じ人数分の備蓄でも、置き場所によって最適な型とサイズは変わります。まずは自分の状況に近い行を探してください。
      </P>
      <Table
        head={["状況", "おすすめ", "理由"]}
        rows={[
          ["事務所・会議室の一角", "M3型 H1800・奥行471", "圧迫感を抑えつつ、水も置ける耐荷重"],
          ["専用の備蓄倉庫・バックヤード", "M3型 H2100・間口1800の連結", "天井高を活かして収納量を最大化"],
          ["学校・公民館・福祉施設", "M1.5型 奥行595", "毛布や紙おむつなど、軽くかさばる物向き"],
          ["工場・事業所の資機材置き場", "M3型 奥行571", "工具箱・蓄電池など奥行のある重量物向き"],
          ["食料と水を混ぜて置く", "M2型 奥行600", "200kg/段と深い奥行のバランス型"],
        ]}
      />

      <H3>事務所・会議室の一角に置く</H3>
      <P>
        執務スペースに置く場合、高さ2100mmは威圧感が出やすく、上段の出し入れに脚立が必要になります。H1800なら最上段も手が届く範囲です。奥行471mmのM3型は通路側への張り出しが小さく、水も置ける300kg/段。20〜50名規模の事業所なら、間口1500mmの単体＋連結で壁際に収まるケースが多くなります。
      </P>
      <ProductGrid items={[R("226727"), R("226728")]} cols={2} />

      <H3>専用の備蓄倉庫・バックヤードに置く</H3>
      <P>
        天井高が2,400mm以上ある倉庫なら、H2100を選んで収納量を稼ぎます。間口1800mmの連結を壁一面に並べると、支柱の本数が減って棚の有効面積が広がります。最上段は軽い毛布や保温シート、最下段は水という配置が基本です。
      </P>
      <ProductGrid items={[R("226743"), R("226744")]} cols={2} />

      <H3>学校・公民館・福祉施設に置く</H3>
      <P>
        避難所になる施設では、毛布、紙おむつ、生理用品、ダンボールベッドなど、軽いのに場所を取る物が中心。耐荷重よりも奥行が効くので、奥行595mmのM1.5型が合います。毛布の束を手前と奥の2列に置けるかどうかが、台数を左右します。
      </P>
      <FeatureCard p={R("221594")} label="学校・施設の軽量備蓄向け" />

      <H3>工場・事業所で資機材も置く</H3>
      <P>
        救助用の工具箱、蓄電池、ジャッキなどの資機材は、重いうえに奥行もあります。奥行571mmのM3型なら、奥行の大きい箱も棚からはみ出しにくくなります。
      </P>
      <FeatureCard p={R("226733")} label="重量物・資機材向け" />

      <H3>食料と水を混ぜて置く</H3>
      <P>
        「水専用の棚」「食料専用の棚」と分けるほどの量がない事業所では、M2型の奥行600mmが使いやすい選択です。下段に水、中段に食料、上段に衛生用品と、1台で完結させられます。
      </P>
      <FeatureCard p={R("223261")} label="食料と水の混載向け" />

      <MainCTA
        title="置き場所に合うサイズを一覧で比較"
        desc="高さ・間口・奥行の組み合わせを一覧で見比べられます。単体と連結をセットで選ぶのがおすすめです。"
      />

      {/* ===================== 6 ===================== */}
      <H2 id="layout">棚割りの基本と、ラックに入れる備蓄品</H2>
      <P>
        棚割りの原則は「重い物は下、軽い物は上、すぐ使う物は腰の高さ」です。重心が下がると揺れに強くなり、上段から落ちても危なくない物を上に置くことで、けがのリスクも下がります。
      </P>
      <Table
        head={["段", "置く物", "理由"]}
        rows={[
          ["最下段", "水、簡易トイレ、備蓄品箱", "最も重い。頻繁に出し入れしない"],
          ["2段目", "主食・食料（ローリングストック分）", "期限管理のため取り出しやすく"],
          ["3段目（腰〜目線）", "救急用品、照明、衛生用品", "発災直後に最初に使う"],
          ["4段目", "防災セット、工具", "中くらいの重さ。持ち出しを想定"],
          ["最上段", "毛布、保温シート", "軽く、落ちても危険が少ない"],
        ]}
      />
      <P>
        各段の前面には品名と数量、賞味期限を書いたラベルを貼っておくと、点検と入れ替えの時間が半分ほどで済みます。期限の近い物を手前に置く「先入れ先出し」も、棚割りの段階で決めておきましょう。
      </P>

      {/* CURSOR指示：棚割りイラスト
          内容：5段の災害備蓄ラックを正面から描いたイラスト。最下段に水のケースと簡易トイレの箱、2段目に食料の段ボール、
                3段目に救急箱・ランタン・ウェットタオル、4段目に防災リュックと工具箱、最上段に毛布の束。
                各段の右側に「最下段：重い物」「最上段：軽い物」などの日本語ラベル。各段前面に落下防止バー。
          スタイル：フラットなイラスト。白背景、グレー基調、ラベル部分のみオレンジ。メーカー名・ロゴなし。
          比率/サイズ：4:3 / 1200×900px（WebP）
          保存先：/public/images/articles/saigai-bichiku-rack-trusco/shelf-layout.webp */}
      <img
        src={`${ARTICLE_IMG}shelf-layout.webp`}
        alt="災害備蓄ラックの棚割り例。下段に水と簡易トイレ、上段に毛布を置いた配置"
        loading="lazy"
        width={1200}
        height={900}
        className="my-6 w-full rounded-xl border border-gray-200"
      />

      <H3>最下段に置くもの：まとめて保管する備蓄品箱とトイレ</H3>
      <P>
        非常災害用備蓄品箱FB-9000は外寸W900×D420×H370mm。奥行が420mmなので、奥行445mm以上の棚なら最下段に収まる計算です（有効寸法は商品ページで確認してください）。細かい備蓄品を箱ごと管理でき、棚の中で物が散らばりません。
      </P>
      <ProductGrid items={[R("232317"), R("172884"), R("172888")]} />
      <P>
        断水時は手を洗うのも体を拭くのも難しくなります。水を使わない清拭セットは、3日を超える長期化に備える品目です。火を使わずに湯を沸かせるセットは、火気厳禁の倉庫や屋内でも温かい食事を用意したい場合に向きます。
      </P>

      <H3>4段目に置くもの：救助・復旧用の工具</H3>
      <P>
        建物の一部が崩れた、扉が歪んで開かない。こうした場面で使う工具を1箱にまとめておくと、誰が持ち出しても中身がそろっています。工具箱は重く集中荷重になりやすいため、棚の中央ではなく支柱寄りに置くのがコツです。
      </P>
      <ProductGrid items={[R("233155"), R("233154")]} cols={2} />

      <H3>個人の持ち出し用は「ラックに置かない」選択も</H3>
      <P>
        ラックは「事業所に留まる3日間」のための備え。帰宅や避難で持ち出す防災リュックは、各自の席や出入口の近くに置くほうが実用的です。点数の違いで価格と重さが変わるので、配布する人数と持ち運ぶ距離で選びます。防水タイプなら雨の中の徒歩帰宅でも中身が濡れません。
      </P>
      <ProductGrid items={[R("6300065810"), R("6300065809"), R("6300065807"), R("6300072039")]} cols={2} />

      <SubCTA
        href={CTA.bousai}
        title="ラックに入れる防災用品をまとめて探す"
        desc="簡易トイレ、清拭用品、工具セット、照明など、備蓄品を一覧で確認できます。"
        label="防災用品の一覧を見る"
      />

      {/* ===================== 7 ===================== */}
      <H2 id="outside">ラックの外で備えるもの｜停電・水害・移動</H2>
      <P>
        備蓄ラックは「物を保管する」設備です。停電で明かりと通信が途絶える、浸水で備蓄倉庫そのものが使えなくなる、道路が寸断されて移動できない。こうした事態には、ラックとは別の備えが必要になります。
      </P>

      <H3>停電対策：蓄電池は「使う機器のW数×時間」で選ぶ</H3>
      <P>
        ポータブル蓄電池は容量（Wh）と出力（W）の2つで選びます。容量は使う機器の消費電力×使用時間の合計です。たとえばLED照明10W×5灯を8時間で400Wh、スマホ30台の充電（1台約15Whとして）で450Wh、合計850Wh。変換ロスを見込んで2割増しにすると、約1,000Wh以上が目安になります。出力は同時に使う機器の合計W数を上回るものを選んでください。
      </P>
      <P>
        蓄電池は小さく重い代表格で、棚に置くと集中荷重になります。最下段か床置きにし、直射日光と高温を避けて保管します。残量が減ったまま放置すると劣化が進むため、点検日に充電する運用にしておくと安心です。拡張バッテリーは対応機種が決まっているので、本体との組み合わせを商品ページで確認してください。
      </P>
      <ProductGrid
        items={[R("6300068614"), R("6300068613"), R("6300068612"), R("6300068610"), R("6300068611"), R("6300093098"), R("6300093099")]}
      />

      <H3>明かり・暖房・揺れへの備え</H3>
      <P>
        バッテリーを内蔵した充電式のLED電球は、普段の照明に組み込んでおける停電対策です。停電時の点灯時間や使い方は商品ページで確認してください。冬の発災では暖房も課題です。ジェットヒーターは燃焼式のため、使うときは必ず換気し、閉め切った室内やテント内では使わないでください。電源が必要な機種は、停電時に蓄電池の定格出力内で動かせるかを事前に確認します。揺れを感知して接続機器の動作を制御する装置は、発災直後の二次災害を減らす備えです。
      </P>
      <ProductGrid items={[R("223105"), R("186302"), R("172902")]} />

      <H3>水害対策：止水板と土のう</H3>
      <P>
        1階や半地下に備蓄倉庫がある場合、浸水すると備蓄品がまとめて使えなくなる。これが最悪のパターンです。出入口には止水板、すき間や排水口には土のうを用意しておきます。止水板は設置する場所の形状に合わせて、内カーブ・外カーブを選び分けます。ラック側では、最下段を床から少し上げる、浸水しても困らない物を下に置くといった工夫も有効です。
      </P>
      <ProductGrid items={[R("6300099083"), R("6300099084"), R("6300095083")]} />
      <SubCTA
        href={CTA.shisuiban}
        title="出入口の幅に合う止水板を探す"
        desc="設置場所の形や幅に合わせて選べる止水板を掲載しています。"
        label="止水板の一覧を見る"
      />

      <H3>救護スペースと移動手段</H3>
      <P>
        避難所や事業所の敷地では、救護・更衣・授乳のための仕切られた空間が欠かせません。フレーム付きの災害用テントなら、屋外にも体育館のような広い屋内にも設営可能。道路にがれきやガラスが散らばった状況では、パンクしない自転車が安否確認や物資の受け取りに役立ちます。荷物を運ぶなら三輪タイプ、小柄な人も使うなら20インチと、使う人と用途で選んでください。
      </P>
      <ProductGrid items={[R("232836"), R("218215"), R("218224"), R("218209"), R("218180")]} />

      <SubCTA
        href={CTA.bousai}
        title="停電・水害・移動の備えをまとめて見る"
        desc="蓄電池、照明、テント、ノーパンク自転車など、ラックの外で備える防災用品を掲載しています。"
        label="防災用品の一覧を見る"
      />

      {/* ===================== 8 ===================== */}
      <H2 id="install">設置と運用の注意点｜固定・床・通路・点検</H2>

      <H3>付属金具で必ず固定する</H3>
      <P>
        転倒防止用金具は、壁や床に留めて初めて機能します。壁の下地がコンクリートか、鉄骨か、石膏ボードかで固定方法が変わります。石膏ボードにビスを打っただけでは、満載のラックを支えきれません。下地がわからない場合は、ビル管理会社や施工業者に確認してから取り付けてください。
      </P>

      <H3>床の耐荷重を確認する</H3>
      <P>
        建築基準法施行令では、事務室の床の構造計算に用いる積載荷重を2,900N/㎡（約296kg/㎡）としています。水を満載したラックを1か所に集めると、局所的にこの値を大きく上回ることがあります。重い備蓄品は壁際に分散させ、大量に置く場合はビル管理会社に相談してください。
      </P>

      <H3>避難経路・設備の前をふさがない</H3>
      <P>
        通路、非常口、消火器、消火栓、分電盤の前には置きません。万一倒れた場合にも通路をふさがない向きに配置します。落下防止バーがあっても、上段に重い物を置かないことが基本です。
      </P>

      <H3>購入前に確認すること：搬入経路・組立・納期</H3>
      <P>
        H2100のモデルは支柱が2m超の長尺物で届きます。エレベーターのかご内寸、階段の踊り場、扉の幅を通るかを事前に確認してください。組立は支柱を立てながら棚板を掛けていく作業になるため、2名以上で行うのが基本。連結を含めて複数台を組む場合は、半日程度の作業時間を見込んでおくと慌てません。
      </P>
      <P>
        大型の業務用ラックはメーカーからの直送や取り寄せになることが多く、注文から届くまでに日数がかかる場合があります。防災訓練や監査の日程に合わせて設置したいなら、在庫と納期を商品ページで確認してから発注日を決めましょう。サイズ違いの注文は返品できないケースもあるため、型番の読み方を使って間口・奥行・高さ・単体／連結の4点を発注前にもう一度照合しておくと確実です。
      </P>

      <H3>点検は年2回、日付を決めて行う</H3>
      <P>
        防災の日（9月1日）と、1月か3月など半年後の日付を点検日に決めておくと、担当者が替わっても続けやすくなります。
      </P>
      <Table
        head={["点検項目", "確認する内容"]}
        rows={[
          ["固定金具", "緩み・外れがないか。床・壁側のアンカーも確認"],
          ["落下防止バー", "取扱説明書どおりの状態か。変形がないか"],
          ["荷重", "上段に重い物が移っていないか。中央に集中していないか"],
          ["賞味期限", "期限が近い食料・水を入れ替え、手前に並べ直す"],
          ["蓄電池", "残量を確認し、必要なら充電する"],
          ["簡易トイレ・消耗品", "数量がリストと合っているか"],
          ["ラベル", "品名・数量・期限の表示が最新か"],
        ]}
      />

      <MainCTA
        title="備蓄倉庫づくりは、ラック選びから"
        desc="型・サイズ・単体／連結を決めたら、一覧から在庫を確認できます。"
      />

      {/* ===================== 9 ===================== */}
      <H2 id="faq">よくある質問</H2>
      <div className="mt-6 space-y-4">
        {FAQS.map((f) => (
          <details key={f.q} className="group rounded-xl border border-gray-200 bg-white p-5 open:border-gray-900">
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              <span className="mr-2 text-gray-500">Q.</span>
              {f.q}
            </summary>
            <p className="mt-3 leading-7 text-gray-800">
              <span className="mr-2 font-bold text-gray-500">A.</span>
              {f.a}
            </p>
          </details>
        ))}
      </div>

      {/* ===================== まとめCTA ===================== */}
      <section aria-label="まとめ" className="mt-16 rounded-2xl border-2 border-gray-900 p-6 md:p-8">
        <p className="text-lg font-bold text-gray-900">選び方の要点</p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-800">
          <li>型は1段の耐荷重で選ぶ：M1.5型150kg、M2型200kg、M3型300kg。集中荷重では半分で計算。</li>
          <li>台数は水と毛布の置き場所から逆算。50名・3日分で水だけ約38ケース・約475kg。</li>
          <li>並べるときは単体1台＋連結。連結は高さと奥行が同じものどうし。</li>
          <li>外寸と天井高、床と壁の下地を設置前に確認する。</li>
        </ul>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href={CTA.rack}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:col-span-2"
          >
            災害備蓄ラックの一覧を見る →
          </a>
          <a
            href={CTA.set}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            防災セットの一覧 →
          </a>
          <a
            href={CTA.bousai}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            防災用品の一覧 →
          </a>
          <a
            href={CTA.shisuiban}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:col-span-2"
          >
            止水板の一覧 →
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-label="関連記事" className="mt-12">
          <p className="border-l-4 border-gray-900 pl-3 font-bold text-gray-900">あわせて読みたい</p>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-sm text-gray-800 underline underline-offset-2 hover:text-gray-600">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-12 border-t border-gray-200 pt-6 text-xs leading-6 text-gray-500">
        ※記事内の耐荷重・寸法はメーカー公表値および販売店の仕様表をもとに記載しています。仕様・価格・在庫は変更される場合があるため、購入前に各商品ページで最新情報を確認してください。備蓄量・台数の試算は目安であり、自治体や業界団体の指針、建物の条件に合わせて調整してください。ラックの固定や床の耐荷重については、建物の管理者や専門業者にご確認ください。
      </p>
      </main>
      <SiteFooter />
    </>
  );
}