"use client";

import React from "react";
import {
  ArrowUpRight,
  Sparkles,
  Briefcase,
  Award,
  CheckCircle2,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";
import styles from "./ExperienceSection.module.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  isActive?: boolean;
  description: string;
  tech: string[];
}

interface CredentialItem {
  title: string;
  issuer: string;
  issuerIcon: React.ReactNode;
  badge?: string;
  description: string;
  verifyUrl: string;
  verifyCode: string;
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "QDelta Agency",
    role: "Co-Founder & Lead Architect",
    period: "2024 — PRESENT",
    type: "Active Venture",
    isActive: true,
    description:
      "Co-founded agency operations and architected high-performance web systems, internal CRM pipelines, and client-facing digital products with modern motion craft.",
    tech: ["Next.js 15", "TypeScript", "Node.js", "System Architecture", "Tailwind CSS"],
  },
  {
    company: "Rengy Private Limited",
    role: "MERN Stack Developer Intern",
    period: "INTERNSHIP",
    type: "Engineering Internship",
    isActive: false,
    description:
      "Engineered production web modules, designed reactive UI components, and integrated scalable RESTful APIs with MongoDB database pipelines.",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB", "REST APIs"],
  },
];

const CREDENTIALS: CredentialItem[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    issuerIcon: <SiGoogle size={14} className={styles.issuerIcon} />,
    badge: "8-Course Specialization",
    description:
      "Hands-on mastery of Python security automation, Linux administration, SQL querying, SIEM tools, and intrusion detection & threat mitigation.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/644G6PR3P2XZ",
    verifyCode: "ID: 644G6PR3P2XZ",
    skills: ["Python Automation", "Linux", "SQL", "SIEM & IDS", "Threat Mitigation"],
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    issuerIcon: <SiGoogle size={14} className={styles.issuerIcon} />,
    badge: "97% Grade Achieved",
    description:
      "Applied generative AI tools, prompt engineering frameworks, and workflow automation to solve modern software and productivity challenges.",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/VSZWLX9Z9URR",
    verifyCode: "ID: VSZWLX9Z9URR",
    skills: ["Generative AI", "Prompt Engineering", "AI Workflows", "Productivity"],
  },
  {
    title: "MERN Full Stack Web Development",
    issuer: "Innomatics Research Labs",
    issuerIcon: <Award size={14} className={styles.issuerIcon} />,
    badge: "Verified Certificate",
    description:
      "Comprehensive full-stack engineering covering React frontend architectures, Node/Express backend servers, and MongoDB database design.",
    verifyUrl: "https://online.innomatics.in/verify/CC_501142",
    verifyCode: "ID: CC_501142",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
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
            Experience &amp; <span className={styles.titleGradient}>Verified Proof.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25} direction="up" distance={22}>
          <p className={styles.subtitle}>
            Hands-on engineering leadership paired with frontier cybersecurity, generative AI, and full-stack credentials.
          </p>
        </ScrollReveal>
      </div>

      {/* Dual Column Horizon Grid (No Heavy Boxes) */}
      <div className={styles.dualGrid}>
        {/* Left Column: Career Trajectory */}
        <div className={styles.column}>
          <ScrollReveal delay={0.1} direction="up" distance={20}>
            <div className={styles.columnHeader}>
              <Briefcase size={16} className={styles.columnIcon} />
              <h3 className={styles.columnTitle}>Career Trajectory</h3>
              <span className={styles.columnCount}>02 ROLES</span>
            </div>
          </ScrollReveal>

          <div className={styles.timelineTrack}>
            <div className={styles.timelineFilament} />

            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal
                key={exp.company}
                delay={0.15 + idx * 0.1}
                direction="up"
                distance={24}
              >
                <div className={styles.experienceRow}>
                  {/* Node marker on vertical timeline line */}
                  <div
                    className={`${styles.nodeMarker} ${
                      exp.isActive ? styles.nodeMarkerActive : ""
                    }`}
                  />

                  {/* Top Meta Line */}
                  <div className={styles.metaTopLine}>
                    <span className={styles.periodBadge}>{exp.period}</span>
                    <span
                      className={`${styles.statusPill} ${
                        !exp.isActive ? styles.statusPillIntern : ""
                      }`}
                    >
                      {exp.isActive && <span className={styles.greenDot} />}
                      <span>{exp.type}</span>
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h4 className={styles.roleTitle}>{exp.role}</h4>
                  <div className={styles.companyRow}>
                    <span>{exp.company}</span>
                  </div>

                  {/* Punchy Description */}
                  <p className={styles.roleDescription}>{exp.description}</p>

                  {/* Tech Tags */}
                  <div className={styles.techPills}>
                    {exp.tech.map((t) => (
                      <span key={t} className={styles.techPill}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column: Verified Credentials */}
        <div className={styles.column}>
          <ScrollReveal delay={0.1} direction="up" distance={20}>
            <div className={styles.columnHeader}>
              <CheckCircle2 size={16} className={styles.columnIcon} />
              <h3 className={styles.columnTitle}>Verified Credentials</h3>
              <span className={styles.columnCount}>03 ISSUANCES</span>
            </div>
          </ScrollReveal>

          <div className={styles.credentialsList}>
            {CREDENTIALS.map((cred, idx) => (
              <ScrollReveal
                key={cred.title}
                delay={0.15 + idx * 0.1}
                direction="up"
                distance={24}
              >
                <div className={styles.credentialRow}>
                  {/* Top: Issuer + Grade Badge + Verification Link */}
                  <div className={styles.credentialTop}>
                    <div className={styles.credIssuerInfo}>
                      <span className={styles.issuerTag}>
                        {cred.issuerIcon}
                        <span>{cred.issuer}</span>
                      </span>

                      {cred.badge && (
                        <span className={styles.gradePill}>{cred.badge}</span>
                      )}
                    </div>

                    <a
                      href={cred.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyButton}
                      title={`Verify ${cred.title}`}
                    >
                      <span>Verify Credential</span>
                      <ArrowUpRight size={13} className={styles.verifyArrow} />
                    </a>
                  </div>

                  {/* Credential Name */}
                  <h4 className={styles.credentialTitle}>{cred.title}</h4>

                  {/* Description */}
                  <p className={styles.credentialDesc}>{cred.description}</p>

                  {/* Footer with Verification Code & Skills */}
                  <div className={styles.credFooter}>
                    <span className={styles.credCodeTag}>{cred.verifyCode}</span>
                    <div className={styles.techPills}>
                      {cred.skills.map((s) => (
                        <span key={s} className={styles.techPill}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
