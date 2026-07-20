import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "drainage-pipe-leak-test-method";
const SITE_URL = "https://sagyou-navi.com";
const ARTICLE_IMG = "/images/articles";

/* 記事画像（未配置のため本文はコメントアウト。配置後に有効化） */
const IMG = {
  hero: `${ARTICLE_IMG}/drainage-pipe-leak-test-hero.jpg`,
  comparison: `${ARTICLE_IMG}/drainage-full-water-air-pressure-test-comparison.jpg`,
  plug: `${ARTICLE_IMG}/drainage-pipe-test-plug-safety-check.jpg`,
  tablet: `${ARTICLE_IMG}/drainage-test-digital-recording-tablet.jpg`,
  report: `${ARTICLE_IMG}/drainage-test-report-documentation.jpg`,
  checklist: `${ARTICLE_IMG}/drainage-test-equipment-procurement-checklist.jpg`,
};

export const metadata: Metadata = {
  title:
    "排水管の漏れ試験とは？満水試験・空圧試験の違いと記録方法を解説｜作業用品ナビ",
  description:
    "排水管の漏れ試験について、満水試験と空圧試験の違い、現場条件に応じた選び方、試験前の準備、測定値・周囲温度・写真の記録方法を解説。排水管試験を自動計測・グラフ化できる試験器も紹介します。",
  alternates: { canonical: `${SITE_URL}/articles/${SLUG}` },
  openGraph: {
    title:
      "排水管の漏れ試験とは？満水試験・空圧試験の違いと記録方法を解説",
    description:
      "排水管の漏れ試験について、満水試験と空圧試験の違い、現場条件に応じた選び方、試験前の準備、測定値・周囲温度・写真の記録方法を解説。排水管試験を自動計測・グラフ化できる試験器も紹介します。",
    type: "article",
    images: [IMG.hero],
  },
};

/* ============================================================
   URL ヘルパー（UTM は # の前に付与。既存エンコードは再エンコードしない）
   ============================================================ */
const UTM = "utm_source=sagyou_navi";

function buildUrl(url: string, utm: string) {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string) => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}

// 楽天 crecote-shop（末尾スラッシュ必須）
const R = (p: string) =>
  buildUrl(`https://item.rakuten.co.jp/crecote-shop/${p}`, UTM);

/* ---- 商品（型番と試験方式の対応を厳守：441342=空圧 / 441341=満水） ---- */
const MANSUI = {
  url: R("ta032266-441341/"),
  name: "REX みるみるくん3 満水試験器 441341",
}; // 満水試験（管端面より30mm以内の水位・掲載情報）
const KUATSU = {
  url: R("ta032267-441342/"),
  name: "REX みるみるくん3 空圧試験器 441342",
}; // 空圧・気圧試験（掲載測定範囲0～500kPa）

// メーカー動画（非ショップURL・UTM不要）
const VIDEO_EMBED = "https://www.youtube-nocookie.com/embed/YUpbqa-c3Z0";

const FAQ_ITEMS = [
  {
    q: "排水管の満水試験とは何ですか？",
    a: "排水管の試験区間を水で満たし、水位の変化や配管・継手部からの漏れを確認する試験です。試験時間や判定基準は設計図書・施工要領に従います。",
  },
  {
    q: "排水管の空圧試験とは何ですか？",
    a: "排水管の試験区間を閉塞して空気を加圧し、圧力の変化などを確認する試験です。加圧中は閉塞部・接続部の安全管理が重要です。",
  },
  {
    q: "満水試験と空圧試験はどちらがよいですか？",
    a: "一律に優劣はありません。設計図書・発注者の指定・工事条件・水の使用可否・閉塞方法・安全性などから判断します。",
  },
  {
    q: "改修工事では空圧試験を選べますか？",
    a: "水を使いにくい改修工事では候補になり得ますが、現場判断だけで試験方式を変更せず、仕様書・施工要領・責任者の承認を確認してください。",
  },
  {
    q: "排水管の試験で記録すべき項目は何ですか？",
    a: "試験場所・区間・配管・試験方式・条件・開始/終了時刻・初期値/終了値・途中経過・周囲温度・写真・使用機器・測定者・判定を記録します。",
  },
  {
    q: "試験値が変化したら配管から漏れているということですか？",
    a: "配管からの漏れだけでなく、閉塞部・ホース・継手・センサーの設置・試験開始直後の安定状態・温度変化なども確認します。",
  },
  {
    q: "みるみるくん3は温度も記録できますか？",
    a: "販売ページでは、空圧試験器・満水試験器ともに試験値と周囲温度を同時測定し、データをグラフ化できると掲載されています。最新仕様はメーカー情報をご確認ください。",
  },
  {
    q: "みるみるくん3は長時間記録できますか？",
    a: "掲載情報では最大30日間の連続記録に対応しています。電池・記録設定・使用環境などの条件はメーカーの最新情報を確認してください。",
  },
  {
    q: "空圧試験器と満水試験器は兼用できますか？",
    a: "型式と測定対象が異なるため、同じ機器として扱えません。空圧試験には441342、満水試験には441341を確認してください。",
  },
  {
    q: "アプリはAndroidでも使えますか？",
    a: "確認できた販売情報ではiPhone・iPadでの利用が案内されています。Android対応を推測せず、購入時点のメーカー情報をご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "作業用品ナビ",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "排水管の漏れ試験の方法",
      item: `${SITE_URL}/articles/${SLUG}`,
    },
  ],
};

