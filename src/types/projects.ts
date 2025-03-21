export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  color?: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface TechSkill {
  name: string;
  icon: string;
  level: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags?: string[];
}
