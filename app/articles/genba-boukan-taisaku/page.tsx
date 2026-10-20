/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

/* ==========================================================================
   作業用品ナビ｜現場の防寒対策ガイド
   slug: genba-boukan-taisaku（自己完結 page.tsx・中央レジストリなし）
   ========================================================================== */

const SLUG = "genba-boukan-taisaku";
const UTM = `utm_source=sagyou_navi&utm_medium=article&utm_campaign=${SLUG}`;
const SITE = "https://www.sagyou-navi.com";
const PAGE_URL = `${SITE}/articles/${SLUG}`;
const IMG_BASE = "/products/";
const PUBLISHED = "2026-10-16";
const UPDATED = "2026-10-16";
const TITLE = "現場の防寒対策ガイド｜冬の建設現場の服装・電熱グッズ・詰所暖房と経費の扱い【2026年版】";
const DESCRIPTION =
  "冬の建設現場の防寒対策を「人・場所・現場」の3層で整理。作業服メーカーの防寒ブルゾン10モデル比較、電熱ベストや手袋の選び方、詰所ヒーターの電気代試算、寒中コンクリート養生の一酸化炭素対策、2026年度の現場環境改善費（防寒対策の積み上げ上限100%）まで解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "作業用品ナビ",
    locale: "ja_JP",
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
  },
};

/* ---------------------------------------------------------------- URLヘルパー
   ・UTMは必ず # フラグメントより前に付ける
   ・URL API で再加工しない（文字列連結のみ。二重エンコードを出さない）            */
function buildUrl(base: string, query: string): string {
  const i = base.indexOf("#");
  const head = i === -1 ? base : base.slice(0, i);
  const hash = i === -1 ? "" : base.slice(i);
  return `${head}${head.includes("?") ? "&" : "?"}${query}${hash}`;
}
function C(url: string): string {
  // 楽天 crecote-shop 商品／楽天検索（? の前の末尾スラッシュを維持・sid= 等の既存クエリを保持）
  const i = url.indexOf("#");
  const head = i === -1 ? url : url.slice(0, i);
  const hash = i === -1 ? "" : url.slice(i);
  const q = head.indexOf("?");
  let path = q === -1 ? head : head.slice(0, q);
  const query = q === -1 ? "" : head.slice(q + 1);
  if (!path.endsWith("/")) path += "/";
  return `${path}?${query ? `${query}&` : ""}${UTM}${hash}`;
}
function G(url: string): string {
  // GC-select 商品（パス型。既存クエリとフラグメントを除去）
  return `${url.split("#")[0].split("?")[0]}?${UTM}`;
}
function GQ(url: string): string {
  // GC-select 一覧・検索（q= 等の既存クエリを保持）
  return buildUrl(url, UTM);
}
function RS(url: string): string {
  // 楽天 signcity2024（C() と同じ処理：末尾スラッシュ維持・l-id= を保持して &utm_ を追加）
  return C(url);
}

/* ---------------------------------------------------------------- 型 */
type Store = "gc" | "rakuten";
type LinkItem = { href: string; img: string; short: string };
type Product = LinkItem & {
  name: string;
  store: Store;
  tags: readonly string[];
  point: string;
  spec: string;
};
type Variant = { label: string; img: string; href: string };
type VariantGroup = {
  name: string;
  short: string;
  store: Store;
  tags: readonly string[];
  point: string;
  spec: string;
  variants: readonly Variant[];
};

const STORE_LABEL: Record<Store, string> = { gc: "GC-select", rakuten: "楽天 CRECOTE" };
const EXT = { target: "_blank", rel: "noopener noreferrer sponsored" } as const;
const REF = { target: "_blank", rel: "noopener noreferrer" } as const;
const FOCUS = "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2";

/* ---------------------------------------------------------------- 商品データ（build_genba_boukan.py で生成） */
const PRODUCTS = {
  heatVest: { name: "カーボンヒートベスト", short: "カーボンヒートベスト", img: IMG_BASE + "1124851004.jpg", href: G("https://www.gc-select.com/products/1124851004"), store: "gc", tags: ["電熱", "帯電防止裏地", "M〜5L"], point: "背中・腰に加えて首元と腹部も温める5か所ヒーター。作業着の下に着る中間着として使いやすく、裏地は帯電防止素材。", spec: "ヒーター5か所（背中・腰・首元・腹部2）／ネイビー・ブラック／バッテリー仕様は商品ページで確認" },
  burtle7610: { name: "BURTLE 防水防寒ブルゾン 7610（サーフブルー）", short: "BURTLE 7610 防水防寒", img: IMG_BASE + "1124850038.jpg", href: G("https://www.gc-select.com/products/1124850038"), store: "gc", tags: ["防水", "反射材", "大型フード"], point: "雨や雪の中で作業する日の一着。縫い目からの浸水を防ぐシームテープと、夜間に光る反射材つき。", spec: "耐水圧10,000mm・透湿8,000g/㎡/24hrs／選べるサイズは商品ページで確認" },
  heaterGlove: { name: "充電式ヒーターグローブ（タッチ操作対応・3段階温度調節・バッテリー付）", short: "充電式ヒーターグローブ", img: IMG_BASE + "6300094329.jpg", href: G("https://www.gc-select.com/products/6300094329"), store: "gc", tags: ["電熱", "タッチ操作", "バッテリー2個付"], point: "指先まで温めるタイプで、手袋のままスマホを操作できる。防水仕様ではないため、雨天や水を使う作業には向かない。", spec: "3.7V/4000mAh（バッテリー2個付）・約40〜55℃・約3〜5時間" },
  tnfWinterdance: { name: "ザ・ノース・フェイス ウィンターダンスジャケット", short: "ノースフェイス ウィンターダンス", img: IMG_BASE + "6300097244.jpg", href: G("https://www.gc-select.com/products/6300097244"), store: "gc", tags: ["GORE-TEX", "監督・巡回", "脇下ベンチレーション"], point: "雨・雪・風を防ぐ3層構造。脇下のベンチレーションで、歩き回るときの蒸れを逃がす。巡回と通勤を1着で兼ねたい人向け。", spec: "70デニールGORE-TEX 3層／L 610g（参考値）／M・L・XL" },
  panelHeater: { name: "折り畳み式パネルヒーター（麻綿・ひざ掛けつき）", short: "折り畳み式パネルヒーター", img: IMG_BASE + "6300045507.jpg", href: G("https://www.gc-select.com/products/6300045507"), store: "gc", tags: ["足元暖房", "160W", "折りたたみ"], point: "机の下を3面で囲んで足元を温める。消費電力が小さく、仮設事務所の限られた電源でも台数を置きやすい。", spec: "定格160±10W／3段階（約45・55・65℃）／970×530mm・1.65kg" },
  deskHeater: { name: "GCデスクパネルヒーター", short: "GCデスクパネルヒーター", img: IMG_BASE + "6300056933.jpg", href: G("https://www.gc-select.com/products/6300056933"), store: "gc", tags: ["足元暖房", "転倒時オフ", "200W"], point: "前面と左右の3面から発熱し、倒れると電源が切れる安全装置つき。衣類や毛布をかけて使わないことが条件。", spec: "定格200±10W／3段階／960×530mm・1.16kg" },
  outdoorStove: { name: "伸縮式屋外用電気ストーブ", short: "伸縮式屋外用電気ストーブ", img: IMG_BASE + "6300052457.jpg", href: G("https://www.gc-select.com/products/6300052457"), store: "gc", tags: ["屋外対応", "IP44", "高さ調整"], point: "朝礼場所や屋外の休憩スペースを上から温める電気式。燃焼しないので一酸化炭素が出ない。最大1,500Wなので専用のコンセントで使う。", spec: "600W／900W切替（最大1,500W）・防水規格IP44・12.0kg" },
  snowMat: { name: "電気式融雪ゴムマット ソーヒーター TD-250（100V）", short: "融雪マット ソーヒーター TD-250", img: IMG_BASE + "6300037050.jpg", href: G("https://www.gc-select.com/products/6300037050"), store: "gc", tags: ["融雪", "凍結防止", "出入口・通路"], point: "詰所や現場事務所の出入口に敷き、降り始めの雪を融かす。シーズンが終われば丸めて保管できる。", spec: "100V・750W／1000×2500×9mm・34.0kg／連結不可" },
  agniNeck: { name: "帯電抑制アグニヒートネックウォーマー", short: "アグニヒート ネックウォーマー", img: IMG_BASE + "1124851031.jpg", href: G("https://www.gc-select.com/products/1124851031"), store: "gc", tags: ["帯電抑制", "ストレッチ", "首元"], point: "遠赤外線保温と蓄熱保温の素材を使った筒形。帯電抑制タイプなので、静電気を嫌う作業場でも選びやすい。", spec: "帯電抑制素材（JIS T8118準拠）／ブラック・フリーサイズ" },
  bottleWarmer: { name: "ペットボトルウォーマー", short: "ペットボトルウォーマー", img: IMG_BASE + "6300005172.jpg", href: G("https://www.gc-select.com/products/6300005172"), store: "gc", tags: ["USB給電", "水分補給", "デスク用"], point: "ボトルに巻いて保温する。冷たい飲み物を敬遠して水分補給が減りがちな冬の詰所に。", spec: "USB給電・3段階温度調節／約300×150×100mm・115g" },
  sugunukku: { name: "洗えるすぐぬっく2 USB充電ワイヤレス温熱手袋", short: "すぐぬっく2 温熱手袋", img: IMG_BASE + "6300033735.jpg", href: G("https://www.gc-select.com/products/6300033735"), store: "gc", tags: ["電熱", "指先が出る", "洗える"], point: "指先が出るので、図面をめくる・タブレットに入力する・野帳に書く、といった監督業務の手元に合う。", spec: "1400mAh・3段階・140g／ヒーターを外して洗濯" },
  balaclava: { name: "カリマー オクタサーマルバラクラバ（保温・速乾出し帽）", short: "カリマー バラクラバ", img: IMG_BASE + "1124850301.jpg", href: G("https://www.gc-select.com/products/1124850301"), store: "gc", tags: ["ヘルメット下", "薄手", "抗菌防臭"], point: "頭・首・顔の下半分を一枚で覆う。通気性の高い薄手ニットで、ヘルメットの下に着けても蒸れにくい。", spec: "Octa®（ポリエステル100%）・抗菌防臭加工／ワンサイズ" },
  karrimorLT: { name: "カリマー インシュレーション LT フーディ", short: "カリマー LT フーディ", img: IMG_BASE + "1124850321.jpg", href: G("https://www.gc-select.com/products/1124850321"), store: "gc", tags: ["化繊中綿", "撥水", "ミドルにも"], point: "撥水リップストップの表地にプリマロフト中綿。単体でも、レインウェアの下に着る中間着としても使える軽防寒。", spec: "表地ナイロン100%・中綿プリマロフト／S〜XL" },
  columbiaWomens: { name: "コロンビア ウィメンズハイナリバーインシュレーテッドジャケット", short: "コロンビア ハイナリバー（女性用）", img: IMG_BASE + "1124850551.jpg", href: G("https://www.gc-select.com/products/1124850551"), store: "gc", tags: ["女性用", "熱反射裏地", "撥水"], point: "女性向けのサイズ設計。熱を反射する裏地と薄手の中わたで、着ぶくれせずに暖かさを確保する。", spec: "撥水（オムニシールド）・熱反射裏地（オムニヒート）／S・M・L" },
  socks: { name: "WG-S01 クロロプレン・防寒ソックス（ショート）", short: "クロロプレン防寒ソックス", img: IMG_BASE + "6300073314.jpg", href: G("https://www.gc-select.com/products/6300073314"), store: "gc", tags: ["長靴の中", "クロロプレン", "滑り止め"], point: "ウエットスーツ系のクロロプレン素材で保温する。長靴や安全靴の中でつま先が冷える人に。", spec: "S〜LL（約21.5〜27.5cm）・約50g" },
  columbiaSoftshell: { name: "コロンビア エンジョイマウンテンライフ ソフトシェルジャケット", short: "コロンビア ソフトシェル", img: IMG_BASE + "6300069465.jpg", href: G("https://www.gc-select.com/products/6300069465"), store: "gc", tags: ["防風", "ストレッチ", "秋〜初冬"], point: "風を止めつつ通気する。秋口や、電熱ベストを中に着てアウターを薄くしたい日に合う。", spec: "防風・撥水（オムニシールド）・パッカブル／M・L・XL" },
  blanket: { name: "オールウェザーブランケット2", short: "オールウェザーブランケット2", img: IMG_BASE + "6300069253.jpg", href: G("https://www.gc-select.com/products/6300069253"), store: "gc", tags: ["休憩・待機", "防風・防水", "防災にも"], point: "体温の最大約80%を反射・保持するとされる5層シート。休憩のひざ掛け、車内待機、防災備蓄に。顔は覆わない。", spec: "210×150cm・535g／四隅グロメットつき" },
  zactus: { name: "防寒ザクタス Z-02W（防寒長靴）", short: "防寒ザクタス Z-02W", img: IMG_BASE + "1124853019.jpg", href: G("https://www.gc-select.com/products/1124853019"), store: "gc", tags: ["防寒長靴", "耐油", "日本製"], point: "裏に4mmのウレタンフォームを入れた防寒長靴。耐油配合なので、油が飛ぶ場所の作業にも選びやすい。", spec: "ウレタン裏・耐油／24.0〜29.0cm・6色" },
  charcoalStove: { name: "養生用練炭コンロ2連式", short: "養生用練炭コンロ2連式", img: IMG_BASE + "1179055020.jpg", href: G("https://www.gc-select.com/products/1179055020"), store: "gc", tags: ["寒中コンクリート", "給熱養生", "要換気"], point: "シートで囲った打設部を練炭2個で長時間温める養生用。囲いに入る前は換気してCO濃度を確かめる。暖房器具としては使わない。", spec: "練炭2個・効果持続15〜17時間／高さ340×幅170mm" },
  antifreeze: { name: "凍結防止剤 塩化物系混合物（輸入）", short: "凍結防止剤（塩化物系）", img: IMG_BASE + "1137100103.jpg", href: G("https://www.gc-select.com/products/1137100103"), store: "gc", tags: ["路面凍結", "通路・スロープ", "25kg袋"], point: "通路やスロープ、仮設階段の凍結を防ぐ。塩化物は金属を錆びさせやすいので、足場材や車両の近くでは量を控えめに。", spec: "25kg袋／成分の配合は商品ページで確認" },
  eneheat: { name: "エネヒート 充電カイロ ENE-HEAT-KAIRO", short: "エネヒート 充電カイロ", img: IMG_BASE + "6300036059.jpg", href: G("https://www.gc-select.com/products/6300036059"), store: "gc", tags: ["充電式", "繰り返し使える", "モバイル電源"], point: "使い捨てカイロの代わりに繰り返し使える。スマホの充電やライトにもなるので、詰所の常備品に向く。", spec: "4400mAh・3段階（弱で約5時間）・充電2〜3時間" },
  nukkuRobe: { name: "ひみつのぬっくローブ（ブラウン）", short: "ひみつのぬっくローブ", img: IMG_BASE + "6300033736.jpg", href: G("https://www.gc-select.com/products/6300033736"), store: "gc", tags: ["着るヒーター", "USB給電", "デスクワーク"], point: "肩から掛けるヒーター付きローブ。ボタンで留まるので、書類作業やPC入力の間もずれにくい。", spec: "USB給電（5V/1.4A）・表面温度32〜40℃／約960×700mm" },
} satisfies Record<string, Product>;

