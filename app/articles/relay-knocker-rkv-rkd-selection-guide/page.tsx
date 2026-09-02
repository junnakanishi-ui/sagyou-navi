import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { articleCls as cls } from "@/lib/article-typography";
import productData from "./product-data.json";

const SLUG = "relay-knocker-rkv-rkd-selection-guide";
const SITE_URL = "https://www.sagyou-navi.com";
const CANONICAL = `${SITE_URL}/articles/${SLUG}`;
const SEO_TITLE =
  "リレーノッカーとは？RKV・RKDの違いと型式の選び方【2026年】";
const H1 =
  "リレーノッカーとは？ホッパーの粉体付着・閉塞に使うRKV/RKDの違いと選び方【2026年版】";
const SHORT_TITLE = "リレーノッカーとは？RKV/RKDの違いと選び方";
const DESCRIPTION =
  "リレーノッカーとは何か、ホッパー・サイロ・シュートの粉体付着や閉塞にどう使うかを解説。EXENのRKVバイブタイプとRKDダイレクトタイプの違い、平面/曲面取付、RKV20P・RKV30PB・RKV60PB・RKD60PBなどの打撃エネルギーを比較し、AOC-1Bによる制御まで購入前に整理します。";
const PUBLISHED = "2026-09-02";
const IMG = (file: string) => `/images/articles/${SLUG}/${file}`;
const PROD = (file: string) => `/images/articles/${SLUG}/products/${file}`;
const EXT_REL = "nofollow sponsored noopener noreferrer";

type CatalogProduct = (typeof productData.products)[number];

const byModel = Object.fromEntries(
  productData.products.map((p) => [p.model, p])
) as Record<string, CatalogProduct>;

const mainCta = productData.cta.main;
const secondaryCtas = productData.cta.secondary;

const rkvProducts = productData.products.filter((p) =>
  p.model.startsWith("RKV")
);
const rkdProducts = productData.products.filter((p) =>
  p.model.startsWith("RKD")
);
const aocProduct = byModel["AOC-1B"];

const featuredModels = [
  "RKV20P",
  "RKV30PB",
  "RKV60PB",
  "RKV60PBR",
  "RKV80PAR",
  "RKD30PB",
  "RKD60PB",
  "RKD80PA",
] as const;

const featuredCardMeta: Record<
  (typeof featuredModels)[number],
  { badge: string; note: string; check: string }
> = {
  RKV20P: {
    badge: "小型バイブ・0.8kg",
    note: "EXENも、小型の粉体容器やシュートなど、従来取り付けにくかった箇所への用途を挙げています。",
    check: "設備の板厚・容積が小さい場合でも、打撃域が過不足ないかメーカー選定を確認してください。",
  },
  RKV30PB: {
    badge: "小～中規模の基本候補",
    note: "打撃エネルギー5.5～13.1N・m。型式比較の起点になりやすいクラスです。",
    check: "平面/曲面の区別は30PB単体ではなく、60以降で型式末尾（PB/PBR/PA/PAR）を確認します。",
  },
  RKV60PB: {
    badge: "平面取付・中～大型",
    note: "平面取付用ベースを持つ60クラス。打撃エネルギー20.6～49.0N・m。",
    check: "丸型ホッパーならRKV60PBRなど曲面取付型を検討してください。",
  },
  RKV60PBR: {
    badge: "曲面取付・60クラス",
    note: "RKV60PBと同じ打撃域ですが、曲面取付用ベースのモデルです。",
    check: "「60だから同じ」と購入せず、ホッパーの取付面（平面/曲面）を確認してください。",
  },
  RKV80PAR: {
    badge: "曲面・大きな打撃域",
    note: "45.1～109N・mの80クラス。丸型ホッパーで60より大きな打撃域が必要な場合の候補です。",
    check: "取付構造・補強・落下防止まで含めた設計が重要になります。",
  },
  RKD30PB: {
    badge: "直接打撃・小型",
    note: "RKV30PBと同じ5.5～13.1N・mの打撃域ですが、直接打撃方式です。",
    check: "強さだけでなく、間接打撃か直接打撃かという方式で選び分けます。",
  },
  RKD60PB: {
    badge: "直接打撃・中～大型",
    note: "20.6～49.0N・m。より大きな設備や閉塞対策で、直接打撃方式を選ぶ場合の候補です。",
    check: "RKD60PB以上では補強リブの使用も案内されています。メーカー図面を優先してください。",
  },
  RKD80PA: {
    badge: "直接打撃・大型",
    note: "45.1～109N・mの大型側。機種サイズが大きくなるほど設計確認が重要です。",
    check: "過剰な打撃力は設備への負担や騒音にもつながります。設備条件から決めてください。",
  },
};

