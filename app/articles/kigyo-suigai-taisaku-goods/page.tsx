/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

/* =========================================================
   作業用品ナビ｜企業の水害対策グッズ
   slug: kigyo-suigai-taisaku-goods
   自己完結 page.tsx（中央レジストリなし・共通コンポーネント不使用）
   ========================================================= */

const SLUG = "kigyo-suigai-taisaku-goods";
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const PUBLISHED = "2026-10-09";
const UPDATED = "2026-10-09";
const TITLE = "企業の水害対策グッズ｜止水板・土のうの必要数と選び方【2026年版】";
const DESCRIPTION =
  "工場・倉庫・店舗・事務所の水害対策グッズを「止める・逃がす・続ける・戻す」の4層で整理。入口幅と想定浸水深から止水板・土のうの必要数を出す計算例、2026年5月開始の新しい防災気象情報に合わせた社内タイムライン、蓄電池の容量計算までまとめました。";
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
/** 楽天 crecote-shop（? の前の末尾スラッシュを維持） */
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
  bw52: { name: "ボックスウォール BW52 止水板", short: "ボックスウォールBW52", href: G("https://www.gc-select.com/products/6300027727"), img: "6300027727.jpg", store: "gc", tags: ["工場・倉庫", "大開口", "工具不要"], point: "本体に乗る水の圧力で固定する箱型。堰き止め高50cm、1個で幅980mmをカバー（メーカー公表）。2名で10mを約2分で並べられる設計。", spec: "980×680×530mm／6.2kg/個" },
  bw52_side: { name: "ボックスウォール BW52用 サイドアタッチメント", short: "BW52用サイドアタッチメント", href: G("https://www.gc-select.com/products/6300027730"), img: "6300027730.jpg", store: "gc", tags: ["BW52専用", "壁際の処理"], point: "BW52の端部と壁のすき間をふさぐ専用パーツ。必要数と取り付け方向は商品ページで確認を。", spec: "" },
  iris_l: { name: "【アイリスオーヤマ】止水板 ストレートタイプ", short: "アイリス止水板 ストレート", href: G("https://www.gc-select.com/products/6300099082"), img: "6300099082.jpg", store: "gc", tags: ["店舗入口", "置くだけ", "連結式"], point: "ABS樹脂の本体にEPDMスポンジを組み合わせた連結式。タイプを問わずつなげられ、入口幅に合わせて枚数を増減できる。", spec: "本体 705×680×615mm／4.4kg" },
  iris_u: { name: "【アイリスオーヤマ】止水板 内カーブタイプ", short: "アイリス止水板 内カーブ", href: G("https://www.gc-select.com/products/6300099083"), img: "6300099083.jpg", store: "gc", tags: ["入隅", "連結パーツ"], point: "内側へ曲がる角を囲うカーブ型。ストレートと組み合わせてL字・コの字に配置できる。", spec: "本体 620×680×615mm／3.2kg" },
  iris_c: { name: "【アイリスオーヤマ】止水板 外カーブタイプ", short: "アイリス止水板 外カーブ", href: G("https://www.gc-select.com/products/6300099084"), img: "6300099084.jpg", store: "gc", tags: ["出隅", "連結パーツ"], point: "建物の角を外側から回り込む外カーブ型。ストレートとの連結で建物の角まで切れ目なく囲える。", spec: "本体 760×680×615mm／3.2kg" },
  plabarrier: { name: "止水板 プラバリア 1.6m分セット", short: "プラバリア 1.6m分", href: G("https://www.gc-select.com/products/6300058493"), img: "6300058493.jpg", store: "gc", tags: ["自動ドア前", "軽量パネル"], point: "積水化学グループの止水板。1枚約4kgで、連結パーツに差し込み固定キャップを締める構造（メーカー発表）。1.6m分のセット。", spec: "1.6m分セット" },
  sonae3: { name: "ワニ印 水害防止パネル 備えあれ板 3枚（004954）", short: "備えあれ板 3枚", href: C("https://item.rakuten.co.jp/crecote-shop/ta046427-004954/"), img: "ta046427-004954.jpg", store: "rakuten", tags: ["初期の浸水", "折り畳みL型"], point: "冠水した水の重みで安定するL型パネル。初期の軽度な浸水向けで、強風時は重しやロープで固定するよう注意書きあり。", spec: "3枚入／高さ約50cm（コンパクト版は25cm）" },
  sonae_corner: { name: "ワニ印 水害防止パネル 備えあれ板 コーナーパーツ 1枚（004959）", short: "備えあれ板 コーナー", href: C("https://item.rakuten.co.jp/crecote-shop/ta046104-004959/"), img: "ta046104-004959.jpg", store: "rakuten", tags: ["角の処理", "備えあれ板用"], point: "備えあれ板と組み合わせて出入口や建物の角をカバー。出隅120°・入隅135°まで対応（販売店表記）。", spec: "1枚" },
  mizuyojin: { name: "UACJ アルミ止水板 水用心 脱着式（MZTR001）", short: "UACJ 水用心 MZTR001", href: C("https://item.rakuten.co.jp/crecote-shop/ta054165-mztr001/"), img: "ta054165-mztr001.jpg", store: "rakuten", tags: ["アルミ製", "脱着式"], point: "アルミ止水板を手がけるUACJの脱着式モデル。対応する開口幅と取り付け方法は商品ページで確認を。", spec: "" },
  donou20x30: { name: "土のう袋 20枚入 30袋セット（計600枚）", short: "土のう袋 20枚入×30袋", href: G("https://www.gc-select.com/products/6300095083"), img: "6300095083.jpg", store: "gc", tags: ["計600枚", "まとめ買い"], point: "20枚入×30袋で計600枚。入口1か所22袋の計算なら約27か所分になる。", spec: "計600枚" },
  donou10x60: { name: "土のう袋 10枚入 60袋セット（計600枚）", short: "土のう袋 10枚入×60袋", href: G("https://www.gc-select.com/products/6300095082"), img: "6300095082.jpg", store: "gc", tags: ["計600枚", "小分け配布"], point: "10枚入×60袋。拠点やフロアごとに小分けして配りやすい構成。", spec: "計600枚" },
  ks3: { name: "デラックス土のう KS-3 620×480 50枚入り", short: "デラックス土のう KS-3", href: G("https://www.gc-select.com/products/1137010103"), img: "1137010103.jpg", store: "gc", tags: ["620×480mm", "50枚入"], point: "620×480mmの土のう袋50枚入り。耐候年数などの仕様は商品ページで確認を。", spec: "620×480mm／50枚" },
  mizupita: { name: "吸水土のう 水ピタN型 真水用", short: "吸水土のう 水ピタN型", href: G("https://www.gc-select.com/products/1137010701"), img: "1137010701.jpg", store: "gc", tags: ["土不要", "真水用"], point: "水に浸けて膨らませる吸水土のう。真水用のため、海水や高潮には向かない。", spec: "真水用" },
  mizunou5: { name: "水だけでふくらむ水のう（大）5枚入", short: "水だけでふくらむ水のう（大）", href: G("https://www.gc-select.com/products/6300009235"), img: "6300009235.jpg", store: "gc", tags: ["土不要", "5枚入"], point: "水だけで膨らむ水のう5枚入り。勝手口や止水板の端など、小さなすき間の手当てに。", spec: "5枚入" },
  tsuchino: { name: "丸和ケミカル 土No袋 箱型水槽付20枚セット（722T20）", short: "土No袋 箱型水槽付 722T20", href: C("https://item.rakuten.co.jp/crecote-shop/ta053814-722t20/"), img: "ta053814-722t20.jpg", store: "rakuten", tags: ["水槽付き", "20枚"], point: "土No袋（箱型）20枚に、膨らませる専用水槽と脱水剤をセット。吸水後約23kg、海水では使えない（販売店表記）。", spec: "吸水後 約300×500×200mm" },
  donotaro: { name: "どの太朗 土のう作り Φ306×470mm", short: "どの太朗", href: G("https://www.gc-select.com/products/6300071431"), img: "6300071431.jpg", store: "gc", tags: ["土のう作り", "補助器具"], point: "土のう作りの作業を補助する器具（Φ306×470mm）。使い方の詳細は商品ページで確認を。", spec: "Φ306×470mm" },
  jumbo: { name: "耐候性ジャンボ土のう 黒（2t／3年）1100×1100 10枚入り", short: "耐候性ジャンボ土のう 黒", href: G("https://www.gc-select.com/products/1137010430"), img: "1137010430.jpg", store: "gc", tags: ["2t表記", "耐候3年", "重機で設置"], point: "1100×1100mmの耐候性大型土のう（黒）10枚。2t・3年の表記で、資材置場や敷地境界の仮設向け。", spec: "1100×1100mm／10枚" },
  twotone: { name: "新基準適合 耐候性大型土のう ツートンバッグ 3年対応 5袋セット（BOS-20N-3PF）", short: "ツートンバッグ BOS-20N-3PF", href: G("https://www.gc-select.com/products/6300050951"), img: "6300050951.jpg", store: "gc", tags: ["新基準適合", "5袋", "重機で設置"], point: "商品名に「新基準適合」とある耐候性大型土のう（3年対応）の5袋セット。重機での吊り上げ・据え付けが前提。", spec: "5袋セット" },
  bs_roll1800: { name: "ブルーシートロール 1800mm×100m #3000", short: "ブルーシートロール 1800mm", href: G("https://www.gc-select.com/products/6300021080"), img: "6300021080.jpg", store: "gc", tags: ["#3000", "切って使える"], point: "必要な長さで切り出せる100m巻き。屋外資材や機械の養生にまとめて使える。", spec: "1800mm×100m" },
  bs_roll900: { name: "ブルーシートロール 900mm×100m #3000", short: "ブルーシートロール 900mm", href: G("https://www.gc-select.com/products/6300021079"), img: "6300021079.jpg", store: "gc", tags: ["#3000", "細長い養生"], point: "幅900mmの100m巻き。扉の下や巾木まわりなど細長い部分の養生向け。", spec: "900mm×100m" },
  bs10_3000: { name: "ブルーシート 10m×10m #3000 2枚", short: "ブルーシート 10m×10m #3000", href: G("https://www.gc-select.com/products/6300021078"), img: "6300021078.jpg", store: "gc", tags: ["#3000", "大判2枚"], point: "大判2枚。屋根や大型資材の被覆に。#3000は#2000より厚手の規格。", spec: "10m×10m／2枚" },
  bs10_2000: { name: "ブルーシート 10m×10m #2000 2枚入り", short: "ブルーシート 10m×10m #2000", href: G("https://www.gc-select.com/products/6300021071"), img: "6300021071.jpg", store: "gc", tags: ["#2000", "大判2枚"], point: "大判2枚入りの#2000。短期間の養生や仮置き資材のカバーに。", spec: "10m×10m／2枚" },
  sunwrap: { name: "GENTI サンラップシート SS", short: "GENTI サンラップシート SS", href: G("https://www.gc-select.com/products/6300027744"), img: "6300027744.jpg", store: "gc", tags: ["シート"], point: "GENTIのサンラップシート（SSサイズ）。用途と寸法は商品ページで確認を。", spec: "" },
  ac240p: { name: "ポータブル蓄電池 AC240P", short: "AC240P", href: G("https://www.gc-select.com/products/6300068614"), img: "6300068614.jpg", store: "gc", tags: ["IP65", "1,843Wh"], point: "IP65の防塵防水仕様で容量1,843Wh、定格2,000W（国内販売店表記）。重さ約33kgの据え置き型。", spec: "1,843Wh／約33kg" },
  ac200pl: { name: "ポータブル蓄電池 AC200PL", short: "AC200PL", href: G("https://www.gc-select.com/products/6300068613"), img: "6300068613.jpg", store: "gc", tags: ["2,304Wh", "増設対応"], point: "容量2,304Wh。拡張バッテリーB210Pで増設でき、事務所の業務継続の中核に据えやすい。", spec: "2,304Wh" },
  ac70p: { name: "ポータブル蓄電池 AC70P", short: "AC70P", href: G("https://www.gc-select.com/products/6300068612"), img: "6300068612.jpg", store: "gc", tags: ["864Wh", "中型"], point: "容量864Wh・定格1,000W（メーカー公表）。受付や小規模事務所のPC数台をまかなうクラス。", spec: "864Wh" },
  ac2p: { name: "ポータブル蓄電池 AC2P", short: "AC2P", href: G("https://www.gc-select.com/products/6300068610"), img: "6300068610.jpg", store: "gc", tags: ["230Wh", "小型"], point: "容量230.4Wh・定格300W（メーカー公表）。スマホや無線機、LEDライトの充電用に各フロア1台。", spec: "230.4Wh" },
  b80p: { name: "ポータブル蓄電池用 拡張バッテリー B80P", short: "拡張バッテリー B80P", href: G("https://www.gc-select.com/products/6300068611"), img: "6300068611.jpg", store: "gc", tags: ["806Wh", "拡張用"], point: "806Whの拡張バッテリー。接続できる本体は商品ページで確認を。", spec: "806Wh" },
  b210p: { name: "ポータブル蓄電池用 拡張バッテリー B210P", short: "拡張バッテリー B210P", href: G("https://www.gc-select.com/products/6300068615"), img: "6300068615.jpg", store: "gc", tags: ["2,150Wh", "拡張用"], point: "2,150Whの拡張バッテリー。AC240P・AC200PLの容量を後から増やせる。", spec: "2,150Wh" },
  tl1000: { name: "タメルラボ TL-1000NE ポータブル蓄電池", short: "タメルラボ TL-1000NE", href: G("https://www.gc-select.com/products/6300093094"), img: "6300093094.jpg", store: "gc", tags: ["1kWh級", "キャリー型"], point: "自治体・企業への導入実績が多いタメルラボのキャリー型。同シリーズのTL-1000Nは1,036Wh・9.5kg（メーカー公表）。", spec: "1kWh級" },
  tl2000: { name: "タメルラボ TL-2000NE ポータブル蓄電池", short: "タメルラボ TL-2000NE", href: G("https://www.gc-select.com/products/6300093095"), img: "6300093095.jpg", store: "gc", tags: ["2kWh級", "キャリー型"], point: "同シリーズのTL-2000Nは2,072Wh・16kg・定格2,000W（メーカー公表）。NE型の仕様は商品ページで確認を。", spec: "2kWh級" },
  share30: { name: "シェアする防災セット ベーシック30人分 マグネットLサイズ", short: "シェアする防災セット 30人分", href: G("https://www.gc-select.com/products/6300046024"), img: "6300046024.jpg", store: "gc", tags: ["30人分", "マグネットL"], point: "30人分をひとまとめにした事業所向けの防災セット（マグネット仕様Lサイズ）。内容物は商品ページで確認を。", spec: "30人分" },
  share10l: { name: "シェアする防災セット ベーシック10人分 マグネットLサイズ", short: "シェアする防災セット 10人分（L）", href: G("https://www.gc-select.com/products/6300046036"), img: "6300046036.jpg", store: "gc", tags: ["10人分", "マグネットL"], point: "10人分のセット（マグネット仕様Lサイズ）。", spec: "" },
  share10m: { name: "シェアする防災セット ベーシック10人分 マグネットMサイズ", short: "シェアする防災セット 10人分（M）", href: G("https://www.gc-select.com/products/6300046035"), img: "6300046035.jpg", store: "gc", tags: ["10人分", "マグネットM"], point: "10人分のセット（マグネット仕様Mサイズ）。", spec: "" },
  ruck30: { name: "防水deリュック30点 防災用セット", short: "防水deリュック 30点", href: G("https://www.gc-select.com/products/6300065810"), img: "6300065810.jpg", store: "gc", tags: ["防水", "30点"], point: "防水リュックに30点を収めた個人用の防災セット。浸水時に中身をぬらさないことを優先した構成。", spec: "30点" },
  ruck25: { name: "防水deリュック25点 防災用セット", short: "防水deリュック 25点", href: G("https://www.gc-select.com/products/6300065809"), img: "6300065809.jpg", store: "gc", tags: ["防水", "25点"], point: "防水リュックに25点を収めた個人用セット。", spec: "" },
  ruck15: { name: "防水deリュック15点 防災用セット", short: "防水deリュック 15点", href: G("https://www.gc-select.com/products/6300065807"), img: "6300065807.jpg", store: "gc", tags: ["防水", "15点"], point: "防水リュックに15点を収めた個人用セット。", spec: "" },
  drybag17: { name: "防水ドライバック17点セット 非常用 防災セット 20L", short: "防水ドライバッグ 17点 20L", href: G("https://www.gc-select.com/products/6300072039"), img: "6300072039.jpg", store: "gc", tags: ["防水", "20L"], point: "防水ドライバッグに17点を収めた非常用セット（20L）。", spec: "20L" },
  eiko2017: { name: "エーコー 耐火・防水プロテクターバック シリンダ式 2017", short: "耐火・防水プロテクターバック 2017", href: C("https://item.rakuten.co.jp/crecote-shop/ta053783-2017/"), img: "ta053783-2017.jpg", store: "rakuten", tags: ["耐火・防水", "シリンダ錠"], point: "通帳・印鑑・契約書・バックアップ媒体を1か所にまとめる耐火・防水バッグ（シリンダ錠）。", spec: "型番2017" },
  eiko2013: { name: "エーコー 耐火・防水プロテクターバック シリンダ式 2013", short: "耐火・防水プロテクターバック 2013", href: C("https://item.rakuten.co.jp/crecote-shop/ta053782-2013/"), img: "ta053782-2013.jpg", store: "rakuten", tags: ["耐火・防水", "シリンダ錠"], point: "同シリーズの2013。収納サイズの違いは商品ページで比べて選べる。", spec: "型番2013" },
  boots_m: { name: "先芯入り長靴 ワイルドウルフ ブラック Mサイズ", short: "先芯入り長靴 M", href: G("https://www.gc-select.com/products/6300058674"), img: "6300058674.jpg", store: "gc", tags: ["先芯入り", "片付け"], point: "", spec: "" },
  boots_l: { name: "先芯入り長靴 ワイルドウルフ ブラック Lサイズ", short: "先芯入り長靴 L", href: G("https://www.gc-select.com/products/6300058675"), img: "6300058675.jpg", store: "gc", tags: ["先芯入り", "片付け"], point: "", spec: "" },
  boots_ll: { name: "先芯入り長靴 ワイルドウルフ ブラック LLサイズ", short: "先芯入り長靴 LL", href: G("https://www.gc-select.com/products/6300058676"), img: "6300058676.jpg", store: "gc", tags: ["先芯入り", "片付け"], point: "", spec: "" },
  boots_xl: { name: "先芯入り長靴 ワイルドウルフ ブラック XLサイズ", short: "先芯入り長靴 XL", href: G("https://www.gc-select.com/products/6300058677"), img: "6300058677.jpg", store: "gc", tags: ["先芯入り", "片付け"], point: "", spec: "" },
  wader25: { name: "ハンシン BW-72 防災ウェーダー 25.0cm", short: "防災ウェーダー 25.0cm", href: C("https://item.rakuten.co.jp/crecote-shop/ta052507-bw72250/"), img: "ta052507-bw72250.jpg", store: "rakuten", tags: ["防災用", "復旧作業"], point: "", spec: "" },
  wader26: { name: "ハンシン BW-72 防災ウェーダー 26.0cm", short: "防災ウェーダー 26.0cm", href: C("https://item.rakuten.co.jp/crecote-shop/ta052508-bw72260/"), img: "ta052508-bw72260.jpg", store: "rakuten", tags: ["防災用", "復旧作業"], point: "", spec: "" },
  brush90: { name: "ゴムブラシ90", short: "ゴムブラシ 90", href: G("https://www.gc-select.com/products/6300039148"), img: "6300039148.jpg", store: "gc", tags: ["泥水寄せ"], point: "", spec: "" },
  brush120: { name: "ゴムブラシ120", short: "ゴムブラシ 120", href: G("https://www.gc-select.com/products/6300039149"), img: "6300039149.jpg", store: "gc", tags: ["泥水寄せ"], point: "", spec: "" },
  nqv: { name: "膨張式救命胴衣 NQV-Atn型 赤", short: "膨張式救命胴衣 NQV-Atn型", href: G("https://www.gc-select.com/products/6300004699"), img: "6300004699.jpg", store: "gc", tags: ["TYPE A", "自動膨張"], point: "国交省型式承認のTYPE A・作業用救命衣（販売店表記）。自動膨張式で浮力約11.1kg。河川や水路近くの水防作業に。", spec: "浮力 約11.1kg" },
  ns_bombe: { name: "NS-5000／7000用 替ボンベセット", short: "NS-5000/7000用 替ボンベ", href: G("https://www.gc-select.com/products/6300005536"), img: "6300005536.jpg", store: "gc", tags: ["交換用", "型番専用"], point: "型番どおりNS-5000／7000用の交換ボンベ。NQV-Atn型の交換ボンベは別型番（販売店表記）なので混同に注意。", spec: "" },
  boat3: { name: "インフレータブル式 ゴムボート 3人用", short: "ゴムボート 3人用", href: G("https://www.gc-select.com/products/6300099445"), img: "6300099445.jpg", store: "gc", tags: ["3人用", "レジャー兼用"], point: "空気で膨らませる3人用ゴムボート。本来は水上レジャー用品で、災害時は静かな水域での物資運搬の補助にとどめる。", spec: "" },
  boat3rod: { name: "インフレータブル式 ゴムボート 釣竿置き付き 3人用", short: "ゴムボート 釣竿置き付き", href: G("https://www.gc-select.com/products/6300099441"), img: "6300099441.jpg", store: "gc", tags: ["3人用", "レジャー兼用"], point: "釣竿置き付きの3人用。平時のレジャーと兼用する前提のモデル。", spec: "" },
  oar: { name: "2way アルミオール 水上レジャー", short: "2way アルミオール", href: G("https://www.gc-select.com/products/6300099442"), img: "6300099442.jpg", store: "gc", tags: ["2way", "アルミ"], point: "ボートと組み合わせて使う2wayのアルミオール。", spec: "" },
  cart: { name: "折り畳み式 船外機用カート 耐荷重100kg", short: "船外機用カート", href: G("https://www.gc-select.com/products/6300099443"), img: "6300099443.jpg", store: "gc", tags: ["耐荷重100kg", "折り畳み"], point: "船外機を運ぶための折り畳みカート（耐荷重100kg）。", spec: "" },
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
} as const;

