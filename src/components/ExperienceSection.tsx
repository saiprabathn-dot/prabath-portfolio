"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Building2,
  Award,
  Bot,
  Layers,
  Terminal,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import styles from "./ExperienceSection.module.css";

interface ProofItem {
  id: string;
  index: string;
  category: string;
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

const PROOF_ITEMS: ProofItem[] = [
  {
    id: "qdelta",
    index: "01",
    category: "Venture",
    title: "Co-Founder & Lead Architect",
    subtitle: "QDelta Agency Platform",
    issuer: "QDelta Agency",
    issuerIcon: <Zap size={16} />,
    badge: "⚡ Active Venture",
    isActiveVenture: true,
    period: "2024 — PRESENT",
    description:
      "Co-founded agency operations and architected high-performance web systems, internal CRM pipelines, and client-facing digital products with modern motion craft.",
    metrics: [
      "Production Systems",
      "Client Digital Products",
      "Internal CRM Engine",
    ],
    skills: ["Next.js 15", "TypeScript", "Node.js", "System Architecture", "Tailwind CSS"],
    verifyUrl: "https://qdelta.agency",
    actionText: "Explore Agency Platform",
  },
  {
    id: "rengy",
    index: "02",
    category: "Internship",
    title: "MERN Stack Developer Intern",
    subtitle: "Rengy Private Limited",
    issuer: "Rengy Pvt Ltd",
    issuerIcon: <Building2 size={16} />,
    badge: "Engineering Internship",
    period: "INDUSTRY INTERNSHIP",
    description:
      "Engineered production web modules, designed reactive UI components, and integrated scalable RESTful APIs with MongoDB database pipelines.",
    metrics: [
      "Full-Stack MERN",
      "REST API Pipelines",
      "Reactive UI Modules",
    ],
    skills: ["React.js", "Express.js", "Node.js", "MongoDB", "REST APIs"],
    actionText: "MERN Production Role",
  },
  {
    id: "google-cybersecurity",
    index: "03",
    category: "Specialization",
    title: "Google Cybersecurity Specialization",
    subtitle: "8-Course Professional Program",
    issuer: "Google · Coursera",
    issuerIcon: <SiGoogle size={14} />,
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
    category: "AI Certificate",
    title: "Google AI Essentials",
    subtitle: "Generative AI & Prompt Engineering",
    issuer: "Google · Coursera",
    issuerIcon: <Bot size={16} />,
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
    category: "Full-Stack",
    title: "MERN Full Stack Web Development",
    subtitle: "Innomatics Research Labs",
    issuer: "Innomatics Research Labs",
    issuerIcon: <Award size={16} />,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = PROOF_ITEMS[activeIndex];

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
            Proof of Work &amp; <span className={styles.titleGradient}>Frontier Mastery.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25} direction="up" distance={22}>
          <p className={styles.subtitle}>
            Interactive ledger tracking production engineering leadership and verified Google &amp; Innomatics credentials.
          </p>
        </ScrollReveal>
      </div>

      {/* Interactive 2-Panel Stage (No Box Containers) */}
      <div className={styles.stageGrid}>
        {/* Left: Interactive Milestone Spectrum */}
        <div className={styles.milestonesList}>
          {PROOF_ITEMS.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`${styles.milestoneItem} ${
                  isCurrent ? styles.milestoneActive : ""
                }`}
                role="button"
                tabIndex={0}
                aria-label={`Select ${item.title}`}
              >
                <div className={styles.milestoneLeft}>
                  <span className={styles.itemIndex}>{item.index}</span>
                  <div className={styles.itemMeta}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <span className={styles.itemSubtitle}>{item.subtitle}</span>
                  </div>
                </div>

                <span className={styles.categoryPill}>{item.category}</span>
              </div>
            );
          })}
        </div>

        {/* Right: Luminous Telemetry HUD */}
        <div className={styles.telemetryHUD}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%" }}
            >
              {/* HUD Top Bar */}
              <div className={styles.hudTop}>
                <div className={styles.hudIssuer}>
                  <div className={styles.issuerIconWrap}>
                    {activeItem.issuerIcon}
                  </div>
                  <span className={styles.issuerName}>{activeItem.issuer}</span>
                </div>

                <span
                  className={`${styles.hudBadge} ${
                    activeItem.isActiveVenture ? styles.badgeActiveVenture : ""
                  }`}
                >
                  {activeItem.isActiveVenture && <span className={styles.greenPulse} />}
                  <span>{activeItem.badge}</span>
                </span>
              </div>

              {/* HUD Main Title & Description */}
              <div className={styles.hudMain}>
                <span className={styles.hudPeriod}>{activeItem.period}</span>
                <h4 className={styles.hudHeadline}>{activeItem.title}</h4>
                <p className={styles.hudDesc}>{activeItem.description}</p>
              </div>

              {/* Live Telemetry Metrics Chips */}
              <div className={styles.metricsGrid}>
                {activeItem.metrics.map((m, i) => (
                  <div key={i} className={styles.metricChip}>
                    <span className={styles.metricDot} />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              {/* Verified Tech Arsenal */}
              <div className={styles.hudTechPills}>
                {activeItem.skills.map((s) => (
                  <span key={s} className={styles.hudTechPill}>
                    {s}
                  </span>
                ))}
              </div>

              {/* HUD Action Row */}
              <div className={styles.hudActionRow}>
                <span className={styles.verifyCodeTag}>
                  {activeItem.verifyCode || "PROD ROLE"}
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
                  <span className={styles.hudBadge}>
                    <span>{activeItem.actionText}</span>
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