const VARIANTS = {
  secureThermo: { name: "防水防寒手袋 防寒セキュアサーモネオ", short: "セキュアサーモネオ", store: "gc", tags: ["防水仕様", "高視認", "シンサレート"], point: "蛍光色の甲と高輝度テープで手元が目立つ。手のひらは人工皮革とシリコンでグリップする。防水仕様でも使い方によって浸水はあり得る、とメーカーが注記している。", spec: "シンサレート保温・TPU透湿防水シート／L：全長295mm・250g（1双）", variants: [
    { label: "蛍光オレンジ A-932 L", img: IMG_BASE + "6300051298.jpg", href: G("https://www.gc-select.com/products/6300051298") },
    { label: "蛍光イエロー A-933 L", img: IMG_BASE + "6300051300.jpg", href: G("https://www.gc-select.com/products/6300051300") },
  ] },
  aitozTultex: { name: "アイトス 防風防寒ブルゾン TULTEX（AZ-8476）", short: "アイトス AZ-8476", store: "rakuten", tags: ["防風", "男女兼用", "5色展開"], point: "防風と保温に絞ったベーシックな防寒ブルゾン。色が多いので、職種や協力会社ごとに色分けしたい現場に向く。撥水加工はない。", spec: "表地ポリエステルリップ・裏フリース・中綿入り／フード取り外し可／SS〜5L", variants: [
    { label: "ブルー S", img: IMG_BASE + "ta052447-az8476006s.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052447-az8476006s/") },
    { label: "ブルー M", img: IMG_BASE + "ta052446-az8476006m.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052446-az8476006m/") },
    { label: "ネイビー L", img: IMG_BASE + "ta052459-az8476108l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052459-az8476108l/") },
    { label: "レッド L", img: IMG_BASE + "ta052449-az8476009l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052449-az8476009l/") },
    { label: "レッド LL", img: IMG_BASE + "ta052450-az8476009ll.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052450-az8476009ll/") },
    { label: "ブラック LL", img: IMG_BASE + "ta052455-az8476010ll.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052455-az8476010ll/") },
  ] },
  xebec222: { name: "XEBEC 222 現場服 防寒ブルゾン（紺）", short: "XEBEC 222", store: "rakuten", tags: ["中綿キルト", "インフード", "袖・裾リブ"], point: "襟に収めるインフードと、裾・袖口のリブで冷気を入れにくい定番型。内側と袖にペン差しがあり、筆記具を持ち歩きやすい。", spec: "表地・裏地・中綿ポリエステル100%／M〜5L", variants: [
    { label: "紺 M", img: IMG_BASE + "ta052030-22210m.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052030-22210m/") },
    { label: "紺 L", img: IMG_BASE + "ta052028-22210l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052028-22210l/") },
  ] },
  midoriPJ07: { name: "ミドリ安全 防寒パイロットジャンパー PJ07（ネイビー）", short: "ミドリ安全 PJ07", store: "rakuten", tags: ["ボア裏", "撥水", "ボア衿取り外し"], point: "裏地がシープボアのパイロット型。軽く羽織れるので、運転や倉庫・資材置き場の作業にも使いやすい。", spec: "表地ナイロン100%（撥水）・裏地シープボア／M〜5L", variants: [
    { label: "ネイビー L", img: IMG_BASE + "ta053134-pj07uel.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta053134-pj07uel/") },
  ] },
  burtle5030: { name: "BURTLE 防寒フーディジャケット 5030", short: "BURTLE 5030", store: "rakuten", tags: ["防水・防風", "フード付", "ユニセックス"], point: "表地にTPUラミネートを重ねた防水防寒。耐水圧は販売店で表記が分かれているため商品ページで確認したい。胸にレベルブックとスマホの収納あり。", spec: "表地ポリエステル100%（TPUラミネート・耐久撥水）／S〜3XL", variants: [
    { label: "アーバンブラック XXL", img: IMG_BASE + "ta052170-503064xxl.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052170-503064xxl/") },
    { label: "アーミカーキ L", img: IMG_BASE + "ta052165-503061l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052165-503061l/") },
  ] },
  burtle5034: { name: "BURTLE 防寒フーディベスト（ユニセックス）5034", short: "BURTLE 5034 ベスト", store: "rakuten", tags: ["ベスト", "腕が動かしやすい", "中綿入り"], point: "袖がないぶん腕が自由に動く。作業着の上に重ねる中間着や、上半身だけ冷える日の一枚に。", spec: "表地は5030と同素材・中綿ポリエステル100%／S〜3XL", variants: [
    { label: "アーバンブラック M", img: IMG_BASE + "ta052175-503464m.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052175-503464m/") },
  ] },
  midoriVE2009: { name: "ミドリ安全 VERDEXCEL ストレッチ防寒ジャンパー VE2009（上）", short: "ミドリ安全 VE2009", store: "rakuten", tags: ["ストレッチ", "防風", "帯電防止"], point: "腕の上げ下げや体のひねりを妨げない裁断のストレッチ防寒。細身のシルエットで着ぶくれしにくい。", spec: "ストレッチニット＋防風フィルム＋フリース／導電繊維で帯電防止／SS〜5L", variants: [
    { label: "ブラック LL", img: IMG_BASE + "ta053530-ve2009uell.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta053530-ve2009uell/") },
  ] },
  midoriVE2007: { name: "ミドリ安全 ベルデクセル ストレッチ防寒スラックス VE2007（下）", short: "ミドリ安全 VE2007 下", store: "rakuten", tags: ["防寒パンツ", "しゃがみやすい", "帯電防止"], point: "股のマチでしゃがむ・またぐ動作が楽になり、後ろ腰の伸縮メッシュで背中が出にくい。上衣と色をそろえるならVE2007上（ネイビー）と組み合わせる。", spec: "防風ハイブリッド素材／フル開脚仕様／SS〜5L・股下80cm", variants: [
    { label: "ネイビー 3L", img: IMG_BASE + "ta053513-ve2007sita3l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta053513-ve2007sita3l/") },
  ] },
  midoriVE2019: { name: "ミドリ安全 ベルデクセル ハーネス対応 ストレッチ防寒ジャンパー VE2019（上）", short: "ミドリ安全 VE2019", store: "rakuten", tags: ["ハーネス対応", "ストレッチ", "帯電防止"], point: "フルハーネスの上から羽織り、背中のスリットからランヤードを出せる設計。肩内側の固定タブと胸ベルト用スリットつき。", spec: "背中ランヤード用スリット・胸ベルト用スリット／SS〜5L", variants: [
    { label: "ブラック 3L", img: IMG_BASE + "ta053543-ve2019ue3l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta053543-ve2019ue3l/") },
  ] },
  burtle7420: { name: "BURTLE 軽防寒ジャケット 7420", short: "BURTLE 7420 軽防寒", store: "rakuten", tags: ["軽防寒", "帯電防止裏地", "再生素材"], point: "真冬の主力というより、秋口から初冬、または重ね着前提の軽防寒。防風・撥水の表地と、帯電防止糸を使った保温裏地。", spec: "高密度エコリップストップ（再生ポリエステル36%）／S〜5L", variants: [
    { label: "ミルスグリーン 3L", img: IMG_BASE + "ta052314-7420143l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052314-7420143l/") },
    { label: "サーフブルー 3L", img: IMG_BASE + "ta052319-7420473l.jpg", href: C("https://item.rakuten.co.jp/crecote-shop/ta052319-7420473l/") },
  ] },
} satisfies Record<string, VariantGroup>;

