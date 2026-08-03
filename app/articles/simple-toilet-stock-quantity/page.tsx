import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";

const slug = "simple-toilet-stock-quantity";
const siteUrl = "https://www.sagyou-navi.com";
const canonicalUrl = `${siteUrl}/articles/${slug}`;
const heroImage = `/images/${slug}/simple-toilet-stock-quantity-hero.webp`;
const UTM =
  "utm_source=sagyou_navi&utm_medium=article&utm_campaign=simple-toilet-stock-quantity";

const title =
  "簡易トイレの備蓄必要数は？人数・日数別の目安と非常用トイレの選び方【2026年版】";
const description =
  "簡易トイレの備蓄必要数を、人数×1日5回×日数で分かりやすく解説。3日・7日分の早見表、本体付きと回数セットの違い、家庭・オフィス・現場向けの選び方まで紹介します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "簡易トイレの備蓄必要数は？【2026年版】",
    description: "3日・7日分の早見表と、非常用トイレの選び方を解説。",
    url: canonicalUrl,
    siteName: "作業用品ナビ",
    type: "article",
    publishedTime: "2026-08-03",
    modifiedTime: "2026-08-03",
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1600,
        height: 900,
        alt: "簡易トイレの備蓄を見直す家庭と法人担当者のイメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "簡易トイレの備蓄必要数は？【2026年版】",
    description: "3日・7日分の早見表と、非常用トイレの選び方を解説。",
    images: [`${siteUrl}${heroImage}`],
  },
};

type Product = {
  id: string;
  name: string;
  badge: string;
  use: string;
  feature: string;
  check: string;
  image: string;
  url: string;
};

type CategoryLink = {
  label: string;
  description: string;
  tone: "main" | "sub";
  url: string;
};

const images = {
  calculation: `/images/${slug}/emergency-toilet-stock-calculation.webp`,
  kitComparison: `/images/${slug}/emergency-toilet-kit-size-comparison.webp`,
  bodySelection: `/images/${slug}/portable-toilet-body-selection.webp`,
  officeWarehouse: `/images/${slug}/office-warehouse-emergency-toilet-stock.webp`,
  privacyRoom: `/images/${slug}/emergency-toilet-privacy-room.webp`,
  checklist: `/images/${slug}/emergency-stock-checklist.webp`,
} as const;

