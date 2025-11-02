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

  interface BlogPost {
    id: number;
    title: string;
    date: string;
    summary: string;
  }
}
