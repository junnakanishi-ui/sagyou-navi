import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/work/site-header';
import { SiteFooter } from '@/components/work/site-footer';
import { articleCls as cls } from '@/lib/article-typography';

const siteUrl = 'https://www.sagyou-navi.com';
const slug = 'workshop-odor-control-deodorizer';
const pageUrl = `${siteUrl}/articles/${slug}`;
const title = '作業場の臭い対策｜塗料・接着剤・薬品臭に業務用脱臭機を選ぶ方法【2026年版】';
const description =
  '作業場にこもる塗料・接着剤・シンナー・薬品などの臭い対策を、発生源対策、換気、業務用脱臭機の順で解説。中型可搬式Magic Box-Mと小型Cube PROの違い、必要風量、フィルター、設置場所、導入前チェックまで整理します。';
const heroImage = `/images/${slug}/workshop-odor-control-hero.jpg`;

function addUtm(url: string) {
  return `${url}${url.includes('?') ? '&' : '?'}utm_source=sagyou_navi`;
}

const categoryUrl = addUtm(
  'https://item.rakuten.co.jp/crecote-shop/c/0000000043/?l-id=shoptop_shopmenu_categorypage_16',
);

type Product = {
  name: string;
  shortName: string;
  image: string;
  url: string;
  badge: string;
  scale: string;
  odors: string;
  airflow: string;
  weight: string;
  filter: string;
  suitedFor: string;
  check: string;
};

const products: Product[] = [
  {
    name: 'SHUMAN 脱臭機 Magic Box-M 100V フィルター2枚仕様 MA04C',
    shortName: 'Magic Box-M MA04C',
    image: `/images/${slug}/products/ta054138-ma04c.jpg`,
    url: addUtm('https://item.rakuten.co.jp/crecote-shop/ta054138-ma04c/'),
    badge: '主力・中型可搬式',
    scale: '広めの作業場・保管庫・製造工程',
    odors: '塗料、シンナー、接着剤、製造工程臭、薬品・材料臭など',
    airflow: '60〜600m³/h',
    weight: '8.6kg',
    filter: '別売。臭いに合わせて純正フィルターを選定',
    suitedFor:
      '家庭用では能力が足りず、大型固定設備ほどではない現場。工程ごとに設置場所を変えたい会社。',
    check:
      '局所排気・換気の代替にはしない。フィルター費用、設置位置、移動経路を事前確認。',
  },
  {
    name: 'SHUMAN 脱臭機 Cube PRO シルバー MA06S',
    shortName: 'Cube PRO シルバー',
    image: `/images/${slug}/products/ta052909-ma06s.jpg`,
    url: addUtm('https://item.rakuten.co.jp/crecote-shop/ta052909-ma06s/'),
    badge: '小型・有機溶剤臭特化',
    scale: '作業台周辺・小規模工房・目安6畳まで',
    odors: 'トルエン、キシレン、スチレン、アセトン、塗料、接着剤',
    airflow: '87m³/h',
    weight: '1.1kg',
    filter: '取付用・交換用の2枚付属',
    suitedFor: '小物接着、試作、模型、ネイルなど、発生源が小さい作業。',
    check: '広い作業場や複数工程では能力不足になる可能性がある。',
  },
  {
    name: 'SHUMAN 脱臭機 Cube PRO ストーン MA06ST',
    shortName: 'Cube PRO ストーン',
    image: `/images/${slug}/products/ta052910-ma06st.jpg`,
    url: addUtm('https://item.rakuten.co.jp/crecote-shop/ta052910-ma06st/'),
    badge: '小型・色違い',
    scale: '作業台周辺・小規模工房・目安6畳まで',
    odors: 'トルエン、キシレン、スチレン、アセトン、塗料、接着剤',
    airflow: '87m³/h',
    weight: '1.1kg',
    filter: '取付用・交換用の2枚付属',
    suitedFor: '内装や什器に合わせて本体色を選びたい小規模作業場。',
    check: '性能は他色と共通。色違いを別機種として比較しない。',
  },
  {
    name: 'SHUMAN 脱臭機 Cube PRO ホワイト MA06W',
    shortName: 'Cube PRO ホワイト',
    image: `/images/${slug}/products/ta052911-ma06w.jpg`,
    url: addUtm('https://item.rakuten.co.jp/crecote-shop/ta052911-ma06w/'),
    badge: '小型・色違い',
    scale: '作業台周辺・小規模工房・目安6畳まで',
    odors: 'トルエン、キシレン、スチレン、アセトン、塗料、接着剤',
    airflow: '87m³/h',
    weight: '1.1kg',
    filter: '取付用・交換用の2枚付属',
    suitedFor: '明るい作業室、サロン、研究スペースなど。',
    check: '性能は他色と共通。広い空間用ではない。',
  },
  {
    name: 'HotaluX 光触媒除菌脱臭機 HotaluX AIR SP102W',
    shortName: 'HotaluX AIR SP102W',
    image: `/images/${slug}/products/ta053349-sp102w.jpg`,
    url: addUtm('https://item.rakuten.co.jp/crecote-shop/ta053349-sp102w/'),
    badge: '卓上・生産終了品',
    scale: '受付・デスク・パーソナルスペース',
    odors: '身近な空間の臭い。強い工程臭の主力にはしない',
    airflow: '最大0.5m³/min',
    weight: '0.56kg',
    filter: '交換不要。定期的な手入れが必要',
    suitedFor: '会議・受付・個人デスクなど、小さな空間の補助対策。',
    check: 'メーカー公式では2023年12月26日生産終了。工程臭対策の主力機ではない。',
  },
];

