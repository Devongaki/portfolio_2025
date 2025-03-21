"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/types/projects";

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design and seamless checkout experience.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and intuitive UI.",
    image: "/projects/task-app.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data with interactive visualizations.",
    image: "/projects/weather.jpg",
    tags: ["JavaScript", "APIs", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="projects">
      <section className="section projects__intro">
        <div className="container">
          <motion.h1
            className="section__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="projects__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my featured projects that showcase my skills and
            experience.
          </motion.p>
        </div>
      </section>

      <section className="section projects__filters">
        <div className="container">
          <motion.div
            className="filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              className={`filter-btn ${
                selectedTag === null ? "filter-btn--active" : ""
              }`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${
                  selectedTag === tag ? "filter-btn--active" : ""
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section projects__grid">
        <div className="container">
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  layout
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="project-card__image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="project-image"
                      priority={true}
                    />
                    {hoveredProject === project.id && (
                      <motion.div
                        className="project-card__overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="project-card__links">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button--secondary"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button--primary"
                          >
                            View Code
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">
                      {project.description}
                    </p>
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
