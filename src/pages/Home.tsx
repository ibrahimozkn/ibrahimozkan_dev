import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import FeaturedProjects from '../components/FeaturedProjects';
import projects from '../assets/projects.json';

function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl">
      <Navbar />
      <div className="flex flex-col space-y-20 p-10">
        <Hero />
        <FeaturedProjects
          projects={projects.projects.filter((project) => project.featured).slice(0, 2)}
        />
      </div>
    </div>
  );
}

export default Home;
