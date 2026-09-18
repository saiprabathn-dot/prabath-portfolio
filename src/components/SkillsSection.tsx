"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGreensock,
  SiVite,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiSwagger,
  SiSupabase,
  SiDocker,
  SiGit,
  SiResend,
  SiAnthropic,
  SiGooglegemini,
  SiOllama,
} from "react-icons/si";
import { FaAws, FaRobot } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  Sparkles,
  Terminal,
  Zap,
  Workflow,
  Server,
  Cpu,
  Database,
  Globe,
  Layers,
  Code2,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import styles from "./SkillsSection.module.css";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "data" | "cloud";
  categoryLabel: string;
  tag?: string;
  icon: React.ReactNode;
}

const ALL_SKILLS: SkillItem[] = [
  // AI & Intelligence
  { name: "Claude 3.7", category: "ai", categoryLabel: "Frontier LLM", tag: "Intelligence", icon: <SiAnthropic size={14} /> },
  { name: "Gemini 2.5", category: "ai", categoryLabel: "Multimodal AI", tag: "Intelligence", icon: <SiGooglegemini size={14} /> },
  { name: "Model Context Protocol", category: "ai", categoryLabel: "Agent Standard", tag: "MCP Protocol", icon: <Workflow size={14} /> },
  { name: "Ollama (Local LLM)", category: "ai", categoryLabel: "Local Inference", tag: "DeepSeek / Llama", icon: <SiOllama size={14} /> },
  { name: "AI Tool Calling", category: "ai", categoryLabel: "Function Exec", tag: "Automation", icon: <Zap size={14} /> },
  { name: "Autonomous Agents", category: "ai", categoryLabel: "Agentic Loops", tag: "Workflows", icon: <FaRobot size={14} /> },
  { name: "OpenAI Codex", category: "ai", categoryLabel: "Code Synthesis", tag: "AI Coding", icon: <RiOpenaiFill size={14} /> },
  { name: "Qwen", category: "ai", categoryLabel: "Open Models", tag: "Inference", icon: <Terminal size={14} /> },

  // Frontend & Interface Craft
  { name: "React 19", category: "frontend", categoryLabel: "Reactive UI", tag: "Frontend", icon: <SiReact size={14} /> },
  { name: "Next.js 15", category: "frontend", categoryLabel: "App Router / SSR", tag: "Frontend Core", icon: <SiNextdotjs size={14} /> },
  { name: "TypeScript", category: "frontend", categoryLabel: "Strict Typing", tag: "Language", icon: <SiTypescript size={14} /> },
  { name: "Tailwind CSS", category: "frontend", categoryLabel: "Design System", tag: "Styling", icon: <SiTailwindcss size={14} /> },
  { name: "GSAP Motion", category: "frontend", categoryLabel: "60fps Kinetics", tag: "Animation", icon: <SiGreensock size={14} /> },
  { name: "Vite", category: "frontend", categoryLabel: "Build Velocity", tag: "Tooling", icon: <SiVite size={14} /> },
  { name: "Responsive UI/UX", category: "frontend", categoryLabel: "Fluid Layouts", tag: "Design", icon: <SiHtml5 size={14} /> },

  // Backend & Distributed Architecture
  { name: "Node.js", category: "backend", categoryLabel: "Runtime Engine", tag: "Backend Core", icon: <SiNodedotjs size={14} /> },
  { name: "Express.js", category: "backend", categoryLabel: "REST Framework", tag: "APIs", icon: <SiExpress size={14} /> },
  { name: "RESTful Architecture", category: "backend", categoryLabel: "API Design", tag: "Architecture", icon: <Server size={14} /> },
  { name: "JWT Authentication", category: "backend", categoryLabel: "Security & Auth", tag: "Security", icon: <SiJsonwebtokens size={14} /> },
  { name: "BullMQ Queues", category: "backend", categoryLabel: "Background Jobs", tag: "Async Ops", icon: <Cpu size={14} /> },
  { name: "RabbitMQ", category: "backend", categoryLabel: "Message Broker", tag: "Messaging", icon: <SiRabbitmq size={14} /> },
  { name: "Swagger / OpenAPI", category: "backend", categoryLabel: "API Specs", tag: "Docs", icon: <SiSwagger size={14} /> },

  // Databases & Cloud Infrastructure
  { name: "Supabase", category: "data", categoryLabel: "PostgreSQL & Auth", tag: "Database", icon: <SiSupabase size={14} /> },
  { name: "PostgreSQL", category: "data", categoryLabel: "Relational DB", tag: "Database", icon: <SiPostgresql size={14} /> },
  { name: "MongoDB Atlas", category: "data", categoryLabel: "NoSQL Engine", tag: "Database", icon: <SiMongodb size={14} /> },
  { name: "Redis", category: "data", categoryLabel: "In-Memory Cache", tag: "Caching & PubSub", icon: <SiRedis size={14} /> },
  { name: "Docker & Compose", category: "cloud", categoryLabel: "Containerization", tag: "DevOps", icon: <SiDocker size={14} /> },
  { name: "AWS S3 & CDN", category: "cloud", categoryLabel: "Object Storage", tag: "Cloud Storage", icon: <FaAws size={14} /> },
  { name: "Git & CI/CD", category: "cloud", categoryLabel: "Version Control", tag: "DevOps", icon: <SiGit size={14} /> },
  { name: "Resend & ImageKit", category: "cloud", categoryLabel: "Media & Email", tag: "SaaS APIs", icon: <SiResend size={14} /> },
];

