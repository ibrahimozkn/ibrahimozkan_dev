import TechnologyCard from './TechnologyCard';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, githubLink } = project;
  return (
    <div className="flex flex-1/2 flex-col space-y-4 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-wrap items-start space-y-2 space-x-3">
        {technologies.map((tech) => (
          <TechnologyCard key={tech} technology={tech} />
        ))}
      </div>
      <a
        href={githubLink}
        className="text-primary font-semibold transition-transform hover:underline"
      >
        View on GitHub &gt;
      </a>
    </div>
  );
}

export default ProjectCard;