const heroProduct = products[0];

const references = [
  {
    label: 'SHUMAN Magic Box-M MA04C 公式製品情報',
    url: 'https://www.shuman.co.jp/lineup/item.php?id=75',
  },
  {
    label: 'SHUMAN Cube PRO MA06S 公式製品情報',
    url: 'https://www.shuman.co.jp/lineup/item.php?id=52',
  },
  {
    label: 'SHUMANの脱臭技術・フィルターに関する公式情報',
    url: 'https://www.shuman.co.jp/feature/',
  },
  {
    label: 'HotaluX AIR SP-102(W) 公式製品情報',
    url: 'https://www.hotalux.com/products/_1833.html?p_encd=06998506',
  },
  {
    label: '厚生労働省「有機溶剤を正しく使いましょう」',
    url: 'https://www.mhlw.go.jp/new-info/kobetu/roudou/gyousei/anzen/dl/120815-01.pdf',
  },
  {
    label: '有機溶剤中毒予防規則',
    url: 'https://www.mhlw.go.jp/web/t_doc?dataId=74090000&dataType=0&pageNo=1',
  },
];

const faq = [
  {
    question: '脱臭機と空気清浄機は何が違いますか？',
    answer:
      '空気清浄機は主にほこりや花粉などの粒子を除去する機器で、脱臭機は臭い成分の処理を主目的とします。強い塗料臭や接着剤臭では、対象臭気に合う業務用脱臭機が比較候補になります。',
  },
  {
    question: '脱臭機があれば換気は不要ですか？',
    answer:
      '不要にはなりません。有機溶剤などを扱う場合は、法令やSDSに従った局所排気・全体換気・保護具が優先です。脱臭機は換気後の残臭や発生源周辺の補助対策として使います。',
  },
  {
    question: 'Magic Box-Mはどのくらいの広さに使えますか？',
    answer:
      'メーカーは畳数ではなく60〜600m³/hの風量を示しています。空間容積だけでなく、臭いの発生量、連続性、設置位置、換気量から判断する必要があります。',
  },
  {
    question: 'Magic Box-Mにフィルターは付属しますか？',
    answer:
      'メーカー公式では付属しないと案内されています。対象臭気に合わせて純正フィルターを別途選定してください。',
  },
  {
    question: 'Cube PROとMagic Box-Mはどちらを選べばよいですか？',
    answer:
      '小さな作業台や6畳程度までの有機溶剤臭ならCube PRO、広めの作業場、資材保管庫、複数工程ならMagic Box-Mを比較しやすくなります。',
  },
  {
    question: '臭いが減れば安全と判断できますか？',
    answer:
      '判断できません。人が感じる臭いの強さと、有害物質の濃度は一致しない場合があります。必要な作業環境測定、換気、保護具を優先してください。',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: 'article',
    siteName: '作業用品ナビ',
    images: [{ url: heroImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [heroImage],
  },
};

function ExternalButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}) {
  const sizeCls =
    size === 'lg'
      ? 'min-h-14 w-full px-6 py-4 text-base sm:text-lg'
      : 'min-h-11 px-5 py-3 text-[15px]';
  const variantCls =
    variant === 'primary'
      ? 'bg-orange-600 text-white hover:bg-orange-700'
      : 'border border-gray-900 bg-white text-gray-900 hover:bg-amber-50';

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored"
      className={`inline-flex items-center justify-center rounded-xl font-black transition ${sizeCls} ${variantCls}`}
    >
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-contain p-5"
        />
      </div>
      <div className="space-y-3 p-5">
        <ExternalButton href={product.url} size="lg">
          楽天市場で商品を見る →
        </ExternalButton>
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-gray-900">
          {product.badge}
        </span>
        <h3 className="text-xl font-black leading-snug text-gray-900">{product.shortName}</h3>
        <p className={cls.bodySm}>{product.name}</p>
        <ul className="space-y-2 text-[15px] leading-7 text-gray-900">
          <li>
            <strong>向く規模：</strong>
            {product.scale}
          </li>
          <li>
            <strong>対象臭気：</strong>
            {product.odors}
          </li>
          <li>
            <strong>フィルター：</strong>
            {product.filter}
          </li>
        </ul>
        <p className="rounded-xl bg-gray-50 p-4 text-[15px] leading-7 text-gray-900">
          <strong>選ぶ理由：</strong>
          {product.suitedFor}
        </p>
        <p className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-[15px] leading-7 text-gray-900">
          <strong>導入前確認：</strong>
          {product.check}
        </p>
      </div>
    </article>
  );
}