const products: Product[] = [
  {
    id: "p1",
    name: "簡易トイレ マイレット S-100",
    badge: "回数備蓄の基準商品",
    use: "4〜6人の3日備蓄、10人未満の事務所",
    feature: "100回分の定番。必要数から逆算しやすい容量。",
    check: "人数×日数×1日5回で足りるか確認",
    image: `/images/${slug}/products/6300060734.webp`,
    url: `https://www.gc-select.com/products/6300060734?${UTM}`,
  },
  {
    id: "p2",
    name: "簡易トイレ マイレット S-500",
    badge: "大人数向け",
    use: "30人前後の3日備蓄、拠点在庫",
    feature: "500回分。学校や法人拠点の一括備蓄向け。",
    check: "保管スペースと棚卸し担当を決める",
    image: `/images/${slug}/products/6300060735.webp`,
    url: `https://www.gc-select.com/products/6300060735?${UTM}`,
  },
  {
    id: "p3",
    name: "トイレストック 50回分",
    badge: "小規模備蓄",
    use: "1〜3人世帯、車載、宿直用",
    feature: "50回分で小規模備蓄の入口にしやすい。",
    check: "3日分に足りるか確認",
    image: `/images/${slug}/products/6300072092.webp`,
    url: `https://www.gc-select.com/products/6300072092?${UTM}`,
  },
  {
    id: "p4",
    name: "トイレストック 防臭袋付 30回用",
    badge: "防臭重視",
    use: "少人数事務所、避難スペース",
    feature: "防臭袋付きで臭気対策を意識しやすい。",
    check: "回数と防臭袋の枚数が合うか確認",
    image: `/images/${slug}/products/6300072007.webp`,
    url: `https://www.gc-select.com/products/6300072007?${UTM}`,
  },
  {
    id: "p5",
    name: "抗菌消臭 緊急トイレ 100回分",
    badge: "100回分候補",
    use: "家庭・オフィスの基準備蓄",
    feature: "抗菌消臭を重視した100回分。",
    check: "何人で何日使うかを確認",
    image: `/images/${slug}/products/6300088228.webp`,
    url: `https://www.gc-select.com/products/6300088228?${UTM}`,
  },
  {
    id: "p6",
    name: "非常用簡易トイレ 80回セット",
    badge: "中容量",
    use: "4〜5人家庭、部署備蓄",
    feature: "4人家族の3日備蓄に近い容量。",
    check: "余裕率20%を見込むか確認",
    image: `/images/${slug}/products/6300062351.webp`,
    url: `https://www.gc-select.com/products/6300062351?${UTM}`,
  },
  {
    id: "p7",
    name: "非常用トイレ用 凝固剤 60回分",
    badge: "補充用",
    use: "本体がある家庭・オフィス",
    feature: "回数だけ追加したいときに便利。",
    check: "袋や本体の有無を確認",
    image: `/images/${slug}/products/6300075562.webp`,
    url: `https://www.gc-select.com/products/6300075562?${UTM}`,
  },
  {
    id: "p8",
    name: "簡易トイレ ベンリートイレ",
    badge: "本体付き",
    use: "オフィス、現場事務所、避難所",
    feature: "便器・便座の確保に向く本体候補。",
    check: "回数セットを別で確保しているか確認",
    image: `/images/${slug}/products/6300004290.webp`,
    url: `https://www.gc-select.com/products/6300004290?${UTM}`,
  },
  {
    id: "p9",
    name: "簡易トイレ マイペール",
    badge: "本体付き",
    use: "少人数オフィス、家庭",
    feature: "バケツ型で収納しやすい。",
    check: "収納場所と座面高さを確認",
    image: `/images/${slug}/products/6300060742.webp`,
    url: `https://www.gc-select.com/products/6300060742?${UTM}`,
  },
  {
    id: "p10",
    name: "MOSHISONA 段ボールトイレ（災害トイレ10回分）",
    badge: "本体＋少量回数",
    use: "初動用、家庭の追加備蓄",
    feature: "本体と10回分の初動セット。",
    check: "長期備蓄なら追加の回数セットを準備",
    image: `/images/${slug}/products/6300065861.webp`,
    url: `https://www.gc-select.com/products/6300065861?${UTM}`,
  },
  {
    id: "p11",
    name: "ワンタッチルーム2＆トイレセット",
    badge: "プライバシー対策",
    use: "屋外、現場、避難所",
    feature: "目隠し空間まで一緒に確保したいときに便利。",
    check: "設置スペースと回数セットの有無を確認",
    image: `/images/${slug}/products/6300062064.webp`,
    url: `https://www.gc-select.com/products/6300062064?${UTM}`,
  },
  {
    id: "p12",
    name: "非常用 折りたたみ式簡易トイレ グレー",
    badge: "省スペース本体",
    use: "家庭、車載、防災倉庫",
    feature: "折りたたみ収納しやすい本体。",
    check: "耐荷重と収納寸法を確認",
    image: `/images/${slug}/products/6300075552.webp`,
    url: `https://www.gc-select.com/products/6300075552?${UTM}`,
  },
  {
    id: "p13",
    name: "1台5役！折りたたみ簡易トイレ",
    badge: "多用途",
    use: "防災、車中泊、アウトドア兼用",
    feature: "防災専用品以外の用途も想定しやすい。",
    check: "普段使いとの両立が必要か確認",
    image: `/images/${slug}/products/6300098394.webp`,
    url: `https://www.gc-select.com/products/6300098394?${UTM}`,
  },
];

