import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "socket-12kaku-6kaku-sashikomikaku";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/six-point-twelve-point-socket-selection-hero.jpg`,
  mesh: `${ARTICLE_IMG}/six-point-vs-twelve-point-socket-comparison.jpg`,
  sqCompare: `${ARTICLE_IMG}/socket-drive-size-comparison-635-95-127-190.jpg`,
  sqUsage: `${ARTICLE_IMG}/socket-drive-size-work-application.jpg`,
  handImpact: `${ARTICLE_IMG}/hand-socket-impact-socket-difference.jpg`,
  setCase: `${ARTICLE_IMG}/maintenance-tool-set-case-comparison.jpg`,
  management: `${ARTICLE_IMG}/corporate-socket-tool-inventory-management.jpg`,
};

export const metadata: Metadata = {
  title: "12角ソケットと6角の違い｜なめやすい？差込角6.35・9.5・12.7・19mmの選び方",
  description:
    "12角ソケットと6角の違い、12角はなめやすいのかに冒頭で即答。差込角6.35・9.5・12.7・19.0mmの選び方、手動用とインパクト用の区別、12角ソケットセット、大型単品、防爆・非磁性、総合工具セットと収納までを判断フローで解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "12角ソケットと6角の違い｜差込角・手動用・インパクト用まで比較",
    description:
      "12角ソケットと6角の違い、12角はなめやすいのかに冒頭で即答。差込角6.35・9.5・12.7・19.0mmの選び方、手動用とインパクト用の区別、12角ソケットセット、大型単品、防爆・非磁性、総合工具セットと収納までを判断フローで解説します。",
    type: "article",
    images: [IMG.hero],
  },
};

// ---- URL / 画像ヘルパー ----
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string) => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
// 楽天 crecote-shop：slugは末尾スラッシュ込みで渡す（? の前に必ずスラッシュ）。variantId付きも可。
const R = (slug: string) => buildUrl(`https://item.rakuten.co.jp/crecote-shop/${slug}`, UTM);
const IMG_BASE = "/products/";
const productImg = (f: string) => `${IMG_BASE}${f}`;

// ---- 商品マスタ（トルク上限・付属・現行状況は推測しない。要確認。価格は固定表示しない）----
type P = {
  code: string; name: string; short: string; img: string; url: string;
  badge: string; kaku: string; sq: string; spec: string; drive: string; use: string; check: string;
};
const CK_SET = "対応ハンドル・エクステンション・ピン/Oリング・ミリ/インチ・入組内容（要確認）";
const CK_TORQUE = "差込角ごとのトルク上限は推測しない・対応ハンドル（要確認）";

// ===== 12角ソケットセット・ソケットセット =====
const P_VO3121: P = { code: "VO3121", name: "ASH 12角ソケットセット 9.5mm 19点 VO3121", short: "ASH VO3121（12角・9.5mm）", img: "ta040310-vo3121.jpg", url: R("ta040310-vo3121/"), badge: "12角／9.5mm・19点", kaku: "12角", sq: "9.5mm（3/8）", spec: "19点", drive: "手動用", use: "位置合わせが多い一般整備・狭所での取り回し", check: CK_SET };
const P_VO3122: P = { code: "VO3122", name: "ASH 12角ソケットセット 9.5mm 19点 VO3122", short: "ASH VO3122（12角・9.5mm）", img: "ta040311-vo3122.jpg", url: R("ta040311-vo3122/"), badge: "12角／9.5mm・19点", kaku: "12角", sq: "9.5mm（3/8）", spec: "19点", drive: "手動用", use: "VO3121と構成違い・一般整備", check: `VO3121との入組差・${CK_SET}` };
const P_RS3405M12: P = { code: "RS3405M12", name: "Ko-ken 12角ソケットセット RS3405M12", short: "Ko-ken RS3405M12（12角）", img: "ta038976-rs3405m12.jpg", url: R("ta038976-rs3405m12/"), badge: "12角／9.5mm", kaku: "12角", sq: "9.5mm（3/8）", spec: "レールセット（点数要確認）", drive: "手動用", use: "9.5mmの12角を基本構成でそろえたいとき", check: CK_SET };
const P_RS2405M11: P = { code: "RS2405M11", name: "Ko-ken 6.35mm 12角ソケットレールセット RS2405M11", short: "Ko-ken RS2405M11（12角・6.35mm）", img: "ta038951-rs2405m11.jpg", url: R("ta038951-rs2405m11/"), badge: "12角／6.35mm", kaku: "12角", sq: "6.35mm（1/4）", spec: "レールセット（点数要確認）", drive: "手動用", use: "小ねじ・細かい箇所の精密な作業", check: CK_SET };
const P_09060: P = { code: "09060", name: "SATA 12角ソケットレンチセット 12.7mm 24点 09060", short: "SATA 09060（12角・12.7mm）", img: "ta030344-09060.jpg", url: R("ta030344-09060/"), badge: "12角／12.7mm・24点", kaku: "12角", sq: "12.7mm（1/2）", spec: "24点", drive: "手動用", use: "自動車・産業機械の中トルク整備", check: CK_SET };
const P_ST09092ME12: P = { code: "ST09092ME12", name: "SATA 12角ソケットレンチセット 12.7mm 25点 ST09092ME12", short: "SATA ST09092ME12（12角・12.7mm）", img: "ta041775-st09092me12.jpg", url: R("ta041775-st09092me12/"), badge: "12角／12.7mm・25点", kaku: "12角", sq: "12.7mm（1/2）", spec: "25点", drive: "手動用", use: "12.7mmで基本サイズを広くそろえたいとき", check: CK_SET };
const P_09015: P = { code: "09015", name: "SATA 12角ソケットレンチセット 19mm 15点 09015", short: "SATA 09015（12角・19mm）", img: "ta040537-09015.jpg", url: R("ta040537-09015/"), badge: "12角／19.0mm・15点", kaku: "12角", sq: "19.0mm（3/4）", spec: "15点", drive: "手動用", use: "大型車・建機など高トルク整備", check: CK_SET };
const P_09016: P = { code: "09016", name: "SATA 12角ソケットレンチセット 19mm 26点 09016", short: "SATA 09016（12角・19mm）", img: "ta040538-09016.jpg", url: R("ta040538-09016/"), badge: "12角／19.0mm・26点", kaku: "12角", sq: "19.0mm（3/4）", spec: "26点", drive: "手動用", use: "大型車・建機で大サイズを広くそろえたいとき", check: CK_SET };
const P_09099: P = { code: "09099", name: "SATA 6角ソケットレンチセット 12.7mm 33点 09099", short: "SATA 09099（6角・12.7mm）", img: "ta040541-09099.jpg", url: R("ta040541-09099/"), badge: "6角／12.7mm・33点", kaku: "6角", sq: "12.7mm（1/2）", spec: "33点", drive: "手動用", use: "固着・高トルクでボルトを保護したい整備", check: CK_SET };
const P_HRW2004MSW: P = { code: "HRW2004M-SW", name: "VESSEL ウッディスイベルソケットレンチセット 6.35mm HRW2004M-SW", short: "VESSEL HRW2004M-SW（6.35mm）", img: "ta036688-hrw2004msw.jpg", url: R("ta036688-hrw2004msw/"), badge: "6.35mm・スイベル", kaku: "要確認", sq: "6.35mm（1/4）", spec: "セット（点数要確認）", drive: "手動用", use: "角度をつけて回す小ねじ作業", check: `角数・${CK_SET}` };
const P_2308916: P = { code: "2308916", name: "GEDORE ソケットセット 12.7mm 2308916", short: "GEDORE 2308916（12.7mm）", img: "ta031469-2308916.jpg", url: R("ta031469-2308916/"), badge: "12.7mm・セット", kaku: "要確認", sq: "12.7mm（1/2）", spec: "セット（点数要確認）", drive: "手動用", use: "12.7mmで基本工具をそろえたいとき", check: `角数・入組・${CK_SET}` };
const P_2016494: P = { code: "2016494", name: "GEDORE ソケットレンチセット 12.7mm 2016494", short: "GEDORE 2016494（12.7mm）", img: "ta031290-2016494.jpg", url: R("ta031290-2016494/"), badge: "12.7mm・セット", kaku: "要確認", sq: "12.7mm（1/2）", spec: "セット（点数要確認）", drive: "手動用", use: "12.7mmのソケットレンチセット", check: `角数・入組・${CK_SET}` };
const P_2016486: P = { code: "2016486", name: "GEDORE ソケットレンチセット 9.5mm 2016486", short: "GEDORE 2016486（9.5mm）", img: "ta031289-2016486.jpg", url: R("ta031289-2016486/"), badge: "9.5mm・セット", kaku: "要確認", sq: "9.5mm（3/8）", spec: "セット（点数要確認）", drive: "手動用", use: "9.5mmのソケットレンチセット", check: `角数・入組・${CK_SET}` };