const troubleCards = [
  {
    title: "壁面付着",
    body: "ホッパーやシュートの壁面へ粉体が付着し、残留量が増えたり流路が狭くなったりする状態。粘着性・吸湿性の高い粉体で発生しやすく、ノッカーの衝撃による付着解消が検討されやすい代表例です。",
  },
  {
    title: "ブリッジ",
    body: "出口付近で粉体がアーチ状に固まり、その上の粉が流れなくなる状態。リレーノッカーが有効なケースもありますが、粉体によっては振動を加えることでかえって密になり、閉塞が強くなることがあります。",
  },
  {
    title: "ラットホール",
    body: "中央部分だけ流れ、壁側の粉体が残るような状態。小型ホッパーではノッカーが使われる場合もありますが、粉体物性や設備サイズによってはブラスター等の別方式が適する場合もあります。",
  },
  {
    title: "「人が叩けば流れる」はヒント",
    body: "現場でホッパーを叩くと一時的に流れるなら、衝撃が有効である可能性はあります。ただし、どこを叩くか、必要な衝撃、板厚、粉体物性、ホッパー形状で必要なノッカーは変わります。人のハンマー作業をそのまま機械化する感覚だけで型式を決めないでください。",
  },
] as const;

const selectionSteps = [
  {
    step: "STEP1",
    title: "粉体トラブルを特定する",
    body: "壁面付着、排出口閉塞、ブリッジ、ラットホール、シュート残留のどれに近いかを確認します。リレーノッカー以外のフローエイド機器が適する可能性も残しておきます。",
  },
  {
    step: "STEP2",
    title: "RKVかRKDか",
    body: "RKVはベースを介して設備へ衝撃を与える間接打撃型。RKDはピストンの衝撃を対象物へ直接伝えるダイレクト型。既存設備への取付構造、打撃位置、設備設計を踏まえて決めます。",
  },
  {
    step: "STEP3",
    title: "平面取付か曲面取付か",
    body: "RKV60PBやRKV80PAは平面取付用ベースを標準装備するモデル。RKV60PBR / RKV80PARは丸型ホッパーなどの曲面取付用です。円筒・円錐形ホッパーでは末尾の型式まで確認してください。",
  },
  {
    step: "STEP4",
    title: "必要な打撃エネルギーを決める",
    body: "型式が大きくなるほど打撃エネルギーは上がりますが、大きい型式ほど良いわけではありません。設備の板厚・容積・形状・粉体物性に対して過剰な打撃を選ぶと、設備への負担や騒音にもつながります。",
  },
] as const;

