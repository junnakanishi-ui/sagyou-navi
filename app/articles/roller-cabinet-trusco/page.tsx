/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

// ============================================================
// 作業用品ナビ｜TRUSCOローラーキャビネットの選び方
// 自己完結の page.tsx（中央レジストリなし）
// ============================================================

const SLUG = "roller-cabinet-trusco";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const PUBLISHED = "2026-10-08";
const UPDATED = "2026-10-08";
const IMG_BASE = "/products/";
const ARTICLE_IMG = `/images/articles/${SLUG}/`;

const TITLE = "TRUSCOローラーキャビネットの選び方｜TFRC・TRC型番の違いと引出し構成の早見表【全31モデル】";
const DESCRIPTION =
  "トラスコ中山のローラーキャビネットを、型番の読み方（TFRC＝ブラック/オレンジ、TRC-R＝レッド、S＝仕切板付）、引出し4〜8段の構成、50・100・150mmの引出しに入る工具、デバイダーなどのオプション、搬入時の注意点まで解説。全31モデルの早見表付き。";

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
// URLヘルパー（Yahoo!店 signcity-yshop）
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

// ------------------------------------------------------------
// CTA（依頼で指定された一覧ページ）
// ------------------------------------------------------------
const CTA = {
  roller: Y(
    "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?X=3&p=%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC%E3%82%AD%E3%83%A3%E3%83%93%E3%83%8D%E3%83%83%E3%83%88&sc_i=shopping-pc-web-category-storesg-h_srch-srchbtn-sgstfrom-category-storeitm-h_srch-srchbox&strcid=a5c8a5e9a5&b=31&view=grid",
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
// 商品データ（取得結果.xlsx 由来・URLは実URLのみ）
// ------------------------------------------------------------
type Product = { id: string; name: string; model: string; tags: string[]; point: string; url: string; img: string };
type Cfg = "121" | "123" | "042" | "070" | "232" | "341";
type Col = "TFRC" | "TFRC-S" | "TRC-R" | "TRC-SR" | "TRC-C3R" | "TRC-C4R";
type Cabinet = { id: string; cfg: Cfg; col: Col; model: string };
type Divider = { id: string; h: number; l: number; model: string };

const PRODUCTS: Record<string, Product> = {
  "261603": { id: "261603", name: "TRUSCO ローラーキャビネット 引出8段（50×3・100×4・150×1）ブラック/オレンジ 仕切板付", model: "TFRC-341S", tags: ["引出8段", "ブラック/オレンジ", "仕切板付"], point: "浅い引出しが3段。ドライバー・レンチなど手工具が多い整備向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261603.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title"), img: "261603.jpg" },
  "262453": { id: "262453", name: "TRUSCO ローラーキャビネット 引出8段（50×3・100×4・150×1）レッド 仕切板付", model: "TRC-341SR", tags: ["引出8段", "レッド", "仕切板付"], point: "浅い引出しが3段。ドライバー・レンチなど手工具が多い整備向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262453.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title"), img: "262453.jpg" },
  "262451": { id: "262451", name: "TRUSCO ローラーキャビネット 引出8段（50×3・100×4・150×1）レッド TRC-C4×1台付", model: "TRC-341C4R", tags: ["引出8段", "レッド", "TRC-C4付"], point: "浅い引出しが3段。ドライバー・レンチなど手工具が多い整備向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262451.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title"), img: "262451.jpg" },
  "262445": { id: "262445", name: "TRUSCO ローラーキャビネット 引出7段（50×2・100×3・150×2）レッド 仕切板付", model: "TRC-232SR", tags: ["引出7段", "レッド", "仕切板付"], point: "浅・中・深をバランスよく配置。迷ったときの万能構成。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262445.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title"), img: "262445.jpg" },
  "261601": { id: "261601", name: "TRUSCO ローラーキャビネット 引出7段（50×2・100×3・150×2）ブラック/オレンジ 仕切板付", model: "TFRC-232S", tags: ["引出7段", "ブラック/オレンジ", "仕切板付"], point: "浅・中・深をバランスよく配置。迷ったときの万能構成。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261601.html?sc_i=shopping-pc-web-result-storesch-rsltlst-title"), img: "261601.jpg" },
  "262426": { id: "262426", name: "TRUSCO ローラーキャビネット 引出7段（100×7）レッド 仕切板付", model: "TRC-070SR", tags: ["引出7段", "レッド", "仕切板付"], point: "全段100mmで高さが均一。工具を種類別に段で分けたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262426.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262426.jpg" },
  "261595": { id: "261595", name: "TRUSCO ローラーキャビネット 引出7段（100×7）ブラック/オレンジ 仕切板付", model: "TFRC-070S", tags: ["引出7段", "ブラック/オレンジ", "仕切板付"], point: "全段100mmで高さが均一。工具を種類別に段で分けたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261595.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261595.jpg" },
  "262450": { id: "262450", name: "TRUSCO ローラーキャビネット 引出8段（50×3・100×4・150×1）レッド TRC-C3×1台付", model: "TRC-341C3R", tags: ["引出8段", "レッド", "TRC-C3付"], point: "浅い引出しが3段。ドライバー・レンチなど手工具が多い整備向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262450.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262450.jpg" },
  "262443": { id: "262443", name: "TRUSCO ローラーキャビネット 引出7段（50×2・100×3・150×2）レッド TRC-C4×1台付", model: "TRC-232C4R", tags: ["引出7段", "レッド", "TRC-C4付"], point: "浅・中・深をバランスよく配置。迷ったときの万能構成。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262443.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262443.jpg" },
  "262424": { id: "262424", name: "TRUSCO ローラーキャビネット 引出7段（100×7）レッド TRC-C4×1台付", model: "TRC-070C4R", tags: ["引出7段", "レッド", "TRC-C4付"], point: "全段100mmで高さが均一。工具を種類別に段で分けたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262424.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262424.jpg" },
  "261593": { id: "261593", name: "TRUSCO ローラーキャビネット 引出6段（100×4・150×2）ブラック/オレンジ 仕切板付", model: "TFRC-042S", tags: ["引出6段", "ブラック/オレンジ", "仕切板付"], point: "50mm段なしで中〜深型が中心。ラチェット類や中型工具が多い人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261593.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261593.jpg" },
  "262422": { id: "262422", name: "TRUSCO ローラーキャビネット 引出6段（100×4・150×2）レッド 仕切板付", model: "TRC-042SR", tags: ["引出6段", "レッド", "仕切板付"], point: "50mm段なしで中〜深型が中心。ラチェット類や中型工具が多い人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262422.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262422.jpg" },
  "262420": { id: "262420", name: "TRUSCO ローラーキャビネット 引出6段（100×4・150×2）レッド TRC-C4×1台付", model: "TRC-042C4R", tags: ["引出6段", "レッド", "TRC-C4付"], point: "50mm段なしで中〜深型が中心。ラチェット類や中型工具が多い人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262420.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262420.jpg" },
  "262431": { id: "262431", name: "TRUSCO ローラーキャビネット 引出6段（50×1・100×2・150×3）レッド TRC-C3×1台付", model: "TRC-123C3R", tags: ["引出6段", "レッド", "TRC-C3付"], point: "150mmの深い引出しが3段。電動工具やケース入り工具が多い現場向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262431.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262431.jpg" },
  "262419": { id: "262419", name: "TRUSCO ローラーキャビネット 引出6段（100×4・150×2）レッド TRC-C3×1台付", model: "TRC-042C3R", tags: ["引出6段", "レッド", "TRC-C3付"], point: "50mm段なしで中〜深型が中心。ラチェット類や中型工具が多い人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262419.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262419.jpg" },
  "262428": { id: "262428", name: "TRUSCO ローラーキャビネット 引出4段（50×1・100×2・150×1）レッド TRC-C4×1台付", model: "TRC-121C4R", tags: ["引出4段", "レッド", "TRC-C4付"], point: "引出しを4段に絞った構成。深い引出しも1段あり、基本工具をまとめたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262428.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262428.jpg" },
  "262427": { id: "262427", name: "TRUSCO ローラーキャビネット 引出4段（50×1・100×2・150×1）レッド TRC-C3×1台付", model: "TRC-121C3R", tags: ["引出4段", "レッド", "TRC-C3付"], point: "引出しを4段に絞った構成。深い引出しも1段あり、基本工具をまとめたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262427.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262427.jpg" },
  "262452": { id: "262452", name: "TRUSCO ローラーキャビネット 引出8段（50×3・100×4・150×1）レッド", model: "TRC-341R", tags: ["引出8段", "レッド"], point: "浅い引出しが3段。ドライバー・レンチなど手工具が多い整備向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262452.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262452.jpg" },
  "261602": { id: "261602", name: "TRUSCO ローラーキャビネット 引出8段（50×3・100×4・150×1）ブラック/オレンジ", model: "TFRC-341", tags: ["引出8段", "ブラック/オレンジ"], point: "浅い引出しが3段。ドライバー・レンチなど手工具が多い整備向き。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261602.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261602.jpg" },
  "262425": { id: "262425", name: "TRUSCO ローラーキャビネット 引出7段（100×7）レッド", model: "TRC-070R", tags: ["引出7段", "レッド"], point: "全段100mmで高さが均一。工具を種類別に段で分けたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262425.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262425.jpg" },
  "261594": { id: "261594", name: "TRUSCO ローラーキャビネット 引出7段（100×7）ブラック/オレンジ", model: "TFRC-070", tags: ["引出7段", "ブラック/オレンジ"], point: "全段100mmで高さが均一。工具を種類別に段で分けたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261594.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261594.jpg" },
  "262444": { id: "262444", name: "TRUSCO ローラーキャビネット 引出7段（50×2・100×3・150×2）レッド", model: "TRC-232R", tags: ["引出7段", "レッド"], point: "浅・中・深をバランスよく配置。迷ったときの万能構成。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262444.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262444.jpg" },
  "261600": { id: "261600", name: "TRUSCO ローラーキャビネット 引出7段（50×2・100×3・150×2）ブラック/オレンジ", model: "TFRC-232", tags: ["引出7段", "ブラック/オレンジ"], point: "浅・中・深をバランスよく配置。迷ったときの万能構成。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261600.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261600.jpg" },
  "261597": { id: "261597", name: "TRUSCO ローラーキャビネット 引出4段（50×1・100×2・150×1）ブラック/オレンジ 仕切板付", model: "TFRC-121S", tags: ["引出4段", "ブラック/オレンジ", "仕切板付"], point: "引出しを4段に絞った構成。深い引出しも1段あり、基本工具をまとめたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261597.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261597.jpg" },
  "262430": { id: "262430", name: "TRUSCO ローラーキャビネット 引出4段（50×1・100×2・150×1）レッド 仕切板付", model: "TRC-121SR", tags: ["引出4段", "レッド", "仕切板付"], point: "引出しを4段に絞った構成。深い引出しも1段あり、基本工具をまとめたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262430.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262430.jpg" },
  "262433": { id: "262433", name: "TRUSCO ローラーキャビネット 引出6段（50×1・100×2・150×3）レッド", model: "TRC-123R", tags: ["引出6段", "レッド"], point: "150mmの深い引出しが3段。電動工具やケース入り工具が多い現場向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262433.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262433.jpg" },
  "261598": { id: "261598", name: "TRUSCO ローラーキャビネット 引出6段（50×1・100×2・150×3）ブラック/オレンジ", model: "TFRC-123", tags: ["引出6段", "ブラック/オレンジ"], point: "150mmの深い引出しが3段。電動工具やケース入り工具が多い現場向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261598.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261598.jpg" },
  "261592": { id: "261592", name: "TRUSCO ローラーキャビネット 引出6段（100×4・150×2）ブラック/オレンジ", model: "TFRC-042", tags: ["引出6段", "ブラック/オレンジ"], point: "50mm段なしで中〜深型が中心。ラチェット類や中型工具が多い人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261592.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261592.jpg" },
  "262421": { id: "262421", name: "TRUSCO ローラーキャビネット 引出6段（100×4・150×2）レッド", model: "TRC-042R", tags: ["引出6段", "レッド"], point: "50mm段なしで中〜深型が中心。ラチェット類や中型工具が多い人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262421.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262421.jpg" },
  "261596": { id: "261596", name: "TRUSCO ローラーキャビネット 引出4段（50×1・100×2・150×1）ブラック/オレンジ", model: "TFRC-121", tags: ["引出4段", "ブラック/オレンジ"], point: "引出しを4段に絞った構成。深い引出しも1段あり、基本工具をまとめたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261596.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261596.jpg" },
  "262429": { id: "262429", name: "TRUSCO ローラーキャビネット 引出4段（50×1・100×2・150×1）レッド", model: "TRC-121R", tags: ["引出4段", "レッド"], point: "引出しを4段に絞った構成。深い引出しも1段あり、基本工具をまとめたい人向け。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/262429.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "262429.jpg" },
  "261620": { id: "261620", name: "TRUSCO ローラーキャビネット用サイドテーブル 木製", model: "TFRC-STM", tags: ["オプション", "サイドテーブル", "木製"], point: "キャビネットの横に作業スペースを足すオプション。木製天板タイプ。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261620.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261620.jpg" },
  "261621": { id: "261621", name: "TRUSCO ローラーキャビネット用サイドテーブル スチール", model: "TFRC-STS", tags: ["オプション", "サイドテーブル", "スチール"], point: "キャビネットの横に作業スペースを足すオプション。スチール天板タイプ。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261621.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261621.jpg" },
  "261614": { id: "261614", name: "TRUSCO ローラーキャビネット パーティションフレームセット H150用", model: "TFRC-PAF-H150SET", tags: ["仕切り", "H150用", "フレームセット"], point: "高さ150mmの引出しを区切るフレームのセット。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261614.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261614.jpg" },
  "261613": { id: "261613", name: "TRUSCO ローラーキャビネット パーティションフレームセット H100用", model: "TFRC-PAF-H100SET", tags: ["仕切り", "H100用", "フレームセット"], point: "高さ100mmの引出しを区切るフレームのセット。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261613.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261613.jpg" },
  "261617": { id: "261617", name: "TRUSCO ローラーキャビネット パーティション H150用 縦", model: "TFRC-PA-H150T", tags: ["仕切り", "H150用", "縦"], point: "150mm引出し用の縦仕切り。区画を追加したいときに。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261617.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261617.jpg" },
  "261615": { id: "261615", name: "TRUSCO ローラーキャビネット パーティションフレームセット H50用", model: "TFRC-PAF-H50SET", tags: ["仕切り", "H50用", "フレームセット"], point: "高さ50mmの引出しを区切るフレームのセット。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261615.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261615.jpg" },
  "261616": { id: "261616", name: "TRUSCO ローラーキャビネット パーティション H100用 縦", model: "TFRC-PA-H100T", tags: ["仕切り", "H100用", "縦"], point: "100mm引出し用の縦仕切り。区画を追加したいときに。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261616.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261616.jpg" },
  "261618": { id: "261618", name: "TRUSCO ローラーキャビネット パーティション H50用 縦", model: "TFRC-PA-H50T", tags: ["仕切り", "H50用", "縦"], point: "50mm引出し用の縦仕切り。区画を追加したいときに。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261618.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261618.jpg" },
  "261608": { id: "261608", name: "TRUSCO ローラーキャビネット デバイダー H150用 L295", model: "TFRC-DB-H150X295", tags: ["仕切り", "H150用", "L295"], point: "高さ150mmの引出しを細かく区切るデバイダー。長さ295mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261608.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261608.jpg" },
  "261607": { id: "261607", name: "TRUSCO ローラーキャビネット デバイダー H150用 L195", model: "TFRC-DB-H150X195", tags: ["仕切り", "H150用", "L195"], point: "高さ150mmの引出しを細かく区切るデバイダー。長さ195mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261607.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261607.jpg" },
  "261605": { id: "261605", name: "TRUSCO ローラーキャビネット デバイダー H100用 L295", model: "TFRC-DB-H100X295", tags: ["仕切り", "H100用", "L295"], point: "高さ100mmの引出しを細かく区切るデバイダー。長さ295mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261605.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261605.jpg" },
  "261611": { id: "261611", name: "TRUSCO ローラーキャビネット デバイダー H50用 L295", model: "TFRC-DB-H50X295", tags: ["仕切り", "H50用", "L295"], point: "高さ50mmの引出しを細かく区切るデバイダー。長さ295mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261611.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261611.jpg" },
  "261604": { id: "261604", name: "TRUSCO ローラーキャビネット デバイダー H100用 L195", model: "TFRC-DB-H100X195", tags: ["仕切り", "H100用", "L195"], point: "高さ100mmの引出しを細かく区切るデバイダー。長さ195mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261604.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261604.jpg" },
  "261609": { id: "261609", name: "TRUSCO ローラーキャビネット デバイダー H150用 L95", model: "TFRC-DB-H150X95", tags: ["仕切り", "H150用", "L95"], point: "高さ150mmの引出しを細かく区切るデバイダー。長さ95mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261609.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261609.jpg" },
  "261606": { id: "261606", name: "TRUSCO ローラーキャビネット デバイダー H100用 L95", model: "TFRC-DB-H100X95", tags: ["仕切り", "H100用", "L95"], point: "高さ100mmの引出しを細かく区切るデバイダー。長さ95mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261606.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261606.jpg" },
  "261612": { id: "261612", name: "TRUSCO ローラーキャビネット デバイダー H50用 L95", model: "TFRC-DB-H50X95", tags: ["仕切り", "H50用", "L95"], point: "高さ50mmの引出しを細かく区切るデバイダー。長さ95mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261612.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261612.jpg" },
  "261610": { id: "261610", name: "TRUSCO ローラーキャビネット デバイダー H50用 L195", model: "TFRC-DB-H50X195", tags: ["仕切り", "H50用", "L195"], point: "高さ50mmの引出しを細かく区切るデバイダー。長さ195mm。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261610.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261610.jpg" },
  "261619": { id: "261619", name: "TRUSCO ローラーキャビネット用サイドポケット", model: "TFRC-SP", tags: ["オプション", "サイドポケット"], point: "側面に小物の置き場をつくるオプション。よく使う物の一時置きに。", url: Y("https://store.shopping.yahoo.co.jp/signcity-yshop/261619.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img"), img: "261619.jpg" },
};

