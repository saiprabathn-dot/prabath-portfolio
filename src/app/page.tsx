"use client";

import ScrollExpand from "@/components/ScrollExpand";
import BlurText from "@/components/BlurText";
import About from "@/components/About";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* ScrollExpand Hero Section with BlurText */}
      <section id="home" style={{ width: "100%", position: "relative" }}>
        <ScrollExpand
          src="/hero.jpg"
          alt="Sai Prabath"
          title={
            <BlurText
              text="Sai Prabath"
              delay={150}
              animateBy="letters"
              direction="top"
              style={{
                fontSize: "inherit",
                fontWeight: "inherit",
                letterSpacing: "inherit",
                color: "inherit",
              }}
            />
          }
          backdropText="PRABATH"
          scrollHint="Scroll to expand ↓"
          useWindowScroll={true}
          startWidth={48}
          startHeight={36}
          startRadius={20}
          endRadius={0}
          mediaZoom={2.4}
          scrollDistance={1.3}
          holdDistance={0.4}
          overlayScrim={0.65}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "860px",
              margin: "0 auto",
              textAlign: "center",
              gap: "1.25rem",
              padding: "0 1rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.35rem 0.9rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                fontSize: "0.82rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#a1a1aa",
                backdropFilter: "blur(12px)",
              }}
            >
              <span>Full-Stack Developer & Architect</span>
            </div>

            <BlurText
              text="I design, build, and architect modern web systems."
              delay={100}
              animateBy="words"
              direction="top"
              style={{
                fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                color: "#f4f4f5",
                textShadow: "0 4px 30px rgba(0, 0, 0, 0.9)",
              }}
            />

            <p
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.08rem)",
                color: "#a1a1aa",
                maxWidth: "600px",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              Building scalable web systems, clean architectures, and fluid
              <br />
              digital experiences.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "0.75rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.6rem",
                  borderRadius: "9999px",
                  background: "#e4e4e7",
                  color: "#09090b",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                }}
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.6rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#d4d4d8",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  backdropFilter: "blur(12px)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </ScrollExpand>
      </section>

      {/* About Section */}
      <About />

      {/* Target Section Anchors for Navigation Links */}
      <section id="projects" style={{ minHeight: "40vh", padding: "4rem 0" }} />
      <section id="qdelta" style={{ minHeight: "40vh", padding: "4rem 0" }} />
      <section id="skills" style={{ minHeight: "40vh", padding: "4rem 0" }} />
      <section id="contact" style={{ minHeight: "40vh", padding: "4rem 0" }} />
    </div>
  );
}
