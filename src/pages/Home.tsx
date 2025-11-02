import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import data from '../assets/data.json';
import LatestBlogPosts from '../components/LatestBlogPosts';

function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl">
      <Navbar />
      <div className="flex flex-col space-y-20 p-10">
        <Hero />
        <FeaturedProjects
          projects={data.projects.filter((project) => project.featured).slice(0, 2)}
        />
        <LatestBlogPosts blogPosts={data.blogPosts} />
      </div>
    </div>
  );
}

export default Home;
