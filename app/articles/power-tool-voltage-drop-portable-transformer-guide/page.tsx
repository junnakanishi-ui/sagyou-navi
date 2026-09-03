import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "power-tool-voltage-drop-portable-transformer-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "電動工具の電圧降下対策｜200V→100VとTPT-30BDの使い方【2026年】";
const H1 =
  "電動工具の電圧降下対策｜200Vしかない現場で100V工具を使う方法とTRUSCO TPT-30BD【2026年版】";
const SHORT_TITLE = "電動工具の電圧降下対策とTPT-30BD";
const DESCRIPTION =
  "100V電動工具のパワー不足や長い延長コードでの電圧降下、200Vしかない工事現場で100V工具を使う方法を解説。TRUSCO TPT-30BD（764-4639）の3kVA・30A、100V/115V出力、個別コンセント上限、昇圧・降圧の意味まで購入前に整理します。";
const PUBLISHED = "2026-09-02";
const MODIFIED = "2026-09-02";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

const product = productData.product;
const mainCta = productData.cta.main;
const secondaryCtas = productData.cta.secondary;

const powerScenarios = [
  {
    id: "A",
    situation: "200Vしかない",
    need: "100V工具を使いたい",
    answer: "降圧できるポータブルトランスを検討",
    detail:
      "TPT-30BDは入力200Vに対応し、100V/115Vを出力できます。",
  },
  {
    id: "B",
    situation: "100Vはあるが弱い",
    need: "工具のパワーが出ない",
    answer: "配線条件を確認後、必要なら115V昇圧を検討",
    detail:
      "延長コード・電線・同時使用を確認したうえで、電圧降下が起きているなら115V出力を検討します。",
  },
  {
    id: "C",
    situation: "電源が不安定",
    need: "症状が一定しない",
    answer: "トランスだけで決めず電源系統を確認",
    detail:
      "供給電源、延長配線、容量、接続部、発電機などを含めて原因確認が必要です。",
  },
  {
    id: "D",
    situation: "100V→200Vが必要",
    need: "200V機器を使いたい",
    answer: "TPT-30BDでは対応不可",
    detail:
      "出力は100V/115Vです。100V→200Vが必要なら別仕様の変圧器を選びます。",
  },
] as const;

const voltageDropCauses = [
  "延長コードが長い",
  "電線が細い",
  "消費電流の大きい工具を使う",
  "複数の機器を同時に使う",
  "コネクタや接続箇所が多い",
  "電源から作業場所までの距離が長い",
] as const;

const toolSymptoms = [
  "回転が上がりにくい",
  "負荷をかけると止まりやすい",
  "モーターが苦しそうに動く",
  "始動しにくい",
  "作業時間が延びる",
] as const;

const preTransformerChecks = [
  {
    title: "延長コードが長すぎないか",
    body: "必要以上に長い延長コードは、電圧降下を増やす要因になります。作業場所に合った長さを使うことが基本です。",
  },
  {
    title: "電線が細すぎないか",
    body: "同じ長さでも、電線が細いほど抵抗が大きくなります。大電流の工具を使う場合は、コードの許容電流だけでなく電圧降下も考えて選びます。",
  },
  {
    title: "コードリールを巻いたまま高負荷で使っていないか",
    body: "コードリールは製品ごとの定格・使用方法に従う必要があります。大きな負荷をつなぐ場合は、リール側の定格や温度上昇にも注意します。",
  },
  {
    title: "複数機器を同時に使っていないか",
    body: "丸ノコ、グラインダー、集じん機、コンプレッサー、ヒーターなどを同時に使えば流れる電流は増えます。工具単体では問題がなくても、同時使用時だけ電源側の条件が厳しくなることがあります。",
  },
] as const;

const specRows = [
  ["品番", "TPT-30BD"],
  ["発注コード", "764-4639"],
  ["JAN", "4989999392616"],
  ["容量", "3kVA"],
  ["定格", "連続"],
  ["電流（本体合計）", "30A以下"],
  ["入力電圧", "100V / 200V"],
  ["出力電圧", "100V / 115V"],
  ["周波数", "50/60Hz"],
  ["相数", "単相"],
  ["100Vコンセント", "各15A以下"],
  ["115Vコンセント", "各13A以下"],
  ["保護機能", "安全ブレーカー30A"],
  ["入力ケーブル", "3芯 3.5mm² × 2m"],
  ["入力プラグ", "三相200V接地3P20A"],
  ["寸法", "190×305×206mm"],
  ["質量", "14.5kg"],
  ["使用場所", "屋内型"],
] as const;

