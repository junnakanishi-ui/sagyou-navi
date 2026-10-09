/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

// ============================================================
// 作業用品ナビ｜KHKウォームホイールの選び方（トラスコ中山取扱い）
// 自己完結の page.tsx（中央レジストリなし）
// ============================================================

const SLUG = "khk-worm-wheel-guide";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const PUBLISHED = "2026-10-08";
const UPDATED = "2026-10-08";
const IMG_BASE = "/products/";
const ARTICLE_IMG = `/images/articles/${SLUG}/`;

const TITLE = "KHKウォームホイールの選び方｜型番の見方・AG/BG/CGの違い・相手ウォームと交換のポイント【トラスコ中山取扱い】";
const DESCRIPTION =
  "小原歯車工業（KHK）のウォームホイールを、型番の読み方（AG2-30R1＝モジュール2・歯数30・右ねじれ1条）、AG・AGF・AGDL・BG・CGの材質と精度の違い、相手ウォームの組み合わせ、減速比の計算、摩耗時の交換手順まで解説。トラスコ中山（オレンジブック）取扱いの36型番早見表付き。";

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

/** 楽天 crecote-shop（および楽天検索）：`?` の前の末尾スラッシュを維持し、既存クエリ（variantId 等）を保持して UTM を付与 */
function C(url: string): string {
  const i = url.indexOf("#");
  const head = i === -1 ? url : url.slice(0, i);
  const hash = i === -1 ? "" : url.slice(i);
  const q = head.indexOf("?");
  let path = q === -1 ? head : head.slice(0, q);
  const query = q === -1 ? "" : head.slice(q + 1);
  if (!path.endsWith("/")) path += "/";
  return `${path}?${query ? `${query}&` : ""}${UTM}${hash}`;
}

// ------------------------------------------------------------
// CTA（依頼で指定された一覧ページ）
// ------------------------------------------------------------
const CTA = {
  wheel: C(
    "https://search.rakuten.co.jp/search/mall/%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%A0%E3%83%9B%E3%82%A4%E3%83%BC%E3%83%AB/?p=2&sid=426972#qv_00000426972-00010055472-1",
  ),
  trusco: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html#sideNaviItems"),
  toolbox: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/9129bf6abc8.html"),
  cart: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/b1bfc8c2c2.html"),
  workbench: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/e2ea8bb6c2c.html"),
  partscase: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/a5d1a1bca5.html"),
  wagon: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/a5c4a1bca5.html"),
  handtool: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/bceabaeeb6.html"),
};

// ------------------------------------------------------------
// 商品データ（取得結果.xlsx 由来・URLは実URLのみ。重複行と一覧URL行は除外）
// ------------------------------------------------------------
type Series = "AG" | "AGF" | "AGDL" | "BG" | "CG" | "KG";
type Product = {
  id: string;
  series: Series;
  mod: string;
  z: number;
  hand: "R" | "L";
  n: number;
  ratio: string;
  model: string;
  name: string;
  tags: string[];
  point: string;
  url: string;
  img: string;
};

