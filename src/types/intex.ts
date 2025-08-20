export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};