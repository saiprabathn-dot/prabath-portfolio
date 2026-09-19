"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Building2,
  Award,
  Bot,
  ShieldCheck,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import styles from "./ExperienceSection.module.css";

interface SpotlightItem {
  id: string;
  index: string;
  stationTag: string;
  title: string;
  subtitle: string;
  issuer: string;
  issuerIcon: React.ReactNode;
  badge: string;
  isActiveVenture?: boolean;
  period: string;
  description: string;
  metrics: string[];
  skills: string[];
  verifyUrl?: string;
  verifyCode?: string;
  actionText: string;
}

const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  {
    id: "qdelta",
    index: "01",
    stationTag: "01 QDelta",
    title: "Co-Founder & Lead Architect",
    subtitle: "QDelta Agency Platform",
    issuer: "QDelta Agency",
    issuerIcon: <Zap size={15} className={styles.issuerIcon} />,
    badge: "⚡ 2024 — PRESENT",
    isActiveVenture: true,
    period: "2024 — PRESENT",
    description:
      "Co-founded agency operations and architected high-performance web systems, internal CRM pipelines, and client-facing digital products with modern motion craft.",
    metrics: [
      "Production Web Systems",
      "Internal CRM Engine",
      "Client Digital Platforms",
    ],
    skills: ["Next.js 15", "TypeScript", "Node.js", "System Architecture", "Tailwind CSS"],
    verifyUrl: "https://qdelta.agency",
    actionText: "Explore Agency Platform",
  },
  {
    id: "rengy",
    index: "02",
    stationTag: "02 Rengy",
    title: "MERN Stack Developer Intern",
    subtitle: "Rengy Private Limited",
    issuer: "Rengy Pvt Ltd",
    issuerIcon: <Building2 size={15} className={styles.issuerIcon} />,
    badge: "Industry Internship",
    period: "2024",
    description:
      "Engineered production web modules, designed reactive UI components, and integrated scalable RESTful APIs with MongoDB database pipelines.",
    metrics: [
      "MERN Production Stack",
      "RESTful API Pipelines",
      "Reactive UI Modules",
    ],
    skills: ["React.js", "Express.js", "Node.js", "MongoDB", "REST APIs"],
    actionText: "MERN Production Role",
  },
  {
    id: "google-cybersecurity",
    index: "03",
    stationTag: "03 CyberSec",
    title: "Google Cybersecurity Specialization",
    subtitle: "8-Course Professional Program",
    issuer: "Google · Coursera",
    issuerIcon: <SiGoogle size={14} className={styles.issuerIcon} />,
    badge: "8-Course Specialization",
    period: "GOOGLE VERIFIED",
    description:
      "Hands-on mastery of Python security automation, Linux administration, SQL database querying, SIEM tools, and intrusion detection & threat mitigation.",
    metrics: [
      "8 Courses Completed",
      "Python Security",
      "SIEM & IDS",
      "Threat Mitigation",
    ],
    skills: ["Python Automation", "Linux CLI", "SQL Queries", "SIEM Tools", "Network Security"],
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/644G6PR3P2XZ",
    verifyCode: "ID: 644G6PR3P2XZ",
    actionText: "Verify on Coursera",
  },
  {
    id: "google-ai",
    index: "04",
    stationTag: "04 Google AI",
    title: "Google AI Essentials",
    subtitle: "Generative AI & Prompt Engineering",
    issuer: "Google · Coursera",
    issuerIcon: <Bot size={15} className={styles.issuerIcon} />,
    badge: "97% Grade Achieved",
    period: "GOOGLE VERIFIED",
    description:
      "Applied generative AI tools, prompt engineering frameworks, and workflow automation to solve modern software and productivity challenges.",
    metrics: [
      "97% Grade Score",
      "Prompt Frameworks",
      "GenAI Tooling",
      "Workflow Automation",
    ],
    skills: ["Prompt Engineering", "Generative AI", "Workflow Automation", "LLM Tooling"],
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/VSZWLX9Z9URR",
    verifyCode: "ID: VSZWLX9Z9URR",
    actionText: "Verify on Coursera",
  },
  {
    id: "innomatics-mern",
    index: "05",
    stationTag: "05 Innomatics",
    title: "MERN Full Stack Web Development",
    subtitle: "Innomatics Research Labs",
    issuer: "Innomatics Research Labs",
    issuerIcon: <Award size={15} className={styles.issuerIcon} />,
    badge: "Verified Credential",
    period: "INNOMATICS VERIFIED",
    description:
      "Comprehensive full-stack engineering covering React frontend architectures, Node/Express backend servers, and MongoDB database modeling.",
    metrics: [
      "Full-Stack Architecture",
      "MongoDB Modeling",
      "Express REST APIs",
      "React 19",
    ],
    skills: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "RESTful APIs"],
    verifyUrl: "https://online.innomatics.in/verify/CC_501142",
    verifyCode: "ID: CC_501142",
    actionText: "Verify on Innomatics",
  },
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const activeItem = SPOTLIGHT_ITEMS[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? SPOTLIGHT_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === SPOTLIGHT_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const progressPercent = (currentIndex / (SPOTLIGHT_ITEMS.length - 1)) * 90;

  return (
    <section id="experience" className={styles.experienceSection}>
      {/* Section Header */}
      <div className={styles.header}>
        <ScrollReveal delay={0.05} direction="up" distance={18}>
          <div className={styles.sectionBadge}>
            <Sparkles size={13} className={styles.badgeIcon} />
            <span>TRACK RECORD &amp; CREDENTIALS</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="up" distance={22}>
          <h2 className={styles.title}>
            Proof of Work &amp; <span className={styles.titleGradient}>Career Milestones.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25} direction="up" distance={22}>
          <p className={styles.subtitle}>
            An interactive 3D horizon spotlighting agency architecture, industry engineering, and verified Google credentials.
          </p>
        </ScrollReveal>
      </div>

      {/* Top Horizon Timeline Tracker */}
      <div className={styles.timelineHorizon}>
        <div className={styles.horizonTrackLine} />
        <div
          className={styles.horizonProgressLine}
          style={{ width: `${progressPercent}%` }}
        />

        {SPOTLIGHT_ITEMS.map((item, idx) => {
          const isNodeActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`${styles.stationNode} ${
                isNodeActive ? styles.stationNodeActive : ""
              }`}
              aria-label={`Jump to ${item.title}`}
            >
              <div
                className={`${styles.nodeDot} ${
                  isNodeActive ? styles.nodeDotActive : ""
                }`}
              />
              <span className={styles.stationLabel}>{item.stationTag}</span>
            </button>
          );
        })}
      </div>

      {/* Center Cinematic 3D Spotlight Stage */}
      <div className={styles.spotlightStage}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: direction * 40, scale: 0.96 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              transform: `perspective(1200px) rotateX(${mouseOffset.y}deg) rotateY(${mouseOffset.x}deg)`,
            }}
            exit={{ opacity: 0, x: direction * -40, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={styles.stageCard}
          >
            {/* Watermark Index Number */}
            <span className={styles.watermarkIndex}>{activeItem.index}</span>

            <div className={styles.cardInner}>
              {/* Left Column: Role Details & Narrative */}
              <div className={styles.cardLeft}>
                <div className={styles.cardTopRow}>
                  <span className={styles.issuerBadge}>
                    {activeItem.issuerIcon}
                    <span>{activeItem.issuer}</span>
                  </span>

                  <span
                    className={`${styles.statusPill} ${
                      activeItem.isActiveVenture ? styles.activeVenturePill : ""
                    }`}
                  >
                    {activeItem.isActiveVenture && <span className={styles.greenPulse} />}
                    <span>{activeItem.badge}</span>
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{activeItem.title}</h3>
                <h4 className={styles.cardSubtitle}>{activeItem.subtitle}</h4>
                <p className={styles.cardDescription}>{activeItem.description}</p>
              </div>

              {/* Right Column: Key Metrics + Tech Tags + Action */}
              <div className={styles.cardRight}>
                <div className={styles.metricsList}>
                  {activeItem.metrics.map((m, i) => (
                    <div key={i} className={styles.metricItem}>
                      <span className={styles.metricDot} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.techTags}>
                  {activeItem.skills.map((s) => (
                    <span key={s} className={styles.techTag}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActionRow}>
                  <span className={styles.codeIdTag}>
                    {activeItem.verifyCode || "PROD VERIFIED"}
                  </span>

                  {activeItem.verifyUrl ? (
                    <a
                      href={activeItem.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                    >
                      <span>{activeItem.actionText}</span>
                      <ArrowUpRight size={14} className={styles.actionArrow} />
                    </a>
                  ) : (
                    <span className={styles.statusPill}>
                      <span>{activeItem.actionText}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Controls */}
      <div className={styles.controlsRow}>
        <button
          type="button"
          onClick={handlePrev}
          className={styles.navButton}
          aria-label="Previous Milestone"
        >
          <ArrowLeft size={18} />
        </button>

        <span className={styles.counter}>
          <span className={styles.counterActive}>0{currentIndex + 1}</span> / 0{SPOTLIGHT_ITEMS.length}
        </span>

        <button
          type="button"
          onClick={handleNext}
          className={styles.navButton}
          aria-label="Next Milestone"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
