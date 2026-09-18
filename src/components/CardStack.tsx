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
import styles from "./CardStack.module.css";

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
  "Supabase",
  "Tailwind",
  "Docker",
];

const AI_STACK = [
  "Gemini",
  "Claude",
  "Codex",
  "Ollama",
  "MCP",
  "AI Automation",
];

const PRODUCTS = [
  {
    tag: "DEV PLATFORM",
    name: "Web Tool Finder (WTF)",
    desc: "A developer-focused platform for discovering useful web tools faster.",
    icon: <Compass size={17} />,
  },
  {
    tag: "INTERNAL PRODUCT",
    name: "QDelta CRM",
    desc: "A custom CRM built to power QDelta's internal workflows.",
    icon: <Zap size={17} />,
  },
  {
    tag: "AGENCY PLATFORM",
    name: "QDelta Agency",
    desc: "The digital home of QDelta and its services.",
    icon: <FolderGit2 size={17} />,
  },
];

export default function CardStack() {
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

      // Active indicator
      if (progress < 0.29) setActivePageIndex(1);
      else if (progress < 0.59) setActivePageIndex(2);
      else if (progress < 0.88) setActivePageIndex(3);
      else setActivePageIndex(4);

      // Transitions with extended reading plateaus
      const t1 = smoothstep(0.22, 0.36, progress); // Card 1 flies off, Card 2 enters
      const t2 = smoothstep(0.52, 0.66, progress); // Card 2 flies off, Card 3 enters
      const t3 = smoothstep(0.82, 0.94, progress); // Card 3 flies off, Card 4 enters

      // --- CARD 1 (Top card initially, fans away to the left) ---
      if (card1) {
        const tx = -125 * t1;
        const ty = -35 * t1;
        const rot = -16 * t1;
        const op = 1 - t1;
        card1.style.transform = `translate3d(${tx}%, ${ty}px, 0) rotate(${rot}deg)`;
        card1.style.opacity = `${op}`;
        card1.style.pointerEvents = t1 > 0.8 ? "none" : "auto";
        card1.style.zIndex = "4";
      }

      // --- CARD 2 (Rests fanned right +3.5deg, straightens up, then fans away to the right) ---
      if (card2) {
        if (t2 === 0) {
          // Entering to front stage
          const rot = 3.5 * (1 - t1);
          const tx = 18 * (1 - t1);
          const ty = 14 * (1 - t1);
          const sc = 0.96 + 0.04 * t1;
          const br = 0.8 + 0.2 * t1;
          const op = 0.7 + 0.3 * t1;
          card2.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${sc})`;
          card2.style.filter = `brightness(${br})`;
          card2.style.opacity = `${op}`;
          card2.style.pointerEvents = t1 > 0.5 ? "auto" : "none";
          card2.style.zIndex = "3";
        } else {
          // Fans away to right
          const tx = 125 * t2;
          const ty = -35 * t2;
          const rot = 16 * t2;
          const op = 1 - t2;
          card2.style.transform = `translate3d(${tx}%, ${ty}px, 0) rotate(${rot}deg) scale(1)`;
          card2.style.filter = "brightness(1)";
          card2.style.opacity = `${op}`;
          card2.style.pointerEvents = t2 > 0.8 ? "none" : "auto";
          card2.style.zIndex = "3";
        }
      }

      // --- CARD 3 (Rests fanned left -3.2deg, steps forward, straightens, then fans left) ---
      if (card3) {
        if (t3 === 0) {
          if (t2 === 0) {
            // Resting deep in deck (as Card 1 & 2 are active)
            const step1 = t1;
            const rot = -3.2 + 0.5 * step1;
            const tx = -16 + 4 * step1;
            const ty = 26 - 8 * step1;
            const sc = 0.92 + 0.03 * step1;
            const br = 0.65 + 0.1 * step1;
            const op = 0.5 + 0.2 * step1;
            card3.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${sc})`;
            card3.style.filter = `brightness(${br})`;
            card3.style.opacity = `${op}`;
            card3.style.pointerEvents = "none";
            card3.style.zIndex = "2";
          } else {
            // Straightening into full focus
            const rot = -2.7 * (1 - t2);
            const tx = -12 * (1 - t2);
            const ty = 18 * (1 - t2);
            const sc = 0.95 + 0.05 * t2;
            const br = 0.75 + 0.25 * t2;
            const op = 0.7 + 0.3 * t2;
            card3.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${sc})`;
            card3.style.filter = `brightness(${br})`;
            card3.style.opacity = `${op}`;
            card3.style.pointerEvents = t2 > 0.5 ? "auto" : "none";
            card3.style.zIndex = "2";
          }
        } else {
          // Fans away to left
          const tx = -125 * t3;
          const ty = -35 * t3;
          const rot = -16 * t3;
          const op = 1 - t3;
          card3.style.transform = `translate3d(${tx}%, ${ty}px, 0) rotate(${rot}deg) scale(1)`;
          card3.style.filter = "brightness(1)";
          card3.style.opacity = `${op}`;
          card3.style.pointerEvents = t3 > 0.8 ? "none" : "auto";
          card3.style.zIndex = "2";
        }
      }

      // --- CARD 4 (Rests fanned right +2.5deg, steps forward, straightens to final focus) ---
      if (card4) {
        if (t3 === 0) {
          const overallProgress = smoothstep(0, 0.66, progress);
          const rot = 2.5 - 0.8 * overallProgress;
          const tx = 14 - 4 * overallProgress;
          const ty = 34 - 14 * overallProgress;
          const sc = 0.88 + 0.06 * overallProgress;
          const br = 0.5 + 0.2 * overallProgress;
          const op = 0.4 + 0.3 * overallProgress;
          card4.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${sc})`;
          card4.style.filter = `brightness(${br})`;
          card4.style.opacity = `${op}`;
          card4.style.pointerEvents = "none";
          card4.style.zIndex = "1";
        } else {
          // Straightening into full focus
          const rot = 1.7 * (1 - t3);
          const tx = 10 * (1 - t3);
          const ty = 20 * (1 - t3);
          const sc = 0.94 + 0.06 * t3;
          const br = 0.7 + 0.3 * t3;
          const op = 0.7 + 0.3 * t3;
          card4.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${sc})`;
          card4.style.filter = `brightness(${br})`;
          card4.style.opacity = `${op}`;
          card4.style.pointerEvents = t3 > 0.5 ? "auto" : "none";
          card4.style.zIndex = "1";
        }
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
    <section id="about" className={styles.stackSection}>
      <div ref={trackRef} className={styles.track}>
        <div className={styles.stage}>
          <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <h2 className={styles.title}>
                  <span className={styles.titleLine1}>
                    Turning ideas into digital products
                  </span>
                  <span className={styles.titleLine2}>
                    — crafted with full&#8209;stack precision.
                  </span>
                </h2>
              </div>
            </div>

            {/* Stacking Card Deck Stage */}
            <div className={styles.deckStage}>
              <div className={styles.deckWrapper}>
                {/* CARD 1: THE FOUNDER */}
                <div ref={card1Ref} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardTag}>
                      <UserCheck size={13} />
                      CO-FOUNDER @ QDELTA
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardHeading}>
                      Building digital products from idea to reality.
                    </h3>
                    <p className={styles.cardLead}>
                      I’m <strong>Nagireddy Sai Prabath</strong>, a Full-Stack Developer
                      and Co-founder of <strong>QDelta Agency</strong>.
                    </p>
                    <p className={styles.cardText}>
                      I build practical digital products where engineering, product thinking, and design come together.
                    </p>

                    <div className={styles.pillGrid}>
                      <span className={styles.pillItem}>
                        <Code2 size={13} />
                        <span>Full-Stack Development</span>
                      </span>
                      <span className={styles.pillItem}>
                        <FolderGit2 size={13} />
                        <span>Product Engineering</span>
                      </span>
                      <span className={styles.pillItem}>
                        <Sparkles size={13} />
                        <span>AI & Modern Web</span>
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.cardTag}>Co-Founder & Lead</span>
                  </div>
                </div>

                {/* CARD 2: CORE STACK & SYSTEMS */}
                <div ref={card2Ref} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardTag}>
                      <Cpu size={13} />
                      FULL-STACK ENGINEERING
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardHeading}>
                      From interface to infrastructure.
                    </h3>
                    <p className={styles.cardLead}>
                      I build complete web applications — from clean React interfaces to Node.js backends, databases, APIs, and deployment.
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

                  <div className={styles.cardFooter}>
                    <span className={styles.cardTag}>Engineering Stack</span>
                  </div>
                </div>

                {/* CARD 3: SHIPPED PRODUCTS */}
                <div ref={card3Ref} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardTag}>
                      <FolderGit2 size={13} />
                      BUILT AT QDELTA
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardHeading}>
                      Products built from idea to reality.
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

                  <div className={styles.cardFooter}>
                    <span className={styles.cardTag}>03 PRODUCTS BUILT</span>
                  </div>
                </div>

                {/* CARD 4: AI LAB & PHILOSOPHY */}
                <div ref={card4Ref} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardTag}>
                      <Bot size={13} />
                      ENGINEERING PHILOSOPHY
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.matrixGrid}>
                      <div className={styles.matrixItem}>
                        <span className={styles.matrixNum}>01 // BUILD</span>
                        <span className={styles.matrixLabel}>Technology</span>
                      </div>
                      <div className={styles.matrixItem}>
                        <span className={styles.matrixNum}>02 // SOLVE</span>
                        <span className={styles.matrixLabel}>Product</span>
                      </div>
                      <div className={styles.matrixItem}>
                        <span className={styles.matrixNum}>03 // REFINE</span>
                        <span className={styles.matrixLabel}>Design</span>
                      </div>
                    </div>

                    <div className={styles.quoteBox}>
                      “Build software that is technically solid, genuinely useful, and simple to use.”
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

                  <div className={styles.cardFooter}>
                    <span className={styles.cardTag}>AI & Engineering</span>
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
