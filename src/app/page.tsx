"use client";

import { motion } from "framer-motion";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
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

      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__title">Featured Work</h2>
            <div className="projects-grid">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: num * 0.1 }}
                >
                  <div className="project-card__image">
                    <div className="project-card__placeholder">
                      Project {num}
                    </div>
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">Project Title {num}</h3>
                    <p className="project-card__description">
                      Brief project description highlighting key features and
                      technologies used.
                    </p>
                    <div className="project-card__tags">
                      <span className="tag">React</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">Next.js</span>
                    </div>
                    <a href={`/project-${num}`} className="project-card__link">
                      View Project →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
