import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SLUG = "portable-refrigerator-vs-cooler-box-worksite";
const SITE_URL = "https://sagyou-navi.com";
const PAGE_URL = `${SITE_URL}/articles/${SLUG}`;
const HOME_URL = `${SITE_URL}/`;

export const metadata: Metadata = {
  title: "ポータブル冷蔵庫とクーラーボックスの違い｜現場・車載・長時間保冷の選び方",
  description:
    "ポータブル冷蔵庫とクーラーボックスの違いを、冷却方式・電源・時間・容量・運搬性で比較。現場やサービスカーでの選び方、エンゲル14〜40L、真空断熱・折りたたみクーラー、保冷剤運用まで解説します。",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    title: "ポータブル冷蔵庫とクーラーボックスの違い｜現場・車載・長時間保冷の選び方",
    description:
      "電源で冷やすポータブル冷蔵庫と、保冷剤で冷たさを保つクーラーボックスを、現場運用から比較する法人向けガイド。",
    url: PAGE_URL,
    images: [
      "/images/portable-refrigerator-vs-cooler-box-worksite/portable-refrigerator-vs-cooler-box-hero.jpg",
    ],
  },
};

const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const hashIndex = url.indexOf("#");
  const append = (base: string) =>
    `${base}${base.includes("?") ? "&" : "?"}${utm}`;
  if (hashIndex === -1) return append(url);
  return `${append(url.slice(0, hashIndex))}${url.slice(hashIndex)}`;
}
const IMG = (file: string) => `/products/${file}`;
const HERO = (file: string) =>
  `/images/portable-refrigerator-vs-cooler-box-worksite/${file}`;