const suitableSites = [
  {
    title: "建築・内装工事",
    body: "仮設電源側と持ち込み工具の電圧が合わない現場。長い延長配線で100V工具の力不足が出る現場。",
  },
  {
    title: "配管・空調・設備工事",
    body: "工場内の200V電源から、一時的に100V工具を使いたい場合。",
  },
  {
    title: "工場改修・保全",
    body: "生産設備は200V中心でも、保全用の手持ち工具は100Vというケースがあります。",
  },
  {
    title: "自動車・機械整備",
    body: "整備現場で100V工具の電源条件を整えたい場合に検討されます。",
  },
  {
    title: "展示会・臨時設備",
    body: "会場や仮設電源の電圧と、持ち込む機器の条件が合わない場合にポータブルトランスが検討されます。",
  },
] as const;

const unsuitableCases = [
  {
    title: "雨天の屋外",
    body: "TPT-30BDは屋内型です。雨中・濡れた場所・湿った場所などでの使用は避けるよう取扱説明書に記載されています。",
  },
  {
    title: "100Vから200Vへ昇圧したい",
    body: "出力は100V/115Vなので対応しません。",
  },
  {
    title: "1口で15Aを超える100V負荷",
    body: "100Vコンセントの上限は15Aです。",
  },
  {
    title: "1口で13Aを超える115V負荷",
    body: "115V側は13A以下です。",
  },
  {
    title: "3kVAを超える負荷",
    body: "本体容量の範囲を超える用途には使えません。",
  },
  {
    title: "漏電保護機能を本体へ必須とする現場",
    body: "公式仕様は安全ブレーカー30Aです。現場ごとに必要な漏電保護や電源設備の要件は別途確認してください。",
  },
] as const;

const buyChecklist = [
  "現場の入力電源は100Vか200Vか",
  "必要な出力は100Vか115Vか",
  "100V→200Vが必要ではないか",
  "使用機器の定格電圧",
  "使用機器の定格電流",
  "始動時の電流",
  "100V口は15A以下",
  "115V口は13A以下",
  "全体で30A以下",
  "3kVA以内",
  "屋内・乾燥した設置場所を確保",
  "アース・現場電源ルールを確認",
  "延長コードの長さと太さ",
  "同時使用する機器",
  "最新在庫・後継品情報",
] as const;

