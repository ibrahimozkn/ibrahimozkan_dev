import BlogPostCard from './BlogPostCard';

interface LatestBlogPostsProps {
  blogPosts: BlogPost[];
}

function LatestBlogPosts({ blogPosts }: LatestBlogPostsProps) {
  return (
    <div className="flex w-full flex-col space-y-5">
      <h2 className="text-2xl font-bold text-white">
        <span className="text-primary">//</span> Latest Blog Posts
      </h2>
      <div className="flex flex-col space-y-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default LatestBlogPosts;
