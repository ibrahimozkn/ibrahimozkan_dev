import ProjectCard from './ProjectCard';

interface FeaturedProjectsProps {
  projects: Project[];
}
function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="flex flex-col items-start space-y-5">
      <h2 className="text-2xl font-bold text-white">
        <span className="text-primary">//</span> Featured Projects
      </h2>
      <div className="flex w-full flex-col space-y-5 space-x-5 md:flex-row md:space-y-0">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
