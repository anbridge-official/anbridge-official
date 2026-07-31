import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const staticRoutes = ["/", "/faq", "/process", "/services/telecom", "/services/postpay"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes = new Set(staticRoutes);

  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "_next" || entry.name === "api") continue;
        await walk(fullPath);
      } else if (entry.isFile() && entry.name === "page.tsx") {
        const relativePath = path.relative(path.join(process.cwd(), "app"), fullPath).replace(/\\/g, "/");
        const route = relativePath === "page.tsx" ? "/" : `/${relativePath.replace(/\/page\.tsx$/, "")}`;
        routes.add(route);
      }
    }
  }

  await walk(path.join(process.cwd(), "app"));

  return Array.from(routes).map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
