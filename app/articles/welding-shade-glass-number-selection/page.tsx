import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "welding-shade-glass-number-selection";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/welding-shade-glass-number-selection-hero.jpg`,
  shade: `${ARTICLE_IMG}/welding-shade-number-density-comparison.jpg`,
  machine: `${ARTICLE_IMG}/welding-machine-current-method-check.jpg`,
  faces: `${ARTICLE_IMG}/welding-face-shield-three-types.jpg`,
  layers: `${ARTICLE_IMG}/welding-shade-plain-glass-layers.jpg`,
  bystander: `${ARTICLE_IMG}/welding-bystander-shade-curtain-protection.jpg`,
  ppe: `${ARTICLE_IMG}/welding-ppe-gloves-rod-gauge.jpg`,
};

export const metadata: Metadata = {
  title: "溶接の遮光ガラスは何番？#7〜#13の選び方と電流別の目安｜作業用品ナビ",
  description:
    "溶接の遮光ガラスは何番を使えばよいかを冒頭で即答。#7〜#13を溶接方法・電流別に比較し、遮光ガラスと素ガラスの違い、溶接面のタイプ、交換の目安、周辺作業者の遮光まで解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "溶接の遮光ガラスは何番？#7〜#13の選び方と電流別の目安",
    description:
      "溶接の遮光ガラスは何番を使えばよいかを冒頭で即答。#7〜#13を溶接方法・電流別に比較し、遮光ガラスと素ガラスの違い、溶接面のタイプ、交換の目安、周辺作業者の遮光まで解説します。",
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
// 楽天 crecote-shop：slugは末尾スラッシュ込みで渡す（? の前に必ずスラッシュ）
const R = (slug: string) => buildUrl(`https://item.rakuten.co.jp/crecote-shop/${slug}`, UTM);
const IMG_BASE = "/products/";
const productImg = (f: string) => `${IMG_BASE}${f}`;
// ---- 商品マスタ（品名・仕様は正式情報で要確認。価格は固定表示しない）----
type P = {
  code: string; name: string; short: string; img: string; url: string;
  badge: string; use: string; solves: string; check: string;
};
const P_GC7: P = { code: "GC-7", name: "TRUSCO 遮光ガラス ♯7 GC-7（1Pk＝20枚入）", short: "遮光ガラス #7", img: "ta007745-gc7.jpg", url: R("ta007745-gc7/"), badge: "遮光度 #7", use: "低電流のアーク・軽作業向けの明るめ", solves: "薄板・低電流で#9以上が暗すぎるとき", check: "溶接方法と電流に対して番号が低すぎないか" };
const P_GC8: P = { code: "GC-8", name: "TRUSCO 遮光ガラス ♯8 GC-8（1Pk＝20枚入）", short: "遮光ガラス #8", img: "ta007746-gc8.jpg", url: R("ta007746-gc8/"), badge: "遮光度 #8", use: "低〜中電流の入口となる明るさ", solves: "#7では明るすぎるが#9では暗いと感じるとき", check: "使用電流の下限側かどうか" };
const P_GC9: P = { code: "GC-9", name: "TRUSCO 遮光ガラス ♯9 GC-9（1Pk＝20枚入）", short: "遮光ガラス #9", img: "ta007749-gc9.jpg", url: R("ta007749-gc9/"), badge: "遮光度 #9", use: "被覆アーク中電流帯の下限側", solves: "75〜200A帯で明るさを確保したいとき", check: "電流が上がると番号を上げる余地があるか" };
const P_GC10: P = { code: "GC-10", name: "TRUSCO 遮光ガラス ♯10 GC-10（1Pk＝20枚入）", short: "遮光ガラス #10", img: "ta007731-gc10.jpg", url: R("ta007731-gc10/"), badge: "遮光度 #10", use: "中電流帯の中心的な番号", solves: "「一律#11」で暗すぎるが#9では明るいとき", check: "作業照明と電流のバランス" };
const P_GC11: P = { code: "GC", name: "TRUSCO 遮光ガラス ＃11 GC（1Pk＝20枚入）", short: "遮光ガラス #11", img: "ta007730-gc.jpg", url: R("ta007730-gc/"), badge: "遮光度 #11", use: "被覆アーク中電流帯で広く使われる番号", solves: "標準的な中電流アークの目の負担軽減", check: "電流・照明によっては#10や#12が適する場合" };
const P_GC12: P = { code: "GC-12", name: "TRUSCO 遮光ガラス ♯12 GC-12（1Pk＝20枚入）", short: "遮光ガラス #12", img: "ta007735-gc12.jpg", url: R("ta007735-gc12/"), badge: "遮光度 #12", use: "高電流帯・強いアーク光向け", solves: "200A超などで#11が明るすぎるとき", check: "電流域が高番号を要求しているか" };
const P_GC13: P = { code: "GC-13", name: "TRUSCO 遮光ガラス ♯13 GC-13（1Pk＝20枚入）", short: "遮光ガラス #13", img: "ta007739-gc13.jpg", url: R("ta007739-gc13/"), badge: "遮光度 #13", use: "大電流の被覆アーク・強光作業向け", solves: "高電流で目の痛みや疲れが強いとき", check: "視界が確保できる範囲で必要遮光度を満たすか" };

const P_HS: P = { code: "HS", name: "TRUSCO 溶接用手持面 HS", short: "手持面 HS", img: "ta008789-hs.jpg", url: R("ta008789-hs/"), badge: "手持ちタイプ", use: "片手で面を保持して使うスタンダードな手持面", solves: "短時間・段取り確認・断続作業", check: "対応プレートサイズと遮光ガラス・素ガラスの付属有無" };
const P_TPWK: P = { code: "TPW-K", name: "TRUSCO 溶接面 プラスチック製 直かぶりタイプ TPW-K", short: "直かぶり面 TPW-K", img: "ta017612-tpwk.jpg", url: R("ta017612-tpwk/"), badge: "直かぶりタイプ", use: "頭部に直接かぶり両手を空けられる", solves: "両手作業・連続作業で手がふさがるのを避けたいとき", check: "頭囲調整範囲・重量・プレートサイズ" };
const P_TPWH: P = { code: "TPW-H", name: "TRUSCO 溶接面 プラスチック製 ヘルメット取付タイプ TPW-H", short: "ヘルメット取付面 TPW-H", img: "ta017611-tpwh.jpg", url: R("ta017611-tpwh/"), badge: "ヘルメット取付タイプ", use: "保護帽に取り付けて跳ね上げ式で使う", solves: "頭部保護と溶接遮光を両立したい建設・設備現場", check: "手持ちの保護帽への適合（アダプタ要否）" };

const P_GT: P = { code: "GT", name: "TRUSCO 溶接用素ガラス GT（1Pk＝100枚入）", short: "素ガラス GT", img: "ta008111-gt.jpg", url: R("ta008111-gt/"), badge: "素ガラス（透明・遮光用ではありません）", use: "遮光ガラスの外側でスパッタ・傷から守る保護板", solves: "遮光ガラスの寿命を延ばし交換コストを抑えたいとき", check: "溶接面・遮光ガラスに合うサイズかどうか" };
const P_GS: P = { code: "GS-70W-14", name: "TRUSCO 二眼型遮光グラス ガス溶接用 JISプラスチック#1.4 GS-70W-14", short: "遮光グラス #1.4 GS-70W-14", img: "ta008101-gs70w14.jpg", url: R("ta008101-gs70w14/"), badge: "周辺作業者向け・アーク溶接不可", use: "ガス溶接や散乱光・側射光を受ける周辺作業者向けのめがね型", solves: "近くで作業・見学する人の目をまぶしさから守りたいとき", check: "アーク溶接作業者本人の遮光には使えない点" };

const P_MT: P = { code: "MT-107D-5P", name: "ミドリ安全 溶接用 牛革手袋 MT-107D-5P", short: "溶接用牛革手袋 MT-107D-5P", img: "ta011234-mt107d5p.jpg", url: R("ta011234-mt107d5p/"), badge: "溶接用革手袋", use: "スパッタ・熱・スラグから手を守る溶接用牛革手袋", solves: "手指のやけど・火傷リスクを下げたいとき", check: "サイズ・入数・使用温度域" };