const categoryLinks: CategoryLink[] = [
  {
    label: "簡易トイレをまとめて見る",
    description: "10回〜500回まで、容量別に比較しやすい一覧",
    tone: "main",
    url: `https://www.gc-select.com/pages/search-results-page?q=%E7%B0%A1%E6%98%93%E3%83%88%E3%82%A4%E3%83%AC&${UTM}`,
  },
  {
    label: "災害対策品を見る",
    description: "トイレ以外の防災備蓄品もあわせて確認",
    tone: "sub",
    url: `https://www.gc-select.com/collections/%E5%AE%89%E5%85%A8%E6%A9%9F%E6%9D%90%E7%94%A8%E5%93%81-%E7%81%BD%E5%AE%B3%E5%AF%BE%E7%AD%96?${UTM}`,
  },
  {
    label: "防災セットを見る",
    description: "拠点・車載向けのセット備蓄を確認",
    tone: "sub",
    url: `https://www.gc-select.com/pages/search-results-page?q=%E9%98%B2%E7%81%BD%E3%82%BB%E3%83%83%E3%83%88&${UTM}`,
  },
];

const householdTable = [
  ["1人", "15回", "35回", "30〜50回分"],
  ["2人", "30回", "70回", "50〜80回分"],
  ["4人", "60回", "140回", "80〜100回分 + 追加"],
  ["5人", "75回", "175回", "100回分 + 追加"],
];

const corporateTable = [
  ["10人", "150回", "350回", "200回〜400回"],
  ["20人", "300回", "700回", "350回〜800回"],
  ["30人", "450回", "1050回", "500回〜1100回"],
  ["50人", "750回", "1750回", "800回〜1800回"],
];

const faqs = [
  {
    q: "1人あたり何回分必要ですか？",
    a: "基本は1日5回が目安です。3日分なら15回、7日分なら35回を基準に考えます。",
  },
  {
    q: "3日分と7日分のどちらを備えるべきですか？",
    a: "最低限は3日分を基準にしつつ、余裕があれば7日分まで広げると安心です。法人では帰宅困難者や来客も考慮すると計画しやすくなります。",
  },
  {
    q: "本体は人数分必要ですか？",
    a: "通常は不要です。重要なのは回数セットの総量で、本体は家庭なら1〜2台、法人なら規模に応じて複数台を用意する考え方が現実的です。",
  },
  {
    q: "家庭と会社で必要数の考え方は違いますか？",
    a: "基本式は同じですが、会社では来客、派遣スタッフ、帰宅困難者、夜勤者なども考慮する必要があります。",
  },
  {
    q: "凝固剤だけの備蓄でも大丈夫ですか？",
    a: "既存便器や本体を活用できる前提なら有効です。ただし袋、本体、目隠し、使用後の処理動線まで合わせて考える必要があります。",
  },
];

const relatedArticles = [
  {
    href: "/articles/business-disaster-stockpile-checklist",
    label: "事業所の防災備蓄チェックリスト｜72時間・帰宅困難者対策・BCP対応",
  },
  {
    href: "/articles/office-disaster-prevention-supplies",
    label: "会社の防災用品リスト｜オフィス・店舗・現場で備えたい備蓄品と選び方",
  },
  {
    href: "/articles/construction-site-safety-checklist",
    label: "建設現場の安全チェックリスト",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: [`${siteUrl}${heroImage}`],
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
  author: {
    "@type": "Organization",
    name: "作業用品ナビ編集部",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "作業用品ナビ",
    url: siteUrl,
  },
  mainEntityOfPage: canonicalUrl,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "記事一覧",
      item: `${siteUrl}/articles`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "簡易トイレの備蓄必要数は？",
      item: canonicalUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

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

function Ul({ children }: { children: ReactNode }) {
  return <ul className={cls.list}>{children}</ul>;
}

function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-4 list-decimal space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900">
      {children}
    </ol>
  );
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    </figure>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
      <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">
        {product.badge}
      </span>
      <div className="mt-4 grid gap-5 md:grid-cols-[180px_1fr]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image
            src={product.image}
            alt={`${product.name}の商品画像`}
            width={720}
            height={540}
            className="h-full min-h-40 w-full object-contain p-3"
          />
        </div>
        <div>
          <h3 className="text-lg font-black text-gray-900">{product.name}</h3>
          <dl className="mt-4 space-y-3 text-[15px] leading-7 text-gray-900">
            <div>
              <dt className="font-bold">向く人数・用途</dt>
              <dd>{product.use}</dd>
            </div>
            <div>
              <dt className="font-bold">特徴</dt>
              <dd>{product.feature}</dd>
            </div>
            <div>
              <dt className="font-bold">購入前確認</dt>
              <dd>{product.check}</dd>
            </div>
          </dl>
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-5 inline-flex rounded-lg bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            商品を見る
          </a>
        </div>
      </div>
    </article>
  );
}