const PRODUCTS: Record<string, Product> = {
  "ta047584": { id: "ta047584", series: "KG", mod: "1", z: 50, hand: "R", n: 1, ratio: "50", model: "G1A50R1=12", name: "KG ウォームホイール G1A50R1=12（モジュール1・歯数50・右ねじれ1条）", tags: ["m1", "減速比50:1", "右ねじれ", "穴径φ12"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047584-g1a50r1e12/"), img: "ta047584-g1a50r1e12.jpg" },
  "ta047589": { id: "ta047589", series: "KG", mod: "2", z: 20, hand: "R", n: 2, ratio: "10", model: "G2A20R2=15", name: "KG ウォームホイール G2A20R2=15（モジュール2・歯数20・右ねじれ2条）", tags: ["m2", "減速比10:1", "右ねじれ", "穴径φ15"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047589-g2a20r2e15/"), img: "ta047589-g2a20r2e15.jpg" },
  "ta047588": { id: "ta047588", series: "KG", mod: "2", z: 20, hand: "R", n: 1, ratio: "20", model: "G2A20R1=15", name: "KG ウォームホイール G2A20R1=15（モジュール2・歯数20・右ねじれ1条）", tags: ["m2", "減速比20:1", "右ねじれ", "穴径φ15"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047588-g2a20r1e15/"), img: "ta047588-g2a20r1e15.jpg" },
  "ta047005": { id: "ta047005", series: "AG", mod: "1", z: 60, hand: "R", n: 1, ratio: "60", model: "AG1-60R1", name: "KHK ウォームホイール AG1-60R1（モジュール1・歯数60・右ねじれ1条）", tags: ["m1", "減速比60:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047005-ag160r1/"), img: "ta047005-ag160r1.jpg" },
  "ta047004": { id: "ta047004", series: "AG", mod: "1", z: 50, hand: "R", n: 1, ratio: "50", model: "AG1-50R1", name: "KHK ウォームホイール AG1-50R1（モジュール1・歯数50・右ねじれ1条）", tags: ["m1", "減速比50:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047004-ag150r1/"), img: "ta047004-ag150r1.jpg" },
  "ta047591": { id: "ta047591", series: "KG", mod: "2", z: 25, hand: "R", n: 1, ratio: "25", model: "G2A25R1-12", name: "KG ウォームホイール G2A25R1-12（モジュール2・歯数25・右ねじれ1条）", tags: ["m2", "減速比25:1", "右ねじれ"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047591-g2a25r1m12/"), img: "ta047591-g2a25r1m12.jpg" },
  "ta047017": { id: "ta047017", series: "AG", mod: "2", z: 30, hand: "R", n: 2, ratio: "15", model: "AG2-30R2", name: "KHK ウォームホイール AG2-30R2（モジュール2・歯数30・右ねじれ2条）", tags: ["m2", "減速比15:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047017-ag230r2/"), img: "ta047017-ag230r2.jpg" },
  "ta047021": { id: "ta047021", series: "AG", mod: "3", z: 20, hand: "R", n: 1, ratio: "20", model: "AG3-20R1", name: "KHK ウォームホイール AG3-20R1（モジュール3・歯数20・右ねじれ1条）", tags: ["m3", "減速比20:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047021-ag320r1/"), img: "ta047021-ag320r1.jpg" },
  "ta047126": { id: "ta047126", series: "BG", mod: "3", z: 20, hand: "R", n: 1, ratio: "20", model: "BG3-20R1J25", name: "KHK ウォームホイール BG3-20R1J25（モジュール3・歯数20・右ねじれ1条）", tags: ["m3", "減速比20:1", "右ねじれ", "Jシリーズ（穴径25）"], point: "リン青銅（CAC502）製・KHK4級。相手はSW。CGから置き換えて強度アップ。穴・キー溝加工済みのJシリーズ（穴径25mm）。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047126-bg320r1j25/"), img: "ta047126-bg320r1j25.jpg" },
  "ta047595": { id: "ta047595", series: "KG", mod: "2", z: 30, hand: "R", n: 2, ratio: "15", model: "G2A30R2-12", name: "KG ウォームホイール G2A30R2-12（モジュール2・歯数30・右ねじれ2条）", tags: ["m2", "減速比15:1", "右ねじれ"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047595-g2a30r2m12/"), img: "ta047595-g2a30r2m12.jpg" },
  "ta047592": { id: "ta047592", series: "KG", mod: "2", z: 30, hand: "L", n: 1, ratio: "30", model: "G2A30L1-12", name: "KG ウォームホイール G2A30L1-12（モジュール2・歯数30・左ねじれ1条）", tags: ["m2", "減速比30:1", "左ねじれ"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047592-g2a30l1m12/"), img: "ta047592-g2a30l1m12.jpg" },
  "ta047016": { id: "ta047016", series: "AG", mod: "2", z: 30, hand: "R", n: 1, ratio: "30", model: "AG2-30R1", name: "KHK ウォームホイール AG2-30R1（モジュール2・歯数30・右ねじれ1条）", tags: ["m2", "減速比30:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047016-ag230r1/"), img: "ta047016-ag230r1.jpg" },
  "ta047593": { id: "ta047593", series: "KG", mod: "2", z: 30, hand: "R", n: 1, ratio: "30", model: "G2A30R1=18", name: "KG ウォームホイール G2A30R1=18（モジュール2・歯数30・右ねじれ1条）", tags: ["m2", "減速比30:1", "右ねじれ", "穴径φ18"], point: "協育歯車（KG）のアルミニウム青銅系ホイール。相手は同社のウォーム。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047593-g2a30r1e18/"), img: "ta047593-g2a30r1e18.jpg" },
  "ta047022": { id: "ta047022", series: "AG", mod: "3", z: 20, hand: "R", n: 2, ratio: "10", model: "AG3-20R2", name: "KHK ウォームホイール AG3-20R2（モジュール3・歯数20・右ねじれ2条）", tags: ["m3", "減速比10:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047022-ag320r2/"), img: "ta047022-ag320r2.jpg" },
  "ta047023": { id: "ta047023", series: "AG", mod: "3", z: 30, hand: "R", n: 1, ratio: "30", model: "AG3-30R1", name: "KHK ウォームホイール AG3-30R1（モジュール3・歯数30・右ねじれ1条）", tags: ["m3", "減速比30:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047023-ag330r1/"), img: "ta047023-ag330r1.jpg" },
  "ta047020": { id: "ta047020", series: "AG", mod: "2", z: 60, hand: "R", n: 1, ratio: "60", model: "AG2-60R1", name: "KHK ウォームホイール AG2-60R1（モジュール2・歯数60・右ねじれ1条）", tags: ["m2", "減速比60:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047020-ag260r1/"), img: "ta047020-ag260r1.jpg" },
  "ta047002": { id: "ta047002", series: "AG", mod: "1.5", z: 60, hand: "R", n: 1, ratio: "60", model: "AG1.5-60R1", name: "KHK ウォームホイール AG1.5-60R1（モジュール1.5・歯数60・右ねじれ1条）", tags: ["m1.5", "減速比60:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047002-ag1560r1/"), img: "ta047002-ag1560r1.jpg" },
  "ta047130": { id: "ta047130", series: "BG", mod: "5", z: 20, hand: "R", n: 1, ratio: "20", model: "BG5-20R1", name: "KHK ウォームホイール BG5-20R1（モジュール5・歯数20・右ねじれ1条）", tags: ["m5", "減速比20:1", "右ねじれ"], point: "リン青銅（CAC502）製・KHK4級。相手はSW。CGから置き換えて強度アップ。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047130-bg520r1/"), img: "ta047130-bg520r1.jpg" },
  "ta047027": { id: "ta047027", series: "AG", mod: "3", z: 60, hand: "R", n: 1, ratio: "60", model: "AG3-60R1", name: "KHK ウォームホイール AG3-60R1（モジュール3・歯数60・右ねじれ1条）", tags: ["m3", "減速比60:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047027-ag360r1/"), img: "ta047027-ag360r1.jpg" },
  "ta047028": { id: "ta047028", series: "AG", mod: "4", z: 20, hand: "R", n: 1, ratio: "20", model: "AG4-20R1", name: "KHK ウォームホイール AG4-20R1（モジュール4・歯数20・右ねじれ1条）", tags: ["m4", "減速比20:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047028-ag420r1/"), img: "ta047028-ag420r1.jpg" },
  "ta047009": { id: "ta047009", series: "AG", mod: "2.5", z: 30, hand: "R", n: 2, ratio: "15", model: "AG2.5-30R2", name: "KHK ウォームホイール AG2.5-30R2（モジュール2.5・歯数30・右ねじれ2条）", tags: ["m2.5", "減速比15:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047009-ag2530r2/"), img: "ta047009-ag2530r2.jpg" },
  "ta047031": { id: "ta047031", series: "AG", mod: "4", z: 30, hand: "R", n: 2, ratio: "15", model: "AG4-30R2", name: "KHK ウォームホイール AG4-30R2（モジュール4・歯数30・右ねじれ2条）", tags: ["m4", "減速比15:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047031-ag430r2/"), img: "ta047031-ag430r2.jpg" },
  "ta047008": { id: "ta047008", series: "AG", mod: "2.5", z: 30, hand: "R", n: 1, ratio: "30", model: "AG2.5-30R1", name: "KHK ウォームホイール AG2.5-30R1（モジュール2.5・歯数30・右ねじれ1条）", tags: ["m2.5", "減速比30:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047008-ag2530r1/"), img: "ta047008-ag2530r1.jpg" },
  "ta047030": { id: "ta047030", series: "AG", mod: "4", z: 30, hand: "R", n: 1, ratio: "30", model: "AG4-30R1", name: "KHK ウォームホイール AG4-30R1（モジュール4・歯数30・右ねじれ1条）", tags: ["m4", "減速比30:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047030-ag430r1/"), img: "ta047030-ag430r1.jpg" },
  "ta047032": { id: "ta047032", series: "AG", mod: "4", z: 40, hand: "R", n: 1, ratio: "40", model: "AG4-40R1", name: "KHK ウォームホイール AG4-40R1（モジュール4・歯数40・右ねじれ1条）", tags: ["m4", "減速比40:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047032-ag440r1/?variantId=TA047032"), img: "ta047032-ag440r1.jpg" },
  "ta050010": { id: "ta050010", series: "AG", mod: "4", z: 60, hand: "R", n: 1, ratio: "60", model: "AG4-60R1", name: "KHK ウォームホイール AG4-60R1（モジュール4・歯数60・右ねじれ1条）", tags: ["m4", "減速比60:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta050010-ag460r1/?variantId=TA050010"), img: "ta050010-ag460r1.jpg" },
  "ta047029": { id: "ta047029", series: "AG", mod: "4", z: 20, hand: "R", n: 2, ratio: "10", model: "AG4-20R2", name: "KHK ウォームホイール AG4-20R2（モジュール4・歯数20・右ねじれ2条）", tags: ["m4", "減速比10:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047029-ag420r2/?variantId=TA047029"), img: "ta047029-ag420r2.jpg" },
  "ta047010": { id: "ta047010", series: "AG", mod: "2.5", z: 40, hand: "R", n: 1, ratio: "40", model: "AG2.5-40R1", name: "KHK ウォームホイール AG2.5-40R1（モジュール2.5・歯数40・右ねじれ1条）", tags: ["m2.5", "減速比40:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047010-ag2540r1/?variantId=TA047010"), img: "ta047010-ag2540r1.jpg" },
  "ta047036": { id: "ta047036", series: "AGF", mod: "6", z: 20, hand: "R", n: 1, ratio: "20", model: "AGF6-20R1", name: "KHK ウォームホイール AGF6-20R1（モジュール6・歯数20・右ねじれ1条）", tags: ["m6", "減速比20:1", "右ねじれ"], point: "アルミニウム青銅製・KHK2級。歯研ウォームKWGと組み合わせ、コンパクト設計向き。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047036-agf620r1/?variantId=TA047036"), img: "ta047036-agf620r1.jpg" },
  "ta047011": { id: "ta047011", series: "AG", mod: "2.5", z: 50, hand: "R", n: 1, ratio: "50", model: "AG2.5-50R1", name: "KHK ウォームホイール AG2.5-50R1（モジュール2.5・歯数50・右ねじれ1条）", tags: ["m2.5", "減速比50:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047011-ag2550r1/?variantId=TA047011"), img: "ta047011-ag2550r1.jpg" },
  "ta050049": { id: "ta050049", series: "CG", mod: "6", z: 60, hand: "R", n: 1, ratio: "60", model: "CG6-60R1", name: "KHK ウォームホイール CG6-60R1（モジュール6・歯数60・右ねじれ1条）", tags: ["m6", "減速比60:1", "右ねじれ"], point: "鋳鉄（FC200）製・KHK4級。相手はSW。価格を抑えた普及タイプ。", url: C("https://item.rakuten.co.jp/crecote-shop/ta050049-cg660r1/?variantId=TA050049"), img: "ta050049-cg660r1.jpg" },
  "ta050009": { id: "ta050009", series: "AG", mod: "4", z: 50, hand: "R", n: 1, ratio: "50", model: "AG4-50R1", name: "KHK ウォームホイール AG4-50R1（モジュール4・歯数50・右ねじれ1条）", tags: ["m4", "減速比50:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta050009-ag450r1/?variantId=TA050009"), img: "ta050009-ag450r1.jpg" },
  "ta047013": { id: "ta047013", series: "AG", mod: "2.5", z: 60, hand: "R", n: 1, ratio: "60", model: "AG2.5-60R1", name: "KHK ウォームホイール AG2.5-60R1（モジュール2.5・歯数60・右ねじれ1条）", tags: ["m2.5", "減速比60:1", "右ねじれ"], point: "アルミニウム青銅（CAC702）製・KHK2級。相手ウォームはSWG。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047013-ag2560r1/?variantId=TA047013"), img: "ta047013-ag2560r1.jpg" },
  "ta047035": { id: "ta047035", series: "AGDL", mod: "2", z: 60, hand: "R", n: 1, ratio: "60", model: "AGDL2-60R1", name: "KHK ウォームホイール AGDL2-60R1（モジュール2・歯数60・右ねじれ1条）", tags: ["m2", "減速比60:1", "右ねじれ"], point: "複リード。中心距離を変えずにバックラッシを調整できる。相手はKWGDL。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047035-agdl260r1/?variantId=TA047035"), img: "ta047035-agdl260r1.jpg" },
  "ta047291": { id: "ta047291", series: "CG", mod: "3", z: 40, hand: "R", n: 1, ratio: "40", model: "CG3-40R1", name: "KHK ウォームホイール CG3-40R1（モジュール3・歯数40・右ねじれ1条）", tags: ["m3", "減速比40:1", "右ねじれ"], point: "鋳鉄（FC200）製・KHK4級。相手はSW。価格を抑えた普及タイプ。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047291-cg340r1/?variantId=TA047291"), img: "ta047291-cg340r1.jpg" },
  "ta047123": { id: "ta047123", series: "BG", mod: "3", z: 20, hand: "L", n: 1, ratio: "20", model: "BG3-20L1", name: "KHK ウォームホイール BG3-20L1（モジュール3・歯数20・左ねじれ1条）", tags: ["m3", "減速比20:1", "左ねじれ"], point: "リン青銅（CAC502）製・KHK4級。相手はSW。CGから置き換えて強度アップ。", url: C("https://item.rakuten.co.jp/crecote-shop/ta047123-bg320l1/?variantId=TA047123"), img: "ta047123-bg320l1.jpg" },
};

function R(id: string): Product {
  const p = PRODUCTS[id];
  if (!p) throw new Error(`product not found: ${id}`);
  return p;
}

const MODULE_ORDER = ["1", "1.5", "2", "2.5", "3", "4", "5", "6"];

// ------------------------------------------------------------
// UIコンポーネント（gray-900 系・articleCls 準拠の見出し階層）
// ------------------------------------------------------------
function H2({ id, no, children }: { id: string; no: number; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-6 mt-14 flex scroll-mt-24 items-start gap-3 border-l-[6px] border-gray-900 pl-4 text-3xl font-black leading-snug tracking-wide text-gray-900 sm:gap-4 sm:text-4xl"
    >
      <span className="mt-1 inline-flex h-9 min-w-[2.25rem] shrink-0 items-center justify-center rounded-lg bg-gray-900 text-base font-black text-white sm:h-10 sm:min-w-[2.5rem] sm:text-lg">
        {no}
      </span>
      <span>{children}</span>
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className={`${cls.h3} border-b-2 border-gray-900 pb-2`}>
      <span className="mr-2 inline-block text-gray-900" aria-hidden="true">
        ■
      </span>
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}

/** 重要語のマーカー強調 */
function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function Point({ title = "ポイント", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-l-[6px] border-gray-900 bg-gray-50 p-5 sm:p-6">
      <p className="text-lg font-black tracking-wide text-gray-900 sm:text-xl">✓ {title}</p>
      <div className={`mt-3 ${cls.bodySm}`}>{children}</div>
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-2 border-gray-900 bg-white p-5 sm:p-6">
      <p className="text-lg font-black tracking-wide text-gray-900 sm:text-xl">⚠ 注意</p>
      <div className={`mt-3 ${cls.bodySm}`}>{children}</div>
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${p.name}の価格・在庫を楽天市場店で見る（新しいタブで開きます）`}
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
        <span className="absolute left-2 top-2 rounded bg-white px-2 py-0.5 text-[11px] font-bold text-red-700 ring-1 ring-red-200">
          楽天市場
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-gray-100 p-4">
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">
              {t}
            </span>
          ))}
        </div>
        <p className="line-clamp-3 text-sm font-bold leading-snug text-gray-900">{p.name}</p>
        <p className="text-xs font-medium text-gray-800">型番：{p.model}</p>
        <p className="text-xs leading-relaxed text-gray-900">{p.point}</p>
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
      aria-label={`${p.name}の価格・在庫を楽天市場店で見る（新しいタブで開きます）`}
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
        <span className="absolute left-3 top-3 rounded bg-white px-2 py-0.5 text-xs font-bold text-red-700 ring-1 ring-red-200">
          楽天市場
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-gray-100 p-5 sm:border-l sm:border-t-0">
        <span className="w-fit rounded bg-gray-900 px-2 py-1 text-xs font-bold text-white">{label}</span>
        <p className="text-xl font-black leading-snug tracking-wide text-gray-900 sm:text-2xl">{p.name}</p>
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-900">
              {t}
            </span>
          ))}
        </div>
        <p className={cls.bodySm}>{p.point}</p>
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
      <p className="text-2xl font-black tracking-wide sm:text-3xl">{title}</p>
      <p className="mt-3 text-base leading-relaxed text-gray-100">{desc}</p>
      <a
        href={CTA.wheel}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-bold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto"
      >
        ウォームホイールの一覧を見る（楽天市場）→
      </a>
    </div>
  );
}

function SubCTA({ href, title, desc, label }: { href: string; title: string; desc: string; label: string }) {
  return (
    <div className="my-8 flex flex-col gap-4 rounded-xl border-2 border-gray-900 bg-gray-50 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xl font-black tracking-wide text-gray-900 sm:text-2xl">{title}</p>
        <p className={`mt-2 ${cls.bodySm}`}>{desc}</p>
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

function Table({ head, rows, min = 640 }: { head: string[]; rows: ReactNode[][]; min?: number }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-300">
      <table className={cls.table} style={{ minWidth: min }}>
        <thead className="bg-gray-900 text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="whitespace-nowrap px-4 py-3.5 text-left text-base font-bold text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
              {r.map((c, j) => (
                <td key={j} className={cls.td}>
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

/** 引出し構成の図（上から順に積んだ帯。高さは引出し高さに比例） */

/** 型番チップ（早見表用） */
function ModelChip({ p }: { p: Product }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${p.model}の価格・在庫を楽天市場店で見る（新しいタブで開きます）`}
      className="inline-flex min-h-[44px] flex-col items-start justify-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-left hover:border-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
    >
      <span className="font-mono text-xs font-bold text-gray-900">{p.model}</span>
      <span className="text-[11px] font-medium text-gray-900">
        {p.ratio}:1・{p.hand === "R" ? "右" : "左"}
        {p.n}条 →
      </span>
    </a>
  );
}

/** モジュール別・全36型番の早見表 */
function QuickTable() {
  const all = Object.values(PRODUCTS);
  const groups: { key: string; label: string; test: (p: Product) => boolean }[] = [
    { key: "ag", label: "KHK AG（アルミ青銅・2級）", test: (p) => p.series === "AG" },
    { key: "khk", label: "KHK AGF・AGDL・BG・CG", test: (p) => ["AGF", "AGDL", "BG", "CG"].includes(p.series) },
    { key: "kg", label: "KG Gシリーズ", test: (p) => p.series === "KG" },
  ];
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="sticky left-0 z-10 bg-gray-900 px-3 py-3 text-left">モジュール</th>
            {groups.map((g) => (
              <th key={g.key} className="px-3 py-3 text-left">
                {g.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MODULE_ORDER.map((m) => (
            <tr key={m} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
              <th className="sticky left-0 z-10 bg-inherit px-3 py-3 text-left align-top font-bold text-gray-900">m{m}</th>
              {groups.map((g) => {
                const list = all
                  .filter((p) => p.mod === m && g.test(p))
                  .sort((a, b) => a.z - b.z || a.n - b.n || a.hand.localeCompare(b.hand));
                return (
                  <td key={g.key} className="px-3 py-3 align-top">
                    {list.length ? (
                      <div className="flex flex-wrap gap-1.5">
                        {list.map((p) => (
                          <ModelChip key={p.id} p={p} />
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                );
              })}
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
    q: "KHKのウォームホイールの型番はどう読みますか？",
    a: "AG2-30R1なら、AGが型式（アルミニウム青銅製のAGシリーズ）、2がモジュール、30が歯数、Rがねじれ方向（右）、1が条数です。末尾にJ25のようにJが付く型番は、穴径やキー溝を加工済みのJシリーズ（この場合は穴径25mm）を表します。",
  },
  {
    q: "AG・BG・CGの違いは何ですか？",
    a: "主に材質と精度が違います。AGはアルミニウム青銅（CAC702）でKHK2級、BGはリン青銅（CAC502）で4級、CGは鋳鉄（FC200）で4級です。相手のウォームも異なり、AGはSWG、BGとCGはSWと組み合わせます。BGはCGと互換性があり、CGから置き換えて強度を上げられます。",
  },
  {
    q: "ウォームホイールの減速比はどう計算しますか？",
    a: "ホイールの歯数をウォームの条数で割ります。歯数30・1条（R1）なら30:1、歯数30・2条（R2）なら15:1です。ウォームが1回転すると、ホイールは条数と同じ歯数分だけ進みます。",
  },
  {
    q: "ウォームとウォームホイールは何をそろえればかみ合いますか？",
    a: "モジュール、ねじれ方向（右・左）、条数の3つをそろえ、メーカーが指定する組み合わせの型式を選びます。KHKではSWGとAG、KWGとAGF、KWGDLとAGDL、SWとBG・CGが組み合わせです。中心距離（組立距離）はカタログの値に合わせて設計します。",
  },
  {
    q: "摩耗したウォームホイールだけを交換してもいいですか？",
    a: "ホイールだけの交換も可能ですが、相手のウォームも摩耗していると新しいホイールとの当たりが悪くなり、寿命が短くなることがあります。ウォームの歯面に段付き摩耗や傷がある場合は、セットでの交換を検討してください。交換時は潤滑油の入れ替えも合わせて行います。",
  },
  {
    q: "ウォームギヤは逆回転しない（セルフロック）と考えていいですか？",
    a: "条件によっては逆転しにくい性質がありますが、振動や潤滑状態で変わるため、確実な逆転防止として扱うのは避けてください。昇降装置など落下を防ぐ必要がある用途では、ブレーキなど別の保持手段を設けるのが一般的です。",
  },
];

const RELATED: { title: string; href: string }[] = [
  { title: "TRUSCOローラーキャビネットの選び方", href: "/articles/roller-cabinet-trusco" },
  { title: "工具キャビネットの湿気対策", href: "/articles/tool-cabinet-moisture-control" },
  { title: "TRUSCOスチール台車の選び方", href: "/articles/trusco-steel-cart-selection-guide" },
  { title: "ハンドリフターとハンドパレットの違い", href: "/articles/hand-lifter-vs-hand-pallet" },
  { title: "ライン作業のツールワゴン選び", href: "/articles/line-work-tool-wagon-selection" },
  { title: "スチール棚の選び方", href: "/articles/steel-shelf-erabikata" },
];

const TOC = [
  { id: "about", label: "KHKのウォームホイールとは｜トラスコ中山で買える理由" },
  { id: "model", label: "型番の読み方｜AG2-30R1を分解する" },
  { id: "type", label: "種類と材質の違い｜AG・AGF・AGDL・BG・CG・KG" },
  { id: "pair", label: "相手ウォームとの組み合わせルール" },
  { id: "select", label: "モジュール・歯数・減速比の選び方と36型番早見表" },
  { id: "replace", label: "摩耗したホイールの交換手順と現品の確認方法" },
  { id: "lube", label: "長持ちさせる潤滑と点検" },
  { id: "maint", label: "保全作業をはかどらせる道具と予備品管理" },
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
      <main className="mx-auto max-w-[850px] px-4 py-8 sm:px-6 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="パンくずリスト" className={cls.meta}>
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-1">›</span>
        <Link href="/articles" className="hover:underline">
          記事一覧
        </Link>
        <span className="mx-1">›</span>
        <span>KHKウォームホイールの選び方</span>
      </nav>

      {/* ===================== ヘッダー ===================== */}
      <header className="mt-4 overflow-hidden rounded-2xl bg-gray-900 text-white">
        <div className="p-6 md:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-300">MECHANICAL PARTS GUIDE</p>
          <h1 className="mt-3 text-4xl font-black leading-[1.15] tracking-wide text-white sm:text-5xl">
            KHKウォームホイールの選び方
            <span className="mt-3 block text-xl font-bold leading-snug tracking-wide text-gray-100 sm:text-2xl">
              型番の見方・AG/BG/CGの違い・相手ウォームと交換のポイント【トラスコ中山取扱い】
            </span>
          </h1>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm font-bold">
            {["型番を5秒で読める", "材質・精度の比較表", "減速比の計算", "交換手順", "36型番早見表"].map((t) => (
              <li key={t} className="rounded-full bg-white px-3 py-1.5 text-gray-900">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-medium text-gray-200">
            公開日：<time dateTime={PUBLISHED}>2026年10月8日</time>　最終更新日：
            <time dateTime={UPDATED}>2026年10月8日</time>　作業用品ナビ編集部
          </p>
        </div>
      </header>

      {/* CURSOR指示：アイキャッチ画像
          内容：作業台の上に、青銅色（金茶色）のウォームホイールと、それにかみ合う鋼製のウォーム軸を置いた接写。
                手前にノギスと、歯の摩耗した古いホイール（交換前）を並べて、新旧の比較がわかる構図。背景は工場の保全室。
          スタイル：写実的な商品写真風。斜め上45度、浅い被写界深度。文字・ロゴ・メーカー刻印は入れない。
          比率/サイズ：16:9 / 1600×900px（WebP）。OGP用に同構図で 1200×630px（JPG）も書き出し。
          保存先：/public/images/articles/khk-worm-wheel-guide/eyecatch.webp
                  /public/images/articles/khk-worm-wheel-guide/eyecatch-ogp.jpg */}
      <img
        src={`${ARTICLE_IMG}eyecatch.webp`}
        alt="青銅製のウォームホイールと鋼製のウォーム軸、摩耗した交換前のホイール"
        width={1600}
        height={900}
        className="mt-6 aspect-video w-full rounded-2xl object-cover"
      />

      <P>
        「減速機のウォームホイールが摩耗した。同じ物を手配したいが、型番の意味がわからない」「AGとBGはどちらでもいいのか」。この記事は、設備保全の担当者や小型機械の設計者に向けて、小原歯車工業（KHK）のウォームホイールを<Mark>型番から正しく選ぶ方法</Mark>をまとめたものです。トラスコ中山（オレンジブック）経由で手配できる36型番の早見表、相手ウォームとの組み合わせルール、交換時の確認手順まで、現品を手に取りながら読み進められる構成にしています。
      </P>

      <section aria-label="この記事の結論" className="mt-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
        <p className="text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
          結論：ウォームホイール選びは「4つをそろえる」だけ
        </p>
        <ol className="mt-4 space-y-3 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
          {[
            ["モジュール", "相手ウォームと同じ値。型番の型式記号の直後の数字（AG2-30R1なら2）。"],
            ["ねじれ方向", "R（右）かL（左）。相手ウォームと同じ向き。"],
            ["条数", "R1なら1条、R2なら2条。相手ウォームと同じ条数。減速比＝歯数÷条数。"],
            ["型式の組み合わせ", "KHKはSWG–AG、KWG–AGF、KWGDL–AGDL、SW–BG／CGが組み合わせ。"],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-black text-white">
                {i + 1}
              </span>
              <span>
                <strong className="font-black">{t}</strong>：{d}
              </span>
            </li>
          ))}
        </ol>
        <p className={`mt-4 ${cls.bodySm}`}>
          交換の場合は、さらに歯数と穴径・キー溝を現品に合わせます。歯数を変えると中心距離が変わるため、既存の歯車箱では同じ歯数を選ぶのが基本です。
        </p>
      </section>

      <nav aria-label="目次" className="mt-8 rounded-xl border-2 border-gray-900 bg-white p-5 sm:p-6">
        <p className="text-xl font-black tracking-wide text-gray-900 sm:text-2xl">目次</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[16px] leading-relaxed tracking-wide text-gray-900">
          {TOC.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="font-semibold underline-offset-2 hover:underline">
                {t.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <MainCTA
        title="型番が決まっている方は、一覧から探せます"
        desc="KHK・KGのウォームホイールを、モジュール・歯数・ねじれ方向別に掲載しています（楽天市場 CRECOTE店）。"
      />

      {/* ===================== 1 ===================== */}
      <H2 id="about" no={1}>
        KHKのウォームホイールとは｜トラスコ中山で買える理由
      </H2>
      <P>
        KHKは、埼玉県に本社を置く歯車メーカー・小原歯車工業のブランドです。平歯車、はすば歯車、かさ歯車、ウォームギヤなど標準歯車を幅広く在庫販売していて、設計者が「カタログから選んですぐ使える歯車」として指名することの多いメーカーです。
      </P>
      <P>
        工具・工場用品の卸であるトラスコ中山は、自社カタログ「オレンジブック」でKHKの標準歯車を取り扱っています。そのため、商品名が「オレンジブック トラスコ中山 KHK ウォームホイール」となっている販売ページが多く、<Mark>「トラスコ中山 KHK」で検索して型番を探す</Mark>保全担当者が少なくありません。同じくオレンジブックで扱われている協育歯車工業（KG）のウォームホイールも、この記事では合わせて紹介します。
      </P>

      <H3>ウォームギヤの基本：何ができる歯車か</H3>
      <P>
        ウォームギヤは、ねじ状の「ウォーム」と、それにかみ合う「ウォームホイール」の組み合わせです。軸が直角に食い違って配置され、1段で10:1〜60:1といった大きな減速比を取れるのが特長。コンベヤ、昇降装置、回転テーブル、開閉機構など、コンパクトに大きく減速したい場所で使われます。一方、歯面が滑りながらかみ合うため摩擦が大きく、潤滑の管理が寿命を左右します。ホイールに青銅系の材料が使われるのは、鋼製のウォームとの組み合わせで摩耗や焼付きを抑えるためです。
      </P>

      <FeatureCard p={R("ta047016")} label="もっとも標準的な構成：m2・歯数30・右1条" />

      <SubCTA
        href={CTA.trusco}
        title="トラスコ中山の取扱商品をまとめて見る"
        desc="歯車以外の工場用品・保全用品も、トラスコ中山の商品一覧から探せます。"
        label="トラスコ中山の商品一覧"
      />

      {/* ===================== 2 ===================== */}
      <H2 id="model" no={2}>
        型番の読み方｜AG2-30R1を分解する
      </H2>
      <P>
        KHKの型番は、仕様がそのまま並んだ「読める型番」です。現品の刻印やラベル、図面の部品表に書かれた型番を分解すれば、注文すべき1個が特定できます。
      </P>

      <div className="my-6 rounded-2xl border-2 border-gray-900 bg-white p-5">
        <p className="text-sm font-bold text-gray-500">例：AG2-30R1</p>
        <div className="mt-3 flex flex-wrap items-end gap-1 font-mono text-2xl font-bold md:text-3xl">
          <span className="rounded bg-gray-900 px-2 py-1 text-white">AG</span>
          <span className="rounded bg-gray-600 px-2 py-1 text-white">2</span>
          <span className="px-1 text-gray-400">-</span>
          <span className="rounded bg-gray-400 px-2 py-1 text-white">30</span>
          <span className="rounded bg-gray-200 px-2 py-1 text-gray-900">R</span>
          <span className="rounded bg-gray-200 px-2 py-1 text-gray-900">1</span>
        </div>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-800 sm:grid-cols-2">
          <li>
            <strong>AG</strong>：型式（材質・精度・相手ウォームが決まる）
          </li>
          <li>
            <strong>2</strong>：モジュール（歯の大きさ）
          </li>
          <li>
            <strong>30</strong>：歯数
          </li>
          <li>
            <strong>R</strong>：ねじれ方向（R＝右、L＝左）
          </li>
          <li>
            <strong>1</strong>：条数（相手ウォームのねじ山の数）
          </li>
          <li>
            <strong>J25</strong>（付く場合）：穴加工済みJシリーズ・穴径25mm
          </li>
        </ul>
      </div>

      <H3>減速比は「歯数÷条数」</H3>
      <P>
        型番から減速比もすぐに計算できます。ウォームが1回転すると、ホイールは条数と同じ歯数分だけ進みます。したがって<Mark>減速比＝ホイールの歯数÷条数</Mark>。AG4-20R1なら20:1、同じ歯数でも2条のAG4-20R2なら10:1です。モーター回転数が1,500min⁻¹なら、出力軸はそれぞれ75min⁻¹と150min⁻¹になります。
      </P>
      <Table
        head={["型番例", "歯数", "条数", "減速比", "入力1,500min⁻¹のときの出力"]}
        rows={[
          ["AG4-20R2", "20", "2", "10:1", "150min⁻¹"],
          ["AG4-20R1", "20", "1", "20:1", "75min⁻¹"],
          ["AG2-30R1", "30", "1", "30:1", "50min⁻¹"],
          ["AG4-60R1", "60", "1", "60:1", "25min⁻¹"],
        ]}
        min={520}
      />
      <ProductGrid items={[R("ta047028"), R("ta047029")]} cols={2} />

      <H3>KG（協育歯車）の型番の読み方</H3>
      <P>
        協育歯車のGシリーズは表記が少し異なります。G2A30R1=18なら、2がモジュール、30が歯数、R1が右ねじれ1条。「=18」は商品名に穴径φ18と併記されている穴径の表記です。「-12」のようにハイフンで終わる型番は表記ルールが異なるため、穴の仕様は商品ページで確認してください。
      </P>

      {/* ===================== 3 ===================== */}
      <H2 id="type" no={3}>
        種類と材質の違い｜AG・AGF・AGDL・BG・CG・KG
      </H2>
      <P>
        型式の違いは、材質・精度・歯の基準断面・相手ウォームの違いです。<Mark>型式が違うと相手ウォームも変わる</Mark>ので、交換のときは現品と同じ型式を選ぶのが原則です。
      </P>
      <Table
        head={["型式", "材質", "精度（KHK W002）", "相手ウォーム", "特長"]}
        rows={[
          ["AG", "アルミニウム青銅 CAC702", "2級", "SWG", "品揃えが豊富な標準品。耐摩耗性に優れる"],
          ["AGF", "アルミニウム青銅 CAC702", "2級", "KWG（歯研）", "歯研ウォームと組み、コンパクトな設計が可能"],
          ["AGDL", "アルミニウム青銅 CAC702", "2級", "KWGDL（複リード）", "中心距離を変えずにバックラッシ調整が可能"],
          ["BG", "リン青銅 CAC502", "4級", "SW", "CGと互換。CGから置き換えて強度アップ"],
          ["CG", "鋳鉄 FC200", "4級", "SW", "価格を抑えた一般普及タイプ"],
          ["KG Gシリーズ", "アルミニウム青銅系", "メーカー資料で確認", "KGのウォーム", "協育歯車工業の製品。同社ウォームと組み合わせる"],
        ]}
      />
      <p className="text-xs leading-6 text-gray-500">
        ※KHKの仕様はメーカー公表値・販売店の仕様表をもとに記載。AG・AGF・AGDLは軸直角方式・歯直角圧力角20°、BGは歯直角方式・歯直角圧力角14°30′です。
      </p>

      <H3>AGF：歯研ウォームと組む高精度タイプ</H3>
      <P>
        AGFは、歯面を研削仕上げした軸付きの歯研ウォームKWGと組み合わせるホイールです。ウォームの基準円直径が小さいため、ホイールとの組立距離をコンパクトに設定できます。
      </P>
      <H3>AGDL：バックラッシを後から詰められる複リード</H3>
      <P>
        複リードウォームギヤは、ウォームの左右の歯面でリード（進み）がわずかに違う構造です。ウォームを軸方向にずらすと歯の厚みが変わるため、<Mark>歯車箱の中心距離を変えずにバックラッシを調整</Mark>できます。位置決め精度が求められる割出し装置や、長期使用で摩耗したバックラッシを詰め直したい機械に向きます。
      </P>
      <ProductGrid items={[R("ta047036"), R("ta047035")]} cols={2} />

      <H3>BGとCG：SWウォームと組む普及タイプ</H3>
      <P>
        BGとCGはどちらもS45C製のSWウォームと組み合わせます。CGは鋳鉄製で価格を抑えたタイプ、BGはリン青銅製で耐摩耗性に優れたタイプです。メーカーはBGがCGと互換性があり、置き換えで強度を上げられるとしています。CGの摩耗が早い装置では、次の交換からBGに切り替える選択肢があります。型番末尾にJ25が付くBG3-20R1J25は、穴径やキー溝をKHK規格で加工済みのJシリーズ。届いてすぐ軸に組み付けられます。
      </P>
      <ProductGrid items={[R("ta047126"), R("ta047130"), R("ta047291"), R("ta050049")]} cols={2} />

      <H3>KG（協育歯車）Gシリーズ</H3>
      <P>
        協育歯車工業のGシリーズは、当店ではモジュール1と2の小型サイズを取り扱っています。=12・=15のように穴径がわかる型番なら、軸径に合わせてそのまま選べます。相手は同じKGのウォームを使い、KHKのウォームと混在させないでください。
      </P>
      <ProductGrid items={[R("ta047588"), R("ta047589"), R("ta047584"), R("ta047591"), R("ta047595")]} />

      <MainCTA
        title="型式が決まったら、モジュールと歯数で絞り込み"
        desc="AG・BG・CGなど型式ごとに、モジュール・歯数・ねじれ方向の違うホイールを掲載しています。"
      />

      {/* ===================== 4 ===================== */}
      <H2 id="pair" no={4}>
        相手ウォームとの組み合わせルール
      </H2>
      <P>
        ウォームホイールは単体では使えません。相手のウォームと「かみ合う条件」がそろって初めて機能します。メーカーの注意書きでも、<Mark>同じねじれ方向・同じ条数</Mark>の組み合わせで使うよう明記されています。
      </P>
      <Table
        head={["そろえる項目", "確認方法", "そろわないと"]}
        rows={[
          ["モジュール", "型番の型式記号の直後の数字", "歯の大きさが合わず、かみ合わない"],
          ["ねじれ方向（R/L）", "型番のR・L。現品は歯すじの傾きで判断", "かみ合わない"],
          ["条数", "型番のR1・R2。ウォームはねじ山の本数", "かみ合わない／減速比が変わる"],
          ["型式の組み合わせ", "SWG–AG、KWG–AGF、KWGDL–AGDL、SW–BG・CG", "歯形・圧力角が合わず、当たりが悪化"],
          ["中心距離（組立距離）", "カタログの組立距離に合わせて軸間を設計", "バックラッシ過大・過小、偏摩耗"],
        ]}
      />
      <Caution>
        AG（軸直角・圧力角20°）とBG（歯直角・圧力角14°30′）は、歯の基準断面と圧力角が違います。モジュールと歯数が同じでも、相手ウォームを替えずにAGとBGを入れ替えることはできません。
      </Caution>

      <H3>左ねじれ（L）が必要なケース</H3>
      <P>
        ウォームギヤの大半は右ねじれですが、装置の回転方向や配置の都合で左ねじれが使われていることがあります。交換で注文する前に、現品の型番にLが入っていないかを必ず確認してください。歯車の軸を縦にして置いたとき、歯すじが右上がりなら右ねじれ、左上がりなら左ねじれです。
      </P>
      <ProductGrid items={[R("ta047123"), R("ta047592"), R("ta047593")]} />

      {/* ===================== 5 ===================== */}
      <H2 id="select" no={5}>
        モジュール・歯数・減速比の選び方と36型番早見表
      </H2>
      <P>
        新しく設計する場合は、必要な減速比とトルクから歯数・条数・モジュールを決めます。モジュールが大きいほど歯が大きく強くなり、ホイールの外径も大きくなります。AG系（軸直角方式）なら、ホイールの基準円直径はおおよそ<Mark>モジュール×歯数</Mark>。AG2-30なら約60mm、AG4-60なら約240mmです。
      </P>
      <Table
        head={["モジュール", "サイズ感", "向く用途の例"]}
        rows={[
          ["m1〜1.5", "小型（基準円 約50〜90mm）", "小型の送り機構、計測・検査装置、ダンパー開閉"],
          ["m2〜2.5", "中型（基準円 約40〜150mm）", "コンベヤ、回転テーブル、小型昇降装置"],
          ["m3〜6", "大型（基準円 約60〜360mm）", "大型昇降装置、ゲート開閉、重量物の回転"],
        ]}
        min={520}
      />
      <p className="text-xs leading-6 text-gray-500">
        ※基準円直径は本記事掲載の型番（歯数20〜60）での概算です。強度・許容トルクはメーカーカタログの強度計算値で確認してください。
      </p>

      <H3>小型：m1〜1.5</H3>
      <P>
        歯数50〜60で大きな減速比を取りつつ、外径を抑えたいときのサイズです。小型モーターの回転を大きく落とし、ゆっくり動かす機構に向いています。
      </P>
      <ProductGrid items={[R("ta047004"), R("ta047005"), R("ta047002")]} />

      <H3>中型：m2〜2.5</H3>
      <P>
        もっとも出番の多いサイズ帯です。同じm2.5でも歯数30・40・50・60がそろい、1条と2条も選べます。ここで注意したいのが、<Mark>歯数を変えると中心距離も変わる</Mark>こと。既存の歯車箱で「減速比だけ変えたい」と歯数違いのホイールに替えても、軸間距離が合わずに組めません。減速比を変えたい場合は、同じ歯数で条数を変える（R1→R2）方法を、相手ウォームの交換とセットで検討します。
      </P>
      <ProductGrid items={[R("ta047017"), R("ta047020"), R("ta047008"), R("ta047009"), R("ta047010"), R("ta047011"), R("ta047013")]} />

      <H3>大型：m3以上</H3>
      <P>
        重量物の昇降や大きなトルクを伝える装置に使うサイズです。歯数20の2条（10:1）から歯数60の1条（60:1）まで、用途に応じて選べます。
      </P>
      <ProductGrid items={[R("ta047021"), R("ta047022"), R("ta047023"), R("ta047027")]} cols={2} />

      <H3>36型番早見表（モジュール別）</H3>
      <P>
        型番の下に、減速比とねじれ方向・条数を添えました。タップで商品ページへ移動します（表は横スクロール可）。
      </P>
      <QuickTable />

      <MainCTA
        title="早見表にない型番は一覧ページへ"
        desc="モジュール・歯数違いのウォームホイールを一覧で探せます（楽天市場 CRECOTE店）。"
      />

      {/* ===================== 6 ===================== */}
      <H2 id="replace" no={6}>
        摩耗したホイールの交換手順と現品の確認方法
      </H2>
      <H3>交換のサイン</H3>
      <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {[
          "運転中の異音（うなり音・打音）が大きくなった",
          "出力軸のガタ（バックラッシ）が増えた",
          "歯面に段付き摩耗や欠け、ピッチングがある",
          "潤滑油に金色・茶色の金属粉が混じる",
          "停止位置がずれる、送り量が安定しない",
          "ギヤボックスの温度が以前より高い",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3">
            <span aria-hidden="true" className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900" />
            <span className="text-gray-800">{t}</span>
          </li>
        ))}
      </ul>

      <H3>型番がわからないときの確認手順</H3>
      <ol className="mt-4 space-y-3 text-sm leading-7 text-gray-800">
        {[
          ["図面・部品表を確認", "装置の図面や保全台帳に型番が残っていれば、それが最も確実。"],
          ["現品の刻印を確認", "ハブ側面などに型番が刻印されていることがある。油汚れを落として確認する。"],
          ["歯数を数える", "1本目にマーカーで印を付け、一周数える。"],
          ["外径を測ってモジュールを推定", "AG系なら外径÷(歯数＋2)がおおよそのモジュール。カタログの外径表と照合する。"],
          ["ねじれ方向と条数を確認", "歯すじの傾きで右・左を判断。相手ウォームのねじ山の本数が条数。"],
          ["穴径・キー溝を測る", "下穴品を選ぶ場合は追加工が必要。穴加工済み品なら寸法が合うか確認。"],
        ].map(([t, d], i) => (
          <li key={t} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
              {i + 1}
            </span>
            <span>
              <strong className="text-gray-900">{t}</strong>：{d}
            </span>
          </li>
        ))}
      </ol>
      <Caution>
        外径からのモジュール推定は目安です。摩耗した現品は外径が小さくなっていることがあり、型式（AG・BGなど）によっても寸法の基準が異なります。最終的にはメーカーカタログの寸法表と照合してください。
      </Caution>

      <H3>ホイールだけ替えるか、ウォームもセットで替えるか</H3>
      <P>
        ホイールは青銅系、ウォームは鋼製のため、先に摩耗するのは通常ホイールです。ただしウォームの歯面に段付きや傷が出ていると、新しいホイールとの当たりが悪くなり、早期摩耗の原因になります。ウォームの歯面を指でなぞって段差を感じる場合は、セットでの交換をおすすめします。交換後は潤滑油を入れ替え、慣らし運転で当たりを確認しましょう。
      </P>
      <P>
        たとえば現品がAG4-30R1なら、同じAG4-30R1を手配するのが基本です。同じm4でも歯数40・50・60のホイールは外径も中心距離も変わるため、既存の歯車箱には組めません。
      </P>
      <ProductGrid items={[R("ta047030"), R("ta047031"), R("ta047032"), R("ta050009"), R("ta050010")]} />

      <SubCTA
        href={CTA.handtool}
        title="分解・組立に使う工具をそろえる"
        desc="六角レンチ、スパナ、プライヤー、ハンマーなど、ギヤボックスの分解・組立に使う手作業工具を掲載しています。"
        label="手作業工具の一覧を見る"
      />
      <SubCTA
        href={CTA.workbench}
        title="分解した部品を広げる作業台"
        desc="ギヤボックスを分解するときは、部品を順番に並べられる広い作業面があると組立ミスを防げます。"
        label="作業台の一覧を見る"
      />

      {/* ===================== 7 ===================== */}
      <H2 id="lube" no={7}>
        長持ちさせる潤滑と点検
      </H2>
      <P>
        ウォームギヤは歯面が滑りながら力を伝えるため、ほかの歯車より発熱と摩耗が起きやすい構造です。メーカーの強度計算も、<Mark>極圧添加剤入りの適正粘度のギヤ油による油浴潤滑</Mark>を前提にしています。グリースを塗っただけで高速・連続運転すると、計算上の寿命は期待できません。
      </P>
      <Table
        head={["点検項目", "目安・ポイント"]}
        rows={[
          ["油量", "油面計・検油窓で規定量を確認。不足は焼付きの原因"],
          ["油の状態", "変色、金属粉、乳化（水の混入）がないか"],
          ["油の交換", "装置メーカーの指定周期で交換。ホイール交換時は必ず入れ替え"],
          ["温度", "ケースを触れないほど熱い場合は、潤滑不足・過負荷を疑う"],
          ["バックラッシ", "出力軸のガタを定期的に測り、増え方の傾向を記録"],
        ]}
        min={480}
      />
      <Point title="軸受とスラストにも注意">
        ウォームには大きな軸方向の力（スラスト）が働きます。軸がたわまないよう、軸受は歯車の近くに頑丈に配置するのが設計の基本です。ホイールを替えても異音が収まらない場合は、軸受の摩耗も疑ってください。
      </Point>

      {/* ===================== 8 ===================== */}
      <H2 id="maint" no={8}>
        保全作業をはかどらせる道具と予備品管理
      </H2>
      <P>
        ウォームホイールは、壊れてから手配すると装置が止まる期間が長くなる部品です。重要設備に使っている型番は<Mark>予備品を1個持っておく</Mark>だけで、復旧時間を大きく縮められます。予備のホイール、キー、止め輪、軸受などは、装置ごとにまとめて保管すると、交換作業の段取りが早くなります。
      </P>
      <Table
        head={["場面", "あると便利な物", "理由"]}
        rows={[
          ["予備品の保管", "パーツケース", "装置名・型番ラベルを付けて、キーや止め輪と一緒に管理"],
          ["現場への持ち出し", "工具箱", "交換に使う工具一式を1箱にまとめ、忘れ物を防ぐ"],
          ["巡回・段取り", "ツールワゴン", "工具と部品、ウエス、油を載せて現場を回れる"],
          ["重いギヤボックスの移動", "運搬台車", "大型モジュールのギヤボックスは重量物。腰を痛めない"],
        ]}
        min={560}
      />
      <SubCTA
        href={CTA.partscase}
        title="予備ギヤ・キー・止め輪はパーツケースで"
        desc="型番ごとに区画を分ければ、在庫切れにもすぐ気づけます。"
        label="パーツケースの一覧を見る"
      />
      <SubCTA
        href={CTA.toolbox}
        title="交換作業の工具を1箱にまとめる"
        desc="現場に持ち出す工具を工具箱にまとめておくと、段取りの時間が短くなります。"
        label="工具箱の一覧を見る"
      />
      <SubCTA
        href={CTA.wagon}
        title="保全巡回にはツールワゴン"
        desc="工具・部品・潤滑油をまとめて運べるツールワゴンを掲載しています。"
        label="ツールワゴンの一覧を見る"
      />
      <SubCTA
        href={CTA.cart}
        title="ギヤボックスの運搬に台車を"
        desc="取り外した減速機を保全室まで運ぶときに使える運搬台車を掲載しています。"
        label="運搬台車の一覧を見る"
      />

      {/* ===================== 9 ===================== */}
      <H2 id="faq" no={9}>
        よくある質問
      </H2>
      <div className="mt-6 space-y-4">
        {FAQS.map((f) => (
          <details key={f.q} className="group rounded-xl border-2 border-gray-200 bg-white p-5 open:border-gray-900 sm:p-6">
            <summary className={`cursor-pointer list-none ${cls.faqQ}`}>
              <span className="mr-2 text-gray-900">Q.</span>
              {f.q}
            </summary>
            <p className={`mt-3 ${cls.body}`}>
              <span className="mr-2 font-black text-gray-900">A.</span>
              {f.a}
            </p>
          </details>
        ))}
      </div>

      {/* ===================== まとめCTA ===================== */}
      <section aria-label="まとめ" className="mt-16 rounded-2xl border-2 border-gray-900 p-6 md:p-8">
        <p className="text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">選び方のおさらい</p>
        <ul className="mt-4 space-y-2 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
          <li>型番は「型式・モジュール・歯数・ねじれ方向・条数」。AG2-30R1＝AG・m2・歯数30・右・1条。</li>
          <li>減速比＝歯数÷条数。歯数を変えると中心距離が変わる。</li>
          <li>相手ウォームとはモジュール・ねじれ方向・条数・型式の組み合わせをそろえる。</li>
          <li>交換は現品と同じ型番が基本。ウォームの摩耗も確認し、潤滑油も入れ替える。</li>
        </ul>
        <a
          href={CTA.wheel}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-base font-bold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          ウォームホイールの一覧を見る（楽天市場）→
        </a>
        <a
          href={CTA.trusco}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border-2 border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          トラスコ中山の商品一覧を見る（Yahoo!店）→
        </a>
        <p className="mt-6 text-sm font-bold text-gray-900">保全作業の道具をそろえる（Yahoo!店）</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            [CTA.handtool, "手作業工具"],
            [CTA.partscase, "パーツケース"],
            [CTA.toolbox, "工具箱"],
            [CTA.wagon, "ツールワゴン"],
            [CTA.workbench, "作業台"],
            [CTA.cart, "運搬台車"],
          ].map(([href, label]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:border-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              {label} →
            </a>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section aria-label="関連記事" className="mt-12">
          <p className="border-l-[6px] border-gray-900 pl-4 text-2xl font-black tracking-wide text-gray-900 sm:text-3xl">
            あわせて読みたい
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block rounded-lg border border-gray-300 bg-white px-4 py-3 text-base font-bold text-gray-900 hover:border-gray-900 hover:bg-gray-50"
                >
                  {r.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className={`mt-12 border-t border-gray-300 pt-6 ${cls.meta} leading-6`}>
        ※材質・精度・組み合わせなどの仕様は、小原歯車工業（KHK）・協育歯車工業（KG）の公表値および販売店の仕様表をもとに記載しています。強度・許容トルク・寸法は型番ごとに異なるため、設計や交換の際は必ずメーカーカタログで確認してください。記事中の減速比・出力回転数・基準円直径は計算上の目安です。仕様・価格・在庫・納期は変更される場合があるため、購入前に各商品ページで最新情報を確認してください。
      </p>
      </main>
      <SiteFooter />
    </>
  );
}
