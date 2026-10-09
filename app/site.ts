// Single place for profile data used by the pages, metadata and /api/whoami.

export const site = {
  name: "Dhiya'Ulhaq Putri Kinanty",
  handle: "punyaulhaq",
  role: "software engineer · backend",
  description:
    "Backend software engineer working with Python, Node.js and PHP on PostgreSQL and MySQL, deploying on AWS and GCP.",
  // Shown under the name as "● <status>", e.g. "open to opportunities". Empty string hides it.
  status: "200 OK",
  // Optional, appended to the status line, e.g. "Jakarta, ID".
  location: "Jakarta, ID",
  // Drop the file at public/resume.pdf; the "cv" link appears only when it exists.
  resume: "/resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL
    ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  links: [
    { label: "github", href: "https://github.com/putriulhaq" },
    { label: "linkedin", href: "https://www.linkedin.com/in/dhiyaulhaqputrikinanty/" },
    { label: "email", href: "mailto:putriulhaq0609@gmail.com" },
  ],
  stack: [
    ["lang", "python, node.js, php"],
    ["db", "postgresql, mysql"],
    ["infra", "aws, gcp, docker, jenkins"],
  ],
};

// Newest first. The experience section stays hidden while this is empty.
export const experience: { period: string; company: string; role: string; highlight?: string }[] = [
  {
    period: "2025-11 – now",
    company: "Bridestory",
    role: "Backend Engineer",
    highlight: "Migrated Laravel services to Python; cut user data fetch from 30s to 1s.",
  },
  {
    period: "2025-03 – 2025-11",
    company: "Neo Karya International",
    role: "Backend Developer",
    highlight: "Integrated IVRS with Asterisk PBX; cut data-mapping redundancy by 63%.",
  },
  {
    period: "2022-07 – 2024-09",
    company: "PT Beomho Teknologi Service",
    role: "Backend Developer",
    highlight: "Built Flask APIs for traffic, IoT and worker monitoring; CI/CD with Jenkins and Docker.",
  },
];
