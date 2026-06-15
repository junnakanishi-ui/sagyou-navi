// @/components/work/sticky-shop-bar.tsx
// 画面下部に常時固定で追従する3モール送客バー（黒地・大型バナー版）。
// 楽天 / Yahoo!ショッピング / 自社EC（サインシティ）への直リンク。
// サイトの差し色（黒×黄）でバーを主役化し、クリック率を最大化する。
// ロゴ画像があれば表示、なければテキストにフォールバックして崩れない。

"use client";

import Image from "next/image";

interface ShopLink {
  key: string;
  label: string;
  sublabel: string;
  cta: string;
  href: string;
  logoSrc: string;
  accent: string;
}

const SHOPS: ShopLink[] = [
  {
    key: "rakuten",
    label: "楽天市場",
    sublabel: "サインシティ 楽天市場店",
    cta: "見る",
    href: "https://item.rakuten.co.jp/signcity2024/c/0000000010/",
    logoSrc: "/images/shops/rakuten.png",
    accent: "#bf0000",
  },
  {
    key: "yahoo",
    label: "Yahoo!ショッピング",
    sublabel: "サインシティ Yahoo!店",
    cta: "見る",
    href: "https://store.shopping.yahoo.co.jp/signcity-yshop/a5c8a5e9a5.html?sc_i=shopping-pc-web-category-storeitm-strbclst-cat",
    logoSrc: "/images/shops/yahoo-shopping.png",
    accent: "#ff0033",
  },
  {
    key: "trade-sign",
    label: "サインシティ",
    sublabel: "公式オンラインストア（自社EC）",
    cta: "見る",
    href: "https://www.trade-sign.com/trusco/",
    logoSrc: "/images/shops/signcity.png",
    accent: "#1d4ed8",
  },
];

export function StickyShopBar() {
  return (
    <nav
      aria-label="ショップへのリンク"
      className="fixed inset-x-0 bottom-0 z-50 bg-black shadow-[0_-4px_20px_rgba(0,0,0,0.25)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* 上端の黄色アクセントライン */}
      <div className="h-1 w-full bg-[#ffd60a]" />

      <div className="mx-auto max-w-6xl px-2 py-2.5 sm:px-4 sm:py-3">
        {/* 見出し（PCのみ／省スペースのためモバイルは非表示） */}
        <p className="mb-2 hidden text-center text-xs font-bold tracking-wide text-[#ffd60a] sm:block">
          ＼ 商品のご購入・在庫確認はこちらから ／
        </p>

        <div className="flex items-stretch gap-2 sm:gap-3">
          {SHOPS.map((shop) => (
            <a
              key={shop.key}
              href={shop.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label={`${shop.label}（${shop.sublabel}）を新しいタブで開く`}
              className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-2 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:gap-3 sm:py-4"
              style={{ ["--accent" as string]: shop.accent }}
            >
              {/* カード左のブランドカラー縦ライン */}
              <span
                className="absolute inset-y-0 left-0 w-1"
                style={{ backgroundColor: "var(--accent)" }}
                aria-hidden
              />

              {/* ロゴ（無い/失敗時は非表示。店名テキストが残る） */}
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                <Image
                  src={shop.logoSrc}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </span>

              {/* 店名＋補助テキスト */}
              <span className="flex min-w-0 flex-col leading-tight">
                <span
                  className="truncate text-[13px] font-extrabold sm:text-lg"
                  style={{ color: "var(--accent)" }}
                >
                  {shop.label}
                </span>
                <span className="hidden truncate text-[11px] text-gray-500 sm:block sm:text-xs">
                  {shop.sublabel}
                </span>
              </span>

              {/* CTA（PCのみ。黄色で行動を促す） */}
              <span className="ml-auto hidden shrink-0 items-center gap-1 rounded-full bg-[#ffd60a] px-3 py-1.5 text-xs font-bold text-black transition-colors group-hover:bg-[#ffc300] sm:inline-flex">
                {shop.cta}
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