function FeaturedHeroProduct({ product }: { product: Product }) {
  return (
    <section className="overflow-hidden rounded-3xl border-2 border-orange-500 bg-white shadow-md">
      <div className="border-b border-orange-200 bg-orange-50 px-5 py-4 sm:px-8">
        <p className="text-sm font-black tracking-wide text-orange-900">
          この記事の主力候補
        </p>
        <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">
          SHUMAN Magic Box-M MA04C
        </h2>
        <p className="mt-2 text-[15px] leading-7 text-gray-900">
          家庭用では能力が足りず、固定式大型設備までは必要ない作業場向けの
          <mark className={cls.mark}>中型可搬式脱臭機</mark>です。
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(280px,0.9fr)_1.1fr]">
        <div className="border-b border-gray-200 bg-gray-50 p-5 lg:border-b-0 lg:border-r lg:p-8">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-contain p-6"
              priority
            />
          </div>
          <div className="mt-5 space-y-3">
            <ExternalButton href={product.url} size="lg">
              楽天市場で Magic Box-M を見る →
            </ExternalButton>
            <p className="text-center text-sm font-bold text-gray-900">
              AC100V ／ 消費電力58W ／ 風量60〜600m³/h ／ 重量8.6kg
            </p>
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-8">
          <div>
            <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-900">
              {product.badge}
            </span>
            <p className="mt-3 text-[15px] leading-7 text-gray-900">{product.name}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'AC100V',
              '消費電力58W',
              '風量60〜600m³/h',
              '重量8.6kg',
              '金属製ボディ',
              'ダクト仕様対応可',
            ].map((spec) => (
              <span
                key={spec}
                className="rounded-lg bg-amber-200 px-3 py-2 text-sm font-black text-gray-900"
              >
                {spec}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-black text-gray-900">向く会社・現場</h3>
            <ul className="mt-3 space-y-2 text-[15px] leading-7 text-gray-900">
              <li>・臭いの発生場所が日によって変わる</li>
              <li>・家庭用空気清浄機では能力が足りない</li>
              <li>・資材保管庫、塗装台、接着工程へ移動して使いたい</li>
              <li>・固定式の大型設備を入れる前に補助機器を検討したい</li>
              <li>・臭いに合わせてフィルターを選びたい</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-rose-300 bg-rose-50 p-5">
            <h3 className="text-lg font-black text-rose-950">購入時の最重要確認</h3>
            <p className="mt-2 text-[15px] leading-7 text-gray-900">
              MA04Cはフィルター2枚仕様ですが、メーカー公式では
              <strong>本体にフィルターは付属しない</strong>
              と案内されています。対象臭気に合う純正フィルターと費用を確認してから導入してください。
              交換目安は約3カ月〜1年です。局所排気・換気の代替としては扱いません。
            </p>
          </div>

          <ExternalButton href={product.url} size="lg">
            仕様を確認して楽天市場で購入する →
          </ExternalButton>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 border-l-4 border-gray-900 pl-3 text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function ProductTableCell({ product }: { product: Product }) {
  return (
    <div className="flex min-w-[15rem] flex-col gap-3">
      <a
        href={product.url}
        target="_blank"
        rel="nofollow sponsored"
        className="group flex items-start gap-3 text-gray-900 no-underline"
      >
        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <Image
            src={product.image}
            alt={`${product.shortName}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5"
          />
        </span>
        <span className="min-w-0 space-y-1">
          <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-gray-900">
            {product.badge}
          </span>
          <span className="block font-black leading-6 group-hover:underline">
            {product.shortName}
          </span>
          <span className="block text-xs leading-5 text-gray-900">{product.name}</span>
        </span>
      </a>
      <ExternalButton href={product.url}>楽天で見る →</ExternalButton>
    </div>
  );
}

export default function ArticlePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [heroImage],
    datePublished: '2026-07-27',
    dateModified: '2026-07-27',
    author: { '@type': 'Organization', name: '作業用品ナビ編集部' },
    publisher: { '@type': 'Organization', name: '作業用品ナビ' },
    mainEntityOfPage: pageUrl,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: '記事一覧', item: `${siteUrl}/articles` },
      { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-gray-50 text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <div className="mx-auto max-w-[850px] px-4 py-6 md:px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-800">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-bold underline underline-offset-4">
                  ホーム
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/articles" className="font-bold underline underline-offset-4">
                  記事一覧
                </Link>
              </li>
              <li>/</li>
              <li className="font-bold text-gray-900">作業場の臭い対策</li>
            </ol>
          </nav>

          <article className="space-y-10">
            <header className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-900">
                  作業用品ナビ
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-900">
                  作業環境改善
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-800">
                  更新日：2026-07-27
                </span>
              </div>
              <h1 className={cls.h1}>{title}</h1>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-900">
                看板製作、塗装、自動車補修、樹脂加工、試作工房、研究室などで問題になりやすい塗料・接着剤・シンナー・薬品の臭いを、発生源対策、換気、業務用脱臭機の順で整理します。家庭用では足りず、大型固定設備までは必要ない現場へ向く可搬式中型脱臭機も詳しく解説します。
              </p>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={heroImage}
                  alt="塗料や接着剤を使う作業場で換気と脱臭を行うイメージ"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <section className="rounded-3xl bg-gray-950 p-6 text-white shadow-sm md:p-8">
              <h2 className="text-2xl font-black sm:text-3xl">
                結論｜作業場の臭い対策は「発生源・換気・残臭脱臭」の3段階
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <h3 className="text-lg font-black">対策の順番</h3>
                  <ol className="mt-3 space-y-2 text-[15px] leading-7 text-white">
                    <li>1. 臭いを発生させる材料と工程を特定する</li>
                    <li>2. 密閉、局所排気、全体換気で発散を抑える</li>
                    <li>3. 換気後の残臭を発生源近くで脱臭する</li>
                  </ol>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <h3 className="text-lg font-black">機種の目安</h3>
                  <ul className="mt-3 space-y-2 text-[15px] leading-7 text-white">
                    <li>・広めの作業場・保管庫：中型可搬式</li>
                    <li>・小規模工房・作業台：有機溶剤臭特化の小型機</li>
                    <li>・受付・デスク：卓上型</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-amber-300/40 bg-amber-400/15 p-5 text-[15px] leading-7 text-amber-50">
                <strong>安全上の注意：</strong>
                臭いが弱くなっても、有機溶剤などの有害物質濃度が安全になったとは限りません。SDS、法令、局所排気、作業環境測定、呼吸用保護具を優先し、脱臭機は補助設備として使用してください。
              </div>
            </section>

            <FeaturedHeroProduct product={heroProduct} />

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>作業場の臭いは4タイプに分けて考える</SectionHeading>
              <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${slug}/workshop-odor-source-identification.jpg`}
                  alt="作業場で塗料・接着剤・樹脂・薬品の臭いの発生源を確認するイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {[
                  [
                    '塗料・シンナー・接着剤',
                    '容器の密閉、作業量の最小化、局所排気、全体換気を優先。小空間はCube PRO、広い作業場や保管庫はMagic Box-Mを比較。',
                  ],
                  [
                    '樹脂・ゴム・加工材料',
                    '加熱、切削、接着、乾燥工程から連続して発生する場合は、発生源を囲い局所排気へつなぐことも検討。',
                  ],
                  [
                    '薬品・研究材料',
                    'SDS、曝露限界、ドラフトや局所排気の必要性を先に確認。脱臭機は必要設備を整えた後の補助。',
                  ],
                  [
                    '保管庫・作業後の残臭',
                    '汚れたウエス、付着した材料、容器の閉め忘れを除去し、清掃・換気後に残る臭いを処理。',
                  ],
                ].map(([heading, text]) => (
                  <div key={heading} className="rounded-2xl border border-gray-300 p-5">
                    <h3 className="text-lg font-black text-gray-900">{heading}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-gray-900">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>換気設備・空気清浄機・業務用脱臭機の違い</SectionHeading>
              <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${slug}/workshop-airflow-ventilation-deodorization.jpg`}
                  alt="局所排気・全体換気・脱臭機の空気の流れを確認するイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
                <table className={cls.table}>
                  <thead>
                    <tr>
                      <th className={cls.th}>設備</th>
                      <th className={cls.th}>主な役割</th>
                      <th className={cls.th}>作業場での位置づけ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cls.td}>
                        <strong>局所排気・換気</strong>
                      </td>
                      <td className={cls.td}>蒸気・ガスを広がる前に捕集し、適切に排出</td>
                      <td className={cls.td}>法令・SDSに応じて最優先</td>
                    </tr>
                    <tr>
                      <td className={cls.td}>
                        <strong>空気清浄機</strong>
                      </td>
                      <td className={cls.td}>ほこり・花粉・粒子状物質の除去が中心</td>
                      <td className={cls.td}>強い工程臭には能力不足の場合がある</td>
                    </tr>
                    <tr>
                      <td className={cls.td}>
                        <strong>業務用脱臭機</strong>
                      </td>
                      <td className={cls.td}>臭い成分をフィルターへ吸着・反応させる</td>
                      <td className={cls.td}>換気後の残臭、発生源周辺の補助対策</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>業務用脱臭機の選び方</SectionHeading>
              <div className="mt-2 space-y-6">
                {[
                  [
                    '1. 臭いの種類',
                    '塗料、接着剤、シンナー、樹脂、薬品、資材臭など、何の臭いかを整理します。フィルター式は対象臭気との適合が最重要です。',
                  ],
                  [
                    '2. 風量と発生量',
                    '最大風量だけでなく、臭いが一時的か連続的か、発生源へ近づけられるかで判断します。強風で臭いを周囲へ広げないよう、低風量から調整します。',
                  ],
                  [
                    '3. 可搬性',
                    '工程が変わる現場では移動できる機種が便利です。Magic Box-Mは8.6kg、Cube PROは1.1kgで、必要な場所へ動かす運用に向きます。',
                  ],
                  [
                    '4. フィルターと保守',
                    '付属有無、交換周期、再生対応、廃棄方法を確認します。本体価格だけでなく、フィルター費用を年間予算へ含めます。',
                  ],
                  [
                    '5. ダクト接続',
                    '発生源へ本体を近づけられない場合はダクト対応が役立ちます。Magic Box-Mはオプションフランジでダクト仕様を検討できます。',
                  ],
                ].map(([heading, text]) => (
                  <div key={heading}>
                    <h3 className={cls.h3}>{heading}</h3>
                    <p className={cls.body}>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>Cube PROは小規模な塗料・接着剤作業向け</SectionHeading>
              <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${slug}/small-workbench-solvent-odor-control.jpg`}
                  alt="小規模な作業台で塗料や接着剤の臭いを局所脱臭するイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <p className={`${cls.body} mt-6`}>
                Cube PROは、有機溶剤系の臭いに特化した小型業務用脱臭機です。シルバー、ストーン、ホワイトは色違いで、基本仕様は共通です。風量87m³/h、目安6畳まで、1.1kgで、作業台の近くに置きやすい機種です。広い作業場や資材保管庫にはMagic
                Box-M、小さな発生源にはCube PROという分け方がわかりやすくなります。
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {products.slice(1, 4).map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>商品サムネ付き比較表</SectionHeading>
              <p className={cls.body}>
                リンクは商品サムネ直下に置いています。スマートフォンでも横スクロールせずに購入導線へ進めます。
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
                <table className={`${cls.table} min-w-[880px]`}>
                  <thead>
                    <tr>
                      <th className={cls.th}>商品</th>
                      <th className={cls.th}>規模・用途</th>
                      <th className={cls.th}>風量</th>
                      <th className={cls.th}>重量</th>
                      <th className={cls.th}>フィルター</th>
                      <th className={cls.th}>購入前確認</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.name} className="align-top">
                        <td className={cls.td}>
                          <ProductTableCell product={product} />
                        </td>
                        <td className={cls.td}>{product.scale}</td>
                        <td className={cls.td}>
                          <mark className={cls.mark}>{product.airflow}</mark>
                        </td>
                        <td className={cls.td}>{product.weight}</td>
                        <td className={cls.td}>{product.filter}</td>
                        <td className={cls.td}>{product.check}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>設置と運用のコツ</SectionHeading>
              <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${slug}/portable-industrial-deodorizer-workshop.jpg`}
                  alt="可搬式の中型脱臭機を臭いの発生源近くへ設置するイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  [
                    '発生源へ近づける',
                    '作業場の中央より、塗装台・接着工程・保管庫出口など、臭いが広がる前の位置へ設置します。',
                  ],
                  [
                    '給気と排気の流れを見る',
                    '換気扇と脱臭機が逆方向へ引っ張り、作業者の顔の前を臭気が通らないよう確認します。',
                  ],
                  [
                    '低風量から調整する',
                    '強風で臭いを拡散させず、発生源との距離を見ながら風量を上げます。',
                  ],
                  [
                    '保守記録を残す',
                    '設置日、対象臭気、運転時間、フィルター交換日、作業者の声を記録します。',
                  ],
                ].map(([heading, text]) => (
                  <div key={heading} className="rounded-2xl border border-gray-300 p-5">
                    <h3 className="text-lg font-black text-gray-900">{heading}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-gray-900">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>よくある失敗</SectionHeading>
              <ul className="mt-2 grid gap-3 md:grid-cols-2">
                {[
                  '芳香剤や消臭スプレーで臭いを上書きする',
                  '局所排気が必要な作業を脱臭機だけで行う',
                  '発生源から遠い場所へ置く',
                  '対象臭気に合わないフィルターを選ぶ',
                  'Magic Box-Mにフィルターが付属すると誤解する',
                  '交換・再生フィルター費用を予算化しない',
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-[15px] font-bold leading-7 text-gray-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>法人導入チェックリスト</SectionHeading>
              <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${slug}/industrial-deodorizer-procurement-meeting.jpg`}
                  alt="作業場の臭い対策として業務用脱臭機を選定するイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="mt-6 grid gap-3">
                {[
                  '臭いが発生する材料名と工程を整理した',
                  'SDSと必要な換気・保護具を確認した',
                  '臭いが一時的か連続発生かを確認した',
                  '発生源近くに機器を置ける',
                  '対応する純正フィルターを確認した',
                  'AC100V電源と移動経路を確認した',
                  'フィルター交換・再生費用を予算化した',
                  '導入前後の臭い・作業者の声を記録する',
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-[15px] leading-7 text-gray-900"
                  >
                    □ {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>FAQ</SectionHeading>
              <div className="mt-2 space-y-4">
                {faq.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-gray-300 p-5">
                    <h3 className={cls.faqQ}>Q. {item.question}</h3>
                    <p className="text-[15px] leading-8 text-gray-900">A. {item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>フィルター交換と保守</SectionHeading>
              <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${slug}/industrial-deodorizer-filter-maintenance.jpg`}
                  alt="業務用脱臭機のフィルター交換と保守を行うイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <p className={`${cls.body} mt-6`}>
                業務用脱臭機の運用では、本体購入価格だけでなく、フィルターの交換周期・費用・再生対応を事前に確認することが重要です。Magic
                Box-Mはフィルター別売で交換目安約3カ月〜1年、Cube PROはフィルター2枚付属で交換目安約2〜6カ月です。
                設置日、対象臭気、運転時間、フィルター交換日を記録すると、次回の予算化と能力判断に役立ちます。
              </p>
            </section>

            <section className="rounded-3xl border border-gray-300 bg-white p-6 shadow-sm md:p-8">
              <SectionHeading>パーソナル空間向けの参考商品</SectionHeading>
              <p className={cls.body}>
                HotaluX AIR SP102Wは、受付、会議室、デスクなどパーソナル空間向けの卓上型です。強い工程臭の主力には向きません。メーカー公式では生産終了品のため、在庫、保守、代替品を確認してから選んでください。
              </p>
              <div className="mt-6 max-w-xl">
                <ProductCard product={products[4]} />
              </div>
            </section>

            <section className="rounded-3xl bg-orange-50 p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
                まとめ｜高額な脱臭機ほど「何を吸わせるか」を先に決める
              </h2>
              <p className={`${cls.body} mt-4`}>
                Magic Box-M MA04Cは、家庭用機器では能力が足りず、固定式大型設備までは必要ない作業場で、臭いの発生場所へ移動して使える点が魅力です。看板製作、塗装、接着、樹脂加工、研究、資材保管など、工程や場所が変わる会社ほど可搬性と風量調整を活かしやすくなります。
              </p>
              <p className={cls.body}>
                ただし、脱臭機は局所排気や換気の代替ではありません。材料、SDS、臭いの発生量、設置位置、フィルター費用を整理し、必要設備の補助として導入してください。
              </p>
              <p className={cls.body}>
                作業用品、測定用品、環境改善用品などをまとめて確認したい方は、CRECOTEの作業用品カテゴリーもあわせてご覧ください。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ExternalButton href={heroProduct.url} size="lg">
                  Magic Box-Mを楽天市場で見る →
                </ExternalButton>
                <ExternalButton href={categoryUrl} variant="secondary" size="lg">
                  作業用品・環境改善用品をまとめて確認する
                </ExternalButton>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-black text-gray-900">参考情報</h2>
              <ul className="mt-4 space-y-3 text-[15px] leading-7">
                {references.map((reference) => (
                  <li key={reference.url}>
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900 underline decoration-orange-300 underline-offset-4 hover:text-orange-800"
                    >
                      {reference.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-black text-gray-900">関連する記事</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <Link
                  href="/articles/factory-breakroom-locker-room-odor-control"
                  className="rounded-2xl border border-gray-300 p-5 text-[15px] font-black text-gray-900 hover:border-orange-400 hover:bg-orange-50"
                >
                  工場の休憩室・更衣室・トイレの臭い対策
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
