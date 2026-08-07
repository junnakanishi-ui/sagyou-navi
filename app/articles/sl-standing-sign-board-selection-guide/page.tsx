import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  title: "SL立看板とは？種類・サイズ・選び方の完全ガイド｜工事現場の必需品【2026年版】",
  description:
    "SL立看板（工事用立看板）の意味・サイズ（通常550/ハーフ275）・反射と無反射の違い・表示種類の選び方を、道路工事の保安基準に沿って現場担当者向けに解説。全面通行止・片側交互通行・工事中などの定番表示から、無地の書き込み用鉄枠看板、KYボード、マンガ標識まで用途別に紹介します。",
  alternates: { canonical: "https://www.sagyou-navi.com/articles/sl-standing-sign-board-selection-guide" },
};

// ==============================
// URL helper（trade-sign.com はUTM・フラグメントなしの単純構造）
// ==============================
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
// trade-sign.com（看板の激安通販サインシティ）
const TS  = (id: string) => buildUrl(`https://www.trade-sign.com/koujiyouhin/${id}.html`, UTM); // 商品
const TSC = (path: string) => buildUrl(`https://www.trade-sign.com/koujiyouhin/${path}`, UTM);  // 一覧カテゴリ

// ==============================
// 共通コンポーネント（記事内自己完結）
// ==============================
function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
      {children}
    </span>
  );
}

function AnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-gray-900 bg-gray-50 p-5 my-6 rounded-r">
      <p className="text-xs font-bold text-gray-900 mb-2">結論（AIサマリ）</p>
      <div className="text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}

function Caution({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-400 bg-gray-100 p-4 my-5 rounded">
      <p className="text-xs font-bold text-gray-700 mb-1">現場でのポイント</p>
      <div className="text-sm text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}

function PriceBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-gray-900 bg-gray-900 text-white p-4 my-6 rounded text-center">
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">{children}</div>
  );
}

function ShopButton({ href, label }: { href: string; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-block bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
    >
      {label}
    </a>
  );
}

function ProductCard({
  img,
  name,
  badge,
  href,
}: {
  img: string;
  name: string;
  badge?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="border border-gray-300 rounded overflow-hidden bg-white flex flex-col hover:shadow-md transition-shadow"
    >
      <div className="bg-gray-50 p-2 flex items-center justify-center">
        <Image
          src={`/products/${img}`}
          alt={name}
          width={240}
          height={240}
          className="w-full h-auto object-contain max-h-40"
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        {badge && <div className="mb-1"><CategoryBadge>{badge}</CategoryBadge></div>}
        <p className="text-xs font-bold text-gray-900 leading-snug">{name}</p>
        <span className="mt-2 text-xs text-gray-700 underline">商品ページを見る →</span>
      </div>
    </a>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900">
      {children}
    </th>
  );
}
function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800 align-top">
      {children}
    </td>
  );
}

function ArticleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        priority={priority}
        className="w-full h-auto rounded"
      />
      <figcaption className="text-xs text-gray-500 mt-1">{alt}</figcaption>
    </figure>
  );
}

