import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "whiteboard-size-1200-1800-2400";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

const IMG = {
  hero: `${ARTICLE_IMG}/mobile-whiteboard-size-selection-hero.jpg`,
  sizeWriting: `${ARTICLE_IMG}/whiteboard-writing-capacity-size-comparison.jpg`,
  delivery: `${ARTICLE_IMG}/large-whiteboard-delivery-route-check.jpg`,
  material: `${ARTICLE_IMG}/enamel-steel-whiteboard-surface-comparison.jpg`,
  surface: `${ARTICLE_IMG}/plain-grid-schedule-whiteboard-comparison.jpg`,
  typeCompare: `${ARTICLE_IMG}/standard-low-position-ud-guide-board.jpg`,
  factory: `${ARTICLE_IMG}/factory-schedule-process-whiteboard-management.jpg`,
};

export const metadata: Metadata = {
  title: "脚付きホワイトボードのサイズ選び｜1200・1800・2400mmの違い",
  description:
    "脚付きホワイトボードは1200・1800・2400mmのどれを選ぶかを冒頭で即答。人数だけでなく筆記量で選ぶ考え方、板面サイズと本体外寸の違い、搬入経路、ホーローとスチール、片面と両面、無地・暗線・月予定表、低位置・UD・案内板までを実務フローで解説します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title: "脚付きホワイトボードのサイズ選び｜1200・1800・2400mmを用途別に比較",
    description:
      "脚付きホワイトボードは1200・1800・2400mmのどれを選ぶかを冒頭で即答。人数だけでなく筆記量で選ぶ考え方、板面サイズと本体外寸の違い、搬入経路、ホーローとスチール、片面と両面、無地・暗線・月予定表までを実務フローで解説します。",
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
// 楽天 signcity2024：数字IDを末尾スラッシュ付きで渡す（? の前に必ずスラッシュ）
const RS = (id: string) => buildUrl(`https://item.rakuten.co.jp/signcity2024/${id}/`, UTM);
const IMG_BASE = "/products/";
const productImg = (f: string) => `${IMG_BASE}${f}`;

// trade-sign.com への誘導（オリジナル製作を最も強く訴求）
const TS_LEG = buildUrl("https://www.trade-sign.com/whiteboard/01/", UTM);
const TS_WALL = buildUrl("https://www.trade-sign.com/whiteboard/02/", UTM);
const TS_ORIG = buildUrl("https://www.trade-sign.com/main/original-whiteboard/index.html", UTM);

// ---- 商品マスタ（本体外寸・重量・マグネット・付属品・回転仕様は要確認。価格は固定表示しない）----
type P = {
  code: string; name: string; short: string; img: string; url: string;
  size: string; sides: string; material: string; surface: string; use: string; check: string;
};
const CHECK = "本体外寸・重量・マグネット対応・付属品（マーカー/イレーザー/トレー）（要確認）";

// ===== 回転ホーロー（回転式）=====
const P_373_88: P = { code: "373-88", name: "脚付回転ホーローホワイトボード 片面 373-88", short: "373-88（回転・片面）", img: "015842.jpg", url: RS("015842"), size: "要確認", sides: "片面", material: "ホーロー", surface: "無地（回転式）", use: "板面を回して使う回転式・高頻度筆記", check: "板面寸法・本体外寸・回転仕様（要確認）" };
const P_373_86: P = { code: "373-86", name: "脚付回転ホーローホワイトボード 両面 373-86", short: "373-86（回転・両面）", img: "015843.jpg", url: RS("015843"), size: "要確認", sides: "両面", material: "ホーロー", surface: "無地（回転式）", use: "表裏を回転して使う会議・工程管理", check: "板面寸法・本体外寸・回転仕様（要確認）" };
const P_373_85: P = { code: "373-85", name: "脚付回転ホーローホワイトボード 両面 373-85", short: "373-85（回転・両面）", img: "015844.jpg", url: RS("015844"), size: "要確認", sides: "両面", material: "ホーロー", surface: "無地（回転式）", use: "表裏を回転して使う会議・工程管理", check: "板面寸法・本体外寸・回転仕様（要確認）" };
const P_373_87: P = { code: "373-87", name: "脚付回転ホーローホワイトボード 片面 373-87", short: "373-87（回転・片面）", img: "015845.jpg", url: RS("015845"), size: "要確認", sides: "片面", material: "ホーロー", surface: "無地（回転式）", use: "板面を回して使う回転式・高頻度筆記", check: "板面寸法・本体外寸・回転仕様（要確認）" };

// ===== 暗線・UD =====
const P_UDMT33: P = { code: "UDMT33", name: "UDミーティングボード UDMT33 暗線入 片面 947×1750", short: "UDMT33（暗線・片面）", img: "040781.jpg", url: RS("040781"), size: "947×1750（要確認）", sides: "片面", material: "要確認", surface: "暗線入り", use: "図表・レイアウトを整えて書きたい会議", check: `板面/本体外寸の別・${CHECK}` };
const P_MH36TDXN: P = { code: "MH36TDXN", name: "MAJI MH36TDXN 1810×910 暗線入／無地両面", short: "MH36TDXN（1810×910・両面）", img: "040786.jpg", url: RS("040786"), size: "1810×910", sides: "両面", material: "ホーロー", surface: "暗線入り／無地", use: "一般会議・工程管理で図表と自由記入を両立", check: CHECK };
const P_MH34TDXN: P = { code: "MH34TDXN", name: "MAJI MH34TDXN 1210×910 暗線入／無地両面", short: "MH34TDXN（1210×910・両面）", img: "040787.jpg", url: RS("040787"), size: "1210×910", sides: "両面", material: "ホーロー", surface: "暗線入り／無地", use: "少人数・省スペースで図表と自由記入を両立", check: CHECK };
const P_MH36TXN: P = { code: "MH36TXN", name: "MAJI MH36TXN 1810×910 暗線入片面", short: "MH36TXN（1810×910・片面）", img: "040788.jpg", url: RS("040788"), size: "1810×910", sides: "片面", material: "ホーロー", surface: "暗線入り", use: "壁際設置で図表を整えて書く", check: CHECK };

// ===== 無地・標準 =====
const P_MV36TDN: P = { code: "MV36TDN", name: "MAJI MV36TDN スチール 1810×910 両面", short: "MV36TDN（1810×910・両面）", img: "040790.jpg", url: RS("040790"), size: "1810×910", sides: "両面", material: "スチール", surface: "無地", use: "一般会議・コスト重視の中規模用途", check: CHECK };
const P_MV34TDN: P = { code: "MV34TDN", name: "MAJI MV34TDN スチール 1210×910 両面", short: "MV34TDN（1210×910・両面）", img: "040791.jpg", url: RS("040791"), size: "1210×910", sides: "両面", material: "スチール", surface: "無地", use: "少人数・省スペース・コスト重視", check: CHECK };
const P_MH48TDN: P = { code: "MH48TDN", name: "MAJI MH48TDN ホーロー 2410×1210 両面", short: "MH48TDN（2410×1210・両面）", img: "040792.jpg", url: RS("040792"), size: "2410×1210", sides: "両面", material: "ホーロー", surface: "無地", use: "大人数・複数工程を同時に書く大型用途", check: `大型のため搬入経路・${CHECK}` };
const P_MH46TDN: P = { code: "MH46TDN", name: "MAJI MH46TDN ホーロー 1810×1210 両面", short: "MH46TDN（1810×1210・両面）", img: "040793.jpg", url: RS("040793"), size: "1810×1210", sides: "両面", material: "ホーロー", surface: "無地", use: "高さのある大板面で情報量を確保", check: `搬入経路・${CHECK}` };
const P_MH36TDN: P = { code: "MH36TDN", name: "MAJI MH36TDN ホーロー 1810×910 両面", short: "MH36TDN（1810×910・両面）", img: "040794.jpg", url: RS("040794"), size: "1810×910", sides: "両面", material: "ホーロー", surface: "無地", use: "一般会議・工程管理の定番サイズ", check: CHECK };
const P_MH48TN: P = { code: "MH48TN", name: "MAJI MH48TN ホーロー 2410×1210 片面", short: "MH48TN（2410×1210・片面）", img: "040798.jpg", url: RS("040798"), size: "2410×1210", sides: "片面", material: "ホーロー", surface: "無地", use: "壁際に置く大型・大人数用途", check: `大型のため搬入経路・${CHECK}` };
const P_MH46TN: P = { code: "MH46TN", name: "MAJI MH46TN ホーロー 1810×1210 片面", short: "MH46TN（1810×1210・片面）", img: "040799.jpg", url: RS("040799"), size: "1810×1210", sides: "片面", material: "ホーロー", surface: "無地", use: "壁際で高さのある大板面が欲しいとき", check: `搬入経路・${CHECK}` };
const P_MH36TN: P = { code: "MH36TN", name: "MAJI MH36TN ホーロー 1810×910 片面", short: "MH36TN（1810×910・片面）", img: "040800.jpg", url: RS("040800"), size: "1810×910", sides: "片面", material: "ホーロー", surface: "無地", use: "壁際設置の一般会議・工程管理", check: CHECK };

// ===== AX・予定表 =====
const P_AX34TDMN: P = { code: "AX34TDMN", name: "AX34TDMN 月予定表 1210×920 両面", short: "AX34TDMN（月予定・両面）", img: "073956.jpg", url: RS("073956"), size: "1210×920", sides: "両面", material: "要確認", surface: "月予定表", use: "少人数拠点の月間予定共有", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_AX34TDN: P = { code: "AX34TDN", name: "AX34TDN 無地 1210×920 両面", short: "AX34TDN（無地・両面）", img: "073957.jpg", url: RS("073957"), size: "1210×920", sides: "両面", material: "要確認", surface: "無地", use: "少人数の一般筆記", check: CHECK };
const P_AX34TDYN: P = { code: "AX34TDYN", name: "AX34TDYN 月予定表 1210×920 両面", short: "AX34TDYN（月予定・両面）", img: "073960.jpg", url: RS("073960"), size: "1210×920", sides: "両面", material: "要確認", surface: "月予定表", use: "少人数の月間予定共有（欄構成違い）", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_AX34TDSN: P = { code: "AX34TDSN", name: "AX34TDSN スケジュール 1210×920 両面", short: "AX34TDSN（スケジュール・両面）", img: "073958.jpg", url: RS("073958"), size: "1210×920", sides: "両面", material: "要確認", surface: "スケジュール", use: "予定・工程のスケジュール管理", check: `欄構成・${CHECK}` };
const P_AX36TDYN: P = { code: "AX36TDYN", name: "AX36TDYN 月予定表 1810×920 両面", short: "AX36TDYN（月予定・両面）", img: "073965.jpg", url: RS("073965"), size: "1810×920", sides: "両面", material: "要確認", surface: "月予定表", use: "中規模拠点の月間予定共有", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_AX34TMN: P = { code: "AX34TMN", name: "AX34TMN 月予定表 1210×920 片面", short: "AX34TMN（月予定・片面）", img: "073966.jpg", url: RS("073966"), size: "1210×920", sides: "片面", material: "要確認", surface: "月予定表", use: "壁際で月間予定を掲示", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_AX36TMN: P = { code: "AX36TMN", name: "AX36TMN 月予定表 1810×920 片面", short: "AX36TMN（月予定・片面）", img: "073971.jpg", url: RS("073971"), size: "1810×920", sides: "片面", material: "要確認", surface: "月予定表", use: "壁際で中規模の月間予定を掲示", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_AX34TYN: P = { code: "AX34TYN", name: "AX34TYN 月予定表 1210×920 片面", short: "AX34TYN（月予定・片面）", img: "073970.jpg", url: RS("073970"), size: "1210×920", sides: "片面", material: "要確認", surface: "月予定表", use: "壁際で少人数の月間予定を掲示", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_AX36TN: P = { code: "AX36TN", name: "AX36TN 無地 1810×920 片面", short: "AX36TN（無地・片面）", img: "073972.jpg", url: RS("073972"), size: "1810×920", sides: "片面", material: "要確認", surface: "無地", use: "壁際設置の一般筆記", check: CHECK };

// ===== MAJI 月予定 =====
const P_MH36TDMN: P = { code: "MH36TDMN", name: "MAJI MH36TDMN 月予定表 1810×910 両面", short: "MH36TDMN（月予定・両面）", img: "073979.jpg", url: RS("073979"), size: "1810×910", sides: "両面", material: "ホーロー", surface: "月予定表", use: "中規模の月間予定共有（高頻度）", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_MH36TDYN: P = { code: "MH36TDYN", name: "MAJI MH36TDYN 月予定表 1810×910 両面", short: "MH36TDYN（月予定・両面）", img: "073980.jpg", url: RS("073980"), size: "1810×910", sides: "両面", material: "ホーロー", surface: "月予定表", use: "中規模の月間予定共有（欄構成違い）", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_MH34TMN: P = { code: "MH34TMN", name: "MAJI MH34TMN 月予定表 1210×910 片面", short: "MH34TMN（月予定・片面）", img: "073981.jpg", url: RS("073981"), size: "1210×910", sides: "片面", material: "ホーロー", surface: "月予定表", use: "壁際で少人数の月間予定を掲示", check: `罫線/欄構成（縦横）・${CHECK}` };
const P_MV36TDMN: P = { code: "MV36TDMN", name: "MAJI MV36TDMN スチール 予定表／無地 1810×910 両面", short: "MV36TDMN（予定/無地・両面）", img: "073988.jpg", url: RS("073988"), size: "1810×910", sides: "両面", material: "スチール", surface: "月予定表／無地", use: "予定共有と自由記入を両立（コスト重視）", check: `罫線/欄構成・${CHECK}` };

// ===== ホワイトボード／黒板・低位置 =====
const P_MSH36TDN: P = { code: "MSH36TDN", name: "MSH36TDN ホワイトボード／黒板 両面 1840×926", short: "MSH36TDN（白/黒板・両面）", img: "074002.jpg", url: RS("074002"), size: "1840×926（要確認）", sides: "両面", material: "要確認", surface: "ホワイト／黒板", use: "白板と黒板を1台で使い分けたい用途", check: `板面/本体外寸の別・白/黒板面の仕様・${CHECK}` };
const P_MSH34TDN: P = { code: "MSH34TDN", name: "MSH34TDN ホワイトボード／黒板 両面", short: "MSH34TDN（白/黒板・両面）", img: "074001.jpg", url: RS("074001"), size: "要確認（表記1326×1840）", sides: "両面", material: "要確認", surface: "ホワイト／黒板", use: "白板と黒板を1台で使い分けたい用途", check: "縦横・本体外寸・板面寸法をメーカー情報で要確認" };
const P_MSHL36TDN: P = { code: "MSHL36TDN", name: "MSHL36TDN 低位置ボード 1810×910 両面", short: "MSHL36TDN（低位置・両面）", img: "074004.jpg", url: RS("074004"), size: "1810×910", sides: "両面", material: "要確認", surface: "無地（低位置）", use: "着座者・上端に手が届きにくい人も使いやすい低位置設置", check: `低位置は車いす専用品と断定しない・設置高さ・${CHECK}` };

// ===== UD案内板（通常会議用と区別）=====
const P_Y8HH300CN: P = { code: "Y8HH300CN", name: "Y8HH300CN UD案内板 キャスター付 両面 334×1392", short: "Y8HH300CN（UD案内板）", img: "074045.jpg", url: RS("074045"), size: "334×1392", sides: "両面", material: "要確認", surface: "案内板", use: "受付・入口の案内表示（通常の会議用ボードとは用途が異なる）", check: `キャスター固定・板面仕様・${CHECK}` };
const P_Y8HH450C: P = { code: "Y8HH450C", name: "Y8HH450C UD案内板 キャスター付 両面 484×1392", short: "Y8HH450C（UD案内板）", img: "074046.jpg", url: RS("074046"), size: "484×1392", sides: "両面", material: "要確認", surface: "案内板", use: "受付・入口の案内表示（幅広・通常会議用と用途が異なる）", check: `キャスター固定・板面仕様・${CHECK}` };

// ---- FAQ（本文表示用。※FAQリッチリザルトは廃止のためFAQPage JSON-LDは付与しない）----
const faqs: { q: string; a: string }[] = [
  { q: "1200mmと1800mmはどちらを選べばよいですか？", a: "使用人数だけでなく、同時に書くテーマ数と消さずに残す情報量で選びます。少人数・省スペースで書く量が少なければ1200mm前後、一般会議や工程管理で複数の内容を同時に書くなら1800mm前後が目安です。人数別の目安は編集部独自のもので、法的・公的基準ではありません。" },
  { q: "1800mmと2400mmはどう選び分けますか？", a: "1800mmは一般会議・工程管理に、2400mm前後は大人数や複数工程を同時に書く大型用途に向きます。ただし大きいほど良いわけではなく、2400mmは本体外寸が大きく搬入経路・設置スペースの確認が必須です。必要な筆記量に対して過剰でないかを見ます。" },
  { q: "何人ならどのサイズという目安はありますか？", a: "目安はありますが、これは編集部独自の選定目安で、法的・公的な基準ではありません。人数が同じでも、同時に書くテーマ数や残す情報量で必要な板面は変わります。人数はあくまで出発点として、筆記量で最終判断してください。" },
  { q: "板面の高さ910mmと1210mmはどう違いますか？", a: "高さ1210mmは910mmより縦方向の情報量が増え、図表や工程を大きく書けます。一方で本体が大きく重くなり、上端へ手が届きにくくなることもあります。書く内容の縦の量と、使う人の手の届く範囲で選びます。" },
  { q: "板面サイズと本体外寸は何が違いますか？", a: "板面サイズは書ける面の寸法、本体外寸は脚・支柱・トレーまで含めた全体の寸法です。設置スペースや搬入可否は本体外寸で判断します。板面が1810mmでも、脚を含む本体はそれより大きくなります。商品ごとに本体外寸を確認してください。" },
  { q: "大型ボードの搬入で確認することは？", a: "本体外寸（特に幅・高さ・奥行き）に対して、扉・エレベーター・廊下・曲がり角・階段が通るかを確認します。組立式なら組立場所と、組立後に設置部屋へ入るかも確認します。搬入確認表で経路の寸法と本体外寸を突き合わせてください。" },
  { q: "エレベーターに入るか不安です。どう確認しますか？", a: "エレベーターの間口（扉幅）・かご内寸・積載を確認し、本体外寸（組立式なら梱包寸法）と突き合わせます。斜めに入れれば入る場合もありますが、無理は避け、通らない場合は分割搬入や組立場所の変更を検討します。" },
  { q: "ホーローとスチールはどちらがよいですか？", a: "ホーローは表面が硬く傷・汚れに強い傾向で、高頻度使用や長期使用に向くとされます。スチールはコスト面で選びやすい傾向です。どちらも一長一短で、使用頻度・予算・設置環境で選びます。ホーローでも絶対に汚れないわけではなく、日常の手入れは必要です。" },
  { q: "消えにくくなるのを防ぐには？", a: "こまめに拭き取り、専用のクリーナーで手入れします。長時間放置した筆記や不適合なマーカーは残りやすくなります。表面材質（ホーロー/スチール）にかかわらず、日常の清掃が消去性の維持につながります。" },
  { q: "片面と両面はどう選びますか？", a: "壁際に置いて片側だけ使うなら片面、部屋の中央や表裏で使い分けるなら両面が向きます。両面は情報量が倍になりますが、必ずしも回転式とは限りません。設置場所と使い方で選びます。" },
  { q: "両面はすべて回転しますか？", a: "両面イコール回転式ではありません。回転式は板面を回して表裏を切り替えられるタイプで、固定式の両面もあります。回転仕様は商品ごとに確認してください。" },
  { q: "暗線入りとは何ですか？", a: "暗線入りは、うっすらとした方眼などの線が板面に入ったタイプです。表からは目立ちにくく、図表・表・レイアウトをまっすぐ整えて書きやすくなります。無地との両面（暗線／無地）もあります。" },
  { q: "暗線は書いた文字の邪魔になりませんか？", a: "暗線は目立ちにくい濃さで入っているため、通常の筆記の邪魔になりにくいのが特長です。見え方は製品によって異なるため、図表中心か自由記入中心かで、暗線か無地かを選びます。" },
  { q: "月予定表と行動予定表はどう違いますか？", a: "月予定表は1か月単位の予定を一覧するフォーマット、行動予定表はメンバーごとの当日〜数日の動きを管理するフォーマットが一般的です。用途が異なるため、共有したい期間と単位で選びます。欄構成は商品画像とメーカー仕様で確認します。" },
  { q: "予定表の縦書きと横書きはどう選びますか？", a: "縦・横や欄構成は運用に合わせて選びます。商品名だけからは罫線方向・欄構成を判断できないため、商品画像とメーカー仕様で確認してください。既存の運用フォーマットに合うかを基準にします。" },
  { q: "マグネットは使えますか？", a: "マグネット対応は製品により異なり、商品名からは判断できません。掲示物をマグネットで留めたい場合は、マグネット対応か（表面材質・仕様）を商品ページ・メーカー情報で確認してください。" },
  { q: "マーカーやイレーザーは付属しますか？", a: "付属の有無は製品により異なり、推測できません。マーカー・イレーザー・トレーなどの付属品は、商品ページ・メーカー仕様で確認し、不足分は別途手配します。" },
  { q: "組立は必要ですか？", a: "組立の有無・梱包寸法は製品により異なります。組立式の場合は組立場所を確保し、組立後に設置部屋へ入るかも確認します。組立の要否は商品ページで確認してください。" },
  { q: "低位置・UDタイプはどんな人向けですか？", a: "低位置タイプは板面が低めで、着座者や上端に手が届きにくい人も使いやすい設置に配慮したものです。ただし特定の利用者専用品と断定はできません。実際の設置高さと使う人の範囲で選びます。" },
  { q: "ホワイトボードと黒板の両面型とは？", a: "片面がホワイトボード、もう片面が黒板になった両面型です。用途で面を使い分けられます。白板面・黒板面それぞれの仕様（マグネット可否など）を確認して選びます。" },
  { q: "キャスター付き案内板は会議用に使えますか？", a: "UD案内板は受付・入口などの案内表示用で、通常の会議用ホワイトボードとは用途が異なります。会議で大きく筆記する用途には、会議用のサイズ・板面のボードを選びます。案内板はキャスターの固定も確認します。" },
  { q: "サイズが合わない・特注したいときは？", a: "既製品で希望のサイズや板面（無地・暗線・月予定・行動予定・罫線・社名入りなど）が見つからない場合は、寸法も板面も自由に設計できるオリジナル製作という選択肢があります。会議室の壁面いっぱいや、工程管理専用フォーマット、拠点統一フォーマットなどに対応できます。" },
];

// ---- 構造化データ（Article + BreadcrumbList のみ）----
const PAGE_URL = `${SITE_URL}/articles/${SLUG}`;
const HOME_URL = `${SITE_URL}/`;
const articleLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "脚付きホワイトボードのサイズ選び｜1200・1800・2400mmを用途別に比較",
  description: "1200・1800・2400mmの違い、筆記量で選ぶ考え方、板面サイズと本体外寸、搬入経路、ホーローとスチール、片面と両面、無地・暗線・月予定表、低位置・UD・案内板を解説。",
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
    { "@type": "ListItem", position: 3, name: "脚付きホワイトボードのサイズ選び", item: PAGE_URL },
  ],
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
function CustomBoardBanner() {
  return (
    <div className="my-8 overflow-hidden rounded-xl border-2 border-gray-900 bg-gray-900 text-white">
      <div className="p-6 sm:p-8">
        <p className="mb-1 text-xs font-bold tracking-widest text-gray-300">サイズも板面も、既製品で合わないときは</p>
        <p className="mb-3 text-2xl font-bold leading-snug tracking-wide sm:text-3xl">
          サイズ自由・ボード面自由。
          <br className="sm:hidden" />
          オリジナルホワイトボード製作
        </p>
        <p className="mb-5 text-sm leading-relaxed text-gray-200 sm:text-base">
          幅も高さも、板面（無地・暗線・月予定・行動予定・罫線・社名やレイアウト入りなど）も自由に設計できます。会議室の壁面いっぱいのサイズ、工場の工程管理専用フォーマット、複数拠点で統一するオリジナル様式まで対応可能です。既製品のサイズ・仕様で迷ったら、まず相談してみてください。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={TS_ORIG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-base font-bold text-gray-900 transition hover:bg-gray-100"
          >
            オリジナルホワイトボード製作を相談する →
          </a>
          <a
            href={TS_LEG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
          >
            脚付きホワイトボード一覧
          </a>
          <a
            href={TS_WALL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
          >
            壁掛けホワイトボード一覧
          </a>
        </div>
      </div>
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
          {p.size}／{p.sides}
        </span>
        <p className="mb-1 text-sm font-bold leading-snug text-gray-900">{p.short}</p>
        <p className="mb-2 text-xs text-gray-600">{p.name}</p>
        <dl className="mb-3 space-y-1 text-xs text-gray-700">
          <div>
            <dt className="inline font-bold">材質：</dt>
            <dd className="inline">{p.material}</dd>
          </div>
          <div>
            <dt className="inline font-bold">板面仕様：</dt>
            <dd className="inline">{p.surface}</dd>
          </div>
          <div>
            <dt className="inline font-bold">向く用途：</dt>
            <dd className="inline">{p.use}</dd>
          </div>
          <div>
            <dt className="inline font-bold">購入前確認：</dt>
            <dd className="inline">{p.check}</dd>
          </div>
        </dl>
        <span className="mt-auto inline-block rounded-lg bg-gray-900 px-3 py-2.5 text-center text-sm font-bold text-white group-hover:bg-gray-700">
          商品ページで仕様を見る →
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

        <nav className="mb-4 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">選び方ガイド</Link>
          <span className="mx-1">/</span>
          <span className="text-gray-700">脚付きホワイトボードのサイズ選び</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          選び方ガイド
        </span>

        <h1 className={cls.h1}>
          脚付きホワイトボードのサイズ選び｜1200・1800・2400mmを用途別に比較
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月20日／約20分で読めます
        </p>

        <Figure
          src={IMG.hero}
          priority
          alt="オフィスの会議室で1200mm・1800mm・2400mmの脚付きホワイトボードをサイズ比較している様子"
          caption="サイズは人数だけでなく、同時に書く情報量と搬入経路で選ぶ"
        />

        <AnswerBox>
          <p><strong>サイズは人数だけでは決めません。</strong>同時に書くテーマ数と、消さずに残す情報量で選びます。目安は、1200mm前後が少人数・省スペース、1800mm前後が一般会議・工程管理、2400mm前後が大人数・複数工程です（人数別の目安は編集部独自のもので、法的・公的基準ではありません）。</p>
          <p><strong>大型品は本体外寸と搬入経路を確認します。</strong>板面サイズと脚を含む本体外寸は異なります。2400mm級は扉・エレベーター・廊下・曲がり角を通るかを必ず確認します。</p>
          <p><strong>材質・板面仕様も選びます。</strong>高頻度使用はホーローが候補、壁際は片面・表裏活用は両面、図表は暗線入り、予定共有は月予定表が向きます。既製サイズや板面が合わなければ、オリジナル製作という選択肢もあります。</p>
        </AnswerBox>

        <p className={cls.body}>まず、記事前半で使う代表的な脚付きホワイトボードを並べます。選び方はこの後、サイズ・搬入・材質・片面/両面・板面仕様・特殊用途の順に解説します。</p>

        <CardGrid>
          <ProductCard p={P_MH34TDXN} priority />
          <ProductCard p={P_MH36TDN} priority />
          <ProductCard p={P_MH48TDN} priority />
          <ProductCard p={P_MH36TDXN} priority />
          <ProductCard p={P_AX34TDMN} priority />
          <ProductCard p={P_MSHL36TDN} priority />
        </CardGrid>

        <CTA label="設置場所と筆記量から脚付きホワイトボードを選ぶ" href="#size1200" />

        <CustomBoardBanner />

        {/* ===== H2-1 ===== */}
        <h2 id="size-select" className={cls.h2}>脚付きホワイトボードは1200・1800・2400mmのどれを選ぶ？</h2>
        <p className={cls.body}>結論は「人数ではなく筆記量で選ぶ」です。まず代表サイズの目安を押さえ、次章で決め方を具体化します。以下の人数はあくまで編集部独自の目安で、法的・公的な基準ではありません。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>板面サイズ</Th><Th>主な用途</Th><Th>筆記量</Th><Th>設置スペース</Th><Th>搬入難易度</Th><Th>商品候補</Th></tr></thead>
            <tbody>
              <tr><Td>1210×910前後</Td><Td>少人数会議・省スペース</Td><Td>少なめ</Td><Td>小</Td><Td>易</Td><Td>MH34TDXN／MV34TDN</Td></tr>
              <tr><Td>1810×910前後</Td><Td>一般会議・工程管理</Td><Td>標準</Td><Td>中</Td><Td>中</Td><Td>MH36TDN／MH36TDXN</Td></tr>
              <tr><Td>1810×1210前後</Td><Td>高さのある大板面</Td><Td>多め</Td><Td>中〜大</Td><Td>中〜難</Td><Td>MH46TDN／MH46TN</Td></tr>
              <tr><Td>2410×1210前後</Td><Td>大人数・複数工程</Td><Td>多い</Td><Td>大</Td><Td>難（搬入確認必須）</Td><Td>MH48TDN／MH48TN</Td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={cls.h3}>1200mm</h3>
        <p className={cls.body}>1200mm（板面1210mm前後）は少人数・省スペース向けです。書く量が少なく、消しながら使う打ち合わせに向きます。設置・搬入の負担も小さめです。</p>
        <h3 className={cls.h3}>1800mm</h3>
        <p className={cls.body}>1800mm（板面1810mm前後）は一般会議・工程管理の定番です。複数のテーマを同時に書き、ある程度残して使う用途に対応しやすいサイズです。</p>
        <h3 className={cls.h3}>2400mm</h3>
        <p className={cls.body}>2400mm（板面2410mm前後）は大人数・複数工程を同時に書く大型用途です。情報量は大きい一方、本体外寸が大きく搬入・設置の確認が欠かせません。</p>
        <h3 className={cls.h3}>高さ910mmと1210mm</h3>
        <p className={cls.body}>板面高さは910mmと1210mmが代表的です。1210mmは縦の情報量が増え、図表や工程を大きく書けますが、本体が大きく重くなり、上端に手が届きにくくなることもあります。</p>
        <h3 className={cls.h3}>人数だけで決めない</h3>
        <p className={cls.body}>同じ人数でも、同時に書くテーマ数や残す情報量で必要な板面は変わります。人数は出発点にとどめ、筆記量で最終判断します。</p>

        {/* ===== H2-2 ===== */}
        <h2 id="five-step" className={cls.h2}>必要なサイズを決める5ステップ</h2>
        <p className={cls.body}>サイズは次の5ステップで決めると、過不足なく選べます。人数→筆記量→残す情報→掲示→設置の順に確認します。</p>
        <Figure src={IMG.sizeWriting} alt="同じ会議でも書く情報量によって必要なホワイトボードの板面サイズが変わることを示した比較" caption="人数が同じでも、同時に書く量で必要な板面は変わる" />
        <h3 className={cls.h3}>人数</h3>
        <p className={cls.body}>まず使用人数を確認します。ただし人数は出発点で、これだけでサイズは決めません（人数目安は編集部独自のもの）。</p>
        <h3 className={cls.h3}>テーマ数</h3>
        <p className={cls.body}>同時に書くテーマ・項目の数を確認します。複数を並べて書くほど、横幅のある板面が要ります。</p>
        <h3 className={cls.h3}>残す情報</h3>
        <p className={cls.body}>消さずに残しておきたい情報量を確認します。途中で消さざるを得ないサイズは、議論や工程管理を妨げます。</p>
        <h3 className={cls.h3}>掲示資料</h3>
        <p className={cls.body}>マグネットで資料を掲示するなら、その分の面積も見込みます（マグネット対応は要確認）。掲示と筆記のスペースを分けて考えます。</p>
        <h3 className={cls.h3}>設置・収納</h3>
        <p className={cls.body}>最後に設置場所と収納・移動を確認します。本体外寸・回転空間・通行スペースが確保できるサイズを選びます。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>利用場面</Th><Th>使用人数の目安※</Th><Th>書く内容</Th><Th>推奨サイズ候補</Th><Th>推奨板面</Th></tr></thead>
            <tbody>
              <tr><Td>少人数の打ち合わせ</Td><Td>2〜4名程度</Td><Td>要点を消しながら</Td><Td>1210×910</Td><Td>無地／暗線</Td></tr>
              <tr><Td>一般会議</Td><Td>4〜8名程度</Td><Td>複数テーマを並べる</Td><Td>1810×910</Td><Td>無地／暗線</Td></tr>
              <tr><Td>工程・進捗管理</Td><Td>チーム単位</Td><Td>工程・予定を残す</Td><Td>1810×910〜1810×1210</Td><Td>暗線／月予定</Td></tr>
              <tr><Td>大人数・複数工程</Td><Td>大人数</Td><Td>複数工程を同時に</Td><Td>2410×1210</Td><Td>無地／暗線</Td></tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-500">※使用人数の目安は編集部独自の選定目安であり、法的・公的な基準ではありません。</p>
        </div>

        {/* ===== H2-3 ===== */}
        <h2 id="gaisun" className={cls.h2}>板面サイズと本体外寸は違う</h2>
        <p className={cls.body}>カタログの「1810×910」は多くが板面サイズです。設置や搬入の可否は、脚・支柱・トレーを含む本体外寸で判断します。両者を混同しないことが失敗回避の第一歩です。</p>
        <h3 className={cls.h3}>支柱・脚</h3>
        <p className={cls.body}>脚や支柱の分だけ、本体外寸は板面より大きく・高くなります。設置高さや上端の手の届きも本体寸法で考えます。</p>
        <h3 className={cls.h3}>奥行き</h3>
        <p className={cls.body}>脚部やキャスターの奥行きは、通行や設置の余裕に影響します。奥行き寸法も確認します。</p>
        <h3 className={cls.h3}>回転空間</h3>
        <p className={cls.body}>回転式は板面を回すためのスペースが必要です。壁や机に近すぎると回せないため、回転に必要な空間を見込みます。</p>
        <h3 className={cls.h3}>通行スペース</h3>
        <p className={cls.body}>設置後に人が通れる通路が残るかを確認します。避難経路や動線を塞がない配置にします。</p>
        <p className={cls.body}>設置後の使い勝手は、板面サイズよりも本体外寸と周囲の余裕で決まります。カタログの数値が板面寸法か本体外寸かを必ず確認し、脚・奥行き・回転・通行の4点を設置予定場所の実寸と突き合わせてから発注すると、「置けない・回せない・通れない」といった失敗を防げます。特に回転式や両面は、板面を回す・裏面を使うためのスペースを板面サイズとは別に見込む必要があります。</p>

        {/* ===== H2-4 ===== */}
        <h2 id="hannyu" className={cls.h2}>大型品の搬入経路</h2>
        <p className={cls.body}>大型ボードは「部屋に置けるか」だけでなく「そこまで運べるか」が重要です。本体外寸（組立式は梱包寸法）で搬入経路を確認します。</p>
        <Figure src={IMG.delivery} alt="大型ホワイトボードの搬入経路として扉・エレベーター・廊下・曲がり角の寸法を確認する様子" caption="扉・エレベーター・廊下・曲がり角・階段を本体外寸と突き合わせる" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>確認場所</Th><Th>測る寸法</Th><Th>商品外寸</Th><Th>余裕</Th><Th>判定</Th></tr></thead>
            <tbody>
              <tr><Td>入口・扉</Td><Td>幅・高さ</Td><Td>本体外寸（要確認）</Td><Td>　　</Td><Td>可／不可</Td></tr>
              <tr><Td>エレベーター</Td><Td>間口・かご内寸</Td><Td>梱包寸法（要確認）</Td><Td>　　</Td><Td>可／不可</Td></tr>
              <tr><Td>廊下・曲がり角</Td><Td>幅・回転半径</Td><Td>本体外寸（要確認）</Td><Td>　　</Td><Td>可／不可</Td></tr>
              <tr><Td>階段</Td><Td>幅・踊り場</Td><Td>本体外寸（要確認）</Td><Td>　　</Td><Td>可／不可</Td></tr>
              <tr><Td>設置部屋の入口</Td><Td>組立後の外寸で通るか</Td><Td>組立後外寸（要確認）</Td><Td>　　</Td><Td>可／不可</Td></tr>
            </tbody>
          </table>
        </div>
        <h3 className={cls.h3}>扉</h3>
        <p className={cls.body}>入口の扉幅・高さを測り、本体外寸（または梱包寸法）と突き合わせます。両開き・防火扉の有効開口にも注意します。</p>
        <h3 className={cls.h3}>エレベーター</h3>
        <p className={cls.body}>間口（扉幅）とかご内寸、積載を確認します。大型は組立式でも梱包が大きいことがあり、入らなければ分割搬入や階段搬入を検討します。</p>
        <h3 className={cls.h3}>廊下・曲がり角</h3>
        <p className={cls.body}>廊下幅と曲がり角の回転半径を確認します。まっすぐは通っても、角で回せないことがあります。</p>
        <h3 className={cls.h3}>階段</h3>
        <p className={cls.body}>階段搬入では幅・踊り場・手すりを確認します。大型・重量物は無理をせず、搬入方法を事前に決めます。</p>
        <h3 className={cls.h3}>組立場所</h3>
        <p className={cls.body}>組立式は組立スペースを確保し、組立後に設置部屋の入口を通るかを確認します。組み立ててから入らない、という失敗を防ぎます。</p>

        {/* ===== H2-5 ===== */}
        <h2 id="size1200" className={cls.h2}>1200mm前後の商品</h2>
        <p className={cls.body}>1200mm（板面1210mm前後）は少人数・省スペース向けです。無地・暗線・月予定表など板面仕様の選択肢があります。板面寸法・本体外寸は各商品ページで確認してください。</p>
        <CardGrid>
          <ProductCard p={P_MH34TDXN} />
          <ProductCard p={P_MV34TDN} />
          <ProductCard p={P_AX34TDN} />
          <ProductCard p={P_AX34TDMN} />
          <ProductCard p={P_AX34TDYN} />
          <ProductCard p={P_AX34TDSN} />
          <ProductCard p={P_AX34TMN} />
          <ProductCard p={P_AX34TYN} />
          <ProductCard p={P_MH34TMN} />
        </CardGrid>
        <CTA label="幅1200mm前後の脚付きホワイトボードを見る" href="#size1200" />

        {/* ===== H2-6 ===== */}
        <h2 id="size1800" className={cls.h2}>1800mm前後の商品</h2>
        <p className={cls.body}>1800mm（板面1810mm前後）は一般会議・工程管理の定番サイズです。ホーロー／スチール、片面／両面、無地／暗線／月予定表など選択肢が最も豊富です。同シリーズの1200mmと迷う場合は筆記量で判断します。</p>
        <CardGrid>
          <ProductCard p={P_MH36TDXN} />
          <ProductCard p={P_MH36TXN} />
          <ProductCard p={P_MV36TDN} />
          <ProductCard p={P_MH36TDN} />
          <ProductCard p={P_MH36TN} />
          <ProductCard p={P_AX36TDYN} />
          <ProductCard p={P_AX36TMN} />
          <ProductCard p={P_AX36TN} />
          <ProductCard p={P_MH36TDMN} />
          <ProductCard p={P_MH36TDYN} />
          <ProductCard p={P_MV36TDMN} />
          <ProductCard p={P_MSH36TDN} />
          <ProductCard p={P_MSHL36TDN} />
        </CardGrid>
        <CTA label="幅1800mm前後の脚付きホワイトボードを見る" href="#size1800" />

        {/* ===== H2-7 ===== */}
        <h2 id="sizelarge" className={cls.h2}>1810×1210・2410×1210mmの商品</h2>
        <p className={cls.body}>高さ1210mmや幅2410mmの大型は、大人数・複数工程を同時に書く用途に向きます。情報量が大きい一方、本体外寸が大きく重いため、搬入経路の確認が欠かせません。</p>
        <CardGrid>
          <ProductCard p={P_MH46TDN} />
          <ProductCard p={P_MH46TN} />
          <ProductCard p={P_MH48TDN} />
          <ProductCard p={P_MH48TN} />
        </CardGrid>
        <Caution title="大型品は搬入経路を必ず確認">
          <p>2410×1210mm級は本体外寸が大きく、扉・エレベーター・廊下・曲がり角・階段を通らないことがあります。板面サイズではなく本体外寸（組立式は梱包寸法）で、搬入確認表を使って経路を確認してください。組立後に設置部屋へ入るかも確認します。大きいほど必ず良いわけではありません。</p>
        </Caution>
        <CTA label="1810×1210・2410×1210mmの大型タイプを見る" href="#sizelarge" />

        {/* ===== H2-8 ===== */}
        <h2 id="material" className={cls.h2}>ホーローとスチールの違い</h2>
        <p className={cls.body}>板面の表面材質は、耐久性・消去性・価格に関わります。ホーローとスチールは一長一短で、使用頻度と予算で選びます。</p>
        <Figure src={IMG.material} alt="ホーロー板面とスチール板面のホワイトボードを並べて表面の違いを比較した様子" caption="高頻度・長期使用はホーローが候補、コスト重視はスチール" />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>項目</Th><Th>ホーロー</Th><Th>スチール</Th><Th>購入前確認</Th></tr></thead>
            <tbody>
              <tr><Td>表面の硬さ・傷</Td><Td>硬く傷・汚れに強い傾向</Td><Td>ホーローより傷が付きやすい傾向</Td><Td>使用頻度に対する耐久</Td></tr>
              <tr><Td>消去性の持続</Td><Td>長期でも比較的安定しやすい</Td><Td>手入れで維持</Td><Td>日常清掃の運用</Td></tr>
              <tr><Td>価格の傾向</Td><Td>高めの傾向</Td><Td>選びやすい傾向</Td><Td>予算と使用年数</Td></tr>
              <tr><Td>向く用途</Td><Td>高頻度・長期・共有</Td><Td>短期・低頻度・コスト重視</Td><Td>設置環境</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>ホーローでも絶対に汚れない・消えにくくならないわけではなく、スチールに耐久性がないわけでもありません。どちらも日常の手入れが前提です。MH系はホーロー、MV系はスチールが目安ですが、正式な材質は商品ページで確認してください。</p>
        <CardGrid>
          <ProductCard p={P_MH36TDN} />
          <ProductCard p={P_MV36TDN} />
        </CardGrid>
        <CTA label="ホーローとスチールを比較する" href="#material" />

        {/* ===== H2-9 ===== */}
        <h2 id="sides" className={cls.h2}>片面と両面の違い</h2>
        <p className={cls.body}>片面・両面は設置場所と使い方で選びます。両面は情報量が倍になりますが、必ずしも回転式ではありません。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>項目</Th><Th>片面</Th><Th>両面</Th><Th>向く設置場所</Th></tr></thead>
            <tbody>
              <tr><Td>使える面</Td><Td>1面</Td><Td>2面（表裏）</Td><Td>片面＝壁際／両面＝中央・間仕切り</Td></tr>
              <tr><Td>情報量</Td><Td>標準</Td><Td>倍にできる</Td><Td>残す情報が多いなら両面</Td></tr>
              <tr><Td>回転</Td><Td>—</Td><Td>回転式と固定式がある</Td><Td>回すなら回転空間が必要</Td></tr>
              <tr><Td>設置</Td><Td>省スペース</Td><Td>裏面を使うスペースが要る</Td><Td>壁際は片面が無難</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>両面を壁際に置くと裏面が使えません。壁際は片面、表裏を活用するなら両面が向きます。両面が必ず回転式とは限らないため、回転の要否は仕様で確認します。</p>
        <CTA label="片面と両面を比較する" href="#sides" />

        {/* ===== H2-10 ===== */}
        <h2 id="anzen" className={cls.h2}>暗線入りとは？</h2>
        <p className={cls.body}>暗線入りは、うっすらとした方眼などの線が入った板面です。表からは目立ちにくく、図表・表・レイアウトをまっすぐ整えて書けます。無地との両面（暗線／無地）もあります。</p>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>板面仕様</Th><Th>特徴</Th><Th>向く用途</Th></tr></thead>
            <tbody>
              <tr><Td>無地</Td><Td>制約なく自由に書ける</Td><Td>一般会議・自由記入</Td></tr>
              <tr><Td>暗線入り</Td><Td>目立たない方眼で整えやすい</Td><Td>図表・表・工程の整理</Td></tr>
              <tr><Td>月予定表</Td><Td>1か月の予定を一覧</Td><Td>月間の予定共有</Td></tr>
              <tr><Td>行動予定表</Td><Td>メンバーの当日〜数日の動き</Td><Td>行動・進捗の共有</Td></tr>
              <tr><Td>ホワイト／黒板</Td><Td>白板と黒板の両面</Td><Td>面を使い分けたい用途</Td></tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>暗線の見え方は製品で異なります。図表中心なら暗線、自由記入中心なら無地、と用途で選びます。暗線面の仕様は商品ページで確認してください。</p>
        <CardGrid>
          <ProductCard p={P_UDMT33} />
          <ProductCard p={P_MH34TDXN} />
          <ProductCard p={P_MH36TDXN} />
          <ProductCard p={P_MH36TXN} />
        </CardGrid>
        <CTA label="暗線入りホワイトボードを見る" href="#anzen" />

        {/* ===== H2-11 ===== */}
        <h2 id="yotei" className={cls.h2}>月予定表・スケジュールの選び方</h2>
        <p className={cls.body}>予定表タイプは、共有したい期間と単位で選びます。月予定表・スケジュール・行動予定表は用途が異なり、欄構成や罫線方向も製品ごとに違います。</p>
        <Figure src={IMG.surface} alt="無地・暗線入り・月予定表の板面仕様を並べて違いを比較したホワイトボード" caption="無地・暗線・月予定表・スケジュールを用途で選ぶ" />
        <p className={cls.body}>月予定表は1か月の予定を一覧するフォーマット、スケジュールや行動予定表は日〜数日単位の動きを管理するフォーマットが一般的です。縦書き・横書きや欄構成は商品名からは判断できないため、商品画像とメーカー仕様で確認し、既存の運用フォーマットに合うものを選びます。</p>
        <CardGrid>
          <ProductCard p={P_AX34TDMN} />
          <ProductCard p={P_AX34TDYN} />
          <ProductCard p={P_AX34TDSN} />
          <ProductCard p={P_AX36TDYN} />
          <ProductCard p={P_MH36TDMN} />
          <ProductCard p={P_MH36TDYN} />
          <ProductCard p={P_MH34TMN} />
          <ProductCard p={P_MV36TDMN} />
        </CardGrid>
        <CTA label="月予定・スケジュールボードを見る" href="#yotei" />

        {/* ===== H2-12 ===== */}
        <h2 id="kokuban" className={cls.h2}>ホワイトボードと黒板の両面型</h2>
        <p className={cls.body}>片面がホワイトボード、もう片面が黒板になった両面型は、用途で面を使い分けたい場合に向きます。白板面・黒板面それぞれの仕様を確認して選びます。</p>
        <Caution title="MSH34TDNの寸法は要確認">
          <p>MSH34TDNは商品タイトル内の寸法表記が「1326×1840」となっており、縦横・本体外寸・板面寸法が紛らわしくなっています。発注前に縦横の向き・本体外寸・板面寸法をメーカー情報で必ず確認してください。ホワイト面・黒板面の仕様（マグネット可否など）もあわせて確認します。</p>
        </Caution>
        <CardGrid>
          <ProductCard p={P_MSH36TDN} />
          <ProductCard p={P_MSH34TDN} />
        </CardGrid>

        {/* ===== H2-13 ===== */}
        <h2 id="ud" className={cls.h2}>低位置・UDタイプ</h2>
        <p className={cls.body}>低位置タイプは板面が低めで、着座者や上端に手が届きにくい人も使いやすい設置に配慮したものです。ただし特定の利用者専用品と断定はできません。</p>
        <Figure src={IMG.typeCompare} alt="一般的な脚付きホワイトボード・低位置タイプ・キャスター付き案内板を並べて用途の違いを比較した様子" caption="一般型・低位置・案内板は用途が異なる。混同しない" />
        <p className={cls.body}>低位置タイプを選ぶときは、実際の設置高さと、使う人が上端まで無理なく届くかを確認します。UD（ユニバーサルデザイン）の考え方に配慮した製品ですが、車いす専用品などと断定せず、利用者の範囲に合うかで判断します。</p>
        <CardGrid>
          <ProductCard p={P_MSHL36TDN} />
        </CardGrid>
        <CTA label="低位置・UDタイプを見る" href="#ud" />

        {/* ===== H2-14 ===== */}
        <h2 id="annai" className={cls.h2}>キャスター付き案内板</h2>
        <p className={cls.body}>UD案内板は、受付・入口などの案内表示に使うキャスター付きのボードです。通常の会議用ホワイトボードとは用途が異なり、大きく筆記する会議用途には向きません。</p>
        <p className={cls.body}>会議で大きく書く用途には、会議用のサイズ・板面のボードを選びます。案内板はキャスターの固定（ロック）を確認し、通路や避難経路を塞がない位置に設置します。</p>
        <CardGrid>
          <ProductCard p={P_Y8HH300CN} />
          <ProductCard p={P_Y8HH450C} />
        </CardGrid>
        <CTA label="キャスター付き案内板を見る" href="#annai" />

        {/* ===== H2-15 ===== */}
        <h2 id="kaiten" className={cls.h2}>回転式ホワイトボード</h2>
        <p className={cls.body}>回転式は板面を回して表裏を切り替えられるタイプで、両面を効率よく使えます。回転にはスペースが必要で、板面寸法・本体外寸・回転仕様は商品ごとに確認します。</p>
        <CardGrid>
          <ProductCard p={P_373_85} />
          <ProductCard p={P_373_86} />
          <ProductCard p={P_373_87} />
          <ProductCard p={P_373_88} />
        </CardGrid>
        <p className={cls.body}>回転式ホーロータイプ（373-85〜88）は片面・両面があります。板面寸法・本体外寸・片面/両面・回転仕様を公開前に確認してください。回転に必要な空間（壁や机との距離）も設置前に見込みます。</p>

        {/* ===== 表7 全商品比較 ===== */}
        <h3 id="all-compare" className={cls.h3}>全商品比較（マグネット・重量・本体外寸などは各商品ページ／メーカー情報で要確認）</h3>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <thead><tr><Th>商品</Th><Th>サイズ（板面）</Th><Th>材質</Th><Th>片面・両面</Th><Th>板面仕様</Th><Th>マグネット</Th><Th>重量</Th><Th>用途</Th><Th>購入前確認</Th></tr></thead>
            <tbody>
              {[
                P_MH34TDXN, P_MV34TDN, P_AX34TDN, P_AX34TDMN, P_AX34TDYN, P_AX34TDSN, P_AX34TMN, P_AX34TYN, P_MH34TMN,
                P_MH36TDXN, P_MH36TXN, P_MV36TDN, P_MH36TDN, P_MH36TN, P_AX36TDYN, P_AX36TMN, P_AX36TN, P_MH36TDMN, P_MH36TDYN, P_MV36TDMN, P_MSH36TDN, P_MSHL36TDN,
                P_MH46TDN, P_MH46TN, P_MH48TDN, P_MH48TN,
                P_UDMT33, P_MSH34TDN, P_Y8HH300CN, P_Y8HH450C,
                P_373_85, P_373_86, P_373_87, P_373_88,
              ].map((p) => (
                <tr key={p.code}>
                  <Td>{p.short}</Td>
                  <Td>{p.size}</Td>
                  <Td>{p.material}</Td>
                  <Td>{p.sides}</Td>
                  <Td>{p.surface}</Td>
                  <Td>要確認</Td>
                  <Td>要確認</Td>
                  <Td>{p.use}</Td>
                  <Td>本体外寸・付属・マグネット（要確認）</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== H2-16 ===== */}
        <h2 id="care" className={cls.h2}>長く使うための手入れ</h2>
        <p className={cls.body}>ホワイトボードは日常の手入れで消去性と寿命が変わります。特に工程・予定管理のように消さずに残す運用では、手入れと運用ルールが要になります。</p>
        <Figure src={IMG.factory} alt="工場で脚付きホワイトボードを工程管理・月予定の共有に活用している様子" caption="工程・予定管理では、残す運用と定期的な手入れをセットにする" />
        <p className={cls.body}>使用後はこまめに拭き取り、必要に応じて専用クリーナーで手入れします。長時間放置した筆記や不適合なマーカーは残りやすくなります。ホーロー・スチールいずれも清掃は必要で、ホーローでも絶対に汚れないわけではありません。マグネットで資料を掲示する場合は、対応可否を確認して使います。キャスター付きは使用時にロックし、通路・避難経路を塞がない位置に設置します。屋内用を屋外で使わないようにします。</p>
        <p className={cls.body}>複数拠点で同じ運用をそろえると、手入れや買い替えの管理がしやすくなります。マーカーの色・太さ、イレーザーの交換、暗線面と予定表面の使い分けといったルールを決め、「消してよい情報」と「残す情報」を区別しておくと、書き直しの手間や消し忘れによる混乱を減らせます。板面が広いほど情報が蓄積しやすいため、定期的に整理する担当と頻度を決めておくと、長く快適に使えます。なお、ホワイトボードを導入しただけで情報共有が自動的に改善するわけではなく、書き方・残し方の運用とセットで初めて効果が出ます。</p>

        {/* ===== H2-17 ===== */}
        <h2 id="shippai" className={cls.h2}>よくある購入失敗</h2>
        <p className={cls.body}>ホワイトボード選びで起きやすい失敗を挙げます。当てはまるものは見直してください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "人数だけでサイズを決めた",
            "筆記量を確認しなかった",
            "1200mmで途中の内容を消すことになった",
            "必要以上に2400mmを選んだ",
            "板面サイズと本体外寸を混同した",
            "脚の奥行きを確認しなかった",
            "回転させる空間がなかった",
            "エレベーターに入らなかった",
            "曲がり角を通れなかった",
            "組立後に部屋へ入らなかった",
            "価格だけで材質を選んだ",
            "両面を壁際に置いて裏面が使えない",
            "片面・両面を誤発注した",
            "予定表の縦横・欄構成を誤発注した",
            "暗線面の仕様を確認しなかった",
            "ホワイト面と黒板面を誤認した",
            "付属品（マーカー等）を推測で判断した",
            "マグネット対応を推測で判断した",
            "上端へ手が届かなかった",
            "UD利用者への配慮を欠いた",
            "キャスターを固定しなかった",
            "通路・避難経路に設置した",
            "屋内用を屋外で使った",
            "重複商品を二重に発注した",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-2 text-sm text-gray-800">
              <span className="mt-0.5 flex-none font-bold text-red-500">✕</span><span>{t}</span>
            </li>
          ))}
        </ul>

        {/* ===== H2-18 ===== */}
        <h2 id="checklist" className={cls.h2}>法人向け購入チェックリスト</h2>
        <p className={cls.body}>複数拠点へ配備する際のチェックリストです。選定・発注・設置の確認に使ってください。</p>
        <ul className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "人数ではなく筆記量・残す情報量でサイズを決めた",
            "1200/1800/1810×1210/2410×1210から過不足なく選んだ",
            "板面サイズと本体外寸を区別した",
            "本体外寸（組立式は梱包寸法）で搬入経路を確認した",
            "扉・エレベーター・廊下・曲がり角・階段・組立場所を確認した",
            "ホーロー/スチールを使用頻度・予算で選んだ",
            "片面/両面を設置場所で選んだ",
            "無地/暗線/月予定/行動予定/黒板両面を用途で選んだ",
            "予定表の縦横・欄構成を商品画像・仕様で確認した",
            "マグネット対応・付属品を推測せず確認した",
            "低位置・UDは設置高さと利用者範囲で判断した",
            "案内板を会議用と区別した",
            "回転式は回転空間を確保した",
            "キャスター固定・通路/避難経路の確保を確認した",
            "正式名称・現行状況・後継品を一次情報で確認した",
            "重複商品（例：同一案内板）を二重発注していない",
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
        <h2 id="matome" className={cls.h2}>まとめ｜板面サイズ・筆記量・搬入経路から選ぶ</h2>
        <p className={cls.body}>脚付きホワイトボードは、人数だけでなく「同時に書くテーマ数」と「消さずに残す情報量」でサイズを選びます。1200mmは少人数・省スペース、1800mmは一般会議・工程管理、2400mmは大人数・複数工程が目安です（人数の目安は編集部独自のもの）。大きいほど良いわけではなく、板面サイズと本体外寸を区別し、大型品は搬入経路を必ず確認します。あわせて、ホーロー/スチール、片面/両面、無地/暗線/月予定/行動予定/黒板両面、低位置・UD・案内板を用途で選び、マグネット対応・付属品・回転仕様・正式仕様は公開前に商品ページ・メーカー情報で確認します。既製サイズや板面が合わなければ、オリジナル製作という選択肢があります。</p>

        <CustomBoardBanner />

        <p className="mb-4 text-sm leading-relaxed text-gray-700">
          あわせて読みたい：
          <Link href="/articles/steel-composite-board-whiteboard" className="font-bold text-gray-900 underline">
            ホワイトボード板材の選び方
          </Link>
          {" ／ "}
          <Link href="/articles/magnet-sheet-selection" className="font-bold text-gray-900 underline">
            マグネットシートの選び方
          </Link>
        </p>

        <p className="mb-3 text-sm font-bold text-gray-900">サイズ別に比較する</p>
        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a href="#size1200" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">1200mm前後を見る →</a>
          <a href="#size1800" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">1800mm前後を見る →</a>
          <a href="#sizelarge" className="flex items-center justify-center rounded-lg bg-gray-900 px-6 py-6 text-center text-base font-bold text-white hover:bg-gray-700">大型タイプを見る →</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