function CategoryCard({ item }: { item: CategoryLink }) {
  const main = item.tone === "main";
  return (
    <a
      href={item.url}
      target="_blank"
      rel="nofollow sponsored"
      className={`rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 ${
        main
          ? "border-orange-300 bg-orange-50 hover:bg-orange-100"
          : "border-gray-300 bg-white hover:border-gray-900"
      }`}
    >
      <span
        className={`text-base font-bold ${main ? "text-orange-800" : "text-gray-900"}`}
      >
        {item.label}
      </span>
      <span className="mt-2 block text-sm leading-6 text-gray-900">
        {item.description}
      </span>
    </a>
  );
}

export default function Page() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <nav aria-label="パンくず" className="text-sm text-gray-800">
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
              <li>簡易トイレの備蓄必要数は？</li>
            </ol>
          </nav>
        </div>

        <article>
          <header className="border-y border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-bold text-orange-800">
                2026年8月3日 公開
              </p>
              <h1 className={cls.h1}>{title}</h1>
              <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 ${cls.meta}`}>
                <span>作業用品ナビ編集部</span>
                <time dateTime="2026-08-03">公開・更新：2026年8月3日</time>
                <span>読了目安：約18分</span>
              </div>
              <P>
                簡易トイレの備蓄は「何個」ではなく「何回分」で考えるのが基本です。この記事では、
                <Mark>人数×1日5回×日数</Mark>
                で必要数を計算し、家庭、オフィス、現場、倉庫に合う備蓄計画と商品選びを分かりやすく整理します。
              </P>
              <SectionImage
                src={heroImage}
                alt="簡易トイレの備蓄を見直す家庭と法人担当者のイメージ"
              />
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <section className="rounded-2xl border border-gray-900 bg-gray-50 p-6">
              <h2 className="text-xl font-black text-gray-900 sm:text-2xl">
                AEO回答：簡易トイレは何回分備えればいい？
              </h2>
              <P>
                簡易トイレの備蓄必要数は、
                <Mark>人数 × 1日5回 × 備蓄日数</Mark>
                が基本目安です。たとえば4人家族で3日分なら
                <Mark>60回分</Mark>、7日分なら
                <Mark>140回分</Mark>
                。法人や現場では来客や帰宅困難者も考えて、さらに
                <Mark>10〜20%の余裕</Mark>
                を見ておくと運用しやすくなります。本体は人数分そろえる必要はなく、回数セットを優先しつつ、家庭なら1〜2台、法人なら規模に応じて複数台を確保する考え方が現実的です。
              </P>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {categoryLinks.map((item) => (
                  <CategoryCard key={item.url} item={item} />
                ))}
              </div>
            </section>

            <H2 id="calculation">簡易トイレの備蓄必要数はどう計算する？</H2>
            <SectionImage
              src={images.calculation}
              alt="人数と日数をもとに簡易トイレの必要数を考えるイメージ"
            />
            <P>
              必要回数は <Mark>人数 × 1日5回 × 備蓄日数</Mark>{" "}
              で考えると分かりやすいです。1日5回は、一般的な防災備蓄で使いやすい基準値です。実際には高齢者や子ども、体調不良、夏場の水分摂取増、帰宅困難者などで回数が増えることもあるため、
              <Mark>10〜20%程度の余裕</Mark>を見ておくと安心です。
            </P>
            <div className="my-6 rounded-2xl border border-gray-300 bg-gray-50 p-5">
              <p className="text-lg font-black text-gray-900">計算式</p>
              <p className="mt-3 text-xl font-black text-gray-900 sm:text-2xl">
                必要回数 = 人数 × 1日5回 × 備蓄日数
              </p>
              <Ul>
                <li>1人で3日分：15回分</li>
                <li>4人家族で3日分：60回分</li>
                <li>10人の事務所で3日分：150回分</li>
                <li>30人の拠点で3日分：450回分</li>
                <li>4人家族で7日分：140回分</li>
              </Ul>
            </div>

            <H2 id="quick-table">3日・7日分の早見表</H2>
            <H3>家庭・小規模備蓄の目安</H3>
            <div className="my-6 overflow-x-auto">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>人数</th>
                    <th className={cls.th}>3日分</th>
                    <th className={cls.th}>7日分</th>
                    <th className={cls.th}>余裕を見たおすすめ</th>
                  </tr>
                </thead>
                <tbody>
                  {householdTable.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className={cls.td}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <H3>オフィス・現場・倉庫の目安</H3>
            <div className="my-6 overflow-x-auto">
              <table className={cls.table}>
                <thead>
                  <tr>
                    <th className={cls.th}>拠点人数</th>
                    <th className={cls.th}>3日分</th>
                    <th className={cls.th}>7日分</th>
                    <th className={cls.th}>余裕込みの目安</th>
                  </tr>
                </thead>
                <tbody>
                  {corporateTable.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={`${row[0]}-${cell}`} className={cls.td}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              法人では「社員数だけ」ではなく、来訪者、派遣スタッフ、夜勤者、帰宅困難者も考えたほうが安全です。備蓄全体の考え方は
              <Link
                href="/articles/business-disaster-stockpile-checklist"
                className="font-bold underline underline-offset-4"
              >
                事業所の防災備蓄チェックリスト
              </Link>
              もあわせて確認してください。
            </P>

            <H2 id="products-volume">記事前半で見ておきたい容量別商品</H2>
            <SectionImage
              src={images.kitComparison}
              alt="10回分から100回分までの簡易トイレ備蓄を比較するイメージ"
            />
            <P>
              必要数を把握したら、次は回数セットの容量を見ていきます。
              <Mark>10回・30回</Mark>は追加備蓄や初動用、
              <Mark>50回</Mark>は少人数向け、<Mark>80〜100回</Mark>
              は家庭や小規模オフィス向け、<Mark>500回</Mark>
              は法人拠点向けという見方をすると選びやすくなります。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="body-vs-kit">回数セットと本体付き簡易トイレの違い</H2>
            <SectionImage
              src={images.bodySelection}
              alt="本体付き簡易トイレを選ぶイメージ"
            />
            <P>
              簡易トイレ選びで大切なのは、「回数セット」と「本体」を分けて考えることです。回数セットは何人分・何日分もつかを決めるもので、本体はどこでどう使うかを決めるものです。本体は人数分なくても、順番に使える運用なら問題ないケースが多いです。
            </P>
            <H3>回数セットが向く人</H3>
            <Ul>
              <li>既存の便器を使える想定がある</li>
              <li>本体は別で持っている</li>
              <li>まず必要回数を確保したい</li>
              <li>コストと保管スペースを抑えたい</li>
            </Ul>
            <H3>本体付きが向く人</H3>
            <Ul>
              <li>屋外や避難所でも使えるようにしたい</li>
              <li>便器自体が使えない可能性がある</li>
              <li>会社・現場・倉庫に独立したトイレスペースを作りたい</li>
              <li>収納性や組立性も重視したい</li>
            </Ul>
            <div className="mt-6 grid gap-5">
              {products.slice(6, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="by-place">家庭・オフィス・現場・倉庫の選び方</H2>
            <SectionImage
              src={images.officeWarehouse}
              alt="オフィスや倉庫で簡易トイレを備蓄するイメージ"
            />
            <H3>家庭</H3>
            <P>
              4人家族なら3日分60回を基準に、
              <Mark>80〜100回分</Mark>
              を目安にすると不足しにくくなります。本体は1〜2台、防臭性と収納性を優先して選ぶと使いやすいです。
            </P>
            <H3>オフィス</H3>
            <P>
              10人で3日分なら
              <Mark>150回</Mark>、20人なら
              <Mark>300回</Mark>
              が基本です。来客や帰宅困難も考え、総務・防災担当が保管と棚卸しを管理できる容量で構成するのが現実的です。会社全体の備蓄品整理は
              <Link
                href="/articles/office-disaster-prevention-supplies"
                className="font-bold underline underline-offset-4"
              >
                会社の防災用品リスト
              </Link>
              も参考になります。
            </P>
            <H3>工事現場・倉庫</H3>
            <P>
              現場人数が変動する場合は余裕を多めに持ちます。屋外や仮設環境では、本体付き簡易トイレとプライバシー対策まで含めて考えると運用しやすくなります。
            </P>

            <H2 id="privacy">プライバシー対策・補充用品も大切</H2>
            <SectionImage
              src={images.privacyRoom}
              alt="目隠しルーム付きの簡易トイレ運用イメージ"
            />
            <P>
              備蓄では回数セットが優先ですが、実際の運用では目隠し、凝固剤補充、収納性も重要です。特に法人では、使える備蓄にするために運用面まで考えておく必要があります。
            </P>
            <div className="mt-6 grid gap-5">
              {products.slice(10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <H2 id="failures">よくある失敗例</H2>
            <Ol>
              <li>本体だけ買って回数セットが足りない</li>
              <li>10回分や30回分を1箱だけ置いて終わる</li>
              <li>3日分しか想定せず余裕を見ない</li>
              <li>保管期限や棚卸しルールを決めていない</li>
              <li>目隠しや処理動線まで考えていない</li>
            </Ol>

            <H2 id="checklist">法人向け備蓄チェックリスト</H2>
            <SectionImage
              src={images.checklist}
              alt="法人担当者が簡易トイレと防災備蓄を点検するイメージ"
            />
            <Ul>
              <li>在籍人数・来客数・帰宅困難者数を把握している</li>
              <li>3日備蓄か7日備蓄か方針を決めている</li>
              <li>回数セットと本体台数を分けて考えている</li>
              <li>凝固剤・防臭袋・手袋・清掃用品まで含めている</li>
              <li>目隠しや設置場所を考えている</li>
              <li>保管場所と棚卸し時期を決めている</li>
              <li>総務・防災担当・現場責任者の役割分担がある</li>
            </Ul>

            <H2 id="category-cta">カテゴリからまとめて比較したい方へ</H2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categoryLinks.map((item) => (
                <CategoryCard key={`cta-${item.url}`} item={item} />
              ))}
            </div>

            <H2 id="faq">FAQ</H2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border border-gray-300 bg-white p-5"
                >
                  <summary className={`cursor-pointer ${cls.faqQ}`}>
                    {faq.q}
                  </summary>
                  <p className={`mt-3 ${cls.bodySm}`}>{faq.a}</p>
                </details>
              ))}
            </div>

            <H2 id="related">関連記事</H2>
            <Ul>
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </Ul>

            <H2 id="summary">まとめ</H2>
            <P>
              簡易トイレの備蓄必要数は、
              <Mark>人数×1日5回×日数</Mark>
              で考えるのが基本です。家庭なら4人で3日分60回、法人なら10人で3日分150回を基準に、10〜20%の余裕を見て構成すると、実際に使いやすい備蓄になります。回数セットを優先しつつ、本体付き簡易トイレ、プライバシールーム、凝固剤補充を組み合わせて、自社や家庭に合う備蓄計画を作ってみてください。
            </P>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categoryLinks.map((item) => (
                <CategoryCard key={`end-${item.url}`} item={item} />
              ))}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