const CABINETS: Cabinet[] = [
  { id: "261603", cfg: "341", col: "TFRC-S", model: "TFRC-341S" },
  { id: "262453", cfg: "341", col: "TRC-SR", model: "TRC-341SR" },
  { id: "262451", cfg: "341", col: "TRC-C4R", model: "TRC-341C4R" },
  { id: "262445", cfg: "232", col: "TRC-SR", model: "TRC-232SR" },
  { id: "261601", cfg: "232", col: "TFRC-S", model: "TFRC-232S" },
  { id: "262426", cfg: "070", col: "TRC-SR", model: "TRC-070SR" },
  { id: "261595", cfg: "070", col: "TFRC-S", model: "TFRC-070S" },
  { id: "262450", cfg: "341", col: "TRC-C3R", model: "TRC-341C3R" },
  { id: "262443", cfg: "232", col: "TRC-C4R", model: "TRC-232C4R" },
  { id: "262424", cfg: "070", col: "TRC-C4R", model: "TRC-070C4R" },
  { id: "261593", cfg: "042", col: "TFRC-S", model: "TFRC-042S" },
  { id: "262422", cfg: "042", col: "TRC-SR", model: "TRC-042SR" },
  { id: "262420", cfg: "042", col: "TRC-C4R", model: "TRC-042C4R" },
  { id: "262431", cfg: "123", col: "TRC-C3R", model: "TRC-123C3R" },
  { id: "262419", cfg: "042", col: "TRC-C3R", model: "TRC-042C3R" },
  { id: "262428", cfg: "121", col: "TRC-C4R", model: "TRC-121C4R" },
  { id: "262427", cfg: "121", col: "TRC-C3R", model: "TRC-121C3R" },
  { id: "262452", cfg: "341", col: "TRC-R", model: "TRC-341R" },
  { id: "261602", cfg: "341", col: "TFRC", model: "TFRC-341" },
  { id: "262425", cfg: "070", col: "TRC-R", model: "TRC-070R" },
  { id: "261594", cfg: "070", col: "TFRC", model: "TFRC-070" },
  { id: "262444", cfg: "232", col: "TRC-R", model: "TRC-232R" },
  { id: "261600", cfg: "232", col: "TFRC", model: "TFRC-232" },
  { id: "261597", cfg: "121", col: "TFRC-S", model: "TFRC-121S" },
  { id: "262430", cfg: "121", col: "TRC-SR", model: "TRC-121SR" },
  { id: "262433", cfg: "123", col: "TRC-R", model: "TRC-123R" },
  { id: "261598", cfg: "123", col: "TFRC", model: "TFRC-123" },
  { id: "261592", cfg: "042", col: "TFRC", model: "TFRC-042" },
  { id: "262421", cfg: "042", col: "TRC-R", model: "TRC-042R" },
  { id: "261596", cfg: "121", col: "TFRC", model: "TFRC-121" },
  { id: "262429", cfg: "121", col: "TRC-R", model: "TRC-121R" },
];

