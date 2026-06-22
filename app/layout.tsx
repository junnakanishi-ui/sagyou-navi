import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { StickyShopBar } from "@/components/work/sticky-shop-bar";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagyou-navi.com"),
  title: {
    default: "作業用品ナビ｜台車・運搬具・現場用品の選び方",
    template: "%s | 作業用品ナビ",
  },
  description:
    "工場・倉庫・建設現場で使う作業用品（台車・運搬具・工具・消耗品など）の選び方・違い・使い方を解説。実際に商品を販売する株式会社トレードが、現場担当者・購買担当者向けにナビゲートします。",
  keywords: [
    "作業用品 選び方",
    "台車 選び方",
    "カルティオ 選び方",
    "運搬具 比較",
    "軽量樹脂台車",
    "現場 作業用品",
  ],
  openGraph: {
    siteName: "作業用品ナビ",
    title: "作業用品ナビ｜台車・運搬具・現場用品の選び方",
    description:
      "台車・運搬具・現場の作業用品の「どれを選ぶ」を、ナビゲート。工場・倉庫・建設現場の担当者向けに、選び方・違い・使い方を解説します。",
    type: "website",
    locale: "ja_JP",
    url: "https://sagyou-navi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "作業用品ナビ｜台車・運搬具・現場用品の選び方",
    description:
      "台車・運搬具・現場の作業用品の「どれを選ぶ」を、ナビゲート。",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#047857",
  width: "device-width",
  initialScale: 1,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "作業用品ナビ",
  url: "https://sagyou-navi.com",
  description:
    "工場・倉庫・建設現場で使う作業用品の選び方・違い・使い方を解説するメディア",
  publisher: {
    "@type": "Organization",
    name: "株式会社トレード",
    url: "https://trade-sign.jp/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社トレード",
  url: "https://trade-sign.jp/",
  description:
    "看板・安全用品の販売実績を持つ事業会社。GCセレクト・楽天・Yahoo!ショッピングで作業用品を販売。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="pb-[96px] font-sans antialiased sm:pb-[112px]">
        {children}
        <StickyShopBar />
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
        />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