// ===== 防爆・非磁性（Ampco）=====
const P_AMCW291M: P = { code: "AMCW291M", name: "Ampco 12角ソケットセット7個 AMCW291M", short: "Ampco AMCW291M（防爆・12角）", img: "ta041051-amcw291m.jpg", url: R("ta041051-amcw291m/"), badge: "防爆・非磁性／12角", kaku: "12角", sq: "要確認", spec: "7個", drive: "手動用", use: "可燃性雰囲気など防爆・非磁性が求められる現場", check: "防爆・非磁性・耐食の適合／角数・差込角・入組（要確認）" };
const P_AMCW260M: P = { code: "AMCW260M", name: "Ampco 12角ソケットセット22個 AMCW260M", short: "Ampco AMCW260M（防爆・12角）", img: "ta041050-amcw260m.jpg", url: R("ta041050-amcw260m/"), badge: "防爆・非磁性／12角", kaku: "12角", sq: "要確認", spec: "22個", drive: "手動用", use: "防爆・非磁性が求められる保全での基本構成", check: "防爆・非磁性・耐食の適合／角数・差込角・入組（要確認）" };

// ===== 大型12角ソケット単品（手動用）＋インパクト用 =====
const P_6405M54: P = { code: "6405M54", name: "Ko-ken 12角ソケット 対辺54mm 差込角19.0mm 6405M54", short: "Ko-ken 6405M54（対辺54mm）", img: "ta033057-6405m54.jpg", url: R("ta033057-6405m54/"), badge: "12角／19.0mm・対辺54mm", kaku: "12角", sq: "19.0mm（3/4）", spec: "対辺54mm・単品", drive: "手動用", use: "大型ボルトの整備（不足サイズの単品補充）", check: `単品のためハンドル別途・${CK_TORQUE}` };
const P_6405M55: P = { code: "6405M55", name: "Ko-ken 12角ソケット 対辺55mm 差込角19.0mm 6405M55", short: "Ko-ken 6405M55（対辺55mm）", img: "ta033058-6405m55.jpg", url: R("ta033058-6405m55/"), badge: "12角／19.0mm・対辺55mm", kaku: "12角", sq: "19.0mm（3/4）", spec: "対辺55mm・単品", drive: "手動用", use: "大型ボルトの整備（不足サイズの単品補充）", check: `単品のためハンドル別途・${CK_TORQUE}` };
const P_6405M58: P = { code: "6405M58", name: "Ko-ken 12角ソケット 対辺58mm 差込角19.0mm 6405M58", short: "Ko-ken 6405M58（対辺58mm）", img: "ta033059-6405m58.jpg", url: R("ta033059-6405m58/"), badge: "12角／19.0mm・対辺58mm", kaku: "12角", sq: "19.0mm（3/4）", spec: "対辺58mm・単品", drive: "手動用", use: "大型ボルトの整備（不足サイズの単品補充）", check: `単品のためハンドル別途・${CK_TORQUE}` };
const P_6405M63: P = { code: "6405M63", name: "Ko-ken 12角ソケット 対辺63mm 差込角19.0mm 6405M63", short: "Ko-ken 6405M63（対辺63mm）", img: "ta033061-6405m63.jpg", url: R("ta033061-6405m63/"), badge: "12角／19.0mm・対辺63mm", kaku: "12角", sq: "19.0mm（3/4）", spec: "対辺63mm・単品", drive: "手動用", use: "大型ボルトの整備（不足サイズの単品補充）", check: `単品のためハンドル別途・${CK_TORQUE}` };
const P_6405M65: P = { code: "6405M65", name: "Ko-ken 12角ソケット 対辺65mm 差込角19.0mm 6405M65", short: "Ko-ken 6405M65（対辺65mm）", img: "ta033062-6405m65.jpg", url: R("ta033062-6405m65/"), badge: "12角／19.0mm・対辺65mm", kaku: "12角", sq: "19.0mm（3/4）", spec: "対辺65mm・単品", drive: "手動用", use: "大型ボルトの整備（不足サイズの単品補充）", check: `単品のためハンドル別途・${CK_TORQUE}` };
const P_18405M46: P = { code: "18405M46", name: "Ko-ken インパクト12角ソケット 18405M46", short: "Ko-ken 18405M46（インパクト・12角）", img: "ta031148-18405m46.jpg", url: R("ta031148-18405m46/"), badge: "インパクト用／12角", kaku: "12角", sq: "要確認", spec: "対辺46mm・単品", drive: "インパクト用（動力用）", use: "インパクトレンチでの大型ボルト着脱", check: "インパクト用（手動用と混同しない）・保持ピン/Oリング・対応工具（要確認）" };

// ===== 整備用総合工具セット =====
const P_TSX3172: P = { code: "TSX3172", name: "TONE 工具セット 21点 TSX3172", short: "TONE TSX3172（21点）", img: "ta040141-tsx3172.jpg", url: R("ta040141-tsx3172/"), badge: "総合セット・21点", kaku: "—", sq: "中心差込角 要確認", spec: "21点", drive: "手動用", use: "はじめての1台・基本整備をひと通り", check: "入組内容・中心差込角・ケース（点数だけで選ばない）（要確認）" };
const P_TSX2170: P = { code: "TSX2170", name: "TONE 工具セット 40点 TSX2170", short: "TONE TSX2170（40点）", img: "ta040140-tsx2170.jpg", url: R("ta040140-tsx2170/"), badge: "総合セット・40点", kaku: "—", sq: "中心差込角 要確認", spec: "40点", drive: "手動用", use: "基本整備を幅広くカバーしたいとき", check: "入組内容・中心差込角・ケース（要確認）" };
const P_TSA3331: P = { code: "TSA3331", name: "TONE オートメカニック用工具セット 61点 TSA3331", short: "TONE TSA3331（61点）", img: "ta041899-tsa3331.jpg", url: R("ta041899-tsa3331/"), badge: "総合セット・61点", kaku: "—", sq: "中心差込角 要確認", spec: "61点", drive: "手動用", use: "自動車整備を想定した幅広い構成", check: "入組内容・中心差込角・ケース・重量（要確認）" };
const P_700S: P = { code: "700S", name: "TONE メンテナンス用工具セット 46点 700S", short: "TONE 700S（46点）", img: "ta040965-700s.jpg", url: R("ta040965-700s/"), badge: "総合セット・46点", kaku: "—", sq: "中心差込角 要確認", spec: "46点", drive: "手動用", use: "設備メンテナンスの基本工具をまとめたいとき", check: "入組内容・中心差込角・ケース（要確認）" };
const P_TSTS3: P = { code: "TSTS-3", name: "TRUSCO スタンダード工具セット 3点 TSTS-3", short: "TRUSCO TSTS-3（3点）", img: "ta018753-tsts3.jpg", url: R("ta018753-tsts3/"), badge: "総合セット・3点", kaku: "—", sq: "要確認", spec: "3点", drive: "手動用", use: "最小限の基本工具をそろえたいとき", check: "入組内容（要確認）" };
const P_SK3562WZ: P = { code: "SK3562WZ", name: "KTC 工具セット メタルケース 56点 SK3562WZ", short: "KTC SK3562WZ（56点・メタル）", img: "ta041721-sk3562wz.jpg", url: R("ta041721-sk3562wz/"), badge: "総合セット・56点・メタル", kaku: "—", sq: "中心差込角 要確認", spec: "56点", drive: "手動用", use: "自動車・設備整備の定番構成をメタルケースで", check: "入組内容・中心差込角・ケース材質・重量（要確認）" };
const P_SK3561P: P = { code: "SK3561P", name: "KTC 工具セット プラハードケース 56点 SK3561P", short: "KTC SK3561P（56点・プラ）", img: "ta041719-sk3561p.jpg", url: R("ta041719-sk3561p/"), badge: "総合セット・56点・プラ", kaku: "—", sq: "中心差込角 要確認", spec: "56点", drive: "手動用", use: "56点構成を軽量なプラケースで持ち運びたいとき", check: "入組内容・ケース材質・重量（要確認）" };
const P_SK3561SS: P = { code: "SK3561SS", name: "KTC 工具セット 薄型収納メタルケース 56点 SK3561SS", short: "KTC SK3561SS（56点・薄型）", img: "ta041720-sk3561ss.jpg", url: R("ta041720-sk3561ss/"), badge: "総合セット・56点・薄型", kaku: "—", sq: "中心差込角 要確認", spec: "56点", drive: "手動用", use: "収納スペースが限られる場所で薄型に収めたいとき", check: "入組内容・ケース収納方式・重量（要確認）" };
const P_SK3661X: P = { code: "SK3661X", name: "KTC 工具セット チェストタイプ 66点 SK3661X", short: "KTC SK3661X（66点・チェスト）", img: "ta041725-sk3661x.jpg", url: R("ta041725-sk3661x/"), badge: "総合セット・66点・チェスト", kaku: "—", sq: "中心差込角 要確認", spec: "66点", drive: "手動用", use: "工具が多く、チェストで整理・据置きしたいとき", check: "入組内容・ケース寸法・重量（要確認）" };
const P_SK3661E: P = { code: "SK3661E", name: "KTC 工具セット チェストタイプ 66点 SK3661E", short: "KTC SK3661E（66点・チェスト）", img: "ta041724-sk3661e.jpg", url: R("ta041724-sk3661e/"), badge: "総合セット・66点・チェスト", kaku: "—", sq: "中心差込角 要確認", spec: "66点", drive: "手動用", use: "66点構成をチェストで管理したいとき（構成違い）", check: "SK3661Xとの入組差・ケース・重量（要確認）" };
const P_SK4520WZ: P = { code: "SK4520WZ", name: "KTC 工具セット メタルケース 52点 SK4520WZ", short: "KTC SK4520WZ（52点・メタル）", img: "ta041730-sk4520wz.jpg", url: R("ta041730-sk4520wz/?variantId=TA041730"), badge: "総合セット・52点・メタル", kaku: "—", sq: "中心差込角 要確認", spec: "52点", drive: "手動用", use: "52点をメタルケースでそろえたいとき", check: "入組内容・ケース材質・重量（要確認）" };
const P_SK3562WZGBK: P = { code: "SK3562WZGBK", name: "KTC 工具セット メタルケース 56点 ブラック SK3562WZGBK", short: "KTC SK3562WZGBK（56点・黒）", img: "ta041722-sk3562wzgbk.jpg", url: R("ta041722-sk3562wzgbk/?variantId=TA041722"), badge: "総合セット・56点・メタル黒", kaku: "—", sq: "中心差込角 要確認", spec: "56点", drive: "手動用", use: "SK3562WZのブラック（色・仕様は要確認）", check: "入組内容・ケース・重量（要確認）" };
const P_SK3661XS: P = { code: "SK3661XS", name: "KTC 工具セット チェストタイプ 66点 SK3661XS", short: "KTC SK3661XS（66点・チェスト）", img: "ta041726-sk3661xs.jpg", url: R("ta041726-sk3661xs/?variantId=TA041726"), badge: "総合セット・66点・チェスト", kaku: "—", sq: "中心差込角 要確認", spec: "66点", drive: "手動用", use: "66点チェスト構成（SK3661系の仕様違い）", check: "入組内容・ケース・重量（要確認）" };

