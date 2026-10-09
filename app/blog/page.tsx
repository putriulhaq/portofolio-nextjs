'use client'
import BlogItem from "../components/BlogItem";
import { blogs } from "../api/blogs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PageBlog = () => {
  const pathname = usePathname();
  const isHome = pathname == "/";
  const list = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <section>
      <h2 className="text-sm text-muted">
        <span className="text-accent">$</span> ls blog/
      </h2>
      <ul className="mt-3">
        {list.map((blog, index) => (
          <BlogItem key={index} title={blog.title} date={blog.date} link={blog.link} />
        ))}
      </ul>
      {isHome && blogs.length > 3 && (
        <Link href="/blog" className="mt-4 inline-block text-sm text-accent hover:underline">
          more blogs →
        </Link>
      )}
    </section>
  );
};

export default PageBlog;