// Layer 1 (Inner Core — 4 nodes)
const ORBIT_1 = [
  { name: "Next.js 15", category: "frontend", icon: <SiNextdotjs size={13} /> },
  { name: "Claude 3.7", category: "ai", icon: <SiAnthropic size={13} /> },
  { name: "Node.js", category: "backend", icon: <SiNodedotjs size={13} /> },
  { name: "Supabase", category: "data", icon: <SiSupabase size={13} /> },
];

// Layer 2 (Mid-Inner — 6 nodes)
const ORBIT_2 = [
  { name: "TypeScript", category: "frontend", icon: <SiTypescript size={13} /> },
  { name: "Gemini 2.5", category: "ai", icon: <SiGooglegemini size={13} /> },
  { name: "Express.js", category: "backend", icon: <SiExpress size={13} /> },
  { name: "PostgreSQL", category: "data", icon: <SiPostgresql size={13} /> },
  { name: "Docker", category: "cloud", icon: <SiDocker size={13} /> },
  { name: "MCP Protocol", category: "ai", icon: <Workflow size={13} /> },
];

// Layer 3 (Mid-Outer — 7 nodes)
const ORBIT_3 = [
  { name: "React 19", category: "frontend", icon: <SiReact size={13} /> },
  { name: "OpenAI Codex", category: "ai", icon: <RiOpenaiFill size={13} /> },
  { name: "Redis", category: "data", icon: <SiRedis size={13} /> },
  { name: "BullMQ Queues", category: "backend", icon: <Cpu size={13} /> },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss size={13} /> },
  { name: "MongoDB Atlas", category: "data", icon: <SiMongodb size={13} /> },
  { name: "RabbitMQ", category: "backend", icon: <SiRabbitmq size={13} /> },
];

// Layer 4 (Outer Frontier — 8 nodes)
const ORBIT_4 = [
  { name: "Autonomous Agents", category: "ai", icon: <FaRobot size={13} /> },
  { name: "Ollama (Local LLM)", category: "ai", icon: <SiOllama size={13} /> },
  { name: "AWS S3 & CDN", category: "cloud", icon: <FaAws size={13} /> },
  { name: "GSAP Kinetics", category: "frontend", icon: <SiGreensock size={13} /> },
  { name: "Git & CI/CD", category: "cloud", icon: <SiGit size={13} /> },
  { name: "Vite Velocity", category: "frontend", icon: <SiVite size={13} /> },
  { name: "Swagger / OpenAPI", category: "backend", icon: <SiSwagger size={13} /> },
  { name: "Resend & Email", category: "cloud", icon: <SiResend size={13} /> },
];

// Stream 1 (Frontend & Core Language)
const STREAM_1 = ALL_SKILLS.filter((s) => s.category === "frontend" || s.name === "TypeScript");

// Stream 2 (AI, Autonomous Agents & Workflows)
const STREAM_2 = ALL_SKILLS.filter((s) => s.category === "ai");

// Stream 3 (Backend, Databases, Queues & Cloud)
const STREAM_3 = ALL_SKILLS.filter(
  (s) => s.category === "backend" || s.category === "data" || s.category === "cloud"
);

