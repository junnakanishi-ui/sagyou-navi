import type { ReactNode } from "react";
import "./reading-layout.css";

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return <div className="article-route">{children}</div>;
}
