"use client";

import React from "react";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Building2,
  Award,
  Bot,
  ShieldCheck,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";
import styles from "./ExperienceSection.module.css";

interface LedgerItem {
  id: string;
  index: string;
  title: string;
  org: string;
  orgIcon: React.ReactNode;
  statBadge: string;
  isActiveVenture?: boolean;
  tech: string[];
  verifyUrl?: string;
  actionText: string;
}

const LEDGER_ITEMS: LedgerItem[] = [
  {
    id: "qdelta",
    index: "01",
    title: "Co-Founder & Lead Architect",
    org: "QDelta Agency",
    orgIcon: <Zap size={14} className={styles.orgIcon} />,
    statBadge: "⚡ 2026 — PRESENT",
    isActiveVenture: true,
    tech: ["Next.js 15", "TypeScript", "Node.js", "System Architecture"],
    verifyUrl: "https://qdelta.agency",
    actionText: "Explore Platform",
  },
  {
    id: "rengy",
    index: "02",
    title: "MERN Stack Developer Intern",
    org: "Rengy Private Limited",
    orgIcon: <Building2 size={14} className={styles.orgIcon} />,
    statBadge: "Industry Internship",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
    actionText: "Production Role",
  },
  {
    id: "google-cybersecurity",
    index: "03",
    title: "Google Cybersecurity Specialization",
    org: "Google · Coursera",
    orgIcon: <SiGoogle size={13} className={styles.orgIcon} />,
    statBadge: "8 Courses Completed",
    tech: ["Python Automation", "Linux", "SQL", "SIEM Tools"],
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/644G6PR3P2XZ",
    actionText: "Verify Credential",
  },
  {
    id: "google-ai",
    index: "04",
    title: "Google AI Essentials",
    org: "Google · Coursera",
    orgIcon: <Bot size={14} className={styles.orgIcon} />,
    statBadge: "97% Grade Achieved",
    tech: ["Prompt Engineering", "Generative AI", "AI Workflows"],
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/VSZWLX9Z9URR",
    actionText: "Verify Credential",
  },
  {
    id: "innomatics-mern",
    index: "05",
    title: "MERN Full Stack Web Development",
    org: "Innomatics Research Labs",
    orgIcon: <Award size={14} className={styles.orgIcon} />,
    statBadge: "Full-Stack Specialization",
    tech: ["MongoDB Atlas", "Express.js", "React.js", "Node.js"],
    verifyUrl: "https://online.innomatics.in/verify/CC_501142",
    actionText: "Verify Credential",
  },
];

export default function ExperienceSection() {
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
            Proof of Work &amp; <span className={styles.titleGradient}>Milestones.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25} direction="up" distance={22}>
          <p className={styles.subtitle}>
            A curated record of production agency leadership and verified Google &amp; Innomatics certifications.
          </p>
        </ScrollReveal>
      </div>

      {/* Minimalist Full-Width Proof Ledger */}
      <div className={styles.ledgerContainer}>
        {LEDGER_ITEMS.map((item, idx) => (
          <ScrollReveal
            key={item.id}
            delay={0.08 + idx * 0.09}
            direction="up"
            distance={22}
            duration={0.7}
          >
            {item.verifyUrl ? (
              <a
                href={item.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ledgerRow}
                title={`Open ${item.title}`}
              >
                {/* Col 1: Monospace Index */}
                <span className={styles.indexCol}>{item.index}</span>

                {/* Col 2: Title & Organization */}
                <div className={styles.mainCol}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.itemOrg}>
                    {item.orgIcon}
                    <span>{item.org}</span>
                  </div>
                </div>

                {/* Col 3: Stat Badge */}
                <div className={styles.statCol}>
                  <span
                    className={`${styles.statBadge} ${
                      item.isActiveVenture ? styles.activeVentureStat : ""
                    }`}
                  >
                    {item.isActiveVenture && <span className={styles.greenDot} />}
                    <span>{item.statBadge}</span>
                  </span>
                </div>

                {/* Col 4: Tech Arsenal Tags */}
                <div className={styles.techCol}>
                  {item.tech.map((t) => (
                    <span key={t} className={styles.techPill}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Col 5: Action Link */}
                <div className={styles.actionCol}>
                  <span className={styles.actionBtn}>
                    <span>{item.actionText}</span>
                    <ArrowUpRight size={13} className={styles.actionArrow} />
                  </span>
                </div>
              </a>
            ) : (
              <div className={styles.ledgerRow}>
                {/* Col 1: Monospace Index */}
                <span className={styles.indexCol}>{item.index}</span>

                {/* Col 2: Title & Organization */}
                <div className={styles.mainCol}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.itemOrg}>
                    {item.orgIcon}
                    <span>{item.org}</span>
                  </div>
                </div>

                {/* Col 3: Stat Badge */}
                <div className={styles.statCol}>
                  <span className={styles.statBadge}>
                    <span>{item.statBadge}</span>
                  </span>
                </div>

                {/* Col 4: Tech Arsenal Tags */}
                <div className={styles.techCol}>
                  {item.tech.map((t) => (
                    <span key={t} className={styles.techPill}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Col 5: Static Tag */}
                <div className={styles.actionCol}>
                  <span className={styles.staticTag}>{item.actionText}</span>
                </div>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
