import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "shujinki-bojin-mask-heiyou";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/dust-collector-respirator-combined-control-hero.jpg`,
  fourLayer: `${ARTICLE_IMG}/four-layer-industrial-dust-control.jpg`,
  hood: `${ARTICLE_IMG}/dust-collector-hood-placement-comparison.jpg`,
  maskCompare: `${ARTICLE_IMG}/disposable-reusable-papr-respirator-comparison.jpg`,
  paprParts: `${ARTICLE_IMG}/papr-mask-filter-battery-charger-components.jpg`,
  dustByWork: `${ARTICLE_IMG}/industrial-dust-collector-application-comparison.jpg`,
  storage: `${ARTICLE_IMG}/respirator-cleaning-storage-management.jpg`,
};

export const metadata: Metadata = {
  title: "集塵機があれば防じんマスクはいらない？工場の粉じん対策と併用方法｜作業用品ナビ",
  description:
    "集塵機があれば防じんマスクは不要かを冒頭で即答。集塵機・局所排気・空気清浄機の違い、集塵機で取り切れない理由、DS2・RL3・PAPRの選び方、P-PAPRとG-PAPR、作業別集塵機、フィット・保管までを実務フローで解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "集塵機があれば防じんマスクはいらない？工場の粉じん対策と併用方法",
    description:
      "集塵機があれば防じんマスクは不要かを冒頭で即答。集塵機・局所排気・空気清浄機の違い、集塵機で取り切れない理由、DS2・RL3・PAPRの選び方、P-PAPRとG-PAPR、作業別集塵機、フィット・保管までを実務フローで解説します。",
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

// ---- 商品マスタ（品名・国家検定・現行仕様は一次情報で要確認。価格は固定表示しない）----
type P = {
  code: string; name: string; short: string; img: string; url: string;
  badge: string; use: string; solves: string; check: string; sep?: string;
};

// 使い捨て式 DS2
const P_8205_10: P = { code: "8205-10", name: "3M 使い捨て式防じんマスク 8205 DS2（10枚入）", short: "3M 8205 DS2（10枚）", img: "ta004102-8205ds210.jpg", url: R("ta004102-8205ds210/"), badge: "使い捨て式 DS2（区分2・固体95%）", use: "短時間・断続的な固体粉じん作業", solves: "少人数・スポット作業で手軽に使いたいとき", check: "国家検定合格・作業と粉じん種別への適合・密着（要確認）" };
const P_8205_20: P = { code: "8205-20", name: "3M 使い捨て式防じんマスク 8205 DS2（20枚入）", short: "3M 8205 DS2（20枚）", img: "ta004101-8205ds2.jpg", url: R("ta004101-8205ds2/"), badge: "使い捨て式 DS2（区分2・固体95%）", use: "固体粉じん作業のまとめ買い・常備", solves: "使用量が多く在庫を確保したいとき", check: "国家検定合格・保管期限・密着（要確認）" };
const P_8805: P = { code: "8805", name: "3M 使い捨て式防じんマスク 8805 DS2（排気弁付）", short: "3M 8805 DS2（排気弁付）", img: "ta004325-8805ds2.jpg", url: R("ta004325-8805ds2/"), badge: "使い捨て式 DS2（排気弁付）", use: "熱がこもりやすい環境での固体粉じん作業", solves: "呼気の熱・湿気を逃がしたいとき", check: "排気弁は呼気を出す機構で防護性能そのものは区分で判断（要確認）" };

// 取替え式
const P_DR28: P = { code: "DR28SU2W", name: "シゲマツ 取替え式防じんマスク DR28SU2W（M）", short: "シゲマツ DR28SU2W（M）", img: "ta006600-dr28su2wm.jpg", url: R("ta006600-dr28su2wm/"), badge: "取替え式防じんマスク（M）", use: "繰り返し使う固体粉じん作業", solves: "使い捨てより経済的に運用したいとき", check: "区分（RS/RL）・適合フィルタ・サイズ（要確認）", sep: "専用フィルタ（要選定）" };
const P_RL3M: P = { code: "6000-2091-RL3-M", name: "3M 取替え式防じんマスク 6000/2091-RL3（M）", short: "3M 6000/2091-RL3（M）", img: "ta003265-60002091rl3m.jpg", url: R("ta003265-60002091rl3m/"), badge: "取替え式 RL3（区分3・固体液体99.9%）", use: "ミストを含む微細粉じん・高い捕集が要る作業", solves: "固体・液体両方に高捕集で対応したいとき", check: "国家検定合格・フィット・サイズM（要確認）", sep: "面体6000＋ろ過材2091の構成" };
const P_RL3L: P = { code: "6000-2091-RL3-L", name: "3M 取替え式防じんマスク 6000/2091-RL3（L）", short: "3M 6000/2091-RL3（L）", img: "ta003264-60002091rl3l.jpg", url: R("ta003264-60002091rl3l/"), badge: "取替え式 RL3（区分3・固体液体99.9%）", use: "ミストを含む微細粉じん・高い捕集が要る作業", solves: "大きめの顔サイズでフィットを確保したいとき", check: "国家検定合格・フィット・サイズL（要確認）", sep: "面体6000＋ろ過材2091の構成" };
const P_6500: P = { code: "6500QLM", name: "3M 取替え式防じんマスク 面体 6500QLM", short: "3M 6500QLM（面体のみ）", img: "ta003443-6500qlmcl23.jpg", url: R("ta003443-6500qlmcl23/"), badge: "面体のみ（ろ過材別売・単体使用不可）", use: "ろ過材を選んで組み合わせる取替え式の面体", solves: "作業に合わせてろ過材を選定したいとき", check: "面体単体では使用不可・区分に合うろ過材の選定が必須（要確認）", sep: "ろ過材（区分に応じて別途選定）" };

// PAPR 本体・面体
const P_SY11F: P = { code: "Sy11F", name: "シゲマツ 電動ファン付き呼吸用保護具 Sy11F（本体・半面形）", short: "シゲマツ Sy11F（P-PAPR本体）", img: "ta014855-sy11f.jpg", url: R("ta014855-sy11f/"), badge: "P-PAPR本体（半面形・呼吸連動形）", use: "呼吸負担を抑えたい各種粉じん作業", solves: "取替え式より楽に、長時間の粉じん作業をしたいとき", check: "フィルタ・吸収缶は別売（V3/OV等）／指定防護係数と作業適合（要確認）", sep: "ろ過材・吸収缶（V3/OV等）、バッテリー・充電器" };
const P_SY185: P = { code: "Sy185-H(M)", name: "シゲマツ 電動ファン付き呼吸用保護具 Sy185-H（M）", short: "シゲマツ Sy185-H（M）", img: "ta014856-sy185hm.jpg", url: R("ta014856-sy185hm/"), badge: "PAPR面体（別売構成・M）", use: "高い防護性能が求められる粉じん作業", solves: "面体形で高い指定防護係数を確保したいとき", check: "ろ過材・吸収缶・バッテリー別売／指定防護係数（要確認）", sep: "ろ過材・吸収缶、バッテリー（BA-L2H等）・充電器" };
const P_SYX099M: P = { code: "Syx099P-H-1(M)", name: "シゲマツ 電動ファン付き呼吸用保護具 Syx099P-H-1（M）", short: "シゲマツ Syx099P-H-1（M）", img: "ta014860-syx099ph1m.jpg", url: R("ta014860-syx099ph1m/"), badge: "PAPR（面体形・M）", use: "長時間・高防護が求められる粉じん作業", solves: "面体形PAPRを標準構成で導入したいとき", check: "ろ過材・吸収缶・バッテリー別売／サイズM（要確認）", sep: "ろ過材・吸収缶、バッテリー・充電器" };
const P_SYX099L: P = { code: "Syx099P-H-1(L)", name: "シゲマツ 電動ファン付き呼吸用保護具 Syx099P-H-1（L）", short: "シゲマツ Syx099P-H-1（L）", img: "ta014859-syx099ph1l.jpg", url: R("ta014859-syx099ph1l/"), badge: "PAPR（面体形・L）", use: "長時間・高防護が求められる粉じん作業", solves: "大きめサイズでフィットを確保したいとき", check: "ろ過材・吸収缶・バッテリー別売／サイズL（要確認）", sep: "ろ過材・吸収缶、バッテリー・充電器" };

// PAPR 構成品（別商品として扱う）
const P_V3OV: P = { code: "V3/OV", name: "シゲマツ PAPR用 吸収缶 V3/OV（有機ガス用・防じん機能）", short: "シゲマツ V3/OV（吸収缶）", img: "ta019590-v3ov.jpg", url: R("ta019590-v3ov/"), badge: "PAPR用 吸収缶（有機ガス用・別売）", use: "有機ガスが混在する粉じん作業（G-PAPR機能）", solves: "粉じんに加え有機ガスにも対応したいとき", check: "対応本体（Sy11F/Sy185/Syx099P）・適用ガス・破過管理（要確認）", sep: "PAPR本体・面体（別売）" };
const P_BAL2H: P = { code: "BA-L2H", name: "シゲマツ PAPR用 バッテリー BA-L2H（長時間タイプ）", short: "シゲマツ BA-L2H（バッテリー）", img: "ta005148-bal2h.jpg", url: R("ta005148-bal2h/"), badge: "PAPR用 バッテリー（別売）", use: "PAPRの稼働時間を確保する電源", solves: "シフト時間に合う稼働時間を確保したいとき", check: "適合機種（Syx099P/Sy185/Sy11F/Sy20）・稼働時間・充電時間（要確認）", sep: "充電器（CH-L2HAA等）" };
const P_CHL2HAA: P = { code: "CH-L2HAA", name: "シゲマツ PAPR用 充電器 CH-L2HAA", short: "シゲマツ CH-L2HAA（充電器）", img: "ta005992-chl2haa.jpg", url: R("ta005992-chl2haa/"), badge: "PAPR用 充電器（別売）", use: "PAPRバッテリーの充電", solves: "予備電源運用・複数台管理をしたいとき", check: "対応バッテリー型式・入力電源（要確認）", sep: "対応バッテリー（BA系）" };

// 集塵・空気清浄設備
const P_SI350: P = { code: "SI350", name: "SI 集塵機 SI350", short: "SI 集塵機 SI350", img: "ta054324-si350.jpg", url: R("ta054324-si350/?variantId=TA054324"), badge: "集塵機（発生源捕集）", use: "発生源での粉じん捕集", solves: "作業点近くで粉じんを吸引したいとき", check: "風量・静圧・フード適合・対応粉じん（要確認）" };
const P_KDCUS01: P = { code: "KDC-US01", name: "コトヒラ 粉体用小型集塵機 KDC-US01", short: "コトヒラ KDC-US01（粉体用小型）", img: "ta054097-kdcus01.jpg", url: R("ta054097-kdcus01/?variantId=TA054097"), badge: "小型集塵機（粉体投入・袋詰め向け）", use: "粉体投入・袋詰めの発生源捕集", solves: "手元・投入口の粉じんを小型機で捕りたいとき", check: "風量・フード位置・対応粉体（要確認）" };
const P_33753: P = { code: "33753", name: "3M ダストエクストラクター 33753", short: "3M 33753（ダストエクストラクター）", img: "ta053795-33753.jpg", url: R("ta053795-33753/?variantId=TA053795"), badge: "集塵機（研磨・サンディング向け）", use: "電動工具に接続する研磨・サンディング集塵", solves: "研磨・パテ粉を工具接続で吸引したいとき", check: "対応工具・ホース径・フィルタ（要確認）" };
const P_CLHB924: P = { code: "CL-HB924", name: "ダイニチ 空気清浄機 CL-HB924", short: "ダイニチ CL-HB924（空気清浄機）", img: "ta053873-clhb924wt.jpg", url: R("ta053873-clhb924wt/?variantId=TA053873"), badge: "空気清浄機（※発生源集塵機ではない）", use: "事務所・休憩室の空気環境の補助", solves: "作業区画外の浮遊粉じん・持ち込み対策の補助", check: "発生源集塵の代替にはならない・設置場所（要確認）" };
const P_DET200B: P = { code: "DET200B-380V", name: "淀川電機 集塵機 DET200B-380V（三相380V）", short: "淀川電機 DET200B（380V）", img: "ta053903-det200b380v.jpg", url: R("ta053903-det200b380v/?variantId=TA053903"), badge: "集塵機（産業機械接続・電源380V）", use: "産業機械に接続する集塵（380V電源）", solves: "設備接続で連続的に集塵したいとき", check: "★電源電圧380V（220V品と誤発注しない）・風量・接続（要確認）" };
const P_F03: P = { code: "F03-LTE-100", name: "エムジオット 集塵機 F03-LTE-100", short: "エムジオット F03-LTE-100", img: "ta053975-f03lte100.jpg", url: R("ta053975-f03lte100/?variantId=TA053975"), badge: "集塵機（産業機械接続）", use: "産業機械・設備に接続する集塵", solves: "設備側で粉じんを捕集したいとき", check: "風量・静圧・接続仕様・電源（要確認）" };
const P_DET200A: P = { code: "DET200A-220V", name: "淀川電機 集塵機 DET200A-220V（三相220V）", short: "淀川電機 DET200A（220V）", img: "ta053900-det200a220v.jpg", url: R("ta053900-det200a220v/?variantId=TA053900"), badge: "集塵機（産業機械接続・電源220V）", use: "産業機械に接続する集塵（220V電源）", solves: "設備接続で連続的に集塵したいとき", check: "★電源電圧220V（380V品と誤発注しない）・風量・接続（要確認）" };

// 保管ケース（PELICAN）
const P_IM2975: P = { code: "IM2975BK", name: "PELICAN ストームケース IM2975BK", short: "PELICAN IM2975BK", img: "ta041428-im2975bk.jpg", url: R("ta041428-im2975bk/"), badge: "保管・運搬ケース（大型）", use: "PAPR一式など大型構成の保管・運搬", solves: "本体・面体・電源をまとめて運びたいとき", check: "内寸と収納物の適合・フォーム有無（要確認）" };
const P_V525: P = { code: "V525", name: "PELICAN V525 Vault Rolling Case", short: "PELICAN V525（キャスター付）", img: "ta041972-vcv5250040blk.jpg", url: R("ta041972-vcv5250040blk/"), badge: "保管・運搬ケース（キャスター付）", use: "重い保護具一式のキャスター運搬", solves: "拠点間移動が多い保護具を運びたいとき", check: "内寸・耐荷重・フォーム（要確認）" };
const P_IM2950NF: P = { code: "IM2950NFBK", name: "PELICAN ストームケース IM2950NFBK（フォーム無）", short: "PELICAN IM2950NFBK（フォーム無）", img: "ta041427-im2950nfbk.jpg", url: R("ta041427-im2950nfbk/"), badge: "保管・運搬ケース（フォーム無）", use: "仕切りを自作する大型ケース", solves: "独自の緩衝材で構成したいとき", check: "内寸・フォーム別途手配（要確認）" };
const P_IM2950: P = { code: "IM2950BK", name: "PELICAN ストームケース IM2950BK", short: "PELICAN IM2950BK", img: "ta041426-im2950bk.jpg", url: R("ta041426-im2950bk/"), badge: "保管・運搬ケース（大型）", use: "PAPR構成のまとめ保管", solves: "清掃済み保護具を分離保管したいとき", check: "内寸と収納物の適合（要確認）" };
const P_IM2720: P = { code: "IM2720BK", name: "PELICAN ストームケース IM2720BK", short: "PELICAN IM2720BK", img: "ta041418-im2720bk.jpg", url: R("ta041418-im2720bk/"), badge: "保管・運搬ケース（中型）", use: "面体・フィルタ等の中型保管", solves: "中型の保護具を保護して運びたいとき", check: "内寸・フォーム（要確認）" };
const P_IM2700NF: P = { code: "IM2700NFBK", name: "PELICAN ストームケース IM2700NFBK（フォーム無）", short: "PELICAN IM2700NFBK（フォーム無）", img: "ta041416-im2700nfbk.jpg", url: R("ta041416-im2700nfbk/"), badge: "保管・運搬ケース（フォーム無）", use: "仕切りを自作する中型ケース", solves: "独自構成で保護具を収めたいとき", check: "内寸・フォーム別途（要確認）" };
const P_IM2700: P = { code: "IM2700BK", name: "PELICAN ストームケース IM2700BK", short: "PELICAN IM2700BK", img: "ta041415-im2700bk.jpg", url: R("ta041415-im2700bk/"), badge: "保管・運搬ケース（中型）", use: "面体・フィルタ等の中型保管", solves: "清掃済み品を保護して保管したいとき", check: "内寸と収納物の適合（要確認）" };
const P_IM2620: P = { code: "IM2620NFOD", name: "PELICAN ストームケース IM2620NFOD（フォーム無）", short: "PELICAN IM2620NFOD（フォーム無）", img: "ta041414-im2620nfod.jpg", url: R("ta041414-im2620nfod/"), badge: "保管・運搬ケース（小〜中型・フォーム無）", use: "小〜中型の保護具の保管", solves: "コンパクトに保護具を収めたいとき", check: "内寸・フォーム別途（要確認）" };

// 避難用（日常作業用ではない）
const P_EMVG15: P = { code: "EM-VG15", name: "シゲマツ 火山ガス用避難マスク EM-VG15", short: "シゲマツ EM-VG15（火山ガス避難用）", img: "ta052592-emvg15.jpg", url: R("ta052592-emvg15/"), badge: "火山ガス用避難マスク（※日常作業用ではない）", use: "火山ガスからの避難時の一時的保護", solves: "火山地域での緊急避難に備えたいとき", check: "日常の粉じん作業用に使わない・適用条件（要確認）" };

// ---- FAQ（画面表示とJSON-LDの単一ソース）----
const faqs: { q: string; a: string }[] = [
  { q: "集塵機があれば防じんマスクは不要ですか？", a: "一律に不要とは判断できません。集塵機は発生源で粉じんを捕集する設備、防じんマスクは残ったばく露から個人を守る保護具で役割が異なります。適用法令とリスクアセスメントに基づき、発生源対策を優先したうえで、残るばく露に対して呼吸用保護具を使うのが基本です。" },
  { q: "集塵機と防じんマスクはどちらを優先しますか？", a: "発生源対策（集塵機・局所排気など）を優先します。発生や拡散を抑えたうえで、それでも残るばく露に対して呼吸用保護具を使います。保護具だけに頼るのは適切ではありません。" },
  { q: "集塵機と局所排気装置は何が違いますか？", a: "局所排気装置は発生源をフードで覆って気流で吸い込み作業域外へ排出する装置、集塵機は吸い込んだ空気から粉じんをろ過・捕集する装置で、システムとして組み合わせて使われることが多いです。両者を混同せず、フード・風量・ダクトを含めて設計します。" },
  { q: "空気清浄機で集塵機の代わりになりますか？", a: "なりません。空気清浄機は室内の浮遊粉じんを補助的に低減するもので、発生源での捕集や局所排気の代替にはなりません。事務所・休憩室の空気環境や持ち込み対策の補助として位置づけます。" },
  { q: "DS2とRL3はどう違いますか？", a: "DS2は使い捨て式・固体粒子用・捕集効率95%以上（区分2）、RL3は取替え式・固体液体両用・99.9%以上（区分3）です。ミストを含む微細粉じんや高い捕集が要る作業ではRL3などの高区分が候補になります。作業と粉じんの種類で選びます。" },
  { q: "8205と8805の違いは何ですか？", a: "どちらも使い捨て式DS2ですが、8805は排気弁付きで呼気の熱・湿気を逃がしやすい構造です。排気弁の有無は快適性に関わるもので、防護性能そのものは区分（DS2など）で判断します。" },
  { q: "使い捨て式と取替え式はどちらがよいですか？", a: "短時間・少人数のスポット作業には使い捨て式、繰り返し使う作業には取替え式が経済的です。取替え式はフィルタ交換・洗浄・保管の管理が前提になります。作業頻度と管理体制で選びます。" },
  { q: "PAPRはどんな性能ですか？", a: "PAPRは電動ファンでろ過材・吸収缶を通した清浄空気を送気し、面体内を陽圧に保つため防護性が高く呼吸が楽です。要求防護係数より高い指定防護係数の製品を選びます。ただし酸素は供給しません。" },
  { q: "酸素が薄い場所でPAPRを使えますか？", a: "使えません。PAPRは酸素を供給しないろ過式です。酸素濃度18%未満の場所や濃度不明の場所、有害ガスが存在する場所では、ろ過式ではなく給気式（送気マスク等）など適切な方式を用います。" },
  { q: "P-PAPRとG-PAPRの違いは？", a: "P-PAPRは粒子状物質（粉じん・ヒューム・ミスト）用、G-PAPRは有毒ガス・蒸気（またはこれらと粒子が混在する環境）用です。G-PAPRの有機ガス用・ハロゲンガス用・アンモニア用・亜硫酸ガス用は国家検定合格品を使用します。" },
  { q: "Sy11Fの構成品は何が必要ですか？", a: "Sy11Fは本体（半面形・呼吸連動形）で、ろ過材・吸収缶（V3/OV等）、バッテリー、充電器は別売です。面体・本体だけでは使用できません。作業に応じてろ過材・吸収缶を選定します。" },
  { q: "V3/OVはどの本体に付きますか？", a: "V3/OVは有機ガス用の吸収缶（防じん機能付き）で、Sy11F・Sy185・Syx099Pなどに適合します。対応本体・適用ガス・破過管理を確認して使用します。フィルタと吸収缶は用途が異なるため混同しないでください。" },
  { q: "6500QLMだけ買えば使えますか？", a: "使えません。6500QLMは面体のみで、区分に合うろ過材を別途選定して組み合わせる必要があります。面体単体では防じんマスクとして機能しません。" },
  { q: "ひげがあるとマスクは使えますか？", a: "面体形は顔面との密着が前提のため、ひげが接地面にかかると漏れの原因になります。密着不良が避けられない場合は、顔面に密着しないルーズフィット形のPAPRなどを検討します。フィットテストは面体形に義務づけられています。" },
  { q: "集塵機のフード位置はどう決めますか？", a: "発生源にできるだけ近づけ、作業者が気流を遮らない位置に設けます。フードが遠い・風量や静圧が不足していると捕集効率が下がります。作業位置とフード・気流の関係を確認します。" },
  { q: "集塵機の吸引力が落ちたときは？", a: "多くはフィルタの目詰まりが原因です。フィルタの点検・清掃・交換基準を定め、風量低下を記録して管理します。床にたまった粉じんの再飛散にも注意します。" },
  { q: "粉体投入にはどんな集塵機が向きますか？", a: "投入口・手元の発生源を捕集できる小型集塵機（KDC-US01など）が向きます。フード位置と風量、対応粉体を確認し、発生源に近づけて使います。" },
  { q: "呼吸用保護具の保管方法は？", a: "使用後は清掃・乾燥し、清潔品と使用済み品を分けて保管します。吸収缶は密封して劣化・破過を管理します。ケースに入れる前に清掃・乾燥することが前提で、汚染したまま収納しないでください。" },
  { q: "火山ガス用の避難マスクは日常作業に使えますか？", a: "使えません。EM-VG15は火山ガスからの避難用で、日常の粉じん作業用の防じんマスクではありません。用途を分けて管理します。" },
  { q: "商品を買えば粉じん対策は完了しますか？", a: "完了しません。粉じん対策は、適用法令とリスクアセスメントに基づき、発生抑制・発生源捕集・拡散防止・呼吸用保護具の4層を組み合わせ、対策後の再評価まで行う継続的な取り組みです。商品購入だけで法令対応が完了するわけではありません。" },
];

// ---- 構造化データ ----
const PAGE_URL = `${SITE_URL}/articles/${SLUG}`;
const HOME_URL = `${SITE_URL}/`;
const articleLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "集塵機があれば防じんマスクはいらない？正しい併用と保護具の選び方",
  description: "集塵機で不足する理由、粉じん対策4層、集塵機・局所排気・空気清浄機の違い、DS2・RL3・PAPRの選び方、P-PAPRとG-PAPR、作業別集塵機、フィット・保管を解説。",
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
    { "@type": "ListItem", position: 3, name: "集塵機があれば防じんマスクはいらない？", item: PAGE_URL },
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
      <p className="mb-1 font-bold text-red-700">{title ?? "⚠️ ご確認ください"}</p>
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
function Td({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <td
      className={`border border-gray-300 px-3 py-2 align-top text-sm text-gray-700${className ? ` ${className}` : ""}`}
    >
      {children}
    </td>
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
          <div>
            <dt className="inline font-bold">向く作業：</dt>
            <dd className="inline">{p.use}</dd>
          </div>
          <div>
            <dt className="inline font-bold">解決できる課題：</dt>
            <dd className="inline">{p.solves}</dd>
          </div>
          {p.sep && (
            <div>
              <dt className="inline font-bold">別売品：</dt>
              <dd className="inline">{p.sep}</dd>
            </div>
          )}
          <div>
            <dt className="inline font-bold">購入前確認：</dt>
            <dd className="inline">{p.check}</dd>
          </div>
        </dl>
        <span className="mt-auto inline-block rounded-lg bg-gray-900 px-3 py-2.5 text-center text-sm font-bold text-white">
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
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">集塵機があれば防じんマスクはいらない？</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          集塵機があれば防じんマスクはいらない？正しい併用と保護具の選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月20日／約20分で読めます
        </p>

        <Figure src={IMG.hero} priority alt="工場で集塵機による発生源捕集と防じんマスク・PAPRの着用を併用している粉じん作業の様子" caption="集塵機（発生源対策）と呼吸用保護具（個人防護）は役割が違い、併用する" />

        <AnswerBox>
          <p><strong>「集塵機があれば防じんマスクは不要」とは一律に判断できません。</strong>集塵機は発生源で粉じんを捕集する設備、防じんマスクは残ったばく露から作業者を守る保護具で、役割が異なります。フード位置・風量・フィルタ・作業位置で捕集効果は変わり、粉じんをゼロにはできません。</p>
          <p><strong>対策には順番があります。</strong>適用法令とリスクアセスメントを確認し、発生抑制→発生源捕集→拡散防止を優先し、それでも残るばく露に呼吸用保護具を使います。空気清浄機は発生源集塵の代替にはなりません。</p>
          <p><strong>マスクは作業条件で選びます。</strong>国家検定合格品から、固体粉じんの短時間作業はDS2、ミストを含む微細粉じんはRL3、呼吸負担を抑えたい長時間作業はPAPRが候補です。ただし酸素濃度18%未満や濃度不明の環境ではろ過式（PAPR含む）を使いません。</p>
        </AnswerBox>

        <p className={cls.body}>まず、記事前半で使う代表的な呼吸用保護具と集塵機を並べます。選定の考え方は次章以降で、法令・4層対策・作業条件別に詳しく解説します。</p>

        <CardGrid>
          <ProductCard p={P_8205_10} priority />
          <ProductCard p={P_8805} priority />
          <ProductCard p={P_RL3M} priority />
          <ProductCard p={P_SY11F} priority />
          <ProductCard p={P_KDCUS01} priority />
          <ProductCard p={P_33753} priority />
        </CardGrid>

        <CTA label="作業時間と粉じんの種類から対策用品を選ぶ" href="#mask-hikaku" />

        {/* ===== H2-1 ===== */}
        <h2 id="iranai" className={cls.h2}>集塵機があっても防じんマスクが不要とは限らない</h2>
        <p className={cls.body}>検索者が最も知りたいのは「集塵機を入れればマスクをやめられるか」でしょう。結論は、一律にはやめられません。両者は役割が違い、集塵機の捕集には条件があるためです。</p>
        <h3 className={cls.h3}>役割の違い</h3>
        <p className={cls.body}>集塵機は発生源で粉じんを捕集する「設備側の対策」、防じんマスクは吸い込む空気から粉じんを除く「個人側の保護」です。設備で発生・拡散を抑え、なお残るばく露を保護具で防ぐという、層の異なる対策です。</p>
        <h3 className={cls.h3}>法令とリスクアセスメント</h3>
        <p className={cls.body}>粉じん作業は粉じん障害防止規則（粉じん則）等の対象です。第10次粉じん障害防止総合対策（令和5〜9年度）では、呼吸用保護具の適正な選択・使用の徹底や、より防護係数の高い保護具の使用が求められています。必要なマスクの要否・区分は、適用法令とリスクアセスメントの結果に基づいて判断します。商品購入だけで法令対応が完了するわけではありません。</p>
        <h3 className={cls.h3}>取り切れない理由</h3>
        <p className={cls.body}>集塵機はフード位置・風量・静圧・フィルタ状態・作業者の立ち位置で捕集効果が変わります。フードが遠い、作業者が気流を遮る、フィルタが目詰まりしている、床の粉じんが再飛散する——こうした条件では取り切れず、残るばく露に保護具が必要になります。</p>
        <h3 className={cls.h3}>マスクだけにも頼らない</h3>
        <p className={cls.body}>逆に、保護具だけに頼るのも適切ではありません。発生源対策を怠ると高いばく露が続き、保護具の負担も大きくなります。設備対策と保護具は「どちらか」ではなく組み合わせて使います。</p>

        {/* ===== H2-2 ===== */}
        <h2 id="four-layer" className={cls.h2}>工場の粉じん対策は4層で考える</h2>
        <p className={cls.body}>粉じん対策は「集塵機かマスクか」ではなく、4つの層を組み合わせて設計します。上の層ほど効果が高く、下の層（保護具）は最後の砦です。</p>
        <Figure src={IMG.fourLayer} alt="粉じん対策の4層モデル（発生抑制・発生源捕集・拡散再飛散防止・呼吸用保護具）を示した工場の図解" caption="発生抑制→発生源捕集→拡散防止→呼吸用保護具の順に重ねる" />
        <h3 className={cls.h3}>発生抑制</h3>
        <p className={cls.body}>第1層は粉じんの発生そのものを抑えることです。湿式化（散水・湿潤化）、密閉化、低発じんの材料・工法への変更などで、そもそも粉じんを出さないようにします。</p>
        <h3 className={cls.h3}>発生源捕集</h3>
        <p className={cls.body}>第2層は発生源での捕集です。局所排気装置や集塵機を発生源に近づけ、飛散する前に吸い込みます。フード位置と風量が効果を左右します。</p>
        <h3 className={cls.h3}>拡散・再飛散防止</h3>
        <p className={cls.body}>第3層は拡散と再飛散の防止です。区画化・清掃・堆積粉じんの除去で、いったん床や設備に積もった粉じんが再び舞い上がるのを防ぎます。</p>
        <h3 className={cls.h3}>呼吸用保護具</h3>
        <p className={cls.body}>第4層が呼吸用保護具です。第1〜3層で減らしてもなお残るばく露に対して、国家検定合格の防じんマスクやPAPRを使います。保護具は最後の層であり、上位の対策の代わりにはなりません。</p>

        {/* ===== H2-3 ===== */}
        <h2 id="chigai" className={cls.h2}>集塵機・局所排気装置・空気清浄機の違い</h2>
        <p className={cls.body}>似た機器でも役割はまったく異なります。混同すると「空気清浄機で代用」といった誤った対策になりがちです。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>機器・保護具</Th><Th>役割</Th><Th>粉じんへの働き</Th><Th>位置づけ</Th><Th>注意点</Th></tr></thead>
            <tbody>
              <tr><Td>局所排気装置</Td><Td>発生源をフードで覆い気流で吸引・排出</Td><Td>飛散前に発生源で捕らえる</Td><Td>第2層（発生源捕集）</Td><Td>フード位置・風量・ダクト設計が重要</Td></tr>
              <tr><Td>集塵機</Td><Td>吸い込んだ空気から粉じんをろ過・捕集</Td><Td>捕集した粉じんをためる</Td><Td>第2層（局排と組み合わせ）</Td><Td>フィルタ目詰まり・風量低下に注意</Td></tr>
              <tr><Td>空気清浄機</Td><Td>室内の浮遊粉じんを補助的に低減</Td><Td>発生源では捕らえない</Td><Td>補助（事務所・休憩室等）</Td><Td>発生源集塵・局排の代替にはならない</Td></tr>
              <tr><Td>防じんマスク・PAPR</Td><Td>吸気から粉じんをろ過し個人を守る</Td><Td>残ったばく露から作業者を守る</Td><Td>第4層（個人保護）</Td><Td>国家検定・区分・フィットが前提</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>局所排気装置は「発生源で捕らえるしくみ」、集塵機は「吸った空気から粉じんを分離するしくみ」で、実務では両者を組み合わせてシステムとして使います。空気清浄機はこれらの代わりにはならず、あくまで補助です。</p>

        {/* ===== H2-4 ===== */}
        <h2 id="torikirenai" className={cls.h2}>集塵機で粉じんを取り切れない10の原因</h2>
        <p className={cls.body}>「集塵機を置いたのに粉じんが減らない」には、たいてい原因があります。代表的な10項目と改善策を整理します。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>#</Th><Th>取り切れない原因</Th><Th>改善策</Th></tr></thead>
            <tbody>
              <tr><Td>1</Td><Td>フードが発生源から遠い</Td><Td>フードを発生源に近づける</Td></tr>
              <tr><Td>2</Td><Td>作業者が気流を遮っている</Td><Td>立ち位置・フード向きを見直す</Td></tr>
              <tr><Td>3</Td><Td>風量・静圧の不足</Td><Td>能力に合った機種・ダクト設計にする</Td></tr>
              <tr><Td>4</Td><Td>フィルタの目詰まり</Td><Td>点検・清掃・交換基準を設ける</Td></tr>
              <tr><Td>5</Td><Td>ダクトの詰まり・漏れ</Td><Td>ダクトの清掃・気密確認</Td></tr>
              <tr><Td>6</Td><Td>床・設備からの再飛散</Td><Td>堆積粉じんの清掃・区画化</Td></tr>
              <tr><Td>7</Td><Td>粉じんの粒径・性状に不適合</Td><Td>対象粉じんに合う集塵方式を選ぶ</Td></tr>
              <tr><Td>8</Td><Td>作業と機種のミスマッチ</Td><Td>作業別に適した集塵機を選定</Td></tr>
              <tr><Td>9</Td><Td>横風・空調気流の干渉</Td><Td>気流環境を整える</Td></tr>
              <tr><Td>10</Td><Td>メンテ・記録がない</Td><Td>風量低下や交換を記録・管理する</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>これらの条件で取り切れない粉じんが残るため、集塵機を入れても呼吸用保護具が必要になる場面があります。まず設備側を改善し、残るばく露に保護具を合わせます。</p>

        {/* ===== H2-5 ===== */}
        <h2 id="funjin-shurui" className={cls.h2}>粉じんの種類と作業を確認する</h2>
        <p className={cls.body}>選定の出発点は「どんな粉じんか」「どんな作業か」です。粒子の性状や有害性、ガスの有無で、必要な区分や方式が変わります。</p>
        <h3 className={cls.h3}>研磨・切断</h3>
        <p className={cls.body}>研磨・切断は微細な固体粉じんが多く発生します。電動工具接続の集塵と、DS2以上（ミストを伴えばL系）の保護具が基本の組み合わせです。</p>
        <h3 className={cls.h3}>粉体投入・袋詰め</h3>
        <p className={cls.body}>粉体投入・袋詰めは投入口・手元で局所的に発じんします。小型集塵機で発生源を捕集し、残るばく露に防じんマスクを合わせます。</p>
        <h3 className={cls.h3}>パテ・塗膜</h3>
        <p className={cls.body}>パテ研ぎや塗膜の除去では、粉じんに加え塗料由来の成分が混ざることがあります。含まれる有害物によっては、粉じん用だけでなくガス・蒸気への対応（吸収缶・G-PAPR等）が必要かを確認します。</p>
        <h3 className={cls.h3}>溶接ヒューム</h3>
        <p className={cls.body}>溶接ヒュームは金属アーク溶接等で発生し、法令上の管理対象です。屋内での金属アーク溶接等では有効な呼吸用保護具の使用とフィットテスト等が求められます。作業環境に応じて区分・方式を選びます。</p>
        <h3 className={cls.h3}>石綿等</h3>
        <p className={cls.body}>石綿（アスベスト）等は専用の法令（石綿障害予防規則等）に基づく厳格な対応が必要で、作業区分に応じた高い防護性能の保護具（PAPR等）が指定されます。一般の粉じん作業とは切り分けて扱います。</p>
        <h3 className={cls.h3}>ガス・蒸気混在</h3>
        <p className={cls.body}>有毒ガスや蒸気が粉じんと混在する場合、防じんマスク（粒子用）だけでは対応できません。適用ガスに応じた吸収缶やG-PAPRが必要かを、成分と濃度から判断します。</p>
        <h3 className={cls.h3}>酸素欠乏・濃度不明</h3>
        <p className={cls.body}>酸素濃度18%未満のおそれや、濃度不明・有害ガスの存在が疑われる環境では、ろ過式（防じんマスク・PAPRを含む）は使えません。給気式など適切な方式と、酸欠・有害物対策が必要です。</p>
        <Caution title="ろ過式が使えない環境に注意">
          <p>防じんマスク・PAPRはろ過式で、酸素を供給しません。酸素濃度18%未満の場所、濃度不明の場所、有害ガスが存在する場所では使用しないでください。これらの環境では給気式など適切な方式を選び、酸素欠乏・有害物のばく露対策を行います。</p>
        </Caution>

        {/* ===== H2-6 ===== */}
        <h2 id="mask-hikaku" className={cls.h2}>使い捨て式DS2が候補になる条件</h2>
        <p className={cls.body}>呼吸用保護具は使い捨て式・取替え式・PAPRの3方式があり、作業条件で選びます。まず全体像を比較し、そのうえで使い捨て式DS2が向く条件を見ます。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>方式</Th><Th>形状</Th><Th>代表区分</Th><Th>呼吸負担</Th><Th>繰り返し</Th><Th>フィットテスト</Th><Th>向く作業</Th></tr></thead>
            <tbody>
              <tr><Td>使い捨て式</Td><Td>面体一体・使い切り</Td><Td>DS2など</Td><Td>あり（自己肺力）</Td><Td>不可</Td><Td>面体形は対象</Td><Td>短時間・少人数・固体粉じん</Td></tr>
              <tr><Td>取替え式</Td><Td>面体＋ろ過材交換</Td><Td>RS/RL（RL3等）</Td><Td>あり（自己肺力）</Td><Td>可（洗浄・交換前提）</Td><Td>面体形は対象</Td><Td>繰り返し・高捕集・ミスト</Td></tr>
              <tr><Td>PAPR</Td><Td>本体＋ろ過材/吸収缶＋面体/フード</Td><Td>P-PAPR/G-PAPR</Td><Td>小さい（送気で楽）</Td><Td>可（構成品管理）</Td><Td>面体形は対象／ルーズフィット形は対象外</Td><Td>長時間・高防護・呼吸負担軽減</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">※いずれも国家検定合格品を使用し、要求防護係数に対して十分な指定防護係数の区分・方式を選びます。</p>
        <h3 className={cls.h3}>8205</h3>
        <p className={cls.body}>3M 8205はDS2の使い捨て式で、固体粉じんの短時間・スポット作業に扱いやすい定番です。10枚入・20枚入があり、使用量に応じて選べます。</p>
        <h3 className={cls.h3}>8805</h3>
        <p className={cls.body}>3M 8805はDS2で排気弁付きです。熱がこもりやすい環境で呼気の熱・湿気を逃がしやすく、快適性を高めたい場面に向きます。</p>
        <h3 className={cls.h3}>排気弁</h3>
        <p className={cls.body}>排気弁は呼気を外に出しやすくする機構で、快適性に関わります。排気弁付きだから防護性能が高い、というものではありません。防護性能は区分（DS2など）で判断します。</p>
        <h3 className={cls.h3}>密着</h3>
        <p className={cls.body}>使い捨て式でも顔との密着が前提です。サイズや装着が合わないと漏れが生じます。ひげが接地面にかかると密着不良の原因になります。</p>
        <h3 className={cls.h3}>交換</h3>
        <p className={cls.body}>使い捨て式は目詰まりや汚れ、変形が出たら交換します。交換基準を決め、使い回しを避けます。</p>
        <CardGrid>
          <ProductCard p={P_8205_10} />
          <ProductCard p={P_8205_20} />
          <ProductCard p={P_8805} />
        </CardGrid>
        <CTA label="短時間作業向けDS2マスクを見る" href="#mask-hikaku" />

        {/* ===== H2-7 ===== */}
        <h2 id="torikae" className={cls.h2}>取替え式防じんマスクが候補になる条件</h2>
        <p className={cls.body}>繰り返し使う作業や、高い捕集効率・ミストへの対応が必要な作業では、ろ過材を交換して使う取替え式が候補です。洗浄・交換・フィットの管理が前提になります。</p>
        <Figure src={IMG.maskCompare} alt="使い捨て式DS2・取替え式RL3・電動ファン付きPAPRの3方式を並べて比較した呼吸用保護具" caption="使い捨て式・取替え式・PAPRを作業条件で使い分ける" />
        <h3 className={cls.h3}>DR28SU2W</h3>
        <p className={cls.body}>シゲマツ DR28SU2Wは取替え式防じんマスクです。繰り返し使う固体粉じん作業で、使い捨てより経済的に運用したい場合に向きます。区分・適合フィルタ・サイズを確認して選びます。</p>
        <h3 className={cls.h3}>6000/2091-RL3</h3>
        <p className={cls.body}>3M 6000（面体）＋2091（ろ過材）はRL3の構成で、取替え式・固体液体両用・捕集効率99.9%以上（区分3）です。ミストを含む微細粉じんや、高い捕集が求められる作業に向きます。</p>
        <h3 className={cls.h3}>M・L</h3>
        <p className={cls.body}>面体にはサイズがあり、6000/2091-RL3はM・Lが選べます。顔の大きさに合うサイズを選ぶことが、密着とフィットの前提です。M・Lそれぞれの商品リンクを用意しています。</p>
        <h3 className={cls.h3}>洗浄</h3>
        <p className={cls.body}>取替え式は使用後に面体を清掃・乾燥し、ろ過材は交換基準に沿って交換します。清潔に保つことが防護性能と衛生の維持につながります。</p>
        <h3 className={cls.h3}>フィット</h3>
        <p className={cls.body}>面体形はフィットが命です。第三管理区分の場所や金属アーク溶接等では、年1回のフィットテストが求められます。装着方法の教育とあわせて確認します。なお6500QLMは面体のみで、区分に合うろ過材を別途選定しないと使えません。</p>
        <CardGrid>
          <ProductCard p={P_DR28} />
          <ProductCard p={P_RL3M} />
          <ProductCard p={P_RL3L} />
          <ProductCard p={P_6500} />
        </CardGrid>
        <CTA label="繰り返し使えるRL3マスクを見る" href="#torikae" />

        {/* ===== H2-8 ===== */}
        <h2 id="papr" className={cls.h2}>電動ファン付き呼吸用保護具を検討する条件</h2>
        <p className={cls.body}>長時間作業で呼吸負担を抑えたい、より高い防護性能が必要、といった条件ではPAPR（電動ファン付き呼吸用保護具）が候補です。高額導入になるため、仕組みと種類を理解して選びます。</p>
        <h3 className={cls.h3}>PAPRの仕組み</h3>
        <p className={cls.body}>PAPRは電動ファンで、ろ過材または吸収缶を通した清浄空気を面体・フード内へ送ります。面体内が陽圧になるため外部の粉じんが入りにくく、自己肺力で吸う防じんマスクより呼吸が楽です。ただしろ過式であり、酸素は供給しません。</p>
        <h3 className={cls.h3}>P-PAPR・G-PAPR</h3>
        <p className={cls.body}>PAPRには、粒子状物質（粉じん・ヒューム・ミスト）用の「防じん機能を有するP-PAPR」と、有毒ガス・蒸気（またはこれらと粒子が混在する環境）用の「防毒機能を有するG-PAPR」があります。G-PAPRの有機ガス用・ハロゲンガス用・アンモニア用・亜硫酸ガス用は国家検定合格品を使用します。「PAPRならどのガスにも対応できる」わけではありません。</p>
        <h3 className={cls.h3}>Sy11F</h3>
        <p className={cls.body}>シゲマツ Sy11Fは半面形のP-PAPR本体で、呼吸に合わせて送気する呼吸連動形です。フィルタ・吸収缶は別売で、作業に応じて選定します。本体だけでは使用できません。</p>
        <h3 className={cls.h3}>Sy185</h3>
        <p className={cls.body}>シゲマツ Sy185-Hは面体形で、より高い指定防護係数が求められる作業に向きます。ろ過材・吸収缶・バッテリーは別売の構成です。</p>
        <h3 className={cls.h3}>Syx099</h3>
        <p className={cls.body}>シゲマツ Syx099P-H-1は面体形PAPRで、M・Lのサイズがあります。長時間・高防護を標準構成で導入したい場合の候補です。</p>
        <h3 className={cls.h3}>酸素欠乏</h3>
        <p className={cls.body}>PAPRは酸素を供給しません。酸素濃度18%未満のおそれがある場所では使用できません。次のCautionを必ず確認してください。</p>
        <Caution title="PAPRは酸素を供給しない">
          <p>PAPRはろ過式で、清浄化した周囲の空気を送るだけです。酸素濃度18%未満の場所、濃度不明の場所、有害ガスが存在する場所では絶対に使用しないでください。これらの環境では給気式など適切な方式を選定します。「PAPRは酸素を供給する」は誤りです。</p>
        </Caution>
        <CardGrid>
          <ProductCard p={P_SY11F} />
          <ProductCard p={P_SY185} />
          <ProductCard p={P_SYX099M} />
          <ProductCard p={P_SYX099L} />
        </CardGrid>
        <CTA label="呼吸負担を抑えるPAPRを見る" href="#papr" />

        {/* ===== H2-9 ===== */}
        <h2 id="papr-parts" className={cls.h2}>PAPRの面体・吸収缶・バッテリーを組み合わせる</h2>
        <p className={cls.body}>PAPRは本体・ろ過材／吸収缶・面体／フード・バッテリー・充電器を正しく組み合わせて初めて使えます。これらは別商品で、型式の取り違えは重大な誤発注につながります。</p>
        <Figure src={IMG.paprParts} alt="PAPRの本体・ろ過材や吸収缶・面体・バッテリー・充電器などの構成品を並べた図" caption="本体・ろ過材/吸収缶・面体・バッテリー・充電器は別商品として管理する" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>構成品</Th><Th>役割</Th><Th>代表例</Th><Th>確認事項</Th></tr></thead>
            <tbody>
              <tr><Td>本体（ファンユニット）</Td><Td>清浄空気を送気</Td><Td>Sy11F ほか</Td><Td>P/G種別・指定防護係数・適合面体</Td></tr>
              <tr><Td>面体・フード</Td><Td>顔・頭部のインタフェース</Td><Td>Sy185-H／Syx099P-H-1</Td><Td>形状（面体形/ルーズフィット形）・サイズM/L</Td></tr>
              <tr><Td>ろ過材（フィルタ）</Td><Td>粒子を捕集</Td><Td>本体適合フィルタ</Td><Td>粒子捕集効率・適合本体</Td></tr>
              <tr><Td>吸収缶</Td><Td>ガス・蒸気を除去</Td><Td>V3/OV（有機ガス用）</Td><Td>適用ガス・破過管理・適合本体（フィルタと混同しない）</Td></tr>
              <tr><Td>バッテリー</Td><Td>稼働電源</Td><Td>BA-L2H</Td><Td>適合機種・稼働時間・シフト適合</Td></tr>
              <tr><Td>充電器</Td><Td>バッテリー充電</Td><Td>CH-L2HAA</Td><Td>対応バッテリー・入力電源</Td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={cls.h3}>V3/OV</h3>
        <p className={cls.body}>V3/OVは有機ガス用の吸収缶（防じん機能付き）で、Sy11F・Sy185・Syx099Pなどに適合します。粉じんに加えて有機ガスが混在する作業でG-PAPR機能として使います。フィルタ（粒子用）と吸収缶（ガス用）は用途が異なり、混同しないでください。</p>
        <h3 className={cls.h3}>対応面体</h3>
        <p className={cls.body}>本体と面体・フードは適合が決まっています。本体に対応しない面体は組み合わせられません。半面形・面体形・ルーズフィット形の別も、フィットテストの要否に関わります。</p>
        <h3 className={cls.h3}>BA-L2H</h3>
        <p className={cls.body}>BA-L2Hは長時間タイプのバッテリーで、Syx099P・Sy185・Sy11F・Sy20などに適合します。稼働時間と充電時間を確認し、シフトに合う運用を組みます。</p>
        <h3 className={cls.h3}>CH-L2HAA</h3>
        <p className={cls.body}>CH-L2HAAは充電器です。バッテリーと充電器は別物で、対応型式を確認します。予備バッテリーと組み合わせると、連続運用や複数台管理がしやすくなります。</p>
        <h3 className={cls.h3}>シフト時間</h3>
        <p className={cls.body}>作業シフトに対して稼働時間が足りるかを事前に計算します。長時間タイプのバッテリーや予備の準備で、途中で送気が止まらないようにします。</p>
        <h3 className={cls.h3}>誤発注防止</h3>
        <p className={cls.body}>PAPRは本体・ろ過材/吸収缶・面体・バッテリー・充電器を別々に発注するため、型式の取り違えが起きがちです。構成品チェック表で「本体・面体・ろ過材/吸収缶・電源」の適合を確認してから発注します。</p>
        <CardGrid>
          <ProductCard p={P_V3OV} />
          <ProductCard p={P_BAL2H} />
          <ProductCard p={P_CHL2HAA} />
        </CardGrid>
        <CTA label="PAPR対応の吸収缶・電源用品を見る" href="#papr-parts" />

        {/* ===== H2-10 ===== */}
        <h2 id="shujinki" className={cls.h2}>作業別に集塵機を選ぶ</h2>
        <p className={cls.body}>集塵機は「作業と発生源」に合わせて選びます。粉体投入、研磨・サンディング、産業機械接続では適した方式が異なります。</p>
        <Figure src={IMG.dustByWork} alt="粉体投入・研磨サンディング・産業機械接続など作業別に集塵機を比較した工場の様子" caption="作業と発生源に合わせて集塵機を選ぶ" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>作業</Th><Th>発生源</Th><Th>推奨タイプ</Th><Th>商品候補</Th><Th>確認事項</Th></tr></thead>
            <tbody>
              <tr><Td>粉体投入・袋詰め</Td><Td>投入口・手元</Td><Td>小型集塵機</Td><Td>KDC-US01</Td><Td>フード位置・風量・対応粉体</Td></tr>
              <tr><Td>研磨・サンディング</Td><Td>電動工具の切削点</Td><Td>工具接続型</Td><Td>33753</Td><Td>対応工具・ホース径・フィルタ</Td></tr>
              <tr><Td>汎用の発生源捕集</Td><Td>作業点</Td><Td>集塵機</Td><Td>SI350</Td><Td>風量・静圧・フード適合</Td></tr>
              <tr><Td>産業機械接続（220V）</Td><Td>設備側</Td><Td>設備接続型</Td><Td>DET200A（220V）</Td><Td>★電源220V・接続仕様</Td></tr>
              <tr><Td>産業機械接続（380V）</Td><Td>設備側</Td><Td>設備接続型</Td><Td>DET200B（380V）</Td><Td>★電源380V・接続仕様</Td></tr>
              <tr><Td>産業機械接続</Td><Td>設備側</Td><Td>設備接続型</Td><Td>F03-LTE-100</Td><Td>風量・静圧・接続・電源</Td></tr>
            </tbody>
          </table>
        </div>
        <Caution title="DET200A（220V）とDET200B（380V）は電圧が違う">
          <p>淀川電機 DET200Aは三相220V、DET200Bは三相380Vで、電源電圧が異なる別品番です。設備の電源電圧に合わない品番を発注すると使用できません。発注前に必ず電源電圧を確認してください。</p>
        </Caution>
        <h3 className={cls.h3}>SI350</h3>
        <p className={cls.body}>SI350は発生源捕集に使う集塵機です。作業点近くにフードを設け、風量・静圧が作業に合うかを確認して使います。</p>
        <h3 className={cls.h3}>KDC-US01</h3>
        <p className={cls.body}>コトヒラ KDC-US01は粉体用の小型集塵機で、粉体投入・袋詰めの発生源捕集に向きます。投入口・手元にフードを近づけて使います。</p>
        <h3 className={cls.h3}>33753</h3>
        <p className={cls.body}>3M ダストエクストラクター33753は電動工具に接続し、研磨・サンディング・パテ研ぎの粉じんを切削点で吸引します。対応工具・ホース径を確認します。</p>
        <h3 className={cls.h3}>DET200</h3>
        <p className={cls.body}>淀川電機 DET200は産業機械に接続する集塵機です。DET200A（220V）とDET200B（380V）は電源電圧が異なるため、設備に合う電圧の品番を選びます。</p>
        <h3 className={cls.h3}>F03-LTE-100</h3>
        <p className={cls.body}>エムジオット F03-LTE-100は産業機械・設備に接続する集塵機です。風量・静圧・接続仕様・電源を確認して選定します。</p>
        <CardGrid>
          <ProductCard p={P_KDCUS01} />
          <ProductCard p={P_33753} />
          <ProductCard p={P_SI350} />
          <ProductCard p={P_DET200A} />
          <ProductCard p={P_DET200B} />
          <ProductCard p={P_F03} />
        </CardGrid>
        <CTA label="粉体投入向け小型集塵機を見る" href="#shujinki" />
        <CTA label="研磨・サンディング向け集塵機を見る" href="#shujinki" />
        <CTA label="産業機械接続用集塵機を見る" href="#shujinki" />

        {/* ===== H2-11 ===== */}
        <h2 id="hood" className={cls.h2}>フード・ダクト設置で効果が変わる</h2>
        <p className={cls.body}>集塵機・局所排気の効果は、本体性能よりもフードとダクトの設置で大きく変わります。同じ機種でも、フードが遠ければ捕集できません。</p>
        <Figure src={IMG.hood} alt="集塵フードを発生源に近づけた良い例と、遠くて作業者が気流を遮る悪い例を対比した図" caption="フードは発生源に近づけ、作業者が気流を遮らない位置に" />
        <p className={cls.body}>フードは発生源にできるだけ近づけ、粉じんが飛散する方向に開口を向けます。作業者が発生源とフードの間に立って気流を遮ると捕集効率が落ちます。ダクトは詰まり・漏れがないか点検し、必要な風量・静圧を確保します。捕集がうまくいかないときは、機種の買い替えよりも先にフード位置・作業姿勢・気流環境を見直すと改善することが多くあります。</p>

        {/* ===== H2-12 ===== */}
        <h2 id="kuki-seijoki" className={cls.h2}>空気清浄機はどこで使う？</h2>
        <p className={cls.body}>空気清浄機は「発生源集塵の代わり」ではありません。役割を正しく理解すれば、補助として有効に使えます。</p>
        <h3 className={cls.h3}>発生源対策との違い</h3>
        <p className={cls.body}>空気清浄機は室内に浮遊する粉じんを補助的に低減するもので、発生源で捕らえる集塵機・局所排気とは役割が異なります。発生源対策の代替にはできません。</p>
        <h3 className={cls.h3}>事務所・休憩室</h3>
        <p className={cls.body}>作業区画の外にある事務所や休憩室の空気環境を整える補助としては有効です。作業場そのものの発生源対策とは分けて考えます。</p>
        <h3 className={cls.h3}>持ち込み防止</h3>
        <p className={cls.body}>作業衣に付いた粉じんの持ち込みを完全に防ぐものではありません。更衣・清掃などの持ち込み対策とあわせ、あくまで補助として位置づけます。</p>
        <h3 className={cls.h3}>CL-HB924</h3>
        <p className={cls.body}>ダイニチ CL-HB924は空気清浄機です。事務所・休憩室の空気環境の補助に使い、発生源集塵機として紹介・運用しないでください。</p>
        <CardGrid>
          <ProductCard p={P_CLHB924} />
        </CardGrid>

        {/* ===== H2-13 ===== */}
        <h2 id="test7" className={cls.h2}>集塵効果を確認する7日間テスト</h2>
        <p className={cls.body}>対策の効果は、感覚ではなく記録で確認します。導入前後で7日間の記録をとると、改善点と残るばく露が見えてきます。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>日</Th><Th>作業・発生源</Th><Th>集塵機の状態（風量/フィルタ）</Th><Th>フード位置</Th><Th>体感・堆積粉じん</Th><Th>着用保護具</Th><Th>改善内容</Th></tr></thead>
            <tbody>
              <tr><Td>例）1日目</Td><Td>研磨</Td><Td>風量正常</Td><Td>やや遠い</Td><Td>粉じん多め</Td><Td>DS2</Td><Td>フードを近づける</Td></tr>
              <tr><Td>例）4日目</Td><Td>粉体投入</Td><Td>風量低下</Td><Td>手元</Td><Td>改善</Td><Td>RL3</Td><Td>フィルタ清掃</Td></tr>
              <tr><Td className="text-gray-400">（記入）</Td><Td className="text-gray-400">—</Td><Td className="text-gray-400">—</Td><Td className="text-gray-400">—</Td><Td className="text-gray-400">—</Td><Td className="text-gray-400">—</Td><Td className="text-gray-400">—</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>風量の低下やフィルタの目詰まり、フード位置と体感の関係を記録すると、設備側で改善できる点と、保護具で補う必要があるばく露が切り分けられます。対策後の再評価まで行って初めて、粉じん対策のサイクルが回ります。</p>

        {/* ===== H2-14 ===== */}
        <h2 id="fit" className={cls.h2}>防じんマスク・PAPRのフィットと管理</h2>
        <p className={cls.body}>呼吸用保護具は、選ぶだけでなく「正しく装着され、管理されている」ことが前提です。フィットと記録の管理を仕組みにします。</p>
        <p className={cls.body}>面体形の呼吸用保護具は顔面との密着が防護性能を左右します。第三管理区分の場所や金属アーク溶接等の作業では、年1回以内のフィットテストが義務づけられています。ひげが接地面にかかると密着不良の原因になり、密着が確保できない場合は顔面に密着しないルーズフィット形のPAPRなどを検討します。選任した粉じん保護具着用管理責任者のもとで、選択・使用・保守を管理します。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>管理項目</Th><Th>内容</Th><Th>頻度・記録</Th></tr></thead>
            <tbody>
              <tr><Td>機器・型式</Td><Td>本体・面体・ろ過材/吸収缶・電源の型式と管理番号</Td><Td>台帳に登録</Td></tr>
              <tr><Td>使用者・サイズ</Td><Td>使用者ごとのサイズ・割り当て</Td><Td>台帳・都度更新</Td></tr>
              <tr><Td>フィットテスト</Td><Td>面体形の密着確認</Td><Td>年1回以内・記録保存</Td></tr>
              <tr><Td>点検</Td><Td>面体・弁・ファン・バッテリーの状態</Td><Td>使用前後・定期</Td></tr>
              <tr><Td>交換</Td><Td>ろ過材・吸収缶・部品の交換</Td><Td>基準日・交換日を記録</Td></tr>
              <tr><Td>清掃・保管</Td><Td>清掃・乾燥・分離保管</Td><Td>使用後ごと</Td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2-15 ===== */}
        <h2 id="hokan" className={cls.h2}>保護具・交換品の保管と運搬</h2>
        <p className={cls.body}>保護具は保管と運搬の管理まで含めて対策です。汚染したまま収納すると、次の使用時にばく露や衛生の問題につながります。</p>
        <Figure src={IMG.storage} alt="使用後の呼吸用保護具を清掃・乾燥し、清潔品と使用済み品を分けてケースに保管する様子" caption="清掃・乾燥してから、清潔品と使用済み品を分けてケースに収納する" />
        <h3 className={cls.h3}>清掃・乾燥</h3>
        <p className={cls.body}>使用後は面体を清掃し、しっかり乾燥させます。ケースに入れる前に清掃・乾燥することが前提で、汚染したまま収納しません。</p>
        <h3 className={cls.h3}>清潔・使用済み分離</h3>
        <p className={cls.body}>清潔品と使用済み品を分けて保管し、混在させません。ケースに入れれば汚染品が安全になるわけではありません。</p>
        <h3 className={cls.h3}>吸収缶</h3>
        <p className={cls.body}>吸収缶は開封後の劣化・破過を管理します。密封して保管し、使用時間・交換日を記録します。フィルタ（粒子用）と吸収缶（ガス用）は分けて管理します。</p>
        <h3 className={cls.h3}>ケース内寸</h3>
        <p className={cls.body}>PAPR一式や面体・電源を収めるには、収納物に合う内寸のケースを選びます。外寸ではなく内寸で判断します。</p>
        <h3 className={cls.h3}>フォーム</h3>
        <p className={cls.body}>フォーム付きは緩衝・仕切りに便利で、フォーム無（NF）は自作の仕切りに向きます。用途で選びます。</p>
        <h3 className={cls.h3}>PELICAN各サイズ</h3>
        <p className={cls.body}>PELICANのストームケース／保管ケースはサイズが複数あります。収納物と運搬方法（キャスターの要否）に合わせて選びます。ケース自体は保護具の主役ではなく、清掃・乾燥・分離を前提とした保管・運搬の道具です。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>ケース</Th><Th>タイプ</Th><Th>フォーム</Th><Th>向く用途</Th><Th>確認事項</Th></tr></thead>
            <tbody>
              <tr><Td>IM2975BK</Td><Td>大型</Td><Td>あり</Td><Td>PAPR一式の保管・運搬</Td><Td>内寸と収納物の適合</Td></tr>
              <tr><Td>V525</Td><Td>キャスター付</Td><Td>あり</Td><Td>重い一式の拠点間運搬</Td><Td>内寸・耐荷重</Td></tr>
              <tr><Td>IM2950BK / NFBK</Td><Td>大型</Td><Td>あり／無</Td><Td>大型構成の保管</Td><Td>NFは仕切り自作</Td></tr>
              <tr><Td>IM2720BK</Td><Td>中型</Td><Td>あり</Td><Td>面体・フィルタの保管</Td><Td>内寸</Td></tr>
              <tr><Td>IM2700BK / NFBK</Td><Td>中型</Td><Td>あり／無</Td><Td>中型の保護具保管</Td><Td>NFは仕切り自作</Td></tr>
              <tr><Td>IM2620NFOD</Td><Td>小〜中型</Td><Td>無</Td><Td>コンパクト保管</Td><Td>フォーム別途</Td></tr>
            </tbody>
          </table>
        </div>
        <CardGrid>
          <ProductCard p={P_IM2975} />
          <ProductCard p={P_V525} />
          <ProductCard p={P_IM2950NF} />
          <ProductCard p={P_IM2950} />
          <ProductCard p={P_IM2720} />
          <ProductCard p={P_IM2700NF} />
          <ProductCard p={P_IM2700} />
          <ProductCard p={P_IM2620} />
        </CardGrid>
        <CTA label="清掃済み保護具の運搬ケースを見る" href="#hokan" />

        {/* ===== H2-16 ===== */}
        <h2 id="taio-dekinai" className={cls.h2}>粉じんマスクでは対応できない危険</h2>
        <p className={cls.body}>防じんマスクは「粒子（粉じん）」を対象とするろ過式です。ガスや酸素欠乏には対応できず、方式そのものを変える必要があります。</p>
        <Caution title="ろ過式（防じんマスク・PAPR）で対応できない環境">
          <p>次の環境では防じんマスク・PAPRは使用できません。酸素濃度18%未満の場所、濃度不明の場所、有毒ガスが存在する場所。これらでは給気式など適切な方式を選び、酸素欠乏・有害物のばく露対策を行います。ろ過式は酸素を供給しません。</p>
        </Caution>
        <h3 className={cls.h3}>有毒ガス</h3>
        <p className={cls.body}>有毒ガスには粒子用の防じんマスクは無効です。適用ガスに応じた吸収缶（防毒マスク・G-PAPR）が必要で、対象ガス・濃度に合う型式を選びます。</p>
        <h3 className={cls.h3}>粉じん・ガス混在</h3>
        <p className={cls.body}>粉じんとガスが混在する環境では、粒子用と適用ガス用の両方に対応する構成（防じん機能付き吸収缶やG-PAPR）が必要かを、成分と濃度から判断します。</p>
        <h3 className={cls.h3}>酸素欠乏</h3>
        <p className={cls.body}>酸素濃度18%未満のおそれがある場所では、ろ過式は使えません。給気式など酸素を供給する方式と、酸素欠乏症等防止規則に基づく対策が必要です。</p>
        <h3 className={cls.h3}>濃度不明</h3>
        <p className={cls.body}>有害物の種類・濃度が不明な環境では、ろ過式で対応できるか判断できません。まず測定・評価を行い、方式を決めます。濃度不明のままろ過式を推奨してはいけません。</p>
        <h3 className={cls.h3}>火山ガス避難</h3>
        <p className={cls.body}>シゲマツ EM-VG15は火山ガス用の避難マスクで、日常の粉じん作業用の防じんマスクではありません。用途を分けて管理し、日常作業に流用しないでください。</p>
        <CardGrid>
          <ProductCard p={P_EMVG15} />
        </CardGrid>

        {/* ===== H2-17 ===== */}
        <h2 id="shippai" className={cls.h2}>よくある失敗</h2>
        <p className={cls.body}>粉じん対策で起きやすい失敗を挙げます。当てはまるものは順に見直してください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "集塵機があるからとマスク不要と判断した",
            "集塵機と局所排気装置を混同した",
            "空気清浄機で発生源対策を代用した",
            "フードが発生源から遠い",
            "作業者が気流を遮っている",
            "風量・静圧を確認していない",
            "フィルタが目詰まりしている",
            "床の堆積粉じんが再飛散している",
            "一般マスクを防じんマスク代わりに使った",
            "DS2を万能と考えた",
            "面体のサイズを確認していない",
            "ひげで密着不良のまま使った",
            "フィットテストをしていない",
            "フィルタ交換基準がない",
            "面体だけ購入して使えると思った",
            "フィルタと吸収缶を混同した",
            "本体に対応しない面体を発注した",
            "バッテリー・充電器の型式を取り違えた",
            "シフト時間に対する稼働時間を計算していない",
            "酸素欠乏のおそれがある場所でPAPRを使った",
            "汚染した保護具を未洗浄で収納した",
            "220V品と380V品を取り違えて発注した",
            "防爆条件を確認していない",
            "火山ガス用避難マスクを日常作業に使った",
            "国家検定・現行型式を確認していない",
            "商品購入だけで法令対応が完了したと考えた",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-red-500">✕</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-18 ===== */}
        <h2 id="checklist" className={cls.h2}>法人向けチェックリスト</h2>
        <p className={cls.body}>複数拠点で保護具・集塵対策を標準化する際のチェックリストです。導入前・運用中の確認に使ってください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "適用法令とリスクアセスメントで要否・区分を判断している",
            "発生抑制・発生源捕集・拡散防止・保護具の4層で設計している",
            "集塵機と局所排気を区別し、フード・風量・ダクトを設計している",
            "空気清浄機を発生源対策の代替にしていない",
            "国家検定合格品を選定している",
            "要求防護係数に対し十分な指定防護係数の区分・方式を選んでいる",
            "DS2・RL3・PAPRを作業条件で使い分けている",
            "P-PAPRとG-PAPRを用途で区別している",
            "PAPRの本体・ろ過材/吸収缶・面体・電源の適合を確認している",
            "バッテリーと充電器の型式・稼働時間を確認している",
            "面体形のフィットテスト（年1回以内）を実施・記録している",
            "粉じん保護具着用管理責任者を選任している",
            "ろ過材・吸収缶の交換基準と記録がある",
            "使用後の清掃・乾燥・分離保管を運用している",
            "集塵機の風量低下・フィルタ交換を記録している",
            "DET200など電源電圧（220V/380V）を発注前に確認している",
            "酸素欠乏・濃度不明・有害ガス環境でろ過式を使わない基準がある",
            "避難用マスクと日常作業用を分けて管理している",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-emerald-600">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-19 FAQ ===== */}
        <h2 id="faq" className={cls.h2}>FAQ（よくある質問）</h2>
        <div className="my-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-md border border-gray-200 p-4">
              <p className={cls.faqQ}>Q. {f.q}</p>
              <p className="text-sm leading-relaxed text-gray-800">A. {f.a}</p>
            </div>
          ))}
        </div>

        {/* ===== H2-20 まとめ ===== */}
        <h2 id="matome" className={cls.h2}>まとめ｜発生源対策と呼吸用保護具を組み合わせる</h2>
        <p className={cls.body}>「集塵機があれば防じんマスクはいらない」は、一律には成り立ちません。集塵機は発生源対策、防じんマスク・PAPRは残るばく露からの個人保護で、役割が異なるからです。適用法令とリスクアセスメントに基づき、発生抑制・発生源捕集・拡散防止・呼吸用保護具の4層を組み合わせ、集塵効果を確認したうえで残るばく露に国家検定合格の保護具を合わせます。マスクはDS2・RL3・PAPRを作業条件で選び、PAPRは本体・ろ過材/吸収缶・面体・電源を正しく組み合わせます。酸素欠乏・濃度不明・有害ガス環境ではろ過式を使いません。フィット・点検・交換・清掃・保管まで管理し、対策後の再評価まで行って初めて、粉じん対策は機能します。</p>
        <p className={cls.body}>
          あわせて読みたい：
          <Link href="/articles/chemical-protective-clothing-selection" className="font-bold text-gray-900 underline">
            化学防護服の選び方（防護服・手袋・マスクの組み合わせ）
          </Link>
        </p>
        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a href="#shujinki" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">作業別に集塵機を比較する →</a>
          <a href="#mask-hikaku" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">DS2・RL3・PAPRを比較する →</a>
        </div>

      </main>
      <SiteFooter />
    </>
  );
}