const DIVIDERS: Divider[] = [
  { id: "261608", h: 150, l: 295, model: "TFRC-DB-H150X295" },
  { id: "261607", h: 150, l: 195, model: "TFRC-DB-H150X195" },
  { id: "261605", h: 100, l: 295, model: "TFRC-DB-H100X295" },
  { id: "261611", h: 50, l: 295, model: "TFRC-DB-H50X295" },
  { id: "261604", h: 100, l: 195, model: "TFRC-DB-H100X195" },
  { id: "261609", h: 150, l: 95, model: "TFRC-DB-H150X95" },
  { id: "261606", h: 100, l: 95, model: "TFRC-DB-H100X95" },
  { id: "261612", h: 50, l: 95, model: "TFRC-DB-H50X95" },
  { id: "261610", h: 50, l: 195, model: "TFRC-DB-H50X195" },
];

function R(id: string): Product {
  const p = PRODUCTS[id];
  if (!p) throw new Error(`product not found: ${id}`);
  return p;
}

const CFG_INFO: Record<Cfg, { steps: number; drawers: number[]; fit: string }> = {
  "121": { steps: 4, drawers: [50, 100, 100, 150], fit: "基本工具をコンパクトに" },
  "123": { steps: 6, drawers: [50, 100, 100, 150, 150, 150], fit: "電動工具・ケース物が多い" },
  "042": { steps: 6, drawers: [100, 100, 100, 100, 150, 150], fit: "中型の工具が中心" },
  "070": { steps: 7, drawers: [100, 100, 100, 100, 100, 100, 100], fit: "種類別に段で分けたい" },
  "232": { steps: 7, drawers: [50, 50, 100, 100, 100, 150, 150], fit: "迷ったらこれ。万能型" },
  "341": { steps: 8, drawers: [50, 50, 50, 100, 100, 100, 100, 150], fit: "手工具が多い整備向き" },
};
const CFG_ORDER: Cfg[] = ["121", "123", "042", "070", "232", "341"];
const COLS: { key: Col; label: string; sub: string }[] = [
  { key: "TFRC", label: "TFRC", sub: "ブラック/オレンジ" },
  { key: "TFRC-S", label: "TFRC-S", sub: "同・仕切板付" },
  { key: "TRC-R", label: "TRC-R", sub: "レッド" },
  { key: "TRC-SR", label: "TRC-SR", sub: "同・仕切板付" },
  { key: "TRC-C3R", label: "TRC-C3R", sub: "レッド＋TRC-C3付" },
  { key: "TRC-C4R", label: "TRC-C4R", sub: "レッド＋TRC-C4付" },
];