const faqs = [
  {
    q: "電動工具の電圧降下とは何ですか？",
    a: "電線の抵抗によって、電源側より工具側の電圧が低くなる現象です。延長距離が長い、電線が細い、大きな電流を使うなどの条件で影響が増えます。",
  },
  {
    q: "電圧降下すると電動工具はどうなりますか？",
    a: "回転不足、始動不良、負荷時のパワー不足などが起こる場合があります。ただし工具本体の不具合など別原因もあるため、電源条件と工具の両方を確認します。",
  },
  {
    q: "現場に200Vしかありません。100V工具は使えますか？",
    a: "200V入力から100Vを出力できる降圧トランスを使う方法があります。TPT-30BDは200V入力・100V/115V出力に対応しています。",
  },
  {
    q: "TPT-30BDは100Vを200Vにできますか？",
    a: "できません。TPT-30BDの出力電圧は100V/115Vです。",
  },
  {
    q: "TPT-30BDの昇圧とは何Vから何Vですか？",
    a: "100V系の入力に対して115V出力を利用し、電圧降下による電動工具の力不足へ対応する使い方です。",
  },
  {
    q: "3kVA・30Aなら1つの100Vコンセントで30A使えますか？",
    a: "使えません。取扱説明書では100Vコンセントは15A以下、115Vコンセントは13A以下、全コンセント合計30A以下です。",
  },
  {
    q: "TPT-30BDは連続使用できますか？",
    a: "公式仕様では連続定格です。ただし容量・各コンセントの許容電流を守る必要があります。",
  },
  {
    q: "TPT-30BDは屋外で使えますか？",
    a: "屋内型です。雨中、濡れた場所、湿った場所などでの使用は避けるよう取扱説明書に記載されています。",
  },
  {
    q: "入力プラグは何ですか？",
    a: "公式仕様では三相200V接地3P20Aプラグです。100V接続時の方法も含め、実際の電源接続は取扱説明書と現場の電気設備ルールに従ってください。",
  },
  {
    q: "TPT-30BDは後継品がありますか？",
    a: "2026年9月時点のオレンジブック公式ページには「この商品には後継品があります」と表示されています。一方でTPT-30BDの商品ページと在庫情報も掲載されています。購入時点の在庫・後継型式は販売店またはTRUSCOへ確認してください。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/construction-portable-power-selection",
    label: "工事現場のポータブル電源の選び方｜容量・出力・用途別の目安",
  },
  {
    href: "/articles/outdoor-worksite-portable-power",
    label: "屋外現場で使うポータブル電源の選び方",
  },
  {
    href: "/articles/electrical-crimping-work-efficiency-guide",
    label: "電気配線の圧着作業を効率化する工具の選び方",
  },
  {
    href: "/articles/insulated-tool-basics",
    label: "絶縁工具の基礎知識｜電気作業で必要な理由と選び方",
  },
] as const;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    images: [
      {
        url: `${SITE_URL}${IMG("power-tool-voltage-drop-worksite-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "工事現場で100V電動工具のパワー不足と電源条件を確認するイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("power-tool-voltage-drop-worksite-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("power-tool-voltage-drop-worksite-hero.webp")}`],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: SITE_URL,
  },
  about: {
    "@type": "Product",
    name: product.name,
    model: product.model,
    sku: product.orderCode,
    brand: { "@type": "Brand", name: "TRUSCO" },
    sameAs: [product.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${SITE_URL}/articles`,
    },
    { "@type": "ListItem", position: 3, name: SHORT_TITLE, item: CANONICAL },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ExtLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel={EXT_REL} className={className}>
      {children}
    </a>
  );
}

function Mark({ children }: { children: ReactNode }) {
  return <mark className={cls.mark}>{children}</mark>;
}

function P({ children }: { children: ReactNode }) {
  return <p className={cls.body}>{children}</p>;
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`${cls.h2} scroll-mt-24`}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className={cls.h3}>{children}</h3>;
}

function Figure({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 850px"
        />
      </div>
      <figcaption className="border-t border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900">
        {alt}
      </figcaption>
    </figure>
  );
}

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <ExtLink
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center text-[15px] font-extrabold text-white transition hover:bg-amber-700 sm:w-auto"
    >
      {label}
    </ExtLink>
  );
}

function ProductCard() {
  return (
    <article className="my-8 overflow-hidden rounded-2xl border-2 border-gray-300 bg-white">
      <div className="grid md:grid-cols-[280px_1fr]">
        <div className="relative aspect-square bg-gray-50 md:aspect-auto md:min-h-[280px]">
          <Image
            src={PROD(product.image)}
            alt={`TRUSCO ${product.model}（${product.orderCode}）の商品画像`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <p className="text-sm font-bold text-amber-700">メイン商品</p>
          <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
            {product.model}
          </h3>
          <p className="mt-1 text-[15px] font-bold text-gray-900">
            発注コード {product.orderCode}
          </p>
          <p className="mt-3 text-[15px] leading-7 text-gray-900">
            入力<Mark>100V / 200V</Mark>、出力
            <Mark>100V / 115V</Mark>。3kVA・30A連続定格のポータブルトランス。
            <strong>100V→200V出力には対応しません。</strong>
          </p>
          <div className="mt-5">
            <PrimaryCta href={mainCta.url} label={mainCta.label} />
          </div>
        </div>
      </div>
    </article>
  );
}

function FinalCtaBlock() {
  return (
    <section className="my-12 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-8">
      <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
        TRUSCO TPT-30BDの在庫・価格を確認する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        200V現場で100V工具を使いたい、電圧降下でパワー不足が出ている——用途が合えば、TPT-30BD（764-4639）を候補にしてください。
      </p>
      <div className="mt-5">
        <PrimaryCta href={mainCta.url} label={mainCta.label} />
      </div>
      <h3 className="mt-8 text-xl font-black text-gray-900">関連用品</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {secondaryCtas.map((cta) => (
          <ExtLink
            key={cta.label}
            href={cta.url}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border-2 border-gray-900 bg-white px-4 py-3 text-center text-[15px] font-extrabold text-gray-900 hover:bg-gray-100"
          >
            {cta.label} →
          </ExtLink>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-900">
        ※作業用手袋は電気絶縁用保護具の代替ではありません。電気作業では作業内容に適した保護具と現場ルールを優先してください。
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <nav aria-label="パンくず" className={cls.meta}>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>{SHORT_TITLE}</li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto max-w-[850px] px-4 pb-16 sm:px-6">
          <header>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-950">
              現場電源 / 電動工具 / 2026年9月2日更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              「いつもの丸ノコなのに回転が弱い」「グラインダーへ負荷をかけると急に粘る」「長い延長コードの先で工具の力が出ない」——100Vの電動工具を現場で使っていて、このような症状が出るときは、工具そのものではなく
              <Mark>電源側の電圧降下（電圧ドロップ）</Mark>
              が関係していることがあります。
            </P>
            <P>
              一方、工場改修や設備工事では、
              <Mark>「現場には200V電源があるが、使いたい工具は100V」</Mark>
              という別の問題もあります。この2つの悩みに対応できるのが、昇圧・降圧に対応したポータブルトランスです。
            </P>
            <P>
              TRUSCOの<Mark>TPT-30BD</Mark>
              は、入力100V/200V、出力100V/115V、3kVA・30A連続定格の現場向けポータブルトランスです。ただし「昇圧・降圧兼用」という名前だけを見ると100Vを200Vに上げられるのでは？と誤解しやすいので注意が必要です。
              <strong>
                TPT-30BDの出力は100Vと115Vです。100Vから200Vを作る機器ではありません。
              </strong>
            </P>
            <Figure
              src={IMG("power-tool-voltage-drop-worksite-hero.webp")}
              alt="工事現場で100V電動工具のパワー不足と電源条件を確認するイメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8">
            <H2 id="quick-diagnosis">30秒で診断｜あなたの現場はどのパターン？</H2>
            <Figure
              src={IMG("worksite-power-four-scenarios.webp")}
              alt="工事現場の200V・100V・電圧降下など電源条件の違いを整理するイメージ"
            />
            <div className="my-6 grid gap-4">
              {powerScenarios.map((s) => (
                <div
                  key={s.id}
                  className="rounded-xl border-2 border-emerald-300 bg-white p-5"
                >
                  <p className="text-sm font-bold text-emerald-800">
                    パターン{s.id}
                  </p>
                  <h3 className="mt-1 text-xl font-black text-gray-900">
                    {s.situation} → {s.need}
                  </h3>
                  <p className="mt-2 text-[16px] font-extrabold text-emerald-900">
                    {s.answer}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-gray-900">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <PrimaryCta href={mainCta.url} label={mainCta.label} />
            </div>
          </section>

          <H2 id="voltage-drop">電動工具の電圧降下とは？</H2>
          <P>
            電線には抵抗があります。電源から工具までの距離が長くなり、流れる電流が大きくなるほど、工具へ届く電圧が下がりやすくなります。これが電圧降下、現場では「電圧ドロップ」と呼ばれる現象です。
          </P>
          <Figure
            src={IMG("extension-cable-voltage-drop-concept.webp")}
            alt="長い延長コードで電圧降下が起きるイメージ"
          />
          <H3>電圧降下が起きやすい条件</H3>
          <ul className={cls.list}>
            {voltageDropCauses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <P>
            日動工業も昇圧トランスの公式説明で、電圧は電線を延ばすほど降下し、工具やモーターの能力低下につながると案内しています。
          </P>

          <H2 id="symptoms">工具に起きること</H2>
          <P>電圧が不足すると、次のような症状が出る場合があります。</P>
          <ul className={cls.list}>
            {toolSymptoms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <P>
            ただし、工具の故障、カーボンブラシ、刃物・砥石の状態など別の原因もあるため、
            <Mark>パワー不足＝必ず電圧降下</Mark>
            とは断定しません。
          </P>

          <H2 id="pre-check">トランスを買う前に確認したい4項目</H2>
          <P>
            電圧降下を疑ったら、すぐ昇圧トランスを入れる前に配線側を確認します。
          </P>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {preTransformerChecks.map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl border-2 border-gray-300 bg-white p-5"
              >
                <p className="text-sm font-bold text-gray-700">
                  チェック {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="200v-to-100v">200Vしかない現場で100V工具を使う方法</H2>
          <P>
            工場や工事現場では、三相200Vの電源設備がある一方、持ち込む電動工具は100Vというケースがあります。このとき使用するのが
            <Mark>降圧トランス</Mark>
            です。200Vを100V側へ変換し、100V仕様の機器へ供給します。
          </P>
          <Figure
            src={IMG("worksite-200v-source-100v-tool.webp")}
            alt="200V電源しかない現場で100V工具を使いたい状況のイメージ"
          />
          <H3>TPT-30BDなら200V入力に対応</H3>
          <P>
            TRUSCO TPT-30BDは、
            <Mark>入力：100V / 200V、出力：100V / 115V</Mark>
            です。オレンジブック公式も用途として「現場に200Vしかなく100Vの電動工具を使用したい時」を明記しています。
          </P>
          <H3>なぜ200Vから100Vを取ると電圧降下対策にも使われる？</H3>
          <P>
            作業場所近くまで200V系統を使い、その場所で100Vへ変圧する構成は、100Vのまま長距離を大電流で引くケースと比べて、条件によっては電圧降下を抑えやすくなります。
          </P>
          <aside className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-xl font-black text-gray-900">安全上の注意</h3>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              ただし、現場の配線設計や電源接続は電気設備の条件によって異なります。
              <Mark>
                配電盤への接続や200V系統の取り扱いは、現場ルールと有資格者による適切な施工を優先してください。
              </Mark>
              この記事では具体的な200V結線手順は扱いません。
            </p>
          </aside>

          <H2 id="tpt-30bd">TRUSCO TPT-30BDとは？</H2>
          <P>
            TPT-30BDは、TRUSCOのポータブルトランスです。品番
            <Mark>TPT-30BD</Mark>、発注コード
            <Mark>764-4639</Mark>で確認できます。
          </P>
          <ProductCard />
          <div className="my-6 overflow-x-auto">
            <table className={cls.table}>
              <caption className="mb-3 text-left text-base font-bold text-gray-900">
                TPT-30BD 基本仕様
              </caption>
              <tbody>
                {specRows.map(([label, value]) => (
                  <tr key={label}>
                    <th className={cls.th}>{label}</th>
                    <td className={cls.td}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            1台で<Mark>「200Vしかない現場」</Mark>と
            <Mark>「100Vの電圧降下」</Mark>
            の両方へ対応できるため、複数の現場を回る工事会社や設備会社と相性があります。
          </P>

          <H2 id="boost-misconception">「昇圧・降圧兼用」の意味を間違えない</H2>
          <aside className="my-6 rounded-2xl border-2 border-amber-400 bg-amber-50 p-6">
            <p className="text-[16px] leading-8 text-gray-900">
              TPT-30BDは、
              <Mark>入力100V / 200V、出力100V / 115V</Mark>
              です。
              <strong>
                100V入力から200Vを出力する製品ではありません。
              </strong>
              「昇圧」と書いてあるため100→200Vと考えやすいですが、この製品の昇圧は100V系を115Vへ上げる使い方です。
            </p>
          </aside>
          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
              <H3>200V入力時</H3>
              <P>
                100V/115V側を利用できます。主な目的は、200V電源しかない現場で100V系の工具・機器を使うことです。
              </P>
            </div>
            <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
              <H3>100V入力時</H3>
              <P>
                100V/115V側を利用できます。電圧降下による工具の力不足がある場合、115V側を使う選択肢があります。
              </P>
            </div>
          </div>
          <P>
            <Mark>100V入力から200Vを出力することはできません。</Mark>
            100Vから200V機器を動かしたい人は、200V出力に対応した別製品を選ぶ必要があります。
          </P>

          <H2 id="capacity-vs-outlet">3kVA・30Aなら、1つのコンセントから30A使える？</H2>
          <P>
            <Mark>使えません。</Mark>
            ここも商品タイトルだけでは誤解しやすい部分です。
          </P>
          <Figure
            src={IMG("transformer-total-capacity-vs-outlet-limit.webp")}
            alt="トランス全体容量と個別コンセント上限を分けて考えるイメージ"
          />
          <P>取扱説明書では、次のとおり定められています。</P>
          <ul className={cls.list}>
            <li>
              100Vコンセント：<Mark>15A以下</Mark>
            </li>
            <li>
              115Vコンセント：<Mark>13A以下</Mark>
            </li>
            <li>
              全コンセントの合計：<Mark>30A以下</Mark>
            </li>
          </ul>
          <P>
            つまり、<Mark>本体全体の定格30A</Mark>と
            <Mark>1口ごとの許容電流</Mark>
            は別です。単純に3kVAという本体容量だけを見て、1つの100Vコンセントへ大容量機器を接続するのは適切ではありません。
          </P>

          <H2 id="115v-rule">115Vコンセントはいつ使う？</H2>
          <Figure
            src={IMG("portable-transformer-100v-115v-concept.webp")}
            alt="通常100Vと電圧降下時115Vの使い分けを示す概念イメージ"
          />
          <P>
            取扱説明書の考え方は明確です。
            <Mark>通常の電気器具は100Vコンセントへ。</Mark>
            そして、
            <Mark>
              電動工具などで電圧低下による力不足が生じたとき、115Vコンセントを検討。
            </Mark>
            という順番です。
          </P>
          <P>
            いつでも115Vへつなげば工具が強くなる、ではありません。機器側が115V入力を許容することを確認する必要があり、工具や機器の定格・取扱説明書を確認してください。
          </P>

          <H2 id="suitable">TPT-30BDが向く現場</H2>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {suitableSites.map((site) => (
              <div
                key={site.title}
                className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-5"
              >
                <h3 className="text-lg font-black text-gray-900">
                  {site.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {site.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="unsuitable">TPT-30BDが向かないケース</H2>
          <Figure
            src={IMG("indoor-portable-transformer-safe-placement.webp")}
            alt="ポータブルトランスを乾燥した屋内で安全に設置するイメージ"
          />
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {unsuitableCases.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border-2 border-red-200 bg-red-50 p-5"
              >
                <h3 className="text-lg font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="transport">14.5kgは「ポータブル」だが軽量ではない</H2>
          <Figure
            src={IMG("portable-transformer-site-transport.webp")}
            alt="重量のあるトランスと工具を台車で現場内運搬するイメージ"
          />
          <P>
            TPT-30BDの質量は<Mark>14.5kg</Mark>
            です。ハンドル付きで現場へ持ち運ぶ用途の製品ですが、毎日何フロアも移動させるなら、電源コード・延長コード・工具・トランス本体をまとめた移動方法も考えておくと効率的です。特に長距離移動では、現場用台車を使う選択肢があります。
          </P>

          <H2 id="successor-2026">2026年9月のTPT-30BD｜購入前に後継品情報も確認</H2>
          <aside className="my-6 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <p className="text-[16px] leading-8 text-gray-900">
              2026年9月時点で、TRUSCOのオレンジブック公式にはTPT-30BDの商品ページが存在し、2026年度版カタログ掲載・在庫情報も表示されています。一方で、同じ公式ページには
              <Mark>「この商品には後継品があります」</Mark>
              という表示もあります。
            </p>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              <Mark>TPT-30BDは廃番と断定しません。</Mark>
              購入時にはCRECOTEの商品ページで在庫・納期を確認し、必要に応じてTRUSCOへ最新の後継情報も確認するのが確実です。
            </p>
          </aside>

          <H2 id="buy-checklist">購入前チェックリスト</H2>
          <ul className="my-6 grid gap-2 sm:grid-cols-2">
            {buyChecklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-[15px] leading-7 text-gray-900"
              >
                <span aria-hidden="true" className="font-bold text-emerald-700">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <p className={cls.bodySm}>{faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ｜TPT-30BDは「200V→100V」と「100V電圧降下」の両方を1台で考えたい現場向け</H2>
          <P>
            TPT-30BDを選ぶ理由は<Mark>3kVA・30Aだから</Mark>
            だけではありません。この製品が特に合うのは、
            <Mark>現場には200Vしかないが100V工具を使いたい</Mark>
            あるいは、
            <Mark>100V工具の電圧ドロップによるパワー不足へ対応したい</Mark>
            という現場です。
          </P>
          <P>
            選定では、
            <Mark>
              入力電圧 → 必要出力 → 機器の電流 → 1口の上限 → 合計容量 → 屋内使用条件
            </Mark>
            の順に確認してください。そして最も大切なのは、
            <Mark>TPT-30BDの「昇圧」は100V→200Vではない</Mark>
            という点です。
          </P>

          <FinalCtaBlock />

          <section className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-[16px] font-bold text-gray-900 underline underline-offset-4 hover:text-amber-700"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