// ===== 工具箱・工具バッグ =====
const P_TBTBAG: P = { code: "TBTBAG", name: "Tajima セフツールバッグ TBTBAG", short: "Tajima TBTBAG（ツールバッグ）", img: "ta039818-tbtbag.jpg", url: R("ta039818-tbtbag/"), badge: "収納・ツールバッグ", kaku: "—", sq: "—", spec: "工具バッグ", drive: "—", use: "工具を持ち運ぶ現場・移動作業", check: "外寸・容量・収納方式（要確認）" };
const P_ST350B: P = { code: "ST-350-B", name: "TRUSCO 2段工具箱 ST-350-B", short: "TRUSCO ST-350-B（2段）", img: "ta014591-st350b.jpg", url: R("ta014591-st350b/"), badge: "収納・2段工具箱", kaku: "—", sq: "—", spec: "2段工具箱", drive: "—", use: "定位置で工具を分類・収納したいとき", check: "外寸・最大積載・収納方法（要確認）" };
const P_Y410B: P = { code: "Y-410-B", name: "TRUSCO 山型工具箱 Y-410-B", short: "TRUSCO Y-410-B（山型）", img: "ta020487-y410b.jpg", url: R("ta020487-y410b/"), badge: "収納・山型工具箱", kaku: "—", sq: "—", spec: "山型工具箱", drive: "—", use: "持ち運び中心の基本的な工具収納", check: "外寸・最大積載（要確認）" };
const P_T320MBK: P = { code: "T-320MBK", name: "TRUSCO トランク型工具箱 T-320MBK", short: "TRUSCO T-320MBK（トランク型）", img: "ta015005-t320mbk.jpg", url: R("ta015005-t320mbk/"), badge: "収納・トランク型", kaku: "—", sq: "—", spec: "トランク型工具箱", drive: "—", use: "工具をまとめて運搬・保管したいとき", check: "外寸・最大積載・収納方法（要確認）" };

// ===== 専門用途（一般整備の代替にしない）=====
const P_MDKS17S: P = { code: "MDKS17S", name: "MARVEL 電気工事士技能試験工具セット MDKS17S", short: "MARVEL MDKS17S（技能試験用）", img: "ta037609-mdks17s.jpg", url: R("ta037609-mdks17s/"), badge: "専門用途・技能試験用", kaku: "—", sq: "—", spec: "技能試験工具セット", drive: "—", use: "電気工事士の技能試験対策（一般整備用ではない）", check: "一般整備の代替にしない・試験要件への適合（要確認）" };
const P_MDKS7VA: P = { code: "MDKS7VA", name: "MARVEL 電気工事士技能試験工具セット VA線ストリッパー付き MDKS7VA", short: "MARVEL MDKS7VA（技能試験用）", img: "ta037612-mdks7va.jpg", url: R("ta037612-mdks7va/"), badge: "専門用途・技能試験用", kaku: "—", sq: "—", spec: "技能試験工具セット（VA線ストリッパー付）", drive: "—", use: "技能試験対策（VA線ストリッパー付・一般整備用ではない）", check: "一般整備の代替にしない・試験要件への適合（要確認）" };
const P_ZTB311A: P = { code: "ZTB311A", name: "KTC 絶縁工具セットA ZTB311A", short: "KTC ZTB311A（絶縁工具）", img: "ta040466-ztb311a.jpg", url: R("ta040466-ztb311a/"), badge: "専門用途・絶縁工具", kaku: "—", sq: "—", spec: "絶縁工具セット", drive: "—", use: "絶縁が必要な電気関連作業（樹脂柄＝絶縁と混同しない）", check: "絶縁の適合・規格・一般整備の代替にしない（要確認）" };

