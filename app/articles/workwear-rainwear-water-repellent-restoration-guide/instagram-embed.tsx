"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

type Props = {
  permalink: string;
};

export function InstagramEmbed({ permalink }: Props) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [permalink]);

  return (
    <div className="my-8 flex min-h-[520px] justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 px-2 py-6">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      />
    </div>
  );
}
