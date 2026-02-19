export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  achievements?: string[];
  techStack?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  name: string;
  period: string;
  location: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
}

export interface Hobby {
  icon: string;
  label: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  hobbies: Hobby[];
}

export type SectionId = 'hero' | 'about' | 'skills' | 'experience' | 'education' | 'projects' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}
