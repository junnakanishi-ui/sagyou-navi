import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

export const metadata: Metadata = {
  title: "黒球式熱中症指数計とは？選び方・使い方・義務化対応の完全ガイド【2026年版】",
  description:
    "黒球式熱中症指数計（WBGT計）は屋外の直射日光下でも正しく暑さ指数を測れる唯一のタイプ。2025年6月施行の熱中症対策義務化にも直結する必須アイテムです。仕組み・普通の温度計との違い・JIS B 7922:2023 クラス2の見方・工場や建設現場での選び方・配置台数の考え方までを、現場担当者向けに具体解説します。",
  alternates: { canonical: "https://www.sagyou-navi.com/articles/black-globe-wbgt-meter-selection-guide" },
};

// ==============================
// URL helper
// ==============================
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
// gc-select
const GC  = (p: string) => buildUrl(`https://www.gc-select.com/products/${p}`, UTM);
const GCP = (path: string) => buildUrl(`https://www.gc-select.com${path}`, UTM);
// 楽天 crecote-shop
const R   = (p: string) => buildUrl(`https://item.rakuten.co.jp/crecote-shop/${p}/`, UTM);
// Yahoo signcity-yshop（Excel由来のsc_i値をそのまま採用）
const YB  = (id: string, sc: string) =>
  buildUrl(`https://store.shopping.yahoo.co.jp/signcity-yshop/${id}.html?sc_i=${sc}&ea=`, UTM);
const RAW = (u: string) => buildUrl(u, UTM);

const SC_RES = "shopping-pc-web-result-storesch-rsltlst-img";      // 検索結果由来
const SC_CAT_NRW = "shopping-pc-web-category-storeitm-cat_nrw-slctc"; // カテゴリ一覧由来

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
      <p className="text-xs font-bold text-gray-700 mb-1">現場での注意点</p>
      <div className="text-sm text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">{children}</div>
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

function ShopLinks({ gc, rakuten, yahoo }: { gc?: string; rakuten?: string; yahoo?: string }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {gc && <ShopButton href={gc} label="gc-selectで見る" />}
      {rakuten && <ShopButton href={rakuten} label="楽天で見る" />}
      {yahoo && <ShopButton href={yahoo} label="Yahoo!で見る" />}
    </div>
  );
}

function ProductCard({
  img,
  name,
  badge,
  type,
  maker,
  jis,
  usecase,
  gc,
  rakuten,
  yahoo,
}: {
  img: string;
  name: string;
  badge?: string;
  type?: string;
  maker?: string;
  jis?: string;
  usecase?: string;
  gc?: string;
  rakuten?: string;
  yahoo?: string;
}) {
  return (
    <div className="border border-gray-300 rounded overflow-hidden bg-white flex flex-col">
      <div className="bg-gray-50 p-2 flex items-center justify-center">
        <Image
          src={`/products/${img}`}
          alt={name}
          width={320}
          height={320}
          className="w-full h-auto object-contain max-h-56"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        {badge && <div className="mb-2"><CategoryBadge>{badge}</CategoryBadge></div>}
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">{name}</h3>
        {maker && <p className="text-xs text-gray-600 mb-1">メーカー：{maker}</p>}
        {type && <p className="text-xs text-gray-600 mb-1">タイプ：{type}</p>}
        {jis && <p className="text-xs text-gray-600 mb-1">JIS適合：{jis}</p>}
        {usecase && (
          <p className="text-sm text-gray-800 mt-2 leading-relaxed">{usecase}</p>
        )}
        <div className="mt-auto">
          <ShopLinks gc={gc} rakuten={rakuten} yahoo={yahoo} />
        </div>
      </div>
    </div>
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
      <p className="text-sm font-bold text-gray-900 mb-1">法改正対応・現場配備の第一歩</p>
      <p className="text-base font-bold text-gray-900 leading-tight mb-3">
        黒球式熱中症指数計の全モデル・在庫を一覧で見る
      </p>
      <p className="text-sm text-gray-700 mb-3">
        携帯型・据置型・時計付・JIS準拠モデルまで。用途に合わせて選べます。
      </p>
      <ShopButton href={CTA_MAIN_URL} label="黒球式熱中症指数計 一覧を見る →" />
    </div>
  );
}

function FinalCta() {
  return (
    <div className="my-10 border-2 border-gray-900 rounded p-6 bg-gray-50">
      <p className="text-lg font-bold text-gray-900 mb-2">
        まずは一台、正しい黒球式WBGT計の配備から
      </p>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        2025年6月からの職場の熱中症対策義務化では、WBGT値の把握が起点になります。
        黒球式であれば、屋外の直射日光下でも輻射熱を織り込んだ正しい暑さ指数を測定できます。
      </p>
      <div className="flex flex-wrap gap-2">
        <ShopButton href={CTA_MAIN_URL} label="黒球式熱中症指数計 一覧" />
        <ShopButton href={CTA_METER_URL} label="計測器 一覧" />
      </div>
    </div>
  );
}

function VideoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs text-gray-500 mt-2">{children}</div>
  );
}
// ==============================
// CTA定数
// ==============================
const CTA_MAIN_URL   = GCP("/collections/%E9%BB%92%E7%90%83%E5%BC%8F%E7%86%B1%E4%B8%AD%E7%97%87%E6%8C%87%E6%95%B0%E8%A8%88");
const CTA_SPOT_URL   = RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/a5b9a5dda5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc");
const CTA_FAN_URL    = RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/b9a9beecc0.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc");
const CTA_COOL_URL   = RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/cee4b4d6a5.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc");
const CTA_METER_URL  = RAW("https://store.shopping.yahoo.co.jp/signcity-yshop/b7d7c2acb4.html?sc_i=shopping-pc-web-category-storeitm-cat_nrw-slctc");
// 主要商品
const P_6913 = {
  img: "1120650113.jpg",
  name: "携帯型黒球付熱中症計 6913",
  badge: "携帯型",
  maker: "日本気象協会監修",
  type: "携帯型",
  jis: "JIS B 7922:2023 準拠（要確認）",
  usecase: "作業者が携行して自分の周囲を測定。ヘルメット取付・カラビナ吊下げ想定",
  gc: GC("1120650113"),
};

const P_O_706 = {
  img: "1120650012.jpg",
  name: "時計付黒球式熱中症計 O-706",
  badge: "据置・壁掛け型",
  maker: "時計・カレンダー付",
  type: "据置・壁掛け型",
  jis: "（要確認）",
  usecase: "事務所・詰所・休憩室の壁掛け。時刻と一緒に常時WBGTを可視化",
  gc: GC("1120650012"),
};

const P_TC_301 = {
  img: "1120650014.jpg",
  name: "黒球式熱中症計 TC-301",
  badge: "携帯・据置両用",
  maker: "TANITA（タニタ）",
  type: "携帯・据置両用",
  jis: "（メーカー公式で最新の適合状況を確認）",
  usecase: "現場・工場のどこでも使える定番モデル。三脚穴・カラビナ対応",
  gc: GC("1120650014"),
  rakuten: R("ta046353-tc301"),
  yahoo: YB("290110", SC_RES),
};

const P_TT_562N = {
  img: "1120650013.jpg",
  name: "黒球式熱中症指数計 TT-562N",
  badge: "据置・壁掛け型",
  maker: "TANITA（タニタ）",
  type: "据置・壁掛け型",
  jis: "（メーカー公式で最新の適合状況を確認）",
  usecase: "詰所・休憩所・工場ライン脇。大型表示でチーム全員から見える",
  gc: GC("1120650013"),
  rakuten: R("ta053461-tt562ngd"),
  yahoo: YB("172510", SC_RES),
};

const P_SK_181GT = {
  img: "1120650006.jpg",
  name: "黒球型携帯熱中症計 SK-181GT",
  badge: "携帯型",
  maker: "佐藤計量器製作所",
  type: "携帯型",
  jis: "JIS B 7922:2023 適合クラス2（要確認）",
  usecase: "計量器メーカーの携帯モデル。カラビナ・ベルクロで作業着に装着",
  gc: GC("1120650006"),
};

const P_AD_5698B = {
  img: "1179041023.jpg",
  name: "みはりん坊プロ AD-5698B",
  badge: "携帯・据置両用",
  maker: "A&D（エー・アンド・デイ）",
  type: "携帯・据置両用",
  jis: "JIS B 7922:2023 適合クラス2（要確認）",
  usecase: "屋内/屋外切替・アラーム設定可。作業班1台の携行に扱いやすい",
  gc: GC("1179041023"),
};