const CTA_GC_LIST = GQ("https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E9%98%B2%E5%AF%92%E5%AF%BE%E7%AD%96");
const CTA_RK_LIST = C("https://search.rakuten.co.jp/search/mall/%E9%98%B2%E5%AF%92/?sid=426972");
const CTA_TRUSCO = RS("https://item.rakuten.co.jp/signcity2024/c/0000000010/?l-id=shoptop_shopmenu_categorypage_4");

function vi(g: VariantGroup, i = 0): LinkItem {
  const x = g.variants[i];
  return { href: x.href, img: x.img, short: g.variants.length > 1 ? `${g.short}（${x.label}）` : g.short };
}

/* ---------------------------------------------------------------- 部品 */
function StoreBadge({ store }: { store: Store }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-900 px-2 py-0.5 text-[11px] font-bold text-white">
      {STORE_LABEL[store]}
    </span>
  );
}

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1">
      {tags.map((t) => (
        <li key={t} className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を見る（${STORE_LABEL[p.store]}・新しいタブで開く）`}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-gray-900 hover:shadow-md ${FOCUS}`}
    >
      <div className="relative aspect-square bg-gray-50">
        <img src={p.img} alt={p.name} loading="lazy" width={480} height={480} className="h-full w-full object-contain p-3" />
        <span className="absolute left-2 top-2">
          <StoreBadge store={p.store} />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-sm font-bold leading-snug text-gray-900">{p.name}</p>
        <p className="text-xs leading-relaxed text-gray-600">{p.spec}</p>
        <Tags tags={p.tags} />
        <p className="text-[13px] leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-auto inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gray-900 px-4 text-sm font-bold text-white group-hover:bg-gray-700">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

function FeaturedCard({ p, label }: { p: Product; label: string }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を見る（${STORE_LABEL[p.store]}・新しいタブで開く）`}
      className={`group my-6 flex flex-col overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-sm transition hover:shadow-lg sm:flex-row ${FOCUS}`}
    >
      <div className="relative bg-gray-50 sm:w-2/5">
        <img src={p.img} alt={p.name} loading="lazy" width={600} height={600} className="aspect-square h-full w-full object-contain p-4" />
        <span className="absolute left-3 top-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">{label}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="self-start">
          <StoreBadge store={p.store} />
        </span>
        <p className="text-lg font-bold leading-snug text-gray-900">{p.name}</p>
        <p className="text-sm text-gray-600">{p.spec}</p>
        <Tags tags={p.tags} />
        <p className="text-sm leading-relaxed text-gray-700">{p.point}</p>
        <span className="mt-auto inline-flex min-h-[52px] items-center justify-center rounded-lg bg-gray-900 px-5 text-base font-bold text-white group-hover:bg-gray-700">
          価格・在庫を見る →
        </span>
      </div>
    </a>
  );
}

function MiniRow({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.name}の価格・在庫を見る（新しいタブで開く）`}
      className={`group flex min-h-[64px] w-full min-w-0 items-center gap-3 rounded-xl border border-gray-200 bg-white p-2 pr-3 transition hover:border-gray-900 ${FOCUS}`}
    >
      <img src={p.img} alt="" loading="lazy" width={56} height={56} className="h-14 w-14 shrink-0 rounded-lg bg-gray-50 object-contain" />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-bold leading-snug text-gray-900">{p.short}</span>
        <span className="truncate text-xs text-gray-600">{p.spec}</span>
      </span>
      <span aria-hidden="true" className="shrink-0 rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-bold text-white">
        見る →
      </span>
    </a>
  );
}

function VariantCard({ g }: { g: VariantGroup }) {
  const first = g.variants[0];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <a
        href={first.href}
        {...EXT}
        aria-label={`${g.name}（${first.label}）の価格・在庫を見る（新しいタブで開く）`}
        className={`group block ${FOCUS}`}
      >
        <div className="relative aspect-square bg-gray-50">
          <img src={first.img} alt={g.name} loading="lazy" width={480} height={480} className="h-full w-full object-contain p-3" />
          <span className="absolute left-2 top-2">
            <StoreBadge store={g.store} />
          </span>
        </div>
        <p className="px-4 pt-4 text-sm font-bold leading-snug text-gray-900 group-hover:underline">{g.name}</p>
      </a>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs leading-relaxed text-gray-600">{g.spec}</p>
        <Tags tags={g.tags} />
        <p className="text-[13px] leading-relaxed text-gray-700">{g.point}</p>
        <p className="mt-1 text-xs font-bold text-gray-900">
          {g.variants.length > 1 ? `色・サイズを選んで見る（${g.variants.length}種）` : "掲載中の色・サイズ"}
        </p>
        <ul className="mt-auto grid gap-2 sm:grid-cols-2">
          {g.variants.map((x) => (
            <li key={x.href}>
              <a
                href={x.href}
                {...EXT}
                aria-label={`${g.short} ${x.label}の価格・在庫を見る（新しいタブで開く）`}
                className={`flex min-h-[48px] items-center gap-2 rounded-lg border border-gray-300 bg-white px-2 py-1 transition hover:border-gray-900 hover:bg-gray-50 ${FOCUS}`}
              >
                <img src={x.img} alt="" loading="lazy" width={40} height={40} className="h-10 w-10 shrink-0 rounded bg-gray-50 object-contain" />
                <span className="text-xs font-bold text-gray-900">{x.label}</span>
                <span aria-hidden="true" className="ml-auto text-sm font-bold text-gray-900">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PLink({ p }: { p: LinkItem }) {
  return (
    <a
      href={p.href}
      {...EXT}
      aria-label={`${p.short}の商品ページ（新しいタブで開く）`}
      className={`inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white py-1 pl-1 pr-2 text-xs font-bold text-gray-900 hover:border-gray-900 hover:underline ${FOCUS}`}
    >
      <img src={p.img} alt="" loading="lazy" width={28} height={28} className="h-7 w-7 shrink-0 rounded bg-gray-50 object-contain" />
      {p.short}
    </a>
  );
}

function PLinks({ items }: { items: readonly LinkItem[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((p) => (
        <PLink key={p.href} p={p} />
      ))}
    </div>
  );
}

function MainCta({ lead }: { lead: string }) {
  return (
    <div className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-50 p-5 sm:p-6">
      <p className="text-center text-sm font-bold text-gray-900 sm:text-base">{lead}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a
          href={CTA_GC_LIST}
          {...EXT}
          aria-label="防寒対策品一覧を見る（自社サイト GC-select・新しいタブで開く）"
          className={`flex min-h-[60px] flex-col items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-700 ${FOCUS}`}
        >
          <span className="text-base font-bold">防寒対策品一覧を見る →</span>
          <span className="text-[11px] text-gray-300">自社サイト GC-select</span>
        </a>
        <a
          href={CTA_RK_LIST}
          {...EXT}
          aria-label="防寒対策品一覧を見る（楽天市場 CRECOTE・新しいタブで開く）"
          className={`flex min-h-[60px] flex-col items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-2 text-gray-900 transition hover:bg-gray-100 ${FOCUS}`}
        >
          <span className="text-base font-bold">防寒対策品一覧を見る →</span>
          <span className="text-[11px] text-gray-600">楽天市場 CRECOTE 楽天市場店</span>
        </a>
      </div>
    </div>
  );
}

function SubCta({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <a
      href={href}
      {...EXT}
      aria-label={`${title}（${sub}・新しいタブで開く）`}
      className={`my-6 flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-gray-900 bg-white px-4 py-3 transition hover:bg-gray-50 ${FOCUS}`}
    >
      <span className="flex flex-col">
        <span className="text-sm font-bold text-gray-900">{title}</span>
        <span className="text-xs text-gray-600">{sub}</span>
      </span>
      <span aria-hidden="true" className="shrink-0 rounded-lg bg-gray-900 px-3 py-2 text-xs font-bold text-white">
        一覧へ →
      </span>
    </a>
  );
}

function PointBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <span className="rounded bg-gray-900 px-2 py-0.5 text-[11px] text-white">POINT</span>
        {title}
      </p>
      <div className="space-y-2 text-[15px] leading-relaxed text-gray-800">{children}</div>
    </div>
  );
}

function CautionBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-2 border-gray-900 bg-white p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <span aria-hidden="true" className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
          !
        </span>
        {title}
      </p>
      <div className="space-y-2 text-[15px] leading-relaxed text-gray-800">{children}</div>
    </div>
  );
}

function TableWrap({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="my-6">
      <figcaption className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 text-sm font-bold text-gray-900">
        <span>{caption}</span>
        <span className="text-[11px] font-normal text-gray-500 sm:hidden">横にスクロールできます →</span>
      </figcaption>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">{children}</table>
      </div>
    </figure>
  );
}

const TH = "border-b border-gray-200 bg-gray-900 px-3 py-2 text-xs font-bold text-white";
const TD = "border-b border-gray-100 px-3 py-2.5 align-top text-[13px] leading-relaxed text-gray-800";

