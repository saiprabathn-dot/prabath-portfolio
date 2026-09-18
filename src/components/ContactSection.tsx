"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Send,
  Sparkles,
  Check,
  Copy,
  Mail,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import styles from "./ContactSection.module.css";

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "AI & Autonomous Agents",
  "Product Architecture",
  "MVP & Startup Build",
  "Advisory / Consulting",
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("Full-Stack Web App");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailAddress = "saiprabath.n@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 4500);
    }, 850);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Availability HUD */}
      <div className={styles.topHud}>
        <div className={styles.statusBadge}>
          <span className={styles.pulseDot} />
          <span>AVAILABLE FOR SELECTIVE PROJECTS &amp; VENTURES</span>
        </div>
      </div>

      {/* Heroic Statement & Direct Touch */}
      <div className={styles.heroBlock}>
        <h2 className={styles.headline}>
          Have an ambitious project? <br />
          <span className={styles.headlineGradient}>Let&apos;s build together.</span>
        </h2>
        <p className={styles.subtext}>
          Open for full-stack product engineering, distributed architectures, and autonomous AI integrations.
        </p>

        {/* Boxless Giant Interactive Email Trigger */}
        <div className={styles.emailWrapper}>
          <button
            type="button"
            className={styles.emailButton}
            onClick={handleCopyEmail}
            aria-label="Click to copy email address"
          >
            <span className={styles.emailAddress}>{emailAddress}</span>
            <span className={`${styles.copyPill} ${copied ? styles.copiedPill : ""}`}>
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? "Copied!" : "Click to copy"}</span>
            </span>
          </button>

          <a
            href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20NSP`}
            className={styles.directMailLink}
            aria-label="Open default email client"
          >
            <Mail size={15} />
            <span>Open in Mail</span>
            <ArrowUpRight size={14} className={styles.arrowIcon} />
          </a>
        </div>
      </div>

      {/* Boxless Frameless Project Inquirer */}
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <span className={styles.formTag}>START A CONVERSATION</span>
          <h3 className={styles.formTitle}>Or drop a quick message</h3>
        </div>

        <form onSubmit={handleSubmit} className={styles.framelessForm}>
          {/* Project Type Filter Capsules */}
          <div className={styles.fieldBlock}>
            <label className={styles.inputLabel}>PROJECT SCOPE</label>
            <div className={styles.typePills}>
              {PROJECT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`${styles.typePill} ${
                    selectedType === type ? styles.activePill : ""
                  }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Frameless Underline Inputs */}
          <div className={styles.twoColInputs}>
            <div className={styles.inputGroup}>
              <label htmlFor="contact-name" className={styles.inputLabel}>
                YOUR NAME
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="What should I call you?"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className={styles.framelessInput}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="contact-email" className={styles.inputLabel}>
                EMAIL ADDRESS
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="Where can I reach you?"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className={styles.framelessInput}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="contact-message" className={styles.inputLabel}>
              PROJECT BRIEF &amp; TIMELINE
            </label>
            <textarea
              id="contact-message"
              required
              rows={3}
              placeholder="Tell me about your product vision, goals, or what you'd like to build..."
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className={styles.framelessTextarea}
            />
          </div>

          {/* Action Row */}
          <div className={styles.actionRow}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.sendButton} ${
                isSuccess ? styles.sendSuccess : ""
              }`}
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Message Sent Successfully!</span>
                </>
              ) : isSubmitting ? (
                <>
                  <span className={styles.spinner} />
                  <span>Dispatching...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={14} />
                </>
              )}
            </button>

            <span className={styles.responseTime}>
              ⚡ Typically responds within 12 hours
            </span>
          </div>
        </form>
      </div>

      {/* Floating Minimal Presence Links (No Box Containers) */}
      <div className={styles.footerPresence}>
        <div className={styles.presenceLinks}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.presenceLink}
          >
            <FaGithub size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={13} className={styles.subArrow} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.presenceLink}
          >
            <FaLinkedin size={15} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} className={styles.subArrow} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.presenceLink}
          >
            <FaXTwitter size={14} />
            <span>Twitter / X</span>
            <ArrowUpRight size={13} className={styles.subArrow} />
          </a>

          <a href="#qdelta" className={styles.presenceLink}>
            <Globe size={15} />
            <span>QDelta Studio</span>
            <ArrowUpRight size={13} className={styles.subArrow} />
          </a>
        </div>

        <div className={styles.locationMeta}>
          <span>Hyderabad / Remote Worldwide</span>
          <span className={styles.metaDot}>·</span>
          <span>IST (UTC+5:30)</span>
        </div>
      </div>
    </section>
  );
}
