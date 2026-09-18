"use client";

import React, { useEffect, useRef } from "react";
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
    step: "01",
    title: "PRODUCT",
    from: "Concept",
    to: "Product",
    desc: "Translating ambiguous ideas into clearly scoped, validated digital products.",
    icon: <Box size={18} />,
  },
  {
    step: "02",
    title: "DESIGN",
    from: "Interface",
    to: "Experience",
    desc: "Crafting modern design systems, fluid micro-interactions, and UX clarity.",
    icon: <Palette size={18} />,
  },
  {
    step: "03",
    title: "ENGINEERING",
    from: "Frontend",
    to: "Backend",
    desc: "Building performant React frontends, robust Node/Express APIs, and scalable databases.",
    icon: <Code2 size={18} />,
  },
  {
    step: "04",
    title: "AI",
    from: "AI-Assisted",
    to: "Workflows",
    desc: "Leveraging LLMs, MCP tools, and modern agentic workflows for accelerated shipping.",
    icon: <Sparkles size={18} />,
  },
];

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

export default function QDeltaSection() {
  const productsGridRef = useRef<HTMLDivElement>(null);
  const productCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rolesGridRef = useRef<HTMLDivElement>(null);
  const roleCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 860;

      // 1. PRODUCTS FAN-OUT ANIMATION
      const prodGrid = productsGridRef.current;
      if (prodGrid) {
        if (!isDesktop) {
          productCardRefs.current.forEach((card) => {
            if (card) {
              card.style.transform = "";
              card.style.opacity = "";
              card.style.zIndex = "";
            }
          });
        } else {
          const rect = prodGrid.getBoundingClientRect();
          const startY = windowHeight * 0.88;
          const endY = windowHeight * 0.20;
          const rawP = (startY - rect.top) / (startY - endY || 1);
          const p = clamp(rawP, 0, 1);
          const t = p * p * (3 - 2 * p);
          const inv = 1 - t;

          const card1 = productCardRefs.current[0];
          const card2 = productCardRefs.current[1];
          const card3 = productCardRefs.current[2];

          if (card1) {
            card1.style.transform = `translate3d(calc(${inv * 100}% + ${inv * 1.5}rem), ${inv * 6}px, 0) rotate(${-5.5 * inv}deg) scale(${0.94 + 0.06 * t})`;
            card1.style.opacity = `${0.82 + 0.18 * t}`;
            card1.style.zIndex = t > 0.85 ? "2" : "1";
          }
          if (card2) {
            card2.style.transform = `translate3d(0, 0, 0) scale(1)`;
            card2.style.zIndex = "3";
          }
          if (card3) {
            card3.style.transform = `translate3d(calc(${-inv * 100}% - ${inv * 1.5}rem), ${inv * 6}px, 0) rotate(${5.5 * inv}deg) scale(${0.94 + 0.06 * t})`;
            card3.style.opacity = `${0.82 + 0.18 * t}`;
            card3.style.zIndex = t > 0.85 ? "2" : "1";
          }
        }
      }

      // 2. ROLES 4-CARD 3D FAN-OUT DECK ANIMATION
      const rolesGrid = rolesGridRef.current;
      if (rolesGrid) {
        if (!isDesktop) {
          roleCardRefs.current.forEach((card) => {
            if (card) {
              card.style.transform = "";
              card.style.opacity = "";
              card.style.zIndex = "";
            }
          });
        } else {
          const rect = rolesGrid.getBoundingClientRect();
          const startY = windowHeight * 0.88;
          const endY = windowHeight * 0.20;
          const rawP = (startY - rect.top) / (startY - endY || 1);
          const p = clamp(rawP, 0, 1);
          const t = p * p * (3 - 2 * p);
          const inv = 1 - t;

          const rcard1 = roleCardRefs.current[0]; // 01 Product (Leftmost)
          const rcard2 = roleCardRefs.current[1]; // 02 Design (Left-Center, in front)
          const rcard3 = roleCardRefs.current[2]; // 03 Engineering (Right-Center, in front)
          const rcard4 = roleCardRefs.current[3]; // 04 AI (Rightmost)

          // Card 1: Starts tucked behind Card 2 (shifted right 1 column + gap, rotated -9.5deg)
          if (rcard1) {
            rcard1.style.transform = `translate3d(calc(${inv * 100}% + ${inv * 1.25}rem), ${inv * 8}px, 0) rotate(${-9.5 * inv}deg) scale(${0.93 + 0.07 * t})`;
            rcard1.style.opacity = `${0.82 + 0.18 * t}`;
            rcard1.style.zIndex = t > 0.85 ? "2" : "1";
          }

          // Card 2: Starts slightly left-center in front (rotated -3.5deg)
          if (rcard2) {
            rcard2.style.transform = `translate3d(calc(${inv * 25}% + ${inv * 0.3}rem), ${inv * 2}px, 0) rotate(${-3.5 * inv}deg) scale(${0.97 + 0.03 * t})`;
            rcard2.style.opacity = "1";
            rcard2.style.zIndex = "4";
          }

          // Card 3: Starts slightly right-center in front (rotated +3.5deg)
          if (rcard3) {
            rcard3.style.transform = `translate3d(calc(${-inv * 25}% - ${inv * 0.3}rem), ${inv * 2}px, 0) rotate(${3.5 * inv}deg) scale(${0.97 + 0.03 * t})`;
            rcard3.style.opacity = "1";
            rcard3.style.zIndex = "4";
          }

          // Card 4: Starts tucked behind Card 3 (shifted left 1 column + gap, rotated +9.5deg)
          if (rcard4) {
            rcard4.style.transform = `translate3d(calc(${-inv * 100}% - ${inv * 1.25}rem), ${inv * 8}px, 0) rotate(${9.5 * inv}deg) scale(${0.93 + 0.07 * t})`;
            rcard4.style.opacity = `${0.82 + 0.18 * t}`;
            rcard4.style.zIndex = t > 0.85 ? "2" : "1";
          }
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

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

        {/* 3. SECTION PRODUCTS (SCROLL FAN-OUT ANIMATION) */}
        <div className={styles.productsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>PRODUCTS</span>
            <h3 className={styles.sectionSubtitle}>
              Three products. One direction.
            </h3>
          </div>

          <div ref={productsGridRef} className={styles.productsGrid}>
            {PRODUCTS.map((prod, idx) => (
              <div
                key={prod.title}
                ref={(el) => {
                  productCardRefs.current[idx] = el;
                }}
                className={styles.productCard}
              >
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

        {/* 4. SECTION MY ROLE (4-CARD 3D SCROLL FAN-OUT) */}
        <div className={styles.roleSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>MY ROLE</span>
            <h3 className={styles.sectionSubtitle}>
              From idea to shipped product.
            </h3>
          </div>

          <div ref={rolesGridRef} className={styles.rolesGrid}>
            {ROLES.map((role, idx) => (
              <div
                key={role.title}
                ref={(el) => {
                  roleCardRefs.current[idx] = el;
                }}
                className={styles.roleCard}
              >
                <div className={styles.roleCardTop}>
                  <div className={styles.roleStepTag}>
                    <span className={styles.roleStepNum}>{role.step}</span>
                    <span className={styles.roleTitle}>{role.title}</span>
                  </div>
                  <div className={styles.roleIconWrap}>{role.icon}</div>
                </div>

                <div className={styles.roleFlow}>
                  <span>{role.from}</span>
                  <ArrowRight size={13} className={styles.flowArrow} />
                  <span>{role.to}</span>
                </div>

                <p className={styles.roleDesc}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
