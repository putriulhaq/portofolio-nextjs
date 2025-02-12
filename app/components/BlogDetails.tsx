// components/BlogDetails.tsx
'use client'

type BlogDetailsProps = {
  title: string | undefined,
  description: string | undefined
}

const BlogDetails: React.FC<BlogDetailsProps> = ({title, description}) => {

  return (
    <div className="flex justify-start h-screen bg-gray-100">
          <div className="w-full max-w-3xl mx-auto  px-4 pt-20">
            {title ? ( <>
              <h2 className='text-wrap text-justify font-bold text-4xl text-gray-700 dark:text-gray-300'>{title}</h2>
              <p className='text-justify pt-5 text-gray-700 dark:text-gray-300'>{description}</p>
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