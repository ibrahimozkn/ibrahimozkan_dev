export {};

declare global {
  interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    githubLink?: string;
    demoLink?: string;
    featured: boolean;
  }
}