export default function SkillsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const orbitRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    let active = true;

    const animate = () => {
      if (!active) return;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.09;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.09;

      setMousePos({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      active = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // Orbit-scoped mouse parallax tilt (only tilts when hovering the orbit stage itself)
  const handleOrbitMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbitRef.current) return;
    const rect = orbitRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    targetPos.current = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };
  };

  const handleOrbitMouseLeave = () => {
    targetPos.current = { x: 0, y: 0 };
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Section Header */}
      <div className={styles.header}>
        <ScrollReveal delay={0.05} direction="up" distance={18}>
          <div className={styles.sectionBadge}>
            <Sparkles size={13} className={styles.badgeIcon} />
            <span>TECH ARSENAL &amp; CAPABILITIES</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="up" distance={22}>
          <h2 className={styles.title}>
            Engineered with <span className={styles.titleGradient}>Frontier Tools</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25} direction="up" distance={22}>
          <p className={styles.subtitle}>
            A curated ecosystem of distributed architectures, high-craft reactive frontends, and autonomous AI systems.
          </p>
        </ScrollReveal>
      </div>

      {/* Central Kinetic Orbital Solar System (4 Layers) */}
      <div
        ref={orbitRef}
        className={styles.orbitWrapper}
        onMouseMove={handleOrbitMouseMove}
        onMouseLeave={handleOrbitMouseLeave}
        style={{
          transform: `perspective(1100px) rotateX(${mousePos.y * -20}deg) rotateY(${mousePos.x * 24}deg) translateX(${mousePos.x * 20}px) translateY(${mousePos.y * 16}px)`,
        }}
      >
        {/* Central Core Hub */}
        <div className={styles.coreHub}>
          <div className={styles.corePulseRing} />
          <div className={styles.corePulseRing2} />
          <div className={styles.coreBadge}>
            <span className={styles.coreLogo}>NSP</span>
            <span className={styles.coreSub}>AI &amp; Full-Stack</span>
          </div>
        </div>

        {/* Orbit Track 1 (Inner Core — CW) */}
        <div className={`${styles.orbitRing} ${styles.orbitRing1}`}>
          {ORBIT_1.map((node, i) => {
            const angle = (360 / ORBIT_1.length) * i;
            return (
              <div
                key={node.name}
                className={styles.orbitNode}
                style={{ "--node-angle": `${angle}deg` } as React.CSSProperties}
              >
                <div className={styles.nodePill}>
                  {node.icon}
                  <span className={styles.nodeText}>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit Track 2 (Mid-Inner — CCW) */}
        <div className={`${styles.orbitRing} ${styles.orbitRing2}`}>
          {ORBIT_2.map((node, i) => {
            const angle = (360 / ORBIT_2.length) * i;
            return (
              <div
                key={node.name}
                className={styles.orbitNode}
                style={{ "--node-angle": `${angle}deg` } as React.CSSProperties}
              >
                <div className={styles.nodePill}>
                  {node.icon}
                  <span className={styles.nodeText}>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit Track 3 (Mid-Outer — CW) */}
        <div className={`${styles.orbitRing} ${styles.orbitRing3}`}>
          {ORBIT_3.map((node, i) => {
            const angle = (360 / ORBIT_3.length) * i;
            return (
              <div
                key={node.name}
                className={styles.orbitNode}
                style={{ "--node-angle": `${angle}deg` } as React.CSSProperties}
              >
                <div className={styles.nodePill}>
                  {node.icon}
                  <span className={styles.nodeText}>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit Track 4 (Outer Frontier — CCW) */}
        <div className={`${styles.orbitRing} ${styles.orbitRing4}`}>
          {ORBIT_4.map((node, i) => {
            const angle = (360 / ORBIT_4.length) * i;
            return (
              <div
                key={node.name}
                className={styles.orbitNode}
                style={{ "--node-angle": `${angle}deg` } as React.CSSProperties}
              >
                <div className={styles.nodePill}>
                  {node.icon}
                  <span className={styles.nodeText}>{node.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kinetic Infinite Fluid Streams (Boxless, flowing bidirectional ribbons) */}
      <div className={styles.streamsContainer}>
        {/* Stream 1: Frontend & Interface Velocity */}
        <div className={styles.streamTrack}>
          <div className={`${styles.streamRibbon} ${styles.scrollLeft}`}>
            {[...STREAM_1, ...STREAM_1, ...STREAM_1].map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className={styles.streamItem}
              >
                <span className={styles.streamIcon}>{skill.icon}</span>
                <span className={styles.streamName}>{skill.name}</span>
                <span className={styles.streamTag}>{skill.categoryLabel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stream 2: AI & Agentic Systems (Opposite Direction) */}
        <div className={styles.streamTrack}>
          <div className={`${styles.streamRibbon} ${styles.scrollRight}`}>
            {[...STREAM_2, ...STREAM_2, ...STREAM_2].map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className={`${styles.streamItem} ${styles.streamHighlightAI}`}
              >
                <span className={styles.streamIcon}>{skill.icon}</span>
                <span className={styles.streamName}>{skill.name}</span>
                <span className={styles.streamTag}>{skill.categoryLabel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stream 3: Distributed Backend, Queues & Cloud */}
        <div className={styles.streamTrack}>
          <div className={`${styles.streamRibbon} ${styles.scrollLeft}`}>
            {[...STREAM_3, ...STREAM_3, ...STREAM_3].map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className={styles.streamItem}
              >
                <span className={styles.streamIcon}>{skill.icon}</span>
                <span className={styles.streamName}>{skill.name}</span>
                <span className={styles.streamTag}>{skill.categoryLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
