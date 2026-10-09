import { site, experience } from "@/app/site";
import { blogs } from "@/app/api/blogs";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    name: site.name,
    role: site.role,
    status: site.status || undefined,
    location: site.location || undefined,
    stack: Object.fromEntries(site.stack),
    experience,
    links: Object.fromEntries(site.links.map((l) => [l.label, l.href])),
    blog: blogs.map((b) => ({ title: b.title, date: b.date, url: b.link })),
  });
}
