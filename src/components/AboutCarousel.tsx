"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Sparkles,
  Code2,
  Cpu,
  Zap,
  Bot,
  Layers,
  FolderGit2,
  UserCheck,
  Compass,
  Terminal,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./AboutCarousel.module.css";

interface CardData {
  id: string;
  tag: string;
  tagIcon: React.ReactNode;
  heading: string;
  lead?: string;
  body: string;
  src: string;
  objectPosition?: string;
  pills: { label: string; icon?: React.ReactNode }[];
  footerNote: string;
  bulletItems?: { name: string; tag: string; desc: string; icon: React.ReactNode }[];
}

const CARDS: CardData[] = [
  {
    id: "founder",
    tag: "01 // THE FOUNDER",
    tagIcon: <UserCheck size={14} />,
    heading: "Nagireddy Sai Prabath",
    lead: "Full-Stack Developer & Co-Founder of QDelta.",
    body: "I build practical digital products where engineering rigor, product thinking, and modern design come together to create seamless experiences.",
    src: "/prabath-founder.jpg",
    objectPosition: "center 16%",
    pills: [
      { label: "Full-Stack Dev", icon: <Code2 size={12} /> },
      { label: "Product Engineering", icon: <FolderGit2 size={12} /> },
      { label: "AI & Modern Web", icon: <Sparkles size={12} /> },
    ],
    footerNote: "Co-Founder & Technical Lead",
  },
  {
    id: "engineering",
    tag: "02 // FULL-STACK CORE",
    tagIcon: <Cpu size={14} />,
    heading: "Interface to Infrastructure",
    lead: "Complete web applications built for scale.",
    body: "Engineering end-to-end architectures — from responsive Next.js interfaces to robust Node.js backends, databases, APIs, and cloud deployments.",
    src: "/workspace-code.jpg",
    objectPosition: "center 48%",
    pills: [
      { label: "Next.js 15" },
      { label: "React 19" },
      { label: "Node.js" },
      { label: "Express" },
      { label: "Supabase" },
      { label: "PostgreSQL" },
      { label: "MongoDB" },
      { label: "Docker" },
    ],
    footerNote: "Full-Stack Engineering Stack",
  },
  {
    id: "products",
    tag: "03 // BUILT AT QDELTA",
    tagIcon: <FolderGit2 size={14} />,
    heading: "Shipped Products",
    lead: "Turning ideas into battle-tested products.",
    body: "Proprietary platforms and internal automation systems engineered from the ground up to solve real workflows.",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop",
    bulletItems: [
      {
        name: "Web Tool Finder (WTF)",
        tag: "DEV PLATFORM",
        desc: "Developer directory for discovering useful tools faster.",
        icon: <Compass size={13} />,
      },
      {
        name: "QDelta CRM",
        tag: "INTERNAL OPS",
        desc: "Custom high-efficiency operations & pipeline hub.",
        icon: <Zap size={13} />,
      },
      {
        name: "QDelta Agency",
        tag: "DIGITAL STUDIO",
        desc: "Flagship home showcasing bespoke product engineering.",
        icon: <FolderGit2 size={13} />,
      },
    ],
    pills: [
      { label: "WTF Platform" },
      { label: "QDelta CRM" },
      { label: "QDelta Agency" },
    ],
    footerNote: "03 Active Ecosystem Products",
  },
  {
    id: "ai",
    tag: "04 // AI LAB & AGENTS",
    tagIcon: <Bot size={14} />,
    heading: "AI-Native Intelligence",
    lead: "Autonomous workflows & LLM integration.",
    body: "Harnessing frontier models, Model Context Protocol (MCP) servers, autonomous agent loops, and local models for production velocity.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    pills: [
      { label: "Gemini", icon: <Terminal size={11} /> },
      { label: "Claude", icon: <Terminal size={11} /> },
      { label: "MCP Protocol", icon: <Terminal size={11} /> },
      { label: "Ollama", icon: <Terminal size={11} /> },
      { label: "Codex", icon: <Terminal size={11} /> },
      { label: "AI Automation", icon: <Terminal size={11} /> },
    ],
    footerNote: "Agentic MCP Systems",
  },
  {
    id: "philosophy",
    tag: "05 // PHILOSOPHY",
    tagIcon: <Layers size={14} />,
    heading: "Build · Solve · Refine",
    lead: "Zero compromise on craft and speed.",
    body: "“Build software that is technically solid, genuinely useful, and simple to use — with zero bloat and sub-100ms response times.”",
    src: "/prabath-coding.jpg",
    objectPosition: "center 32%",
    pills: [
      { label: "Sub-100ms Latency" },
      { label: "60fps Motion" },
      { label: "Zero Bloat" },
      { label: "Pixel Perfect" },
    ],
    footerNote: "Core Engineering Standards",
  },
];