// ---- FAQ（画面表示とJSON-LDの単一ソース）----
const faqs: { q: string; a: string }[] = [
  { q: "12角ソケットと6角ソケットは何が違いますか？", a: "内側の噛み合う角の数が違います。6角はボルトの6面を面で捉え、12角は30度ごとに差し込めて位置合わせがしやすいのが特徴です。角数（6角/12角）と、ハンドルに差し込む差込角（6.35/9.5/12.7/19.0mm）は別の概念です。用途はボルトの状態と作業場所で選びます。" },
  { q: "12角ソケットはなめやすいのですか？", a: "12角だから必ずなめる、とは断定できません。なめる主因は、対辺寸法違い・奥まで差し込んでいない・斜め掛け・ボルトの傷み・過大トルク・工具の摩耗などです。正しいサイズを奥までまっすぐ差し込み、状態に応じて6角と使い分ければ、12角でも適切に使えます。" },
  { q: "6角ボルトに12角ソケットは使えますか？", a: "6角のボルト・ナットに12角ソケットは使えます。12角は30度ごとに掛けられるため位置合わせがしやすく、狭所で有利です。ただし角がしっかり掛かるサイズを選び、奥まで差し込んで使います。" },
  { q: "12角ボルトに6角ソケットは使えますか？", a: "12角のボルトには12角ソケットが基本です。6角ソケットは掛かり方が合わないことがあるため、ボルト側の形状に合ったソケットを選びます。ボルト形状を確認して使い分けてください。" },
  { q: "錆びた・固着したボルトはどちらが向きますか？", a: "傷み・錆・固着のあるボルトでは、面で捉えてなめにくい6角が候補になります。ただし、すべての固着ボルトが6角で外せるわけではありません。状態がひどい場合は、緩め剤や適切な工具・工法も検討します。" },
  { q: "12角のメリットは何ですか？", a: "30度ごとに掛けられるため、振り幅が取りにくい狭所や、ボルト頭が見えにくく位置合わせが難しい場所で素早く掛けられます。壁際や入り組んだ箇所での作業性が利点です。" },
  { q: "差込角6.35mmと9.5mmはどう選びますか？", a: "6.35mm（1/4）は小ねじ・細かい箇所の精密作業、9.5mm（3/8）は一般的な整備で扱いやすい標準サイズです。必要なトルクとボルトサイズが大きくなるほど、上の差込角が候補になります。トルク上限は製品ごとに確認します。" },
  { q: "9.5mmと12.7mmはどう選びますか？", a: "9.5mm（3/8）は一般整備、12.7mm（1/2）は自動車・産業機械の中〜高トルク整備に向きます。大きめのボルトや締め付けの強い箇所では12.7mmが候補です。作業内容と必要トルクで選びます。" },
  { q: "差込角19.0mmはどんな用途ですか？", a: "19.0mm（3/4）は大型車・建設機械・大型設備など、大きなボルトと高いトルクを扱う整備向けです。工具自体も大きく重くなるため、対象に本当に必要かを確認して選びます。" },
  { q: "変換アダプターで差込角を変えれば万能ですか？", a: "変換アダプターで差込角を変換できますが、万能ではありません。小さい差込角側へ大きなトルクをかけると破損や事故の原因になります。トルクに見合った差込角の工具を基本とし、アダプターの多用や過大トルクは避けます。" },
  { q: "手動用ソケットとインパクト用ソケットの違いは？", a: "手動用はハンドルで回す用途、インパクト用はインパクトレンチの打撃・衝撃に耐える設計です。見た目が似ていても内部設計が異なります。手動用をインパクトレンチで使わないでください。" },
  { q: "インパクト用ソケットを手動で使ってよいですか？", a: "使用可否は製品の仕様によります。逆に、手動用（クロームソケット等）をインパクトレンチで使うのは破損・飛散の危険があり避けます。インパクト用は保持ピン・Oリングなどの保持部品を省略せず、正しく使います。" },
  { q: "インパクト用のピンやOリングは必要ですか？", a: "インパクト用ソケットの保持ピン・Oリングは、ソケットの脱落・飛散を防ぐ重要な部品です。省略せず、欠品・劣化があれば交換します。対応する保持部品の型式は製品仕様で確認します。" },
  { q: "ソケットセットは何点あればよいですか？", a: "点数の多さではなく、必要なサイズと工具内容で選びます。使うボルトサイズが入っているか、ハンドル・エクステンションなど必要な工具が揃うかが重要です。点数が多くても必要サイズが無ければ役に立ちません。" },
  { q: "56点と66点はどちらがよいですか？", a: "点数の差は入組内容の差で、多いほど高性能というわけではありません。66点はサイズや工具の種類が増える傾向ですが、自分の作業に必要な工具が入っているかで判断します。中心の差込角や工具構成を確認します。" },
  { q: "メタルケースとプラケースはどう違いますか？", a: "メタルケースは堅牢で据置き・保護に向き、プラケースは軽量で持ち運びに向く傾向です。薄型は収納性、チェストは整理・据置きに向きます。使用場所と運搬の有無で選びます。重量も確認します。" },
  { q: "ソケットは単品とセットどちらがよいですか？", a: "基本サイズを一度にそろえるならセット、セットに無い大型サイズや不足分を補うなら単品が向きます。大型（対辺54〜65mmなど）はセットに含まれないことが多く、単品で補います。単品はハンドルを別途用意します。" },
  { q: "防爆ソケットとは何ですか？", a: "可燃性雰囲気などで火花のリスクを抑えるため、非磁性・防爆に配慮した素材で作られた工具です。ただし防爆工具だけで爆発リスクが解消するわけではなく、作業手順・環境管理と併せて使います。適合は製品仕様で確認します。" },
  { q: "電気工事士の技能試験セットは整備にも使えますか？", a: "技能試験用セットは試験に必要な工具をまとめたもので、一般整備用の代替として選ぶものではありません。用途が異なるため、整備用途には整備用の工具を選びます。" },
  { q: "樹脂の柄が付いた工具は絶縁工具ですか？", a: "樹脂グリップが付いているだけでは絶縁工具とは断定できません。絶縁工具は規格に適合した専用品です。感電のおそれがある作業では、絶縁の適合が確認された専用の絶縁工具を使います。" },
];

// ---- 構造化データ ----
const PAGE_URL = `${SITE_URL}/articles/${SLUG}`;
const HOME_URL = `${SITE_URL}/`;
const articleLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "12角ソケットと6角の違い｜差込角・手動用・インパクト用まで比較",
  description: "12角と6角の違い、なめる原因、差込角6.35・9.5・12.7・19.0mmの選び方、手動用とインパクト用、12角ソケットセットと大型単品、防爆・非磁性、総合工具セットと収納を解説。",
  datePublished: "2026-07-20", dateModified: "2026-07-20",
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: { "@type": "Organization", name: "グリーンクロスホールディングス" },
  mainEntityOfPage: PAGE_URL,
};
const breadcrumbLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: HOME_URL },
    { "@type": "ListItem", position: 2, name: "選び方ガイド", item: `${HOME_URL}articles` },
    { "@type": "ListItem", position: 3, name: "12角ソケットと6角の違い", item: PAGE_URL },
  ],
};
const faqLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

