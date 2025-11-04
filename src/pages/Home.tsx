import Hero from '../components/layout/Hero';
import data from '../assets/data.json';
import LatestBlogPosts from '../components/blog/LatestBlogPosts';
import FeaturedProjects from '../components/project/FeaturedProjects';

function Home() {
  return (
    <div className="flex flex-col space-y-20 p-10">
      <Hero />
      <FeaturedProjects
        projects={data.projects.filter((project) => project.featured).slice(0, 2)}
      />
      <LatestBlogPosts blogPosts={data.blogPosts} />
    </div>
  );
}

export default Home;