/* ---------- 内部リンク・姉妹サイト ---------- */
const HEAT = "https://www.heatstroke-navi.com/articles";
const RELATED: { title: string; href: string; site: "sagyou" | "heat" }[] = [
  { title: "災害備蓄ラックの選び方（トラスコ）", href: "/articles/saigai-bichiku-rack-trusco", site: "sagyou" },
  { title: "TRUSCOスチール製運搬台車の選び方", href: "/articles/trusco-steel-cart-selection-guide", site: "sagyou" },
  { title: "スチール棚の選び方", href: "/articles/steel-shelf-erabikata", site: "sagyou" },
  { title: "土のうの代わりになる浸水対策", href: `${HEAT}/sandbag-alternative-flood-protection-guide`, site: "heat" },
  { title: "停電時の熱中症対策完全ガイド", href: `${HEAT}/power-outage-heatstroke-guide`, site: "heat" },
  { title: "災害用トイレの選び方と備蓄目安", href: `${HEAT}/disaster-toilet-stockpile-selection-guide`, site: "heat" },
];

/* ---------- 参考資料（本文の数値の出典） ---------- */
const REFERENCES: { title: string; href: string }[] = [
  { title: "気象庁「新たな防災気象情報について（令和8年〜）」", href: "https://www.jma.go.jp/jma/kishou/know/bosai/keiho-update2026/index.html" },
  { title: "東京都都市整備局「止水板設置事例集」（2026年7月）", href: "https://www.toshiseibi.metro.tokyo.lg.jp/documents/d/toshiseibi/2026-08-04-142041-430" },
  { title: "国土交通省「地下空間における浸水対策ガイドライン」資料（避難行動の限界条件）", href: "https://www.mlit.go.jp/river/basic_info/jigyo_keikaku/saigai/tisiki/chika/pdf/g-11_g-14.pdf" },
  { title: "京都大学防災研究所年報 第59号B「止水装置の止水性能に関する検討」", href: "https://www.dpri.kyoto-u.ac.jp/nenpo/no59/ronbunB/a59b0p40.pdf" },
  { title: "日本建設機械施工協会『建設機械施工』2021年9月号「吸水性土のう」", href: "https://jcmanet.or.jp/bunken/kikanshi/2021/9/045.pdf" },
  { title: "国土交通省 ハザードマップポータルサイト", href: "https://disaportal.gsi.go.jp/" },
  { title: "北九州市上下水道局「家庭での下水の逆流を防ぎましょう」", href: "https://www.city.kitakyushu.lg.jp/suidou/s01101064.html" },
  { title: "八代市「水のう」の使い方（PDF）", href: "https://www.city.yatsushiro.lg.jp/kiji00325260/3_25260_146664_up_y5n5yvq2.pdf" },
  { title: "札幌市 防災ガイド（風水害編）", href: "https://www.city.sapporo.jp/kikikanri/aramasi/documents/sin_sapporo_bosai-6huusuigai.pdf" },
  { title: "福井市 洪水ハザードマップ（浸水深と車の走行）", href: "https://www.city.fukui.lg.jp/kurasi/koutu/kasen/p010331_d/fil/0506.pdf" },
  { title: "西尾市 ため池ハザードマップ（浸水深と徒歩避難）", href: "https://www.city.nishio.aichi.jp/_res/projects/default_project/_page_/001/004/520/moriike2.pdf" },
  { title: "中小企業庁「中小企業防災・減災投資促進税制」実施要領", href: "https://www.chusho.meti.go.jp/keiei/antei/bousai/download/keizokuryoku/bousaizeisei_yoryo.pdf" },
  { title: "アイリスオーヤマ 止水板 製品情報", href: "https://www.irisohyama.co.jp/products/tool-diy-material/emergency-supplies/flood-measures-goods/water-stop-plate" },
  { title: "ガデリウス 簡易設置型止水板『ボックスウォール』", href: "https://pr.www.ipros.com/gadelius/product/detail/2001522336" },
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

/** 表・リスト内の商品リンク（サムネ付き・約80px） */
function PLink({ p, label }: { p: Product; label?: string }) {
  return (
    <a
      href={p.href}
      {...EXT}
      className="group inline-flex min-w-[16rem] items-start gap-3 rounded py-1 font-semibold text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded border border-gray-200 bg-white">
        <img
          src={`${IMG_BASE}${p.img}`}
          alt=""
          loading="lazy"
          width={80}
          height={80}
          className="h-full w-full object-contain p-1.5"
        />
      </span>
      <span className="pt-1">{label ?? p.short}</span>
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
    images: [{ url: `${SITE}${IMG_BASE}6300027727.jpg`, width: 1200, height: 1200, alt: "ボックスウォール BW52 止水板" }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "会社で最初に買うなら、止水板と土のうのどちらですか？",
    a: "守る入口が決まっているなら止水板です。京都大学防災研究所の実験では、土のうは樹脂製止水板と比べて単位高さあたり約11倍の設置時間がかかりました。土のうは止水板のすき間や勝手口用に少量を併用する、という組み合わせが現実的です。",
  },
  {
    q: "止水板の高さは何cmを選べばいいですか？",
    a: "ハザードマップの想定浸水深が基準になります。今回比較した工事不要タイプで最も高い公表値は、ボックスウォールBW52の堰き止め高50cm。想定が50cmを超える場合は止水板を時間稼ぎと割り切り、重要品を上階へ移す計画を優先してください。",
  },
  {
    q: "土のうは何袋用意すればいいですか？",
    a: "入口幅を袋1つの長さで割って1段目の数を出し、上の段ほど1袋ずつ減らして合計し、2割の予備を足します。幅2.7m・高さ約30cm（3段）なら約22袋が目安です。",
  },
  {
    q: "吸水土のうは高潮や海水でも使えますか？",
    a: "製品によって異なります。水ピタN型は真水用、土No袋は海水では使用できないと表記されています。沿岸部の事業所は普通の土のうと止水板を基本にしてください。備えあれ板のように、津波・高潮時の設置をしないよう注意書きのある製品もあります。",
  },
  {
    q: "ポータブル蓄電池は水にぬれても使えますか？",
    a: "IP65のAC240Pでも、保護されるのは粉じんと噴流水までで、水没には耐えられません。浸水しない上階に保管し、ぬれた床の上や浸水した部屋では使わないでください。",
  },
  {
    q: "2026年に気象警報の名前が変わったと聞きました。社内マニュアルはどう直せばいいですか？",
    a: "2026年5月29日から、大雨警報は「レベル3大雨警報」に変わり、レベル4相当の「危険警報」が新設されました。社内の行動基準を「レベル3で止水完了と重要品の移動」「レベル4で全員避難」のように、レベルの数字で書き直すと判断に迷いません。",
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
    image: [`${SITE}${IMG_BASE}6300027727.jpg`],
    author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE}/articles` },
      { "@type": "ListItem", position: 3, name: "企業の水害対策グッズ", item: PAGE_URL },
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

const GAUGE: { cm: number; text: string }[] = [
  { cm: 20, text: "小学校高学年の子どもは避難が難しくなるというデータがある水深" },
  { cm: 30, text: "車のエンジンが止まり走れなくなる目安。地下空間では行動限界の水深" },
  { cm: 50, text: "流れがあれば徒歩での避難は不可能" },
  { cm: 70, text: "伊勢湾台風の調査で、大人が避難できた水深の上限の目安" },
];

const TOC = [
  { id: "sec1", label: "企業の水害対策は「止める・逃がす・続ける・戻す」の4層で選ぶ" },
  { id: "sec2", label: "自社の浸水リスクを10分で把握する" },
  { id: "sec3", label: "止水板の選び方と9製品の比較" },
  { id: "sec4", label: "土のう・吸水土のうの必要数を計算する" },
  { id: "sec5", label: "警戒レベル別・社内タイムライン（2026年版）" },
  { id: "sec6", label: "停電対策：蓄電池の容量の決め方" },
  { id: "sec7", label: "従業員と重要書類を守る備え・トイレ" },
  { id: "sec8", label: "水が引いた後の作業装備と水上用品" },
  { id: "sec9", label: "事業所タイプ別のセット例と補助制度" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
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

      {/* パンくず */}
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
          <li className="text-gray-700">企業の水害対策グッズ</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <header className="overflow-hidden rounded-2xl bg-gray-900 text-white">
        <div className="p-6 sm:p-8">
          <p className="inline-block rounded bg-white px-2 py-0.5 text-xs font-bold text-gray-900">防災・水害対策</p>
          <h1 className="mt-3 text-3xl font-black leading-snug tracking-wide sm:text-4xl">{TITLE}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {["総務・施設管理向け", "止水板9製品を比較", "土のう必要数の計算例", "2026年の新・防災気象情報に対応"].map(
              (c) => (
                <span key={c} className="rounded-full border border-gray-500 px-3 py-1 text-xs font-medium text-gray-100">
                  {c}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-xs text-gray-300">
            公開日：<time dateTime={PUBLISHED}>2026年10月9日</time>　最終更新日：
            <time dateTime={UPDATED}>2026年10月9日</time>　文：作業用品ナビ編集部
          </p>
        </div>
      </header>

      {/* リード */}
      <section className="mt-8 space-y-4 text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
        <p>
          「台風が来る前に、入口だけでも何とかしておいてくれ」。上司にそう頼まれて止水板や土のうを調べ始めると、種類が多いうえに「何をいくつ買えばいいか」の根拠が見つからず、稟議書の手が止まりがちです。
        </p>
        <p>
          この記事は、工場・倉庫・店舗・事務所で総務や施設管理を担う方に向けて、水害対策グッズを
          <Mk>買う順番と必要な数</Mk>
          で整理しました。公的資料とメーカー公表値をもとに、入口幅と想定浸水深から数量を出す計算例まで載せています。
        </p>
      </section>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
        <p className="mb-2 text-sm font-bold text-gray-900">この記事が役に立つ人</p>
        <ul className="space-y-1.5 text-sm leading-relaxed text-gray-900">
          <li>・従業員10〜100名規模の工場・倉庫・店舗・事務所で、総務や施設管理を担当している</li>
          <li>・建設会社で、資材置場や現場事務所の水害対策を任された</li>
          <li>・ハザードマップで、自社が浸水想定区域に入っていると知った</li>
        </ul>
      </div>

      {/* 冒頭の結論 */}
      <section aria-labelledby="conclusion" className="mt-8 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 sm:p-6">
        <h2 id="conclusion" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <span className="rounded bg-gray-900 px-2 py-0.5 text-xs text-white">結論</span>
          先に答え：会社の水害対策グッズはこの順でそろえる
        </h2>
        <ol className="mt-4 space-y-3 text-[15px] leading-relaxed">
          {[
            "最初にそろえるのは入口の止水。想定浸水深30cm程度までなら、工事不要の止水板と土のうで浸水を遅らせ、排水や移動の時間を稼げる。",
            "数量は計算で出す。止水板は「入口幅÷1枚の有効幅」、土のうは「段ごとの袋数の合計＋予備2割」。幅2.7m・3段なら約22袋。",
            "想定50cm超は“止める”より“上げる・逃げる”が先。書類・PC・電源を上階へ移す段取りから決める。",
            "停電・トイレ・従業員3日分の備えまでそろえて、ようやく事業継続の形になる。",
            "2026年5月29日から防災気象情報は「レベル付き」の名称に。社内ルールは「レベル3警報で止水完了、レベル4危険警報で全員避難」と書き換える。",
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
        eyebrow="GC-select｜台風・水害対策"
        title="止水板・土のう・蓄電池・防災セットを1ページで見比べる"
        body="この記事で紹介する商品の多くは、GC-selectの「台風・水害対策」特集にまとまっています。入口の数と人数を手元に置いて開くと、選ぶ時間が短くなります。"
      />

      {/* 目次 */}
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

      <article className="text-[17px] leading-[1.95] tracking-[0.04em] text-gray-900">
        {/* ================= 01 ================= */}
        <H2 id="sec1" num="01">
          企業の水害対策は「止める・逃がす・続ける・戻す」の4層で選ぶ
        </H2>
        <p>
          水害は、地震と違って前日から数時間前に「来る」と分かる災害です。準備の差がそのまま被害額の差になるのはそのため。グッズ選びで迷う一番の原因は、目的の違う道具を同じリストで比べてしまうことにあります。まずは次の4層に分けて、抜けている層がないかを確認してください。
        </p>

        <TableWrap caption="水害対策グッズの4層（商品名をクリックすると商品ページが開きます）">
          <thead>
            <tr>
              <th className={TH}>層</th>
              <th className={TH}>目的</th>
              <th className={TH}>主なグッズ</th>
              <th className={TH}>優先度</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} font-bold text-gray-900`}>止める</td>
              <td className={TD}>入口・シャッターからの浸水を遅らせる</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.bw52} />
                  <PLink p={P.iris_l} />
                  <PLink p={P.donou20x30} />
                </div>
              </td>
              <td className={`${TD} whitespace-nowrap font-bold`}>★★★</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold text-gray-900`}>逃がす</td>
              <td className={TD}>人・書類・データを安全な場所へ移す</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.eiko2017} />
                  <PLink p={P.ruck30} />
                </div>
              </td>
              <td className={`${TD} whitespace-nowrap font-bold`}>★★★</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold text-gray-900`}>続ける</td>
              <td className={TD}>停電・断水中も最低限の業務と生活を保つ</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.ac200pl} />
                  <PLink p={P.share30} />
                  <a
                    href={CTA.toilet.href}
                    {...EXT}
                    className="font-semibold text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900"
                  >
                    簡易トイレ（一覧へ）
                  </a>
                </div>
              </td>
              <td className={`${TD} whitespace-nowrap font-bold`}>★★</td>
            </tr>
            <tr>
              <td className={`${TD} font-bold text-gray-900`}>戻す</td>
              <td className={TD}>水が引いた後の泥出し・片付け</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.boots_l} label="先芯入り長靴" />
                  <PLink p={P.brush120} label="ゴムブラシ" />
                </div>
              </td>
              <td className={`${TD} whitespace-nowrap font-bold`}>★★</td>
            </tr>
          </tbody>
        </TableWrap>
        <p>
          優先度は、浸水想定区域にある事業所を前提にした編集部の目安です。区域の外でも、下水があふれる内水氾濫（次章）は起こります。「止める」と「続ける」は最低限そろえておきましょう。
        </p>

        <PointBox title="止水グッズは「浸水ゼロ」の道具ではない">
          <p>
            東京都都市整備局の「止水板設置事例集」では、止水板の性能を<Mk>1時間・1㎡あたりの漏水量</Mk>
            で等級分けしています。工事をした固定式でも、少しは漏れる前提。置くだけタイプならなおさらで、排水用のゴムブラシや吸水土のう、重要品を上げる段取りとセットで考えるのが現実的です。
          </p>
        </PointBox>

        {/* ================= 02 ================= */}
        <H2 id="sec2" num="02">
          自社の浸水リスクを10分で把握する（外水・内水・地下）
        </H2>
        <p>
          何をどれだけ買うかは、事業所ごとの「想定浸水深」と「入口の数・幅」で決まります。次の3ステップで、稟議書に書ける根拠をそろえましょう。
        </p>
        <ol className="my-6 space-y-3">
          {[
            {
              t: "想定浸水深を調べる",
              d: "国土交通省のハザードマップポータルサイトで事業所の住所を入れ、洪水・内水・高潮の想定浸水深を確認。複数の想定があるときは深いほうを採用します。",
            },
            {
              t: "入口を数えて、幅と地面を測る",
              d: "正面入口、通用口、シャッター、搬入口、地下への階段。幅のほか、段差・勾配・グレーチング・タイルの目地といった地面の状態もメモしておきます。",
            },
            {
              t: "地下・半地下を洗い出す",
              d: "電気室、地下駐車場、半地下の倉庫。ここは止水板より先に、人を上げるタイミングを決めておく場所です。",
            },
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
        <p>
          浸水には、川の水があふれる「外水氾濫」と、下水や側溝が雨を処理しきれずに街中が水につかる「内水氾濫」があります。内水氾濫は川から離れた事業所でも発生。国土交通省の地下空間の浸水対策ガイドラインは、内水氾濫時に水位が<Mk>毎分20mm</Mk>
          上がる想定を置いています。10分で20cm。気づいてから土のうを作り始めても、まず間に合いません。
        </p>

        <H3>浸水深ごとに「起きること」の目安</H3>
        <figure className="my-6 rounded-xl border border-gray-200 bg-white p-5">
          <div className="relative" style={{ height: 400 }}>
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-10 rounded-md bg-gradient-to-t from-gray-700 via-gray-400 to-gray-100"
            />
            <ul>
              {GAUGE.map((g) => (
                <li
                  key={g.cm}
                  className="absolute left-0 right-0 translate-y-1/2 pl-14 text-sm leading-snug"
                  style={{ bottom: `${(g.cm / 80) * 100}%` }}
                >
                  <span aria-hidden="true" className="absolute left-0 top-1/2 w-10 border-t-2 border-white" />
                  <span className="font-bold text-gray-900">{g.cm}cm</span>：{g.text}
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="mt-4 text-xs leading-relaxed text-gray-500">
            出典：国土交通省「地下空間における浸水対策ガイドライン」資料、福井市・西尾市のハザードマップ。数値は目安で、流れの速さや足元の状況で大きく変わります。
          </figcaption>
        </figure>

        <TableWrap caption="想定浸水深別・対策の早見表">
          <thead>
            <tr>
              <th className={TH}>想定浸水深</th>
              <th className={TH}>考えるべきこと</th>
              <th className={TH}>対策の主役</th>
              <th className={TH}>該当グッズ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>〜10cm</td>
              <td className={TD}>低い入口・排水口からの浸入、下水の逆流</td>
              <td className={TD}>水のう・吸水土のう</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.mizunou5} />
                  <PLink p={P.mizupita} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>10〜30cm</td>
              <td className={TD}>車の移動は30cmに達する前に。地下は退避を開始</td>
              <td className={TD}>置くだけ止水板の連結＋土のう</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.iris_l} />
                  <PLink p={P.plabarrier} />
                  <PLink p={P.sonae3} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>30〜50cm</td>
              <td className={TD}>床上浸水レベル。徒歩での避難は早めに</td>
              <td className={TD}>堰き止め高50cm級の止水板＋土のう2〜3段</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.bw52} />
                  <PLink p={P.donou10x60} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>50cm超</td>
              <td className={TD}>1階の設備・在庫は水没する前提で計画</td>
              <td className={TD}>止水は時間稼ぎ。上階退避・重要品の移動・電源の確保</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.eiko2013} />
                  <PLink p={P.tl2000} />
                </div>
              </td>
            </tr>
          </tbody>
        </TableWrap>

        <CautionBox title="地下・半地下がある事業所へ">
          <p>
            国土交通省は、地下空間の廊下や居室を避難するときの行動限界水深を<Mk>30cm</Mk>
            としています。歩きにくさに加え、水圧でドアが開かなくなる水深から決められた数字です。地下の電気室や倉庫は「入口に土のうを積む前に、人を上げる」順番を社内ルールに書いておいてください。
          </p>
        </CautionBox>

        {/* ================= 03 ================= */}
        <H2 id="sec3" num="03">
          止水板の選び方：工事不要タイプは「止水高・入口幅・地面」で決まる
        </H2>
        <p>
          止水板には、壁や床に支柱・レールを取り付ける固定式と、置くだけ・組むだけで使える工事不要タイプがあります。東京都都市整備局の止水板設置事例集（2026年7月）を見ると、施工費込みで店舗出入口（幅1,400×高さ550mm）が約18万円、工場出入口のシャッター内側（幅11,000×高さ550mm）が約120万円。性能は高いものの、工事と予算の確保が前提です。
        </p>
        <p>
          台風シーズンの途中から備えるなら、倉庫に保管しておき前日に並べられる工事不要タイプが現実的な選択肢。ここではその比較に絞ります。
        </p>

        <H3>止水性能の物差し「JISの漏水量等級」</H3>
        <TableWrap caption="止水板の漏水量等級（JIS規格による評価）">
          <thead>
            <tr>
              <th className={TH}>等級</th>
              <th className={TH}>1時間・1㎡あたりの漏水量</th>
              <th className={TH}>使用場所の目安</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>Ws-6相当</td>
              <td className={TD}>1L以下</td>
              <td className={TD}>電気室・ポンプ室など、できる限り浸水を防ぎたい場所</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>Ws-3相当</td>
              <td className={TD}>10〜20L</td>
              <td className={TD}>機械室・一般家屋など。最も一般的な性能</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>Ws-1相当</td>
              <td className={TD}>50〜200L</td>
              <td className={TD}>倉庫・駐車場など多少の浸水を許容できる場所。一般的な土のうよりは高性能</td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">出典：東京都都市整備局「止水板設置事例集」（2026年7月）。Ws-2・4・5相当は省略。</p>
        <p>
          置くだけタイプの多くは、この等級を表示していません。「完全に止める」のではなく、
          <Mk>流入量を減らし、ゴムブラシや汲み出しで追いつける量に抑える道具</Mk>
          と位置づけて選ぶと、期待外れになりません。
        </p>

        <H3>選ぶときの3つのチェック</H3>
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              t: "① 止水高",
              d: "想定浸水深に対して余裕がある高さか。今回の比較ではBW52の堰き止め高50cmが最も高い公表値。",
            },
            {
              t: "② 入口幅と連結",
              d: "入口幅を1枚あたりの有効幅で割り、端数は切り上げ。壁際や角は専用パーツで処理する。",
            },
            {
              t: "③ 地面",
              d: "凹凸があると止水効果が下がる可能性をメーカーも明記。グレーチングや深い目地の上は土のうで補う。",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-bold text-gray-900">{c.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>

        <H3>工事不要の止水板 9製品の比較</H3>
        <TableWrap caption="工事不要の止水板・関連パーツ比較（数値はメーカー・販売店の公表値）">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>タイプ</th>
              <th className={TH}>止水高・サイズ</th>
              <th className={TH}>重さ</th>
              <th className={TH}>向く場所</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.bw52} /></td>
              <td className={TD}>箱型（水圧で固定）</td>
              <td className={TD}>堰き止め高50cm／980×680×530mm</td>
              <td className={TD}>6.2kg/個</td>
              <td className={TD}>工場・倉庫の大開口、シャッター前</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.bw52_side} /></td>
              <td className={TD}>BW52の端部パーツ</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>—</td>
              <td className={TD}>BW52と壁の取り合い</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.iris_l} /></td>
              <td className={TD}>置くだけ・連結式</td>
              <td className={TD}>本体 705×680×615mm</td>
              <td className={TD}>4.4kg</td>
              <td className={TD}>店舗・事務所の入口</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.iris_u} /></td>
              <td className={TD}>連結用カーブ</td>
              <td className={TD}>本体 620×680×615mm</td>
              <td className={TD}>3.2kg</td>
              <td className={TD}>入隅・L字の囲い</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.iris_c} /></td>
              <td className={TD}>連結用カーブ</td>
              <td className={TD}>本体 760×680×615mm</td>
              <td className={TD}>3.2kg</td>
              <td className={TD}>出隅・建物の角</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.plabarrier} /></td>
              <td className={TD}>パネル連結式</td>
              <td className={TD}>1.6m分セット</td>
              <td className={TD}>1枚約4kg</td>
              <td className={TD}>自動ドア前・通用口</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sonae3} /></td>
              <td className={TD}>折り畳みL型</td>
              <td className={TD}>高さ約50cm（コンパクト版は25cm）</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>初期の軽度な浸水、水の誘導</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sonae_corner} /></td>
              <td className={TD}>角用パーツ</td>
              <td className={TD}>出隅120°・入隅135°まで</td>
              <td className={TD}>—</td>
              <td className={TD}>備えあれ板の角処理</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.mizuyojin} /></td>
              <td className={TD}>アルミ・脱着式</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>商品ページで確認</td>
              <td className={TD}>位置が決まった入口</td>
            </tr>
          </tbody>
        </TableWrap>

        <FeaturedCard p={P.bw52} lead="大開口・シャッター前の第一候補" />

        <div className="my-6 rounded-xl bg-gray-900 p-5 text-white">
          <p className="text-sm font-bold">計算例：幅3.6mのシャッター前をBW52でふさぐ</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-100">
            <li>・必要数：3.6m ÷ 0.98m（1個あたりのカバー幅）＝ 3.67 → 4個</li>
            <li>・壁際の処理：サイドアタッチメントを追加</li>
            <li>・破損に備えた予備1個を含めて、本体は計5個</li>
            <li>・設置時間：2名で10mを約2分（メーカー公表）の目安なら、4m弱は1分かからない計算</li>
          </ul>
        </div>

        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.iris_l} />
          <ProductCard p={P.plabarrier} />
          <ProductCard p={P.sonae3} />
        </div>

        <p className="mt-8 text-sm font-bold text-gray-900">組み合わせて使うパーツ・別タイプ</p>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.bw52_side} />
          <MiniRow p={P.iris_u} />
          <MiniRow p={P.iris_c} />
          <MiniRow p={P.sonae_corner} />
          <MiniRow p={P.mizuyojin} />
        </div>

        <CautionBox title="置くだけタイプに共通する注意">
          <p>
            備えあれ板の販売ページには「津波・高潮発生時には設置しない」「風が強いときは重しやロープで建物に固定する」と明記されています。置くだけタイプはどれも、風雨が強まる前に設置を終えておくのが原則です。
          </p>
        </CautionBox>

        <SubCta href={CTA.shisuiban.href} label={CTA.shisuiban.label} note="GC-selectで止水板をまとめて比較（サイズ違い・別メーカーも確認できます）" />

        {/* ================= 04 ================= */}
        <H2 id="sec4" num="04">
          土のう・吸水土のうの必要数を計算する
        </H2>
        <p>
          止水板のすき間、勝手口、排水口まわりは土のうの出番です。京都大学防災研究所の実験では、高さ300mmまで土のうを積む作業に1人で約6分半、2人で約3分半かかりました。単位高さあたりでは、樹脂製止水板の約11倍の時間。土のうは<Mk>前日までに作り、積む位置の近くに置いておく</Mk>
          道具だと考えてください。
        </p>

        <H3>計算例：幅2.7mの通用口を高さ約30cm（3段）でふさぐ</H3>
        <div className="my-6 overflow-hidden rounded-xl border border-gray-300">
          <div className="bg-gray-100 px-5 py-3 text-sm text-gray-700">
            前提：詰めた土のう1袋を長さ40cm・高さ10cmとして計算（同実験の土のうは400×300×100mm・18.0kg）
          </div>
          <dl className="divide-y divide-gray-200 bg-white text-sm">
            {[
              ["1段目", "2.7m ÷ 0.4m ＝ 6.75 → 7袋"],
              ["2段目・3段目", "6袋・5袋（上に行くほど1袋ずつ減らすピラミッド積み）"],
              ["合計", "18袋 ＋ 予備2割 → 約22袋"],
              ["重さ", "18kg × 22袋 ＝ 約400kg。2人で運ぶなら1人あたり約200kg分の往復"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
                <dt className="w-28 shrink-0 font-bold text-gray-900">{k}</dt>
                <dd className="text-gray-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p>
          600枚入りの土のう袋なら、この規模の入口で約27か所分。詰める土や砂の調達と保管場所も、袋と同時に決めておきます。自治体が土のうステーションを設けている地域もあるので、所在地の役所のページを一度確認しておくと安心です。
        </p>

        <H3>普通の土のう・吸水土のう・大型土のうの違い</H3>
        <TableWrap caption="土のう3タイプの比較">
          <thead>
            <tr>
              <th className={TH}>項目</th>
              <th className={TH}>普通の土のう袋</th>
              <th className={TH}>吸水土のう</th>
              <th className={TH}>大型土のう</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>準備</td>
              <td className={TD}>土・砂とスコップが必要。1袋2〜3分</td>
              <td className={TD}>水に約3分浸けると膨らむ</td>
              <td className={TD}>重機・クレーンで吊って据える</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>未使用時</td>
              <td className={TD}>袋は軽いが、作り置きは重い</td>
              <td className={TD}>薄く軽い（1枚約400gの製品例）</td>
              <td className={TD}>袋は軽いが、充填後はトン単位</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>向く場所</td>
              <td className={TD}>入口・勝手口・止水板のすき間</td>
              <td className={TD}>すぐ使いたい屋内・排水口まわり</td>
              <td className={TD}>資材置場・敷地境界の仮設</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>注意点</td>
              <td className={TD}>土の確保と保管場所</td>
              <td className={TD}>「真水用」「海水不可」の製品がある</td>
              <td className={TD}>人力では動かせない</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>該当商品</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.donou20x30} />
                  <PLink p={P.donou10x60} />
                  <PLink p={P.ks3} />
                </div>
              </td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.mizupita} />
                  <PLink p={P.mizunou5} />
                  <PLink p={P.tsuchino} />
                </div>
              </td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.jumbo} />
                  <PLink p={P.twotone} />
                </div>
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <p className="text-xs text-gray-500">
          準備時間・未使用時の重さは、日本建設機械施工協会『建設機械施工』2021年9月号の吸水性土のうの解説記事による。
        </p>

        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <ProductCard p={P.donou20x30} />
          <ProductCard p={P.mizupita} />
          <ProductCard p={P.tsuchino} />
          <ProductCard p={P.donotaro} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.donou10x60} />
          <MiniRow p={P.ks3} />
          <MiniRow p={P.mizunou5} />
          <MiniRow p={P.jumbo} />
          <MiniRow p={P.twotone} />
        </div>

        <CautionBox title="大型土のうは「重機がある現場」向け">
          <p>
            ジャンボ土のうやツートンバッグは、詰めると1袋がトン単位になります。人の手では動かせないため、重機を持つ建設会社や資材置場向けの資材です。事務所や店舗の入口には、普通の土のうか吸水土のうを選んでください。
          </p>
        </CautionBox>

        <MainCta
          eyebrow="GC-select｜台風・水害対策"
          title="止水板と土のうの組み合わせを、入口ごとに決める"
          body="計算した袋数と止水板の枚数を控えたら、特集ページで在庫と納期を確認しておきましょう。台風の接近が報じられてからでは、入荷待ちになることもあります。"
        />

        {/* ================= 05 ================= */}
        <H2 id="sec5" num="05">
          警戒レベル別・社内タイムライン（2026年5月からの新しい防災気象情報）
        </H2>
        <p>
          気象庁は2026年5月29日から、河川氾濫・大雨・土砂災害・高潮に関する情報を、5段階の警戒レベルに合わせた名称へ改めました。これまでの大雨警報は「レベル3大雨警報」になり、レベル4相当として「危険警報」が新設されています。
        </p>
        <p>
          社内マニュアルの行動基準も、この新しい名称で書き直しておくのが近道。誰が読んでも同じタイミングで動けるようになります。
        </p>

        <TableWrap caption="警戒レベル別・社内でやること（グッズは各リンクから商品ページへ）">
          <thead>
            <tr>
              <th className={TH}>タイミング</th>
              <th className={TH}>気象情報の例</th>
              <th className={TH}>社内でやること</th>
              <th className={TH}>使うグッズ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>2〜3日前</td>
              <td className={TD}>台風情報・早期注意情報</td>
              <td className={TD}>担当者と連絡網の確認。止水板・土のうの数量点検、蓄電池の満充電</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.ac70p} />
                  <PLink p={P.donou20x30} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>前日〜半日前</td>
              <td className={TD}>レベル2 大雨注意報など</td>
              <td className={TD}>屋外資材の固定とシート養生、排水溝の清掃、土のうを入口の近くへ</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.bs_roll1800} />
                  <PLink p={P.donotaro} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>数時間前</td>
              <td className={TD}>レベル3 大雨警報など（高齢者等避難の目安）</td>
              <td className={TD}>止水板の設置を完了。1階の書類・PC・在庫を上げ、帰宅の判断を出す</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.bw52} />
                  <PLink p={P.eiko2017} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>発表時</td>
              <td className={TD}>レベル4 大雨危険警報など（避難指示の目安）</td>
              <td className={TD}>全員避難。建物の上層階への退避を含む。設置作業はもう行わない</td>
              <td className={TD}>
                <div className="flex flex-col gap-1">
                  <PLink p={P.ruck25} />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>—</td>
              <td className={TD}>レベル5 特別警報（緊急安全確保の目安）</td>
              <td className={TD}>災害が発生または切迫。命を守る行動だけに集中する</td>
              <td className={TD}>—</td>
            </tr>
          </tbody>
        </TableWrap>
        <p>
          気象庁は、レベル3やレベル4の情報が出たらキキクル（危険度分布）や河川の水位情報で状況を確かめ、早めに避難するよう呼びかけています。避難先は指定避難場所に限らず、川や崖から離れた近くの頑丈な建物の上層階も選択肢の一つ。
        </p>

        <H3>台風前日の30分チェックリスト</H3>
        <ul className="my-6 grid gap-2 sm:grid-cols-2">
          {[
            "連絡網と、出社・帰宅判断の担当者を確認した",
            "止水板・土のうの数と置き場所を入口ごとに確認した",
            "排水溝・グレーチング・雨どいのごみを取り除いた",
            "屋外の資材・看板・パレットを固定するか屋内に入れた",
            "機械や在庫をシートで養生し、床置きの段ボールを棚へ上げた",
            "蓄電池・モバイルバッテリー・無線機を満充電にした",
            "重要書類・通帳・印鑑・バックアップ媒体を1つのバッグにまとめた",
            "社用車を浸水想定のない場所へ移した",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 text-sm leading-relaxed">
              <span aria-hidden="true" className="mt-0.5 inline-block h-5 w-5 shrink-0 rounded border-2 border-gray-900" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <H3>養生と飛散防止に使うシート</H3>
        <p>
          前日の作業でいちばん量を使うのがシート類です。ロールは必要な長さで切り出せ、大判は屋根や大型資材の被覆に向きます。厚みの規格は#3000のほうが#2000より厚手。屋外で数日以上かける場所には#3000を選ぶと破れにくくなります。
        </p>
        <TableWrap caption="シート類の使い分け">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>規格</th>
              <th className={TH}>使いどころ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.bs_roll1800} /></td>
              <td className={TD}>1800mm×100m・#3000</td>
              <td className={TD}>機械・資材の養生をまとめて。必要な長さで切る</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.bs_roll900} /></td>
              <td className={TD}>900mm×100m・#3000</td>
              <td className={TD}>扉の下・巾木まわりなど細長い部分</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.bs10_3000} /></td>
              <td className={TD}>10m×10m・#3000・2枚</td>
              <td className={TD}>屋根・大型資材の被覆</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.bs10_2000} /></td>
              <td className={TD}>10m×10m・#2000・2枚入り</td>
              <td className={TD}>短期間の養生・仮置き資材のカバー</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.sunwrap} /></td>
              <td className={TD}>SSサイズ</td>
              <td className={TD}>用途と寸法は商品ページで確認</td>
            </tr>
          </tbody>
        </TableWrap>
        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4">
          <ProductCard p={P.bs_roll1800} />
          <ProductCard p={P.bs10_3000} />
        </div>

        {/* ================= 06 ================= */}
        <H2 id="sec6" num="06">
          停電対策：ポータブル蓄電池は「何を何時間」で容量を決める
        </H2>
        <p>
          浸水しなくても、台風による停電は起こります。蓄電池は機種名から選ぶのではなく、止めたくない機器の消費電力から逆算するのが確実な方法です。
        </p>
        <div className="my-6 rounded-xl border-2 border-gray-900 bg-white p-5 text-center">
          <p className="text-xs font-bold tracking-widest text-gray-500">必要な容量の出し方</p>
          <p className="mt-2 text-lg font-bold text-gray-900 sm:text-xl">
            必要容量（Wh）≒ 消費電力（W）× 使う時間（h）÷ 0.8
          </p>
          <p className="mt-2 text-xs text-gray-600">0.8はインバーターなどの変換ロスを見込んだ安全側の係数（編集部の目安）</p>
        </div>

        <TableWrap caption="計算例：事務所の「最低限の業務継続」をまかなう場合">
          <thead>
            <tr>
              <th className={TH}>機器</th>
              <th className={TH}>消費電力 × 台数 × 時間</th>
              <th className={TH}>電力量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>ノートPC</td>
              <td className={TD}>50W × 3台 × 8時間</td>
              <td className={TD}>1,200Wh</td>
            </tr>
            <tr>
              <td className={TD}>Wi-Fiルーター・回線終端装置</td>
              <td className={TD}>15W × 12時間</td>
              <td className={TD}>180Wh</td>
            </tr>
            <tr>
              <td className={TD}>LEDスタンド照明</td>
              <td className={TD}>10W × 2台 × 6時間</td>
              <td className={TD}>120Wh</td>
            </tr>
            <tr>
              <td className={TD}>スマートフォンの充電</td>
              <td className={TD}>1台15Wh × 10台</td>
              <td className={TD}>150Wh</td>
            </tr>
            <tr>
              <td className={`${TD} whitespace-nowrap font-bold`}>合計</td>
              <td className={TD}>1,650Wh ÷ 0.8</td>
              <td className={`${TD} whitespace-nowrap font-bold`}>約2,060Wh</td>
            </tr>
          </tbody>
        </TableWrap>
        <p>
          必要量は約2,060Wh。容量2,304WhのAC200PLなら1台で収まり、拡張バッテリーB210P（2,150Wh）を足せば翌日分まで見込めます。電気ポットや電子レンジのように熱を出す家電は消費電力が一桁違うため、使うなら別枠で計算しておいてください。
        </p>

        <H3>蓄電池8機種の容量比較</H3>
        <TableWrap caption="ポータブル蓄電池・拡張バッテリー（容量はメーカー・販売店の公表値）">
          <thead>
            <tr>
              <th className={TH}>製品</th>
              <th className={TH}>容量</th>
              <th className={TH}>特徴</th>
              <th className={TH}>向く使い方</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}><PLink p={P.ac2p} /></td>
              <td className={TD}>230.4Wh</td>
              <td className={TD}>小型・定格300W</td>
              <td className={TD}>スマホ・無線機・ライトの充電</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.ac70p} /></td>
              <td className={TD}>864Wh</td>
              <td className={TD}>定格1,000W</td>
              <td className={TD}>受付・小規模事務所のPC数台</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.ac240p} /></td>
              <td className={TD}>1,843Wh</td>
              <td className={TD}>IP65の防塵防水・約33kg</td>
              <td className={TD}>屋外や湿気の多い現場での据え置き</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.ac200pl} /></td>
              <td className={TD}>2,304Wh</td>
              <td className={TD}>拡張バッテリーで増設可</td>
              <td className={TD}>事務所の業務継続の中核</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.b80p} /></td>
              <td className={TD}>806Wh</td>
              <td className={TD}>拡張用（対応本体は要確認）</td>
              <td className={TD}>既存機の容量の上乗せ</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.b210p} /></td>
              <td className={TD}>2,150Wh</td>
              <td className={TD}>AC240P・AC200PLの増設用</td>
              <td className={TD}>長時間の停電への備え</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.tl1000} /></td>
              <td className={TD}>1kWh級</td>
              <td className={TD}>キャリー型（TL-1000Nは1,036Wh・9.5kg）</td>
              <td className={TD}>拠点間を持ち運ぶ予備電源</td>
            </tr>
            <tr>
              <td className={TD}><PLink p={P.tl2000} /></td>
              <td className={TD}>2kWh級</td>
              <td className={TD}>キャリー型（TL-2000Nは2,072Wh・16kg）</td>
              <td className={TD}>避難先・別フロアへの移動を前提にした電源</td>
            </tr>
          </tbody>
        </TableWrap>

        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.ac200pl} />
          <ProductCard p={P.ac240p} />
          <ProductCard p={P.tl2000} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.b210p} />
          <MiniRow p={P.ac70p} />
          <MiniRow p={P.ac2p} />
          <MiniRow p={P.b80p} />
          <MiniRow p={P.tl1000} />
        </div>

        <CautionBox title="「防水」の蓄電池でも水没はNG">
          <p>
            IP65は「粉じんが入らない」「あらゆる方向からの噴流水に耐える」という保護等級で、水に沈めても使えるという意味ではありません。蓄電池は浸水しない上階に保管し、ぬれた床の上や浸水した室内では使わないこと。感電の危険があります。
          </p>
        </CautionBox>

        <SisterLink
          href={`${HEAT}/heatstroke-power-continuity-plan`}
          title="熱中症対策の電源確保とは？（熱中症対策ナビ）"
          note="停電時に熱中症対策の電源をどう確保するかを、熱中症の視点でまとめています"
        />

        {/* ================= 07 ================= */}
        <H2 id="sec7" num="07">
          従業員と重要書類を守る：防災セット・持ち出しバッグ・トイレ
        </H2>
        <p>
          豪雨で道路が冠水すると、従業員が帰れなくなる事態も起こります。東京都の帰宅困難者対策条例は、事業者に従業員3日分の水・食料などの備蓄を求めています（努力義務）。都外の事業所でも、<Mk>「人数×3日」</Mk>はそのまま使える基準です。
        </p>
        <p>
          事業所全体の備えには、人数単位でまとまった防災セットが便利。個人の持ち出し用は、浸水時に中身がぬれない防水タイプを選びます。重要書類は散らばった状態だと持ち出しに時間がかかるため、耐火・防水バッグに平時からまとめておくのが要点です。
        </p>

        <div className="my-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          <ProductCard p={P.share30} />
          <ProductCard p={P.ruck30} />
          <ProductCard p={P.eiko2017} />
        </div>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.share10l} />
          <MiniRow p={P.share10m} />
          <MiniRow p={P.ruck25} />
          <MiniRow p={P.ruck15} />
          <MiniRow p={P.drybag17} />
          <MiniRow p={P.eiko2013} />
        </div>
        <SubCta href={CTA.bousai.href} label={CTA.bousai.label} note="人数・用途別の防災セットをGC-selectでまとめて比較" />

        <H3>浸水時はトイレが使えなくなる</H3>
        <p>
          豪雨のときは下水管が満水になり、トイレや風呂場、洗濯機の排水口から下水が逆流することがあります（北九州市上下水道局）。応急処置は、ビニール袋を二重にして水を半分ほど入れた「水のう」を、便器や排水口の上に置く方法（熊本県八代市の案内）。ただし便器をふさいでいる間、そのトイレは使えません。
        </p>
        <p>
          そこで必要になるのが簡易トイレです。必要数は<Mk>1人1日5回前後×人数×日数</Mk>
          で見積もるのが一般的で、30人が3日とどまるなら約450回分になります。
        </p>
        <SubCta href={CTA.toilet.href} label={CTA.toilet.label} note="断水・下水の逆流に備えて、人数分をGC-selectで確認" />
        <SisterLink
          href={`${HEAT}/disaster-toilet-stockpile-selection-guide`}
          title="災害用トイレの選び方と備蓄目安（熱中症対策ナビ）"
          note="災害用トイレの選び方と、備蓄の目安をまとめています"
        />
        <p className="text-sm">
          備蓄品の置き場所に困っている場合は、作業用品ナビの
          <Link href="/articles/saigai-bichiku-rack-trusco" className="font-semibold underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900">
            災害備蓄ラックの選び方
          </Link>
          も参考にしてください。
        </p>

        {/* ================= 08 ================= */}
        <H2 id="sec8" num="08">
          水が引いた後の作業装備と、水上用品の使いどころ
        </H2>
        <p>
          浸水後の片付けは、泥・ガラス片・釘・汚水が相手の重作業です。足元と体を守る装備から順にそろえます。
        </p>

        <H3>足元：先芯入り長靴と防災ウェーダー</H3>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <VariantCard
            title="先芯入り長靴 ワイルドウルフ（ブラック）"
            lead="泥出し・片付け用"
            note="つま先を落下物から守る先芯入りの長靴。浸水後の泥出しや家財の運び出しに。釘の踏み抜き対策が必要なら、靴底の仕様も商品ページで確認してください。"
            items={[
              { label: "M", p: P.boots_m },
              { label: "L", p: P.boots_l },
              { label: "LL", p: P.boots_ll },
              { label: "XL", p: P.boots_xl },
            ]}
          />
          <VariantCard
            title="ハンシン BW-72 防災ウェーダー"
            lead="汚水が残る場所の復旧作業用"
            note="汚水や泥が残る床下・敷地での復旧作業向け。丈や素材の詳細は商品ページで確認を。"
            items={[
              { label: "25.0cm", p: P.wader25 },
              { label: "26.0cm", p: P.wader26 },
            ]}
          />
        </div>

        <CautionBox title="長靴・ウェーダーは「片付け用」。避難には使わない">
          <p>
            浸水した道を歩いて避難するとき、長靴は厳禁とされています。中に水が入ると重くなり、動けなくなるためです。避難にはひもで締められる運動靴を（札幌市の防災ガイド）。ウェーダーも同じ理由で、流れのある水や腰より深い水には入らないでください。
          </p>
        </CautionBox>

        <H3>床の泥水を寄せるゴムブラシ</H3>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <VariantCard
            title="ゴムブラシ（90／120）"
            lead="排水・清掃用"
            note="床に残った泥水を排水口や屋外へ寄せる清掃用のゴムブラシ。2サイズあるので、作業場所の広さに合わせて選べる。"
            items={[
              { label: "ゴムブラシ90", p: P.brush90 },
              { label: "ゴムブラシ120", p: P.brush120 },
            ]}
          />
          <div className="flex flex-col justify-center rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-700">
            <p className="font-bold text-gray-900">片付け作業の熱中症にも注意</p>
            <p className="mt-2">
              9〜10月でも、湿度の高い日の泥出しは体への負担が大きい作業です。休憩と水分補給の時間をあらかじめ決めてから始めましょう。
            </p>
            <a
              href={`${HEAT}/heatstroke-first-response`}
              target="_blank"
              rel="noopener"
              className="mt-3 font-semibold text-gray-900 underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900"
            >
              熱中症で最初にすること（熱中症対策ナビ）→
            </a>
          </div>
        </div>

        <H3>水辺の作業には救命胴衣を</H3>
        <p>
          河川や水路の近くで排水ポンプを据える、土のうを運ぶといった水防作業では、救命胴衣を着けて臨みます。自動膨張式は落水を検知して膨らむタイプで、作業の邪魔になりにくいのが利点です。
        </p>
        <FeaturedCard p={P.nqv} lead="水防作業・河川近くの作業用" />
        <MiniRow p={P.ns_bombe} />
        <PointBox title="交換ボンベは型番で選ぶ">
          <p>
            膨張式救命胴衣のボンベは、本体の型番ごとに適合品が決まっています。NS-5000／7000用の替ボンベは、NQV-Atn型には使えません（NQV-Atn型の交換用は別型番と販売店に記載）。使用後や点検時期が来たら、本体の取扱説明書で適合型番を確認してから注文してください。
          </p>
        </PointBox>

        <H3>ゴムボート・オール・船外機用カートについて</H3>
        <p>
          3人用のゴムボートやアルミオールは、本来は水上レジャー用品です。周囲が冠水して孤立しやすい立地では、物資を運ぶ補助として備える事業所もあります。ただし、流れのある浸水域や夜間は使わないこと。乗る人全員が救命胴衣を着けること。人の救助は119番と消防の判断に任せること。この3点を守れない運用なら、備えないほうが安全です。
        </p>
        <div className="my-3 grid gap-3 sm:grid-cols-2">
          <MiniRow p={P.boat3} />
          <MiniRow p={P.boat3rod} />
          <MiniRow p={P.oar} />
          <MiniRow p={P.cart} />
        </div>

        {/* ================= 09 ================= */}
        <H2 id="sec9" num="09">
          事業所タイプ別・最初にそろえるセット例と補助制度
        </H2>
        <p>
          ここまでの内容を、規模別のスタートセットにまとめました。数量は第4章までの計算で、入口ごとに調整してください。
        </p>
        <div className="my-6 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "A. 小規模店舗・事務所",
              s: "入口1〜2か所／10名前後",
              items: [P.iris_l, P.iris_u, P.mizunou5, P.share10m, P.ac70p, P.eiko2013],
            },
            {
              t: "B. 工場・倉庫",
              s: "シャッター・大開口／30名前後",
              items: [P.bw52, P.bw52_side, P.donou20x30, P.share30, P.ac200pl, P.b210p],
            },
            {
              t: "C. 建設会社・資材置場",
              s: "現場事務所・敷地境界",
              items: [P.twotone, P.ks3, P.bs10_3000, P.ac240p, P.wader26, P.nqv],
            },
          ].map((plan) => (
            <div key={plan.t} className="flex flex-col rounded-xl border border-gray-200 bg-white">
              <div className="rounded-t-xl bg-gray-900 px-4 py-3 text-white">
                <p className="font-bold">{plan.t}</p>
                <p className="text-xs text-gray-300">{plan.s}</p>
              </div>
              <ul className="flex flex-1 flex-col gap-2 p-4 text-sm">
                {plan.items.map((p) => (
                  <li key={p.href}>
                    <PLink p={p} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <H3>止水板の助成と、防災設備の税制</H3>
        <p>
          止水板の購入費や設置費を補助する自治体があります。メーカーの案内では、西宮市・吹田市・大田区・古河市・大分市などで制度が確認されています（2026年6月1日時点）。多くは購入・設置前の申請が条件なので、発注の前に所在地の自治体へ確認を。
        </p>
        <p>
          中小企業なら「中小企業防災・減災投資促進税制」も候補になります。事業継続力強化計画の認定を受け、認定から1年以内に計画に記載した防災・減災設備を取得すると、取得価額の16%を特別償却できる制度。認定の対象期間は2027年3月31日までです（中小企業庁の実施要領）。対象設備と金額の要件は細かく決まっているので、顧問税理士と一緒に確認してください。
        </p>

        <MainCta
          eyebrow="GC-select｜台風・水害対策"
          title="セット例をベースに、自社の入口と人数で組み直す"
          body="特集ページでは止水板・土のう・蓄電池・防災セットを横断して探せます。台風シーズンの終盤でも、ゲリラ豪雨と線状降水帯への備えは通年の課題です。"
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
          まとめ：台風前日に慌てないための4ステップ
        </H2>
        <p>
          企業の水害対策は、入口を止める道具だけでは完結しません。浸水を遅らせている間に人と重要品を上げ、停電やトイレの不便をしのぎ、水が引いたら片付けに移る。この流れのどこかが欠けると、そこで事業が止まります。
        </p>
        <ol className="my-6 space-y-3">
          {[
            "ハザードマップで想定浸水深を調べ、入口の幅と地面を測る",
            "止水板は「入口幅÷有効幅」、土のうは「段ごとの袋数＋予備2割」で数量を出す",
            "「レベル3警報で止水完了と重要品の移動、レベル4危険警報で全員避難」を社内ルールにする",
            "停電・トイレ・従業員3日分の備えと、片付けの装備までそろえる",
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
          eyebrow="GC-select｜台風・水害対策"
          title="必要な数が決まったら、在庫があるうちに確保を"
          body="入口ごとの止水板の枚数、土のうの袋数、人数分の防災セット。メモを片手に特集ページで在庫と納期を確認してください。"
        />

        <section aria-label="商品一覧へのリンク" className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
          <p className="mb-4 text-base font-bold text-gray-900">目的別に商品一覧を開く（GC-select）</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[CTA.taifu, CTA.shisuiban, CTA.bousai, CTA.toilet].map((c) => (
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

        {/* 免責 */}
        <div className="my-8 rounded-xl border border-gray-200 bg-white p-5 text-xs leading-relaxed text-gray-600">
          <p className="font-bold text-gray-800">ご利用にあたって</p>
          <p className="mt-2">
            本記事の数値はメーカー・販売店・公的機関の公表情報（2026年10月時点）にもとづく目安です。価格・在庫・仕様の最新情報は各商品ページで確認してください。止水板や土のうは浸水を完全に防ぐものではありません。避難の判断は、自治体の避難情報と気象庁の防災気象情報に従ってください。けが人が出た場合や命に危険がある場合は、ためらわず119番へ。
          </p>
        </div>

        {/* 参考資料 */}
        <section aria-label="参考にした資料" className="my-8 rounded-xl border border-gray-200 bg-white p-5">
          <p className="mb-3 text-sm font-bold text-gray-900">参考にした公的資料・メーカー情報</p>
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

        {/* 関連記事 */}
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