// ---- コンポーネント ----
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 font-bold text-gray-900">結論（この記事の要点）</p>
      <div className={`space-y-2 ${cls.bodySm}`}>{children}</div>
    </div>
  );
}
function Caution({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-1 font-bold text-red-700">{title ?? "確認しておきたい点"}</p>
      <div className={`space-y-1 ${cls.bodySm}`}>{children}</div>
    </div>
  );
}
function CTA({ label, href }: { label: string; href: string }) {
  if (!href) return null;
  const external = href.startsWith("http");
  return (
    <div className="my-6">
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-gray-700"
        {...(external ? { rel: "nofollow sponsored noopener", target: "_blank" } : {})}
      >
        {label} →
      </a>
    </div>
  );
}
function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm font-bold text-gray-900">
      {children}
    </th>
  );
}
function Td({ children }: { children: ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 align-top text-sm text-gray-700">
      {children}
    </td>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  if (!value || value === "—") return null;
  return (
    <div>
      <dt className="inline font-bold">{label}：</dt>
      <dd className="inline">{value}</dd>
    </div>
  );
}
function ProductCard({ p, priority = false }: { p: P; priority?: boolean }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="group flex flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm transition hover:border-gray-900 hover:shadow-lg"
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={productImg(p.img)}
          alt={`${p.name}の商品画像`}
          className="h-full w-full object-contain p-3 transition group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <span className="mb-2 inline-block w-fit rounded bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
          {p.badge}
        </span>
        <p className="mb-1 text-sm font-bold leading-snug text-gray-900">{p.short}</p>
        <p className="mb-2 text-xs text-gray-600">{p.name}</p>
        <dl className="mb-3 space-y-1 text-xs text-gray-700">
          <Row label="角数" value={p.kaku} />
          <Row label="差込角" value={p.sq} />
          <Row label="入組/対辺" value={p.spec} />
          <Row label="手動・インパクト" value={p.drive} />
          <Row label="向く作業" value={p.use} />
          <Row label="購入前確認" value={p.check} />
        </dl>
        <span className="mt-auto inline-block rounded-lg bg-gray-900 px-3 py-2.5 text-center text-sm font-bold text-white transition group-hover:bg-gray-700">
          商品を見る →
        </span>
      </div>
    </a>
  );
}
function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
function Figure({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg"
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
      <figcaption className="mt-2 text-center text-xs text-gray-500">{caption}</figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <nav className="mb-4 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">選び方ガイド</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">12角ソケットと6角の違い</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          12角ソケットと6角の違い｜差込角・手動用・インパクト用まで比較
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月20日／約20分で読めます
        </p>

        <Figure
          src={IMG.hero}
          priority
          alt="6角ソケットと12角ソケット、差込角6.35・9.5・12.7・19.0mmの4種類を並べて比較した整備工具"
          caption="角数（6角・12角）と差込角は別の概念。作業条件で選ぶ"
        />

        <AnswerBox>
          <p><strong>12角と6角は用途で使い分けます。</strong>12角は30度ごとに差し込めて位置合わせがしやすく、狭所や振り幅の取りにくい作業に向きます。傷んだボルト・錆・固着では、面で捉えてなめにくい6角が候補です。12角が必ず弱い・なめやすいとは断定できません。</p>
          <p><strong>差込角は角数とは別の概念で、作業で選びます。</strong>6.35mm（1/4）は精密、9.5mm（3/8）は一般整備、12.7mm（1/2）は中〜高トルク、19.0mm（3/4）は大型が目安です。必要トルクと作業場所で選びます。</p>
          <p><strong>手動用とインパクト用は区別します。</strong>手動用ソケットをインパクトレンチで使わないでください。セットは点数の多さではなく、必要サイズと工具内容で選びます。</p>
        </AnswerBox>

        <p className={cls.body}>まず、記事前半で使う代表的な12角ソケットセット・比較用の6角セット・大型単品・総合工具セットを並べます。選び方はこの後、角数・差込角・手動/インパクト・セット/単品・収納の順に解説します。</p>

        <CardGrid>
          <ProductCard p={P_VO3121} priority />
          <ProductCard p={P_VO3122} priority />
          <ProductCard p={P_RS3405M12} priority />
          <ProductCard p={P_09099} priority />
          <ProductCard p={P_09016} priority />
          <ProductCard p={P_6405M65} priority />
          <ProductCard p={P_TSX3172} priority />
          <ProductCard p={P_SK3562WZ} priority />
        </CardGrid>

        <CTA label="作業条件と差込角からソケットセットを選ぶ" href="#sq95" />

        {/* ===== H2-1 ===== */}
        <h2 id="chigai" className={cls.h2}>12角ソケットと6角ソケットの違い</h2>
        <p className={cls.body}>ソケットの「6角・12角」は、内側の噛み合う角の数を指します。まずこの違いと、角数と差込角が別概念であることを押さえます。</p>
        <Figure src={IMG.mesh} alt="6角ソケットと12角ソケットがボルトに噛み合う様子を断面で比較した図" caption="6角は面で捉え、12角は30度ごとに掛けられる" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>項目</Th><Th>6角</Th><Th>12角</Th><Th>選定時の注意</Th></tr></thead>
            <tbody>
              <tr><Td>噛み合い</Td><Td>6面を面で捉える</Td><Td>12点で掛かる（30度ごと）</Td><Td>ボルト形状に合うものを選ぶ</Td></tr>
              <tr><Td>位置合わせ</Td><Td>60度ごと</Td><Td>30度ごとで掛けやすい</Td><Td>狭所は12角が有利</Td></tr>
              <tr><Td>傷んだボルト</Td><Td>面で捉えなめにくい傾向</Td><Td>状態次第で慎重に</Td><Td>錆・固着は6角が候補</Td></tr>
              <tr><Td>対応ボルト</Td><Td>6角ボルト・ナット</Td><Td>6角にも12角にも掛かる</Td><Td>12角ボルトは12角で</Td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={cls.h3}>差し込み位置</h3>
        <p className={cls.body}>12角は30度ごとに掛けられるため、ハンドルの振り幅が小さい狭所や、ボルト頭が見えにくく位置合わせが難しい場所で素早く掛けられます。これが12角の大きな利点です。</p>
        <h3 className={cls.h3}>傷んだボルト</h3>
        <p className={cls.body}>角が傷んだボルトや錆・固着のあるボルトでは、面で捉えてなめにくい6角が候補です。ただし、すべての固着ボルトが6角で外せるわけではなく、状態に応じて緩め剤や工法も検討します。</p>
        <h3 className={cls.h3}>強度の考え方</h3>
        <p className={cls.body}>「12角は必ず6角より弱い」とは断定できません。強度や適否は、材質・寸法・使い方・ボルトの状態など複数の要因で決まります。正しいサイズを正しく使うことが、なめ・破損を防ぐ基本です。</p>
        <h3 className={cls.h3}>12角ボルト</h3>
        <p className={cls.body}>頭が12角形状のボルトには、12角ソケットが基本です。6角ソケットでは掛かり方が合わないことがあります。ボルト側の形状を確認し、それに合ったソケットを選びます。</p>

        {/* ===== H2-2 ===== */}
        <h2 id="nameru" className={cls.h2}>12角ソケットは本当になめやすい？</h2>
        <p className={cls.body}>「12角はなめやすい」とよく言われますが、12角だから必ずなめるわけではありません。なめる原因の多くは使い方・状態にあります。原因を1つずつ確認します。</p>
        <h3 className={cls.h3}>対辺寸法</h3>
        <p className={cls.body}>対辺寸法（サイズ）が合っていないと、がたついてなめの原因になります。ミリ・インチの取り違えにも注意し、ボルトに合う正しいサイズを選びます。</p>
        <h3 className={cls.h3}>奥まで差し込む</h3>
        <p className={cls.body}>ソケットを奥まで差し込まず、浅く掛けると角の掛かりが不足してなめやすくなります。まっすぐ奥まで差し込んで使います。</p>
        <h3 className={cls.h3}>斜め掛け</h3>
        <p className={cls.body}>ソケットを斜めに掛けると、角に無理な力がかかりなめの原因になります。ボルトに対してまっすぐ掛けます。</p>
        <h3 className={cls.h3}>ボルトの傷み</h3>
        <p className={cls.body}>すでに角が丸くなったボルトは、6角でもなめることがあります。傷みが進んだボルトは、状態に合った工具や工法を選びます。</p>
        <h3 className={cls.h3}>過大トルク</h3>
        <p className={cls.body}>工具や差込角の想定を超える過大なトルクは、なめ・破損の原因です。特に小さい差込角へ大トルクをかけないようにします。差込角ごとのトルク上限は製品仕様で確認します。</p>
        <h3 className={cls.h3}>工具の摩耗</h3>
        <p className={cls.body}>ソケット内側が摩耗・変形していると、掛かりが甘くなります。摩耗・亀裂のある工具は使わず、点検・交換します。</p>
        <Caution title="「12角＝なめる」ではなく、使い方と状態が原因">
          <p>12角が必ずなめる・必ず弱い、とは断定できません。なめる主因は、サイズ違い・浅掛け・斜め掛け・ボルトの傷み・過大トルク・工具の摩耗です。正しいサイズを奥までまっすぐ差し込み、ボルトの状態に応じて6角と使い分ければ、12角でも適切に使えます。</p>
        </Caution>

        {/* ===== H2-3 ===== */}
        <h2 id="muku12" className={cls.h2}>12角が向く作業</h2>
        <p className={cls.body}>12角は、ハンドルの振り幅が取りにくい狭所や、ボルト頭が見えにくく手探りで掛ける場所で力を発揮します。30度ごとに掛け直せるため、少ない動きで素早く作業できます。壁際・入り組んだ配管まわり・カバー内など、位置合わせが難しい箇所に向きます。状態の良い6角ボルトにも問題なく使え、汎用性の高さも利点です。</p>
        <p className={cls.body}>具体的には、エンジンルームや制御盤の裏側のように工具を振る角度が限られる場所、点検口から手だけを入れてボルトを探るような作業で、掛け直しの回数を減らせます。ラチェットハンドルの送り角と組み合わせると、狭所でも少ない振りで回し続けられます。ただし、12角でも掛かりが浅い・斜めになると角を傷めるため、狭所ほど「奥までまっすぐ」を意識します。締め付けの強い箇所や固着が疑われる箇所では、まず6角で緩めてから12角に持ち替える、といった使い分けも有効です。</p>

        {/* ===== H2-4 ===== */}
        <h2 id="muku6" className={cls.h2}>6角が向く作業</h2>
        <p className={cls.body}>6角は、面でボルトを捉えるため、高トルクや固着したボルト、角が傷みやすい柔らかいボルトの作業に向きます。強く締まった箇所や、錆・固着を緩める場面では、なめにくさが効いてきます。ただし、すべての固着ボルトが6角で外せるわけではありません。傷みがひどい場合は、緩め剤・加熱・専用工具など、状態に合った方法も併用します。高トルクをかける大型ボルトの整備では、6角と大きめの差込角を組み合わせるのが基本です。なお、6角だから絶対に安全というわけではなく、サイズ違いや斜め掛け、過大トルクがあればなめ・破損は起こります。角数の選択に加えて、正しいサイズを奥までまっすぐ掛け、工具の摩耗を点検することが、6角・12角のいずれでも前提になります。</p>

        {/* ===== H2-5 ===== */}
        <h2 id="sq-chigai" className={cls.h2}>差込角6.35・9.5・12.7・19.0mmの違い</h2>
        <p className={cls.body}>差込角は、ソケットとハンドルをつなぐ四角い駆動部の寸法です。角数（6角・12角）とは別の概念で、扱えるトルクと工具の大きさに関わります。</p>
        <Figure src={IMG.sqCompare} alt="差込角6.35mm・9.5mm・12.7mm・19.0mmのソケットとハンドルの駆動部を並べて大きさを比較した図" caption="差込角が大きいほど工具は大きく、扱えるトルクの目安も上がる" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>差込角</Th><Th>インチ</Th><Th>工具の大きさ</Th><Th>主な用途</Th><Th>商品候補</Th><Th>注意点</Th></tr></thead>
            <tbody>
              <tr><Td>6.35mm</Td><Td>1/4</Td><Td>小さい・軽い</Td><Td>小ねじ・精密・細かい箇所</Td><Td>RS2405M11／HRW2004M-SW</Td><Td>大トルクには不向き</Td></tr>
              <tr><Td>9.5mm</Td><Td>3/8</Td><Td>標準</Td><Td>一般整備の標準</Td><Td>VO3121／RS3405M12</Td><Td>用途が広く扱いやすい</Td></tr>
              <tr><Td>12.7mm</Td><Td>1/2</Td><Td>大きめ</Td><Td>自動車・産業機械の中〜高トルク</Td><Td>09060／ST09092ME12</Td><Td>重量・取り回しを確認</Td></tr>
              <tr><Td>19.0mm</Td><Td>3/4</Td><Td>大きい・重い</Td><Td>大型車・建機・大型設備</Td><Td>09016／6405Mシリーズ</Td><Td>本当に必要な範囲か確認</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">※差込角ごとのトルク上限は製品により異なります。数値は推測せず、各商品ページ・メーカー情報で確認してください。</p>

        {/* ===== H2-6 ===== */}
        <h2 id="sq-erabi" className={cls.h2}>差込角はトルクと作業場所で選ぶ</h2>
        <p className={cls.body}>差込角は「必要なトルク」と「作業場所の広さ・重量の許容」で選びます。大は小を兼ねません。大きすぎる差込角は重く取り回しづらく、小さすぎると必要なトルクに耐えられません。</p>
        <Figure src={IMG.sqUsage} alt="差込角別に小ねじ・一般整備・中トルク・大型ボルトの作業用途を示した比較" caption="必要トルクと作業場所に見合った差込角を選ぶ" />
        <p className={cls.body}>精密・小ねじは6.35mm、日常の一般整備は9.5mm、自動車や産業機械の中〜高トルクは12.7mm、大型車・建機は19.0mmが目安です。変換アダプターで差込角は変えられますが、小さい差込角側へ大トルクをかけると破損の原因になります。アダプターの多用や過大トルクは避け、トルクに見合った差込角の工具を基本にします。</p>
        <Caution title="変換アダプターは万能ではない">
          <p>変換アダプターで差込角を変換できますが、これで万能に対応できるわけではありません。特に小さい差込角へ大きなトルクをかけると、工具の破損や事故につながります。必要トルクに見合った差込角の工具を用い、アダプターに頼りすぎないでください。</p>
        </Caution>

        {/* ===== H2-7 ===== */}
        <h2 id="impact" className={cls.h2}>手動用とインパクト用の違い</h2>
        <p className={cls.body}>手動用ソケットとインパクト用ソケットは、見た目が似ていても内部設計が異なります。手動用はハンドルで回す用途、インパクト用はインパクトレンチの打撃・衝撃に耐える設計です。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>項目</Th><Th>手動用</Th><Th>インパクト用</Th><Th>誤使用リスク</Th></tr></thead>
            <tbody>
              <tr><Td>用途</Td><Td>ハンドルで回す</Td><Td>インパクトレンチの打撃に耐える</Td><Td>手動用を動力工具で使うと破損・飛散</Td></tr>
              <tr><Td>見た目</Td><Td>クローム等で光沢</Td><Td>黒染めなど（例外あり）</Td><Td>見た目だけで判断しない</Td></tr>
              <tr><Td>保持部品</Td><Td>—</Td><Td>ピン・Oリングで脱落防止</Td><Td>保持部品の省略は飛散の危険</Td></tr>
              <tr><Td>選び方</Td><Td>手作業の整備</Td><Td>動力での着脱</Td><Td>用途に合った方を選ぶ</Td></tr>
            </tbody>
          </table>
        </div>
        <Figure src={IMG.handImpact} alt="手動用ソケットとインパクト用ソケットを並べ、保持ピンやOリングの有無を比較した図" caption="手動用をインパクトレンチで使わない。インパクト用は保持部品を省略しない" />
        <Caution title="手動用ソケットをインパクトレンチで使わない">
          <p>クロームソケットなどの手動用ソケットを、インパクトレンチで使用しないでください。打撃・衝撃で破損・飛散し、けがの原因になります。動力での着脱にはインパクト用ソケットを用い、保持ピン・Oリングなどの保持部品を省略しないでください。適合する保持部品は製品仕様で確認します。</p>
        </Caution>
        <p className={cls.body}>下記はインパクト用の12角ソケットです。手動用の6405Mシリーズとは用途が異なります。</p>
        <CardGrid>
          <ProductCard p={P_18405M46} />
        </CardGrid>
        <CTA label="インパクト用12角ソケットを見る" href="#impact" />

        {/* ===== H2-8 ===== */}
        <h2 id="sq635" className={cls.h2}>差込角6.35mmの商品</h2>
        <p className={cls.body}>6.35mm（1/4）は小ねじ・細かい箇所の精密作業に向きます。取り回しが軽く、狭い場所での作業に扱いやすい差込角です。</p>
        <CardGrid>
          <ProductCard p={P_RS2405M11} /><ProductCard p={P_HRW2004MSW} /><ProductCard p={P_TSX2170} />
        </CardGrid>
        <CTA label="6.35mmのソケットセットを見る" href="#sq635" />

        {/* ===== H2-9 ===== */}
        <h2 id="sq95" className={cls.h2}>差込角9.5mmの商品</h2>
        <p className={cls.body}>9.5mm（3/8）は一般整備の標準サイズです。用途が広く、はじめてそろえる12角セットにも扱いやすい差込角です。同シリーズの構成違い（VO3121／VO3122）は入組内容を比較して選びます。</p>
        <CardGrid>
          <ProductCard p={P_VO3121} /><ProductCard p={P_VO3122} /><ProductCard p={P_RS3405M12} /><ProductCard p={P_2016486} />
        </CardGrid>
        <CTA label="9.5mmの12角セットを見る" href="#sq95" />

        {/* ===== H2-10 ===== */}
        <h2 id="sq127" className={cls.h2}>差込角12.7mmの商品</h2>
        <p className={cls.body}>12.7mm（1/2）は自動車・産業機械の中〜高トルク整備に向きます。締め付けの強い箇所や大きめのボルトに対応しやすい差込角です。6角セット（09099）は固着・高トルクでボルトを保護したい場面の候補です。</p>
        <CardGrid>
          <ProductCard p={P_09060} /><ProductCard p={P_ST09092ME12} /><ProductCard p={P_09099} /><ProductCard p={P_2308916} /><ProductCard p={P_2016494} /><ProductCard p={P_AMCW260M} />
        </CardGrid>
        <CTA label="12.7mmのソケットセットを見る" href="#sq127" />

        {/* ===== H2-11 ===== */}
        <h2 id="sq19" className={cls.h2}>差込角19.0mm・大型ソケット</h2>
        <p className={cls.body}>19.0mm（3/4）は大型車・建設機械・大型設備など、大きなボルトと高トルクを扱う整備向けです。大型サイズ（対辺54〜65mmなど）はセットに含まれないことが多く、単品で補います。単品はハンドルを別途用意します。</p>
        <CardGrid>
          <ProductCard p={P_09015} /><ProductCard p={P_09016} /><ProductCard p={P_AMCW291M} /><ProductCard p={P_6405M54} /><ProductCard p={P_6405M55} /><ProductCard p={P_6405M58} /><ProductCard p={P_6405M63} /><ProductCard p={P_6405M65} />
        </CardGrid>
        <CTA label="19.0mmの大型セットを見る" href="#sq19" />
        <CTA label="大型12角ソケットを単品で見る" href="#sq19" />
        <h3 className={cls.h3}>12角ソケットセットの比較（差込角別）</h3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>角数</Th><Th>差込角</Th><Th>入組点数</Th><Th>サイズ範囲</Th><Th>ハンドル</Th><Th>ケース</Th><Th>向く作業</Th><Th>購入前確認</Th></tr></thead>
            <tbody>
              <tr><Td>Ko-ken RS2405M11</Td><Td>12角</Td><Td>6.35mm</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>レール</Td><Td>精密・小ねじ</Td><Td>入組・付属</Td></tr>
              <tr><Td>ASH VO3121／VO3122</Td><Td>12角</Td><Td>9.5mm</Td><Td>19点</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>一般整備</Td><Td>両者の入組差</Td></tr>
              <tr><Td>Ko-ken RS3405M12</Td><Td>12角</Td><Td>9.5mm</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>レール</Td><Td>一般整備</Td><Td>入組・付属</Td></tr>
              <tr><Td>SATA 09060</Td><Td>12角</Td><Td>12.7mm</Td><Td>24点</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>中〜高トルク</Td><Td>入組・付属</Td></tr>
              <tr><Td>SATA ST09092ME12</Td><Td>12角</Td><Td>12.7mm</Td><Td>25点</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>中〜高トルク</Td><Td>入組・付属</Td></tr>
              <tr><Td>SATA 09015／09016</Td><Td>12角</Td><Td>19.0mm</Td><Td>15点／26点</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>大型・高トルク</Td><Td>入組・付属・重量</Td></tr>
              <tr><Td>Ko-ken 6405Mシリーズ</Td><Td>12角</Td><Td>19.0mm</Td><Td>単品</Td><Td>対辺54〜65mm</Td><Td>別途</Td><Td>—</Td><Td>大型ボルト補充</Td><Td>ハンドル別途・トルク</Td></tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-500">※点数・サイズ範囲・ハンドル/ケースの付属・トルク上限は各商品ページ／メーカー情報で確認してください。</p>
        </div>

        {/* ===== H2-12 ===== */}
        <h2 id="boubaku" className={cls.h2}>防爆・非磁性ソケットセット</h2>
        <p className={cls.body}>可燃性雰囲気や磁気を嫌う現場では、非磁性・防爆に配慮した工具（Ampco等）が使われます。一般工具とは用途が異なるため、区別して選びます。</p>
        <Caution title="防爆工具だけで爆発リスクは解消しない">
          <p>防爆・非磁性工具は火花のリスク低減に配慮した製品ですが、これだけで爆発リスクが解消するわけではありません。作業手順・環境管理・換気などの安全対策と併せて使います。防爆・非磁性・耐食の適合や、正式な角数・差込角・入組内容は製品仕様で確認してください。</p>
        </Caution>
        <CardGrid>
          <ProductCard p={P_AMCW260M} /><ProductCard p={P_AMCW291M} />
        </CardGrid>
        <CTA label="防爆・非磁性ソケットセットを見る" href="#boubaku" />

        {/* ===== H2-13 ===== */}
        <h2 id="toolset-diff" className={cls.h2}>ソケットセットと総合工具セットの違い</h2>
        <p className={cls.body}>「ソケット専用セット」と「総合工具セット」は目的が違います。ソケット専用セットは差込角別にソケットとハンドルをそろえるもの、総合工具セットはドライバー・レンチ・プライヤーなど整備に必要な工具を幅広く含むものです。すでにソケットを持っていて他工具を補うなら総合セット、特定差込角のソケットを充実させたいならソケット専用セットが向きます。どちらも点数の多さではなく、必要な工具が入っているかで選びます。</p>
        <p className={cls.body}>選ぶ順序としては、まず日常的に触るボルト・ナットのサイズと差込角を洗い出し、それをカバーするソケットが揃うかを確認します。次に、ドライバーやレンチなど周辺工具を新たにそろえる必要があるかを見て、必要なら総合セットを軸にします。すでに工具箱がある場合は、不足サイズのソケットや大型単品を買い足す方が無駄がないこともあります。複数拠点で標準化するなら、拠点ごとに触る設備に合わせて「基本の総合セット＋差込角別の追加ソケット」という組み合わせにすると、過不足を抑えやすくなります。いずれの場合も、点数の見かけではなく、実際に使うサイズと工具が入っているかを基準にします。</p>

        {/* ===== H2-14 ===== */}
        <h2 id="toolset" className={cls.h2}>21・41・46・52・56・61・66点セットの選び方</h2>
        <p className={cls.body}>総合工具セットは点数で選びがちですが、点数が多いほど高性能というわけではありません。中心となる差込角、含まれる工具の種類、ケース形状で選びます。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>点数</Th><Th>中心差込角</Th><Th>主な工具</Th><Th>ケース</Th><Th>重量</Th><Th>向く用途</Th></tr></thead>
            <tbody>
              <tr><Td>TRUSCO TSTS-3</Td><Td>3点</Td><Td>要確認</Td><Td>基本工具</Td><Td>要確認</Td><Td>要確認</Td><Td>最小限の基本</Td></tr>
              <tr><Td>TONE TSX3172</Td><Td>21点</Td><Td>要確認</Td><Td>ソケット＋基本工具</Td><Td>要確認</Td><Td>要確認</Td><Td>はじめての1台</Td></tr>
              <tr><Td>TONE TSX2170</Td><Td>40点</Td><Td>要確認</Td><Td>ソケット＋基本工具</Td><Td>要確認</Td><Td>要確認</Td><Td>基本を幅広く</Td></tr>
              <tr><Td>TONE 700S</Td><Td>46点</Td><Td>要確認</Td><Td>メンテナンス工具</Td><Td>要確認</Td><Td>要確認</Td><Td>設備保全</Td></tr>
              <tr><Td>KTC SK4520WZ</Td><Td>52点</Td><Td>要確認</Td><Td>整備工具一式</Td><Td>メタル</Td><Td>要確認</Td><Td>整備定番</Td></tr>
              <tr><Td>KTC SK3562WZ／SK3561P／SK3561SS／SK3562WZGBK</Td><Td>56点</Td><Td>要確認</Td><Td>整備工具一式</Td><Td>メタル/プラ/薄型</Td><Td>要確認</Td><Td>自動車・設備整備</Td></tr>
              <tr><Td>TONE TSA3331</Td><Td>61点</Td><Td>要確認</Td><Td>オートメカニック用</Td><Td>要確認</Td><Td>要確認</Td><Td>自動車整備</Td></tr>
              <tr><Td>KTC SK3661X／SK3661E／SK3661XS</Td><Td>66点</Td><Td>要確認</Td><Td>整備工具一式</Td><Td>チェスト</Td><Td>要確認</Td><Td>工具が多い現場</Td></tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-500">※入組内容・中心差込角・ケース材質・重量は各商品ページ／メーカー情報で確認してください。点数だけで比較しないでください。</p>
        </div>
        <CardGrid>
          <ProductCard p={P_TSTS3} /><ProductCard p={P_TSX3172} /><ProductCard p={P_TSX2170} /><ProductCard p={P_700S} /><ProductCard p={P_SK4520WZ} /><ProductCard p={P_SK3562WZ} /><ProductCard p={P_SK3561P} /><ProductCard p={P_SK3561SS} /><ProductCard p={P_SK3562WZGBK} /><ProductCard p={P_TSA3331} /><ProductCard p={P_SK3661X} /><ProductCard p={P_SK3661E} /><ProductCard p={P_SK3661XS} />
        </CardGrid>
        <CTA label="整備用総合工具セットを見る" href="#toolset" />

        {/* ===== H2-15 ===== */}
        <h2 id="case" className={cls.h2}>メタル・プラ・薄型・チェストケースの違い</h2>
        <p className={cls.body}>同じ点数のセットでも、ケースの形状で使い勝手が変わります。使用場所と運搬の有無で選びます。</p>
        <Figure src={IMG.setCase} alt="メタルケース・プラケース・薄型ケース・チェストタイプの工具セットケースを並べて比較した様子" caption="据置き・持ち運び・省スペース・整理のどれを重視するかで選ぶ" />
        <p className={cls.body}>メタルケースは堅牢で据置き・保護に向き、プラケースは軽量で持ち運びに向く傾向です。薄型は収納スペースが限られる場所に、チェストタイプは工具が多く整理・据置きしたい現場に向きます。同じ56点でもメタル（SK3562WZ）・プラ（SK3561P）・薄型（SK3561SS）があり、ケース重量や収納方式も確認して選びます。ケース重量は運搬性に直結するため、最大積載や持ち運びの頻度も見込みます。</p>

        {/* ===== H2-16 ===== */}
        <h2 id="toolbox" className={cls.h2}>工具箱・工具バッグの選び方</h2>
        <p className={cls.body}>セットに付属するケースとは別に、工具箱・工具バッグをそろえると、現場や用途に合わせて工具を持ち運べます。形状と積載で選びます。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>形状</Th><Th>外寸</Th><Th>最大積載</Th><Th>収納方法</Th><Th>向く現場</Th></tr></thead>
            <tbody>
              <tr><Td>Tajima TBTBAG</Td><Td>ツールバッグ</Td><Td>要確認</Td><Td>要確認</Td><Td>仕切り・ポケット</Td><Td>移動の多い現場</Td></tr>
              <tr><Td>TRUSCO ST-350-B</Td><Td>2段工具箱</Td><Td>要確認</Td><Td>要確認</Td><Td>2段トレー</Td><Td>定位置で分類収納</Td></tr>
              <tr><Td>TRUSCO Y-410-B</Td><Td>山型工具箱</Td><Td>要確認</Td><Td>要確認</Td><Td>片開き</Td><Td>基本工具の持ち運び</Td></tr>
              <tr><Td>TRUSCO T-320MBK</Td><Td>トランク型</Td><Td>要確認</Td><Td>要確認</Td><Td>まとめて収納</Td><Td>運搬・保管</Td></tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-500">※外寸・最大積載は各商品ページで確認してください。最大積載量を超えて収納しないでください。</p>
        </div>
        <CardGrid>
          <ProductCard p={P_TBTBAG} /><ProductCard p={P_ST350B} /><ProductCard p={P_Y410B} /><ProductCard p={P_T320MBK} />
        </CardGrid>
        <CTA label="工具箱・工具バッグを見る" href="#toolbox" />

        {/* ===== H2-17 ===== */}
        <h2 id="senmon" className={cls.h2}>専門用途セットを一般整備用と混同しない</h2>
        <p className={cls.body}>電気工事士の技能試験用セットや絶縁工具セットは、特定の用途に特化した専門品です。一般整備用の代替として選ぶものではありません。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>用途</Th><Th>一般整備との違い</Th><Th>購入前確認</Th></tr></thead>
            <tbody>
              <tr><Td>MARVEL MDKS17S</Td><Td>電気工事士 技能試験対策</Td><Td>試験に必要な工具構成</Td><Td>試験要件への適合</Td></tr>
              <tr><Td>MARVEL MDKS7VA</Td><Td>技能試験（VA線ストリッパー付）</Td><Td>試験向けの構成</Td><Td>試験要件・付属</Td></tr>
              <tr><Td>KTC ZTB311A</Td><Td>絶縁が必要な電気作業</Td><Td>規格適合の絶縁工具</Td><Td>絶縁の適合・規格</Td></tr>
            </tbody>
          </table>
        </div>
        <Caution title="樹脂グリップ＝絶縁工具ではない">
          <p>樹脂の柄が付いているだけでは絶縁工具とは断定できません。絶縁工具は規格に適合した専用品です。感電のおそれがある作業では、絶縁の適合が確認された専用工具を使ってください。試験用・絶縁工具を一般整備用の代替として選ばないでください。</p>
        </Caution>
        <CardGrid>
          <ProductCard p={P_MDKS17S} /><ProductCard p={P_MDKS7VA} /><ProductCard p={P_ZTB311A} />
        </CardGrid>

        {/* ===== H2-18 ===== */}
        <h2 id="shippai" className={cls.h2}>よくある失敗</h2>
        <p className={cls.body}>ソケット・工具セット選びで起きやすい失敗を挙げます。当てはまるものは見直してください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "「12角は必ずなめる」と決めつける",
            "12角ならどのボルトにも万能に使えると思う",
            "傷んだボルトへ無理に使う",
            "ソケットを奥まで差し込まない",
            "斜めに掛けて使う",
            "対辺寸法（サイズ）を間違える",
            "ミリとインチを混同する",
            "角数と差込角を混同する",
            "ハンドルと差込角が一致していない",
            "変換アダプターで過大トルクをかける",
            "小さい差込角へ大トルクをかける",
            "手動用ソケットをインパクトで使う",
            "インパクト用の保持ピン・Oリングがない",
            "摩耗・亀裂を放置して使う",
            "点数だけでセットを選ぶ",
            "必要なサイズがセットに入っていない",
            "ケースの重量を確認しない",
            "工具箱の最大積載量を超える",
            "防爆工具の用途を誤認する",
            "技能試験用セットを整備用として買う",
            "樹脂柄の工具を絶縁工具と誤認する",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-red-500">✕</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-19 ===== */}
        <h2 id="checklist" className={cls.h2}>法人向けチェックリスト</h2>
        <p className={cls.body}>複数拠点で工具を標準化する際のチェックリストです。選定・発注・管理の確認に使ってください。</p>
        <Figure src={IMG.management} alt="工場で整備工具セットを台帳とともに管理・標準化している様子" caption="点数ではなく入組内容で標準化し、点検・管理まで含めて運用する" />
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "ボルトの形状（6角/12角）と状態を確認した",
            "傷み・錆・固着では6角も候補にした",
            "角数と差込角を区別して選んだ",
            "対辺寸法・ミリ/インチを確認した",
            "必要トルクと作業場所で差込角を選んだ",
            "手動用とインパクト用を区別した",
            "手動用を動力工具に使わない運用にした",
            "インパクト用の保持ピン・Oリングを確認した",
            "大型サイズは単品で補い、ハンドルを用意した",
            "防爆・非磁性の適合と安全対策を確認した",
            "点数ではなく入組内容でセットを選んだ",
            "ケース形状・重量・最大積載を確認した",
            "試験用・絶縁工具を一般整備と区別した",
            "摩耗・亀裂の点検・交換ルールを決めた",
            "正式名称・現行状況・後継品を一次情報で確認した",
            "拠点間で標準構成をそろえた",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-emerald-600">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-20 FAQ ===== */}
        <h2 id="faq" className={cls.h2}>FAQ（よくある質問）</h2>
        <div className="my-4 divide-y divide-gray-200 rounded-lg border border-gray-200">
          {faqs.map((f) => (
            <div key={f.q} className="p-4">
              <p className={cls.faqQ}>Q. {f.q}</p>
              <p className={cls.bodySm}>A. {f.a}</p>
            </div>
          ))}
        </div>

        {/* ===== H2-21 まとめ ===== */}
        <h2 id="matome" className={cls.h2}>まとめ｜ボルトの状態・作業場所・差込角から選ぶ</h2>
        <p className={cls.body}>12角と6角は「どちらが優れているか」ではなく、ボルトの形状・状態と作業場所で使い分けます。12角は位置合わせがしやすく狭所に強く、6角は面で捉えて固着・高トルクに強い傾向です。12角が必ずなめる・必ず弱いとは断定できず、正しいサイズを奥までまっすぐ差し込むことがなめ防止の基本です。角数とは別に、差込角（6.35/9.5/12.7/19.0mm）を必要トルクと作業場所で選び、手動用とインパクト用を区別します。大型サイズは単品で補い、防爆・非磁性や絶縁・試験用は一般整備と区別します。セットは点数ではなく入組内容で選び、ケース・収納・点検・管理まで含めて運用します。正式仕様・現行状況は公開前にメーカー情報・商品ページで確認してください。</p>
        <p className="mb-3 text-sm font-bold text-gray-900">用途別に比較する</p>
        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href="#sq95" className="flex items-center justify-center rounded-lg bg-gray-900 px-4 py-6 text-center text-sm font-bold text-white transition hover:bg-gray-700">6.35／9.5mmを見る →</a>
          <a href="#sq127" className="flex items-center justify-center rounded-lg bg-gray-900 px-4 py-6 text-center text-sm font-bold text-white transition hover:bg-gray-700">12.7mmを見る →</a>
          <a href="#sq19" className="flex items-center justify-center rounded-lg bg-gray-900 px-4 py-6 text-center text-sm font-bold text-white transition hover:bg-gray-700">19.0mm・大型を見る →</a>
          <a href="#toolset" className="flex items-center justify-center rounded-lg bg-gray-900 px-4 py-6 text-center text-sm font-bold text-white transition hover:bg-gray-700">総合工具セットを見る →</a>
        </div>

      </main>
      <SiteFooter />
    </>
  );
}