type Product = {
  id: string;
  code: string;
  short: string;
  name: string;
  image: string;
  url: string;
  group: string;
  badge: string;
  spec: string;
  use: string;
  solves: string;
  check: string;
  cta: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: "mt45fcp",
    code: "MT45F-C-P",
    short: "エンゲル 40L・2槽式 MT45F-C-P",
    name: "エンゲル　ポータブル冷蔵庫（４０Ｌデジタル・２層式モデル） MT45FCP",
    image: "ta054162-mt45fcp.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054162-mt45fcp/", UTM),
    group: "portable",
    badge: "40L・2槽式",
    spec: "40L／デジタル／AC100V・DC12/24V／冷凍・冷蔵の2槽式",
    use: "車両・現場拠点で、冷凍品と飲料を分けて同時管理したい場合",
    solves: "1台で冷凍と冷蔵を分け、内容物の温度帯を混在させにくくする",
    check: "質量24kg。設置寸法、車載固定、各槽の温度条件、周囲温度、現行品・後継品を確認。",
    cta: "40L・2槽式を確認する",
    featured: true,
  },
  {
    id: "mt17f",
    code: "MT17F",
    short: "エンゲル 15L MT17F",
    name: "エンゲル　ポータブル冷蔵庫（１５Ｌモデル） MT17F",
    image: "ta054159-mt17f.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054159-mt17f/", UTM),
    group: "portable",
    badge: "15L・小型",
    spec: "15L／AC100V・DC12/24V／冷凍冷蔵",
    use: "サービスカー、少人数班、限られた荷室で飲料や保冷剤を冷やしたい場合",
    solves: "小型でも電源がある間は能動的に冷却し、短い補充サイクルを作りやすい",
    check: "質量16kg。500ml収納目安、荷室寸法、電源コード、車両バッテリー保護を確認。",
    cta: "15Lモデルを見る",
    featured: true,
  },
  {
    id: "mt45fp",
    code: "MT45F-P",
    short: "エンゲル 40L・1槽式 MT45F-P",
    name: "エンゲル　ポータブル冷蔵庫（４０Ｌデジタルモデル） MT45FP",
    image: "ta054163-mt45fp.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054163-mt45fp/", UTM),
    group: "portable",
    badge: "40L・1槽式",
    spec: "40L／デジタル／AC100V・DC12/24V／1槽式",
    use: "同じ温度帯の飲料・食品・冷却材をまとめて多めに管理したい現場拠点",
    solves: "大容量の1槽を使い、同一温度帯の在庫をまとめやすくする",
    check: "質量24kg。2槽式との違い、開閉頻度、荷室・搬入経路、現行品・後継品を確認。",
    cta: "40L・1槽式を確認する",
  },
  {
    id: "md14f",
    code: "MD14F",
    short: "エンゲル 14L MD14F",
    name: "エンゲル　ポータブル冷蔵庫（１４Ｌモデル） MD14F",
    image: "ta054142-md14f.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054142-md14f/", UTM),
    group: "portable",
    badge: "14L・DC12V",
    spec: "14L／DC12V専用／冷凍冷蔵／ACは別売アダプタ",
    use: "12V車両を中心に、個人・少人数で持ち運ぶ飲料や冷却材を管理したい場合",
    solves: "車載を前提に小容量で導入し、保冷剤の交換だけに頼らない運用を作る",
    check: "AC100V使用には純正別売アダプタが必要。DC24Vへ直接接続しない。現行・後継品を確認。",
    cta: "14L・DC12Vモデルを見る",
  },
  {
    id: "mr040f",
    code: "MR040F",
    short: "エンゲル 有効38L MR040F",
    name: "エンゲル　ポータブル冷蔵庫　４０Ｌ仕様（有効内容３８Ｌ） MR040F",
    image: "ta054155-mr040f.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054155-mr040f/", UTM),
    group: "portable",
    badge: "有効38L",
    spec: "有効38L／AC100V・DC12/24V／冷凍冷蔵",
    use: "現場車両や休憩拠点で、複数人分の飲料・冷却材をまとめて管理したい場合",
    solves: "40Lクラスの容量と車載対応電源を両立し、補充回数を減らしやすくする",
    check: "質量22kg。外形寸法、収納本数、荷下ろし方法、直射日光対策、電源容量を確認。",
    cta: "有効38Lモデルを見る",
  },
  {
    id: "mhd14f",
    code: "MHD14F",
    short: "エンゲル 14L・温蔵付 MHD14F",
    name: "エンゲル　ポータブル冷蔵庫　温蔵付（１４Ｌモデル） MHD14F",
    image: "ta054147-mhd14f.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054147-mhd14f/", UTM),
    group: "portable",
    badge: "14L・冷凍冷蔵・温蔵",
    spec: "14L／DC12V専用／冷凍冷蔵・55℃温蔵／ACは別売アダプタ",
    use: "夏の冷却だけでなく、冬季の温蔵も含めて通年で車載運用したい場合",
    solves: "季節ごとに機器を入れ替えず、冷却・温蔵用途を切り替えやすくする",
    check: "冷却と温蔵は同時利用ではない。ACアダプタ、内容物の耐熱性、現行品・後継品を確認。",
    cta: "温蔵付14Lモデルを見る",
    featured: true,
  },
  {
    id: "mt35fp",
    code: "MT35F-P",
    short: "エンゲル 32L MT35F-P",
    name: "エンゲル　ポータブル冷蔵庫（３２Ｌデジタルモデル） MT35FP",
    image: "ta054161-mt35fp.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054161-mt35fp/", UTM),
    group: "portable",
    badge: "32L・デジタル",
    spec: "32L／デジタル／AC100V・DC12/24V／冷凍冷蔵",
    use: "15〜21Lでは不足するが、40Lクラスの重量・占有面積は避けたい現場",
    solves: "中容量で班単位の飲料・冷却材を管理し、設定温度を確認しやすくする",
    check: "質量21kg。収納本数、設置スペース、車載固定、後継品表示と購入時の型式を確認。",
    cta: "32Lデジタルモデルを見る",
  },
  {
    id: "mt27f",
    code: "MT27F",
    short: "エンゲル 21L MT27F",
    name: "エンゲル　ポータブル冷蔵庫（２１Ｌモデル） MT27F",
    image: "ta054160-mt27f.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054160-mt27f/", UTM),
    group: "portable",
    badge: "21L・中小容量",
    spec: "21L／AC100V・DC12/24V／冷凍冷蔵",
    use: "2〜4人程度の班やサービス車で、15Lより余裕を持たせたい場合",
    solves: "持ち運びと容量の折り合いをつけ、日帰りから長時間作業へ対応しやすくする",
    check: "質量15kg。設定温度、電源、収納物の形状、車内放置、ドア固定方法を確認。",
    cta: "21Lモデルを見る",
  },
  {
    id: "cfv12",
    code: "CFV-12",
    short: "コアフラックス VIP 12L",
    name: "ＪＥＪアステージ　クーラーボックス　コアフラックス　ＶＩＰ　１２Ｌ＆保冷剤無料プレゼントキャンペーン【〜２６年９月末まで】 CFV12GCPH750GKH350",
    image: "ta046241-cfv12gcph750gkh350.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta046241-cfv12gcph750gkh350/", UTM),
    group: "hard-small",
    badge: "12L・真空断熱ハード",
    spec: "12L／VIP高保冷ハードクーラー／保冷剤セット内容は販売ページ確認",
    use: "1人〜少人数の移動作業、車両から作業場所まで頻繁に持ち運ぶ場合",
    solves: "電源なしで、飲料や保冷剤をコンパクトに配備する",
    check: "セット品・キャンペーン期間、実容量、保冷剤重量、満載時重量を確認。",
    cta: "12L VIPを確認する",
  },
  {
    id: "cfv16",
    code: "CFV-16",
    short: "コアフラックス VIP 16L",
    name: "ＪＥＪアステージ　クーラーボックス　コアフラックス　ＶＩＰ　１６Ｌ＆保冷剤無料プレゼントキャンペーン【〜２６年９月末まで】 CFV16GCPH750GKH350",
    image: "ta046242-cfv16gcph750gkh350.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta046242-cfv16gcph750gkh350/", UTM),
    group: "hard-small",
    badge: "16L・真空断熱ハード",
    spec: "16L／VIP高保冷ハードクーラー／保冷剤セット内容は販売ページ確認",
    use: "小規模班で、12Lより飲料本数と保冷剤に余裕を持たせたい場合",
    solves: "電源不要の高保冷運用と、少人数班への持ち出しやすさを両立する",
    check: "セット内容、保冷試験条件、ボトルの縦置き可否、満載時重量を確認。",
    cta: "16L VIPを確認する",
    featured: true,
  },
  {
    id: "crfx26",
    code: "CF-26IG",
    short: "コアフラックス 26L",
    name: "ＪＥＪアステージ　クーラーボックス　コアフラックス　＃２６　ＣＦ−２６ＩＧ CRFX26",
    image: "ta052544-crfx26.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta052544-crfx26/", UTM),
    group: "hard-mid",
    badge: "26L・ハード",
    spec: "26L／ハードクーラーボックス",
    use: "1班分の飲料・弁当・保冷剤をまとめ、電源なしで日帰り運用する場合",
    solves: "小型と大型の中間容量で、班単位の配備をしやすくする",
    check: "断熱仕様、外形寸法、保冷時間の試験条件、排水・清掃方法を確認。",
    cta: "26Lコアフラックスを見る",
  },
  {
    id: "tcb50",
    code: "TCB-50",
    short: "TRUSCO 超保冷クーラーBOX 50L",
    name: "ＴＲＵＳＣＯ　超保冷クーラーＢＯＸ　面ファスナータイプ　５０Ｌ TCB50",
    image: "ta053394-tcb50.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta053394-tcb50/", UTM),
    group: "soft",
    badge: "50L・折りたたみ",
    spec: "50L／面ファスナー／厚手断熱材のソフトクーラー",
    use: "車両・倉庫で大容量を使い、使用後は折りたたんで保管したい場合",
    solves: "大型容量と軽量・省スペース保管を両立する",
    check: "ソフトタイプのため積載物による変形、汁漏れ、底面保護、満載時の二人運搬を確認。",
    cta: "折りたたみ50Lを見る",
  },
  {
    id: "cfv26",
    code: "CFV-26",
    short: "コアフラックス VIP 26L",
    name: "ＪＥＪアステージ　クーラーボックス　コアフラックス　ＶＩＰ　２６Ｌ＆保冷剤無料プレゼントキャンペーン【〜２６年９月末まで】 CFV26GCPH750GKH750",
    image: "ta046243-cfv26gcph750gkh750.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta046243-cfv26gcph750gkh750/", UTM),
    group: "hard-mid",
    badge: "26L・真空断熱ハード",
    spec: "26L／VIP高保冷ハードクーラー／保冷剤セット内容は販売ページ確認",
    use: "班単位で長時間使い、通常ハードより保冷余力を重視したい場合",
    solves: "電源がない場所でも、開閉や高温環境に備えた高保冷構成を検討しやすい",
    check: "セット内容・キャンペーン、外形寸法、満載時重量、保冷試験条件を確認。",
    cta: "26L VIPを確認する",
  },
  {
    id: "tcb35a",
    code: "TCB-35A",
    short: "TRUSCO 超保冷クーラーBOX 35L",
    name: "ＴＲＵＳＣＯ　超保冷クーラーＢＯＸ　面ファスナータイプ　３５Ｌ TCB35A",
    image: "ta046354-tcb35a.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta046354-tcb35a/", UTM),
    group: "soft",
    badge: "35L・折りたたみ",
    spec: "35L／面ファスナー／折りたたみ可能なソフトクーラー",
    use: "班単位で飲料を運び、帰路やオフシーズンは収納を小さくしたい場合",
    solves: "ハードケースより軽量に運び、保管スペースを抑える",
    check: "満載時重量、底面の擦れ、鋭利物、内容液漏れ、内袋の清掃方法を確認。",
    cta: "折りたたみ35Lを見る",
  },
  {
    id: "crfx44",
    code: "CF-44IG",
    short: "コアフラックス 44L",
    name: "ＪＥＪアステージ　クーラーボックス　コアフラックス　＃４４　ＣＦー４４ＩＧ CRFX44",
    image: "ta053885-crfx44.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta053885-crfx44/", UTM),
    group: "hard-large",
    badge: "44L・大型ハード",
    spec: "44L／ハードクーラーボックス",
    use: "複数人班や現場拠点で、飲料と保冷剤をまとめて配備する場合",
    solves: "班ごとの補充回数を減らし、電源のない場所へまとまった量を運ぶ",
    check: "外形寸法、満載時重量、車両荷室、排水、持ち上げ人数を確認。",
    cta: "44Lコアフラックスを見る",
  },
  {
    id: "frc45",
    code: "FRC-45",
    short: "フォレスクルー 45L",
    name: "ＪＥＪアステージ　クーラーボックス　フォレスクルー４５　セラドンブルー FRC45CBL",
    image: "ta052677-frc45cbl.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta052677-frc45cbl/", UTM),
    group: "hard-large",
    badge: "45L・大型ハード",
    spec: "45L／ハードクーラーボックス",
    use: "現場休憩所やイベント運営で、多人数分の飲料をまとめて配備する場合",
    solves: "大容量を一か所へ集約し、補充担当者の管理をしやすくする",
    check: "保冷性能の試験条件、排水栓、キャスター・持ち手、満載時の運搬方法を確認。",
    cta: "45Lハードクーラーを見る",
  },
  {
    id: "packout",
    code: "48-22-8460",
    short: "Milwaukee PACKOUT クーラーボックス 15L",
    name: "ｍｉｌｗａｕｋｅｅ　ＰＡＣＫＯＵＴ　クーラーボックス 48228460",
    image: "ta052161-48228460.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta052161-48228460/", UTM),
    group: "hard-small",
    badge: "15L・PACKOUT連結",
    spec: "15L／PACKOUT収納ボックスと連結可能",
    use: "工具収納と一体で車両・現場間を移動する保守・設備工事チーム",
    solves: "工具システムと連結し、飲料の箱だけが荷室で動くのを抑えやすくする",
    check: "連結するPACKOUT構成、実内寸、満載時重量、食品と汚れた工具の分離を確認。",
    cta: "PACKOUT 15Lを見る",
  },
  {
    id: "tc40k",
    code: "TC-40",
    short: "HUGEL ハードクーラーボックス 40L",
    name: "ＩＲＩＳ　２９４７７８　ＨＵＧＥＬ　クーラーボックス　４０Ｌ　カーキ TC40K",
    image: "ta054394-tc40k.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054394-tc40k/", UTM),
    group: "hard-large",
    badge: "40L・発泡ウレタン",
    spec: "40L／発泡ウレタン断熱ハードクーラー",
    use: "電源不要で大容量を使い、真空断熱ほどの価格・重量を求めない場合",
    solves: "大人数の飲料をまとめ、一般的なハードクーラーとして運用する",
    check: "真空断熱モデルとの違い、保冷試験条件、外形寸法、満載時重量を確認。",
    cta: "HUGEL 40Lを見る",
  },
  {
    id: "vitc60",
    code: "VITC-60",
    short: "HUGEL 真空断熱 60L",
    name: "ＩＲＩＳ　２０１２８２　ＨＵＧＥＬ　真空断熱クーラーボックス　ホワイトアッシュ VITC60WH",
    image: "ta054470-vitc60wh.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054470-vitc60wh/", UTM),
    group: "hard-large",
    badge: "60L・6面真空断熱",
    spec: "60L／6面真空断熱パネル／大型ハードクーラー",
    use: "現場拠点・イベント・災害備蓄で、多人数分を長時間保冷したい場合",
    solves: "大容量と高保冷力を優先し、頻繁な保冷剤交換を減らしやすくする",
    check: "大型・重量物。保冷時間は試験条件依存。搬入経路、キャスター、二人作業、保管場所を確認。",
    cta: "真空断熱60Lを見る",
  },
  {
    id: "vitc15ch",
    code: "VITC-15",
    short: "HUGEL 真空断熱 15L・チャコール",
    name: "ＩＲＩＳ　２０８３５２　ＨＵＧＥＬ　真空断熱クーラーボックス　１５Ｌ　チャコールグレー VITC15CH",
    image: "ta053551-vitc15ch.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta053551-vitc15ch/", UTM),
    group: "hard-small",
    badge: "15L・6面真空断熱",
    spec: "15L／6面真空断熱パネル／チャコールグレー",
    use: "少人数・個人配備で、コンパクトでも保冷余力を優先する場合",
    solves: "小容量で高保冷構造を選び、長時間作業の温度上昇に備える",
    check: "重量4kg台のクラス。内寸、ボトル向き、保冷剤量、満載時の持ち運びを確認。",
    cta: "真空断熱15L・チャコールを見る",
    featured: true,
  },
  {
    id: "vitc20ch",
    code: "VITC-20",
    short: "HUGEL 真空断熱 20L",
    name: "ＩＲＩＳ　２９４７７５　ＨＵＧＥＬ　真空断熱クーラーボックス　２０Ｌ　チャコールグレー VITC20CH",
    image: "ta054465-vitc20ch.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054465-vitc20ch/", UTM),
    group: "hard-mid",
    badge: "20L・6面真空断熱",
    spec: "20L／6面真空断熱パネル／チャコールグレー",
    use: "1班分を持ち運びつつ、15Lより飲料と保冷剤の余裕を持たせたい場合",
    solves: "小〜中容量で長時間保冷と班単位運用を両立しやすくする",
    check: "外形・内寸、重量、保冷試験条件、保冷剤配置、車両収納を確認。",
    cta: "真空断熱20Lを見る",
    featured: true,
  },
  {
    id: "hd20",
    code: "HD20",
    short: "エンゲル プレミアムクーラーバッグ 20L",
    name: "エンゲル　クーラーボックス　プレミアムクーラーバック　２０Ｌ HD20",
    image: "ta052722-hd20.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta052722-hd20/?variantId=TA052722", UTM),
    group: "soft",
    badge: "20L・ソフト",
    spec: "20L／ソフトクーラーバッグ",
    use: "短時間の持ち出し、階段・狭所移動、使用後の収納性を優先する場合",
    solves: "ハードボックスより軽く、班ごとに配りやすい保冷容器として使う",
    check: "冷却機能はない。保冷剤、直射日光、開閉頻度、汁漏れ、底面保護を確認。",
    cta: "エンゲル 20Lクーラーバッグを見る",
  },
  {
    id: "gcl27",
    code: "GCL-27",
    short: "JEJアステージ グランクール 27L",
    name: "ＪＥＪアステージ　グランクール＃２７　ブルーグレー GCL27BGY",
    image: "ta054019-gcl27bgy.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054019-gcl27bgy/?variantId=TA054019", UTM),
    group: "hard-mid",
    badge: "27L・ハード",
    spec: "27L／ハードクーラーボックス",
    use: "日帰り現場の班用として、飲料・弁当・保冷剤を一箱にまとめたい場合",
    solves: "扱いやすい中容量で、保冷品を作業班へまとめて配備する",
    check: "保冷性能、外形寸法、排水・清掃、満載時重量、車両固定を確認。",
    cta: "グランクール27Lを見る",
  },
  {
    id: "vitc15aw",
    code: "VITC-15",
    short: "HUGEL 真空断熱 15L・ホワイト",
    name: "ＩＲＩＳ　２０８３５１　ＨＵＧＥＬ　真空断熱クーラーボックス　１５Ｌ　ホワイトアッシュ VITC15AW",
    image: "ta053550-vitc15aw.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta053550-vitc15aw/?variantId=TA053550", UTM),
    group: "hard-small",
    badge: "15L・6面真空断熱",
    spec: "15L／6面真空断熱パネル／ホワイトアッシュ",
    use: "小容量・高保冷モデルを、現場の備品色や車内視認性から選びたい場合",
    solves: "15Lクラスの保冷力を優先し、個人・少人数で配備する",
    check: "チャコールモデルとの性能差ではなく色違いかを販売ページで確認。内寸・重量も確認。",
    cta: "真空断熱15L・ホワイトを見る",
  },
  {
    id: "icepack",
    code: "THZ-1100S-10P",
    short: "TRUSCO 強冷保冷剤 1100g×10",
    name: "ＴＲＵＳＣＯ　まとめ買い　保冷剤　１１００ｇ　強冷タイプ　１０個入り THZ1100S10P",
    image: "ta054413-thz1100s10p.jpg",
    url: buildUrl("https://item.rakuten.co.jp/crecote-shop/ta054413-thz1100s10p/?variantId=TA054413", UTM),
    group: "accessory",
    badge: "1100g×10個",
    spec: "強冷タイプ保冷剤／1100g／10個まとめ買い",
    use: "複数のクーラーボックスを班ごとに配備し、交換用をローテーションする場合",
    solves: "保冷剤を標準化し、凍結済み・使用中・再凍結中の循環を組みやすくする",
    check: "凍結に必要な時間・温度、使用個数、内容物との接触、破損・漏れ、保管スペースを確認。",
    cta: "強冷保冷剤10個セットを見る",
  }
];

