// ============================================================
// 作業用品ナビ / articles/business-disaster-stockpile-checklist
// 「事業所の防災備蓄チェックリスト」BCP・帰宅困難者対策の意思決定KWクラスタ
// ============================================================
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const SLUG = "business-disaster-stockpile-checklist";
const SITE_URL = "https://sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;

export const metadata: Metadata = {
  title:
    "事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応の完全ガイド【2026年】｜作業用品ナビ",
  description:
    "事業所（企業・オフィス・工事現場）の防災備蓄を、72時間・帰宅困難者対策条例・BCPの観点から徹底解説。食料/水/防災セット/トイレ/電源/テント/熱中症対策など8カテゴリのチェックリストと、選び方・保管・管理のポイントまで網羅します。",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応の完全ガイド【2026年】",
    description:
      "事業所の防災備蓄を3日分×8カテゴリで整理。必要量の目安、既製セットの選び方、保管・管理まで法人向けに解説します。",
    type: "article",
    images: ["/articles/bosai/hero.jpg"],
  },
};

// ---- URL helpers -------------------------------------------
const UTM = "utm_source=sagyou_navi";
function buildUrl(url: string, utm: string): string {
  if (!url) return url;
  const h = url.indexOf("#");
  const append = (b: string): string => `${b}${b.includes("?") ? "&" : "?"}${utm}`;
  if (h === -1) return append(url);
  return `${append(url.slice(0, h))}${url.slice(h)}`;
}
const GC = (p: string) => buildUrl(`https://www.gc-select.com/products/${p}`, UTM);
const YB = (u: string) => buildUrl(u, UTM);
const RAW = (u: string) => buildUrl(u, UTM);

// ---- CTA（指定URL） ----------------------------------------
const CTA_MAIN = {
  label: "GREEN CROSS-select 災害対策一覧はこちら",
  href: RAW(
    "https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E7%81%BD%E5%AE%B3%E5%AF%BE%E7%AD%96",
  ),
};
const CTA_SUB = [
  {
    label: "テント一覧",
    href: RAW(
      "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E3%83%86%E3%83%B3%E3%83%88&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox",
    ),
  },
  {
    label: "遮光ネット一覧",
    href: RAW(
      "https://www.gc-select.com/pages/search-results-page?q=%E9%81%AE%E5%85%89%E3%83%8D%E3%83%83%E3%83%88",
    ),
  },
  {
    label: "熱中症対策アイテム一覧",
    href: RAW(
      "https://store.shopping.yahoo.co.jp/signcity-yshop/c7aec3e6be.html?sc_i=shopping-pc-web-detail-item-bclst-_",
    ),
  },
];

// ---- UI atoms ----------------------------------------------
function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}
function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
      {children}
    </span>
  );
}
function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-gray-900 bg-gray-50 p-5 text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </div>
  );
}
function Caution({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-gray-300 bg-gray-50 p-5">
      <p className="mb-1 text-sm font-bold text-gray-900">⚠ {title}</p>
      <div className={cls.bodySm}>{children}</div>
    </div>
  );
}
function CardGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
function Table({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className={cls.table}>{children}</table>
    </div>
  );
}
function Th({ children }: { children: ReactNode }) {
  return <th className={cls.th}>{children}</th>;
}
function Td({ children }: { children: ReactNode }) {
  return <td className={cls.td}>{children}</td>;
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
        className="h-auto w-full rounded-lg border border-gray-200"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className={`mt-2 text-center ${cls.meta}`}>{alt}</figcaption>
    </figure>
  );
}

// ---- Shop button / cards -----------------------------------
function ShopButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-xs font-bold text-white hover:bg-gray-700"
    >
      {label}
    </a>
  );
}
function ShopLinks({ links }: { links: { label: string; href: string }[] }) {
  if (!links || links.length === 0) {
    return (
      <span className="inline-flex items-center rounded-md border border-dashed border-gray-400 px-3 py-2 text-xs text-gray-800">
        掲載準備中
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <ShopButton key={l.href} href={l.href} label={l.label} />
      ))}
    </div>
  );
}
function ProductCard({
  img,
  name,
  badge,
  feature,
  use,
  links,
}: {
  img: string;
  name: string;
  badge: string;
  feature: string;
  use: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md bg-gray-50">
        <Image
          src={`/products/${img}`}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </div>
      <CategoryBadge>{badge}</CategoryBadge>
      <h3 className="mt-2 text-base font-bold leading-snug text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-900">
        <span className="font-semibold">特徴：</span>
        {feature}
      </p>
      <p className="mt-1 text-sm text-gray-900">
        <span className="font-semibold">向く用途：</span>
        {use}
      </p>
      <p className={`mt-1 ${cls.meta}`}>※価格・在庫・内容・保存期間・入数は各商品ページで要確認</p>
      <div className="mt-3">
        <ShopLinks links={links} />
      </div>
    </div>
  );
}

