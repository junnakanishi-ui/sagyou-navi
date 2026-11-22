import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/work/site-header";
import { SiteFooter } from "@/components/work/site-footer";
import { SafetyGuideLink } from "./safety-guide-link";
import { SAFETY_GUIDES, SAFETY_GUIDE_DATE, type SafetyGuideKey } from "@/lib/safety-guides";
import "@/app/articles/safety-supplies-rental-guide/rental-guide.css";
import "./safety-guide.css";

export function safetyGuideMetadata(key: SafetyGuideKey): Metadata {
  const guide = SAFETY_GUIDES[key];
  const url = `https://sagyou-navi.com/articles/${guide.slug}`;
  // SVG is used in the article, while social cards use a raster photograph.
  const image = guide.image.endsWith(".svg") ? SAFETY_GUIDES.construction.image : guide.image;
  return {
    title: { absolute: `${guide.title}｜作業用品ナビ` },
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url, type: "article", locale: "ja_JP", siteName: "作業用品ナビ", publishedTime: `${SAFETY_GUIDE_DATE}T09:00:00+09:00`, modifiedTime: `${SAFETY_GUIDE_DATE}T09:00:00+09:00`, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.description, images: [image] },
  };
}

export function GuideCta({ guideKey, placement, title, children }: { guideKey: SafetyGuideKey; placement: string; title: string; children: ReactNode }) {
  const guide = SAFETY_GUIDES[guideKey];
  return <aside className="rental-cta">
    <div><p className="rental-eyebrow">グリーンクロスの相談窓口</p><h2>{title}</h2><p>{children}</p></div>
    <SafetyGuideLink destination={guide.destination} article={guide.slug} placement={placement} className="rental-button">{guide.cta} <span aria-hidden="true">↗</span></SafetyGuideLink>
  </aside>;
}

export function GuideSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="rental-section"><p className="rental-eyebrow">{number}</p><h2>{title}</h2>{children}</section>;
}

export function GuideTable({ caption, headers, rows }: { caption: string; headers: string[]; rows: ReactNode[][] }) {
  return <div className="rental-table-scroll" role="region" aria-label={`${caption}（横にスクロールできます）`} tabIndex={0}>
    <table><caption>{caption}</caption><thead><tr>{headers.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody></table>
  </div>;
}

export function SafetyGuide({ guideKey, summary, sections, faq, sources, related, children }: {
  guideKey: SafetyGuideKey;
  summary: string[];
  sections: readonly (readonly [string, string])[];
  faq: { q: string; a: string }[];
  sources: { title: string; url: string }[];
  related: { title: string; href: string }[];
  children: ReactNode;
}) {
  const guide = SAFETY_GUIDES[guideKey];
  const url = `https://sagyou-navi.com/articles/${guide.slug}`;
  const crumbs = [{ name: "ホーム", item: "https://sagyou-navi.com" }, { name: "記事一覧", item: "https://sagyou-navi.com/articles" }, ...(guideKey === "hub" ? [] : [{ name: "安全保安用品の手配", item: `https://sagyou-navi.com/articles/${SAFETY_GUIDES.hub.slug}` }]), { name: guide.shortTitle, item: url }];
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, image: [`https://sagyou-navi.com${guide.image.endsWith(".svg") ? SAFETY_GUIDES.construction.image : guide.image}`], datePublished: `${SAFETY_GUIDE_DATE}T09:00:00+09:00`, dateModified: `${SAFETY_GUIDE_DATE}T09:00:00+09:00`, mainEntityOfPage: url, inLanguage: "ja-JP", author: { "@type": "Organization", name: "作業用品ナビ編集部", url: "https://sagyou-navi.com/about" }, publisher: { "@type": "Organization", name: "株式会社トレード", url: "https://trade-sign.jp/" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })) },
  ];
  return <><SiteHeader /><main className={`rental-guide safety-guide safety-guide-${guideKey}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <nav className="rental-breadcrumb" aria-label="パンくず"><Link href="/">ホーム</Link><span>/</span><Link href="/articles">記事一覧</Link><span>/</span>{guideKey !== "hub" && <><Link href={`/articles/${SAFETY_GUIDES.hub.slug}`}>安全保安用品の手配</Link><span>/</span></>}<span>{guide.shortTitle}</span></nav>
    <article>
      <header className="rental-hero">
        <div className="rental-hero-copy"><p className="rental-eyebrow">工事・イベントの手配ガイド</p><h1>{guide.headline.split("、").map((phrase, i, phrases) => <span className="safety-guide-phrase" key={phrase}>{phrase}{i < phrases.length - 1 ? "、" : ""}</span>)}<span className="safety-guide-subhead">{guide.subhead.split("、").map((phrase, i, phrases) => <span className="safety-guide-phrase" key={phrase}>{phrase}{i < phrases.length - 1 ? "、" : ""}</span>)}</span></h1>
          <p className="rental-hero-lead">{guide.description}</p>
          <SafetyGuideLink destination={guide.destination} article={guide.slug} placement="hero" className="rental-button">{guide.cta} ↗</SafetyGuideLink>
          <p className="rental-meta"><time dateTime={SAFETY_GUIDE_DATE}>2026年11月22日</time>公開・情報確認 / {guide.readTime}<br /><Link href="/about">作業用品ナビ編集部・運営者情報</Link></p>
        </div>
        <figure className="rental-hero-photo"><Image src={guide.image} alt={guide.alt} fill preload sizes="(max-width: 767px) 100vw, 580px" /><figcaption>{guide.caption}</figcaption></figure>
      </header>
      <p className="rental-disclosure">運営：株式会社トレード（グリーンクロスグループ）。本記事は運営・関連サイトのサービスと商品を紹介しています。対応範囲・在庫・納期・費用は各窓口で確認してください。</p>
      <div className="rental-intro"><p>{guide.lead}</p></div>
      <div className="rental-answer"><p className="rental-eyebrow">はじめに押さえたいこと</p><ol>{summary.map(item => <li key={item}>{item}</li>)}</ol></div>
      <nav className="rental-toc" aria-label="この記事の目次"><p>この記事で分かること</p><ol>{sections.map(([id, title], i) => <li key={id}><a href={`#${id}`}><span>{String(i + 1).padStart(2, "0")}</span>{title}<span aria-hidden="true">↓</span></a></li>)}</ol></nav>
      {children}
      <section className="rental-section rental-faq" id="faq"><p className="rental-eyebrow">よくある質問</p><h2>手配前の疑問を確認</h2>{faq.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">＋</span></summary><p>{item.a}</p></details>)}</section>
      <GuideCta guideKey={guideKey} placement="bottom" title="分かっている条件から、相談を始める">使う場所・日程・必要な作業を、分かる範囲でまとめてお伝えください。品名や数量が未定の項目も、相談内容として整理できます。</GuideCta>
      <nav className="rental-related" aria-label="関連する準備ガイド"><h2>あわせて確認したい準備</h2>{guideKey !== "hub" && <Link href={`/articles/${SAFETY_GUIDES.hub.slug}`}>工事・イベントの安全保安用品ガイドに戻る <span>→</span></Link>}{related.map(item => <Link key={item.href} href={item.href}>{item.title}<span aria-hidden="true">→</span></Link>)}</nav>
      <section className="rental-sources"><h2>参照資料・情報の確認について</h2><p>2026年11月22日に公式情報を確認。手配表・案内文・相談メモは編集部が作成した記入例です。現場・会場ごとの計画や指定様式に合わせて調整してください。</p><ul>{sources.map(source => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}</ul></section>
    </article>
  </main><SiteFooter /></>;
}
