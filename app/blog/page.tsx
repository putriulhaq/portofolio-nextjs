'use client'
import BlogItem from "../components/BlogItem";
import {blogs}  from "../api/blogs";
import { usePathname } from 'next/navigation'
import Link from "next/link";
 
const PageBlog = () => { 
    const pathname = usePathname()
    return (
        <div className="flex justify-start h-screen bg-gray-100">
          <div className="w-full max-w-3xl mx-auto  px-4 pt-20">
            <h1 className="text-4xl font-bold text-black-600">Blogs</h1>
            {pathname == '/' ? 
            ( <>
                {blogs?.map((blog, index) => 
                index < 3 && (
                    <BlogItem key={index} title={blog.title} date={blog.date} link={blog.link} />
                ))}

                {blogs.length > 3 && (
                    <div className="mt-4">
                        <Link className="text-blue-500 hover:underline text-lg font-medium" href="/blog">Go to more blogs</Link>
                </div>
                )} 
                
            </>
            ) 
            : 
            (
                blogs?.map((blog, index) => (
                    <BlogItem key={index} title={blog.title} date={blog.date} link={blog.link} />
                ))
            )   
            }
          </div>
        </div>
      );
}

export default PageBlog
