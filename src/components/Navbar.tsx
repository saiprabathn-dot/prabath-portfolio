"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import FoldText from "./FoldText";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "qdelta", label: "QDelta", href: "#qdelta" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "qdelta", "projects", "skills", "experience", "contact"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if user has scrolled near bottom of page (Contact)
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isNearBottom) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const topDoc = window.scrollY + rect.top;
          if (window.scrollY >= topDoc - 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    closeMenu();

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const targetEl = document.getElementById(id);
    if (!targetEl) return;

    if (id === "about" || id === "qdelta") {
      const rect = targetEl.getBoundingClientRect();
      const topDoc = window.scrollY + rect.top;
      window.scrollTo({ top: topDoc, behavior: "smooth" });
    } else {
      const navOffset = 80;
      const rect = targetEl.getBoundingClientRect();
      const topDoc = window.scrollY + rect.top - navOffset;
      window.scrollTo({ top: topDoc, behavior: "smooth" });
    }

    setActiveSection(id);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Clean White NSP Logo with FoldText and Micro-Avatar */}
        <a
          href="#home"
          className={styles.brand}
          onClick={(e) => handleNavClick(e, "#home", "home")}
          aria-label="NSP Home"
        >
          <div className={styles.brandAvatar}>
            <img
              src="/prabath-avatar.jpg"
              alt="Sai Prabath"
              className={styles.brandAvatarImg}
            />
          </div>
          <FoldText
            text="NSP"
            trigger="hover"
            splitBy="char"
            hinge="top"
            duration={0.45}
            stagger={0.04}
            fontSize="1.12rem"
            fontWeight={700}
            color="inherit"
            style={{ letterSpacing: "0.08em" }}
          />
        </a>

        {/* Desktop Navigation Links with FoldText on hover & Active Section indicator */}
        <nav>
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <FoldText
                      text={item.label}
                      trigger="hover"
                      splitBy="char"
                      hinge="top"
                      duration={0.42}
                      stagger={0.03}
                      fontSize="0.88rem"
                      fontWeight={isActive ? 600 : 500}
                      color="inherit"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions & Buttons */}
        <div className={styles.actions}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={17} />
            <FoldText
              text="GitHub"
              trigger="hover"
              splitBy="char"
              hinge="top"
              duration={0.42}
              stagger={0.03}
              fontSize="0.86rem"
              fontWeight={500}
              color="inherit"
            />
          </a>

          <a
            href="#contact"
            className={styles.connectButton}
            onClick={(e) => handleNavClick(e, "#contact", "contact")}
            aria-label="Let's Connect"
          >
            <FoldText
              text="Let's Connect"
              trigger="hover"
              splitBy="char"
              hinge="top"
              duration={0.42}
              stagger={0.025}
              fontSize="0.84rem"
              fontWeight={600}
              color="inherit"
            />
            <ArrowUpRight size={14} className={styles.connectArrow} />
          </a>

          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.active : ""}`}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
              >
                <FoldText
                  text={item.label}
                  trigger="hover"
                  splitBy="char"
                  hinge="top"
                  duration={0.45}
                  stagger={0.035}
                  fontSize="0.95rem"
                  fontWeight={isActive ? 600 : 500}
                  color="inherit"
                />
              </a>
            );
          })}
          <a
            href="https://github.com/Prabathsai1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileGithubBtn}
            onClick={closeMenu}
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="#contact"
            className={styles.mobileConnectBtn}
            onClick={(e) => handleNavClick(e, "#contact", "contact")}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
