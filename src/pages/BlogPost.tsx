import { useParams } from 'react-router-dom';
import data from '../assets/data.json';
import { Link } from 'react-router-dom';
import { Md } from '@m2d/react-markdown/server';
import { useEffect, useState } from 'react';
function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const post = data.blogPosts.find((p) => p.id.toString() === slug);

  useEffect(() => {
    if (post?.id) {
      import(`../assets/blog_posts/${post.id}.md?raw`)
        .then((module) => {
          setMarkdown(module.default);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error loading markdown:', error);
          setLoading(false);
        });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="flex flex-col space-y-5 p-5">
        <Link to="/blog" className="text-primary inline-block hover:underline">
          ← Back to blog
        </Link>
        <h2 className="text-2xl font-bold text-white">Post not found</h2>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (loading) {
    return (
      <div className="flex flex-col space-y-5 p-5">
        <Link to="/blog" className="text-primary inline-block hover:underline">
          ← Back to blog
        </Link>
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-5 p-5">
      <Link to="/blog" className="text-primary inline-block hover:underline">
        ← Back to blog
      </Link>
      <h1 className="text-4xl font-bold text-white">{post.title}</h1>
      <p className="text-white/70">{formattedDate}</p>
      <div className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary prose-strong:text-white prose-code:text-primary max-w-none">
        <Md>{markdown}</Md>
      </div>
    </div>
  );
}

export default BlogPost;