const P_TSS265: P = { code: "TSS308-265", name: "TRUSCO ステンレス用溶接棒 心線径2.6mm 棒長300mm TSS308-265", short: "ステンレス用 2.6mm", img: "ta018702-tss308265.jpg", url: R("ta018702-tss308265/"), badge: "ステンレス用 φ2.6", use: "ステンレス（SUS）の被覆アーク溶接向け", solves: "薄めの母材・低めの電流に合わせたいとき", check: "母材の材質・板厚・適正電流（要確認）" };
const P_TSS325: P = { code: "TSS308-325", name: "TRUSCO ステンレス用溶接棒 心線径3.2mm 棒長350mm TSS308-325", short: "ステンレス用 3.2mm", img: "ta018703-tss308325.jpg", url: R("ta018703-tss308325/"), badge: "ステンレス用 φ3.2", use: "ステンレスの中程度以上の板厚向け", solves: "3.2mm径で能率を上げたいとき", check: "板厚と適正電流（要確認）" };
const P_TSC264: P = { code: "TSC1-264", name: "TRUSCO 鋳物用溶接棒 心線径2.6mm 棒長300mm TSC1-264", short: "鋳物用 2.6mm", img: "ta018255-tsc1264.jpg", url: R("ta018255-tsc1264/"), badge: "鋳物用 φ2.6", use: "鋳鉄（鋳物）の補修溶接向け", solves: "鋳物の割れ・欠け補修を薄径で行いたいとき", check: "母材が鋳鉄かどうか・予熱の要否（要確認）" };
const P_TSC324: P = { code: "TSC1-324", name: "TRUSCO 鋳物用溶接棒 心線径3.2mm 棒長350mm TSC1-324", short: "鋳物用 3.2mm", img: "ta018257-tsc1324.jpg", url: R("ta018257-tsc1324/"), badge: "鋳物用 φ3.2", use: "鋳鉄の厚めの補修向け", solves: "3.2mm径で肉盛りを行いたいとき", check: "板厚・適正電流・予熱条件（要確認）" };

const P_TWG1: P = { code: "TWG-1", name: "TRUSCO 溶接ゲージ（寸法測定精度±0.4）TWG-1", short: "溶接ゲージ TWG-1", img: "ta019212-twg1.jpg", url: R("ta019212-twg1/"), badge: "溶接ゲージ（高精度側）", use: "余盛・脚長・角度などをより高精度に測る", solves: "検査基準がシビアな溶接部の寸法確認", check: "正式品番と測定範囲（要確認）" };
const P_TWGU: P = { code: "TWGU-7M", name: "TRUSCO 溶接ゲージ（寸法測定精度±0.6mm）TWGU-7M", short: "溶接ゲージ TWGU-7M", img: "ta019218-twgu7m.jpg", url: R("ta019218-twgu7m/"), badge: "溶接ゲージ（多用途）", use: "現場での余盛・脚長・アンダーカット確認", solves: "日常点検で手早く寸法を確認したいとき", check: "正式品番と対応項目（要確認）" };

const P_IW40: P = { code: "IW40DOBU", name: "ニッサチェイン 鉄ドブメッキ溶接リンクチェイン 4mm×30m IW40DOBU", short: "溶接リンクチェイン 4mm", img: "ta065137-iw40dobu.jpg", url: R("ta065137-iw40dobu/"), badge: "関連部材", use: "溶接加工用のリンクチェイン", solves: "溶接製作物の部材として", check: "用途・線径・材質" };
const P_TKY: P = { code: "TKY450S", name: "TRUSCO 丸棒貫抜 溶接用・ステンレス製 450mm TKY450S", short: "丸棒貫抜 450mm", img: "ta064239-tky450s.jpg", url: R("ta064239-tky450s/"), badge: "関連部材", use: "溶接用のステンレス製丸棒貫抜", solves: "扉・建具などの溶接部材として", check: "寸法・材質" };
const P_SL20: P = { code: "SL20SHG", name: "ニッサチェイン SUS316 リンクチェイン（未溶接）30M SL20SHG", short: "SUS316チェイン（未溶接）", img: "ta063834-sl20shg.jpg", url: R("ta063834-sl20shg/"), badge: "関連部材", use: "未溶接のSUS316リンクチェイン", solves: "耐食部材として溶接加工に使う", check: "未溶接品である点・線径" };

// ---- 構造化データ用 FAQ（画面表示と共通ソース）----
const faqs: { q: string; a: string }[] = [
  { q: "溶接の遮光ガラスは何番を使えばよいですか？", a: "溶接方法と電流値で決めます。被覆アーク溶接で電流75〜200Aなら遮光度番号9〜11が目安とされます（溶接情報センター）。一律「#11」で決めず、JIS T 8141:2026の最新使用標準と溶接機・面のメーカー指示、現場の照明条件を合わせて選定してください。" },
  { q: "遮光度番号が大きいほど何が変わりますか？", a: "番号が大きいほど暗く（遮光度が高く）なります。遮光度番号は1.2〜16の19段階で、番号が上がるほど視感透過率が下がります。強いアーク光ほど大きい番号が必要になります。" },
  { q: "家庭用溶接機では何番を選べばよいですか？", a: "家庭用でも「番号は電流で選ぶ」原則は同じです。低電流機でも必要な遮光度を下回らないよう、機器の取扱説明書の指定番号を確認してください。明るく見えるからと番号を下げないことが大切です。" },
  { q: "#10と#11はどう違いますか？", a: "#11の方がわずかに暗くなります。中電流帯では両方が候補になり、電流がやや高め・作業照明が明るい環境では#11、電流が低め・視認性を確保したい場合は#10が選ばれることがあります。差は連続的で、必要遮光度を満たす範囲で見やすい方を選びます。" },
  { q: "#11と#12はどう違いますか？", a: "#12の方が暗く、より強いアーク光（高電流帯）向けです。電流が上がって#11では目の負担が強い場合に#12を検討します。逆に低い電流で#12にすると暗すぎて視界が悪くなります。" },
  { q: "遮光ガラスが暗すぎて見えないときは番号を下げてよいですか？", a: "見えにくさだけを理由に必要遮光度を下回る番号へ下げてはいけません。まず作業照明の追加、ガラスの汚れ・スパッタ除去、素ガラスの交換で視認性を改善します。それでも合わない場合のみ、必要遮光度を満たす範囲で調整します。" },
  { q: "素ガラスとは何ですか？", a: "素ガラスは透明な保護板で、遮光ガラスの外側に置いてスパッタや傷から遮光ガラスを守る消耗部品です。遮光機能はありません。GTは1箱100枚入で、こまめに交換して遮光ガラスの寿命を延ばす使い方をします。" },
  { q: "素ガラスだけで溶接してもよいですか？", a: "できません。素ガラスは透明で有害光線を遮る遮光度がないため、素ガラス単体でアーク光を見ると目を傷めます。必ず適切な遮光度番号の遮光ガラスと組み合わせて使用します。" },
  { q: "溶接面を買えば遮光ガラスは付属しますか？", a: "面本体と遮光ガラス・素ガラスが別売の場合があります。購入前に付属の有無と、対応するプレートサイズを必ず確認してください。付属しない場合は番号に合う遮光ガラスと素ガラスを別途そろえます。" },
  { q: "遮光ガラスのサイズはどう確認しますか？", a: "溶接面ごとに取り付けられるプレートの寸法が決まっています。面の対応プレートサイズと、遮光ガラス・素ガラスの寸法が合うかを商品ページとメーカー情報で確認します。サイズが合わないと固定できず隙間から光が漏れます。" },
  { q: "手持面と直かぶり面はどう使い分けますか？", a: "短時間・段取り確認や断続作業なら手持面（HS）、両手を使う連続作業なら直かぶり面（TPW-K）が向きます。手持面は片手がふさがる一方で着脱が速く、直かぶり面は両手が空くぶん装着したままの作業に適します。" },
  { q: "ヘルメット取付タイプはどんなときに使いますか？", a: "保護帽の着用が必要な建設・設備現場で、頭部保護と溶接遮光を両立したいときに使います。TPW-Hは保護帽に取り付ける形式のため、手持ちの保護帽に適合するか（アダプタの要否）を確認してください。" },
  { q: "遮光ガラス・素ガラスの交換時期の目安は？", a: "素ガラスはスパッタ付着・傷・曇りで視界が落ちたら交換、遮光ガラスはひび・欠け・割れ・固定不良があれば直ちに交換します。透過光量が変わると目の負担や視認性に影響するため、始業前点検で状態を確認します。" },
  { q: "ガス溶接・切断ではアーク溶接と同じ番号でよいですか？", a: "ガス溶接・切断はアークより光が弱く、一般に低めの番号が使われます。ただし作業内容で必要遮光度は変わるため、JISの使用標準と機器の指示で確認してください。アーク用の番号をそのまま流用しないようにします。" },
  { q: "#1.4のグラスはアーク溶接に使えますか？", a: "使えません。#1.4のGS-70W-14は散乱光・側射光を受ける周辺作業者やガス溶接向けで、アーク溶接作業者本人の遮光には遮光度が不足します。アーク光を直接見る作業者は溶接面＋適切な遮光ガラスを使います。" },
  { q: "周辺の作業者や見学者にも保護は必要ですか？", a: "必要です。アーク溶接では側射光・散乱光でも目を傷めることがあり、周辺作業者には遮光度1.2〜3程度のめがね型（GS-70W-14など）や遮光幕・衝立での区画が有効です。作業者本人の面とは役割が異なります。" },
  { q: "遮光ガラスを2枚重ねて使ってもよいですか？", a: "番号の大きいフィルタを、より小さい番号のフィルタを組み合わせて相当させる考え方は規格でも触れられていますが、換算や組み合わせには決まりがあります。自己流で重ねず、メーカー指定とJISの使用標準に従ってください。" },
  { q: "溶接面だけで全身を保護できますか？", a: "できません。溶接面は主に目と顔の遮光・保護具です。やけど対策の革手袋・作業衣、腕や足の保護、溶接ヒューム対策の呼吸用保護具などと併用してはじめて作業全体の安全対策になります。" },
  { q: "溶接棒の径はどう選びますか？", a: "母材の材質と板厚、適正電流に合わせて選びます。薄めの母材や低電流なら2.6mm、厚めなら3.2mmが目安ですが、正確な板厚・電流範囲は製品情報で確認してください。母材（ステンレス・鋳物など）に合った種類を選ぶことも重要です。" },
  { q: "溶接ゲージは何のために使いますか？", a: "溶接後に余盛・脚長・角度・アンダーカットなどの寸法を確認し、仕上がりが基準を満たすか点検するために使います。作業後の品質確認を標準フローに組み込むと、手戻りや不良の見逃しを減らせます。" },
];

