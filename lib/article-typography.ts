/** 自己完結型記事（SiteHeader/Footer + max-w-4xl）の共通タイポグラフィ */
export const articleCls = {
  h1: "mb-5 text-3xl font-bold leading-tight tracking-wide text-gray-900 sm:text-4xl",
  h2: "mb-4 mt-10 border-l-4 border-gray-900 pl-4 text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl",
  h3: "mb-3 mt-6 text-xl font-bold tracking-wide text-gray-900 sm:text-2xl",
  body: "mb-4 leading-[1.95] tracking-[0.04em] text-gray-800",
  bodySm: "text-sm leading-[1.95] tracking-[0.04em] text-gray-700",
  list: "my-4 list-disc space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-800",
  table: "w-full border-collapse text-sm tracking-wide",
  faqQ: "mb-2 text-lg font-bold tracking-wide text-gray-900",
  ctaH3: "mb-2 text-xl font-bold tracking-wide text-gray-900",
} as const;
