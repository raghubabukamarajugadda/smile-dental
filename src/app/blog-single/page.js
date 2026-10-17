import { Suspense } from "react";
import ArticleClient from "./ArticleClient";

export default function BlogSingle() {
  return (
    <Suspense>
      <ArticleClient />
    </Suspense>
  );
}
