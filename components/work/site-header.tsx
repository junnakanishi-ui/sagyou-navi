"use client";

import { Menu, Wrench } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "カテゴリ", href: "/#categories" },
  { label: "記事一覧", href: "/articles" },
  { label: "作業用品ナビとは", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "運営者情報", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
            <Wrench className="h-5 w-5 text-brand" aria-hidden />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight text-foreground">
              作業用品<span className="underline-marker">navi</span>
            </p>
            <p className="text-[10px] text-muted-foreground">
              台車・運搬具・現場用品の選び方
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="主要セクション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/articles"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-bold text-brand transition hover:bg-foreground/90"
          >
            記事を読む
          </Link>
        </div>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
            aria-label="モバイルメニュー"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/articles"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-foreground px-4 py-3 text-center text-sm font-bold text-brand"
            >
              記事を読む
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
