"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import FoldText from "./FoldText";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "QDelta", href: "#qdelta" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Clean White NSP Logo with FoldText */}
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="NSP Home">
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
        </Link>

        {/* Desktop Navigation Links with FoldText on hover */}
        <nav>
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  <FoldText
                    text={item.label}
                    trigger="hover"
                    splitBy="char"
                    hinge="top"
                    duration={0.42}
                    stagger={0.03}
                    fontSize="0.88rem"
                    fontWeight={500}
                    color="inherit"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions & GitHub Button */}
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
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              <FoldText
                text={item.label}
                trigger="hover"
                splitBy="char"
                hinge="top"
                duration={0.45}
                stagger={0.035}
                fontSize="0.95rem"
                fontWeight={500}
                color="inherit"
              />
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileGithubBtn}
            onClick={closeMenu}
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
}
