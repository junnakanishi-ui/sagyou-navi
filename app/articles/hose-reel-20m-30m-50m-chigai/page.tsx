import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "hose-reel-20m-30m-50m-chigai";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/industrial-hose-reel-length-selection-hero.jpg`,
  measure: `${ARTICLE_IMG}/hose-reel-required-length-measurement.jpg`,
  lengthCompare: `${ARTICLE_IMG}/hose-reel-20m-30m-50m-comparison.jpg`,
  diameter: `${ARTICLE_IMG}/hose-inner-diameter-water-flow-comparison.jpg`,
  material: `${ARTICLE_IMG}/covered-open-stainless-hose-reel-types.jpg`,
  hoseVsBody: `${ARTICLE_IMG}/hose-reel-with-hose-and-bare-drum-comparison.jpg`,
  maintenance: `${ARTICLE_IMG}/industrial-hose-reel-cleaning-inspection-storage.jpg`,
};

export const metadata: Metadata = {
  title: "ホースリール20m・30m・50mの違い｜業務用の長さ・内径・材質の選び方",
  description:
    "ホースリールは20m・30m・50mのどれを選ぶかを冒頭で即答。必要長さの測り方、ホース内径と水量、長さと水圧の関係、樹脂・金属・ステンレス、フルカバーとオープンドラム、ホース付きと本体のみ、手巻き・自動巻きまでを実務フローで解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "ホースリール20m・30m・50mの違い｜工場・現場で失敗しない選び方",
    description:
      "ホースリールは20m・30m・50mのどれを選ぶかを冒頭で即答。必要長さの測り方、ホース内径と水量、長さと水圧の関係、樹脂・金属・ステンレス、フルカバーとオープンドラム、ホース付きと本体のみ、手巻き・自動巻きまでを実務フローで解説します。",
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

// ---- 商品マスタ（品名・仕様・現行状況は一次情報で要確認。価格は固定表示しない）----
type P = {
  code: string; name: string; short: string; img: string; url: string;
  badge: string; use: string; solves: string; check: string;
};

// ===== 20m =====
const P_SFTR20S: P = { code: "SFTR20S", name: "TOYOX トヨフィットSリール SFTR20S（20m）", short: "TOYOX SFTR20S（20m）", img: "ta051619-sftr20s.jpg", url: R("ta051619-sftr20s/"), badge: "20m／樹脂・取り回し重視", use: "20m前後で足りる中小規模の工場・現場の散水", solves: "取り回しの軽さと必要長さのバランスをとりたいとき", check: "ホース内径・使用圧力・接続ねじ・ノズル付属（要確認）" };
const P_RFC320GY: P = { code: "RFC320GY", name: "タカギ リフトメタル RFC320GY", short: "タカギ RFC320GY", img: "ta051865-rfc320gy.jpg", url: R("ta051865-rfc320gy/"), badge: "20m前後／金属フレーム", use: "持ち運び・段差移動のある現場", solves: "本体の堅牢さと可搬性を両立したいとき", check: "ホース全長・内径・使用圧力・付属（要確認）" };
const P_R320WS: P = { code: "R320WS", name: "タカギ オーロラWASH R320WS", short: "タカギ オーロラWASH R320WS", img: "ta051852-r320ws.jpg", url: R("ta051852-r320ws/"), badge: "20m前後／洗浄向け", use: "車両・床の洗浄を伴う散水", solves: "洗浄用途で使いたいとき", check: "ホース全長・内径・ノズル・使用圧力（要確認）" };
const P_FHEXN20W: P = { code: "FHEXN20W", name: "IRIS フルカバーホースリールEX 20M FHEXN20W", short: "IRIS フルカバーEX 20M", img: "ta051374-fhexn20w.jpg", url: R("ta051374-fhexn20w/"), badge: "20m／樹脂フルカバー", use: "屋外でホースを保護したい散水", solves: "ホースの日射・汚れを抑えたいとき", check: "フルカバーでも屋外放置は避ける・内径・付属（要確認）" };
const P_RT220CG: P = { code: "RT220CG", name: "タカギ マーキュリーIIツイスター20m RT220CG", short: "タカギ マーキュリーIIツイスター20m", img: "ta051869-rt220cg.jpg", url: R("ta051869-rt220cg/"), badge: "20m／樹脂", use: "一般的な散水・取り回し重視", solves: "ねじれを抑えて扱いたいとき", check: "内径・使用圧力・ノズル付属（要確認）" };
const P_RC1220GY: P = { code: "RC1220GY", name: "タカギ BOXY NEXT 20m RC1220GY", short: "タカギ BOXY NEXT 20m", img: "ta051859-rc1220gy.jpg", url: R("ta051859-rc1220gy/"), badge: "20m／ボックス型", use: "省スペースで保管したい散水", solves: "設置・保管をすっきりさせたいとき", check: "内径・使用圧力・付属（要確認）" };
const P_THR20X: P = { code: "THR20X", name: "TRUSCO ハイスペックホースリール20m THR20X", short: "TRUSCO THR20X（20m）", img: "ta046537-thr20x.jpg", url: R("ta046537-thr20x/"), badge: "20m／大流量タイプ", use: "水量を確保したい工場の散水・洗浄", solves: "しっかりした水量で使いたいとき", check: "内径・使用圧力・ホース/ノズル付属（オレンジブックで要確認）" };
const P_SSA20J: P = { code: "SSA20J", name: "ハタヤ 大口径オールステンレス蛇腹ホースリール20m SSA20J", short: "ハタヤ SSA20J（20m・ステンレス）", img: "ta051884-ssa20j.jpg", url: R("ta051884-ssa20j/"), badge: "20m／ステンレス・大口径", use: "屋外・水まわりで錆に配慮したい大流量散水", solves: "腐食に配慮しつつ大口径で使いたいとき", check: "ステンレスも環境で錆びる・内径・使用圧力（要確認）" };

// ===== 30m =====
const P_SFTR30S: P = { code: "SFTR30S", name: "TOYOX トヨフィットSリール SFTR30S（30m）", short: "TOYOX SFTR30S（30m）", img: "ta051620-sftr30s.jpg", url: R("ta051620-sftr30s/"), badge: "30m／樹脂・距離と管理性", use: "30m前後の距離が要る中規模施設", solves: "距離と取り回しのバランスをとりたいとき", check: "内径・使用圧力・接続ねじ・付属（要確認）" };
const P_R330TBR: P = { code: "R330TBR", name: "タカギ タフブラウン30m R330TBR", short: "タカギ タフブラウン30m", img: "ta051853-r330tbr.jpg", url: R("ta051853-r330tbr/"), badge: "30m／樹脂・堅牢", use: "屋外の中距離散水", solves: "タフに使える30mが欲しいとき", check: "内径・使用圧力・付属（要確認）" };
const P_RC330TNB: P = { code: "RC330TNB", name: "タカギ オーロラBOXYツイスター RC330TNB", short: "タカギ オーロラBOXYツイスター30m", img: "ta051862-rc330tnb.jpg", url: R("ta051862-rc330tnb/"), badge: "30m／ボックス型", use: "省スペース保管の中距離散水", solves: "ねじれを抑えつつ収納したいとき", check: "内径・使用圧力・付属（要確認）" };
const P_RC1330BR: P = { code: "RC1330BR", name: "タカギ BOXY NEXT 30m RC1330BR", short: "タカギ BOXY NEXT 30m", img: "ta051860-rc1330br.jpg", url: R("ta051860-rc1330br/"), badge: "30m／ボックス型", use: "保管性重視の中距離散水", solves: "設置・保管をすっきりさせたいとき", check: "内径・使用圧力・付属（要確認）" };
const P_R330ZE: P = { code: "R330ZE", name: "タカギ オーロラZERO 30m R330ZE", short: "タカギ オーロラZERO 30m", img: "ta051854-r330ze.jpg", url: R("ta051854-r330ze/"), badge: "30m／樹脂", use: "一般的な30m散水", solves: "扱いやすい30mが欲しいとき", check: "内径・使用圧力・付属（要確認）" };
const P_FHEXN30W: P = { code: "FHEXN30W", name: "IRIS フルカバーホースリールEX 30M FHEXN30W", short: "IRIS フルカバーEX 30M", img: "ta051761-fhexn30w.jpg", url: R("ta051761-fhexn30w/"), badge: "30m／樹脂フルカバー", use: "屋外でホースを保護したい中距離散水", solves: "ホースの露出を抑えたいとき", check: "フルカバーでも屋外放置は避ける・内径・付属（要確認）" };
const P_RT330CG: P = { code: "RT330CG", name: "タカギ マーキュリーツイスター30m RT330CG", short: "タカギ マーキュリーツイスター30m", img: "ta051870-rt330cg.jpg", url: R("ta051870-rt330cg/"), badge: "30m／樹脂", use: "ねじれを抑えたい中距離散水", solves: "取り回しよく30mを使いたいとき", check: "内径・使用圧力・付属（要確認）" };
const P_THR30X: P = { code: "THR30X", name: "TRUSCO ハイスペックホースリール30m THR30X", short: "TRUSCO THR30X（30m）", img: "ta046538-thr30x.jpg", url: R("ta046538-thr30x/"), badge: "30m／大流量タイプ", use: "水量を確保したい中距離の工場散水・洗浄", solves: "30mで水量も確保したいとき", check: "内径・使用圧力・ホース/ノズル付属（オレンジブックで要確認）" };

// ===== 10〜15m・自動巻き =====
const P_SWR415P: P = { code: "SWR415P", name: "TRIENS 水用ホースリール ガン付 15m SWR415P", short: "TRIENS SWR415P（15m・ガン付）", img: "ta051894-swr415p.jpg", url: R("ta051894-swr415p/"), badge: "15m／自動巻き・ガン付", use: "定位置での短距離散水・洗浄", solves: "自動巻きで手早く収納したいとき", check: "使用圧力・ガン仕様・接続規格（要確認）" };
const P_SSD15J: P = { code: "SSD15J", name: "ハタヤ オールステンレス蛇腹ホースリール15m SSD15J", short: "ハタヤ SSD15J（15m・ステンレス）", img: "ta051887-ssd15j.jpg", url: R("ta051887-ssd15j/"), badge: "15m／ステンレス", use: "短距離・水まわりで錆に配慮", solves: "コンパクトで腐食に配慮したいとき", check: "ステンレスも環境で錆びる・内径・使用圧力（要確認）" };
const P_CEJN10: P = { code: "CEJN-10m", name: "CEJN 水用ホースリール10m 199112240", short: "CEJN 199112240（10m）", img: "ta051679-199112240.jpg", url: R("ta051679-199112240/"), badge: "10m／自動巻き", use: "定位置の近距離散水・洗浄", solves: "自動巻きで足元をすっきりさせたいとき", check: "使用圧力・接続規格・巻取（要確認）" };
const P_CEJN14: P = { code: "CEJN-14m", name: "CEJN 水用ホースリール14m 199112230", short: "CEJN 199112230（14m）", img: "ta051678-199112230.jpg", url: R("ta051678-199112230/"), badge: "14m／自動巻き", use: "定位置の近〜中距離散水・洗浄", solves: "自動巻きで取り回しよく使いたいとき", check: "使用圧力・接続規格・巻取（要確認）" };

// ===== 40〜50m・大型 =====
const P_HLA0NY: P = { code: "HLA0NY", name: "ハタヤ テツノホースリール40m用 本体のみ HLA0NY", short: "ハタヤ HLA0NY（40m用・本体のみ）", img: "ta051785-hla0ny.jpg", url: R("ta051785-hla0ny/"), badge: "40m用／本体のみ（ホースなし）", use: "長距離・広範囲で本体を選びたい現場", solves: "適合ホースを別途選んで構成したいとき", check: "ホース別売・適合ホース径/長さ・接続（要確認）" };
const P_THR50X: P = { code: "THR50X", name: "TRUSCO ハイスペックホースリール50m THR50X", short: "TRUSCO THR50X（50m）", img: "ta046539-thr50x.jpg", url: R("ta046539-thr50x/"), badge: "50m／大流量タイプ", use: "大型施設・広範囲の散水・洗浄", solves: "50mの長距離を水量確保して使いたいとき", check: "内径・使用圧力・ホース/ノズル付属・本体重量（オレンジブックで要確認）" };
const P_WS1550: P = { code: "WS1550", name: "HARAX ホース付ホースリール マキ太郎 WS1550", short: "HARAX マキ太郎 WS1550", img: "ta051915-ws1550.jpg", url: R("ta051915-ws1550/"), badge: "大型／ホース付（要確認）", use: "屋外の広範囲散水", solves: "広い範囲へ届かせたいとき", check: "正式な巻取長・ホース付属・適合ホース径（要確認）" };
const P_LL: P = { code: "SUPER-REEL-LL", name: "IRIS スーパーリールLL 50m", short: "IRIS スーパーリールLL 50m", img: "ta051488-ll.jpg", url: R("ta051488-ll/"), badge: "50m／大型", use: "広範囲の屋外散水", solves: "50mクラスで広くカバーしたいとき", check: "巻取長・ホース付属・使用圧力（要確認）" };
const P_SBF0N: P = { code: "SBF0N", name: "ハタヤ 大型業務用ホースリール SBF0N", short: "ハタヤ SBF0N（大型業務用）", img: "ta051876-sbf0n.jpg", url: R("ta051876-sbf0n/"), badge: "大型業務用／本体（付属要確認）", use: "大型施設の業務用散水", solves: "業務用の大型リールが欲しいとき", check: "巻取長・ホース付属・適合ホース径（要確認）" };

// ===== ホースなし・特殊 =====
const P_553700: P = { code: "553700", name: "KAKUDAI 業務用ホースドラム 553-700", short: "KAKUDAI 553-700（本体のみ）", img: "ta051719-553700.jpg", url: R("ta051719-553700/"), badge: "本体のみ（ホースなし）", use: "ホースを選んで構成したい業務用途", solves: "既存/指定ホースを使って構成したいとき", check: "ホース別売・適合ホース径/長さ・接続ねじ（要確認）" };
const P_HSP12MS: P = { code: "HSP12MS", name: "OKS 高圧ホースリール 手動巻移動スタンド型 HSP12MS", short: "OKS HSP12MS（高圧・移動式）", img: "ta051792-hsp12ms.jpg", url: R("ta051792-hsp12ms/"), badge: "高圧用／移動式（※一般散水用ではない）", use: "高圧機器の高圧ホースの取り回し・移動", solves: "高圧ホースを整理して移動したいとき", check: "一般散水用に使わない・高圧ホースの耐圧・接続金具・巻取寸法（要確認）" };

// ---- FAQ（画面表示とJSON-LDの単一ソース）----
const faqs: { q: string; a: string }[] = [
  { q: "ホースリールは20mと30mのどちらを選べばよいですか？", a: "蛇口から最遠点までの実際の動線を測り、設備・車両・柱を回り込む距離と2〜3m程度の作業余裕を足して判断します。合計が20m前後なら20m、25〜30m前後なら30mが目安です。長さだけでなく内径・水量・本体重量も確認します。" },
  { q: "30mと50mはどう選び分けますか？", a: "回り込みと余裕を含めた必要長さが30m前後に収まるなら30m、40〜50mに及ぶ大型施設・広範囲なら50mが候補です。50mは水圧低下・巻き取り負担・保管サイズが増えるため、必要な範囲に対して過剰でないかを確認します。" },
  { q: "ホースは長ければ長いほどよいですか？", a: "長いほどよいわけではありません。長いホースは水圧が下がりやすく、巻き取りが重く、保管スペースも大きくなります。必要な長さに余裕を少し足す程度が扱いやすく、過剰な長さはデメリットになります。" },
  { q: "必要なホースの長さはどう測りますか？", a: "直線距離ではなく、蛇口から最遠点までの実際の動線で測ります。機械・車両・柱を回り込む距離を加え、さらに2〜3m程度の作業余裕を足した合計が必要長さの目安です。段差や障害物も考慮します。" },
  { q: "作業余裕は何mみておけばよいですか？", a: "一般的な目安として2〜3m程度です。ノズルを動かす範囲や、最遠点でホースが突っ張らない余裕を確保します。現場の作業内容によって前後するため、実際の動きに合わせて調整します。" },
  { q: "50mが向くのはどんな場所ですか？", a: "大型工場・倉庫・広い構内など、蛇口から最遠点までが40〜50mに及ぶ広範囲の散水・洗浄です。ただし水圧低下や巻き取り負担が増えるため、複数の蛇口・複数台の運用と比較して選びます。" },
  { q: "ホースが長いと水圧は弱くなりますか？", a: "長いほどホース内の抵抗が増え、先端の水圧・水量は下がりやすくなります。内径が細いほど、ねじれているほど影響は大きくなります。水圧は長さ・内径・水源・ノズル・継手など複数の要因で決まり、内径だけでは決まりません。" },
  { q: "内径12mmと15mmはどう違いますか？", a: "内径が大きいほど同じ条件で流せる水量が増えやすく、長尺時の水量確保に有利です。一方でホースが太く重くなり、取り回しや巻き取りの負担は増えます。散水中心か洗浄で水量が要るかで選びます。数値は商品ごとに確認します。" },
  { q: "フルカバータイプの注意点は？", a: "フルカバーはホースの露出を抑え、日射や汚れから守りやすいのが利点です。ただしフルカバーでも屋外に出しっぱなしでよいわけではありません。使用後は残水・汚れを処理し、適切に保管します。" },
  { q: "オープンドラムのメリットは？", a: "オープンドラムはホースの状態が見えやすく、太いホースや大流量に対応しやすいタイプがあります。金属・ステンレス製の業務用に多く、耐久や大口径を重視する現場に向きます。ホースの露出には保管上の配慮が要ります。" },
  { q: "金属製ホースリールの特徴は？", a: "金属フレームは樹脂より堅牢で、段差移動や業務使用の耐久に配慮した製品があります。重量が増える場合があるため、可搬性と設置方法を確認します。屋外では防錆・保管の配慮が必要です。" },
  { q: "ステンレス製は錆びませんか？", a: "ステンレスは腐食に強い素材ですが、絶対に錆びないわけではありません。環境や汚れの付着によっては錆が生じることがあります。屋外・水まわりでの耐食性を重視する場合の選択肢で、使用後の清掃・保管は必要です。" },
  { q: "食品工場ではどんなホースリールが向きますか？", a: "水まわりで衛生・耐食性が求められるため、ステンレス製などが候補になります。温水や洗剤の使用がある場合は、ホース・本体の適合を必ず確認します。用途に応じた材質・仕様の確認が前提です。" },
  { q: "本体のみ（ホースなし）の商品はどう選びますか？", a: "本体のみの商品はホース・ノズル・接続部品が付属しません。適合するホース径・全長・接続ねじを確認し、別途手配します。本体の巻取可能長を超えるホースは巻けないため、巻取寸法も確認します。" },
  { q: "既存のホースをそのまま使えますか？", a: "本体の適合ホース径・巻取可能長・接続規格に合えば使える場合があります。外径がドラムに合わない、巻取長を超える、接続ねじが合わないと使えません。商品名だけで判断せず、仕様を確認します。" },
  { q: "高圧ホースリールは散水に使えますか？", a: "高圧ホースリール（例：HSP12MS）は高圧機器のホース取り回し用で、一般の散水用ホースリールとは用途が異なります。一般散水用として紹介・使用せず、高圧ホースの耐圧・接続金具・巻取寸法を確認して用途に合わせて使います。" },
  { q: "自動巻きと手巻きはどう違いますか？", a: "自動巻きは収納が手早く定位置作業に向きますが、勢いよく戻すと危険・破損の原因になり、ゆっくり戻します。手巻きは構造がシンプルで大型・大流量に対応しやすい反面、巻き取りに手間がかかります。移動式・固定式も用途で選びます。" },
  { q: "ホースがねじれて巻きにくいときは？", a: "ねじれたまま巻くと片寄りや傷みの原因になります。ねじれを取ってからまっすぐ巻き、泥・砂を落として巻きます。ねじれにくい構造の製品もありますが、扱い方の基本は共通です。" },
  { q: "使っているうちに水量が落ちてきました。原因は？", a: "ホースのねじれ・つぶれ、継手やノズルの詰まり、内径や長さに対する水源の能力不足などが考えられます。長さ・内径・ねじれ・継手・水源のどこにボトルネックがあるかを順に確認します。" },
  { q: "冬季の保管で注意することは？", a: "残った水が凍結すると、ホースや本体の破損につながります。冬季は使用後に残水を抜き、凍結のおそれがある場所での放置を避けます。屋外設置では特に注意します。" },
  { q: "50m1台と複数台では、どちらがよいですか？", a: "広範囲を1台でまかなうと水圧低下・巻き取り負担が増えます。蛇口を複数設けて短めのリールを複数台にすると、取り回しと水圧が安定する場合があります。現場のレイアウトと管理性で比較します。" },
];

// ---- 構造化データ ----
const PAGE_URL = `${SITE_URL}/articles/${SLUG}`;
const HOME_URL = `${SITE_URL}/`;
const articleLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "ホースリール20m・30m・50mの違い｜工場・現場で失敗しない選び方",
  description: "20m・30m・50mの選び分け、必要長さの測り方、内径と水量、長さと水圧、樹脂・金属・ステンレス、フルカバーとオープンドラム、ホース付きと本体のみ、手巻き・自動巻きを解説。",
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
    { "@type": "ListItem", position: 3, name: "ホースリール20m・30m・50mの違い", item: PAGE_URL },
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
      <p className="mb-1 font-bold text-red-700">{title ?? "使用上の注意"}</p>
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
            <dt className="inline font-bold">向く現場：</dt>
            <dd className="inline">{p.use}</dd>
          </div>
          <div>
            <dt className="inline font-bold">解決できる課題：</dt>
            <dd className="inline">{p.solves}</dd>
          </div>
          <div>
            <dt className="inline font-bold">主な確認項目：</dt>
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
          <Link href="/articles" className="hover:underline">選び方ガイド</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">ホースリール20m・30m・50mの違い</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          ホースリール20m・30m・50mの違い｜工場・現場で失敗しない選び方
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月20日／約18分で読めます
        </p>

        <Figure
          src={IMG.hero}
          priority
          alt="工場・倉庫・建設現場で使う20m・30m・50mの業務用ホースリールを並べて比較している様子"
          caption="長さは直線距離ではなく実際の動線で選ぶ。内径・材質・付属も合わせて確認する"
        />

        <AnswerBox>
          <p><strong>長さは直線距離ではなく、実際の動線で決めます。</strong>蛇口から最遠点までの動線に、機械・車両・柱を回り込む距離と、2〜3m程度の作業余裕を足した合計が必要長さの目安です。</p>
          <p><strong>目安は、20mが小〜中規模、30mが中規模で距離と管理性の両立、40〜50mが大型施設・広範囲です。</strong>ただし長いほどよいわけではなく、50mは水圧低下・巻き取り負担・保管サイズが増えます。</p>
          <p><strong>長さ以外も確認します。</strong>ホース内径と必要水量、本体材質（樹脂・金属・ステンレス）、フルカバーかオープンか、手巻きか自動巻きか、そしてホース・ノズル・継手の付属と使用圧力・接続規格です。一般散水用と高圧用は区別します。</p>
        </AnswerBox>

        <p className={cls.body}>まず、記事前半で使う代表的なホースリールを並べます。選び方は次章以降で、長さ・内径・材質・形状・付属別に詳しく解説します。</p>

        <CardGrid>
          <ProductCard p={P_SFTR20S} priority />
          <ProductCard p={P_SFTR30S} priority />
          <ProductCard p={P_THR50X} priority />
          <ProductCard p={P_SSD15J} priority />
          <ProductCard p={P_SSA20J} priority />
          <ProductCard p={P_553700} priority />
        </CardGrid>

        <CTA label="現場の距離と用途からホースリールを選ぶ" href="#length" />

        {/* ===== H2-1 ===== */}
        <h2 id="length" className={cls.h2}>ホースリールは20m・30m・50mのどれを選ぶ？</h2>
        <p className={cls.body}>結論は「必要な長さは現場の動線で決める」です。まず代表的な長さの目安を押さえ、次章で測り方を具体化します。長さは直線距離ではなく、回り込みと作業余裕を含めた実動線で考えます。</p>
        <h3 className={cls.h3}>20m</h3>
        <p className={cls.body}>20mは小〜中規模の散水に向く長さです。取り回しが軽く、巻き取りや保管の負担も小さめです。蛇口の近くで作業範囲が限られる現場に適します。</p>
        <h3 className={cls.h3}>30m</h3>
        <p className={cls.body}>30mは中規模で、距離と管理性を両立しやすい長さです。20mでは届かないが50mは過剰、という現場で扱いやすく、業務用で選ばれることが多いレンジです。</p>
        <h3 className={cls.h3}>40〜50m</h3>
        <p className={cls.body}>40〜50mは大型施設・広範囲の散水・洗浄に向きます。ただし水圧低下・巻き取り負担・保管サイズが増えるため、本当に必要な範囲かを確認します。</p>
        <h3 className={cls.h3}>10〜15m</h3>
        <p className={cls.body}>10〜15mは定位置での近距離散水・洗浄に向きます。自動巻きやガン付きで手早く扱える製品があり、固定設備としても使いやすい長さです。</p>
        <h3 className={cls.h3}>長ければよいわけではない</h3>
        <p className={cls.body}>「とりあえず長いものを」と選ぶと、水圧が下がりやすく、巻き取りが重く、保管場所も取ります。必要な長さに少し余裕を足す程度が、扱いやすく管理もしやすい選び方です。</p>

        {/* ===== H2-2 ===== */}
        <h2 id="measure" className={cls.h2}>必要なホースの長さを測る方法</h2>
        <p className={cls.body}>長さ選びの失敗の多くは「直線距離で測る」ことから起きます。実際にホースが通る動線で測り、回り込みと余裕を足します。</p>
        <Figure src={IMG.measure} alt="蛇口から最遠点まで、機械や車両を回り込む実際の動線でホースの必要長さを測る様子" caption="直線距離ではなく、回り込みを含む実動線で測る" />
        <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">必要長さの目安（計算式）</p>
          <p className={cls.bodySm}>必要長さ ＝ <strong>実動線距離</strong>（蛇口→最遠点の実際の経路）＋ <strong>回り込み距離</strong>（機械・車両・柱を避ける分）＋ <strong>作業余裕 2〜3m程度</strong></p>
        </div>
        <h3 className={cls.h3}>実動線</h3>
        <p className={cls.body}>蛇口から最遠点まで、ホースが実際に通る経路に沿って測ります。まっすぐ引ける現場は少なく、通路や設備の間を通す分だけ距離が伸びます。</p>
        <h3 className={cls.h3}>車両・設備</h3>
        <p className={cls.body}>機械・車両・棚などを回り込む距離を加えます。直線では届いても、障害物を避けると数m単位で必要長さが増えることがあります。</p>
        <h3 className={cls.h3}>段差・障害物</h3>
        <p className={cls.body}>段差・スロープ・配管などを越える分も見込みます。上下の移動や迂回も距離に含めて考えます。</p>
        <h3 className={cls.h3}>作業余裕</h3>
        <p className={cls.body}>最遠点でホースが突っ張らないよう、2〜3m程度の作業余裕を足します。ノズルを動かす範囲も考慮します。過大な余裕は取り回しを重くするため、必要な分にとどめます。</p>
        <h3 className={cls.h3}>複数台との比較</h3>
        <p className={cls.body}>1台で長距離をまかなうより、蛇口を複数設けて短めのリールを複数台にした方が、取り回しや水圧が安定する場合があります。長さの前に配置も検討します。</p>
        <div className="my-6 overflow-x-auto">
          <p className="mb-2 font-bold text-gray-900">現場距離測定シート（記入用）</p>
          <table className={cls.table}>
            <thead><tr><Th>測定項目</Th><Th>距離</Th><Th>備考</Th></tr></thead>
            <tbody>
              <tr><Td>蛇口→最遠点の実動線</Td><Td>　　　m</Td><Td>通路・設備間の実際の経路</Td></tr>
              <tr><Td>回り込み（機械・車両・柱）</Td><Td>＋　　m</Td><Td>障害物を避ける分</Td></tr>
              <tr><Td>段差・障害物の迂回</Td><Td>＋　　m</Td><Td>上下移動・迂回</Td></tr>
              <tr><Td>作業余裕</Td><Td>＋2〜3m</Td><Td>突っ張らない余裕</Td></tr>
              <tr><Td><strong>必要長さの目安（合計）</strong></Td><Td><strong>　　　m</strong></Td><Td>20m／30m／40〜50mのどれに収まるか</Td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2-3 ===== */}
        <h2 id="merit" className={cls.h2}>20m・30m・50mのメリット・デメリット</h2>
        <p className={cls.body}>同じ用途でも、長さによって取り回し・巻き取り・保管・水圧のバランスが変わります。10〜15mも含めて比較します。</p>
        <Figure src={IMG.lengthCompare} alt="10〜15m・20m・30m・40〜50mのホースリールを長さ別に並べて本体サイズを比較した様子" caption="長さが増えるほど本体・保管サイズと巻き取り負担も増える" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>長さ</Th><Th>向く現場</Th><Th>取り回し</Th><Th>巻き取り負担</Th><Th>保管サイズ</Th><Th>主な用途</Th><Th>商品例</Th></tr></thead>
            <tbody>
              <tr><Td>10〜15m</Td><Td>定位置・近距離</Td><Td>軽い</Td><Td>小</Td><Td>小</Td><Td>洗い場・機械まわり</Td><Td>SSD15J／SWR415P／CEJN</Td></tr>
              <tr><Td>20m</Td><Td>小〜中規模</Td><Td>軽め</Td><Td>小〜中</Td><Td>小〜中</Td><Td>一般散水・車両洗浄</Td><Td>SFTR20S／RFC320GY／SSA20J</Td></tr>
              <tr><Td>30m</Td><Td>中規模</Td><Td>中</Td><Td>中</Td><Td>中</Td><Td>距離と管理性の両立</Td><Td>SFTR30S／THR30X</Td></tr>
              <tr><Td>40〜50m</Td><Td>大型施設・広範囲</Td><Td>重め</Td><Td>大</Td><Td>大</Td><Td>広い構内・広範囲洗浄</Td><Td>THR50X／スーパーリールLL／HLA0NY</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>長さが増えるほど届く範囲は広がりますが、水圧・巻き取り・保管の負担も増えます。必要長さに対して過不足のないレンジを選ぶのが基本です。</p>

        {/* ===== H2-4 ===== */}
        <h2 id="diameter" className={cls.h2}>ホース内径12mm・13.5mm・15mmの違い</h2>
        <p className={cls.body}>長さと同じくらい重要なのが内径です。内径は水量と取り回しのバランスに関わり、長尺ほど影響が出ます。</p>
        <Figure src={IMG.diameter} alt="内径12mm・13.5mm・15mmのホース断面と水量・取り回しの違いを示した比較" caption="内径が大きいほど水量に有利、細いほど軽く扱いやすい" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>内径</Th><Th>水量の考え方</Th><Th>取り回し</Th><Th>長尺時の注意</Th><Th>向く用途</Th></tr></thead>
            <tbody>
              <tr><Td>12mm前後</Td><Td>標準的。一般散水に扱いやすい</Td><Td>軽く扱いやすい</Td><Td>長尺・大流量では水量が不足しやすい</Td><Td>一般的な散水・軽作業</Td></tr>
              <tr><Td>13.5mm前後</Td><Td>やや水量に余裕</Td><Td>中程度</Td><Td>長さとのバランスを確認</Td><Td>散水〜軽い洗浄</Td></tr>
              <tr><Td>15mm前後</Td><Td>同条件で水量を確保しやすい</Td><Td>太く重くなりやすい</Td><Td>取り回し・巻き取り負担が増える</Td><Td>洗浄・大流量・長尺</Td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-xs text-gray-500">※内径の数値・呼びは商品ごとに異なります。実際の内径・外径は各商品ページ／メーカー情報で確認してください。</p>
        <h3 className={cls.h3}>水量</h3>
        <p className={cls.body}>内径が大きいほど、同じ水源・同じ長さでも流せる水量が増えやすくなります。洗浄で水量が要る用途では内径が効いてきます。</p>
        <h3 className={cls.h3}>散水と洗浄</h3>
        <p className={cls.body}>軽い散水中心なら細めでも扱いやすく、床・車両の洗浄で水量が要るなら太めが有利です。用途によって最適な内径は変わります。</p>
        <h3 className={cls.h3}>長尺</h3>
        <p className={cls.body}>長いホースほど抵抗が増えるため、長尺で水量を確保したい場合は内径にも余裕をみます。細く長い組み合わせは先端の水量が落ちやすくなります。</p>
        <h3 className={cls.h3}>蛇口・継手</h3>
        <p className={cls.body}>内径を活かすには、蛇口・継手・ノズルの口径も見合っている必要があります。途中に細い部分があると、そこがボトルネックになります。</p>
        <h3 className={cls.h3}>大流量</h3>
        <p className={cls.body}>大流量が必要な現場では、大口径・大流量タイプ（TRUSCOハイスペックやステンレス大口径など）が候補です。水源側の供給能力もあわせて確認します。</p>
        <CTA label="大流量・大口径タイプを見る" href="#material" />

        {/* ===== H2-5 ===== */}
        <h2 id="pressure" className={cls.h2}>ホースが長いと水圧が弱くなる？</h2>
        <p className={cls.body}>「長いホースは水圧が弱い」とよく言われます。傾向としては正しいですが、水圧は複数の要因で決まり、長さだけ・内径だけでは決まりません。</p>
        <h3 className={cls.h3}>ホース抵抗</h3>
        <p className={cls.body}>ホース内を水が流れると抵抗（圧力損失）が生じ、長いほど累積して先端の圧力・水量が下がりやすくなります。これが「長いと弱い」と感じる主因です。</p>
        <h3 className={cls.h3}>細さと長さ</h3>
        <p className={cls.body}>内径が細いほど抵抗は大きくなります。細く長い組み合わせは水量が落ちやすく、太くすると同じ長さでも水量を確保しやすくなります。長さと内径はセットで考えます。</p>
        <h3 className={cls.h3}>ねじれ</h3>
        <p className={cls.body}>ホースがねじれる・つぶれると、その部分で流れが絞られ水量が落ちます。ねじれにくい取り回しと、まっすぐな巻き取りが水量維持に効きます。</p>
        <h3 className={cls.h3}>ノズル・継手</h3>
        <p className={cls.body}>ノズルや継手が細い・詰まっていると、そこがボトルネックになります。内径を活かすには、経路全体の口径と清掃状態を確認します。</p>
        <h3 className={cls.h3}>水源</h3>
        <p className={cls.body}>元の水源（蛇口）の圧力・流量が不足していれば、ホースを太く短くしても限界があります。水圧が弱いと感じたら、水源側の能力も確認します。</p>
        <h3 className={cls.h3}>高圧用との違い</h3>
        <p className={cls.body}>一般の散水用ホースリールは水道圧での散水・洗浄用で、高圧洗浄機のような高圧用途とは異なります。散水用を高圧洗浄用として使わないでください。高圧用は専用の耐圧ホース・機器が必要です。</p>
        <Caution title="散水用と高圧用は別物">
          <p>一般散水用ホースリールを高圧洗浄用途に使わないでください。使用圧力を超えた使用は、ホースや継手の破損・けがにつながります。高圧用途には、耐圧・接続金具を確認した高圧専用の製品（例：HSP12MS）を用います。各商品の使用圧力は商品ページ／メーカー情報で確認してください。</p>
        </Caution>

        {/* ===== H2-6 ===== */}
        <h2 id="yoto" className={cls.h2}>用途別に選ぶ</h2>
        <p className={cls.body}>同じ「散水」でも、現場によって重視する条件は変わります。用途ごとの選び方の勘所を整理します。</p>
        <h3 className={cls.h3}>工場床・設備</h3>
        <p className={cls.body}>工場の床・設備洗浄では、必要な水量と取り回しを両立できる内径・長さを選びます。水量が要るなら大流量タイプ、水まわりなら耐食性も考慮します。</p>
        <h3 className={cls.h3}>車両・重機</h3>
        <p className={cls.body}>車両・重機の洗浄は泥・水量が多く、太めの内径と洗浄向けの製品が扱いやすい場面です。ホースを車両で踏まない取り回しにも注意します。</p>
        <h3 className={cls.h3}>工事現場</h3>
        <p className={cls.body}>工事現場は距離が長く、段差・障害物も多い環境です。実動線で必要長さを測り、堅牢な本体・十分な長さを選びます。粉じんの散水にも使われます。</p>
        <h3 className={cls.h3}>倉庫</h3>
        <p className={cls.body}>倉庫は通路・棚を回り込む距離が伸びやすい環境です。回り込みを含めた長さと、保管しやすい形状（ボックス型など）を選びます。</p>
        <h3 className={cls.h3}>食品・水産</h3>
        <p className={cls.body}>食品・水産・厨房は衛生と耐食性が求められ、ステンレス製などが候補になります。温水・洗剤の使用がある場合は、ホース・本体の適合を必ず確認します。</p>
        <h3 className={cls.h3}>農業・畜産</h3>
        <p className={cls.body}>農業・畜産は屋外・広範囲で使うことが多く、長尺・堅牢な製品や本体のみ＋適合ホースの構成が向く場合があります。屋外保管の配慮も必要です。</p>

        {/* ===== H2-7 ===== */}
        <h2 id="len20" className={cls.h2}>20mで取り回しを重視する商品</h2>
        <p className={cls.body}>20mは小〜中規模で扱いやすい定番レンジです。取り回し重視の樹脂タイプから、大流量・ステンレスまで用途で選べます。仕様は各商品ページで確認してください。</p>
        <CardGrid>
          <ProductCard p={P_SFTR20S} />
          <ProductCard p={P_RFC320GY} />
          <ProductCard p={P_R320WS} />
          <ProductCard p={P_FHEXN20W} />
          <ProductCard p={P_RT220CG} />
          <ProductCard p={P_RC1220GY} />
          <ProductCard p={P_THR20X} />
          <ProductCard p={P_SSA20J} />
        </CardGrid>
        <CTA label="20mのホースリールを比較する" href="#len20" />

        {/* ===== H2-8 ===== */}
        <h2 id="len30" className={cls.h2}>30mで距離と管理性を両立する商品</h2>
        <p className={cls.body}>30mは距離と管理性を両立しやすいレンジです。同シリーズの20mと迷う場合は、必要長さの合計がどちらに収まるかで判断します。</p>
        <CardGrid>
          <ProductCard p={P_SFTR30S} />
          <ProductCard p={P_R330TBR} />
          <ProductCard p={P_RC330TNB} />
          <ProductCard p={P_RC1330BR} />
          <ProductCard p={P_R330ZE} />
          <ProductCard p={P_FHEXN30W} />
          <ProductCard p={P_RT330CG} />
          <ProductCard p={P_THR30X} />
        </CardGrid>
        <CTA label="30mのホースリールを比較する" href="#len30" />

        {/* ===== H2-9 ===== */}
        <h2 id="len50" className={cls.h2}>40〜50mで広範囲へ届く商品</h2>
        <p className={cls.body}>40〜50mは大型施設・広範囲向けです。本体のみ（ホースなし）の製品もあるため、ホース付属・適合ホース径・巻取長を必ず確認します。</p>
        <CardGrid>
          <ProductCard p={P_THR50X} />
          <ProductCard p={P_LL} />
          <ProductCard p={P_WS1550} />
          <ProductCard p={P_SBF0N} />
          <ProductCard p={P_HLA0NY} />
        </CardGrid>
        <Caution title="大型・本体のみ商品は付属と巻取長を要確認">
          <p>HLA0NY・SBF0Nなどは本体のみ／付属の確認が必要な製品です。WS1550・スーパーリールLL・SBF0Nは、正式な巻取長・ホース付属・適合ホース径を公開前に必ず確認してください。本体のみの商品にホースが付属すると思い込まないでください。</p>
        </Caution>
        <CTA label="40〜50mの大型ホースリールを見る" href="#len50" />

        {/* ===== H2-10 ===== */}
        <h2 id="len1015" className={cls.h2}>10〜15mの固定設備・自動巻き商品</h2>
        <p className={cls.body}>10〜15mは定位置・近距離向けです。自動巻きやガン付き、ステンレス製など、固定設備として使いやすい製品があります。</p>
        <CardGrid>
          <ProductCard p={P_SWR415P} />
          <ProductCard p={P_SSD15J} />
          <ProductCard p={P_CEJN10} />
          <ProductCard p={P_CEJN14} />
        </CardGrid>
        <div className="my-6 overflow-x-auto">
          <p className="mb-2 font-bold text-gray-900">代表商品の比較（数値・付属は各商品ページ／メーカー情報で要確認）</p>
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>長さ</Th><Th>内径</Th><Th>材質</Th><Th>カバー</Th><Th>巻き取り</Th><Th>ホース付属</Th><Th>ノズル付属</Th><Th>使用圧力</Th><Th>向く用途</Th><Th>購入前確認</Th></tr></thead>
            <tbody>
              <tr><Td>TOYOX SFTR20S</Td><Td>20m</Td><Td>要確認</Td><Td>樹脂</Td><Td>要確認</Td><Td>手巻き</Td><Td>あり（要確認）</Td><Td>要確認</Td><Td>要確認</Td><Td>小〜中規模散水</Td><Td>内径・圧力・付属</Td></tr>
              <tr><Td>TOYOX SFTR30S</Td><Td>30m</Td><Td>要確認</Td><Td>樹脂</Td><Td>要確認</Td><Td>手巻き</Td><Td>あり（要確認）</Td><Td>要確認</Td><Td>要確認</Td><Td>中規模散水</Td><Td>内径・圧力・付属</Td></tr>
              <tr><Td>TRUSCO THR50X</Td><Td>50m</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>手巻き</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>広範囲・大流量</Td><Td>内径・圧力・重量・付属</Td></tr>
              <tr><Td>ハタヤ SSA20J</Td><Td>20m</Td><Td>大口径（要確認）</Td><Td>ステンレス</Td><Td>オープン系（要確認）</Td><Td>手巻き</Td><Td>あり（要確認）</Td><Td>要確認</Td><Td>要確認</Td><Td>屋外・大流量・耐食</Td><Td>内径・圧力・付属</Td></tr>
              <tr><Td>ハタヤ SSD15J</Td><Td>15m</Td><Td>要確認</Td><Td>ステンレス</Td><Td>要確認</Td><Td>要確認</Td><Td>あり（要確認）</Td><Td>要確認</Td><Td>要確認</Td><Td>近距離・耐食</Td><Td>内径・圧力・付属</Td></tr>
              <tr><Td>TRIENS SWR415P</Td><Td>15m</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>自動巻き</Td><Td>あり（要確認）</Td><Td>ガン付（要確認）</Td><Td>要確認</Td><Td>定位置洗浄</Td><Td>圧力・ガン・接続</Td></tr>
              <tr><Td>KAKUDAI 553-700</Td><Td>本体のみ</Td><Td>—</Td><Td>要確認</Td><Td>ドラム</Td><Td>手巻き</Td><Td>なし（別売）</Td><Td>なし</Td><Td>要確認</Td><Td>ホースを選ぶ構成</Td><Td>適合ホース径・接続</Td></tr>
              <tr><Td>OKS HSP12MS</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>—</Td><Td>手巻き・移動式</Td><Td>高圧ホース（要確認）</Td><Td>要確認</Td><Td>高圧（要確認）</Td><Td>高圧用途（散水用でない）</Td><Td>耐圧・接続金具・巻取寸法</Td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2-11 ===== */}
        <h2 id="cover" className={cls.h2}>フルカバーとオープンドラムの違い</h2>
        <p className={cls.body}>本体の形状は、ホースの保護・視認性・対応できる太さに関わります。フルカバー、オープンドラム、材質、巻き取り方式を横断で比較します。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>形状・種別</Th><Th>特徴</Th><Th>メリット</Th><Th>注意点</Th><Th>向く現場</Th></tr></thead>
            <tbody>
              <tr><Td>フルカバー</Td><Td>ホースを覆う</Td><Td>日射・汚れから保護・見た目すっきり</Td><Td>フルカバーでも屋外放置は避ける</Td><Td>屋外・保護重視</Td></tr>
              <tr><Td>オープンドラム</Td><Td>ホースが見える</Td><Td>状態確認しやすい・太いホース/大流量に対応しやすい</Td><Td>ホース露出の保管配慮</Td><Td>業務用・大口径</Td></tr>
              <tr><Td>金属</Td><Td>金属フレーム</Td><Td>堅牢・業務使用の耐久</Td><Td>重量・防錆に配慮</Td><Td>段差移動・業務用</Td></tr>
              <tr><Td>ステンレス</Td><Td>耐食性が高い素材</Td><Td>屋外・水まわりの錆に配慮</Td><Td>絶対錆びないわけではない</Td><Td>食品・水産・屋外</Td></tr>
              <tr><Td>自動巻き</Td><Td>ばね等で巻き取り</Td><Td>収納が手早い・定位置向き</Td><Td>勢いよく戻さない</Td><Td>固定設備・近距離</Td></tr>
              <tr><Td>本体のみ</Td><Td>ホースなし</Td><Td>ホースを選んで構成できる</Td><Td>ホース・付属は別途</Td><Td>指定ホース運用</Td></tr>
            </tbody>
          </table>
        </div>
        <Caution title="フルカバーでも屋外放置はしない">
          <p>フルカバーはホースを保護しますが、屋外に出しっぱなしでよいという意味ではありません。使用後は残水・汚れを処理し、直射日光や凍結を避けて保管すると長持ちします。</p>
        </Caution>

        {/* ===== H2-12 ===== */}
        <h2 id="material" className={cls.h2}>樹脂・金属・ステンレスの違い</h2>
        <p className={cls.body}>本体材質は、重量・耐久・耐食性に関わります。使用環境（屋内/屋外・水まわり・段差移動）で選びます。</p>
        <Figure src={IMG.material} alt="樹脂フルカバー・金属フレーム・ステンレス製のホースリールを材質別に並べて比較した様子" caption="樹脂は軽量、金属は堅牢、ステンレスは耐食性に配慮" />
        <p className={cls.body}>樹脂は軽く扱いやすく、一般的な散水に広く使われます。金属フレームは堅牢で、段差移動や業務使用の耐久に配慮した製品があります。ステンレスは腐食に強く、屋外・水まわり・食品/水産などの耐食性を重視する現場に向きます。ただしステンレスも環境や汚れによっては錆びることがあり、絶対に錆びないわけではありません。使用後の清掃・保管は材質を問わず必要です。</p>
        <CardGrid>
          <ProductCard p={P_SSA20J} />
          <ProductCard p={P_SSD15J} />
          <ProductCard p={P_CEJN10} />
          <ProductCard p={P_CEJN14} />
        </CardGrid>
        <CTA label="ステンレス製ホースリールを見る" href="#material" />

        {/* ===== H2-13 ===== */}
        <h2 id="honntai" className={cls.h2}>ホース付きと本体のみの違い</h2>
        <p className={cls.body}>「本体のみ」の商品は、ホース・ノズル・接続部品が付属しません。既存/指定ホースを使いたい場合に向きますが、適合の確認が前提です。</p>
        <Figure src={IMG.hoseVsBody} alt="ホース付きホースリールと、ホースなしの本体のみ（ドラム）を並べて違いを示した比較" caption="本体のみはホース・ノズル・継手が別途。適合ホース径と巻取長を確認する" />
        <div className="my-6 overflow-x-auto">
          <p className="mb-2 font-bold text-gray-900">付属品の確認（付属の有無は各商品ページで要確認）</p>
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>本体</Th><Th>ホース</Th><Th>ノズル・ガン</Th><Th>一次側ホース</Th><Th>継手</Th><Th>別途必要品</Th></tr></thead>
            <tbody>
              <tr><Td>KAKUDAI 553-700</Td><Td>あり</Td><Td>なし（別売）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>適合ホース・接続部品</Td></tr>
              <tr><Td>ハタヤ HLA0NY（40m用）</Td><Td>あり</Td><Td>なし（別売）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>適合ホース・接続部品</Td></tr>
              <tr><Td>ハタヤ SBF0N</Td><Td>あり</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>付属状況を要確認</Td></tr>
              <tr><Td>OKS HSP12MS（高圧）</Td><Td>あり</Td><Td>高圧ホース（要確認）</Td><Td>要確認</Td><Td>要確認</Td><Td>高圧金具（要確認）</Td><Td>高圧仕様の確認</Td></tr>
              <tr><Td>ホース付き製品（例：SFTR等）</Td><Td>あり</Td><Td>あり（要確認）</Td><Td>要確認</Td><Td>要確認</Td><Td>要確認</Td><Td>ノズル等は要確認</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>本体のみの商品は、適合するホース径・全長・接続ねじ・本体の巻取可能長を確認して、ホースや接続部品を別途手配します。ノズル・ガン・一次側ホースの付属は商品名から推測せず、商品ページで確認します。</p>
        <CTA label="ホースなしの業務用ドラムを見る" href="#honntai" />
        <CardGrid>
          <ProductCard p={P_553700} />
          <ProductCard p={P_HLA0NY} />
          <ProductCard p={P_SBF0N} />
          <ProductCard p={P_HSP12MS} />
        </CardGrid>

        {/* ===== H2-14 ===== */}
        <h2 id="winding" className={cls.h2}>手巻き・自動巻き・移動式の違い</h2>
        <p className={cls.body}>巻き取り方式と設置方式も使い勝手を左右します。作業スタイル（定位置か移動か）で選びます。</p>
        <h3 className={cls.h3}>手巻き</h3>
        <p className={cls.body}>手巻きは構造がシンプルで、大型・大流量に対応しやすい方式です。巻き取りに手間はかかりますが、頑丈で業務用の長尺に多く使われます。</p>
        <h3 className={cls.h3}>自動巻き</h3>
        <p className={cls.body}>自動巻きは収納が手早く、定位置での作業に向きます。ただし勢いよく戻すと危険・破損の原因になるため、戻すときはゆっくり操作します。ガン付き製品は洗浄作業に扱いやすいものがあります。</p>
        <h3 className={cls.h3}>移動式</h3>
        <p className={cls.body}>移動式（スタンド・キャスター付など）は、複数の場所で使う用途に向きます。使用時は本体を安定させ、動かないように固定して使います。高圧用の移動式は一般散水用と区別します。</p>
        <CardGrid>
          <ProductCard p={P_SWR415P} />
          <ProductCard p={P_CEJN10} />
          <ProductCard p={P_CEJN14} />
        </CardGrid>
        <CTA label="自動巻き・ガン付きリールを見る" href="#winding" />

        {/* ===== H2-15 ===== */}
        <h2 id="connect" className={cls.h2}>購入前に確認する接続規格</h2>
        <p className={cls.body}>長さ・内径・材質が合っていても、接続が合わなければ使えません。接続まわりは商品名から推測せず、必ず仕様を確認します。</p>
        <p className={cls.body}>確認したいのは、蛇口への接続規格（ねじ・コネクタ）、一次側ホースの有無、ホース側・ノズル側の継手、そして本体の適合ホース径・巻取可能長です。本体のみの商品はホース・ノズル・接続部品が付属しないため、これらを別途手配します。外径がドラムに合わない、巻取可能長を超えるホースは巻けません。温水・洗剤を使う場合は、ホース・本体の適合も確認します。接続規格を商品名だけから推測しないでください。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>確認項目</Th><Th>見るポイント</Th></tr></thead>
            <tbody>
              <tr><Td>蛇口接続</Td><Td>ねじ規格・コネクタの適合、一次側ホースの有無</Td></tr>
              <tr><Td>継手</Td><Td>ホース側・ノズル側の口径と規格</Td></tr>
              <tr><Td>適合ホース径</Td><Td>本体のみ商品で使えるホースの内径/外径</Td></tr>
              <tr><Td>巻取可能長</Td><Td>本体に巻ける最大長（超えると巻けない）</Td></tr>
              <tr><Td>使用圧力・温度</Td><Td>散水用/高圧用の別、温水・洗剤の適合</Td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2-16 ===== */}
        <h2 id="maintenance" className={cls.h2}>ホースリールを長持ちさせる使い方</h2>
        <p className={cls.body}>同じ製品でも、扱い方と保管で寿命は変わります。日常の使い方を仕組みにすると、トラブルと買い替えを減らせます。</p>
        <Figure src={IMG.maintenance} alt="ホースの泥を落とし、残水を抜いて、ねじれを取ってまっすぐ巻き取り保管する様子" caption="使用後は泥・残水を処理し、ねじれを取ってまっすぐ巻く" />
        <p className={cls.body}>ホースはねじれ・つぶれを取ってからまっすぐ巻き、泥・砂を落としてから巻き取ります。車両で踏まない取り回しにし、避難経路にホースを放置しません。使用後は残水・汚れを処理し、直射日光や凍結を避けて保管します。ステンレスや金属でも、汚れの付着や環境によっては錆が出るため、清掃・乾燥を習慣にします。本体は使用時に安定させ、必要に応じて固定します。</p>
        <Caution title="冬季の凍結に注意">
          <p>ホース内に残った水が凍結すると、ホースや本体の破損につながります。冬季や寒冷地では、使用後に残水を抜き、凍結のおそれがある場所での放置を避けてください。屋外設置では特に注意します。</p>
        </Caution>

        {/* ===== H2-17 ===== */}
        <h2 id="shippai" className={cls.h2}>よくある失敗</h2>
        <p className={cls.body}>ホースリール選び・使い方で起きやすい失敗を挙げます。当てはまるものは見直してください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "直線距離だけで長さを測った",
            "設備や車両の回り込みを含めなかった",
            "作業余裕を持たせなかった",
            "必要以上に50mを選んだ",
            "長さだけで内径を見なかった",
            "散水用を高圧用途に使った",
            "使用圧力を確認しなかった",
            "ホースが付属すると思い込んだ",
            "ノズルが付属すると思い込んだ",
            "一次側ホースを確認しなかった",
            "接続ねじを確認しなかった",
            "蛇口に接続できなかった",
            "外径がドラムに合わなかった",
            "巻取可能長を超えるホースを選んだ",
            "ステンレスは絶対錆びないと思った",
            "屋外へ出しっぱなしにした",
            "温水・洗剤の適合を確認しなかった",
            "ねじれたまま巻いた",
            "泥・砂を付けたまま巻いた",
            "ホースを車両で踏んだ",
            "冬季に残水を抜かなかった",
            "自動巻きを勢いよく戻した",
            "本体を固定しなかった",
            "避難経路にホースを放置した",
            "商品名だけで業務用と判断した",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-red-500">✕</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-18 ===== */}
        <h2 id="checklist" className={cls.h2}>法人向け購入チェックリスト</h2>
        <p className={cls.body}>複数拠点の散水用品を標準化する際のチェックリストです。選定・発注・運用の確認に使ってください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "実動線＋回り込み＋作業余裕で必要長さを算出した",
            "20m/30m/40〜50m/10〜15mから過不足なく選んだ",
            "内径と必要水量の関係を確認した",
            "散水用と高圧用を区別した",
            "使用圧力・使用温度を確認した",
            "本体材質（樹脂/金属/ステンレス）を用途で選んだ",
            "フルカバー/オープンドラムを用途で選んだ",
            "手巻き/自動巻き/移動式を作業スタイルで選んだ",
            "ホース付き/本体のみを区別した",
            "本体のみは適合ホース径・巻取長・接続を確認した",
            "ノズル・ガン・一次側ホース・継手の付属を確認した",
            "蛇口接続規格を確認した",
            "屋内/屋外の使用環境と保管方法を決めた",
            "冬季の残水抜き・凍結対策を運用に入れた",
            "点検・清掃・保管のルールを標準化した",
            "正式仕様・現行状況・後継品を一次情報で確認した",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-emerald-600">✓</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-19 FAQ ===== */}
        <h2 id="faq" className={cls.h2}>FAQ（よくある質問）</h2>
        <div className="my-4 divide-y divide-gray-200 rounded-lg border border-gray-200">
          {faqs.map((f) => (
            <div key={f.q} className="p-4">
              <p className={cls.faqQ}>Q. {f.q}</p>
              <p className={cls.bodySm}>A. {f.a}</p>
            </div>
          ))}
        </div>

        {/* ===== H2-20 まとめ ===== */}
        <h2 id="matome" className={cls.h2}>まとめ｜距離だけでなく内径・材質・付属品まで確認する</h2>
        <p className={cls.body}>ホースリールは「長さ」だけで選ぶと失敗します。まず蛇口から最遠点までの実動線に回り込みと2〜3mの余裕を足して必要長さを出し、20m・30m・40〜50m・10〜15mから過不足なく選びます。長いほどよいわけではなく、50mは水圧低下・巻き取り・保管の負担が増えます。あわせて、ホース内径と必要水量、樹脂・金属・ステンレスの材質、フルカバー/オープンドラム、手巻き/自動巻き/移動式、そしてホース・ノズル・継手の付属と使用圧力・接続規格を確認します。一般散水用と高圧用は区別し、本体のみの商品は適合ホースを別途手配します。仕様・現行状況・後継品は公開前にメーカー情報・オレンジブック・商品ページで確認してください。</p>
        <p className="mb-4 text-sm leading-relaxed text-gray-700">
          あわせて読みたい：
          <Link href="/articles/grease-lubricator-selection" className="font-bold text-gray-900 underline">
            グリースポンプ・潤滑器の選び方
          </Link>
          {" ／ "}
          <Link href="/articles/chemical-protective-clothing-selection" className="font-bold text-gray-900 underline">
            化学防護服の選び方
          </Link>
        </p>
        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a href="#len20" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">20mを見る →</a>
          <a href="#len30" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">30mを見る →</a>
          <a href="#len50" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">40〜50mを見る →</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