const installChecks = [
  {
    title: "1. ノッカーの取付位置",
    body: "小型円錐ホッパー、大型ホッパー、壁面付着、管内付着などで推奨位置は変わります。粉体が実際に付着・閉塞している位置を確認してください。",
  },
  {
    title: "2. ホッパーの板厚・構造",
    body: "打撃を与える以上、設備側の板厚と強度は重要です。型式選定は単純なホッパー容量だけではなく、板厚や設備構造まで含めて行います。",
  },
  {
    title: "3. 補強板・補強リブ",
    body: "EXENは型式ごとに補強板寸法を公開しています。RKD60PB以上などでは補強リブの使用も案内されています。記事を見て自己流で溶接寸法を決めるのではなく、メーカー図面・取扱説明書を使用してください。",
  },
  {
    title: "4. 落下防止",
    body: "メーカーは全機種について、付属の落下防止ワイヤーとシャックルによる固定を案内しています。高所やホッパー上部に取り付ける機器なので、落下防止は必須の確認項目です。",
  },
  {
    title: "5. エア配管・操作",
    body: "通常配管かリレー配管か、操作盤を何にするかも設備設計へ入れます。複数台を取り付ける場合は、AOC-1Bや専用操作盤との組み合わせも確認してください。",
  },
] as const;

const mistakes = [
  {
    title: "「ホッパーが詰まるからノッカー」と即決する",
    body: "粉体トラブルの種類によっては、ブラスター・フルイダイザーなど別方式が合う場合があります。",
  },
  {
    title: "大きい型式なら間違いないと思う",
    body: "過剰な打撃力は設備側への負担を増やします。設備条件からメーカー選定を優先してください。",
  },
  {
    title: "RKVとRKDをサイズだけで比較する",
    body: "同じ30・60・80クラスでも、間接打撃か直接打撃かが違います。",
  },
  {
    title: "PB/PBR、PA/PARを見落とす",
    body: "平面と曲面で取付ベースが変わります。",
  },
  {
    title: "本体だけ買って制御を後から考える",
    body: "打撃回数、複数台制御、電源の有無まで導入前に決める方がスムーズです。",
  },
] as const;

const checkItems = [
  "粉体トラブルは壁面付着・閉塞・ブリッジ・ラットホールのどれか",
  "ノッカー方式が適していることを確認した",
  "RKV / RKDのどちらか",
  "平面 / 曲面取付",
  "ホッパー寸法",
  "板厚",
  "粉体の種類・比重・粘着性",
  "必要な打撃エネルギー",
  "取付台数",
  "取付位置",
  "補強板 / 補強リブ",
  "落下防止",
  "エア供給",
  "操作盤",
  "メーカー図面・選定確認",
] as const;

const faqs = [
  {
    q: "リレーノッカーとは何ですか？",
    a: "圧縮空気でピストンを作動させ、ホッパー・サイロ・シュートなどへ衝撃を与えて粉粒体の付着・閉塞を解消または防止するエアー式ノッカーです。",
  },
  {
    q: "RKVとRKDの違いは何ですか？",
    a: "RKVはピストンがベースを叩き、その衝撃を設備へ伝える間接打撃型。RKDはピストンの衝撃を対象へ直接伝えるダイレクトタイプです。",
  },
  {
    q: "バイブタイプは振動モータと同じですか？",
    a: "同じではありません。RKVはピストンによる瞬間的な打撃をベースから設備へ伝えるノッカーで、連続的な遠心振動を与える振動モータとは原理が異なります。",
  },
  {
    q: "RKV60PBとRKV60PBRの違いは？",
    a: "打撃エネルギー帯は同じ20.6～49.0N・mですが、RKV60PBは平面取付側、RKV60PBRは丸型ホッパーなどの曲面取付側です。",
  },
  {
    q: "RKV80PAとRKV80PARの違いは？",
    a: "どちらも45.1～109N・mの80クラスですが、PAは平面、PARは曲面取付用です。",
  },
  {
    q: "RKV30PBとRKD30PBはどちらが強いですか？",
    a: "公式仕様上の打撃エネルギーはいずれも5.5～13.1N・mです。強さだけでなく、間接打撃か直接打撃かという方式で選び分けます。",
  },
  {
    q: "リレーノッカーはブリッジに必ず効きますか？",
    a: "必ずではありません。粉体物性やホッパー形状によって適する対策は異なります。EXENも粉体トラブルごとにノッカー、ブラスター、フルイダイザー等を使い分けています。",
  },
  {
    q: "AOC-1Bは何をする機器ですか？",
    a: "電源を使わず、エアだけでリレーノッカーの運転・作動回数を制御する簡易操作盤です。リレー配管では最大3台の制御に対応します。",
  },
  {
    q: "リレーノッカーの取付は自社でできますか？",
    a: "取付には設備側の補強、溶接、規定締付トルク、落下防止、エア配管などの確認が必要です。メーカー図面・取扱説明書に従い、適切な技術者が施工してください。",
  },
] as const;

