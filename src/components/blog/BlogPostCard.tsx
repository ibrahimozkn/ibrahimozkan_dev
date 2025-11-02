import React from 'react';

import { Link } from 'react-router-dom';
interface BlogPostCardProps {
  post: BlogPost;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Link to={`/blog/${post.id}`} className="rounded-lg p-6 transition-colors hover:bg-white/5">
      <p className="text-sm text-gray-500">{formattedDate}</p>
      <h3 className="mb-2 text-lg font-semibold text-white">{post.title}</h3>
      <p className="mb-4 text-sm text-gray-400">{post.summary}</p>
      <div className="border-b border-solid border-white/10"></div>
    </Link>
  );
}

export default BlogPostCard;
