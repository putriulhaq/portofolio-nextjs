import Link from "next/link";
import React from "react";
import fs from "node:fs";
import path from "node:path";
import { site } from "../site";

const hasResume = fs.existsSync(path.join(process.cwd(), "public", site.resume));

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-line py-5 text-sm">
      <Link href="/" className="font-bold">
        <span className="text-accent">~/</span>{site.handle}
      </Link>
      <nav className="flex gap-5 text-muted">
        <Link href="/" className="hover:text-foreground">
          about
        </Link>
        <Link href="/blog" className="hover:text-foreground">
          blog
        </Link>
        {hasResume && (
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            cv
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
