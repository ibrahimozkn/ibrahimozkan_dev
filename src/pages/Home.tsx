import Hero from '../components/layout/Hero';
import { portfolio } from '../data/portfolio';
import LatestBlogPosts from '../components/blog/LatestBlogPosts';
import FeaturedProjects from '../components/project/FeaturedProjects';

function Home() {
  return (
    <div className="flex flex-col space-y-20 p-10">
      <Hero />
      <FeaturedProjects
        projects={portfolio.projects.filter((p) => p.featured).slice(0, 2)}
      />
      {portfolio.blogPosts.length > 0 && (
        <LatestBlogPosts blogPosts={portfolio.blogPosts} />
      )}
    </div>
  );
}

export default Home;
