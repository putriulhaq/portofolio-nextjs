// components/BlogDetails.tsx
'use client'
import { useRouter, usePathname } from 'next/navigation'

type BlogDetailsProps = {
  title: string,
  description:string
}

const BlogDetails: React.FC<BlogDetailsProps> = ({title, description}) => {

  return (
    <div className="flex justify-start h-screen bg-gray-100">
          <div className="w-full max-w-3xl mx-auto  px-4 pt-20">
            {title ? ( <>
              <h2 className='text-wrap text-justify font-bold text-4xl'>{title}</h2>
              <p className='text-justify pt-5'>{description}</p>
            </>
            ) 
              : (
                <>
                  <h2>Blog Not Found</h2>
                </>
              )
            }
            
          </div>
        </div>
  )
}

export default BlogDetails 