"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Zap,
  FolderGit2,
  Box,
  Palette,
  Code2,
  Sparkles,
} from "lucide-react";
import styles from "./QDeltaSection.module.css";

interface ProductItem {
  title: string;
  category: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

const PRODUCTS: ProductItem[] = [
  {
    title: "QDELTA WEBSITE",
    category: "Agency Platform",
    desc: "The digital home of QDelta Agency, engineered to showcase our capabilities and client solutions.",
    href: "https://qdelta.agency",
    icon: <FolderGit2 size={18} />,
  },
  {
    title: "QDELTA CRM",
    category: "Internal Platform",
    desc: "A custom internal business management platform built to power team workflows and client pipelines.",
    href: "#",
    icon: <Zap size={18} />,
  },
  {
    title: "WEB TOOL FINDER",
    category: "Developer Platform",
    desc: "A curated developer platform designed to help engineers discover useful web utilities faster.",
    href: "#",
    icon: <Compass size={18} />,
  },
];

const ROLES = [
  {
    title: "PRODUCT",
    flow: "Concept → Product",
    desc: "Translating ambiguous ideas into clearly scoped, validated digital products.",
    icon: <Box size={18} />,
  },
  {
    title: "DESIGN",
    flow: "Interface → Experience",
    desc: "Crafting modern design systems, fluid micro-interactions, and UX clarity.",
    icon: <Palette size={18} />,
  },
  {
    title: "ENGINEERING",
    flow: "Frontend → Backend",
    desc: "Building performant React frontends, robust Node/Express APIs, and scalable databases.",
    icon: <Code2 size={18} />,
  },
  {
    title: "AI",
    flow: "AI-assisted development",
    desc: "Leveraging LLMs, MCP tools, and modern agentic workflows for accelerated shipping.",
    icon: <Sparkles size={18} />,
  },
];

export default function QDeltaSection() {
  return (
    <section id="qdelta" className={styles.section}>
      <div className={styles.container}>
        {/* 1. HEADER & HERO INTRODUCTION */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrowRow}>
            <span className={styles.agencyLabel}>QDELTA AGENCY</span>
            <div className={styles.statusBadge}>
              <span>LAUNCHED SEPTEMBER 2026</span>
              <span className={styles.statusSep}>·</span>
              <span className={styles.udyamText}>
                <ShieldCheck size={13} className={styles.udyamIcon} />
                UDYAM REGISTERED
              </span>
            </div>
          </div>

          <h2 className={styles.mainTitle}>
            Crafting Digital Products from Concept to Code
          </h2>

          <p className={styles.introLead}>
            <span className={styles.leadLine1}>
              As Co-Founder and Developer, I design, code, and deploy QDelta’s products
            </span>
            <span className={styles.leadLine2}>
              <span className={styles.ghostPrefix} aria-hidden="true">
                {"As Co-Founder and Developer, I "}
              </span>
              <span>
                — bridging intuitive interface design with scalable backend infrastructure.
              </span>
            </span>
          </p>
        </div>

        {/* 2. CO-FOUNDER · DEVELOPER BENTO CARD */}
        <div className={styles.founderCard}>
          <div className={styles.founderCardGlow} />

          <div className={styles.founderCardContent}>
            <div className={styles.founderTag}>
              <span className={styles.tagDot} />
              <span>CO-FOUNDER · DEVELOPER</span>
            </div>

            <h3 className={styles.founderHeading}>
              Building the technology behind QDelta
            </h3>

            <p className={styles.founderDesc}>
              I co-founded QDelta and lead the development of our digital
              products.
            </p>
          </div>

          <div className={styles.founderMetrics}>
            <div className={styles.metricBox}>
              <span className={styles.metricNumber}>03</span>
              <span className={styles.metricLabel}>PRODUCTS</span>
            </div>
            <div className={styles.metricDivider} />
            <div className={styles.metricBox}>
              <span className={styles.metricNumber}>2026</span>
              <span className={styles.metricLabel}>FOUNDED</span>
            </div>
          </div>
        </div>

        {/* 3. SECTION PRODUCTS */}
        <div className={styles.productsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>PRODUCTS</span>
            <h3 className={styles.sectionSubtitle}>
              Three products. One direction.
            </h3>
          </div>

          <div className={styles.productsGrid}>
            {PRODUCTS.map((prod) => (
              <div key={prod.title} className={styles.productCard}>
                <div className={styles.productCardInner}>
                  <div className={styles.productTop}>
                    <div className={styles.productHeaderRow}>
                      <span className={styles.productCategory}>
                        {prod.category}
                      </span>
                      <div className={styles.productIcon}>{prod.icon}</div>
                    </div>

                    <h4 className={styles.productTitle}>{prod.title}</h4>
                  </div>

                  <p className={styles.productDesc}>{prod.desc}</p>

                  <div className={styles.productAction}>
                    <a
                      href={prod.href}
                      target={
                        prod.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        prod.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={styles.viewProjectLink}
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight size={14} className={styles.arrowIcon} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SECTION MY ROLE */}
        <div className={styles.roleSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>MY ROLE</span>
            <h3 className={styles.sectionSubtitle}>
              From idea to shipped product.
            </h3>
          </div>

          <div className={styles.rolesGrid}>
            {ROLES.map((role) => (
              <div key={role.title} className={styles.roleCard}>
                <div className={styles.roleCardTop}>
                  <span className={styles.roleTitle}>{role.title}</span>
                  <div className={styles.roleIconWrap}>{role.icon}</div>
                </div>
                <div className={styles.roleFlow}>{role.flow}</div>
                <p className={styles.roleDesc}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
