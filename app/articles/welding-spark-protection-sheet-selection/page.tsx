import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";

const SITE_URL = "https://www.sagyou-navi.com";
const ARTICLE_PATH = "/articles/welding-spark-protection-sheet-selection";
const ARTICLE_URL = `${SITE_URL}${ARTICLE_PATH}`;

export const metadata: Metadata = {
  title:
    "溶接・グラインダーの火花養生方法｜スパッタシートの選び方【2026年版】",
  description:
    "溶接・溶断・グラインダーの火花養生を床・壁・開口部・階下・横方向に分けて解説。定尺・ロール・シリカクロス・フェルト・火花用衝立の選び方を整理します。",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    locale: "ja_JP",
    url: ARTICLE_URL,
    title:
      "溶接・グラインダーの火花養生方法｜床・壁・開口部・階下を守るスパッタシートの選び方",
    description:
      "火花の飛散方向と落下経路から、スパッタシート・ロール・フェルト・衝立を選ぶ実務ガイド。",
    siteName: "作業用品ナビ",
    images: [
      {
        url: `${SITE_URL}/images/articles/welding-spark-protection-sheet-selection/welding-spark-protection-worksite-hero.webp`,
        width: 1600,
        height: 900,
        alt: "溶接作業の床・壁・階下をスパッタシートで養生する現場",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "溶接・グラインダーの火花養生方法【2026年版】",
    description:
      "床・壁・開口部・階下・横方向別に、スパッタシートと火花用衝立の選び方を解説。",
    images: [
      `${SITE_URL}/images/articles/welding-spark-protection-sheet-selection/welding-spark-protection-worksite-hero.webp`,
    ],
  },
};

type Product = {
  id: string;
  name: string;
  badge: string;
  useCase: string;
  url: string;
  image: string;
  confirm: string;
};

const products: Product[] = [
  {
    "id": "222628",
    "name": "スパッタシートDXロールカット 2000×m単位 SPS-R-CUT-W 402-7051",
    "badge": "2m幅・m単位",
    "useCase": "広い床・壁を必要長さで覆う切売り",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/222628.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/222628.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225397",
    "name": "スパッタシートプラチナデラックス ロール 2000X30m TSP-RPD-W 855-8137",
    "badge": "2m幅・30mロール",
    "useCase": "広範囲をまとめて養生する高グレードの2m幅ロール",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225397.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225397.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225403",
    "name": "スパッタシートスーパー ロール 1000X30m TSP-RSP 300-6522",
    "badge": "1m幅・30mロール",
    "useCase": "1m幅で取り回しやすいロール材",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225403.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225403.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225385",
    "name": "スパッタシートベーシック両面 ロール 2000X30m グリーン TSP-RBWG-W 856-3616",
    "badge": "両面・2m幅",
    "useCase": "色分けしながら両面タイプを使いたい現場",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225385.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225385.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "222615",
    "name": "スパッタシートアルファー ロール 1000X30m SPS-RA 120-9817",
    "badge": "片面・1m幅",
    "useCase": "軽さと扱いやすさを重視する日常養生",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/222615.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/222615.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225355",
    "name": "スパッタシートプラチナデラックス 4号 1920X1920 TSP-4PD 254-7490",
    "badge": "4号・1920×1920",
    "useCase": "床や壁の標準的な面を1枚で覆う定尺品",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225355.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225355.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225364",
    "name": "スパッタシート プレミアムシルバー 6号 1920X2920 TSP-6PS 250-0275",
    "badge": "6号・1920×2920",
    "useCase": "広い床面や階下側まで大きく覆う定尺品",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225364.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225364.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "224554",
    "name": "スパッタシートシリカクロス 1.1mm厚 1000幅X25M巻 TSC-11-R 836-6949",
    "badge": "シリカクロス・1.1mm",
    "useCase": "高い耐熱性が必要な用途をメーカー仕様で検討する",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/224554.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/224554.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "221663",
    "name": "片面スパッタフェルトAD 6号 1920X2920 20AD-6 228-4685",
    "badge": "フェルト・6号",
    "useCase": "火花やノロを受け止める床養生の候補",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/221663.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/221663.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225529",
    "name": "小型火花用衝立 900mm角 三面セット プレミアムシルバー TTH3-900-PS 257-3503",
    "badge": "900mm角・三面",
    "useCase": "小型作業台や局所作業を三方向から囲う",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225529.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225529.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225716",
    "name": "火花対策用 アルミ製衝立 W1000XH2000 両面コーティング YAK-1020RS 856-3504",
    "badge": "W1000×H2000",
    "useCase": "狭い通路や局所作業の横方向飛散を遮る",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225716.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225716.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  },
  {
    "id": "225718",
    "name": "火花対策用 アルミ製衝立 W2000XH2000 両面コーティング YAK-2020RS 856-3505",
    "badge": "W2000×H2000",
    "useCase": "作業区画を広く遮へいする",
    "url": "https://store.shopping.yahoo.co.jp/signcity-yshop/225718.html?utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
    "image": "/images/articles/welding-spark-protection-sheet-selection/products/225718.webp",
    "confirm": "JIS区分・材質・厚さ・使用面・ハトメ・注意事項を商品ページで確認"
  }
];

const categoryLinks = {
  spatter: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E3%82%B9%E3%83%91%E3%83%83%E3%82%BF%E3%82%B7%E3%83%BC%E3%83%88&utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection#CentSrchFilter1",
  flame: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?p=%E8%80%90%E7%82%8E&b=31&view=grid&utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
  weldingPpe: "https://store.shopping.yahoo.co.jp/signcity-yshop/search.html?aq=&oq=&p=%E6%BA%B6%E6%8E%A5%E4%BF%9D%E8%AD%B7%E5%85%B7&storeid=signcity-yshop&sc_i=shopping-pc-web-result-storesg-h_srch-srchbtn-sgstfrom-result-storesch-h_srch-srchbox&utm_source=sagyou_navi&utm_medium=article&utm_campaign=welding-spark-protection-sheet-selection",
};

const faqItems = [
  {
    question: "防炎シートとスパッタシートは同じですか？",
    answer:
      "同じとは限りません。防炎シートは燃え広がりにくさを目的とする製品があり、溶接・溶断火花を受ける用途への適合は別に確認が必要です。火花養生には、JIS A 1323の区分やメーカー用途表示を確認したスパッタシートを選びます。",
  },
  {
    question: "スパッタシートはどちらの面を火花側にしますか？",
    answer:
      "製品によって異なります。片面コーティング製品には、コーティング面ではじき、反対面で付着させる製品があります。商品ページ・取扱説明書・メーカー資料で使用面を確認してください。",
  },
  {
    question: "1号・2号・4号・6号はどう選びますか？",
    answer:
      "局所は1号・2号、標準的な床・壁は4号、広い床や高所・階下側は6号が候補です。ただし製品ごとに実寸が異なる場合があるため、号数だけでなく縦横寸法を確認します。",
  },
  {
    question: "グラインダーの火花にも使えますか？",
    answer:
      "グラインダーの火花養生に用いる製品があります。横方向へ飛びやすいため、床用シートと火花用衝立・三面衝立を組み合わせて検討します。製品用途とJIS区分を確認してください。",
  },
  {
    question: "ロールと定尺はどちらがよいですか？",
    answer:
      "局所作業・持出し・枚数管理は定尺、広い床・壁・連続区画はロールが向きます。継ぎ目を減らすか、取り回しを優先するかで選びます。",
  },
  {
    question: "シリカクロスはどんなときに選びますか？",
    answer:
      "メーカー仕様上、高い耐熱性が示されている製品を必要とする場合の候補です。作業温度、火花・ノロの量、付着後の扱い、交換方法を確認します。",
  },
  {
    question: "穴が開いたシートは使い続けられますか？",
    answer:
      "穴や破損があると火花が通る可能性があります。メーカーの注意事項と社内の点検基準に従い、使用停止・交換を判断してください。無理な補修で性能を推定しないことが重要です。",
  },
  {
    question: "火花用衝立があれば床のシートは不要ですか？",
    answer:
      "不要とは限りません。衝立は主に横方向の遮へいです。足元、床面、階下への落下は別に養生します。",
  },
  {
    question: "シートだけで火災を防げますか？",
    answer:
      "シートだけで火災防止を保証するものではありません。可燃物除去、消火準備、作業中の監視、作業後の点検、作業計画と一体で運用します。",
  },
  {
    question: "溶接保護具も同時に必要ですか？",
    answer:
      "必要です。火花養生は周囲の防火・保護であり、作業者の目・顔・手・身体・呼吸を守る保護具の代わりにはなりません。溶接方法に合う溶接面、遮光ガラス、手袋、保護衣、防じん・換気等を確認してください。",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "溶接・グラインダーの火花養生方法｜床・壁・開口部・階下を守るスパッタシートの選び方【2026年版】",
  description: metadata.description,
  image: [
    `${SITE_URL}/images/articles/welding-spark-protection-sheet-selection/welding-spark-protection-worksite-hero.webp`,
  ],
  datePublished: "2026-08-04",
  dateModified: "2026-08-04",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: SITE_URL,
  },
  mainEntityOfPage: ARTICLE_URL,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "作業用品ナビ", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${SITE_URL}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "溶接・グラインダーの火花養生方法",
      item: ARTICLE_URL,
    },
  ],
};

function ExternalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-emerald-700 text-white hover:bg-emerald-800"
      : "border-2 border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50";
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-center font-bold transition ${classes}`}
    >
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-4 p-5">
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-900">
          {product.badge}
        </span>
        <h3 className="text-lg font-bold leading-7 text-slate-950">
          {product.name}
        </h3>
        <dl className="space-y-3 text-sm leading-6 text-slate-800">
          <div>
            <dt className="font-bold text-slate-950">向く現場</dt>
            <dd>{product.useCase}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-950">購入前確認</dt>
            <dd>{product.confirm}</dd>
          </div>
        </dl>
        <ExternalButton href={product.url}>
          Yahoo!ショッピングで見る
        </ExternalButton>
      </div>
    </article>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-16 scroll-mt-24 border-l-4 border-emerald-600 pl-4 text-2xl font-black leading-tight text-slate-950 md:text-3xl"
    >
      {children}
    </h2>
  );
}

export default function Page() {
  const typeRows = [
    ["定尺", "局所・班ごとの持出し", "展開・枚数管理がしやすい", "号数、実寸、ハトメ"],
    ["ロール・切売り", "広い床・壁、連続区画", "継ぎ目を減らしやすい", "幅、長さ、裁断、保管"],
    ["片面・両面", "日常養生、清掃性重視", "表裏を使い分ける製品がある", "使用面、JIS区分、厚さ"],
    ["シリカクロス", "高い耐熱性を要する用途", "高耐熱仕様の製品がある", "使用温度、ノロ、交換"],
    ["スパッタフェルト", "床面で受け止める", "火花・ノロを付着させる候補", "引きずり、穴、焦げ"],
    ["火花用衝立", "横方向、作業区画", "自立して遮へいしやすい", "幅、高さ、足、交換シート"],
  ];

  const checklist = [
    "作業内容は溶接・溶断・グラインダーのどれか確認した",
    "火花の方向と落下経路を確認した",
    "床・壁・設備裏・開口部・階下を確認した",
    "可燃物・危険物を除去または隔離した",
    "JIS区分・材質・厚さ・使用面を確認した",
    "重ねしろと固定方法を決めた",
    "衝立の幅・高さ・足形状を確認した",
    "消火器等をすぐ使える位置に準備した",
    "作業中の監視担当と連絡方法を決めた",
    "作業後の点検範囲・担当・時刻を決めた",
    "穴・焦げ・ほつれのある用品を分けた",
    "溶接面・手袋・保護衣・換気も確認した",
  ];

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-white text-slate-900">
        <div className="mx-auto max-w-[850px] px-4 py-8 md:px-6 md:py-12">
          <nav aria-label="パンくず" className="mb-6 text-sm text-slate-700">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline underline-offset-4">
                  トップ
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles" className="underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">溶接・グラインダーの火花養生方法</li>
            </ol>
          </nav>

          <header className="mx-auto max-w-[850px]">
            <p className="mb-3 font-bold text-emerald-800">溶接用品・火花養生</p>
            <h1 className="text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              溶接・グラインダーの火花養生方法
              <span className="mt-2 block text-xl leading-8 md:text-3xl">
                床・壁・開口部・階下を守るスパッタシートの選び方【2026年版】
              </span>
            </h1>
            <p className="mt-5 text-sm font-medium text-slate-700">
              執筆：作業用品ナビ編集部　公開・更新：2026年8月4日
            </p>
          </header>

          <div className="relative mx-auto mt-8 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/images/articles/welding-spark-protection-sheet-selection/welding-spark-protection-worksite-hero.webp"
              alt="溶接作業の床・壁・階下をスパッタシートで養生する現場"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-[850px] text-[17px] leading-8 text-slate-900 md:text-lg md:leading-9">
            <p>
              溶接、溶断、グラインダーによる切断・研磨では、火花が作業者の足元だけに落ちるとは限りません。横へ飛び、設備の裏へ入り、床のすき間や開口部から階下へ落ちることがあります。床にスパッタシートを1枚敷いて終わりにすると、壁際、配管の裏、足場板のすき間、階下の断熱材などを見落とすおそれがあります。
            </p>
            <p className="mt-4">
              東京消防庁の工事中の防火管理資料では、溶接・溶断時の出火防止として周囲を不燃性のシート等で遮へいし、可燃物を除去し、消火の準備を行い、作業中の監視と作業後の点検を実施する考え方が示されています。この記事では、商品名から入るのではなく、<strong>火花がどこへ飛ぶか、どこを守るか、どの形状の養生具を使うか</strong>の順番で整理します。
            </p>

            <aside className="my-10 rounded-2xl border-2 border-emerald-700 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-xl font-black text-emerald-950">先に結論</h2>
              <p className="mt-3">
                可燃物を除去し、火花の飛散方向と落下経路を確認したうえで、床・壁・設備・開口部・階下をスパッタシートや火花用衝立で切れ目なく覆います。床や広い範囲は定尺・ロール、横方向は衝立、高い耐熱性を要する用途はメーカー仕様を確認したシリカクロス等が候補です。
              </p>
              <p className="mt-3 font-bold">
                シートだけに頼らず、消火準備、作業中の監視、作業後の点検を組み合わせてください。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <ExternalButton href={categoryLinks.spatter}>
                  スパッタシート一覧
                </ExternalButton>
                <ExternalButton href={categoryLinks.flame} variant="secondary">
                  耐炎アイテム一覧
                </ExternalButton>
                <ExternalButton href={categoryLinks.weldingPpe} variant="secondary">
                  溶接保護具一覧
                </ExternalButton>
              </div>
            </aside>

            <SectionHeading id="spark-path">
              火花養生は「飛散方向」と「落下経路」から考える
            </SectionHeading>
            <p className="mt-6">
              スパッタシートは、溶接・溶断・研磨等で発生する火花やノロを受けるための養生具です。ただし、必要な対策はシートの有無だけでは決まりません。作業前に、火花が下へ落ちるのか、横へ飛ぶのか、設備の裏へ回るのか、開口部から階下へ落ちるのかを確認します。高所では直下だけでなく、落下途中で跳ねる場所や下階の断熱材・資材まで確認します。
            </p>
            <p className="mt-4">
              「作業点の真下」ではなく「火花の経路全体」を養生範囲とすることが重要です。シート単体ではなく、可燃物除去、消火準備、作業中の監視、作業後の点検、作業計画と一体で運用します。
            </p>
            <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/articles/welding-spark-protection-sheet-selection/welding-spark-path-risk-inspection.webp"
                alt="溶接前に床・壁・設備裏・開口部・階下の火花経路を確認するイメージ"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-6">
              <li>可燃物・危険物を除去または隔離する</li>
              <li>床、壁、設備裏、開口部、階下を一続きで確認する</li>
              <li>消火器等をすぐ使える位置に準備する</li>
              <li>作業中の監視担当と作業後の点検範囲を決める</li>
              <li>溶接面、手袋、保護衣、防じん・換気も別に確認する</li>
            </ul>

            <SectionHeading id="by-location">
              場所別｜火花養生の基本方法
            </SectionHeading>
            <h3 className="mt-8 text-xl font-black text-slate-950">
              床面は、火花が落ちる範囲より広く覆う
            </h3>
            <p className="mt-3">
              作業点の真下だけでなく、姿勢変更、工具の角度、風、ワーク形状によって火花の落下位置が変わることを考慮します。定尺を細かく継ぎすぎるとすき間が増えるため、4号・6号やロール材を使い分けます。重ねる場合は作業中に開かないようにし、シート端を通路へ出さないよう作業区画と通路を分けます。
            </p>
            <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/articles/welding-spark-protection-sheet-selection/spatter-sheet-floor-overlap-installation.webp"
                alt="スパッタシートを重ねて壁際まで切れ目なく養生するイメージ"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-black text-slate-950">
              壁・設備・配線は、裏側まで確認する
            </h3>
            <p className="mt-3">
              正面だけでなく設備の脚元、裏側、ケーブル・ホースの取り回しを確認します。シートを垂らす場合は下端が浮いて火花が入り込まないようにし、固定部の耐熱性と作業動線を確認します。薄い樹脂シートや段ボールを火花を受ける用途へ流用しないでください。
            </p>
            <h3 className="mt-8 text-xl font-black text-slate-950">
              開口部・配管貫通部・すき間
            </h3>
            <p className="mt-3">
              床開口、配管貫通部、足場板の継ぎ目、壁際などは、上から見ただけでは閉じているように見える場合があります。開口部の形状と奥行きを確認し、周囲の可燃物を除去したうえで遮へいし、下側・裏側からも確認します。シートを押し込むだけでは作業中にずれる可能性があるため、固定方法を作業計画へ入れます。
            </p>
            <h3 className="mt-8 text-xl font-black text-slate-950">
              高所・足場・階下
            </h3>
            <p className="mt-3">
              高所の溶接・溶断では、火花が数階下まで落ちる事例があります。作業床のすき間、足場板や養生ネットの材質、外壁側・建物内側の落下経路、階下の天井裏・断熱材・資材置場、風による横流れ、下階の監視と立入管理、作業終了後の点検範囲まで確認します。
            </p>
            <h3 className="mt-8 text-xl font-black text-slate-950">
              グラインダーの横方向
            </h3>
            <p className="mt-3">
              ディスクグラインダーの火花は工具の向きに沿って横方向へ飛びやすく、床だけを覆っても隣の作業区画や棚・可燃物へ届く場合があります。下方向は床面の定尺・ロール・フェルト、横方向は火花用衝立・三面衝立で分けて考えます。衝立を置いても足元・側面・上部・階下は別に確認します。
            </p>
            <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/articles/welding-spark-protection-sheet-selection/grinder-spark-screen-protection.webp"
                alt="グラインダー作業の横方向の火花を三面衝立と床シートで遮るイメージ"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <div className="my-10 grid gap-3 sm:grid-cols-3">
              <ExternalButton href={categoryLinks.spatter}>
                スパッタシート一覧
              </ExternalButton>
              <ExternalButton href={categoryLinks.flame} variant="secondary">
                耐炎アイテム一覧
              </ExternalButton>
              <ExternalButton href={categoryLinks.weldingPpe} variant="secondary">
                溶接保護具一覧
              </ExternalButton>
            </div>

            <SectionHeading id="types">
              スパッタシートの種類と使い分け
            </SectionHeading>
            <div className="my-8 overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-[760px] w-full border-collapse text-left text-base">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4">タイプ</th>
                    <th className="p-4">向く場面</th>
                    <th className="p-4">長所</th>
                    <th className="p-4">購入前確認</th>
                  </tr>
                </thead>
                <tbody>
                  {typeRows.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-slate-200 align-top"
                    >
                      {row.map((cell) => (
                        <td key={cell} className="p-4">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/articles/welding-spark-protection-sheet-selection/spatter-sheet-types-comparison.webp"
                alt="定尺スパッタシート・ロール材・フェルト・火花用衝立を比較するイメージ"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-black text-slate-950">
              片面・両面・シリカ・フェルトの確認点
            </h3>
            <p className="mt-3">
              片面コーティング製品には表裏で火花の受け方が異なるものがあります。両面は表裏の運用を簡単にしやすい製品がありますが、性質は製品ごとに異なります。シリカクロスは高い耐熱性が示される場合の候補ですが、「高温なら何でも安全」ではなく、作業温度・ノロの量・交換方法をメーカー仕様で確認します。スパッタフェルトは床で受け止める候補で、引きずり・穴・焦げ・湿潤使用の可否に注意します。
            </p>
            <div className="my-8 flex flex-wrap gap-3">
              <ExternalButton href={categoryLinks.spatter}>
                スパッタシート一覧で比較する
              </ExternalButton>
              <ExternalButton href={categoryLinks.flame} variant="secondary">
                耐炎アイテム一覧
              </ExternalButton>
            </div>

            <SectionHeading id="size">
              1号・2号・4号・6号とロール幅の選び方
            </SectionHeading>
            <p className="mt-6">
              一般的な目安は1号約920×920mm、2号約920×1920mm、4号約1920×1920mm、6号約1920×2920mmです。ただし、製品シリーズによって1700×2920mmや1850×2900mmなど実寸が異なるため、号数だけで発注しません。必要サイズは守りたい床面積だけでなく、重ねしろ、壁際への立ち上がり、設備脚の回り込み、火花方向が変わる余裕、階下への落下範囲を足して決めます。
            </p>
            <div className="my-8 overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-[680px] w-full border-collapse text-left text-base">
                <thead className="bg-emerald-800 text-white">
                  <tr>
                    <th className="p-4">サイズ</th>
                    <th className="p-4">向く使い方</th>
                    <th className="p-4">注意点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-bold">1号・2号</td>
                    <td className="p-4">小型作業台、細長い床・壁</td>
                    <td className="p-4">継ぎ目が増えないか</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-bold">4号</td>
                    <td className="p-4">標準的な床・壁</td>
                    <td className="p-4">立ち上がり・重ね分を加える</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-bold">6号</td>
                    <td className="p-4">広い床、高所・階下側</td>
                    <td className="p-4">重量、搬入、展開人数</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-bold">1000mm幅</td>
                    <td className="p-4">狭所、一人での展開</td>
                    <td className="p-4">広い面では継ぎ目が増える</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-bold">2000mm幅</td>
                    <td className="p-4">広い床・壁</td>
                    <td className="p-4">搬入・保管・取り回し</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="jis">
              JIS A 1323 A種・B種・C種は何を示すか
            </SectionHeading>
            <p className="mt-6">
              JIS A 1323は、建築工事用シートの溶接・溶断火花に対する難燃性試験方法です。A種・B種・C種は試験時の火花発生条件に対応する区分であり、<strong>A種ならあらゆる現場・距離・設置方法で安全という意味ではありません</strong>。現場の火花量、作業方法、距離、角度、養生範囲、可燃物、破損状態を含めて判断します。
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-6">
              <li>A種：厚さ9mmの火花発生用鋼板を溶断する試験条件</li>
              <li>B種：厚さ4.5mm</li>
              <li>C種：厚さ3.2mm</li>
            </ul>
            <p className="mt-5">
              商品ページでは、JIS区分と試験番号、材質、厚さ、コーティング、使用面、ハトメ、使用温度の記載、注意事項、交換基準を型番ごとに確認してください。
            </p>
          </div>

          <section className="mx-auto mt-16 max-w-[850px]">
            <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
              用途別に選ぶ代表商品
            </h2>
            <p className="mt-4 max-w-4xl text-[17px] leading-8 text-slate-800">
              添付Excelの67商品から、用途・サイズ・形状が重複しすぎない12商品を掲載します。価格・在庫・正式仕様は各商品ページで確認してください。
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <ExternalButton href={categoryLinks.spatter}>
                スパッタシート一覧でさらに比較する
              </ExternalButton>
            </div>
          </section>

          <div className="mx-auto max-w-[850px] text-[17px] leading-8 text-slate-900 md:text-lg md:leading-9">
            <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/articles/welding-spark-protection-sheet-selection/spatter-sheet-damage-inspection.webp"
                alt="使用後のスパッタシートの穴・焦げ・ほつれを点検するイメージ"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <SectionHeading id="mistakes">よくある失敗</SectionHeading>
            <ol className="mt-6 list-decimal space-y-4 pl-6">
              <li>
                <strong>床だけ覆い、壁裏・配管裏・階下を確認しない。</strong>
                高所では直下だけでなく、階下の断熱材や資材まで確認します。
              </li>
              <li>
                <strong>シート同士のすき間が開く。</strong>
                工具の移動、風、足、台車で開くことがあるため、固定と監視を組み合わせます。
              </li>
              <li>
                <strong>可燃物を移動せず、上から覆うだけにする。</strong>
                まず除去・隔離を優先します。
              </li>
              <li>
                <strong>片面製品の使用面を確認しない。</strong>
                現場へ出す前に使用面を表示・共有します。
              </li>
              <li>
                <strong>穴、焦げ、ほつれ、コーティング損傷を放置する。</strong>
                メーカー注意事項と社内基準に従い、使用停止・交換を判断します。
              </li>
              <li>
                <strong>衝立を置いたので床養生を省く。</strong>
                衝立は横方向の遮へいであり、床・階下の落下対策を自動的に満たしません。
              </li>
              <li>
                <strong>作業後の点検範囲・担当・時刻を決めない。</strong>
                火花が見えない場所へ入り、時間がたってから発煙・発火する可能性があります。
              </li>
            </ol>
            <div className="my-8">
              <ExternalButton href={categoryLinks.flame}>
                耐炎アイテム一覧で周辺対策を確認する
              </ExternalButton>
            </div>

            <SectionHeading id="checklist">
              法人購買・現場責任者向けチェックリスト
            </SectionHeading>
            <div className="mt-6 rounded-2xl bg-slate-50 p-6">
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1 font-black text-emerald-700"
                    >
                      □
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <SectionHeading id="faq">よくある質問</SectionHeading>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none font-bold text-slate-950">
                    <span className="mr-2 text-emerald-700">Q.</span>
                    {item.question}
                  </summary>
                  <p className="mt-3 pl-7 text-base leading-7 text-slate-800">
                    <span className="mr-2 font-bold text-slate-950">A.</span>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <SectionHeading id="related">関連記事</SectionHeading>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/articles/welding-shade-glass-number-selection"
                  className="font-bold text-slate-950 underline underline-offset-4 hover:text-emerald-800"
                >
                  溶接の遮光ガラスは何番？#7〜#13の選び方と電流別の目安
                </Link>
                <span className="mt-1 block text-base text-slate-800">
                  遮光ガラス・溶接面・素ガラス、溶接棒・溶接ゲージまで作業者保護を整理
                </span>
              </li>
              <li>
                <Link
                  href="/articles/pipe-welding-rotator-weld-roller-selection"
                  className="font-bold text-slate-950 underline underline-offset-4 hover:text-emerald-800"
                >
                  パイプ溶接の回転治具の選び方｜ウェルドローラーとポジショナーの違い
                </Link>
                <span className="mt-1 block text-base text-slate-800">
                  円周溶接の回転支持と、火花・ヒューム対策を分けて考える参考
                </span>
              </li>
              <li>
                <Link
                  href="/articles/explosion-proof-tools-selection"
                  className="font-bold text-slate-950 underline underline-offset-4 hover:text-emerald-800"
                >
                  防爆工具の選び方｜材質・種類・用途と現場別の比較
                </Link>
                <span className="mt-1 block text-base text-slate-800">
                  火気・爆発危険の文脈で、火花を抑える工具選定を確認する
                </span>
              </li>
            </ul>
            <div className="my-8">
              <ExternalButton href={categoryLinks.weldingPpe}>
                溶接保護具一覧を確認する
              </ExternalButton>
            </div>

            <SectionHeading id="summary">まとめ</SectionHeading>
            <p className="mt-6">
              火花養生では、商品を先に選ぶのではなく、火花の飛散方向と落下経路を先に確認します。局所は定尺、広い床・壁はロール、床で受け止めるならフェルト、高い耐熱性を要する用途はシリカクロス等を仕様確認し、横方向は火花用衝立を組み合わせます。高所・階下では広い養生範囲と上下の監視が必要です。
            </p>
            <p className="mt-4">
              可燃物除去、消火準備、作業中の監視、作業後の点検までを一つの手順にしてください。スパッタシートを「敷けば終わり」にせず、すき間・裏側・階下・破損・固定まで含めて運用します。
            </p>
            <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/articles/welding-spark-protection-sheet-selection/welding-safety-procurement-kit.webp"
                alt="法人担当者がスパッタシート・火花用衝立・溶接保護具の備品計画を確認するイメージ"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            <aside className="my-10 rounded-2xl bg-slate-900 p-6 text-white md:p-8">
              <h2 className="text-2xl font-black">火花養生用品をまとめて確認</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <ExternalButton href={categoryLinks.spatter}>
                  スパッタシート一覧
                </ExternalButton>
                <ExternalButton href={categoryLinks.flame} variant="secondary">
                  耐炎アイテム一覧
                </ExternalButton>
                <ExternalButton
                  href={categoryLinks.weldingPpe}
                  variant="secondary"
                >
                  溶接保護具一覧
                </ExternalButton>
              </div>
            </aside>

            <section
              aria-labelledby="sources"
              className="my-12 rounded-xl border border-slate-200 p-5 text-sm leading-7 text-slate-800"
            >
              <h2 id="sources" className="font-black text-slate-950">
                主な参考情報
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <a
                    href="https://jsite.mhlw.go.jp/tokyo-roudoukyoku/content/contents/000540931.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    東京消防庁「工事中の防火管理」
                  </a>
                </li>
                <li>
                  <a
                    href="https://jsite.mhlw.go.jp/yamaguchi-roudoukyoku/library/yamaguchi-roudoukyoku/kikaku/03LSI2910_1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    徳山労働基準監督署「溶接作業等を安全に」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jtccm.or.jp/exam/quality/fireproof/06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    建材試験センター「建築工事用シートの難燃性試験」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.orange-book.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    TRUSCO オレンジブック各製品情報
                  </a>
                </li>
              </ul>
              <p className="mt-4">
                現場の法令・条例・元請ルール、メーカー取扱説明書、作業計画を優先してください。
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