function MainCta() {
  return (
    <div className="my-8 border border-gray-900 rounded p-5 bg-gray-50">
      <p className="text-sm font-bold text-gray-900 mb-1">ネット販売 最安値帯へ挑戦中！</p>
      <p className="text-base font-bold text-gray-900 leading-tight mb-3">
        SL立看板を種類・サイズ豊富にご用意しています
      </p>
      <p className="text-sm text-gray-700 mb-3">
        全面通行止・片側交互通行・工事中・段差ありなど定番表示から、
        スリムなハーフ275サイズまで。少しでもお安くご提供できるよう頑張っています。
      </p>
      <div className="flex flex-wrap gap-2">
        <ShopButton href={CTA_SL_MAIN} label="SL立看板 一覧を見る →" />
        <ShopButton href={CTA_SL_SLIM} label="スリムサイズ 一覧 →" />
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="my-10 border-2 border-gray-900 rounded p-6 bg-gray-50">
      <p className="text-lg font-bold text-gray-900 mb-2">
        SL立看板は「種類の豊富さ」と「価格」で選ぶ
      </p>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        現場で必要な表示は多岐にわたります。当店では定番表示を幅広く取り揃え、
        ネット販売の最安値帯に挑戦中です。まずは一覧から、必要な表示を探してみてください。
      </p>
      <div className="flex flex-wrap gap-2">
        <ShopButton href={CTA_SL_MAIN} label="SL立看板 一覧" />
        <ShopButton href={CTA_SL_SLIM} label="スリムサイズ 一覧" />
        <ShopButton href={CTA_SIGN} label="標識・表示板 一覧" />
        <ShopButton href={CTA_SAFETY} label="安全用品 一覧" />
      </div>
    </div>
  );
}
// ==============================
// CTA定数
// ==============================
const CTA_SL_MAIN = TSC("19/");
const CTA_SL_SLIM = TSC("20/");
const CTA_MANGA   = TSC("23/");
const CTA_SIGN    = TSC("02/");
const CTA_SAFETY  = TSC("09/");
const CTA_KYBOARD = TSC("16/");
const CTA_CLEAN   = TSC("17/");
const CTA_SHOES   = TSC("24/");
const CTA_HELMET  = TSC("13/");
// ==============================
// 商品データ
// ==============================
const HALF275_SL = [
  { img: "113010.jpg", name: "ハーフ275 SL立看板 全面通行止 HSL-1", model: "HSL-1", disp: "全面通行止", href: TS("113010") },
  { img: "113011.jpg", name: "ハーフ275 SL立看板 通行止 HSL-2", model: "HSL-2", disp: "通行止", href: TS("113011") },
  { img: "113012.jpg", name: "ハーフ275 SL立看板 車両通行止 HSL-3", model: "HSL-3", disp: "車両通行止", href: TS("113012") },
  { img: "113013.jpg", name: "ハーフ275 SL立看板 一時停止 HSL-5", model: "HSL-5", disp: "一時停止", href: TS("113013") },
  { img: "113014.jpg", name: "ハーフ275 SL立看板 徐行 HSL-6", model: "HSL-6", disp: "徐行", href: TS("113014") },
  { img: "113015.jpg", name: "ハーフ275 SL立看板 片側交互通行 HSL-9", model: "HSL-9", disp: "片側交互通行", href: TS("113015") },
  { img: "113016.jpg", name: "ハーフ275 SL立看板 工事中 HSL-10", model: "HSL-10", disp: "工事中", href: TS("113016") },
  { img: "113017.jpg", name: "ハーフ275 SL立看板 m先工事中 HSL-11", model: "HSL-11", disp: "m先工事中", href: TS("113017") },
  { img: "113018.jpg", name: "ハーフ275 SL立看板 50m先工事中 HSL-12", model: "HSL-12", disp: "50m先工事中", href: TS("113018") },
  { img: "113019.jpg", name: "ハーフ275 SL立看板 100m先工事中 HSL-13", model: "HSL-13", disp: "100m先工事中", href: TS("113019") },
  { img: "113020.jpg", name: "ハーフ275 SL立看板 段差あり HSL-14", model: "HSL-14", disp: "段差あり", href: TS("113020") },
  { img: "113021.jpg", name: "ハーフ275 SL立看板 お願い HSL-21", model: "HSL-21", disp: "お願い", href: TS("113021") },
];
const STD_SL = [
  { img: "112364.jpg", name: "SL立看板 全面通行止 SL-1C", model: "SL-1C", disp: "全面通行止", href: TS("112364") },
  { img: "112365.jpg", name: "SL立看板 通交止 SL-2C", model: "SL-2C", disp: "通交止", href: TS("112365") },
  { img: "112366.jpg", name: "SL立看板 車両通行止 SL-3C", model: "SL-3C", disp: "車両通行止", href: TS("112366") },
  { img: "112367.jpg", name: "SL立看板 車両進入禁止 SL-4A", model: "SL-4A", disp: "車両進入禁止", href: TS("112367") },
  { img: "112372.jpg", name: "SL立看板 片側交互通行 SL-9C", model: "SL-9C", disp: "片側交互通行", href: TS("112372") },
  { img: "112373.jpg", name: "SL立看板 工事中 SL-10C", model: "SL-10C", disp: "工事中", href: TS("112373") },
  { img: "112374.jpg", name: "SL立看板 m先 SL-11B-0", model: "SL-11B-0", disp: "m先", href: TS("112374") },
  { img: "112375.jpg", name: "SL立看板 50m先 SL-11B-50", model: "SL-11B-50", disp: "50m先", href: TS("112375") },
  { img: "112376.jpg", name: "SL立看板 100m先 SL-11B-100", model: "SL-11B-100", disp: "100m先", href: TS("112376") },
  { img: "112377.jpg", name: "SL立看板 段差あり SL-14A", model: "SL-14A", disp: "段差あり", href: TS("112377") },
  { img: "112378.jpg", name: "SL立看板 車線変更 SL-17B", model: "SL-17B", disp: "車線変更", href: TS("112378") },
  { img: "112379.jpg", name: "SL立看板 幅員減少 SL-19B", model: "SL-19B", disp: "幅員減少", href: TS("112379") },
];
const BLANK_BOARD = [
  { img: "156296.jpg", name: "ハーフ275 白板（無反射）付き 25角鉄枠看板 H1400×W275", size: "H1400×W275", refl: "無反射", href: TS("156296") },
  { img: "156299.jpg", name: "ハーフ275 反射白板付き 25角鉄枠看板 H1400×W275", size: "H1400×W275", refl: "反射", href: TS("156299") },
  { img: "156297.jpg", name: "白板（無反射）付き 25角鉄枠看板 H1400×W550", size: "H1400×W550", refl: "無反射", href: TS("156297") },
  { img: "156300.jpg", name: "反射白板付き 25角鉄枠看板 H1400×W550", size: "H1400×W550", refl: "反射", href: TS("156300") },
  { img: "156298.jpg", name: "白板（無反射）付き 25角鉄枠看板 H1400×W1100", size: "H1400×W1100", refl: "無反射", href: TS("156298") },
  { img: "156301.jpg", name: "反射白板付き 25角鉄枠看板 H1400×W1100", size: "H1400×W1100", refl: "反射", href: TS("156301") },
];
const KY_BOARD = [
  { img: "015827.jpg", name: "危険予知ボード 320-15", cat: "KYボード", href: TS("015827") },
  { img: "015829.jpg", name: "危険予知ボード 320-05", cat: "KYボード", href: TS("015829") },
  { img: "015854.jpg", name: "無災害記録表（数字板のみ） 899-22", cat: "記録表", href: TS("015854") },
];
const MANGA_SIGN = [
  { img: "155476.jpg", name: "マンガ標識 GEM-1 ご迷惑をかけてまことにすみません", model: "GEM-1", href: TS("155476") },
  { img: "155477.jpg", name: "マンガ標識 GEM-2 あぶないからはいってはいけません", model: "GEM-2", href: TS("155477") },
  { img: "155478.jpg", name: "マンガ標識 GEM-3 通行禁止", model: "GEM-3", href: TS("155478") },
  { img: "155484.jpg", name: "マンガ標識 GEM-9 頭上注意", model: "GEM-9", href: TS("155484") },
  { img: "155486.jpg", name: "マンガ標識 GEM-11 安全運転", model: "GEM-11", href: TS("155486") },
  { img: "155487.jpg", name: "マンガ標識 GEM-12 清潔清掃", model: "GEM-12", href: TS("155487") },
];
const FAQ = [
  { q: "SL立看板とは何ですか？", a: "SL立看板は、工事現場や道路規制の現場で使われるスタンド式の立て看板です。「SL」はスタンド・スライドを指すとされ、伸縮する支柱や折りたたみ式のスタンド（もたせ）が付いているため、設置・撤去・保管がしやすいのが特徴です。全面通行止・片側交互通行・工事中などの表示を、ドライバーや歩行者に分かりやすく伝えるために設置します。" },
  { q: "SL看板と工事看板は違うものですか？", a: "厳密には、工事現場に置く立て看板の総称が「工事看板」で、その中でスタンド式のものを「SL立看板」と呼びます。実務ではほぼ同じ意味で使われることが多いですが、発注時は「SL立看板か」「反射か無反射か」「サイズはどれか」を明確にすると行き違いを防げます。" },
  { q: "SL立看板のサイズにはどんな種類がありますか？", a: "代表的なのは板面が高さ1400mm×幅550mmの通常サイズと、幅を半分にした高さ1400mm×幅275mmのハーフ275（スリムサイズ）です。さらに幅1100mmの大型サイズもあります。歩道が狭い現場や死角を作りたくない場所ではスリムサイズが選ばれます。" },
  { q: "ハーフ275（スリムサイズ）はどんなときに使いますか？", a: "歩道や車道で通行スペースを狭めたくない場所、通常サイズだと死角ができてしまう場所で使います。幅が半分になるため、狭い工事現場での案内と通行者の安全確保を両立できます。省スペースで保管・運搬しやすいのもメリットです。" },
  { q: "反射と無反射はどちらを選べばよいですか？", a: "夜間も規制が続く現場や、車のヘッドライトで視認性を確保したい道路工事では、全面反射タイプが基本です。道路工事の保安基準でも標示板は高輝度反射式または全面反射が原則とされる場面が多くあります。日中のみの現場や屋内・構内なら無反射でも足りる場合があります。" },
  { q: "高輝度反射・プリズム反射とは何ですか？", a: "再帰性反射シートの性能グレードを指します。プリズム型の高輝度反射シートは、一般的な反射シートより夜間の視認距離が長く、車のライトを効率よく反射してドライバーに早く気づいてもらえます。交通量の多い道路や高速道路など、視認性が重要な現場ほど高輝度グレードが推奨されます。" },
  { q: "どんな表示（文言）の種類がありますか？", a: "全面通行止・通行止・車両通行止・車両進入禁止・片側交互通行・徐行・一時停止・工事中・m先工事中・50m先・100m先・段差あり・幅員減少・車線変更・お願い、などが定番です。現場の規制内容に合わせて必要な表示を選びます。" },
  { q: "無地の看板（白板・鉄枠看板）は何に使いますか？", a: "無地の白板付き鉄枠看板は、油性ペンで書き込んだり、ステッカーやシールを貼ってオリジナルの表示を作るためのベース看板です。定番表示にない独自の案内を出したいときや、社名・連絡先を入れたいときに使います。反射・無反射、275/550/1100の各サイズがあります。" },
  { q: "SL立看板の枠は何でできていますか？", a: "多くは鉄（スチール）製の25角鉄枠で、下部にL字型のもたせ（スタンド）が付いています。近年は鉄枠より軽く耐久性を高めたブロー製フレームを採用したモデルもあります。風で倒れないよう、必要に応じてウエイトや土のうで固定します。" },
  { q: "屋外に置きっぱなしで大丈夫ですか？", a: "鉄枠は錆びる可能性があるため、長期間の屋外設置では劣化に注意が必要です。反射シートも経年で反射性能が落ちるため、視認性が低下したら交換を検討します。強風時は転倒対策としてウエイト・土のうでの固定が基本です。" },
  { q: "看板が風で倒れないようにするには？", a: "スタンド部分にウエイト（重り）を載せる、土のうを置く、複数台を連結する、といった対策が基本です。特に幅の広い550mm・1100mmサイズは風を受けやすいため、交通量や設置期間に応じて確実に固定してください。" },
  { q: "道路工事で看板の設置基準はありますか？", a: "国土交通省や各自治体が「道路工事保安施設設置基準」を定めており、工事箇所の手前100m・200m・300mに予告標示板を設置する、標示板は原則として全面反射とする、といった考え方が示されています。実際の設置は発注者の指示・地域の基準に従う必要があります。" },
  { q: "KYボードや無災害記録表もSL看板と一緒に使いますか？", a: "はい。KYボード（危険予知ボード）は朝礼で当日の危険ポイントを共有するために、無災害記録表は無事故日数を掲示して安全意識を高めるために、現場事務所や出入口に設置します。SL立看板と合わせて現場の安全掲示を整えるのが一般的です。" },
  { q: "マンガ標識とは何ですか？", a: "イラスト（マンガ）を使って注意喚起する標識です。「頭上注意」「安全運転」「あぶないからはいってはいけません」など、文字が読めない子どもや外国人にも直感的に伝わりやすいのが特徴です。近隣に住宅や通学路がある現場で親しみやすく注意を促せます。" },
  { q: "外国人や子ども向けの表示はありますか？", a: "マンガ標識のようにイラストで伝えるタイプや、日本語・英語・中国語・韓国語の4カ国語に対応した看板があります。訪日外国人が多い観光地や、通学路沿いの現場では、こうした分かりやすい表示が有効です。" },
  { q: "何枚くらい用意すればよいですか？", a: "規制内容と現場の規模によりますが、予告（100m先・50m先など）＋規制本体（片側交互通行・通行止など）＋徐行や段差ありなどの補助表示を組み合わせるため、1つの規制でも複数枚必要になるのが一般的です。現場の保安計画に沿って必要な表示をそろえます。" },
  { q: "看板はどこに設置すればよいですか？", a: "ドライバーや歩行者の動線上で、手前から順に予告→規制内容が見えるように配置します。カーブや交差点の手前など、早めに気づいてもらう必要がある場所には予告看板を置きます。障害物で隠れない位置、風で倒れない場所を選びます。" },
  { q: "できるだけ安く購入したいのですが？", a: "当店ではSL立看板をネット販売の最安値帯に挑戦して提供しています。定番表示を幅広く取り揃えているので、必要な種類を一覧からまとめて選ぶことで、現場に必要な保安看板を効率よくそろえられます。" },
  { q: "安全靴やヘルメットなど他の安全用品も揃いますか？", a: "はい。SL立看板のほか、標識・表示板、安全用品、KYボード、清掃用品、安全靴、ヘルメットなど、工事現場で必要な用品を幅広く取り扱っています。看板と合わせてまとめて調達できます。" },
  { q: "看板の設置もお願いできますか？", a: "販売元によっては全国対応の設置サービスを提供している場合があります。設置の可否・エリア・費用は商品ページや問い合わせ窓口でご確認ください。" },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[850px] px-4 py-10">
        {/* パンくず */}
        <nav className="text-xs text-gray-500 mb-4" aria-label="パンくず">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-1">/</span>
          <Link href="/articles" className="hover:underline">記事一覧</Link>
          <span className="mx-1">/</span>
          <span>SL立看板とは？種類・サイズ・選び方の完全ガイド</span>
        </nav>

        <div className="mb-3">
          <CategoryBadge>工事看板・安全用品</CategoryBadge>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
          SL立看板とは？種類・サイズ・選び方の完全ガイド｜工事現場の必需品【2026年版】
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          公開日：2026年7月31日 ／ 作業用品ナビ編集部
        </p>

        <ArticleImage
          src="/articles/sl-sign-board/hero.jpg"
          alt="道路工事現場に設置されたSL立看板（片側交互通行・工事中）と交通誘導員"
          priority
        />

        {/* AEO即答 */}
        <AnswerBox>
          <p className="mb-2">
            <strong>SL立看板</strong>は、工事現場や道路規制で使う
            <strong>スタンド式の立て看板</strong>です。伸縮支柱や折りたたみスタンドが付き、
            設置・撤去・保管がしやすいのが特徴。
            <strong>全面通行止・片側交互通行・工事中・段差あり</strong>などの表示で、
            ドライバーや歩行者に規制内容を分かりやすく伝えます。
          </p>
          <p className="mb-2">
            選定のポイントは4つ：
            <strong>①サイズ（通常W550／ハーフ275スリム／W1100）</strong>／
            <strong>②反射・無反射（夜間の視認性）</strong>／
            <strong>③表示種類（規制内容に合った文言）</strong>／
            <strong>④枠の材質・固定方法</strong>。
          </p>
          <p>
            この記事では、SL看板の意味・サイズ・反射の違い・表示種類の選び方を、
            道路工事の保安基準の考え方に沿って解説します。
            定番表示から無地の書き込み用看板、KYボード、マンガ標識まで、用途別にご紹介します。
          </p>
        </AnswerBox>

        <PriceBanner>
          <p className="text-sm font-bold mb-1">ネット販売 最安値帯へ挑戦中！</p>
          <p className="text-xs">
            SL立看板を種類・サイズ豊富にご用意。少しでもお安くご提供できるよう頑張っています。
          </p>
        </PriceBanner>

        {/* 代表カード（前半訴求） */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          まず見たい定番のSL立看板（全面反射・通常サイズ）
        </h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          現場で使用頻度の高い定番表示です。ほかの表示や、スリムサイズも豊富にそろえています。
        </p>
        <CardGrid>
          <ProductCard img={STD_SL[0].img} name={STD_SL[0].name} badge="全面反射 W550" href={STD_SL[0].href} />
          <ProductCard img={STD_SL[4].img} name={STD_SL[4].name} badge="全面反射 W550" href={STD_SL[4].href} />
          <ProductCard img={STD_SL[5].img} name={STD_SL[5].name} badge="全面反射 W550" href={STD_SL[5].href} />
          <ProductCard img={STD_SL[2].img} name={STD_SL[2].name} badge="全面反射 W550" href={STD_SL[2].href} />
          <ProductCard img={STD_SL[9].img} name={STD_SL[9].name} badge="全面反射 W550" href={STD_SL[9].href} />
          <ProductCard img={STD_SL[8].img} name={STD_SL[8].name} badge="全面反射 W550" href={STD_SL[8].href} />
        </CardGrid>

        <MainCta />

        {/* H2: SL立看板とは */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          SL立看板とは？名前の意味と役割
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          SL立看板は、道路工事や建築現場で使われる<strong>スタンド式の立て看板</strong>です。
          「SL」は<strong>スタンド（Stand）・スライド（Slide）</strong>を指すとされ、
          折りたたみ式のスタンド（もたせ）や、高さ・角度を調整できる構造が特徴です。
          必要なときにサッと立て、使わないときは畳んで省スペースに保管できます。
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          役割は、<strong>ドライバーや歩行者に規制内容を分かりやすく伝え、安全を確保する</strong>こと。
          工事案内・車線規制・通行止・立入禁止などを、遠くからでも見えるように表示します。
          夜間の工事では、車のヘッドライトを反射させて視認性を高める全面反射タイプが重要になります。
        </p>

        {/* H2: サイズ */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          サイズの選び方｜通常W550・ハーフ275（スリム）・W1100
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          SL立看板の板面は高さ1400mmが基本で、幅によって主に3種類に分かれます。
          設置場所の広さと視認性のバランスで選びます。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-4">
            <thead>
              <tr>
                <Th>サイズ</Th>
                <Th>板面（H×W）</Th>
                <Th>向いている場所</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>ハーフ275（スリム）</Td>
                <Td>1400×275mm</Td>
                <Td>歩道・狭い車道など通行スペースを狭めたくない場所。死角を作りたくない場所</Td>
              </tr>
              <tr>
                <Td>通常サイズ</Td>
                <Td>1400×550mm</Td>
                <Td>一般的な道路工事・建築現場。もっとも汎用的で表示種類も豊富</Td>
              </tr>
              <tr>
                <Td>大型サイズ</Td>
                <Td>1400×1100mm</Td>
                <Td>交通量の多い道路や、より目立たせたい場所。書き込み用の無地ベースにも</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Caution>
          歩道が狭い、または通行者の視界を確保したい現場では、幅が半分の
          <strong>ハーフ275（スリムサイズ）</strong>が有効です。省スペースで保管・運搬もしやすくなります。
        </Caution>

        {/* スリムサイズのカード */}
        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">ハーフ275（スリムサイズ）の定番表示</h3>
        <CardGrid>
          <ProductCard img={HALF275_SL[0].img} name={HALF275_SL[0].name} badge="スリム W275" href={HALF275_SL[0].href} />
          <ProductCard img={HALF275_SL[5].img} name={HALF275_SL[5].name} badge="スリム W275" href={HALF275_SL[5].href} />
          <ProductCard img={HALF275_SL[6].img} name={HALF275_SL[6].name} badge="スリム W275" href={HALF275_SL[6].href} />
        </CardGrid>
        <div className="flex flex-wrap gap-2 my-4">
          <ShopButton href={CTA_SL_SLIM} label="スリムサイズ 一覧を見る →" />
        </div>

        {/* H2: 反射 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          反射・無反射の違いと、夜間の視認性
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          SL立看板には<strong>全面反射タイプ</strong>と<strong>無反射タイプ</strong>があります。
          夜間も規制が続く道路工事では、車のライトを反射して光る全面反射が基本です。
          道路工事の保安基準でも、標示板は<strong>高輝度反射式または全面反射を原則</strong>とする考え方が示されています。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-4">
            <thead>
              <tr>
                <Th>タイプ</Th>
                <Th>特徴</Th>
                <Th>向いている現場</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>全面反射</Td>
                <Td>ヘッドライトを反射して夜間も光る。視認距離が長い</Td>
                <Td>夜間工事・交通量の多い道路・車道規制</Td>
              </tr>
              <tr>
                <Td>高輝度・プリズム反射</Td>
                <Td>一般反射より夜間の視認距離が長く、早く気づいてもらえる</Td>
                <Td>高速道路・幹線道路など視認性が特に重要な現場</Td>
              </tr>
              <tr>
                <Td>無反射</Td>
                <Td>反射しない。コストを抑えられる</Td>
                <Td>日中のみの現場・屋内・構内など照明のある場所</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <Caution>
          再帰性反射シートは経年で反射性能が落ちます。夜間の視認性が低下してきたら、
          板面（反射シート）の交換を検討してください。設置期間が長い現場ほど定期点検が重要です。
        </Caution>

        {/* H2: 表示種類 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          表示（文言）の種類｜規制内容に合わせて選ぶ
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          SL立看板は、規制内容に応じてさまざまな表示があります。
          予告（100m先・50m先など）→規制本体（片側交互通行・通行止など）→補助（徐行・段差ありなど）を
          組み合わせて、現場の保安計画に沿って配置します。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-4">
            <thead>
              <tr>
                <Th>分類</Th>
                <Th>表示例</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>予告</Td>
                <Td>m先工事中／50m先工事中／100m先工事中</Td>
              </tr>
              <tr>
                <Td>通行規制</Td>
                <Td>全面通行止／通行止／車両通行止／車両進入禁止</Td>
              </tr>
              <tr>
                <Td>通行方法</Td>
                <Td>片側交互通行／車線変更／幅員減少</Td>
              </tr>
              <tr>
                <Td>注意喚起</Td>
                <Td>工事中／徐行／一時停止／段差あり／お願い</Td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 通常サイズの全表示グリッド */}
        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">通常サイズ（W550・全面反射）の表示ラインアップ</h3>
        <CardGrid>
          {STD_SL.map((p, i) => (
            <ProductCard key={i} img={p.img} name={p.name} badge={p.disp} href={p.href} />
          ))}
        </CardGrid>

        <h3 className="text-lg font-bold text-gray-900 mt-8 mb-2">ハーフ275（スリム）の表示ラインアップ</h3>
        <CardGrid>
          {HALF275_SL.map((p, i) => (
            <ProductCard key={i} img={p.img} name={p.name} badge={p.disp} href={p.href} />
          ))}
        </CardGrid>

        <MainCta />

        {/* H2: 無地看板 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          無地の鉄枠看板（書き込み・ステッカー用ベース）
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          定番表示にない独自の案内を出したいときは、<strong>無地の白板付き鉄枠看板</strong>が便利です。
          油性ペンで書き込んだり、ステッカーやシールを貼ってオリジナルの表示を作れます。
          反射・無反射、275／550／1100の各サイズがそろっています。
        </p>
        <CardGrid>
          {BLANK_BOARD.map((p, i) => (
            <ProductCard key={i} img={p.img} name={p.name} badge={`${p.size} / ${p.refl}`} href={p.href} />
          ))}
        </CardGrid>

        {/* H2: 固定・設置 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          設置・固定の注意点｜風対策と配置
        </h2>
        <ul className="list-disc pl-6 text-gray-800 leading-relaxed mb-3">
          <li>ドライバー・歩行者の動線上で、手前から予告→規制内容の順に見えるよう配置する。</li>
          <li>カーブや交差点の手前など、早めに気づいてもらう必要がある場所に予告看板を置く。</li>
          <li>障害物で隠れない位置、風で倒れない場所を選ぶ。</li>
          <li>幅の広いW550・W1100は風を受けやすいため、ウエイト・土のうで確実に固定する。</li>
          <li>道路工事では、工事箇所の手前100m・200m・300mに予告標示板を設置する考え方が基準で示されている。</li>
          <li>実際の設置本数・位置は、発注者の指示と地域の保安基準に従う。</li>
        </ul>
        <Caution>
          設置基準は発注者や自治体によって異なります。本記事は一般的な考え方の紹介であり、
          実際の設置は現場の保安計画・発注者の指示・関係基準に従ってください。
        </Caution>

        {/* H2: 関連 KYボード */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          あわせて揃えたい：KYボード・無災害記録表
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          SL立看板で現場外への安全表示を整えたら、現場内の安全掲示も合わせて準備しましょう。
          <strong>KYボード（危険予知ボード）</strong>は朝礼で当日の危険ポイントを共有するために、
          <strong>無災害記録表</strong>は無事故日数を掲示して安全意識を高めるために使います。
        </p>
        <CardGrid>
          {KY_BOARD.map((p, i) => (
            <ProductCard key={i} img={p.img} name={p.name} badge={p.cat} href={p.href} />
          ))}
        </CardGrid>
        <div className="flex flex-wrap gap-2 my-4">
          <ShopButton href={CTA_KYBOARD} label="KYボード 一覧 →" />
        </div>

        {/* H2: 関連 マンガ標識 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          あわせて揃えたい：マンガ標識（子ども・外国人にも伝わる）
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          <strong>マンガ標識</strong>は、イラストで注意喚起する標識です。
          文字が読めない子どもや外国人にも直感的に伝わりやすく、
          住宅街や通学路沿いの現場で親しみやすく注意を促せます。
        </p>
        <CardGrid>
          {MANGA_SIGN.map((p, i) => (
            <ProductCard key={i} img={p.img} name={p.name} badge={p.model} href={p.href} />
          ))}
        </CardGrid>
        <div className="flex flex-wrap gap-2 my-4">
          <ShopButton href={CTA_MANGA} label="マンガ標識 一覧 →" />
        </div>

        {/* H2: その他関連 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          現場で一緒にそろう安全用品
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          看板のほかにも、工事現場で必要な用品を幅広く取り扱っています。
          必要なものを一覧からまとめて調達できます。
        </p>
        <div className="flex flex-wrap gap-2 my-4">
          <ShopButton href={CTA_SIGN} label="標識・表示板 一覧" />
          <ShopButton href={CTA_SAFETY} label="安全用品 一覧" />
          <ShopButton href={CTA_CLEAN} label="清掃・クリーン用品 一覧" />
          <ShopButton href={CTA_SHOES} label="安全靴 一覧" />
          <ShopButton href={CTA_HELMET} label="ヘルメット 一覧" />
        </div>

        {/* H2: FAQ */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded p-4 bg-white">
              <p className="font-bold text-gray-900 mb-2">Q. {item.q}</p>
              <p className="text-sm text-gray-800 leading-relaxed">A. {item.a}</p>
            </div>
          ))}
        </div>

        {/* まとめ */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          まとめ｜SL立看板は「サイズ×反射×表示」で選ぶ
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          SL立看板は、工事現場・道路規制の安全を支える必需品です。
          選定の軸は、<strong>①サイズ（通常W550／ハーフ275スリム／W1100）</strong>、
          <strong>②反射・無反射（夜間の視認性）</strong>、
          <strong>③表示種類（規制内容に合った文言）</strong>の3つ。
          夜間工事や交通量の多い道路では全面反射・高輝度を選び、
          狭い現場ではスリムサイズを活用します。
        </p>
        <p className="text-gray-800 leading-relaxed">
          定番表示から無地の書き込み用看板、KYボード、マンガ標識まで、
          現場に必要な保安表示を一通りそろえられます。
          当店ではネット販売の最安値帯に挑戦中です。まずは一覧から探してみてください。
        </p>

        <FinalCta />

        {/* JSON-LD */}
        <Script
          id="ld-article"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "SL立看板とは？種類・サイズ・選び方の完全ガイド｜工事現場の必需品【2026年版】",
              datePublished: "2026-07-31",
              dateModified: "2026-07-31",
              author: { "@type": "Organization", name: "作業用品ナビ編集部" },
              publisher: {
                "@type": "Organization",
                name: "作業用品ナビ",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.sagyou-navi.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.sagyou-navi.com/articles/sl-standing-sign-board-selection-guide",
              },
              image: "https://www.sagyou-navi.com/articles/sl-sign-board/hero.jpg",
            }),
          }}
        />
        <Script
          id="ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.sagyou-navi.com/" },
                { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://www.sagyou-navi.com/articles" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "SL立看板とは？種類・サイズ・選び方の完全ガイド",
                  item: "https://www.sagyou-navi.com/articles/sl-standing-sign-board-selection-guide",
                },
              ],
            }),
          }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
