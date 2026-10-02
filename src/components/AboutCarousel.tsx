"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
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
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
    setMouseOffset({ x: 0, y: 0 });
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    setMouseOffset({ x: 0, y: 0 });
  }, []);

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
        // Tapped left 25% of stage
        if (ratio < 0.28) {
          handlePrev();
        }
        // Tapped right 25% of stage
        else if (ratio > 0.72) {
          handleNext();
        }
      }
    }
    touchStartRef.current = null;
  };

  // Scroll-driven horizontal expansion of stage & cards from center outwards
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      wrapper.style.setProperty("--spread", "1");
      return;
    }

    let rafId = 0;
    let currentSpread = 0;
    let targetSpread = 0;
    let running = false;
    let scrollTimer: ReturnType<typeof setTimeout>;

    const calculateTarget = () => {
      if (!wrapper) return 1;
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;

      // Start expanding as carousel enters viewport (vh * 0.95)
      // Fully expanded when carousel is centered/prominent in view (vh * 0.35)
      const start = vh * 0.95;
      const end = vh * 0.35;
      const progress = (start - rect.top) / (start - end);
      return Math.max(0, Math.min(1, progress));
    };

    const tick = () => {
      const k = 0.12;
      currentSpread += (targetSpread - currentSpread) * k;

      if (Math.abs(targetSpread - currentSpread) < 0.001) {
        currentSpread = targetSpread;
        running = false;
      }

      wrapper.style.setProperty("--spread", currentSpread.toFixed(4));

      if (running) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      wrapper.setAttribute("data-scrolling", "true");
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        wrapper.removeAttribute("data-scrolling");
      }, 120);

      targetSpread = calculateTarget();
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    // Initial check on mount
    targetSpread = calculateTarget();
    currentSpread = targetSpread;
    wrapper.style.setProperty("--spread", currentSpread.toFixed(4));

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(scrollTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={containerRef}>
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
            Turning ideas into digital products <span className={styles.titleGradient}>— crafted with precision.</span>
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
            // Calculate relative offset from currentIndex with wrap-around
            let offset = index - currentIndex;
            const total = CARDS.length;

            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

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

            const tiltTransform = isActive && isHovered
              ? `translateX(0) scale(1.02) translateZ(0px) rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`
              : undefined;

            return (
              <div
                key={card.id}
                className={`${styles.cardSlide} ${isActive ? styles.activeSlide : styles.sideSlide} ${
                  !isVisible ? styles.hiddenSlide : ""
                }`}
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
                    setCurrentIndex(index);
                    setMouseOffset({ x: 0, y: 0 });
                  }
                }}
                onKeyDown={(e) => {
                  if (!isActive && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    setCurrentIndex(index);
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

      {/* Navigation Controls Below */}
      <div className={styles.controlsRow}>
        <button
          type="button"
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Slide Indicator Dots */}
        <div className={styles.indicators}>
          {CARDS.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
              onClick={() => {
                setCurrentIndex(idx);
                setMouseOffset({ x: 0, y: 0 });
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