const byId = Object.fromEntries(
  products.map((product) => [product.id, product])
) as Record<string, Product>;

const faqs = [
  { q: "ポータブル冷蔵庫とクーラーボックスの一番大きな違いは何ですか？", a: "ポータブル冷蔵庫は電源を使って庫内を能動的に冷却します。クーラーボックスは保冷剤や氷で、あらかじめ冷えた物の温度上昇を遅らせる容器です。常温の飲料を現地で冷やしたい、設定温度を長時間維持したい場合はポータブル冷蔵庫が候補です。" },
  { q: "現場ではポータブル冷蔵庫とクーラーボックスのどちらが向きますか？", a: "車両や休憩拠点に安定した電源があり、長時間・連日使うならポータブル冷蔵庫が向きます。電源がなく、班ごとに持ち運ぶ、日帰りで使う、帰路は折りたたみたい場合はクーラーボックスが向きます。両方を組み合わせる方法も有効です。" },
  { q: "ポータブル冷蔵庫は保冷剤なしでも使えますか？", a: "電源が供給され、使用条件を満たす間は冷却できます。ただし停電・エンジン停止・電源コード抜けへの備え、扉開閉時の温度変化、予冷時間を考えると、用途によっては凍結済み保冷剤をバックアップとして用意します。" },
  { q: "クーラーボックスへ常温の飲料を入れても冷えますか？", a: "クーラーボックス自体には冷却機能がないため、常温の飲料を十分に冷やす用途には向きません。あらかじめ冷やした飲料と十分に凍らせた保冷剤を入れ、直射日光と開閉回数を抑えて使います。" },
  { q: "ポータブル冷蔵庫は何Lを選べばよいですか？", a: "人数だけでなく、1回の補充間隔、500mlボトル本数、弁当・保冷剤・冷凍品の有無、立て置きしたい容器の高さで決めます。メーカーの収納本数と庫内寸法を優先し、液体容量の単純計算だけで選ばないでください。" },
  { q: "1人用なら14Lと15Lのどちらがよいですか？", a: "容量差より電源と機能を見ます。MD14F・MHD14FはDC12V専用でAC利用に別売アダプタが必要です。MT17FはAC100V・DC12/24Vに対応します。車両、事務所、トラックのどこで使うかを先に決めます。" },
  { q: "21Lと32Lではどのくらい運用が変わりますか？", a: "21Lは少人数班やサービスカーで扱いやすく、32Lは飲料・保冷剤の本数に余裕を持たせやすい一方、重量と設置面積が増えます。収納物の実物を並べ、庫内寸法と500ml収納目安を確認します。" },
  { q: "40Lの1槽式と2槽式はどう選びますか？", a: "同じ温度帯の物をまとめるなら1槽式、冷凍品と冷蔵飲料を分けたいなら2槽式が候補です。2槽式は各槽の容量配分と設定条件を確認し、総容量40Lだけで判断しないでください。" },
  { q: "温蔵付モデルは冷蔵と温蔵を同時に使えますか？", a: "MHD14Fは冷凍・冷蔵・温蔵を切り替えて使う機種で、同時に異なる温度帯を作る2槽式ではありません。切替前に内容物を取り出し、説明書に従って運用します。" },
  { q: "DC12V専用モデルをAC100Vで使えますか？", a: "MD14F・MHD14Fは、メーカー指定の別売ACアダプタを使うことでAC100Vへ対応します。純正以外の電源では性能低下や動作不良の可能性があるため、適合品を確認してください。" },
  { q: "DC12V専用冷蔵庫を24V車で使えますか？", a: "そのままでは使えません。メーカーQ&AではMD14F・MHD14FはDC12V専用で、24V車では適切なDC/DCコンバータが必要とされています。配線と容量を専門担当者へ確認します。" },
  { q: "エンジン停止中も車両バッテリーで動かしてよいですか？", a: "スターターバッテリー上がりの原因になるため、無計画な連続使用は避けます。低電圧保護の有無、サブバッテリーやポータブル電源、稼働時間、再始動余力を確認し、車両メーカーと機器の説明書に従ってください。" },
  { q: "ポータブル電源で何時間動かせますか？", a: "概算は『使用可能な電力量Wh÷実測平均消費電力W』です。定格消費電力だけで計算すると、コンプレッサーの断続運転、周囲温度、予冷、開閉、変換損失を反映できません。実機測定と余裕を持った計画が必要です。" },
  { q: "炎天下の車内へポータブル冷蔵庫を置けますか？", a: "直射日光や高温の閉鎖車内は避けます。メーカーは周囲温度が30℃を超えると庫内温度が上がる場合があると案内しています。通風を確保し、放熱部を塞がず、車内温度を下げてから使います。" },
  { q: "クーラーボックスは真空断熱なら必ず長時間保冷できますか？", a: "保冷時間は外気温、予冷、保冷剤、内容物量、開閉回数、日射、試験条件で変わります。『最大○日』だけで現場性能を断定せず、使用条件と補充計画を含めて選びます。" },
  { q: "ハードクーラーとソフトクーラーの違いは何ですか？", a: "ハードは形状を保ちやすく、積載・衝撃・保冷力を重視する場面に向きます。ソフトは軽量で折りたたみやすい一方、荷崩れ、底面の擦れ、汁漏れ、鋭利物への弱さを考慮します。" },
  { q: "12〜20Lのクーラーボックスは何人向けですか？", a: "人数を固定せず、1人あたりの飲料本数と補充回数で判断します。個人〜少人数班に使いやすい容量ですが、保冷剤が占める体積と弁当・冷却材の有無を差し引いて考えます。" },
  { q: "35〜60Lの大型クーラーボックスは一人で運べますか？", a: "本体が軽くても飲料と保冷剤を入れると大幅に重くなります。持ち手、キャスター、段差、車両からの荷下ろし、二人運搬基準を決め、満載を前提に運搬方法を確認してください。" },
  { q: "保冷剤は何個入れればよいですか？", a: "容器の容量、外気温、保冷時間、内容物の初期温度、保冷剤の性能で変わります。メーカー推奨を基準に、上部・側面を含めた配置を試験し、凍結済み・使用中・再凍結中のローテーションを作ります。" },
  { q: "飲料と弁当を同じ箱へ入れてよいですか？", a: "食品衛生上必要な温度、包装、汁漏れ、交差汚染を確認してください。汚れた手袋や工具と同じ容器へ入れず、用途別の内袋や容器で分け、温度管理が重要な食品は専用手順を設けます。" },
  { q: "医薬品や検体の輸送に使えますか？", a: "一般向けポータブル冷蔵庫・クーラーボックスを、温度保証が必要な医薬品・検体の輸送へ安易に使わないでください。必要温度帯、記録、校正、バリデーションを満たす専用機器と手順を担当部門へ確認します。" },
  { q: "ポータブル冷蔵庫とクーラーボックスを併用するメリットは何ですか？", a: "車両・休憩拠点のポータブル冷蔵庫で飲料や保冷剤を冷やし、班ごとのクーラーボックスへ補充できます。能動冷却と移動性を分担でき、1台の大型容器を何度も開ける運用を避けやすくなります。" },
  { q: "使用後はどのように清掃しますか？", a: "電源を切ってプラグを抜き、結露・水分・汚れを除去し、十分に乾燥させます。電装部へ水をかけず、内装材に適合する洗浄方法を説明書で確認します。クーラーボックスは内袋・排水部・パッキンも点検します。" },
  { q: "法人で標準配備する際に何を記録すればよいですか？", a: "管理番号、型式、容量、使用場所、電源、収納対象、設定温度、開閉・補充ルール、清掃担当、点検日、故障・温度逸脱、保冷剤数、後継品を記録します。複数拠点で同じルールを使える台帳にします。" }
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ポータブル冷蔵庫とクーラーボックスの違い｜現場・車載・長時間保冷の選び方",
  description:
    "ポータブル冷蔵庫とクーラーボックスを、冷却方式・電源・容量・運搬性・長時間運用から比較する法人向けガイド。",
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
  },
  publisher: {
    "@type": "Organization",
    name: "グリーンクロスホールディングス",
  },
  mainEntityOfPage: PAGE_URL,
  image: [
    `${HOME_URL}images/portable-refrigerator-vs-cooler-box-worksite/portable-refrigerator-vs-cooler-box-hero.jpg`,
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: HOME_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "比較・違い",
      item: `${SITE_URL}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ポータブル冷蔵庫とクーラーボックスの違い",
      item: PAGE_URL,
    },
  ],
};

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-5 mt-12 scroll-mt-24 border-l-4 border-gray-900 pl-3 text-2xl font-bold text-gray-900"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 mt-8 text-xl font-bold text-gray-900">{children}</h3>;
}

function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <section className="my-7 rounded-xl border-2 border-gray-900 bg-gray-50 p-5">
      <p className="mb-2 text-sm font-bold text-gray-700">最初に結論</p>
      <div className="space-y-3 leading-8 text-gray-800">{children}</div>
    </section>
  );
}

function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-xl border border-red-300 bg-red-50 p-5">
      <p className="mb-2 font-bold text-red-800">{title}</p>
      <div className="space-y-2 leading-7 text-red-900">{children}</div>
    </aside>
  );
}

function PointBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-7 rounded-xl border border-gray-300 bg-white p-5 shadow-sm">
      <p className="mb-2 font-bold text-gray-900">{title}</p>
      <div className="space-y-2 leading-7 text-gray-700">{children}</div>
    </aside>
  );
}

function Figure({
  file,
  alt,
  caption,
  priority = false,
}: {
  file: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <Image
        src={HERO(file)}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
        priority={priority}
      />
      <figcaption className="px-4 py-3 text-sm leading-6 text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={`product-${product.id}`}
      className="scroll-mt-24 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={IMG(product.image)}
          alt={`${product.short}の商品画像`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, 420px"
          priority={product.featured === true}
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            {product.code}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-7 text-gray-900">
          {product.short}
        </h3>
        <p className="text-xs leading-5 text-gray-500">{product.name}</p>
        <dl className="space-y-3 text-sm leading-6">
          <div>
            <dt className="font-bold text-gray-900">主な仕様</dt>
            <dd className="text-gray-700">{product.spec}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">向く用途</dt>
            <dd className="text-gray-700">{product.use}</dd>
          </div>
          <div>
            <dt className="font-bold text-gray-900">解決しやすい課題</dt>
            <dd className="text-gray-700">{product.solves}</dd>
          </div>
          <div className="rounded-lg bg-amber-50 p-3">
            <dt className="font-bold text-amber-900">購入前確認</dt>
            <dd className="text-amber-900">{product.check}</dd>
          </div>
        </dl>
        <a
          href={product.url}
          target="_blank"
          rel="nofollow sponsored"
          className="block rounded-lg bg-gray-900 px-4 py-3 text-center font-bold text-white transition hover:bg-gray-700"
        >
          {product.cta} →
        </a>
      </div>
    </article>
  );
}

function ProductGrid({ ids }: { ids: string[] }) {
  return (
    <div className="my-7 grid gap-5 sm:grid-cols-2">
      {ids.map((id) => (
        <ProductCard key={id} product={byId[id]} />
      ))}
    </div>
  );
}

function CTA({
  title,
  text,
  links,
}: {
  title: string;
  text: string;
  links: { href: string; label: string }[];
}) {
  return (
    <aside className="my-9 rounded-xl bg-gray-900 p-6 text-white">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 leading-7 text-gray-200">{text}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-lg bg-white px-4 py-3 font-bold text-gray-900 transition hover:bg-gray-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

function TableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full border-collapse bg-white text-left text-sm">
        {children}
      </table>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th className="border-b border-gray-300 bg-gray-900 px-4 py-3 font-bold text-white">
      {children}
    </th>
  );
}

function Td({ children }: { children: ReactNode }) {
  return <td className="border-b border-gray-200 px-4 py-3 align-top leading-6 text-gray-700">{children}</td>;
}

const featuredIds = ["mt45fcp", "mt17f", "mhd14f", "cfv16", "vitc15ch", "vitc20ch"];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <nav className="mb-5 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:text-gray-900">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <Link href="/articles" className="hover:text-gray-900">
            比較・違い
          </Link>
          <span className="mx-2">/</span>
          <span>ポータブル冷蔵庫とクーラーボックスの違い</span>
        </nav>

        <p className="mb-3 text-sm font-semibold text-gray-600">
          作業用品ナビ編集部｜公開日・更新日：2026年7月22日
        </p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl">
          ポータブル冷蔵庫とクーラーボックスの違い｜現場・車載・長時間保冷の選び方
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">
          現場の飲料、保冷剤、弁当、冷凍品を管理するとき、電源で冷やすポータブル冷蔵庫と、保冷剤で冷たさを保つクーラーボックスのどちらを選ぶべきでしょうか。本記事では、キャンプ向けランキングではなく、車両・仮設休憩所・サービスカー・班配備という法人運用から比較します。
        </p>

        <Figure
          file="portable-refrigerator-vs-cooler-box-hero.jpg"
          alt="現場車両に積んだポータブル冷蔵庫とクーラーボックスを比較するイメージ"
          caption="能動的に冷やす冷蔵庫と、電源不要で運べるクーラーボックスは競合ではなく、役割を分けて併用できます。"
          priority
        />

        <AnswerBox>
          <p>
            <strong>長時間・連日使い、常温の飲料も冷やしたい、温度設定をしたい、車両や休憩拠点に電源があるならポータブル冷蔵庫</strong>が候補です。<strong>電源がない、班ごとに頻繁に運ぶ、日帰り中心、軽量・折りたたみを優先するならクーラーボックス</strong>が向きます。
          </p>
          <p>
            現場では「車両・休憩所の冷蔵庫で飲料と保冷剤を冷やし、各班のクーラーボックスへ補充する」併用が実務的です。容量だけで決めず、必要温度、使用時間、電源、人数、荷室、満載時重量、開閉回数の順で確認してください。
          </p>
        </AnswerBox>

        <Caution title="一般向け機器を医薬品・検体などの温度保証用途へ安易に転用しない">
          <p>
            温度記録・校正・バリデーションが必要な物品は、専用の輸送容器・冷蔵設備と管理手順を使用してください。本記事の商品は、販売ページ・取扱説明書で認められた用途の範囲で検討します。
          </p>
        </Caution>

        <h2 className="mt-9 text-2xl font-bold text-gray-900">まず比較したい代表6商品</h2>
        <p className="mt-3 leading-8 text-gray-700">
          冷凍・冷蔵を分けたい40L、少人数向け15L、温蔵付14L、電源不要の16L、真空断熱15L・20Lという6つの入口から比較できます。
        </p>
        <ProductGrid ids={featuredIds} />

        <CTA
          title="最初に方式を決める"
          text="商品を容量順に眺める前に、電源で冷やすか、保冷剤で運ぶか、両方を組み合わせるかを決めると誤発注を防げます。"
          links={[
            { href: "#difference", label: "違いを比較する" },
            { href: "#portable-fridge-models", label: "冷蔵庫を比較する" },
            { href: "#cooler-box-types", label: "クーラーボックスを比較する" },
          ]}
        />

        <nav className="my-8 rounded-xl border border-gray-200 bg-gray-50 p-5" aria-label="目次">
          <p className="font-bold text-gray-900">この記事の目次</p>
          <ol className="mt-3 grid gap-2 text-sm leading-6 text-gray-700 sm:grid-cols-2">
            {[
              ["conclusion", "結論｜7条件で選ぶ"],
              ["difference", "冷蔵庫とクーラーボックスの違い"],
              ["selection-conditions", "用途別の選定条件"],
              ["capacity", "容量の決め方"],
              ["power-runtime", "電源・稼働時間"],
              ["portable-fridge-models", "ポータブル冷蔵庫比較"],
              ["small-fridge", "14〜21L"],
              ["large-fridge", "32〜40L"],
              ["zone-hot", "1槽・2槽・温蔵"],
              ["cooler-box-types", "クーラーの種類"],
              ["small-cooler", "12〜27L"],
              ["large-cooler", "35〜60L"],
              ["soft-cooler", "ソフト・連結式"],
              ["ice-pack", "保冷剤運用"],
              ["hybrid-operation", "併用運用"],
              ["safety-maintenance", "安全・清掃"],
              ["mistakes", "よくある失敗"],
              ["corporate-checklist", "法人チェックリスト"],
              ["faq", "よくある質問"],
              ["sources", "参考情報"],
              ["summary", "まとめ"],
            ].map(([id, label], index) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-gray-950 hover:underline">
                  {index + 1}. {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <H2 id="conclusion">結論｜ポータブル冷蔵庫とクーラーボックスは7条件で選ぶ</H2>
        <p className="leading-8 text-gray-700">
          最初に確認するのは、①内容物に必要な温度、②使用時間、③電源、④車両・拠点・班のどこに置くか、⑤人数と補充間隔、⑥持ち運び、⑦清掃・保管です。価格や容量だけで決めると、電源が合わない、重くて運べない、保冷剤が入らない、冷凍と冷蔵を分けられないといった失敗が起きます。
        </p>
        <TableWrap>
          <thead><tr><Th>確認条件</Th><Th>ポータブル冷蔵庫が候補</Th><Th>クーラーボックスが候補</Th></tr></thead>
          <tbody>
            <tr><Td>必要な働き</Td><Td>常温から冷やす・設定温度を維持する</Td><Td>予冷済みの物の温度上昇を遅らせる</Td></tr>
            <tr><Td>使用時間</Td><Td>長時間・連日・補充基地として使う</Td><Td>日帰り・短時間・班へ配る</Td></tr>
            <tr><Td>電源</Td><Td>AC100V、DC12/24V、サブ電源を確保できる</Td><Td>電源がない、配線を引きたくない</Td></tr>
            <tr><Td>運搬</Td><Td>車両や拠点へ据え気味に置く</Td><Td>作業場所まで頻繁に移動する</Td></tr>
            <tr><Td>温度帯</Td><Td>冷蔵・冷凍・機種により温蔵</Td><Td>保冷剤の温度と量に依存</Td></tr>
            <tr><Td>故障・停電時</Td><Td>電源停止へのバックアップが必要</Td><Td>保冷剤の交換・再凍結が必要</Td></tr>
          </tbody>
        </TableWrap>

        <H2 id="difference">ポータブル冷蔵庫とクーラーボックスの違い</H2>
        <Figure
          file="active-cooling-vs-passive-cooling-comparison.jpg"
          alt="電源で冷やすポータブル冷蔵庫と保冷剤で保冷するクーラーボックスの比較"
          caption="冷蔵庫は能動冷却、クーラーボックスは受動保冷です。目的が異なるため、単純な保冷時間ランキングにはできません。"
        />
        <H3>ポータブル冷蔵庫は「冷やす」機器</H3>
        <p className="leading-8 text-gray-700">
          コンプレッサーなどを動かし、庫内から熱を外へ逃がします。常温から冷却でき、設定温度を保ちやすい一方、電源、放熱、機器重量、故障時対応が必要です。エンゲルの対象機種にはAC100VとDC12/24Vの両方へ対応するモデルと、DC12V専用モデルがあります。
        </p>
        <H3>クーラーボックスは「冷たさを保つ」容器</H3>
        <p className="leading-8 text-gray-700">
          断熱材で外からの熱を入りにくくし、保冷剤や氷の冷熱を利用します。電源不要で移動しやすい反面、常温の飲料を素早く冷やすことはできません。真空断熱、発泡ウレタン、厚手ソフトなどで、保冷力・重量・収納性が変わります。
        </p>

        <H2 id="selection-conditions">現場用途から逆算する7つの選定条件</H2>
        <H3>1. 冷蔵・冷凍・温蔵のどれが必要か</H3>
        <p className="leading-8 text-gray-700">
          飲料を冷蔵するだけか、保冷剤や冷凍品を凍った状態で維持するか、冬季に温蔵も使うかを分けます。冷凍と冷蔵を同時に行いたい場合は2槽式、同じ温度帯を大量に入れる場合は1槽式が候補です。
        </p>
        <H3>2. 何時間、何日使うか</H3>
        <p className="leading-8 text-gray-700">
          日帰りで途中補充できるならクーラーボックスでも運用しやすく、長時間・連日で常温品を追加するなら冷蔵庫が有利です。最大保冷時間ではなく、現場の開閉回数と補充時刻で考えます。
        </p>
        <H3>3. 電源をどこから取るか</H3>
        <p className="leading-8 text-gray-700">
          AC100V、DC12V、DC24V、ポータブル電源、サブバッテリーを分けます。DC12V専用機を24V車へ直接つながない、エンジン停止中のスターターバッテリーを消耗させないことが重要です。
        </p>
        <H3>4. 車両・休憩所・作業班のどこへ置くか</H3>
        <p className="leading-8 text-gray-700">
          車両や休憩所には冷蔵庫、作業班にはクーラーボックスという分担がしやすい構成です。階段、未舗装路、段差、荷室高さも含めて、満載時に運べるか確認します。
        </p>
        <H3>5. 内容物と開閉回数</H3>
        <p className="leading-8 text-gray-700">
          500ml飲料だけか、弁当、保冷剤、アイス、冷却ベスト用パックを一緒に入れるかで必要形状が変わります。頻繁に開ける容器と予備在庫を分けると、温度上昇を抑えやすくなります。
        </p>
        <H3>6. 本体重量ではなく満載重量</H3>
        <p className="leading-8 text-gray-700">
          水分は1Lでおおむね1kgです。40L容器へ飲料と保冷剤を詰めると、本体重量に数十kgが加わる可能性があります。大型機は据え置き位置、台車、二人運搬を先に決めます。
        </p>
        <H3>7. 清掃・乾燥・管理台帳</H3>
        <p className="leading-8 text-gray-700">
          結露、飲料漏れ、弁当の汁、保冷剤破損を想定します。内袋や排水部を外して洗えるか、電装部へ水をかけずに清掃できるか、乾燥場所があるかも選定条件です。
        </p>

        <H2 id="capacity">人数だけで決めない容量の計算方法</H2>
        <Figure
          file="worksite-cooler-capacity-planning.jpg"
          alt="現場人数と飲料本数からポータブル冷蔵庫やクーラーボックスの容量を計画するイメージ"
          caption="公称容量だけでなく、保冷剤・容器形状・予備分・補充間隔を差し引いて考えます。"
        />
        <PointBox title="容量計画の基本式">
          <p><strong>必要な飲料量L ＝ 人数 × 1人あたりの本数 × 1本の容量L</strong></p>
          <p>
            ただし、実際の容器には保冷剤、仕切り、弁当、空気層が入ります。メーカーの500ml収納本数と庫内寸法を優先し、計算値ぴったりの容量は選びません。
          </p>
        </PointBox>
        <TableWrap>
          <thead><tr><Th>運用例</Th><Th>考え方</Th><Th>容量候補</Th><Th>注意</Th></tr></thead>
          <tbody>
            <tr><Td>個人・サービスカー</Td><Td>飲料数本＋弁当＋小型保冷剤</Td><Td>12〜15L</Td><Td>DC12V専用か、ACも使うか</Td></tr>
            <tr><Td>2〜4人の班</Td><Td>飲料・保冷剤を途中補充</Td><Td>16〜27L</Td><Td>満載時に一人で運べるか</Td></tr>
            <tr><Td>班の補充基地</Td><Td>飲料と冷却材をまとめて冷却</Td><Td>32〜45L</Td><Td>据え置き・車載固定・開閉管理</Td></tr>
            <tr><Td>現場拠点・多人数</Td><Td>大容量を集約して班へ配布</Td><Td>50〜60L</Td><Td>台車・二人運搬・保管場所</Td></tr>
          </tbody>
        </TableWrap>

        <H2 id="power-runtime">電源・稼働時間・車両バッテリーの確認</H2>
        <Figure
          file="portable-fridge-ac-dc-power-check.jpg"
          alt="AC100VとDC12V・24Vの電源を確認してポータブル冷蔵庫を運用するイメージ"
          caption="プラグが差さるかではなく、電圧・電流・コード・低電圧保護・停止時の運用を確認します。"
        />
        <H3>稼働時間は定格消費電力だけでは決まらない</H3>
        <p className="leading-8 text-gray-700">
          概算は「使用可能な電力量Wh ÷ 実測平均消費電力W」ですが、予冷中は負荷が大きく、設定温度到達後は断続運転になります。外気温、日射、開閉、内容物の初期温度、電源変換損失があるため、実際の現場条件で試運転します。
        </p>
        <H3>車両のスターターバッテリーを予備電源扱いしない</H3>
        <p className="leading-8 text-gray-700">
          エンジン停止中に長時間動かす場合は、低電圧保護、サブバッテリー、ポータブル電源、再始動余力を確認します。既存の
          <a href="/articles/outdoor-worksite-portable-power" className="font-bold text-gray-900 underline">
            屋外現場向けポータブル電源の記事
          </a>
          では、Wh・定格W・使用時間の考え方を詳しく整理しています。
        </p>
        <TableWrap>
          <thead><tr><Th>電源</Th><Th>主な使用場所</Th><Th>確認すること</Th><Th>よくある失敗</Th></tr></thead>
          <tbody>
            <tr><Td>AC100V</Td><Td>事務所・休憩所・倉庫</Td><Td>専用／指定アダプタ、コンセント容量、延長コード</Td><Td>DC専用機へ非適合アダプタを使う</Td></tr>
            <tr><Td>DC12V</Td><Td>乗用車・バン・12V車両</Td><Td>ソケット容量、ヒューズ、低電圧保護、配線</Td><Td>エンジン停止中にスターターバッテリーを使い切る</Td></tr>
            <tr><Td>DC24V</Td><Td>トラック・一部の業務車両</Td><Td>機器が24V対応か、12V専用なら指定変換器</Td><Td>DC12V専用機へ24Vを直接接続する</Td></tr>
            <tr><Td>ポータブル電源</Td><Td>停車中・仮設休憩所・電源のない現場</Td><Td>使用可能Wh、出力方式、変換損失、充電計画</Td><Td>定格Wh÷定格Wだけで稼働時間を断定する</Td></tr>
          </tbody>
        </TableWrap>
        <Caution title="放熱部を塞がず、閉鎖した高温車内へ放置しない">
          <p>
            ポータブル冷蔵庫は庫内の熱を外へ捨てます。側面・周囲の通風を確保し、荷物で放熱口を塞がないでください。公式カタログでも周囲温度が30℃を超えると庫内温度が上がる場合があるとされています。
          </p>
        </Caution>

        <H2 id="portable-fridge-models">エンゲルのポータブル冷蔵庫8機種を比較</H2>
        <TableWrap>
          <thead><tr><Th>機種</Th><Th>容量</Th><Th>電源</Th><Th>特徴</Th><Th>向く運用</Th></tr></thead>
          <tbody>
            <tr><Td><a href="#product-md14f" className="font-bold underline">MD14F</a></Td><Td>14L</Td><Td>DC12V／ACは別売</Td><Td>小型・冷凍冷蔵</Td><Td>12V車両中心</Td></tr>
            <tr><Td><a href="#product-mhd14f" className="font-bold underline">MHD14F</a></Td><Td>14L</Td><Td>DC12V／ACは別売</Td><Td>冷凍冷蔵・温蔵</Td><Td>通年車載</Td></tr>
            <tr><Td><a href="#product-mt17f" className="font-bold underline">MT17F</a></Td><Td>15L</Td><Td>AC100V・DC12/24V</Td><Td>小型両電源</Td><Td>少人数・サービスカー</Td></tr>
            <tr><Td><a href="#product-mt27f" className="font-bold underline">MT27F</a></Td><Td>21L</Td><Td>AC100V・DC12/24V</Td><Td>中小容量</Td><Td>2〜4人班</Td></tr>
            <tr><Td><a href="#product-mt35fp" className="font-bold underline">MT35F-P</a></Td><Td>32L</Td><Td>AC100V・DC12/24V</Td><Td>デジタル</Td><Td>班の補充基地</Td></tr>
            <tr><Td><a href="#product-mt45fp" className="font-bold underline">MT45F-P</a></Td><Td>40L</Td><Td>AC100V・DC12/24V</Td><Td>1槽式・デジタル</Td><Td>同温度帯を大量保管</Td></tr>
            <tr><Td><a href="#product-mt45fcp" className="font-bold underline">MT45F-C-P</a></Td><Td>40L</Td><Td>AC100V・DC12/24V</Td><Td>2槽式・デジタル</Td><Td>冷凍・冷蔵を分離</Td></tr>
            <tr><Td><a href="#product-mr040f" className="font-bold underline">MR040F</a></Td><Td>有効38L</Td><Td>AC100V・DC12/24V</Td><Td>40Lクラス</Td><Td>車両・休憩拠点</Td></tr>
          </tbody>
        </TableWrap>
        <p className="leading-8 text-gray-700">
          公開商品ページに後継品表示がある機種があります。記事公開前と購入前に、注文型式、現行品、後継品、電源コード、修理対応を確認してください。
        </p>

        <H2 id="small-fridge">14〜21Lのポータブル冷蔵庫が向く現場</H2>
        <p className="leading-8 text-gray-700">
          14〜21Lは、サービスカー、保守点検、個人・少人数班で扱いやすい容量です。小さいほど軽いとは限らず、コンプレッサーを搭載するため本体だけで10kgを超えます。車両から毎日降ろすか、荷室へ固定するかを決めてください。
        </p>
        <ProductGrid ids={["md14f", "mt27f"]} />

        <H2 id="large-fridge">32〜40Lのポータブル冷蔵庫が向く現場</H2>
        <p className="leading-8 text-gray-700">
          班の補充基地、現場休憩所、イベント運営、長距離車両では32〜40Lが候補です。大容量は開閉回数を集約できる一方、満載時の持ち上げが難しくなります。据え置き位置と台車を決め、放熱スペースを確保します。
        </p>
        <ProductGrid ids={["mt35fp", "mt45fp", "mr040f"]} />

        <H2 id="zone-hot">1槽式・2槽式・温蔵付の違い</H2>
        <H3>1槽式は同じ温度帯をまとめる</H3>
        <p className="leading-8 text-gray-700">
          飲料だけ、冷凍品だけなど、同じ温度帯の物を多く入れる場合に向きます。仕切りが少ない分、大きな容器を入れやすい一方、冷凍品と飲料を同時に別温度で管理できません。
        </p>
        <H3>2槽式は冷凍・冷蔵を分ける</H3>
        <p className="leading-8 text-gray-700">
          MT45F-C-Pは一度に冷凍と冷蔵を使う候補です。総容量40Lだけでなく、各槽の実寸と収納物を確認します。保冷剤の凍結と飲料冷蔵を一台で分けたい現場に向きます。
        </p>
        <H3>温蔵付は季節をまたいで使う</H3>
        <p className="leading-8 text-gray-700">
          MHD14Fは冬季の温蔵へ切り替えられます。冷蔵と温蔵を同時に使う機器ではなく、内容物の容器が温蔵温度に適合するかも確認します。
        </p>

        <H2 id="cooler-box-types">クーラーボックスは断熱方式・硬さ・収納性で選ぶ</H2>
        <Figure
          file="hard-soft-vacuum-cooler-comparison.jpg"
          alt="ハード・ソフト・真空断熱クーラーボックスを現場用途で比較するイメージ"
          caption="保冷力だけでなく、荷崩れ、清掃、折りたたみ、工具収納との連結まで比較します。"
        />
        <TableWrap>
          <thead><tr><Th>タイプ</Th><Th>強み</Th><Th>注意</Th><Th>向く場面</Th></tr></thead>
          <tbody>
            <tr><Td>真空断熱ハード</Td><Td>高保冷を狙いやすい</Td><Td>重量・価格・大型化</Td><Td>長時間、開閉が多い、高温環境</Td></tr>
            <tr><Td>発泡ウレタン・一般ハード</Td><Td>保冷・耐久・価格のバランス</Td><Td>保冷条件は製品差が大きい</Td><Td>班用、日帰り、車載</Td></tr>
            <tr><Td>厚手ソフト</Td><Td>軽量、折りたたみ、保管性</Td><Td>変形、底面、汁漏れ、積み重ね</Td><Td>頻繁な持ち運び、帰路の収納</Td></tr>
            <tr><Td>工具システム連結</Td><Td>車両内で収納群と一体化</Td><Td>容量と連結規格が限定</Td><Td>保守・設備工事チーム</Td></tr>
          </tbody>
        </TableWrap>

        <H2 id="small-cooler">12〜27Lは個人・少人数班・移動作業向け</H2>
        <p className="leading-8 text-gray-700">
          12〜27Lは、車両から作業場所まで運びやすく、班ごとに分けやすい容量です。同じ15Lでも、真空断熱ハード、工具システム連結、ソフトバッグで使用感が大きく異なります。
        </p>
        <ProductGrid ids={["cfv12", "crfx26", "cfv26", "packout", "gcl27", "vitc15aw"]} />

        <H2 id="large-cooler">35〜60Lは現場拠点・多人数・長時間向け</H2>
        <p className="leading-8 text-gray-700">
          大型クーラーは現場の補充拠点に向きますが、全員が同じ箱を開けると冷気が逃げます。予備在庫用と配布用を分ける、班ごとの小型容器へ補充する、といった開閉管理が重要です。
        </p>
        <ProductGrid ids={["crfx44", "frc45", "tc40k", "vitc60"]} />

        <H2 id="soft-cooler">折りたたみソフト・大型ソフト・工具連結式の使い分け</H2>
        <p className="leading-8 text-gray-700">
          使用後の収納を小さくしたい場合はソフトタイプが有利です。ただし、液体を直接ためる用途ではなく、内容物を密閉し、底面を保護します。重い飲料を入れたまま肩ベルトだけで運ばず、二人運搬や台車も検討します。
        </p>
        <ProductGrid ids={["tcb35a", "tcb50", "hd20"]} />

        <H2 id="ice-pack">保冷剤は「数」より凍結・交換・再凍結の循環を作る</H2>
        <p className="leading-8 text-gray-700">
          大型保冷剤を購入しても、冷凍庫の能力が足りず翌朝までに凍らなければ運用できません。使用中、予備、再凍結中の3群に分け、各班の返却時刻と再配布時刻を記録します。容器上部からの熱侵入を考え、製品説明に従って配置します。
        </p>
        <ProductGrid ids={["icepack"]} />

        <H2 id="hybrid-operation">最も実務的なのは「拠点の冷蔵庫＋班のクーラーボックス」</H2>
        <Figure
          file="portable-fridge-cooler-box-hybrid-operation.jpg"
          alt="現場車両のポータブル冷蔵庫から各班のクーラーボックスへ飲料と保冷剤を補充するイメージ"
          caption="能動冷却を拠点へ、軽量な保冷容器を班へ配置し、役割を分担します。"
        />
        <TableWrap>
          <thead><tr><Th>配置</Th><Th>役割</Th><Th>候補</Th><Th>運用ポイント</Th></tr></thead>
          <tbody>
            <tr><Td>車両・休憩拠点</Td><Td>飲料・保冷剤を冷やす補充基地</Td><Td>21〜40Lポータブル冷蔵庫</Td><Td>電源、放熱、温度、開閉担当</Td></tr>
            <tr><Td>各作業班</Td><Td>必要分を作業場所へ運ぶ</Td><Td>12〜27Lハード・ソフト</Td><Td>班名、返却時刻、直射日光回避</Td></tr>
            <tr><Td>予備在庫</Td><Td>開閉を減らし、午後分を保つ</Td><Td>35〜60L高保冷クーラー</Td><Td>配布用と分けて封印・記録</Td></tr>
            <tr><Td>交換用保冷剤</Td><Td>停電・運搬時のバックアップ</Td><Td>まとめ買い保冷剤</Td><Td>凍結・使用・再凍結を色分け</Td></tr>
          </tbody>
        </TableWrap>
        <p className="leading-8 text-gray-700">
          休憩所全体の設備・日よけ・送風・水分補給は、
          <a href="/articles/worksite-rest-area-heat" className="font-bold text-gray-900 underline">
            現場休憩所の暑さ対策
          </a>
          で整理しています。本記事は保冷機器の選定・配備に特化し、既存記事との役割を分けます。
        </p>

        <H2 id="safety-maintenance">車載・清掃・温度管理で確認したいこと</H2>
        <Figure
          file="portable-cold-storage-inspection-cleaning.jpg"
          alt="法人担当者がポータブル冷蔵庫とクーラーボックスを清掃・点検するイメージ"
          caption="電源コード、放熱口、内装、パッキン、保冷剤、管理番号を定期点検します。"
        />
        <ul className="ml-6 list-disc space-y-3 leading-7 text-gray-700">
          <li>車両走行中に本体・蓋・内容物が動かないよう固定する</li>
          <li>放熱口・吸気口を荷物や壁で塞がない</li>
          <li>高温車内、直射日光、雨、粉じん、水しぶきを避ける</li>
          <li>電圧・電流・コード・ヒューズ・低電圧保護を確認する</li>
          <li>食品・飲料と汚れた工具・薬品・廃棄物を同じ容器へ入れない</li>
          <li>結露・漏れを拭き、蓋を開けて十分に乾燥させる</li>
          <li>保冷剤の破れ・膨れ・漏れ、クーラー内袋の傷を点検する</li>
          <li>温度逸脱や電源停止があった内容物の扱いを事前に決める</li>
        </ul>
        <TableWrap>
          <thead><tr><Th>管理項目</Th><Th>使用前</Th><Th>使用中</Th><Th>使用後</Th></tr></thead>
          <tbody>
            <tr><Td>電源・本体</Td><Td>コード、プラグ、ヒューズ、固定、放熱口</Td><Td>異音、停止、電圧低下、庫内温度</Td><Td>電源を切り、コードと本体の損傷を点検</Td></tr>
            <tr><Td>内容物</Td><Td>予冷、数量、包装、必要温度を確認</Td><Td>追加時刻、開閉、温度逸脱を記録</Td><Td>残品の扱いと廃棄・返却ルールを適用</Td></tr>
            <tr><Td>クーラー・保冷剤</Td><Td>凍結状態、内袋、蓋、パッキンを確認</Td><Td>直射日光を避け、開閉を減らす</Td><Td>洗浄・乾燥し、破れ・膨れ・漏れを隔離</Td></tr>
            <tr><Td>法人管理</Td><Td>管理番号、配備先、担当者を記録</Td><Td>貸出・返却・補充の時刻を記録</Td><Td>使用履歴、故障、交換、後継品を台帳へ反映</Td></tr>
          </tbody>
        </TableWrap>

        <H2 id="mistakes">よくある選び方・使い方の失敗</H2>
        <ol className="ml-6 list-decimal space-y-3 leading-7 text-gray-700">
          <li>クーラーボックスへ常温飲料を入れれば冷えると思う</li>
          <li>容量Lだけを比べ、庫内寸法とボトル向きを確認しない</li>
          <li>保冷剤が占める体積を考えない</li>
          <li>本体重量だけを見て満載時に持ち上げられない</li>
          <li>DC12V専用機を24V車へ直接接続する</li>
          <li>ACアダプタ別売を見落とす</li>
          <li>エンジン停止中にスターターバッテリーを使い続ける</li>
          <li>ポータブル電源の定格Whをそのまま稼働時間にする</li>
          <li>放熱口を荷物で塞ぐ</li>
          <li>炎天下の閉鎖車内へ放置する</li>
          <li>冷凍品と飲料を1槽へ入れ、温度帯が合わない</li>
          <li>2槽式の各槽容量を確認しない</li>
          <li>温蔵付なら冷蔵と温蔵を同時に使えると思う</li>
          <li>最大保冷日数を現場条件でも保証される数値と思う</li>
          <li>保冷剤を完全凍結できる冷凍庫能力がない</li>
          <li>保冷剤の交換・返却ルールを決めない</li>
          <li>全員が大型クーラーを頻繁に開ける</li>
          <li>ソフトクーラーへ鋭利物を入れる</li>
          <li>食品と汚れた工具を同じ容器へ入れる</li>
          <li>飲料漏れや結露を残したまま蓋を閉める</li>
          <li>車載固定をせず急制動で本体が動く</li>
          <li>後継品表示を確認せず旧型を標準採用品にする</li>
          <li>商品画像だけで外寸・ハンドル込み寸法を判断する</li>
          <li>温度保証が必要な医薬品・検体へ一般機器を使う</li>
          <li>故障・停電時のバックアップを用意しない</li>
        </ol>

        <H2 id="corporate-checklist">法人購買・現場配備チェックリスト</H2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "用途・内容物",
              items: ["冷蔵・冷凍・温蔵", "飲料・弁当・保冷剤", "必要温度", "使用時間", "温度保証の要否"],
            },
            {
              title: "電源・設置",
              items: ["AC100V／DC12V／DC24V", "サブ電源", "低電圧保護", "放熱スペース", "車載固定", "雨・粉じん"],
            },
            {
              title: "容量・運搬",
              items: ["人数", "補充間隔", "庫内寸法", "収納本数", "本体重量", "満載重量", "台車・二人運搬"],
            },
            {
              title: "運用・点検",
              items: ["予冷", "開閉担当", "温度記録", "清掃・乾燥", "保冷剤ローテーション", "故障時対応", "後継品"],
            },
          ].map((block) => (
            <section key={block.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-bold text-gray-900">{block.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2"><span aria-hidden>□</span><span>{item}</span></li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <H2 id="faq">よくある質問</H2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5">
              <summary className="cursor-pointer font-bold text-gray-900">{faq.q}</summary>
              <p className="mt-3 leading-7 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>

        <H2 id="sources">参考にした一次情報・公式情報</H2>
        <ul className="ml-6 list-disc space-y-3 leading-7 text-gray-700">
          <li><a href="https://www.sawafuji.co.jp/jp/products/refrigerator/" target="_blank" rel="noopener noreferrer" className="underline">澤藤電機 ENGEL冷蔵庫 製品情報</a></li>
          <li><a href="https://www.sawafuji.co.jp/upfiles/engel/catalog/ENGEL%20%E3%82%AB%E3%82%BF%E3%83%AD%E3%82%B023.9.pdf" target="_blank" rel="noopener noreferrer" className="underline">ENGELポータブル冷蔵庫カタログ</a></li>
          <li><a href="https://www.sawafuji.co.jp/jp/products/refrigerator/refrigerator-qanda/" target="_blank" rel="noopener noreferrer" className="underline">ENGEL冷蔵庫Q&amp;A</a></li>
          <li><a href="https://www.irisohyama.co.jp/hugel/cooler-box/" target="_blank" rel="noopener noreferrer" className="underline">アイリスオーヤマ HUGELクーラーボックス</a></li>
          <li><a href="https://jej-astage.co.jp/info/15252/" target="_blank" rel="noopener noreferrer" className="underline">JEJアステージ COREFLUX VIP製品情報</a></li>
          <li><a href="https://www.orange-book.com/ja/c/products/index.html?itemCd=TCB35+++++++++++++++++++++++++3100" target="_blank" rel="noopener noreferrer" className="underline">TRUSCO 超保冷クーラーBOX 35L</a></li>
          <li><a href="https://www.orange-book.com/ja/c/products/index.html?itemCd=48228460++++++++++++++++++++++7317" target="_blank" rel="noopener noreferrer" className="underline">Milwaukee PACKOUTクーラーボックス</a></li>
        </ul>
        <p className="mt-4 text-sm leading-6 text-gray-500">
          商品仕様は変更される場合があります。公開前および購入前に、メーカー公式情報・取扱説明書・販売ページを再確認してください。
        </p>

        <H2 id="summary">まとめ｜冷蔵庫を補充基地、クーラーボックスを班配備にすると選びやすい</H2>
        <p className="leading-8 text-gray-700">
          ポータブル冷蔵庫は電源で冷やすため、長時間・連日・常温品の追加・温度設定に向きます。クーラーボックスは電源不要で運びやすく、班ごとの短時間運用に向きます。二者択一ではなく、車両や休憩所の冷蔵庫で飲料・保冷剤を冷やし、12〜27Lのクーラーボックスへ配る構成が、現場では管理しやすい方法です。
        </p>
        <CTA
          title="用途に合う商品をもう一度確認する"
          text="電源・必要温度・人数・補充間隔を確定したうえで、冷蔵庫とクーラーボックスの各商品ページで最新仕様を確認してください。"
          links={[
            { href: "#product-mt17f", label: "小型ポータブル冷蔵庫" },
            { href: "#product-mt45fcp", label: "40L・2槽式" },
            { href: "#product-vitc20ch", label: "真空断熱20L" },
            { href: "#product-tcb35a", label: "折りたたみ35L" },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
