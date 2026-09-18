"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  FolderGit2,
  Compass,
  Zap,
  Bot,
  Terminal,
  Cpu,
  UserCheck
} from "lucide-react";
import styles from "./PageFlip.module.css";

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const CORE_STACK = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js 16",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "Docker & Cloud",
];

const AI_STACK = [
  "Gemini",
  "Claude",
  "MCP (Model Context Protocol)",
  "Ollama",
  "Codex",
  "AI Automations",
  "Supabase AI",
  "Agentic Workflows",
];

const PRODUCTS = [
  {
    tag: "DEV PLATFORM",
    name: "Web Tool Finder (WTF)",
    desc: "A developer-focused platform designed to make discovering useful web tools and utilities effortless.",
    icon: <Compass size={17} />,
  },
  {
    tag: "INTERNAL OPS",
    name: "Internal Agency CRM",
    desc: "A custom high-efficiency client and operations system built to power QDelta Agency's workflows.",
    icon: <Zap size={17} />,
  },
  {
    tag: "AGENCY PLATFORM",
    name: "QDelta Agency Site",
    desc: "The flagship digital agency presence showcasing product engineering and modern digital experiences.",
    icon: <FolderGit2 size={17} />,
  },
];

export default function PageFlip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const [activePageIndex, setActivePageIndex] = useState(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const card4 = card4Ref.current;

    let raf = 0;

    const onScroll = () => {
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollSpan = track.clientHeight - window.innerHeight;
      if (scrollSpan <= 0) return;

      const progress = clamp(-rect.top / scrollSpan, 0, 1);

      // Determine active page indicator
      if (progress < 0.28) setActivePageIndex(1);
      else if (progress < 0.58) setActivePageIndex(2);
      else if (progress < 0.86) setActivePageIndex(3);
      else setActivePageIndex(4);

      // Page 1: Flips from progress 0.15 to 0.35
      if (card1) {
        const p1 = smoothstep(0.12, 0.34, progress);
        const rot = -p1 * 105;
        const tx = -p1 * 120;
        const tz = -p1 * 180;
        const op = p1 > 0.85 ? Math.max(0, 1 - (p1 - 0.85) / 0.15) : 1;
        card1.style.transform = `rotateY(${rot}deg) translate3d(${tx}px, 0, ${tz}px)`;
        card1.style.opacity = `${op}`;
        card1.style.zIndex = `${p1 > 0.5 ? 1 : 4}`;
      }

      // Page 2: Revealed at 0.34, Flips from 0.42 to 0.64
      if (card2) {
        const p2 = smoothstep(0.42, 0.64, progress);
        const rot = -p2 * 105;
        const tx = -p2 * 120;
        const tz = -p2 * 180;
        const op = p2 > 0.85 ? Math.max(0, 1 - (p2 - 0.85) / 0.15) : 1;
        card2.style.transform = `rotateY(${rot}deg) translate3d(${tx}px, 0, ${tz}px)`;
        card2.style.opacity = `${op}`;
        card2.style.zIndex = `${p2 > 0.5 ? 1 : 3}`;
      }

      // Page 3: Revealed at 0.64, Flips from 0.70 to 0.90
      if (card3) {
        const p3 = smoothstep(0.70, 0.90, progress);
        const rot = -p3 * 105;
        const tx = -p3 * 120;
        const tz = -p3 * 180;
        const op = p3 > 0.85 ? Math.max(0, 1 - (p3 - 0.85) / 0.15) : 1;
        card3.style.transform = `rotateY(${rot}deg) translate3d(${tx}px, 0, ${tz}px)`;
        card3.style.opacity = `${op}`;
        card3.style.zIndex = `${p3 > 0.5 ? 1 : 2}`;
      }

      // Page 4: Final page
      if (card4) {
        card4.style.transform = `rotateY(0deg) translate3d(0, 0, 0)`;
        card4.style.opacity = "1";
        card4.style.zIndex = "1";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" className={styles.pageFlipSection}>
      <div ref={trackRef} className={styles.track}>
        <div className={styles.stage}>
          <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.badge}>
                  <Sparkles size={13} />
                  <span>01 // ABOUT ME</span>
                </div>
                <h2 className={styles.title}>
                  Interactive Dossier —{" "}
                  <span className={styles.titleGradient}>
                    scroll to flip through pages.
                  </span>
                </h2>
              </div>

              <div className={styles.headerRight}>
                <span className={styles.scrollPill}>Scroll to flip ↓</span>
                <span className={styles.pageIndicator}>
                  0{activePageIndex} // 04
                </span>
              </div>
            </div>

            {/* 3D Book Stage */}
            <div className={styles.bookStage}>
              <div className={styles.bookWrapper}>
                {/* PAGE 1: THE FOUNDER */}
                <div ref={card1Ref} className={styles.pageCard} style={{ zIndex: 4 }}>
                  <div className={styles.pageHeader}>
                    <span className={styles.pageNumber}>Page 01 // 04</span>
                    <span className={styles.pageCategory}>
                      <UserCheck size={13} />
                      Co-Founder @ QDelta
                    </span>
                  </div>

                  <div className={styles.pageBody}>
                    <h3 className={styles.pageHeading}>
                      Turning ambitious ideas into functional digital products.
                    </h3>
                    <p className={styles.pageLead}>
                      I’m <strong>Prabath Sai Nagireddy</strong>, a Full-Stack Developer
                      and Co-founder of <strong>QDelta Agency</strong>.
                    </p>
                    <p className={styles.pageText}>
                      My work spans engineering scalable web applications, designing intuitive
                      interfaces, and building production tools that solve real problems.
                      I believe in engineering excellence combined with clean, thoughtful design.
                    </p>

                    <div className={styles.pillGrid}>
                      <span className={styles.pillItem}>
                        <Code2 size={13} />
                        <span>Full-Stack Architecture</span>
                      </span>
                      <span className={styles.pillItem}>
                        <FolderGit2 size={13} />
                        <span>Product Engineering</span>
                      </span>
                      <span className={styles.pillItem}>
                        <Zap size={13} />
                        <span>High Performance</span>
                      </span>
                    </div>
                  </div>

                  <div className={styles.pageFooter}>
                    <a href="#contact" className={styles.primaryBtn}>
                      <span>Let's Connect</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <span className={styles.pageNumber}>[ SCROLL FOR TECH STACK ↓ ]</span>
                  </div>
                </div>

                {/* PAGE 2: CORE STACK & SYSTEMS */}
                <div ref={card2Ref} className={styles.pageCard} style={{ zIndex: 3 }}>
                  <div className={styles.pageHeader}>
                    <span className={styles.pageNumber}>Page 02 // 04</span>
                    <span className={styles.pageCategory}>
                      <Cpu size={13} />
                      Full-Stack Stack
                    </span>
                  </div>

                  <div className={styles.pageBody}>
                    <h3 className={styles.pageHeading}>
                      Full-stack engineering built on modern foundations.
                    </h3>
                    <p className={styles.pageLead}>
                      From responsive React interfaces to high-throughput Node.js backends and
                      optimized MongoDB & Supabase data models.
                    </p>

                    <p className={styles.pageText}>
                      I engineer systems that scale effortlessly, with clean TypeScript types,
                      resilient REST & GraphQL APIs, and robust cloud deployments.
                    </p>

                    <div className={styles.pillGrid}>
                      {CORE_STACK.map((tech) => (
                        <span key={tech} className={styles.pillItem}>
                          <Code2 size={12} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.pageFooter}>
                    <span className={styles.pageCategory}>Engineering Core</span>
                    <span className={styles.pageNumber}>[ SCROLL FOR PRODUCTS ↓ ]</span>
                  </div>
                </div>

                {/* PAGE 3: SHIPPED PRODUCTS */}
                <div ref={card3Ref} className={styles.pageCard} style={{ zIndex: 2 }}>
                  <div className={styles.pageHeader}>
                    <span className={styles.pageNumber}>Page 03 // 04</span>
                    <span className={styles.pageCategory}>
                      <FolderGit2 size={13} />
                      Shipped via QDelta
                    </span>
                  </div>

                  <div className={styles.pageBody}>
                    <h3 className={styles.pageHeading}>
                      Products & Platforms Built from Concept to Reality.
                    </h3>

                    <div className={styles.productsList}>
                      {PRODUCTS.map((prod) => (
                        <div key={prod.name} className={styles.productCard}>
                          <div>
                            <span className={styles.productTag}>{prod.tag}</span>
                            <h4 className={styles.productTitle}>
                              <span>{prod.name}</span>
                              {prod.icon}
                            </h4>
                          </div>
                          <p className={styles.productDesc}>{prod.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.pageFooter}>
                    <span className={styles.pageCategory}>3 Active Platforms</span>
                    <span className={styles.pageNumber}>[ SCROLL FOR AI LAB ↓ ]</span>
                  </div>
                </div>

                {/* PAGE 4: AI LAB & PHILOSOPHY */}
                <div ref={card4Ref} className={styles.pageCard} style={{ zIndex: 1 }}>
                  <div className={styles.pageHeader}>
                    <span className={styles.pageNumber}>Page 04 // 04</span>
                    <span className={styles.pageCategory}>
                      <Bot size={13} />
                      AI & Philosophy
                    </span>
                  </div>

                  <div className={styles.pageBody}>
                    <div className={styles.matrixGrid}>
                      <div className={styles.matrixItem}>
                        <span className={styles.matrixNum}>01 // LOGIC</span>
                        <span className={styles.matrixLabel}>Technology</span>
                      </div>
                      <div className={styles.matrixItem}>
                        <span className={styles.matrixNum}>02 // PURPOSE</span>
                        <span className={styles.matrixLabel}>Product</span>
                      </div>
                      <div className={styles.matrixItem}>
                        <span className={styles.matrixNum}>03 // FEEL</span>
                        <span className={styles.matrixLabel}>Design</span>
                      </div>
                    </div>

                    <div className={styles.quoteBox}>
                      “Building software that is not only technically solid, but also simple, useful, and genuinely enjoyable to use.”
                    </div>

                    <div className={styles.pillGrid}>
                      {AI_STACK.map((item) => (
                        <span key={item} className={styles.pillItem}>
                          <Terminal size={12} />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.pageFooter}>
                    <a href="#contact" className={styles.primaryBtn}>
                      <span>Start a Project</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <span className={styles.pageNumber}>[ COMPLETE ]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