// ---- 構造化データ ----
const PAGE_URL = `${SITE_URL}/articles/${SLUG}`;
const HOME_URL = `${SITE_URL}/`;
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "溶接の遮光ガラスは何番？電流別の選び方と溶接面・素ガラスの違い",
  description:
    "溶接の遮光ガラスは何番かを冒頭で即答。#7〜#13を溶接方法・電流別に比較し、溶接面・素ガラス・交換の目安・周辺作業者の遮光まで解説。",
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: { "@type": "Organization", name: "グリーンクロスホールディングス" },
  mainEntityOfPage: PAGE_URL,
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: HOME_URL },
    { "@type": "ListItem", position: 2, name: "選び方ガイド", item: `${HOME_URL}articles` },
    { "@type": "ListItem", position: 3, name: "溶接の遮光ガラスは何番？", item: PAGE_URL },
  ],
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ---- 汎用コンポーネント ----
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
        {...(external
          ? { rel: "nofollow sponsored noopener", target: "_blank" }
          : {})}
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
            <dt className="inline font-bold">用途：</dt>
            <dd className="inline">{p.use}</dd>
          </div>
          <div>
            <dt className="inline font-bold">こんな悩みに：</dt>
            <dd className="inline">{p.solves}</dd>
          </div>
          <div>
            <dt className="inline font-bold">購入前確認：</dt>
            <dd className="inline">{p.check}</dd>
          </div>
        </dl>
        <span className="mt-auto inline-block rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-bold text-white sm:text-sm">
          商品を見る
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
function MiniCard({ p }: { p: P }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="flex items-center gap-3 rounded-xl border-2 border-gray-200 bg-white p-3 shadow-sm transition hover:border-gray-900 hover:shadow-md"
    >
      <img
        src={productImg(p.img)}
        alt={`${p.name}の商品画像`}
        className="h-16 w-16 flex-none object-contain"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="truncate text-xs font-bold text-gray-900 sm:text-sm">{p.short}</p>
        <span className="text-xs font-bold text-gray-700 underline">商品を見る →</span>
      </div>
    </a>
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
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>選び方ガイド</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">溶接の遮光ガラスは何番？</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          溶接の遮光ガラスは何番？電流別の選び方と溶接面・素ガラスの違い
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月17日／約18分で読めます
        </p>

        <Figure src={IMG.hero} priority alt="工場で溶接作業者が使用電流に合わせて遮光ガラスの遮光度番号を確認している様子" caption="遮光ガラスの番号は「見やすさ」ではなく溶接方法と電流で選ぶ" />

        <AnswerBox>
          <p>
            <strong>溶接の遮光ガラスは、溶接方法と電流値で番号を選びます。</strong>
            被覆アーク溶接で電流75〜200Aなら遮光度番号9〜11が目安とされます（溶接情報センター）。数字が大きいほど暗くなり、強いアーク光ほど大きい番号が必要です。
            一律で「#11」と決めるものではなく、電流が低ければ#9前後、高ければ#12〜13が候補になります。
          </p>
          <p>
            透明な<strong>素ガラス（GT）は遮光用ではなく</strong>、遮光ガラスをスパッタや傷から守る保護板です。素ガラスだけでアーク光を見てはいけません。
          </p>
          <p>
            購入前に、<strong>面本体と遮光ガラス・素ガラスが別売かどうか</strong>、対応プレートサイズ、そして<strong>JIS T 8141:2026の最新使用標準</strong>とメーカー指示を必ず確認してください。
          </p>
        </AnswerBox>

        <p className={cls.body}>
          まずは「使用電流に合う遮光ガラス」を確認できるよう、代表的な番号と溶接面・素ガラスを並べます。番号の選び方は次章以降で電流・溶接方法別に詳しく解説します。
        </p>

        <CardGrid>
          <ProductCard p={P_GC9} priority />
          <ProductCard p={P_GC10} priority />
          <ProductCard p={P_GC11} priority />
          <ProductCard p={P_GC12} priority />
          <ProductCard p={P_HS} priority />
          <ProductCard p={P_TPWK} priority />
          <ProductCard p={P_GT} priority />
        </CardGrid>

        <CTA label="使用電流に合う遮光ガラスを確認する" href="#hikaku" />

        {/* ===== H2-1 ===== */}
        <h2 id="what-number" className={cls.h2}>
          溶接の遮光ガラスは何番を選ぶ？
        </h2>
        <p className={cls.body}>
          結論は「溶接方法と電流値で決める」です。遮光ガラスの明るさは遮光度番号で表され、番号が大きいほど暗くなります。アーク光の強さは溶接方法と電流でおおよそ決まるため、この2つを起点に番号を絞り込みます。
        </p>

        <h3 className={cls.h3}>溶接方法と電流値で決める</h3>
        <p className={cls.body}>
          同じ「アーク溶接」でも、被覆アーク・半自動（マグ／ミグ）・TIGでアーク光の強さや紫外線量が異なります。さらに同じ溶接方法でも電流が上がるほど光は強くなります。溶接情報センターによれば、被覆アーク溶接で電流75〜200Aの場合の遮光度番号は9〜11の範囲が目安とされ、この範囲なら目に有害な放射を受けないと説明されています。まず「どの溶接方法か」「何アンペアで使うか」を確認し、その組み合わせに合う番号を選びます。
        </p>

        <h3 className={cls.h3}>数字が大きいほど暗い</h3>
        <p className={cls.body}>
          遮光度番号は1.2〜16の19段階で、番号が大きいほど遮光度が高く（暗く）なります。強い光の作業ほど大きな番号が必要で、弱い光に大きすぎる番号を使うと視界が悪くなります。つまり「暗ければ安全」でも「明るければ作業しやすい」でもなく、光の強さに見合った番号を選ぶことが要点です。
        </p>
        <Figure src={IMG.shade} alt="遮光度番号#7から#13までの遮光ガラスを並べ、番号が大きいほど暗くなる濃さの違いを示した比較" caption="番号が大きいほど暗くなる（#7〜#13の濃さの違い）" />

        <h3 className={cls.h3}>見やすさだけで下げない</h3>
        <p className={cls.body}>
          「暗くて見えにくいから番号を下げる」は危険な判断です。必要な遮光度を下回ると、紫外線・赤外線・強い可視光で電気性眼炎（いわゆる「目焼け」）ややけどのリスクが高まります。見えにくいと感じたら、まず作業照明を足す、素ガラスやガラスの汚れ・スパッタを取り除く、といった視認性の改善を先に行います。
        </p>
        <Caution>
          <p>見えにくさを理由に、必要遮光度を下回る番号へ下げないでください。番号を下げる前に、照明・清掃・素ガラス交換で視認性を改善します。アーク光を裸眼で直接見ないでください。</p>
        </Caution>

        <h3 className={cls.h3}>最新JISとメーカー指示を確認</h3>
        <p className={cls.body}>
          遮光度の基準はJIS T 8141「遮光保護具」に定められています。同規格は令和8年（2026年）3月25日に改正されており、番号ごとの使用標準は最新版で確認する必要があります。ネット上に残る旧版の表をそのまま使わず、JIS T 8141:2026の使用標準と、溶接機・溶接面のメーカーが指定する番号を突き合わせて選定してください。なお、JIS T 8141は遮光ガラス（フィルタ）を規定する規格で、溶接面の「面体」自体は溶接用保護面の関連規格で扱われる点も押さえておくと選定と点検の整理がしやすくなります。
        </p>

        {/* ===== H2-2 ===== */}
        <h2 id="hikaku" className={cls.h2}>
          遮光ガラス#7〜#13の違い
        </h2>
        <p className={cls.body}>
          #7から#13は「色違い」ではなく「暗さ（遮光度）の違い」です。ここが最も間違えやすい点で、見た目の色ではなく番号で管理します。まず一覧で違いを俯瞰し、各行から該当商品へ移動できるようにしています。
        </p>

        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr>
                <Th>遮光度</Th><Th>明るさ</Th><Th>被覆アーク</Th><Th>ガスシールド（半自動）</Th><Th>TIG</Th><Th>主な注意</Th><Th>商品</Th>
              </tr>
            </thead>
            <tbody>
              <tr><Td>#7</Td><Td>明るい</Td><Td>低電流の下限側の目安</Td><Td>低電流の目安</Td><Td>低電流の目安</Td><Td>電流が上がると不足しやすい</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC7.url} rel="nofollow sponsored noopener" target="_blank">GC-7</a></Td></tr>
              <tr><Td>#8</Td><Td>やや明るい</Td><Td>低〜中電流の入口</Td><Td>低〜中電流</Td><Td>低〜中電流</Td><Td>中電流域では番号を上げる</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC8.url} rel="nofollow sponsored noopener" target="_blank">GC-8</a></Td></tr>
              <tr><Td>#9</Td><Td>標準寄り</Td><Td>75〜200A帯の下限側</Td><Td>中電流</Td><Td>中電流</Td><Td>電流上昇時は#10〜11へ</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC9.url} rel="nofollow sponsored noopener" target="_blank">GC-9</a></Td></tr>
              <tr><Td>#10</Td><Td>やや暗い</Td><Td>中電流の中心</Td><Td>中電流</Td><Td>中電流</Td><Td>照明と電流のバランスで選ぶ</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC10.url} rel="nofollow sponsored noopener" target="_blank">GC-10</a></Td></tr>
              <tr><Td>#11</Td><Td>暗い</Td><Td>中電流帯で広く使用</Td><Td>中〜高電流</Td><Td>中〜高電流</Td><Td>「一律#11」で決めない</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC11.url} rel="nofollow sponsored noopener" target="_blank">GC（#11）</a></Td></tr>
              <tr><Td>#12</Td><Td>より暗い</Td><Td>高電流帯</Td><Td>高電流</Td><Td>高電流</Td><Td>低電流では暗すぎる</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC12.url} rel="nofollow sponsored noopener" target="_blank">GC-12</a></Td></tr>
              <tr><Td>#13</Td><Td>暗い（強光向け）</Td><Td>大電流・強光</Td><Td>大電流</Td><Td>大電流</Td><Td>視界確保と両立を確認</Td><Td><a className="font-bold text-gray-900 underline" href={P_GC13.url} rel="nofollow sponsored noopener" target="_blank">GC-13</a></Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">
          ※各セルは一般的な目安です。番号ごとの正確な使用標準はJIS T 8141:2026の最新使用標準と溶接機・面のメーカー指示で確認してください。数字が大きいほど暗くなります。
        </p>

        <h3 className={cls.h3}>#7・#8</h3>
        <p className={cls.body}>
          #7・#8は明るめで、低電流や軽作業向けの入口となる番号です。明るいぶん視界は取りやすい一方、電流が上がると遮光度が不足しやすくなります。低電流だからと安易に選ばず、使用電流の下限側かどうかを確認します。
        </p>
        <h3 className={cls.h3}>#9・#10</h3>
        <p className={cls.body}>
          #9・#10は被覆アークの中電流帯でよく使われる番号です。#9は75〜200A帯の下限側で明るさを確保したいとき、#10はその中心的な選択肢として、電流と作業照明のバランスで選びます。
        </p>
        <h3 className={cls.h3}>#11</h3>
        <p className={cls.body}>
          #11は中電流帯で広く使われますが、「溶接なら#11」という情報だけで決めるのは避けます。同じ被覆アークでも電流が低ければ#9〜10、高ければ#12が適することがあります。#11はあくまで中電流帯の代表的な候補として捉えます。
        </p>
        <h3 className={cls.h3}>#12・#13</h3>
        <p className={cls.body}>
          #12・#13は高〜大電流の強いアーク光向けです。200Aを超える作業などで#11では目の負担が強い場合に検討します。逆に低い電流で使うと暗すぎて視界が悪くなるため、電流域が高番号を要求しているかを確認します。
        </p>

        <CardGrid>
          <ProductCard p={P_GC7} />
          <ProductCard p={P_GC8} />
          <ProductCard p={P_GC9} />
          <ProductCard p={P_GC10} />
          <ProductCard p={P_GC11} />
          <ProductCard p={P_GC12} />
          <ProductCard p={P_GC13} />
        </CardGrid>
        <CTA label="#7〜#13の遮光度を比較する" href="#hayami" />

        {/* ===== H2-3 ===== */}
        <h2 id="hayami" className={cls.h2}>
          溶接方法・電流別の遮光度早見表
        </h2>
        <p className={cls.body}>
          溶接方法ごとに、電流の目安と番号のおおよその範囲を整理します。あくまで一般的な目安で、実際の番号はJIS T 8141:2026の使用標準と機器のメーカー指示で確定してください。
        </p>
        <Figure src={IMG.machine} alt="溶接機の電流調整ダイヤルと被覆アーク・半自動・TIGの溶接方法を対比した現場写真" caption="溶接方法と電流を確認してから番号を絞り込む" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr><Th>溶接方法</Th><Th>電流の目安</Th><Th>遮光度の目安（要確認）</Th><Th>ポイント</Th></tr>
            </thead>
            <tbody>
              <tr><Td>被覆アーク（手棒）</Td><Td>〜75A</Td><Td>#8前後</Td><Td>低電流の下限側。電流上昇で番号を上げる</Td></tr>
              <tr><Td>被覆アーク（手棒）</Td><Td>75〜200A</Td><Td>#9〜#11</Td><Td>溶接情報センターの目安。中電流帯の中心</Td></tr>
              <tr><Td>被覆アーク（手棒）</Td><Td>200A超</Td><Td>#12〜#13</Td><Td>強光。視界確保と両立を確認</Td></tr>
              <tr><Td>半自動・ガスシールド（マグ／ミグ・CO₂）</Td><Td>中〜高電流</Td><Td>#10〜#13（被覆アークよりやや濃いめが目安）</Td><Td>アーク光が強くなりやすい</Td></tr>
              <tr><Td>TIG</Td><Td>低〜中電流</Td><Td>#8〜#12（電流の割に明るく紫外線が強い）</Td><Td>低電流でも番号を下げすぎない</Td></tr>
              <tr><Td>ガス溶接・切断</Td><Td>―</Td><Td>#4〜#7程度（作業で変動）</Td><Td>アークより低め。用途で確認</Td></tr>
              <tr><Td>周辺作業者・散乱光／側射光</Td><Td>―</Td><Td>#1.2〜#3</Td><Td>作業者本人の遮光には不足。GS-70W-14が該当</Td></tr>
            </tbody>
          </table>
        </div>

        <h3 className={cls.h3}>被覆アーク</h3>
        <p className={cls.body}>
          被覆アーク溶接は電流帯が広く、番号もそれに応じて動きます。溶接情報センターの目安では75〜200Aで#9〜11。低電流ではもう少し明るい番号、200A超では#12以上が候補です。使用する電流を先に確認してから番号を選びます。
        </p>
        <h3 className={cls.h3}>半自動・ガスシールド</h3>
        <p className={cls.body}>
          半自動（マグ／ミグ・CO₂）はアークが安定して光量も強くなりやすいため、同程度の電流でも被覆アークよりやや濃い番号が選ばれる傾向があります。連続してアークを見る時間が長い点も考慮します。
        </p>
        <h3 className={cls.h3}>TIG</h3>
        <p className={cls.body}>
          TIGは電流の割にアーク光が明るく紫外線が強いのが特徴です。低電流だからと番号を下げすぎず、作業内容に合わせて選びます。細かい溶融池を見る作業が多いため、視認性と遮光度の両立を意識します。
        </p>
        <h3 className={cls.h3}>ガス溶接・切断</h3>
        <p className={cls.body}>
          ガス溶接・切断はアークより光が弱く、一般に低めの番号が使われます。ただし作業規模や光の強さで必要遮光度は変わるため、アーク用の番号をそのまま流用しないよう注意します。
        </p>
        <h3 className={cls.h3}>その他</h3>
        <p className={cls.body}>
          上記に当てはまらない作業や特殊な機器では、必ずJISの使用標準とメーカー指示を確認します。番号選定に迷う場合は、明るすぎるより「必要遮光度を満たしたうえで見やすい方」を選ぶのが基本です。
        </p>

        {/* ===== H2-4 ===== */}
        <h2 id="mayotta" className={cls.h2}>
          #10・#11・#12で迷ったとき
        </h2>
        <p className={cls.body}>
          中電流帯では#10・#11・#12が隣り合い、どれにするか迷いがちです。差は連続的なので、次の観点で「必要遮光度を満たすうえで見やすい方」を選びます。
        </p>
        <h3 className={cls.h3}>電流</h3>
        <p className={cls.body}>
          まず電流を確認します。電流が高いほど番号を上げます。同じ被覆アークでも下限側なら#10、中心なら#11、高めなら#12という方向で考えると絞りやすくなります。
        </p>
        <h3 className={cls.h3}>溶接方法</h3>
        <p className={cls.body}>
          溶接方法でも光の強さが変わります。半自動やTIGは同じ電流でもアーク光が強く感じられることがあり、被覆アークより一段濃い番号が合う場合があります。
        </p>
        <h3 className={cls.h3}>作業照明</h3>
        <p className={cls.body}>
          作業場が明るいほど、暗い番号でも溶融池を見やすくなります。照明が暗い環境で無理に濃い番号を使うと視界が悪くなるため、番号を下げる前に手元照明の追加を検討します。
        </p>
        <h3 className={cls.h3}>ガラスの汚れ</h3>
        <p className={cls.body}>
          スパッタや曇りで汚れた遮光ガラス・素ガラスは、実際の番号より暗く見えます。「暗い」と感じる原因が汚れのこともあるため、番号を変える前に清掃・素ガラス交換を行います。
        </p>
        <h3 className={cls.h3}>必要性能</h3>
        <p className={cls.body}>
          最終的な判断基準は「必要遮光度を満たしているか」です。見やすさは大切ですが、必要遮光度を下回る選定はしません。迷ったら、必要遮光度を確保したうえで見やすい方を選びます。
        </p>

        {/* ===== H2-5 ===== */}
        <h2 id="too-low-high" className={cls.h2}>
          遮光度が低すぎる・高すぎる場合
        </h2>
        <h3 className={cls.h3}>低すぎる場合</h3>
        <p className={cls.body}>
          遮光度が低すぎると、紫外線・赤外線・強い可視光が十分に遮られず、電気性眼炎や目の疲れ・痛みの原因になります。作業直後は自覚がなくても、数時間後に症状が出ることがあります。番号が電流・溶接方法に対して低くないかを見直します。
        </p>
        <Caution>
          <p>遮光度が低すぎると目を傷めるおそれがあります。「明るくて作業しやすい」を理由に必要遮光度を下回る番号を使わないでください。目に違和感・痛み・充血がある場合は作業を中止し、必要に応じて医療機関を受診してください。</p>
        </Caution>
        <h3 className={cls.h3}>高すぎる場合</h3>
        <p className={cls.body}>
          逆に高すぎると暗くて溶融池が見えづらく、狙いがずれたり無理な姿勢になったりして別のリスクが生まれます。「暗い＝安全」ではありません。必要遮光度を満たす範囲で、視界を確保できる番号を選びます。
        </p>
        <h3 className={cls.h3}>番号を変える前の確認</h3>
        <p className={cls.body}>
          番号を変える前に、作業照明・ガラスの汚れ・素ガラスの状態・電流設定を確認します。多くの「見えにくい」は番号以外が原因です。それでも合わない場合のみ、必要遮光度を満たす範囲で番号を調整します。
        </p>

        {/* ===== H2-6 ===== */}
        <h2 id="auto-shade" className={cls.h2}>
          固定式と自動遮光式の違い
        </h2>
        <p className={cls.body}>
          遮光ガラスには、番号が固定された「固定式」と、アークを検知して瞬時に暗くなる「自動遮光式（液晶）」があります。本記事で扱うGCシリーズなどは固定式の遮光ガラスで、番号を選んで面に取り付けて使います。固定式はシンプルで安価、番号管理がしやすい一方、段取りのたびに面を上げ下げする必要があります。自動遮光式はアーク発生時のみ暗くなるため段取りがしやすい反面、対応する遮光度番号の範囲・切替速度・電源方式などの確認が必要です。どちらも「必要遮光度を満たす番号（または設定範囲）で使う」点は共通です。自動遮光式を検討する場合は、対応番号や規格適合をメーカー情報で確認してください。
        </p>

        {/* ===== H2-7 ===== */}
        <h2 id="men" className={cls.h2}>
          溶接面は手持ち・直かぶり・ヘルメット取付のどれを選ぶ？
        </h2>
        <p className={cls.body}>
          溶接面は「保持のしかた」でタイプが分かれます。作業スタイルに合わせて選び、面本体に合う遮光ガラス・素ガラスを組み合わせます。面の種類と遮光ガラスの番号は別々に決める点に注意してください。
        </p>
        <Figure src={IMG.faces} alt="手持面・直かぶり面・ヘルメット取付面の3タイプの溶接面を並べて比較した現場写真" caption="手持ち・直かぶり・ヘルメット取付を作業スタイルで選ぶ" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr><Th>商品</Th><Th>タイプ</Th><Th>材質</Th><Th>プレートサイズ</Th><Th>プレート付属</Th><Th>重量</Th><Th>向く作業</Th></tr>
            </thead>
            <tbody>
              <tr><Td>HS</Td><Td>手持ち</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>短時間・段取り確認・断続作業</Td></tr>
              <tr><Td>TPW-K</Td><Td>直かぶり</Td><Td>プラスチック製</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>両手を使う連続作業</Td></tr>
              <tr><Td>TPW-H</Td><Td>ヘルメット取付</Td><Td>プラスチック製</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>保護帽着用が必要な建設・設備現場</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">※プレートサイズ・付属の有無・重量は商品ページとメーカー情報で確認してください（推測しない）。</p>

        <h3 className={cls.h3}>HS</h3>
        <p className={cls.body}>
          HSは片手で保持して使う手持面です。着脱が速く、段取り確認や断続的な溶接に向きます。片手がふさがるため、長時間の両手作業には次の直かぶり面が適します。
        </p>
        <h3 className={cls.h3}>TPW-K</h3>
        <p className={cls.body}>
          TPW-Kは頭部に直接かぶる直かぶりタイプで、両手が空くため連続作業に向きます。頭囲調整範囲や重量、対応プレートサイズを確認して選びます。
        </p>
        <h3 className={cls.h3}>TPW-H</h3>
        <p className={cls.body}>
          TPW-Hは保護帽に取り付けるヘルメット取付タイプです。頭部保護と溶接遮光を両立でき、建設・設備現場で使いやすい形式です。手持ちの保護帽に適合するか（アダプタの要否）を確認してください。
        </p>
        <CardGrid>
          <ProductCard p={P_HS} />
          <ProductCard p={P_TPWK} />
          <ProductCard p={P_TPWH} />
        </CardGrid>
        <CTA label="遮光ガラスに対応する溶接面を見る" href="#men" />

        {/* ===== H2-8 ===== */}
        <h2 id="suglass" className={cls.h2}>
          遮光ガラスと素ガラスの違い
        </h2>
        <p className={cls.body}>
          溶接面には「遮光ガラス」と「素ガラス」の2種類の板が入ります。役割がまったく異なるため、混同しないことが重要です。断面のイメージでいうと、アーク側（外側）に透明な素ガラス、目側（内側）に遮光ガラスを配置し、素ガラスが遮光ガラスを守ります。
        </p>
        <Figure src={IMG.layers} alt="溶接面の枠に外側の透明な素ガラスと内側の遮光ガラスを重ねて取り付ける順番を示した断面イメージ" caption="外側に素ガラス、内側に遮光ガラス。素ガラスが遮光ガラスを守る" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr><Th>部品</Th><Th>色</Th><Th>目的</Th><Th>交換理由</Th><Th>単独使用</Th><Th>商品</Th></tr>
            </thead>
            <tbody>
              <tr><Td>遮光ガラス</Td><Td>色つき（番号で濃さが違う）</Td><Td>有害光線を遮り目を守る</Td><Td>ひび・欠け・割れ・固定不良</Td><Td>面に取り付けて使用（素ガラスと併用）</Td><Td><a className="font-bold text-gray-900 underline" href="#hikaku">GC-7〜GC-13</a></Td></tr>
              <tr><Td>素ガラス</Td><Td>透明</Td><Td>スパッタ・傷から遮光ガラスを守る</Td><Td>スパッタ付着・傷・曇り</Td><Td>不可（遮光機能なし）</Td><Td><a className="font-bold text-gray-900 underline" href={P_GT.url} rel="nofollow sponsored noopener" target="_blank">GT</a></Td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={cls.h3}>遮光ガラス</h3>
        <p className={cls.body}>
          遮光ガラスは有害光線を遮る色つきのフィルタで、番号で濃さ（遮光度）が決まります。番号選定はこの遮光ガラスに対して行います。ひび・欠け・割れがあると遮光性能が落ちるため、状態を点検して交換します。
        </p>
        <h3 className={cls.h3}>素ガラス</h3>
        <p className={cls.body}>
          素ガラス（GT）は透明な保護板で、遮光ガラスの外側に置いてスパッタや傷を受け止めます。消耗品として1箱100枚入で用意し、こまめに交換して遮光ガラスの寿命を延ばします。<strong>素ガラスは遮光用ではありません。</strong>
        </p>
        <h3 className={cls.h3}>素ガラスだけで使わない</h3>
        <Caution>
          <p>素ガラスは透明で遮光度がないため、素ガラスだけでアーク光を見ると目を傷めます。必ず適切な番号の遮光ガラスと組み合わせて使用してください。</p>
        </Caution>
        <h3 className={cls.h3}>カバープレート</h3>
        <p className={cls.body}>
          素ガラスは「カバープレート（保護板）」として遮光ガラスを守る役割があります。素ガラスを入れずに遮光ガラスを直接使うと、遮光ガラスにスパッタが付いて早く劣化します。コスト面でも、安価な素ガラスをこまめに替える方が合理的です。
        </p>
        <h3 className={cls.h3}>対応サイズ</h3>
        <p className={cls.body}>
          遮光ガラス・素ガラスは溶接面の対応プレートサイズに合わせて選びます。サイズが合わないと固定できず、隙間から光が漏れて危険です。面・遮光ガラス・素ガラスの寸法が一致するかを購入前に確認します。
        </p>
        <CardGrid>
          <ProductCard p={P_GT} />
        </CardGrid>
        <CTA label="交換用の素ガラスを確認する" href={P_GT.url} />

        {/* ===== H2-9 ===== */}
        <h2 id="tsukekata" className={cls.h2}>
          溶接面へガラスを取り付ける順番
        </h2>
        <p className={cls.body}>
          取り付けの基本は「外側に素ガラス、内側に遮光ガラス」ですが、面の構造で手順は異なります。まず取扱説明書を確認してください。
        </p>
        <h3 className={cls.h3}>説明書</h3>
        <p className={cls.body}>
          面ごとに枠・押さえの構造が異なるため、まず取扱説明書で取り付け方向と手順を確認します。自己流で無理に押し込むと割れや固定不良の原因になります。
        </p>
        <h3 className={cls.h3}>内側・外側</h3>
        <p className={cls.body}>
          アーク側（外側）に透明な素ガラス、目側（内側）に遮光ガラスを配置するのが基本です。素ガラスが手前でスパッタを受け、遮光ガラスを守ります。向きを逆にしないよう注意します。
        </p>
        <h3 className={cls.h3}>固定</h3>
        <p className={cls.body}>
          枠や押さえでガラスを確実に固定します。固定が緩いと作業中にずれ、隙間から光が漏れます。取り付け後に軽く動かして外れないかを確認します。
        </p>
        <h3 className={cls.h3}>隙間</h3>
        <p className={cls.body}>
          ガラスと枠の間に隙間があると、そこから有害光線が漏れます。サイズの合ったガラスを使い、隙間ができていないかを目視で確認します。
        </p>
        <h3 className={cls.h3}>がたつき</h3>
        <p className={cls.body}>
          がたつきがある場合は、サイズ違い・押さえの劣化・取り付け不良が考えられます。がたつきを放置すると割れや光漏れにつながるため、原因を確認してから使用します。
        </p>

        {/* ===== H2-10 ===== */}
        <h2 id="koukan" className={cls.h2}>
          遮光ガラス・素ガラスを交換する目安
        </h2>
        <p className={cls.body}>
          遮光ガラス・素ガラスは消耗します。始業前点検で状態を確認し、次のサインがあれば交換します。写真で状態を記録し、番号別にストックしておくと交換判断がしやすくなります。
        </p>
        <h3 className={cls.h3}>スパッタ</h3>
        <p className={cls.body}>
          素ガラス表面にスパッタが溶着すると視界が悪くなります。まず素ガラスを交換します（遮光ガラスまで達していないか確認）。素ガラスをこまめに替えることで遮光ガラスを長持ちさせられます。
        </p>
        <h3 className={cls.h3}>傷</h3>
        <p className={cls.body}>
          細かい傷が増えると光が乱反射して見えづらくなります。傷で視認性が落ちた素ガラスは交換します。遮光ガラスに深い傷がある場合も交換対象です。
        </p>
        <h3 className={cls.h3}>割れ</h3>
        <Caution>
          <p>遮光ガラスにひび・欠け・割れがある場合は、遮光性能が損なわれるおそれがあるため直ちに交換してください。割れたまま使用しないでください。</p>
        </Caution>
        <h3 className={cls.h3}>曇り</h3>
        <p className={cls.body}>
          曇りやくすみは、清掃で戻らなければ交換します。曇ったガラスは実際の番号より暗く見え、「暗い」と誤認して番号を下げる原因にもなります。
        </p>
        <h3 className={cls.h3}>固定不良</h3>
        <p className={cls.body}>
          押さえの劣化や変形で固定できなくなった場合は、ガラスや押さえ部品を交換します。固定不良は光漏れ・脱落につながるため放置しません。
        </p>

        {/* ===== H2-11 ===== */}
        <h2 id="shuhen" className={cls.h2}>
          周辺作業者・見学者の遮光対策
        </h2>
        <p className={cls.body}>
          遮光対策が必要なのは溶接作業者本人だけではありません。近くで作業・見学する人にも配慮が必要です。
        </p>
        <Figure src={IMG.bystander} alt="溶接作業の周囲を遮光幕で区画し、周辺作業者が遮光めがねを着用している工場の様子" caption="周辺作業者には遮光めがねと遮光幕・衝立で側射光を防ぐ" />
        <h3 className={cls.h3}>側射光</h3>
        <p className={cls.body}>
          アーク溶接では、直接見ていなくても側射光・散乱光で目を傷めることがあります（いわゆる「もらい目」）。溶接情報センターによれば、散乱光・側射光を受ける作業では遮光度番号1.2〜3の範囲が目安とされます。
        </p>
        <h3 className={cls.h3}>作業者用と周辺用</h3>
        <p className={cls.body}>
          作業者本人はアーク光を直接見るため溶接面＋濃い遮光ガラスが必要ですが、周辺作業者は側射光対策のめがね型で対応します。役割と必要遮光度が異なる点を混同しないでください。
        </p>
        <h3 className={cls.h3}>#1.4の位置付け</h3>
        <Caution title="#1.4はアーク溶接作業者用ではありません">
          <p>GS-70W-14（#1.4）は、ガス溶接や散乱光・側射光を受ける周辺作業者向けの遮光グラスです。アーク溶接作業者本人の遮光には遮光度が不足するため、作業者用としては使用しないでください。</p>
        </Caution>
        <h3 className={cls.h3}>遮光幕・衝立</h3>
        <p className={cls.body}>
          恒常的に溶接を行う場所では、遮光幕や衝立でアーク光を区画すると、周辺への側射光を大きく減らせます。人の動線とアークの向きを考えて配置します。
        </p>
        <CardGrid>
          <ProductCard p={P_GS} />
        </CardGrid>
        <CTA label="周辺作業者用の遮光グラスを見る" href={P_GS.url} />

        {/* ===== H2-12 ===== */}
        <h2 id="tebukuro" className={cls.h2}>
          一緒に確認したい溶接保護具
        </h2>
        <p className={cls.body}>
          溶接面は目と顔を守る保護具です。溶接面だけで全身の保護が完了するわけではありません。やけど・ヒューム対策として、次の保護具を併せて確認します。
        </p>
        <Figure src={IMG.ppe} alt="溶接用の牛革手袋・母材別の溶接棒・溶接ゲージを作業台に並べた現場写真" caption="面に加えて革手袋・溶接棒・ゲージまで作業フローで確認する" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr><Th>保護部位</Th><Th>保護具</Th><Th>主なリスク</Th><Th>点検項目</Th><Th>商品</Th></tr>
            </thead>
            <tbody>
              <tr><Td>手</Td><Td>溶接用革手袋</Td><Td>スパッタ・熱によるやけど</Td><Td>穴・焦げ・縫製のほつれ</Td><Td><a className="font-bold text-gray-900 underline" href={P_MT.url} rel="nofollow sponsored noopener" target="_blank">MT-107D-5P</a></Td></tr>
              <tr><Td>体幹</Td><Td>作業衣（難燃性など）</Td><Td>スパッタの飛来・着火</Td><Td>素材・破れ・裾の処理</Td><Td>―（要確認）</Td></tr>
              <tr><Td>腕・足</Td><Td>腕カバー・前掛け・足カバー</Td><Td>飛散スパッタによるやけど</Td><Td>装着範囲・劣化</Td><Td>―（要確認）</Td></tr>
              <tr><Td>呼吸</Td><Td>呼吸用保護具（防じん等）</Td><Td>溶接ヒュームの吸入</Td><Td>規格適合・フィルタ交換時期</Td><Td>―（要確認）</Td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={cls.h3}>革手袋</h3>
        <p className={cls.body}>
          溶接用牛革手袋（MT-107D-5P）はスパッタ・熱・スラグから手を守ります。穴あきや焦げがあると保護性能が落ちるため、点検して交換します。サイズ・入数・使用温度域を確認して選びます。
        </p>
        <h3 className={cls.h3}>作業衣</h3>
        <p className={cls.body}>
          スパッタが着衣に飛ぶため、燃えにくい素材の作業衣が基本です。化繊など溶けやすい素材は避け、袖口・裾を締めて肌の露出を減らします。
        </p>
        <h3 className={cls.h3}>腕・足</h3>
        <p className={cls.body}>
          姿勢や作業内容によっては、腕カバー・前掛け・足カバーで飛散スパッタから守ります。装着範囲が作業に合っているか、劣化していないかを確認します。
        </p>
        <h3 className={cls.h3}>呼吸用保護具</h3>
        <p className={cls.body}>
          溶接ヒュームの吸入対策として、作業に応じた呼吸用保護具を確認します。規格適合やフィルタの交換時期を管理します。溶接ヒューム対策は法令面の要求とも関わるため、自社の作業に合わせて別途確認してください。
        </p>
        <CTA label="溶接用革手袋を確認する" href={P_MT.url} />

        {/* ===== H2-13 ===== */}
        <h2 id="yosetsubo" className={cls.h2}>
          母材と板厚に合う溶接棒
        </h2>
        <p className={cls.body}>
          溶接棒は母材の材質と板厚・電流に合わせて選びます。材質が合わないと溶接部の品質が確保できません。ここではステンレス用と鋳物用を径違いで整理します。正確な電流範囲・板厚は製品情報で確認してください。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr><Th>商品</Th><Th>母材</Th><Th>径</Th><Th>板厚</Th><Th>電流範囲</Th><Th>溶接姿勢</Th><Th>確認事項</Th></tr>
            </thead>
            <tbody>
              <tr><Td>TSS308-265</Td><Td>ステンレス</Td><Td>φ2.6mm（棒長300mm）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>母材の材質・適正電流</Td></tr>
              <tr><Td>TSS308-325</Td><Td>ステンレス</Td><Td>φ3.2mm（棒長350mm）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>板厚・適正電流</Td></tr>
              <tr><Td>TSC1-264</Td><Td>鋳物（鋳鉄）</Td><Td>φ2.6mm（棒長300mm）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>鋳鉄か・予熱の要否</Td></tr>
              <tr><Td>TSC1-324</Td><Td>鋳物（鋳鉄）</Td><Td>φ3.2mm（棒長350mm）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>板厚・予熱条件</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">※板厚・電流範囲・溶接姿勢は製品情報とメーカー資料で確認してください（推測しない）。</p>
        <h3 className={cls.h3}>ステンレス用TSS308</h3>
        <p className={cls.body}>
          TSS308はステンレス（SUS）向けの溶接棒です。母材がステンレスかどうかを確認して選びます。径はφ2.6mm（TSS308-265）とφ3.2mm（TSS308-325）があります。
        </p>
        <h3 className={cls.h3}>鋳物用TSC1</h3>
        <p className={cls.body}>
          TSC1は鋳鉄（鋳物）の補修向けです。鋳物の割れ・欠けの補修などに使います。予熱の要否など鋳物特有の条件を確認してください。径はφ2.6mm（TSC1-264）とφ3.2mm（TSC1-324）があります。
        </p>
        <h3 className={cls.h3}>2.6mmと3.2mm</h3>
        <p className={cls.body}>
          一般に、薄めの母材や低めの電流にはφ2.6mm、厚めの母材や能率を上げたい場合はφ3.2mmが目安です。ただし適正電流は径ごとに異なるため、機器・製品の指定範囲で確認します。
        </p>
        <h3 className={cls.h3}>板厚・電流</h3>
        <p className={cls.body}>
          板厚と電流、径は相互に関係します。薄板に太径・高電流を使うと溶け落ち、厚板に細径・低電流だと溶け込み不足になります。母材・板厚に合う径と電流を製品情報で確認してください。
        </p>
        <CardGrid>
          <ProductCard p={P_TSS265} />
          <ProductCard p={P_TSS325} />
          <ProductCard p={P_TSC264} />
          <ProductCard p={P_TSC324} />
        </CardGrid>
        <CTA label="母材に合う溶接棒を見る" href="#yosetsubo" />

        {/* ===== H2-14 ===== */}
        <h2 id="gauge" className={cls.h2}>
          溶接後は溶接ゲージで確認する
        </h2>
        <p className={cls.body}>
          溶接は「付けて終わり」ではありません。溶接後に溶接ゲージで寸法を確認し、仕上がりが基準を満たすかを点検します。作業後の測定を標準フローに組み込むと、不良の見逃しや手戻りを減らせます。
        </p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead>
              <tr><Th>商品</Th><Th>余盛</Th><Th>脚長</Th><Th>角度</Th><Th>アンダーカット</Th><Th>精度</Th><Th>向く管理</Th></tr>
            </thead>
            <tbody>
              <tr><Td>TWG-1</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>寸法測定精度±0.4</Td><Td>基準がシビアな溶接部の確認</Td></tr>
              <tr><Td>TWGU-7M</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>寸法測定精度±0.6mm</Td><Td>現場での日常点検</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">※各ゲージが測定できる項目・範囲と正式品番は商品ページとメーカー情報で確認してください（商品ページのタイトル表記と型番が一致しない場合があるため要確認）。</p>
        <h3 className={cls.h3}>余盛</h3>
        <p className={cls.body}>余盛（ビードの盛り上がり）が過大・過小でないかを測ります。過大は応力集中、過小は強度不足につながるため、基準内かを確認します。</p>
        <h3 className={cls.h3}>脚長</h3>
        <p className={cls.body}>すみ肉溶接の脚長が設計値を満たすかを測ります。脚長不足は強度不足に直結するため、重要な確認項目です。</p>
        <h3 className={cls.h3}>角度</h3>
        <p className={cls.body}>開先角度や取り付け角度を確認します。角度がずれると溶け込みや仕上がりに影響します。</p>
        <h3 className={cls.h3}>アンダーカット</h3>
        <p className={cls.body}>止端部のえぐれ（アンダーカット）の深さを確認します。深いアンダーカットは応力集中の原因になるため、基準内かを点検します。</p>
        <h3 className={cls.h3}>TWG-1とTWGU-7M</h3>
        <p className={cls.body}>
          TWG-1は測定精度±0.4、TWGU-7Mは測定精度±0.6mmとされています。検査基準がシビアな溶接部にはより高精度側、現場での日常点検には多用途に使える方、という使い分けができます。測定できる項目や正式品番は製品情報で確認してください。
        </p>
        <CardGrid>
          <ProductCard p={P_TWG1} />
          <ProductCard p={P_TWGU} />
        </CardGrid>
        <CTA label="溶接後の品質確認用ゲージを見る" href="#gauge" />

        {/* ===== H2-15 ===== */}
        <h2 id="bihin" className={cls.h2}>
          工場の溶接用品を標準化する備品リスト
        </h2>
        <p className={cls.body}>
          工場・現場で溶接用品を標準化しておくと、番号違いや欠品による作業中断を防げます。次を「番号別・サイズ別」に管理するのがおすすめです。
        </p>
        <ul className={cls.list}>
          <li>遮光ガラス：使用する溶接方法・電流に対応する番号（#7〜#13）を必要分</li>
          <li>素ガラス：消耗品として多めに常備（GT・1箱100枚入）</li>
          <li>溶接面：作業スタイル別（手持ちHS／直かぶりTPW-K／ヘルメット取付TPW-H）</li>
          <li>周辺作業者用の遮光グラス（GS-70W-14）と遮光幕・衝立</li>
          <li>溶接用革手袋（MT-107D-5P）などの保護具</li>
          <li>母材別の溶接棒（ステンレス用TSS308／鋳物用TSC1、径違い）</li>
          <li>溶接ゲージ（TWG-1／TWGU-7M）で作業後の寸法確認</li>
        </ul>
        <p className={cls.body}>
          あわせて、溶接加工でよく使う関連部材も同じ仕入れ先でそろえられます（本記事の主役ではなく、溶接製作物の部材です）。
        </p>
        <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MiniCard p={P_IW40} />
          <MiniCard p={P_TKY} />
          <MiniCard p={P_SL20} />
        </div>

        {/* ===== H2-16 ===== */}
        <h2 id="shippai" className={cls.h2}>
          よくある失敗
        </h2>
        <ul className={cls.list}>
          <li>「一般的には#11」という情報だけで番号を決めてしまう</li>
          <li>溶接方法を確認していない／電流を確認していない</li>
          <li>暗いという理由で必要性能より低い番号に下げる</li>
          <li>素ガラスと遮光ガラスを混同する／素ガラスだけで溶接する</li>
          <li>面を買えば遮光ガラスが付属すると思い込む</li>
          <li>遮光ガラス・素ガラスのサイズを確認していない</li>
          <li>ガラスの固定不良・隙間・がたつきを放置する</li>
          <li>ひび・欠け・スパッタ付着のガラスを使い続ける</li>
          <li>#1.4（周辺作業者用）をアーク溶接作業者に使う</li>
          <li>周辺作業者・見学者の保護をしていない</li>
          <li>溶接面だけで全身を保護できると考える／呼吸用保護具を確認していない</li>
          <li>母材と溶接棒が不一致／溶接棒の径を確認していない</li>
          <li>溶接後の測定をしていない</li>
          <li>番号別の保管をしていない／在庫数を管理していない</li>
        </ul>

        {/* ===== H2-17 ===== */}
        <h2 id="checklist" className={cls.h2}>
          法人向け購入チェックリスト
        </h2>
        <ul className={cls.list}>
          <li>使用する溶接方法と電流を作業ごとに把握しているか</li>
          <li>その組み合わせに合う遮光度番号をJIS T 8141:2026・メーカー指示で確認したか</li>
          <li>面本体と遮光ガラス・素ガラスの付属有無、対応プレートサイズを確認したか</li>
          <li>番号別・サイズ別に在庫を管理し、必要数を常備しているか</li>
          <li>素ガラスを消耗品として十分に確保しているか</li>
          <li>周辺作業者用の遮光対策（グラス・遮光幕）を用意しているか</li>
          <li>革手袋・作業衣・呼吸用保護具など併用する保護具を確認したか</li>
          <li>母材別の溶接棒と、作業後の溶接ゲージを備えているか</li>
          <li>始業前点検（ひび・スパッタ・固定）の運用を決めているか</li>
        </ul>

        {/* ===== H2-18 ===== */}
        <h2 id="faq" className={cls.h2}>
          よくある質問（FAQ）
        </h2>
        <div className="my-4 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-md border border-gray-200 p-4">
              <p className={cls.faqQ}>Q. {f.q}</p>
              <p className="text-sm leading-relaxed text-gray-800">A. {f.a}</p>
            </div>
          ))}
        </div>

        {/* ===== H2-19 ===== */}
        <h2 id="matome" className={cls.h2}>
          まとめ｜溶接方法・電流・面の対応サイズを確認する
        </h2>
        <p className={cls.body}>
          溶接の遮光ガラスは「何番」を単独で覚えるものではなく、溶接方法と電流で選ぶものです。被覆アーク75〜200Aなら#9〜11が目安ですが、一律で決めず、JIS T 8141:2026の最新使用標準とメーカー指示で確定します。数字が大きいほど暗くなり、見やすさだけを理由に必要遮光度を下回る番号にはしません。
        </p>
        <p className={cls.body}>
          あわせて、透明な素ガラスは遮光用ではないこと、面本体と遮光ガラス・素ガラスが別売の場合があること、面の対応プレートサイズを確認することが要点です。周辺作業者には#1.4のような側射光対策グラスを、作業者本人には溶接面＋適切な遮光ガラスを使い分けます。革手袋・呼吸用保護具・母材別の溶接棒・作業後のゲージまでを作業フローで整えると、安全と品質の両方を確保できます。
        </p>
        <Caution title="ご確認ください">
          <p>本記事は一般的な情報であり、法的・医学的助言ではありません。遮光度番号や規格の適用は、JIS T 8141:2026の最新使用標準・溶接機や保護具のメーカー指示・自社の作業基準で必ず確認してください。製品の購入だけで法令対応が完了するものではありません。目に違和感がある場合は作業を中止し、必要に応じて医療機関を受診してください。</p>
        </Caution>
        <CTA label="#7〜#13の遮光ガラスと対応する溶接面を確認する" href="#hikaku" />
      </main>
      <SiteFooter />
    </>
  );
}