// ---- CTA blocks --------------------------------------------
function MainCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6 text-center">
      <p className={cls.ctaH3}>事業所の防災備蓄をまとめて揃える</p>
      <p className={cls.meta}>非常食・水・防災セット・トイレ・電源・テント・熱中症対策までワンストップ。</p>
      <a
        href={CTA_MAIN.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
      >
        {CTA_MAIN.label} ›
      </a>
    </div>
  );
}
function FinalCta() {
  return (
    <div className="my-8 rounded-xl border-2 border-gray-900 bg-gray-50 p-6 text-center">
      <p className="text-lg font-black tracking-wide text-gray-900">災害に備える一歩を、今日から</p>
      <p className={`mt-1 ${cls.meta}`}>災害対策・関連カテゴリの一覧から、あなたの事業所に合う備蓄を。</p>
      <a
        href={CTA_MAIN.href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
      >
        {CTA_MAIN.label} ›
      </a>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {CTA_SUB.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center rounded-md border border-gray-900 bg-white px-4 py-2 text-xs font-bold text-gray-900 hover:bg-gray-100"
          >
            {c.label} ›
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- FAQ data ----------------------------------------------
const FAQ = [
  {
    q: "事業所（企業・オフィス）に防災備蓄は必要ですか？",
    a: "はい。東京都では帰宅困難者対策条例により、事業者に対して従業員3日分の水・食料等の備蓄が努力義務として定められています。また介護施設・事業所などは2024年度からBCP（事業継続計画）の策定が法律で義務付けられました。災害発生後72時間は救命救助が優先される期間で、一斉帰宅による二次災害を防ぐため、施設内待機の備えが必要です。",
  },
  {
    q: "何日分の備蓄が必要ですか？",
    a: "最低3日分が基本ラインです。首都直下地震などの大規模災害では、ライフラインの復旧に3日以上かかる想定で、この間の施設内待機を可能にする水・食料・トイレ・電源などが必要になります。BCPの観点からは1週間分まで段階的に拡張する企業も増えています。",
  },
  {
    q: "従業員1人あたりの備蓄量の目安は？",
    a: "水は1人あたり9L（3L×3日）、食料は3日分（アルファ米・パン・エナジー系など）、トイレは3日分×5〜7回/日、毛布・簡易寝具1人1組が目安です。加えて、来社中の顧客・取引先・帰宅困難者向けに約10%を余分に備蓄するのが推奨されています。（出典：東京都帰宅困難者対策ハンドブック等）",
  },
  {
    q: "備蓄すべき品目のカテゴリを教えてください。",
    a: "①食料・水（3日分の非常食・保存水）②非常持出袋・防災セット（一斉配布用の個人セット）③トイレ・シェルター（断水対策の簡易トイレ・パーテーション）④電源・情報（ソーラー・蓄電池・ランタン）⑤救急・衛生（医薬品・応急セット）⑥車載・移動（車内向け緊急セット）⑦作業用工具（スコップ・消火器）⑧夏場は熱中症対策（テント・経口補水・冷感）——の8カテゴリで整理すると抜け漏れが減ります。",
  },
  {
    q: "72時間の壁とは何ですか？",
    a: "災害発生後72時間（3日間）を過ぎると、被災者の生存率が急激に低下するとされる時間の目安です。この人命救助の最重要期間に、企業が従業員を一斉帰宅させると救助活動の妨げになるため、施設内待機が求められます。3日分の備蓄が「命綱」になる根拠です。",
  },
  {
    q: "ローリングストック法とは？",
    a: "保存食・保存水を日常的に少しずつ消費して、消費した分だけ買い足していく備蓄法です。賞味期限が近いものから消費するため、いざという時に「気付いたら全部期限切れ」を防げます。5年保存・7年保存・10年保存の長期保存タイプと組み合わせて、更新の手間を減らすのが賢いやり方です。",
  },
  {
    q: "防災セットは自社で組む？既製セットを買う？",
    a: "「既製セット」＋「不足分の追加」の組み合わせがおすすめです。ABO系・EX.48系などの既製セットは、防災士監修などの実績に基づき厳選された内容なので効率的。一方で、人数・立地・作業内容によっては経口補水・トイレ・毛布などを別途追加する必要があります。まず既製セットで骨格を作り、事業所の特性で肉付けしていきます。",
  },
  {
    q: "非常持出袋（一次持出）と備蓄品（二次備蓄）の違いは？",
    a: "非常持出袋（一次持出）は避難時にすぐ持ち出す最小限のセット、備蓄品（二次備蓄）は自宅・事業所に留まって使う3〜7日分の物資です。事業所では、個人ロッカー等に一次持出袋、共用倉庫に二次備蓄——と分けて配置するのが基本です。",
  },
  {
    q: "水は10年保存タイプを選ぶべき？",
    a: "更新頻度と保管スペースで選びます。10年保存水は購入・入替えの手間が最小で長期の管理に向きますが、単価は高め。3〜5年保存の一般品はコストを抑えられますが、期限管理が必要です。BCP担当の負荷や保管環境（直射日光・高温を避けられるか）を考慮して選びます。",
  },
  {
    q: "トイレの備蓄はどれくらい必要？",
    a: "1人あたり1日5〜7回×3日＝15〜21回分が最低ラインです。断水時の水洗トイレ使用は感染症・臭気の原因になるため、簡易トイレ（凝固剤+袋）や折りたたみトイレスツール、10年保存のパーソナルトイレなどで備えます。女性・多目的の観点から、囲い（パーテーション・ワンタッチルーム）もあわせて準備すると安心です。",
  },
  {
    q: "停電時の電源はどう備える？",
    a: "スマホ充電レベルなら乾電池・小型モバイルバッテリー、事業所単位ならポータブル電源（蓄電池）＋ソーラーパネルの組み合わせが有効です。数kWh級の蓄電池と40〜100Wのソーラーパネルがあれば、日中充電→夜間使用が回せます。ランタン・LEDライトも複数個用意します。",
  },
  {
    q: "工事現場・建設業でも防災備蓄は必要？",
    a: "必要です。屋外現場は夏の熱中症、地震・豪雨・落雷などのリスクが高く、車載用の緊急セット・車載消火器・エンジンスターター・シャベル・保存水/食料の常備が有効です。建設業のBCP策定も進んでおり、朝礼・KYシートと同様に「災害時の初動」を職長・元請ですり合わせておくことが重要です。",
  },
  {
    q: "夏場の災害を想定した備蓄は何が違う？",
    a: "熱中症対策の比重が上がります。避難所や施設内待機で冷房が使えない場合を想定し、経口補水液（OS-1）・スポーツドリンク・塩分タブレット・干し梅などの水分/塩分補給、日射を遮るテント・遮光ネット、通気の確保が重要です。2025年6月からの熱中症対策義務化（WBGT管理・休憩体制）とも連動して整備します。",
  },
  {
    q: "備蓄品はどこに保管すべき？",
    a: "①倒壊リスクが低く②浸水しにくく③持ち出しやすい場所です。1階の一部屋を防災倉庫にする、複数フロアに分散配置する、床下収納やロッカーに個人分を配布する——など複数箇所への分散が推奨されます。水は重いので低い場所、非常持出袋は取り出しやすい場所に配置します。",
  },
  {
    q: "備蓄品の管理・点検はどうする？",
    a: "①品目・数量・賞味期限のリスト化、②古い物から手前へ、③年1〜2回の点検と入替え、④従業員への周知・訓練——が基本です。担当者の属人化を防ぐため、備蓄マップ（保管場所と品目）を作成し、更新記録を残しておきます。フードバンクへの寄付で入替え時のロスを減らすこともできます。",
  },
  {
    q: "スコップ・シャベルは何のために必要？",
    a: "地震・豪雨後のがれき撤去・土砂の除去・敷地内の排水確保・救助補助などで使います。事務所単位でも1〜2本、工事現場は現場ごとに常備するのが基本です。金象印などの業務用は柄と刃の頑丈さが違います。",
  },
  {
    q: "車載用の防災セットは何を備える？",
    a: "運転者・同乗者の一時待避を想定し、飲料水・保存食・エマージェンシーブランケット・救急用品・軍手・LEDライト・簡易トイレ・粉末消火器（自動車用）などをコンパクトにまとめます。エンジンスターターも車のバッテリー上がり対策として有効です。",
  },
  {
    q: "備蓄をこれから始める場合、何から手をつければ？",
    a: "①既製セットの導入（防災セット＋非常食＋保存水）②トイレの備蓄③電源（ポータブル電源）④季節対応（夏＝熱中症、冬＝防寒）⑤テント・パーテーション——の順で優先度を付けて拡張するのが効率的です。まずは事業所単位で1セット、部門/フロア単位に順次拡張していきます。",
  },
];

// ---- JSON-LD -----------------------------------------------
const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応の完全ガイド【2026年】",
  description:
    "事業所（企業・オフィス・工事現場）の防災備蓄を、72時間・帰宅困難者対策条例・BCPの観点から徹底解説。食料/水/防災セット/トイレ/電源/テント/熱中症対策など8カテゴリのチェックリストと、選び方・保管・管理のポイントまで網羅します。",
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  author: { "@type": "Organization", name: "作業用品ナビ編集部" },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  },
  datePublished: "2026-07-16",
  dateModified: "2026-07-31",
};
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles` },
    { "@type": "ListItem", position: 3, name: "事業所の防災備蓄チェックリスト", item: CANONICAL },
  ],
};
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ============================================================
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <nav className={`mb-4 ${cls.meta}`} aria-label="パンくず">
          <a href={`${SITE_URL}/`} className="hover:underline">
            ホーム
          </a>{" "}
          ／{" "}
          <a href={`${SITE_URL}/articles`} className="hover:underline">
            記事一覧
          </a>{" "}
          ／ <span className="text-gray-900">事業所の防災備蓄チェックリスト</span>
        </nav>

        <CategoryBadge>防災・災害対策</CategoryBadge>
        <h1 className={cls.h1}>
          事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応の完全ガイド【2026年】
        </h1>
        <p className={cls.body}>
          「うちの事業所、防災備蓄は何をどれだけ揃えればいい？」——東京都帰宅困難者対策条例が求める
          <strong>3日分</strong>
          の備え、そして<strong>BCP（事業継続計画）</strong>
          の観点から、企業・オフィス・工事現場が用意すべき防災備蓄を、
          <strong>食料・水／防災セット／トイレ・シェルター／電源／作業用工具／熱中症対策</strong>
          の8カテゴリで徹底解説します。人数分の必要量の目安、既製セットの選び方、保管・管理のコツまで、これ一本でチェックできます。
        </p>
        <p className={cls.meta}>最終更新：2026年7月31日</p>

        <ArticleImage src="/articles/bosai/hero.jpg" alt="オフィスに備蓄された防災用品と非常食のイメージ" priority />

        {/* ============ H2-1 結論 ============ */}
        <h2 className={cls.h2}>【結論】事業所の防災備蓄は「3日分×8カテゴリ」で揃える</h2>
        <AnswerBox>
          <p>
            事業所の防災備蓄は、<Mark>最低3日分</Mark>
            を目安に、①食料・水 ②防災セット・非常持出袋 ③トイレ・シェルター ④電源・照明
            ⑤救急・衛生 ⑥車載・移動 ⑦作業用工具
            ⑧夏場の熱中症対策——の<strong>8カテゴリ</strong>
            で揃えるのが基本です。東京都帰宅困難者対策条例は従業員1人あたり
            <Mark>水9L（3L×3日）</Mark>
            ・食料3日分の備蓄を努力義務としており、来社中の顧客・取引先向けに
            <Mark>約10%の余裕</Mark>
            を持たせるのが推奨されています。まずは既製の防災セットで骨格を作り、事業所の人数・立地・作業内容に応じて肉付けしていくのが効率的です。
          </p>
        </AnswerBox>
        <MainCta />

        <p className={cls.body}>
          まずは“最初に揃えたい”定番アイテムから。下のボタンから各商品ページで内容・価格・在庫を確認できます。
        </p>
        <CardGrid>
          <ProductCard
            img="6300029514.jpg"
            name="秩父の天然水 10年保存水 500ml 24本セット"
            badge="食料・水"
            feature="10年保存で更新の手間が少ない長期保存水"
            use="事業所の基幹備蓄・更新頻度を抑えたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300029514") }]}
          />
          <ProductCard
            img="6300062681.jpg"
            name="【ABO-52N】防災セット18点"
            badge="防災セット"
            feature="18点厳選の総合防災セット"
            use="部門・フロア単位の一斉配布"
            links={[{ label: "商品ページで見る", href: GC("6300062681") }]}
          />
          <ProductCard
            img="6300062188.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルM ベーシック（2人用）オレンジ"
            badge="防災バッグ"
            feature="防災士監修モデル・2人用ベーシック"
            use="家族・ペア単位の備え"
            links={[{ label: "商品ページで見る", href: GC("6300062188") }]}
          />
          <ProductCard
            img="6300061994.jpg"
            name="10年保存 LogLog パーソナルトイレ 7DAYS BOX"
            badge="トイレ"
            feature="7日分の凝固剤入りパーソナルトイレ"
            use="断水時のトイレ確保"
            links={[{ label: "商品ページで見る", href: GC("6300061994") }]}
          />
        </CardGrid>

        {/* ============ H2-2 なぜ必要か ============ */}
        <h2 className={cls.h2}>
          なぜ事業所に防災備蓄が必要なのか（72時間の壁・帰宅困難者対策条例・BCP）
        </h2>
        <p className={cls.body}>
          大規模災害後、救助活動が最優先されるのは最初の
          <Mark>72時間（3日間）</Mark>
          とされ、被災者の生存率はこの時間を境に急激に低下します。東日本大震災では首都圏で約515万人の帰宅困難者が発生し、一斉帰宅による集団転倒などの二次災害が懸念されました。これを受け
          <strong>東京都帰宅困難者対策条例（2013年4月施行）</strong>
          は、事業者に対し従業員が施設内に留まれるよう
          <strong>3日分の水・食料等の備蓄</strong>
          を努力義務としています。また2024年度からは
          <strong>介護施設・事業所等でBCP策定が法律で義務化</strong>
          されるなど、企業の防災対応は年々重要性を増しています。
        </p>
        <Table>
          <thead>
            <tr>
              <Th>項目</Th>
              <Th>目安</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>備蓄日数</Td>
              <Td>最低3日分（BCP上は1週間まで拡張する企業も）</Td>
            </tr>
            <tr>
              <Td>水（1人あたり）</Td>
              <Td>9L（3L×3日）</Td>
            </tr>
            <tr>
              <Td>食料（1人あたり）</Td>
              <Td>3日分（高カロリー・長期保存タイプ推奨）</Td>
            </tr>
            <tr>
              <Td>トイレ（1人あたり）</Td>
              <Td>1日5〜7回×3日＝15〜21回分</Td>
            </tr>
            <tr>
              <Td>余裕分</Td>
              <Td>来社中の顧客・帰宅困難者向けに約10%上乗せ</Td>
            </tr>
          </tbody>
        </Table>
        <p className={cls.meta}>
          ※出典：東京都帰宅困難者対策ハンドブック等。人数・立地・業種により必要量は変動します。最新情報は自治体・内閣府のガイドラインをご確認ください。
        </p>

        {/* ============ H2-3 食料・水 ============ */}
        <h2 className={cls.h2}>①食料・水：長期保存の非常食と保存水</h2>
        <p className={cls.body}>
          3〜10年保存の缶詰パン・ビスケット・保存水など、
          <strong>ローリングストック</strong>
          しやすい商品を中心に揃えます。長期保存タイプは更新の手間を減らせるのが利点です。
        </p>
        <CardGrid>
          <ProductCard
            img="6300008699.jpg"
            name="5年保存 缶入りパン パンですよ！ あずきミルク 24缶セット"
            badge="食料・水"
            feature="5年保存のあずきミルク味パン缶"
            use="甘味のあるバリエーションを備えたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300008699") }]}
          />
          <ProductCard
            img="6300037537.jpg"
            name="5年保存 缶詰入りパン メープル 24缶セット"
            badge="食料・水"
            feature="5年保存のメープル味パン缶"
            use="味のローテーションを増やしたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300037537") }]}
          />
          <ProductCard
            img="6300037542.jpg"
            name="7年保存 缶詰パン チョコレート 24缶セット"
            badge="食料・水"
            feature="7年保存でさらに長期対応のチョコ味パン缶"
            use="更新頻度をさらに抑えたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300037542") }]}
          />
          <ProductCard
            img="6300008927.jpg"
            name="5年保存 LIFE STOCK エナジータイプ グレープ味 80袋セット"
            badge="食料・水"
            feature="ゼリー状で食べやすいエナジー系保存食"
            use="高齢者・子供にも配慮した非常食"
            links={[{ label: "商品ページで見る", href: GC("6300008927") }]}
          />
          <ProductCard
            img="6300008925.jpg"
            name="5年保存 LIFE STOCK ウォーターブレイク 80袋セット"
            badge="食料・水"
            feature="水分補給を意識したゼリー飲料タイプ"
            use="食料と一緒に水分補給も備えたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300008925") }]}
          />
          <ProductCard
            img="6300056916.jpg"
            name="保存用ミレービスケット100g【車載用】12缶入"
            badge="食料・水"
            feature="車載にも便利な小型缶ビスケット"
            use="車載・小規模備蓄の補完"
            links={[{ label: "商品ページで見る", href: GC("6300056916") }]}
          />
          <ProductCard
            img="6300062329.jpg"
            name="お湯を注ぐだけシャキシャキ高知野菜たくさんスープ 50個セット"
            badge="食料・水"
            feature="お湯を注ぐだけの野菜スープで栄養補給"
            use="非常時の栄養バランス補完"
            links={[{ label: "商品ページで見る", href: GC("6300062329") }]}
          />
          <ProductCard
            img="6300062202.jpg"
            name="手羽先玄米リゾットミニ 50袋セット（トマト/カレー/和風）"
            badge="食料・水"
            feature="味のバリエーション豊富な玄米リゾット"
            use="食事メニューに変化をつけたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062202") }]}
          />
        </CardGrid>

        {/* ============ H2-4 防災セット ============ */}
        <h2 className={cls.h2}>②防災セット・非常持出袋：既製セットで効率よく揃える</h2>
        <p className={cls.body}>
          個人配布用の非常持出袋や、部門・フロア単位でまとめて揃えられる防災セットです。厳選アイテム数・点数の違うラインナップから、人数・予算に応じて選べます。
        </p>
        <CardGrid>
          <ProductCard
            img="6300062673.jpg"
            name="【ABO-01】非常持出袋"
            badge="防災セット"
            feature="基本の非常持出袋"
            use="個人配布・最小限のスタート"
            links={[{ label: "商品ページで見る", href: GC("6300062673") }]}
          />
          <ProductCard
            img="6300062674.jpg"
            name="【ABO-11】防炎非常持出袋"
            badge="防災セット"
            feature="防炎仕様の非常持出袋"
            use="火災リスクを考慮した現場・施設"
            links={[{ label: "商品ページで見る", href: GC("6300062674") }]}
          />
          <ProductCard
            img="6300062676.jpg"
            name="【ABO-32N】防災セット10点"
            badge="防災セット"
            feature="10点厳選のコンパクトセット"
            use="個人・小規模向けのスタートセット"
            links={[{ label: "商品ページで見る", href: GC("6300062676") }]}
          />
          <ProductCard
            img="6300062682.jpg"
            name="【ABO-54】防災セット16点"
            badge="防災セット"
            feature="16点の充実した内容"
            use="中規模の一斉配布"
            links={[{ label: "商品ページで見る", href: GC("6300062682") }]}
          />
          <ProductCard
            img="6300062683.jpg"
            name="【ABO-59】A4ファイルサイズ防災セット厳選9点"
            badge="防災セット"
            feature="A4サイズで保管しやすい9点セット"
            use="デスク・ロッカーへの常備"
            links={[{ label: "商品ページで見る", href: GC("6300062683") }]}
          />
          <ProductCard
            img="6300062679.jpg"
            name="【ABO-39】A4ファイルサイズ防災セット10点"
            badge="防災セット"
            feature="A4サイズの10点セット"
            use="省スペース保管を重視する場合"
            links={[{ label: "商品ページで見る", href: GC("6300062679") }]}
          />
          <ProductCard
            img="6300062680.jpg"
            name="【ABO-49】A4ファイルサイズ防災セット厳選7点"
            badge="防災セット"
            feature="A4サイズの7点厳選セット"
            use="必要最小限をコンパクトに"
            links={[{ label: "商品ページで見る", href: GC("6300062680") }]}
          />
          <ProductCard
            img="6300062677.jpg"
            name="【ABO-3500】リュック防災セット35点"
            badge="防災セット"
            feature="リュック型で35点の充実装備"
            use="本格的な備えをしたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062677") }]}
          />
          <ProductCard
            img="6300062678.jpg"
            name="【ABO-3502】宿泊セット16点"
            badge="防災セット"
            feature="宿泊を想定した16点セット"
            use="施設内待機・宿泊対応"
            links={[{ label: "商品ページで見る", href: GC("6300062678") }]}
          />
          <ProductCard
            img="6300062675.jpg"
            name="【ABO-1100】メディカル救急セット"
            badge="救急・衛生"
            feature="救急・衛生用品をまとめたセット"
            use="応急手当の備え"
            links={[{ label: "商品ページで見る", href: GC("6300062675") }]}
          />
          <ProductCard
            img="6300062686.jpg"
            name="【ABO-990】車載用防災4点セット"
            badge="車載・移動"
            feature="車載向けのコンパクト4点セット"
            use="営業車・社用車への常備"
            links={[{ label: "商品ページで見る", href: GC("6300062686") }]}
          />
          <ProductCard
            img="6300062684.jpg"
            name="【ABO-95】ドライブ緊急セット10点"
            badge="車載・移動"
            feature="車載向けの10点ドライブ緊急セット"
            use="出張・営業車両への常備"
            links={[{ label: "商品ページで見る", href: GC("6300062684") }]}
          />
          <ProductCard
            img="6300062685.jpg"
            name="【ABO-98】ドライブ緊急セット13点"
            badge="車載・移動"
            feature="車載向けの13点ドライブ緊急セット"
            use="より充実した車載防災を求める場合"
            links={[{ label: "商品ページで見る", href: GC("6300062685") }]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ 防災士監修モデルの防災バッグ（EX.48シリーズ）</h3>
        <p className={cls.body}>
          防災士監修のTANAKA防災士ブラザーズモデルなど、内容のグレード（ベーシック／アドバンス／プレミアム）と対応人数で選べるシリーズです。
        </p>
        <CardGrid>
          <ProductCard
            img="6300062065.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルS ベーシック（1人用）オレンジ"
            badge="防災バッグ"
            feature="1人用・ベーシックグレード"
            use="個人配布・単身赴任者等"
            links={[{ label: "商品ページで見る", href: GC("6300062065") }]}
          />
          <ProductCard
            img="6300062187.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルM ベーシック（2人用）シルバーグレー"
            badge="防災バッグ"
            feature="2人用ベーシック・シルバーグレー"
            use="色・グレードを選びたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062187") }]}
          />
          <ProductCard
            img="6300062189.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルM アドバンス（2人用）オレンジ"
            badge="防災バッグ"
            feature="2人用・アドバンスグレード"
            use="ベーシックより内容を充実させたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062189") }]}
          />
          <ProductCard
            img="6300062190.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルM アドバンス（2人用）シルバーグレー"
            badge="防災バッグ"
            feature="2人用アドバンス・シルバーグレー"
            use="色・グレードを選びたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062190") }]}
          />
          <ProductCard
            img="6300062191.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルM プレミアム（2人用）オレンジ"
            badge="防災バッグ"
            feature="2人用・最上位プレミアムグレード"
            use="最も充実した内容を求める場合"
            links={[{ label: "商品ページで見る", href: GC("6300062191") }]}
          />
          <ProductCard
            img="6300062192.jpg"
            name="EX.48防災バッグ TANAKA防災士ブラザーズモデルM プレミアム（2人用）シルバーグレー"
            badge="防災バッグ"
            feature="2人用プレミアム・シルバーグレー"
            use="色・グレードを選びたい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062192") }]}
          />
          <ProductCard
            img="6300062062.jpg"
            name="EX. 2人も浮かべる膨張マットレス＋バックパック"
            badge="防災バッグ"
            feature="水害時にも使える膨張マットレス付き"
            use="水害リスクのある地域・施設"
            links={[{ label: "商品ページで見る", href: GC("6300062062") }]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ 車載用の緊急セット</h3>
        <p className={cls.body}>出張・営業車両など、車を使う従業員向けの車載防災セットです。</p>

        {/* ============ H2-5 トイレ・シェルター ============ */}
        <h2 className={cls.h2}>③トイレ・シェルター：断水時の生活インフラを確保</h2>
        <p className={cls.body}>
          断水時の水洗トイレ使用は感染症・臭気の原因になります。簡易トイレ・折りたたみトイレスツール・囲い（パーテーション・ワンタッチルーム）で、プライバシーと衛生を確保しましょう。
        </p>
        <CardGrid>
          <ProductCard
            img="6300062064.jpg"
            name="ワンタッチルーム2＆トイレセット"
            badge="トイレ"
            feature="ワンタッチで設営できる個室型トイレセット"
            use="プライバシー確保が必要な場所"
            links={[{ label: "商品ページで見る", href: GC("6300062064") }]}
          />
          <ProductCard
            img="6300062063.jpg"
            name="インスタントエコトイレセット"
            badge="トイレ"
            feature="簡易組立のエコトイレセット"
            use="コンパクトに常備したいトイレ対策"
            links={[{ label: "商品ページで見る", href: GC("6300062063") }]}
          />
          <ProductCard
            img="6300061722.jpg"
            name="折り畳みトイレスツール楕円 ブラック（ホルダーなし）MATONG"
            badge="トイレ"
            feature="折りたたみ式のトイレスツール"
            use="携帯性を重視したトイレ対策"
            links={[{ label: "商品ページで見る", href: GC("6300061722") }]}
          />
          <ProductCard
            img="6300062205.jpg"
            name="救護用パーテーション あんしんウォール"
            badge="トイレ・シェルター"
            feature="救護・着替え・トイレ用の目隠しパーテーション"
            use="プライバシー配慮が必要な避難スペース"
            links={[{ label: "商品ページで見る", href: GC("6300062205") }]}
          />
        </CardGrid>
        <Caution title="トイレ備蓄で見落としがちな点">
          <p>
            トイレの備蓄は水・食料に比べて後回しにされがちですが、断水は数日〜数週間続くことがあります。凝固剤・処理袋の数量は「1人あたり1日5〜7回×日数分」で計算し、女性・高齢者・障がいのある方のプライバシーに配慮した囲いも合わせて用意してください。
          </p>
        </Caution>

        {/* ============ H2-6 電源 ============ */}
        <h2 className={cls.h2}>④電源・照明：停電時の情報収集と生活維持</h2>
        <p className={cls.body}>
          停電時はスマートフォンの充電・情報収集・照明の確保が生死を分けることもあります。ポータブル電源（蓄電池）とソーラーパネルを組み合わせれば、日中に充電し夜間に使うサイクルが作れます。
        </p>
        <CardGrid>
          <ProductCard
            img="6300062194.jpg"
            name="スーパーメガパワーステーション 蓄電池"
            badge="電源"
            feature="大容量の蓄電池（ポータブル電源）"
            use="事業所単位の電源確保"
            links={[{ label: "商品ページで見る", href: GC("6300062194") }]}
          />
          <ProductCard
            img="6300062193.jpg"
            name="メガパワーステーション 発電機"
            badge="電源"
            feature="大出力の発電機タイプ"
            use="大きな電力が必要な現場・施設"
            links={[{ label: "商品ページで見る", href: GC("6300062193") }]}
          />
          <ProductCard
            img="6300062197.jpg"
            name="100W ソーラーパネル"
            badge="電源"
            feature="大出力ソーラーパネル"
            use="蓄電池への急速充電を狙う場合"
            links={[{ label: "商品ページで見る", href: GC("6300062197") }]}
          />
          <ProductCard
            img="6300062196.jpg"
            name="40W ソーラーパネル"
            badge="電源"
            feature="中出力のソーラーパネル"
            use="日常使いと非常時を両立したい場合"
            links={[{ label: "商品ページで見る", href: GC("6300062196") }]}
          />
          <ProductCard
            img="6300062195.jpg"
            name="21W ソーラーパネル ポケット付き"
            badge="電源"
            feature="携帯しやすい小型ソーラーパネル"
            use="個人・小規模の電源補完"
            links={[{ label: "商品ページで見る", href: GC("6300062195") }]}
          />
          <ProductCard
            img="6300062198.jpg"
            name="スーパーランタン"
            badge="電源・照明"
            feature="停電時の照明確保に"
            use="夜間の視界確保・共用スペース照明"
            links={[{ label: "商品ページで見る", href: GC("6300062198") }]}
          />
        </CardGrid>

        {/* ============ H2-7 作業用工具・車両 ============ */}
        <h2 className={cls.h2}>⑤作業用工具・車両対策：がれき撤去や車両トラブルに備える</h2>
        <p className={cls.body}>
          地震・豪雨後のがれき撤去や排水確保にはスコップ・シャベルが役立ちます。車両関連では、自動車用消火器やエンジンスターターも事業所・現場に常備しておきたいアイテムです。
        </p>
        <CardGrid>
          <ProductCard
            img="1129710016.jpg"
            name="金象印 パンチャーショベル 角 A柄"
            badge="作業用工具"
            feature="がれき撤去・土砂除去向けの角形ショベル"
            use="地震・豪雨後の復旧作業"
            links={[{ label: "商品ページで見る", href: GC("1129710016") }]}
          />
          <ProductCard
            img="1129710017.jpg"
            name="金象印 A柄パンチャースコップ #3"
            badge="作業用工具"
            feature="扱いやすいサイズのパンチャースコップ"
            use="土砂・がれきの除去作業"
            links={[{ label: "商品ページで見る", href: GC("1129710017") }]}
          />
          <ProductCard
            img="1129710018.jpg"
            name="金象印 A柄アルミ合金スコップジャンボ"
            badge="作業用工具"
            feature="ジャンボサイズで作業効率重視"
            use="広範囲の土砂・がれき撤去"
            links={[{ label: "商品ページで見る", href: GC("1129710018") }]}
          />
          <ProductCard
            img="1129710019.jpg"
            name="銀象印 D柄アルミショベル 角 イエロー"
            badge="作業用工具"
            feature="軽量アルミ製のショベル"
            use="持ち運びやすさを重視する場合"
            links={[{ label: "商品ページで見る", href: GC("1129710019") }]}
          />
          <ProductCard
            img="1131010411.jpg"
            name="自動車用加圧式粉末消火器"
            badge="車載・移動"
            feature="車載向けの粉末消火器"
            use="車両火災リスクへの備え"
            links={[{ label: "商品ページで見る", href: GC("1131010411") }]}
          />
          <ProductCard
            img="1117150001.jpg"
            name="エンジンスターター ビックバンSS"
            badge="車載・移動"
            feature="バッテリー上がり対策のエンジンスターター"
            use="車両トラブル時の初動対応"
            links={[{ label: "商品ページで見る", href: GC("1117150001") }]}
          />
        </CardGrid>

        {/* ============ H2-8 夏の熱中症対策 ============ */}
        <h2 className={cls.h2}>⑥夏場の災害・熱中症対策：経口補水・テント・冷感グッズ</h2>
        <p className={cls.body}>
          夏場の災害時は熱中症のリスクが跳ね上がります。冷房が使えない状況を想定し、経口補水液・スポーツドリンク・塩分タブレット・干し梅などの水分/塩分補給と、日射を遮るテント・遮光ネットを備えておきましょう。
        </p>
        <CardGrid>
          <ProductCard
            img="1179030650.jpg"
            name="経口補水液 OS-1（オーエスワン）500ml 24本入"
            badge="熱中症対策"
            feature="脱水症状に備えた経口補水液"
            use="熱中症・脱水リスクの高い夏場"
            links={[{ label: "商品ページで見る", href: GC("1179030650") }]}
          />
          <ProductCard
            img="1179030709.jpg"
            name="ポカリスエット500ml 24本入"
            badge="熱中症対策"
            feature="定番のスポーツドリンク"
            use="日常の水分補給と非常時備蓄を兼用"
            links={[{ label: "商品ページで見る", href: GC("1179030709") }]}
          />
        </CardGrid>
        <CardGrid>
          <ProductCard
            img="1179030621.jpg"
            name="熱中対策スポーツドリンクパウダー 日向夏風味 100袋入"
            badge="熱中症対策"
            feature="粉末タイプで保管・携行がラク"
            use="大量備蓄・現場への配布"
            links={[{ label: "商品ページで見る", href: GC("1179030621") }]}
          />
          <ProductCard
            img="1179030519.jpg"
            name="熱中タブレットミックス スタンドパック"
            badge="熱中症対策"
            feature="手軽に塩分補給できるタブレット"
            use="ポケット常備・現場作業員への配布"
            links={[{ label: "商品ページで見る", href: GC("1179030519") }]}
          />
          <ProductCard
            img="1179030524.jpg"
            name="やわらか干し梅"
            badge="熱中症対策"
            feature="塩分補給と食べやすさを両立"
            use="小腹満たしと塩分補給の両立"
            links={[{ label: "商品ページで見る", href: GC("1179030524") }]}
          />
          <ProductCard
            img="1179030790.jpg"
            name="熱中症対策 ぽり×2トリオ（割干大根3種）"
            badge="熱中症対策"
            feature="塩分補給になる干し野菜のセット"
            use="おやつ感覚での塩分補給"
            links={[{ label: "商品ページで見る", href: GC("1179030790") }]}
          />
          <ProductCard
            img="1179030527.jpg"
            name="シャキシャキ茎わかめ 梅しそ味"
            badge="熱中症対策"
            feature="塩分補給になる茎わかめのおやつ"
            use="手軽な塩分補給の選択肢を増やす"
            links={[{ label: "商品ページで見る", href: GC("1179030527") }]}
          />
        </CardGrid>
        <CardGrid>
          <ProductCard
            img="1179070000.jpg"
            name="熱中症対策キット（6点セット）"
            badge="熱中症対策"
            feature="熱中症対策アイテムをまとめた6点セット"
            use="現場・オフィスへの常備"
            links={[{ label: "商品ページで見る", href: GC("1179070000") }]}
          />
          <ProductCard
            img="1179071000.jpg"
            name="熱中症応急セット（10点セット）"
            badge="熱中症対策"
            feature="応急対応まで想定した10点セット"
            use="熱中症の初期対応を強化したい場合"
            links={[{ label: "商品ページで見る", href: GC("1179071000") }]}
          />
        </CardGrid>

        <h3 className={cls.h3}>◎ クーラーテント・災害用テント・集会用テント</h3>
        <p className={cls.body}>
          避難待機スペースや現場の休憩所として使えるテント類です。用途・広さに応じて選べます。
        </p>
        <CardGrid>
          <ProductCard
            img="172401.jpg"
            name="Suiden クーラーテント 1.8m×1.8m SS-TNT-1818-C"
            badge="テント"
            feature="コンパクトな休憩・待機スペース"
            use="個人〜少人数の休憩スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/172401.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="203270.jpg"
            name="Suiden クーラーテント 2.4m×2.4m SS-TNT-2424-C"
            badge="テント"
            feature="標準的な広さのクーラーテント"
            use="中規模の休憩・待機スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/203270.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="203268.jpg"
            name="Suiden クーラーテント 1.8m×2.7m SS-TNT-1827-C"
            badge="テント"
            feature="縦長スペース向けのクーラーテント"
            use="細長い設置場所での休憩スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/203268.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="203269.jpg"
            name="Suiden クーラーテント 1.8m×3.6m SS-TNT-1836-C"
            badge="テント"
            feature="大きめの休憩スペースを確保"
            use="複数人での休憩・待機スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/203269.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="289918.jpg"
            name="TRUSCO KOK HEXEASY 熱中症クールテント 3×6M"
            badge="テント"
            feature="大型の熱中症対策クールテント"
            use="大人数の休憩・避難スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/289918.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>
        <CardGrid>
          <ProductCard
            img="232836.jpg"
            name="TRUSCO 災害用テント 1.5間×2間 フレーム付き TENTS-2736"
            badge="テント"
            feature="災害時の避難・待機スペース用テント"
            use="避難所・仮設スペースの確保"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/232836.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="172284.jpg"
            name="KOK 集会用テント らくらくテント W3.55×D2.67×H2.80 白 RT-1.5X2-W"
            badge="テント"
            feature="組立しやすい集会用テント（白）"
            use="避難所・集会スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/172284.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="172281.jpg"
            name="KOK 集会用テント らくらくテント W3.55×D2.67×H2.80 青 RT-1.5X2-B"
            badge="テント"
            feature="同サイズの青バージョン"
            use="色で用途を区別したい場合"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/172281.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="172290.jpg"
            name="KOK 集会用テント らくらくテント W5.31×D3.55×H3.07 黄 RT-2X3-Y"
            badge="テント"
            feature="中規模サイズの集会用テント（黄）"
            use="中規模の避難・集会スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/172290.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
          <ProductCard
            img="172294.jpg"
            name="KOK 集会用テント らくらくテント W7.07×D3.55×H3.07 白 RT-2X4-W"
            badge="テント"
            feature="大規模サイズの集会用テント"
            use="大人数の避難・集会スペース"
            links={[
              {
                label: "商品ページで見る",
                href: YB(
                  "https://store.shopping.yahoo.co.jp/signcity-yshop/172294.html?sc_i=shopping-pc-web-result-storesch-rsltlst-img&ea=",
                ),
              },
            ]}
          />
        </CardGrid>
        <Caution title="夏場の熱中症は装備だけに頼らない">
          <p>
            テント・冷感グッズは環境を整える有効な手段ですが、それだけに頼らず、こまめな休憩・水分/塩分補給、体調不良のサインが出たら直ちに涼しい場所へ移動するという基本を徹底してください。2025年6月からは職場の熱中症対策が義務化されています。
          </p>
        </Caution>

        {/* ============ H2-9 選び方・保管 ============ */}
        <h2 className={cls.h2}>備蓄品の選び方・保管・管理のポイント</h2>
        <ul className={cls.list}>
          <li>
            <strong>ローリングストック</strong>
            ：日常的に消費し、消費した分だけ買い足す。長期保存品と組み合わせて更新の手間を軽減
          </li>
          <li>
            <strong>分散保管</strong>
            ：1階の防災倉庫、各フロアのロッカー、個人デスクなど複数箇所に分けて配置
          </li>
          <li>
            <strong>リスト化・点検</strong>
            ：品目・数量・賞味期限を一覧化し、年1〜2回の点検・入替えを実施
          </li>
          <li>
            <strong>周知・訓練</strong>
            ：保管場所と使い方を従業員に周知し、避難訓練とあわせて確認する
          </li>
        </ul>
        <ArticleImage
          src="/articles/bosai/storage.jpg"
          alt="防災備蓄品を整理してリスト管理するオフィスのイメージ"
        />

        {/* ============ H2-10 まとめ ============ */}
        <h2 className={cls.h2}>まとめ｜「3日分×8カテゴリ」から、無理なく始める</h2>
        <p className={cls.body}>
          事業所の防災備蓄は、<strong>72時間の壁</strong>と
          <strong>帰宅困難者対策条例</strong>を踏まえた
          <Mark>3日分</Mark>
          を基本に、<strong>食料・水／防災セット／トイレ／電源／工具／熱中症対策</strong>
          の8カテゴリで揃えると抜け漏れが防げます。まずは既製の防災セットと保存水・保存食から着手し、トイレ・電源・季節対応（夏の熱中症、冬の防寒）へと順次拡張していきましょう。BCPの一環として、備蓄は「揃えて終わり」ではなく、点検・更新・周知までがワンセットです。
        </p>
        <FinalCta />

        {/* ============ H2-11 FAQ ============ */}
        <h2 className={cls.h2}>よくある質問（FAQ）</h2>
        <div className="my-6 space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="rounded-lg border border-gray-200 bg-white p-4">
              <summary className={`cursor-pointer ${cls.faqQ}`}>{f.q}</summary>
              <p className={`mt-2 ${cls.bodySm}`}>{f.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