const relatedArticles = [
  {
    href: "/articles/container-bag-selection",
    label: "コンテナバッグの選び方｜容量・形状・排出口の違い",
  },
  {
    href: "/articles/flexible-container-bag-selection",
    label: "フレコンバッグの選び方｜土砂・粉体・廃棄物の用途別",
  },
  {
    href: "/articles/air-blow-automation-chip-mist-control",
    label: "エアブローを自動化する方法｜切粉・切削油の飛散防止",
  },
  {
    href: "/articles/grinder-polishing-dust-control-mask-guide",
    label: "グラインダー・研磨作業の粉じん対策",
  },
] as const;

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: SEO_TITLE,
    description: DESCRIPTION,
    type: "article",
    url: CANONICAL,
    siteName: "作業用品ナビ",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: `${SITE_URL}${IMG("relay-knocker-powder-hopper-hero.webp")}`,
        width: 1600,
        height: 900,
        alt: "粉体ホッパーの付着・閉塞対策を検討する設備保全イメージ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMG("relay-knocker-powder-hopper-hero.webp")}`],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  image: [`${SITE_URL}${IMG("relay-knocker-powder-hopper-hero.webp")}`],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
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

function productImageExists(imageFile: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "images",
      "articles",
      SLUG,
      "products",
      imageFile
    );
    return fs.existsSync(filePath) && fs.statSync(filePath).size > 500;
  } catch {
    return false;
  }
}

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
    </figure>
  );
}

function PrimaryCta({ href, label }: { href: string; label: string }) {
  return (
    <ExtLink
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-600 px-5 py-3 text-center text-[16px] font-extrabold text-white hover:bg-amber-700"
    >
      {label} →
    </ExtLink>
  );
}

function MidCta() {
  return (
    <section className="my-10 rounded-2xl border-2 border-gray-900 bg-gray-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">
        リレーノッカーを型式から比較する
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-100">
        RKVバイブタイプとRKDダイレクトタイプ、平面/曲面取付、打撃エネルギー帯を一覧で確認できます。
      </p>
      <div className="mt-5">
        <ExtLink
          href={mainCta.url}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-[16px] font-extrabold text-gray-950 hover:bg-amber-400"
        >
          {mainCta.label} →
        </ExtLink>
      </div>
    </section>
  );
}

function ProductTableCell({ product }: { product: CatalogProduct }) {
  const hasImage = productImageExists(product.image);
  return (
    <ExtLink
      href={product.url}
      className="group flex min-w-[16rem] items-start gap-3 rounded-lg p-1 no-underline transition hover:bg-gray-50"
    >
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {hasImage ? (
          <Image
            src={PROD(product.image)}
            alt={`${product.model}の商品画像`}
            fill
            sizes="80px"
            className="object-contain p-1.5 transition group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[10px] text-gray-800">
            準備中
          </span>
        )}
      </span>
      <span className="min-w-0 space-y-1">
        <span className="block text-sm font-bold leading-snug text-gray-900 underline decoration-2 underline-offset-4">
          {product.model}
        </span>
        <span className="block text-xs font-bold text-gray-800">
          {product.role}
        </span>
      </span>
    </ExtLink>
  );
}

