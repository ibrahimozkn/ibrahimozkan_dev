import ProjectCard from '../components/project/ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-3xl font-bold text-white">
        <span className="text-primary">&gt;</span> cat ~/projects
      </h2>
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