function H2({ id, num, children }: { id: string; num: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-16 flex scroll-mt-20 items-center gap-3 border-l-4 border-gray-900 pl-3 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">{num}</span>
      <span>{children}</span>
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 border-b-2 border-gray-200 pb-1 text-lg font-bold text-gray-900">{children}</h3>;
}

function M({ children }: { children: ReactNode }) {
  return <strong className="bg-[linear-gradient(transparent_60%,#d1d5db_60%)] font-bold text-gray-900">{children}</strong>;
}

function Grid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

/* ---------------------------------------------------------------- 図・データ */
const WIND = [
  { label: "無風", t: 5 },
  { label: "風速3m/s", t: 2 },
  { label: "風速5m/s", t: 0 },
  { label: "風速8m/s", t: -3 },
] as const;

const POWER = [
  { label: "折り畳み式パネルヒーター", cond: "160W×8時間", yen: 40 },
  { label: "GCデスクパネルヒーター", cond: "200W×8時間", yen: 50 },
  { label: "ひみつのぬっくローブ", cond: "約7W×8時間", yen: 2 },
  { label: "伸縮式屋外用電気ストーブ", cond: "1,500W×2時間", yen: 93 },
  { label: "融雪マット TD-250", cond: "750W×10時間", yen: 233 },
] as const;

const TOC = [
  { id: "risk", label: "寒さが現場にもたらす3つのリスク" },
  { id: "three-layers", label: "防寒対策は「人・場所・現場」の3層で組む" },
  { id: "cost", label: "公共工事の防寒対策費は積み上げ計上できる（2026年度）" },
  { id: "criteria", label: "現場用防寒着を選ぶ6つの基準" },
  { id: "workwear", label: "作業服メーカーの防寒ブルゾン・ジャケット10モデル" },
  { id: "heated", label: "電熱ウェア・充電式グッズの選び方" },
  { id: "extremities", label: "頭・首・手・足の「末端」を守る小物" },
  { id: "supervisor", label: "監督・巡回・通勤向けの防寒ジャケット" },
  { id: "rest-area", label: "詰所・現場事務所の暖房と休憩環境" },
  { id: "site", label: "凍結・積雪・寒中コンクリートの冬対策" },
  { id: "faq", label: "よくある質問" },
  { id: "summary", label: "まとめ" },
] as const;

/* ---------------------------------------------------------------- FAQ（本文と構造化データで共用） */
const FAQS = [
  {
    q: "現場の防寒対策は何℃から必要ですか？",
    a: "屋外作業の寒さについて、法令の数値基準はありません。目安になるのは、事務所衛生基準規則の「室温10℃以下なら暖房などの措置」と、コンクリート工事の「日平均気温4℃以下で寒中コンクリート」の2つ。体感温度は風速1mごとに約1℃下がると言われるため、風の強い現場は気温の数字より早めに備えてください。",
  },
  {
    q: "防寒着や電熱ベストは現場環境改善費で積み上げできますか？",
    a: "国土交通省の積算要領が積み上げ計上の対象としているのは、主に現場の施設や設備に対する防寒対策です。作業員個人の費用は現場管理費に計上されるため、重複しないよう求めています。宮崎県のように個人向けの対策を積み上げの対象外と明記する発注者もあるので、防寒着や電熱ベストは会社負担の装備として考えるのが無難。最終的には発注者の基準で確認しましょう。",
  },
  {
    q: "詰所の暖房は電気式と燃焼式のどちらがいいですか？",
    a: "換気が取りにくい仮設の詰所なら、燃焼しない電気式が扱いやすい選択です。一酸化炭素が出ないため、締め切った部屋でも中毒の心配がありません。石油ストーブなど燃焼式を使うなら、定期的な換気とCO警報器をセットに。電気式は消費電力の合計が1か所のコンセントの上限（1,500W）を超えないように配置します。",
  },
  {
    q: "ヘルメットの下に着けられる防寒具はありますか？",
    a: "薄手のバラクラバ（目出し帽）や筒形のネックウォーマーが向いています。厚手のニット帽は頭とヘルメット内装のすき間を埋めてしまい、あごひもが締めにくくなることがあるもの。着けた状態でヘルメットがぐらつかないか、必ず確かめてから現場に出てください。",
  },
  {
    q: "電熱ウェアのバッテリーで気をつけることは？",
    a: "リチウムイオン電池は熱と衝撃に弱い、という前提で扱います。NITE（製品評価技術基盤機構）は、確かなメーカーや販売店から買う、熱や強い衝撃を与えない、異常を感じたらすぐ使用をやめる、の3点を挙げています。現場では、車内や重機の運転席に放置しないこと、純正以外のバッテリーを流用しないことの2つを特に守りましょう。",
  },
  {
    q: "防寒ブルゾンのサイズはどう選べばいいですか？",
    a: "中にベストやパーカーを着込む前提で、普段の作業着と同じか1サイズ上が基本。腕を前に伸ばして背中がつっぱらないか、しゃがんで腰が出ないかを確認します。メーカーによって展開も違い、アイトスAZ-8476とミドリ安全VE2009はSS〜5L、BURTLE 5030はS〜3XLです。",
  },
] as const;

/* ---------------------------------------------------------------- 参考資料（外部・sponsoredなし） */
const REFS = [
  { t: "国土交通省「土木請負工事における現場環境改善費の積算要領」（2026年2月27日付・4月1日適用）", u: "https://www.mlit.go.jp/tec/content/001984908.pdf" },
  { t: "国土交通省「令和8年度 国土交通省土木工事・業務の積算基準等の改定」（記者発表資料）", u: "https://www.mlit.go.jp/tec/content/001984600.pdf" },
  { t: "国土交通省「現場環境改善費の熱中症対策・防寒対策に関する費用計上の留意事項について」（2025年2月28日）", u: "https://www.mlit.go.jp/tec/content/001870573.pdf" },
  { t: "広島県「現場環境改善（熱中症対策・防寒対策）の実施について（お知らせ）」（2025年9月30日）", u: "https://chotatsu.pref.hiroshima.lg.jp/file/kankyoukaizen_nechusyou_boukan.pdf" },
  { t: "宮崎県「工事における現場環境改善費の積算要領」", u: "https://www.pref.miyazaki.lg.jp/documents/52499/52499_20260423134557-1.pdf" },
  { t: "山形県「熱中症対策に係る現場環境改善費の積み上げ計上の上限引上げについて（通知）」（2026年5月26日）", u: "https://www.pref.yamagata.jp/documents/3926/r080526gennbakankyoukaizenhiup.pdf" },
  { t: "厚生労働省「一酸化炭素による労働災害の防止について」（2011年7月22日）", u: "https://www.mhlw.go.jp/content/11300000/001413631.pdf" },
  { t: "北海道労働局「令和8年 有害物質による急性中毒等発生状況」", u: "https://jsite.mhlw.go.jp/hokkaido-roudoukyoku/content/contents/002850399.pdf" },
  { t: "厚生労働省「参照条文」（事務所衛生基準規則 第4条ほか）", u: "https://www.mhlw.go.jp/content/11201000/000700629.pdf" },
  { t: "厚生労働省「事務所衛生基準規則の一部を改正する省令案要綱」", u: "https://www.mhlw.go.jp/content/11201250/000889327.pdf" },
  { t: "北見労働基準監督署「熱中症対策（改正規則関係）について」（労働安全衛生規則 第606条を掲載）", u: "https://jsite.mhlw.go.jp/hokkaido-roudoukyoku/content/contents/002281794.pdf" },
  { t: "厚生労働省「墜落制止用器具」の規格に関するページ", u: "https://www.mhlw.go.jp/stf/newpage_08717.html" },
  { t: "国土交通省 北海道開発局「寒中コンクリート」（技術資料）", u: "https://www.hkd.mlit.go.jp/ky/kn/dou_ken/ud49g70000001tos-att/splaat0000003wap.pdf" },
  { t: "MSDマニュアル プロフェッショナル版「低体温症」", u: "https://www.msdmanuals.com/ja-jp/professional/22-%E5%A4%96%E5%82%B7%E3%81%A8%E4%B8%AD%E6%AF%92/%E5%AF%92%E5%86%B7%E9%9A%9C%E5%AE%B3/%E4%BD%8E%E4%BD%93%E6%B8%A9%E7%97%87" },
  { t: "名古屋市科学館「極寒ラボ」展示解説", u: "https://www.ncsm.city.nagoya.jp/exhibit_files/pdf/S526.pdf" },
  { t: "NITE「【注意喚起】『夏バテ（夏のバッテリー）』にご用心」（2025年6月26日）", u: "https://kyodonewsprwire.jp/release/202506180777" },
  { t: "ウィルオブ・コンストラクション「建設現場で働く社員に聞いた冬の防寒対策」（2024年1月16日）", u: "https://digitalpr.jp/r/81738" },
  { t: "全国家庭電気製品公正取引協議会「よくある質問」（電力料金の目安単価）", u: "https://www.eftc.or.jp/qa/" },
  { t: "北海道ゴム工業所「ソーヒーター」製品情報", u: "https://www.dogom.co.jp/items/heater/post.shtml" },
  { t: "佐藤巖・西村隆男「防氷剤の特性値と路面管理」（北陸地方整備局 掲載資料）", u: "https://www.hrr.mlit.go.jp/yukimirai-toyama/ouboronnbunn/29_bouhyouzai.pdf" },
] as const;

/* ---------------------------------------------------------------- 関連記事（href が空のものは非表示。Cursor側で実slugに差し替え） */
const RELATED = [
  { href: "/articles/deicer-parking-howto", title: "凍結防止剤の駐車場での使い方", note: "塩化カルシウムなど種類ごとの使い分けを別の記事でまとめています。" },
  { href: "/articles/welding-spark-protection-sheet-selection", title: "溶接・グラインダーの火花養生方法", note: "溶接・溶断の火の粉対策を別の記事でまとめています。" },
  { href: "/articles/kigyo-bousai-bichiku-gimu", title: "企業の防災備蓄は義務？", note: "職場の備蓄の考え方を別の記事でまとめています。" },
  { href: "/articles/saigai-bichiku-rack-trusco", title: "災害備蓄ラック（TRUSCO）", note: "備蓄品の保管ラックを別の記事でまとめています。" },
] as const;

/* ========================================================================== */
export default function Page() {
  const P = PRODUCTS;
  const V = VARIANTS;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Organization", name: "作業用品ナビ編集部", url: SITE },
    publisher: { "@type": "Organization", name: "作業用品ナビ", url: SITE },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE}/articles` },
      { "@type": "ListItem", position: 3, name: "現場の防寒対策ガイド", item: PAGE_URL },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SiteHeader />
    <main className="mx-auto max-w-[850px] px-4 pb-20 pt-6 text-gray-900 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <nav aria-label="パンくずリスト" className="mb-4 text-xs text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:underline">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/articles" className="hover:underline">
              記事一覧
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-700">現場の防寒対策ガイド</li>
        </ol>
      </nav>

      <article>
        {/* ------------------------------------------------ ヘッダー */}
        <header className="overflow-hidden rounded-2xl bg-gray-900 px-5 py-8 text-white sm:px-8 sm:py-10">
          <p className="text-xs font-bold tracking-widest text-gray-400">WINTER SITE GUIDE 2026</p>
          <h1 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
            現場の防寒対策ガイド
            <span className="mt-1 block text-base font-bold text-gray-300 sm:text-lg">
              冬の建設現場の服装・電熱グッズ・詰所暖房と経費の扱い【2026年版】
            </span>
          </h1>
          <ul className="mt-5 flex flex-wrap gap-2">
            {["2026年度の積算ルール対応", "防寒ブルゾン10モデル比較", "電熱グッズの選び方", "詰所暖房の電気代試算", "寒中コンクリートのCO対策"].map((c) => (
              <li key={c} className="rounded-full border border-gray-600 bg-gray-800 px-3 py-1 text-xs font-bold text-gray-100">
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-gray-400">
            公開日：<time dateTime={PUBLISHED}>2026年10月16日</time>　最終更新日：<time dateTime={UPDATED}>2026年10月16日</time>　作業用品ナビ編集部
          </p>
        </header>

        <p className="mt-6 text-[15px] leading-loose text-gray-800">
          朝礼の15分で指先がかじかみ、昼休みの詰所が寒くて午後まで体が戻らない。冬の現場で聞く悩みの多くは、服装だけでは片づきません。この記事では、現場の防寒対策を「人・場所・現場」の3層に分け、そろえるべき装備と設備、公共工事での費用の扱いまでを一つにまとめました。商品はGC-selectと楽天CRECOTEの取扱品から、用途ごとに選んでいます。
        </p>

        {/* ------------------------------------------------ 結論 */}
        <section aria-labelledby="conclusion" className="mt-8 rounded-2xl border-2 border-gray-900 bg-white p-5 sm:p-6">
          <h2 id="conclusion" className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <span className="rounded bg-gray-900 px-2 py-0.5 text-xs text-white">結論</span>
            冬の現場の防寒は、この4点で組み立てる
          </h2>
          <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-gray-800">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">1</span>
              <span>
                <M>「人・場所・現場」の3層でそろえる。</M>服を厚くしても、休憩所が寒ければ体温は戻らない。通路が凍れば転倒が増える。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">2</span>
              <span>
                服装は<M>防風アウター＋保温ミドル＋汗を逃がすインナー</M>が基本形。動きと汗の量に合わせ、ベストや電熱ベストを足し引きします。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">3</span>
              <span>
                国の土木工事では、<M>詰所の暖房など施設・設備の防寒対策を現場環境改善費に積み上げ計上できる</M>。2026年4月から上限は率分の100%。防寒着のような作業員個人の装備は現場管理費側の扱いです。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">4</span>
              <span>
                練炭・発電機・燃焼式ヒーターは<M>一酸化炭素中毒</M>の原因になる。シート囲いや詰所で使うなら、換気とCO警報器をセットにしましょう。
              </span>
            </li>
          </ol>
        </section>

        <MainCta lead="先に品ぞろえを見たい方へ｜防寒ウェア・電熱グッズ・暖房器具の一覧" />

        {/* ------------------------------------------------ 目次 */}
        <nav aria-labelledby="toc" className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p id="toc" className="text-sm font-bold text-gray-900">
            目次
          </p>
          <ol className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {TOC.map((t, i) => (
              <li key={t.id} className="flex gap-2">
                <span className="w-6 shrink-0 font-bold text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                <a href={`#${t.id}`} className="text-gray-800 underline-offset-2 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ================================================= 1 リスク */}
        <section>
          <H2 id="risk" num="1">
            寒さが現場にもたらす3つのリスク
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            冬の現場で起きる問題は「寒くてつらい」だけではありません。体温が下がること、手元と足元の動きが鈍ること、そして暖を取る道具そのものが事故の原因になること。この3つを分けて考えると、そろえるべき物がはっきりします。
          </p>

          <TableWrap caption="冬の現場の3大リスクと対策の方向">
            <thead>
              <tr>
                <th className={TH}>リスク</th>
                <th className={TH}>何が起きるか</th>
                <th className={TH}>主な対策</th>
                <th className={TH}>対策品の例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${TD} font-bold`}>体温の低下</td>
                <td className={TD}>低体温症は深部体温が35℃を下回った状態。強い震えに始まり、手指が不器用になり、判断力が落ちていく。濡れた衣服と風が引き金。</td>
                <td className={TD}>防風・防水のアウター、汗冷えを防ぐ重ね着、休憩所の暖房</td>
                <td className={TD}>
                  <PLinks items={[P.burtle7610, P.heatVest]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>手元・足元の事故</td>
                <td className={TD}>かじかんだ手で工具や資材をつかみ損ねる。凍った通路や仮設階段で足を取られる。</td>
                <td className={TD}>防寒手袋、防寒長靴、出入口の融雪、通路の凍結防止</td>
                <td className={TD}>
                  <PLinks items={[vi(V.secureThermo), P.zactus, P.antifreeze]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>暖房・養生による中毒</td>
                <td className={TD}>練炭や発電機の排ガスがシート囲いや詰所にたまり、一酸化炭素中毒を起こす。</td>
                <td className={TD}>電気式暖房への置き換え、換気、CO濃度の測定と警報器</td>
                <td className={TD}>
                  <PLinks items={[P.outdoorStove, P.deskHeater]} />
                </td>
              </tr>
            </tbody>
          </TableWrap>

          <H3>体感温度は「風」で大きく変わる</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            寒さを左右するのは気温だけではない。「風速が1m増すごとに体感温度は1℃下がる」と言われ、風速5mなら実際より5℃寒く感じる計算です（名古屋市科学館の展示解説）。高所・橋梁・湾岸の現場で、まず防風から固めるのはこのため。
          </p>
          <figure className="my-6 rounded-xl border border-gray-200 bg-white p-5">
            <figcaption className="text-sm font-bold text-gray-900">気温5℃のときの体感温度（目安）</figcaption>
            <div className="mt-4 space-y-3">
              {WIND.map((w) => (
                <div key={w.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs font-bold text-gray-700">{w.label}</span>
                  <div className="h-7 flex-1 rounded bg-gray-100">
                    <div
                      className={`flex h-7 items-center justify-end rounded pr-2 text-xs font-bold ${w.t <= 0 ? "bg-gray-900 text-white" : "bg-gray-400 text-gray-900"}`}
                      style={{ width: `${(w.t + 5) * 10}%` }}
                    >
                      {w.t}℃
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">※「風速1m/sで約1℃下がる」という目安で編集部が計算。湿度や日差しでも変わります。</p>
          </figure>

          <H3>現場の声：困りごとの1位は「体温調整」</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            建設現場で働く506人への調査（ウィルオブ・コンストラクション、2023年12月実施）では、外勤者の<M>87.7%</M>が冬場に防寒対策をしていると回答しました。身につけている物は機能性インナー64.8%、作業用手袋44.2%、機能性タイツ43.7%の順。一方、困りごとの1位は<M>「体温調整が難しい」43.2%</M>、2位は「防寒アイテムの購入費用」36.0%でした。
          </p>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            動いて汗をかき、止まって冷える。この繰り返しにどう付き合うかが、現場の防寒の本題です。厚い一枚より、脱ぎ着しやすい重ね着と、温度を変えられる電熱ウェアが効く理由もここにあります。
          </p>
          <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <MiniRow p={P.heaterGlove} />
            <MiniRow p={P.heatVest} />
          </div>
        </section>

        {/* ================================================= 2 3層 */}
        <section>
          <H2 id="three-layers" num="2">
            防寒対策は「人・場所・現場」の3層で組む
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            服装を手厚くしても、昼休みに冷えた詰所で過ごせば午後の作業はつらくなる。詰所を暖めても、凍った通路で転べば意味がない。防寒対策は、誰が・どこで・何をするかで3つの層に分けて準備します。
          </p>
          <div className="my-6 grid gap-3 sm:grid-cols-3">
            {[
              { h: "人", s: "身につける", b: "防寒ブルゾン、電熱ベスト、手袋・ネックウォーマー・長靴", w: "作業員ごとに用意" },
              { h: "場所", s: "休む・待つ", b: "詰所や現場事務所の暖房、屋外休憩所のストーブ、ブランケット", w: "現場単位で用意" },
              { h: "現場", s: "作業環境", b: "通路の凍結防止、出入口の融雪、寒中コンクリートの養生", w: "工程に合わせて用意" },
            ].map((c) => (
              <div key={c.h} className="rounded-xl border-2 border-gray-900 bg-white p-4">
                <p className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">{c.h}</span>
                  <span className="text-xs font-bold text-gray-500">{c.s}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">{c.b}</p>
                <p className="mt-3 inline-block rounded bg-gray-900 px-2 py-0.5 text-[11px] font-bold text-white">{c.w}</p>
              </div>
            ))}
          </div>

          <TableWrap caption="気温別・防寒レベル早見表（目安）">
            <thead>
              <tr>
                <th className={TH}>気温の目安</th>
                <th className={TH}>人：服装</th>
                <th className={TH}>人：小物</th>
                <th className={TH}>場所・現場</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${TD} font-bold`}>10℃前後（晩秋の日中）</td>
                <td className={TD}>
                  軽防寒かソフトシェル
                  <div className="mt-2">
                    <PLinks items={[vi(V.burtle7420), P.columbiaSoftshell]} />
                  </div>
                </td>
                <td className={TD}>
                  薄手のネックウォーマー
                  <div className="mt-2">
                    <PLinks items={[P.agniNeck]} />
                  </div>
                </td>
                <td className={TD}>
                  詰所に足元ヒーター
                  <div className="mt-2">
                    <PLinks items={[P.panelHeater]} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>5℃前後（初冬の朝夕）</td>
                <td className={TD}>
                  防寒ブルゾン＋保温インナー
                  <div className="mt-2">
                    <PLinks items={[vi(V.aitozTultex, 1), vi(V.xebec222)]} />
                  </div>
                </td>
                <td className={TD}>
                  防寒手袋
                  <div className="mt-2">
                    <PLinks items={[vi(V.secureThermo, 1)]} />
                  </div>
                </td>
                <td className={TD}>
                  朝礼場所に屋外用ストーブ
                  <div className="mt-2">
                    <PLinks items={[P.outdoorStove]} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>0℃前後（真冬）</td>
                <td className={TD}>
                  防水防寒＋電熱ベスト
                  <div className="mt-2">
                    <PLinks items={[P.burtle7610, P.heatVest]} />
                  </div>
                </td>
                <td className={TD}>
                  バラクラバ・防寒ソックス
                  <div className="mt-2">
                    <PLinks items={[P.balaclava, P.socks]} />
                  </div>
                </td>
                <td className={TD}>
                  通路に凍結防止剤
                  <div className="mt-2">
                    <PLinks items={[P.antifreeze]} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>氷点下・降雪・強風</td>
                <td className={TD}>
                  防水防寒の上下＋電熱グローブ
                  <div className="mt-2">
                    <PLinks items={[vi(V.burtle5030), vi(V.midoriVE2007), P.heaterGlove]} />
                  </div>
                </td>
                <td className={TD}>
                  防寒長靴
                  <div className="mt-2">
                    <PLinks items={[P.zactus]} />
                  </div>
                </td>
                <td className={TD}>
                  出入口に融雪マット、打設部は給熱養生
                  <div className="mt-2">
                    <PLinks items={[P.snowMat, P.charcoalStove]} />
                  </div>
                </td>
              </tr>
            </tbody>
          </TableWrap>
          <p className="text-xs text-gray-500">※気温の区分は編集部の目安。風の強い日や、雨・雪で服が濡れる日は1段階寒い側の装備を選んでください。</p>

          <MainCta lead="早見表の装備をまとめてそろえる｜防寒対策品一覧" />
        </section>

        {/* ================================================= 3 経費 */}
        <section>
          <H2 id="cost" num="3">
            公共工事の防寒対策費は積み上げ計上できる（2026年度）
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            「現場 防寒対策」で調べると、自治体の積算資料が上位に並びます。公共工事では、防寒対策の費用をどの経費で見るかがルール化されているため。発注者と協議する前に、押さえたいポイントを整理しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-gray-800">
            <li>
              国土交通省の「土木請負工事における現場環境改善費の積算要領」（2026年2月27日付、4月1日適用）は、<M>主に現場の施設や設備に対する熱中症対策・防寒対策の費用</M>について、率分ではなく、対策の妥当性を確認したうえで積み上げ計上するとしている。
            </li>
            <li>
              積み上げの上限は、率分で計上される現場環境改善費の<M>100%</M>。改定前の50%から2倍に広がりました（国交省の記者発表資料）。
            </li>
            <li>同じ要領は「現場管理費に計上される作業員個人の費用と重複がないこと」の確認も求めている。</li>
          </ul>

          <TableWrap caption="防寒対策の費用区分の目安（国の土木工事の考え方）">
            <thead>
              <tr>
                <th className={TH}>区分</th>
                <th className={TH}>費用の扱い</th>
                <th className={TH}>該当しやすいもの</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${TD} font-bold`}>現場の施設・設備</td>
                <td className={TD}>現場環境改善費に積み上げ。対策の妥当性の確認と、受発注者の協議が前提。</td>
                <td className={TD}>
                  詰所・休憩所の暖房、出入口の融雪設備
                  <div className="mt-2">
                    <PLinks items={[P.outdoorStove, P.panelHeater, P.deskHeater, P.snowMat]} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>作業員個人の装備</td>
                <td className={TD}>現場管理費側。宮崎県の積算要領は、個人向けの対策を積み上げの対象外と明記している（例示は空調服など暑さ対策）。</td>
                <td className={TD}>
                  防寒着、電熱ベスト、手袋
                  <div className="mt-2">
                    <PLinks items={[P.burtle7610, P.heatVest, vi(V.secureThermo)]} />
                  </div>
                </td>
              </tr>
            </tbody>
          </TableWrap>

          <H3>購入品とリース品で、積み上がる額が違う</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            国交省の留意事項（2025年2月28日）では、リース品は設置期間分のリース費用、購入品は設置期間分の減価償却費を計上します。広島県の運用では、購入品は「購入価格×設置日数÷（耐用年数×365）」で計算し、千円未満は切り捨て。ジェットヒーターの耐用年数は6年（暖房用機器）として例示されています。
          </p>
          <div className="my-6 rounded-xl border border-gray-300 bg-white p-5">
            <p className="text-sm font-bold text-gray-900">試算：購入した暖房機器を90日設置した場合（編集部の仮定）</p>
            <div className="mt-3 grid gap-2 text-sm text-gray-800 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-100 p-3">
                <p className="text-xs text-gray-500">購入価格</p>
                <p className="text-lg font-bold">30,000円</p>
              </div>
              <div className="rounded-lg bg-gray-100 p-3">
                <p className="text-xs text-gray-500">設置日数／耐用年数</p>
                <p className="text-lg font-bold">90日／6年</p>
              </div>
              <div className="rounded-lg bg-gray-900 p-3 text-white">
                <p className="text-xs text-gray-300">計上額（千円未満切り捨て）</p>
                <p className="text-lg font-bold">1,000円</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-gray-600">30,000×90÷（6×365）＝1,232円 → 1,000円。価格と日数は仮の数字で、実際の計上は発注者の基準と協議によります。</p>
          </div>
          <p className="text-[15px] leading-loose text-gray-800">
            購入品は1つの工事で積み上がる額が小さい。高額な暖房設備はリースで工事に計上し、手頃な足元ヒーターや屋外用ストーブは会社の備品として複数の現場で回す。この使い分けが現実的です。手続きは、着手前に工事打合せ簿で品目・規模・設置期間・概算費用を協議し、作業終了までに実施内容と実費を見積書などとあわせて提出する流れ（広島県）。
          </p>
          <CautionBox title="上限や適用時期は発注者ごとに違う">
            <p>
              山形県は国の改定を受け、暫定措置として積み上げの上限を50%から80%に引き上げました（2026年5月26日通知、6月以降の設計変更から）。市町村の工事や民間工事は、それぞれの基準と契約条件で決まります。本記事は積算の考え方を紹介するもので、個別工事の可否を判断するものではありません。
            </p>
          </CautionBox>
        </section>

        {/* ================================================= 4 選び方 */}
        <section>
          <H2 id="criteria" num="4">
            現場用防寒着を選ぶ6つの基準
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            作業服メーカーの防寒着は「動いて、汚れて、洗って、また着る」前提で作られています。街着との違いが出るのは、次の6つの基準。支給品を決めるときのチェック表として使ってください。
          </p>
          <TableWrap caption="現場用防寒着のチェック表">
            <thead>
              <tr>
                <th className={TH}>基準</th>
                <th className={TH}>見るポイント</th>
                <th className={TH}>該当する例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${TD} font-bold`}>1 防風</td>
                <td className={TD}>表地の目の細かさ、防風フィルムの有無。風の強い高所・橋梁・湾岸では最優先。</td>
                <td className={TD}>
                  <PLinks items={[vi(V.aitozTultex, 2), vi(V.midoriVE2009)]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>2 防水・撥水</td>
                <td className={TD}>耐水圧の数値とシームテープ。撥水は小雨まで、雨や雪の中の作業なら防水を選ぶ。</td>
                <td className={TD}>
                  <PLinks items={[P.burtle7610, vi(V.burtle5030, 1)]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>3 動きやすさ</td>
                <td className={TD}>腕を上げても裾が上がらないか、ストレッチ素材か。袖のないベストも選択肢。</td>
                <td className={TD}>
                  <PLinks items={[vi(V.midoriVE2009), vi(V.burtle5034)]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>4 帯電防止</td>
                <td className={TD}>給油設備や粉じん、可燃性ガスの近くで作業するなら帯電防止仕様。JIS T8118の表示が目安。</td>
                <td className={TD}>
                  <PLinks items={[vi(V.midoriVE2019), vi(V.burtle7420)]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>5 視認性</td>
                <td className={TD}>夕方以降の道路工事や重機の近くでの作業なら、反射材・蛍光色つき。</td>
                <td className={TD}>
                  <PLinks items={[P.burtle7610, vi(V.secureThermo)]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>6 サイズと色の展開</td>
                <td className={TD}>全員に支給するならSSから5Lまで。協力会社ごとに色分けしたいなら色数も見る。</td>
                <td className={TD}>
                  <PLinks items={[vi(V.aitozTultex, 3)]} />
                </td>
              </tr>
            </tbody>
          </TableWrap>

          <PointBox title="重ね着は「インナー・ミドル・アウター」で考える">
            <p>
              インナーは汗を肌から離すもの、ミドルは保温するもの、アウターは風と雨を止めるもの。調査で困りごとの1位だった体温調整は、<M>ミドルを脱ぎ着しやすいベストにする</M>だけで楽になります。電熱ベストをミドルに使えば、脱がずに温度だけ下げることもできる。
            </p>
          </PointBox>

          <H3>高所作業はハーネスとの相性を確認</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            高さ6.75mを超える箇所では、墜落制止用器具はフルハーネス型が原則です（厚生労働省、2019年2月施行の新規格）。厚手の防寒着の上からハーネスを締めると、ベルトの位置がずれたり締め付けが甘くなったりしがち。防寒着を着たうえでハーネスを装着し直すか、背中にランヤード用のスリットがあるハーネス対応の防寒着を選ぶと扱いやすくなります。
          </p>

          <CautionBox title="溶接・溶断の近くでは表地の素材に注意">
            <p>
              ナイロンやポリエステルの表地は、火の粉で穴が開いたり溶けたりします。火花が出る作業の近くで、アウトドア用のダウンや化繊ジャケットをそのまま着るのは避けたいところ。防炎・難燃の作業着やスパッタシートなど、火気側の対策を別に用意してください。
            </p>
          </CautionBox>
        </section>

        {/* ================================================= 5 作業服メーカー */}
        <section>
          <H2 id="workwear" num="5">
            作業服メーカーの防寒ブルゾン・ジャケット10モデル
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            ここからは作業服メーカーの防寒着を用途別に紹介します。楽天のCRECOTEで扱うTRUSCO取扱品の9モデルと、GC-selectのBURTLE防水防寒1モデル。色・サイズ違いは、カードの中から直接選べます。
          </p>

          <H3>定番の防寒ブルゾン：まず全員分をそろえる</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            支給品の一着目は、防風と保温がしっかりしていて、サイズと色の選択肢が多いものが向いています。AZ-8476は5色展開で、協力会社や職種ごとの色分けがしやすい。XEBEC 222は襟に収めるインフードと袖・裾のリブで、冷気を入れない定番型です。
          </p>
          <Grid>
            <VariantCard g={V.aitozTultex} />
            <VariantCard g={V.xebec222} />
          </Grid>

          <H3>防水・防風を重視：雨・雪・海沿いの現場</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            濡れは体温を一気に奪います。雨や雪の中で作業する現場なら、撥水ではなく防水を選びたい。BURTLE 7610は耐水圧10,000mmでシームテープと反射材付き、5030は表地にTPUラミネートを重ねた防水防寒です。
          </p>
          <Grid>
            <ProductCard p={P.burtle7610} />
            <VariantCard g={V.burtle5030} />
          </Grid>

          <H3>動きやすさ・高所作業：ストレッチ、ハーネス対応、ベスト</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            ミドリ安全のベルデクセルは、ストレッチニットと防風フィルム、フリースを貼り合わせた素材。中綿で膨らませないので着ぶくれしにくく、表裏の導電繊維で帯電も防ぎます。上衣・下衣・ハーネス対応の3型を職種に合わせて組み合わせられるのが強み。腕を大きく使うなら、5030と同じ生地のBURTLE 5034（ベスト）という選択肢もあります。
          </p>
          <Grid>
            <VariantCard g={V.midoriVE2009} />
            <VariantCard g={V.midoriVE2007} />
            <VariantCard g={V.midoriVE2019} />
            <VariantCard g={V.burtle5034} />
          </Grid>
          <p className="text-xs leading-relaxed text-gray-500">
            ※ミドリ安全の公式通販では、同シリーズの一部品番に「2026年2月頃から形状を変更して順次出荷」との告知があります。現行の仕様は商品ページで確認してください。
          </p>

          <H3>軽く羽織る1枚：秋口〜初冬、運転や倉庫作業に</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            真冬用の防寒着は、11月の日中には暑すぎることがあります。BURTLE 7420のような軽防寒を1枚持っておくと、季節の変わり目や、電熱ベストを中に着る日のアウターとして使えるもの。ボア裏のPJ07は軽く羽織れるパイロット型で、車の運転や倉庫・資材置き場の作業にも使い回せます。
          </p>
          <Grid>
            <VariantCard g={V.burtle7420} />
            <VariantCard g={V.midoriPJ07} />
          </Grid>

          <TableWrap caption="作業服メーカー10モデルの比較">
            <thead>
              <tr>
                <th className={TH}>モデル</th>
                <th className={TH}>向いている現場</th>
                <th className={TH}>防水・撥水</th>
                <th className={TH}>帯電防止</th>
                <th className={TH}>サイズ展開</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={TD}><PLink p={vi(V.aitozTultex, 1)} /></td>
                <td className={TD}>屋外全般、色分けしたい現場</td>
                <td className={TD}>撥水加工なし（防風）</td>
                <td className={TD}>なし</td>
                <td className={TD}>SS〜5L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.xebec222, 1)} /></td>
                <td className={TD}>定番の中綿防寒</td>
                <td className={TD}>商品ページで確認</td>
                <td className={TD}>商品ページで確認</td>
                <td className={TD}>M〜5L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.midoriPJ07)} /></td>
                <td className={TD}>運転・倉庫・資材置き場</td>
                <td className={TD}>撥水</td>
                <td className={TD}>商品ページで確認</td>
                <td className={TD}>M〜5L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.burtle7610} /></td>
                <td className={TD}>雨・雪の屋外作業</td>
                <td className={TD}>防水（耐水圧10,000mm）</td>
                <td className={TD}>商品ページで確認</td>
                <td className={TD}>在庫サイズは商品ページで確認</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.burtle5030)} /></td>
                <td className={TD}>雨・雪・寒冷地</td>
                <td className={TD}>防水（数値は商品ページで確認）</td>
                <td className={TD}>商品ページで確認</td>
                <td className={TD}>S〜3XL</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.burtle5034)} /></td>
                <td className={TD}>腕を使う作業、重ね着</td>
                <td className={TD}>防水（数値は商品ページで確認）</td>
                <td className={TD}>商品ページで確認</td>
                <td className={TD}>S〜3XL</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.midoriVE2009)} /></td>
                <td className={TD}>動きの多い作業</td>
                <td className={TD}>防風</td>
                <td className={TD}>あり（導電繊維）</td>
                <td className={TD}>SS〜5L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.midoriVE2007)} /></td>
                <td className={TD}>しゃがむ・またぐ作業</td>
                <td className={TD}>防風</td>
                <td className={TD}>あり（導電繊維）</td>
                <td className={TD}>SS〜5L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.midoriVE2019)} /></td>
                <td className={TD}>高所作業（ハーネス着用）</td>
                <td className={TD}>防風</td>
                <td className={TD}>あり（JIS適合の表記）</td>
                <td className={TD}>SS〜5L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={vi(V.burtle7420)} /></td>
                <td className={TD}>秋口〜初冬、重ね着</td>
                <td className={TD}>撥水</td>
                <td className={TD}>あり（帯電防止糸）</td>
                <td className={TD}>S〜5L</td>
              </tr>
            </tbody>
          </TableWrap>

          <PointBox title="サイズ選びは「着込む量」と「動作」で決める">
            <p>
              防寒着は中にベストやパーカーを着る前提で、普段の作業着と同じか1サイズ上が基本。腕を前に伸ばして背中がつっぱらないか、しゃがんで腰が出ないかを試着で確かめます。BURTLEは3XL表記、アイトスやミドリ安全は5L表記と、メーカーで呼び方が違う点にも気をつけたい。
            </p>
          </PointBox>

          <SubCta href={CTA_TRUSCO} title="TRUSCOの取扱品をまとめて見る" sub="トラスコ中山商品一覧（楽天 signcity2024）" />
        </section>

        {/* ================================================= 6 電熱 */}
        <section>
          <H2 id="heated" num="6">
            電熱ウェア・充電式グッズの選び方
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            電熱ウェアは「着る暖房」。動き始めて汗ばんだら温度を下げ、手を止めたら上げる。服を脱ぎ着するより細かく体温を調整できるのが、普通の防寒着にない利点です。体幹を温めるベストを基本に、手先の冷えが強い人はグローブを足す、という組み方がわかりやすいでしょう。
          </p>
          <FeaturedCard p={P.heatVest} label="電熱の基本はベストから" />

          <TableWrap caption="電熱・充電式グッズの比較">
            <thead>
              <tr>
                <th className={TH}>製品</th>
                <th className={TH}>温める場所</th>
                <th className={TH}>電源・時間</th>
                <th className={TH}>向く場面</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={TD}><PLink p={P.heatVest} /></td>
                <td className={TD}>背中・腰・首元・腹部（5か所）</td>
                <td className={TD}>バッテリー仕様は商品ページで確認</td>
                <td className={TD}>屋外作業全般の中間着</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.heaterGlove} /></td>
                <td className={TD}>手全体と指先</td>
                <td className={TD}>3.7V/4000mAh（バッテリー2個付）、約3〜5時間、約40〜55℃</td>
                <td className={TD}>寒冷地や朝の屋外作業（防水ではない）</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.sugunukku} /></td>
                <td className={TD}>手（指先は出る）</td>
                <td className={TD}>1400mAh、3段階</td>
                <td className={TD}>図面・タブレット・野帳の記入</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.eneheat} /></td>
                <td className={TD}>ポケットの中で手を温める</td>
                <td className={TD}>4400mAh、充電2〜3時間、弱で約5時間</td>
                <td className={TD}>巡回中や休憩中</td>
              </tr>
            </tbody>
          </TableWrap>

          <H3>選ぶときに見る4つのポイント</H3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-gray-800">
            <li>温める場所：背中と腰を広く温めるベストが基本。手先の冷えには電熱グローブか充電カイロを足す。</li>
            <li>稼働時間：8時間の作業日なら、弱〜中で昼休みまで持つか、予備バッテリーと交換するかを決めておく。</li>
            <li>洗濯：ヒーターやバッテリーを外して洗えるか。汗をかく現場では洗えない物はすぐ不衛生になる。</li>
            <li>防水：今回の充電式ヒーターグローブは防水仕様ではない。雨の日や水を扱う作業は、防水防寒手袋に替える。</li>
          </ol>
          <Grid>
            <ProductCard p={P.heaterGlove} />
            <ProductCard p={P.sugunukku} />
          </Grid>
          <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <MiniRow p={P.eneheat} />
            <MiniRow p={P.heatVest} />
          </div>

          <CautionBox title="リチウムイオン電池は「熱」と「衝撃」を避ける">
            <p>
              NITEによると、2020〜2024年の5年間に通知されたリチウムイオン電池搭載製品の事故は1,860件。そのうち約85%が火災に発展しています。対策として挙げられているのは、連絡先の確かなメーカー・販売店から買う、熱や強い衝撃を与えない、異常を感じたらすぐ使用をやめる、の3点です。
            </p>
            <p>
              現場で起きやすいのは、車のダッシュボードや重機の運転席への置きっぱなし、資材と一緒に落とす、といった「熱」と「衝撃」。純正以外のバッテリーを流用しないことも、会社のルールとして決めておきましょう。
            </p>
          </CautionBox>
        </section>

        {/* ================================================= 7 末端 */}
        <section>
          <H2 id="extremities" num="7">
            頭・首・手・足の「末端」を守る小物
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            体幹を温めても、むき出しの首やヘルメットの下、長靴の中のつま先から冷えは入ってきます。小物は比較的手頃で、作業員ごとに好みも分かれるもの。会社の支給品と、本人が選ぶ物を分けて考えるのも一つの方法です。
          </p>
          <TableWrap caption="部位別・ありがちな失敗と対策">
            <thead>
              <tr>
                <th className={TH}>部位</th>
                <th className={TH}>ありがちな失敗</th>
                <th className={TH}>対策</th>
                <th className={TH}>商品</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${TD} font-bold`}>頭・顔</td>
                <td className={TD}>厚手のニット帽でヘルメットのあごひもが締まらない</td>
                <td className={TD}>薄手のバラクラバで頭・首・口元をまとめて覆う</td>
                <td className={TD}>
                  <PLinks items={[P.balaclava]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>首</td>
                <td className={TD}>マフラーの端が機械や手すりに引っかかる</td>
                <td className={TD}>端の出ない筒形のネックウォーマー</td>
                <td className={TD}>
                  <PLinks items={[P.agniNeck]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>手</td>
                <td className={TD}>軍手を2枚重ねて物がつかみにくくなる</td>
                <td className={TD}>防水防寒手袋か電熱グローブ</td>
                <td className={TD}>
                  <PLinks items={[vi(V.secureThermo), vi(V.secureThermo, 1), P.heaterGlove]} />
                </td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>足</td>
                <td className={TD}>長靴の中で靴下が汗で湿り、つま先が冷える</td>
                <td className={TD}>防寒ソックス＋裏地の厚い防寒長靴</td>
                <td className={TD}>
                  <PLinks items={[P.socks, P.zactus]} />
                </td>
              </tr>
            </tbody>
          </TableWrap>

          <Grid>
            <ProductCard p={P.balaclava} />
            <ProductCard p={P.agniNeck} />
            <VariantCard g={V.secureThermo} />
            <ProductCard p={P.zactus} />
          </Grid>
          <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <MiniRow p={P.socks} />
          </div>
          <p className="text-[15px] leading-loose text-gray-800">
            マフラーやストールは、回転する機械への巻き込まれや、足場での引っかかりの原因になります。現場では端の出ない筒形を選び、ヘルメットの下に着ける物は、装着後にヘルメットがぐらつかないかを必ず確認してください。
          </p>
        </section>

        {/* ================================================= 8 監督 */}
        <section>
          <H2 id="supervisor" num="8">
            監督・巡回・通勤向けの防寒ジャケット
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            現場代理人や施工管理は、屋外の巡回、事務所での書類仕事、車での移動を1日に何度も行き来します。作業員ほど汚れない代わりに、着脱のしやすさと蒸れにくさが欲しい。アウトドアブランドのジャケットが監督に選ばれるのはこのためです。
          </p>
          <Grid>
            <ProductCard p={P.tnfWinterdance} />
            <ProductCard p={P.karrimorLT} />
            <ProductCard p={P.columbiaWomens} />
            <ProductCard p={P.columbiaSoftshell} />
          </Grid>
          <TableWrap caption="監督・巡回向けジャケットの比較">
            <thead>
              <tr>
                <th className={TH}>モデル</th>
                <th className={TH}>特徴</th>
                <th className={TH}>防水・撥水</th>
                <th className={TH}>サイズ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={TD}><PLink p={P.tnfWinterdance} /></td>
                <td className={TD}>GORE-TEX 3層、脇下ベンチレーション</td>
                <td className={TD}>防水（GORE-TEX）</td>
                <td className={TD}>M・L・XL</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.karrimorLT} /></td>
                <td className={TD}>プリマロフト中綿、ミドルにも使える</td>
                <td className={TD}>撥水</td>
                <td className={TD}>S〜XL</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.columbiaWomens} /></td>
                <td className={TD}>女性向けサイズ、熱反射の裏地</td>
                <td className={TD}>撥水</td>
                <td className={TD}>S・M・L</td>
              </tr>
              <tr>
                <td className={TD}><PLink p={P.columbiaSoftshell} /></td>
                <td className={TD}>ストレッチ、防風、たたんで持ち歩ける</td>
                <td className={TD}>撥水</td>
                <td className={TD}>M・L・XL</td>
              </tr>
            </tbody>
          </TableWrap>
          <p className="text-[15px] leading-loose text-gray-800">
            選び方の軸は、雨の日も巡回するならGORE-TEXのような防水、車移動が多いなら脱ぎやすい軽さ。女性の技術者や監督には、メンズの小さいサイズより女性用の型のほうが肩と袖が合いやすくなります。溶接や溶断の立ち会いでは、4章の注意どおり火の粉の届く距離に近づかないようにしてください。
          </p>

          <MainCta lead="監督用・作業員用をまとめて検討する｜防寒対策品一覧" />
        </section>

        {/* ================================================= 9 詰所 */}
        <section>
          <H2 id="rest-area" num="9">
            詰所・現場事務所の暖房と休憩環境
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            休憩で体温を戻せるかどうかで、午後の作業の動きが変わります。屋外の寒さについては、職場の熱中症対策のような数値の基準が法令にありません。だからこそ、休む場所を暖めることが、現場側でできる確実な対策になります。
          </p>
          <TableWrap caption="暖房・室温に関係する主な決まり">
            <thead>
              <tr>
                <th className={TH}>決まり</th>
                <th className={TH}>内容</th>
                <th className={TH}>対象・強さ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${TD} font-bold`}>労働安全衛生規則 第606条</td>
                <td className={TD}>暑熱・寒冷・多湿の屋内作業場で有害のおそれがあるとき、冷房・暖房・通風など適当な温湿度調節の措置を講じる。</td>
                <td className={TD}>屋内作業場／義務</td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>事務所衛生基準規則 第4条</td>
                <td className={TD}>室の気温が10℃以下の場合は、暖房するなど適当な温度調節の措置を講じる。</td>
                <td className={TD}>事務所／義務</td>
              </tr>
              <tr>
                <td className={`${TD} font-bold`}>事務所衛生基準規則 第5条</td>
                <td className={TD}>空気調和設備を設けている場合、室温を18〜28℃にするよう努める（2022年4月に下限を17℃から18℃へ）。</td>
                <td className={TD}>事務所／努力義務</td>
              </tr>
            </tbody>
          </TableWrap>

          <H3>電気式の足元暖房と屋外用ストーブ</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            仮設の詰所は電源が限られます。100Vのコンセントは1か所あたり15A、つまり1,500Wが上限。足元のパネルヒーターは160〜200Wなので複数台でも収まりますが、屋外用の電気ストーブは最大1,500Wで1か所を使い切るため、ほかの機器とは分けてつなぎます。
          </p>
          <Grid>
            <ProductCard p={P.panelHeater} />
            <ProductCard p={P.deskHeater} />
            <ProductCard p={P.outdoorStove} />
            <ProductCard p={P.nukkuRobe} />
          </Grid>

          <figure className="my-6 rounded-xl border border-gray-200 bg-white p-5">
            <figcaption className="text-sm font-bold text-gray-900">1日あたりの電気代の目安（編集部の試算）</figcaption>
            <div className="mt-4 space-y-3">
              {POWER.map((r) => (
                <div key={r.label}>
                  <div className="flex items-baseline justify-between gap-2 text-xs">
                    <span className="font-bold text-gray-800">{r.label}</span>
                    <span className="text-gray-500">{r.cond}</span>
                  </div>
                  <div className="mt-1 h-6 rounded bg-gray-100">
                    <div
                      className="flex h-6 min-w-[3.5rem] items-center justify-end rounded bg-gray-900 pr-2 text-xs font-bold text-white"
                      style={{ width: `${Math.round((r.yen / 233) * 100)}%` }}
                    >
                      約{r.yen}円
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              ※電力料金の目安単価31円/kWh（全国家庭電気製品公正取引協議会、2022年7月改定）と定格値で計算。使用時間は編集部の仮定で、温度設定やサーモスタットの働きで実際の額は変わります。
            </p>
          </figure>

          <H3>休憩の質を上げる小物</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            冬は汗が目立たないぶん、水分補給がおろそかになりがち。冷たい飲み物を敬遠する人には、ボトルを温めておける保温グッズが効きます。車内での待機や、停電時の備えにはブランケットを1枚。体温を反射する多層シートなら、たたんで小さく保管できます。
          </p>
          <Grid>
            <ProductCard p={P.blanket} />
            <ProductCard p={P.bottleWarmer} />
          </Grid>

          <CautionBox title="燃焼式の暖房を使うなら、換気とCO警報器をセットに">
            <p>
              石油ストーブやガスヒーターなど燃焼式の暖房は、締め切った詰所で一酸化炭素がたまる原因になります。北海道労働局がまとめた2026年の発生状況には、倉庫で使っていた廃油ストーブの煙突が屋外に出ていなかった事例も載っています。燃焼式を使うなら定期的に換気し、CO警報器を置いてください。
            </p>
          </CautionBox>
        </section>

        {/* ================================================= 10 現場 */}
        <section>
          <H2 id="site" num="10">
            凍結・積雪・寒中コンクリートの冬対策
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            最後は、人ではなく現場そのものの冬対策です。通路の凍結、出入口の積雪、そして打設したコンクリートの凍害。どれも放置すると、転倒や品質不良として表に出てきます。
          </p>

          <H3>通路・スロープ・仮設階段の凍結</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            朝いちばんに滑りやすいのは、日陰の通路、鉄板の上、仮設階段の踏み板。凍結防止剤は前日の夕方か、冷え込む前にまいておくと効きが違います。塩化物系の薬剤は金属を錆びさせやすく、防錆剤を混ぜないと腐食は防げないとされています（北陸地方整備局の掲載資料）。足場材や車両、重機の近くでは量を控えめにしましょう。
          </p>

          <H3>詰所・事務所の出入口の積雪</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            人の出入りが多い出入口は、踏み固められた雪が氷になりやすい場所です。電気式の融雪マットなら、降り始めから雪を融かして凍結を防げます。メーカーは表面温度の目安を「外気温＋約20℃」と案内しており、車両の乗り入れや、落雪のような大量の雪には向かないとのこと。750Wを10時間使った場合の電気代は、前章の試算で1日約233円です。
          </p>
          <Grid>
            <ProductCard p={P.antifreeze} />
            <ProductCard p={P.snowMat} />
          </Grid>

          <H3>寒中コンクリートの給熱養生</H3>
          <p className="mt-4 text-[15px] leading-loose text-gray-800">
            日平均気温が4℃以下になると予想されるときは、寒中コンクリートとして施工します（北海道開発局の技術資料）。標準は、初期凍害を防げる強度が出るまでコンクリートの温度を5℃以上に保ち、さらに2日間は0℃以上に保つこと。シートで囲って給熱する方法の一つが、練炭コンロによる養生です。
          </p>
          <ol className="relative my-6 space-y-4 border-l-2 border-gray-900 pl-6">
            {[
              { h: "打設前", b: "日平均気温4℃以下の予報なら、寒中コンクリートの施工計画に切り替える" },
              { h: "打設直後", b: "シートで囲い、給熱してコンクリートの温度を5℃以上に保つ" },
              { h: "所定の強度に達した後", b: "さらに2日間は0℃以上を保つ" },
              { h: "養生の終了", b: "保温・給熱をやめるときは温度を急に下げない" },
            ].map((s) => (
              <li key={s.h} className="relative">
                <span aria-hidden="true" className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-white bg-gray-900" />
                <p className="text-sm font-bold text-gray-900">{s.h}</p>
                <p className="text-sm leading-relaxed text-gray-700">{s.b}</p>
              </li>
            ))}
          </ol>
          <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProductCard p={P.charcoalStove} />
            <CautionBox title="練炭による養生は一酸化炭素中毒の対象作業">
              <p>
                厚生労働省は、練炭を燃やすコンクリート養生を一酸化炭素中毒予防の対象作業と位置づけ、作業開始時の濃度測定、換気、50ppm以下に設定したCO警報器の携帯などの対策を示しています（2011年通達）。囲いの中に入る前は必ず換気し、濃度を確かめてください。
              </p>
              <p>
                自然換気が不十分な場所での内燃機関の使用は、労働安全衛生規則第578条で禁止されています。2026年にも、解体現場で養生の外の発電機の排ガスが養生内に流れ込み、4人が被災した事例が報告されました。このコンロは養生専用として扱い、詰所の暖房には使わないこと。
              </p>
            </CautionBox>
          </div>
        </section>

        {/* ================================================= 11 FAQ */}
        <section>
          <H2 id="faq" num="11">
            よくある質問
          </H2>
          <dl className="mt-6 space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-5">
                <dt className="flex gap-2 text-[15px] font-bold leading-snug text-gray-900">
                  <span className="shrink-0 rounded bg-gray-900 px-1.5 text-xs leading-6 text-white">Q</span>
                  {f.q}
                </dt>
                <dd className="mt-3 flex gap-2 text-[15px] leading-relaxed text-gray-800">
                  <span className="shrink-0 rounded border border-gray-900 px-1.5 text-xs font-bold leading-6 text-gray-900">A</span>
                  <span>{f.a}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ================================================= 12 まとめ */}
        <section>
          <H2 id="summary" num="12">
            まとめ
          </H2>
          <p className="mt-5 text-[15px] leading-loose text-gray-800">
            冬の現場の防寒は、作業員の服装、休む場所の暖房、現場の凍結と養生という3つの層をそろえて初めて回ります。公共工事なら、施設・設備の防寒対策は積み上げ計上の協議ができる。燃焼する道具を使う場面では、一酸化炭素への備えを忘れずに。冬の現場に入る前に、次のチェックリストで準備の抜けを確かめてください。
          </p>
          <div className="my-6 rounded-2xl border-2 border-gray-900 bg-white p-5">
            <p className="text-sm font-bold text-gray-900">冬の現場入り前チェックリスト</p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-gray-800">
              {[
                "作業員の防風アウターとサイズを確認した",
                "汗冷え対策のミドル（ベスト・電熱ベスト）を用意した",
                "手袋・ネックウォーマー・防寒ソックスなど末端の小物をそろえた",
                "詰所・現場事務所の暖房と、コンセントごとの消費電力を確認した",
                "燃焼式の暖房・発電機・練炭を使う場所の換気とCO警報器を決めた",
                "通路・階段の凍結防止と出入口の融雪を準備した",
                "公共工事なら、防寒対策の積み上げ計上を着手前に監督職員と協議した",
              ].map((c) => (
                <li key={c} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1 inline-block h-4 w-4 shrink-0 rounded border-2 border-gray-900" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-10 rounded-2xl bg-gray-900 p-5 text-white sm:p-6">
            <p className="text-center text-base font-bold">防寒対策品をまとめて見る</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <a
                href={CTA_GC_LIST}
                {...EXT}
                aria-label="防寒対策品一覧を見る（自社サイト GC-select・新しいタブで開く）"
                className="flex min-h-[60px] flex-col items-center justify-center rounded-xl bg-white px-3 py-2 text-gray-900 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="text-sm font-bold">防寒対策品一覧 →</span>
                <span className="text-[11px] text-gray-600">自社サイト GC-select</span>
              </a>
              <a
                href={CTA_RK_LIST}
                {...EXT}
                aria-label="防寒対策品一覧を見る（楽天市場 CRECOTE・新しいタブで開く）"
                className="flex min-h-[60px] flex-col items-center justify-center rounded-xl bg-white px-3 py-2 text-gray-900 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="text-sm font-bold">防寒対策品一覧 →</span>
                <span className="text-[11px] text-gray-600">楽天市場 CRECOTE</span>
              </a>
              <a
                href={CTA_TRUSCO}
                {...EXT}
                aria-label="トラスコ中山商品一覧を見る（楽天 signcity2024・新しいタブで開く）"
                className="flex min-h-[60px] flex-col items-center justify-center rounded-xl border-2 border-white px-3 py-2 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="text-sm font-bold">トラスコ中山商品一覧 →</span>
                <span className="text-[11px] text-gray-300">楽天 signcity2024</span>
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ 関連記事 */}
        <aside aria-labelledby="related" className="mt-12">
          <h2 id="related" className="text-base font-bold text-gray-900">
            関連記事
          </h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {RELATED.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className={`block rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-900 ${FOCUS}`}>
                  <span className="block text-sm font-bold text-gray-900">{r.title}</span>
                  <span className="mt-1 block text-xs text-gray-600">{r.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* ------------------------------------------------ 参考資料 */}
        <aside aria-labelledby="refs" className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h2 id="refs" className="text-base font-bold text-gray-900">
            参考資料
          </h2>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed">
            {REFS.map((r) => (
              <li key={r.u}>
                <a href={r.u} {...REF} className="text-gray-700 underline underline-offset-2 hover:text-gray-900">
                  {r.t}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* ------------------------------------------------ 免責 */}
        <footer className="mt-8 border-t border-gray-200 pt-6 text-xs leading-relaxed text-gray-500">
          <p>
            本記事は2026年10月16日時点の公開資料と各商品ページの記載をもとに、作業用品ナビ編集部がまとめたものです。商品の仕様・価格・在庫は変わることがあるため、購入前に各商品ページで確認してください。積算・経費の扱いは発注者の基準と契約条件によって決まり、本記事は個別の工事の判断や法的助言を行うものではありません。
          </p>
          <p className="mt-2">
            震えが止まらない、受け答えがはっきりしないなど、寒さで様子が普段と違うときは、ためらわず119番へ。救急車を呼ぶか迷うときは#7119（救急安心センター。実施していない地域は自治体の相談窓口）に相談できます。
          </p>
        </footer>
      </article>
    </main>
      <SiteFooter />
    </>
  );
}
