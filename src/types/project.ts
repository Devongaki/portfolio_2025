import { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  color: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
} 