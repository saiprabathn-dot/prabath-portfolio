"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ExternalLink,
  Star,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Bot,
  Database,
  Music,
  CreditCard,
  Compass,
  Zap,
  Globe,
  X,
  Plus,
  Code2,
  CheckCircle2,
  Workflow,
  Sparkles,
  Server,
  Radio,
  FileText,
} from "lucide-react";
import styles from "./ProjectsSection.module.css";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface ArchitectureNode {
  title: string;
  role: string;
  badge: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "all" | "flagship" | "ai" | "enterprise";
  categoryLabel: string;
  type: string;
  status: string;
  role: string;
  isHero?: boolean;
  accentColor: string;
  gradientBg: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  stats?: { label: string; value: string }[];
  architecture: {
    label: string;
    flow: ArchitectureNode[];
    description: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "qdelta-crm",
    title: "QDelta CRM",
    tagline: "Internal CRM built for a real agency.",
    category: "flagship",
    categoryLabel: "Flagship SaaS",
    type: "Business SaaS / Internal Tool",
    status: "Production-ready for QDelta launch",
    role: "Co-founder, Product Designer, Full-Stack Developer",
    isHero: true,
    accentColor: "#eab308",
    gradientBg: "radial-gradient(ellipse at top left, #291e0a 0%, #161208 50%, #09090b 100%)",
    stats: [
      { label: "Core Modules", value: "07" },
      { label: "Architecture", value: "REST / RBAC" },
      { label: "Operations", value: "100% Centralized" },
    ],
    problem:
      "Agency operations become difficult when client data, tasks, invoices, leads, and projects are scattered across separate spreadsheets and chats.",
    solution:
      "A centralized CRM built from scratch for QDelta to streamline client management, invoices, project tracking, tasks, and team workflows.",
    features: [
      "Client Management & Pipeline Tracking",
      "Project Milestones & Deliverables",
      "Lead Capture & Scoring System",
      "Interactive Analytics & Revenue Charts",
      "Real-Time Task Management & Kanban",
      "Team Roles, Permissions & Workflows",
      "Automated PDF Invoicing Engine",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "REST API"],
    architecture: {
      label: "QDelta CRM Modular Architecture",
      description:
        "Client SPA communicates via secure JWT session headers with the Express API Gateway, which coordinates role permissions, workflow pipelines, and MongoDB transactional records.",
      flow: [
        {
          title: "React SPA Client",
          role: "Tailwind UI & Kanban",
          badge: "Frontend",
          icon: <Code2 size={16} />,
        },
        {
          title: "Express Gateway",
          role: "JWT Auth & RBAC Logic",
          badge: "API Layer",
          icon: <Server size={16} />,
        },
        {
          title: "MongoDB Cluster",
          role: "Clients, Leads & Invoices",
          badge: "Database",
          icon: <Database size={16} />,
        },
        {
          title: "Worker Services",
          role: "PDF Invoicing & Alerts",
          badge: "Services",
          icon: <Cpu size={16} />,
        },
      ],
    },
    demoUrl: "https://qdelta.agency",
    githubUrl: "https://github.com",
  },
  {
    id: "web-tool-finder",
    title: "Web Tool Finder (WTF)",
    tagline: "Discover the right development tool in seconds.",
    category: "enterprise",
    categoryLabel: "Developer Platform",
    type: "Curated Directory / Search Engine",
    status: "Active Public Product",
    role: "Creator & Full-Stack Developer",
    accentColor: "#06b6d4",
    gradientBg: "radial-gradient(ellipse at top left, #082832 0%, #071820 50%, #09090b 100%)",
    problem:
      "Developers waste time searching across multiple websites, bookmarks, and threads to find essential frontend, backend, AI, and productivity tools.",
    solution:
      "A centralized developer tool discovery platform with instant fuzzy search, categorization, and curated directory rankings.",
    features: [
      "Search Tools (Instant Fuzzy Search)",
      "Categorized Hub (Frontend, Backend, AI)",
      "Curated AI Tools Directory",
      "Productivity Utilities & Formatters",
      "Community Submissions & Voting",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Search Engine", "Tailwind CSS"],
    architecture: {
      label: "WTF Search & Indexing Engine",
      description:
        "Instant client search queries are indexed with fuzzy ranking against a cached MongoDB catalog for sub-50ms search latency.",
      flow: [
        {
          title: "Next.js Client",
          role: "Fuzzy Search UI",
          badge: "Frontend",
          icon: <Compass size={16} />,
        },
        {
          title: "Search Indexer",
          role: "Query Matching & Tags",
          badge: "Engine",
          icon: <Zap size={16} />,
        },
        {
          title: "MongoDB Store",
          role: "Curated Tool Datasets",
          badge: "Database",
          icon: <Database size={16} />,
        },
      ],
    },
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "qdelta-website",
    title: "QDelta Agency Platform",
    tagline: "The digital home of QDelta showcasing UI craftsmanship & motion.",
    category: "flagship",
    categoryLabel: "Brand Platform",
    type: "Agency Platform / Brand Showcase",
    status: "Live in Production",
    role: "Co-founder & Lead Frontend Architect",
    accentColor: "#a855f7",
    gradientBg: "radial-gradient(ellipse at top left, #231238 0%, #150c22 50%, #09090b 100%)",
    problem:
      "Modern digital agencies require a visual presence that immediately communicates elite engineering competence, brand identity, and motion design.",
    solution:
      "A flagship web experience engineered with GSAP interactions, bespoke typography, responsive layouts, and modern titanium aesthetics.",
    features: [
      "Brand Identity (Colors, Typography, Animations)",
      "Landing Page (Hero, Services, Process, CTA)",
      "GSAP Interactions & Fluid Motion",
      "Responsive Design (Desktop + Mobile)",
      "100% Lighthouse Performance Score",
    ],
    tech: ["React", "Next.js", "GSAP Motion", "CSS Modules", "Tailwind CSS", "Vercel Edge"],
    architecture: {
      label: "QDelta Edge Delivery Pipeline",
      description:
        "Pre-rendered Next.js components combined with hardware-accelerated GSAP animation matrices delivered over Vercel's global edge network.",
      flow: [
        {
          title: "Next.js SSG",
          role: "Pre-rendered Markup",
          badge: "Edge",
          icon: <Globe size={16} />,
        },
        {
          title: "GSAP Engine",
          role: "Hardware-accelerated Motion",
          badge: "Motion",
          icon: <Sparkles size={16} />,
        },
        {
          title: "Vercel CDN",
          role: "Global Low-Latency Edge",
          badge: "Infra",
          icon: <Server size={16} />,
        },
      ],
    },
    demoUrl: "https://qdelta.agency",
    githubUrl: "https://github.com",
  },
  {
    id: "novamind-ai",
    title: "NovaMind AI",
    tagline: "AI-powered chat application using Gemini API.",
    category: "ai",
    categoryLabel: "Generative AI",
    type: "Full-Stack AI Application",
    status: "Completed & Deployed",
    role: "Full-Stack AI Engineer",
    accentColor: "#10b981",
    gradientBg: "radial-gradient(ellipse at top left, #0c2a1e 0%, #081a13 50%, #09090b 100%)",
    problem:
      "Build a seamless conversational AI experience with streaming tokens, chat history persistence, and authenticated user workspaces.",
    solution:
      "A full-stack AI chat application integrating Google Gemini API with real-time token streaming, session isolation, and personalized prompt system templates.",
    features: [
      "Authentication (JWT User Sessions)",
      "Chat History & Conversation Trees",
      "Google Gemini API Token Streaming",
      "Responsive Chat UI & Code Formatting",
      "Custom Persona & System Instructions",
    ],
    tech: ["React", "Express", "MongoDB", "Gemini API", "JWT", "Node.js"],
    architecture: {
      label: "NovaMind AI Streaming Pipeline",
      description:
        "Client sends authenticated prompts to Express, which streams raw chunks from Google Gemini API directly over SSE to the React frontend while recording to MongoDB.",
      flow: [
        {
          title: "React Chat UI",
          role: "Streaming Token Renderer",
          badge: "Frontend",
          icon: <Bot size={16} />,
        },
        {
          title: "Express Gateway",
          role: "Session Auth & Stream Pipeline",
          badge: "Backend",
          icon: <Server size={16} />,
        },
        {
          title: "Google Gemini API",
          role: "LLM Generative Inference",
          badge: "AI Model",
          icon: <Sparkles size={16} />,
        },
        {
          title: "MongoDB Store",
          role: "Chat Sessions & History",
          badge: "Database",
          icon: <Database size={16} />,
        },
      ],
    },
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "mustify",
    title: "Mustify",
    tagline: "Modern music streaming & playlist management experience.",
    category: "enterprise",
    categoryLabel: "Media & Audio",
    type: "Audio Streaming Application",
    status: "Deployed on Render",
    role: "Frontend Engineer & UI Designer",
    accentColor: "#3b82f6",
    gradientBg: "radial-gradient(ellipse at top left, #0e2042 0%, #091328 50%, #09090b 100%)",
    problem:
      "Web music players frequently suffer from abrupt track switching, clunky audio buffering, and unresponsive mobile controls.",
    solution:
      "A responsive music web application with fluid playback queues, volume scrubbing, playlist curation, and seamless album browsing.",
    features: [
      "Music UI (Albums, Playlists, Player)",
      "Browse Songs & Playback Queue",
      "Interactive Audio Waveform Bar",
      "Responsive Desktop & Mobile Controls",
      "Deployed on Render Cloud",
    ],
    tech: ["React", "Web Audio API", "Tailwind CSS", "Node.js", "Render Cloud"],
    architecture: {
      label: "Mustify Audio Playback Architecture",
      description:
        "Web Audio API handles buffer decoding and real-time frequency analysis while React state coordinates persistent multi-track playback.",
      flow: [
        {
          title: "React Music UI",
          role: "Queue & Album Browsing",
          badge: "Client",
          icon: <Music size={16} />,
        },
        {
          title: "Web Audio Controller",
          role: "Buffer & Playback State",
          badge: "Engine",
          icon: <Radio size={16} />,
        },
        {
          title: "Render Server",
          role: "Track Metadata & Stream",
          badge: "Host",
          icon: <Server size={16} />,
        },
      ],
    },
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "payroll-system",
    title: "Payroll Management System",
    tagline: "Automated enterprise payroll computation & employee management.",
    category: "enterprise",
    categoryLabel: "Enterprise Fintech",
    type: "Enterprise Automation Platform",
    status: "Production Ready",
    role: "Full-Stack Developer",
    accentColor: "#f97316",
    gradientBg: "radial-gradient(ellipse at top left, #30170a 0%, #1e1008 50%, #09090b 100%)",
    problem:
      "Manual salary calculation with variable bonuses, deductions, and tax withholdings leads to costly payroll delays and calculation errors.",
    solution:
      "An automated payroll platform that computes accurate net pay, provides role-based admin controls, and generates PDF payslips instantly.",
    features: [
      "Purpose: Payroll Automation",
      "Employees Directory & Management",
      "Automated Payroll & Calculation",
      "Instant PDF Payslips Export",
      "Firebase Role-Based Authentication",
    ],
    tech: ["React", "Firebase Auth", "Node.js", "Express", "Database", "PDF Generator"],
    architecture: {
      label: "Payroll Engine Architecture",
      description:
        "Admin triggers payroll batch; backend computes allowances and tax brackets, records the ledger, and renders secure PDF payslips.",
      flow: [
        {
          title: "Admin Dashboard",
          role: "Employee & Pay Roster",
          badge: "UI",
          icon: <CreditCard size={16} />,
        },
        {
          title: "Calculation Engine",
          role: "Taxes, Bonus & Deductions",
          badge: "Compute",
          icon: <Cpu size={16} />,
        },
        {
          title: "PDF Service",
          role: "Payslip Document Export",
          badge: "Generator",
          icon: <FileText size={16} />,
        },
        {
          title: "Firebase Auth",
          role: "Role Security & Permissions",
          badge: "Security",
          icon: <ShieldCheck size={16} />,
        },
      ],
    },
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  // Scroll-linked horizontal translation animation
  useEffect(() => {
    let animFrame: number;

    const handleScroll = () => {
      const section = sectionRef.current;
      const track = scrollTrackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDistance = rect.height - windowHeight;

      if (totalDistance <= 0) return;

      // Calculate progress from 0 (section enters top) to 1 (section finishes scroll)
      const scrollOffset = -rect.top;
      const rawProgress = scrollOffset / totalDistance;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      // Track total width vs container viewport width
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth + 80);

      const translateX = -progress * maxTranslate;

      animFrame = requestAnimationFrame(() => {
        if (track) {
          track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.categoryBadge}>
            <Layers size={13} />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className={styles.heading}>
            Built with Engineering Rigor{" "}
            <span className={styles.headingAccent}>& Product Craft.</span>
          </h2>

          <p className={styles.subheading}>
            A curated showcase of production applications, developer platforms, AI systems, and internal tools engineered end-to-end.
          </p>
        </div>

        {/* HORIZONTAL SCROLLING MODAL CARDS TRACK (PHOTO 1) */}
        <div className={styles.carouselWrapper}>
          <div ref={scrollTrackRef} className={styles.carouselTrack}>
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className={styles.modalCard}
                onClick={() => setSelectedProject(project)}
                style={{
                  background: project.gradientBg,
                }}
              >
                {/* Top Badge Tag */}
                <div className={styles.cardTopRow}>
                  {project.isHero ? (
                    <span className={styles.heroStarPill}>
                      <Star size={11} fill="#eab308" color="#eab308" />
                      FLAGSHIP
                    </span>
                  ) : (
                    <span className={styles.categoryPill}>{project.categoryLabel}</span>
                  )}
                  <span className={styles.statusPill}>{project.status.split(" ")[0]}</span>
                </div>

                {/* Bottom Overlay with Title & Expand (+) Button */}
                <div className={styles.cardBottomOverlay}>
                  <div className={styles.cardTitleWrap}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardTagline}>{project.tagline}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className={styles.expandPlusBtn}
                    aria-label={`Expand ${project.title}`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXPANDED MODAL VIEW (PHOTO 2) */}
        {selectedProject && (
          <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
            <div
              className={styles.modalCardExpanded}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Hero Image Area with Title & (X) Close Button */}
              <div
                className={styles.modalHeroCover}
                style={{
                  background: selectedProject.gradientBg,
                }}
              >
                {/* Ambient Light Accent */}
                <div
                  className={styles.modalHeroGlow}
                  style={{
                    background: `radial-gradient(circle at 75% 30%, ${selectedProject.accentColor}35 0%, transparent 75%)`,
                  }}
                />

                <div className={styles.modalCoverMeta}>
                  {selectedProject.isHero ? (
                    <span className={styles.heroStarPill}>
                      <Star size={11} fill="#eab308" color="#eab308" />
                      FLAGSHIP PROJECT
                    </span>
                  ) : (
                    <span className={styles.categoryPill}>{selectedProject.categoryLabel}</span>
                  )}
                  <span className={styles.modalTypePill}>{selectedProject.type}</span>
                </div>

                {/* Bottom Row of the Cover Image: Title & (X) Close Button */}
                <div className={styles.modalCoverBottomRow}>
                  <div className={styles.modalCoverTitleWrap}>
                    <h3 className={styles.modalCoverTitle}>{selectedProject.title}</h3>
                    <p className={styles.modalCoverTagline}>{selectedProject.tagline}</p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className={styles.closeXBtn}
                    aria-label="Close project modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Bottom Body Area with Detailed Content & Architecture */}
              <div className={styles.modalBodyContent}>
                {/* Stats Highlights if available */}
                {selectedProject.stats && (
                  <div className={styles.modalStatsGrid}>
                    {selectedProject.stats.map((s) => (
                      <div key={s.label} className={styles.statBox}>
                        <span className={styles.statVal}>{s.value}</span>
                        <span className={styles.statLbl}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem vs. Solution Bento Grid */}
                <div className={styles.storyGrid}>
                  <div className={styles.storyCard}>
                    <h4 className={styles.storyTitle}>// Problem</h4>
                    <p className={styles.storyText}>{selectedProject.problem}</p>
                  </div>
                  <div className={styles.storyCard}>
                    <h4 className={styles.storyTitle}>// Solution</h4>
                    <p className={styles.storyText}>{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Visual System Architecture Diagram */}
                <div className={styles.modalArchSection}>
                  <div className={styles.modalArchHeader}>
                    <div className={styles.archTitleWrap}>
                      <Workflow
                        size={16}
                        style={{ color: selectedProject.accentColor }}
                      />
                      <h4 className={styles.modalArchTitle}>
                        {selectedProject.architecture.label}
                      </h4>
                    </div>
                    <span className={styles.archBadgeMono}>SYSTEM FLOW</span>
                  </div>

                  <p className={styles.modalArchDesc}>
                    {selectedProject.architecture.description}
                  </p>

                  <div className={styles.modalArchFlow}>
                    {selectedProject.architecture.flow.map((node, i) => (
                      <React.Fragment key={node.title}>
                        <div className={styles.modalArchNode}>
                          <div
                            className={styles.nodeIconWrap}
                            style={{ color: selectedProject.accentColor }}
                          >
                            {node.icon}
                          </div>
                          <span className={styles.nodeBadge}>{node.badge}</span>
                          <span className={styles.modalNodeTitle}>{node.title}</span>
                          <span className={styles.modalNodeRole}>{node.role}</span>
                        </div>
                        {i < selectedProject.architecture.flow.length - 1 && (
                          <div className={styles.modalConnector}>
                            <span className={styles.modalConnectorLine} />
                            <ArrowRight size={14} className={styles.modalArrow} />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Features Checklist */}
                <div className={styles.featuresSection}>
                  <h4 className={styles.featuresHeading}>Features & Deliverables</h4>
                  <div className={styles.featuresGrid}>
                    {selectedProject.features.map((feat) => (
                      <div key={feat} className={styles.featureItem}>
                        <CheckCircle2 size={15} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className={styles.modalTechSection}>
                  <h4 className={styles.techHeading}>Technologies & Stack</h4>
                  <div className={styles.modalTechList}>
                    {selectedProject.tech.map((t) => (
                      <span key={t} className={styles.modalTechPill}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className={styles.modalFooter}>
                <span className={styles.roleTag}>Role: {selectedProject.role}</span>
                <div className={styles.modalActionGroup}>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalGithubBtn}
                    >
                      <GithubIcon size={15} />
                      <span>Source</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalPrimaryBtn}
                    >
                      <span>Live Project</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