const P_KOKKYU_MONITOR = {
  img: "1120650100.jpg",
  name: "黒球型熱中症指数モニター",
  badge: "据置・壁掛け型",
  maker: "シンプル据置モデル",
  type: "据置・壁掛け型",
  jis: "（要確認）",
  usecase: "詰所やライン脇に常設。予算を抑えた複数台配備に",
  gc: GC("1120650100"),
};
const FAQ = [
  { q: "黒球式熱中症指数計とは何ですか？", a: "黒球式熱中症指数計は、直径15cm前後の黒球で輻射熱（日射・地面や機械からの熱）を捉え、湿度・気温と合わせてWBGT（暑さ指数）を算出する計測器です。通常の温度計や湿度計では捉えられない放射熱を含んで測定できるため、屋外の直射日光下や工場の熱源近傍で実際の体感に近い暑さを数値化できる唯一のタイプです。" },
  { q: "普通の温度計や気象庁の気温データではだめですか？", a: "気温は熱ストレス4要素（気温・湿度・輻射熱・気流）のうち1つしか捉えられません。特に直射日光下や機械熱源のある現場では、体感WBGTが気温より3〜5℃以上高くなることが珍しくなく、気温だけで判断すると熱中症リスクを大幅に見誤ります。改正省令もWBGT値による判定を基準にしているため、現場配備のWBGT計が必要です。" },
  { q: "WBGT計と黒球式熱中症指数計は違うものですか？", a: "本質的には同じ意味で使われることが多いです。ただし、WBGT計と呼ばれる製品の中には簡易的に気温と湿度からWBGT相当値を推定するタイプもあり、それでは屋外や熱源近傍で誤差が大きくなります。「黒球式」と明記された製品は物理的な黒球で輻射熱を測っており、環境省・JIS規格に沿った本来のWBGT測定ができます。" },
  { q: "JIS B 7922:2023 クラス2とは何ですか？", a: "JIS B 7922:2023は電子式湿球黒球温度（WBGT）指数計の規格で、クラス1.5（高精度）とクラス2（一般用途）の精度区分があります。事業所での熱中症対策としては、まずクラス2適合品を目安に選ぶのが実務的で、厚生労働省のクールワークキャンペーンでもJIS準拠品の使用が推奨されています。" },
  { q: "2025年6月の義務化で、WBGT計を持っていないと違反ですか？", a: "改正労働安全衛生規則ではWBGT値または気温を基準に「熱中症のおそれがある作業」を判定します。基準を超える環境で作業する事業者には体制整備・手順作成・関係者への周知が義務付けられ、違反時は6か月以下の拘禁刑または50万円以下の罰金が科され得ます。義務履行の証跡としてもWBGT値の測定・記録が実務上ほぼ必須です。" },
  { q: "屋内でも黒球式は必要ですか？", a: "はい、必要な場面が多くあります。工場・倉庫・厨房などでは機械やコンロなどの熱源から強い輻射熱が発生し、気温・湿度以上に体感が悪化します。黒球式はこの輻射熱を数値に反映できるため、屋内でも気温だけでは見えないリスクを可視化できます。" },
  { q: "携帯型と据置型はどちらを選ぶべきですか？", a: "作業班単位で移動しながら測る場合や、作業者個人に持たせる場合は携帯型が向きます。詰所・休憩室・工場の同じライン脇など、決まった場所を常時監視したい場合は据置・壁掛け型が向きます。多くの現場で両方を組み合わせるのが実務的です。" },
  { q: "何台くらい配備すればよいですか？", a: "作業エリアが分かれる場合、原則としてエリアごとに1台の据置と、作業班または職長1名につき1台の携帯型を目安にします。改正省令が求めるのは「実測に基づく判定」なので、離れた場所は同じ値とみなさず個別に測るのが安全側の運用です。" },
  { q: "屋外用と屋内用を切り替える機能は必要ですか？", a: "WBGTの算出式が屋外（日射あり）と屋内（日射なし）で異なるため、切替機能付きが便利です。切替機能がないモデルはどちらか一方に固定されているので、屋外現場と詰所を両方監視したい場合は切替可能なモデルを選ぶと運用が楽になります。" },
  { q: "測定にはどれくらいの時間がかかりますか？", a: "多くの機種で20〜30秒間隔で自動更新されます。ただし、設置直後は本体温度が周囲に馴染むまで数分の平衡時間が必要です。冷房のきいた事務所から炎天下に持ち出した直後の値は参考程度にとどめ、5〜10分置いて安定した値を記録として採用するのが実務的です。" },
  { q: "設置場所で気を付けることは？", a: "①作業者の高さ（腰〜胸あたり、目安1〜1.5m）に設置する、②直接的な冷風・熱風の吹き出し口を避ける、③黒球部を布などで覆わない、④風通しを妨げない位置に置く、⑤直射日光下でも問題ないが、雨がかからない工夫は必要、が基本です。" },
  { q: "アラーム機能は本当に必要ですか？", a: "現場では音がないと数値を見に来ないため、アラーム付きが実務的にほぼ必須です。危険レベル到達時にランプが点灯するタイプは、騒音の大きい工場や難聴傾向のある作業者にも有効です。区分ごとに音を変えるモデルは初動判断がしやすくなります。" },
  { q: "熱中症警戒アラートと現場WBGT計の関係は？", a: "熱中症警戒アラートは環境省・気象庁が地域ごとの予測WBGTに基づいて発令する広域情報です。ただし現場の実際のWBGTは、日射・機械熱・アスファルト放熱などで地域予測より数℃高くなる場合があるため、アラートと現場実測の両方を確認する運用が推奨されます。" },
  { q: "三脚に取り付けたいのですが、対応モデルはありますか？", a: "多くの黒球式熱中症指数計は三脚穴付き（1/4インチネジ）を備えています。カメラ用の中型三脚に取り付ければ、作業高さ（1〜1.5m）で安定して設置できます。屋外イベント・スポット作業の常設が難しい現場で有効です。" },
  { q: "電池の持ちはどれくらいですか？", a: "モデルによりますが、コイン電池（CR2032等）で数か月〜1年、単3・単4電池で数百時間〜数千時間が目安です。夏季の連続運用では予備電池を必ずストックし、シーズン前に交換する運用が安全です。" },
  { q: "屋外に一年中設置してよいですか？", a: "多くの機種は動作環境0〜50℃・湿度20〜90%の範囲での使用を想定しており、豪雨・凍結・積雪への直接暴露は避けるのが基本です。屋外常設する場合はケース内設置や庇の下に置くなど、機器保護の工夫が必要です。" },
  { q: "測定した値はどう記録・共有すればよいですか？", a: "紙の点検表・スプレッドシート・スマホアプリいずれでも構いませんが、日時・場所・値・作業内容・対応措置をセットで残すのが基本です。改正省令下では周知の記録として労働基準監督署の確認対象にもなり得るため、少なくとも夏季の記録は保管しておくと安心です。" },
  { q: "WBGTが基準値を超えた場合、どうすればよいですか？", a: "①作業計画を見直し休憩を増やす、②スポットクーラー・工場扇・ミストで環境を冷やす、③空調服・冷感インナー・アイスベストなどの個人用冷却装備を使う、④体調不良者を出さないための巡視と声掛けを増やす、が基本セットです。単に「頑張らせない」判断ができる体制作りが最重要です。" },
  { q: "黒球式熱中症指数計の値と体感が違うのはなぜですか？", a: "WBGTは気温・湿度・輻射熱の物理的な指標であり、個人の順化状態・年齢・持病・睡眠不足・水分摂取状況などは反映されません。同じWBGT環境でも個人差で発症リスクは大きく変わるため、WBGT値はあくまで判断基準の1つとし、体調管理・巡視と併用する必要があります。" },
  { q: "ラジオ体操やイベントの熱中症対策としても使えますか？", a: "はい。屋外の朝礼・スポーツイベント・小学校の運動会・建設現場の朝夕点呼など、集団が屋外にいる場面すべてで有効です。日本スポーツ協会は運動の目安として同じWBGT値を採用しており、教育現場・部活動でも同じ計測器で判定できます。" },
  { q: "メンテナンスは必要ですか？", a: "黒球部の表面が汚れると輻射熱の吸収特性が変わり誤差が出るため、シーズン開始前に埃を柔らかい布で拭き取る点検が推奨されます。落下や強い衝撃を受けた場合はセンサーの精度に影響するため、シーズン前に別のWBGT計と読み合わせを行うと安心です。" },
  { q: "複数台配備する際、どの機種を組み合わせるとよいですか？", a: "詰所・休憩室に据置1台＋各作業班に携帯1台の組み合わせが実務的です。据置は時計付きモデルにするとチームで自然に確認する動線ができ、携帯は屋内/屋外切替とアラーム付きを選ぶと汎用性が高まります。" },
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
          <span>黒球式熱中症指数計とは？選び方・使い方・義務化対応の完全ガイド</span>
        </nav>

        <div className="mb-3">
          <CategoryBadge>熱中症対策・計測器</CategoryBadge>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
          黒球式熱中症指数計とは？選び方・使い方・義務化対応の完全ガイド【2026年版】
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          公開日：2026年7月31日 ／ 作業用品ナビ編集部
        </p>

        <ArticleImage
          src="/articles/black-globe-wbgt/hero.jpg"
          alt="建設現場で三脚に設置された黒球式熱中症指数計と作業者"
          priority
        />

        {/* AEO即答 */}
        <AnswerBox>
          <p className="mb-2">
            <strong>黒球式熱中症指数計</strong>は、
            直径15cm前後の黒球で<strong>輻射熱（日射・地面や機械からの熱）</strong>を捉え、
            気温・湿度と組み合わせて<strong>WBGT（暑さ指数）</strong>を正しく算出できる計測器です。
            普通の温度計では見えない「日射のある屋外」「機械熱源のある屋内」でも
            実際の体感に近い暑さを数値化できるため、
            <strong>2025年6月に施行された職場の熱中症対策義務化</strong>への対応でも中心装備になります。
          </p>
          <p className="mb-2">
            選定のポイントは大きく5つ：
            <strong>①JIS B 7922:2023 クラス2以上</strong>／
            <strong>②屋内・屋外切替対応</strong>／
            <strong>③アラーム機能</strong>／
            <strong>④携帯・据置の用途一致</strong>／
            <strong>⑤配備台数（エリア×作業班）</strong>。
          </p>
          <p>
            本記事では、なぜ「黒球」が必要なのか、普通のWBGT計との違い、
            現場での配置台数の考え方、そしてWBGT基準を超えたときに取るべき対策までを、
            現場担当者が「今日発注する」レベルの粒度で解説します。
          </p>
        </AnswerBox>

        {/* 代表商品カード（前半訴求） */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          まず押さえる代表4モデル（携帯・据置・時計付・JIS準拠）
        </h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          まずは用途別の代表4モデルを見比べてみてください。全モデル一覧・詳細スペックは記事後半でも掲載しています。
        </p>
        <CardGrid>
          <ProductCard {...P_6913} />
          <ProductCard {...P_O_706} />
          <ProductCard {...P_TC_301} />
          <ProductCard {...P_AD_5698B} />
        </CardGrid>

        <MainCta />

        {/* H2: 黒球式熱中症指数計とは */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          黒球式熱中症指数計とは？普通の温度計・簡易WBGT計との違い
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          黒球式熱中症指数計は、環境省・厚生労働省・JISが採用している
          <strong>WBGT（湿球黒球温度：Wet Bulb Globe Temperature）</strong>を、
          物理的な黒球（直径約15cm、つや消し黒色に塗装された銅球）を使って正しく測るための計測器です。
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          「暑さ指数」と呼ばれるWBGTは、単なる気温ではなく、
          <strong>①乾球温度（気温）／②湿球温度（湿度）／③黒球温度（輻射熱）</strong>
          の3つの温度から算出されます。特に③黒球温度は
          <strong>直射日光・地面からの照り返し・機械からの放熱</strong>を数値に反映するための不可欠な要素で、
          これが測れないと「屋外の炎天下」や「工場の熱源近く」では実際のリスクを大幅に見落とします。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">WBGTの計算式（環境省 熱中症予防情報サイト）</h3>
        <table className="w-full border-collapse my-4">
          <thead>
            <tr>
              <Th>環境</Th>
              <Th>計算式</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>屋外（日射あり）</Td>
              <Td>WBGT ＝ 0.7 × 湿球温度 ＋ 0.2 × 黒球温度 ＋ 0.1 × 乾球温度</Td>
            </tr>
            <tr>
              <Td>屋内・日射なし</Td>
              <Td>WBGT ＝ 0.7 × 湿球温度 ＋ 0.3 × 黒球温度</Td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mb-4">
          出典：環境省 熱中症予防情報サイト（wbgt.env.go.jp）
        </p>

        {/* H2: なぜ黒球が必要か（3段階比較） */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          なぜ「黒球」が必要なのか｜温度計・簡易WBGT計・黒球式の3段階比較
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          市場には「温度計」「気温＋湿度からWBGTを推定する簡易WBGT計」「黒球式のWBGT計」の3種類があります。
          違いを一覧にすると次の通りです。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-4">
            <thead>
              <tr>
                <Th>タイプ</Th>
                <Th>測るもの</Th>
                <Th>直射日光下の精度</Th>
                <Th>熱源近く（工場・厨房）</Th>
                <Th>義務化対応</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>①温度計・寒暖計</Td>
                <Td>気温のみ</Td>
                <Td>低（気温だけ）</Td>
                <Td>低</Td>
                <Td>×</Td>
              </tr>
              <tr>
                <Td>②簡易WBGT計（黒球なし）</Td>
                <Td>気温＋湿度から推定</Td>
                <Td>中（誤差大きい）</Td>
                <Td>低（輻射熱を捉えられない）</Td>
                <Td>△（実測とは言い難い）</Td>
              </tr>
              <tr>
                <Td>③<strong>黒球式熱中症指数計</strong></Td>
                <Td>気温＋湿度＋黒球温度</Td>
                <Td><strong>高（本来のWBGT）</strong></Td>
                <Td><strong>高（輻射熱を反映）</strong></Td>
                <Td><strong>○</strong></Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-800 leading-relaxed">
          特に建設現場・工場・倉庫・イベント会場のような
          「直射日光」「熱源」「アスファルト放熱」がある環境では、
          ①や②で判断するとリスクを見落とします。改正省令もWBGT値を判定基準にしているため、
          <strong>実測できる黒球式</strong>を配備するのが実務上のスタート地点です。
        </p>

        <Caution>
          「WBGT計」と書かれていても、内部で気温と湿度から推定しているタイプは屋外の直射日光下で
          誤差が大きく出ます。仕様書に「<strong>黒球</strong>」「<strong>グローブ温度</strong>」「<strong>JIS B 7922</strong>」の
          いずれかの記載があるかを必ず確認してください。
        </Caution>

        {/* H2: 義務化 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          2025年6月施行｜職場の熱中症対策義務化と黒球式WBGT計
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          令和7年（2025年）6月1日、改正労働安全衛生規則が施行され、
          職場の熱中症対策は<strong>努力義務から罰則付きの法的義務</strong>に変わりました。
          対象は、<strong>WBGT28℃以上または気温31℃以上</strong>の作業場で、
          <strong>継続して1時間以上、または1日4時間を超えて</strong>行われることが見込まれる作業です。
        </p>
        <p className="text-gray-800 leading-relaxed mb-3">
          事業者に課される3義務は以下の通りです。
        </p>
        <ul className="list-disc pl-6 text-gray-800 leading-relaxed mb-3">
          <li><strong>①早期発見のための体制整備</strong>（連絡先・担当者・報告フロー）</li>
          <li><strong>②重篤化を防ぐための実施手順の作成</strong>（作業離脱・冷却・救急対応）</li>
          <li><strong>③関係作業者への周知</strong>（掲示・朝礼・書面）</li>
        </ul>
        <p className="text-gray-800 leading-relaxed mb-3">
          違反時の罰則は<strong>6か月以下の拘禁刑または50万円以下の罰金</strong>。
          そして、これらの義務履行の前提として、WBGT値の測定・記録・活用が実務上ほぼ不可欠です。
          「WBGT値の把握」を実測ベースで行うには、地域予測値だけでなく現場ごとのWBGT計配備が必要になります。
        </p>

        <Caution>
          本記事は法令の一般的な概要をまとめたものであり、個別の適用については所轄労働基準監督署・
          社内の安全衛生担当・法律の専門家にご確認ください。厚生労働省のリーフレット・ガイドラインも合わせてご参照ください。
        </Caution>

        {/* H2: 選び方 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          黒球式熱中症指数計の選び方｜押さえるべき7つのポイント
        </h2>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">①JIS B 7922:2023 適合・クラスを確認する</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          電子式湿球黒球温度（WBGT）指数計の日本工業規格。
          <strong>クラス1.5（高精度）</strong>と<strong>クラス2（一般用途）</strong>があり、
          事業所での熱中症対策としてはクラス2適合を最低ラインと考えるのが実務的です。
          仕様書やパッケージに「JIS B 7922:2023 適合」「クラス2」と明記された製品を選びます。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">②屋内・屋外の切替に対応しているか</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          WBGTの計算式は屋外（日射あり）と屋内（日射なし）で異なります。
          IN/OUT切替のあるモデルは1台で両方の環境をカバーでき、詰所と現場を行き来する運用に向きます。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">③アラーム機能・警報レベルの段階</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          現場では「見に来ないと数値がわからない」状態を作らないことが重要です。
          注意・警戒・厳重警戒・危険の<strong>4段階以上でアラーム</strong>が鳴り、
          危険レベルでランプ点灯するモデルは、騒音下や視覚優位の現場でも見落としを減らせます。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">④携帯型／据置・壁掛け型／時計付の使い分け</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          作業班や職長が携行する場合は<strong>携帯型</strong>、
          詰所・休憩室・工場ラインなど決まった場所を常時監視するなら<strong>据置・壁掛け型</strong>、
          休憩時間の意思決定に使うなら<strong>時計付</strong>が便利です。
          規模の大きな現場では携帯＋据置の組み合わせが基本になります。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">⑤取付方法・アクセサリ</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          三脚穴（1/4インチネジ）、カラビナ吊下げ、ヘルメット取付、ベルクロバンド、
          マグネット固定など、現場でどこに設置するかに合わせて選びます。
          特に建設現場では三脚に載せて作業高さ（1〜1.5m）に置くと運用が安定します。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">⑥電源方式・稼働時間</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          コイン電池（CR2032）／単3・単4／USB給電／AC電源など、
          運用形態に合わせて選びます。
          屋外常設なら電池切れリスクの少ないAC給電、携行なら電池式が向きます（詳細な稼働時間は各メーカーの最新カタログをご確認ください）。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">⑦表示のわかりやすさ・大画面</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          チーム全員から視認するなら大画面・大文字・カラー段階表示のモデルが有利。
          個人が確認するだけなら小型軽量なコンパクトモデルが取り回しよく選ばれます。
        </p>

        {/* H2: シーン別 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          【シーン別】どの黒球式熱中症指数計を選ぶべきか
        </h2>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">建設現場・土木現場（屋外／複数の作業班）</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          直射日光・アスファルト放熱・鉄筋などの熱源が重なる屋外現場では、
          <strong>屋外切替対応・アラーム付き・携帯型</strong>を作業班に1台配備し、
          詰所には<strong>時計付・大画面の据置型</strong>を置いて全員の意思決定を統一するのが基本形です。
        </p>
        <CardGrid>
          <ProductCard {...P_6913} />
          <ProductCard {...P_SK_181GT} />
        </CardGrid>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">工場・倉庫（屋内／機械熱源あり）</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          機械・溶鉱炉・厨房などの熱源近くは、気温・湿度以上に輻射熱が大きく効きます。
          ライン脇に<strong>据置・壁掛け型</strong>を常設し、
          巡回者は<strong>携帯型</strong>で各ポイントの実測値を記録する運用が現実的です。
        </p>
        <CardGrid>
          <ProductCard {...P_TT_562N} />
          <ProductCard {...P_TC_301} />
        </CardGrid>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">物流・配送センター（屋内外の入り繰り）</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          屋内荷捌き場と屋外の荷積み・積替え場で条件が大きく変わるため、
          <strong>IN/OUT切替のある携帯型</strong>を各エリアリーダーが持ち、
          必要に応じて実測して作業停止・休憩投入を決めます。
        </p>
        <CardGrid>
          <ProductCard {...P_AD_5698B} />
          <ProductCard {...P_TC_301} />
        </CardGrid>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">イベント・スポーツ・学校（屋外／不特定多数）</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          屋外イベント・部活動・運動会などでは、
          <strong>三脚に据えて可搬しやすい携帯型・据置両用</strong>が便利です。
          日本スポーツ協会も同じWBGT値を運動の目安として採用しているため、教育現場でも判定基準はそのまま使えます。
        </p>
        <CardGrid>
          <ProductCard {...P_TC_301} />
          <ProductCard {...P_AD_5698B} />
        </CardGrid>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">事務所・詰所・休憩室（据置常設）</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          時刻表示と一体化した壁掛け型は、休憩時間・作業再開の判断に自然と目が向く動線を作れます。
          チーム内でWBGT値の共通認識を持たせる意味でも据置1台の常設は費用対効果が高い施策です。
        </p>
        <CardGrid>
          <ProductCard {...P_O_706} />
          <ProductCard {...P_KOKKYU_MONITOR} />
        </CardGrid>

        {/* H2: 全モデル */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          【全モデル】gc-select取扱の黒球式熱中症指数計
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          用途別に上で紹介した機種を含め、gc-selectで取り扱う黒球式熱中症指数計の全ラインアップです。
          型番・仕様の最新値は各商品ページでご確認ください。
        </p>
        <CardGrid>
          <ProductCard {...P_6913} />
          <ProductCard {...P_O_706} />
          <ProductCard {...P_TC_301} />
          <ProductCard {...P_TT_562N} />
          <ProductCard {...P_SK_181GT} />
          <ProductCard {...P_AD_5698B} />
          <ProductCard {...P_KOKKYU_MONITOR} />
        </CardGrid>

        <MainCta />

        {/* H2: 基準を超えたら */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          WBGTが基準値を超えたときにやるべきこと｜対策アイテムの選び方
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          WBGT計はあくまで「判定」の道具です。基準値を超えたら、その先の
          <strong>「作業計画の見直し」と「環境・個人の冷却」</strong>があって初めて意味を持ちます。
          現場で即使える対策アイテムを、目的別に整理します。
        </p>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">環境を冷やす：スポットクーラー・工場扇・冷風機</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          屋内の詰所・工場・倉庫ではスポットクーラーで気温を下げ、
          工場扇・冷風機で気流を作って湿球温度への効果を高めます。
          気温だけでなく湿度・気流もWBGTの構成要素なので、風を作る対策は数値にも効きます。
        </p>
        <div className="flex flex-wrap gap-2 my-3">
          <ShopButton href={CTA_SPOT_URL} label="スポットクーラー 一覧" />
          <ShopButton href={CTA_FAN_URL} label="工場扇・冷風機 一覧" />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">身体を冷やす：冷感インナー・空調服・アイスベスト・遮熱タレ</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          屋外作業では環境の冷却が難しいため、個人装備の冷却が主戦力になります。
          冷感コンプレッションシャツ・空調ベスト・フローズンベスト・ヘルメット遮熱タレ・
          アイスジェルインナーなどを組み合わせて熱ストレスを下げます。
        </p>
        <div className="flex flex-wrap gap-2 my-3">
          <ShopButton href={CTA_COOL_URL} label="冷感グッズ 一覧" />
        </div>

        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">測る道具を増やす：温湿度計・計測器</h3>
        <p className="text-gray-800 leading-relaxed mb-3">
          黒球式熱中症指数計に加えて、詰所や倉庫内の温湿度を継続的に把握する温湿度計・計測器を
          組み合わせると、対策の効き具合をデータで確認できるようになります。
        </p>
        <div className="flex flex-wrap gap-2 my-3">
          <ShopButton href={CTA_METER_URL} label="計測器 一覧" />
        </div>

        {/* H2: 台数配置 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          何台必要？現場での配備台数と配置の考え方
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          「1台あれば十分」と考えがちですが、実際にはエリア・作業班ごとに条件が変わるため、
          <strong>1つの現場で複数台の配備が実務的</strong>です。目安を表にまとめます。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse my-4">
            <thead>
              <tr>
                <Th>現場タイプ</Th>
                <Th>据置・壁掛け</Th>
                <Th>携帯型</Th>
                <Th>合計目安</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>小規模建設現場（1班・1エリア）</Td>
                <Td>詰所に1台</Td>
                <Td>職長1名に1台</Td>
                <Td>2台</Td>
              </tr>
              <tr>
                <Td>中規模建設・土木現場（複数班）</Td>
                <Td>詰所・休憩所に1〜2台</Td>
                <Td>作業班ごとに1台</Td>
                <Td>3〜5台</Td>
              </tr>
              <tr>
                <Td>工場・倉庫（複数ライン）</Td>
                <Td>ライン脇・出荷口に各1台</Td>
                <Td>巡回者に1台</Td>
                <Td>3〜6台</Td>
              </tr>
              <tr>
                <Td>物流センター（屋内外）</Td>
                <Td>屋内荷捌きに1台</Td>
                <Td>屋外リーダーに1台</Td>
                <Td>2〜3台</Td>
              </tr>
              <tr>
                <Td>屋外イベント・スポーツ</Td>
                <Td>本部テントに1台</Td>
                <Td>係員リーダーに1台</Td>
                <Td>2台</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-800 leading-relaxed">
          離れた場所は同じWBGT値と見なさないのが原則。
          日陰・日向・風通し・熱源で数℃違うため、記録も場所ごとに残すのが安全側の運用です。
        </p>

        {/* H2: 使い方 */}
        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-gray-900 pl-3 mt-10 mb-4">
          正しい使い方・設置の注意点｜よくある誤りと回避策
        </h2>
        <ul className="list-disc pl-6 text-gray-800 leading-relaxed mb-3">
          <li>作業者の高さ（腰〜胸あたり、目安1〜1.5m）に設置する。</li>
          <li>直接的な冷風・熱風の吹き出し口を避ける。</li>
          <li>黒球部を布・シールなどで覆わない。</li>
          <li>風通しを妨げない位置に置く（壁ピッタリ×）。</li>
          <li>直射日光下でも問題ないが、雨や粉塵の直接暴露は避ける。</li>
          <li>冷房のきいた事務所から屋外に持ち出した直後は5〜10分の平衡時間を取る。</li>
          <li>シーズン開始前に黒球部の埃を柔らかい布で拭き取り、複数台で読み合わせ点検する。</li>
        </ul>
        <Caution>
          落下・強い衝撃・浸水などがあった場合は精度に影響します。シーズン前に別のWBGT計と値を突き合わせ、
          差が大きい場合は買い替えや校正を検討してください。
        </Caution>

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
          まとめ｜黒球式WBGT計は「義務化対応のスタート地点」
        </h2>
        <p className="text-gray-800 leading-relaxed mb-3">
          黒球式熱中症指数計は、単なる温度計や簡易WBGT計では見えない「輻射熱」を数値化し、
          屋外の直射日光下や工場の熱源近くでも実際の体感に近いWBGT値を測定できる唯一のタイプです。
          2025年6月に始まった職場の熱中症対策義務化の中心装備であり、
          <strong>「WBGT値を実測する仕組みを持つ」ことが、義務履行のスタート地点</strong>になります。
        </p>
        <p className="text-gray-800 leading-relaxed">
          用途・現場規模に合わせて携帯型と据置型を組み合わせ、
          必要に応じてスポットクーラー・工場扇・冷感グッズなど「基準値を超えた後の対策」も同時に整えていきましょう。
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
              headline: "黒球式熱中症指数計とは？選び方・使い方・義務化対応の完全ガイド【2026年版】",
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
                "@id": "https://www.sagyou-navi.com/articles/black-globe-wbgt-meter-selection-guide",
              },
              image: "https://www.sagyou-navi.com/articles/black-globe-wbgt/hero.jpg",
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
                  name: "黒球式熱中症指数計とは？選び方・使い方・義務化対応の完全ガイド",
                  item: "https://www.sagyou-navi.com/articles/black-globe-wbgt-meter-selection-guide",
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
