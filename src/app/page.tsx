"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import ClientHeroBackground from "@/components/ClientHeroBackground";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const projects = [
    {
      title: "Modern E-commerce Dashboard",
      description:
        "A comprehensive admin panel for e-commerce businesses with real-time analytics, inventory management, and order processing. Built with Next.js, Tailwind CSS, and Prisma.",
      image:
        "https://placehold.co/600x400/4f46e5/ffffff?text=E-commerce+Dashboard",
      color: "#4f46e5",
      tags: ["Next.js", "Tailwind CSS", "Prisma", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
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

  return (
    <main className="main">
      <section className="hero">
        <div className="hero__gradient">
          <div className="container">
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <TypeAnimation
                sequence={[
                  "Crafting Digital",
                  1000,
                  "Crafting Digital Experiences",
                  1000,
                  "Crafting Digital Experiences with Code & Design",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </motion.h1>
            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Full-stack developer passionate about creating beautiful,
              functional, and user-centered digital experiences.
            </motion.p>
            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link href="#projects" className="button button--primary">
                View Projects
              </Link>
              <button
                onClick={() => setIsContactOpen(true)}
                className="button button--secondary"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
        <ClientHeroBackground />
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <div className="scroll-indicator__mouse">
            <div className="scroll-indicator__wheel" />
          </div>
          <span className="scroll-indicator__label">Scroll Down</span>
        </motion.div>
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
                viewport={{ once: true, margin: "-100px" }}
                style={
                  {
                    "--project-color": project.color,
                    "--color-primary-rgb": project.color
                      .replace("#", "")
                      .match(/.{2}/g)
                      ?.map((hex) => parseInt(hex, 16))
                      .join(", "),
                  } as React.CSSProperties
                }
              >
                <div className="project-showcase__content">
                  <motion.h3
                    className="project-showcase__title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="project-showcase__description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="project-showcase__tags"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-showcase__tag">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    className="project-showcase__links"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                </div>
                <motion.div
                  className="project-showcase__image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div className="project-showcase__gradient" />
                </motion.div>
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
            <h2 className="section__title">Let&apos;s Work Together</h2>
            <p className="contact__text">
              I&apos;m always interested in hearing about new projects and
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

      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