/* ============================================================
   自前コンポーネント（作業用品ナビ・自己完結）
   ============================================================ */
function CTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-8 rounded-lg border border-gray-300 bg-gray-50 p-6">
      <p className={cls.ctaH3}>{title}</p>
      <p className={`mb-4 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function FinalCTA({
  href,
  title,
  body,
  label,
}: {
  href: string;
  title: string;
  body: string;
  label: string;
}) {
  return (
    <div className="my-10 rounded-xl border-2 border-gray-900 bg-gray-50 p-7 text-center">
      <p className="mb-2 text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
        {title}
      </p>
      <p className={`mb-5 ${cls.bodySm}`}>{body}</p>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-block rounded-md bg-gray-900 px-8 py-4 text-lg font-bold text-white transition hover:bg-gray-700"
      >
        {label}
      </a>
    </div>
  );
}

function ProductLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
    >
      {name}
    </a>
  );
}

// 排水管試験器カード（バッジ・向く試験・記録情報・確認点つき）
function TestCard({
  href,
  badge,
  name,
  fit,
  records,
  check,
}: {
  href: string;
  badge: string;
  name: string;
  fit: string;
  records: string;
  check: string;
}) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 p-4">
      <span className="mb-2 inline-block w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
        {badge}
      </span>
      {/* 商品サムネ：/images/products/ 配置後、下のプレースホルダと差し替え */}
      {/* <img src="/images/products/xxxx.jpg" alt={name} className="mb-2 aspect-square w-full rounded object-cover" /> */}
      <div className="mb-2 flex aspect-video w-full items-center justify-center rounded bg-gray-100 text-xs text-gray-400">
        商品画像（準備中）
      </div>
      <p className="mb-2 text-sm font-bold leading-snug text-gray-900">{name}</p>
      <p className={`mb-1 ${cls.bodySm}`}>
        <span className="font-semibold">向く試験：</span>
        {fit}
      </p>
      <p className={`mb-1 ${cls.bodySm}`}>
        <span className="font-semibold">記録できる情報：</span>
        {records}
      </p>
      <p className={`mb-3 ${cls.bodySm}`}>
        <span className="font-semibold">購入前の確認点：</span>
        {check}
      </p>
      <div className="mt-auto">
        <ProductLink href={href} name="商品を見る" />
      </div>
    </div>
  );
}

function Caution({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-md border border-red-300 bg-red-50 p-4">
      <p className="mb-1 font-bold text-red-700">⚠️ ご確認ください</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className={cls.h2}>{children}</h2>;
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
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

function TwoCards() {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <TestCard
        href={MANSUI.url}
        badge="排水管の満水試験"
        name={MANSUI.name}
        fit="水を使って排水管の漏れを確認する満水試験"
        records="管端部の水位・周囲温度をセンサーで自動計測しグラフ化（掲載情報）"
        check="試験区間・センサー設置・付属品・接続方法（メーカー確認）"
      />
      <TestCard
        href={KUATSU.url}
        badge="排水管の空圧試験"
        name={KUATSU.name}
        fit="水を使いにくい現場で空気圧により漏れを確認する空圧試験"
        records="圧力（掲載0～500kPa）・周囲温度をセンサーで自動計測しグラフ化（掲載情報）"
        check="試験圧力・閉塞方法・加圧中の安全管理・付属品（メーカー確認）"
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className="mb-4 text-sm text-gray-500" aria-label="パンくず">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">/</span>
          <span>設備・測定機器</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">排水管の漏れ試験の方法</span>
        </nav>

        <span className="mb-3 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
          設備・測定機器
        </span>

        <h1 className={cls.h1}>
          排水管の漏れ試験の方法｜満水試験・空圧試験の違いと試験記録の残し方
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          公開日：2026年7月20日／約14分で読めます
        </p>

        <p className={cls.body}>
          排水管の漏れ試験は「試験をしたか」だけでなく、いつ・どの条件で・どのように変化したかを記録し、説明できる状態にすることが求められます。本記事では、満水試験と空圧試験の違い、現場条件に応じた選び方、試験前の準備、測定値・周囲温度・写真の記録方法を、設備工事会社・施工管理・法人購買の実務目線で整理します。
        </p>

        {/* 画像1 */}
        <img
          src={IMG.hero}
          alt="設備工事現場で排水管の漏れ試験を行うイメージ"
          className="mb-8 w-full rounded-lg"
        />

        {/* AEO回答ブロック（グレー枠） */}
        <div className="mb-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <p className="mb-2 font-bold text-gray-900">
            結論：排水管の漏れ試験には、水位を確認する「満水試験」と、圧力を確認する「空圧・気圧試験」があります。
          </p>
          <p className={`mb-2 ${cls.bodySm}`}>
            どちらを採用するかは、設計図書・施工要領・発注者の指定を最優先にし、試験区間、水を使用できるか、閉塞方法、安全管理、必要な試験記録を確認して決めます。
          </p>
          <ul className={`mb-2 list-disc space-y-1 pl-5 ${cls.bodySm}`}>
            <li>水を使って排水管の漏れを確認する：満水試験</li>
            <li>水の搬入・排水が難しい現場で空気圧を利用する：空圧試験</li>
            <li>給水管などの耐圧・圧力試験：排水管の漏れ試験とは分けて考える</li>
            <li>
              試験経過を残したい：センサー式試験器で水位・圧力・周囲温度を記録する
            </li>
          </ul>
          <p className={cls.bodySm}>
            試験値に変化があった場合は、配管からの漏れだけでなく、試験器・ホース・閉塞部・接続状態・温度変化なども確認します。試験圧力・試験時間・判定基準は、現場ごとの仕様書や施工要領に従ってください。
          </p>
        </div>

        {/* AEO直後：2商品カード */}
        <TwoCards />

        {/* ===== H2-1 とは ===== */}
        <H2>排水管の漏れ試験とは？</H2>
        <H3>施工した排水管の漏れを確認する検査</H3>
        <p className={cls.body}>
          排水管の漏れ試験は、施工した排水管の経路や継手・接合部からの漏れがないかを確認する検査です。試験区間を区切り、水位や圧力の変化を確認します。
        </p>
        <H3>給水管の圧力試験とは目的・試験方法が異なる</H3>
        <p className={cls.body}>
          給水・給湯管の圧力試験は加圧状態での漏れや耐圧を確認するもので、排水管の漏れ試験とは目的も方法も異なります。「配管
          圧力試験」では給水・排水・ガスなどが混在するため、対象を分けて考えます。
        </p>
        <H3>満水試験・空圧試験・通水確認の違い</H3>
        <p className={cls.body}>
          満水試験は管内を水で満たして水位変化を確認、空圧・気圧試験は空気を用いて圧力変化を確認します。通水確認は実際に水を流して排水状態を見るもので、目的が異なります。
        </p>
        <H3>試験方法は設計図書・施工要領を優先する</H3>
        <p className={cls.body}>
          採用する試験方法・試験圧力・試験時間・判定基準は、設計図書・施工要領・発注者の指定を優先します。本記事では一律の数値は断定しません。
        </p>
        <H3>試験結果だけでなく試験条件を残すことが重要</H3>
        <p className={cls.body}>
          合否だけでなく、いつ・どの条件で・どう変化したかを記録すると、後から説明・提出できる資料になります。
        </p>

        <Caution>
          試験器の型番と用途を取り違えないでください。
          <strong>
            REX みるみるくん3
            は、空圧試験器＝441342（掲載測定範囲0～500kPa）、満水試験器＝441341（管端面より30mm以内の水位）
          </strong>
          と、型式・測定対象が異なります。両者は兼用できません。また、別バリエーションとして給水配管等を想定した圧力試験器（測定範囲0～6MPa）もあり、排水管用と混同しないでください。用途・仕様は必ずメーカー公式カタログ・取扱説明書でご確認ください。
        </Caution>

        {/* ===== H2-2 違い ===== */}
        <H2>満水試験と空圧試験の違い</H2>
        {/* 画像2 */}
        <img
          src={IMG.comparison}
          alt="排水管の満水試験と空圧試験を比較するイメージ"
          className="mb-6 w-full rounded-lg"
        />
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：満水試験と空圧試験の違い
            </caption>
            <thead>
              <tr>
                <Th>比較項目</Th>
                <Th>満水試験</Th>
                <Th>空圧試験</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>使用するもの</Td>
                <Td>水</Td>
                <Td>圧縮空気等</Td>
              </tr>
              <tr>
                <Td>主な確認</Td>
                <Td>水位変化・漏れ</Td>
                <Td>圧力変化・漏れ</Td>
              </tr>
              <tr>
                <Td>向く可能性がある現場</Td>
                <Td>水の確保・排水が可能</Td>
                <Td>水を使用しにくい改修等</Td>
              </tr>
              <tr>
                <Td>記録したい項目</Td>
                <Td>水位・時間・温度・写真</Td>
                <Td>圧力・時間・温度・写真</Td>
              </tr>
              <tr>
                <Td>主な準備</Td>
                <Td>給水・閉塞・排水計画</Td>
                <Td>加圧・閉塞・立入管理</Td>
              </tr>
              <tr>
                <Td>注意点</Td>
                <Td>水量・排水・浸水対策</Td>
                <Td>加圧部・閉塞部の安全</Td>
              </tr>
              <tr>
                <Td>商品導線</Td>
                <Td>441341（満水試験器）</Td>
                <Td>441342（空圧試験器）</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>満水試験が候補になる場面</H3>
        <p className={cls.body}>
          水の確保・給水・排水が可能な新築現場などで候補になります。水位変化をデータとして残したい場合にも向きます。
        </p>
        <H3>空圧試験が候補になる場面</H3>
        <p className={cls.body}>
          水の搬入・排水が難しい改修工事や既存建物の調査などで候補になり得ます。ただし現場判断だけで採用せず、仕様を確認します。
        </p>
        <H3>工法を現場判断だけで変更しない</H3>
        <p className={cls.body}>
          試験方式は設計図書・施工要領・発注者指定に基づきます。現場の都合だけで変更せず、責任者の承認を得ます。
        </p>
        <H3>水と空気では安全管理も異なる</H3>
        <p className={cls.body}>
          満水試験は水量・排水・浸水対策、空圧試験は加圧部・閉塞部・立入管理と、安全管理のポイントが異なります。
        </p>
        <H3>試験記録に必要な項目は共通する</H3>
        <p className={cls.body}>
          開始・終了時刻、初期値・終了値、途中経過、周囲温度、写真、使用機器、測定者、判定など、残す項目は共通します。
        </p>

        <CTA
          href={MANSUI.url}
          title="試験方式に合うみるみるくん3を確認"
          body="満水試験と空圧試験では、測定する対象と使用する機器が異なります。現場仕様で指定された試験方式を確認してから商品を選びましょう（満水は441341、空圧は441342）。"
          label="満水試験器 441341 を見る"
        />

        {/* ===== H2-3 満水準備 ===== */}
        <H2>排水管の満水試験を行う前に確認すること</H2>
        {/* 画像3 */}
        <img
          src={IMG.plug}
          alt="排水管試験前に試験区間や閉塞部を確認するイメージ"
          className="mb-6 w-full rounded-lg"
        />
        <H3>試験区間・系統を特定する</H3>
        <p className={cls.body}>
          図面で試験区間・階・系統を特定し、始点・終点を明確にします。
        </p>
        <H3>開口部・接続部を確認する</H3>
        <p className={cls.body}>
          開口部・接続部・継手の位置を確認し、試験に影響する箇所を把握します。
        </p>
        <H3>閉塞器具の位置と適合を確認する</H3>
        <p className={cls.body}>
          プラグなど閉塞器具の設置位置と管径への適合を確認します。
        </p>
        <H3>給水方法と必要な水量を確認する</H3>
        <p className={cls.body}>給水方法と必要な水量、給水経路を確認します。</p>
        <H3>試験後の排水方法を決める</H3>
        <p className={cls.body}>
          試験後の排水経路・排水処理を事前に計画します。
        </p>
        <H3>漏れた場合の浸水防止を準備する</H3>
        <p className={cls.body}>
          漏れが生じた場合に備え、養生・浸水防止を準備します。
        </p>
        <H3>試験時間・判定基準を仕様書で確認する</H3>
        <p className={cls.body}>
          水頭・試験時間・判定基準は本記事で一律に断定せず、設計図書・施工要領・発注者基準で確認します。
        </p>

        {/* ===== H2-4 空圧準備 ===== */}
        <H2>排水管の空圧試験を行う前に確認すること</H2>
        <H3>対象配管が空圧試験に適しているか確認する</H3>
        <p className={cls.body}>
          対象配管・試験区間が空圧試験に適しているかを、仕様・施工要領で確認します。
        </p>
        <H3>試験圧力を仕様書・施工要領で確認する</H3>
        <p className={cls.body}>
          試験圧力は現場ごとに異なります。仕様書・施工要領で確認し、一律に決めません。
        </p>
        <H3>プラグ・閉塞部の適合を確認する</H3>
        <p className={cls.body}>プラグ・閉塞部の耐圧・適合を確認します。</p>
        <H3>加圧中の立入範囲を管理する</H3>
        <p className={cls.body}>
          加圧中は閉塞部・接続部付近への立入を管理し、安全範囲を設定します。
        </p>
        <H3>急激な加圧・減圧を避ける</H3>
        <p className={cls.body}>
          急激な加圧・減圧を避け、メーカーの取扱説明書・現場ルールに従います。
        </p>
        <H3>周囲温度と圧力を記録する</H3>
        <p className={cls.body}>
          圧力とあわせて周囲温度も記録し、温度変化の影響を確認できるようにします。
        </p>
        <H3>圧力変化があったときの再確認手順を決める</H3>
        <p className={cls.body}>
          圧力変化があったときに、どの順で再確認するかを事前に決めます。
        </p>

        <Caution>
          空圧試験は加圧を伴うため安全管理が重要です。プラグ・閉塞部・接続部の耐圧と適合を確認し、加圧中は付近への立入を管理してください。急激な加圧・減圧は避け、試験圧力・手順はメーカーの取扱説明書と現場の施工要領・安全ルールに従ってください。試験圧力や試験時間を本記事の情報だけで決めないでください。
        </Caution>

        {/* ===== H2-5 選び方 ===== */}
        <H2>満水試験器と空圧試験器はどう選ぶ？</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：現場条件別の使い分け（候補になり得るかの目安・仕様書を優先）
            </caption>
            <thead>
              <tr>
                <Th>現場条件</Th>
                <Th>満水試験器 441341</Th>
                <Th>空圧試験器 441342</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>新築で水の確保がしやすい</Td>
                <Td>候補</Td>
                <Td>仕様による</Td>
              </tr>
              <tr>
                <Td>試験後の排水が可能</Td>
                <Td>候補</Td>
                <Td>仕様による</Td>
              </tr>
              <tr>
                <Td>既存建物の改修</Td>
                <Td>条件確認</Td>
                <Td>候補になり得る</Td>
              </tr>
              <tr>
                <Td>水の使用が難しい</Td>
                <Td>不向きな場合あり</Td>
                <Td>候補になり得る</Td>
              </tr>
              <tr>
                <Td>水位変化を残したい</Td>
                <Td>適する</Td>
                <Td>不適</Td>
              </tr>
              <tr>
                <Td>圧力変化を残したい</Td>
                <Td>不適</Td>
                <Td>適する</Td>
              </tr>
              <tr>
                <Td>長時間記録したい</Td>
                <Td>対応（掲載最大30日）</Td>
                <Td>対応（掲載最大30日）</Td>
              </tr>
              <tr>
                <Td>写真・グラフを共有したい</Td>
                <Td>対応</Td>
                <Td>対応</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <H3>新築・改修など工事条件で考える</H3>
        <p className={cls.body}>
          新築か改修か、既存建物を使用しながらかなど、工事条件から検討します。ただし仕様書を無視して選びません。
        </p>
        <H3>水の搬入と排水が可能か確認する</H3>
        <p className={cls.body}>
          水の搬入・排水処理が可能かで、満水試験の実施可否が変わります。
        </p>
        <H3>測定したい対象が水位か圧力か確認する</H3>
        <p className={cls.body}>
          残したい対象が水位なら満水試験器、圧力なら空圧試験器と、測定対象で選びます。
        </p>
        <H3>試験経過を何秒・何分単位で残したいか</H3>
        <p className={cls.body}>
          両製品とも掲載情報では最短0.1秒周期・最大30日記録に対応します。必要な記録周期・期間で設定します。
        </p>
        <H3>写真・グラフ・メール共有が必要か</H3>
        <p className={cls.body}>
          写真・グラフ・メール共有で報告資料を作りたい場合に向きます（掲載情報）。
        </p>
        <H3>長時間の現状調査に使用するか</H3>
        <p className={cls.body}>
          長時間の現状調査・原因調査で継続記録したい場合に検討できます。
        </p>
        <H3>アプリを使用する端末を確認する</H3>
        <p className={cls.body}>
          確認できた販売情報ではiPhone・iPadでの利用が案内されています。対応端末・OSは購入時点でメーカー情報を確認します（Android対応は推測しない）。
        </p>

        {/* ===== H2-6 記録 ===== */}
        <H2>REXみるみるくん3で排水管試験を記録する</H2>
        {/* 画像4 */}
        <img
          src={IMG.tablet}
          alt="排水管試験の測定値と温度をタブレットで記録するイメージ"
          className="mb-6 w-full rounded-lg"
        />
        <H3>センサーで試験値を自動計測</H3>
        <p className={cls.body}>
          満水試験器は水位、空圧試験器は圧力を、センサーで自動計測します（掲載情報）。
        </p>
        <H3>試験中の周囲温度も同時に記録</H3>
        <p className={cls.body}>
          両製品とも試験値と周囲温度を同時測定できるため、温度変化の影響を同じ記録上で確認できます（掲載情報）。
        </p>
        <H3>測定データをグラフで確認</H3>
        <p className={cls.body}>
          測定データをグラフ化して、途中経過を含めて確認できます（掲載情報）。
        </p>
        <H3>長時間・短周期の記録に対応</H3>
        <p className={cls.body}>
          掲載情報では最大30日連続・最短0.1秒周期の記録に対応します。
        </p>
        <H3>iPhone・iPadでデータを収集</H3>
        <p className={cls.body}>
          専用アプリにより、iPhone・iPadでデータを収集できると案内されています（掲載情報）。
        </p>
        <H3>写真とデータをまとめて共有</H3>
        <p className={cls.body}>
          写真利用・メール送信により、帳票作成を支援します（掲載情報）。
        </p>
        <H3>試験報告書作成時の転記作業を減らす</H3>
        <p className={cls.body}>
          測定値・グラフ・写真をデータで扱えるため、手書き転記のミスや手間を減らしやすくなります。判定は責任者が行います。
        </p>

        <CTA
          href={KUATSU.url}
          title="手書き記録・写真整理の負担を減らしたい方へ"
          body="みるみるくん3は、試験値と周囲温度を自動記録し、データのグラフ確認や共有に対応しています（掲載情報）。長時間の現状調査や、試験経過を含む報告資料を作りたい現場で検討できます。"
          label="空圧試験器 441342 を見る"
        />

        {/* ===== H2-7 441341/441342違い ===== */}
        <H2>みるみるくん3 空圧試験器と満水試験器の違い</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：441342（空圧）・441341（満水）の比較（掲載情報。最新仕様はメーカー確認）
            </caption>
            <thead>
              <tr>
                <Th>比較項目</Th>
                <Th>空圧試験器 441342</Th>
                <Th>満水試験器 441341</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>試験方式</Td>
                <Td>空圧・気圧試験</Td>
                <Td>満水試験</Td>
              </tr>
              <tr>
                <Td>測定対象</Td>
                <Td>圧力</Td>
                <Td>管端部の水位</Td>
              </tr>
              <tr>
                <Td>掲載測定範囲</Td>
                <Td>0～500kPa</Td>
                <Td>管端面より30mm以内</Td>
              </tr>
              <tr>
                <Td>周囲温度記録</Td>
                <Td>対応</Td>
                <Td>対応</Td>
              </tr>
              <tr>
                <Td>グラフ記録</Td>
                <Td>対応</Td>
                <Td>対応</Td>
              </tr>
              <tr>
                <Td>長時間記録</Td>
                <Td>最大30日</Td>
                <Td>最大30日</Td>
              </tr>
              <tr>
                <Td>最短記録周期</Td>
                <Td>0.1秒</Td>
                <Td>0.1秒</Td>
              </tr>
              <tr>
                <Td>構造</Td>
                <Td>IP67</Td>
                <Td>IP67</Td>
              </tr>
              <tr>
                <Td>電源</Td>
                <Td>単4電池3本</Td>
                <Td>単4電池3本</Td>
              </tr>
              <tr>
                <Td>主な商品導線</Td>
                <Td>空圧試験を行う現場</Td>
                <Td>満水試験を行う現場</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <TwoCards />

        {/* ===== H2-8 動画 ===== */}
        <H2>メーカー動画でみるみるくん3の使い方を確認</H2>
        <p className={cls.body}>
          満水・空圧の違いと必要な製品を判断したうえで、実際の試験・記録イメージをメーカー動画で確認できます。
        </p>
        <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="h-full w-full"
            src={VIDEO_EMBED}
            title="REX みるみるくん3 メーカー解説動画"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className={cls.body}>
          動画では、みるみるくん3を用いた排水管試験の一連の流れ——試験器の設置・接続、センサーによる試験値（水位または圧力）と周囲温度の自動計測、専用アプリでのデータ収集、グラフ・写真を含む記録・共有までのイメージが確認できます。試験に立ち会わなくてよいという意味ではなく、記録を自動化・デジタル化して報告資料の作成を支援するための機能です。設置・接続方法や対応端末、付属品は動画公開時点と異なる場合があるため、購入する製品の型式（空圧＝441342／満水＝441341）が動画と一致するかを確認し、実際の使用条件は最新の取扱説明書を優先してください。
        </p>

        {/* ===== H2-9 記録項目 ===== */}
        <H2>排水管試験の記録に残す項目</H2>
        {/* 画像5 */}
        <img
          src={IMG.report}
          alt="排水管試験のグラフ・写真・記録を報告書にまとめるイメージ"
          className="mb-6 w-full rounded-lg"
        />
        <p className={cls.body}>
          試験結果を説明・提出できるよう、次の項目を残します：工事名・現場名／試験場所・階・系統／配管種類・口径・試験区間／試験方式（満水・空圧）／試験条件と根拠／開始・終了時刻／初期値・終了値・途中の変化／周囲温度／使用試験器・管理番号／試験前後の写真／測定者・確認者／判定と再試験の有無。
        </p>

        {/* ===== H2-10 テンプレート ===== */}
        <H2>排水管試験記録のテンプレート</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：排水管試験記録テンプレート
            </caption>
            <thead>
              <tr>
                <Th>記録項目</Th>
                <Th>記入内容</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>工事名</Td>
                <Td>現場・案件名</Td>
              </tr>
              <tr>
                <Td>試験日</Td>
                <Td>日付・時刻</Td>
              </tr>
              <tr>
                <Td>試験場所</Td>
                <Td>棟・階・系統</Td>
              </tr>
              <tr>
                <Td>試験区間</Td>
                <Td>始点・終点</Td>
              </tr>
              <tr>
                <Td>配管</Td>
                <Td>種類・口径</Td>
              </tr>
              <tr>
                <Td>試験方式</Td>
                <Td>満水・空圧</Td>
              </tr>
              <tr>
                <Td>試験条件</Td>
                <Td>仕様書に基づく条件</Td>
              </tr>
              <tr>
                <Td>使用機器</Td>
                <Td>型式・管理番号</Td>
              </tr>
              <tr>
                <Td>初期値 / 終了値</Td>
                <Td>水位または圧力</Td>
              </tr>
              <tr>
                <Td>周囲温度</Td>
                <Td>開始・終了・途中</Td>
              </tr>
              <tr>
                <Td>試験時間</Td>
                <Td>開始～終了</Td>
              </tr>
              <tr>
                <Td>写真</Td>
                <Td>全景・接続部・表示値</Td>
              </tr>
              <tr>
                <Td>判定</Td>
                <Td>合格・再確認</Td>
              </tr>
              <tr>
                <Td>測定者 / 確認者</Td>
                <Td>担当者 / 現場責任者</Td>
              </tr>
              <tr>
                <Td>備考</Td>
                <Td>補修・再試験等</Td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== H2-11 変化時 ===== */}
        <H2>試験値が変化したときに確認すること</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：試験値が変化したときの確認順序
            </caption>
            <thead>
              <tr>
                <Th>順序</Th>
                <Th>確認項目</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1</Td>
                <Td>配管接合部からの漏れ</Td>
              </tr>
              <tr>
                <Td>2</Td>
                <Td>閉塞プラグ・試験栓の状態</Td>
              </tr>
              <tr>
                <Td>3</Td>
                <Td>試験ホース・継手の接続</Td>
              </tr>
              <tr>
                <Td>4</Td>
                <Td>センサーの設置位置</Td>
              </tr>
              <tr>
                <Td>5</Td>
                <Td>試験開始直後の値の安定</Td>
              </tr>
              <tr>
                <Td>6</Td>
                <Td>周囲温度の変化</Td>
              </tr>
              <tr>
                <Td>7</Td>
                <Td>機器の電池・動作状態</Td>
              </tr>
              <tr>
                <Td>8</Td>
                <Td>同じ条件で再試験できるか</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          「数値が下がったから漏れている」と短絡せず、試験系全体を確認します。周囲温度も同時に記録できる製品では、試験値と温度変化を同じ記録上で照らし合わせられます。
        </p>

        <Caution>
          試験値の変化は、必ずしも配管からの漏れを意味しません。配管の漏れだけでなく、閉塞部・ホース・継手の接続、センサー設置、試験開始直後の安定状態、周囲温度の変化、機器の電池・動作状態なども確認してください。最終的な合否判定は、試験器が自動で行うものではなく、仕様書・施工要領に基づき現場責任者が行います。
        </Caution>

        {/* ===== H2-12 よくある失敗 ===== */}
        <H2>排水管試験でよくある失敗</H2>
        <ol className="mb-4 list-decimal space-y-2 pl-5 leading-[1.95] tracking-[0.04em] text-gray-800">
          <li>
            <span className="font-semibold text-gray-900">
              給水管の圧力試験と混同する
            </span>
            ：排水管の漏れ試験と給水・給湯管の圧力試験は目的・方法が異なります。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              仕様書を確認せず試験方式を決める
            </span>
            ：設計図書・施工要領・発注者指定を先に確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              試験区間を記録していない
            </span>
            ：始点・終点・系統を記録します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              閉塞箇所の確認が不足する
            </span>
            ：プラグ・閉塞部の位置と適合を確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              試験開始時と終了時しか記録しない
            </span>
            ：途中経過が無いと変化の傾向を説明しにくくなります。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              周囲温度を記録しない
            </span>
            ：試験値と温度を同時に残せる製品では両方を報告書へ反映します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              写真に試験位置が写っていない
            </span>
            ：全景・接続部・表示値を撮影します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              測定値を手書き転記して間違える
            </span>
            ：データで扱い転記ミスを減らします。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              空圧試験中の立入管理が不十分
            </span>
            ：加圧中の閉塞部・接続部付近の立入を管理します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              アプリ・電池を現場で初めて確認する
            </span>
            ：事務所で接続・保存・送信・写真利用まで確認します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              試験後の排水・復旧計画がない
            </span>
            ：満水試験は排水・復旧を事前に計画します。
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              再試験の条件を残していない
            </span>
            ：再試験の条件・結果を記録します。
          </li>
        </ol>

        {/* ===== H2-13 チェックリスト ===== */}
        <H2>法人向け｜排水管試験器の導入前チェックリスト</H2>
        <div className="my-6 overflow-x-auto">
          <table className={cls.table}>
            <caption className="mb-2 text-left text-sm font-bold text-gray-900">
              表：導入前チェックリスト
            </caption>
            <thead>
              <tr>
                <Th>区分</Th>
                <Th>確認項目</Th>
                <Th>確認</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>対象工事・試験方式</Td>
                <Td>排水管の満水/空圧のどちらを行うか（441341/441342）</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>測定範囲</Td>
                <Td>試験条件に測定範囲が合うか（空圧0～500kPa 等・掲載情報）</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>試験時間・記録周期</Td>
                <Td>必要な連続記録・記録周期（掲載最大30日/0.1秒）</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>温度記録</Td>
                <Td>周囲温度の同時記録の要否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>アプリ・端末</Td>
                <Td>iPhone/iPad等 対応端末・OS・社内導入可否</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>写真・データ共有</Td>
                <Td>写真・グラフ・メール送信の社内ルール</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>防じん・防水</Td>
                <Td>使用環境（掲載IP67）</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>電池・予備品</Td>
                <Td>単4電池3本・予備電池・付属品</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>校正・点検・機器管理</Td>
                <Td>点検・校正・管理番号の付与</Td>
                <Td>□</Td>
              </tr>
              <tr>
                <Td>社内帳票との連携</Td>
                <Td>データの保存先・帳票への反映</Td>
                <Td>□</Td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={cls.body}>
          付属品・接続に必要な器具・対応端末・データ保存先・メール送信ルール・予備電池・機器管理番号・点検/校正ルールを、導入前に整理します。仕様は最新のメーカー情報で確認します。
        </p>

        {/* ===== H2-14 FAQ ===== */}
        <H2>よくある質問</H2>
        <div className="space-y-5">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q}>
              <h3 className={cls.faqQ}>Q. {item.q}</h3>
              <p className={cls.body}>{item.a}</p>
            </div>
          ))}
        </div>

        {/* ===== H2-15 まとめ ===== */}
        <H2>まとめ｜排水管の試験方法と記録条件から試験器を選ぶ</H2>
        {/* 画像6 */}
        <img
          src={IMG.checklist}
          alt="法人担当者が満水試験器と空圧試験器を比較するイメージ"
          className="my-8 w-full rounded-lg"
        />
        <p className={cls.body}>
          排水管の漏れ試験は、満水試験と空圧試験のどちらを採用するかを、設計図書・施工要領・発注者指定を最優先に、試験区間・水の使用可否・閉塞方法・安全管理・必要な記録から判断します。給水管の圧力試験とは分けて考えます。試験は「したか」だけでなく、いつ・どの条件で・どう変化したかを記録し、説明できる状態にすることが重要です。試験値・周囲温度を自動計測・グラフ化・共有できるみるみるくん3は、満水試験＝441341、空圧試験＝441342と型式・測定対象が異なるため、試験方式に合わせて選びます。仕様・付属品・対応端末・価格・在庫は変わる可能性があるため、購入前に商品ページとメーカー公式情報をご確認ください。
        </p>

        <FinalCTA
          href={KUATSU.url}
          title="排水管試験を「測る・記録する・共有する」まで効率化"
          body="試験方法・測定対象・現場条件・必要な記録内容を確認し、満水試験器（441341）・空圧試験器（441342）から用途に合う製品を選びましょう。仕様はメーカー公式情報でご確認ください。"
          label="空圧試験器 441342 を見る"
        />
        <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <ProductLink href={MANSUI.url} name="満水試験器 441341 を確認する" />
          <ProductLink href={KUATSU.url} name="空圧試験器 441342 を確認する" />
        </div>

        {/*
          構造化データ：VideoObject（任意）
          ※ 公開日・サムネイル・再生時間はYouTube上で確認してから設定してください（捏造しない）。
          以下はテンプレート。TODO を実値に置換のうえコメント解除して使用します。
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: "REX みるみるくん3 メーカー解説動画",
                description: "REX みるみるくん3 による排水管の満水試験・空圧試験の使用・記録イメージ。",
                thumbnailUrl: ["TODO_YouTubeサムネイルURL"],
                uploadDate: "TODO_公開日(YYYY-MM-DD)",
                duration: "TODO_再生時間(ISO8601, 例 PT2M30S)",
                embedUrl: "https://www.youtube-nocookie.com/embed/YUpbqa-c3Z0",
              }),
            }}
          />
        */}
      </main>
      <SiteFooter />
    </>
  );
}
