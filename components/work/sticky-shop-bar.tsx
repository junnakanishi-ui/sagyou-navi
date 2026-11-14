// @/components/work/sticky-shop-bar.tsx
// 画面下部に常時固定で追従する3モール送客バー（黒地・大型バナー版）。
// 楽天 / Yahoo!ショッピング / 自社EC（サインシティ）への直リンク。
// サイトの差し色（黒×黄）でバーを主役化し、クリック率を最大化する。
// ロゴ画像があれば表示、なければテキストにフォールバックして崩れない。

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { RentalLink } from "@/components/article/rental-link";
import { RENTAL_PATH } from "@/lib/rental-links";
import { MarathonLink } from "@/components/article/marathon-link";
import { MARATHON_PATH } from "@/lib/marathon-links";

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
  const pathname = usePathname();
  if (pathname === MARATHON_PATH) {
    return (
      <nav aria-label="マラソン大会の用品相談" className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-800 bg-[#173e30] text-white shadow-lg" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4">
          <div className="hidden sm:block"><p className="text-base font-bold">マラソン大会の用品・サイン製作</p><p className="mt-1 text-xs text-emerald-100">開催地・日程が決まったら、会場図からご相談</p></div>
          <MarathonLink placement="sticky" className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 hover:bg-yellow-300 sm:w-auto">大会用品の手配・相談先を見る ↗</MarathonLink>
        </div>
      </nav>
    );
  }
  if (pathname === RENTAL_PATH) {
    return (
      <nav aria-label="安全用品レンタルの案内" className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-800 bg-[#173e30] text-white shadow-lg" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4">
          <div className="hidden sm:block"><p className="text-base font-bold">安全用品を、必要な期間だけ。</p><p className="mt-1 text-xs text-emerald-100">品名・数量が未定でも相談できます</p></div>
          <RentalLink placement="sticky" className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 hover:bg-yellow-300 sm:w-auto">レンタル用品・相談方法を見る <span aria-hidden="true">↗</span></RentalLink>
        </div>
      </nav>
    );
  }
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