export default function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);

  const lastIndexChangeTimeRef = useRef(0);

  const scrollToCard = useCallback((index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(CARDS.length - 1, index));
    const rect = containerRef.current.getBoundingClientRect();
    const pinTopDoc = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScrollable <= 0) return;

    lastIndexChangeTimeRef.current = 0; // Allow instant change on click/keyboard
    currentIndexRef.current = clampedIndex;
    setCurrentIndex(clampedIndex);

    // Target centers: Card 0-3 in active zones, Card 4 in wide hold zone well before Section 3 rises (at 0.84)
    const CARD_TARGET_PROGRESS = [0.065, 0.21, 0.355, 0.50, 0.65];
    const targetProgress = CARD_TARGET_PROGRESS[clampedIndex] ?? 0.5;
    const targetScrollY = pinTopDoc + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndexRef.current < CARDS.length - 1) {
      scrollToCard(currentIndexRef.current + 1);
    } else {
      const qdelta = document.getElementById("qdelta");
      if (qdelta) {
        qdelta.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToCard]);

  const handlePrev = useCallback(() => {
    if (currentIndexRef.current > 0) {
      scrollToCard(currentIndexRef.current - 1);
    }
  }, [scrollToCard]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Mouse 3D tilt tracking on active card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Touch handlers with both swipe and tap-to-advance support
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const diffX = touchStartRef.current.x - touch.clientX;
    const diffY = touchStartRef.current.y - touch.clientY;
    const elapsed = Date.now() - touchStartRef.current.time;

    // 1. Swipe detection
    if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) handleNext();
      else handlePrev();
    } 
    // 2. Tap detection on side regions
    else if (elapsed < 300 && Math.abs(diffX) < 15 && Math.abs(diffY) < 15) {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const relativeX = touch.clientX - rect.left;
        const ratio = relativeX / rect.width;
        // Tapped left 28% of stage
        if (ratio < 0.28) {
          handlePrev();
        }
        // Tapped right 28% of stage
        else if (ratio > 0.72) {
          handleNext();
        }
      }
    }
    touchStartRef.current = null;
  };

  // Wide distinct card zones across the 720vh pinned track:
  // Card 0: 0.00 .. 0.14
  // Card 1: 0.14 .. 0.28
  // Card 2: 0.28 .. 0.42
  // Card 3: 0.42 .. 0.56
  // Card 4 (5th card: Philosophy): 0.56 .. 0.84 (Huge buffer where Card 5 sits centered alone)
  // Section 3 Slide-over: 0.84 .. 1.00 (desktop) or 0.72 .. 1.00 (mobile)
  const getIndexWithHysteresis = (progress: number, currentIdx: number): number => {
    const isMobileDevice = typeof window !== "undefined" && window.innerWidth <= 768;
    const thresholds = isMobileDevice
      ? [0.15, 0.30, 0.45, 0.60]
      : [0.14, 0.28, 0.42, 0.56];
    const delta = 0.02;

    // Raw zone based on progress
    let rawIndex = 0;
    if (progress >= thresholds[3]) rawIndex = 4;
    else if (progress >= thresholds[2]) rawIndex = 3;
    else if (progress >= thresholds[1]) rawIndex = 2;
    else if (progress >= thresholds[0]) rawIndex = 1;
    else rawIndex = 0;

    // If adjacent, apply hysteresis delta to prevent boundary flicker
    if (Math.abs(rawIndex - currentIdx) === 1) {
      if (rawIndex > currentIdx) {
        // Stepping forward
        if (progress > thresholds[currentIdx] + delta) {
          return currentIdx + 1;
        }
        return currentIdx;
      } else {
        // Stepping backward
        if (progress < thresholds[rawIndex] - delta) {
          return currentIdx - 1;
        }
        return currentIdx;
      }
    }

    return rawIndex;
  };

  // Scroll listener: Drives card index and stage expansion with 60fps physics lerping
  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      wrapper.style.setProperty("--spread", "1");
    }

    let rafId = 0;
    let targetProgress = 0;
    let smoothProgress = 0;
    let targetSpread = 1;
    let currentSpread = 1;
    let running = false;

    let cachedTotalScrollable = 0;
    const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

    const measureContainer = () => {
      if (!container) return;
      const vh = window.innerHeight;
      cachedTotalScrollable = container.offsetHeight - vh;
    };
    measureContainer();

    const updateTargets = () => {
      if (!container || !wrapper) return;
      const rect = container.getBoundingClientRect();
      const mobile = isMobile();

      // 1. Stage expansion spread target (desktop only)
      if (!reduceMotion && !mobile) {
        const vh = window.innerHeight;
        if (rect.top > 0) {
          const start = vh * 0.95;
          const end = 0;
          const spreadProgress = (start - rect.top) / (start - end);
          targetSpread = Math.max(0, Math.min(1, spreadProgress));
        } else {
          targetSpread = 1;
        }
      } else {
        targetSpread = 1;
      }

      // 2. Card progress target (using cached height to avoid layout reflow)
      if (cachedTotalScrollable <= 0) {
        measureContainer();
      }
      if (cachedTotalScrollable > 0) {
        const scrollWithin = -rect.top;
        targetProgress = Math.max(0, Math.min(1, scrollWithin / cachedTotalScrollable));
      }

      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      const mobile = isMobile();
      // Snappier damping on mobile for immediate response to touch flicks
      const kProgress = mobile ? 0.28 : 0.12;
      smoothProgress += (targetProgress - smoothProgress) * kProgress;

      // Smooth spread damping (desktop only)
      if (!reduceMotion && !mobile) {
        const kSpread = 0.14;
        currentSpread += (targetSpread - currentSpread) * kSpread;
        if (wrapper) {
          wrapper.style.setProperty("--spread", currentSpread.toFixed(4));
        }
      }

      // Compute active card index with hysteresis
      const newIndex = getIndexWithHysteresis(smoothProgress, currentIndexRef.current);
      if (newIndex !== currentIndexRef.current) {
        currentIndexRef.current = newIndex;
        setCurrentIndex(newIndex);
        setMouseOffset({ x: 0, y: 0 });
      }

      // Layer Stacking Depth: Section 3 slides over seamlessly
      const stickyEl = stickyWrapperRef.current;
      const exitThreshold = mobile ? 0.72 : 0.84;
      if (stickyEl) {
        if (smoothProgress > exitThreshold) {
          const exitT = (smoothProgress - exitThreshold) / (1 - exitThreshold); // 0 to 1
          const scale = 1 - exitT * 0.05; // 1.0 down to 0.95
          const opacity = 1 - exitT * 0.35; // 1.0 down to 0.65
          stickyEl.style.transform = `scale(${scale.toFixed(4)})`;
          stickyEl.style.opacity = `${opacity.toFixed(4)}`;
          // Skip GPU filter on mobile to preserve 60/120fps
          if (!mobile) {
            stickyEl.style.filter = `brightness(${(1 - exitT * 0.35).toFixed(4)})`;
          }
        } else {
          stickyEl.style.transform = "scale(1)";
          stickyEl.style.opacity = "1";
          stickyEl.style.filter = "none";
        }
      }

      const progressDiff = Math.abs(targetProgress - smoothProgress);
      const spreadDiff = mobile ? 0 : Math.abs(targetSpread - currentSpread);

      if (progressDiff > 0.0004 || spreadDiff > 0.001) {
        rafId = requestAnimationFrame(tick);
      } else {
        smoothProgress = targetProgress;
        currentSpread = targetSpread;
        running = false;
      }
    };

    const handleScroll = () => {
      updateTargets();
    };

    const handleResize = () => {
      measureContainer();
      updateTargets();
    };

    updateTargets();
    smoothProgress = targetProgress;
    currentSpread = targetSpread;
    if (reduceMotion || isMobile()) {
      wrapper.style.setProperty("--spread", "1");
    } else {
      wrapper.style.setProperty("--spread", currentSpread.toFixed(4));
    }
    const initialIndex = getIndexWithHysteresis(smoothProgress, currentIndexRef.current);
    currentIndexRef.current = initialIndex;
    setCurrentIndex(initialIndex);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="about" className={styles.pinSection} ref={containerRef}>
      <div ref={stickyWrapperRef} className={styles.stickyWrapper}>
        <div className={styles.aboutSection}>
          {/* Section Header */}
          <div className={styles.header}>
            <ScrollReveal delay={0.05} direction="up" distance={20}>
              <div className={styles.sectionBadge}>
                <Sparkles size={13} className={styles.badgeIcon} />
                <span>ABOUT ME</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="up" distance={25}>
              <h2 className={styles.title}>
                Turning ideas into digital products{" "}
                <span className={styles.titleGradient}>— crafted with precision.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="up" distance={25}>
              <p className={styles.subtitle}>
                Explore my background, full-stack architecture, shipped products, AI workflows, and design philosophy.
              </p>
            </ScrollReveal>
          </div>

          {/* 3D Carousel Stage */}
          <ScrollReveal delay={0.2} scale={0.96} duration={0.9} distance={0}>
            <div
              ref={wrapperRef}
              className={styles.carouselWrapper}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Full-height side click hitboxes guaranteeing every pixel on left & right works */}
              <button
                type="button"
                className={styles.leftHitbox}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous card"
                title="Previous card"
              />

              <button
                type="button"
                className={styles.rightHitbox}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next card"
                title="Next card"
              />

              <div className={styles.carouselStage}>
                {CARDS.map((card, index) => {
                  // Linear offset: index 0 is first, index 4 is last
                  const offset = index - currentIndex;

                  const isActive = offset === 0;
                  const isVisible = Math.abs(offset) <= 1;

                  // 3D Tilt calculation for active slide
                  const tiltRotateX = isActive ? -mouseOffset.y * 12 : 0;
                  const tiltRotateY = isActive
                    ? mouseOffset.x * 12
                    : offset > 0
                    ? -12
                    : 12;

                  // Parallax image translation
                  const imgTranslateX = isActive ? mouseOffset.x * -20 : 0;
                  const imgTranslateY = isActive ? mouseOffset.y * -20 : 0;

                  const tiltTransform =
                    isActive && isHovered
                      ? `translateX(0) scale(1.02) translateZ(0px) rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`
                      : undefined;

                  return (
                    <div
                      key={card.id}
                      className={`${styles.cardSlide} ${
                        isActive ? styles.activeSlide : styles.sideSlide
                      } ${!isVisible ? styles.hiddenSlide : ""}`}
                      role={!isActive ? "button" : undefined}
                      tabIndex={!isActive ? 0 : undefined}
                      aria-label={!isActive ? `Switch to ${card.heading}` : undefined}
                      data-offset={offset}
                      data-card-id={card.id}
                      style={{
                        transform: tiltTransform,
                        zIndex: isActive ? 20 : 10 - Math.abs(offset),
                        opacity: isActive ? 1 : isVisible ? undefined : 0,
                        pointerEvents: isVisible ? "auto" : "none",
                      }}
                      onClick={() => {
                        if (!isActive) {
                          scrollToCard(index);
                          setMouseOffset({ x: 0, y: 0 });
                        }
                      }}
                      onKeyDown={(e) => {
                        if (!isActive && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          scrollToCard(index);
                          setMouseOffset({ x: 0, y: 0 });
                        }
                      }}
                      onMouseMove={isActive ? handleMouseMove : undefined}
                      onMouseEnter={isActive ? handleMouseEnter : undefined}
                      onMouseLeave={isActive ? handleMouseLeave : undefined}
                    >
                      {/* Background Image with parallax translation */}
                      <div className={styles.imageContainer}>
                        <img
                          src={card.src}
                          alt={card.heading}
                          className={styles.cardImage}
                          style={{
                            transform: `scale(1.02) translate3d(${imgTranslateX}px, ${imgTranslateY}px, 0)`,
                            objectPosition: card.objectPosition || "center center",
                          }}
                        />
                        <div className={styles.imageOverlay} />
                        <div className={styles.glassReflection} />
                      </div>

                      {/* Card Top Tag */}
                      <div className={styles.cardTopBar}>
                        <span className={styles.cardTag}>
                          {card.tagIcon}
                          {card.tag}
                        </span>
                      </div>

                      {/* Card Main Body Content */}
                      <div className={styles.cardContent}>
                        <div className={styles.headingGroup}>
                          <h3 className={styles.cardTitle}>{card.heading}</h3>
                          {card.lead && <p className={styles.cardLead}>{card.lead}</p>}
                        </div>

                        <p className={styles.cardBodyText}>{card.body}</p>

                        {/* Optional Mini Product List for Card 3 */}
                        {card.bulletItems && (
                          <div className={styles.bulletList}>
                            {card.bulletItems.map((item, i) => (
                              <div key={i} className={styles.bulletItem}>
                                <div className={styles.bulletHeader}>
                                  <span className={styles.bulletTag}>{item.tag}</span>
                                  <span className={styles.bulletName}>
                                    {item.name}
                                    {item.icon}
                                  </span>
                                </div>
                                <p className={styles.bulletDesc}>{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Pills Grid */}
                        {!card.bulletItems && (
                          <div className={styles.pillsGrid}>
                            {card.pills.map((pill, i) => (
                              <span key={i} className={styles.pillBadge}>
                                {pill.icon}
                                <span>{pill.label}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer Status Note */}
                      <div className={styles.cardFooterBar}>
                        <span className={styles.footerNote}>{card.footerNote}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