// ------------------------------------------------------------
// UIコンポーネント（gray-900 系）
// ------------------------------------------------------------
function H2({ id, no, children }: { id: string; no: number; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-16 flex scroll-mt-24 items-start gap-3 border-l-4 border-gray-900 pl-3 text-xl font-bold leading-snug text-gray-900 md:text-2xl"
    >
      <span className="mt-0.5 inline-flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded bg-gray-900 text-sm font-bold text-white">
        {no}
      </span>
      <span>{children}</span>
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 border-b-2 border-gray-200 pb-2 text-lg font-bold text-gray-900">
      <span className="mr-2 text-gray-400">■</span>
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-8 text-gray-800">{children}</p>;
}

/** グレーのマーカー強調 */
function Mark({ children }: { children: ReactNode }) {
  return (
    <strong className="bg-[linear-gradient(transparent_60%,#e5e7eb_60%)] font-bold text-gray-900">{children}</strong>
  );
}

function Point({ title = "ポイント", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-l-4 border-gray-900 bg-gray-50 p-5">
      <p className="text-sm font-bold text-gray-900">✓ {title}</p>
      <div className="mt-2 text-sm leading-7 text-gray-800">{children}</div>
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-2 border-gray-300 bg-white p-5">
      <p className="text-sm font-bold text-gray-900">⚠ 注意</p>
      <div className="mt-2 text-sm leading-7 text-gray-800">{children}</div>
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${p.name}の価格・在庫をYahoo!店で見る（新しいタブで開きます）`}
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
        <span className="absolute left-2 top-2 rounded bg-white px-2 py-0.5 text-[11px] font-bold text-red-600 ring-1 ring-red-200">
          Yahoo!店
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
      aria-label={`${p.name}の価格・在庫をYahoo!店で見る（新しいタブで開きます）`}
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
        <span className="absolute left-3 top-3 rounded bg-white px-2 py-0.5 text-xs font-bold text-red-600 ring-1 ring-red-200">
          Yahoo!店
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-gray-100 p-5 sm:border-l sm:border-t-0">
        <span className="w-fit rounded bg-gray-900 px-2 py-1 text-xs font-bold text-white">{label}</span>
        <p className="text-base font-bold leading-snug text-gray-900">{p.name}</p>
        <div className="flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
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
        href={CTA.roller}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-bold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:w-auto"
      >
        ローラーキャビネットの一覧を見る（Yahoo!店）→
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

function Table({ head, rows, min = 640 }: { head: string[]; rows: ReactNode[][]; min?: number }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full border-collapse text-sm" style={{ minWidth: min }}>
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

/** 引出し構成の図（上から順に積んだ帯。高さは引出し高さに比例） */
function DrawerStack({ cfg }: { cfg: Cfg }) {
  const info = CFG_INFO[cfg];
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-3">
      <p className="text-sm font-bold text-gray-900">
        {cfg}（{info.steps}段）
      </p>
      <div className="mt-2 w-20 rounded-sm border-2 border-gray-900 bg-gray-900 p-0.5">
        {info.drawers.map((h, i) => (
          <div
            key={i}
            className={`mb-0.5 flex items-center justify-center rounded-[2px] text-[9px] font-bold last:mb-0 ${
              h === 50 ? "bg-gray-200 text-gray-700" : h === 100 ? "bg-gray-400 text-white" : "bg-gray-600 text-white"
            }`}
            style={{ height: h * 0.32 }}
          >
            {h}
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[11px] leading-snug text-gray-600">{info.fit}</p>
    </div>
  );
}

/** 表セル用のサムネ付き商品リンク */
function MatrixProductLink({ id, model }: { id: string; model: string }) {
  const p = PRODUCTS[id];
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={`${model}の価格・在庫を見る（新しいタブで開きます）`}
      className="group inline-flex min-h-[44px] min-w-[9.5rem] items-center gap-2 rounded-lg border border-gray-200 bg-white p-1.5 text-left transition hover:border-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
    >
      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md border border-gray-100 bg-white">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt={`${model}の商品画像`}
          width={56}
          height={56}
          loading="lazy"
          className="h-full w-full object-contain p-1 transition group-hover:scale-105"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[11px] font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-2">
          {model}
        </span>
        <span className="mt-0.5 block text-[11px] font-bold text-gray-600">見る →</span>
      </span>
    </a>
  );
}

/** 全31モデルのラインナップ表（構成×カラー・仕様） */
function LineupMatrix() {
  const find = (cfg: Cfg, col: Col) => CABINETS.find((c) => c.cfg === cfg && c.col === col);
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[1100px] border-collapse text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="sticky left-0 z-10 bg-gray-900 px-3 py-3 text-left">引出し構成</th>
            {COLS.map((c) => (
              <th key={c.key} className="px-2 py-3 text-center">
                <span className="block font-bold">{c.label}</span>
                <span className="block text-[11px] font-normal text-gray-300">{c.sub}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CFG_ORDER.map((cfg) => (
            <tr key={cfg} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
              <th className="sticky left-0 z-10 bg-inherit px-3 py-3 text-left align-top font-bold text-gray-900">
                {cfg}
                <span className="block text-[11px] font-normal text-gray-600">
                  {CFG_INFO[cfg].steps}段・{CFG_INFO[cfg].fit}
                </span>
              </th>
              {COLS.map((c) => {
                const cab = find(cfg, c.key);
                return (
                  <td key={c.key} className="px-2 py-3 text-center align-middle">
                    {cab ? <MatrixProductLink id={cab.id} model={cab.model} /> : <span className="text-gray-300">—</span>}
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

/** デバイダー早見表（適合引出し高さ×長さ） */
function DividerMatrix() {
  const hs = [50, 100, 150];
  const ls = [95, 195, 295];
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="px-3 py-3 text-left">適合引出し</th>
            {ls.map((l) => (
              <th key={l} className="px-3 py-3 text-center">
                長さ L{l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hs.map((h) => (
            <tr key={h} className="border-t border-gray-200 odd:bg-white even:bg-gray-50">
              <th className="px-3 py-3 text-left font-bold text-gray-900">高さ{h}mm用</th>
              {ls.map((l) => {
                const d = DIVIDERS.find((x) => x.h === h && x.l === l);
                return (
                  <td key={l} className="px-3 py-3 text-center">
                    {d ? <MatrixProductLink id={d.id} model={d.model} /> : <span className="text-gray-300">—</span>}
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
    q: "TRUSCOのローラーキャビネットのTFRCとTRC-Rは何が違いますか？",
    a: "主な違いは本体の色です。TFRC-○○○はブラック/オレンジ、型番末尾にRが付くTRC-○○○Rはレッドです。引出し構成を表す3桁の数字が同じなら、引出しの段数と高さの組み合わせも同じです。購入前には各商品ページで寸法・質量を確認してください。",
  },
  {
    q: "型番の3桁の数字は何を表していますか？",
    a: "高さ50mm・100mm・150mmの引出しが、それぞれ何段あるかを表しています。たとえば232なら50mmが2段、100mmが3段、150mmが2段の計7段です。341なら50mm×3、100mm×4、150mm×1の計8段になります。",
  },
  {
    q: "仕切板付（S・SR）と仕切りなしはどちらを選べばいいですか？",
    a: "ドライバーやビットなど小物が多く、定位置管理をしたいなら仕切板付が向いています。電動工具など大きな物が中心なら仕切りなしを選び、必要な引出しだけデバイダーやパーティションを後から追加する方法もあります。仕切板付は本体質量が重くなる点も考慮してください。",
  },
  {
    q: "引出し1段にどれくらいの重さまで入れられますか？",
    a: "販売店の仕様表では、均等積載量は引出し1段あたり30kg、1台あたりの最大積載量は420kgです。重い工具は下の段に入れ、1段に荷重を集中させないようにしてください。",
  },
  {
    q: "ローラーキャビネットとツールワゴンはどう使い分けますか？",
    a: "工具をしまって鍵をかけ、定位置で管理するならローラーキャビネット、作業中に工具や部品を手元へ運ぶならツールワゴンが向いています。整備場では、保管用にローラーキャビネット、作業用にツールワゴンを併用するケースが多くあります。",
  },
  {
    q: "届いたときに注意することはありますか？",
    a: "販売店の案内では車上渡しのため、トラックからの荷降ろしはお客様側で行う必要があります。本体は構成により約45〜80kgあるので、2人以上で作業し、台車や搬入経路も事前に確保しておくと安心です。",
  },
];

const RELATED: { title: string; href: string }[] = [
  { title: "TRUSCO鋼鉄製運搬車（スチール台車）の選び方", href: "/articles/trusco-steel-cart-selection-guide" },
  { title: "スチール棚の選び方｜耐荷重区分と使い分け", href: "/articles/steel-shelf-erabikata" },
  { title: "Milwaukee PACKOUTの選び方", href: "/articles/milwaukee-packout-selection-guide" },
  { title: "絶縁工具とは？違いと選び方の基礎", href: "/articles/insulated-tool-basics" },
  { title: "TRUSCO災害備蓄ラックの選び方", href: "/articles/saigai-bichiku-rack-trusco" },
];

const TOC = [
  { id: "about", label: "TRUSCOローラーキャビネットとは｜共通仕様と特長" },
  { id: "model", label: "型番の読み方と全31モデル早見表" },
  { id: "drawer", label: "引出し構成の選び方｜50・100・150mmに何が入るか" },
  { id: "partition", label: "仕切板付（S）と仕切りなし、どちらを選ぶか" },
  { id: "option", label: "オプションで使いやすくする" },
  { id: "usecase", label: "職種・用途別のおすすめ構成" },
  { id: "compare", label: "ツールワゴン・作業台・工具箱との使い分け" },
  { id: "delivery", label: "購入前のチェックポイント｜搬入・設置・使い方" },
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
        <span className="text-gray-700">TRUSCOローラーキャビネットの選び方</span>
      </nav>

      {/* ===================== ヘッダー ===================== */}
      <header className="mt-4 rounded-2xl bg-gray-900 p-6 text-white md:p-8">
        <p className="text-xs font-bold tracking-widest text-gray-400">TOOL STORAGE GUIDE</p>
        <h1 className="mt-2 text-2xl font-bold leading-snug md:text-3xl">
          TRUSCOローラーキャビネットの選び方
          <span className="mt-2 block text-base font-bold text-gray-300 md:text-lg">
            TFRC・TRC型番の違いと引出し構成の早見表【全31モデル】
          </span>
        </h1>
        <ul className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
          <li className="rounded-full bg-white px-3 py-1 text-gray-900">型番の読み方がわかる</li>
          <li className="rounded-full bg-white px-3 py-1 text-gray-900">全31モデル早見表</li>
          <li className="rounded-full bg-white px-3 py-1 text-gray-900">引出しに入る工具の目安</li>
          <li className="rounded-full bg-white px-3 py-1 text-gray-900">オプション18点</li>
        </ul>
        <p className="mt-5 text-xs text-gray-400">
          公開日：<time dateTime={PUBLISHED}>2026年10月8日</time>　最終更新日：
          <time dateTime={UPDATED}>2026年10月8日</time>　作業用品ナビ編集部
        </p>
      </header>

      {/* CURSOR指示：アイキャッチ画像
          内容：整備工場の作業スペースに置かれた、引出しが7〜8段ある工具用ローラーキャビネット（スチール製・キャスター付）。
                上から2段目の浅い引出しが開いていて、ドライバーとスパナが仕切りの中に整然と並ぶ。
                天板の上にはソケットレンチが1本。背景はやや暗めの工場。人物なし。
          スタイル：写実的な写真風。斜め前からのアングル。本体色はダークグレー系にして特定メーカー・色に見せない。
                    文字・ロゴ・メーカー名は入れない。
          比率/サイズ：16:9 / 1600×900px（WebP）。OGP用に同構図で 1200×630px（JPG）も書き出し。
          保存先：/public/images/articles/roller-cabinet-trusco/eyecatch.webp
                  /public/images/articles/roller-cabinet-trusco/eyecatch-ogp.jpg */}
      <img
        src={`${ARTICLE_IMG}eyecatch.webp`}
        alt="整備工場に置かれたローラーキャビネット。浅い引出しに工具が整理されている"
        width={1600}
        height={900}
        className="mt-6 aspect-video w-full rounded-2xl object-cover"
      />

      <P>
        「TRUSCOのローラーキャビネットが欲しいが、TFRCとTRCの違いがわからない」「引出し6段と7段と8段、どれが自分の工具に合うのか」。型番が31種類もあると、商品ページを行き来するだけで時間がかかります。この記事では、整備工場・設備保全・製造現場で工具管理を担当する方に向けて、<Mark>型番の読み方</Mark>、<Mark>引出しの高さごとに入る工具</Mark>、仕切りやオプションの選び方、搬入時の注意点までを1ページにまとめました。
      </P>

      <section aria-label="この記事の結論" className="mt-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 md:p-6">
        <p className="text-base font-bold text-gray-900">結論：3つの質問で型番が決まる</p>
        <ol className="mt-3 space-y-3 text-sm leading-7 text-gray-800">
          <li className="flex gap-3">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">1</span>
            <span>
              <strong>色は？</strong> ブラック/オレンジなら<strong>TFRC</strong>、レッドなら<strong>TRC-○○○R</strong>。
            </span>
          </li>
          <li className="flex gap-3">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">2</span>
            <span>
              <strong>工具は？</strong> 手工具が多いなら<strong>341（8段）</strong>、電動工具が多いなら<strong>123（6段）</strong>、迷ったら<strong>232（7段）</strong>。3桁は50・100・150mm引出しの段数。
            </span>
          </li>
          <li className="flex gap-3">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">3</span>
            <span>
              <strong>小物は多い？</strong> 多いなら仕切板付（<strong>S／SR</strong>）。少ないなら仕切りなし＋必要な段だけデバイダー追加。
            </span>
          </li>
        </ol>
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
        title="型番が決まっている方は一覧からどうぞ"
        desc="TFRC・TRC-R、引出し4〜8段、仕切板付・オプションまで、TRUSCOのローラーキャビネットを掲載しています。"
      />

      {/* ===================== 1 ===================== */}
      <H2 id="about" no={1}>
        TRUSCOローラーキャビネットとは｜共通仕様と特長
      </H2>
      <P>
        ローラーキャビネットは、引出し式の工具収納にキャスターを付けた「動かせる工具棚」です。TRUSCO（トラスコ中山）のモデルは、どの型番も奥行460mm・高さ950mmで、腰の高さに天板が来るサイズ感。天板にはマットが敷かれ、工具を一時的に置く作業台としても使えます。
      </P>

      <H3>導入すると何が変わるか</H3>
      <P>
        工具を棚や箱にまとめて置いている職場では、「あのレンチどこ？」と探す時間が毎日どこかで発生しています。引出しごとに工具の定位置を決めれば、探す時間も、戻す場所に迷う時間もなくなる。空いている区画を見れば持ち出し中の工具がわかり、置き忘れや紛失にも早く気づけます。施錠できるので、高価な測定器や共用工具の管理責任もはっきりします。5S活動の「整頓」を形にしやすい道具、と考えるとイメージしやすいでしょう。
      </P>

      <H3>押さえておきたい4つの特長</H3>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          ["オールロック式", "シリンダー錠1つで全部の引出しを一度に施錠。鍵は2本付き。共用の工具や高価な測定器の管理に。"],
          ["ラッチ機構", "振動で引出しが勝手に飛び出し、キャビネットが転倒するのを防ぐ仕組み。移動時の安心感が違う。"],
          ["ボールスライドレール", "重い工具を入れても引出しの開け閉めが軽い。毎日何十回も開ける道具だからこそ効いてくる。"],
          ["天板マット付き", "ネオプレンスポンジ製・厚さ5mmのマットで、置いた工具が滑りにくく、天板も傷つきにくい。"],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="font-bold text-gray-900">{t}</p>
            <p className="mt-1 text-sm leading-6 text-gray-700">{d}</p>
          </div>
        ))}
      </div>

      <H3>共通仕様（販売店の仕様表より）</H3>
      <Table
        head={["項目", "仕様"]}
        rows={[
          ["外寸", "間口 約690〜763mm（型番により異なる）× 奥行460mm × 高さ950mm"],
          ["積載量", "引出し1段あたり30kg（均等）／1台あたり最大420kg"],
          ["引出し", "高さ50・100・150mmの組み合わせで4〜8段"],
          ["施錠", "オールロック式・シリンダー錠（鍵2本付）"],
          ["キャスター", "径100mm・ウレタン車輪。固定式2個＋自在式（Wストッパー付）"],
          ["材質", "本体スチール"],
          ["質量（本体）", "約45〜80kg（引出し構成と仕切板の有無で異なる）"],
          ["配送", "車上渡し（荷降ろしはお客様側）"],
        ]}
        min={480}
      />
      <p className="text-xs leading-6 text-gray-500">
        ※型番ごとに寸法・質量・キャスター構成が異なる場合があります。最終的な数値は各商品ページの仕様で確認してください。
      </p>

      <FeatureCard p={R("261602")} label="引出し8段・手工具の多い現場の定番" />

      {/* ===================== 2 ===================== */}
      <H2 id="model" no={2}>
        型番の読み方と全31モデル早見表
      </H2>
      <P>
        TRUSCOのローラーキャビネットは、型番を分解すると<Mark>色・引出し構成・仕切りの有無・付属品</Mark>がすべて読み取れます。逆にいえば、型番の読み方さえ覚えれば31モデルの中から一発で目的の1台を探せます。
      </P>

      <div className="my-6 rounded-2xl border-2 border-gray-900 bg-white p-5">
        <p className="text-sm font-bold text-gray-500">例：TRC-232SR</p>
        <div className="mt-3 flex flex-wrap items-end gap-1 font-mono text-2xl font-bold md:text-3xl">
          <span className="rounded bg-gray-200 px-2 py-1 text-gray-900">TRC-</span>
          <span className="rounded bg-gray-900 px-2 py-1 text-white">232</span>
          <span className="rounded bg-gray-400 px-2 py-1 text-white">S</span>
          <span className="rounded bg-gray-600 px-2 py-1 text-white">R</span>
        </div>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-800 sm:grid-cols-2">
          <li>
            <strong>TFRC- / TRC-</strong>：シリーズ。TFRCはブラック/オレンジ
          </li>
          <li>
            <strong>232</strong>：50mm×2段・100mm×3段・150mm×2段
          </li>
          <li>
            <strong>S</strong>：仕切板付（なし＝仕切りなし）
          </li>
          <li>
            <strong>R</strong>：レッド（TRCシリーズの末尾）
          </li>
          <li className="sm:col-span-2">
            <strong>C3R／C4R</strong>：レッド本体にTRC-C3またはTRC-C4が1台付いたセット
          </li>
        </ul>
      </div>

      <H3>3桁の数字＝引出しの「深さ配分」</H3>
      <P>
        3桁の数字は左から、高さ50mm・100mm・150mmの引出しが何段あるかを示します。面白いのは、4段の「121」以外はどれも<Mark>引出し高さの合計が700mm</Mark>になる点です。つまり6段・7段・8段の違いは収納量の差というより、「浅い引出しを多くするか、深い引出しを多くするか」の配分の違い。段数が多い＝たくさん入る、ではありません。
      </P>
      <Table
        head={["型番3桁", "段数", "50mm", "100mm", "150mm", "高さ合計", "向いている人"]}
        rows={[
          ["121", "4段", "1", "2", "1", "400mm", "基本工具だけをコンパクトに"],
          ["123", "6段", "1", "2", "3", "700mm", "電動工具・ケース物が多い"],
          ["042", "6段", "—", "4", "2", "700mm", "中型の工具が中心"],
          ["070", "7段", "—", "7", "—", "700mm", "工具を種類別に段で分けたい"],
          ["232", "7段", "2", "3", "2", "700mm", "迷ったらこれ。万能型"],
          ["341", "8段", "3", "4", "1", "700mm", "手工具が多い整備・保全"],
        ]}
      />

      <div className="my-6 grid grid-cols-3 gap-3 sm:grid-cols-6" aria-label="引出し構成の比較図">
        {CFG_ORDER.map((c) => (
          <DrawerStack key={c} cfg={c} />
        ))}
      </div>
      <p className="text-xs text-gray-500">※図の帯の高さは引出し高さ（50・100・150mm）の比率で描いています。</p>

      <H3>TFRC（ブラック/オレンジ）とTRC-R（レッド）、どちらを選ぶか</H3>
      <P>
        引出し構成が同じなら、選択の軸は色と付属品です。整備場や工具室に既存の工具収納がある場合は、色をそろえると見た目の統一感が出て、「この色のキャビネット＝工具」と現場で認識しやすくなります。レッドは広い工場でも目立つので、共用工具の置き場を一目で示したいときに向いています。仕切板付やC3・C4付のセットが欲しい場合は、早見表で各色のラインナップを確認してください。
      </P>

      <H3>全31モデル早見表（構成×色・仕様）</H3>
      <P>
        縦が引出し構成、横が色と仕様です。「見る →」から各商品ページへ移動できます。表は横にスクロールできます。
      </P>
      <LineupMatrix />

      <MainCTA
        title="構成と色が決まったら、在庫と価格をチェック"
        desc="同じ構成でもTFRC（ブラック/オレンジ）とTRC-R（レッド）で選べます。一覧で見比べてください。"
      />

      {/* ===================== 3 ===================== */}
      <H2 id="drawer" no={3}>
        引出し構成の選び方｜50・100・150mmに何が入るか
      </H2>
      <P>
        構成選びで失敗しないコツは、<Mark>手持ちの工具を「高さ」で3つに分けてみる</Mark>ことです。寝かせたときの高さが50mm以下の物、100mm以下の物、それ以上の物。それぞれの数が、50・100・150mm引出しの必要段数の目安になります。
      </P>
      <Table
        head={["引出し高さ", "入れやすい工具の例", "ポイント"]}
        rows={[
          ["50mm", "ドライバー、スパナ、メガネレンチ、六角レンチ、ノギス、レールに並べたソケット", "1本ずつ並べて「どこに何があるか」が一目でわかる。手工具の主役"],
          ["100mm", "ラチェットハンドル、プライヤー・ペンチ類、ハンマー、薄型のソケットセットケース", "厚みのある手工具の定位置。段数を最も多く取る構成が多い"],
          ["150mm", "寝かせた充電式インパクトドライバー、測定器のケース、グリスガン、寝かせたスプレー缶", "電動工具とケース物の置き場。重い物は下段に"],
        ]}
      />
      <Caution>
        50・100・150mmは引出しの呼び寸法です。実際に入る高さは引出しの板厚やレールの分だけ小さくなります。電動工具やケースを入れる予定なら、高さを実測し、商品ページの図面で有効寸法を確認してください。
      </Caution>

      <H3>手持ちの工具から段数を見積もる4ステップ</H3>
      <ol className="mt-4 space-y-3 text-sm leading-7 text-gray-800">
        {[
          ["工具を全部並べる", "キャビネットに入れる予定の工具を床や作業台に出す。電動工具やケースも含める。"],
          ["寝かせた高さで3つに分ける", "高さ50mm以下・100mm以下・それ以上の3グループに分ける。迷った物は大きいほうへ。"],
          ["引出し1段分の量を見積もる", "引出しの内寸に並べるイメージで、グループごとに何段分になるかを数える。"],
          ["3桁の構成に当てはめる", "必要段数に近い構成を選ぶ。足りない段は、上位の高さの引出しで補う。"],
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
      <P>
        たとえばドライバーとレンチ類で浅い段が3段分、ラチェットやプライヤーで中くらいの段が4段分、電動インパクトとグリスガンで深い段が1段分なら、ちょうど341の構成です。今後増える工具を見込んで、各グループに1段分の余裕を見ておくと買い直しを防げます。
      </P>

      <H3>構成別のおすすめモデル</H3>
      <P>
        6つの構成から代表モデルを1台ずつ選びました。同じ構成で色違い・仕切板付もあるので、気になった構成は早見表で横に見比べてください。
      </P>
      <ProductGrid items={[R("261596"), R("261598"), R("262421"), R("261594"), R("262444"), R("262452")]} />

      <Point title="迷ったときの決め方">
        手工具が全体の7割以上なら<strong>341（8段）</strong>。電動工具が5台以上あるなら<strong>123（6段）</strong>。どちらとも言えないなら、浅・中・深がそろう<strong>232（7段）</strong>を選べば大きく外しません。
      </Point>

      <SubCTA
        href={CTA.handtool}
        title="キャビネットに入れる工具もそろえる"
        desc="ドライバー、レンチ、プライヤーなど、引出しの定位置に収めたい手作業工具を掲載しています。"
        label="手作業工具の一覧を見る"
      />

      {/* ===================== 4 ===================== */}
      <H2 id="partition" no={4}>
        仕切板付（S）と仕切りなし、どちらを選ぶか
      </H2>
      <P>
        型番に「S」が付くモデルは、引出しの中を区切る仕切板が最初から付いています。小物がバラけず、工具の定位置が決めやすいのが利点。ただし仕切板の分だけ本体は重くなります。販売店の仕様表では、たとえば<Mark>TFRC-042が約56kgに対し、TFRC-042Sは約74kg</Mark>。TFRC-341（約62kg）とTFRC-341S（約80kg）でも、差はおよそ18kgあります。
      </P>
      <Table
        head={["比較", "仕切板付（S・SR）", "仕切りなし"]}
        rows={[
          ["向く工具", "ドライバー、ビット、ソケットなど小物が多い", "電動工具、ケース物など大きい物が中心"],
          ["管理のしやすさ", "定位置が決まり、欠品にすぐ気づける", "自由にレイアウトできる"],
          ["本体質量", "重い（構成によっては約80kg）", "同じ構成のS付きより約18kg軽い"],
          ["後からの変更", "仕切りの配置を変えて調整", "必要な段だけデバイダー等を追加"],
        ]}
      />
      <P>
        複数人で同じキャビネットを使う職場では、仕切板付が向いています。「ここが空いている＝誰かが持ち出している」と一目でわかるため、工具の紛失や置き忘れに気づきやすくなるからです。一人で使い、工具の入れ替えも多いなら、仕切りなしで始めて必要な段だけオプションを足すほうが無駄がありません。
      </P>
      <ProductGrid items={[R("261603"), R("262445"), R("261595")]} />

      <SubCTA
        href={CTA.partscase}
        title="ボルト・ナット・ビスはパーツケースへ"
        desc="細かい消耗品は引出しより、分類しやすいパーツケースに分けると探す時間が減ります。"
        label="パーツケースの一覧を見る"
      />

      {/* ===================== 5 ===================== */}
      <H2 id="option" no={5}>
        オプションで使いやすくする｜デバイダー・パーティション・サイドテーブル
      </H2>
      <P>
        TRUSCOのローラーキャビネットには、引出しの中を区切る部品と、本体の外側に足す部品が用意されています。いずれも型番の「H50・H100・H150」は<Mark>対応する引出しの高さ</Mark>を表すので、入れたい引出しの高さに合わせて選びます。適合機種は各商品ページで確認してください。
      </P>

      <H3>デバイダー：引出しを細かく区切る</H3>
      <P>
        デバイダーは引出しの中に差し込んで区画をつくる仕切りです。適合する引出しの高さ（H50・H100・H150）と、長さ（L95・L195・L295）の組み合わせで9種類。長いL295で大きく区切り、短いL95で細かく分ける、という組み合わせ方が基本です。
      </P>
      <DividerMatrix />
      <ProductGrid items={[R("261611"), R("261605"), R("261608")]} />

      <H3>パーティション：枠と縦仕切りで区画をつくる</H3>
      <P>
        パーティションは、フレームセットで枠を組み、縦の仕切りを追加して区画を増やすタイプです。工具の形に合わせて区画の幅を決めたいときに向いています。まずフレームセットを引出しの高さに合わせて選び、区画が足りなければ縦パーティションを追加します。
      </P>
      <ProductGrid items={[R("261615"), R("261613"), R("261614")]} />
      <ProductGrid items={[R("261618"), R("261616"), R("261617")]} />

      <H3>サイドテーブル・サイドポケット：本体の外を使う</H3>
      <P>
        天板だけでは作業スペースが足りない、作業中の部品を一時的に置く場所が欲しい。そんなときは本体の横に足すオプションが便利です。サイドテーブルは木製とスチールの2種類。木製は工具を置いたときの音が静かで、スチールは油汚れを拭き取りやすいのが特長です。
      </P>
      <ProductGrid items={[R("261620"), R("261621"), R("261619")]} />

      {/* ===================== 6 ===================== */}
      <H2 id="usecase" no={6}>
        職種・用途別のおすすめ構成
      </H2>
      <P>
        ここでは、レッド本体にTRC-C3またはTRC-C4が1台付いたセットモデル（型番末尾C3R・C4R）を中心に、職種ごとの選び方を紹介します。付属するTRC-C3・TRC-C4の内容や寸法は、各商品ページで確認してください。
      </P>

      <H3>自動車整備・設備保全：手工具が多いなら341（8段）</H3>
      <P>
        整備や保全では、サイズ違いのレンチやドライバーを何十本も使い分けます。浅い50mm引出しが3段ある341なら、工具を1本ずつ寝かせて並べられ、必要なサイズをすぐ取り出せます。下の150mm段には電動インパクトや測定器のケースを。
      </P>
      <ProductGrid items={[R("262451"), R("262450")]} cols={2} />

      <H3>電気工事・電動工具中心：深い引出しが3段の123</H3>
      <P>
        充電式のドライバー、インパクト、測定器のケースなど、高さのある物が多い現場では150mm引出しが3段ある123が使いやすい構成です。上の50mm・100mm段にはビットや手工具をまとめます。
      </P>
      <FeatureCard p={R("262431")} label="電動工具が多い現場向け" />

      <H3>製造ライン・治具管理：全段100mmの070</H3>
      <P>
        「1段目はA工程の治具、2段目はB工程」のように、段ごとに用途を分けて管理したい場合は、全段が同じ高さの070が扱いやすくなります。ラベルを貼って段ごとに担当や工程を決めておくと、誰が見ても迷いません。
      </P>
      <FeatureCard p={R("262424")} label="段ごとに用途を分けたい現場向け" />

      <H3>工具の種類がバラバラ：万能型の232・中型中心の042</H3>
      <P>
        小物から電動工具まで幅広くそろえるなら、浅・中・深をバランスよく持つ232。50mmの浅い段が不要で、ラチェットやプライヤーなど中型工具が中心なら042が合います。
      </P>
      <ProductGrid items={[R("262443"), R("262420"), R("262419")]} />

      <H3>置き場所が限られる：4段の121</H3>
      <P>
        4段の121は引出し高さの合計が400mmで、本体質量も約45kgと最も軽い構成です。基本工具だけを入れて、作業場の一角や工具室の補助に置く使い方に向いています。
      </P>
      <ProductGrid items={[R("262428"), R("262427")]} cols={2} />

      <SubCTA
        href={CTA.toolbox}
        title="現場への持ち出し用は工具箱で"
        desc="キャビネットは定位置保管、外へ持ち出す工具は工具箱に。役割を分けると管理がぶれません。"
        label="工具箱の一覧を見る"
      />

      {/* ===================== 7 ===================== */}
      <H2 id="compare" no={7}>
        ツールワゴン・作業台・工具箱との使い分け
      </H2>
      <P>
        ローラーキャビネットは万能ではありません。「保管」「運ぶ」「作業する」「持ち出す」のどれを重視するかで、選ぶべき道具は変わります。
      </P>
      <Table
        head={["道具", "得意なこと", "苦手なこと", "向く使い方"]}
        rows={[
          ["ローラーキャビネット", "大量の工具を施錠して保管。引出しで分類", "本体が重く、頻繁な移動には向かない", "工具の定位置。整備場・保全室の拠点"],
          ["ツールワゴン", "作業中に工具・部品を手元へ運ぶ", "施錠・大量保管は不得意", "作業場所が変わるライン・整備"],
          ["作業台", "広い作業面で組立・修理", "移動できないものが多い", "部品の組立、修理の定位置"],
          ["工具箱", "現場への持ち出し", "収納量が限られる", "出張作業・現場作業"],
        ]}
      />
      <P>
        実際の整備場では、キャビネットを保管の拠点にして、作業ごとに必要な工具だけをツールワゴンに載せて運ぶ使い方がよく見られます。キャビネットの天板とサイドテーブルだけで作業スペースが足りない場合は、作業台を隣に置くと効率が上がります。
      </P>
      <SubCTA
        href={CTA.wagon}
        title="作業中の手元にはツールワゴン"
        desc="キャビネットから必要な工具だけを載せて運べる、ツールワゴンを掲載しています。"
        label="ツールワゴンの一覧を見る"
      />
      <SubCTA
        href={CTA.workbench}
        title="キャビネットの隣に作業台を"
        desc="組立や修理に使える広い作業面を確保できます。"
        label="作業台の一覧を見る"
      />

      {/* ===================== 8 ===================== */}
      <H2 id="delivery" no={8}>
        購入前のチェックポイント｜搬入・設置・使い方
      </H2>

      <H3>「車上渡し」の意味を確認しておく</H3>
      <P>
        販売店の案内では、TRUSCOのローラーキャビネットは車上渡しです。トラックの荷台までが配送の範囲で、そこから降ろして設置場所まで運ぶのは購入者側の作業になります。本体は約45〜80kg。<Mark>2人以上の人手と、台車を用意</Mark>しておきましょう。
      </P>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          "届く日時に、荷降ろしできる人を2人以上確保する",
          "搬入経路の扉幅・通路幅を確認する（本体の間口 約690〜763mm×奥行460mm）",
          "段差やスロープがある場合は、運搬用の台車や養生を用意する",
          "設置場所の床が平らかを確認する",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white p-3">
            <span aria-hidden="true" className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900" />
            <span className="text-gray-800">{t}</span>
          </li>
        ))}
      </ul>
      <SubCTA
        href={CTA.cart}
        title="搬入・移設には運搬台車を"
        desc="重いキャビネットの荷降ろし後の移動や、工場内のレイアウト変更に使える運搬台車を掲載しています。"
        label="運搬台車の一覧を見る"
      />

      <H3>安全に使うための3つのルール</H3>
      <Table
        head={["ルール", "理由"]}
        rows={[
          ["重い工具は下の段に入れる", "重心が下がり、引出しを開けたときに前へ倒れにくくなる"],
          ["引出し1段30kgを超えない", "仕様上の均等積載量。1か所に荷重を集中させない"],
          ["作業中はキャスターのストッパーをかける", "自在キャスターのWストッパーで、引出しの開閉時に本体が動かない"],
        ]}
        min={480}
      />
      <P>
        ラッチ機構で引出しの飛び出しは抑えられていますが、重い工具を上段に詰め込み、複数の引出しを同時に大きく開けると前に倒れる危険があります。棚割りは「重い物は下、よく使う小物は腰の高さ」が基本です。
      </P>

      <H3>長く使うための手入れと管理</H3>
      <P>
        引出しのレールに切粉や砂が入ると、開け閉めが重くなります。月に一度は引出しを開けて底のゴミを払い、レール周りを確認する習慣をつけておきましょう。キャスターに糸くずや針金が巻き付くと移動が重くなるので、移設の前には車輪も点検します。鍵は2本付いているので、1本は使用者、もう1本は管理者が保管するルールにしておくと、紛失時に困りません。
      </P>

      <MainCTA
        title="チェックが済んだら、在庫と納期を確認"
        desc="大型商品のため、納期は商品ページで確認してから発注日を決めるのがおすすめです。"
      />

      {/* ===================== 9 ===================== */}
      <H2 id="faq" no={9}>
        よくある質問
      </H2>
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
        <p className="text-lg font-bold text-gray-900">選び方のおさらい</p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-800">
          <li>色で選ぶ：TFRC＝ブラック/オレンジ、TRC-○○○R＝レッド。</li>
          <li>構成で選ぶ：3桁は50・100・150mm引出しの段数。手工具なら341、電動工具なら123、迷ったら232。</li>
          <li>仕切りで選ぶ：小物が多いならS／SR。少ないなら仕切りなし＋オプション。</li>
          <li>搬入を確認：車上渡し。約45〜80kgを降ろす人手と台車を用意。</li>
        </ul>
        <a
          href={CTA.roller}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-base font-bold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          ローラーキャビネットの一覧を見る →
        </a>
        <a
          href={CTA.trusco}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border-2 border-gray-900 px-5 py-3 text-sm font-bold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          トラスコ中山の商品一覧を見る →
        </a>
        <p className="mt-6 text-sm font-bold text-gray-900">工具まわりをまとめてそろえる</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            [CTA.handtool, "手作業工具"],
            [CTA.toolbox, "工具箱"],
            [CTA.wagon, "ツールワゴン"],
            [CTA.workbench, "作業台"],
            [CTA.partscase, "パーツケース"],
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
        ※記事内の寸法・積載量・質量は、メーカー公表値および販売店の仕様表をもとに記載しています。型番により仕様が異なる場合があり、仕様・価格・在庫・納期は変更されることがあります。購入前に各商品ページで最新情報を確認してください。引出しに入る工具は目安であり、実際の収納可否は工具と引出しの実寸で確認してください。
      </p>
      </main>
      <SiteFooter />
    </>
  );
}
