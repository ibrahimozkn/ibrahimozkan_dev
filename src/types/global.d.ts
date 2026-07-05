export { };

declare global {
  interface Portfolio {
    profile: Profile;
    contact: Contact;
    socials: Social[];
    skills: Skills;
    experience: ExperienceEntry[];
    education: EducationEntry[];
    publications: Publication[];
    languages: LanguageProficiency[];
    interests: string[];
    projects: Project[];
    blogPosts: BlogPost[];
  }

  interface Profile {
    name: string;
    firstName: string;
    lastName: string;
    initials: string;
    handle: string;
    title: string;
    tagline: string;
    summary: string;
    location: string;
    nationality?: string;
    dateOfBirth?: string;
    availability: string;
    photo?: string;
  }

  interface Contact {
    email: string;
    phone?: string;
  }

  interface Social {
    kind: 'github' | 'linkedin' | 'website' | 'email';
    label: string;
    href: string;
  }

  interface Skills {
    highlight: string[];
    languages: string[];
    frontend: string[];
    backendAndApis: string[];
    aiAndTooling: string[];
    mobile: string[];
    databases: string[];
    devops: string[];
    familiar: string[];
  }

  interface ExperienceEntry {
    company: string;
    location: string;
    title: string;
    start: string;
    end: string;
    current: boolean;
    bullets: string[];
  }

  interface EducationEntry {
    school: string;
    location: string;
    degree: string;
    grade?: string;
    start: string;
    end: string;
    current: boolean;
  }

  interface Publication {
    title: string;
    venue: string;
    date: string;
    authors: string[];
    link?: string;
    description: string;
  }

  interface LanguageProficiency {
    language: string;
    level: string;
  }

  interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
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
