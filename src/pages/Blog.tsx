import React from 'react';
import BlogPostCard from '../components/blog/BlogPostCard';

interface BlogPostsProps {
  blogPosts: BlogPost[];
}

function Blog({ blogPosts }: BlogPostsProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = React.useMemo(
    () => blogPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm, blogPosts],
  );
  return blogPosts.length === 0 ? (
    <div className="flex min-h-screen flex-col items-center justify-center p-10">
      <h2 className="mb-4 text-2xl font-bold text-white">No Blog Posts Available</h2>
    </div>
  ) : (
    <div className="mt-5 flex w-full flex-col justify-start space-y-5 p-3">
      <h2 className="text-3xl font-bold text-white">
        <span className="text-primary">&gt;</span> ls -l posts
      </h2>
      <div className="relative">
        <svg
          className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          className="w-full rounded-lg bg-white/10 p-3 pl-10 text-white placeholder-gray-400 focus:outline-none active:outline-none"
          placeholder="Search for articles.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
