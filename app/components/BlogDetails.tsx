// components/BlogDetails.tsx
type BlogDetailsProps = {
  title: string | undefined;
  description: string | undefined;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ title, description }) => {
  if (!title) {
    return (
      <p>
        <span className="text-accent">404</span> blog not found
      </p>
    );
  }

  return (
    <article>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-6 leading-relaxed">{description}</p>
    </article>
  );
};

export default BlogDetails;