function ProductCard({
  model,
  priority = false,
}: {
  model: (typeof featuredModels)[number];
  priority?: boolean;
}) {
  const product = byModel[model];
  const meta = featuredCardMeta[model];
  const hasImage = productImageExists(product.image);

  return (
    <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          {hasImage ? (
            <Image
              src={PROD(product.image)}
              alt={`EXEN リレーノッカー ${product.model}の商品画像`}
              width={360}
              height={360}
              priority={priority}
              className="h-auto w-full object-contain p-3"
            />
          ) : (
            <div className="flex aspect-square items-center justify-center text-sm font-medium text-gray-800">
              画像準備中
            </div>
          )}
        </div>
        <div>
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-950">
            {meta.badge}
          </span>
          <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
            {product.model}（{product.type}）
          </h3>
          <p className="mt-2 text-[15px] leading-7 text-gray-900">
            {product.role}
          </p>
          <dl className="mt-4 space-y-2 text-[15px] leading-7 text-gray-900 md:text-[16px]">
            <div>
              <dt className="inline font-bold">打撃エネルギー：</dt>
              <dd className="inline">
                <Mark>{product.specs.energy}</Mark>
              </dd>
            </div>
            {"weight" in product.specs && product.specs.weight ? (
              <div>
                <dt className="inline font-bold">質量：</dt>
                <dd className="inline">
                  <Mark>{product.specs.weight}</Mark>
                </dd>
              </div>
            ) : null}
            {"air" in product.specs && product.specs.air ? (
              <div>
                <dt className="inline font-bold">使用空気量：</dt>
                <dd className="inline">{product.specs.air}</dd>
              </div>
            ) : null}
          </dl>
          <p className="mt-3 text-[15px] leading-7 text-gray-900">{meta.note}</p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-[14px] leading-6 text-gray-900">
            <strong>購入前確認：</strong>
            {meta.check}
          </p>
          <div className="mt-5">
            <PrimaryCta href={product.url} label={`${product.model}を見る`} />
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
        リレーノッカーを型式から比較
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-gray-900">
        型番から入る前に、粉体トラブル・RKV/RKD・平面/曲面・打撃エネルギーを整理したうえで、設備に合う機種を選んでください。
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
              粉体設備 / 閉塞・付着対策 / 2026年9月2日更新
            </div>
            <h1 className={cls.h1}>{H1}</h1>
            <P>
              ホッパーやサイロ、シュートの中で粉体が壁に付着し、流れが悪くなる。出口付近で閉塞し、作業員がハンマーで叩いて流している——こうした現場で検討される機器の一つが
              <Mark>リレーノッカー</Mark>
              です。
            </P>
            <P>
              リレーノッカーは、圧縮空気を使ってピストンを作動させ、設備へ瞬間的な衝撃を与える
              <strong>エアー式ノッカー</strong>
              です。EXENでは、ベースを介して衝撃を伝えるRKVバイブタイプと、対象側へ直接衝撃を与えるRKDダイレクトタイプを展開しています。
            </P>
            <P>
              ただし、
              <Mark>
                「ホッパーが詰まるなら、とりあえず一番強いノッカーを付ければよい」わけではありません。
              </Mark>
              粉体トラブルには、壁面付着、ブリッジ、ラットホール、アーチングなど複数の状態があり、粉体の性質やホッパー形状によっては、振動や衝撃の与え方を誤ると期待した改善が得られない場合もあります。
            </P>
            <Figure
              src={IMG("relay-knocker-powder-hopper-hero.webp")}
              alt="粉体ホッパーの付着・閉塞対策を検討する設備保全イメージ"
              priority
            />
          </header>

          <section className="mt-8 rounded-2xl border-y-4 border-emerald-700 bg-emerald-50 p-6 md:p-8">
            <H2 id="quick-answer">30秒で分かる｜リレーノッカーとは？</H2>
            <P>
              リレーノッカーは、
              <Mark>
                圧縮空気の力でピストンを動かし、ホッパーやサイロ、シュートなどへ瞬間的な打撃を与えて、粉粒体の付着や閉塞を解消・防止するエアー式ノッカー
              </Mark>
              です。
            </P>
            <div className="my-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-2 border-emerald-300 bg-white p-5">
                <p className="text-sm font-bold text-emerald-800">間接打撃</p>
                <h3 className="mt-2 text-xl font-black">RKV バイブタイプ</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  ピストンがベース面を打撃し、その衝撃を設備へ伝える方式。
                </p>
              </div>
              <div className="rounded-xl border-2 border-emerald-300 bg-white p-5">
                <p className="text-sm font-bold text-emerald-800">直接打撃</p>
                <h3 className="mt-2 text-xl font-black">RKD ダイレクトタイプ</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  ピストンの衝撃を対象物へ直接伝える方式。
                </p>
              </div>
            </div>
            <p className={cls.bodySm}>
              選定は
              <Mark>
                粉体トラブル → RKV/RKD → 平面/曲面 → 打撃エネルギー
              </Mark>
              の順で考えると整理しやすくなります。
            </p>
            <div className="mt-5">
              <PrimaryCta href={mainCta.url} label={mainCta.label} />
            </div>
          </section>

          <H2 id="trouble-fit">まず確認｜その粉体トラブルにリレーノッカーが合う？</H2>
          <P>
            商品型式を見る前に、現場で何が起きているかを整理します。EXENは粉体トラブルを、ブリッジ、アーチング、ラットホール、壁面付着などに分けて説明しています。
          </P>
          <Figure
            src={IMG("powder-hopper-flow-problems.webp")}
            alt="ホッパーの壁面付着・ブリッジ・ラットホールなど粉体トラブルのイメージ"
          />
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            {troubleCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border-2 border-gray-300 bg-white p-5"
              >
                <h3 className="text-lg font-black text-gray-900">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <aside className="my-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="text-xl font-black text-gray-900">
              ホッパーが詰まる＝必ずノッカー、ではありません
            </h3>
            <p className="mt-3 text-[16px] leading-8 text-gray-900">
              粉体物性や閉塞の種類によって、ブラスター・フルイダイザーなど別方式が適する場合があります。型式は設備の板厚・形状・容積・粉体条件から
              <Mark>メーカー選定を優先</Mark>
              してください。
            </p>
          </aside>

          <H2 id="rkv-rkd">RKVとRKDの違い｜最初にここを決める</H2>
          <P>
            EXENのリレーノッカーには、RKV（バイブタイプ）とRKD（ダイレクトタイプ）があります。名前だけでは違いが分かりにくいため、原理から整理します。
          </P>
          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div>
              <H3>RKV＝ベースを介した間接打撃</H3>
              <P>
                内部のピストンがノッカーのベース面を打撃します。その衝撃がベースからホッパー壁面などへ伝わり、付着・閉塞した粉粒体へ作用します。
                <Mark>ピストン → ベース → 設備</Mark>
                という間接打撃です。
              </P>
              <Figure
                src={IMG("indirect-impact-knocker-concept.webp")}
                alt="ベースを介して衝撃を伝える間接打撃ノッカーのイメージ"
              />
            </div>
            <div>
              <H3>RKD＝対象物へ直接打撃</H3>
              <P>
                RKDは、ピストンの打撃を対象物へ直接伝える方式です。RKVがベースを介した間接打撃なのに対し、RKDはピストンから対象物へ直接衝撃を伝えるシリーズとして区別されています。
              </P>
              <Figure
                src={IMG("direct-impact-knocker-concept.webp")}
                alt="対象物へ直接衝撃を伝えるダイレクトタイプのイメージ"
              />
            </div>
          </div>
          <P>
            「RKDの方が直接叩くから必ず強い」という選び方はしません。例えば同じ30クラスでは、公式仕様上の打撃エネルギーはRKV30PBとRKD30PBのどちらも
            <Mark>5.5～13.1N・m</Mark>
            です。60クラスでも、RKV60PB/PBRとRKD60PBは
            <Mark>20.6～49.0N・m</Mark>
            です。
            <Mark>シリーズ名より、設備へどう打撃を伝えたいかと必要な打撃域を分けて考える</Mark>
            必要があります。
          </P>
          <MidCta />

          <H2 id="selection-steps">リレーノッカーの選び方｜4ステップ</H2>
          <div className="my-6 space-y-4">
            {selectionSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border-2 border-gray-300 bg-white p-5 md:p-6"
              >
                <p className="text-sm font-bold text-emerald-800">{item.step}</p>
                <h3 className="mt-1 text-xl font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="rkv-compare">RKVバイブタイプを比較</H2>
          <P>今回のExcelに入っているRKVシリーズ7機種を整理します。</P>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[860px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>型式</th>
                  <th className={cls.th}>取付</th>
                  <th className={cls.th}>打撃エネルギー</th>
                  <th className={cls.th}>質量</th>
                  <th className={cls.th}>位置付け</th>
                </tr>
              </thead>
              <tbody>
                {rkvProducts.map((product) => (
                  <tr key={product.model}>
                    <td className={cls.td}>
                      <ProductTableCell product={product} />
                    </td>
                    <td className={cls.td}>{product.type.replace("バイブタイプ", "基本").replace("バイブ・", "")}</td>
                    <td className={cls.td}>
                      <Mark>{product.specs.energy}</Mark>
                    </td>
                    <td className={cls.td}>{product.specs.weight}</td>
                    <td className={cls.td}>{product.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="rkd-compare">RKDダイレクトタイプを比較</H2>
          <div className="my-6 overflow-x-auto rounded-2xl border border-gray-300">
            <table className={`min-w-[760px] ${cls.table}`}>
              <thead>
                <tr>
                  <th className={cls.th}>型式</th>
                  <th className={cls.th}>打撃エネルギー</th>
                  <th className={cls.th}>質量</th>
                  <th className={cls.th}>位置付け</th>
                </tr>
              </thead>
              <tbody>
                {rkdProducts.map((product) => (
                  <tr key={product.model}>
                    <td className={cls.td}>
                      <ProductTableCell product={product} />
                    </td>
                    <td className={cls.td}>
                      <Mark>{product.specs.energy}</Mark>
                    </td>
                    <td className={cls.td}>{product.specs.weight}</td>
                    <td className={cls.td}>{product.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="flat-curved">平面取付と曲面取付を間違えない</H2>
          <P>
            リレーノッカーでは、打撃エネルギーだけ見ていると取付仕様を見落とします。平面側は
            <Mark>RKV60PB / RKV80PA</Mark>
            、曲面側は
            <Mark>RKV60PBR / RKV80PAR</Mark>
            です。丸型ホッパーの外周は曲面なので、メーカーが用意する曲面取付ベースを使うモデルが候補になります。
          </P>
          <Figure
            src={IMG("flat-vs-curved-hopper-mounting.webp")}
            alt="平面取付と丸型ホッパー曲面取付の違いを示すイメージ"
          />

          <H2 id="featured-models">代表型式を用途別に見る</H2>
          <P>
            全11機種は上記比較表に載せています。ここでは小→大、平面→曲面、RKV→RKDを代表させた8機種を詳しく整理します。
          </P>
          <div className="my-6 space-y-6">
            {featuredModels.map((model, index) => (
              <ProductCard
                key={model}
                model={model}
                priority={index === 0}
              />
            ))}
          </div>

          <H2 id="aoc-1b">AOC-1Bとは？電源を使わずリレーノッカーを制御</H2>
          <P>
            リレーノッカー本体だけでなく、打撃のON/OFFや作動間隔をどう制御するかも考える必要があります。AOC-1BはEXENの
            <Mark>エアオペコントローラー</Mark>
            で、ノッカー本体とは別カテゴリの制御機器です。
          </P>
          <Figure
            src={IMG("pneumatic-knocker-control-air-line.webp")}
            alt="リレーノッカーをエア配管とコントローラーで制御するイメージ"
          />
          <article className="rounded-2xl border-2 border-gray-300 bg-white p-5 shadow-sm md:p-6">
            <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                {productImageExists(aocProduct.image) ? (
                  <Image
                    src={PROD(aocProduct.image)}
                    alt="EXEN エアオペコントローラー AOC-1Bの商品画像"
                    width={360}
                    height={360}
                    className="h-auto w-full object-contain p-3"
                  />
                ) : (
                  <div className="flex aspect-square items-center justify-center text-sm font-medium text-gray-800">
                    画像準備中
                  </div>
                )}
              </div>
              <div>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-900">
                  制御機器（ノッカー本体ではない）
                </span>
                <h3 className="mt-3 text-[20px] font-extrabold leading-snug text-gray-900 md:text-[22px]">
                  AOC-1B エアオペコントローラー
                </h3>
                <ul className={cls.list}>
                  <li>
                    <strong>電源不要</strong>——エア供給だけで動作
                  </li>
                  <li>手動バルブ操作後に連続運転、作動回数を調整</li>
                  <li>
                    リレー配管で<strong>最大3台</strong>を制御可能
                  </li>
                  <li>
                    使用圧力{" "}
                    <Mark>{aocProduct.specs.workingPressure}</Mark>、作動{" "}
                    <Mark>{aocProduct.specs.cycles}</Mark>
                  </li>
                </ul>
                <div className="mt-5">
                  <PrimaryCta href={aocProduct.url} label="AOC-1Bを見る" />
                </div>
              </div>
            </div>
          </article>

          <H2 id="install-check">取付前に確認したい5項目</H2>
          <div className="my-6 space-y-4">
            {installChecks.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-300 bg-white p-5"
              >
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="mistakes">よくある選定ミス</H2>
          <div className="my-6 space-y-3">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border-l-4 border-rose-500 bg-rose-50 p-5"
              >
                <h3 className="font-black text-gray-900">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-900">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <H2 id="checklist">購入前チェックリスト</H2>
          <ul className="my-6 space-y-2 rounded-2xl border-2 border-gray-300 bg-gray-50 p-6">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[16px] leading-7 text-gray-900"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-900 bg-white"
                />
                {item}
              </li>
            ))}
          </ul>

          <H2 id="faq">よくある質問</H2>
          <div className="my-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className={cls.faqQ}>{faq.q}</h3>
                <p className={cls.bodySm}>{faq.a}</p>
              </div>
            ))}
          </div>

          <H2 id="summary">まとめ｜リレーノッカーは「型番」より先にトラブルと打撃方式を決める</H2>
          <P>
            リレーノッカーを選ぶときは、RKV20PかRKV30PBかと型番から入りたくなります。しかし正しい順番は、
            <Mark>
              粉体トラブル確認 → ノッカー適否 → RKV/RKD → 平面/曲面 → 打撃エネルギー → 取付・制御
            </Mark>
            です。
          </P>
          <P>
            RKV20Pのような0.8kgの小型モデルから、RKV80PA/PARやRKD80PAのような大きな打撃域まで揃っているからこそ、
            <Mark>「一番強い機種」ではなく設備に合う機種を選ぶ</Mark>
            ことが重要です。購入前に型式と設備条件を整理し、メーカーの選定資料・技術相談も使いながら決めてください。
          </P>

          <FinalCtaBlock />

          <section className="mt-12">
            <h2 className="text-2xl font-black text-gray-900">関連記事</h2>
            <ul className="mt-4 space-y-2">
              {relatedArticles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold text-emerald-800 underline underline-offset-4 hover:text-emerald-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-12 border-t border-gray-300 pt-8 text-sm leading-relaxed text-gray-800">
            運営：
            <a
              href="https://trade-sign.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              株式会社トレード
            </a>
            （グリーンクロスグループ）｜本記事は一般的な情報提供を目的としたものです。型式選定・取付はメーカー図面・取扱説明書・選定資料を優先し、規定外の圧力設定や稼働中設備への施工は行わないでください。価格・在庫・仕様は変動する場合があり、最新情報は各商品ページでご確認ください。
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
