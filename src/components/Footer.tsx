"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import styles from "./Footer.module.css";

function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function MailIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ScrollReveal delay={0.05} direction="up" distance={15}>
        <div className={styles.container}>
          {/* Clean Single Row */}
          <div className={styles.mainRow}>
            {/* Brand */}
            <Link href="/" className={styles.brand} aria-label="NSP Home">
              <span className={styles.brandLogoText}>NSP</span>
            </Link>

            {/* Minimalist Horizontal Navigation Links */}
            <ul className={styles.navLinks}>
              <li>
                <Link href="/" className={styles.navLink}>Home</Link>
              </li>
              <li>
                <a href="#about" className={styles.navLink}>About</a>
              </li>
              <li>
                <a href="#projects" className={styles.navLink}>Projects</a>
              </li>
              <li>
                <a href="#qdelta" className={styles.navLink}>QDelta</a>
              </li>
              <li>
                <a href="#skills" className={styles.navLink}>Skills</a>
              </li>
              <li>
                <a href="#experience" className={styles.navLink}>Experience</a>
              </li>
              <li>
                <a href="#contact" className={styles.navLink}>Contact</a>
              </li>
            </ul>

            {/* Minimalist Social Links */}
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/Prabathsai1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-prabath-nagireddy/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Twitter / X Profile"
              >
                <TwitterIcon size={17} />
              </a>
              <a
                href="mailto:saiprabathn@gmail.com"
                className={styles.socialIcon}
                aria-label="Send Email"
              >
                <MailIcon size={17} />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
