import React from "react";
import Link from "next/link";

type BlogItemProps = {
  title: string;
  date: string;
  link: string;
};

// "June 05, 2025" -> "2025-06-05"
const formatDate = (date: string) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const BlogItem: React.FC<BlogItemProps> = ({ title, date, link }) => {
  const isExternal = link.startsWith("http");
  return (
    <li>
      <Link
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group flex gap-4 border-b border-line py-3"
      >
        <time className="shrink-0 text-sm leading-6 text-muted">{formatDate(date)}</time>
        <span className="group-hover:text-accent">
          {title}
          {isExternal && <span className="text-muted"> ↗</span>}
        </span>
      </Link>
    </li>
  );
};

export default BlogItem;
