"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  Zap,
  Building2,
  Award,
  Bot,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import styles from "./ExperienceSection.module.css";

interface RibbonItem {
  id: string;
  index: string;
  category: string;
  role: string;
  company: string;
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

const RIBBON_ITEMS: RibbonItem[] = [
  {
    id: "qdelta",
    index: "01",
    category: "Agency Venture",
    role: "Co-Founder & Lead Architect",
    company: "QDelta Agency Platform",
    issuerIcon: <Zap size={15} className={styles.companyIcon} />,
    badge: "⚡ 2024 — PRESENT",
    isActiveVenture: true,
    period: "2024 — PRESENT",
    description:
      "Co-founded agency operations, architecting high-performance web applications, internal CRM business platforms, and client digital systems built with modern motion craft.",
    metrics: [
      "Full-Stack Web Systems",
      "Internal CRM Engine",
      "Client Digital Products",
    ],
    skills: ["Next.js 15", "TypeScript", "Node.js", "System Architecture", "Tailwind CSS"],
    verifyUrl: "https://qdelta.agency",
    actionText: "Explore Agency Platform",
  },
  {
    id: "rengy",
    index: "02",
    category: "Industry Role",
    role: "MERN Stack Developer Intern",
    company: "Rengy Private Limited",
    issuerIcon: <Building2 size={15} className={styles.companyIcon} />,
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
    category: "Specialization",
    role: "Google Cybersecurity Specialization",
    company: "Google · Coursera Specialization",
    issuerIcon: <SiGoogle size={14} className={styles.companyIcon} />,
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
    category: "AI Credential",
    role: "Google AI Essentials",
    company: "Google · Coursera Credential",
    issuerIcon: <Bot size={15} className={styles.companyIcon} />,
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
    category: "Full-Stack Web",
    role: "MERN Full Stack Web Development",
    company: "Innomatics Research Labs",
    issuerIcon: <Award size={15} className={styles.companyIcon} />,
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
  const [expandedId, setExpandedId] = useState<string>("qdelta");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

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
            An interactive editorial ledger spanning agency architecture, industry engineering, and verified Google credentials.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-Width Kinetic Ribbon Accordion */}
      <div className={styles.ribbonList}>
        {RIBBON_ITEMS.map((item, idx) => {
          const isExpanded = expandedId === item.id;

          return (
            <ScrollReveal
              key={item.id}
              delay={0.05 + idx * 0.08}
              direction="up"
              distance={20}
            >
              <div
                className={`${styles.ribbonRow} ${
                  isExpanded ? styles.ribbonRowExpanded : ""
                }`}
              >
                {/* Clickable Ribbon Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className={styles.ribbonHeader}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.ribbonLeft}>
                    <span className={styles.giantIndex}>{item.index}</span>

                    <div className={styles.ribbonTitleGroup}>
                      <h3 className={styles.ribbonRole}>{item.role}</h3>
                      <div className={styles.ribbonCompanyRow}>
                        {item.issuerIcon}
                        <span>{item.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.ribbonRight}>
                    <span className={styles.typePill}>{item.category}</span>

                    <span
                      className={`${styles.scoreBadge} ${
                        item.isActiveVenture ? styles.activeVentureBadge : ""
                      }`}
                    >
                      {item.isActiveVenture && <span className={styles.pulseDot} />}
                      <span>{item.badge}</span>
                    </span>

                    <div className={styles.expandCircle}>
                      <ChevronRight size={17} />
                    </div>
                  </div>
                </button>

                {/* Expanded Dossier with Spring Kinetics */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.accordionBody}
                    >
                      <div className={styles.accordionContent}>
                        {/* Left Details & Metrics */}
                        <div className={styles.accordionDetails}>
                          <p className={styles.accordionDesc}>{item.description}</p>

                          <div className={styles.metricsRow}>
                            {item.metrics.map((m, i) => (
                              <div key={i} className={styles.metricBadge}>
                                <span className={styles.metricBullet} />
                                <span>{m}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Verified Arsenal & Direct Link */}
                        <div className={styles.accordionRight}>
                          <span className={styles.skillsHeader}>Verified Competencies</span>
                          <div className={styles.skillsPills}>
                            {item.skills.map((s) => (
                              <span key={s} className={styles.skillPill}>
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className={styles.actionRow}>
                            <span className={styles.verifyIdCode}>
                              {item.verifyCode || "PROD VERIFIED"}
                            </span>

                            {item.verifyUrl ? (
                              <a
                                href={item.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.actionBtn}
                              >
                                <span>{item.actionText}</span>
                                <ArrowUpRight size={14} className={styles.arrowIcon} />
                              </a>
                            ) : (
                              <span className={styles.scoreBadge}>
                                <span>{item.actionText}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
