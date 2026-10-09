import React from "react";
import { site } from "../site";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:justify-between">
      <nav className="flex gap-4">
        {site.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} · next.js + tailwind</p>
    </footer>
  );
};

export default Footer;
