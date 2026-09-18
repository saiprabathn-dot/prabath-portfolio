"use client";

import React from "react";
import { ExternalLink, Layers } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import styles from "./ProjectsSection.module.css";

interface Project {
  id: string;
  title: string;
  tagline: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "qdelta-crm",
    title: "QDelta CRM",
    tagline: "Internal agency CRM & operations platform.",
    image: "/projects/qdelta-crm.png",
    demoUrl: "https://qdelta.agency",
    githubUrl: "https://github.com",
  },
  {
    id: "web-tool-finder",
    title: "Web Tool Finder (WTF)",
    tagline: "Curated developer tool discovery & search engine.",
    image: "/projects/wtf.png",
    demoUrl: "https://curated-tools.dev",
    githubUrl: "https://github.com",
  },
  {
    id: "qdelta-website",
    title: "QDelta Agency Platform",
    tagline: "Digital agency showcase built with precision motion.",
    image: "/projects/qdelta-website.png",
    demoUrl: "https://qdelta.agency",
    githubUrl: "https://github.com",
  },
  {
    id: "mustify",
    title: "Mustify",
    tagline: "Modern music streaming & playlist platform.",
    image: "/projects/mustify.png",
    demoUrl: "https://render.com",
    githubUrl: "https://github.com",
  },
  {
    id: "payroll-system",
    title: "Payroll Management System",
    tagline: "Automated salary computation & employee payslip generator.",
    image: "/projects/payroll.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
  },
];

export default function ProjectsSection() {
  const renderCard = (project: Project, key: string) => (
    <div key={key} className={styles.modalCard}>
      {/* Project Screenshot Cover */}
      {project.image && (
        <div className={styles.cardImageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.cardImg}
          />
          <div className={styles.cardImgOverlay} />
        </div>
      )}

      {/* Bottom Overlay with Title & Live Link Button */}
      <div className={styles.cardBottomOverlay}>
        <div className={styles.cardTitleWrap}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardTagline}>{project.tagline}</p>
        </div>

        <a
          href={project.demoUrl || project.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLiveBtn}
          aria-label={`View Live Project for ${project.title}`}
          title="View Live Project"
        >
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header with Kinetic Text Scroll Motion */}
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={styles.categoryBadge}
          >
            <Layers size={13} />
            <span>FEATURED PROJECTS</span>
          </motion.div>

          <h2 className={styles.heading}>
            {[
              { text: "Built", accent: false },
              { text: "with", accent: false },
              { text: "Engineering", accent: false },
              { text: "Rigor", accent: false },
              { text: "&", accent: true },
              { text: "Product", accent: true },
              { text: "Craft.", accent: true },
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{ filter: "blur(14px)", opacity: 0, y: 32, scale: 0.94 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  duration: 0.75,
                  delay: 0.12 + i * 0.065,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={word.accent ? styles.headingAccent : undefined}
                style={{
                  display: "inline-block",
                  marginRight: i === 6 ? 0 : "0.28em",
                  willChange: "transform, filter, opacity",
                }}
              >
                {word.text}
              </motion.span>
            ))}
          </h2>

          <p className={styles.subheading}>
            {"A curated showcase of production applications, developer platforms, and agency software engineered end-to-end."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ filter: "blur(8px)", opacity: 0, y: 16 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.022,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.26em",
                    willChange: "transform, filter, opacity",
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </p>
        </div>

        {/* AUTOMATIC INFINITE HORIZONTAL MARQUEE */}
        <ScrollReveal delay={0.2} scale={0.96} duration={0.85} distance={0}>
          <div className={styles.carouselWrapper}>
            <div className={styles.trackGroup}>
              {PROJECTS.map((project, idx) =>
                renderCard(project, `set1-${project.id}-${idx}`)
              )}
            </div>
            <div className={styles.trackGroup} aria-hidden="true">
              {PROJECTS.map((project, idx) =>
                renderCard(project, `set2-${project.id}-${idx}`)
              )}
            </div>
            <div className={styles.trackGroup} aria-hidden="true">
              {PROJECTS.map((project, idx) =>
                renderCard(project, `set3-${project.id}-${idx}`)
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
