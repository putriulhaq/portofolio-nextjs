import BlogDetails from "@/app/components/BlogDetails";
import { blogs } from "@/app/api/blogs";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug 
  const blog = blogs.find(blog => blog.slug === slug);

  return (
    <>
      <BlogDetails title={blog?.title} description={blog?.description} />
    </>
  );
}