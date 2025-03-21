"use client";

import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  const projects = [
    {
      title: "Modern E-commerce Dashboard",
      description:
        "A comprehensive admin panel for e-commerce businesses with real-time analytics, inventory management, and order processing. Built with Next.js, Tailwind CSS, and Prisma.",
      image: "/images/ecommerce-dashboard.jpg",
      color: "#4f46e5",
      tags: ["Next.js", "Tailwind CSS", "Prisma", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "AI Writing Assistant",
      description:
        "A modern landing page for an AI-powered writing assistant, featuring animated sections, 3D illustrations, and interactive pricing tables. Built with Next.js and Framer Motion.",
      image: "/images/ai-assistant.jpg",
      color: "#8b5cf6",
      tags: ["Next.js", "Three.js", "Framer Motion", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A real-time collaborative task management application with Kanban board interface, filtering, and progress tracking. Built with Next.js and real-time database.",
      image: "/images/task-manager.jpg",
      color: "#06b6d4",
      tags: ["Next.js", "Real-time DB", "DnD", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <main className="main">
      <section className="hero">
        <div className="hero__background">
          <HeroBackground />
          <div className="hero__gradient"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero__title">
              Crafting Digital Experiences with Code & Design
            </h1>
            <p className="hero__subtitle">
              Senior Frontend Developer specializing in building exceptional
              digital experiences that combine creativity with performance
            </p>
            <div className="hero__cta">
              <a href="#projects" className="button button--primary">
                View Projects
              </a>
              <a href="#contact" className="button button--secondary">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section section--projects">
        <div className="container">
          <motion.div
            className="section__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section__title">Featured Projects</h2>
            <p className="section__subtitle">
              A selection of my recent development work
            </p>
          </motion.div>

          <div className="projects-showcase">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-showcase"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={
                  {
                    "--project-color": project.color,
                  } as React.CSSProperties
                }
              >
                <div className="project-showcase__content">
                  <h3 className="project-showcase__title">{project.title}</h3>
                  <p className="project-showcase__description">
                    {project.description}
                  </p>
                  <div className="project-showcase__tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-showcase__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-showcase__links">
                    <a
                      href={project.demoLink}
                      className="button button--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="button button--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-showcase__image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-showcase__gradient"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section section--alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__title">Technical Expertise</h2>
            <div className="expertise-grid">
              {[
                {
                  icon: "⚛️",
                  title: "React & Next.js",
                  description:
                    "Building performant and scalable web applications with modern React and Next.js",
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description:
                    "Creating intuitive and beautiful user interfaces with attention to detail",
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  description:
                    "Developing fluid and adaptive layouts that work across all devices",
                },
                {
                  icon: "⚡",
                  title: "Performance",
                  description:
                    "Optimizing for speed and efficiency while maintaining smooth user experiences",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="expertise-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="expertise-card__icon">{skill.icon}</div>
                  <h3 className="expertise-card__title">{skill.title}</h3>
                  <p className="expertise-card__description">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact"
          >
            <h2 className="section__title">Let's Work Together</h2>
            <p className="contact__text">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="button button--primary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
