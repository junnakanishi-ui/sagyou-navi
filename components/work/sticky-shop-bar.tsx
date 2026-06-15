// @/components/work/sticky-shop-bar.tsx
// 画面下部に常時固定で追従する3モール送客バー（横並び3ボタン・全デバイス）。
// 楽天 / Yahoo!ショッピング / 自社EC（サインシティ）への直リンク。
// ロゴ画像があれば表示、なければテキストにフォールバックして崩れない。

"use client";

import Image from "next/image";

interface ShopLink {
  key: string;
  label: string;
  sublabel: string;
  href: string;
  logoSrc: string;
  accent: string;
}

const SHOPS: ShopLink[] = [
  {
    key: "rakuten",
    label: "楽天市場",
    sublabel: "サインシティ 楽天市場店",
    href: "https://item.rakuten.co.jp/signcity2024/c/0000000010/",
    logoSrc: "/images/shops/rakuten.png",
    accent: "#bf0000",
  },
  {
    key: "yahoo",
    label: "Yahoo!ショッピング",
    sublabel: "サインシティ Yahoo!店",
    href: "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html?sc_i=shopping-pc-web-category-storeitm-strbclst-cat",
    logoSrc: "/images/shops/yahoo-shopping.png",
    accent: "#ff0033",
  },
  {
    key: "trade-sign",
    label: "サインシティ（自社EC）",
    sublabel: "公式オンラインストア",
    href: "https://www.trade-sign.com/trusco/",
    logoSrc: "/images/shops/signcity.png",
    accent: "#111827",
  },
];

export function StickyShopBar() {
  return (
    <nav
      aria-label="ショップへのリンク"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] backdrop-blur supports-[backdrop-filter]:bg-white/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-6xl items-stretch gap-1.5 px-2 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
        {SHOPS.map((shop) => (
          <a
            key={shop.key}
            href={shop.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            aria-label={`${shop.label}（${shop.sublabel}）を新しいタブで開く`}
            className="group flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl border border-black/10 bg-white px-1 py-2 text-center transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:gap-2 sm:px-3 sm:py-2.5"
            style={{ ["--accent" as string]: shop.accent }}
          >
            <span className="relative flex h-6 w-6 shrink-0 items-center justify-center sm:h-8 sm:w-8">
              <Image
                src={shop.logoSrc}
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span
                className="truncate text-[11px] font-bold sm:text-sm"
                style={{ color: "var(--accent)" }}
              >
                {shop.label}
              </span>
              <span className="hidden truncate text-[10px] text-gray-500 sm:block sm:text-[11px]">
                {shop.sublabel}
              </span>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
