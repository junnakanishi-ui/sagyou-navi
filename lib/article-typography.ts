/** 自己完結型記事（SiteHeader/Footer + max-w-4xl）の共通タイポグラフィ */
export const articleCls = {
  h1: "mb-5 text-4xl font-black leading-tight tracking-wide text-gray-900 sm:text-5xl",
  h2: "mb-5 mt-12 border-l-4 border-gray-900 pl-3 text-2xl font-black leading-snug tracking-wide text-gray-900 sm:text-3xl",
  h3: "mb-3 mt-6 text-xl font-black tracking-wide text-gray-900 sm:text-2xl",
  body: "mb-4 leading-[1.95] tracking-[0.04em] text-gray-900",
  bodySm: "text-[15px] leading-[1.95] tracking-[0.04em] text-gray-900",
  list: "my-4 list-disc space-y-2 pl-6 leading-[1.95] tracking-[0.04em] text-gray-900",
  table: "w-full border-collapse text-[15px] leading-7 tracking-wide text-gray-900",
  th: "whitespace-nowrap border-b border-gray-400 bg-gray-100 px-4 py-3.5 text-left text-base font-bold text-gray-900",
  td: "min-w-32 border-b border-gray-200 px-4 py-3.5 align-top text-[15px] leading-7 text-gray-900",
  mark: "rounded-sm bg-amber-200 px-0.5 font-bold text-gray-900",
  faqQ: "mb-2 text-lg font-black tracking-wide text-gray-900",
  ctaH3: "mb-2 text-xl font-black tracking-wide text-gray-900",
  meta: "text-sm font-medium text-gray-800",
} as const;
