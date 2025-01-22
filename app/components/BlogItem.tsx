import React from "react";
import Link from "next/link";

type BlogItemProps = {
    title: string,
    date: string,
    link: string
}

const BlogItem:React.FC<BlogItemProps> = ({title, date, link}) => {
    return (
    <div className="grid grid-cols-2 gap-4 border-b border-gray-300 py-4">
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="text-end">
            <Link className="text-blue-500 hover:underline text-end" href={link}>Read More</Link>
        </div>
    </div>
    )
}

export default BlogItem