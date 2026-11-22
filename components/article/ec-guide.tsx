import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { EC_GUIDES, EC_GUIDE_DATE, EC_GUIDE_IMAGES, type EcGuideKey } from "@/lib/ec-guides";
import { EcGuideLink } from "./ec-guide-link";
import "@/app/articles/safety-supplies-rental-guide/rental-guide.css";
import "./ec-guide.css";

export type EcProduct = {
  id: string;
  name: string;
  tag: string;
  description: string;
  specs: [string, string][];
  note: string;
};

export function ecGuideMetadata(key: EcGuideKey): Metadata {
  const guide = EC_GUIDES[key];
  const url = `https://sagyou-navi.com/articles/${guide.slug}`;
  return {
    title: { absolute: `${guide.title}｜作業用品ナビ` },
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url, type: "article", locale: "ja_JP", siteName: "作業用品ナビ", publishedTime: `${EC_GUIDE_DATE}T12:00:00+09:00`, modifiedTime: `${EC_GUIDE_DATE}T12:00:00+09:00`, images: [{ url: guide.image }] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [guide.image] },
  };
}

export function EcSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="rental-section"><h2>{title}</h2>{children}</section>;
}

export function EcTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: ReactNode[][] }) {
  return <div className="rental-table-scroll" role="region" aria-label={`${caption}（横にスクロールできます）`} tabIndex={0}><table>
    <caption>{caption}</caption><thead><tr>{headers.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead>
    <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody>
  </table></div>;
}

export function EcProductCard({ guideKey, product, accessory = false }: { guideKey: EcGuideKey; product: EcProduct; accessory?: boolean }) {
  return <div className={`ec-product${accessory ? " ec-accessory" : ""}`} id={`product-${product.id}`}>
    <EcGuideLink guideKey={guideKey} productId={product.id} placement={`image_${product.id}`} className="ec-product-photo">
      <Image src={`${EC_GUIDE_IMAGES}${product.id}.jpg`} alt={product.name} fill sizes="(max-width: 767px) 90vw, 560px" />
      <span className="ec-photo-link">商品詳細へ ↗</span>
    </EcGuideLink>
    <div className="ec-product-copy"><span className="rental-product-tag">{product.tag}</span><h3>{product.name}</h3><p>{product.description}</p>
      <dl>{product.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <p className="ec-product-note"><strong>購入前に確認</strong>{product.note}</p>
      <p className="ec-product-code">GCセレクト品番：{product.id}</p>
      <EcGuideLink guideKey={guideKey} productId={product.id} placement={`button_${product.id}`} className="rental-button ec-product-button">価格・在庫をGCセレクトで見る <span aria-hidden="true">↗</span></EcGuideLink>
    </div>
  </div>;
}

export function EcCollectionCta({ guideKey }: { guideKey: EcGuideKey }) {
  const guide = EC_GUIDES[guideKey];
  return <aside className="rental-cta"><div><p className="rental-eyebrow">GCセレクトで購入条件を確認</p><h2>使う場所に合う商品を探す</h2><p>気になる商品は、サイズ・販売単位・在庫・送料を商品ページで確認できます。掲載例以外も比較したいときは、カテゴリ一覧をご覧ください。</p></div><EcGuideLink guideKey={guideKey} placement="bottom_collection" className="rental-button">{guide.collectionLabel} ↗</EcGuideLink></aside>;
}

export function EcGuide({ guideKey, choices, sections, faq, related, sources, children }: {
  guideKey: EcGuideKey;
  choices: { label: string; text: string; target: string }[];
  sections: [string, string][];
  faq: { q: string; a: string }[];
  related: { title: string; href: string }[];
  sources: { title: string; url: string }[];
  children: ReactNode;
}) {
  const guide = EC_GUIDES[guideKey];
  const url = `https://sagyou-navi.com/articles/${guide.slug}`;
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, image: [`https://sagyou-navi.com${guide.image}`], datePublished: `${EC_GUIDE_DATE}T12:00:00+09:00`, dateModified: `${EC_GUIDE_DATE}T12:00:00+09:00`, mainEntityOfPage: url, inLanguage: "ja-JP", author: { "@type": "Organization", name: "作業用品ナビ編集部", url: "https://sagyou-navi.com/about" }, publisher: { "@type": "Organization", name: "株式会社トレード", url: "https://trade-sign.jp/" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ name: "ホーム", item: "https://sagyou-navi.com" }, { name: "記事一覧", item: "https://sagyou-navi.com/articles" }, { name: guide.shortTitle, item: url }].map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })) },
  ];
  return <><SiteHeader /><main className="rental-guide ec-guide">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <nav className="rental-breadcrumb" aria-label="パンくず"><Link href="/">ホーム</Link><span>/</span><Link href="/articles">記事一覧</Link><span>/</span><span>{guide.shortTitle}</span></nav>
    <article><header className="ec-hero"><div className="ec-hero-copy"><p className="rental-eyebrow">写真と仕様で選ぶ、現場の買い物ガイド</p>
      <h1>{guide.headline.map(phrase => <span className="ec-title-phrase" key={phrase}>{phrase}</span>)}<span className="ec-subhead">{guide.subhead.map(phrase => <span className="ec-title-phrase" key={phrase}>{phrase}</span>)}</span></h1>
      <p className="ec-hero-lead">{guide.description}</p>
      <a href="#products" className="rental-button">写真で商品を比較する ↓</a>
      <EcGuideLink guideKey={guideKey} placement="hero_collection" className="ec-collection-link">{guide.collectionLabel} ↗</EcGuideLink>
      <p className="rental-meta"><time dateTime={EC_GUIDE_DATE}>2026年11月22日</time>公開・情報確認 / {guide.readTime}<br /><Link href="/about">作業用品ナビ編集部・運営者情報</Link></p>
    </div><div className="ec-hero-products" aria-label="掲載する商品の例">{guide.heroProducts.map((p, i) => <EcGuideLink key={p.id} guideKey={guideKey} productId={p.id} placement={`hero_image_${p.id}`} className="ec-hero-tile"><span className="ec-hero-image"><Image src={`${EC_GUIDE_IMAGES}${p.id}.jpg`} alt={p.label} fill preload={i === 0} sizes="(max-width: 767px) 42vw, 260px" /></span><span>{p.label}<span aria-hidden="true"> ↗</span></span></EcGuideLink>)}</div></header>
      <p className="rental-disclosure">運営：株式会社トレード（グリーンクロスグループ）。本記事は関連ECサイト「GCセレクト」の商品を紹介しています。写真・仕様は公式掲載情報に基づきます。価格・在庫・納期はリンク先でご確認ください。</p>
      <div className="rental-intro"><p>{guide.lead}</p></div>
      <nav className="ec-choices" aria-label="使い方から商品を選ぶ">{choices.map(choice => <a href={`#${choice.target}`} key={choice.label}><strong>{choice.label}<span aria-hidden="true">↓</span></strong><span>{choice.text}</span></a>)}</nav>
      <nav className="rental-toc" aria-label="この記事の目次"><p>この記事で分かること</p><ol>{sections.map(([id, title], i) => <li key={id}><a href={`#${id}`}><span>{String(i + 1).padStart(2, "0")}</span>{title}<span aria-hidden="true">↓</span></a></li>)}</ol></nav>
      {children}
      <section className="rental-section rental-faq" id="faq"><h2>購入前によくある質問</h2>{faq.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">＋</span></summary><p>{item.a}</p></details>)}</section>
      <EcCollectionCta guideKey={guideKey} />
      <nav className="rental-related" aria-label="関連記事"><h2>関連する選び方・準備ガイド</h2>{related.map(item => <Link key={item.href} href={item.href}>{item.title}<span aria-hidden="true">→</span></Link>)}</nav>
      <section className="rental-sources"><h2>参照資料・商品情報について</h2><p>2026年11月22日に確認。商品写真と仕様の出典は、各カードからリンクしたGCセレクトの商品ページです。使用場面の整理・数量の計算例は編集部が作成しました。実機による比較試験や利用者の評価に基づくランキングではありません。</p><ul>{sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul></section>
    </article></main><SiteFooter /></>;
}
