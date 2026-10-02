import { PAGE_URL } from "@/lib/site";

export default function sitemap() {
  return [{ url: PAGE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
