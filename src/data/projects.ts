import { Project } from '../types/project';
import AgencyImage from '../../public/Images/projects/agency.png'
export const projects: Project[] = [
  {
    title: "Event Talent Booking Portal",
    description:
      "This is a dynamic web application I created that allows users to easily browse, select, and book a wide range of entertainment talents, including DJs, dancers, and artists. The platform is designed with a clean, intuitive interface that ensures a smooth booking experience for event organizers and talent seekers alike.",
    image: AgencyImage.src,
    color: "#4f46e5",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "TypeScript"],
    demoLink: "https://maadcollective.netlify.app/",
    githubLink: "https://github.com/Devongaki/maadcollective",
  },
  {
    title: "AI Writing Assistant",
    description:
      "A modern landing page for an AI-powered writing assistant, featuring animated sections, 3D illustrations, and interactive pricing tables. Built with Next.js and Framer Motion.",
    image:
      "https://placehold.co/600x400/8b5cf6/ffffff?text=AI+Writing+Assistant",
    color: "#8b5cf6",
    tags: ["Next.js", "Three.js", "Framer Motion", "TypeScript"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "A real-time collaborative task management application with Kanban board interface, filtering, and progress tracking. Built with Next.js and real-time database.",
    image: "https://placehold.co/600x400/06b6d4/ffffff?text=Task+Management",
    color: "#06b6d4",
    tags: ["Next.js", "Real-time DB", "DnD", "TypeScript"],
    demoLink: "#",
    githubLink: "#",
  },
]; 