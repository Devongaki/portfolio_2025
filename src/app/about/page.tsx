"use client";

import { motion } from "framer-motion";

interface TechSkill {
  name: string;
  icon: string;
  level: number;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const techStack: TechSkill[] = [
  { name: "React", icon: "⚛️", level: 90 },
  { name: "TypeScript", icon: "📘", level: 85 },
  { name: "Next.js", icon: "▲", level: 88 },
  { name: "JavaScript", icon: "💛", level: 92 },
  { name: "HTML/CSS", icon: "🎨", level: 95 },
  { name: "Node.js", icon: "💚", level: 80 },
  { name: "Git", icon: "📦", level: 85 },
  { name: "UI/UX", icon: "🎯", level: 88 },
];

const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    description: "Leading frontend development for enterprise applications",
  },
  {
    year: "2022",
    title: "Frontend Developer",
    description: "Building modern web applications with React and Next.js",
  },
  {
    year: "2020",
    title: "Web Developer",
    description:
      "Started journey in web development with JavaScript and HTML/CSS",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function About() {
  return (
    <div className="about">
      <section className="section about__intro">
        <div className="container">
          <motion.div
            className="about__content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className="section__title" variants={itemVariants}>
              About Me
            </motion.h1>
            <motion.p className="about__text" variants={itemVariants}>
              Hi! I'm a passionate Frontend Developer with a keen eye for design
              and a love for creating seamless user experiences. With several
              years of experience in web development, I specialize in building
              modern, responsive, and performant web applications.
            </motion.p>
            <motion.p className="about__text" variants={itemVariants}>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical blog posts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section about__skills">
        <div className="container">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="skill-card__icon">{tech.icon}</span>
                <h3 className="skill-card__title">{tech.name}</h3>
                <div className="skill-card__level">
                  <div
                    className="skill-card__progress"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section about__timeline">
        <div className="container">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            My Journey
          </motion.h2>
          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline__item"
                variants={itemVariants}
              >
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
